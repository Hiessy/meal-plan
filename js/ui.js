/* ============================================================
   UI — draws the planner and handles everything the user does.
   Needs data/recipes.js, data/ingredients.js, js/planner.js,
   js/lists.js, js/i18n.js and js/tooltip.js loaded first.

   Buttons carry data-action="…"; one click handler runs them.
   Other layers can follow along through events on document:
     plan:action   { name, el }   a data-action button was used
     plan:week     { n }          another week tab is showing
     plan:rendered { n, why, k }  week n was redrawn: 'shuffle' | 'reset' | 'swap'
     plan:tick     { checked, complete, pill, el }  a saved checkbox (el) changed;
                                  complete: its list just got fully ticked
     plan:modal    { open }       the recipe sheet opened or closed
     plan:lang     { lang }       the language changed
     plan:config   { excluded, experimental }  the recipe choices changed
     plan:panel    { open }       the recipe-choice panel opened or closed
   js/fx.js turns these into sounds and motion.
   ============================================================ */
(() => {

/* ============================================================
   Saved state — language, tab, price offset, ticks and menu
   swaps survive a reload (localStorage, this browser only)
   ============================================================ */
const STORE_KEY = 'meal-plan';
const OLD_STORE_KEY = 'meal-plan-2026-05';   // the fixed May plan — language and offset carry over

function readStore() {
  try {
    const saved = localStorage.getItem(STORE_KEY) || localStorage.getItem(OLD_STORE_KEY);
    return JSON.parse(saved) || {};
  }
  catch (e) { return {}; }
}
function saveStore() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(store));
    localStorage.removeItem(OLD_STORE_KEY);
  }
  catch (e) { /* private mode / storage full — the page still works */ }
}

const store = Object.assign({ ticks: {}, shopOpen: {}, prepOpen: {}, menus: {} }, readStore());
delete store.hintOff;   // that hint described the old fixed plan

let lang = store.lang ||
  ((navigator.language || '').toLowerCase().startsWith('es') ? 'es' : 'en');
const t = k => i18n[lang][k];

if (typeof store.offset === 'number') {
  priceConfig.globalOffset = Math.max(-0.5, Math.min(2.0, store.offset));
}

const canHover = window.matchMedia('(hover: hover)').matches;
const isPhone  = window.matchMedia('(max-width: 600px)').matches;
const byId = id => document.getElementById(id);
const esc = s => String(s)
  .replace(/&/g, '&amp;').replace(/"/g, '&quot;')
  .replace(/</g, '&lt;').replace(/>/g, '&gt;');
const fmtPct = f => { const p = Math.round(f * 100); return (p >= 0 ? '+' : '') + p + '%'; };
const money = v => priceConfig.currencySymbol + v.toFixed(2);
const emit = (name, detail = {}) => document.dispatchEvent(new CustomEvent('plan:' + name, { detail }));


/* ============================================================
   Dates — the plan always starts with the current week
   (on Saturday and Sunday, with the coming one). Add
   ?date=2026-12-24 to the address to see another date's plan.
   ============================================================ */
const addDays  = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const mondayOf = d => addDays(d, -((d.getDay() + 6) % 7));
const isoDate  = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');

const dateParam = /^(\d{4})-(\d{2})-(\d{2})$/.exec(new URLSearchParams(location.search).get('date') || '');
const today = (() => {
  const d = dateParam ? new Date(+dateParam[1], +dateParam[2] - 1, +dateParam[3]) : new Date();
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
})();
const todayIso    = isoDate(today);
const thisMonday  = mondayOf(today);
const firstMonday = [0, 6].includes(today.getDay()) ? addDays(thisMonday, 7) : thisMonday;

const weeks = [0, 1, 2, 3].map(i => {
  const monday = addDays(firstMonday, 7 * i);
  return { n: i + 1, monday, iso: isoDate(monday), num: Planner.weekNumber(monday),
           rel: Math.round((monday - thisMonday) / 6048e5) };
});

function fmtDay(d) {
  const mon = t('monthsShort')[d.getMonth()];
  return lang === 'es' ? `${d.getDate()} ${mon}` : `${mon} ${d.getDate()}`;
}

// "Oct 12–16" · "Sep 28–Oct 2"  /  "12–16 oct" · "28 sep–2 oct"
function fmtRangeShort(monday) {
  const fri = addDays(monday, 4);
  if (fri.getMonth() === monday.getMonth()) {
    const mon = t('monthsShort')[monday.getMonth()];
    return lang === 'es' ? `${monday.getDate()}–${fri.getDate()} ${mon}` : `${mon} ${monday.getDate()}–${fri.getDate()}`;
  }
  return fmtDay(monday) + '–' + fmtDay(fri);
}

// "October 12–16, 2026"  /  "12–16 de octubre de 2026"
function fmtRangeLong(monday) {
  const fri = addDays(monday, 4), M = t('months'), es = lang === 'es';
  const day = (d, year) => es
    ? `${d.getDate()} de ${M[d.getMonth()]}${year ? ' de ' + d.getFullYear() : ''}`
    : `${M[d.getMonth()]} ${d.getDate()}${year ? ', ' + d.getFullYear() : ''}`;
  if (fri.getFullYear() !== monday.getFullYear()) return day(monday, true) + ' – ' + day(fri, true);
  if (fri.getMonth() !== monday.getMonth()) return day(monday) + ' – ' + day(fri, true);
  return es ? `${monday.getDate()}–${day(fri, true)}`
            : `${M[monday.getMonth()]} ${monday.getDate()}–${fri.getDate()}, ${fri.getFullYear()}`;
}

// The four weeks on screen: "Oct 12 – Nov 6, 2026"
function fmtPlanRange() {
  const first = weeks[0].monday, last = addDays(weeks[3].monday, 4);
  const year = d => (lang === 'es' ? ' ' : ', ') + d.getFullYear();
  return fmtDay(first) + (first.getFullYear() === last.getFullYear() ? '' : year(first)) +
         ' – ' + fmtDay(last) + year(last);
}

/* ============================================================
   Menus — Planner draws them; a shuffle or swap is saved here
   for that week only
   ============================================================ */
const isoOfWeek = num => isoDate(Planner.mondayOfWeek(num));
const savedMenu = iso => Planner.isMenu(store.menus[iso]) ? store.menus[iso] : null;
const menuOf    = num => savedMenu(isoOfWeek(num)) || Planner.baseMenu(num);
const neighbours = num => [menuOf(num - 1), menuOf(num + 1)];
const newSeed   = () => Math.floor(Math.random() * 4294967296);

function weekMeals(w) {
  return menuOf(w.num).map((id, k) => ({ recipe: Planner.recipe(id), di: Math.floor(k / Planner.SLOTS), k }));
}
const mealLabel = m => t('daysShort')[m.di] + ' · ' + t('mealTypes')[m.recipe.type].label;

function shuffleWeek(n) {
  const w = weeks[n - 1];
  store.menus[w.iso] = Planner.shuffleMenu(newSeed(), neighbours(w.num));
  saveStore();
  Tooltip.hide();
  buildWeek(n);
  emit('rendered', { n, why: 'shuffle' });
  showToast(t('toastShuffled'));
}

function resetWeek(n) {
  delete store.menus[weeks[n - 1].iso];
  saveStore();
  Tooltip.hide();
  buildWeek(n);
  emit('rendered', { n, why: 'reset' });
  showToast(t('toastReset'));
}

function swapMeal() {
  if (!modalAt) return;
  const { n, k } = modalAt, w = weeks[n - 1];
  const ids = Planner.swapMeal(menuOf(w.num), k, newSeed(), neighbours(w.num));
  store.menus[w.iso] = ids;
  saveStore();
  buildWeek(n);
  renderModal();
  emit('rendered', { n, why: 'swap', k });
  showToast(t('toastSwapped'));
}

/* ============================================================
   Language
   ============================================================ */
function toggleLang() {
  lang = lang === 'en' ? 'es' : 'en';
  store.lang = lang;
  saveStore();
  applyLang();
}

function applyLang() {
  document.documentElement.lang = lang;
  document.title = t('pageTitle');

  // Static elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (typeof i18n[lang][key] === 'string') el.textContent = i18n[lang][key];
  });

  // Static elements with a tooltip (data-label → icon-only, needs a spoken name too)
  document.querySelectorAll('[data-tip-key]').forEach(el => {
    el.dataset.tip = t(el.dataset.tipKey);
    if ('label' in el.dataset) el.setAttribute('aria-label', el.dataset.tip);
  });

  byId('lang-btn').textContent = t('langBtn');
  byId('header-dates').textContent = t('headerDates')(fmtPlanRange(), Planner.count);

  byId('hint-text').textContent = t(canHover ? 'hintMouse' : 'hintTouch')(Planner.count);
  byId('hint').hidden = !!store.hint2Off;
  buildPlanBar();
  if (draft) renderPanel();

  buildTabs();
  [1,2,3,4].forEach(buildWeek);

  if (modalAt) renderModal();
  Tooltip.refresh();
  emit('lang', { lang });
}

function dismissHint() {
  store.hint2Off = true;
  saveStore();
  Tooltip.hide();
  byId('hint').hidden = true;
}

/* ============================================================
   Navigation
   ============================================================ */
const hashWeek = /^#w([1-4])$/.exec(location.hash);
let currentWeek = hashWeek ? +hashWeek[1] : (store.week >= 1 && store.week <= 4 ? store.week : 1);

function buildTabs() {
  byId('tabs-nav').innerHTML = weeks.map(w => {
    const active = w.n === currentWeek;
    const range = fmtRangeShort(w.monday);
    return `<button type="button" class="tab-btn${active ? ' active' : ''}" aria-current="${active}"
      data-action="week" data-n="${w.n}" data-tip="${esc(t('tipTab')(fmtRangeLong(w.monday)))}">
      <span class="tab-top${range.length > 10 ? ' long' : ''}">${range}</span><span class="tab-sub">${t('relWeek')(w.rel)}</span>
    </button>`;
  }).join('');
}

function showWeek(n, initial) {
  document.querySelectorAll('.week-section').forEach((s, i) => s.classList.toggle('active', i === n - 1));
  document.querySelectorAll('.tab-btn').forEach((b, i) => {
    b.classList.toggle('active', i === n - 1);
    b.setAttribute('aria-current', i === n - 1);
  });
  currentWeek = n;
  if (initial) return;

  store.week = n;
  saveStore();
  try { history.replaceState(history.state, '', '#w' + n); } catch (e) {}

  // The tab bar is sticky — bring the top of the new week back into view
  const top = document.querySelector('header').offsetHeight;
  if (window.scrollY > top) window.scrollTo(0, top);
  emit('week', { n });
}

window.addEventListener('hashchange', () => {
  const m = /^#w([1-4])$/.exec(location.hash);
  if (m && +m[1] !== currentWeek) showWeek(+m[1]);
});

function jumpToday() {
  const el = document.querySelector('.week-section.active .day-col.today');
  if (el) el.scrollIntoView({ block: 'start' });
}

/* ============================================================
   Recipe sheet — previous / next through the week, swap
   ============================================================ */
const modalEl = byId('modal');
let modalAt = null;     // { n, k } — week tab and slot (0–19) in its menu
let lastFocus = null;

function openModal(n, k) {
  const wasOpen = !!modalAt;
  modalAt = { n, k };
  renderModal();
  if (wasOpen) return;

  lastFocus = document.activeElement;
  Tooltip.hide();
  modalEl.classList.add('open');
  document.body.classList.add('modal-open');
  // A history entry lets the phone's Back button close the recipe
  try { history.pushState({ modal: true }, ''); } catch (e) {}
  byId('m-close').focus({ preventScroll: true });
  emit('modal', { open: true });
}

function renderModal() {
  const w = weeks[modalAt.n - 1];
  const meals = weekMeals(w);
  const { recipe: d, di } = meals[modalAt.k];
  const mt = t('mealTypes')[d.type];

  byId('m-name').textContent = d.name[lang];
  byId('m-meta').innerHTML =
    `<span class="meal-badge badge-${d.type}${d.experimental ? ' badge-exp' : ''}">${d.experimental ? BEAKER : mt.icon} ${mt.label}</span>` +
    `<span>${t('days')[di]} · ${fmtDay(addDays(w.monday, di))}</span>` +
    (d.experimental ? `<span class="exp-chip" data-tip="${esc(t('tipExperimental'))}">${BEAKER} ${t('experimental')}</span>` : '');

  const swapBtn = byId('m-swap');
  swapBtn.innerHTML = `<span class="ico">🔄</span> ${t('swap')}`;
  swapBtn.dataset.tip = t('tipSwap')[d.type];

  byId('m-ing').innerHTML = d.ing[lang].map(i =>
    `<li><label class="check"><input type="checkbox"><span>${i}</span></label></li>`).join('');
  byId('m-steps').innerHTML = d.steps[lang].map(s => t('kidTip').test(s)
    ? `<li class="kid-tip">👶 <strong>${t('kidTipLabel')}</strong> ${s.replace(t('kidTip'), '')}</li>`
    : `<li>${s}</li>`).join('');

  const tip = d.tip && d.tip[lang];
  const tipEl = byId('m-tip');
  tipEl.textContent = tip ? '💚 ' + tip : '';
  tipEl.hidden = !tip;

  [['m-prev', -1], ['m-next', 1]].forEach(([id, delta]) => {
    const btn = byId(id);
    const other = meals[modalAt.k + delta];
    btn.disabled = !other;
    if (other) btn.dataset.tip = mealLabel(other) + ': ' + other.recipe.name[lang];
    else delete btn.dataset.tip;
  });
  byId('m-pos').textContent = (modalAt.k + 1) + ' / ' + meals.length;
  byId('m-body').scrollTop = 0;
}

function stepModal(delta) {
  if (!modalAt || modalAt.k + delta < 0 || modalAt.k + delta >= 5 * Planner.SLOTS) return;
  modalAt.k += delta;
  Tooltip.hide();
  renderModal();
}

function closeModal() {
  if (history.state && history.state.modal) history.back();   // → popstate → hideModal
  else hideModal();
}

function hideModal() {
  if (!modalAt) return;
  modalAt = null;
  modalEl.classList.remove('open');
  document.body.classList.remove('modal-open');
  if (lastFocus && lastFocus.isConnected) lastFocus.focus({ preventScroll: true });
  emit('modal', { open: false });
}

window.addEventListener('popstate', hideModal);
modalEl.addEventListener('click', e => { if (e.target === modalEl) closeModal(); });

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    Tooltip.hide();
    if (draft) run('close-panel', byId('p-close'));
    else if (modalAt) run('close', byId('m-close'));
    return;
  }
  if (!modalAt) return;
  if (e.key === 'ArrowLeft' && !byId('m-prev').disabled) run('step', byId('m-prev'));
  else if (e.key === 'ArrowRight' && !byId('m-next').disabled) run('step', byId('m-next'));
  else if (e.key === 'Tab') {
    // Keep keyboard focus inside the open recipe
    const items = [...modalEl.querySelectorAll('button:not(:disabled), input')];
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* ============================================================
   Ticks — prep tasks (p:{monday}:{task}) and shopping rows
   (s:{monday}:{ingredient}) share one saved map
   ============================================================ */
document.addEventListener('change', e => {
  const input = e.target;
  if (!input.dataset) return;
  if (input.dataset.pref === 'experimental') return setExperimental(input.checked);
  if (input.dataset.pick && draft) {
    if (input.checked) draft.delete(input.dataset.pick); else draft.add(input.dataset.pick);
    return updatePanelCounts();
  }
  const key = input.dataset.tick;
  if (!key) return;
  if (input.checked) store.ticks[key] = 1;
  else delete store.ticks[key];
  saveStore();
  const w = weeks.find(x => key.startsWith(key[0] + ':' + x.iso + ':'));
  if (!w) return;
  const done = updateProgress(w.n);
  const list = key[0] === 'p' ? 'prep' : 'shop';
  emit('tick', { checked: input.checked, complete: input.checked && done[list], pill: byId(`${list}-count-${w.n}`), el: input });
});

function setPill(id, done, total) {
  const el = byId(id);
  if (!el) return;
  el.textContent = done === total ? '✓ ' + t('allDone') : done + ' / ' + total;
  el.classList.toggle('done', done === total);
}

// Updates the counters and "still to buy"; → which lists are fully ticked
function updateProgress(n) {
  const { w, rows, tasks } = weekData[n];
  const prepDone = tasks.filter(task => store.ticks[`p:${w.iso}:${task.key}`]).length;
  setPill(`prep-count-${n}`, prepDone, tasks.length);

  let done = 0, left = 0;
  rows.forEach(row => {
    if (store.ticks[`s:${w.iso}:${row.key}`]) done++;
    else left += Lists.price(row, priceConfig.globalOffset) || 0;
  });
  setPill(`shop-count-${n}`, done, rows.length);

  const leftEl = byId(`shop-left-${n}`);
  if (leftEl) {
    leftEl.hidden = done === 0;
    leftEl.querySelector('strong').textContent = '~' + money(left);
  }
  return { prep: prepDone === tasks.length, shop: done === rows.length };
}

/* ============================================================
   Prep & Shopping Toggles
   ============================================================ */
function togglePrep(n) {
  const list = byId(`prep-list-${n}`);
  list.hidden = !list.hidden;
  const toggle = byId(`prep-toggle-${n}`);
  toggle.classList.toggle('open', !list.hidden);
  toggle.setAttribute('aria-expanded', !list.hidden);
  store.prepOpen[n] = !list.hidden;
  saveStore();
}

function toggleShopping(n) {
  const open = byId(`shop-body-${n}`).classList.toggle('open');
  const toggle = byId(`shop-toggle-${n}`);
  toggle.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
  store.shopOpen[n] = open;
  saveStore();
}

/* ============================================================
   Price offset control
   ============================================================ */
function changeOffset(delta) {
  priceConfig.globalOffset = +(
    Math.max(-0.5, Math.min(2.0, priceConfig.globalOffset + delta / 100)).toFixed(2)
  );
  store.offset = priceConfig.globalOffset;
  saveStore();
  document.querySelectorAll('.offset-value').forEach(el => {
    el.textContent = fmtPct(priceConfig.globalOffset);
  });
  // Refresh all shopping lists with new prices
  [1,2,3,4].forEach(n => {
    const el = byId(`shop-list-${n}`);
    if (el) el.innerHTML = buildShopList(n);
    updateProgress(n);
  });
}

/* ============================================================
   Shopping list actions — copy / share / clear
   ============================================================ */
const sortedRows = (rows, cat) => rows.filter(row => row.cat === cat)
  .sort((a, b) => Lists.name(a, lang).localeCompare(Lists.name(b, lang), lang));

function amountText(row) {
  const a = Lists.amount(row, lang);
  return a.text + (a.partial ? ' + ' + t('more') : '');
}

function listText(n) {
  const { w, rows } = weekData[n];
  const shopCats = t('shopCats');
  const lines = [];
  shopCategories.forEach(cat => {
    const left = sortedRows(rows, cat).filter(row => !store.ticks[`s:${w.iso}:${row.key}`]);
    if (left.length) lines.push('', (shopCats[cat] || cat).toUpperCase(), ...left.map(row => {
      const amount = amountText(row);
      return '☐ ' + Lists.name(row, lang) + (amount ? ' — ' + amount : '');
    }));
  });
  if (!lines.length) return '';
  return `🛒 ${t('shopping')} — ${t('relWeek')(w.rel)} (${fmtRangeShort(w.monday)})\n` + lines.join('\n');
}

function copyList(n) {
  const text = listText(n);
  if (!text) return showToast(t('toastNothing'));
  const done = () => showToast(t('toastCopied'));
  const fallback = () => {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch (e) {}
    ta.remove();
    showToast(t(ok ? 'toastCopied' : 'toastCopyFail'));
  };
  if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, fallback);
  else fallback();
}

function shareList(n) {
  const text = listText(n);
  if (!text) return showToast(t('toastNothing'));
  navigator.share({ title: t('shopping'), text }).catch(() => {});
}

function clearTicks(n) {
  const prefix = `s:${weeks[n - 1].iso}:`;
  Object.keys(store.ticks).forEach(k => { if (k.startsWith(prefix)) delete store.ticks[k]; });
  saveStore();
  document.querySelectorAll(`#shop-list-${n} input[data-tick]`).forEach(cb => { cb.checked = false; });
  updateProgress(n);
  showToast(t('toastCleared'));
}

let toastTimer = null;
function showToast(msg) {
  const el = byId('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

/* ============================================================
   Week pieces
   ============================================================ */
const tool = (action, icon, label, tipKey, n) =>
  `<button type="button" class="tool-btn" data-action="${action}"${n ? ` data-n="${n}"` : ''}
    data-tip="${esc(t(tipKey))}"><span class="ico">${icon}</span> ${t(label)}</button>`;

// Price control + copy / share / clear (built once per render)
function buildShopTools(n) {
  return `<div class="shop-tools">
    <div class="price-adjust">
      <span class="price-bar-label">${t('offsetLabel')}</span>
      <button type="button" class="info-btn" data-tip="${esc(t('tipOffsetInfo'))}" aria-label="${esc(t('tipOffsetInfo'))}">i</button>
      <div class="offset-controls">
        <button type="button" class="offset-btn" data-action="offset" data-delta="-5" data-tip="${esc(t('tipOffsetDown'))}" aria-label="${esc(t('tipOffsetDown'))}">−</button>
        <span class="offset-value">${fmtPct(priceConfig.globalOffset)}</span>
        <button type="button" class="offset-btn" data-action="offset" data-delta="5" data-tip="${esc(t('tipOffsetUp'))}" aria-label="${esc(t('tipOffsetUp'))}">+</button>
      </div>
      <span class="price-disclaimer">${t('priceDisclaimer')}</span>
    </div>
    <div class="shop-actions">
      ${tool('copy', '📋', 'copyList', 'tipCopy', n)}
      ${navigator.share ? tool('share', '📤', 'shareList', 'tipShare', n) : ''}
      ${tool('clear', '↺', 'clearTicks', 'tipClear', n)}
    </div>
  </div>`;
}

// Rows, subtotals and totals (rebuilt when the price offset changes)
function buildShopList(n) {
  const { w, rows } = weekData[n];
  const shopCats  = t('shopCats');
  const offset    = priceConfig.globalOffset;
  const globalPct = fmtPct(offset);
  let grandTotal  = 0;

  const shopHtml = shopCategories.map(cat => {
    const catRows = sortedRows(rows, cat);
    if (!catRows.length) return '';
    let catTotal = 0;

    const itemsHtml = catRows.map(row => {
      const key = `s:${w.iso}:${row.key}`;
      const price = Lists.price(row, offset);
      const amount = amountText(row);
      const meals = Lists.mealsOf(row);
      const kind = Lists.kind(row);

      const detail = row.lines.map(l => mealLabel(l.meal) + ': ' + l[lang]);
      if (row.entry && row.entry.note) detail.push('ℹ️ ' + row.entry.note[lang]);
      if (kind === 'staple') detail.push(t('tipStaple'));

      let priceSpan = '';
      if (price != null) {
        catTotal   += price;
        grandTotal += price;
        priceSpan = `<span class="item-price" data-tip="${esc(t('tipPrice')(row.lines.length, globalPct))}">~${money(price)}</span>`;
      }
      const tags = (kind === 'staple' ? `<span class="item-tag">${t('tagStaple')}</span>` : '') +
                   (Lists.isOptional(row, lang) ? `<span class="item-tag">${t('tagOptional')}</span>` : '');
      return `<li><label class="check">
        <input type="checkbox" data-tick="${esc(key)}"${store.ticks[key] ? ' checked' : ''}>
        <span class="item-main" data-tip="${esc(detail.join('\n'))}">
          <span class="item-name">${Lists.name(row, lang)}</span>${amount ? ` <span class="item-amount">${amount}</span>` : ''}${tags}
          <span class="item-meals">${meals.length > 2 ? t('inMeals')(meals.length) : meals.map(mealLabel).join(', ')}</span>
        </span>${priceSpan}
      </label></li>`;
    }).join('');

    const subtotalHtml = catTotal
      ? `<p class="cat-subtotal">${t('catSubtotal')}: ~${money(catTotal)}</p>`
      : '';

    return `<div class="shop-cat" data-cat="${esc(cat)}">
      <h4>${shopCats[cat] || cat}</h4>
      <ul>${itemsHtml}</ul>
      ${subtotalHtml}
    </div>`;
  }).join('');

  const totalHtml = grandTotal
    ? `<div class="week-total">
        <div data-tip="${esc(t('tipTotal'))}">
          <span>${t('estimatedTotal')}</span>
          <strong>~${money(grandTotal)}</strong>
        </div>
        <div class="week-left" id="shop-left-${n}" data-tip="${esc(t('tipLeft'))}" hidden>
          <span>${t('leftToBuy')}</span>
          <strong></strong>
        </div>
       </div>`
    : '';

  return `<div class="shop-grid">${shopHtml}</div>${totalHtml}`;
}

// The week's mix at a glance: breakfasts | proteins of lunches & dinners | snacks
const BREAKFAST_ICONS = { egg: '🍳', grain: '🥣', dairy: '🥛', fruit: '🍓' };
const PROTEIN_ICONS   = { fish: '🐟', poultry: '🍗', beef: '🥩', pork: '🐖', plant: '🌱', egg: '🥚' };
const GROUP_ICONS     = { fruit: '🍎', dairy: '🧀', veg: '🥕', grain: '🌾' };

function buildBalance(meals) {
  const s = Planner.summary(meals.map(m => m.recipe.id)), R = Planner.RULES;
  const range = ([lo, hi]) => lo === hi ? String(lo) : `${lo}–${hi}`;
  const chips = (counts, icons, names) => Object.keys(icons).filter(k => counts[k]).map(k => ({
    html: `<span class="chip">${icons[k]} ${counts[k]}</span>`,
    text: `${icons[k]} ${names[k]} ×${counts[k]}`
  }));
  const groups = [
    chips(s.breakfast, BREAKFAST_ICONS, t('breakfastNames')),
    chips(s.protein, PROTEIN_ICONS, t('proteinNames')),
    chips(s.group, GROUP_ICONS, t('groupNames'))
  ];
  const tip = t('tipBalance')(...groups.map(g => g.map(c => c.text).join(', ')), {
    egg: range(R.breakfasts.group.egg), fish: range(R.mains.protein.fish), plant: R.mains.protein.plant[0],
    red: R.mains.redMeat[1], fruit: range(R.snacks.group.fruit)
  });
  if (s.experimental) groups.push([{ html: `<span class="chip chip-exp">${BEAKER} ${s.experimental}</span>` }]);
  const expLine = s.experimental ? '\n' + t('experimentalCount')(s.experimental, R.experimental[1]) : '';
  return `<div class="balance" data-tip="${esc(tip + expLine)}">
    <span class="balance-label">⚖️ ${t('balance')}</span>
    ${groups.map(g => g.map(c => c.html).join('')).join('<span class="balance-sep" aria-hidden="true"></span>')}
  </div>`;
}

/* ============================================================
   Recipe choices — which recipes the random menu may use.
   Saved on this device; Planner draws again when they change.
   ============================================================ */
const recipeIds = new Set(recipes.map(r => r.id));
store.excluded = (Array.isArray(store.excluded) ? store.excluded : []).filter(id => recipeIds.has(id));
if (typeof store.useExperimental !== 'boolean') store.useExperimental = true;

const configurePlanner = () => Planner.configure({ exclude: store.excluded, experimental: store.useExperimental });
configurePlanner();

const usable = (r, excluded) => !excluded.has(r.id) && (store.useExperimental || !r.experimental);
const usableCount = (excluded, type) =>
  recipes.filter(r => (!type || r.type === type) && usable(r, excluded)).length;
const MIN_PER_TYPE = 5;

// Pixel-art beaker: the mark of an experimental recipe
const BEAKER = (() => {
  const rows = ['k.....k', 'kg...gk', 'kg...gk', 'kpppppk', 'kpbpppk', 'kpppbpk', 'kpppppk', '.kkkkk.'];
  const ink = { k: '#4c1d95', g: '#ddd6fe', p: '#8b5cf6', b: '#f5f3ff' };
  let rects = '';
  rows.forEach((row, y) => [...row].forEach((ch, x) => {
    if (ch !== '.') rects += `<rect x="${x}" y="${y}" width="1" height="1" fill="${ink[ch]}"/>`;
  }));
  return `<svg class="beaker" viewBox="0 0 7 8" aria-hidden="true" shape-rendering="crispEdges">${rects}</svg>`;
})();

const expToggle = () => `<label class="check toggle" data-tip="${esc(t('tipUseExperimental'))}">
    <input type="checkbox" data-pref="experimental"${store.useExperimental ? ' checked' : ''}>
    <span>${BEAKER} ${t('useExperimental')}</span>
  </label>`;

function buildPlanBar() {
  byId('plan-bar').innerHTML = expToggle() +
    `<button type="button" class="tool-btn" data-action="open-panel" data-tip="${esc(t('tipRecipesBtn'))}">
      <span class="ico">📖</span> ${t('recipesBtn')(usableCount(new Set(store.excluded)), recipes.length)}</button>`;
}

function applyConfig() {
  configurePlanner();
  buildPlanBar();
  [1,2,3,4].forEach(buildWeek);
  if (modalAt) renderModal();
  emit('config', { excluded: store.excluded.length, experimental: store.useExperimental });
}

function setExperimental(on) {
  store.useExperimental = on;
  saveStore();
  applyConfig();
  if (draft) renderPanel();
  showToast(t(on ? 'toastExpOn' : 'toastExpOff'));
}

/* ── The panel with every recipe ── */
const panelEl = byId('panel');
let draft = null;          // recipe ids left out, while the panel is open
let panelFocus = null;

const iconOf = r => r.type === 'breakfast' ? BREAKFAST_ICONS[r.group]
  : r.type === 'snack' ? GROUP_ICONS[r.group] : PROTEIN_ICONS[r.protein];
const plain = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

function renderPanel() {
  byId('p-row').innerHTML = expToggle() +
    `<button type="button" class="tool-btn" data-action="use-all"><span class="ico">↺</span> ${t('useAll')}</button>`;
  byId('p-search').placeholder = t('searchRecipes');
  byId('p-list').innerHTML = Planner.TYPES.map(type => {
    const items = recipes.filter(r => r.type === type).map(r => {
      const off = r.experimental && !store.useExperimental;
      return `<li data-name="${esc(plain(r.name.en + ' ' + r.name.es))}">
        <label class="check pick${off ? ' off' : ''}">
          <input type="checkbox" data-pick="${r.id}"${draft.has(r.id) ? '' : ' checked'}${off ? ' disabled' : ''}>
          <span>${iconOf(r)} ${r.name[lang]}${r.experimental ? ' ' + BEAKER : ''}</span>
        </label></li>`;
    }).join('');
    return `<section class="pick-group" data-type="${type}">
      <div class="pick-head">
        <h3>${t('typeTitles')[type]} <small id="p-n-${type}"></small></h3>
        <button type="button" class="mini-btn" data-action="pick-all" data-type="${type}">${t('pickAll')}</button>
        <button type="button" class="mini-btn" data-action="pick-none" data-type="${type}">${t('pickNone')}</button>
      </div>
      <ul>${items}</ul>
    </section>`;
  }).join('');
  filterPanel();
  updatePanelCounts();
}

function updatePanelCounts() {
  Planner.TYPES.forEach(type => {
    const n = usableCount(draft, type), all = recipes.filter(r => r.type === type).length;
    const el = byId('p-n-' + type);
    el.textContent = `${n}/${all}`;
    el.classList.toggle('low', n < MIN_PER_TYPE);
  });
  byId('p-count').textContent = t('inUse')(usableCount(draft), recipes.length);
}

function filterPanel() {
  const q = plain(byId('p-search').value.trim());
  panelEl.querySelectorAll('.pick-group').forEach(group => {
    let shown = 0;
    group.querySelectorAll('li').forEach(li => {
      const hit = !q || li.dataset.name.includes(q);
      li.hidden = !hit;
      if (hit) shown++;
    });
    group.hidden = !shown;
  });
}

function openPanel() {
  draft = new Set(store.excluded);
  byId('p-search').value = '';
  renderPanel();
  panelFocus = document.activeElement;
  Tooltip.hide();
  panelEl.classList.add('open');
  document.body.classList.add('modal-open');
  byId('p-close').focus({ preventScroll: true });
  emit('panel', { open: true });
}

// Saves the choices; refuses while a meal type has fewer than five recipes
function closePanel() {
  if (!draft) return;
  const short = Planner.TYPES.find(type => usableCount(draft, type) < MIN_PER_TYPE);
  if (short) {
    showToast(t('needFive')(t('typeTitles')[short].toLowerCase(), MIN_PER_TYPE));
    panelEl.querySelector(`.pick-group[data-type="${short}"]`).scrollIntoView({ block: 'start' });
    return;
  }
  const changed = draft.size !== store.excluded.length || store.excluded.some(id => !draft.has(id));
  panelEl.classList.remove('open');
  if (!modalAt) document.body.classList.remove('modal-open');
  if (changed) {
    store.excluded = [...draft];
    saveStore();
    applyConfig();
    showToast(t('toastPlanUpdated'));
  }
  draft = null;
  if (panelFocus && panelFocus.isConnected) panelFocus.focus({ preventScroll: true });
  emit('panel', { open: false });
}

function pickType(type, on) {
  recipes.filter(r => r.type === type).forEach(r => { if (on) draft.delete(r.id); else draft.add(r.id); });
  panelEl.querySelectorAll(`.pick-group[data-type="${type}"] input[data-pick]`).forEach(cb => { cb.checked = on; });
  updatePanelCounts();
}

panelEl.addEventListener('click', e => { if (e.target === panelEl) closePanel(); });
byId('p-search').addEventListener('input', filterPanel);

/* ============================================================
   Week Renderer
   ============================================================ */
const weekData = {};    // n → { w, meals, rows, tasks } of the last render

function buildWeek(n) {
  const w = weeks[n - 1];
  const meals = weekMeals(w);
  const rows = Lists.shopping(meals);
  const tasks = Lists.prep(meals);
  weekData[n] = { w, meals, rows, tasks };

  const section = byId('w' + n);
  const days = t('days');
  const mealTypes = t('mealTypes');
  const shopOpen = store.shopOpen[n] ? ' open' : '';
  // Prep starts folded on phones so Monday's meals are not a long scroll away
  const prepOpen = n in store.prepOpen ? store.prepOpen[n] : !isPhone;
  const openHint = t(canHover ? 'tipMealMouse' : 'tipMealTouch');
  const hasToday = w.rel === 0 && today >= w.monday && today <= addDays(w.monday, 4);

  const daysHtml = days.map((dayName, di) => {
    const date = addDays(w.monday, di);
    const iso = isoDate(date);
    const state = iso === todayIso ? ' today' : iso < todayIso ? ' past' : '';
    const mealsHtml = meals.filter(m => m.di === di).map(({ recipe, k }) => {
      const slot = k % Planner.SLOTS;
      const mt = mealTypes[recipe.type];
      const tip = [
        recipe.experimental && t('tipExperimental'),
        t('tipMeal')(recipe.ing[lang].length, recipe.steps[lang].length),
        recipe.tip && recipe.tip[lang] && '💚 ' + recipe.tip[lang],
        openHint
      ].filter(Boolean).join('\n');
      return `<button type="button" class="meal-slot" data-action="open" data-n="${n}" data-k="${k}"
        data-day="${di}" data-slot="${slot}" data-type="${recipe.type}"${recipe.experimental ? ' data-exp="1"' : ''} data-tip="${esc(tip)}">
        <span class="meal-badge badge-${recipe.type}${recipe.experimental ? ' badge-exp' : ''}">${recipe.experimental ? BEAKER : mt.icon} ${mt.label}</span>
        <span class="meal-name">${recipe.name[lang]}</span>
        <span class="chev" aria-hidden="true">›</span>
      </button>`;
    }).join('');

    return `<div class="day-col${state}">
      <div class="day-header">${dayName}${state === ' today' ? `<em class="today-pill">${t('today')}</em>` : ''}<span>${fmtDay(date)}</span></div>
      ${mealsHtml}
    </div>`;
  }).join('');

  const prepHtml = tasks.map(task => {
    const key = `p:${w.iso}:${task.key}`;
    const forText = task.meals.length
      ? `<small class="task-for">${t('prepFor')} ${task.meals.map(mealLabel).join(', ')}</small>` : '';
    return `<li><label class="check" data-tip="${esc(t('tipPrep'))}">
      <input type="checkbox" data-tick="${esc(key)}"${store.ticks[key] ? ' checked' : ''}>
      <span>${prepTasks[task.key][lang]}${forText}</span>
    </label></li>`;
  }).join('');

  section.innerHTML = `
    <div class="week-head">
      <h2 class="week-header">${t('relWeek')(w.rel)} <span>${fmtRangeLong(w.monday)}</span></h2>
      <div class="week-tools">
        ${hasToday ? tool('today', '📍', 'todayBtn', 'tipToday') : ''}
        ${tool('shuffle', '🎲', 'shuffle', 'tipShuffle', n)}
        ${savedMenu(w.iso) ? tool('reset', '↺', 'resetMenu', 'tipReset', n) : ''}
      </div>
    </div>
    ${buildBalance(meals)}
    <div class="sunday-prep">
      <button type="button" class="prep-head${prepOpen ? ' open' : ''}" id="prep-toggle-${n}" data-action="prep" data-n="${n}"
        aria-expanded="${prepOpen}" aria-controls="prep-list-${n}" data-tip="${esc(t('tipPrepToggle'))}">
        <span class="prep-title">📋 ${t('prepTitle')(fmtDay(addDays(w.monday, -1)))}</span>
        <span class="progress-pill" id="prep-count-${n}" data-tip="${esc(t('tipPrepCount'))}"></span>
        <span class="arrow" aria-hidden="true">▼</span>
      </button>
      <ul id="prep-list-${n}"${prepOpen ? '' : ' hidden'}>${prepHtml}</ul>
    </div>
    <div class="calendar">${daysHtml}</div>
    <div class="shopping-section">
      <button type="button" class="shopping-toggle${shopOpen}" id="shop-toggle-${n}" data-action="shop" data-n="${n}"
        aria-expanded="${!!shopOpen}" aria-controls="shop-body-${n}" data-tip="${esc(t('tipShopToggle'))}">
        <span class="shop-title">🛒 ${t('shopping')}</span>
        <span class="progress-pill" id="shop-count-${n}" data-tip="${esc(t('tipShopCount'))}"></span>
        <span class="arrow" aria-hidden="true">▼</span>
      </button>
      <div class="shopping-body${shopOpen}" id="shop-body-${n}">
        ${buildShopTools(n)}
        <div id="shop-list-${n}">${buildShopList(n)}</div>
      </div>
    </div>`;

  updateProgress(n);
}

/* ============================================================
   Actions — every data-action button lands here
   ============================================================ */
const actions = {
  lang:        () => toggleLang(),
  week:        el => showWeek(+el.dataset.n),
  today:       () => jumpToday(),
  shuffle:     el => shuffleWeek(+el.dataset.n),
  reset:       el => resetWeek(+el.dataset.n),
  open:        el => openModal(+el.dataset.n, +el.dataset.k),
  close:       () => closeModal(),
  step:        el => stepModal(+el.dataset.step),
  swap:        () => swapMeal(),
  prep:        el => togglePrep(+el.dataset.n),
  shop:        el => toggleShopping(+el.dataset.n),
  offset:      el => changeOffset(+el.dataset.delta),
  copy:        el => copyList(+el.dataset.n),
  share:       el => shareList(+el.dataset.n),
  clear:       el => clearTicks(+el.dataset.n),
  'hide-hint': () => dismissHint(),
  'open-panel':  () => openPanel(),
  'close-panel': () => closePanel(),
  'pick-all':    el => pickType(el.dataset.type, true),
  'pick-none':   el => pickType(el.dataset.type, false),
  'use-all':     () => { draft.clear(); renderPanel(); }
};

function run(name, el) {
  emit('action', { name, el });
  actions[name](el);
}

document.addEventListener('click', e => {
  const el = e.target.closest('[data-action]');
  if (el && !el.disabled && actions[el.dataset.action]) run(el.dataset.action, el);
});

/* ============================================================
   Start
   ============================================================ */
// A reload while a recipe was open leaves its history marker behind
if (history.state && history.state.modal) {
  try { history.replaceState(null, ''); } catch (e) {}
}

// Menus saved before breakfasts existed (3 meals a day): keep them and add the week's breakfasts
Object.keys(store.menus).forEach(iso => {
  const old = store.menus[iso];
  if (!Array.isArray(old) || old.length !== 15) return;
  const [y, m, d] = iso.split('-').map(Number);
  const base = Planner.baseMenu(Planner.weekNumber(new Date(y, m - 1, d)));
  const ids = [];
  for (let day = 0; day < 5; day++) ids.push(base[day * Planner.SLOTS], ...old.slice(day * 3, day * 3 + 3));
  if (Planner.isMenu(ids)) store.menus[iso] = ids;
  else delete store.menus[iso];
});

// Forget ticks of past weeks (and of the old fixed plan) and swaps older than last week —
// not while previewing another date, which would throw away this week's
if (!dateParam) {
  const keepMenusFrom = isoDate(addDays(firstMonday, -7));
  Object.keys(store.ticks).forEach(k => {
    const m = /^[ps]:(\d{4}-\d{2}-\d{2}):/.exec(k);
    if (!m || m[1] < weeks[0].iso) delete store.ticks[k];
  });
  Object.keys(store.menus).forEach(iso => { if (iso < keepMenusFrom) delete store.menus[iso]; });
  saveStore();
}

applyLang();
showWeek(currentWeek, true);

})();
