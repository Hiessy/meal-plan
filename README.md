# Family Meal Plan

**Live:** https://hiessy.github.io/meal-plan/

Weekly meal planner for a family of 4: **breakfast, lunch, afternoon snack and dinner, Monday–Friday**.
Every week gets a balanced random menu drawn from the recipe list and dated with the real calendar.
The recipes include pregnancy-friendly nutrition notes and toddler tips.

## Features

- **A balanced random menu every week**: 5 breakfasts, 5 lunches, 5 snacks and 5 dinners picked
  from 160 recipes, including Argentine family classics such as milanesas, tarta de zapallitos,
  ñoquis, pastel de papas and empanadas.
  - Each week aims for 1–2 egg breakfasts, 2–3 fish meals, at least one vegetarian meal, at most
    3 red-meat meals and 2–3 fruit snacks.
  - Lunch and dinner on the same day differ in protein and starch, and an egg breakfast never
    lands on the day of an egg lunch.
  - No recipe repeats within a week or from the week before. Similar dishes (two salmon dinners,
    three soups, two pancake breakfasts…) are kept apart.
  - The draw is seeded by the week, so everyone who opens the page sees the same menu.
  - A ⚖️ balance bar under each week shows its mix of breakfasts, proteins and snacks.
  - Click a chip in it, such as 🐟 fish or 🍳 egg breakfasts, to highlight those meals while the
    rest fade. Pick several at once; **✕ Show all** clears them.
- **Experimental recipes**: 12 of the recipes are new ideas the family hasn't tried yet, like
  cauliflower-crust pizza, rice-paper rolls and avocado chocolate mousse.
  - When one comes up, its meal-type badge turns purple with a pixel Erlenmeyer flask, and the
    tooltip says it is experimental. The flask bubbles, and its liquid cycles through red, blue,
    green, purple and orange.
  - At most two land in a week. Untick **Use experimental recipes** to leave them out.
- **📖 Choose the recipes**: the Recipes button lists all 160, grouped by meal type, with a search
  box and All/None per group. Untick any you don't want and the menus are drawn again from the
  rest. Each type keeps at least 5. The choice is saved in the browser, so other devices keep the
  shared menu.
- **Real dates**: the page shows this week and the next three. On Saturday and Sunday it starts
  with the coming week. Today's card is highlighted and past days fade.
- **🎲 Shuffle** a whole week or **🔄 swap** one meal; both keep the week balanced.
  **↺ Original menu** undoes it.
- **Recipe sheet** with ingredients, steps and toddler tips, plus previous/next through the week.
- **⇄ Substitutes**: hover an ingredient in a recipe or in the shopping list (press and hold on a
  phone) to see what to use instead. For example tuna → trout or salmon, spinach → Swiss chard
  (acelga), milk → oat, almond or soy milk.
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
  - A pixel-art pan flipping pancakes and a bubbling soup pot in the header. Hover them for their
    own sounds.
  - **📺 Kitchen TV**: an old wooden TV set, top left, whose pixel scene follows what you look at.
    - Shopping list: a shopper walks the market, chats, pays, takes the produce, skips a stall and
      buys again. The stalls sell whatever aisle you hover.
    - Sunday prep, or an open recipe: a cook chops, blends and fries.
    - Breakfast: the family at the morning table while the toast pops.
    - Lunch: from the fridge to the oven to the table.
    - Snack: a kid grabs an apple and munches.
    - Dinner: the family eats together under the lamp.
    - On phones it follows what is in the middle of the screen.
    - The knob changes channel, the red button turns it off (the picture shrinks to a dot) and
      × tucks it away behind a 📺 button.
    - Drag the set to move it and the corner grip to resize it; double-click it to put it back,
      small and top left. Where it sits is remembered on this device.
    - Each scene plays its sounds the first time through: coins, chopping, the blender, sizzling.
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
| Flashy layer | `js/fx.js` | Sounds, animations, the header pixel art and the 🔊 button |
| | `js/fx-scenes.js` | The kitchen TV: pixel scenes drawn on a canvas, picked by what you hover |
| | `css/fx.css` | Every animation, transition and hover lift, and the kitchen TV's frame |

The flashy layer is optional. Without `js/fx.js`, `js/fx-scenes.js` and `css/fx.css`, the page
works the same, just quietly and without motion. `js/ui.js` sends `plan:*` events (listed at the
top of that file), and the flashy layer listens to them.

## Customising

**Recipes**: add one to `data/recipes.js` by copying a recipe of the same type and editing it.
- Fill in its balance facts: `protein` and `base` for lunches and dinners, `group` for breakfasts
  and snacks, and optional `tags` for similar dishes. The comment at the top of the file explains
  each one.
- Keep every recipe self-contained, because any recipe can land on any day. Avoid lines like
  "leftover chicken from Monday".
- Keep at least 5 recipes of each type.
- Changing the list reshuffles the menus.

**Balance rules**: edit `RULES` at the top of `js/planner.js`. For example, change `fish: [2, 3]`
to `[3, 4]` for more fish, or `egg: [1, 2]` under `breakfasts` for more egg breakfasts.

**Shopping list**: each English ingredient line is matched against `data/ingredients.js` from top
to bottom. The first match decides which row it joins. Lines that match nothing are listed under
"Other" exactly as written.

**Substitutes**: `substitutes` at the end of `data/ingredients.js` holds what to use instead of
each ingredient, in English and Spanish, keyed like the dictionary entries.

**Prices**: `price` in `data/ingredients.js` is a rough USD estimate per recipe that uses the
ingredient. The +/− control in the shopping list scales all prices at once.

**Text**: interface text is in `js/i18n.js`. Recipe text is in `data/recipes.js`.

**Sounds**: each sound is a few lines in the `sounds` object of `js/fx.js`.

**Kitchen TV scenes**: each scene in `js/fx-scenes.js` is a `draw(t)` function that paints one
frame of a 144 × 54 pixel picture for time `t` in its loop. `sceneFor()` decides which part of
the page shows which scene.

## Hosting

GitHub Pages serves the root of the `master` branch. Push to `master` and the site updates within a minute or two.
