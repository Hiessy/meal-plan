/* Requires recipes.js and ingredients.js to be loaded before this script */
/* ============================================================
   i18n — UI translations (EN / ES)
   ============================================================ */
const i18n = {
  en: {
    pageTitle:       'Family Meal Plan',
    subtitle:        '4 people · Lunch + Afternoon Snack + Dinner · Monday–Friday',
    headerDates:     (range, n) => `📅 ${range} · 🎲 random menu from ${n} recipes`,
    relWeek:         n => n === 0 ? 'This week' : n === 1 ? 'Next week' : `In ${n} weeks`,
    days:            ['Monday','Tuesday','Wednesday','Thursday','Friday'],
    daysShort:       ['Mon','Tue','Wed','Thu','Fri'],
    months:          ['January','February','March','April','May','June','July','August','September','October','November','December'],
    monthsShort:     ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    mealTypes:       {
      lunch:  { label:'Lunch',     icon:'🥗' },
      snack:  { label:'Snack',     icon:'🍎' },
      dinner: { label:'Dinner',    icon:'🍽' }
    },
    ingredients:     'Ingredients',
    serves:          '(serves 4)',
    steps:           'Steps',
    prev:            'Previous',
    next:            'Next',
    swap:            '🔄 Swap',
    shuffle:         '🎲 Shuffle',
    resetMenu:       '↺ Original menu',
    todayBtn:        '📍 Today',
    today:           'Today',
    prepTitle:       d => `Sunday, ${d} — Meal Prep`,
    prepFor:         'for',
    shopping:        'Shopping List',
    langBtn:         '🌐 Español',
    offsetLabel:     'Price adjustment',
    priceDisclaimer: 'Estimated prices · adjust to match your market',
    estimatedTotal:  'Est. weekly total',
    leftToBuy:       'Still to buy',
    catSubtotal:     'Subtotal',
    copyList:        'Copy list',
    shareList:       'Share',
    clearTicks:      'Clear ticks',
    allDone:         'All done',
    inMeals:         n => `${n} meals`,
    more:            'more',
    tagStaple:       'staple',
    tagOptional:     'optional',
    footer:          'Menus are drawn at random from the recipe list — the same on every device until you shuffle or swap. Prices are estimates. Ticks, swaps and settings stay in this browser.',
    hintMouse:       n => `🎲 A random menu every week, picked from ${n} family recipes. Click a meal for its recipe or to 🔄 swap it, and tick off prep and shopping as you go (saved on this device). Hover over anything for a tip.`,
    hintTouch:       n => `🎲 A random menu every week, picked from ${n} family recipes. Tap a meal for its recipe or to 🔄 swap it, and tick off prep and shopping as you go (saved on this phone). Press and hold any button for a tip.`,
    toastCopied:     'Shopping list copied',
    toastCopyFail:   'Could not copy the list',
    toastCleared:    'Ticks cleared',
    toastNothing:    'Everything is ticked off — nothing left to buy 🎉',
    toastShuffled:   'New menu for this week 🎲',
    toastSwapped:    'Meal swapped 🔄',
    toastReset:      'Back to the original menu',
    kidTip:          /^Toddler tip:\s*/,
    kidTipLabel:     'Toddler tip:',

    /* Tooltips */
    tipLang:         'Switch the whole page to Spanish',
    tipTab:          range => `Show the menu for ${range}`,
    tipMeal:         (ing, steps) => `${ing} ingredient${ing === 1 ? '' : 's'} · ${steps} step${steps === 1 ? '' : 's'}`,
    tipMealMouse:    'Click to open the full recipe',
    tipMealTouch:    'Tap to open the full recipe',
    tipShuffle:      'Draw a new random menu for this week',
    tipReset:        'Go back to the menu this week started with',
    tipToday:        'Jump to today’s meals',
    tipSwap:         { lunch: 'Swap for another random lunch', snack: 'Swap for another random snack', dinner: 'Swap for another random dinner' },
    tipPrep:         'Tick it off once it is done — saved on this device',
    tipPrepToggle:   'Show or hide the prep tasks',
    tipPrepCount:    'Prep tasks ticked off',
    tipShopToggle:   'Show or hide this week’s shopping list',
    tipShopCount:    'Items already ticked off the list',
    tipOffsetInfo:   'Prices are rough estimates in US dollars. If your shops are cheaper or pricier, use − and + and every price updates.',
    tipOffsetDown:   'Lower all prices by 5%',
    tipOffsetUp:     'Raise all prices by 5%',
    tipPrice:        (n, pct) => `Estimate for ${n} recipe${n === 1 ? '' : 's'}, including the ${pct} price adjustment`,
    tipStaple:       'Usually already at home — check before buying',
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
    pageTitle:       'Plan de Comidas Familiar',
    subtitle:        '4 personas · Almuerzo + Merienda + Cena · Lunes–Viernes',
    headerDates:     (range, n) => `📅 ${range} · 🎲 menú al azar entre ${n} recetas`,
    relWeek:         n => n === 0 ? 'Esta semana' : n === 1 ? 'La próxima' : `En ${n} semanas`,
    days:            ['Lunes','Martes','Miércoles','Jueves','Viernes'],
    daysShort:       ['Lun','Mar','Mié','Jue','Vie'],
    months:          ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
    monthsShort:     ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'],
    mealTypes:       {
      lunch:  { label:'Almuerzo',  icon:'🥗' },
      snack:  { label:'Merienda',  icon:'🍎' },
      dinner: { label:'Cena',      icon:'🍽' }
    },
    ingredients:     'Ingredientes',
    serves:          '(para 4 personas)',
    steps:           'Preparación',
    prev:            'Anterior',
    next:            'Siguiente',
    swap:            '🔄 Cambiar',
    shuffle:         '🎲 Mezclar',
    resetMenu:       '↺ Menú original',
    todayBtn:        '📍 Hoy',
    today:           'Hoy',
    prepTitle:       d => `Domingo ${d} — Preparación`,
    prepFor:         'para',
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
    inMeals:         n => `${n} comidas`,
    more:            'más',
    tagStaple:       'básico',
    tagOptional:     'opcional',
    footer:          'Los menús se sortean al azar de la lista de recetas — iguales en todos los dispositivos hasta que mezcles o cambies algo. Los precios son estimados. Las marcas, cambios y ajustes quedan en este navegador.',
    hintMouse:       n => `🎲 Un menú al azar cada semana, elegido entre ${n} recetas familiares. Hacé clic en una comida para ver la receta o 🔄 cambiarla, y marcá la preparación y las compras a medida que avanzás (se guarda en este dispositivo). Pasá el mouse sobre cualquier cosa para ver una ayuda.`,
    hintTouch:       n => `🎲 Un menú al azar cada semana, elegido entre ${n} recetas familiares. Tocá una comida para ver la receta o 🔄 cambiarla, y marcá la preparación y las compras a medida que avanzás (se guarda en este teléfono). Mantené apretado cualquier botón para ver una ayuda.`,
    toastCopied:     'Lista de compras copiada',
    toastCopyFail:   'No se pudo copiar la lista',
    toastCleared:    'Lista desmarcada',
    toastNothing:    'Ya está todo marcado — no falta comprar nada 🎉',
    toastShuffled:   'Nuevo menú para esta semana 🎲',
    toastSwapped:    'Comida cambiada 🔄',
    toastReset:      'Volviste al menú original',
    kidTip:          /^Consejo para pequeños:\s*/,
    kidTipLabel:     'Consejo para pequeños:',

    /* Tooltips */
    tipLang:         'Ver toda la página en inglés',
    tipTab:          range => `Ver el menú del ${range}`,
    tipMeal:         (ing, steps) => `${ing} ingrediente${ing === 1 ? '' : 's'} · ${steps} paso${steps === 1 ? '' : 's'}`,
    tipMealMouse:    'Hacé clic para ver la receta completa',
    tipMealTouch:    'Tocá para ver la receta completa',
    tipShuffle:      'Sortear un menú nuevo al azar para esta semana',
    tipReset:        'Volver al menú con el que empezó la semana',
    tipToday:        'Ir a las comidas de hoy',
    tipSwap:         { lunch: 'Cambiar por otro almuerzo al azar', snack: 'Cambiar por otra merienda al azar', dinner: 'Cambiar por otra cena al azar' },
    tipPrep:         'Marcala cuando esté lista — se guarda en este dispositivo',
    tipPrepToggle:   'Mostrar u ocultar las tareas de preparación',
    tipPrepCount:    'Tareas de preparación completadas',
    tipShopToggle:   'Mostrar u ocultar la lista de compras de la semana',
    tipShopCount:    'Productos ya marcados en la lista',
    tipOffsetInfo:   'Los precios son estimaciones en dólares. Si en tu zona todo sale más barato o más caro, usá − y + y se actualizan todos los precios.',
    tipOffsetDown:   'Bajar todos los precios un 5%',
    tipOffsetUp:     'Subir todos los precios un 5%',
    tipPrice:        (n, pct) => `Estimado para ${n} receta${n === 1 ? '' : 's'}, con el ajuste de precios de ${pct}`,
    tipStaple:       'Suele haber en casa — revisá antes de comprar',
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
      'Dairy & Fridge':  'Lácteos y Heladera',
      'Other':           'Otros'
    }
  }
};

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

/* ============================================================
   Dates — the plan always starts with the current week
   (on Saturday and Sunday, with the coming one). Add
   ?date=2026-12-24 to the address to see another date's plan.
   ============================================================ */
const addDays  = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const mondayOf = d => addDays(d, -((d.getDay() + 6) % 7));
const isoDate  = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
const WEEK_MS  = 7 * 864e5;

const dateParam = /^(\d{4})-(\d{2})-(\d{2})$/.exec(new URLSearchParams(location.search).get('date') || '');
const today = (() => {
  const d = dateParam ? new Date(+dateParam[1], +dateParam[2] - 1, +dateParam[3]) : new Date();
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
})();
const todayIso    = isoDate(today);
const thisMonday  = mondayOf(today);
const firstMonday = [0, 6].includes(today.getDay()) ? addDays(thisMonday, 7) : thisMonday;

// Menus are numbered by week from this Monday, so every device draws the same ones
const EPOCH = new Date(2024, 0, 1);
const weekNumber = monday => Math.round((monday - EPOCH) / WEEK_MS);
const isoOfWeek  = num => isoDate(addDays(EPOCH, 7 * num));

const weeks = [0, 1, 2, 3].map(i => {
  const monday = addDays(firstMonday, 7 * i);
  return { n: i + 1, monday, iso: isoDate(monday), num: weekNumber(monday),
           rel: Math.round((monday - thisMonday) / WEEK_MS) };
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
   Random menus
   Each week draws 5 lunches, 5 snacks and 5 dinners, avoiding
   the two weeks before it and too many similar dishes (a tag
   can appear at most `cap` times a week). The draw is seeded by
   the week number, so it is the same on every device.
   ============================================================ */
const TYPES = ['lunch', 'snack', 'dinner'];
const recipeById = Object.fromEntries(recipes.map(r => [r.id, r]));
const pools = Object.fromEntries(TYPES.map(type => [type, recipes.filter(r => r.type === type)]));

const TAGS = [
  ['salmon', /salmon/i, 1],             ['tuna', /tuna/i, 1],           ['lentil', /lentil/i, 1],
  ['bolognese', /bolognese/i, 1],       ['beef-broccoli', /beef & broccoli/i, 1],
  ['pork-tenderloin', /pork tenderloin/i, 1], ['stew', /stew/i, 1], ['fish', /\bcod\b|fish/i, 1],
  ['soup', /soup|minestrone/i, 2],      ['pasta', /pasta|bolognese|spaghetti/i, 2],
  ['apple', /apple slices/i, 1],        ['yogurt', /yogurt/i, 1],       ['smoothie', /smoothie/i, 1],
  ['rice-cakes', /rice cakes/i, 1],     ['hummus', /hummus/i, 1],       ['almond-butter', /almond butter/i, 1],
  ['cheese', /cheese/i, 2]
];
const TAG_CAP = Object.fromEntries(TAGS.map(([tag, , cap]) => [tag, cap]));
const recipeTags = Object.fromEntries(recipes.map(r =>
  [r.id, TAGS.filter(([, re]) => re.test(r.name.en)).map(([tag]) => tag)]));

function hashString(s) {             // FNV-1a
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function seededRandom(seed) {        // mulberry32
  return () => {
    seed = (seed + 0x6D2B79F5) >>> 0;
    let x = Math.imul(seed ^ (seed >>> 15), seed | 1);
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}
function shuffled(list, random) {
  const a = list.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const tagCounts = ids => {
  const used = {};
  ids.forEach(id => recipeTags[id].forEach(tag => { used[tag] = (used[tag] || 0) + 1; }));
  return used;
};
const fitsTags = (r, used) => recipeTags[r.id].every(tag => (used[tag] || 0) < TAG_CAP[tag]);

// → 15 recipe ids: Monday lunch, snack, dinner, Tuesday lunch, …
function drawMenu(random, avoid) {
  const used = {}, picks = {};
  for (const type of TYPES) {
    const order = shuffled(pools[type], random), chosen = [];
    // If the pool runs short, drop the variety rule, then the "not recently" rule
    for (const strict of [2, 1, 0]) for (const r of order) {
      if (chosen.length === 5) break;
      if (chosen.includes(r) || (strict > 0 && avoid.has(r.id)) || (strict > 1 && !fitsTags(r, used))) continue;
      chosen.push(r);
      recipeTags[r.id].forEach(tag => { used[tag] = (used[tag] || 0) + 1; });
    }
    picks[type] = chosen;
  }
  return [0, 1, 2, 3, 4].flatMap(d => TYPES.map(type => picks[type][d % picks[type].length].id));
}

const baseMenus = [];
function baseMenu(num) {
  if (num < 0) return drawMenu(seededRandom(hashString('week ' + num)), new Set());
  for (let i = baseMenus.length; i <= num; i++) {
    const recent = new Set([...(baseMenus[i - 1] || []), ...(baseMenus[i - 2] || [])]);
    baseMenus[i] = drawMenu(seededRandom(hashString('week ' + i)), recent);
  }
  return baseMenus[num];
}

function savedMenu(iso) {
  const ids = store.menus[iso];
  return Array.isArray(ids) && ids.length === 15 && ids.every(id => recipeById[id]) ? ids : null;
}
const menuOf     = num => savedMenu(isoOfWeek(num)) || baseMenu(num);
const neighbours = num => new Set([...menuOf(num - 1), ...menuOf(num + 1)]);

function weekMeals(w) {
  return menuOf(w.num).map((id, k) => ({ recipe: recipeById[id], di: Math.floor(k / 3), k }));
}
const mealLabel = m => t('daysShort')[m.di] + ' · ' + t('mealTypes')[m.recipe.type].label;

function shuffleWeek(n) {
  const w = weeks[n - 1];
  store.menus[w.iso] = drawMenu(Math.random, neighbours(w.num));
  saveStore();
  hideTip();
  buildWeek(n);
  showToast(t('toastShuffled'));
}

function resetWeek(n) {
  delete store.menus[weeks[n - 1].iso];
  saveStore();
  hideTip();
  buildWeek(n);
  showToast(t('toastReset'));
}

function swapMeal() {
  if (!modalAt) return;
  const w = weeks[modalAt.n - 1], k = modalAt.k;
  const ids = menuOf(w.num).slice();
  const inWeek = new Set(ids), avoid = neighbours(w.num);
  const used = tagCounts(ids.filter((_, i) => i !== k));
  const order = shuffled(pools[recipeById[ids[k]].type], Math.random);
  const pick = order.find(r => !inWeek.has(r.id) && !avoid.has(r.id) && fitsTags(r, used))
            || order.find(r => !inWeek.has(r.id) && !avoid.has(r.id))
            || order.find(r => !inWeek.has(r.id));
  if (!pick) return;
  ids[k] = pick.id;
  store.menus[w.iso] = ids;
  saveStore();
  buildWeek(modalAt.n);
  renderModal();
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

  // Lang button
  byId('lang-btn').textContent = t('langBtn');
  byId('header-dates').textContent = t('headerDates')(fmtPlanRange(), recipes.length);

  byId('hint-text').textContent = t(canHover ? 'hintMouse' : 'hintTouch')(recipes.length);
  byId('hint').hidden = !!store.hint2Off;

  buildTabs();

  // Rebuild all week content
  [1,2,3,4].forEach(buildWeek);

  if (modalAt) renderModal();
  refreshTip();
}

function dismissHint() {
  store.hint2Off = true;
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
  byId('tabs-nav').innerHTML = weeks.map(w => {
    const active = w.n === currentWeek;
    const range = fmtRangeShort(w.monday);
    return `<button type="button" class="tab-btn${active ? ' active' : ''}" aria-current="${active}"
      onclick="showWeek(${w.n})" data-tip="${esc(t('tipTab')(fmtRangeLong(w.monday)))}">
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
}

window.addEventListener('hashchange', () => {
  const m = /^#w([1-4])$/.exec(location.hash);
  if (m && +m[1] !== currentWeek) showWeek(+m[1]);
});

function jumpToday() {
  const el = document.querySelector('.week-section.active .day-col.today');
  if (!el) return;
  el.scrollIntoView({ block: 'start' });
  el.classList.remove('flash');
  void el.offsetWidth;            // restart the highlight
  el.classList.add('flash');
}

/* ============================================================
   Modal — recipe sheet with previous / next through the week
   ============================================================ */
const modalEl = byId('modal');
let modalAt = null;     // { n, k } — week tab and slot (0–14) in its menu
let lastFocus = null;

function openModal(n, k) {
  const wasOpen = !!modalAt;
  modalAt = { n, k };
  renderModal();
  if (wasOpen) return;

  lastFocus = document.activeElement;
  hideTip();
  modalEl.classList.add('open');
  document.body.classList.add('modal-open');
  // A history entry lets the phone's Back button close the recipe
  try { history.pushState({ modal: true }, ''); } catch (e) {}
  byId('m-close').focus({ preventScroll: true });
}

function renderModal() {
  const w = weeks[modalAt.n - 1];
  const meals = weekMeals(w);
  const { recipe: d, di } = meals[modalAt.k];
  const mt = t('mealTypes')[d.type];

  byId('m-name').textContent = d.name[lang];
  byId('m-meta').innerHTML =
    `<span class="meal-badge badge-${d.type}">${mt.icon} ${mt.label}</span>` +
    `<span>${t('days')[di]} · ${fmtDay(addDays(w.monday, di))}</span>`;

  const swapBtn = byId('m-swap');
  swapBtn.textContent = t('swap');
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
  if (!modalAt || modalAt.k + delta < 0 || modalAt.k + delta > 14) return;
  modalAt.k += delta;
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
  document.body.classList.remove('modal-open');
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
   Ticks — prep tasks (p:{monday}:{task}) and shopping rows
   (s:{monday}:{ingredient}) share one saved map
   ============================================================ */
document.addEventListener('change', e => {
  const key = e.target.dataset && e.target.dataset.tick;
  if (!key) return;
  if (e.target.checked) store.ticks[key] = 1;
  else delete store.ticks[key];
  saveStore();
  const w = weeks.find(x => key.startsWith(key[0] + ':' + x.iso + ':'));
  if (w) updateProgress(w.n);
});

function setPill(id, done, total) {
  const el = byId(id);
  if (!el) return;
  el.textContent = done === total ? '✓ ' + t('allDone') : done + ' / ' + total;
  el.classList.toggle('done', done === total);
}

function updateProgress(n) {
  const { w, rows, tasks } = weekData[n];
  setPill(`prep-count-${n}`, tasks.filter(task => store.ticks[`p:${w.iso}:${task.key}`]).length, tasks.length);

  let done = 0, left = 0;
  rows.forEach(row => {
    if (store.ticks[`s:${w.iso}:${row.key}`]) done++;
    else left += rowPrice(row) || 0;
  });
  setPill(`shop-count-${n}`, done, rows.length);

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

/* ============================================================
   Shopping list — the week's recipe lines grouped into rows
   (one per ingredient, see ingredients.js) with summed amounts
   ============================================================ */
const ingredientCache = new Map();
function ingredientFor(line) {
  if (!ingredientCache.has(line)) ingredientCache.set(line, ingredients.find(e => e.match.test(line)) || null);
  return ingredientCache.get(line);
}

function weekShopping(meals) {
  const rows = new Map();
  meals.forEach(meal => meal.recipe.ing.en.forEach((en, i) => {
    const entry = ingredientFor(en);
    const key = entry ? entry.key : 'other-' + en.toLowerCase();
    if (!rows.has(key)) rows.set(key, { key, entry, cat: entry ? entry.cat : 'Other', lines: [] });
    rows.get(key).lines.push({ en, es: meal.recipe.ing.es[i] || en, meal });
  }));
  return [...rows.values()];
}

const FRACTIONS = { '½': 1 / 2, '¼': 1 / 4, '¾': 3 / 4, '⅓': 1 / 3, '⅔': 2 / 3 };
const UNIT_WORDS = {
  en: [['lb', /^lbs?\b/i], ['cup', /^cups?\b/i], ['tbsp', /^tbsp\b/i], ['tsp', /^tsp\b/i], ['kg', /^kg\b/i],
       ['g', /^g\b/i], ['ml', /^ml\b/i], ['l', /^l\b/i], ['can', /^cans?\b/i], ['clove', /^cloves?\b/i],
       ['head', /^(whole\s+)?heads?\b/i], ['stalk', /^stalks?\b/i], ['bunch', /^bunch(es)?\b/i],
       ['slice', /^slices?\b/i], ['sprig', /^sprigs?\b/i]],
  es: [['cup', /^tazas?\b/i], ['tbsp', /^cdas?\b/i], ['tsp', /^cditas?\b/i], ['kg', /^kg\b/i], ['g', /^g\b/i],
       ['ml', /^ml\b/i], ['l', /^l\b/i], ['can', /^latas?\b/i], ['clove', /^dientes?\b/i], ['head', /^cabezas?\b/i],
       ['stalk', /^tallos?\b/i], ['bunch', /^atados?\b/i], ['slice', /^rebanadas?\b/i], ['sprig', /^ramas?\b/i]]
};
const UNIT_NAMES = {
  en: { lb: ['lb', 'lbs'], cup: ['cup', 'cups'], tbsp: 'tbsp', tsp: 'tsp', g: 'g', ml: 'ml', can: ['can', 'cans'],
        clove: ['clove', 'cloves'], head: ['head', 'heads'], stalk: ['stalk', 'stalks'], bunch: ['bunch', 'bunches'],
        slice: ['slice', 'slices'], sprig: ['sprig', 'sprigs'] },
  es: { lb: ['lb', 'lbs'], cup: ['taza', 'tazas'], tbsp: ['cda', 'cdas'], tsp: ['cdita', 'cditas'], g: 'g', ml: 'ml',
        can: ['lata', 'latas'], clove: ['diente', 'dientes'], head: ['cabeza', 'cabezas'], stalk: ['tallo', 'tallos'],
        bunch: ['atado', 'atados'], slice: ['rebanada', 'rebanadas'], sprig: ['rama', 'ramas'] }
};

// "1½ cups broccoli florets" → { qty: 1.5, unit: 'cup' } · "Salt" → null
function parseAmount(text) {
  let s = text.trim().replace(/^(juice of|jugo de)\s+/i, '');
  const m = /^(\d+(?:[.,]\d+)?)?\s*([½¼¾⅓⅔])?/.exec(s);
  if (!m[1] && !m[2]) return null;
  const qty = (m[1] ? parseFloat(m[1].replace(',', '.')) : 0) + (m[2] ? FRACTIONS[m[2]] : 0);
  s = s.slice(m[0].length).trim();
  const hit = UNIT_WORDS[lang].find(([, re]) => re.test(s));
  const unit = hit ? hit[0] : '';
  if (unit === 'kg') return { qty: qty * 1000, unit: 'g' };
  if (unit === 'l') return { qty: qty * 1000, unit: 'ml' };
  return { qty, unit };
}

function fmtQty(q) {
  const whole = Math.floor(q + 0.03), frac = q - whole;
  if (Math.abs(frac) < 0.03) return String(whole);
  const sym = Object.keys(FRACTIONS).find(f => Math.abs(FRACTIONS[f] - frac) < 0.03);
  if (sym) return (whole || '') + sym;
  const s = String(Math.round(q * 10) / 10);
  return lang === 'es' ? s.replace('.', ',') : s;
}

// `each` names what a bare number counts ("5" celery → "5 stalks")
function fmtAmount({ qty, unit }, each) {
  if (unit === 'g' && qty >= 1000) return fmtQty(qty / 1000) + ' kg';
  if (unit === 'ml' && qty >= 1000) return fmtQty(qty / 1000) + ' L';
  const name = unit ? UNIT_NAMES[lang][unit] : each && each[lang];
  if (!name) return fmtQty(qty);
  return fmtQty(qty) + ' ' + (Array.isArray(name) ? name[qty > 1 ? 1 : 0] : name);
}

const rowName  = row => row.entry ? row.entry[lang] : row.lines[0][lang];
const rowMeals = row => [...new Map(row.lines.map(l => [l.meal.k, l.meal])).values()];
const rowPrice = row => row.entry && row.entry.price
  ? row.entry.price * row.lines.length * (1 + priceConfig.globalOffset) : null;
const rowOptional = row => row.lines.every(l => /optional|opcional/i.test(l[lang]));

// Same units are added up: "5 cloves + 1 head" · lemons and limes are just counted
function rowAmount(row) {
  const kind = row.entry && row.entry.kind;
  if (!row.entry || kind === 'staple' || kind === 'spice') return '';
  const totals = [];
  let unmeasured = false;
  row.lines.forEach(line => {
    let a = parseAmount(line[lang]);
    if (kind === 'count') a = { qty: a && !a.unit && a.qty >= 1 ? a.qty : 1, unit: '' };
    if (!a) { unmeasured = true; return; }
    const same = totals.find(x => x.unit === a.unit);
    if (same) same.qty += a.qty;
    else totals.push({ qty: a.qty, unit: a.unit });
  });
  const text = totals.map(total => fmtAmount(total, row.entry.each)).join(' + ');
  return text && unmeasured ? text + ' + ' + t('more') : text;
}

/* ============================================================
   Shopping list actions — copy / share / clear
   ============================================================ */
function listText(n) {
  const { w, rows } = weekData[n];
  const shopCats = t('shopCats');
  const lines = [];
  shopCategories.forEach(cat => {
    const left = sortedRows(rows, cat).filter(row => !store.ticks[`s:${w.iso}:${row.key}`]);
    if (left.length) lines.push('', (shopCats[cat] || cat).toUpperCase(), ...left.map(row => {
      const amount = rowAmount(row);
      return '☐ ' + rowName(row) + (amount ? ' — ' + amount : '');
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
   Shopping section builders
   buildShopTools → price control + actions (built once per render)
   buildShopList  → rows, subtotals and totals (rebuilt on offset change)
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

const sortedRows = (rows, cat) => rows.filter(row => row.cat === cat)
  .sort((a, b) => rowName(a).localeCompare(rowName(b), lang));

function buildShopList(n) {
  const { w, rows } = weekData[n];
  const shopCats  = t('shopCats');
  const globalPct = fmtPct(priceConfig.globalOffset);
  let grandTotal  = 0;

  const shopHtml = shopCategories.map(cat => {
    const catRows = sortedRows(rows, cat);
    if (!catRows.length) return '';
    let catTotal = 0;

    const itemsHtml = catRows.map(row => {
      const key = `s:${w.iso}:${row.key}`;
      const price = rowPrice(row);
      const amount = rowAmount(row);
      const meals = rowMeals(row);
      const kind = row.entry && row.entry.kind;

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
                   (rowOptional(row) ? `<span class="item-tag">${t('tagOptional')}</span>` : '');
      return `<li><label class="check">
        <input type="checkbox" data-tick="${esc(key)}"${store.ticks[key] ? ' checked' : ''}>
        <span class="item-main" data-tip="${esc(detail.join('\n'))}">
          <span class="item-name">${rowName(row)}</span>${amount ? ` <span class="item-amount">${amount}</span>` : ''}${tags}
          <span class="item-meals">${meals.length > 2 ? t('inMeals')(meals.length) : meals.map(mealLabel).join(', ')}</span>
        </span>${priceSpan}
      </label></li>`;
    }).join('');

    const subtotalHtml = catTotal
      ? `<p class="cat-subtotal">${t('catSubtotal')}: ~${money(catTotal)}</p>`
      : '';

    return `<div class="shop-cat">
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

/* ============================================================
   Sunday prep — the make-ahead tasks of the week's recipes,
   each listed once with the meals that need it
   ============================================================ */
function weekPrep(meals) {
  const tasks = [{ key: 'chop-veg', meals: [] }];
  meals.forEach(meal => (meal.recipe.prep || []).forEach(key => {
    if (!prepTasks[key]) return;
    let task = tasks.find(x => x.key === key);
    if (!task) tasks.push(task = { key, meals: [] });
    task.meals.push(meal);
  }));
  return tasks;
}

/* ============================================================
   Week Renderer
   ============================================================ */
const weekData = {};    // n → { w, meals, rows, tasks } of the last render

function buildWeek(n) {
  const w = weeks[n - 1];
  const meals = weekMeals(w);
  const rows = weekShopping(meals);
  const tasks = weekPrep(meals);
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
      const mt = mealTypes[recipe.type];
      const tip = [
        t('tipMeal')(recipe.ing[lang].length, recipe.steps[lang].length),
        recipe.tip && recipe.tip[lang] && '💚 ' + recipe.tip[lang],
        openHint
      ].filter(Boolean).join('\n');
      return `<button type="button" class="meal-slot" onclick="openModal(${n},${k})" data-tip="${esc(tip)}">
        <span class="meal-badge badge-${recipe.type}">${mt.icon} ${mt.label}</span>
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

  const saved = !!savedMenu(w.iso);
  const tool = (fn, label, tipKey) =>
    `<button type="button" class="tool-btn" onclick="${fn}(${n})" data-tip="${esc(t(tipKey))}">${t(label)}</button>`;

  section.innerHTML = `
    <div class="week-head">
      <h2 class="week-header">${t('relWeek')(w.rel)} <span>${fmtRangeLong(w.monday)}</span></h2>
      <div class="week-tools">
        ${hasToday ? tool('jumpToday', 'todayBtn', 'tipToday') : ''}
        ${tool('shuffleWeek', 'shuffle', 'tipShuffle')}
        ${saved ? tool('resetWeek', 'resetMenu', 'tipReset') : ''}
      </div>
    </div>
    <div class="sunday-prep">
      <button type="button" class="prep-head${prepOpen ? ' open' : ''}" id="prep-toggle-${n}" onclick="togglePrep(${n})"
        aria-expanded="${prepOpen}" aria-controls="prep-list-${n}" data-tip="${esc(t('tipPrepToggle'))}">
        <span class="prep-title">📋 ${t('prepTitle')(fmtDay(addDays(w.monday, -1)))}</span>
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
