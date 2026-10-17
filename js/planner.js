/* ============================================================
   Planner — balanced random weekly menus (logic only, no DOM)

   Reads `recipes` (data/recipes.js). A week is 5 lunches, 5 snacks
   and 5 dinners, Monday–Friday.

   How a week is drawn:
   1. The 15 meal slots are filled in random order. Each slot takes
      the recipe that adds the least COST to what is already picked
      (a rule broken or a recipe eaten lately costs; one still
      missing — say a second fish meal — is a saving). Ties are
      broken at random.
   2. The dinners are matched to the lunches so the two meals of a
      day differ in protein and starch.
   3. This is repeated a few times and the cheapest week wins.

   The randomness is seeded by the week number, so every device
   shows the same menu for the same week.
   ============================================================ */
const Planner = (() => {
  const TYPES = ['lunch', 'snack', 'dinner'];
  const DAYS = 5;

  /* What a balanced week looks like — [min, max] meals per week */
  const RULES = {
    mains: {                                   // the 10 lunches + dinners
      protein: { fish: [2, 3], poultry: [1, 4], beef: [0, 2], pork: [0, 2], plant: [1, 3], egg: [0, 1] },
      redMeat: [0, 3],                         // beef and pork together
      base:    { pasta: [0, 2], rice: [0, 3], bread: [0, 4], potato: [0, 3], grain: [0, 3] }
    },
    snacks: {
      group: { fruit: [2, 3], dairy: [1, 2], veg: [0, 1], grain: [0, 2] }
    },
    tagCap: { soup: 2 },                       // any other tag: at most once a week
    recentWeeks: 2                             // stay away from the last two weeks' recipes
  };

  /* What breaking each rule costs; the cheapest week wins */
  const COST = { rule: 10, lastWeek: 8, earlierWeek: 4, sameDay: 3 };
  const ATTEMPTS = 12;

  const byId  = Object.fromEntries(recipes.map(r => [r.id, r]));
  const pools = Object.fromEntries(TYPES.map(type => [type, recipes.filter(r => r.type === type)]));

  /* ── Seeded randomness ─────────────────────────────────────── */
  function hash(text) {                       // FNV-1a
    let h = 2166136261;
    for (let i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function seeded(seed) {                     // mulberry32
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

  /* ── Scoring ───────────────────────────────────────────────── */
  const bump = (counts, key) => { if (key) counts[key] = (counts[key] || 0) + 1; };
  const outside = (n, [min, max]) => n < min ? min - n : n > max ? n - max : 0;
  const isRed = r => r.protein === 'beef' || r.protein === 'pork';

  function add(r, s) {
    if (r.type === 'snack') bump(s.group, r.group);
    else { bump(s.protein, r.protein); bump(s.base, r.base); if (isRed(r)) s.red++; }
    (r.tags || []).forEach(tag => bump(s.tag, tag));
  }

  // How many of each protein, starch, snack group and tag a menu has
  function summary(ids) {
    const s = { protein: {}, base: {}, group: {}, tag: {}, red: 0 };
    ids.forEach(id => add(byId[id], s));
    return s;
  }

  // Change in rule cost when a count goes from n to n + 1
  const step = (n = 0, range) => !range ? 0 : n < range[0] ? -COST.rule : n >= range[1] ? COST.rule : 0;

  // What adding recipe r to a partly picked week (counts in s) would cost
  function addCost(r, s, avoid) {
    let c = avoid.get(r.id) || 0;
    if (r.type === 'snack') c += step(s.group[r.group], RULES.snacks.group[r.group]);
    else {
      c += step(s.protein[r.protein], RULES.mains.protein[r.protein]);
      c += step(s.base[r.base], RULES.mains.base[r.base]);
      if (isRed(r)) c += step(s.red, RULES.mains.redMeat);
    }
    (r.tags || []).forEach(tag => { if ((s.tag[tag] || 0) >= (RULES.tagCap[tag] || 1)) c += COST.rule; });
    return c;
  }

  // Lunch and dinner of one day: same protein, same starch
  const clashes = (lunch, dinner) =>
    (lunch.protein === dinner.protein ? 1 : 0) +
    (lunch.base === dinner.base && lunch.base !== 'none' ? 1 : 0);

  function cost(ids, avoid) {
    const s = summary(ids), { mains, snacks } = RULES;
    let total = 0;
    for (const p in mains.protein) total += COST.rule * outside(s.protein[p] || 0, mains.protein[p]);
    total += COST.rule * outside(s.red, mains.redMeat);
    for (const b in mains.base) total += COST.rule * outside(s.base[b] || 0, mains.base[b]);
    for (const g in snacks.group) total += COST.rule * outside(s.group[g] || 0, snacks.group[g]);
    for (const tag in s.tag) total += COST.rule * Math.max(0, s.tag[tag] - (RULES.tagCap[tag] || 1));
    ids.forEach(id => { total += avoid.get(id) || 0; });
    for (let d = 0; d < DAYS; d++) total += COST.sameDay * clashes(byId[ids[d * 3]], byId[ids[d * 3 + 2]]);
    return total;
  }

  /* ── Drawing a week ────────────────────────────────────────── */
  const ORDERS = (function permute(rest) {    // every order of the 5 dinners
    if (rest.length < 2) return [rest];
    return rest.flatMap((x, i) => permute(rest.filter((_, j) => j !== i)).map(p => [x, ...p]));
  })([0, 1, 2, 3, 4]);

  // → 15 ids: Monday lunch, snack, dinner, Tuesday lunch, … — dinners
  //   matched to the lunches with the fewest same-day clashes
  function arrange({ lunch, snack, dinner }) {
    let order = ORDERS[0], fewest = Infinity;
    for (const o of ORDERS) {
      let n = 0;
      for (let d = 0; d < DAYS && n < fewest; d++) n += clashes(lunch[d], dinner[o[d]]);
      if (n < fewest) { fewest = n; order = o; if (!n) break; }
    }
    const ids = [];
    for (let d = 0; d < DAYS; d++) ids.push(lunch[d].id, snack[d].id, dinner[order[d]].id);
    return ids;
  }

  // Fills the 15 slots in random order, each with the cheapest recipe
  function build(random, avoid) {
    const s = { protein: {}, base: {}, group: {}, tag: {}, red: 0 };
    const picks = { lunch: [], snack: [], dinner: [] }, used = new Set();
    for (const type of shuffled(TYPES.flatMap(type => Array(DAYS).fill(type)), random)) {
      let best = null, bestCost = Infinity;
      for (const r of shuffled(pools[type], random)) {
        if (used.has(r.id)) continue;
        const c = addCost(r, s, avoid);
        if (c < bestCost) { best = r; bestCost = c; }
      }
      // a list with fewer than 5 recipes of a type repeats them
      if (!best) best = pools[type][picks[type].length % pools[type].length];
      picks[type].push(best);
      used.add(best.id);
      add(best, s);
    }
    return arrange(picks);
  }

  // avoid: Map of recipe id → extra cost for using it this week
  function draw(seed, avoid = new Map()) {
    const random = seeded(seed);
    let best = null, bestCost = Infinity;
    for (let i = 0; i < ATTEMPTS && bestCost > 0; i++) {
      const ids = build(random, avoid), c = cost(ids, avoid);
      if (c < bestCost) { best = ids; bestCost = c; }
    }
    return best;
  }

  // Recipes of nearby weeks cost extra, so they are not repeated
  function avoiding(menus, weight = COST.lastWeek) {
    const avoid = new Map();
    menus.forEach(ids => (ids || []).forEach(id => avoid.set(id, Math.max(weight, avoid.get(id) || 0))));
    return avoid;
  }

  /* ── Weeks ─────────────────────────────────────────────────── */
  // Weeks are numbered from this Monday and week n always draws the same
  // menu. Each week depends on the two before it, so a page load works
  // through every week since then (about a millisecond each).
  const EPOCH = new Date(2026, 9, 5);
  const weekNumber   = monday => Math.round((monday - EPOCH) / 6048e5);
  const mondayOfWeek = num => new Date(EPOCH.getFullYear(), EPOCH.getMonth(), EPOCH.getDate() + 7 * num);

  const baseMenus = [];
  function baseMenu(num) {
    if (num < 0) return draw(hash('week ' + num));
    for (let i = baseMenus.length; i <= num; i++) {
      const avoid = new Map();
      for (let back = RULES.recentWeeks; back >= 1; back--) {
        (baseMenus[i - back] || []).forEach(id => avoid.set(id, back === 1 ? COST.lastWeek : COST.earlierWeek));
      }
      baseMenus[i] = draw(hash('week ' + i), avoid);
    }
    return baseMenus[num];
  }

  /* ── Changing a week ───────────────────────────────────────── */
  // A fresh balanced menu that keeps away from the neighbouring weeks
  const shuffleMenu = (seed, neighbours) => draw(seed, avoiding(neighbours));

  // Replaces slot k with the recipe that keeps the week most balanced
  function swapMeal(ids, k, seed, neighbours) {
    const avoid = avoiding(neighbours), inWeek = new Set(ids);
    let best = null, bestCost = Infinity;
    for (const r of shuffled(pools[byId[ids[k]].type], seeded(seed))) {
      if (inWeek.has(r.id)) continue;
      const next = ids.slice();
      next[k] = r.id;
      const c = cost(next, avoid);
      if (c < bestCost) { best = next; bestCost = c; }
    }
    return best || ids;
  }

  const isMenu = ids => Array.isArray(ids) && ids.length === DAYS * 3 && ids.every(id => byId[id]);

  return {
    TYPES, RULES,
    recipe: id => byId[id],
    count: recipes.length,
    weekNumber, mondayOfWeek,
    baseMenu, shuffleMenu, swapMeal,
    summary, isMenu,
    cost: (ids, neighbours = []) => cost(ids, avoiding(neighbours))
  };
})();
