# Family Meal Plan

**Live:** https://hiessy.github.io/meal-plan/

Weekly meal planner for a family of 4: **lunch, afternoon snack and dinner, Monday–Friday**.
Every week gets a random menu drawn from the recipe list and dated with the real calendar.
The recipes include pregnancy-friendly nutrition notes and toddler tips.

## Features

- **A random menu every week**: 5 lunches, 5 snacks and 5 dinners picked from 58 recipes.
  - The draw is seeded by the week, so everyone who opens the page sees the same menu.
  - No recipe repeats within a week or from the two weeks before.
  - Similar dishes (salmon, tuna, soups, pasta…) are capped per week.
- **Real dates**: the page shows this week and the next three. On Saturday and Sunday it starts
  with the coming week. Today's card is highlighted and past days fade.
- **🎲 Shuffle** a whole week or **🔄 swap** one meal. **↺ Original menu** undoes it.
- **Recipe sheet** with ingredients, steps and toddler tips, plus previous/next through the week.
- **Sunday prep**: the make-ahead tasks of that week's recipes, each with the meals it is for.
- **Shopping list built from the week's meals**:
  - one row per ingredient, with the amounts added up
  - grouped by aisle
  - estimated prices, with a market adjustment
  - tick off items as you shop; copy or share what is left
- 🌐 English / Español and tooltips everywhere. Hover, focus with the keyboard, or press and hold on a phone.
- Built for phones as well as desktop.
- Ticks, swaps and settings are saved in the browser.
- No dependencies: plain HTML, CSS and JavaScript.

To see the plan for another date, add `?date=2026-12-24` to the address.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page shell |
| `style.css` | All styles. Edit the CSS variables at the top to retheme |
| `app.js` | Translations, menu drawing, shopping list and all UI logic |
| `recipes.js` | The recipe list (EN/ES) and the Sunday prep tasks |
| `ingredients.js` | Ingredient dictionary: shopping-list rows, categories and price estimates |

## Customising

**Recipes**: add one to `recipes.js` by copying a recipe of the same type and editing it.
- Keep every recipe self-contained, because any recipe can land on any day. Avoid lines like
  "leftover chicken from Monday".
- Keep at least 5 recipes of each type.
- Changing the list reshuffles the menus.

**Shopping list**: each English ingredient line is matched against `ingredients.js` from top to
bottom. The first match decides which row it joins. Lines that match nothing are listed under
"Other" exactly as written.

**Prices**: `price` in `ingredients.js` is a rough USD estimate per recipe that uses the ingredient.
The +/− control in the shopping list scales all prices at once.

**Translations**: edit the `i18n` object at the top of `app.js`.

## Hosting

GitHub Pages serves the root of the `master` branch. Push to `master` and the site updates within a minute or two.
