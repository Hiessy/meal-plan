# meal-plan

Static site: no build step and no dependencies. GitHub Pages publishes the root of `master` at
https://hiessy.github.io/meal-plan/, so pushing to `master` deploys it.

## Layers

Scripts are plain classic scripts loaded in order by `index.html`. Each layer only uses the layers
above it. The README has the full table.

1. **Meals & recipes** — `data/recipes.js` and `data/ingredients.js`. These are data only.
2. **Menu logic** — `js/planner.js` (balanced draw) and `js/lists.js` (shopping and prep lists).
   No DOM access and no storage.
3. **UI** — `js/i18n.js`, `js/tooltip.js`, `js/ui.js` and `css/ui.css`.
   - `ui.js` is an IIFE and exposes no globals.
   - Buttons use `data-action` and are handled by one delegated click handler, not inline `onclick`.
   - `ui.js` sends `plan:*` events on `document`.
4. **Flashy layer** — `js/fx.js`, `js/fx-scenes.js` and `css/fx.css`.
   - It is optional: the page must keep working without it.
   - It only listens to `plan:*` events and pointer hovers. Never call it from the UI.
   - All motion stays in `fx.css`, inside `prefers-reduced-motion: no-preference`.
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
  - Make-ahead work goes in `prep`, as keys of `prepTasks`.
  - `experimental: true` marks a new, not yet family-tested recipe. Its meal-type badge shows
    `FLASK` from `ui.js`, a pixel Erlenmeyer flask; `fx.css` cycles its colour and floats its
    bubbles. `RULES.experimental` caps how many land in a week.
- `Planner.configure({ exclude, experimental })` narrows the pools the draw uses. The UI calls
  it with the visitor's saved choices from the recipe panel and the Use-experimental checkbox,
  so those choices change that device's menus. The panel keeps at least 5 recipes per type.
- `data/ingredients.js` is an ordered regex dictionary. The first match on an English ingredient
  line picks its shopping-list row, so specific entries go above general ones. After adding
  recipes, check that each new line matches the intended entry and not "Other".
  - `substitutes` at the end of that file maps entry keys to `[English, Spanish]` alternatives,
    shown on hover via `Lists.substitute()`. Give every new entry one.
- Balance chips are `data-action="facet"` toggles such as `protein:fish`. Meal slots carry
  `data-facets`, and picking a chip highlights the matching slots and sends `plan:focus`.
- A menu is 20 recipe ids, day by day in `Planner.TYPES` order (breakfast, lunch, snack, dinner);
  slot k is day `Math.floor(k / Planner.SLOTS)`.
- In `js/planner.js`, menus are seeded by week number counted from `EPOCH` (2026-10-05). Each week
  avoids the two before it, so a page load computes every week since `EPOCH`, at about a
  millisecond per week. Changing the recipes, `RULES` or `EPOCH` changes every menu. A quick check
  is to run a script that loads `data/recipes.js` and `js/planner.js` in Node and checks
  `Planner.cost(Planner.baseMenu(n)) === 0` over a few hundred weeks.
- When a CSS or JS file changes, bump the `?v=` query on its tag in `index.html` so Pages caches refresh.
- To test locally, run `python -m http.server 8123` and open `http://localhost:8123/`. Add
  `?date=YYYY-MM-DD` to preview another date; saved data is not pruned while previewing.
