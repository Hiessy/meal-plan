# meal-plan

Static site: no build step and no dependencies. GitHub Pages publishes the root of `master` at
https://hiessy.github.io/meal-plan/, so pushing to `master` deploys it.

## Layers

Scripts are plain classic scripts loaded in order by `index.html`. Each layer only uses the layers
above it. The README has the full table.

1. **Meals & recipes** — `data/recipes.js`, `data/recipes-world.js`, `data/ingredients.js`,
   `data/countries.js` and `data/diets.js`. These are data only.
   - `recipes-world.js` pushes onto `recipes`, one recipe per line. Every recipe has a `country`
     (an ISO code in `countries.js`), except the AI-created ones.
   - `recipes-ai.js` is generated: run `node tools/gen-ai-recipes.js` after changing
     `tools/ai-components.js` or the templates. Its recipes have `ai: true` and
     `experimental: true` and no country. Check new lines with the dictionary afterwards.
   - The recipe panel shows 40 rows per meal type and loads more on demand; keep it that way,
     since there are thousands of recipes.
2. **Menu logic** — `js/planner.js` (balanced draw), `js/lists.js` (shopping and prep lists) and
   `js/diets.js` (blood-type and age fit).
   No DOM access and no storage.
3. **UI** — `js/i18n.js`, `js/tooltip.js`, `js/ui.js` and `css/ui.css`.
   - `ui.js` is an IIFE and exposes no globals.
   - Buttons use `data-action` and are handled by one delegated click handler, not inline `onclick`.
   - `ui.js` sends `plan:*` events on `document`.
4. **Flashy layer** — `js/fx.js`, `js/fx-scenes.js` and `css/fx.css`.
   - It is optional: the page must keep working without it.
   - It only listens to `plan:*` events and pointer hovers. Never call it from the UI.
   - All motion stays in `fx.css`, inside `prefers-reduced-motion: no-preference`. The one
     exception is the prep rolodex, which `ui.js` turns frame by frame because it follows the
     pointer; with reduced motion it jumps.
   - The pixel sprites are rows of characters in `fx.js` (see `INK` for the colours). Every row of
     every frame must be the same length.
   - `fx.js` shares `window.Fx = { play, sprites, ink }`. `fx-scenes.js` uses it and does nothing
     without it.
   - `fx-scenes.js` draws the kitchen TV on a 144 × 54 canvas. Each scene's `draw(t)` must be a
     pure function of `t` (ms into its loop), and `cue()` plays a sound once per loop. The scene
     follows the hovered element via `data-type` on meal slots and `data-cat` on shopping aisles,
     and on touch screens the element in the middle of the screen.
   - The TV set's size follows its canvas width: 144 px (1×) by default, top left. Dragging
     and resizing snap to whole multiples so pixels stay square. Its spot is saved under
     `meal-plan-tv-spot` and its power state under `meal-plan-tv-state`.

## Rules worth knowing

- Recipe `id`s must stay stable, because saved swaps refer to them.
  - Every recipe needs its balance facts: `protein` and `base` for lunches and dinners, `group`
    for breakfasts and snacks, and optional `tags`.
  - Recipes must be self-contained, with no "leftovers" or "made on Sunday" ingredients, because
    any recipe can land on any day.
  - Make-ahead work goes in `prep`, as keys of `prepTasks`. Task texts stay generic ("Marinate
    the meat overnight…"), because the prep card names the dishes under each task.
    Washing and chopping is not a key: `Lists.prep` lists each session's vegetables itself.
  - Every prep task has `keeps` (days its result lasts in the fridge) or `night: true` (done the
    evening before). `Lists.prepDay` puts each task in the first big session — Sunday (day -1) or
    Wednesday evening (day 2) — whose result still keeps until the meal, else the evening before.
  - `experimental: true` marks a new, not yet family-tested recipe. The flask (`FLASK` in `ui.js`,
    a pixel Erlenmeyer flask) goes right of the meal-type badge, never inside it, on the plain
    background with no pill of its own (`.exp-badge` on slots, `.exp-chip` in the recipe sheet);
    `fx.css` cycles its colour and floats its bubbles. `RULES.experimental` is [1, 2]: each draw
    aims for one or two, as the week's seed says. The minimum is dropped when the recipe choices
    leave no experimental recipe.
- `Planner.configure({ exclude, experimental, allow })` narrows the pools the draw uses. The UI
  calls it with the visitor's saved choices from the recipe panel (left-out recipes, countries,
  AI-created, blood types, ages) and the Use-experimental checkbox, so those choices change that
  device's menus. The panel refuses a meal type with no recipe left; fewer than 5 repeat.
- With no country picked, the UI uses the home country: from `timeZoneCountry` (then the language
  region), if it has at least 8 recipes of each type, else 'AR'. Add `?home=JP` to try another.
- `data/ingredients.js` is an ordered regex dictionary. The first match on an English ingredient
  line picks its shopping-list row, so specific entries go above general ones. After adding
  recipes, check that each new line matches the intended entry and not "Other".
  - `kind: 'none'` keeps a row off the list (water, ice).
  - A new entry may also belong in `data/diets.js`: in a blood type's avoid list, or in `minAge`
    when young children should not have it.
  - `substitutes` at the end of that file maps entry keys to `[English, Spanish]` alternatives,
    shown on hover via `Lists.substitute()`. Give every new entry one.
- Balance chips are `data-action="facet"` toggles such as `protein:fish`. Meal slots carry
  `data-facets`, and picking a chip highlights the matching slots and sends `plan:focus`.
- Each `.day-col` spans five subgrid rows (header and four meals) so meals line up across the
  days. Keep borders the same width on every day (today's ring is a box-shadow) so nothing shifts.
- The prep is a rolodex of index cards, one per prep day (`Lists.prepCards`); the meals and
  dates of each task show as small chips and on hover. All cards share one grid cell, so they
  are the same size. `placeDeck` in `ui.js` sets `--d` on each card (0 in front, 1, 2… behind,
  -1…0 flipping forward over the rod; the deck wraps round) and CSS turns that into the 3D
  pose. `runDeck` animates p with a flick's momentum, friction and a spring; `turnDeck` moves
  it from the arrows, tabs and keys. The deck opens on today's card, and `buildWeek` adds a
  resting card for today when today has no prep. Ticks are keyed `p:{monday}:{prep day}:{task}`.
- Every meal shows marks right of its type (`marksHtml` in `ui.js`): the flask, its origin, the
  blood types it suits (`Diets.bloodFor`), and meat-free/vegan/gluten-free (`Diets.marks`, from
  `dietFoods` in `data/diets.js`). The icons are pixel SVGs built by `pixelIcon`. The recipe
  panel's Diet pickers (`filters.diet`) keep only recipes with those marks.
- `markEaten` crosses out meals whose time is past (`MEAL_ENDS`, by the device clock) every minute.
- A saved shuffle or swap only shows while `Planner.fits` it: every recipe in the current pools
  and the experimental count in range. Older ones are drawn again.
- A menu is 20 recipe ids, day by day in `Planner.TYPES` order (breakfast, lunch, snack, dinner);
  slot k is day `Math.floor(k / Planner.SLOTS)`.
- In `js/planner.js`, menus are seeded by week number counted from `EPOCH` (2026-10-05). Each week
  avoids the three before it (the page shows four), so a page load computes every week since
  `EPOCH`, at about a millisecond per week. Shuffles and swaps avoid the three weeks either side.
  Changing the recipes, `RULES` or `EPOCH` changes every menu.
- Run `node tools/check-weeks.js [weeks]` after changing recipes, prep tasks, the dictionary or
  the planner. It checks balance (`Planner.cost === 0`), repeats, the experimental cap, that every
  ingredient line lands on the shopping list once, that amounts add up the same in both languages,
  and that each prep task fits its recipes (`fits` in the script) and lists only that week's meals.
- When a CSS or JS file changes, bump the `?v=` query on its tag in `index.html` so Pages caches refresh.
- To test locally, run `python -m http.server 8123` and open `http://localhost:8123/`. Add
  `?date=YYYY-MM-DD` to preview another date; saved data is not pruned while previewing.
