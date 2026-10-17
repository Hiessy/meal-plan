# Family Meal Plan

**Live:** https://hiessy.github.io/meal-plan/

Weekly meal planner for a family of 4: **lunch, afternoon snack and dinner, Monday–Friday**.
Every week gets a balanced random menu drawn from the recipe list and dated with the real calendar.
The recipes include pregnancy-friendly nutrition notes and toddler tips.

## Features

- **A balanced random menu every week**: 5 lunches, 5 snacks and 5 dinners picked from 58 recipes.
  - Each week aims for 2–3 fish meals, at least one vegetarian meal, at most 3 red-meat meals and
    2–3 fruit snacks.
  - Lunch and dinner on the same day differ in protein and starch.
  - No recipe repeats within a week or from the week before. Similar dishes (two salmon dinners,
    three soups…) are kept apart.
  - The draw is seeded by the week, so everyone who opens the page sees the same menu.
  - A ⚖️ balance bar under each week shows its mix of proteins and snacks.
- **Real dates**: the page shows this week and the next three. On Saturday and Sunday it starts
  with the coming week. Today's card is highlighted and past days fade.
- **🎲 Shuffle** a whole week or **🔄 swap** one meal; both keep the week balanced.
  **↺ Original menu** undoes it.
- **Recipe sheet** with ingredients, steps and toddler tips, plus previous/next through the week.
- **Sunday prep**: the make-ahead tasks of that week's recipes, each with the meals it is for.
- **Shopping list built from the week's meals**:
  - one row per ingredient, with the amounts added up
  - grouped by aisle
  - estimated prices, with a market adjustment
  - tick off items as you shop; copy or share what is left
- **Sound and motion**:
  - Soft synthesized notes when the pointer moves over meals, tabs and buttons.
  - A dice roll when you shuffle, chimes for ticks, and a fanfare with confetti when a list is done.
  - Cards deal in after a shuffle.
  - 🔊 in the header mutes the sounds.
  - Browsers start sound only after your first click or tap.
  - Motion is skipped for visitors who turn on "reduce motion".
- 🌐 English / Español and tooltips everywhere. Hover, focus with the keyboard, or press and hold on a phone.
- Built for phones as well as desktop.
- Ticks, swaps and settings are saved in the browser.
- No dependencies and no build step: plain HTML, CSS and JavaScript.

To see the plan for another date, add `?date=2026-12-24` to the address.

## How it is organised

The code is split into four layers. Each one only uses the layers listed above it.

| Layer | Files | What it holds |
|-------|-------|---------------|
| Meals & recipes | `data/recipes.js` | The recipes (EN/ES) with their balance facts, plus the Sunday prep tasks |
| | `data/ingredients.js` | Ingredient dictionary: shopping-list rows, aisles and price estimates |
| Menu logic | `js/planner.js` | Balanced random weekly menus: the rules, the draw, shuffle and swap (no page code) |
| | `js/lists.js` | Builds the shopping list and the prep list from a week's meals (no page code) |
| UI | `js/i18n.js` | All interface text in English and Spanish |
| | `js/tooltip.js` | Tooltips for anything with a `data-tip` |
| | `js/ui.js` | Draws the page, saves ticks and swaps, and handles every button |
| | `css/ui.css` | Layout, colours and responsive rules. Edit the CSS variables at the top to retheme |
| Flashy layer | `js/fx.js` | Sounds and animations, plus the 🔊 button |
| | `css/fx.css` | Every animation, transition and hover lift |

The flashy layer is optional. Without `js/fx.js` and `css/fx.css`, the page works the same, just
quietly and without motion. `js/ui.js` sends `plan:*` events (listed at the top of that file), and
`js/fx.js` listens to them.

## Customising

**Recipes**: add one to `data/recipes.js` by copying a recipe of the same type and editing it.
- Fill in its balance facts: `protein` and `base` for lunches and dinners, `group` for snacks, and
  optional `tags` for similar dishes. The comment at the top of the file explains each one.
- Keep every recipe self-contained, because any recipe can land on any day. Avoid lines like
  "leftover chicken from Monday".
- Keep at least 5 recipes of each type.
- Changing the list reshuffles the menus.

**Balance rules**: edit `RULES` at the top of `js/planner.js`. For example, change `fish: [2, 3]`
to `[3, 4]` for more fish.

**Shopping list**: each English ingredient line is matched against `data/ingredients.js` from top
to bottom. The first match decides which row it joins. Lines that match nothing are listed under
"Other" exactly as written.

**Prices**: `price` in `data/ingredients.js` is a rough USD estimate per recipe that uses the
ingredient. The +/− control in the shopping list scales all prices at once.

**Text**: interface text is in `js/i18n.js`. Recipe text is in `data/recipes.js`.

**Sounds**: each sound is a few lines in the `sounds` object of `js/fx.js`.

## Hosting

GitHub Pages serves the root of the `master` branch. Push to `master` and the site updates within a minute or two.
