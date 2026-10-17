/* ============================================================
   Ingredients — the dictionary js/lists.js uses to turn recipe
   lines into a shopping list

   Every ingredient line of the week's recipes (English text) is
   checked against `match`, top to bottom; the first hit decides the
   shopping-list row it joins, so the same ingredient used by several
   meals becomes one row. Order matters: specific entries sit above
   general ones ("chicken broth" before "chicken", "peanut butter"
   before "butter").

   cat    : shopping category (one of shopCategories)
   en/es  : row name in the shopping list
   price  : rough USD estimate per recipe that uses it, before the
            price adjustment (0 = not priced)
   kind   : 'staple' → usually at home; tagged, no amount shown
            'spice'  → bought by the jar or piece; no amount shown
            'count'  → counted as whole items (lemons, limes)
   each   : what a bare number counts, e.g. "2 celery stalks" → stalks
   note   : extra hint shown in the row's tooltip

   A line that matches nothing still shows up, under "Other", as written.
   ============================================================ */
const priceConfig = {
  globalOffset:   0.30,   // ← change in-app with the +/− control
  currencySymbol: '$'
};

const shopCategories = [
  'Proteins & Fish', 'Vegetables', 'Fruit', 'Grains & Bread', 'Pantry', 'Dairy & Fridge', 'Other'
];

const ingredients = [
  /* ── Specific names that contain a more general one ───────── */
  { key: 'beef-broth',      cat: 'Pantry',          en: 'Beef broth',                   es: 'Caldo de carne',                  price: 3, match: /beef broth/i },
  { key: 'chicken-broth',   cat: 'Pantry',          en: 'Chicken broth',                es: 'Caldo de pollo',                  price: 3.83, match: /chicken broth/i },
  { key: 'vegetable-broth', cat: 'Pantry',          en: 'Vegetable broth',              es: 'Caldo de verduras',               price: 2.88, match: /vegetable broth/i },
  { key: 'mushroom-soup',   cat: 'Pantry',          en: 'Cream of mushroom soup (can)', es: 'Crema de champiñones (lata)',     price: 2, match: /cream of mushroom/i },
  { key: 'coconut-milk',    cat: 'Pantry',          en: 'Coconut milk (can)',           es: 'Leche de coco (lata)',            price: 3.5, match: /coconut milk/i },
  { key: 'peanut-butter',   cat: 'Pantry',          en: 'Peanut butter',                es: 'Mantequilla de maní',             price: 5, match: /peanut butter/i },
  { key: 'almond-butter',   cat: 'Pantry',          en: 'Almond butter',                es: 'Mantequilla de almendras',        price: 8.8, match: /almond butter/i },
  { key: 'vinegar',         cat: 'Pantry',          en: 'Apple cider vinegar',          es: 'Vinagre de manzana',              price: 4, match: /vinegar/i },
  { key: 'garlic-powder',   cat: 'Pantry',          en: 'Garlic powder',                es: 'Ajo en polvo',                    price: 1.5, kind: 'spice', match: /garlic powder/i },
  { key: 'chili-flakes',    cat: 'Pantry',          en: 'Chili flakes',                 es: 'Ají en hojuelas',                 price: 0, kind: 'spice', match: /chili flakes/i },
  { key: 'chili-powder',    cat: 'Pantry',          en: 'Chili powder',                 es: 'Ají molido',                      price: 3, kind: 'spice', match: /chili powder/i },
  { key: 'curry-powder',    cat: 'Pantry',          en: 'Curry powder',                 es: 'Curry en polvo',                  price: 3, kind: 'spice', match: /curry powder/i },
  { key: 'egg-noodles',     cat: 'Grains & Bread',  en: 'Egg noodles',                  es: 'Fideos de huevo',                 price: 2.5, match: /egg noodles/i },
  { key: 'rice-cakes',      cat: 'Grains & Bread',  en: 'Rice cakes',                   es: 'Galletas de arroz',               price: 3.5, match: /rice cakes/i },
  { key: 'corn-tortillas',  cat: 'Grains & Bread',  en: 'Corn tortillas',               es: 'Tortillas de maíz',               price: 3, match: /corn tortillas/i },
  { key: 'flour-tortillas', cat: 'Grains & Bread',  en: 'Flour tortillas',              es: 'Tortillas de harina',             price: 3, match: /flour tortillas/i },
  { key: 'cornstarch',      cat: 'Pantry',          en: 'Cornstarch',                   es: 'Maicena',                         price: 2, kind: 'spice', match: /cornstarch/i },
  { key: 'coleslaw-mix',    cat: 'Vegetables',      en: 'Coleslaw mix (cabbage & carrot)', es: 'Repollo y zanahoria rallados', price: 2.5, match: /cabbage & carrot/i },
  { key: 'peas',            cat: 'Vegetables',      en: 'Frozen peas',                  es: 'Arvejas congeladas',              price: 0.83, match: /\bpeas\b/i },
  { key: 'cherry-tomatoes', cat: 'Vegetables',      en: 'Cherry tomatoes',              es: 'Tomates cherry',                  price: 1.79, match: /cherry tomato/i },
  { key: 'canned-tomatoes', cat: 'Pantry',          en: 'Canned tomatoes (400 g)',      es: 'Tomates en lata (400 g)',         price: 1.31, match: /(crushed|diced) tomatoes/i },
  { key: 'sweet-potatoes',  cat: 'Vegetables',      en: 'Sweet potatoes',               es: 'Batatas',                         price: 2.25, match: /sweet potato/i },
  { key: 'spring-onions',   cat: 'Vegetables',      en: 'Spring onions',                es: 'Cebollas de verdeo',              price: 1.5, match: /spring onion/i },
  { key: 'red-onion',       cat: 'Vegetables',      en: 'Red onion',                    es: 'Cebolla morada',                  price: 1.5, match: /red onion/i },

  /* ── Proteins & fish ──────────────────────────────────────── */
  { key: 'chicken-cooked',  cat: 'Proteins & Fish', en: 'Chicken, to cook & shred',     es: 'Pollo para cocinar y desmenuzar', price: 4.33,
    note: { en: 'About 1 large chicken breast for every 1½–2 cups cooked', es: 'Aprox. 1 pechuga grande por cada 1½–2 tazas de pollo cocido' },
    match: /(cooked|roasted) chicken/i },
  { key: 'chicken-breast',  cat: 'Proteins & Fish', en: 'Chicken breast',               es: 'Pechuga de pollo',                price: 8, match: /chicken breast/i },
  { key: 'chicken-thighs',  cat: 'Proteins & Fish', en: 'Chicken thighs',               es: 'Muslos de pollo',                 price: 6.67, match: /chicken thighs|drumsticks/i },
  { key: 'ground-beef',     cat: 'Proteins & Fish', en: 'Ground beef',                  es: 'Carne picada',                    price: 6.75, match: /ground beef/i },
  { key: 'beef-chuck',      cat: 'Proteins & Fish', en: 'Beef chuck (stewing beef)',    es: 'Aguja (carne para guiso)',        price: 9, match: /beef chuck/i },
  { key: 'beef-sirloin',    cat: 'Proteins & Fish', en: 'Beef sirloin',                 es: 'Bife de lomo fino',               price: 13.2, match: /sirloin/i },
  { key: 'pork-tenderloin', cat: 'Proteins & Fish', en: 'Pork tenderloin',              es: 'Lomo de cerdo',                   price: 9, match: /pork tenderloin/i },
  { key: 'pork-chops',      cat: 'Proteins & Fish', en: 'Pork chops',                   es: 'Chuletas de cerdo',               price: 5, match: /pork chop/i },
  { key: 'pork-ribs',       cat: 'Proteins & Fish', en: 'Pork spare ribs',              es: 'Costillas de cerdo',              price: 13.2, match: /\bribs\b/i },
  { key: 'salmon',          cat: 'Proteins & Fish', en: 'Salmon fillets',               es: 'Filetes de salmón',               price: 24.2, match: /salmon/i },
  { key: 'white-fish',      cat: 'Proteins & Fish', en: 'White fish fillets (cod, tilapia…)', es: 'Filetes de pescado blanco (bacalao, merluza…)', price: 16.67, match: /\bcod\b|tilapia|white fish|haddock/i },
  { key: 'tuna',            cat: 'Proteins & Fish', en: 'Canned tuna',                  es: 'Atún en lata',                    price: 4.83, match: /tuna/i },

  /* ── Sauces & condiments ──────────────────────────────────── */
  { key: 'pesto',           cat: 'Pantry',          en: 'Pesto (jar)',                  es: 'Pesto (frasco)',                  price: 5, match: /pesto/i },
  { key: 'bbq-sauce',       cat: 'Pantry',          en: 'BBQ sauce',                    es: 'Salsa BBQ',                       price: 3.5, match: /bbq/i },
  { key: 'enchilada-sauce', cat: 'Pantry',          en: 'Enchilada sauce',              es: 'Salsa de enchiladas',             price: 4, match: /enchilada sauce/i },
  { key: 'worcestershire',  cat: 'Pantry',          en: 'Worcestershire sauce',         es: 'Salsa Worcestershire',            price: 3.5, match: /worcestershire/i },
  { key: 'oyster-sauce',    cat: 'Pantry',          en: 'Oyster sauce',                 es: 'Salsa de ostras',                 price: 4, match: /oyster sauce/i },
  { key: 'soy-sauce',       cat: 'Pantry',          en: 'Soy sauce',                    es: 'Salsa de soja',                   price: 2.63, match: /soy sauce/i },
  { key: 'ketchup',         cat: 'Pantry',          en: 'Ketchup & sauces',             es: 'Ketchup y salsas',                price: 5, match: /ketchup/i },
  { key: 'dijon',           cat: 'Pantry',          en: 'Dijon mustard',                es: 'Mostaza Dijon',                   price: 3.5, match: /dijon/i },
  { key: 'caesar-dressing', cat: 'Dairy & Fridge',  en: 'Caesar dressing',              es: 'Aderezo César',                   price: 4.5, match: /caesar/i },
  { key: 'mayonnaise',      cat: 'Dairy & Fridge',  en: 'Mayonnaise',                   es: 'Mayonesa',                        price: 3.38, match: /mayonnaise/i },

  /* ── Citrus — above the oils: a vinaigrette line names olive oil, lemon and salt ── */
  { key: 'lemons',          cat: 'Fruit',           en: 'Lemons',                       es: 'Limones',                         price: 0.35, kind: 'count', match: /lemon/i },
  { key: 'limes',           cat: 'Fruit',           en: 'Limes',                        es: 'Limas',                           price: 0.7, kind: 'count', match: /\blimes?\b/i },

  /* ── Oils, salt & herbs ───────────────────────────────────── */
  { key: 'sesame-oil',      cat: 'Pantry',          en: 'Sesame oil',                   es: 'Aceite de sésamo',                price: 5, match: /sesame oil/i },
  { key: 'olive-oil',       cat: 'Pantry',          en: 'Olive oil',                    es: 'Aceite de oliva',                 price: 0.97, kind: 'staple', match: /olive oil/i },
  { key: 'cooking-oil',     cat: 'Pantry',          en: 'Cooking oil',                  es: 'Aceite para cocinar',             price: 0, kind: 'staple', match: /cooking oil|oil for cooking|^oil\b/i },
  { key: 'parsley',         cat: 'Vegetables',      en: 'Fresh parsley',                es: 'Perejil fresco',                  price: 2.17, match: /parsley/i },
  { key: 'dill',            cat: 'Vegetables',      en: 'Fresh dill',                   es: 'Eneldo fresco',                   price: 2, match: /\bdill\b/i },
  { key: 'salt-pepper',     cat: 'Pantry',          en: 'Salt & pepper',                es: 'Sal y pimienta',                  price: 0, kind: 'staple', match: /\bsalt\b/i },
  { key: 'fresh-thyme',     cat: 'Vegetables',      en: 'Fresh thyme',                  es: 'Tomillo fresco',                  price: 2, match: /fresh thyme/i },
  { key: 'thyme',           cat: 'Pantry',          en: 'Dried thyme',                  es: 'Tomillo seco',                    price: 1.07, kind: 'spice', match: /thyme/i },
  { key: 'fresh-rosemary',  cat: 'Vegetables',      en: 'Fresh rosemary',               es: 'Romero fresco',                   price: 2, match: /fresh rosemary/i },
  { key: 'rosemary',        cat: 'Pantry',          en: 'Dried rosemary',               es: 'Romero seco',                     price: 1.88, kind: 'spice', match: /rosemary/i },
  { key: 'cilantro',        cat: 'Vegetables',      en: 'Fresh cilantro',               es: 'Cilantro fresco',                 price: 2, match: /cilantro/i },

  /* ── Vegetables ───────────────────────────────────────────── */
  { key: 'ginger',          cat: 'Vegetables',      en: 'Fresh ginger',                 es: 'Jengibre fresco',                 price: 2, kind: 'spice', match: /ginger/i },
  { key: 'garlic',          cat: 'Vegetables',      en: 'Garlic',                       es: 'Ajo',                             price: 0.42, match: /garlic/i },
  { key: 'onions',          cat: 'Vegetables',      en: 'Onions',                       es: 'Cebollas',                        price: 0.5, match: /onion/i },
  { key: 'bell-peppers',    cat: 'Vegetables',      en: 'Bell peppers',                 es: 'Morrones',                        price: 2.6, match: /bell pepper/i },
  { key: 'broccoli',        cat: 'Vegetables',      en: 'Broccoli',                     es: 'Brócoli',                         price: 1.75, match: /broccoli/i },
  { key: 'carrots',         cat: 'Vegetables',      en: 'Carrots',                      es: 'Zanahorias',                      price: 0.62, match: /carrot/i },
  { key: 'celery',          cat: 'Vegetables',      en: 'Celery',                       es: 'Apio',                            price: 0.94,
    each: { en: ['stalk', 'stalks'], es: ['tallo', 'tallos'] }, match: /celery/i },
  { key: 'potatoes',        cat: 'Vegetables',      en: 'Potatoes',                     es: 'Papas',                           price: 2.07, match: /potato/i },
  { key: 'green-beans',     cat: 'Vegetables',      en: 'Green beans',                  es: 'Chauchas',                        price: 3, match: /green beans/i },
  { key: 'zucchini',        cat: 'Vegetables',      en: 'Zucchini',                     es: 'Zapallitos',                      price: 2.25, match: /zucchini/i },
  { key: 'spinach',         cat: 'Vegetables',      en: 'Fresh spinach',                es: 'Espinaca fresca',                 price: 2.17, match: /spinach/i },
  { key: 'avocados',        cat: 'Vegetables',      en: 'Avocados',                     es: 'Paltas',                          price: 2, match: /avocado/i },
  { key: 'cucumber',        cat: 'Vegetables',      en: 'Cucumbers',                    es: 'Pepinos',                         price: 0.75, match: /cucumber/i },
  { key: 'tomatoes',        cat: 'Vegetables',      en: 'Tomatoes',                     es: 'Tomates',                         price: 2, match: /tomato/i },
  { key: 'cabbage',         cat: 'Vegetables',      en: 'Green cabbage',                es: 'Repollo',                         price: 2.5, match: /cabbage/i },
  { key: 'corn',            cat: 'Vegetables',      en: 'Corn (frozen or cobs)',        es: 'Choclo (congelado o en mazorca)', price: 3,
    each: { en: ['cob', 'cobs'], es: ['choclo', 'choclos'] }, match: /corn/i },
  { key: 'asparagus',       cat: 'Vegetables',      en: 'Asparagus',                    es: 'Espárragos',                      price: 4, match: /asparagus/i },
  { key: 'mushrooms',       cat: 'Vegetables',      en: 'Mushrooms',                    es: 'Champiñones',                     price: 3.5, match: /mushroom/i },
  { key: 'lettuce',         cat: 'Vegetables',      en: 'Lettuce',                      es: 'Lechuga',                         price: 1.67, match: /lettuce|romaine/i },
  { key: 'mixed-greens',    cat: 'Vegetables',      en: 'Mixed salad greens',           es: 'Hojas verdes variadas',           price: 4, match: /mixed greens/i },
  { key: 'parsnips',        cat: 'Vegetables',      en: 'Parsnips',                     es: 'Chirivías',                       price: 2.5, match: /parsnip/i },
  { key: 'beets',           cat: 'Vegetables',      en: 'Beets',                        es: 'Remolachas',                      price: 3, match: /\bbeets?\b/i },

  /* ── Fruit ────────────────────────────────────────────────── */
  { key: 'apples',          cat: 'Fruit',           en: 'Apples',                       es: 'Manzanas',                        price: 2.75, match: /\bapples?\b/i },
  { key: 'bananas',         cat: 'Fruit',           en: 'Bananas',                      es: 'Bananas',                         price: 1.63, match: /banana/i },
  { key: 'strawberries',    cat: 'Fruit',           en: 'Strawberries',                 es: 'Frutillas',                       price: 3.5, match: /strawberr/i },
  { key: 'grapes',          cat: 'Fruit',           en: 'Grapes',                       es: 'Uvas',                            price: 4, match: /grape/i },
  { key: 'kiwis',           cat: 'Fruit',           en: 'Kiwis',                        es: 'Kiwis',                           price: 1.5, match: /kiwi/i },
  { key: 'oranges',         cat: 'Fruit',           en: 'Oranges',                      es: 'Naranjas',                        price: 2.25, match: /orange/i },
  { key: 'pears',           cat: 'Fruit',           en: 'Pears',                        es: 'Peras',                           price: 3, match: /\bpears?\b/i },
  { key: 'watermelon',      cat: 'Fruit',           en: 'Watermelon',                   es: 'Sandía',                          price: 5, match: /watermelon/i },
  { key: 'mixed-berries',   cat: 'Fruit',           en: 'Mixed berries (fresh or frozen)', es: 'Frutas del bosque (frescas o congeladas)', price: 4.75, match: /berries/i },
  { key: 'fresh-fruit',     cat: 'Fruit',           en: 'Fresh fruit (any)',            es: 'Fruta fresca (cualquiera)',       price: 4, match: /fresh fruit/i },

  /* ── Grains & bread ───────────────────────────────────────── */
  { key: 'arborio',         cat: 'Grains & Bread',  en: 'Arborio rice',                 es: 'Arroz arborio',                   price: 4.5, match: /arborio/i },
  { key: 'quinoa',          cat: 'Grains & Bread',  en: 'Quinoa',                       es: 'Quinoa',                          price: 3,
    note: { en: 'Amounts are cooked quinoa — 1 cup dry makes about 3 cups', es: 'Las cantidades son de quinoa cocida — 1 taza seca rinde unas 3 tazas' },
    match: /quinoa/i },
  { key: 'couscous',        cat: 'Grains & Bread',  en: 'Couscous',                     es: 'Cuscús',                          price: 3.5, match: /couscous/i },
  { key: 'pasta',           cat: 'Grains & Bread',  en: 'Pasta',                        es: 'Pasta',                           price: 3.1, match: /pasta|penne|spaghetti/i },
  { key: 'rice',            cat: 'Grains & Bread',  en: 'Rice',                         es: 'Arroz',                           price: 1.29,
    note: { en: 'Amounts are cooked rice — 1 cup dry makes about 3 cups', es: 'Las cantidades son de arroz cocido — 1 taza seca rinde unas 3 tazas' },
    match: /\brice\b/i },
  { key: 'pita',            cat: 'Grains & Bread',  en: 'Pita bread',                   es: 'Pan pita',                        price: 2.33, match: /pita/i },
  { key: 'burger-buns',     cat: 'Grains & Bread',  en: 'Burger buns',                  es: 'Panes de hamburguesa',            price: 3, match: /burger bun/i },
  { key: 'breadcrumbs',     cat: 'Pantry',          en: 'Breadcrumbs',                  es: 'Pan rallado',                     price: 2, match: /breadcrumbs/i },
  { key: 'croutons',        cat: 'Grains & Bread',  en: 'Croutons',                     es: 'Crutones',                        price: 0, match: /croutons/i },
  { key: 'bread',           cat: 'Grains & Bread',  en: 'Bread',                        es: 'Pan',                             price: 3.1, match: /bread/i },
  { key: 'oats',            cat: 'Grains & Bread',  en: 'Rolled oats',                  es: 'Avena arrollada',                 price: 3.5, match: /\boats\b/i },
  { key: 'crackers',        cat: 'Grains & Bread',  en: 'Crackers',                     es: 'Galletas',                        price: 4, match: /crackers/i },
  { key: 'granola',         cat: 'Grains & Bread',  en: 'Granola',                      es: 'Granola',                         price: 5, match: /granola/i },

  /* ── Dairy & fridge ───────────────────────────────────────── */
  { key: 'milk',            cat: 'Dairy & Fridge',  en: 'Milk',                         es: 'Leche',                           price: 2.63, match: /\bmilk\b/i },
  { key: 'greek-yogurt',    cat: 'Dairy & Fridge',  en: 'Greek yogurt',                 es: 'Yogur griego',                    price: 4.5, match: /yogurt/i },
  { key: 'butter',          cat: 'Dairy & Fridge',  en: 'Butter',                       es: 'Manteca',                         price: 5, match: /\bbutter\b/i },
  { key: 'cheddar',         cat: 'Dairy & Fridge',  en: 'Cheddar cheese',               es: 'Queso cheddar',                   price: 4.33, match: /cheddar/i },
  { key: 'parmesan',        cat: 'Dairy & Fridge',  en: 'Parmesan',                     es: 'Parmesano',                       price: 2, match: /parmesan/i },
  { key: 'cream-cheese',    cat: 'Dairy & Fridge',  en: 'Cream cheese',                 es: 'Queso crema',                     price: 3, match: /cream cheese/i },
  { key: 'feta',            cat: 'Dairy & Fridge',  en: 'Feta cheese',                  es: 'Queso feta',                      price: 3.5, match: /feta/i },
  { key: 'shredded-cheese', cat: 'Dairy & Fridge',  en: 'Shredded cheese',              es: 'Queso rallado',                   price: 2.5, match: /shredded cheese/i },
  { key: 'cheese',          cat: 'Dairy & Fridge',  en: 'Cheese (assorted or sliced)',  es: 'Queso (variado o en fetas)',      price: 3.33, match: /cheese/i },
  { key: 'sour-cream',      cat: 'Dairy & Fridge',  en: 'Sour cream',                   es: 'Crema agria',                     price: 1.25, match: /sour cream/i },
  { key: 'eggs',            cat: 'Dairy & Fridge',  en: 'Eggs',                         es: 'Huevos',                          price: 2.1, match: /\beggs?\b/i },
  { key: 'hummus',          cat: 'Dairy & Fridge',  en: 'Hummus',                       es: 'Hummus',                          price: 4, match: /hummus/i },

  /* ── Pantry ───────────────────────────────────────────────── */
  { key: 'lentils',         cat: 'Pantry',          en: 'Red lentils (dry)',            es: 'Lentejas rojas (secas)',          price: 1.25, match: /lentil/i },
  { key: 'chickpeas',       cat: 'Pantry',          en: 'Canned chickpeas',             es: 'Garbanzos en lata',               price: 1.5, match: /chickpea/i },
  { key: 'black-beans',     cat: 'Pantry',          en: 'Canned black beans',           es: 'Porotos negros en lata',          price: 1.5, match: /black beans/i },
  { key: 'kidney-beans',    cat: 'Pantry',          en: 'Canned kidney beans',          es: 'Porotos kidney en lata',          price: 1.5, match: /kidney beans/i },
  { key: 'white-beans',     cat: 'Pantry',          en: 'Canned white beans',           es: 'Alubias blancas en lata',         price: 2.5, match: /white beans|cannellini/i },
  { key: 'honey',           cat: 'Pantry',          en: 'Honey',                        es: 'Miel',                            price: 3, match: /honey/i },
  { key: 'brown-sugar',     cat: 'Pantry',          en: 'Brown sugar',                  es: 'Azúcar mascabo',                  price: 2.5, match: /brown sugar/i },
  { key: 'sugar',           cat: 'Pantry',          en: 'Sugar',                        es: 'Azúcar',                          price: 0, kind: 'staple', match: /\bsugar\b/i },
  { key: 'flour',           cat: 'Pantry',          en: 'Flour',                        es: 'Harina',                          price: 2, kind: 'staple', match: /^flour\b/i },
  { key: 'baking-powder',   cat: 'Pantry',          en: 'Baking powder',                es: 'Polvo para hornear',              price: 2.5, kind: 'spice', match: /baking powder/i },
  { key: 'vanilla',         cat: 'Pantry',          en: 'Vanilla extract',              es: 'Esencia de vainilla',             price: 5, kind: 'spice', match: /vanilla/i },
  { key: 'cumin',           cat: 'Pantry',          en: 'Ground cumin',                 es: 'Comino',                          price: 1.29, kind: 'spice', match: /cumin/i },
  { key: 'turmeric',        cat: 'Pantry',          en: 'Turmeric',                     es: 'Cúrcuma',                         price: 3, kind: 'spice', match: /turmeric/i },
  { key: 'paprika',         cat: 'Pantry',          en: 'Paprika (smoked)',             es: 'Pimentón (ahumado)',              price: 2.25, kind: 'spice', match: /paprika/i },
  { key: 'oregano',         cat: 'Pantry',          en: 'Dried oregano',                es: 'Orégano',                         price: 1.67, kind: 'spice', match: /oregano/i },
  { key: 'basil',           cat: 'Pantry',          en: 'Dried basil',                  es: 'Albahaca seca',                   price: 1.67, kind: 'spice', match: /basil/i },
  { key: 'cinnamon',        cat: 'Pantry',          en: 'Cinnamon',                     es: 'Canela',                          price: 2.5, kind: 'spice', match: /cinnamon/i },
  { key: 'pine-nuts',       cat: 'Pantry',          en: 'Pine nuts',                    es: 'Piñones',                         price: 9.6, match: /pine nuts/i },
  { key: 'mixed-nuts',      cat: 'Pantry',          en: 'Mixed nuts',                   es: 'Frutos secos variados',           price: 5, match: /mixed nuts/i },
  { key: 'red-wine',        cat: 'Other',           en: 'Red wine',                     es: 'Vino tinto',                      price: 8, match: /red wine/i },
  { key: 'white-wine',      cat: 'Other',           en: 'White wine',                   es: 'Vino blanco',                     price: 0, match: /white wine/i },

  /* ── Other ────────────────────────────────────────────────── */
  { key: 'skewers',         cat: 'Other',           en: 'Wooden skewers',               es: 'Palitos de brochette',            price: 2.5, match: /skewers/i }
];
