/* ============================================================
   Diets — which recipes suit the picked blood types and ages
   (logic only, no DOM)

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

  // { blood: ['O', 'A'], ages: ['m12'] } — a recipe fits when it suits all of them
  const fits = (r, { blood = [], ages = [] } = {}) => suitsBlood(r, blood) && suitsAges(r, ages);

  return { fits, suitsBlood, suitsAges, youngest, ageGroup };
})();
