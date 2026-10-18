# Family Meal Plan

**Live:** https://hiessy.github.io/meal-plan/

Weekly meal planner for a family of 4: **breakfast, lunch, afternoon snack and dinner, Monday–Friday**.
Every week gets a balanced random menu drawn from the recipe list and dated with the real calendar.
The recipes include pregnancy-friendly nutrition notes and toddler tips.

## Features

- **A balanced random menu every week**: 5 breakfasts, 5 lunches, 5 snacks and 5 dinners picked
  from the recipe list.
  - 2,584 recipes. 740 are dishes from 99 countries: 145 Argentine ones (milanesas, locro,
    humita, empanadas tucumanas, chupín, pastafrola, fainá, chocotorta, mate cocido…) and dishes
    from all over Latin America and the Caribbean, Europe, Africa, the Middle East, Asia and
    Oceania.
  - **✨ 1,844 AI-created recipes**: original dishes invented by Claude, such as chimichurri
    salmon with crispy potatoes, yerba mate-crusted chicken or dulce de leche BBQ halloumi wraps.
    They count as experimental, so at most one lands in a week; the **AI-created recipes** filter
    turns them off.
  - Each week aims for 1–2 egg breakfasts, 2–3 fish meals, at least one vegetarian meal, at most
    3 red-meat meals and 2–3 fruit snacks.
  - Lunch and dinner on the same day differ in protein and starch, and an egg breakfast never
    lands on the day of an egg lunch.
  - No recipe repeats within a week or across the four weeks on screen, shuffles and swaps
    included (unless the recipe choices leave too few). Similar dishes (two salmon dinners,
    three soups, two pancake breakfasts…) are kept apart.
  - The draw is seeded by the week, so everyone who opens the page sees the same menu.
  - A ⚖️ balance bar under each week shows its mix of breakfasts, proteins and snacks.
  - Click a chip in it, such as 🐟 fish or 🍳 egg breakfasts, to highlight those meals while the
    rest fade. Pick several at once; **✕ Show all** clears them.
- **Experimental recipes**: 12 of the recipes are new ideas the family hasn't tried yet, like
  cauliflower-crust pizza, rice-paper rolls and avocado chocolate mousse.
  - When one comes up, a purple badge with a pixel Erlenmeyer flask sits next to its meal type,
    and the tooltip says it is experimental. The flask bubbles, and its liquid cycles through red, blue,
    green, purple and orange.
  - At most one lands in a week. Untick **Use experimental recipes** to leave them out.
- **📖 Choose the recipes**: the Recipes button lists every recipe, grouped by meal type, with a
  search box and All/None per group. Untick any you don't want and the menus are drawn again from
  the rest. The choice is saved in the browser, so other devices keep the shared menu.
  - **🌍 Countries**: pick as many as you like. With none picked, menus use your home country:
    the one this device's time zone points to, if it has enough recipes, or else Argentina. The
    plan bar shows the active filters.
  - **🩸 Blood type** (O, A, B, AB; pick several for a family): leaves out recipes with foods that
    *Eat Right 4 Your Type* (Dr. Peter J. D'Adamo with Catherine Whitney) lists to avoid, in a
    simplified form. Studies have not found health benefits from eating for your blood type.
  - **👶 Ages from 6 months**: leaves out recipes not advised for the youngest age picked, after
    WHO guidance on feeding infants and young children. That means no honey before 1 year, no
    added sugar or very salty sauces before 2, no whole nuts or popcorn before 5, and no raw fish
    or alcohol for young children. The recipe sheet then says how to serve the meal at that age.
  - A meal type needs at least one recipe left; with fewer than five, the menus repeat them.
- Each meal card shows where the dish comes from (a flag, or the country code where the system
  has no flag emoji).
- **Real dates**: the page shows this week and the next three. On Saturday and Sunday it starts
  with the coming week. Today's card is highlighted and past days fade.
- **🎲 Shuffle** a whole week or **🔄 swap** one meal; both keep the week balanced.
  **↺ Original menu** undoes it.
- **Recipe sheet** with ingredients, steps and toddler tips, plus previous/next through the week.
- **⇄ Substitutes**: hover an ingredient in a recipe or in the shopping list (press and hold on a
  phone) to see what to use instead. For example tuna → trout or salmon, spinach → Swiss chard
  (acelga), milk → oat, almond or soy milk.
- **Meal prep** in sessions, so nothing is made too early: a **Sunday** prep for what keeps until
  it is eaten, a **Wednesday evening** top-up for Thursday and Friday, and the **evening before**
  for what must marinate or soak overnight. Each task names the dishes it is for; washing and
  chopping lists that session's vegetables. `node tools/check-weeks.js` checks that the
  prep and the shopping list match every week's meals.
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
    - Meal prep, or an open recipe: a cook chops, blends and fries.
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
| Meals & recipes | `data/recipes.js` | The family recipes (EN/ES) with their balance facts, plus the prep tasks |
| | `data/recipes-world.js` | Traditional dishes from many countries, one recipe per line |
| | `data/recipes-ai.js` | AI-created recipes, generated by `tools/gen-ai-recipes.js` |
| | `data/ingredients.js` | Ingredient dictionary: shopping-list rows, aisles, prices and substitutes |
| | `data/countries.js` | Country names, and which country each time zone belongs to |
| | `data/diets.js` | Blood-type avoid lists and age groups with the youngest age each ingredient suits |
| Menu logic | `js/planner.js` | Balanced random weekly menus: the rules, the draw, shuffle and swap (no page code) |
| | `js/lists.js` | Builds the shopping list and the prep list from a week's meals (no page code) |
| | `js/diets.js` | Which recipes suit the picked blood types and ages (no page code) |
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

**AI-created recipes**: edit the proteins, sauces, bases and vegetables in `tools/ai-components.js`
(or the breakfast and snack templates in `tools/gen-ai-recipes.js`) and run
`node tools/gen-ai-recipes.js` to write `data/recipes-ai.js` again. Do not edit that file by hand.

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
