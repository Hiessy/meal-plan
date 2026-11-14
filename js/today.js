/* ============================================================
   Today — what to eat, take out and move right now
   (logic only, no DOM)

   Works on a week's meals ({ recipe, di, k }, as in js/lists.js)
   and its prep portions (Lists.prep). Days count from the week's
   Monday (0): -2 is the Saturday before, -1 the Sunday of the
   prep, 0–4 Monday to Friday.
   ============================================================ */
const Today = (() => {
  // When each meal is over, in hours of the day
  const ENDS = { breakfast: 10, lunch: 15, snack: 18.5, dinner: 22 };

  // Whether a meal is over on day `day` at `hour` (0–24)
  const isPast = (meal, day, hour) => meal.di < day || meal.di === day && hour >= ENDS[meal.recipe.type];

  // → { meals:       today's meals, each { meal, past }
  //     current:     the meal to cook or eat now — today's first that is not over
  //                  (null on the weekend and after dinner)
  //     next:        the meal after that, today or on a later day (null after Friday's dinner)
  //     ready:       today's portions made on Sunday, with where each one waits
  //     thawTonight: tomorrow's portions to move from the freezer to the fridge tonight
  //     fresh:       today's portions that are made fresh
  //     rate:        meals to ask about: today's that are over, then yesterday's }
  function view({ meals, portions, day, hour }) {
    const coming = meals.filter(m => !isPast(m, day, hour));
    const current = coming[0] && coming[0].di === day ? coming[0] : null;
    return {
      meals: meals.filter(m => m.di === day).map(meal => ({ meal, past: isPast(meal, day, hour) })),
      current,
      next: coming[current ? 1 : 0] || null,
      ready: portions.filter(p => p.di === day && p.store !== 'fresh'),
      thawTonight: portions.filter(p => p.thaw === day),
      fresh: portions.filter(p => p.di === day && p.store === 'fresh'),
      rate: meals.filter(m => m.di === day && isPast(m, day, hour)).reverse().concat(meals.filter(m => m.di === day - 1).reverse())
    };
  }

  return { ENDS, isPast, view };
})();
