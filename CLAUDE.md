# meal-plan

Static site: no build step and no dependencies. GitHub Pages publishes the root of `master` at
https://hiessy.github.io/meal-plan/, so pushing to `master` deploys it.

- `recipes.js` holds the flat bilingual recipe list.
  - Recipe `id`s must stay stable, because saved swaps refer to them.
  - Every recipe must be self-contained, with no "leftovers" or "made on Sunday" ingredients.
    Menus are random, so any recipe can land on any day.
  - Make-ahead work goes in `prep`, as keys of `prepTasks`.
- `ingredients.js` is an ordered regex dictionary. The first entry that matches an English
  ingredient line picks its shopping-list row, so specific entries go above general ones. After
  adding recipes, check that each new line matches the intended entry and not "Other".
- In `app.js`, menus are seeded by week number counted from `EPOCH` (2024-01-01). Changing the
  recipe list or the draw rules changes every menu.
- When `style.css` or a script changes, bump the `?v=` query in `index.html` so Pages caches refresh.
- To test locally, run `python -m http.server 8123` and open `http://localhost:8123/`. Add
  `?date=YYYY-MM-DD` to preview another date; saved data is not pruned while previewing.
