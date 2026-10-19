// node tools/check-weeks.js [weeks=120]
//
// Checks that every week's prep and shopping list match the meals
// planned for it, and that menus behave: no recipe twice in a week, none
// repeated within the four weeks on screen, and RULES.experimental (one or
// two) experimental meals a week. Runs the planner the way the page does, for
// the default filters (home country + AI-created) and for all countries.
// Exits with 1 when something is wrong.
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const weeksToCheck = +process.argv[2] || 120;
const files = ['data/recipes.js', 'data/recipes-world.js', 'data/recipes-ai.js', 'data/ingredients.js', 'data/countries.js',
  'data/diets.js', 'js/planner.js', 'js/lists.js', 'js/diets.js'];
const ctx = new Function(files.map(f => fs.readFileSync(path.join(root, f), 'utf8')).join('\n;\n') +
  ';return { recipes, prepTasks, freezableVeg, Planner, Lists, shopCategories };')();
const { recipes, prepTasks, freezableVeg, Planner, Lists, shopCategories } = ctx;

const problems = [];
const report = (where, what) => problems.push(`${where}: ${what}`);

/* ── What a recipe needs done ahead, read from its own text ── */
const stepsOf = r => r.steps.en.join(' ');
const linesOf = r => r.ing.en.join(' | ');
const has = (r, re) => re.test(linesOf(r));
// Longest time a step spends doing one of `verbs`, in minutes
function longest(r, verbs) {
  let most = 0;
  stepsOf(r).split(/(?<=\.)\s|\/|;/).forEach(step => {
    if (!new RegExp(`\\b(${verbs})`, 'i').test(step)) return;
    for (const m of step.matchAll(/(\d+(?:\.\d+)?)?\s*(½)?(?:[–-]\d+(?:\.\d+)?)?\s*(hours?|hrs?|h\b|min)/gi)) {
      const n = (m[1] ? parseFloat(m[1]) : 0) + (m[2] ? 0.5 : 0);
      if (n) most = Math.max(most, /^h/i.test(m[3]) ? n * 60 : n);
    }
    if (/overnight/i.test(step)) most = Math.max(most, 8 * 60);
  });
  return most;
}
const needs = {
  // marinating for an hour or more, or overnight
  marinate: r => longest(r, 'marinat') >= 60,
  // soaking overnight (beans, hominy, salt cod — oats count as overnight oats)
  soak: r => /soak[^.|]*?(overnight|24 h)/i.test(stepsOf(r) + ' | ' + linesOf(r)) && !/soak the oats/i.test(stepsOf(r)),
  // two hours or more in the fridge or freezer
  chill: r => longest(r, 'chill|freez|refrigerat|set in the fridge') >= 120,
  // an hour and a half or more on the stove or in the oven
  slow: r => longest(r, 'simmer|braise|stew|cook|roast|bake|boil') >= 90,
  // made the night before
  overnight: r => /overnight|evening before|night before/i.test(stepsOf(r))
};
// Which prep tasks cover each need
const covers = {
  marinate: ['marinate'],
  soak: ['soak'],
  chill: ['chill-ahead', 'freeze-ahead', 'banana-pops', 'yogurt-bark', 'arroz-con-leche', 'chia-pudding', 'overnight-oats'],
  slow: ['cook-ahead', 'rub-ribs', 'apple-chips'],
  overnight: ['marinate', 'soak', 'overnight-oats', 'chia-pudding', 'chill-ahead', 'freeze-ahead', 'arroz-con-leche', 'cook-ahead']
};
// What a recipe must have for a prep task to make sense for it
const fits = {
  'chop-veg': () => true,
  'cook-chicken': r => has(r, /chicken/i),
  'rice': r => has(r, /\brice\b(?! (noodles|flour|paper|cakes|vinegar))/i) && !/coconut rice/i.test(r.name.en),
  'quinoa': r => has(r, /quinoa/i),
  'brown-beef': r => has(r, /ground beef|minced beef|beef mince/i) || /brown|cook until done/i.test(stepsOf(r)) && has(r, /ground|mince/i),
  'cook-ahead': r => longest(r, 'simmer|braise|stew|cook|roast|bake|boil') >= 40,
  'roast-veg': r => has(r, /zucchini/i) && has(r, /bell pepper/i) && has(r, /cherry tomato/i),
  'roast-pumpkin': r => has(r, /pumpkin|squash/i),
  'bake-ahead': r => /muffin|bread|loaf|cookie|budín|cake/i.test(r.name.en) && /bake/i.test(stepsOf(r)),
  'egg-muffins': r => /muffin/i.test(r.name.en) && has(r, /\beggs?\b/i),
  'energy-balls': r => /energy balls/i.test(r.name.en),
  'apple-chips': r => /apple chips/i.test(r.name.en),
  'freeze-bananas': r => has(r, /banana/i),
  'banana-pops': r => /pop/i.test(r.name.en),
  'yogurt-bark': r => /bark/i.test(r.name.en),
  'arroz-con-leche': r => /arroz con leche/i.test(r.name.en),
  'chill-ahead': r => needs.chill(r) || /chill|refrigerat|set/i.test(stepsOf(r)),
  'freeze-ahead': r => /freez/i.test(stepsOf(r)),
  'rub-ribs': r => /ribs/i.test(r.name.en),
  'marinate': r => /marinat|rub (the )?\w+ with/i.test(stepsOf(r)),
  'soak': r => needs.soak(r),
  'overnight-oats': r => has(r, /oats/i) && needs.overnight(r),
  'chia-pudding': r => has(r, /chia/i)
};

/* ── Each recipe on its own ── */
const seen = new Map();
recipes.forEach(r => {
  const where = `recipe ${r.id}`;
  (r.prep || []).forEach(key => {
    if (!prepTasks[key]) report(where, `unknown prep task "${key}"`);
    else if (!fits[key]) report(where, `prep task "${key}" has no check in tools/check-weeks.js`);
    else if (!fits[key](r)) report(where, `prep task "${key}" does not fit this recipe`);
  });
  Object.keys(needs).forEach(need => {
    if (needs[need](r) && !(r.prep || []).some(k => covers[need].includes(k))) report(where, `needs "${need}" prep but has none`);
  });
  const name = r.name.en.toLowerCase();
  if (seen.has(name)) report(where, `same name as ${seen.get(name)}`);
  seen.set(name, r.id);
});

/* ── Weeks, the way the page draws them ── */
// small: a pool too small for four weeks without repeats; they are only counted
function checkWeeks(label, allow, small = false) {
  Planner.configure({ allow });
  const now = Planner.weekNumber(new Date(2026, 9, 19));
  const menus = [];
  for (let n = now; n < now + weeksToCheck; n++) menus.push(Planner.baseMenu(n));
  let experimental = 0, repeats = 0;
  menus.forEach((ids, i) => {
    const where = `${label} week ${now + i}`;
    const meals = ids.map((id, k) => ({ recipe: Planner.recipe(id), di: Math.floor(k / Planner.SLOTS), k }));
    // no recipe twice in a week, none from the three weeks before (the page shows four)
    if (new Set(ids).size < ids.length) report(where, 'a recipe appears twice');
    for (let back = 1; back <= 3 && i - back >= 0; back++) {
      const again = ids.filter(id => menus[i - back].includes(id));
      repeats += again.length;
      if (again.length && !small) report(where, `repeats ${again.join(', ')} from ${back} week(s) before`);
    }
    if (!small && Planner.cost(ids) > 0) report(where, `breaks a balance rule (cost ${Planner.cost(ids)})`);
    const exp = meals.filter(m => m.recipe.experimental).length;
    const [expMin, expMax] = Planner.RULES.experimental;
    const poolHasExp = recipes.some(r => r.experimental && allow(r));
    if (exp > expMax || poolHasExp && exp < expMin) report(where, `${exp} experimental meals`);
    experimental += exp;
    // shopping list: every line of every meal in exactly one row, nothing else
    const rows = Lists.shopping(meals);
    rows.forEach(row => { if (!shopCategories.includes(row.cat)) report(where, `row ${row.key} is in a category the page does not show`); });
    const counted = new Map();
    rows.forEach(row => row.lines.forEach(line => {
      const key = line.meal.k + '|' + line.en;
      counted.set(key, (counted.get(key) || 0) + 1);
      if (!ids[line.meal.k] || Planner.recipe(ids[line.meal.k]) !== line.meal.recipe) report(where, `row ${row.key} names a meal not in the week`);
    }));
    meals.forEach(m => m.recipe.ing.en.forEach((en, li) => {
      const entry = Lists.entryFor(en);
      if (entry && entry.kind === 'none') return;
      const n = counted.get(m.k + '|' + en) || 0;
      const want = m.recipe.ing.en.filter(x => x === en).length;
      if (n !== want) report(where, `"${en}" of ${m.recipe.id} is on the list ${n} time(s), expected ${want}`);
      if (!entry) report(where, `"${en}" of ${m.recipe.id} has no shopping row (lands in Other)`);
      const es = m.recipe.ing.es[li];
      if (!es) report(where, `${m.recipe.id} line ${li + 1} has no Spanish text`);
    }));
    // amounts must add up the same in both languages
    rows.forEach(row => {
      const en = Lists.amount(row, 'en').text, es = Lists.amount(row, 'es').text;
      const nums = s => (s.match(/[\d½¼¾⅓⅔.,]+/g) || []).join(' ').replace(/,/g, '.');
      if (!row.lines.some(l => /\blbs?\b/.test(l.en)) && nums(en) !== nums(es)) report(where, `row ${row.key} adds up to "${en}" in English but "${es}" in Spanish`);
    });
    // Sunday prep: every portion is for that day's meals of this week, kept
    // where it lasts until the meal (fridge or pantry while it keeps, else
    // the freezer and thawed the night before, else made fresh), and every
    // meal that needs work ahead gets it once
    const portions = Lists.prep(meals);
    portions.forEach(p => {
      const spec = prepTasks[p.key], gap = p.di + 1;
      if (!p.meals.length) report(where, `prep "${p.key}" for day ${p.di} is for no meal`);
      p.meals.forEach(m => {
        if (Planner.recipe(ids[m.k]) !== m.recipe) report(where, `prep "${p.key}" names a meal not in the week`);
        if (m.di !== p.di) report(where, `prep "${p.key}" for day ${p.di} lists ${m.recipe.id} of day ${m.di}`);
        if (p.key !== 'chop-veg' && !(m.recipe.prep || []).includes(p.key)) report(where, `prep "${p.key}" lists ${m.recipe.id}, which does not need it`);
      });
      const ok = {
        fridge: !spec.store && gap <= spec.keeps,
        pantry: spec.store === 'pantry' && gap <= spec.keeps,
        freezer: spec.store === 'freezer' ? p.thaw == null : spec.freezes && gap > spec.keeps && p.thaw === p.di - 1,
        fresh: spec.store !== 'freezer' && gap > spec.keeps && (!spec.freezes || p.key === 'chop-veg')
      }[p.store];
      if (!ok) report(where, `prep "${p.key}" for day ${p.di} is kept as "${p.store}", which does not fit`);
      if (p.key === 'chop-veg' && p.store === 'freezer' && p.items.some(r => !freezableVeg.includes(r.key))) report(where, 'a vegetable that does not freeze is frozen');
      if (p.key === 'chop-veg' && p.store === 'fresh' && p.items.some(r => freezableVeg.includes(r.key))) report(where, 'a vegetable that freezes is left to chop fresh');
    });
    if (new Set(portions.map(p => [p.key, p.di, p.store].join(':'))).size < portions.length) report(where, 'a prep portion is listed twice');
    meals.forEach(m => (m.recipe.prep || []).forEach(key => {
      if (key !== 'chop-veg' && portions.filter(p => p.key === key && p.meals.includes(m)).length !== 1) report(where, `prep "${key}" of ${m.recipe.id} is not listed once`);
    }));
    // Chopping: each vegetable of each day's meals in that day's chopping, once
    const skip = ['peas', 'corn', 'edamame', 'avocados', 'coleslaw-mix', 'potatoes', 'sweet-potatoes'];
    rows.filter(row => row.cat === 'Vegetables' && row.entry.kind !== 'spice' && !skip.includes(row.key)).forEach(row => {
      [...new Set(row.lines.map(l => l.meal.di))].forEach(di => {
        const n = portions.filter(p => p.key === 'chop-veg' && p.di === di && p.items.some(x => x.key === row.key)).length;
        if (n !== 1) report(where, `${row.key} for day ${di} is chopped ${n} times`);
      });
    });
    portions.filter(p => p.key === 'chop-veg').forEach(p => p.items.forEach(row => {
      if (!row.lines.some(l => l.meal.di === p.di)) report(where, `chopping for day ${p.di} lists ${row.key}, which that day does not use`);
    }));
  });
  console.log(`${label}: ${menus.length} weeks, ${(experimental / menus.length).toFixed(2)} experimental and ` +
    `${(repeats / menus.length).toFixed(2)} repeated meals a week`);
}

checkWeeks('home (AR) + AI', r => r.ai || r.country === 'AR');
checkWeeks('all countries', () => true);
checkWeeks('Italy, Mexico, Japan', r => ['IT', 'MX', 'JP'].includes(r.country), true);   // 15 breakfasts, 14 snacks

const unique = [...new Set(problems)];
const counts = {};
unique.forEach(p => { const kind = p.replace(/^[^:]*: /, '').replace(/"[^"]*"|\S*-\S*|\d+/g, '…'); counts[kind] = (counts[kind] || 0) + 1; });
if (unique.length) {
  console.log(`\n${unique.length} problems:`);
  unique.slice(0, process.argv.includes('--all') ? Infinity : 80).forEach(p => console.log(' - ' + p));
  console.log('\nBy kind:');
  Object.entries(counts).sort((a, b) => b[1] - a[1]).forEach(([k, n]) => console.log(String(n).padStart(5), k));
  process.exit(1);
}
console.log('All good.');
