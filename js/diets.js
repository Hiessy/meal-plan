/* ============================================================
   Diets — which recipes suit the picked blood types and ages, and
   which are meat-free, vegan or gluten-free (logic only, no DOM)

   Reads data/diets.js and matches recipe lines through Lists, so
   it needs js/lists.js first. Lines marked "optional" are ignored:
   they can simply be left out.
   ============================================================ */
const Diets = (() => {
  const keyCache = new Map();
  const isOptional = line => /optional|opcional/i.test(line);

  // The ingredient keys of a recipe's lines that matter
  function keysOf(r) {
    if (!keyCache.has(r.id)) {
      keyCache.set(r.id, new Set(r.ing.en.filter(l => !isOptional(l))
        .map(l => (Lists.entryFor(l) || {}).key).filter(Boolean)));
    }
    return keyCache.get(r.id);
  }

  // The youngest age, in months, the recipe suits (6 = everyone eating solids)
  function youngest(r) {
    let months = ageGroups[0].months;
    keysOf(r).forEach(k => { months = Math.max(months, minAge[k] || 0); });
    (r.tags || []).forEach(tag => { months = Math.max(months, minAgeTags[tag] || 0); });
    return months;
  }

  const ageGroup = id => ageGroups.find(g => g.id === id);
  const suitsAges = (r, ids) => !ids.length || youngest(r) <= Math.min(...ids.map(id => ageGroup(id).months));
  const avoided = type => bloodTypes[type].avoid;
  const suitsBlood = (r, types) => types.every(type => ![...keysOf(r)].some(k => avoided(type).includes(k)));

  // { blood: ['O', 'A'], ages: ['m12'], diet: ['vegan'] } — a recipe fits
  // when it suits all of them (diet: keys of marks())
  const fits = (r, { blood = [], ages = [], diet = [] } = {}) =>
    suitsBlood(r, blood) && suitsAges(r, ages) && diet.every(key => marks(r)[key]);

  // The blood types a recipe suits, as keys of bloodTypes
  const bloodFor = r => Object.keys(bloodTypes).filter(type => suitsBlood(r, [type]));

  // { meatFree, vegan, glutenFree } from dietFoods
  const markCache = new Map();
  function marks(r) {
    if (!markCache.has(r.id)) {
      const lines = r.ing.en.filter(l => !isOptional(l)).map(l => ({ l, k: (Lists.entryFor(l) || {}).key }));
      const meatFree = !lines.some(({ l, k }) => dietFoods.meat.includes(k) || dietFoods.meatWords.test(l));
      markCache.set(r.id, {
        meatFree,
        vegan: meatFree && !lines.some(({ k }) => dietFoods.animal.includes(k)),
        glutenFree: !lines.some(({ l, k }) => dietFoods.gluten.includes(k) && !dietFoods.notGluten.test(l))
      });
    }
    return markCache.get(r.id);
  }

  return { fits, suitsBlood, suitsAges, youngest, ageGroup, bloodFor, marks };
})();
