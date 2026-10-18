/* ============================================================
   Lists — the shopping list and the prep list of a week
   (logic only, no DOM)

   Reads `ingredients` (data/ingredients.js) and `prepTasks`
   (data/recipes.js). A meal is { recipe, di, k }: the recipe, its
   day (0 = Monday) and its slot in the week (0–19).
   ============================================================ */
const Lists = (() => {

  /* ── Shopping rows ─────────────────────────────────────────── */
  const cache = new Map();
  function ingredientFor(line) {
    if (!cache.has(line)) cache.set(line, ingredients.find(e => e.match.test(line)) || null);
    return cache.get(line);
  }

  // One row per ingredient: the week's recipe lines grouped by
  // their match in data/ingredients.js (unmatched lines stand alone)
  function shopping(meals) {
    const rows = new Map();
    meals.forEach(meal => meal.recipe.ing.en.forEach((en, i) => {
      const entry = ingredientFor(en);
      if (entry && entry.kind === 'none') return;          // water, ice: never bought
      const key = entry ? entry.key : 'other-' + en.toLowerCase();
      if (!rows.has(key)) rows.set(key, { key, entry, cat: entry ? entry.cat : 'Other', lines: [] });
      rows.get(key).lines.push({ en, es: meal.recipe.ing.es[i] || en, meal });
    }));
    return [...rows.values()];
  }

  const name       = (row, lang) => row.entry ? row.entry[lang] : row.lines[0][lang];

  // What to use instead (data/ingredients.js `substitutes`), for a
  // shopping row or an English recipe line — or null
  function substitute(rowOrLine, lang) {
    const entry = typeof rowOrLine === 'string' ? ingredientFor(rowOrLine) : rowOrLine.entry;
    const alt = entry && substitutes[entry.key];
    return alt ? alt[lang === 'es' ? 1 : 0] : null;
  }
  const isOptional = (row, lang) => row.lines.every(l => /optional|opcional/i.test(l[lang]));
  const kind       = row => row.entry && row.entry.kind;

  // The meals a row is for, each once
  const mealsOf = row => [...new Map(row.lines.map(l => [l.meal.k, l.meal])).values()];

  // Estimated price with the price adjustment, or null if unpriced
  const price = (row, offset) => row.entry && row.entry.price
    ? row.entry.price * row.lines.length * (1 + offset) : null;

  /* ── Amounts ───────────────────────────────────────────────── */
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

  // Units that can come after the ingredient: "3 garlic cloves"
  const UNIT_AFTER = new Set(['clove', 'stalk', 'head', 'sprig', 'bunch']);

  // "1½ cups broccoli florets" → { qty: 1.5, unit: 'cup' } · "Salt" → null
  function parseAmount(text, lang) {
    let s = text.trim().replace(/^(juice of|jugo de)\s+/i, '');
    const m = /^(\d+(?:[.,]\d+)?)?\s*([½¼¾⅓⅔])?/.exec(s);
    if (!m[1] && !m[2]) return null;
    const qty = (m[1] ? parseFloat(m[1].replace(',', '.')) : 0) + (m[2] ? FRACTIONS[m[2]] : 0);
    s = s.slice(m[0].length).trim();
    const after = s.replace(/^\S+\s+/, '');
    const hit = UNIT_WORDS[lang].find(([, re]) => re.test(s)) ||
                UNIT_WORDS[lang].find(([unit, re]) => UNIT_AFTER.has(unit) && re.test(after));
    const unit = hit ? hit[0] : '';
    if (unit === 'kg') return { qty: qty * 1000, unit: 'g' };
    if (unit === 'l') return { qty: qty * 1000, unit: 'ml' };
    return { qty, unit };
  }

  function fmtQty(q, lang) {
    const whole = Math.floor(q + 0.03), frac = q - whole;
    if (Math.abs(frac) < 0.03) return String(whole);
    const sym = Object.keys(FRACTIONS).find(f => Math.abs(FRACTIONS[f] - frac) < 0.03);
    if (sym) return (whole || '') + sym;
    const s = String(Math.round(q * 10) / 10);
    return lang === 'es' ? s.replace('.', ',') : s;
  }

  // `each` names what a bare number counts ("5" celery → "5 stalks")
  function fmtAmount({ qty, unit }, each, lang) {
    if (unit === 'g' && qty >= 1000) return fmtQty(qty / 1000, lang) + ' kg';
    if (unit === 'ml' && qty >= 1000) return fmtQty(qty / 1000, lang) + ' L';
    const word = unit ? UNIT_NAMES[lang][unit] : each && each[lang];
    if (!word) return fmtQty(qty, lang);
    return fmtQty(qty, lang) + ' ' + (Array.isArray(word) ? word[qty > 1 ? 1 : 0] : word);
  }

  // Same units are added up: "5 cloves + 1 head"; lemons and limes are
  // just counted. partial: some lines had no amount ("to serve").
  function amount(row, lang) {
    const k = kind(row);
    if (!row.entry || k === 'staple' || k === 'spice') return { text: '', partial: false };
    const totals = [];
    let partial = false;
    row.lines.forEach(line => {
      let a = parseAmount(line[lang], lang);
      if (k === 'count') a = { qty: a && !a.unit && a.qty >= 1 ? a.qty : 1, unit: '' };
      if (!a) { partial = true; return; }
      const same = totals.find(x => x.unit === a.unit);
      if (same) same.qty += a.qty;
      else totals.push({ qty: a.qty, unit: a.unit });
    });
    // Pounds and grams in one row: add the pounds to the grams
    const lb = totals.find(x => x.unit === 'lb'), g = totals.find(x => x.unit === 'g');
    if (lb && g) { g.qty += lb.qty * 453.6; totals.splice(totals.indexOf(lb), 1); }
    return { text: totals.map(total => fmtAmount(total, row.entry.each, lang)).join(' + '), partial: partial && totals.length > 0 };
  }

  /* ── Prep ──────────────────────────────────────────────────── */
  // Two big prep sessions — Sunday and Wednesday evening — plus the
  // evenings before for what must soak or marinate overnight. Days count
  // from Monday (0), so Sunday is -1.
  const SUNDAY = -1, MIDWEEK = 2;

  // When to do a task for a meal on day `di`: at the first big session whose
  // result still keeps until then (prepTasks `keeps`, in days), else — and
  // always for `night` tasks — the evening before
  function prepDay(spec, di) {
    if (!spec.night) for (const day of [SUNDAY, MIDWEEK]) if (day < di && di - day <= spec.keeps) return day;
    return di - 1;
  }

  // Fresh vegetables that are not washed and chopped ahead
  const NOT_CHOPPED = new Set(['peas', 'corn', 'edamame', 'avocados', 'coleslaw-mix', 'potatoes', 'sweet-potatoes']);

  // The make-ahead tasks of the week, by session: { key, day, night, meals,
  // items }, in day order and then the order of prepTasks. Washing and
  // chopping comes first in each session, with its vegetables (shopping
  // rows) as `items`.
  function prep(meals) {
    const order = Object.keys(prepTasks), tasks = new Map();
    const task = (key, day) => {
      const id = day + ':' + key;
      if (!tasks.has(id)) tasks.set(id, { key, day, night: !!prepTasks[key].night, meals: [], items: [] });
      return tasks.get(id);
    };
    shopping(meals).forEach(row => {
      if (row.cat !== 'Vegetables' || row.entry.kind === 'spice' || NOT_CHOPPED.has(row.key)) return;
      row.lines.forEach(({ meal }) => {
        const chop = task('chop-veg', prepDay(prepTasks['chop-veg'], meal.di));
        if (!chop.items.includes(row)) chop.items.push(row);
        if (!chop.meals.includes(meal)) chop.meals.push(meal);
      });
    });
    meals.forEach(meal => (meal.recipe.prep || []).forEach(key => {
      if (!prepTasks[key] || key === 'chop-veg') return;
      const t = task(key, prepDay(prepTasks[key], meal.di));
      if (!t.meals.includes(meal)) t.meals.push(meal);
    }));
    tasks.forEach(t => t.meals.sort((a, b) => a.k - b.k));
    return [...tasks.values()].sort((a, b) => a.day - b.day || order.indexOf(a.key) - order.indexOf(b.key));
  }

  return { shopping, name, isOptional, kind, mealsOf, price, amount, prep, prepDay, substitute, entryFor: ingredientFor };
})();
