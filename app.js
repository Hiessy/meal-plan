/* Requires data.js and prices.js to be loaded before this script */
/* ============================================================
   i18n — UI translations (EN / ES)
   ============================================================ */
const i18n = {
  en: {
    pageTitle:       'Family Meal Plan — May 2026',
    subtitle:        '4 people · Lunch + Afternoon Snack + Dinner · Monday–Friday',
    tabs:            ['Week 1 · May 4–8','Week 2 · May 11–15','Week 3 · May 18–22','Week 4 · May 25–29'],
    days:            ['Monday','Tuesday','Wednesday','Thursday','Friday'],
    mealTypes:       {
      lunch:  { label:'Lunch',     icon:'🥗' },
      snack:  { label:'Snack',     icon:'🍎' },
      dinner: { label:'Dinner',    icon:'🍽' }
    },
    date:            d => d,
    ingredients:     'Ingredients',
    serves:          '(serves 4)',
    steps:           'Steps',
    prev:            'Previous',
    next:            'Next',
    shopping:        'Weekly Shopping List',
    langBtn:         '🌐 Español',
    offsetLabel:     'Price adjustment',
    priceDisclaimer: 'Estimated prices · adjust to match your market',
    estimatedTotal:  'Est. Weekly Total',
    leftToBuy:       'Still to buy',
    catSubtotal:     'Subtotal',
    copyList:        'Copy list',
    shareList:       'Share',
    clearTicks:      'Clear ticks',
    allDone:         'All done',
    footer:          'Prices are estimates. Your ticks and settings are saved only in this browser.',
    hintMouse:       'Click any meal to see its recipe. Tick off prep tasks and shopping items as you go — they are saved on this device. Hover over anything for a quick tip.',
    hintTouch:       'Tap any meal to see its recipe. Tick off prep tasks and shopping items as you go — they are saved on this phone. Press and hold any button for a quick tip.',
    toastCopied:     'Shopping list copied',
    toastCopyFail:   'Could not copy the list',
    toastCleared:    'Ticks cleared',
    toastNothing:    'Everything is ticked off — nothing left to buy 🎉',
    kidTip:          /^Toddler tip:\s*/,
    kidTipLabel:     'Toddler tip:',

    /* Tooltips */
    tipLang:         'Switch the whole page to Spanish',
    tipTab:          dates => `Show the meals for ${dates}`,
    tipMeal:         (ing, steps) => `${ing} ingredient${ing === 1 ? '' : 's'} · ${steps} step${steps === 1 ? '' : 's'}`,
    tipMealMouse:    'Click to open the full recipe',
    tipMealTouch:    'Tap to open the full recipe',
    tipPrep:         'Tick it off once it is done — saved on this device',
    tipPrepToggle:   'Show or hide the prep tasks',
    tipPrepCount:    'Prep tasks ticked off',
    tipShopToggle:   'Show or hide this week’s shopping list',
    tipShopCount:    'Items already ticked off the list',
    tipOffsetInfo:   'Prices are rough estimates in US dollars. If your shops are cheaper or pricier, use − and + and every price updates.',
    tipOffsetDown:   'Lower all prices by 5%',
    tipOffsetUp:     'Raise all prices by 5%',
    tipPrice:        (base, pct) => `Estimate: ${base} base price, ${pct} price adjustment`,
    itemAdjusted:    pct => `Includes an extra ${pct} — this item usually runs pricier`,
    tipCopy:         'Copy what is still left to buy — paste it into Notes, WhatsApp, etc.',
    tipShare:        'Send what is still left to buy to another app',
    tipClear:        'Untick every item on this week’s list',
    tipTotal:        'Every item on the list, at the current price adjustment',
    tipLeft:         'Cost of the items you have not ticked yet',
    tipClose:        'Close (Esc)',
    tipHintClose:    'Hide this message',
    shopCats: {
      'Proteins & Fish': 'Proteins & Fish',
      'Vegetables':      'Vegetables',
      'Fruit':           'Fruit',
      'Grains & Bread':  'Grains & Bread',
      'Pantry':          'Pantry',
      'Dairy & Fridge':  'Dairy & Fridge',
      'Other':           'Other'
    }
  },
  es: {
    pageTitle:       'Plan de Comidas Familiar — Mayo 2026',
    subtitle:        '4 personas · Almuerzo + Merienda + Cena · Lunes–Viernes',
    tabs:            ['Semana 1 · 4–8 Mayo','Semana 2 · 11–15 Mayo','Semana 3 · 18–22 Mayo','Semana 4 · 25–29 Mayo'],
    days:            ['Lunes','Martes','Miércoles','Jueves','Viernes'],
    mealTypes:       {
      lunch:  { label:'Almuerzo',  icon:'🥗' },
      snack:  { label:'Merienda',  icon:'🍎' },
      dinner: { label:'Cena',      icon:'🍽' }
    },
    date:            d => d.replace(/^May (\d+)$/, '$1 de Mayo'),
    ingredients:     'Ingredientes',
    serves:          '(para 4 personas)',
    steps:           'Preparación',
    prev:            'Anterior',
    next:            'Siguiente',
    shopping:        'Lista de Compras',
    langBtn:         '🌐 English',
    offsetLabel:     'Ajuste de precios',
    priceDisclaimer: 'Precios estimados · ajustá según tu mercado',
    estimatedTotal:  'Total semanal est.',
    leftToBuy:       'Falta comprar',
    catSubtotal:     'Subtotal',
    copyList:        'Copiar lista',
    shareList:       'Compartir',
    clearTicks:      'Desmarcar todo',
    allDone:         'Listo',
    footer:          'Los precios son estimados. Tus marcas y ajustes se guardan solo en este navegador.',
    hintMouse:       'Hacé clic en cualquier comida para ver la receta. Marcá las tareas y las compras a medida que avanzás — se guardan en este dispositivo. Pasá el mouse sobre cualquier cosa para ver una ayuda rápida.',
    hintTouch:       'Tocá cualquier comida para ver la receta. Marcá las tareas y las compras a medida que avanzás — se guardan en este teléfono. Mantené apretado cualquier botón para ver una ayuda rápida.',
    toastCopied:     'Lista de compras copiada',
    toastCopyFail:   'No se pudo copiar la lista',
    toastCleared:    'Lista desmarcada',
    toastNothing:    'Ya está todo marcado — no falta comprar nada 🎉',
    kidTip:          /^Consejo para pequeños:\s*/,
    kidTipLabel:     'Consejo para pequeños:',

    /* Tooltips */
    tipLang:         'Ver toda la página en inglés',
    tipTab:          dates => `Ver las comidas del ${dates}`,
    tipMeal:         (ing, steps) => `${ing} ingrediente${ing === 1 ? '' : 's'} · ${steps} paso${steps === 1 ? '' : 's'}`,
    tipMealMouse:    'Hacé clic para ver la receta completa',
    tipMealTouch:    'Tocá para ver la receta completa',
    tipPrep:         'Marcala cuando esté lista — se guarda en este dispositivo',
    tipPrepToggle:   'Mostrar u ocultar las tareas de preparación',
    tipPrepCount:    'Tareas de preparación completadas',
    tipShopToggle:   'Mostrar u ocultar la lista de compras de la semana',
    tipShopCount:    'Productos ya marcados en la lista',
    tipOffsetInfo:   'Los precios son estimaciones en dólares. Si en tu zona todo sale más barato o más caro, usá − y + y se actualizan todos los precios.',
    tipOffsetDown:   'Bajar todos los precios un 5%',
    tipOffsetUp:     'Subir todos los precios un 5%',
    tipPrice:        (base, pct) => `Estimado: precio base ${base}, ajuste de precios ${pct}`,
    itemAdjusted:    pct => `Incluye un ${pct} extra — este producto suele ser más caro`,
    tipCopy:         'Copia lo que falta comprar — pegalo en Notas, WhatsApp, etc.',
    tipShare:        'Enviá lo que falta comprar a otra app',
    tipClear:        'Desmarca todos los productos de la lista de esta semana',
    tipTotal:        'Todos los productos de la lista, con el ajuste de precios actual',
    tipLeft:         'Costo de los productos que todavía no marcaste',
    tipClose:        'Cerrar (Esc)',
    tipHintClose:    'Ocultar este mensaje',
    shopCats: {
      'Proteins & Fish': 'Proteínas y Pescado',
      'Vegetables':      'Verduras',
      'Fruit':           'Frutas',
      'Grains & Bread':  'Cereales y Pan',
      'Pantry':          'Despensa',
      'Dairy & Fridge':  'Lácteos y Nevera',
      'Other':           'Otros'
    }
  }
};

/* ============================================================
   Saved state — language, week, price offset and ticks survive
   a reload (localStorage, this browser only)
   ============================================================ */
const STORE_KEY = 'meal-plan-2026-05';

function readStore() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
  catch (e) { return {}; }
}
function saveStore() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); }
  catch (e) { /* private mode / storage full — the page still works */ }
}

const store = Object.assign({ ticks: {}, shopOpen: {}, prepOpen: {} }, readStore());

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
    if (i18n[lang][key] !== undefined) el.textContent = i18n[lang][key];
  });

  // Static elements with a tooltip (data-label → icon-only, needs a spoken name too)
  document.querySelectorAll('[data-tip-key]').forEach(el => {
    el.dataset.tip = t(el.dataset.tipKey);
    if ('label' in el.dataset) el.setAttribute('aria-label', el.dataset.tip);
  });

  // Lang button
  byId('lang-btn').textContent = t('langBtn');

  byId('hint-text').textContent = '👋 ' + t(canHover ? 'hintMouse' : 'hintTouch');
  byId('hint').hidden = !!store.hintOff;

  buildTabs();

  // Rebuild all week content
  [1,2,3,4].forEach(buildWeek);

  if (modalAt) renderModal();
  refreshTip();
}

function dismissHint() {
  store.hintOff = true;
  saveStore();
  hideTip();
  byId('hint').hidden = true;
}

/* ============================================================
   Navigation
   ============================================================ */
const hashWeek = /^#w([1-4])$/.exec(location.hash);
let currentWeek = hashWeek ? +hashWeek[1] : (store.week >= 1 && store.week <= 4 ? store.week : 1);

function buildTabs() {
  byId('tabs-nav').innerHTML = t('tabs').map((label, i) => {
    const [week, dates] = label.split(' · ');
    const active = i + 1 === currentWeek;
    return `<button type="button" class="tab-btn${active ? ' active' : ''}" aria-current="${active}"
      onclick="showWeek(${i + 1})" data-tip="${esc(t('tipTab')(dates))}">
      <span class="tab-week">${week}</span><span class="tab-dates">${dates}</span>
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
}

window.addEventListener('hashchange', () => {
  const m = /^#w([1-4])$/.exec(location.hash);
  if (m && +m[1] !== currentWeek) showWeek(+m[1]);
});

/* ============================================================
   Modal — recipe sheet with previous / next through the week
   ============================================================ */
const modalEl = byId('modal');
let modalAt = null;     // { wk, i } — i indexes weekMeals(wk)
let lastFocus = null;

function weekMeals(wk) {
  return data[wk].days.flatMap((day, di) => day.meals.map((meal, mi) => ({ di, mi, meal })));
}

function openModal(wk, day, mealIdx) {
  const wasOpen = !!modalAt;
  modalAt = { wk, i: weekMeals(wk).findIndex(m => m.di === day && m.mi === mealIdx) };
  renderModal();
  if (wasOpen) return;

  lastFocus = document.activeElement;
  hideTip();
  modalEl.classList.add('open');
  document.body.style.overflow = 'hidden';
  // A history entry lets the phone's Back button close the recipe
  try { history.pushState({ modal: true }, ''); } catch (e) {}
  byId('m-close').focus({ preventScroll: true });
}

function renderModal() {
  const meals = weekMeals(modalAt.wk);
  const { di, meal: d } = meals[modalAt.i];
  const mt = t('mealTypes')[d.type];

  byId('m-name').textContent = d.name[lang];
  byId('m-meta').innerHTML =
    `<span class="meal-badge badge-${d.type}">${mt.icon} ${mt.label}</span>` +
    `<span>${t('days')[di]} · ${t('date')(data[modalAt.wk].days[di].date)}</span>`;

  byId('m-ing').innerHTML = d.ing[lang].map(i =>
    `<li><label class="check"><input type="checkbox"><span>${i}</span></label></li>`).join('');
  byId('m-steps').innerHTML = d.steps[lang].map(s => t('kidTip').test(s)
    ? `<li class="kid-tip">👶 <strong>${t('kidTipLabel')}</strong> ${s.replace(t('kidTip'), '')}</li>`
    : `<li>${s}</li>`).join('');

  const tipEl = byId('m-tip');
  tipEl.textContent = d.tip[lang] ? '💚 ' + d.tip[lang] : '';
  tipEl.hidden = !d.tip[lang];

  [['m-prev', -1], ['m-next', 1]].forEach(([id, delta]) => {
    const btn = byId(id);
    const other = meals[modalAt.i + delta];
    btn.disabled = !other;
    if (other) btn.dataset.tip = other.meal.name[lang];
    else delete btn.dataset.tip;
  });
  byId('m-pos').textContent = (modalAt.i + 1) + ' / ' + meals.length;
  byId('m-body').scrollTop = 0;
}

function stepModal(delta) {
  if (!modalAt || !weekMeals(modalAt.wk)[modalAt.i + delta]) return;
  modalAt.i += delta;
  hideTip();
  renderModal();
}

function closeModal(e) {
  if (e && e.target !== modalEl) return;
  if (history.state && history.state.modal) history.back();   // → popstate → hideModal
  else hideModal();
}

function hideModal() {
  if (!modalAt) return;
  modalAt = null;
  modalEl.classList.remove('open');
  document.body.style.overflow = '';
  if (lastFocus && lastFocus.isConnected) lastFocus.focus({ preventScroll: true });
}

window.addEventListener('popstate', hideModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { hideTip(); closeModal(); return; }
  if (!modalAt) return;
  if (e.key === 'ArrowLeft') stepModal(-1);
  else if (e.key === 'ArrowRight') stepModal(1);
  else if (e.key === 'Tab') {
    // Keep keyboard focus inside the open recipe
    const items = [...modalEl.querySelectorAll('button:not(:disabled), input')];
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* ============================================================
   Ticks — prep tasks (p{week}-{i}) and shopping items
   (s{week}-{category}-{i}) share one saved map
   ============================================================ */
document.addEventListener('change', e => {
  const key = e.target.dataset && e.target.dataset.tick;
  if (!key) return;
  if (e.target.checked) store.ticks[key] = 1;
  else delete store.ticks[key];
  saveStore();
  updateProgress(+key.slice(1).split('-')[0]);
});

function setPill(id, done, total) {
  const el = byId(id);
  if (!el) return;
  el.textContent = done === total ? '✓ ' + t('allDone') : done + ' / ' + total;
  el.classList.toggle('done', done === total);
}

function updateProgress(n) {
  const w = data[n];
  const tasks = w.prep.tasks[lang];
  setPill(`prep-count-${n}`, tasks.filter((_, i) => store.ticks[`p${n}-${i}`]).length, tasks.length);

  let total = 0, done = 0, left = 0;
  w.shopping.forEach((cat, ci) => cat.items[lang].forEach((_, ii) => {
    total++;
    if (store.ticks[`s${n}-${ci}-${ii}`]) done++;
    else left += itemPrice(n, ci, ii) || 0;
  }));
  setPill(`shop-count-${n}`, done, total);

  const leftEl = byId(`shop-left-${n}`);
  if (leftEl) {
    leftEl.hidden = done === 0;
    leftEl.querySelector('strong').textContent = '~' + money(left);
  }
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

function itemPrice(n, ci, ii) {
  const pd = shopPrices[n] && shopPrices[n][ci];
  if (!pd || pd.base[ii] == null) return null;
  const itemOff = (pd.offsets && pd.offsets[ii]) || 0;
  return pd.base[ii] * (1 + priceConfig.globalOffset) * (1 + itemOff);
}

/* ============================================================
   Shopping list actions — copy / share / clear
   ============================================================ */
function listText(n) {
  const w = data[n];
  const shopCats = t('shopCats');
  const lines = [];
  w.shopping.forEach((cat, ci) => {
    const left = cat.items[lang].filter((_, ii) => !store.ticks[`s${n}-${ci}-${ii}`]);
    if (left.length) lines.push('', (shopCats[cat.cat] || cat.cat).toUpperCase(), ...left.map(i => '☐ ' + i));
  });
  if (!lines.length) return '';
  return `🛒 ${t('shopping')} — ${w.title[lang]} (${w.dates[lang]})\n` + lines.join('\n');
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
  Object.keys(store.ticks).forEach(k => { if (k.startsWith(`s${n}-`)) delete store.ticks[k]; });
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
   Shopping section builders
   buildShopTools → price control + actions (built once per render)
   buildShopList  → items, subtotals and totals (rebuilt on offset change)
   ============================================================ */
function buildShopTools(n) {
  const btn = (fn, icon, label, tipKey) =>
    `<button type="button" class="tool-btn" onclick="${fn}(${n})" data-tip="${esc(t(tipKey))}">${icon} ${t(label)}</button>`;

  return `<div class="shop-tools">
    <div class="price-adjust">
      <span class="price-bar-label">${t('offsetLabel')}</span>
      <button type="button" class="info-btn" data-tip="${esc(t('tipOffsetInfo'))}" aria-label="${esc(t('tipOffsetInfo'))}">i</button>
      <div class="offset-controls">
        <button type="button" class="offset-btn" onclick="changeOffset(-5)" data-tip="${esc(t('tipOffsetDown'))}" aria-label="${esc(t('tipOffsetDown'))}">−</button>
        <span class="offset-value">${fmtPct(priceConfig.globalOffset)}</span>
        <button type="button" class="offset-btn" onclick="changeOffset(5)" data-tip="${esc(t('tipOffsetUp'))}" aria-label="${esc(t('tipOffsetUp'))}">+</button>
      </div>
      <span class="price-disclaimer">${t('priceDisclaimer')}</span>
    </div>
    <div class="shop-actions">
      ${btn('copyList', '📋', 'copyList', 'tipCopy')}
      ${navigator.share ? btn('shareList', '📤', 'shareList', 'tipShare') : ''}
      ${btn('clearTicks', '↺', 'clearTicks', 'tipClear')}
    </div>
  </div>`;
}

function buildShopList(n) {
  const w         = data[n];
  const shopCats  = t('shopCats');
  const weekPrices = shopPrices[n];
  const globalPct = fmtPct(priceConfig.globalOffset);
  let grandTotal  = 0;

  const shopHtml = w.shopping.map((cat, ci) => {
    const pd = weekPrices ? weekPrices[ci] : null;
    let catTotal = 0;

    const itemsHtml = cat.items[lang].map((item, ii) => {
      const key = `s${n}-${ci}-${ii}`;
      const price = itemPrice(n, ci, ii);
      let priceSpan = '';
      if (price != null) {
        const itemOff  = (pd.offsets && pd.offsets[ii]) || 0;
        catTotal      += price;
        grandTotal    += price;
        let tip = t('tipPrice')(money(pd.base[ii]), globalPct);
        if (itemOff) tip += '\n' + t('itemAdjusted')(fmtPct(itemOff));
        priceSpan = `<span class="item-price${itemOff ? ' adjusted' : ''}" data-tip="${esc(tip)}">~${money(price)}</span>`;
      }
      return `<li><label class="check">
        <input type="checkbox" data-tick="${key}"${store.ticks[key] ? ' checked' : ''}>
        <span class="item-name">${item}</span>${priceSpan}
      </label></li>`;
    }).join('');

    const subtotalHtml = pd
      ? `<p class="cat-subtotal">${t('catSubtotal')}: ~${money(catTotal)}</p>`
      : '';

    return `<div class="shop-cat">
      <h4>${shopCats[cat.cat] || cat.cat}</h4>
      <ul>${itemsHtml}</ul>
      ${subtotalHtml}
    </div>`;
  }).join('');

  const totalHtml = weekPrices
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

/* ============================================================
   Week Renderer
   ============================================================ */
function buildWeek(n) {
  const w = data[n];
  const section = byId('w' + n);
  const days = t('days');
  const mealTypes = t('mealTypes');

  const title    = w.title[lang];
  const dates    = w.dates[lang];
  const prepDate = w.prep.date[lang];
  const shopOpen = store.shopOpen[n] ? ' open' : '';
  // Prep starts folded on phones so Monday's meals are not a long scroll away
  const prepOpen = n in store.prepOpen ? store.prepOpen[n] : !isPhone;
  const openHint = t(canHover ? 'tipMealMouse' : 'tipMealTouch');

  const daysHtml = w.days.map((day, di) => {
    const mealsHtml = day.meals.map((meal, mi) => {
      const mt = mealTypes[meal.type];
      const tip = [
        t('tipMeal')(meal.ing[lang].length, meal.steps[lang].length),
        meal.tip[lang] && '💚 ' + meal.tip[lang],
        openHint
      ].filter(Boolean).join('\n');
      return `<button type="button" class="meal-slot" onclick="openModal(${n},${di},${mi})" data-tip="${esc(tip)}">
        <span class="meal-badge badge-${meal.type}">${mt.icon} ${mt.label}</span>
        <span class="meal-name">${meal.name[lang]}</span>
        <span class="chev" aria-hidden="true">›</span>
      </button>`;
    }).join('');

    return `<div class="day-col">
      <div class="day-header">${days[di]}<span>${t('date')(day.date)}</span></div>
      ${mealsHtml}
    </div>`;
  }).join('');

  const prepHtml = w.prep.tasks[lang].map((task, i) => {
    const key = `p${n}-${i}`;
    return `<li><label class="check" data-tip="${esc(t('tipPrep'))}">
      <input type="checkbox" data-tick="${key}"${store.ticks[key] ? ' checked' : ''}>
      <span>${task}</span>
    </label></li>`;
  }).join('');

  section.innerHTML = `
    <h2 class="week-header">${title} <span>${dates}</span></h2>
    <div class="sunday-prep">
      <button type="button" class="prep-head${prepOpen ? ' open' : ''}" id="prep-toggle-${n}" onclick="togglePrep(${n})"
        aria-expanded="${prepOpen}" aria-controls="prep-list-${n}" data-tip="${esc(t('tipPrepToggle'))}">
        <span class="prep-title">📋 ${prepDate}</span>
        <span class="progress-pill" id="prep-count-${n}" data-tip="${esc(t('tipPrepCount'))}"></span>
        <span class="arrow" aria-hidden="true">▼</span>
      </button>
      <ul id="prep-list-${n}"${prepOpen ? '' : ' hidden'}>${prepHtml}</ul>
    </div>
    <div class="calendar">${daysHtml}</div>
    <div class="shopping-section">
      <button type="button" class="shopping-toggle${shopOpen}" id="shop-toggle-${n}" onclick="toggleShopping(${n})"
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
   Tooltips — any element with data-tip="…"
   Mouse: hover · Keyboard: focus · Touch: press and hold
   (the ⓘ buttons also open on a plain tap)
   ============================================================ */
const tipEl = byId('tooltip');
let tipTarget = null;      // element whose tooltip is showing
let tipTimer = null;       // hover delay / touch auto-hide
let pressTimer = null;     // touch press-and-hold
let longPressed = false;   // swallow the click that follows a press-and-hold
let lastPointer = 'mouse';
let tipBeforeDown = null;

function showTip(target) {
  const text = target.dataset.tip;
  if (!text || !target.isConnected) return;
  clearTimeout(tipTimer);
  tipTarget = target;
  tipEl.textContent = text;

  // Above the target by default; flip below when there is no room. Keep on screen.
  const r = target.getBoundingClientRect();
  const tw = tipEl.offsetWidth, th = tipEl.offsetHeight;
  const gap = 10, pad = 8;
  const below = r.top - th - gap < pad;
  const top = below ? r.bottom + gap : r.top - th - gap;
  const centre = r.left + r.width / 2;
  const left = Math.max(pad, Math.min(centre - tw / 2, window.innerWidth - tw - pad));
  tipEl.style.left = left + 'px';
  tipEl.style.top = top + 'px';
  tipEl.style.setProperty('--arrow-x', Math.max(12, Math.min(centre - left, tw - 12)) + 'px');
  tipEl.classList.toggle('below', below);
  tipEl.classList.add('show');
}

function hideTip() {
  clearTimeout(tipTimer);
  tipTarget = null;
  tipEl.classList.remove('show');
}

// Re-read the text after a re-render (language switch) or drop a stale tooltip
function refreshTip() {
  if (!tipTarget) return;
  if (tipTarget.isConnected && tipTarget.dataset.tip) showTip(tipTarget);
  else hideTip();
}

document.addEventListener('pointerover', e => {
  if (e.pointerType === 'touch') return;
  const target = e.target.closest('[data-tip]');
  if (target === tipTarget) return;
  hideTip();
  if (target) tipTimer = setTimeout(() => showTip(target), 250);
});
document.documentElement.addEventListener('mouseleave', hideTip);

document.addEventListener('focusin', e => {
  const target = e.target.closest('[data-tip]');
  if (target && e.target.matches(':focus-visible')) showTip(target);
});
document.addEventListener('focusout', hideTip);

document.addEventListener('pointerdown', e => {
  lastPointer = e.pointerType;
  tipBeforeDown = tipTarget;
  longPressed = false;
  hideTip();
  if (e.pointerType !== 'touch') return;
  const target = e.target.closest('[data-tip]');
  if (!target) return;
  clearTimeout(pressTimer);
  pressTimer = setTimeout(() => {
    longPressed = true;
    showTip(target);
    tipTimer = setTimeout(hideTip, 4000);
  }, 500);
});
['pointerup', 'pointercancel'].forEach(type =>
  document.addEventListener(type, () => clearTimeout(pressTimer)));

document.addEventListener('click', e => {
  if (longPressed) {             // finger lifted after press-and-hold: show the tip, not the action
    longPressed = false;
    e.preventDefault();
    e.stopPropagation();
    return;
  }
  const info = e.target.closest('.info-btn');
  if (!info) return;
  if (lastPointer === 'touch' && tipBeforeDown === info) return;   // second tap closes it
  showTip(info);
}, true);

// Stop the phone's own long-press menu from covering the tooltip
document.addEventListener('contextmenu', e => {
  if (lastPointer === 'touch' && e.target.closest('[data-tip]')) e.preventDefault();
});

window.addEventListener('scroll', hideTip, true);
window.addEventListener('resize', hideTip);

/* ============================================================
   Start
   ============================================================ */
(function init() {
  // A reload while a recipe was open leaves its history marker behind
  if (history.state && history.state.modal) {
    try { history.replaceState(null, ''); } catch (e) {}
  }
  applyLang();
  showWeek(currentWeek, true);
})();
