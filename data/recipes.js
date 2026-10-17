/* ============================================================
   Meals & recipes — the list each week's menu is drawn from
   (5 breakfasts, 5 lunches, 5 snacks and 5 dinners, Monday–Friday).

   Text fields are bilingual: field[lang], lang = 'en' | 'es'
   id      : unique and stable — saved swaps refer to it
   type    : 'breakfast' | 'lunch' | 'snack' | 'dinner'

   Balance facts — js/planner.js uses these to keep each week varied:
   protein : lunches & dinners — 'fish' | 'poultry' | 'beef' | 'pork'
             | 'plant' (vegetarian) | 'egg'
   base    : lunches & dinners — main starch: 'rice' | 'pasta' |
             'bread' (incl. tortillas, wraps, buns) | 'potato' |
             'grain' (quinoa, couscous) | 'none'
   group   : breakfasts — 'egg' | 'grain' (oats, bread, pancakes) |
             'dairy' | 'fruit'
             snacks — 'fruit' | 'dairy' | 'veg' | 'grain'
   tags    : optional; recipes sharing a tag are similar dishes, so a
             week gets at most one of each ("soup" and "toast": two)

   ing     : ingredients for 4 people; the shopping list is built from
             these lines (see data/ingredients.js)
   steps   : a step starting "Toddler tip:" / "Consejo para pequeños:"
             is shown as a highlighted note
   tip     : optional nutrition note ("" for none)
   prep    : optional make-ahead tasks for the Sunday prep card, as keys
             of prepTasks at the bottom of this file
   experimental : true for a new, not yet family-tested recipe — shown
             with a 🧪 flask; at most two land in a week

   To add a recipe, copy one of the same type and change it. Keep it
   self-contained: any recipe can land on any day.
   ============================================================ */
const recipes = [
  {
    "id": "scrambled-eggs-on-whole-grain-toast",
    "type": "breakfast",
    "group": "egg",
    "name": {
      "en": "Scrambled Eggs on Whole-Grain Toast",
      "es": "Huevos Revueltos con Tostadas Integrales"
    },
    "ing": {
      "en": [
        "8 eggs",
        "4 tbsp milk",
        "1 tbsp butter",
        "8 slices whole-grain bread",
        "1 cup cherry tomatoes, halved",
        "Salt & pepper"
      ],
      "es": [
        "8 huevos",
        "4 cdas leche",
        "1 cda manteca",
        "8 rebanadas de pan integral",
        "1 taza tomates cherry en mitades",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Whisk eggs with milk, salt, and pepper.",
        "Melt butter in a non-stick pan over medium-low heat.",
        "Add eggs; stir gently with a spatula until softly set but fully cooked, 3–4 min.",
        "Toast the bread and serve the eggs on top, with cherry tomatoes on the side.",
        "Toddler tip: cut toast into fingers and serve the eggs in small spoonfuls."
      ],
      "es": [
        "Batir los huevos con la leche, sal y pimienta.",
        "Derretir la manteca en una sartén antiadherente a fuego medio-bajo.",
        "Agregar los huevos; revolver suavemente con espátula hasta que estén cremosos pero bien cocidos, 3–4 min.",
        "Tostar el pan y servir los huevos encima, con los tomates cherry al costado.",
        "Consejo para pequeños: cortar la tostada en bastones y servir el huevo en cucharadas chicas."
      ]
    },
    "tip": {
      "en": "Eggs give choline and protein — great for baby’s brain. For mom, cook them until fully set (no runny egg).",
      "es": "Los huevos aportan colina y proteína — excelentes para el cerebro del bebé. Para mamá, cocinarlos hasta que estén bien firmes (nada de huevo crudo)."
    }
  },
  {
    "id": "spinach-and-pepper-omelette",
    "type": "breakfast",
    "group": "egg",
    "name": {
      "en": "Spinach & Pepper Omelette",
      "es": "Omelette de Espinaca y Morrón"
    },
    "ing": {
      "en": [
        "8 eggs",
        "2 cups fresh spinach",
        "1 red bell pepper, diced",
        "½ cup shredded cheese",
        "1 tbsp olive oil",
        "Salt & pepper",
        "4 slices whole-grain bread, to serve"
      ],
      "es": [
        "8 huevos",
        "2 tazas espinaca fresca",
        "1 morrón rojo picado",
        "½ taza queso rallado",
        "1 cda aceite de oliva",
        "Sal y pimienta",
        "4 rebanadas de pan integral, para acompañar"
      ]
    },
    "steps": {
      "en": [
        "Whisk eggs with salt and pepper.",
        "Sauté bell pepper in olive oil 3 min; add spinach and stir until wilted.",
        "Pour in the eggs; cook over medium-low heat, lifting the edges, until almost set.",
        "Sprinkle cheese over half, fold, and cook 1 more min until fully set.",
        "Cut into 4 wedges; serve with toast.",
        "Toddler tip: cut into small squares and check the egg is cooked through."
      ],
      "es": [
        "Batir los huevos con sal y pimienta.",
        "Saltear el morrón en aceite de oliva 3 min; agregar la espinaca y revolver hasta que se achique.",
        "Verter los huevos; cocinar a fuego medio-bajo, levantando los bordes, hasta que casi cuajen.",
        "Espolvorear el queso sobre una mitad, doblar y cocinar 1 min más hasta que esté bien cocido.",
        "Cortar en 4 porciones; servir con tostadas.",
        "Consejo para pequeños: cortar en cuadraditos y verificar que el huevo esté bien cocido."
      ]
    },
    "tip": {
      "en": "Spinach brings folate and iron — key nutrients in pregnancy.",
      "es": "La espinaca aporta folato y hierro — nutrientes clave en el embarazo."
    }
  },
  {
    "id": "breakfast-burritos",
    "type": "breakfast",
    "group": "egg",
    "tags": [
      "tortilla"
    ],
    "name": {
      "en": "Breakfast Burritos",
      "es": "Burritos de Desayuno"
    },
    "ing": {
      "en": [
        "6 eggs",
        "1 can black beans, drained",
        "4 large flour tortillas",
        "½ cup shredded cheese",
        "1 tomato, diced",
        "1 avocado, sliced",
        "1 tbsp olive oil",
        "Salt"
      ],
      "es": [
        "6 huevos",
        "1 lata porotos negros escurridos",
        "4 tortillas de harina grandes",
        "½ taza queso rallado",
        "1 tomate picado",
        "1 palta en rodajas",
        "1 cda aceite de oliva",
        "Sal"
      ]
    },
    "steps": {
      "en": [
        "Warm the beans in a small pot with a pinch of salt; mash lightly.",
        "Scramble the eggs in olive oil until fully cooked.",
        "Warm the tortillas in a dry pan.",
        "Fill each tortilla with beans, eggs, cheese, tomato, and avocado; roll up tightly.",
        "Toast seam-side down 1 min to seal; cut in half to serve.",
        "Toddler tip: serve the filling in a bowl with tortilla strips."
      ],
      "es": [
        "Calentar los porotos en una olla chica con una pizca de sal; pisar ligeramente.",
        "Revolver los huevos en el aceite de oliva hasta que estén bien cocidos.",
        "Calentar las tortillas en una sartén seca.",
        "Rellenar cada tortilla con porotos, huevo, queso, tomate y palta; enrollar bien apretado.",
        "Dorar 1 min con el cierre hacia abajo para sellar; cortar por la mitad para servir.",
        "Consejo para pequeños: servir el relleno en un bol con tiras de tortilla."
      ]
    },
    "tip": {
      "en": "Beans plus eggs make a fibre- and protein-packed start that keeps everyone full until lunch.",
      "es": "Porotos más huevo: un desayuno lleno de fibra y proteína que deja a todos satisfechos hasta el almuerzo."
    }
  },
  {
    "id": "baked-egg-and-veggie-muffins",
    "type": "breakfast",
    "group": "egg",
    "name": {
      "en": "Baked Egg & Veggie Muffins",
      "es": "Muffins de Huevo y Verduras al Horno"
    },
    "ing": {
      "en": [
        "10 eggs",
        "1 cup fresh spinach, chopped",
        "1 red bell pepper, finely diced",
        "½ cup shredded cheese",
        "¼ cup milk",
        "Salt & pepper",
        "Olive oil, for the tin"
      ],
      "es": [
        "10 huevos",
        "1 taza espinaca fresca picada",
        "1 morrón rojo picado fino",
        "½ taza queso rallado",
        "¼ taza leche",
        "Sal y pimienta",
        "Aceite de oliva, para el molde"
      ]
    },
    "steps": {
      "en": [
        "Preheat oven to 180°C / 350°F; oil a 12-cup muffin tin.",
        "Whisk eggs with milk, salt, and pepper.",
        "Divide spinach, pepper, and cheese among the cups; pour the egg mix over.",
        "Bake 18–20 min until puffed and fully set.",
        "Serve warm, or chill and reheat 30 sec in the microwave (they keep 3 days).",
        "Toddler tip: cut into quarters — perfect finger food."
      ],
      "es": [
        "Precalentar el horno a 180 °C; aceitar un molde de 12 muffins.",
        "Batir los huevos con la leche, sal y pimienta.",
        "Repartir la espinaca, el morrón y el queso en los moldes; verter la mezcla de huevo encima.",
        "Hornear 18–20 min hasta que se inflen y estén bien cocidos.",
        "Servir tibios, o enfriar y recalentar 30 seg en el microondas (duran 3 días).",
        "Consejo para pequeños: cortar en cuartos — ideales para comer con la mano."
      ]
    },
    "tip": {
      "en": "Make a batch ahead and breakfast is ready in seconds on busy mornings.",
      "es": "Hacé una tanda de antemano y el desayuno está listo en segundos las mañanas con apuro."
    },
    "prep": [
      "egg-muffins"
    ]
  },
  {
    "id": "avocado-toast-with-fried-eggs",
    "type": "breakfast",
    "group": "egg",
    "tags": [
      "toast"
    ],
    "name": {
      "en": "Avocado Toast with Fried Eggs",
      "es": "Tostadas con Palta y Huevo a la Plancha"
    },
    "ing": {
      "en": [
        "8 slices whole-grain bread",
        "2 ripe avocados",
        "4 eggs",
        "Juice of 1 lime",
        "1 tbsp olive oil",
        "Salt & pepper",
        "Chili flakes (optional, adults only)"
      ],
      "es": [
        "8 rebanadas de pan integral",
        "2 paltas maduras",
        "4 huevos",
        "Jugo de 1 lima",
        "1 cda aceite de oliva",
        "Sal y pimienta",
        "Ají en hojuelas (opcional, solo para adultos)"
      ]
    },
    "steps": {
      "en": [
        "Mash avocados with lime juice and a pinch of salt.",
        "Fry eggs in olive oil over medium heat; flip and cook until the yolks are firm.",
        "Toast the bread and spread thickly with avocado.",
        "Top with the eggs; season with pepper and, for adults, chili flakes.",
        "Toddler tip: avocado toast fingers with chopped egg on the side."
      ],
      "es": [
        "Pisar las paltas con el jugo de lima y una pizca de sal.",
        "Freír los huevos en aceite de oliva a fuego medio; dar vuelta y cocinar hasta que la yema esté firme.",
        "Tostar el pan y untar con abundante palta.",
        "Coronar con los huevos; condimentar con pimienta y, para los adultos, ají.",
        "Consejo para pequeños: bastones de tostada con palta y el huevo picado al costado."
      ]
    },
    "tip": {
      "en": "Avocado’s healthy fats help the body absorb vitamins A, D, E and K.",
      "es": "Las grasas saludables de la palta ayudan a absorber las vitaminas A, D, E y K."
    }
  },
  {
    "id": "overnight-oats-with-berries",
    "type": "breakfast",
    "group": "grain",
    "tags": [
      "oats"
    ],
    "name": {
      "en": "Overnight Oats with Berries",
      "es": "Avena Remojada con Frutas del Bosque"
    },
    "ing": {
      "en": [
        "2 cups rolled oats",
        "2 cups milk",
        "1 cup Greek yogurt",
        "2 tbsp chia seeds",
        "2 tbsp honey",
        "1 cup mixed berries (fresh or frozen)"
      ],
      "es": [
        "2 tazas avena arrollada",
        "2 tazas leche",
        "1 taza yogur griego",
        "2 cdas semillas de chía",
        "2 cdas miel",
        "1 taza frutas del bosque (frescas o congeladas)"
      ]
    },
    "steps": {
      "en": [
        "The evening before: mix oats, milk, yogurt, chia seeds, and honey in 4 jars or a bowl.",
        "Cover and refrigerate overnight.",
        "In the morning, stir and top with berries.",
        "Toddler tip: stir in a little extra milk for a softer texture; no honey under 1."
      ],
      "es": [
        "La noche anterior: mezclar la avena, la leche, el yogur, la chía y la miel en 4 frascos o un bol.",
        "Tapar y llevar a la heladera toda la noche.",
        "A la mañana, revolver y cubrir con las frutas del bosque.",
        "Consejo para pequeños: agregar un poco más de leche para que quede más suave; sin miel antes del año."
      ]
    },
    "tip": {
      "en": "Oats give slow-release energy and fibre — helpful against pregnancy constipation.",
      "es": "La avena da energía de liberación lenta y fibra — ayuda contra el estreñimiento del embarazo."
    },
    "prep": [
      "overnight-oats"
    ]
  },
  {
    "id": "apple-and-cinnamon-porridge",
    "type": "breakfast",
    "group": "grain",
    "tags": [
      "oats"
    ],
    "name": {
      "en": "Apple & Cinnamon Porridge",
      "es": "Avena Caliente con Manzana y Canela"
    },
    "ing": {
      "en": [
        "1½ cups rolled oats",
        "3 cups milk",
        "2 apples, grated",
        "1 tsp cinnamon",
        "2 tbsp honey",
        "2 tbsp mixed nuts, chopped (optional)"
      ],
      "es": [
        "1½ tazas avena arrollada",
        "3 tazas leche",
        "2 manzanas ralladas",
        "1 cdita canela",
        "2 cdas miel",
        "2 cdas frutos secos picados (opcional)"
      ]
    },
    "steps": {
      "en": [
        "Bring milk to a simmer in a saucepan.",
        "Stir in oats, grated apple, and cinnamon; cook 5–6 min, stirring, until creamy.",
        "Sweeten with honey and serve topped with chopped nuts.",
        "Toddler tip: no nuts (choking hazard) and no honey under 1 — the apple sweetens it enough."
      ],
      "es": [
        "Llevar la leche a un hervor suave en una olla.",
        "Incorporar la avena, la manzana rallada y la canela; cocinar 5–6 min revolviendo hasta que quede cremosa.",
        "Endulzar con miel y servir con frutos secos picados por encima.",
        "Consejo para pequeños: sin frutos secos (riesgo de atragantamiento) y sin miel antes del año — alcanza con el dulzor de la manzana."
      ]
    },
    "tip": {
      "en": "A warm, fibre-rich bowl that keeps blood sugar steady through the morning.",
      "es": "Un bol calentito y rico en fibra que mantiene estable el azúcar en sangre toda la mañana."
    }
  },
  {
    "id": "banana-oat-pancakes",
    "type": "breakfast",
    "group": "grain",
    "tags": [
      "pancakes"
    ],
    "name": {
      "en": "Banana Oat Pancakes",
      "es": "Pancakes de Banana y Avena"
    },
    "ing": {
      "en": [
        "2 ripe bananas",
        "2 eggs",
        "1½ cups rolled oats",
        "1 cup milk",
        "1 tsp baking powder",
        "½ tsp cinnamon",
        "1 tbsp butter, for the pan",
        "1 cup strawberries, sliced",
        "Honey, to serve"
      ],
      "es": [
        "2 bananas maduras",
        "2 huevos",
        "1½ tazas avena arrollada",
        "1 taza leche",
        "1 cdita polvo para hornear",
        "½ cdita canela",
        "1 cda manteca, para la sartén",
        "1 taza frutillas en rodajas",
        "Miel, para servir"
      ]
    },
    "steps": {
      "en": [
        "Blend bananas, eggs, oats, milk, baking powder, and cinnamon until smooth; rest 5 min.",
        "Heat a little butter in a non-stick pan over medium heat.",
        "Pour small ladlefuls; cook 2 min until bubbles form, flip and cook 1–2 min more.",
        "Serve with sliced strawberries and a drizzle of honey.",
        "Toddler tip: cut into strips — no honey under 1."
      ],
      "es": [
        "Licuar las bananas, los huevos, la avena, la leche, el polvo para hornear y la canela hasta que quede liso; dejar reposar 5 min.",
        "Calentar un poco de manteca en una sartén antiadherente a fuego medio.",
        "Verter cucharones chicos; cocinar 2 min hasta que aparezcan burbujas, dar vuelta y cocinar 1–2 min más.",
        "Servir con frutillas en rodajas y un hilo de miel.",
        "Consejo para pequeños: cortar en tiras — sin miel antes del año."
      ]
    },
    "tip": {
      "en": "No added sugar — the ripe bananas do the sweetening.",
      "es": "Sin azúcar agregada — las bananas maduras endulzan solas."
    }
  },
  {
    "id": "french-toast-with-berries",
    "type": "breakfast",
    "group": "grain",
    "tags": [
      "pancakes"
    ],
    "name": {
      "en": "French Toast with Berries",
      "es": "Tostadas Francesas con Frutas del Bosque"
    },
    "ing": {
      "en": [
        "8 slices whole-grain bread",
        "4 eggs",
        "1 cup milk",
        "1 tsp cinnamon",
        "1 tsp vanilla",
        "1 tbsp butter",
        "1 cup mixed berries (fresh or frozen)",
        "½ cup Greek yogurt, to serve"
      ],
      "es": [
        "8 rebanadas de pan integral",
        "4 huevos",
        "1 taza leche",
        "1 cdita canela",
        "1 cdita vainilla",
        "1 cda manteca",
        "1 taza frutas del bosque (frescas o congeladas)",
        "½ taza yogur griego, para servir"
      ]
    },
    "steps": {
      "en": [
        "Whisk eggs, milk, cinnamon, and vanilla in a shallow dish.",
        "Dip each slice of bread for a few seconds per side.",
        "Cook in butter over medium heat, 2–3 min per side, until golden and set in the middle.",
        "Serve topped with berries and a spoonful of yogurt.",
        "Toddler tip: cut into fingers; mash the berries if they are large."
      ],
      "es": [
        "Batir los huevos, la leche, la canela y la vainilla en una fuente baja.",
        "Pasar cada rebanada de pan unos segundos por cada lado.",
        "Cocinar en manteca a fuego medio, 2–3 min por lado, hasta que estén doradas y cocidas por dentro.",
        "Servir con las frutas del bosque y una cucharada de yogur.",
        "Consejo para pequeños: cortar en bastones; pisar las frutas si son grandes."
      ]
    },
    "tip": {
      "en": "Berries add vitamin C, which helps the body absorb the iron in eggs and whole grains.",
      "es": "Las frutas del bosque aportan vitamina C, que ayuda a absorber el hierro del huevo y los cereales integrales."
    }
  },
  {
    "id": "peanut-butter-and-banana-toast",
    "type": "breakfast",
    "group": "grain",
    "tags": [
      "toast",
      "nut-butter"
    ],
    "name": {
      "en": "Peanut Butter & Banana Toast",
      "es": "Tostadas con Mantequilla de Maní y Banana"
    },
    "ing": {
      "en": [
        "8 slices whole-grain bread",
        "6 tbsp peanut butter",
        "3 bananas, sliced",
        "1 tsp cinnamon",
        "2 cups milk, to drink"
      ],
      "es": [
        "8 rebanadas de pan integral",
        "6 cdas mantequilla de maní",
        "3 bananas en rodajas",
        "1 cdita canela",
        "2 tazas leche, para tomar"
      ]
    },
    "steps": {
      "en": [
        "Toast the bread.",
        "Spread with peanut butter and top with banana slices.",
        "Dust with cinnamon and serve with a glass of milk.",
        "Toddler tip: spread the peanut butter thinly (thick globs are a choking risk) and cut into fingers."
      ],
      "es": [
        "Tostar el pan.",
        "Untar con mantequilla de maní y cubrir con rodajas de banana.",
        "Espolvorear con canela y servir con un vaso de leche.",
        "Consejo para pequeños: untar la mantequilla de maní en capa fina (los pegotes gruesos son riesgo de atragantamiento) y cortar en bastones."
      ]
    },
    "tip": {
      "en": "Quick, filling and kid-approved: protein and healthy fats from the peanut butter, potassium from the banana.",
      "es": "Rápido, rendidor y aprobado por los chicos: proteína y grasas saludables del maní, potasio de la banana."
    }
  },
  {
    "id": "cream-cheese-and-strawberry-toast",
    "type": "breakfast",
    "group": "grain",
    "tags": [
      "toast"
    ],
    "name": {
      "en": "Cream Cheese & Strawberry Toast",
      "es": "Tostadas con Queso Crema y Frutillas"
    },
    "ing": {
      "en": [
        "8 slices whole-grain bread",
        "200g cream cheese",
        "2 cups strawberries, sliced",
        "1 tbsp honey",
        "2 oranges, to serve"
      ],
      "es": [
        "8 rebanadas de pan integral",
        "200 g queso crema",
        "2 tazas frutillas en rodajas",
        "1 cda miel",
        "2 naranjas, para acompañar"
      ]
    },
    "steps": {
      "en": [
        "Toast the bread.",
        "Spread with cream cheese and top with strawberry slices.",
        "Drizzle lightly with honey.",
        "Serve with orange wedges.",
        "Toddler tip: cut into small squares; no honey under 1."
      ],
      "es": [
        "Tostar el pan.",
        "Untar con queso crema y cubrir con las frutillas en rodajas.",
        "Rociar con un poco de miel.",
        "Servir con gajos de naranja.",
        "Consejo para pequeños: cortar en cuadraditos; sin miel antes del año."
      ]
    },
    "tip": {
      "en": "Strawberries and oranges: a big dose of vitamin C to start the day.",
      "es": "Frutillas y naranja: una gran dosis de vitamina C para empezar el día."
    }
  },
  {
    "id": "greek-yogurt-bowl-with-granola-and-fruit",
    "type": "breakfast",
    "group": "dairy",
    "tags": [
      "yogurt"
    ],
    "name": {
      "en": "Greek Yogurt Bowl with Granola & Fruit",
      "es": "Bowl de Yogur Griego con Granola y Fruta"
    },
    "ing": {
      "en": [
        "3 cups Greek yogurt",
        "1 cup granola",
        "2 bananas, sliced",
        "1 cup strawberries, chopped",
        "2 tbsp honey",
        "2 tbsp chia seeds"
      ],
      "es": [
        "3 tazas yogur griego",
        "1 taza granola",
        "2 bananas en rodajas",
        "1 taza frutillas picadas",
        "2 cdas miel",
        "2 cdas semillas de chía"
      ]
    },
    "steps": {
      "en": [
        "Spoon yogurt into 4 bowls.",
        "Top with banana, strawberries, granola, and chia seeds.",
        "Drizzle with honey and serve right away so the granola stays crunchy.",
        "Toddler tip: swap the granola for soft oats and skip the honey under 1."
      ],
      "es": [
        "Repartir el yogur en 4 bols.",
        "Cubrir con banana, frutillas, granola y chía.",
        "Rociar con miel y servir enseguida para que la granola quede crocante.",
        "Consejo para pequeños: cambiar la granola por avena blanda y sin miel antes del año."
      ]
    },
    "tip": {
      "en": "Greek yogurt is rich in calcium and protein — both important for baby’s bones.",
      "es": "El yogur griego es rico en calcio y proteína — ambos importantes para los huesos del bebé."
    }
  },
  {
    "id": "vanilla-chia-pudding-with-mango",
    "type": "breakfast",
    "group": "dairy",
    "name": {
      "en": "Vanilla Chia Pudding with Mango",
      "es": "Pudín de Chía con Vainilla y Mango"
    },
    "ing": {
      "en": [
        "½ cup chia seeds",
        "2 cups milk",
        "1 cup Greek yogurt",
        "1 tsp vanilla",
        "2 tbsp honey",
        "1 mango, diced (or 1½ cups frozen mango)"
      ],
      "es": [
        "½ taza semillas de chía",
        "2 tazas leche",
        "1 taza yogur griego",
        "1 cdita vainilla",
        "2 cdas miel",
        "1 mango en cubos (o 1½ tazas de mango congelado)"
      ]
    },
    "steps": {
      "en": [
        "The evening before: whisk chia seeds, milk, yogurt, vanilla, and honey.",
        "Rest 10 min, whisk again to break up clumps, then cover and chill overnight.",
        "In the morning, spoon into bowls and top with mango.",
        "Toddler tip: blend the pudding smooth for little ones; no honey under 1."
      ],
      "es": [
        "La noche anterior: batir la chía con la leche, el yogur, la vainilla y la miel.",
        "Dejar reposar 10 min, volver a batir para deshacer los grumos, tapar y llevar a la heladera toda la noche.",
        "A la mañana, servir en bols y cubrir con el mango.",
        "Consejo para pequeños: licuar el pudín para que quede liso; sin miel antes del año."
      ]
    },
    "tip": {
      "en": "Chia seeds bring omega-3s, fibre, and calcium in a tiny package.",
      "es": "Las semillas de chía aportan omega-3, fibra y calcio en un tamaño mínimo."
    },
    "prep": [
      "chia-pudding"
    ]
  },
  {
    "id": "cheese-and-tomato-toasties",
    "type": "breakfast",
    "group": "dairy",
    "tags": [
      "toast"
    ],
    "name": {
      "en": "Cheese & Tomato Toasties",
      "es": "Tostados de Queso y Tomate"
    },
    "ing": {
      "en": [
        "8 slices whole-grain bread",
        "200g cheddar cheese, sliced",
        "2 tomatoes, sliced",
        "1 tbsp butter",
        "2 apples, to serve"
      ],
      "es": [
        "8 rebanadas de pan integral",
        "200 g queso cheddar en fetas",
        "2 tomates en rodajas",
        "1 cda manteca",
        "2 manzanas, para acompañar"
      ]
    },
    "steps": {
      "en": [
        "Make 4 sandwiches with the cheese and tomato slices.",
        "Butter the outsides lightly.",
        "Toast in a pan over medium heat, pressing down, 3 min per side until golden and melted.",
        "Cut into triangles; serve with apple slices.",
        "Toddler tip: cut into small squares once cooled a little."
      ],
      "es": [
        "Armar 4 sándwiches con las fetas de queso y las rodajas de tomate.",
        "Untar apenas el exterior con manteca.",
        "Tostar en sartén a fuego medio, presionando, 3 min por lado hasta que esté dorado y el queso derretido.",
        "Cortar en triángulos; servir con gajos de manzana.",
        "Consejo para pequeños: cortar en cuadraditos cuando se enfríe un poco."
      ]
    },
    "tip": {
      "en": "Choose pasteurised cheese during pregnancy — cheddar is a safe, calcium-rich pick.",
      "es": "En el embarazo elegí quesos pasteurizados — el cheddar es una opción segura y rica en calcio."
    }
  },
  {
    "id": "berry-smoothie-bowl",
    "type": "breakfast",
    "group": "fruit",
    "tags": [
      "smoothie"
    ],
    "name": {
      "en": "Berry Smoothie Bowl",
      "es": "Smoothie Bowl de Frutas del Bosque"
    },
    "ing": {
      "en": [
        "2 cups frozen mixed berries",
        "2 frozen bananas",
        "1 cup Greek yogurt",
        "1 cup milk",
        "½ cup granola",
        "1 kiwi, sliced",
        "1 tbsp chia seeds"
      ],
      "es": [
        "2 tazas frutas del bosque congeladas",
        "2 bananas congeladas",
        "1 taza yogur griego",
        "1 taza leche",
        "½ taza granola",
        "1 kiwi en rodajas",
        "1 cda semillas de chía"
      ]
    },
    "steps": {
      "en": [
        "Blend berries, bananas, yogurt, and milk until thick and smooth.",
        "Pour into 4 bowls.",
        "Top with granola, kiwi, and chia seeds; serve right away.",
        "Toddler tip: serve as a thick smoothie in a cup, without the granola."
      ],
      "es": [
        "Licuar las frutas del bosque, las bananas, el yogur y la leche hasta que quede espeso y liso.",
        "Servir en 4 bols.",
        "Cubrir con granola, kiwi y chía; servir enseguida.",
        "Consejo para pequeños: servir como licuado espeso en vaso, sin la granola."
      ]
    },
    "tip": {
      "en": "Frozen fruit is picked ripe and keeps its vitamins — a colourful, antioxidant-rich start.",
      "es": "La fruta congelada se cosecha madura y conserva sus vitaminas — un comienzo colorido y lleno de antioxidantes."
    },
    "prep": [
      "freeze-bananas"
    ]
  },
  {
    "id": "banana-licuado-with-toast",
    "type": "breakfast",
    "group": "fruit",
    "tags": [
      "smoothie"
    ],
    "name": {
      "en": "Banana Licuado with Toast",
      "es": "Licuado de Banana con Tostadas"
    },
    "ing": {
      "en": [
        "3 ripe bananas",
        "3 cups milk",
        "1 tbsp honey",
        "8 slices whole-grain bread",
        "4 tbsp cream cheese"
      ],
      "es": [
        "3 bananas maduras",
        "3 tazas leche",
        "1 cda miel",
        "8 rebanadas de pan integral",
        "4 cdas queso crema"
      ]
    },
    "steps": {
      "en": [
        "Blend bananas, milk, and honey until frothy.",
        "Toast the bread and spread with cream cheese.",
        "Serve the licuado right away, with the toast on the side.",
        "Toddler tip: serve in a cup with a lid; no honey under 1."
      ],
      "es": [
        "Licuar las bananas con la leche y la miel hasta que haga espuma.",
        "Tostar el pan y untar con queso crema.",
        "Servir el licuado enseguida, con las tostadas al costado.",
        "Consejo para pequeños: servir en vaso con tapa; sin miel antes del año."
      ]
    },
    "tip": {
      "en": "A classic, comforting breakfast: calcium from the milk and quick energy from the bananas.",
      "es": "Un desayuno clásico y reconfortante: calcio de la leche y energía rápida de la banana."
    }
  },
  {
    "id": "egg-in-a-hole-toast",
    "type": "breakfast",
    "group": "egg",
    "name": {
      "en": "Egg-in-a-Hole Toast",
      "es": "Huevo en la Ventana"
    },
    "ing": {
      "en": [
        "8 slices whole-grain bread",
        "8 eggs",
        "2 tbsp butter",
        "1 cup cherry tomatoes, halved",
        "Salt & pepper"
      ],
      "es": [
        "8 rebanadas de pan integral",
        "8 huevos",
        "2 cdas manteca",
        "1 taza tomates cherry en mitades",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Cut a hole in the middle of each slice with a glass.",
        "Melt a little butter in a pan; add the bread and crack an egg into each hole.",
        "Cook 3 min, flip, and cook 2–3 min more until the yolk is firm.",
        "Toast the cut-out circles in the pan for dipping; serve with tomatoes.",
        "Toddler tip: cut into small squares once cooled."
      ],
      "es": [
        "Hacer un agujero en el centro de cada rebanada con un vaso.",
        "Derretir un poco de manteca en una sartén; poner el pan y cascar un huevo en cada agujero.",
        "Cocinar 3 min, dar vuelta y cocinar 2–3 min más hasta que la yema esté firme.",
        "Tostar los círculos recortados para mojar; servir con los tomates.",
        "Consejo para pequeños: cortar en cuadraditos cuando se enfríe."
      ]
    },
    "tip": {
      "en": "Kids love the \"window\" — and it is a sneaky way to get a whole egg in.",
      "es": "A los chicos les encanta la \"ventana\" — y es una forma fácil de que coman un huevo entero."
    }
  },
  {
    "id": "breakfast-shakshuka",
    "type": "breakfast",
    "group": "egg",
    "name": {
      "en": "Breakfast Shakshuka",
      "es": "Shakshuka de Desayuno"
    },
    "ing": {
      "en": [
        "1 onion, diced",
        "1 red bell pepper, diced",
        "2 cloves garlic, minced",
        "1 can (400g) crushed tomatoes",
        "1 tsp cumin",
        "1 tsp paprika",
        "6 eggs",
        "2 tbsp olive oil",
        "4 slices whole-grain bread, to serve"
      ],
      "es": [
        "1 cebolla picada",
        "1 morrón rojo picado",
        "2 dientes de ajo picados",
        "1 lata (400 g) tomates triturados",
        "1 cdita comino",
        "1 cdita pimentón",
        "6 huevos",
        "2 cdas aceite de oliva",
        "4 rebanadas de pan integral, para acompañar"
      ]
    },
    "steps": {
      "en": [
        "Sauté onion and pepper in olive oil 5 min; add garlic, cumin, and paprika.",
        "Add tomatoes and simmer 8 min until thick.",
        "Make 6 wells and crack in the eggs; cover and cook 8–10 min until the eggs are fully set.",
        "Serve straight from the pan with toast for dipping.",
        "Toddler tip: mash an egg into a little sauce and serve with toast fingers."
      ],
      "es": [
        "Saltear la cebolla y el morrón en aceite de oliva 5 min; agregar el ajo, el comino y el pimentón.",
        "Agregar los tomates y cocinar 8 min hasta que espese.",
        "Hacer 6 huecos y cascar los huevos; tapar y cocinar 8–10 min hasta que estén bien cocidos.",
        "Servir directo de la sartén con tostadas para mojar.",
        "Consejo para pequeños: pisar un huevo con un poco de salsa y servir con bastones de tostada."
      ]
    },
    "tip": {
      "en": "Tomatoes add lycopene and vitamin C; keep the lid on until every yolk is firm for mom.",
      "es": "El tomate aporta licopeno y vitamina C; dejar la tapa hasta que todas las yemas estén firmes para mamá."
    }
  },
  {
    "id": "egg-and-cheese-quesadillas",
    "type": "breakfast",
    "group": "egg",
    "tags": [
      "tortilla"
    ],
    "name": {
      "en": "Egg & Cheese Quesadillas",
      "es": "Quesadillas de Huevo y Queso"
    },
    "ing": {
      "en": [
        "6 eggs",
        "4 large flour tortillas",
        "1 cup shredded cheese",
        "1 cup fresh spinach, chopped",
        "1 tbsp butter",
        "1 avocado, sliced, to serve"
      ],
      "es": [
        "6 huevos",
        "4 tortillas de harina grandes",
        "1 taza queso rallado",
        "1 taza espinaca fresca picada",
        "1 cda manteca",
        "1 palta en rodajas, para acompañar"
      ]
    },
    "steps": {
      "en": [
        "Scramble the eggs with the spinach in butter until fully cooked.",
        "Spread eggs and cheese over half of each tortilla; fold.",
        "Toast in a dry pan 2 min per side until the cheese melts.",
        "Cut into wedges and serve with avocado.",
        "Toddler tip: cut into thin strips once slightly cooled."
      ],
      "es": [
        "Revolver los huevos con la espinaca en manteca hasta que estén bien cocidos.",
        "Repartir el huevo y el queso sobre media tortilla; doblar.",
        "Dorar en sartén seca 2 min por lado hasta que el queso se derrita.",
        "Cortar en triángulos y servir con palta.",
        "Consejo para pequeños: cortar en tiras finas cuando se entibie."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "boiled-eggs-with-toast-soldiers",
    "type": "breakfast",
    "group": "egg",
    "name": {
      "en": "Boiled Eggs with Toast Soldiers",
      "es": "Huevos Duros con Soldaditos de Pan"
    },
    "ing": {
      "en": [
        "8 eggs",
        "8 slices whole-grain bread",
        "2 tbsp butter",
        "2 oranges, cut into wedges",
        "Salt"
      ],
      "es": [
        "8 huevos",
        "8 rebanadas de pan integral",
        "2 cdas manteca",
        "2 naranjas en gajos",
        "Sal"
      ]
    },
    "steps": {
      "en": [
        "Lower the eggs into boiling water and cook 9–10 min for firm yolks.",
        "Cool in cold water for 1 min, then peel or serve in egg cups.",
        "Toast and butter the bread; cut into strips (\"soldiers\").",
        "Serve with a pinch of salt and orange wedges.",
        "Toddler tip: chop the egg finely and mix with a little butter on toast."
      ],
      "es": [
        "Poner los huevos en agua hirviendo y cocinar 9–10 min para que la yema quede firme.",
        "Enfriar 1 min en agua fría; pelar o servir en hueveras.",
        "Tostar el pan, untar con manteca y cortar en tiras (\"soldaditos\").",
        "Servir con una pizca de sal y gajos de naranja.",
        "Consejo para pequeños: picar el huevo bien fino y mezclar con un poco de manteca sobre la tostada."
      ]
    },
    "tip": {
      "en": "Firm-cooked eggs are the safe choice in pregnancy — and still full of choline.",
      "es": "Los huevos bien cocidos son la opción segura en el embarazo — y siguen llenos de colina."
    }
  },
  {
    "id": "blueberry-oat-muffins",
    "type": "breakfast",
    "group": "grain",
    "tags": [
      "muffin"
    ],
    "name": {
      "en": "Blueberry Oat Muffins",
      "es": "Muffins de Avena y Arándanos"
    },
    "ing": {
      "en": [
        "2 cups rolled oats",
        "1 cup flour",
        "2 tsp baking powder",
        "2 eggs",
        "1 cup milk",
        "¼ cup honey",
        "3 tbsp butter, melted",
        "1 cup blueberries (fresh or frozen)"
      ],
      "es": [
        "2 tazas avena arrollada",
        "1 taza harina",
        "2 cditas polvo para hornear",
        "2 huevos",
        "1 taza leche",
        "¼ taza miel",
        "3 cdas manteca derretida",
        "1 taza arándanos (frescos o congelados)"
      ]
    },
    "steps": {
      "en": [
        "Preheat oven to 180°C / 350°F; line a 12-cup muffin tin.",
        "Mix oats, flour, and baking powder; whisk in eggs, milk, honey, and butter.",
        "Fold in the blueberries and fill the cups.",
        "Bake 20–22 min until golden; cool on a rack.",
        "Toddler tip: crumble into small pieces; for babies under 1, bake a few without honey."
      ],
      "es": [
        "Precalentar el horno a 180 °C; forrar un molde de 12 muffins.",
        "Mezclar la avena, la harina y el polvo para hornear; incorporar los huevos, la leche, la miel y la manteca.",
        "Agregar los arándanos con movimientos suaves y llenar los moldes.",
        "Hornear 20–22 min hasta dorar; enfriar sobre rejilla.",
        "Consejo para pequeños: desmenuzar en trocitos; para menores de 1 año, hornear algunos sin miel."
      ]
    },
    "tip": {
      "en": "Bake once, eat twice — they keep 3 days in a tin or freeze well.",
      "es": "Se hornean una vez y rinden dos desayunos — duran 3 días en lata o se congelan."
    },
    "prep": [
      "blueberry-muffins"
    ]
  },
  {
    "id": "granola-bowls-with-milk-and-fruit",
    "type": "breakfast",
    "group": "grain",
    "name": {
      "en": "Granola Bowls with Milk & Fruit",
      "es": "Bowls de Granola con Leche y Fruta"
    },
    "ing": {
      "en": [
        "2 cups granola",
        "3 cups milk",
        "2 bananas, sliced",
        "1 cup strawberries, chopped",
        "2 tbsp mixed nuts, chopped (optional)"
      ],
      "es": [
        "2 tazas granola",
        "3 tazas leche",
        "2 bananas en rodajas",
        "1 taza frutillas picadas",
        "2 cdas frutos secos picados (opcional)"
      ]
    },
    "steps": {
      "en": [
        "Divide granola among 4 bowls.",
        "Top with banana and strawberries.",
        "Pour over cold milk and sprinkle with nuts.",
        "Toddler tip: soak their granola in milk for 5 min to soften; no whole nuts."
      ],
      "es": [
        "Repartir la granola en 4 bols.",
        "Cubrir con banana y frutillas.",
        "Agregar leche fría y espolvorear con frutos secos.",
        "Consejo para pequeños: remojar la granola en leche 5 min para ablandarla; sin frutos secos enteros."
      ]
    },
    "tip": {
      "en": "Pick a granola with little added sugar — the fruit brings the sweetness.",
      "es": "Elegí una granola con poca azúcar agregada — la fruta aporta el dulzor."
    }
  },
  {
    "id": "peanut-butter-banana-oatmeal",
    "type": "breakfast",
    "group": "grain",
    "tags": [
      "oats",
      "nut-butter"
    ],
    "name": {
      "en": "Peanut Butter Banana Oatmeal",
      "es": "Avena con Mantequilla de Maní y Banana"
    },
    "ing": {
      "en": [
        "1½ cups rolled oats",
        "3 cups milk",
        "2 bananas, mashed",
        "3 tbsp peanut butter",
        "½ tsp cinnamon"
      ],
      "es": [
        "1½ tazas avena arrollada",
        "3 tazas leche",
        "2 bananas pisadas",
        "3 cdas mantequilla de maní",
        "½ cdita canela"
      ]
    },
    "steps": {
      "en": [
        "Simmer oats and milk 5 min, stirring.",
        "Stir in mashed banana and cinnamon.",
        "Serve with a swirl of peanut butter on top.",
        "Toddler tip: stir the peanut butter in well rather than serving a thick dollop."
      ],
      "es": [
        "Cocinar la avena con la leche 5 min, revolviendo.",
        "Incorporar la banana pisada y la canela.",
        "Servir con un remolino de mantequilla de maní por encima.",
        "Consejo para pequeños: mezclar bien la mantequilla de maní en lugar de servir un pegote."
      ]
    },
    "tip": {
      "en": "Protein from milk and peanuts keeps everyone going until lunch.",
      "es": "La proteína de la leche y el maní deja a todos con energía hasta el almuerzo."
    }
  },
  {
    "id": "ricotta-and-pear-toast",
    "type": "breakfast",
    "group": "grain",
    "tags": [
      "toast"
    ],
    "name": {
      "en": "Ricotta & Pear Toast",
      "es": "Tostadas con Ricota y Pera"
    },
    "ing": {
      "en": [
        "8 slices whole-grain bread",
        "250g ricotta",
        "2 pears, thinly sliced",
        "1 tbsp honey",
        "½ tsp cinnamon"
      ],
      "es": [
        "8 rebanadas de pan integral",
        "250 g ricota",
        "2 peras en láminas finas",
        "1 cda miel",
        "½ cdita canela"
      ]
    },
    "steps": {
      "en": [
        "Toast the bread.",
        "Spread generously with ricotta.",
        "Top with pear slices, a drizzle of honey, and cinnamon.",
        "Toddler tip: no honey under 1 — the fruit sweetens it enough."
      ],
      "es": [
        "Tostar el pan.",
        "Untar generosamente con ricota.",
        "Cubrir con las peras, un hilo de miel y canela.",
        "Consejo para pequeños: sin miel antes del año — la fruta endulza lo suficiente."
      ]
    },
    "tip": {
      "en": "Ricotta is a mild, pasteurised cheese rich in calcium — great in pregnancy.",
      "es": "La ricota es un queso suave y pasteurizado, rico en calcio — ideal en el embarazo."
    }
  },
  {
    "id": "banana-bread-slices",
    "type": "breakfast",
    "group": "grain",
    "name": {
      "en": "Banana Bread Slices",
      "es": "Budín de Banana"
    },
    "ing": {
      "en": [
        "3 ripe bananas",
        "2 eggs",
        "⅓ cup honey",
        "3 tbsp butter, melted",
        "1½ cups flour",
        "1 tsp baking powder",
        "1 tsp cinnamon",
        "2 cups milk, to drink"
      ],
      "es": [
        "3 bananas maduras",
        "2 huevos",
        "⅓ taza miel",
        "3 cdas manteca derretida",
        "1½ tazas harina",
        "1 cdita polvo para hornear",
        "1 cdita canela",
        "2 tazas leche, para tomar"
      ]
    },
    "steps": {
      "en": [
        "Preheat oven to 175°C / 350°F; line a loaf tin.",
        "Mash bananas; whisk in eggs, honey, and butter.",
        "Fold in flour, baking powder, and cinnamon.",
        "Bake 50–55 min until a skewer comes out clean; cool before slicing.",
        "Serve slices with a glass of milk."
      ],
      "es": [
        "Precalentar el horno a 175 °C; forrar un molde de budín.",
        "Pisar las bananas; incorporar los huevos, la miel y la manteca.",
        "Agregar la harina, el polvo para hornear y la canela, mezclando suave.",
        "Hornear 50–55 min hasta que un palillo salga limpio; enfriar antes de cortar.",
        "Servir las porciones con un vaso de leche."
      ]
    },
    "tip": {
      "en": "A great way to use spotty bananas — it keeps 4 days wrapped.",
      "es": "Ideal para usar bananas muy maduras — dura 4 días envuelto."
    },
    "prep": [
      "banana-bread"
    ]
  },
  {
    "id": "apple-cinnamon-pancakes",
    "type": "breakfast",
    "group": "grain",
    "tags": [
      "pancakes"
    ],
    "name": {
      "en": "Apple Cinnamon Pancakes",
      "es": "Pancakes de Manzana y Canela"
    },
    "ing": {
      "en": [
        "1½ cups flour",
        "2 tsp baking powder",
        "1 tsp cinnamon",
        "2 eggs",
        "1¼ cups milk",
        "2 apples, grated",
        "1 tbsp butter, for the pan",
        "Maple syrup, to serve"
      ],
      "es": [
        "1½ tazas harina",
        "2 cditas polvo para hornear",
        "1 cdita canela",
        "2 huevos",
        "1¼ tazas leche",
        "2 manzanas ralladas",
        "1 cda manteca, para la sartén",
        "Jarabe de arce, para servir"
      ]
    },
    "steps": {
      "en": [
        "Whisk flour, baking powder, and cinnamon; add eggs and milk and mix until just smooth.",
        "Stir in the grated apple.",
        "Cook small ladlefuls in a buttered pan, 2 min per side.",
        "Serve with a little maple syrup.",
        "Toddler tip: cut into strips; skip the syrup."
      ],
      "es": [
        "Batir la harina, el polvo para hornear y la canela; agregar los huevos y la leche y mezclar apenas.",
        "Incorporar la manzana rallada.",
        "Cocinar cucharones chicos en sartén con manteca, 2 min por lado.",
        "Servir con un poco de jarabe de arce.",
        "Consejo para pequeños: cortar en tiras; sin jarabe."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "arroz-con-leche",
    "type": "breakfast",
    "group": "dairy",
    "name": {
      "en": "Arroz con Leche (Creamy Rice Pudding)",
      "es": "Arroz con Leche"
    },
    "ing": {
      "en": [
        "1 cup short-grain rice",
        "5 cups milk",
        "1 cinnamon stick or 1 tsp cinnamon",
        "3 tbsp sugar",
        "1 tsp vanilla",
        "Zest of 1 orange"
      ],
      "es": [
        "1 taza arroz de grano corto",
        "5 tazas leche",
        "1 rama de canela o 1 cdita canela",
        "3 cdas azúcar",
        "1 cdita vainilla",
        "Ralladura de 1 naranja"
      ]
    },
    "steps": {
      "en": [
        "Simmer rice, milk, cinnamon, and orange zest over low heat 35–40 min, stirring often.",
        "Stir in sugar and vanilla when the rice is soft and creamy.",
        "Serve warm, or chill overnight for a quick breakfast.",
        "Toddler tip: perfect soft texture — serve lukewarm."
      ],
      "es": [
        "Cocinar el arroz con la leche, la canela y la ralladura de naranja a fuego bajo 35–40 min, revolviendo seguido.",
        "Agregar el azúcar y la vainilla cuando el arroz esté tierno y cremoso.",
        "Servir tibio, o enfriar toda la noche para un desayuno rápido.",
        "Consejo para pequeños: textura blanda ideal — servir tibio."
      ]
    },
    "tip": {
      "en": "A classic Argentine comfort breakfast, full of calcium from the milk.",
      "es": "Un clásico argentino reconfortante, lleno de calcio gracias a la leche."
    },
    "prep": [
      "arroz-con-leche"
    ]
  },
  {
    "id": "ricotta-bowls-with-peaches",
    "type": "breakfast",
    "group": "dairy",
    "name": {
      "en": "Ricotta Bowls with Peaches & Granola",
      "es": "Bowls de Ricota con Duraznos y Granola"
    },
    "ing": {
      "en": [
        "500g ricotta",
        "3 peaches, sliced (or canned in juice)",
        "1 cup granola",
        "2 tbsp honey",
        "1 tsp vanilla"
      ],
      "es": [
        "500 g ricota",
        "3 duraznos en gajos (o en lata al natural)",
        "1 taza granola",
        "2 cdas miel",
        "1 cdita vainilla"
      ]
    },
    "steps": {
      "en": [
        "Stir vanilla and half the honey into the ricotta.",
        "Spoon into bowls and top with peaches and granola.",
        "Drizzle with the rest of the honey.",
        "Toddler tip: no honey under 1 — the fruit sweetens it enough."
      ],
      "es": [
        "Mezclar la ricota con la vainilla y la mitad de la miel.",
        "Servir en bols y cubrir con los duraznos y la granola.",
        "Rociar con el resto de la miel.",
        "Consejo para pequeños: sin miel antes del año — la fruta endulza lo suficiente."
      ]
    },
    "tip": {
      "en": "Creamy, high in protein and calcium — a nice change from yogurt.",
      "es": "Cremoso, con mucha proteína y calcio — un lindo cambio frente al yogur."
    }
  },
  {
    "id": "caprese-toast",
    "type": "breakfast",
    "group": "dairy",
    "tags": [
      "toast"
    ],
    "name": {
      "en": "Caprese Toast",
      "es": "Tostadas Caprese"
    },
    "ing": {
      "en": [
        "8 slices whole-grain bread",
        "250g mozzarella, sliced",
        "3 tomatoes, sliced",
        "Fresh basil leaves",
        "1 tbsp olive oil",
        "Salt & pepper"
      ],
      "es": [
        "8 rebanadas de pan integral",
        "250 g mozzarella en rodajas",
        "3 tomates en rodajas",
        "Hojas de albahaca fresca",
        "1 cda aceite de oliva",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Toast the bread.",
        "Layer mozzarella and tomato on each slice.",
        "Grill 2–3 min until the cheese softens.",
        "Finish with basil, olive oil, salt, and pepper.",
        "Toddler tip: cut into small squares; remove tomato skin if they prefer."
      ],
      "es": [
        "Tostar el pan.",
        "Acomodar la mozzarella y el tomate sobre cada rebanada.",
        "Gratinar 2–3 min hasta que el queso se ablande.",
        "Terminar con albahaca, aceite de oliva, sal y pimienta.",
        "Consejo para pequeños: cortar en cuadraditos; sacar la piel del tomate si prefieren."
      ]
    },
    "tip": {
      "en": "Use pasteurised mozzarella in pregnancy — warm and melty is even safer.",
      "es": "Usá mozzarella pasteurizada en el embarazo — tibia y derretida es aún más segura."
    }
  },
  {
    "id": "tropical-smoothie-bowl",
    "type": "breakfast",
    "group": "fruit",
    "tags": [
      "smoothie"
    ],
    "name": {
      "en": "Tropical Smoothie Bowl",
      "es": "Smoothie Bowl Tropical"
    },
    "ing": {
      "en": [
        "1½ cups frozen mango",
        "1 cup pineapple chunks",
        "2 frozen bananas",
        "1 cup Greek yogurt",
        "1 cup milk",
        "½ cup granola"
      ],
      "es": [
        "1½ tazas mango congelado",
        "1 taza ananá en trozos",
        "2 bananas congeladas",
        "1 taza yogur griego",
        "1 taza leche",
        "½ taza granola"
      ]
    },
    "steps": {
      "en": [
        "Blend mango, pineapple, bananas, yogurt, and milk until thick.",
        "Pour into bowls and top with granola.",
        "Serve right away.",
        "Toddler tip: serve as a smoothie in a cup, without the granola."
      ],
      "es": [
        "Licuar el mango, el ananá, las bananas, el yogur y la leche hasta que quede espeso.",
        "Servir en bols y cubrir con granola.",
        "Servir enseguida.",
        "Consejo para pequeños: servir como licuado en vaso, sin la granola."
      ]
    },
    "tip": {
      "en": "A sunny bowl packed with vitamin C and fibre.",
      "es": "Un bol soleado lleno de vitamina C y fibra."
    },
    "prep": [
      "freeze-bananas"
    ]
  },
  {
    "id": "fruit-salad-with-yogurt",
    "type": "breakfast",
    "group": "fruit",
    "tags": [
      "yogurt"
    ],
    "name": {
      "en": "Fruit Salad with Yogurt & Honey",
      "es": "Ensalada de Frutas con Yogur y Miel"
    },
    "ing": {
      "en": [
        "2 apples, diced",
        "2 bananas, sliced",
        "1 cup grapes, halved",
        "2 kiwis, diced",
        "2 cups Greek yogurt",
        "2 tbsp honey"
      ],
      "es": [
        "2 manzanas en cubos",
        "2 bananas en rodajas",
        "1 taza uvas en mitades",
        "2 kiwis en cubos",
        "2 tazas yogur griego",
        "2 cdas miel"
      ]
    },
    "steps": {
      "en": [
        "Mix all the fruit in a bowl.",
        "Spoon over yogurt in 4 bowls.",
        "Drizzle with honey.",
        "Toddler tip: quarter the grapes lengthwise (choking risk); no honey under 1."
      ],
      "es": [
        "Mezclar toda la fruta en un bol.",
        "Servir sobre el yogur en 4 bols.",
        "Rociar con miel.",
        "Consejo para pequeños: cortar las uvas en cuartos a lo largo (riesgo de atragantamiento); sin miel antes del año."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "baked-apples-with-oats",
    "type": "breakfast",
    "group": "fruit",
    "name": {
      "en": "Baked Apples with Oat Crumble",
      "es": "Manzanas Asadas con Crumble de Avena"
    },
    "ing": {
      "en": [
        "4 apples, cored",
        "½ cup rolled oats",
        "2 tbsp butter, softened",
        "2 tbsp honey",
        "1 tsp cinnamon",
        "2 tbsp raisins",
        "1 cup Greek yogurt, to serve"
      ],
      "es": [
        "4 manzanas sin el centro",
        "½ taza avena arrollada",
        "2 cdas manteca blanda",
        "2 cdas miel",
        "1 cdita canela",
        "2 cdas pasas de uva",
        "1 taza yogur griego, para servir"
      ]
    },
    "steps": {
      "en": [
        "Preheat oven to 190°C / 375°F.",
        "Mix oats, butter, honey, cinnamon, and raisins; stuff into the apples.",
        "Bake 25–30 min until the apples are soft.",
        "Serve warm with a spoonful of yogurt.",
        "Toddler tip: scoop out the soft apple and mash with yogurt; skip the raisins."
      ],
      "es": [
        "Precalentar el horno a 190 °C.",
        "Mezclar la avena, la manteca, la miel, la canela y las pasas; rellenar las manzanas.",
        "Hornear 25–30 min hasta que las manzanas estén tiernas.",
        "Servir tibias con una cucharada de yogur.",
        "Consejo para pequeños: sacar la manzana blanda y pisarla con yogur; sin pasas."
      ]
    },
    "tip": {
      "en": "Like dessert for breakfast — but with fibre, fruit, and oats.",
      "es": "Como un postre en el desayuno — pero con fibra, fruta y avena."
    }
  },
  {
    "id": "savory-oatmeal-with-egg",
    "type": "breakfast",
    "group": "egg",
    "tags": [
      "oats"
    ],
    "experimental": true,
    "name": {
      "en": "Savory Oatmeal with Egg & Spinach",
      "es": "Avena Salada con Huevo y Espinaca"
    },
    "ing": {
      "en": [
        "1½ cups rolled oats",
        "3 cups vegetable broth",
        "2 cups fresh spinach",
        "4 eggs",
        "½ cup grated parmesan",
        "1 tbsp olive oil",
        "Salt & pepper"
      ],
      "es": [
        "1½ tazas avena arrollada",
        "3 tazas caldo de verduras",
        "2 tazas espinaca fresca",
        "4 huevos",
        "½ taza parmesano rallado",
        "1 cda aceite de oliva",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Simmer oats in broth 5 min; stir in spinach and parmesan.",
        "Fry the eggs in olive oil until the yolks are firm.",
        "Spoon oats into bowls, top each with an egg, and season.",
        "Toddler tip: chop the egg into the oats."
      ],
      "es": [
        "Cocinar la avena en el caldo 5 min; agregar la espinaca y el parmesano.",
        "Freír los huevos en aceite de oliva hasta que la yema esté firme.",
        "Servir la avena en bols, poner un huevo encima y condimentar.",
        "Consejo para pequeños: picar el huevo dentro de la avena."
      ]
    },
    "tip": {
      "en": "Like a risotto for breakfast — oats don’t have to be sweet!",
      "es": "Como un risotto para el desayuno — ¡la avena no tiene por qué ser dulce!"
    }
  },
  {
    "id": "sweet-potato-toast",
    "type": "breakfast",
    "group": "grain",
    "tags": [
      "toast",
      "nut-butter"
    ],
    "experimental": true,
    "name": {
      "en": "Sweet Potato \"Toast\" with Almond Butter & Banana",
      "es": "\"Tostadas\" de Batata con Mantequilla de Almendras y Banana"
    },
    "ing": {
      "en": [
        "2 large sweet potatoes, cut lengthwise into 1 cm slices",
        "4 tbsp almond butter",
        "2 bananas, sliced",
        "1 tsp cinnamon",
        "1 tbsp chia seeds"
      ],
      "es": [
        "2 batatas grandes en láminas de 1 cm a lo largo",
        "4 cdas mantequilla de almendras",
        "2 bananas en rodajas",
        "1 cdita canela",
        "1 cda semillas de chía"
      ]
    },
    "steps": {
      "en": [
        "Toast the sweet potato slices in a toaster (2–3 rounds) or bake at 200°C / 400°F for 20 min until tender.",
        "Spread with almond butter.",
        "Top with banana, cinnamon, and chia.",
        "Toddler tip: thin layer of almond butter; cut into small pieces."
      ],
      "es": [
        "Tostar las láminas de batata en la tostadora (2–3 veces) u hornear a 200 °C 20 min hasta que estén tiernas.",
        "Untar con mantequilla de almendras.",
        "Cubrir con banana, canela y chía.",
        "Consejo para pequeños: capa fina de mantequilla de almendras; cortar en trocitos."
      ]
    },
    "tip": {
      "en": "The sweet potato is the bread — extra vitamin A and fibre.",
      "es": "La batata hace de pan — más vitamina A y fibra."
    }
  },
  {
    "id": "chocolate-banana-chia-pudding",
    "type": "breakfast",
    "group": "dairy",
    "experimental": true,
    "name": {
      "en": "Chocolate Banana Chia Pudding",
      "es": "Pudín de Chía con Chocolate y Banana"
    },
    "ing": {
      "en": [
        "½ cup chia seeds",
        "2 cups milk",
        "2 ripe bananas, mashed",
        "2 tbsp cocoa powder",
        "1 tbsp honey",
        "1 cup strawberries, sliced"
      ],
      "es": [
        "½ taza semillas de chía",
        "2 tazas leche",
        "2 bananas maduras pisadas",
        "2 cdas cacao en polvo",
        "1 cda miel",
        "1 taza frutillas en rodajas"
      ]
    },
    "steps": {
      "en": [
        "The evening before: whisk chia, milk, banana, cocoa, and honey.",
        "Whisk again after 10 min, cover, and chill overnight.",
        "Serve topped with strawberries.",
        "Toddler tip: blend smooth; no honey under 1."
      ],
      "es": [
        "La noche anterior: batir la chía, la leche, la banana, el cacao y la miel.",
        "Volver a batir a los 10 min, tapar y enfriar toda la noche.",
        "Servir con frutillas por encima.",
        "Consejo para pequeños: licuar para que quede liso; sin miel antes del año."
      ]
    },
    "tip": {
      "en": "Tastes like dessert, but it is fibre, omega-3s, and calcium.",
      "es": "Sabe a postre, pero es fibra, omega-3 y calcio."
    },
    "prep": [
      "chia-pudding"
    ]
  },
  {
    "id": "chicken-stir-fry-rice-bowl",
    "type": "lunch",
    "protein": "poultry",
    "base": "rice",
    "name": {
      "en": "Chicken Stir-Fry Rice Bowl",
      "es": "Bowl de Arroz con Pollo Salteado"
    },
    "ing": {
      "en": [
        "2 lbs chicken thighs",
        "3 cups cooked rice",
        "1 red bell pepper, sliced",
        "1½ cups broccoli florets",
        "2 carrots, julienned",
        "3 tbsp soy sauce",
        "2 cloves garlic, minced",
        "1 tsp fresh ginger",
        "2 tbsp olive oil"
      ],
      "es": [
        "1 kg muslos de pollo",
        "3 tazas arroz cocido",
        "1 morrón rojo en tiras",
        "1½ tazas floretes de brócoli",
        "2 zanahorias en juliana",
        "3 cdas salsa de soja",
        "2 dientes de ajo picados",
        "1 cdita jengibre fresco rallado",
        "2 cdas aceite de oliva"
      ]
    },
    "steps": {
      "en": [
        "Heat olive oil in a wok or large pan over high heat.",
        "Add sliced marinated chicken; cook 5–7 min until golden and cooked through.",
        "Add bell pepper, broccoli, and carrots; stir-fry 4–5 min until tender-crisp.",
        "Add garlic, ginger, and soy sauce; toss everything to coat.",
        "Serve over cooked rice.",
        "Toddler tip: chop chicken and veggies small, serve with extra-soft rice."
      ],
      "es": [
        "Calentar el aceite de oliva en un wok o sartén grande a fuego alto.",
        "Agregar el pollo marinado; cocinar 5–7 min hasta dorar y cocinar bien.",
        "Agregar el morrón, el brócoli y las zanahorias; saltear 4–5 min hasta que estén tiernos pero crocantes.",
        "Agregar el ajo, el jengibre y la salsa de soja; mezclar todo para cubrir.",
        "Servir sobre el arroz cocido.",
        "Consejo para pequeños: picar el pollo y las verduras en trozos chicos, servir con arroz bien blando."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    },
    "prep": [
      "marinate-chicken",
      "rice"
    ]
  },
  {
    "id": "pasta-bolognese",
    "type": "lunch",
    "protein": "beef",
    "base": "pasta",
    "tags": [
      "bolognese"
    ],
    "name": {
      "en": "Pasta Bolognese",
      "es": "Pasta Boloñesa"
    },
    "ing": {
      "en": [
        "500g ground beef",
        "1 can (400g) crushed tomatoes",
        "1 onion, diced",
        "2 cloves garlic",
        "500g penne pasta",
        "1 tsp dried oregano",
        "1 tsp dried basil",
        "Olive oil",
        "Parmesan to serve"
      ],
      "es": [
        "500 g carne picada",
        "1 lata (400 g) tomates triturados",
        "1 cebolla picada",
        "2 dientes de ajo",
        "500 g pasta penne",
        "1 cdita orégano seco",
        "1 cdita albahaca seca",
        "Aceite de oliva",
        "Parmesano para servir"
      ]
    },
    "steps": {
      "en": [
        "Cook pasta per package instructions; drain.",
        "Sauté diced onion and garlic in olive oil 5 min.",
        "Add the ground beef and brown 6–8 min, breaking it up (or add beef browned ahead).",
        "Add crushed tomatoes, oregano, and basil; simmer 15 min.",
        "Toss pasta with sauce. Serve with parmesan.",
        "Toddler tip: serve with smaller pasta shapes, sauce on the side if preferred."
      ],
      "es": [
        "Cocinar la pasta según las instrucciones del paquete; escurrir.",
        "Saltear la cebolla y el ajo en aceite de oliva 5 min.",
        "Agregar la carne picada y dorar 6–8 min, desarmándola (o agregar carne ya dorada).",
        "Agregar los tomates triturados, el orégano y la albahaca; cocinar a fuego lento 15 min.",
        "Mezclar la pasta con la salsa. Servir con parmesano.",
        "Consejo para pequeños: servir con pasta más chica, salsa al costado si prefieren."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    },
    "prep": [
      "brown-beef"
    ]
  },
  {
    "id": "chicken-rice-bowl-with-avocado",
    "type": "lunch",
    "protein": "poultry",
    "base": "rice",
    "name": {
      "en": "Chicken Rice Bowl with Avocado",
      "es": "Bowl de Arroz con Pollo y Palta"
    },
    "ing": {
      "en": [
        "2 cups cooked chicken, sliced",
        "2 cups cooked rice",
        "2 avocados, sliced",
        "1 cucumber, sliced",
        "1 cup frozen corn, thawed",
        "Juice of 1 lime",
        "1 tbsp olive oil",
        "Salt"
      ],
      "es": [
        "2 tazas pollo cocido en rodajas",
        "2 tazas arroz cocido",
        "2 paltas en rodajas",
        "1 pepino en rodajas",
        "1 taza choclo congelado descongelado",
        "Jugo de 1 lima",
        "1 cda aceite de oliva",
        "Sal"
      ]
    },
    "steps": {
      "en": [
        "Reheat chicken and rice (microwave with a splash of water, or stovetop).",
        "Slice avocado and cucumber.",
        "Build bowls: rice base, top with chicken, cucumber, corn, and avocado.",
        "Drizzle with lime juice and olive oil; season with salt.",
        "Toddler tip: mash avocado into rice with soft chicken pieces."
      ],
      "es": [
        "Calentar el pollo y el arroz (microondas con un chorrito de agua, o en sartén).",
        "Cortar la palta y el pepino en rodajas.",
        "Armar los bols: base de arroz, encima el pollo, el pepino, el choclo y la palta.",
        "Rociar con jugo de lima y aceite de oliva; condimentar con sal.",
        "Consejo para pequeños: pisar la palta sobre el arroz con trozos de pollo blando."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    },
    "prep": [
      "cook-chicken",
      "rice"
    ]
  },
  {
    "id": "red-lentil-and-spinach-soup",
    "type": "lunch",
    "protein": "plant",
    "base": "bread",
    "tags": [
      "soup",
      "lentil"
    ],
    "name": {
      "en": "Red Lentil & Spinach Soup",
      "es": "Sopa de Lentejas Rojas y Espinaca"
    },
    "ing": {
      "en": [
        "1½ cups red lentils",
        "2 cups fresh spinach",
        "1 onion, diced",
        "3 cloves garlic",
        "1 carrot, diced",
        "1L vegetable broth",
        "1 tsp cumin",
        "1 tsp turmeric",
        "Juice of 1 lemon",
        "2 tbsp olive oil",
        "Salt",
        "Pita or bread to serve"
      ],
      "es": [
        "1½ tazas lentejas rojas",
        "2 tazas espinaca fresca",
        "1 cebolla picada",
        "3 dientes de ajo",
        "1 zanahoria picada",
        "1 L caldo de verduras",
        "1 cdita comino",
        "1 cdita cúrcuma",
        "Jugo de 1 limón",
        "2 cdas aceite de oliva",
        "Sal",
        "Pan pita o pan para servir"
      ]
    },
    "steps": {
      "en": [
        "Heat olive oil in pot; sauté onion and garlic 5 min.",
        "Add cumin and turmeric; stir 30 seconds until fragrant.",
        "Add lentils, carrot, and broth; bring to a boil.",
        "Reduce heat, simmer 20–25 min until lentils dissolve into a thick soup.",
        "Stir in spinach until wilted; add lemon juice.",
        "Blend partially for creamy texture, or leave chunky.",
        "Serve with warm pita or bread."
      ],
      "es": [
        "Calentar aceite en la olla; saltear la cebolla y el ajo 5 min.",
        "Agregar el comino y la cúrcuma; mezclar 30 segundos hasta que suelten aroma.",
        "Agregar las lentejas, la zanahoria y el caldo; llevar a hervor.",
        "Reducir el fuego, cocinar a fuego lento 20–25 min hasta que las lentejas se disuelvan en una sopa espesa.",
        "Mezclar la espinaca hasta que se marchite; agregar el jugo de limón.",
        "Licuar parcialmente para textura cremosa, o dejar como está.",
        "Servir con pan pita o pan tibio."
      ]
    },
    "tip": {
      "en": "Double iron punch — lentils AND spinach — perfect for mom's iron levels!",
      "es": "¡Doble dosis de hierro — lentejas Y espinaca — perfecto para los niveles de hierro de mamá!"
    }
  },
  {
    "id": "fish-tacos-with-slaw",
    "type": "lunch",
    "protein": "fish",
    "base": "bread",
    "tags": [
      "tacos"
    ],
    "name": {
      "en": "Fish Tacos with Slaw",
      "es": "Tacos de Pescado con Ensalada de Repollo"
    },
    "ing": {
      "en": [
        "600g tilapia or cod fillets",
        "2 tsp cumin",
        "1 tsp chili powder",
        "2 tbsp olive oil",
        "8 small flour tortillas",
        "2 cups shredded cabbage",
        "2 tbsp mayonnaise",
        "2 tbsp lime juice",
        "Salt"
      ],
      "es": [
        "600 g filetes de tilapia o bacalao",
        "2 cditas comino",
        "1 cdita ají molido",
        "2 cdas aceite de oliva",
        "8 tortillas de harina pequeñas",
        "2 tazas repollo rallado",
        "2 cdas mayonesa",
        "2 cdas jugo de lima",
        "Sal"
      ]
    },
    "steps": {
      "en": [
        "Mix cumin and chili powder; season fish fillets on both sides.",
        "Heat oil in pan over medium-high; cook fish 3–4 min each side until cooked and flaky.",
        "Mix shredded cabbage with mayo, lime juice, and salt to make slaw.",
        "Warm tortillas in a dry pan or microwave (30 sec wrapped in damp paper towel).",
        "Break fish into chunks; assemble tacos with slaw on top.",
        "Toddler tip: deconstructed — soft fish, tortilla pieces, skip slaw."
      ],
      "es": [
        "Mezclar el comino y el ají molido; condimentar los filetes por ambos lados.",
        "Calentar el aceite en sartén a fuego medio-alto; cocinar el pescado 3–4 min de cada lado hasta que esté cocido y se desmenuce.",
        "Mezclar el repollo con la mayonesa, el jugo de lima y la sal para hacer la ensalada.",
        "Calentar las tortillas en sartén seca o microondas (30 seg envueltas en papel húmedo).",
        "Desmenuzar el pescado; armar los tacos con la ensalada encima.",
        "Consejo para pequeños: servir desarmado — pescado blando, trozos de tortilla, sin ensalada."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "chicken-vegetable-soup",
    "type": "lunch",
    "protein": "poultry",
    "base": "none",
    "tags": [
      "soup"
    ],
    "name": {
      "en": "Chicken Vegetable Soup",
      "es": "Sopa de Pollo con Verduras"
    },
    "ing": {
      "en": [
        "2 cups shredded roasted chicken",
        "2 carrots, diced",
        "2 celery stalks, diced",
        "1 onion, diced",
        "2 cloves garlic",
        "1.2L chicken broth",
        "1 cup frozen peas",
        "1 tsp thyme",
        "Salt & pepper",
        "Olive oil",
        "Small pasta or rice (optional)"
      ],
      "es": [
        "2 tazas pollo asado desmenuzado",
        "2 zanahorias picadas",
        "2 tallos de apio picados",
        "1 cebolla picada",
        "2 dientes de ajo",
        "1,2 L caldo de pollo",
        "1 taza arvejas congeladas",
        "1 cdita tomillo",
        "Sal y pimienta",
        "Aceite de oliva",
        "Pasta chica o arroz (opcional)"
      ]
    },
    "steps": {
      "en": [
        "Heat olive oil in large pot; sauté onion, garlic, carrots, celery 5 min.",
        "Add chicken broth and thyme; bring to a boil.",
        "Add shredded chicken and peas; simmer 10 min.",
        "Season with salt and pepper.",
        "Optional: add small pasta or rice for the last 10 min.",
        "Toddler tip: blend a portion for smoother texture, or pick out soft veggies."
      ],
      "es": [
        "Calentar aceite en olla grande; saltear la cebolla, el ajo, las zanahorias y el apio 5 min.",
        "Agregar el caldo de pollo y el tomillo; llevar a hervor.",
        "Agregar el pollo desmenuzado y las arvejas; cocinar a fuego lento 10 min.",
        "Condimentar con sal y pimienta.",
        "Opcional: agregar pasta chica o arroz en los últimos 10 min.",
        "Consejo para pequeños: licuar una porción para textura más suave, o separar las verduras blandas."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    },
    "prep": [
      "cook-chicken"
    ]
  },
  {
    "id": "quinoa-bowl-with-roasted-veggies-and-chickpeas",
    "type": "lunch",
    "protein": "plant",
    "base": "grain",
    "name": {
      "en": "Quinoa Bowl with Roasted Veggies & Chickpeas",
      "es": "Bowl de Quinoa con Verduras Asadas y Garbanzos"
    },
    "ing": {
      "en": [
        "2 cups cooked quinoa",
        "1 can (400g) chickpeas, drained & rinsed",
        "2 zucchini, chunked",
        "2 bell peppers, chunked",
        "1 cup cherry tomatoes",
        "2 tbsp olive oil",
        "1 tbsp lemon juice",
        "1 tsp cumin",
        "Fresh parsley",
        "Salt"
      ],
      "es": [
        "2 tazas quinoa cocida",
        "1 lata (400 g) garbanzos escurridos y enjuagados",
        "2 zapallitos en trozos",
        "2 morrones en trozos",
        "1 taza tomates cherry",
        "2 cdas aceite de oliva",
        "1 cda jugo de limón",
        "1 cdita comino",
        "Perejil fresco",
        "Sal"
      ]
    },
    "steps": {
      "en": [
        "Roast zucchini, peppers, and tomatoes with a little oil and salt at 200°C / 400°F for 25 min (or reheat a tray roasted ahead). Warm the quinoa.",
        "Optionally toast chickpeas in a dry pan with cumin and oil for 5 min until crispy.",
        "Build bowls: quinoa base, topped with roasted vegetables and chickpeas.",
        "Drizzle with olive oil and lemon juice; garnish with parsley.",
        "Toddler tip: mash chickpeas slightly, serve with soft veggies and quinoa."
      ],
      "es": [
        "Asar los zapallitos, los morrones y los tomates con un poco de aceite y sal a 200 °C durante 25 min (o calentar una bandeja asada de antemano). Calentar la quinoa.",
        "Opcionalmente tostar los garbanzos en sartén seca con comino y aceite 5 min hasta que estén crocantes.",
        "Armar los bols: base de quinoa, encima las verduras y los garbanzos.",
        "Rociar con aceite de oliva y jugo de limón; decorar con perejil.",
        "Consejo para pequeños: aplastar los garbanzos un poco, servir con verduras blandas y quinoa."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    },
    "prep": [
      "roast-veg",
      "quinoa"
    ]
  },
  {
    "id": "tuna-pasta-salad",
    "type": "lunch",
    "protein": "fish",
    "base": "pasta",
    "tags": [
      "tuna"
    ],
    "name": {
      "en": "Tuna Pasta Salad",
      "es": "Ensalada de Pasta con Atún"
    },
    "ing": {
      "en": [
        "2 cans (160g each) tuna, drained",
        "340g pasta (cooled)",
        "1 cup frozen peas, thawed",
        "1 cup cherry tomatoes, halved",
        "3 tbsp mayonnaise",
        "1 tbsp lemon juice",
        "Fresh herbs (parsley or dill)",
        "Salt & pepper"
      ],
      "es": [
        "2 latas (160 g c/u) atún escurrido",
        "340 g pasta (fría)",
        "1 taza arvejas congeladas descongeladas",
        "1 taza tomates cherry en mitades",
        "3 cdas mayonesa",
        "1 cda jugo de limón",
        "Hierbas frescas (perejil o eneldo)",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Cook pasta al dente; drain and run under cold water until cooled.",
        "In a large bowl, mix tuna, peas, cherry tomatoes, mayo, lemon juice, and herbs.",
        "Fold in cooled pasta; season with salt and pepper.",
        "Serve at room temperature or chilled.",
        "Toddler tip: separate small portion of pasta + tuna + peas without mayo."
      ],
      "es": [
        "Cocinar la pasta al dente; escurrir y pasar por agua fría hasta enfriar.",
        "En un bol grande, mezclar el atún, las arvejas, los tomates cherry, la mayonesa, el jugo de limón y las hierbas.",
        "Incorporar la pasta fría; condimentar con sal y pimienta.",
        "Servir a temperatura ambiente o frío.",
        "Consejo para pequeños: separar una porción pequeña de pasta + atún + arvejas sin mayonesa."
      ]
    },
    "tip": {
      "en": "Limit tuna to 2 servings per week for pregnant women (mercury).",
      "es": "Limitar el atún a 2 porciones por semana para embarazadas (mercurio)."
    }
  },
  {
    "id": "white-bean-and-vegetable-stew",
    "type": "lunch",
    "protein": "plant",
    "base": "bread",
    "tags": [
      "stew"
    ],
    "name": {
      "en": "White Bean & Vegetable Stew",
      "es": "Guiso de Alubias Blancas y Verduras"
    },
    "ing": {
      "en": [
        "2 cans (400g each) white beans, drained",
        "2 cups fresh spinach",
        "1 onion, diced",
        "2 cloves garlic",
        "2 carrots, diced",
        "1 celery stalk, diced",
        "1 can diced tomatoes",
        "700ml vegetable broth",
        "1 tsp rosemary",
        "Olive oil",
        "Salt & pepper",
        "Bread to serve"
      ],
      "es": [
        "2 latas (400 g c/u) alubias blancas escurridas",
        "2 tazas espinaca fresca",
        "1 cebolla picada",
        "2 dientes de ajo",
        "2 zanahorias picadas",
        "1 tallo de apio picado",
        "1 lata tomates picados",
        "700 ml caldo de verduras",
        "1 cdita romero",
        "Aceite de oliva",
        "Sal y pimienta",
        "Pan para servir"
      ]
    },
    "steps": {
      "en": [
        "Sauté onion, garlic, carrots, and celery in oil 5 min.",
        "Add tomatoes, broth, beans, and rosemary; bring to a boil.",
        "Simmer 15 min; stir in spinach until wilted.",
        "Season and serve with bread.",
        "Toddler tip: mash beans slightly for easier eating, serve with soft bread."
      ],
      "es": [
        "Saltear la cebolla, el ajo, las zanahorias y el apio en aceite 5 min.",
        "Agregar los tomates, el caldo, las alubias y el romero; llevar a hervor.",
        "Cocinar a fuego lento 15 min; mezclar la espinaca hasta que se marchite.",
        "Condimentar y servir con pan.",
        "Consejo para pequeños: aplastar un poco las alubias, servir con pan blando."
      ]
    },
    "tip": {
      "en": "White beans + spinach = excellent plant-based iron. Paired with the tomatoes (vitamin C), iron absorption is boosted!",
      "es": "¡Alubias blancas + espinaca = excelente hierro de origen vegetal! Combinado con los tomates (vitamina C), se potencia la absorción del hierro."
    }
  },
  {
    "id": "pork-fried-rice",
    "type": "lunch",
    "protein": "pork",
    "base": "rice",
    "tags": [
      "fried-rice"
    ],
    "name": {
      "en": "Pork Fried Rice",
      "es": "Arroz Frito con Cerdo"
    },
    "ing": {
      "en": [
        "2 pork chops (or 300g pork), diced",
        "3 cups cooked rice (day-old works best)",
        "2 eggs",
        "1 cup frozen peas & carrots mix, thawed",
        "3 tbsp soy sauce",
        "2 cloves garlic, minced",
        "1 tbsp sesame oil",
        "3 spring onions, sliced",
        "Oil for cooking"
      ],
      "es": [
        "2 chuletas de cerdo (o 300 g de cerdo) en cubos",
        "3 tazas arroz cocido (de uno o dos días, mejor)",
        "2 huevos",
        "1 taza arvejas y zanahorias congeladas descongeladas",
        "3 cdas salsa de soja",
        "2 dientes de ajo picados",
        "1 cda aceite de sésamo",
        "3 cebollas de verdeo en rodajas",
        "Aceite para cocinar"
      ]
    },
    "steps": {
      "en": [
        "Dice the pork (leftover cooked pork works too).",
        "Heat oil in a wok on high; stir-fry the pork 4–5 min until cooked through (2 min if already cooked).",
        "Push to side; crack and scramble eggs in the pan.",
        "Add rice, breaking up clumps; stir-fry 3 min.",
        "Add peas, carrots, and garlic; stir 2 more min.",
        "Drizzle soy sauce and sesame oil; toss to combine.",
        "Garnish with spring onions. Toddler: separate soft portion."
      ],
      "es": [
        "Cortar el cerdo en cubos (también sirve cerdo cocido sobrante).",
        "Calentar aceite en wok a fuego alto; saltear el cerdo 4–5 min hasta cocinar (2 min si ya estaba cocido).",
        "Empujar a un costado; cascar los huevos y revolver en la sartén.",
        "Agregar el arroz, separando los grumos; saltear 3 min.",
        "Agregar las arvejas, las zanahorias y el ajo; mezclar 2 min más.",
        "Rociar con salsa de soja y aceite de sésamo; mezclar para combinar.",
        "Decorar con cebollas de verdeo. Para el bebé: separar una porción blanda."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    },
    "prep": [
      "rice"
    ]
  },
  {
    "id": "caesar-chicken-wraps",
    "type": "lunch",
    "protein": "poultry",
    "base": "bread",
    "name": {
      "en": "Caesar Chicken Wraps",
      "es": "Wraps de Pollo César"
    },
    "ing": {
      "en": [
        "2 cups sliced cooked chicken",
        "4 large flour tortillas",
        "4 cups romaine lettuce, torn",
        "½ cup Caesar dressing",
        "¼ cup grated parmesan",
        "Croutons (optional)"
      ],
      "es": [
        "2 tazas pollo cocido en rodajas",
        "4 tortillas de harina grandes",
        "4 tazas lechuga romana en trozos",
        "½ taza aderezo César",
        "¼ taza parmesano rallado",
        "Crutones (opcional)"
      ]
    },
    "steps": {
      "en": [
        "Shred or slice the cooked chicken.",
        "Toss romaine with Caesar dressing and parmesan.",
        "Warm tortillas briefly in a dry pan or microwave.",
        "Fill each tortilla with the lettuce mixture and chicken.",
        "Roll tightly, slice in half, and serve.",
        "Toddler tip: serve filling in a bowl (deconstructed); skip raw lettuce if preferred."
      ],
      "es": [
        "Desmenuzar o cortar el pollo cocido.",
        "Mezclar la lechuga romana con el aderezo César y el parmesano.",
        "Calentar las tortillas brevemente en sartén seca o microondas.",
        "Rellenar cada tortilla con la mezcla de lechuga y el pollo.",
        "Enrollar bien apretado, cortar por la mitad y servir.",
        "Consejo para pequeños: servir el relleno en un bol (desarmado); omitir la lechuga cruda si prefieren."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    },
    "prep": [
      "cook-chicken"
    ]
  },
  {
    "id": "red-lentil-soup",
    "type": "lunch",
    "protein": "plant",
    "base": "bread",
    "tags": [
      "soup",
      "lentil"
    ],
    "name": {
      "en": "Red Lentil Soup",
      "es": "Sopa de Lentejas Rojas"
    },
    "ing": {
      "en": [
        "1½ cups red lentils",
        "1 onion, diced",
        "3 cloves garlic",
        "2 carrots, diced",
        "1 tsp cumin",
        "1 tsp smoked paprika",
        "1L vegetable broth",
        "Juice of 1 lemon",
        "2 tbsp olive oil",
        "Salt",
        "Pita or bread"
      ],
      "es": [
        "1½ tazas lentejas rojas",
        "1 cebolla picada",
        "3 dientes de ajo",
        "2 zanahorias picadas",
        "1 cdita comino",
        "1 cdita pimentón ahumado",
        "1 L caldo de verduras",
        "Jugo de 1 limón",
        "2 cdas aceite de oliva",
        "Sal",
        "Pan pita o pan"
      ]
    },
    "steps": {
      "en": [
        "Sauté onion and garlic in oil 5 min.",
        "Add cumin and paprika; stir 30 sec.",
        "Add lentils, carrots, and broth; bring to a boil.",
        "Simmer 20–25 min until lentils are very soft.",
        "Add lemon juice; season. Blend partially for creamy-chunky texture.",
        "Serve with warm pita or bread."
      ],
      "es": [
        "Saltear la cebolla y el ajo en aceite 5 min.",
        "Agregar el comino y el pimentón; mezclar 30 seg.",
        "Agregar las lentejas, las zanahorias y el caldo; llevar a hervor.",
        "Cocinar a fuego lento 20–25 min hasta que las lentejas estén muy blandas.",
        "Agregar el jugo de limón; condimentar. Licuar parcialmente para textura cremosa.",
        "Servir con pan pita o pan tibio."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "chicken-pasta-with-pesto",
    "type": "lunch",
    "protein": "poultry",
    "base": "pasta",
    "name": {
      "en": "Chicken Pasta with Pesto",
      "es": "Pasta con Pollo y Pesto"
    },
    "ing": {
      "en": [
        "500g penne pasta",
        "1½ cups cooked chicken, sliced",
        "4 tbsp pesto (jar or homemade)",
        "1 cup cherry tomatoes, halved",
        "½ cup parmesan, grated",
        "Olive oil",
        "Salt & pepper",
        "Pine nuts (optional)"
      ],
      "es": [
        "500 g pasta penne",
        "1½ tazas pollo cocido en rodajas",
        "4 cdas pesto (frasco o casero)",
        "1 taza tomates cherry en mitades",
        "½ taza parmesano rallado",
        "Aceite de oliva",
        "Sal y pimienta",
        "Piñones (opcional)"
      ]
    },
    "steps": {
      "en": [
        "Cook pasta per package; reserve ½ cup pasta water before draining.",
        "Slice chicken; warm briefly in a pan.",
        "Toss hot pasta with pesto, adding pasta water gradually if too thick.",
        "Add chicken and cherry tomatoes; toss to combine.",
        "Serve topped with parmesan and a drizzle of olive oil.",
        "Toddler tip: small pasta (fusilli or penne), mild pesto, no pine nuts."
      ],
      "es": [
        "Cocinar la pasta según el paquete; reservar ½ taza del agua de cocción antes de escurrir.",
        "Cortar el pollo en rodajas; calentar brevemente en sartén.",
        "Mezclar la pasta caliente con el pesto, agregando agua de cocción de a poco si queda muy espeso.",
        "Agregar el pollo y los tomates cherry; mezclar para combinar.",
        "Servir con parmesano y un chorrito de aceite de oliva.",
        "Consejo para pequeños: pasta chica (fusilli o penne), pesto suave, sin piñones."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    },
    "prep": [
      "cook-chicken"
    ]
  },
  {
    "id": "tuna-salad-sandwiches",
    "type": "lunch",
    "protein": "fish",
    "base": "bread",
    "tags": [
      "tuna"
    ],
    "name": {
      "en": "Tuna Salad Sandwiches",
      "es": "Sándwiches de Ensalada de Atún"
    },
    "ing": {
      "en": [
        "2 cans (160g) tuna, drained",
        "3 tbsp mayonnaise",
        "1 celery stalk, finely diced",
        "1 tbsp lemon juice",
        "1 tbsp Dijon mustard",
        "8 slices bread",
        "Lettuce leaves",
        "Tomato slices",
        "Salt & pepper"
      ],
      "es": [
        "2 latas (160 g) atún escurrido",
        "3 cdas mayonesa",
        "1 tallo de apio finamente picado",
        "1 cda jugo de limón",
        "1 cda mostaza Dijon",
        "8 rebanadas de pan",
        "Hojas de lechuga",
        "Rodajas de tomate",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Mix tuna, mayo, celery, lemon juice, and mustard in a bowl; season.",
        "Toast bread if preferred.",
        "Lay lettuce and tomato on half the slices; spread tuna mixture generously.",
        "Top with remaining bread, press, and slice diagonally.",
        "Toddler tip: soft untoasted bread with tuna only, no crunchy additions."
      ],
      "es": [
        "Mezclar el atún, la mayonesa, el apio, el jugo de limón y la mostaza en un bol; condimentar.",
        "Tostar el pan si se prefiere.",
        "Poner lechuga y tomate en la mitad de las rebanadas; untar generosamente con la mezcla de atún.",
        "Cubrir con las rebanadas restantes, presionar y cortar en diagonal.",
        "Consejo para pequeños: pan blando sin tostar solo con atún, sin ingredientes crocantes."
      ]
    },
    "tip": {
      "en": "Keep tuna to 2 servings a week for pregnant women (mercury). Omega-3s are beneficial for baby!",
      "es": "Máximo 2 porciones de atún por semana para embarazadas (mercurio). ¡Los omega-3 son beneficiosos para el bebé!"
    }
  },
  {
    "id": "minestrone-soup-with-bread",
    "type": "lunch",
    "protein": "plant",
    "base": "bread",
    "tags": [
      "soup"
    ],
    "name": {
      "en": "Minestrone Soup with Bread",
      "es": "Sopa Minestrone con Pan"
    },
    "ing": {
      "en": [
        "1 can diced tomatoes",
        "1 can cannellini beans, drained",
        "200g small pasta",
        "1 zucchini, diced",
        "2 carrots, diced",
        "2 celery stalks, diced",
        "1 onion, diced",
        "2 cloves garlic",
        "1L vegetable broth",
        "2 cups spinach",
        "1 tsp basil",
        "1 tsp oregano",
        "Olive oil",
        "Parmesan to serve",
        "Crusty bread"
      ],
      "es": [
        "1 lata tomates picados",
        "1 lata alubias cannellini escurridas",
        "200 g pasta chica",
        "1 zapallito picado",
        "2 zanahorias picadas",
        "2 tallos de apio picados",
        "1 cebolla picada",
        "2 dientes de ajo",
        "1 L caldo de verduras",
        "2 tazas espinaca",
        "1 cdita albahaca",
        "1 cdita orégano",
        "Aceite de oliva",
        "Parmesano para servir",
        "Pan de campo"
      ]
    },
    "steps": {
      "en": [
        "Sauté onion, garlic, carrots, celery in oil 5 min.",
        "Add tomatoes, beans, and broth; bring to a boil.",
        "Add diced zucchini and pasta; simmer 10–12 min until pasta is cooked.",
        "Stir in spinach; season with basil, oregano, salt, and pepper.",
        "Ladle into bowls; top with parmesan. Serve with crusty bread.",
        "Toddler tip: blend a small portion or pick out soft vegetables."
      ],
      "es": [
        "Saltear la cebolla, el ajo, las zanahorias y el apio en aceite 5 min.",
        "Agregar los tomates, las alubias y el caldo; llevar a hervor.",
        "Agregar el zapallito picado y la pasta; cocinar a fuego lento 10–12 min hasta que la pasta esté cocida.",
        "Mezclar la espinaca; condimentar con albahaca, orégano, sal y pimienta.",
        "Servir con parmesano. Acompañar con pan de campo.",
        "Consejo para pequeños: licuar una pequeña porción o separar las verduras blandas."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "beef-and-vegetable-stew-with-rice",
    "type": "lunch",
    "protein": "beef",
    "base": "rice",
    "tags": [
      "stew"
    ],
    "name": {
      "en": "Beef & Vegetable Stew with Rice",
      "es": "Guiso de Carne y Verduras con Arroz"
    },
    "ing": {
      "en": [
        "700g beef chuck, cubed",
        "3 carrots, chunked",
        "3 potatoes, chunked",
        "1 onion, diced",
        "2 celery stalks, sliced",
        "2 cloves garlic",
        "1 can diced tomatoes",
        "750ml beef broth",
        "1 tsp thyme",
        "Olive oil",
        "Salt & pepper",
        "2 cups cooked rice"
      ],
      "es": [
        "700 g aguja en cubos",
        "3 zanahorias en trozos",
        "3 papas en trozos",
        "1 cebolla picada",
        "2 tallos de apio en rodajas",
        "2 dientes de ajo",
        "1 lata tomates picados",
        "750 ml caldo de carne",
        "1 cdita tomillo",
        "Aceite de oliva",
        "Sal y pimienta",
        "2 tazas arroz cocido"
      ]
    },
    "steps": {
      "en": [
        "Brown the beef in olive oil in a large pot, in batches; set aside.",
        "Sauté onion, celery, and garlic 5 min.",
        "Return the beef; add tomatoes, broth, and thyme. Cover and simmer 1½ hrs.",
        "Add carrots and potatoes; simmer 30 min more until tender. Season with salt and pepper.",
        "Serve over rice. Made ahead? Just reheat until piping hot.",
        "Toddler tip: shred beef pieces small, ensure vegetables are soft."
      ],
      "es": [
        "Dorar la carne en aceite de oliva en una olla grande, en tandas; reservar.",
        "Saltear la cebolla, el apio y el ajo 5 min.",
        "Volver a poner la carne; agregar los tomates, el caldo y el tomillo. Tapar y cocinar a fuego lento 1½ hs.",
        "Agregar las zanahorias y las papas; cocinar 30 min más hasta que estén tiernas. Condimentar con sal y pimienta.",
        "Servir sobre el arroz. ¿Hecho de antemano? Solo calentar hasta que esté bien caliente.",
        "Consejo para pequeños: desmenuzar los trozos de carne en pedazos chicos, asegurarse de que las verduras estén blandas."
      ]
    },
    "tip": {
      "en": "Iron-rich and comforting — great fuel for a busy day!",
      "es": "¡Rico en hierro y reconfortante — ideal para un día con mucha actividad!"
    },
    "prep": [
      "beef-stew",
      "rice"
    ]
  },
  {
    "id": "spinach-and-egg-frittata-with-green-salad",
    "type": "lunch",
    "protein": "egg",
    "base": "none",
    "name": {
      "en": "Spinach & Egg Frittata with Green Salad",
      "es": "Frittata de Espinaca y Huevo con Ensalada Verde"
    },
    "ing": {
      "en": [
        "8 eggs",
        "2 cups fresh spinach",
        "1 onion, diced",
        "1 cup cherry tomatoes, halved",
        "100g feta cheese (optional)",
        "2 tbsp olive oil",
        "Mixed greens for salad",
        "Simple vinaigrette (olive oil + lemon + salt)",
        "Salt & pepper"
      ],
      "es": [
        "8 huevos",
        "2 tazas espinaca fresca",
        "1 cebolla picada",
        "1 taza tomates cherry en mitades",
        "100 g queso feta (opcional)",
        "2 cdas aceite de oliva",
        "Hojas verdes variadas para la ensalada",
        "Vinagreta simple (aceite de oliva + limón + sal)",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Preheat oven to 190°C / 375°F.",
        "Sauté onion in ovenproof skillet with oil 5 min; add spinach until wilted.",
        "Whisk eggs with salt and pepper; pour over vegetables.",
        "Scatter cherry tomatoes and feta on top.",
        "Cook stovetop 3–4 min until edges set; transfer to oven 10–12 min until fully set.",
        "Cut into wedges; serve with a simple green salad dressed with vinaigrette."
      ],
      "es": [
        "Precalentar el horno a 190 °C.",
        "Saltear la cebolla en sartén apta para horno con aceite 5 min; agregar la espinaca hasta que se marchite.",
        "Batir los huevos con sal y pimienta; verter sobre las verduras.",
        "Distribuir los tomates cherry y el feta encima.",
        "Cocinar en la hornalla 3–4 min hasta que los bordes estén firmes; pasar al horno 10–12 min hasta cuajar completamente.",
        "Cortar en gajos; servir con una ensalada verde simple con vinagreta."
      ]
    },
    "tip": {
      "en": "Spinach + eggs = double iron boost for mom. This frittata is also soft enough for the toddler and nutritious for the whole family!",
      "es": "¡Espinaca + huevos = doble dosis de hierro para mamá! Esta frittata es suficientemente blanda para el bebé y nutritiva para toda la familia."
    }
  },
  {
    "id": "chicken-noodle-soup",
    "type": "lunch",
    "protein": "poultry",
    "base": "pasta",
    "tags": [
      "soup"
    ],
    "name": {
      "en": "Chicken Noodle Soup",
      "es": "Sopa de Pollo con Fideos"
    },
    "ing": {
      "en": [
        "2 cups shredded cooked chicken",
        "200g egg noodles",
        "2 carrots, diced",
        "2 celery stalks, diced",
        "1 onion, diced",
        "3 cloves garlic, minced",
        "1.2L chicken broth",
        "1 tsp thyme",
        "Fresh parsley",
        "Salt & pepper",
        "Olive oil"
      ],
      "es": [
        "2 tazas pollo desmenuzado cocido",
        "200 g fideos de huevo",
        "2 zanahorias picadas",
        "2 tallos de apio picados",
        "1 cebolla picada",
        "3 dientes de ajo picados",
        "1,2 L caldo de pollo",
        "1 cdita tomillo",
        "Perejil fresco",
        "Sal y pimienta",
        "Aceite de oliva"
      ]
    },
    "steps": {
      "en": [
        "Sauté onion, garlic, carrots, and celery in oil in large pot, 5 min.",
        "Add broth and thyme; bring to a boil.",
        "Add egg noodles; cook 6–8 min per package instructions.",
        "Add shredded chicken; simmer 5 more min.",
        "Adjust seasoning; garnish with fresh parsley.",
        "A classic that everyone loves, easy on the stomach, great for all ages."
      ],
      "es": [
        "Saltear la cebolla, el ajo, las zanahorias y el apio en aceite en olla grande, 5 min.",
        "Agregar el caldo y el tomillo; llevar a hervor.",
        "Agregar los fideos de huevo; cocinar 6–8 min según las instrucciones del paquete.",
        "Agregar el pollo desmenuzado; cocinar a fuego lento 5 min más.",
        "Ajustar la sazón; decorar con perejil fresco.",
        "Un clásico que todos aman, fácil para el estómago, ideal para todas las edades."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    },
    "prep": [
      "cook-chicken"
    ]
  },
  {
    "id": "bean-burrito-bowls",
    "type": "lunch",
    "protein": "plant",
    "base": "rice",
    "name": {
      "en": "Bean Burrito Bowls",
      "es": "Bowls de Burrito de Legumbres"
    },
    "ing": {
      "en": [
        "1 can black beans, drained",
        "1 can kidney beans, drained",
        "2 cups cooked rice",
        "1 cup frozen corn, thawed & heated",
        "1 cup cherry tomatoes, halved",
        "1 avocado, sliced",
        "½ cup sour cream",
        "1 tsp cumin",
        "1 tsp chili powder",
        "1 lime",
        "Salt",
        "Flour tortillas (optional, on the side)"
      ],
      "es": [
        "1 lata porotos negros escurridos",
        "1 lata porotos kidney escurridos",
        "2 tazas arroz cocido",
        "1 taza choclo congelado calentado",
        "1 taza tomates cherry en mitades",
        "1 palta en rodajas",
        "½ taza crema agria",
        "1 cdita comino",
        "1 cdita ají molido",
        "1 lima",
        "Sal",
        "Tortillas de harina (opcionales, al costado)"
      ]
    },
    "steps": {
      "en": [
        "Heat both cans of beans together in a pan with cumin, chili powder, and salt.",
        "Warm rice and corn separately.",
        "Build bowls: rice base, beans, corn, cherry tomatoes, avocado, sour cream.",
        "Squeeze lime over everything.",
        "Serve with warm tortillas on the side.",
        "Toddler tip: mash beans into rice, offer soft toppings without sour cream."
      ],
      "es": [
        "Calentar ambas latas de porotos en sartén con comino, ají molido y sal.",
        "Calentar el arroz y el choclo por separado.",
        "Armar los bols: base de arroz, porotos, choclo, tomates cherry, palta, crema agria.",
        "Exprimir lima sobre todo.",
        "Servir con tortillas calientes al costado.",
        "Consejo para pequeños: pisar los porotos sobre el arroz, ofrecer los toppings blandos sin crema agria."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    },
    "prep": [
      "rice"
    ]
  },
  {
    "id": "tuna-and-pasta-bake",
    "type": "lunch",
    "protein": "fish",
    "base": "pasta",
    "tags": [
      "tuna"
    ],
    "name": {
      "en": "Tuna & Pasta Bake",
      "es": "Gratinado de Atún y Pasta"
    },
    "ing": {
      "en": [
        "2 cans (160g) tuna, drained",
        "340g penne pasta",
        "1 can cream of mushroom soup",
        "1 cup milk",
        "1 cup frozen peas",
        "1 cup shredded cheese",
        "Salt & pepper",
        "Breadcrumbs (optional topping)"
      ],
      "es": [
        "2 latas (160 g) atún escurrido",
        "340 g pasta penne",
        "1 lata crema de champiñones",
        "1 taza leche",
        "1 taza arvejas congeladas",
        "1 taza queso rallado",
        "Sal y pimienta",
        "Pan rallado (topping opcional)"
      ]
    },
    "steps": {
      "en": [
        "Preheat oven to 190°C / 375°F. Cook pasta until al dente; drain.",
        "Mix tuna, soup, milk, peas, and pasta in a large bowl; season.",
        "Pour into greased baking dish; top with shredded cheese and breadcrumbs.",
        "Bake 25–30 min until golden and bubbling.",
        "Let stand 5 min before serving.",
        "Toddler tip: serve from the soft centre without the crunchy topping."
      ],
      "es": [
        "Precalentar el horno a 190 °C. Cocinar la pasta al dente; escurrir.",
        "Mezclar el atún, la crema de champiñones, la leche, las arvejas y la pasta en un bol grande; condimentar.",
        "Verter en una fuente enmantecada; cubrir con el queso rallado y el pan rallado.",
        "Hornear 25–30 min hasta que esté dorado y burbujeando.",
        "Dejar reposar 5 min antes de servir.",
        "Consejo para pequeños: servir del centro blando sin el topping crocante."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "baked-chicken-milanesa-with-mash",
    "type": "lunch",
    "protein": "poultry",
    "base": "potato",
    "tags": [
      "milanesa"
    ],
    "name": {
      "en": "Baked Chicken Milanesa with Mash",
      "es": "Milanesas de Pollo al Horno con Puré"
    },
    "ing": {
      "en": [
        "4 chicken breasts, butterflied thin",
        "2 eggs, beaten",
        "1½ cups breadcrumbs",
        "1 tsp dried oregano",
        "4 large potatoes, peeled & cubed",
        "½ cup warm milk",
        "2 tbsp butter",
        "2 tbsp olive oil",
        "1 lemon, in wedges",
        "Salt & pepper"
      ],
      "es": [
        "4 pechugas de pollo abiertas y finas",
        "2 huevos batidos",
        "1½ tazas pan rallado",
        "1 cdita orégano seco",
        "4 papas grandes peladas y en cubos",
        "½ taza leche tibia",
        "2 cdas manteca",
        "2 cdas aceite de oliva",
        "1 limón en gajos",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Preheat oven to 200°C / 400°F; oil a large tray.",
        "Dip the chicken in seasoned egg, then in breadcrumbs mixed with oregano.",
        "Bake 20–25 min, flipping once, until golden and cooked through.",
        "Boil potatoes 15 min; mash with warm milk, butter, and salt.",
        "Serve with lemon wedges.",
        "Toddler tip: cut the milanesa into thin strips; mash is perfect as is."
      ],
      "es": [
        "Precalentar el horno a 200 °C; aceitar una bandeja grande.",
        "Pasar el pollo por el huevo condimentado y luego por el pan rallado con orégano.",
        "Hornear 20–25 min, dando vuelta una vez, hasta que esté dorado y bien cocido.",
        "Hervir las papas 15 min; pisar con la leche tibia, la manteca y sal.",
        "Servir con gajos de limón.",
        "Consejo para pequeños: cortar la milanesa en tiras finas; el puré está perfecto así."
      ]
    },
    "tip": {
      "en": "An Argentine favourite made lighter in the oven — lean protein and potassium.",
      "es": "Un clásico argentino más liviano al horno — proteína magra y potasio."
    }
  },
  {
    "id": "zucchini-tart",
    "type": "lunch",
    "protein": "egg",
    "base": "bread",
    "tags": [
      "tart"
    ],
    "name": {
      "en": "Zucchini & Cheese Tart (Tarta de Zapallitos)",
      "es": "Tarta de Zapallitos"
    },
    "ing": {
      "en": [
        "1 ready-made pie crust",
        "4 zucchini, grated",
        "1 onion, diced",
        "4 eggs",
        "1 cup shredded cheese",
        "2 tbsp grated parmesan",
        "1 tbsp olive oil",
        "Mixed greens for salad",
        "Salt & pepper"
      ],
      "es": [
        "1 tapa de tarta",
        "4 zapallitos rallados",
        "1 cebolla picada",
        "4 huevos",
        "1 taza queso rallado",
        "2 cdas parmesano rallado",
        "1 cda aceite de oliva",
        "Hojas verdes variadas para la ensalada",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Preheat oven to 190°C / 375°F; line a tart tin with the crust.",
        "Sauté onion and zucchini 8 min until the liquid evaporates.",
        "Mix with eggs, cheese, salt, and pepper; pour into the crust and top with parmesan.",
        "Bake 35 min until set and golden; rest 10 min.",
        "Serve warm with a green salad.",
        "Toddler tip: soft filling only, in small pieces."
      ],
      "es": [
        "Precalentar el horno a 190 °C; forrar una tartera con la masa.",
        "Saltear la cebolla y los zapallitos 8 min hasta que se evapore el líquido.",
        "Mezclar con los huevos, el queso, sal y pimienta; volcar en la tarta y cubrir con parmesano.",
        "Hornear 35 min hasta que cuaje y se dore; reposar 10 min.",
        "Servir tibia con una ensalada verde.",
        "Consejo para pequeños: solo el relleno blando, en trocitos."
      ]
    },
    "tip": {
      "en": "A tarta is great cold too — pack leftovers for tomorrow.",
      "es": "La tarta también es rica fría — guardá lo que sobre para mañana."
    }
  },
  {
    "id": "lentil-stew-guiso",
    "type": "lunch",
    "protein": "plant",
    "base": "bread",
    "tags": [
      "stew",
      "lentil"
    ],
    "name": {
      "en": "Hearty Lentil Stew (Guiso de Lentejas)",
      "es": "Guiso de Lentejas"
    },
    "ing": {
      "en": [
        "1½ cups brown lentils",
        "1 onion, diced",
        "1 red bell pepper, diced",
        "2 carrots, diced",
        "2 potatoes, cubed",
        "2 cloves garlic, minced",
        "1 can (400g) crushed tomatoes",
        "1L vegetable broth",
        "1 tsp paprika",
        "1 bay leaf",
        "2 tbsp olive oil",
        "Crusty bread"
      ],
      "es": [
        "1½ tazas lentejas",
        "1 cebolla picada",
        "1 morrón rojo picado",
        "2 zanahorias picadas",
        "2 papas en cubos",
        "2 dientes de ajo picados",
        "1 lata (400 g) tomates triturados",
        "1 L caldo de verduras",
        "1 cdita pimentón",
        "1 hoja de laurel",
        "2 cdas aceite de oliva",
        "Pan de campo"
      ]
    },
    "steps": {
      "en": [
        "Sauté onion, pepper, and garlic in olive oil 5 min.",
        "Add carrots, potatoes, lentils, tomatoes, broth, paprika, and bay leaf.",
        "Simmer 35–40 min until the lentils are tender; season.",
        "Remove the bay leaf and serve with crusty bread.",
        "Toddler tip: mash a portion slightly so the lentils are easy to swallow."
      ],
      "es": [
        "Saltear la cebolla, el morrón y el ajo en aceite de oliva 5 min.",
        "Agregar las zanahorias, las papas, las lentejas, los tomates, el caldo, el pimentón y el laurel.",
        "Cocinar a fuego lento 35–40 min hasta que las lentejas estén tiernas; condimentar.",
        "Retirar el laurel y servir con pan de campo.",
        "Consejo para pequeños: pisar un poco una porción para que las lentejas sean fáciles de tragar."
      ]
    },
    "tip": {
      "en": "Lentils plus the vitamin C in peppers and tomato = better iron absorption.",
      "es": "Lentejas más la vitamina C del morrón y el tomate = mejor absorción del hierro."
    }
  },
  {
    "id": "turkey-meatballs-with-rice",
    "type": "lunch",
    "protein": "poultry",
    "base": "rice",
    "tags": [
      "meatballs"
    ],
    "name": {
      "en": "Turkey & Veggie Meatballs with Rice",
      "es": "Albóndigas de Pavo y Verduras con Arroz"
    },
    "ing": {
      "en": [
        "500g ground turkey",
        "1 zucchini, finely grated",
        "1 egg",
        "½ cup breadcrumbs",
        "1 can (400g) crushed tomatoes",
        "2 cloves garlic, minced",
        "1 tsp dried basil",
        "3 cups cooked rice",
        "1 tbsp olive oil",
        "Salt & pepper"
      ],
      "es": [
        "500 g carne picada de pavo",
        "1 zapallito rallado fino",
        "1 huevo",
        "½ taza pan rallado",
        "1 lata (400 g) tomates triturados",
        "2 dientes de ajo picados",
        "1 cdita albahaca seca",
        "3 tazas arroz cocido",
        "1 cda aceite de oliva",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Mix turkey, zucchini, egg, breadcrumbs, salt, and pepper; roll into small balls.",
        "Brown the meatballs in olive oil 5 min.",
        "Add garlic, tomatoes, and basil; cover and simmer 15 min until cooked through.",
        "Serve over rice.",
        "Toddler tip: halve the meatballs and mash into the sauce."
      ],
      "es": [
        "Mezclar el pavo, el zapallito, el huevo, el pan rallado, sal y pimienta; formar bolitas.",
        "Dorar las albóndigas en aceite de oliva 5 min.",
        "Agregar el ajo, los tomates y la albahaca; tapar y cocinar 15 min hasta que estén bien cocidas.",
        "Servir sobre el arroz.",
        "Consejo para pequeños: cortar las albóndigas a la mitad y pisarlas con la salsa."
      ]
    },
    "tip": {
      "en": "Hidden zucchini keeps the meatballs juicy and adds a vegetable serving.",
      "es": "El zapallito escondido mantiene jugosas las albóndigas y suma una porción de verdura."
    },
    "prep": [
      "rice"
    ]
  },
  {
    "id": "salmon-fishcakes-with-salad",
    "type": "lunch",
    "protein": "fish",
    "base": "potato",
    "tags": [
      "salmon"
    ],
    "name": {
      "en": "Salmon Fishcakes with Green Salad",
      "es": "Croquetas de Salmón con Ensalada Verde"
    },
    "ing": {
      "en": [
        "2 salmon fillets (180g each)",
        "3 large potatoes, peeled & cubed",
        "2 spring onions, sliced",
        "1 egg, beaten",
        "1 cup breadcrumbs",
        "1 lemon (zest + wedges)",
        "2 tbsp olive oil",
        "Mixed greens for salad",
        "Salt & pepper"
      ],
      "es": [
        "2 filetes de salmón (180 g c/u)",
        "3 papas grandes peladas y en cubos",
        "2 cebollas de verdeo en rodajas",
        "1 huevo batido",
        "1 taza pan rallado",
        "1 limón (ralladura + gajos)",
        "2 cdas aceite de oliva",
        "Hojas verdes variadas para la ensalada",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Boil potatoes until soft; mash. Bake or poach salmon 12–15 min until cooked through; flake.",
        "Mix salmon, potato, spring onion, lemon zest, salt, and pepper; shape 8 cakes.",
        "Dip in egg, then breadcrumbs.",
        "Pan-fry in olive oil 3–4 min per side until golden and hot through.",
        "Serve with salad and lemon wedges.",
        "Toddler tip: break a fishcake into soft pieces, checking for bones."
      ],
      "es": [
        "Hervir las papas hasta que estén blandas; pisar. Hornear o pochar el salmón 12–15 min hasta que esté cocido; desmenuzar.",
        "Mezclar el salmón, la papa, el verdeo, la ralladura de limón, sal y pimienta; formar 8 croquetas.",
        "Pasar por el huevo y luego por el pan rallado.",
        "Dorar en aceite de oliva 3–4 min por lado hasta que estén calientes por dentro.",
        "Servir con ensalada y gajos de limón.",
        "Consejo para pequeños: desarmar una croqueta en trocitos blandos, revisando que no haya espinas."
      ]
    },
    "tip": {
      "en": "Salmon is low in mercury and rich in omega-3 DHA for baby’s brain and eyes.",
      "es": "El salmón tiene poco mercurio y mucho omega-3 DHA para el cerebro y los ojos del bebé."
    }
  },
  {
    "id": "shrimp-fried-rice",
    "type": "lunch",
    "protein": "fish",
    "base": "rice",
    "tags": [
      "fried-rice"
    ],
    "name": {
      "en": "Shrimp Fried Rice",
      "es": "Arroz Frito con Langostinos"
    },
    "ing": {
      "en": [
        "300g peeled shrimp",
        "3 cups cooked rice (day-old works best)",
        "2 eggs",
        "1 cup frozen peas & carrots mix, thawed",
        "3 spring onions, sliced",
        "2 cloves garlic, minced",
        "3 tbsp soy sauce",
        "1 tbsp sesame oil",
        "2 tbsp cooking oil"
      ],
      "es": [
        "300 g langostinos pelados",
        "3 tazas arroz cocido (de uno o dos días, mejor)",
        "2 huevos",
        "1 taza arvejas y zanahorias congeladas descongeladas",
        "3 cebollas de verdeo en rodajas",
        "2 dientes de ajo picados",
        "3 cdas salsa de soja",
        "1 cda aceite de sésamo",
        "2 cdas aceite para cocinar"
      ]
    },
    "steps": {
      "en": [
        "Stir-fry shrimp in hot oil 2–3 min until pink and cooked through; set aside.",
        "Scramble the eggs in the same pan; push aside.",
        "Add rice, peas & carrots, and garlic; stir-fry 3 min.",
        "Return the shrimp; add soy sauce, sesame oil, and spring onions.",
        "Toddler tip: chop the shrimp small and serve with soft rice."
      ],
      "es": [
        "Saltear los langostinos en aceite caliente 2–3 min hasta que estén rosados y cocidos; reservar.",
        "Revolver los huevos en la misma sartén; correrlos a un costado.",
        "Agregar el arroz, las arvejas y zanahorias y el ajo; saltear 3 min.",
        "Volver a poner los langostinos; agregar la salsa de soja, el aceite de sésamo y el verdeo.",
        "Consejo para pequeños: picar los langostinos chiquitos y servir con arroz blando."
      ]
    },
    "tip": {
      "en": "Cooked shrimp is a safe, low-mercury seafood in pregnancy.",
      "es": "Los langostinos bien cocidos son un marisco seguro y bajo en mercurio en el embarazo."
    },
    "prep": [
      "rice"
    ]
  },
  {
    "id": "black-bean-quesadillas",
    "type": "lunch",
    "protein": "plant",
    "base": "bread",
    "tags": [
      "tortilla"
    ],
    "name": {
      "en": "Black Bean & Corn Quesadillas",
      "es": "Quesadillas de Porotos Negros y Choclo"
    },
    "ing": {
      "en": [
        "1 can black beans, drained",
        "1 cup frozen corn, thawed",
        "1 red bell pepper, diced",
        "1½ cups shredded cheese",
        "8 small flour tortillas",
        "1 tsp cumin",
        "½ cup sour cream, to serve",
        "1 avocado, sliced"
      ],
      "es": [
        "1 lata porotos negros escurridos",
        "1 taza choclo congelado descongelado",
        "1 morrón rojo picado",
        "1½ tazas queso rallado",
        "8 tortillas de harina pequeñas",
        "1 cdita comino",
        "½ taza crema agria, para servir",
        "1 palta en rodajas"
      ]
    },
    "steps": {
      "en": [
        "Mash half the beans; mix with the rest, corn, pepper, and cumin.",
        "Spread over 4 tortillas, top with cheese and another tortilla.",
        "Toast 3 min per side in a dry pan until crisp and melted.",
        "Cut into wedges; serve with sour cream and avocado.",
        "Toddler tip: cut into thin strips once cooled a little."
      ],
      "es": [
        "Pisar la mitad de los porotos; mezclar con el resto, el choclo, el morrón y el comino.",
        "Untar sobre 4 tortillas, cubrir con queso y otra tortilla.",
        "Dorar 3 min por lado en sartén seca hasta que esté crocante y derretido.",
        "Cortar en triángulos; servir con crema agria y palta.",
        "Consejo para pequeños: cortar en tiras finas cuando se entibie."
      ]
    },
    "tip": {
      "en": "Beans bring fibre, folate, and plant protein.",
      "es": "Los porotos aportan fibra, folato y proteína vegetal."
    }
  },
  {
    "id": "pasta-primavera",
    "type": "lunch",
    "protein": "plant",
    "base": "pasta",
    "name": {
      "en": "Pasta Primavera",
      "es": "Pasta Primavera"
    },
    "ing": {
      "en": [
        "400g penne pasta",
        "1 zucchini, sliced",
        "1 cup broccoli florets",
        "1 cup cherry tomatoes, halved",
        "1 cup frozen peas",
        "2 cloves garlic, minced",
        "3 tbsp olive oil",
        "½ cup grated parmesan",
        "Fresh basil leaves"
      ],
      "es": [
        "400 g pasta penne",
        "1 zapallito en rodajas",
        "1 taza floretes de brócoli",
        "1 taza tomates cherry en mitades",
        "1 taza arvejas congeladas",
        "2 dientes de ajo picados",
        "3 cdas aceite de oliva",
        "½ taza parmesano rallado",
        "Hojas de albahaca fresca"
      ]
    },
    "steps": {
      "en": [
        "Cook pasta; add broccoli and peas for the last 3 min. Reserve a cup of pasta water; drain.",
        "Sauté zucchini and garlic in olive oil 4 min; add tomatoes for 2 min.",
        "Toss everything with parmesan and a splash of pasta water.",
        "Finish with torn basil.",
        "Toddler tip: use small pasta and chop the veggies small."
      ],
      "es": [
        "Cocinar la pasta; agregar el brócoli y las arvejas los últimos 3 min. Reservar una taza del agua; escurrir.",
        "Saltear el zapallito y el ajo en aceite de oliva 4 min; agregar los tomates 2 min.",
        "Mezclar todo con el parmesano y un chorrito del agua de la pasta.",
        "Terminar con albahaca.",
        "Consejo para pequeños: usar pasta chica y picar las verduras chiquitas."
      ]
    },
    "tip": {
      "en": "Five vegetables in one bowl — colourful and quick.",
      "es": "Cinco verduras en un plato — colorido y rápido."
    }
  },
  {
    "id": "greek-chicken-pita-pockets",
    "type": "lunch",
    "protein": "poultry",
    "base": "bread",
    "name": {
      "en": "Greek Chicken Pita Pockets",
      "es": "Pitas Rellenas de Pollo a la Griega"
    },
    "ing": {
      "en": [
        "600g chicken breast, cut into strips",
        "1 tsp dried oregano",
        "Juice of 1 lemon",
        "2 tbsp olive oil",
        "4 pita breads",
        "1 cucumber, diced",
        "2 tomatoes, diced",
        "1 cup Greek yogurt",
        "Fresh mint, chopped",
        "Salt"
      ],
      "es": [
        "600 g pechuga de pollo en tiras",
        "1 cdita orégano seco",
        "Jugo de 1 limón",
        "2 cdas aceite de oliva",
        "4 panes pita",
        "1 pepino en cubos",
        "2 tomates picados",
        "1 taza yogur griego",
        "Menta fresca picada",
        "Sal"
      ]
    },
    "steps": {
      "en": [
        "Marinate chicken in lemon, oregano, olive oil, and salt for 10 min.",
        "Pan-fry 6–8 min until golden and cooked through.",
        "Mix yogurt with mint and a pinch of salt.",
        "Warm the pitas, open them, and fill with chicken, cucumber, tomato, and yogurt sauce.",
        "Toddler tip: serve the filling deconstructed with pita strips."
      ],
      "es": [
        "Marinar el pollo con limón, orégano, aceite de oliva y sal 10 min.",
        "Dorar en sartén 6–8 min hasta que esté bien cocido.",
        "Mezclar el yogur con la menta y una pizca de sal.",
        "Calentar las pitas, abrirlas y rellenar con pollo, pepino, tomate y la salsa de yogur.",
        "Consejo para pequeños: servir el relleno por separado con tiras de pita."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "pumpkin-soup-with-toast",
    "type": "lunch",
    "protein": "plant",
    "base": "bread",
    "tags": [
      "soup"
    ],
    "name": {
      "en": "Pumpkin Soup with Cheese Toast",
      "es": "Sopa de Zapallo con Tostadas de Queso"
    },
    "ing": {
      "en": [
        "1 kg pumpkin or butternut squash, peeled & cubed",
        "1 onion, diced",
        "1 carrot, diced",
        "1L vegetable broth",
        "½ cup milk",
        "Pinch of nutmeg",
        "2 tbsp olive oil",
        "4 slices whole-grain bread",
        "1 cup shredded cheese"
      ],
      "es": [
        "1 kg zapallo o calabaza pelado y en cubos",
        "1 cebolla picada",
        "1 zanahoria picada",
        "1 L caldo de verduras",
        "½ taza leche",
        "Pizca de nuez moscada",
        "2 cdas aceite de oliva",
        "4 rebanadas de pan integral",
        "1 taza queso rallado"
      ]
    },
    "steps": {
      "en": [
        "Sauté onion and carrot in olive oil 5 min.",
        "Add pumpkin and broth; simmer 20 min until soft.",
        "Blend smooth with milk and nutmeg; season.",
        "Grill bread topped with cheese until bubbly; serve alongside.",
        "Toddler tip: naturally sweet and smooth — perfect as is."
      ],
      "es": [
        "Saltear la cebolla y la zanahoria en aceite de oliva 5 min.",
        "Agregar el zapallo y el caldo; cocinar 20 min hasta que esté blando.",
        "Licuar con la leche y la nuez moscada; condimentar.",
        "Gratinar el pan con queso hasta que burbujee; servir al costado.",
        "Consejo para pequeños: dulce y suave naturalmente — perfecta así."
      ]
    },
    "tip": {
      "en": "Pumpkin is packed with vitamin A for baby’s growing eyes.",
      "es": "El zapallo está lleno de vitamina A para los ojos del bebé."
    }
  },
  {
    "id": "beef-tacos",
    "type": "lunch",
    "protein": "beef",
    "base": "bread",
    "tags": [
      "tacos"
    ],
    "name": {
      "en": "Beef Tacos",
      "es": "Tacos de Carne"
    },
    "ing": {
      "en": [
        "500g ground beef",
        "1 onion, diced",
        "1 tsp cumin",
        "1 tsp paprika",
        "8 corn tortillas",
        "2 cups shredded lettuce",
        "2 tomatoes, diced",
        "1 cup shredded cheese",
        "½ cup sour cream",
        "1 tbsp olive oil"
      ],
      "es": [
        "500 g carne picada",
        "1 cebolla picada",
        "1 cdita comino",
        "1 cdita pimentón",
        "8 tortillas de maíz",
        "2 tazas lechuga en tiras",
        "2 tomates picados",
        "1 taza queso rallado",
        "½ taza crema agria",
        "1 cda aceite de oliva"
      ]
    },
    "steps": {
      "en": [
        "Brown beef and onion in olive oil 8 min until fully cooked.",
        "Add cumin, paprika, and a splash of water; simmer 3 min.",
        "Warm the tortillas in a dry pan.",
        "Fill with beef, lettuce, tomato, cheese, and sour cream.",
        "Toddler tip: serve the filling in a bowl with soft tortilla pieces."
      ],
      "es": [
        "Dorar la carne y la cebolla en aceite de oliva 8 min hasta que esté bien cocida.",
        "Agregar el comino, el pimentón y un chorrito de agua; cocinar 3 min.",
        "Calentar las tortillas en una sartén seca.",
        "Rellenar con carne, lechuga, tomate, queso y crema agria.",
        "Consejo para pequeños: servir el relleno en un bol con trocitos de tortilla blanda."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "hake-with-potato-salad",
    "type": "lunch",
    "protein": "fish",
    "base": "potato",
    "name": {
      "en": "Hake with Lemony Potato Salad",
      "es": "Merluza con Ensalada de Papas"
    },
    "ing": {
      "en": [
        "4 hake fillets (150g each)",
        "4 medium potatoes, cubed",
        "1 cup green beans, cut",
        "2 eggs",
        "2 tbsp mayonnaise",
        "1 lemon (zest + wedges)",
        "Fresh parsley",
        "2 tbsp olive oil",
        "Salt & pepper"
      ],
      "es": [
        "4 filetes de merluza (150 g c/u)",
        "4 papas medianas en cubos",
        "1 taza chauchas cortadas",
        "2 huevos",
        "2 cdas mayonesa",
        "1 limón (ralladura + gajos)",
        "Perejil fresco",
        "2 cdas aceite de oliva",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Boil potatoes 12 min, adding green beans for the last 4 min; hard-boil the eggs alongside.",
        "Toss potatoes, beans, and chopped egg with mayonnaise, lemon zest, and parsley.",
        "Season the hake and pan-fry in olive oil 3–4 min per side until it flakes.",
        "Serve with lemon wedges.",
        "Toddler tip: flake the fish carefully, checking for bones."
      ],
      "es": [
        "Hervir las papas 12 min, agregando las chauchas los últimos 4 min; hervir los huevos al mismo tiempo.",
        "Mezclar las papas, las chauchas y el huevo picado con mayonesa, ralladura de limón y perejil.",
        "Condimentar la merluza y dorar en aceite de oliva 3–4 min por lado hasta que se desmenuce.",
        "Servir con gajos de limón.",
        "Consejo para pequeños: desmenuzar el pescado con cuidado, revisando las espinas."
      ]
    },
    "tip": {
      "en": "Hake is a mild, low-mercury white fish loved by kids.",
      "es": "La merluza es un pescado blanco suave y bajo en mercurio que les gusta a los chicos."
    }
  },
  {
    "id": "chicken-and-corn-empanadas",
    "type": "lunch",
    "protein": "poultry",
    "base": "bread",
    "tags": [
      "empanadas"
    ],
    "name": {
      "en": "Baked Chicken & Corn Empanadas",
      "es": "Empanadas de Pollo y Choclo al Horno"
    },
    "ing": {
      "en": [
        "12 empanada discs",
        "400g chicken breast, finely diced",
        "1 onion, diced",
        "1 red bell pepper, diced",
        "1 cup frozen corn, thawed",
        "1 tsp paprika",
        "1 tsp cumin",
        "1 egg, beaten",
        "1 tbsp olive oil",
        "Mixed greens for salad"
      ],
      "es": [
        "12 tapas de empanadas",
        "400 g pechuga de pollo picada fina",
        "1 cebolla picada",
        "1 morrón rojo picado",
        "1 taza choclo congelado descongelado",
        "1 cdita pimentón",
        "1 cdita comino",
        "1 huevo batido",
        "1 cda aceite de oliva",
        "Hojas verdes variadas para la ensalada"
      ]
    },
    "steps": {
      "en": [
        "Sauté onion and pepper 5 min; add chicken, paprika, and cumin; cook 8 min until cooked through.",
        "Stir in corn and let the filling cool.",
        "Fill each disc, fold, and seal the edges; brush with egg.",
        "Bake at 200°C / 400°F for 18–20 min until golden.",
        "Serve with a green salad.",
        "Toddler tip: open one up to cool and serve the filling with pastry pieces."
      ],
      "es": [
        "Saltear la cebolla y el morrón 5 min; agregar el pollo, el pimentón y el comino; cocinar 8 min.",
        "Incorporar el choclo y dejar enfriar el relleno.",
        "Rellenar cada tapa, cerrar y repulgar; pincelar con huevo.",
        "Hornear a 200 °C 18–20 min hasta que se doren.",
        "Servir con una ensalada verde.",
        "Consejo para pequeños: abrir una para que se enfríe y servir el relleno con trocitos de masa."
      ]
    },
    "tip": {
      "en": "Make a double batch and freeze half for a busy day.",
      "es": "Hacé el doble y congelá la mitad para un día complicado."
    }
  },
  {
    "id": "gnocchi-with-tomato-sauce",
    "type": "lunch",
    "protein": "plant",
    "base": "pasta",
    "tags": [
      "gnocchi"
    ],
    "name": {
      "en": "Gnocchi with Tomato & Basil Sauce",
      "es": "Ñoquis con Salsa de Tomate y Albahaca"
    },
    "ing": {
      "en": [
        "1 kg potato gnocchi",
        "1 can (400g) crushed tomatoes",
        "1 onion, finely diced",
        "2 cloves garlic, minced",
        "2 tbsp olive oil",
        "Fresh basil leaves",
        "½ cup grated parmesan",
        "2 cups fresh spinach"
      ],
      "es": [
        "1 kg ñoquis de papa",
        "1 lata (400 g) tomates triturados",
        "1 cebolla picada fina",
        "2 dientes de ajo picados",
        "2 cdas aceite de oliva",
        "Hojas de albahaca fresca",
        "½ taza parmesano rallado",
        "2 tazas espinaca fresca"
      ]
    },
    "steps": {
      "en": [
        "Sauté onion and garlic in olive oil 5 min; add tomatoes and simmer 15 min.",
        "Stir the spinach into the sauce until wilted.",
        "Boil gnocchi until they float, about 2–3 min; drain.",
        "Toss with sauce; top with basil and parmesan.",
        "Toddler tip: halve the gnocchi — soft and easy to chew."
      ],
      "es": [
        "Saltear la cebolla y el ajo en aceite de oliva 5 min; agregar los tomates y cocinar 15 min.",
        "Incorporar la espinaca a la salsa hasta que se achique.",
        "Hervir los ñoquis hasta que suban, unos 2–3 min; escurrir.",
        "Mezclar con la salsa; terminar con albahaca y parmesano.",
        "Consejo para pequeños: cortar los ñoquis a la mitad — blandos y fáciles de masticar."
      ]
    },
    "tip": {
      "en": "Ñoquis on the 29th is an Argentine tradition — any day works too!",
      "es": "Los ñoquis del 29 son tradición argentina — ¡pero cualquier día vienen bien!"
    }
  },
  {
    "id": "tuna-and-white-bean-salad",
    "type": "lunch",
    "protein": "fish",
    "base": "bread",
    "tags": [
      "tuna"
    ],
    "name": {
      "en": "Tuna & White Bean Salad",
      "es": "Ensalada de Atún y Alubias"
    },
    "ing": {
      "en": [
        "2 cans (160g) tuna, drained",
        "1 can cannellini beans, drained",
        "1 cup cherry tomatoes, halved",
        "1 cucumber, diced",
        "1 red onion, finely diced",
        "Juice of 1 lemon",
        "3 tbsp olive oil",
        "Fresh parsley",
        "4 slices whole-grain bread, to serve"
      ],
      "es": [
        "2 latas (160 g) atún escurrido",
        "1 lata alubias cannellini escurridas",
        "1 taza tomates cherry en mitades",
        "1 pepino en cubos",
        "1 cebolla morada picada fina",
        "Jugo de 1 limón",
        "3 cdas aceite de oliva",
        "Perejil fresco",
        "4 rebanadas de pan integral, para acompañar"
      ]
    },
    "steps": {
      "en": [
        "Whisk lemon juice, olive oil, salt, and pepper.",
        "Toss beans, tomatoes, cucumber, onion, and parsley with the dressing.",
        "Fold in the tuna in chunks.",
        "Serve with toasted bread.",
        "Toddler tip: mash beans and tuna together on soft bread."
      ],
      "es": [
        "Batir el jugo de limón con el aceite de oliva, sal y pimienta.",
        "Mezclar las alubias, los tomates, el pepino, la cebolla y el perejil con el aliño.",
        "Agregar el atún en trozos.",
        "Servir con pan tostado.",
        "Consejo para pequeños: pisar las alubias con el atún sobre pan blando."
      ]
    },
    "tip": {
      "en": "Keep tuna to about twice a week in pregnancy (mercury).",
      "es": "Limitar el atún a unas dos veces por semana en el embarazo (mercurio)."
    }
  },
  {
    "id": "pork-and-pineapple-rice-bowls",
    "type": "lunch",
    "protein": "pork",
    "base": "rice",
    "name": {
      "en": "Pork & Pineapple Rice Bowls",
      "es": "Bowls de Cerdo y Ananá con Arroz"
    },
    "ing": {
      "en": [
        "500g pork tenderloin, thin strips",
        "1½ cups pineapple chunks",
        "1 red bell pepper, sliced",
        "3 tbsp soy sauce",
        "1 tbsp honey",
        "1 tsp fresh ginger, grated",
        "3 cups cooked rice",
        "2 tbsp cooking oil",
        "2 spring onions, sliced"
      ],
      "es": [
        "500 g lomo de cerdo en tiras finas",
        "1½ tazas ananá en trozos",
        "1 morrón rojo en tiras",
        "3 cdas salsa de soja",
        "1 cda miel",
        "1 cdita jengibre fresco rallado",
        "3 tazas arroz cocido",
        "2 cdas aceite para cocinar",
        "2 cebollas de verdeo en rodajas"
      ]
    },
    "steps": {
      "en": [
        "Stir-fry pork in hot oil 4–5 min until cooked through.",
        "Add pepper and pineapple; cook 3 min.",
        "Stir in soy sauce, honey, and ginger until glossy.",
        "Serve over rice with spring onions.",
        "Toddler tip: chop pork and pineapple small; serve over soft rice."
      ],
      "es": [
        "Saltear el cerdo en aceite caliente 4–5 min hasta que esté bien cocido.",
        "Agregar el morrón y el ananá; cocinar 3 min.",
        "Incorporar la salsa de soja, la miel y el jengibre hasta que brille.",
        "Servir sobre el arroz con verdeo.",
        "Consejo para pequeños: picar el cerdo y el ananá chiquitos; servir sobre arroz blando."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    },
    "prep": [
      "rice"
    ]
  },
  {
    "id": "egg-fried-noodles-with-veggies",
    "type": "lunch",
    "protein": "egg",
    "base": "pasta",
    "name": {
      "en": "Egg Fried Noodles with Veggies",
      "es": "Fideos Salteados con Huevo y Verduras"
    },
    "ing": {
      "en": [
        "300g egg noodles",
        "4 eggs",
        "2 carrots, julienned",
        "2 cups shredded cabbage",
        "1 red bell pepper, sliced",
        "3 tbsp soy sauce",
        "1 tbsp sesame oil",
        "2 cloves garlic, minced",
        "2 tbsp cooking oil"
      ],
      "es": [
        "300 g fideos de huevo",
        "4 huevos",
        "2 zanahorias en juliana",
        "2 tazas repollo rallado",
        "1 morrón rojo en tiras",
        "3 cdas salsa de soja",
        "1 cda aceite de sésamo",
        "2 dientes de ajo picados",
        "2 cdas aceite para cocinar"
      ]
    },
    "steps": {
      "en": [
        "Cook the noodles; drain and toss with a little sesame oil.",
        "Scramble the eggs in hot oil until set; remove.",
        "Stir-fry carrots, cabbage, pepper, and garlic 4 min.",
        "Add noodles, egg, and soy sauce; toss well.",
        "Toddler tip: cut the noodles short with scissors."
      ],
      "es": [
        "Cocinar los fideos; escurrir y mezclar con un poco de aceite de sésamo.",
        "Revolver los huevos en aceite caliente hasta que cuajen; retirar.",
        "Saltear las zanahorias, el repollo, el morrón y el ajo 4 min.",
        "Agregar los fideos, el huevo y la salsa de soja; mezclar bien.",
        "Consejo para pequeños: cortar los fideos cortitos con tijera."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "chickpea-and-spinach-curry",
    "type": "lunch",
    "protein": "plant",
    "base": "rice",
    "tags": [
      "curry"
    ],
    "name": {
      "en": "Chickpea & Spinach Curry",
      "es": "Curry de Garbanzos y Espinaca"
    },
    "ing": {
      "en": [
        "2 cans (400g each) chickpeas, drained",
        "1 can (400ml) coconut milk",
        "1 can (400g) diced tomatoes",
        "1 onion, diced",
        "2 cloves garlic, minced",
        "1 tbsp fresh ginger, grated",
        "2 tbsp curry powder",
        "3 cups fresh spinach",
        "3 cups cooked rice",
        "1 tbsp cooking oil"
      ],
      "es": [
        "2 latas (400 g c/u) garbanzos escurridos",
        "1 lata (400 ml) leche de coco",
        "1 lata (400 g) tomates picados",
        "1 cebolla picada",
        "2 dientes de ajo picados",
        "1 cda jengibre fresco rallado",
        "2 cdas curry en polvo",
        "3 tazas espinaca fresca",
        "3 tazas arroz cocido",
        "1 cda aceite para cocinar"
      ]
    },
    "steps": {
      "en": [
        "Sauté onion, garlic, and ginger 5 min; stir in curry powder for 1 min.",
        "Add chickpeas, tomatoes, and coconut milk; simmer 15 min.",
        "Stir in spinach until wilted.",
        "Serve over rice.",
        "Toddler tip: mild curry powder only; mash some chickpeas."
      ],
      "es": [
        "Saltear la cebolla, el ajo y el jengibre 5 min; agregar el curry 1 min.",
        "Agregar los garbanzos, los tomates y la leche de coco; cocinar 15 min.",
        "Incorporar la espinaca hasta que se achique.",
        "Servir sobre el arroz.",
        "Consejo para pequeños: usar curry suave; pisar algunos garbanzos."
      ]
    },
    "tip": {
      "en": "A creamy, iron- and folate-rich vegetarian lunch.",
      "es": "Un almuerzo vegetariano cremoso, rico en hierro y folato."
    },
    "prep": [
      "rice"
    ]
  },
  {
    "id": "homemade-fish-fingers-with-peas",
    "type": "lunch",
    "protein": "fish",
    "base": "potato",
    "tags": [
      "breaded-fish"
    ],
    "name": {
      "en": "Homemade Fish Fingers with Peas & Wedges",
      "es": "Bastones de Pescado Caseros con Arvejas y Papas"
    },
    "ing": {
      "en": [
        "500g white fish fillets (cod or hake), cut into fingers",
        "2 eggs, beaten",
        "1 cup breadcrumbs",
        "4 medium potatoes, cut into wedges",
        "2 cups frozen peas",
        "2 tbsp olive oil",
        "1 lemon, in wedges",
        "Salt"
      ],
      "es": [
        "500 g filetes de pescado blanco (bacalao o merluza) en bastones",
        "2 huevos batidos",
        "1 taza pan rallado",
        "4 papas medianas en gajos",
        "2 tazas arvejas congeladas",
        "2 cdas aceite de oliva",
        "1 limón en gajos",
        "Sal"
      ]
    },
    "steps": {
      "en": [
        "Toss wedges in oil and salt; roast at 220°C / 425°F for 30 min.",
        "Dip fish in egg, then breadcrumbs; bake on an oiled tray for the last 15 min.",
        "Boil the peas 3 min and lightly crush.",
        "Serve with lemon wedges.",
        "Toddler tip: flaky inside, crunchy outside — check for bones."
      ],
      "es": [
        "Mezclar los gajos con aceite y sal; asar a 220 °C 30 min.",
        "Pasar el pescado por huevo y pan rallado; hornear en bandeja aceitada los últimos 15 min.",
        "Hervir las arvejas 3 min y pisarlas un poco.",
        "Servir con gajos de limón.",
        "Consejo para pequeños: blandito por dentro y crocante por fuera — revisar espinas."
      ]
    },
    "tip": {
      "en": "Way better than frozen — real fish, little oil.",
      "es": "Mucho mejor que los congelados — pescado de verdad y poco aceite."
    }
  },
  {
    "id": "polenta-with-beef-ragu",
    "type": "lunch",
    "protein": "beef",
    "base": "grain",
    "tags": [
      "bolognese"
    ],
    "name": {
      "en": "Creamy Polenta with Beef Ragù",
      "es": "Polenta Cremosa con Tuco de Carne"
    },
    "ing": {
      "en": [
        "1½ cups polenta",
        "500g ground beef",
        "1 onion, diced",
        "1 carrot, diced",
        "1 can (400g) crushed tomatoes",
        "2 tbsp tomato paste",
        "1 tsp dried oregano",
        "1 bay leaf",
        "2 tbsp butter",
        "½ cup grated parmesan",
        "1 tbsp olive oil"
      ],
      "es": [
        "1½ tazas polenta",
        "500 g carne picada",
        "1 cebolla picada",
        "1 zanahoria picada",
        "1 lata (400 g) tomates triturados",
        "2 cdas extracto de tomate",
        "1 cdita orégano seco",
        "1 hoja de laurel",
        "2 cdas manteca",
        "½ taza parmesano rallado",
        "1 cda aceite de oliva"
      ]
    },
    "steps": {
      "en": [
        "Brown beef with onion and carrot in olive oil 8 min.",
        "Add tomatoes, tomato paste, oregano, and bay leaf; simmer 25 min.",
        "Cook polenta in 6 cups salted boiling water, whisking, 5–8 min; stir in butter and parmesan.",
        "Serve polenta topped with ragù.",
        "Toddler tip: soft polenta is ideal — mix a little sauce in."
      ],
      "es": [
        "Dorar la carne con la cebolla y la zanahoria en aceite de oliva 8 min.",
        "Agregar los tomates, el extracto, el orégano y el laurel; cocinar 25 min.",
        "Cocinar la polenta en 6 tazas de agua hirviendo con sal, batiendo, 5–8 min; agregar la manteca y el parmesano.",
        "Servir la polenta con el tuco por encima.",
        "Consejo para pequeños: la polenta blanda es ideal — mezclar con un poco de salsa."
      ]
    },
    "tip": {
      "en": "Comforting and iron-rich — a winter favourite.",
      "es": "Reconfortante y rico en hierro — un favorito de invierno."
    }
  },
  {
    "id": "rainbow-rice-paper-rolls",
    "type": "lunch",
    "protein": "poultry",
    "base": "rice",
    "experimental": true,
    "name": {
      "en": "Rainbow Rice-Paper Rolls with Peanut Dip",
      "es": "Rollitos de Papel de Arroz Arcoíris con Dip de Maní"
    },
    "ing": {
      "en": [
        "12 rice paper sheets",
        "100g rice noodles",
        "2 cups cooked chicken, sliced",
        "2 carrots, julienned",
        "1 cucumber, cut into sticks",
        "1 red bell pepper, cut into strips",
        "Fresh mint leaves",
        "3 tbsp peanut butter",
        "2 tbsp soy sauce",
        "Juice of 1 lime"
      ],
      "es": [
        "12 hojas de papel de arroz",
        "100 g fideos de arroz",
        "2 tazas pollo cocido en rodajas",
        "2 zanahorias en juliana",
        "1 pepino en bastones",
        "1 morrón rojo en tiras",
        "Hojas de menta fresca",
        "3 cdas mantequilla de maní",
        "2 cdas salsa de soja",
        "Jugo de 1 lima"
      ]
    },
    "steps": {
      "en": [
        "Soak the rice noodles in hot water 5 min; drain.",
        "Dip a rice paper sheet in warm water for 10 seconds and lay it flat.",
        "Fill with noodles, chicken, vegetables, and mint; roll up tightly like a burrito.",
        "Whisk peanut butter, soy sauce, lime, and 3 tbsp warm water for the dip.",
        "Toddler tip: cut rolls into short pieces; serve the dip thinly."
      ],
      "es": [
        "Remojar los fideos de arroz en agua caliente 5 min; escurrir.",
        "Pasar una hoja de papel de arroz por agua tibia 10 segundos y extenderla.",
        "Rellenar con fideos, pollo, verduras y menta; enrollar apretado como un burrito.",
        "Batir la mantequilla de maní con la soja, la lima y 3 cdas de agua tibia para el dip.",
        "Consejo para pequeños: cortar los rollitos en trozos cortos; dip bien liviano."
      ]
    },
    "tip": {
      "en": "A colourful hands-on lunch — let the kids roll their own.",
      "es": "Un almuerzo colorido para hacer con las manos — que los chicos armen los suyos."
    },
    "prep": [
      "cook-chicken"
    ]
  },
  {
    "id": "chickpea-tuna-salad-sandwiches",
    "type": "lunch",
    "protein": "plant",
    "base": "bread",
    "experimental": true,
    "name": {
      "en": "Chickpea \"Tuna\" Salad Sandwiches",
      "es": "Sándwiches de \"Atún\" de Garbanzos"
    },
    "ing": {
      "en": [
        "2 cans (400g each) chickpeas, drained",
        "3 tbsp mayonnaise",
        "1 celery stalk, finely diced",
        "1 tbsp Dijon mustard",
        "Juice of 1 lemon",
        "8 slices whole-grain bread",
        "Lettuce leaves",
        "2 tomatoes, sliced",
        "Salt & pepper"
      ],
      "es": [
        "2 latas (400 g c/u) garbanzos escurridos",
        "3 cdas mayonesa",
        "1 tallo de apio picado fino",
        "1 cda mostaza Dijon",
        "Jugo de 1 limón",
        "8 rebanadas de pan integral",
        "Hojas de lechuga",
        "2 tomates en rodajas",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Mash the chickpeas roughly with a fork.",
        "Mix with mayonnaise, celery, mustard, lemon, salt, and pepper.",
        "Fill the bread with the chickpea salad, lettuce, and tomato.",
        "Toddler tip: mash the chickpeas finer and spread thinly."
      ],
      "es": [
        "Pisar los garbanzos con un tenedor, sin hacerlos puré.",
        "Mezclar con mayonesa, apio, mostaza, limón, sal y pimienta.",
        "Rellenar el pan con la ensalada de garbanzos, lechuga y tomate.",
        "Consejo para pequeños: pisar más los garbanzos y untar en capa fina."
      ]
    },
    "tip": {
      "en": "All the creaminess of tuna salad, none of the mercury.",
      "es": "Toda la cremosidad de la ensalada de atún, sin nada de mercurio."
    }
  },
  {
    "id": "pizza-quesadillas",
    "type": "lunch",
    "protein": "plant",
    "base": "bread",
    "tags": [
      "tortilla",
      "pizza"
    ],
    "experimental": true,
    "name": {
      "en": "Pizza Quesadillas",
      "es": "Quesadillas Pizza"
    },
    "ing": {
      "en": [
        "8 small flour tortillas",
        "1 can (400g) crushed tomatoes",
        "250g mozzarella, grated",
        "150g mushrooms, sliced",
        "1 red bell pepper, diced",
        "1 tsp dried oregano",
        "Mixed greens for salad"
      ],
      "es": [
        "8 tortillas de harina pequeñas",
        "1 lata (400 g) tomates triturados",
        "250 g mozzarella rallada",
        "150 g champiñones en láminas",
        "1 morrón rojo picado",
        "1 cdita orégano seco",
        "Hojas verdes variadas para la ensalada"
      ]
    },
    "steps": {
      "en": [
        "Simmer the tomatoes with oregano 10 min until thick.",
        "Spread sauce on 4 tortillas; add mozzarella, mushrooms, and pepper; cover with the others.",
        "Toast 3 min per side in a dry pan until melted.",
        "Cut into wedges; serve with salad.",
        "Toddler tip: cut into thin strips once slightly cooled."
      ],
      "es": [
        "Cocinar los tomates con orégano 10 min hasta que espesen.",
        "Untar 4 tortillas con salsa; agregar mozzarella, champiñones y morrón; tapar con las otras.",
        "Dorar 3 min por lado en sartén seca hasta que se derrita.",
        "Cortar en triángulos; servir con ensalada.",
        "Consejo para pequeños: cortar en tiras finas cuando se entibie."
      ]
    },
    "tip": {
      "en": "Pizza night meets taco night — ready in 15 minutes.",
      "es": "La noche de pizza se cruza con la de tacos — lista en 15 minutos."
    }
  },
  {
    "id": "apple-slices-with-peanut-butter-and-cheese",
    "type": "snack",
    "group": "fruit",
    "tags": [
      "apple"
    ],
    "name": {
      "en": "Apple Slices with Peanut Butter & Cheese",
      "es": "Manzana con Mantequilla de Maní y Queso"
    },
    "ing": {
      "en": [
        "4 apples",
        "4 tbsp peanut butter",
        "100g cheddar cheese, cubed"
      ],
      "es": [
        "4 manzanas",
        "4 cdas mantequilla de maní",
        "100 g queso cheddar en cubos"
      ]
    },
    "steps": {
      "en": [
        "Wash and slice apples into wedges, removing cores.",
        "Arrange on a plate with peanut butter in a small bowl for dipping.",
        "Add cheese cubes on the side.",
        "Toddler tip: cut apple into tiny pieces, thin smear of peanut butter."
      ],
      "es": [
        "Lavar y cortar las manzanas en gajos, quitando el corazón.",
        "Acomodar en un plato con la mantequilla de maní en un bol pequeño para mojar.",
        "Agregar los cubos de queso al costado.",
        "Consejo para pequeños: cortar la manzana en trozos muy chicos, poner una pequeña cantidad de mantequilla de maní."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "yogurt-parfait-with-berries",
    "type": "snack",
    "group": "dairy",
    "tags": [
      "yogurt"
    ],
    "name": {
      "en": "Yogurt Parfait with Berries",
      "es": "Parfait de Yogur con Frutas del Bosque"
    },
    "ing": {
      "en": [
        "2 cups Greek yogurt",
        "½ cup granola",
        "1 cup mixed berries (fresh or frozen-thawed)"
      ],
      "es": [
        "2 tazas yogur griego",
        "½ taza granola",
        "1 taza frutas del bosque variadas (frescas o congeladas-descongeladas)"
      ]
    },
    "steps": {
      "en": [
        "In individual cups or bowls, layer yogurt, then granola, then berries.",
        "Repeat layers if desired.",
        "Toddler tip: skip granola to avoid choking; just yogurt and soft berries.",
        "Great calcium boost for mom and the whole family."
      ],
      "es": [
        "En vasos o bols individuales, hacer capas de yogur, granola y frutas.",
        "Repetir las capas si se desea.",
        "Consejo para pequeños: omitir la granola para evitar riesgo de atragantamiento; solo yogur y frutas blandas.",
        "Gran aporte de calcio para mamá y toda la familia."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "hummus-and-veggie-sticks",
    "type": "snack",
    "group": "veg",
    "tags": [
      "hummus"
    ],
    "name": {
      "en": "Hummus & Veggie Sticks",
      "es": "Hummus con Bastones de Verdura"
    },
    "ing": {
      "en": [
        "1 cup hummus",
        "3 carrots, cut into sticks",
        "1 cucumber, cut into rounds",
        "1 cup cherry tomatoes"
      ],
      "es": [
        "1 taza hummus",
        "3 zanahorias cortadas en bastones",
        "1 pepino cortado en rodajas",
        "1 taza tomates cherry"
      ]
    },
    "steps": {
      "en": [
        "Peel and cut carrots into sticks.",
        "Cut cucumber into rounds or sticks.",
        "Arrange vegetables on a plate with hummus for dipping.",
        "Toddler tip: lightly steam carrots first for softer texture."
      ],
      "es": [
        "Pelar y cortar las zanahorias en bastones.",
        "Cortar el pepino en rodajas o bastones.",
        "Acomodar las verduras en un plato con el hummus para mojar.",
        "Consejo para pequeños: cocinar las zanahorias al vapor primero para ablandarlas."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "banana-with-almond-butter",
    "type": "snack",
    "group": "fruit",
    "tags": [
      "nut-butter"
    ],
    "name": {
      "en": "Banana with Almond Butter",
      "es": "Banana con Mantequilla de Almendras"
    },
    "ing": {
      "en": [
        "4 bananas",
        "4 tbsp almond butter"
      ],
      "es": [
        "4 bananas",
        "4 cdas mantequilla de almendras"
      ]
    },
    "steps": {
      "en": [
        "Peel and slice bananas.",
        "Serve with almond butter on the side for dipping.",
        "Toddler tip: mash banana with a little almond butter for a soft spread."
      ],
      "es": [
        "Pelar y cortar las bananas en rodajas.",
        "Servir con la mantequilla de almendras al costado para mojar.",
        "Consejo para pequeños: pisar la banana con un poco de mantequilla de almendras para un puré suave."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "fresh-fruit-salad",
    "type": "snack",
    "group": "fruit",
    "name": {
      "en": "Fresh Fruit Salad",
      "es": "Ensalada de Frutas Frescas"
    },
    "ing": {
      "en": [
        "1 cup strawberries, halved",
        "1 cup grapes, halved",
        "2 kiwis, peeled & sliced",
        "1 orange, segmented",
        "Juice of 1 lime"
      ],
      "es": [
        "1 taza frutillas en mitades",
        "1 taza uvas en mitades",
        "2 kiwis pelados y en rodajas",
        "1 naranja en gajos",
        "Jugo de 1 lima"
      ]
    },
    "steps": {
      "en": [
        "Wash and prepare all fruit; cut into bite-sized pieces.",
        "Combine in a bowl and squeeze lime juice over.",
        "Toss gently and serve.",
        "Toddler tip: ensure all pieces are very small and grapes are halved (choking hazard)."
      ],
      "es": [
        "Lavar y preparar todas las frutas; cortar en trozos del tamaño de un bocado.",
        "Combinar en un bol y exprimir el jugo de lima.",
        "Mezclar suavemente y servir.",
        "Consejo para pequeños: asegurarse de que los trozos sean muy chicos y las uvas estén cortadas en mitades (riesgo de atragantamiento)."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "cheese-crackers-and-grapes",
    "type": "snack",
    "group": "dairy",
    "tags": [
      "cheese-plate"
    ],
    "name": {
      "en": "Cheese, Crackers & Grapes",
      "es": "Queso, Galletas y Uvas"
    },
    "ing": {
      "en": [
        "200g assorted cheese",
        "Whole-grain crackers",
        "2 cups grapes"
      ],
      "es": [
        "200 g queso variado",
        "Galletas integrales",
        "2 tazas uvas"
      ]
    },
    "steps": {
      "en": [
        "Slice or cube cheese into bite-sized pieces.",
        "Arrange crackers, cheese, and grapes on a plate or board.",
        "For toddler: small cheese cubes, grapes halved lengthways (choking risk!).",
        "Fun as a 'mini charcuterie' the 5-year-old can help arrange."
      ],
      "es": [
        "Cortar o hacer cubos de queso del tamaño de un bocado.",
        "Acomodar las galletas, el queso y las uvas en un plato o tabla.",
        "Para el bebé: cubos chicos de queso, uvas cortadas a lo largo por la mitad (¡riesgo de atragantamiento!).",
        "Divertido como \"mini picada\" que el nene de 5 años puede ayudar a armar."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "green-power-smoothie",
    "type": "snack",
    "group": "fruit",
    "tags": [
      "smoothie"
    ],
    "name": {
      "en": "Green Power Smoothie",
      "es": "Batido Verde Energizante"
    },
    "ing": {
      "en": [
        "2 cups fresh spinach",
        "2 frozen bananas",
        "2 cups milk (or oat milk)",
        "1 tbsp honey"
      ],
      "es": [
        "2 tazas espinaca fresca",
        "2 bananas congeladas",
        "2 tazas leche (o leche de avena)",
        "1 cda miel"
      ]
    },
    "steps": {
      "en": [
        "Add all ingredients to blender.",
        "Blend on high until completely smooth.",
        "Taste and adjust sweetness with honey.",
        "Pour into cups. Serve cold.",
        "Toddler tip: dilute slightly with extra milk, serve in sippy cup."
      ],
      "es": [
        "Poner todos los ingredientes en la licuadora.",
        "Licuar a alta potencia hasta que quede completamente suave.",
        "Probar y ajustar el dulzor con miel.",
        "Verter en vasos. Servir frío.",
        "Consejo para pequeños: diluir un poco con más leche, servir en vaso con tapa."
      ]
    },
    "tip": {
      "en": "Spinach + banana = great iron and potassium combo for mom! Vitamin C in the milk helps iron absorption.",
      "es": "¡Espinaca + banana = excelente combinación de hierro y potasio para mamá! La vitamina C de la leche ayuda a absorber el hierro."
    },
    "prep": [
      "freeze-bananas"
    ]
  },
  {
    "id": "rice-cakes-with-cream-cheese-and-cucumber",
    "type": "snack",
    "group": "grain",
    "tags": [
      "rice-cakes"
    ],
    "name": {
      "en": "Rice Cakes with Cream Cheese & Cucumber",
      "es": "Galletas de Arroz con Queso Crema y Pepino"
    },
    "ing": {
      "en": [
        "8 rice cakes",
        "115g cream cheese",
        "1 cucumber, thinly sliced",
        "Salt & dill (optional)"
      ],
      "es": [
        "8 galletas de arroz",
        "115 g queso crema",
        "1 pepino en rodajas finas",
        "Sal y eneldo (opcional)"
      ]
    },
    "steps": {
      "en": [
        "Spread cream cheese on each rice cake.",
        "Layer thin cucumber slices on top.",
        "Optional: sprinkle with salt and dried dill.",
        "For toddler: soft rice cake broken into pieces with cream cheese spread."
      ],
      "es": [
        "Untar el queso crema en cada galleta.",
        "Colocar rodajas finas de pepino encima.",
        "Opcional: espolvorear con sal y eneldo seco.",
        "Para el bebé: trozos chicos de galleta de arroz blanda con queso crema untado."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "orange-slices-and-cheese",
    "type": "snack",
    "group": "fruit",
    "tags": [
      "cheese-plate"
    ],
    "name": {
      "en": "Orange Slices & Cheese",
      "es": "Gajos de Naranja y Queso"
    },
    "ing": {
      "en": [
        "3 large oranges, peeled & segmented",
        "150g cheese, sliced"
      ],
      "es": [
        "3 naranjas grandes peladas y en gajos",
        "150 g queso en rodajas"
      ]
    },
    "steps": {
      "en": [
        "Peel and segment oranges into easy pieces.",
        "Slice or cube cheese.",
        "Serve together on a plate.",
        "For toddler: small orange pieces, small cheese cubes."
      ],
      "es": [
        "Pelar las naranjas y separar en gajos.",
        "Cortar o hacer cubos el queso.",
        "Servir juntos en un plato.",
        "Para el bebé: trozos chicos de naranja, cubos chicos de queso."
      ]
    },
    "tip": {
      "en": "The vitamin C in oranges actively boosts iron absorption from meals — great afternoon snack for mom!",
      "es": "¡La vitamina C de las naranjas potencia activamente la absorción del hierro — merienda genial para mamá!"
    }
  },
  {
    "id": "yogurt-with-honey-and-nuts",
    "type": "snack",
    "group": "dairy",
    "tags": [
      "yogurt"
    ],
    "name": {
      "en": "Yogurt with Honey & Nuts",
      "es": "Yogur con Miel y Nueces"
    },
    "ing": {
      "en": [
        "2 cups Greek yogurt",
        "3 tbsp honey",
        "½ cup mixed nuts, roughly chopped",
        "Fresh fruit (optional)"
      ],
      "es": [
        "2 tazas yogur griego",
        "3 cdas miel",
        "½ taza nueces variadas groseramente picadas",
        "Fruta fresca (opcional)"
      ]
    },
    "steps": {
      "en": [
        "Spoon yogurt into bowls.",
        "Drizzle honey generously over top.",
        "Sprinkle with chopped nuts.",
        "Add fresh fruit if available.",
        "Toddler tip: NO nuts (choking hazard) — just yogurt with honey.",
        "5-year-old: chopped nuts are fine with supervision."
      ],
      "es": [
        "Poner el yogur en bols.",
        "Rociar generosamente con miel.",
        "Espolvorear con las nueces picadas.",
        "Agregar fruta fresca si hay disponible.",
        "Consejo para pequeños: SIN nueces (riesgo de atragantamiento) — solo yogur con miel.",
        "Nene de 5 años: nueces picadas están bien con supervisión."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "apple-slices-and-cheddar",
    "type": "snack",
    "group": "fruit",
    "tags": [
      "apple"
    ],
    "name": {
      "en": "Apple Slices & Cheddar",
      "es": "Manzana y Queso Cheddar"
    },
    "ing": {
      "en": [
        "4 apples",
        "200g cheddar cheese"
      ],
      "es": [
        "4 manzanas",
        "200 g queso cheddar"
      ]
    },
    "steps": {
      "en": [
        "Core and slice apples into wedges.",
        "Slice or cube the cheese.",
        "Arrange on a plate and serve.",
        "Simple, filling, and kids love the sweet-salty combo."
      ],
      "es": [
        "Descorazonar y cortar las manzanas en gajos.",
        "Cortar o hacer cubos el queso.",
        "Acomodar en un plato y servir.",
        "Combinación simple, nutritiva, y a los chicos les encanta lo dulce-salado."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "banana-oat-muffins",
    "type": "snack",
    "group": "grain",
    "tags": [
      "muffin"
    ],
    "name": {
      "en": "Banana Oat Muffins",
      "es": "Muffins de Banana y Avena"
    },
    "ing": {
      "en": [
        "3 ripe bananas",
        "2 cups rolled oats",
        "2 eggs",
        "¼ cup honey",
        "1 tsp baking powder",
        "1 tsp vanilla",
        "½ tsp cinnamon",
        "Pinch of salt"
      ],
      "es": [
        "3 bananas maduras",
        "2 tazas avena arrollada",
        "2 huevos",
        "¼ taza miel",
        "1 cdita polvo para hornear",
        "1 cdita vainilla",
        "½ cdita canela",
        "Pizca de sal"
      ]
    },
    "steps": {
      "en": [
        "Preheat oven to 180°C / 350°F; line muffin tin.",
        "Mash bananas in a large bowl until smooth.",
        "Add eggs, honey, vanilla, and cinnamon; mix well.",
        "Stir in oats, baking powder, and salt until combined.",
        "Fill muffin cups ¾ full; bake 18–20 min until toothpick comes out clean.",
        "Cool; store in airtight container for the week (or freeze).",
        "Serve 1–2 muffins per person; keep the rest for another day."
      ],
      "es": [
        "Precalentar el horno a 180 °C; forrar el molde de muffins.",
        "Pisar las bananas en un bol grande hasta obtener un puré suave.",
        "Agregar los huevos, la miel, la vainilla y la canela; mezclar bien.",
        "Incorporar la avena, el polvo para hornear y la sal hasta combinar.",
        "Rellenar los moldes ¾ del volumen; hornear 18–20 min hasta que el palillo salga limpio.",
        "Enfriar; guardar en recipiente hermético por toda la semana (o congelar).",
        "Servir 1–2 muffins por persona; guardar el resto para otro día."
      ]
    },
    "tip": {
      "en": "These muffins are naturally sweetened, great for the toddler, and a wholesome snack for all. Oats provide iron too!",
      "es": "¡Estos muffins son naturalmente dulces, perfectos para el bebé, y una merienda nutritiva para todos. La avena también aporta hierro!"
    },
    "prep": [
      "muffins"
    ]
  },
  {
    "id": "hummus-and-warm-pita-with-cucumber",
    "type": "snack",
    "group": "veg",
    "tags": [
      "hummus"
    ],
    "name": {
      "en": "Hummus & Warm Pita with Cucumber",
      "es": "Hummus con Pita Tibia y Pepino"
    },
    "ing": {
      "en": [
        "1 cup hummus",
        "4 pita breads",
        "1 cucumber, sliced"
      ],
      "es": [
        "1 taza hummus",
        "4 panes pita",
        "1 pepino en rodajas"
      ]
    },
    "steps": {
      "en": [
        "Warm pita in oven at 180°C for 3 min, or microwave 30 sec.",
        "Cut pita into wedges.",
        "Slice cucumber into rounds.",
        "Serve with hummus for dipping.",
        "Toddler tip: soft small pita pieces with hummus as a dip."
      ],
      "es": [
        "Calentar el pita en el horno a 180 °C por 3 min, o en microondas 30 seg.",
        "Cortar el pita en triángulos.",
        "Cortar el pepino en rodajas.",
        "Servir con hummus para mojar.",
        "Consejo para pequeños: trozos pequeños de pita blanda con hummus como dip."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "watermelon-and-strawberry-skewers",
    "type": "snack",
    "group": "fruit",
    "tags": [
      "skewers"
    ],
    "name": {
      "en": "Watermelon & Strawberry Skewers",
      "es": "Brochetas de Sandía y Frutillas"
    },
    "ing": {
      "en": [
        "½ small watermelon, cubed",
        "1 cup strawberries, halved",
        "Wooden skewers"
      ],
      "es": [
        "½ sandía pequeña en cubos",
        "1 taza frutillas en mitades",
        "Palitos de brocheta de madera"
      ]
    },
    "steps": {
      "en": [
        "Cut watermelon into even-sized cubes.",
        "Hull and halve strawberries.",
        "Thread alternating fruit onto wooden skewers.",
        "Toddler tip: skip skewers entirely (choking hazard!), just serve fruit pieces in a bowl.",
        "Refreshing and hydrating for a warm afternoon."
      ],
      "es": [
        "Cortar la sandía en cubos del mismo tamaño.",
        "Quitar el cabito y cortar las frutillas por la mitad.",
        "Ensartar fruta alternada en los palitos de brocheta.",
        "Consejo para pequeños: omitir los palitos completamente (¡riesgo de atragantamiento!), servir los trozos de fruta en un bol.",
        "Refrescante e hidratante para una tarde calurosa."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "cheese-and-fruit-plate",
    "type": "snack",
    "group": "dairy",
    "tags": [
      "cheese-plate"
    ],
    "name": {
      "en": "Cheese & Fruit Plate",
      "es": "Tabla de Quesos y Frutas"
    },
    "ing": {
      "en": [
        "200g assorted cheese",
        "1 cup grapes",
        "2 pears, sliced",
        "Handful of crackers"
      ],
      "es": [
        "200 g queso variado",
        "1 taza uvas",
        "2 peras en rodajas",
        "Un puñado de galletas"
      ]
    },
    "steps": {
      "en": [
        "Slice or cube cheese.",
        "Halve grapes; slice pears.",
        "Arrange cheese, fruit, and crackers on a board or plate.",
        "For toddler: small cheese cubes, grapes halved, soft pear pieces."
      ],
      "es": [
        "Cortar o hacer cubos el queso.",
        "Cortar las uvas por la mitad; rebanar las peras.",
        "Acomodar el queso, la fruta y las galletas en una tabla o plato.",
        "Para el bebé: cubos chicos de queso, uvas cortadas, trozos blandos de pera."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "pear-with-almond-butter",
    "type": "snack",
    "group": "fruit",
    "tags": [
      "nut-butter"
    ],
    "name": {
      "en": "Pear with Almond Butter",
      "es": "Pera con Mantequilla de Almendras"
    },
    "ing": {
      "en": [
        "4 pears",
        "4 tbsp almond butter"
      ],
      "es": [
        "4 peras",
        "4 cdas mantequilla de almendras"
      ]
    },
    "steps": {
      "en": [
        "Core and slice pears into wedges.",
        "Serve with almond butter in a small bowl for dipping.",
        "Toddler tip: small pear pieces, thin spread of almond butter."
      ],
      "es": [
        "Descorazonar y cortar las peras en gajos.",
        "Servir con la mantequilla de almendras en un bol pequeño para mojar.",
        "Consejo para pequeños: trozos chicos de pera, una pequeña cantidad de mantequilla de almendras untada."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "rice-cakes-with-avocado-smash",
    "type": "snack",
    "group": "grain",
    "tags": [
      "rice-cakes"
    ],
    "name": {
      "en": "Rice Cakes with Avocado Smash",
      "es": "Galletas de Arroz con Palta Aplastada"
    },
    "ing": {
      "en": [
        "8 rice cakes",
        "2 ripe avocados",
        "Juice of 1 lime",
        "Salt",
        "Chili flakes (optional, adults only)"
      ],
      "es": [
        "8 galletas de arroz",
        "2 paltas maduras",
        "Jugo de 1 lima",
        "Sal",
        "Ají en hojuelas (opcional, solo para adultos)"
      ]
    },
    "steps": {
      "en": [
        "Halve and pit avocados; scoop flesh into a bowl.",
        "Mash with lime juice and salt until creamy (or chunky — your preference).",
        "Spread generously on rice cakes.",
        "Adults: add a pinch of chili flakes.",
        "Toddler tip: plain avocado mash on soft rice cake, no chili."
      ],
      "es": [
        "Partir las paltas y sacar la semilla; raspar la pulpa en un bol.",
        "Pisar con el jugo de lima y sal hasta que quede cremosa (o con trozos, como prefieras).",
        "Untar generosamente en las galletas de arroz.",
        "Adultos: agregar una pizca de ají en hojuelas.",
        "Consejo para pequeños: palta aplastada simple en galleta de arroz blanda, sin ají."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "berry-banana-smoothie",
    "type": "snack",
    "group": "fruit",
    "tags": [
      "smoothie"
    ],
    "name": {
      "en": "Berry Banana Smoothie",
      "es": "Batido de Frutas del Bosque y Banana"
    },
    "ing": {
      "en": [
        "2 cups frozen mixed berries",
        "2 frozen bananas",
        "2 cups milk or Greek yogurt",
        "1 tbsp honey"
      ],
      "es": [
        "2 tazas frutas del bosque congeladas variadas",
        "2 bananas congeladas",
        "2 tazas leche o yogur griego",
        "1 cda miel"
      ]
    },
    "steps": {
      "en": [
        "Add all ingredients to blender.",
        "Blend on high until smooth and thick.",
        "Add a splash more milk for thinner consistency.",
        "Pour into cups and serve immediately.",
        "Toddler tip: slightly thinner consistency in a sippy cup."
      ],
      "es": [
        "Poner todos los ingredientes en la licuadora.",
        "Licuar a alta potencia hasta que quede suave y espeso.",
        "Agregar un chorrito más de leche para una consistencia más líquida.",
        "Verter en vasos y servir de inmediato.",
        "Consejo para pequeños: consistencia un poco más líquida en vaso con tapa."
      ]
    },
    "tip": {
      "en": "Great antioxidants and vitamins! Frozen berries are just as nutritious as fresh.",
      "es": "¡Excelentes antioxidantes y vitaminas! Las frutas del bosque congeladas son igual de nutritivas que las frescas."
    },
    "prep": [
      "freeze-bananas"
    ]
  },
  {
    "id": "frozen-yogurt-banana-pops",
    "type": "snack",
    "group": "fruit",
    "tags": [
      "frozen"
    ],
    "name": {
      "en": "Frozen Yogurt Banana Pops",
      "es": "Paletas de Banana con Yogur"
    },
    "ing": {
      "en": [
        "3 bananas, halved",
        "1 cup Greek yogurt",
        "1 tbsp honey",
        "2 tbsp granola, crushed",
        "Wooden skewers"
      ],
      "es": [
        "3 bananas cortadas a la mitad",
        "1 taza yogur griego",
        "1 cda miel",
        "2 cdas granola triturada",
        "Palitos de brochette de madera"
      ]
    },
    "steps": {
      "en": [
        "Push a skewer into each banana half.",
        "Mix yogurt with honey; dip the bananas and roll in granola.",
        "Freeze on a lined tray for at least 2 hours.",
        "Toddler tip: skip the stick and serve thin frozen slices; no honey under 1."
      ],
      "es": [
        "Clavar un palito en cada mitad de banana.",
        "Mezclar el yogur con la miel; bañar las bananas y pasarlas por la granola.",
        "Congelar sobre una bandeja forrada al menos 2 horas.",
        "Consejo para pequeños: sin palito, servir rodajas finas congeladas; sin miel antes del año."
      ]
    },
    "tip": {
      "en": "A cold treat with potassium and calcium — no added sugar needed.",
      "es": "Un postre frío con potasio y calcio — sin azúcar agregada."
    },
    "prep": [
      "banana-pops"
    ]
  },
  {
    "id": "baked-apple-chips",
    "type": "snack",
    "group": "fruit",
    "tags": [
      "apple"
    ],
    "name": {
      "en": "Baked Cinnamon Apple Chips",
      "es": "Chips de Manzana con Canela"
    },
    "ing": {
      "en": [
        "4 apples, very thinly sliced",
        "1 tsp cinnamon"
      ],
      "es": [
        "4 manzanas en láminas muy finas",
        "1 cdita canela"
      ]
    },
    "steps": {
      "en": [
        "Preheat oven to 110°C / 225°F; line 2 trays.",
        "Lay the apple slices flat and dust with cinnamon.",
        "Bake 1½–2 hours, flipping once, until crisp.",
        "Cool completely; store in an airtight jar.",
        "Toddler tip: offer softer, less-baked slices — crisp chips can be hard to chew."
      ],
      "es": [
        "Precalentar el horno a 110 °C; forrar 2 bandejas.",
        "Acomodar las láminas de manzana y espolvorear con canela.",
        "Hornear 1½–2 horas, dando vuelta una vez, hasta que estén crocantes.",
        "Enfriar por completo; guardar en un frasco hermético.",
        "Consejo para pequeños: ofrecer láminas menos horneadas — las muy crocantes cuestan masticar."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    },
    "prep": [
      "apple-chips"
    ]
  },
  {
    "id": "melon-and-grape-skewers",
    "type": "snack",
    "group": "fruit",
    "tags": [
      "skewers"
    ],
    "name": {
      "en": "Melon & Grape Skewers",
      "es": "Brochetas de Melón y Uvas"
    },
    "ing": {
      "en": [
        "½ melon, cubed",
        "2 cups grapes",
        "Wooden skewers"
      ],
      "es": [
        "½ melón en cubos",
        "2 tazas uvas",
        "Palitos de brochette de madera"
      ]
    },
    "steps": {
      "en": [
        "Thread melon cubes and grapes onto skewers.",
        "Chill until snack time.",
        "Toddler tip: serve off the stick with grapes quartered lengthwise."
      ],
      "es": [
        "Ensartar los cubos de melón y las uvas en los palitos.",
        "Enfriar hasta la merienda.",
        "Consejo para pequeños: servir sin palito, con las uvas cortadas en cuartos a lo largo."
      ]
    },
    "tip": {
      "en": "Juicy and hydrating — handy on warm afternoons.",
      "es": "Jugoso e hidratante — ideal para las tardes calurosas."
    }
  },
  {
    "id": "mango-lassi",
    "type": "snack",
    "group": "fruit",
    "tags": [
      "smoothie"
    ],
    "name": {
      "en": "Mango Lassi",
      "es": "Lassi de Mango"
    },
    "ing": {
      "en": [
        "2 cups frozen mango",
        "2 cups Greek yogurt",
        "1 cup milk",
        "1 tbsp honey",
        "Pinch of cinnamon"
      ],
      "es": [
        "2 tazas mango congelado",
        "2 tazas yogur griego",
        "1 taza leche",
        "1 cda miel",
        "Pizca de canela"
      ]
    },
    "steps": {
      "en": [
        "Blend everything until smooth and frothy.",
        "Pour into glasses and dust with cinnamon.",
        "Toddler tip: serve in a cup with a lid; no honey under 1."
      ],
      "es": [
        "Licuar todo hasta que quede liso y espumoso.",
        "Servir en vasos y espolvorear con canela.",
        "Consejo para pequeños: servir en vaso con tapa; sin miel antes del año."
      ]
    },
    "tip": {
      "en": "Probiotic yogurt plus vitamin C from the mango.",
      "es": "Yogur con probióticos más la vitamina C del mango."
    }
  },
  {
    "id": "peanut-butter-stuffed-dates",
    "type": "snack",
    "group": "fruit",
    "tags": [
      "nut-butter"
    ],
    "name": {
      "en": "Peanut Butter Stuffed Dates",
      "es": "Dátiles Rellenos con Mantequilla de Maní"
    },
    "ing": {
      "en": [
        "12 dates, pitted",
        "3 tbsp peanut butter",
        "2 apples, sliced"
      ],
      "es": [
        "12 dátiles sin carozo",
        "3 cdas mantequilla de maní",
        "2 manzanas en gajos"
      ]
    },
    "steps": {
      "en": [
        "Slit each date open and check the pit is out.",
        "Fill with a little peanut butter.",
        "Serve with apple slices.",
        "Toddler tip: chop dates into small pieces — whole dates are a choking risk."
      ],
      "es": [
        "Abrir cada dátil y verificar que no tenga carozo.",
        "Rellenar con un poco de mantequilla de maní.",
        "Servir con gajos de manzana.",
        "Consejo para pequeños: picar los dátiles en trocitos — enteros son riesgo de atragantamiento."
      ]
    },
    "tip": {
      "en": "Dates give natural sweetness, fibre, and iron.",
      "es": "Los dátiles aportan dulzor natural, fibra y hierro."
    }
  },
  {
    "id": "pineapple-and-orange-cups",
    "type": "snack",
    "group": "fruit",
    "name": {
      "en": "Pineapple & Orange Fruit Cups",
      "es": "Vasitos de Ananá y Naranja"
    },
    "ing": {
      "en": [
        "2 cups pineapple chunks",
        "3 oranges, segmented",
        "1 cup strawberries, halved",
        "Fresh mint leaves (optional)"
      ],
      "es": [
        "2 tazas ananá en trozos",
        "3 naranjas en gajos",
        "1 taza frutillas en mitades",
        "Hojas de menta fresca (opcional)"
      ]
    },
    "steps": {
      "en": [
        "Mix the fruit in a bowl.",
        "Spoon into small cups and top with torn mint.",
        "Toddler tip: cut everything into small, soft pieces."
      ],
      "es": [
        "Mezclar la fruta en un bol.",
        "Servir en vasitos y decorar con menta.",
        "Consejo para pequeños: cortar todo en trocitos chicos y blandos."
      ]
    },
    "tip": {
      "en": "A vitamin C boost that helps the body absorb iron from other meals.",
      "es": "Un refuerzo de vitamina C que ayuda a absorber el hierro de otras comidas."
    }
  },
  {
    "id": "mini-cheese-quesadillas",
    "type": "snack",
    "group": "dairy",
    "tags": [
      "tortilla"
    ],
    "name": {
      "en": "Mini Cheese Quesadillas",
      "es": "Mini Quesadillas de Queso"
    },
    "ing": {
      "en": [
        "4 small flour tortillas",
        "1 cup shredded cheese",
        "1 cucumber, sliced"
      ],
      "es": [
        "4 tortillas de harina pequeñas",
        "1 taza queso rallado",
        "1 pepino en rodajas"
      ]
    },
    "steps": {
      "en": [
        "Sprinkle cheese over half of each tortilla and fold.",
        "Toast in a dry pan 1–2 min per side until melted.",
        "Cut into wedges; serve with cucumber.",
        "Toddler tip: let cool a little and cut into strips."
      ],
      "es": [
        "Espolvorear queso sobre media tortilla y doblar.",
        "Dorar en sartén seca 1–2 min por lado hasta que se derrita.",
        "Cortar en triángulos; servir con pepino.",
        "Consejo para pequeños: dejar entibiar y cortar en tiras."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "ricotta-with-honey-and-berries",
    "type": "snack",
    "group": "dairy",
    "name": {
      "en": "Ricotta with Honey & Berries",
      "es": "Ricota con Miel y Frutos Rojos"
    },
    "ing": {
      "en": [
        "250g ricotta",
        "1 cup mixed berries (fresh or frozen)",
        "1 tbsp honey",
        "Handful of crackers"
      ],
      "es": [
        "250 g ricota",
        "1 taza frutas del bosque (frescas o congeladas)",
        "1 cda miel",
        "Un puñado de galletas"
      ]
    },
    "steps": {
      "en": [
        "Spoon ricotta into small bowls.",
        "Top with berries and a drizzle of honey.",
        "Serve with crackers for scooping.",
        "Toddler tip: mash the berries in; no honey under 1."
      ],
      "es": [
        "Servir la ricota en bols chicos.",
        "Cubrir con frutas del bosque y un hilo de miel.",
        "Acompañar con galletas para untar.",
        "Consejo para pequeños: pisar las frutas; sin miel antes del año."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "berry-yogurt-bark",
    "type": "snack",
    "group": "dairy",
    "tags": [
      "yogurt",
      "frozen"
    ],
    "name": {
      "en": "Berry Yogurt Bark",
      "es": "Barrita Helada de Yogur y Frutos Rojos"
    },
    "ing": {
      "en": [
        "2 cups Greek yogurt",
        "2 tbsp honey",
        "1 cup mixed berries (fresh or frozen)",
        "2 tbsp granola"
      ],
      "es": [
        "2 tazas yogur griego",
        "2 cdas miel",
        "1 taza frutas del bosque (frescas o congeladas)",
        "2 cdas granola"
      ]
    },
    "steps": {
      "en": [
        "Mix yogurt with honey and spread 1 cm thick on a lined tray.",
        "Scatter berries and granola on top.",
        "Freeze 3 hours, then break into pieces.",
        "Toddler tip: let pieces soften for a minute; no honey under 1."
      ],
      "es": [
        "Mezclar el yogur con la miel y extender en 1 cm sobre una bandeja forrada.",
        "Esparcir las frutas y la granola por encima.",
        "Congelar 3 horas y romper en trozos.",
        "Consejo para pequeños: dejar que se ablanden un minuto; sin miel antes del año."
      ]
    },
    "tip": {
      "en": "Keeps in the freezer for a week — a cool, calcium-rich snack.",
      "es": "Dura una semana en el freezer — una merienda fresca y rica en calcio."
    },
    "prep": [
      "yogurt-bark"
    ]
  },
  {
    "id": "mozzarella-and-tomato-skewers",
    "type": "snack",
    "group": "dairy",
    "tags": [
      "skewers"
    ],
    "name": {
      "en": "Mozzarella & Tomato Skewers",
      "es": "Brochetas Caprese"
    },
    "ing": {
      "en": [
        "200g mozzarella balls",
        "1 cup cherry tomatoes",
        "Fresh basil leaves",
        "1 tsp olive oil",
        "Wooden skewers"
      ],
      "es": [
        "200 g bocconcinos de mozzarella",
        "1 taza tomates cherry",
        "Hojas de albahaca fresca",
        "1 cdita aceite de oliva",
        "Palitos de brochette de madera"
      ]
    },
    "steps": {
      "en": [
        "Thread tomatoes, basil, and mozzarella onto skewers.",
        "Drizzle with a little olive oil.",
        "Toddler tip: off the stick, with tomatoes and mozzarella quartered."
      ],
      "es": [
        "Ensartar tomates, albahaca y mozzarella en los palitos.",
        "Rociar con un poco de aceite de oliva.",
        "Consejo para pequeños: sin palito, con tomates y mozzarella en cuartos."
      ]
    },
    "tip": {
      "en": "Choose pasteurised mozzarella during pregnancy.",
      "es": "Elegí mozzarella pasteurizada durante el embarazo."
    }
  },
  {
    "id": "veggie-sticks-with-yogurt-ranch",
    "type": "snack",
    "group": "veg",
    "name": {
      "en": "Veggie Sticks with Yogurt Ranch",
      "es": "Bastones de Verdura con Dip de Yogur"
    },
    "ing": {
      "en": [
        "3 carrots, cut into sticks",
        "1 cucumber, cut into sticks",
        "1 red bell pepper, cut into strips",
        "1 cup Greek yogurt",
        "1 tsp garlic powder",
        "Fresh dill",
        "Salt"
      ],
      "es": [
        "3 zanahorias en bastones",
        "1 pepino en bastones",
        "1 morrón rojo en tiras",
        "1 taza yogur griego",
        "1 cdita ajo en polvo",
        "Eneldo fresco",
        "Sal"
      ]
    },
    "steps": {
      "en": [
        "Mix yogurt, garlic powder, chopped dill, and a pinch of salt.",
        "Arrange the veggie sticks around the dip.",
        "Toddler tip: steam the carrot sticks 3 min so they are soft enough."
      ],
      "es": [
        "Mezclar el yogur con el ajo en polvo, el eneldo picado y una pizca de sal.",
        "Acomodar los bastones de verdura alrededor del dip.",
        "Consejo para pequeños: cocinar al vapor los bastones de zanahoria 3 min para que estén blandos."
      ]
    },
    "tip": {
      "en": "Crunchy, colourful, and a sneaky extra portion of vegetables.",
      "es": "Crocante, colorido y una porción extra de verduras."
    }
  },
  {
    "id": "edamame-with-sea-salt",
    "type": "snack",
    "group": "veg",
    "name": {
      "en": "Edamame with Sea Salt",
      "es": "Edamame con Sal"
    },
    "ing": {
      "en": [
        "400g frozen edamame in pods",
        "Salt",
        "Juice of 1 lime"
      ],
      "es": [
        "400 g edamame congelado en vaina",
        "Sal",
        "Jugo de 1 lima"
      ]
    },
    "steps": {
      "en": [
        "Boil the edamame 4–5 min; drain.",
        "Toss with salt and lime juice.",
        "Pop the beans out of the pods to eat.",
        "Toddler tip: pod the beans and lightly squash them."
      ],
      "es": [
        "Hervir el edamame 4–5 min; escurrir.",
        "Mezclar con sal y jugo de lima.",
        "Sacar los porotos de la vaina para comerlos.",
        "Consejo para pequeños: sacar los porotos de la vaina y aplastarlos un poco."
      ]
    },
    "tip": {
      "en": "Plant protein, folate, and fun to eat with your hands.",
      "es": "Proteína vegetal, folato y divertido de comer con la mano."
    }
  },
  {
    "id": "guacamole-with-tortilla-chips",
    "type": "snack",
    "group": "veg",
    "tags": [
      "avocado-snack"
    ],
    "name": {
      "en": "Guacamole with Baked Tortilla Chips",
      "es": "Guacamole con Nachos Horneados"
    },
    "ing": {
      "en": [
        "3 ripe avocados",
        "1 tomato, finely diced",
        "Juice of 1 lime",
        "Fresh cilantro, chopped",
        "6 corn tortillas, cut into chips",
        "1 tbsp olive oil",
        "Salt"
      ],
      "es": [
        "3 paltas maduras",
        "1 tomate picado fino",
        "Jugo de 1 lima",
        "Cilantro fresco picado",
        "6 tortillas de maíz cortadas en triángulos",
        "1 cda aceite de oliva",
        "Sal"
      ]
    },
    "steps": {
      "en": [
        "Brush tortilla triangles with olive oil and bake at 200°C / 400°F for 8–10 min until crisp.",
        "Mash avocados with lime juice and salt; stir in tomato and cilantro.",
        "Serve the guacamole with the warm chips.",
        "Toddler tip: guacamole on soft tortilla strips instead of crisp chips."
      ],
      "es": [
        "Pincelar los triángulos de tortilla con aceite y hornear a 200 °C 8–10 min hasta que estén crocantes.",
        "Pisar las paltas con el jugo de lima y sal; agregar el tomate y el cilantro.",
        "Servir el guacamole con los nachos tibios.",
        "Consejo para pequeños: guacamole sobre tiras de tortilla blanda en lugar de nachos crocantes."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "cucumber-cream-cheese-bites",
    "type": "snack",
    "group": "veg",
    "name": {
      "en": "Cucumber & Cream Cheese Bites",
      "es": "Bocaditos de Pepino y Queso Crema"
    },
    "ing": {
      "en": [
        "2 cucumbers, cut into thick rounds",
        "150g cream cheese",
        "Fresh dill",
        "1 cup cherry tomatoes, halved"
      ],
      "es": [
        "2 pepinos en rodajas gruesas",
        "150 g queso crema",
        "Eneldo fresco",
        "1 taza tomates cherry en mitades"
      ]
    },
    "steps": {
      "en": [
        "Top each cucumber round with a little cream cheese.",
        "Sprinkle with chopped dill and add half a cherry tomato.",
        "Toddler tip: peel the cucumber and quarter the tomatoes."
      ],
      "es": [
        "Cubrir cada rodaja de pepino con un poco de queso crema.",
        "Espolvorear con eneldo picado y agregar medio tomate cherry.",
        "Consejo para pequeños: pelar el pepino y cortar los tomates en cuartos."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "homemade-popcorn",
    "type": "snack",
    "group": "grain",
    "name": {
      "en": "Homemade Popcorn",
      "es": "Pochoclos Caseros"
    },
    "ing": {
      "en": [
        "½ cup popcorn kernels",
        "1 tbsp olive oil",
        "1 tbsp butter, melted",
        "Salt"
      ],
      "es": [
        "½ taza maíz pisingallo",
        "1 cda aceite de oliva",
        "1 cda manteca derretida",
        "Sal"
      ]
    },
    "steps": {
      "en": [
        "Heat oil in a large pot with a lid; add kernels and cover.",
        "Shake the pot as it pops; take off the heat when popping slows.",
        "Toss with melted butter and a pinch of salt.",
        "Toddler tip: not for under-4s — popcorn is a choking hazard; offer rice cakes instead."
      ],
      "es": [
        "Calentar el aceite en una olla grande con tapa; agregar el maíz y tapar.",
        "Sacudir la olla mientras explota; retirar cuando baje el ritmo.",
        "Mezclar con la manteca derretida y una pizca de sal.",
        "Consejo para pequeños: no para menores de 4 años — los pochoclos son riesgo de atragantamiento; ofrecer galletas de arroz."
      ]
    },
    "tip": {
      "en": "A whole-grain snack with plenty of fibre.",
      "es": "Un snack integral con mucha fibra."
    }
  },
  {
    "id": "oat-and-date-energy-balls",
    "type": "snack",
    "group": "grain",
    "tags": [
      "nut-butter"
    ],
    "name": {
      "en": "Oat & Date Energy Balls",
      "es": "Bolitas Energéticas de Avena y Dátiles"
    },
    "ing": {
      "en": [
        "1 cup dates, pitted",
        "1 cup rolled oats",
        "3 tbsp peanut butter",
        "2 tbsp cocoa powder",
        "1 tbsp chia seeds"
      ],
      "es": [
        "1 taza dátiles sin carozo",
        "1 taza avena arrollada",
        "3 cdas mantequilla de maní",
        "2 cdas cacao en polvo",
        "1 cda semillas de chía"
      ]
    },
    "steps": {
      "en": [
        "Blitz dates in a food processor until sticky.",
        "Add oats, peanut butter, cocoa, and chia; pulse to combine.",
        "Roll into 16 balls and chill 30 min.",
        "Toddler tip: flatten into small discs so they are easier to chew."
      ],
      "es": [
        "Procesar los dátiles hasta que quede una pasta.",
        "Agregar la avena, la mantequilla de maní, el cacao y la chía; procesar para unir.",
        "Formar 16 bolitas y enfriar 30 min.",
        "Consejo para pequeños: aplastarlas en discos chicos para que sea más fácil masticar."
      ]
    },
    "tip": {
      "en": "They keep a week in the fridge — a quick energy boost for mom.",
      "es": "Duran una semana en la heladera — un golpe de energía rápido para mamá."
    },
    "prep": [
      "energy-balls"
    ]
  },
  {
    "id": "oatmeal-raisin-cookies",
    "type": "snack",
    "group": "grain",
    "tags": [
      "cookies"
    ],
    "name": {
      "en": "Soft Oatmeal Raisin Cookies",
      "es": "Galletitas Blandas de Avena y Pasas"
    },
    "ing": {
      "en": [
        "1½ cups rolled oats",
        "¾ cup flour",
        "1 tsp baking powder",
        "1 tsp cinnamon",
        "2 ripe bananas, mashed",
        "1 egg",
        "3 tbsp butter, melted",
        "⅓ cup raisins",
        "2 cups milk, to drink"
      ],
      "es": [
        "1½ tazas avena arrollada",
        "¾ taza harina",
        "1 cdita polvo para hornear",
        "1 cdita canela",
        "2 bananas maduras pisadas",
        "1 huevo",
        "3 cdas manteca derretida",
        "⅓ taza pasas de uva",
        "2 tazas leche, para tomar"
      ]
    },
    "steps": {
      "en": [
        "Preheat oven to 180°C / 350°F; line a tray.",
        "Mix banana, egg, and butter; stir in oats, flour, baking powder, cinnamon, and raisins.",
        "Drop spoonfuls on the tray and flatten slightly.",
        "Bake 12–14 min; cool, then serve with milk.",
        "Toddler tip: make a few without raisins and break into pieces."
      ],
      "es": [
        "Precalentar el horno a 180 °C; forrar una bandeja.",
        "Mezclar la banana, el huevo y la manteca; incorporar la avena, la harina, el polvo para hornear, la canela y las pasas.",
        "Poner cucharadas en la bandeja y aplastar un poco.",
        "Hornear 12–14 min; enfriar y servir con leche.",
        "Consejo para pequeños: hacer algunas sin pasas y romperlas en trocitos."
      ]
    },
    "tip": {
      "en": "Sweetened mostly with banana — far less sugar than store cookies.",
      "es": "Endulzadas casi solo con banana — mucha menos azúcar que las compradas."
    },
    "prep": [
      "oat-cookies"
    ]
  },
  {
    "id": "pita-chips-with-tzatziki",
    "type": "snack",
    "group": "grain",
    "tags": [
      "pita"
    ],
    "name": {
      "en": "Baked Pita Chips with Tzatziki",
      "es": "Chips de Pan Pita con Tzatziki"
    },
    "ing": {
      "en": [
        "4 pita breads, cut into triangles",
        "1 tbsp olive oil",
        "1 cup Greek yogurt",
        "1 cucumber, grated",
        "1 clove garlic, grated",
        "Fresh dill",
        "Salt"
      ],
      "es": [
        "4 panes pita en triángulos",
        "1 cda aceite de oliva",
        "1 taza yogur griego",
        "1 pepino rallado",
        "1 diente de ajo rallado",
        "Eneldo fresco",
        "Sal"
      ]
    },
    "steps": {
      "en": [
        "Brush pita triangles with oil; bake at 200°C / 400°F for 8 min until crisp.",
        "Squeeze the grated cucumber dry; mix with yogurt, garlic, dill, and salt.",
        "Serve the chips with the tzatziki.",
        "Toddler tip: soft warm pita strips instead of crisp chips."
      ],
      "es": [
        "Pincelar los triángulos de pita con aceite; hornear a 200 °C 8 min hasta que estén crocantes.",
        "Escurrir bien el pepino rallado; mezclar con el yogur, el ajo, el eneldo y sal.",
        "Servir los chips con el tzatziki.",
        "Consejo para pequeños: tiras de pita tibia y blanda en lugar de chips."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "apple-donuts",
    "type": "snack",
    "group": "fruit",
    "tags": [
      "apple",
      "nut-butter"
    ],
    "experimental": true,
    "name": {
      "en": "Apple \"Donuts\"",
      "es": "\"Donas\" de Manzana"
    },
    "ing": {
      "en": [
        "3 apples, cored and sliced into rings",
        "½ cup Greek yogurt",
        "2 tbsp peanut butter",
        "2 tbsp granola",
        "1 tbsp sunflower seeds"
      ],
      "es": [
        "3 manzanas sin el centro, en aros",
        "½ taza yogur griego",
        "2 cdas mantequilla de maní",
        "2 cdas granola",
        "1 cda semillas de girasol"
      ]
    },
    "steps": {
      "en": [
        "Pat the apple rings dry.",
        "Spread half with yogurt and half with peanut butter.",
        "Sprinkle with granola and seeds like donut toppings.",
        "Toddler tip: thin apple rings, yogurt topping, no seeds."
      ],
      "es": [
        "Secar los aros de manzana.",
        "Untar la mitad con yogur y la otra mitad con mantequilla de maní.",
        "Espolvorear con granola y semillas como si fueran donas.",
        "Consejo para pequeños: aros finos de manzana, con yogur y sin semillas."
      ]
    },
    "tip": {
      "en": "Fun to decorate — and it is just fruit underneath.",
      "es": "Divertidas de decorar — y abajo es solo fruta."
    }
  },
  {
    "id": "crispy-roasted-chickpeas",
    "type": "snack",
    "group": "veg",
    "experimental": true,
    "name": {
      "en": "Crispy Roasted Chickpeas",
      "es": "Garbanzos Crocantes al Horno"
    },
    "ing": {
      "en": [
        "2 cans (400g each) chickpeas, drained",
        "1 tbsp olive oil",
        "1 tsp paprika",
        "½ tsp garlic powder",
        "Salt"
      ],
      "es": [
        "2 latas (400 g c/u) garbanzos escurridos",
        "1 cda aceite de oliva",
        "1 cdita pimentón",
        "½ cdita ajo en polvo",
        "Sal"
      ]
    },
    "steps": {
      "en": [
        "Dry the chickpeas very well with a towel.",
        "Toss with oil, paprika, garlic powder, and salt.",
        "Roast at 200°C / 400°F for 30–35 min, shaking halfway, until crunchy.",
        "Toddler tip: not for little ones (choking risk) — give them soft hummus instead."
      ],
      "es": [
        "Secar muy bien los garbanzos con un repasador.",
        "Mezclar con aceite, pimentón, ajo en polvo y sal.",
        "Hornear a 200 °C 30–35 min, sacudiendo a mitad, hasta que estén crocantes.",
        "Consejo para pequeños: no para los más chicos (riesgo de atragantamiento) — mejor hummus blando."
      ]
    },
    "tip": {
      "en": "Crunchy like chips, but full of plant protein and fibre.",
      "es": "Crocantes como papas fritas, pero llenos de proteína vegetal y fibra."
    }
  },
  {
    "id": "avocado-chocolate-mousse",
    "type": "snack",
    "group": "fruit",
    "experimental": true,
    "name": {
      "en": "Avocado Chocolate Mousse",
      "es": "Mousse de Chocolate y Palta"
    },
    "ing": {
      "en": [
        "2 ripe avocados",
        "2 ripe bananas",
        "3 tbsp cocoa powder",
        "2 tbsp honey",
        "¼ cup milk",
        "1 cup mixed berries (fresh or frozen)"
      ],
      "es": [
        "2 paltas maduras",
        "2 bananas maduras",
        "3 cdas cacao en polvo",
        "2 cdas miel",
        "¼ taza leche",
        "1 taza frutas del bosque (frescas o congeladas)"
      ]
    },
    "steps": {
      "en": [
        "Blend avocados, bananas, cocoa, honey, and milk until silky.",
        "Spoon into small cups and chill 30 min.",
        "Top with berries.",
        "Toddler tip: no honey under 1 — the banana sweetens it."
      ],
      "es": [
        "Licuar las paltas, las bananas, el cacao, la miel y la leche hasta que quede sedoso.",
        "Servir en vasitos y enfriar 30 min.",
        "Cubrir con frutas del bosque.",
        "Consejo para pequeños: sin miel antes del año — la banana la endulza."
      ]
    },
    "tip": {
      "en": "Nobody guesses the avocado — healthy fats in a chocolate cup.",
      "es": "Nadie adivina la palta — grasas saludables en un vasito de chocolate."
    }
  },
  {
    "id": "beef-and-lentil-soup-with-bread",
    "type": "dinner",
    "protein": "beef",
    "base": "bread",
    "tags": [
      "soup",
      "lentil"
    ],
    "name": {
      "en": "Beef & Lentil Soup with Bread",
      "es": "Sopa de Carne y Lentejas con Pan"
    },
    "ing": {
      "en": [
        "500g ground beef",
        "1 cup dry red lentils (or pre-cooked)",
        "2 carrots, diced",
        "2 celery stalks, diced",
        "1 onion, diced",
        "2 cloves garlic",
        "1 can (400g) diced tomatoes",
        "1L beef broth",
        "1 tsp cumin",
        "Salt & pepper",
        "Olive oil",
        "Crusty bread to serve"
      ],
      "es": [
        "500 g carne picada",
        "1 taza lentejas rojas secas (o pre-cocidas)",
        "2 zanahorias picadas",
        "2 tallos de apio picados",
        "1 cebolla picada",
        "2 dientes de ajo",
        "1 lata (400 g) tomates picados",
        "1 L caldo de carne",
        "1 cdita comino",
        "Sal y pimienta",
        "Aceite de oliva",
        "Pan de campo para servir"
      ]
    },
    "steps": {
      "en": [
        "Heat olive oil in a large pot; brown the beef 5–6 min, breaking it up (skip if browned ahead).",
        "Add onion, garlic, carrots, and celery; sauté 5 min until soft.",
        "Add lentils, tomatoes, and broth. Bring to a boil.",
        "Reduce heat, cover, simmer 25–30 min until lentils are tender.",
        "Season with cumin, salt, and pepper.",
        "Serve with crusty bread."
      ],
      "es": [
        "Calentar aceite en una olla grande; dorar la carne 5–6 min, desarmándola (omitir si ya está dorada).",
        "Agregar la cebolla, el ajo, las zanahorias y el apio; saltear 5 min hasta ablandar.",
        "Agregar las lentejas, los tomates y el caldo. Llevar a hervor.",
        "Reducir el fuego, tapar y cocinar a fuego lento 25–30 min hasta que las lentejas estén tiernas.",
        "Condimentar con comino, sal y pimienta.",
        "Servir con pan de campo."
      ]
    },
    "tip": {
      "en": "Iron-rich meal for mom — lentils + red meat is a great combination in the third trimester!",
      "es": "¡Plato rico en hierro para mamá — lentejas y carne roja son una combinación excelente en el tercer trimestre!"
    },
    "prep": [
      "brown-beef"
    ]
  },
  {
    "id": "baked-salmon-sweet-potato-and-broccoli",
    "type": "dinner",
    "protein": "fish",
    "base": "potato",
    "tags": [
      "salmon"
    ],
    "name": {
      "en": "Baked Salmon, Sweet Potato & Broccoli",
      "es": "Salmón al Horno con Batata y Brócoli"
    },
    "ing": {
      "en": [
        "4 salmon fillets (180g each)",
        "2 large sweet potatoes, cubed",
        "2 cups broccoli florets",
        "2 tbsp olive oil",
        "1 lemon (zest + wedges)",
        "2 cloves garlic, minced",
        "Fresh dill or parsley",
        "Salt & pepper"
      ],
      "es": [
        "4 filetes de salmón (180 g c/u)",
        "2 batatas grandes en cubos",
        "2 tazas floretes de brócoli",
        "2 cdas aceite de oliva",
        "1 limón (ralladura + gajos)",
        "2 dientes de ajo picados",
        "Eneldo o perejil fresco",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Preheat oven to 200°C / 400°F.",
        "Toss sweet potato cubes with 1 tbsp olive oil, salt, pepper; spread on baking sheet.",
        "Roast potatoes 20 min; push to sides of pan.",
        "Season salmon with lemon zest, garlic, remaining oil, salt, and herbs; add to center.",
        "Add broccoli florets around salmon; drizzle with oil.",
        "Bake 12–15 min until salmon flakes easily.",
        "Squeeze fresh lemon over everything before serving."
      ],
      "es": [
        "Precalentar el horno a 200 °C.",
        "Mezclar los cubos de batata con 1 cda de aceite, sal y pimienta; distribuir en la asadera.",
        "Asar las batatas 20 min; empujar hacia los costados.",
        "Condimentar el salmón con ralladura de limón, ajo, el aceite restante, sal y hierbas; colocar en el centro.",
        "Agregar el brócoli alrededor del salmón; rociar con aceite.",
        "Hornear 12–15 min hasta que el salmón se desmenuce fácilmente.",
        "Exprimir limón fresco sobre todo antes de servir."
      ]
    },
    "tip": {
      "en": "Salmon is one of the best foods during pregnancy — rich in omega-3 DHA, vitamin D, and protein. Great for baby's brain development!",
      "es": "El salmón es uno de los mejores alimentos durante el embarazo — rico en DHA omega-3, vitamina D y proteínas. ¡Ideal para el desarrollo cerebral del bebé!"
    }
  },
  {
    "id": "pork-tenderloin-mashed-potatoes-and-green-beans",
    "type": "dinner",
    "protein": "pork",
    "base": "potato",
    "tags": [
      "pork-tenderloin"
    ],
    "name": {
      "en": "Pork Tenderloin, Mashed Potatoes & Green Beans",
      "es": "Lomo de Cerdo con Puré de Papas y Chauchas"
    },
    "ing": {
      "en": [
        "700g pork tenderloin",
        "4 large potatoes, peeled & cubed",
        "400g green beans",
        "3 cloves garlic, minced",
        "1 tbsp olive oil",
        "1 tsp rosemary",
        "1 tsp thyme",
        "3 tbsp butter",
        "½ cup warm milk",
        "Salt & pepper"
      ],
      "es": [
        "700 g lomo de cerdo",
        "4 papas grandes peladas y en cubos",
        "400 g chauchas",
        "3 dientes de ajo picados",
        "1 cda aceite de oliva",
        "1 cdita romero",
        "1 cdita tomillo",
        "3 cdas manteca",
        "½ taza leche tibia",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Preheat oven to 200°C / 400°F.",
        "Rub pork with garlic, rosemary, thyme, olive oil, salt, and pepper.",
        "Roast pork 25–30 min until internal temp reaches 63°C / 145°F.",
        "Meanwhile, boil potatoes until fork-tender (~15 min); drain.",
        "Mash with butter, warm milk, salt, and pepper.",
        "Steam green beans 4–5 min until tender-crisp.",
        "Rest pork 5 min, then slice and serve."
      ],
      "es": [
        "Precalentar el horno a 200 °C.",
        "Frotar el lomo con ajo, romero, tomillo, aceite, sal y pimienta.",
        "Asar 25–30 min hasta que la temperatura interna llegue a 63 °C.",
        "Mientras tanto, hervir las papas hasta que estén tiernas (~15 min); escurrir.",
        "Hacer puré con manteca, leche tibia, sal y pimienta.",
        "Cocinar las chauchas al vapor 4–5 min hasta que estén tiernas pero firmes.",
        "Dejar reposar el lomo 5 min, luego cortar y servir."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "paprika-chicken-thighs-and-roasted-veggies",
    "type": "dinner",
    "protein": "poultry",
    "base": "potato",
    "tags": [
      "traybake"
    ],
    "name": {
      "en": "Paprika Chicken Thighs & Roasted Veggies",
      "es": "Muslos de Pollo al Pimentón con Verduras Asadas"
    },
    "ing": {
      "en": [
        "8 bone-in chicken thighs",
        "3 potatoes, quartered",
        "2 bell peppers, chunked",
        "2 zucchini, chunked",
        "1 onion, wedged",
        "3 cloves garlic, minced",
        "2 tbsp smoked paprika",
        "3 tbsp olive oil",
        "Salt & pepper"
      ],
      "es": [
        "8 muslos de pollo con hueso",
        "3 papas en cuartos",
        "2 morrones en trozos",
        "2 zapallitos en trozos",
        "1 cebolla en gajos",
        "3 dientes de ajo picados",
        "2 cdas pimentón ahumado",
        "3 cdas aceite de oliva",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Preheat oven to 220°C / 425°F.",
        "Toss chicken thighs with paprika, garlic, 2 tbsp oil, salt, and pepper.",
        "Toss potato, bell pepper, zucchini, and onion with remaining oil and salt.",
        "Spread vegetables in a large roasting pan; nestle chicken on top.",
        "Roast 35–40 min until chicken skin is crispy and temp reaches 74°C / 165°F.",
        "Toddler tip: shred chicken, serve with soft roasted potato pieces."
      ],
      "es": [
        "Precalentar el horno a 220 °C.",
        "Condimentar los muslos con pimentón, ajo, 2 cdas de aceite, sal y pimienta.",
        "Mezclar las papas, los morrones, los zapallitos y la cebolla con el aceite restante y sal.",
        "Distribuir las verduras en una asadera grande; acomodar el pollo encima.",
        "Asar 35–40 min hasta que la piel esté crocante y la temperatura interna llegue a 74 °C.",
        "Consejo para pequeños: desmenuzar el pollo, servir con trozos de papa blanda asada."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "beef-and-broccoli-noodles",
    "type": "dinner",
    "protein": "beef",
    "base": "pasta",
    "tags": [
      "beef-broccoli",
      "stir-fry-noodles"
    ],
    "name": {
      "en": "Beef & Broccoli Noodles",
      "es": "Fideos con Carne y Brócoli"
    },
    "ing": {
      "en": [
        "500g beef sirloin, thin strips",
        "2 cups broccoli florets",
        "340g egg noodles",
        "3 tbsp soy sauce",
        "1 tbsp oyster sauce",
        "2 cloves garlic, minced",
        "1 tsp fresh ginger, grated",
        "1 tbsp sesame oil",
        "2 tbsp cooking oil"
      ],
      "es": [
        "500 g bife de lomo fino en tiras",
        "2 tazas floretes de brócoli",
        "340 g fideos de huevo",
        "3 cdas salsa de soja",
        "1 cda salsa de ostras",
        "2 dientes de ajo picados",
        "1 cdita jengibre fresco rallado",
        "1 cda aceite de sésamo",
        "2 cdas aceite para cocinar"
      ]
    },
    "steps": {
      "en": [
        "Cook noodles per package instructions; drain and set aside.",
        "Mix soy sauce, oyster sauce, ginger, and sesame oil in a small bowl.",
        "Heat cooking oil in wok on high heat; sear beef strips 2–3 min until browned.",
        "Add garlic and broccoli; stir-fry 4 min until broccoli is bright green.",
        "Pour sauce over; toss to coat.",
        "Add cooked noodles; toss and mix well. Serve hot."
      ],
      "es": [
        "Cocinar los fideos según las instrucciones del paquete; escurrir y reservar.",
        "Mezclar la salsa de soja, la salsa de ostras, el jengibre y el aceite de sésamo en un bol pequeño.",
        "Calentar el aceite en wok a fuego alto; sellar las tiras de carne 2–3 min hasta dorar.",
        "Agregar el ajo y el brócoli; saltear 4 min hasta que el brócoli esté verde brillante.",
        "Verter la salsa; mezclar para cubrir.",
        "Agregar los fideos cocidos; mezclar bien. Servir caliente."
      ]
    },
    "tip": {
      "en": "Good iron from beef — remember vitamin C helps iron absorption, squeeze lemon or have some orange juice with this!",
      "es": "¡Buen hierro de la carne — recordá que la vitamina C ayuda a absorber el hierro; exprimí limón o tomá jugo de naranja con esto!"
    }
  },
  {
    "id": "pork-chops-with-apple-sauce-and-roasted-potatoes",
    "type": "dinner",
    "protein": "pork",
    "base": "potato",
    "name": {
      "en": "Pork Chops with Apple Sauce & Roasted Potatoes",
      "es": "Chuletas de Cerdo con Compota de Manzana y Papas Asadas"
    },
    "ing": {
      "en": [
        "4 pork chops",
        "4 medium potatoes, cubed",
        "2 apples, peeled & diced",
        "2 tbsp brown sugar",
        "1 tsp cinnamon",
        "1 tsp garlic powder",
        "1 tsp thyme",
        "2 tbsp olive oil",
        "Salt & pepper"
      ],
      "es": [
        "4 chuletas de cerdo",
        "4 papas medianas en cubos",
        "2 manzanas peladas y picadas",
        "2 cdas azúcar mascabo",
        "1 cdita canela",
        "1 cdita ajo en polvo",
        "1 cdita tomillo",
        "2 cdas aceite de oliva",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Preheat oven to 200°C / 400°F. Toss potatoes with oil, garlic, salt; roast 30–35 min.",
        "Sear pork chops in ovenproof pan 3 min each side over medium-high heat.",
        "Transfer pan to oven; cook 10–12 min until internal temp 63°C / 145°F.",
        "Meanwhile, simmer diced apples with brown sugar, cinnamon, and 2 tbsp water in a small pot ~10 min until soft. Mash lightly.",
        "Serve pork topped with applesauce alongside roasted potatoes."
      ],
      "es": [
        "Precalentar el horno a 200 °C. Mezclar las papas con aceite, ajo, sal; asar 30–35 min.",
        "Sellar las chuletas en sartén apta para horno 3 min de cada lado a fuego medio-alto.",
        "Pasar la sartén al horno; cocinar 10–12 min hasta que la temperatura interna llegue a 63 °C.",
        "Mientras tanto, cocinar las manzanas con azúcar mascabo, canela y 2 cdas de agua ~10 min hasta ablandar. Pisar ligeramente.",
        "Servir las chuletas con la compota encima y las papas asadas."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    },
    "prep": [
      "marinate-pork-chops"
    ]
  },
  {
    "id": "hearty-beef-stew-with-bread",
    "type": "dinner",
    "protein": "beef",
    "base": "bread",
    "tags": [
      "stew"
    ],
    "name": {
      "en": "Hearty Beef Stew with Bread",
      "es": "Guiso de Carne con Pan"
    },
    "ing": {
      "en": [
        "700g beef chuck, cubed",
        "3 potatoes, chunked",
        "2 carrots, chunked",
        "1 onion",
        "3 cloves garlic",
        "1 can diced tomatoes",
        "500ml beef broth",
        "1 cup red wine (optional, or extra broth)",
        "1 tsp rosemary",
        "1 tsp thyme",
        "Flour (for coating)",
        "Olive oil",
        "Crusty bread"
      ],
      "es": [
        "700 g aguja en cubos",
        "3 papas en trozos",
        "2 zanahorias en trozos",
        "1 cebolla",
        "3 dientes de ajo",
        "1 lata de tomates picados",
        "500 ml caldo de carne",
        "1 taza vino tinto (opcional, o más caldo)",
        "1 cdita romero",
        "1 cdita tomillo",
        "Harina (para rebozar)",
        "Aceite de oliva",
        "Pan de campo"
      ]
    },
    "steps": {
      "en": [
        "Dust beef with flour, salt, and pepper; brown in batches in a Dutch oven.",
        "Sauté onion and garlic in same pot; add herbs.",
        "Return beef; add tomatoes, broth (and wine). Bring to boil.",
        "Cover and simmer 1.5–2 hrs until beef is very tender.",
        "Add potatoes and carrots in last 30 min.",
        "Serve with crusty bread. Made ahead? Just reheat gently."
      ],
      "es": [
        "Rebozar la carne en harina, sal y pimienta; dorar en tandas en olla de hierro.",
        "Saltear la cebolla y el ajo en la misma olla; agregar las hierbas.",
        "Volver a poner la carne; agregar tomates, caldo (y vino). Llevar a hervor.",
        "Tapar y cocinar a fuego lento 1,5–2 hs hasta que la carne esté muy tierna.",
        "Agregar papas y zanahorias en los últimos 30 min.",
        "Servir con pan de campo. ¿Hecho de antemano? Solo calentar suavemente."
      ]
    },
    "tip": {
      "en": "Beef stew is one of the best iron-rich dinners — red meat + vegetables in a hearty, comforting dish.",
      "es": "El guiso de carne es una de las mejores cenas ricas en hierro — carne roja + verduras en un plato reconfortante y nutritivo."
    },
    "prep": [
      "beef-stew"
    ]
  },
  {
    "id": "chicken-curry-with-rice",
    "type": "dinner",
    "protein": "poultry",
    "base": "rice",
    "tags": [
      "curry"
    ],
    "name": {
      "en": "Chicken Curry with Rice",
      "es": "Curry de Pollo con Arroz"
    },
    "ing": {
      "en": [
        "700g chicken breast or thighs, cubed",
        "1 can (400ml) coconut milk",
        "1 can diced tomatoes",
        "1 onion, diced",
        "3 cloves garlic, minced",
        "1 tbsp fresh ginger, grated",
        "2 tbsp curry powder",
        "1 tsp turmeric",
        "1 tsp cumin",
        "2 cups cooked rice",
        "2 cups spinach (optional)",
        "Oil, salt"
      ],
      "es": [
        "700 g pechuga o muslos de pollo en cubos",
        "1 lata (400 ml) leche de coco",
        "1 lata tomates picados",
        "1 cebolla picada",
        "3 dientes de ajo picados",
        "1 cda jengibre fresco rallado",
        "2 cdas curry en polvo",
        "1 cdita cúrcuma",
        "1 cdita comino",
        "2 tazas arroz cocido",
        "2 tazas espinaca (opcional)",
        "Aceite, sal"
      ]
    },
    "steps": {
      "en": [
        "Sauté onion, garlic, and ginger in oil over medium heat, 5 min.",
        "Add curry powder, turmeric, and cumin; stir 1 min until fragrant.",
        "Add chicken; cook until sealed on outside, ~5 min.",
        "Pour in coconut milk and tomatoes; bring to a simmer.",
        "Cook 15–20 min until chicken is cooked through. Stir in spinach if using.",
        "Serve over cooked rice.",
        "Toddler tip: set aside a mild portion before adding full spice, serve with extra rice."
      ],
      "es": [
        "Saltear la cebolla, el ajo y el jengibre en aceite a fuego medio, 5 min.",
        "Agregar el curry en polvo, la cúrcuma y el comino; mezclar 1 min hasta que suelten aroma.",
        "Agregar el pollo; cocinar hasta sellar el exterior, ~5 min.",
        "Verter la leche de coco y los tomates; llevar a hervor suave.",
        "Cocinar 15–20 min hasta que el pollo esté bien cocido. Mezclar la espinaca si se usa.",
        "Servir sobre el arroz.",
        "Consejo para pequeños: separar una porción suave antes de agregar toda la especia, servir con más arroz."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    },
    "prep": [
      "rice"
    ]
  },
  {
    "id": "baked-cod-with-quinoa-and-asparagus",
    "type": "dinner",
    "protein": "fish",
    "base": "grain",
    "name": {
      "en": "Baked Cod with Quinoa & Asparagus",
      "es": "Bacalao al Horno con Quinoa y Espárragos"
    },
    "ing": {
      "en": [
        "4 cod fillets (180g each)",
        "2 cups cooked quinoa",
        "1 bunch asparagus, trimmed",
        "2 tbsp olive oil",
        "2 cloves garlic, minced",
        "1 lemon (zest + wedges)",
        "Fresh parsley",
        "Salt & pepper"
      ],
      "es": [
        "4 filetes de bacalao (180 g c/u)",
        "2 tazas quinoa cocida",
        "1 atado de espárragos sin extremos",
        "2 cdas aceite de oliva",
        "2 dientes de ajo picados",
        "1 limón (ralladura + gajos)",
        "Perejil fresco",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Preheat oven to 200°C / 400°F.",
        "Place cod on lined baking sheet; season with garlic, lemon zest, olive oil, salt, and pepper.",
        "Toss asparagus with oil and salt; place alongside fish.",
        "Bake 15–18 min until fish is opaque and flakes easily.",
        "Warm quinoa; plate with fish and asparagus.",
        "Squeeze fresh lemon over everything before serving. Garnish with parsley."
      ],
      "es": [
        "Precalentar el horno a 200 °C.",
        "Colocar el bacalao en asadera con papel; condimentar con ajo, ralladura de limón, aceite, sal y pimienta.",
        "Mezclar los espárragos con aceite y sal; colocar junto al pescado.",
        "Hornear 15–18 min hasta que el pescado esté opaco y se desmenuce fácilmente.",
        "Calentar la quinoa; servir con el pescado y los espárragos.",
        "Exprimir limón fresco antes de servir. Decorar con perejil."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    },
    "prep": [
      "quinoa"
    ]
  },
  {
    "id": "beef-burgers-and-sweet-potato-fries",
    "type": "dinner",
    "protein": "beef",
    "base": "bread",
    "name": {
      "en": "Beef Burgers & Sweet Potato Fries",
      "es": "Hamburguesas con Papas Fritas de Batata"
    },
    "ing": {
      "en": [
        "700g ground beef",
        "1 egg",
        "1 tbsp Worcestershire sauce",
        "1 tsp garlic powder",
        "4 burger buns",
        "Lettuce leaves",
        "1 tomato, sliced",
        "1 onion, cut into rings",
        "Ketchup & mustard",
        "3 large sweet potatoes, cut into wedges",
        "2 tbsp olive oil",
        "1 tsp paprika",
        "Salt & pepper"
      ],
      "es": [
        "700 g carne picada",
        "1 huevo",
        "1 cda salsa Worcestershire",
        "1 cdita ajo en polvo",
        "4 panes de hamburguesa",
        "Hojas de lechuga",
        "1 tomate en rodajas",
        "1 cebolla en aros",
        "Ketchup y mostaza",
        "3 batatas grandes en gajos",
        "2 cdas aceite de oliva",
        "1 cdita pimentón",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Preheat oven to 220°C / 425°F. Toss sweet potato wedges with oil, paprika, salt; roast 30–35 min, flipping halfway.",
        "Mix ground beef with egg, Worcestershire, garlic powder, salt, and pepper; form 4 patties.",
        "Cook patties in pan or on grill 4–5 min each side for medium.",
        "Toast buns; assemble burgers with lettuce, tomato, onion, and condiments.",
        "Serve with sweet potato fries.",
        "Toddler tip: skip bun, serve small patty with soft sweet potato fries."
      ],
      "es": [
        "Precalentar el horno a 220 °C. Mezclar los gajos de batata con aceite, pimentón, sal; asar 30–35 min, dando vuelta a mitad.",
        "Mezclar la carne picada con el huevo, la salsa Worcestershire, el ajo en polvo, sal y pimienta; formar 4 hamburguesas.",
        "Cocinar en sartén o parrilla 4–5 min de cada lado.",
        "Tostar los panes; armar las hamburguesas con lechuga, tomate, cebolla y condimentos.",
        "Servir con las papas de batata.",
        "Consejo para pequeños: sin pan, servir hamburguesa chica con papas de batata blandas."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "salmon-with-couscous-and-roasted-vegetables",
    "type": "dinner",
    "protein": "fish",
    "base": "grain",
    "tags": [
      "salmon"
    ],
    "name": {
      "en": "Salmon with Couscous & Roasted Vegetables",
      "es": "Salmón con Cuscús y Verduras Asadas"
    },
    "ing": {
      "en": [
        "4 salmon fillets (180g each)",
        "1½ cups dry couscous",
        "2 zucchini, sliced",
        "1 red bell pepper, chunked",
        "1 yellow bell pepper, chunked",
        "1 red onion, wedged",
        "2 tbsp olive oil",
        "1 lemon",
        "1 tsp cumin",
        "Fresh mint or parsley",
        "Salt & pepper"
      ],
      "es": [
        "4 filetes de salmón (180 g c/u)",
        "1½ tazas cuscús seco",
        "2 zapallitos en rodajas",
        "1 morrón rojo en trozos",
        "1 morrón amarillo en trozos",
        "1 cebolla morada en gajos",
        "2 cdas aceite de oliva",
        "1 limón",
        "1 cdita comino",
        "Menta o perejil fresco",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Preheat oven to 200°C / 400°F.",
        "Toss zucchini, peppers, and red onion with olive oil, cumin, salt, pepper; roast 20 min.",
        "Pour 1.75 cups boiling water over dry couscous; cover 5 min, then fluff with fork.",
        "Season salmon with salt, pepper, lemon zest; add to oven for last 12–15 min.",
        "Mix roasted vegetables into couscous; top with salmon.",
        "Squeeze fresh lemon over; garnish with mint or parsley."
      ],
      "es": [
        "Precalentar el horno a 200 °C.",
        "Mezclar los zapallitos, los morrones y la cebolla morada con aceite, comino, sal y pimienta; asar 20 min.",
        "Verter 1¾ tazas de agua hirviendo sobre el cuscús seco; tapar 5 min y esponjar con tenedor.",
        "Condimentar el salmón con sal, pimienta y ralladura de limón; poner en el horno los últimos 12–15 min.",
        "Mezclar las verduras asadas con el cuscús; colocar el salmón encima.",
        "Exprimir limón fresco; decorar con menta o perejil."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "pork-ribs-with-coleslaw-and-corn",
    "type": "dinner",
    "protein": "pork",
    "base": "none",
    "name": {
      "en": "Pork Ribs with Coleslaw & Corn",
      "es": "Costillas de Cerdo con Ensalada de Repollo y Choclo"
    },
    "ing": {
      "en": [
        "1kg pork spare ribs",
        "3 tbsp BBQ sauce",
        "1 tsp smoked paprika",
        "1 tsp garlic powder",
        "Salt",
        "3 cups shredded cabbage & carrot mix",
        "3 tbsp mayonnaise",
        "2 tbsp apple cider vinegar",
        "1 tsp sugar",
        "4 corn cobs (or 2 cups frozen corn)"
      ],
      "es": [
        "1 kg costillas de cerdo",
        "3 cdas salsa BBQ",
        "1 cdita pimentón ahumado",
        "1 cdita ajo en polvo",
        "Sal",
        "3 tazas mezcla de repollo y zanahoria rallados",
        "3 cdas mayonesa",
        "2 cdas vinagre de manzana",
        "1 cdita azúcar",
        "4 choclos (o 2 tazas de choclo congelado)"
      ]
    },
    "steps": {
      "en": [
        "Rub ribs with paprika, garlic powder, and salt (the day before if possible).",
        "Wrap ribs in foil; bake at 150°C / 300°F for 2.5 hours.",
        "Brush with BBQ sauce; bake uncovered 15 min more.",
        "Mix coleslaw: combine cabbage, carrot, mayo, vinegar, and sugar; chill until serving.",
        "Boil corn 8–10 min, or roast alongside ribs.",
        "Toddler tip: shred rib meat off the bone, serve with soft cooked corn."
      ],
      "es": [
        "Condimentar las costillas con pimentón, ajo en polvo y sal (el día anterior si es posible).",
        "Envolver en papel aluminio; hornear a 150 °C durante 2,5 horas.",
        "Untar con salsa BBQ; hornear destapadas 15 min más.",
        "Mezclar la ensalada: combinar repollo, zanahoria, mayonesa, vinagre y azúcar; enfriar hasta servir.",
        "Hervir los choclos 8–10 min, o asar junto con las costillas.",
        "Consejo para pequeños: desmenuzar la carne del hueso, servir con choclo bien blando."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    },
    "prep": [
      "rub-ribs"
    ]
  },
  {
    "id": "beef-bolognese-with-spaghetti",
    "type": "dinner",
    "protein": "beef",
    "base": "pasta",
    "tags": [
      "bolognese"
    ],
    "name": {
      "en": "Beef Bolognese with Spaghetti",
      "es": "Spaghetti Boloñés"
    },
    "ing": {
      "en": [
        "700g ground beef",
        "500g spaghetti",
        "1 can (400g) crushed tomatoes",
        "1 can diced tomatoes",
        "1 onion, diced",
        "2 cloves garlic",
        "1 carrot, diced",
        "1 celery stalk, diced",
        "½ cup red wine (optional)",
        "1 tsp oregano",
        "1 tsp basil",
        "Olive oil",
        "Parmesan to serve",
        "Salt & pepper"
      ],
      "es": [
        "700 g carne picada",
        "500 g spaghetti",
        "1 lata (400 g) tomates triturados",
        "1 lata tomates picados",
        "1 cebolla picada",
        "2 dientes de ajo",
        "1 zanahoria picada",
        "1 tallo de apio picado",
        "½ taza vino tinto (opcional)",
        "1 cdita orégano",
        "1 cdita albahaca",
        "Aceite de oliva",
        "Parmesano para servir",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Sauté onion, garlic, carrot, and celery in oil over medium heat, 8 min.",
        "Add ground beef; cook until browned, breaking up lumps.",
        "Add wine if using; simmer 2 min. Add both cans of tomatoes, oregano, basil.",
        "Simmer 30 min (up to 1 hour for richer sauce).",
        "Cook spaghetti per package; drain.",
        "Serve sauce over pasta with parmesan.",
        "Toddler tip: use shorter pasta like penne, cut into smaller pieces."
      ],
      "es": [
        "Saltear la cebolla, el ajo, la zanahoria y el apio en aceite a fuego medio, 8 min.",
        "Agregar la carne picada; cocinar hasta dorar, separando los grumos.",
        "Agregar el vino si se usa; cocinar 2 min. Agregar ambas latas de tomates, el orégano y la albahaca.",
        "Cocinar a fuego lento 30 min (hasta 1 hora para una salsa más rica).",
        "Cocinar el spaghetti según el paquete; escurrir.",
        "Servir la salsa sobre la pasta con parmesano.",
        "Consejo para pequeños: usar pasta más corta como penne, cortarla en trozos más chicos."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "chicken-and-mushroom-risotto",
    "type": "dinner",
    "protein": "poultry",
    "base": "rice",
    "tags": [
      "risotto"
    ],
    "name": {
      "en": "Chicken & Mushroom Risotto",
      "es": "Risotto de Pollo y Champiñones"
    },
    "ing": {
      "en": [
        "1½ cups arborio rice",
        "2 cups cooked chicken, diced",
        "300g mushrooms, sliced",
        "1 onion, finely diced",
        "3 cloves garlic, minced",
        "1L hot chicken broth",
        "½ cup white wine (optional)",
        "½ cup parmesan, grated",
        "2 tbsp butter",
        "1 tbsp olive oil",
        "Fresh thyme",
        "Salt & pepper"
      ],
      "es": [
        "1½ tazas arroz arborio",
        "2 tazas pollo cocido picado",
        "300 g champiñones en rodajas",
        "1 cebolla finamente picada",
        "3 dientes de ajo picados",
        "1 L caldo de pollo caliente",
        "½ taza vino blanco (opcional)",
        "½ taza parmesano rallado",
        "2 cdas manteca",
        "1 cda aceite de oliva",
        "Tomillo fresco",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Keep broth warm in a small pot on low heat.",
        "Sauté onion and garlic in butter and oil in wide pan 5 min.",
        "Add mushrooms; cook until golden, 5–7 min.",
        "Add arborio rice; stir to toast for 2 min. Add wine; stir until absorbed.",
        "Add warm broth one ladle at a time, stirring constantly, waiting until each ladle is absorbed (~18–20 min total).",
        "Fold in diced chicken in last 5 min. Stir in parmesan; season.",
        "Serve immediately — risotto waits for no one!"
      ],
      "es": [
        "Mantener el caldo caliente en una ollita a fuego bajo.",
        "Saltear la cebolla y el ajo en manteca y aceite en sartén ancha 5 min.",
        "Agregar los champiñones; cocinar hasta dorar, 5–7 min.",
        "Agregar el arroz arborio; mezclar para tostar 2 min. Agregar el vino; mezclar hasta absorber.",
        "Agregar el caldo caliente de a un cucharón, revolviendo constantemente, esperando que cada cucharón se absorba (~18–20 min en total).",
        "Incorporar el pollo picado en los últimos 5 min. Mezclar el parmesano; condimentar.",
        "¡Servir inmediatamente — el risotto no espera a nadie!"
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    },
    "prep": [
      "cook-chicken"
    ]
  },
  {
    "id": "baked-fish-and-chips",
    "type": "dinner",
    "protein": "fish",
    "base": "potato",
    "tags": [
      "breaded-fish"
    ],
    "name": {
      "en": "Baked Fish & Chips",
      "es": "Pescado Rebozado al Horno con Papas"
    },
    "ing": {
      "en": [
        "4 white fish fillets (cod or haddock, 180g each)",
        "3 large potatoes, cut into thick wedges",
        "2 eggs, beaten",
        "1 cup breadcrumbs",
        "1 tsp garlic powder",
        "1 tsp lemon zest",
        "Olive oil",
        "Salt & pepper",
        "Lemon wedges to serve",
        "Ketchup or tartar sauce"
      ],
      "es": [
        "4 filetes de pescado blanco (bacalao o merluza, 180 g c/u)",
        "3 papas grandes en gajos gruesos",
        "2 huevos batidos",
        "1 taza pan rallado",
        "1 cdita ajo en polvo",
        "1 cdita ralladura de limón",
        "Aceite de oliva",
        "Sal y pimienta",
        "Gajos de limón para servir",
        "Ketchup o salsa tártara"
      ]
    },
    "steps": {
      "en": [
        "Preheat oven to 220°C / 425°F.",
        "Toss potato wedges with oil, salt, and pepper; spread on baking sheet. Roast 25 min, flipping halfway.",
        "Meanwhile, dip fish in beaten egg, then coat in breadcrumbs mixed with garlic powder, lemon zest, and salt.",
        "Place fish on a separate lined baking sheet; drizzle with oil.",
        "Bake fish 15–18 min until golden and cooked through.",
        "Serve with potato wedges, lemon wedges, and dipping sauce.",
        "Toddler tip: remove breading for softer fish, serve with soft oven chips."
      ],
      "es": [
        "Precalentar el horno a 220 °C.",
        "Mezclar los gajos de papa con aceite, sal y pimienta; distribuir en asadera. Asar 25 min, dando vuelta a mitad.",
        "Pasar el pescado por el huevo batido, luego rebozar en pan rallado mezclado con ajo en polvo, ralladura de limón y sal.",
        "Colocar el pescado en asadera aparte con papel; rociar con aceite.",
        "Hornear el pescado 15–18 min hasta dorar y cocinar bien.",
        "Servir con los gajos de papa, gajos de limón y salsa.",
        "Consejo para pequeños: quitar el rebozado para un pescado más suave, servir con papas blandas del horno."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "chicken-enchiladas",
    "type": "dinner",
    "protein": "poultry",
    "base": "bread",
    "tags": [
      "tortilla"
    ],
    "name": {
      "en": "Chicken Enchiladas",
      "es": "Enchiladas de Pollo"
    },
    "ing": {
      "en": [
        "2 cups shredded cooked chicken",
        "8 corn tortillas",
        "2 cups enchilada sauce (jarred or homemade)",
        "1½ cups shredded cheese",
        "1 can black beans, drained",
        "1 cup frozen corn, thawed",
        "1 tsp cumin",
        "1 tsp garlic powder",
        "Fresh cilantro, to serve",
        "Sour cream, to serve"
      ],
      "es": [
        "2 tazas pollo desmenuzado cocido",
        "8 tortillas de choclo",
        "2 tazas salsa de enchiladas (de frasco o casera)",
        "1½ tazas queso rallado",
        "1 lata porotos negros escurridos",
        "1 taza choclo congelado descongelado",
        "1 cdita comino",
        "1 cdita ajo en polvo",
        "Cilantro fresco, para servir",
        "Crema agria, para servir"
      ]
    },
    "steps": {
      "en": [
        "Preheat oven to 190°C / 375°F.",
        "Mix chicken with black beans, corn, cumin, garlic powder, and ½ cup enchilada sauce.",
        "Warm tortillas briefly (microwave 30 sec); fill each with chicken mixture and roll tightly.",
        "Place seam-side down in greased baking dish; pour remaining sauce over top.",
        "Sprinkle cheese over enchiladas.",
        "Bake 20–25 min until sauce bubbles and cheese is golden.",
        "Serve with cilantro and sour cream.",
        "Toddler tip: deconstructed — chicken, beans, corn, soft tortilla pieces, skip sauce."
      ],
      "es": [
        "Precalentar el horno a 190 °C.",
        "Mezclar el pollo con los porotos negros, el choclo, el comino, el ajo en polvo y ½ taza de salsa de enchiladas.",
        "Calentar las tortillas brevemente (microondas 30 seg); rellenar cada una con la mezcla y enrollar bien apretado.",
        "Colocar con la juntura hacia abajo en una fuente enmantecada; verter la salsa restante por encima.",
        "Espolvorear el queso sobre las enchiladas.",
        "Hornear 20–25 min hasta que la salsa burbujee y el queso esté dorado.",
        "Servir con cilantro y crema agria.",
        "Consejo para pequeños: servir desarmado — pollo, porotos, choclo, tortilla en trozos blandos, sin salsa."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    },
    "prep": [
      "cook-chicken"
    ]
  },
  {
    "id": "pork-tenderloin-with-roasted-root-vegetables",
    "type": "dinner",
    "protein": "pork",
    "base": "potato",
    "tags": [
      "pork-tenderloin"
    ],
    "name": {
      "en": "Pork Tenderloin with Roasted Root Vegetables",
      "es": "Lomo de Cerdo con Verduras de Raíz Asadas"
    },
    "ing": {
      "en": [
        "700g pork tenderloin",
        "3 carrots, chunked",
        "2 parsnips, chunked",
        "2 beets, quartered",
        "1 sweet potato, chunked",
        "2 tbsp olive oil",
        "1 tbsp honey",
        "1 tsp thyme",
        "1 tsp rosemary",
        "2 cloves garlic",
        "Salt & pepper"
      ],
      "es": [
        "700 g lomo de cerdo",
        "3 zanahorias en trozos",
        "2 chirivías en trozos",
        "2 remolachas en cuartos",
        "1 batata en trozos",
        "2 cdas aceite de oliva",
        "1 cda miel",
        "1 cdita tomillo",
        "1 cdita romero",
        "2 dientes de ajo",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Preheat oven to 200°C / 400°F.",
        "Peel and chunk all root vegetables; toss with olive oil, honey, thyme, and salt.",
        "Spread in large roasting pan; roast 20 min.",
        "Rub pork with garlic, rosemary, olive oil, salt, and pepper.",
        "Place pork on top of vegetables; roast 25–30 min until internal temp 63°C / 145°F.",
        "Rest pork 5 min; slice and serve over roasted vegetables."
      ],
      "es": [
        "Precalentar el horno a 200 °C.",
        "Pelar y cortar todas las verduras de raíz; mezclar con aceite de oliva, miel, tomillo y sal.",
        "Distribuir en asadera grande; asar 20 min.",
        "Frotar el lomo con ajo, romero, aceite de oliva, sal y pimienta.",
        "Colocar el lomo sobre las verduras; asar 25–30 min hasta que la temperatura interna llegue a 63 °C.",
        "Dejar reposar 5 min; cortar y servir sobre las verduras asadas."
      ]
    },
    "tip": {
      "en": "Colorful, nutrient-dense, and naturally sweet — a beautiful dinner!",
      "es": "Colorido, nutritivo y naturalmente dulce. ¡Una cena hermosa!"
    },
    "prep": [
      "marinate-pork-tenderloin"
    ]
  },
  {
    "id": "baked-salmon-quinoa-and-asparagus",
    "type": "dinner",
    "protein": "fish",
    "base": "grain",
    "tags": [
      "salmon"
    ],
    "name": {
      "en": "Baked Salmon, Quinoa & Asparagus",
      "es": "Salmón al Horno con Quinoa y Espárragos"
    },
    "ing": {
      "en": [
        "4 salmon fillets (180g each)",
        "2 cups cooked quinoa",
        "1 bunch asparagus, trimmed",
        "2 tbsp olive oil",
        "2 cloves garlic, minced",
        "1 lemon",
        "Fresh dill",
        "Salt & pepper"
      ],
      "es": [
        "4 filetes de salmón (180 g c/u)",
        "2 tazas quinoa cocida",
        "1 atado de espárragos sin extremos",
        "2 cdas aceite de oliva",
        "2 dientes de ajo picados",
        "1 limón",
        "Eneldo fresco",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Preheat oven to 200°C / 400°F.",
        "Season salmon with garlic, lemon zest, olive oil, salt, and pepper.",
        "Toss asparagus with oil and salt.",
        "Arrange salmon and asparagus together on lined baking sheet.",
        "Bake 12–15 min until salmon flakes easily.",
        "Warm quinoa; plate with salmon and asparagus.",
        "Garnish with fresh dill and lemon wedges."
      ],
      "es": [
        "Precalentar el horno a 200 °C.",
        "Condimentar el salmón con ajo, ralladura de limón, aceite, sal y pimienta.",
        "Mezclar los espárragos con aceite y sal.",
        "Acomodar el salmón y los espárragos juntos en asadera con papel.",
        "Hornear 12–15 min hasta que el salmón se desmenuce fácilmente.",
        "Calentar la quinoa; servir con el salmón y los espárragos.",
        "Decorar con eneldo fresco y gajos de limón."
      ]
    },
    "tip": {
      "en": "Third salmon meal of the month — great for baby brain development in the final trimester!",
      "es": "¡Tercer plato de salmón del mes — ideal para el desarrollo cerebral del bebé en el último trimestre!"
    },
    "prep": [
      "quinoa"
    ]
  },
  {
    "id": "beef-and-broccoli-stir-fry-with-rice",
    "type": "dinner",
    "protein": "beef",
    "base": "rice",
    "tags": [
      "beef-broccoli"
    ],
    "name": {
      "en": "Beef & Broccoli Stir-Fry with Rice",
      "es": "Salteado de Carne y Brócoli con Arroz"
    },
    "ing": {
      "en": [
        "500g beef sirloin, thin strips",
        "2 cups broccoli florets",
        "2 cups cooked rice",
        "3 tbsp soy sauce",
        "1 tbsp oyster sauce",
        "1 tsp cornstarch",
        "2 cloves garlic, minced",
        "1 tsp fresh ginger, grated",
        "1 tbsp sesame oil",
        "2 tbsp cooking oil"
      ],
      "es": [
        "500 g bife de lomo fino en tiras",
        "2 tazas floretes de brócoli",
        "2 tazas arroz cocido",
        "3 cdas salsa de soja",
        "1 cda salsa de ostras",
        "1 cdita maicena",
        "2 dientes de ajo picados",
        "1 cdita jengibre fresco rallado",
        "1 cda aceite de sésamo",
        "2 cdas aceite para cocinar"
      ]
    },
    "steps": {
      "en": [
        "Mix soy sauce, oyster sauce, and cornstarch; toss with beef strips to marinate 15 min.",
        "Blanch or steam broccoli 3 min; drain.",
        "Heat oil in wok on high; sear beef strips 2–3 min until browned and caramelised.",
        "Add garlic and ginger; stir 30 sec.",
        "Add broccoli; stir-fry 2 min.",
        "Pour remaining marinade over; toss until coated and glossy.",
        "Serve over rice."
      ],
      "es": [
        "Mezclar la salsa de soja, la salsa de ostras y la maicena; mezclar con las tiras de carne para marinar 15 min.",
        "Blanquear o cocinar el brócoli al vapor 3 min; escurrir.",
        "Calentar el aceite en wok a fuego alto; sellar las tiras de carne 2–3 min hasta dorar y caramelizar.",
        "Agregar el ajo y el jengibre; mezclar 30 seg.",
        "Agregar el brócoli; saltear 2 min.",
        "Verter la marinada restante; mezclar hasta cubrir todo y que brille.",
        "Servir sobre el arroz."
      ]
    },
    "tip": {
      "en": "Beef + broccoli: both are great iron sources. A satisfying, classic stir-fry!",
      "es": "Carne + brócoli: ambos son excelentes fuentes de hierro. ¡Un salteado clásico y satisfactorio!"
    },
    "prep": [
      "rice"
    ]
  },
  {
    "id": "chicken-and-potato-traybake",
    "type": "dinner",
    "protein": "poultry",
    "base": "potato",
    "tags": [
      "traybake"
    ],
    "name": {
      "en": "Chicken & Potato Traybake",
      "es": "Pollo y Papas al Horno"
    },
    "ing": {
      "en": [
        "8 bone-in chicken thighs or drumsticks",
        "4 medium potatoes, chunked",
        "1 whole head garlic, halved crosswise",
        "1 lemon, halved",
        "2 sprigs fresh rosemary",
        "2 sprigs fresh thyme",
        "3 tbsp olive oil",
        "1 cup cherry tomatoes",
        "Salt & pepper"
      ],
      "es": [
        "8 muslos o drumsticks de pollo con hueso",
        "4 papas medianas en trozos",
        "1 cabeza entera de ajo cortada a la mitad horizontalmente",
        "1 limón cortado a la mitad",
        "2 ramas de romero fresco",
        "2 ramas de tomillo fresco",
        "3 cdas aceite de oliva",
        "1 taza tomates cherry",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Preheat oven to 220°C / 425°F.",
        "Toss potato chunks, garlic halves, and cherry tomatoes in olive oil, salt, and pepper; spread in large roasting pan.",
        "Place chicken pieces on top; drizzle with oil; lay rosemary and thyme over everything.",
        "Place lemon halves cut-side down in the pan.",
        "Roast 45–50 min until chicken is golden and internal temp 74°C / 165°F.",
        "Squeeze the roasted lemon halves over the chicken just before serving.",
        "A rustic, hands-off dinner — the oven does all the work!"
      ],
      "es": [
        "Precalentar el horno a 220 °C.",
        "Mezclar los trozos de papa, las mitades de ajo y los tomates cherry con aceite, sal y pimienta; distribuir en asadera grande.",
        "Colocar los trozos de pollo encima; rociar con aceite; poner el romero y el tomillo sobre todo.",
        "Colocar las mitades de limón con la parte cortada hacia abajo en la asadera.",
        "Asar 45–50 min hasta que el pollo esté dorado y la temperatura interna llegue a 74 °C.",
        "Exprimir las mitades de limón asadas sobre el pollo justo antes de servir.",
        "¡Una cena rústica donde el horno hace todo el trabajo!"
      ]
    },
    "tip": {
      "en": "Minimal effort, maximum flavour. The roasted garlic becomes sweet and spreadable!",
      "es": "Mínimo esfuerzo, máximo sabor. ¡El ajo asado se vuelve dulce y untable!"
    }
  },
  {
    "id": "shepherds-pie",
    "type": "dinner",
    "protein": "beef",
    "base": "potato",
    "tags": [
      "mince-pie"
    ],
    "name": {
      "en": "Shepherd’s Pie (Pastel de Papas)",
      "es": "Pastel de Papas"
    },
    "ing": {
      "en": [
        "700g ground beef",
        "1 onion, diced",
        "2 carrots, diced",
        "1 cup frozen peas",
        "2 tbsp tomato paste",
        "1 cup beef broth",
        "1 tsp paprika",
        "1 kg potatoes, peeled & cubed",
        "½ cup warm milk",
        "2 tbsp butter",
        "½ cup grated parmesan",
        "1 tbsp olive oil"
      ],
      "es": [
        "700 g carne picada",
        "1 cebolla picada",
        "2 zanahorias picadas",
        "1 taza arvejas congeladas",
        "2 cdas extracto de tomate",
        "1 taza caldo de carne",
        "1 cdita pimentón",
        "1 kg papas peladas y en cubos",
        "½ taza leche tibia",
        "2 cdas manteca",
        "½ taza parmesano rallado",
        "1 cda aceite de oliva"
      ]
    },
    "steps": {
      "en": [
        "Brown beef, onion, and carrot in olive oil 8 min.",
        "Add tomato paste, paprika, broth, and peas; simmer 15 min until thick.",
        "Boil potatoes and mash with milk and butter.",
        "Spread the beef in a dish, cover with mash, and sprinkle parmesan.",
        "Bake at 200°C / 400°F for 20 min until golden.",
        "Toddler tip: soft and mashable — ideal as is."
      ],
      "es": [
        "Dorar la carne, la cebolla y la zanahoria en aceite de oliva 8 min.",
        "Agregar el extracto, el pimentón, el caldo y las arvejas; cocinar 15 min hasta que espese.",
        "Hervir las papas y hacer puré con la leche y la manteca.",
        "Poner la carne en una fuente, cubrir con el puré y espolvorear parmesano.",
        "Hornear a 200 °C 20 min hasta dorar.",
        "Consejo para pequeños: blando y fácil de pisar — ideal así."
      ]
    },
    "tip": {
      "en": "Iron from the beef, vitamin A from the carrots — classic family comfort.",
      "es": "Hierro de la carne, vitamina A de la zanahoria — un clásico reconfortante."
    }
  },
  {
    "id": "lemon-herb-roast-chicken",
    "type": "dinner",
    "protein": "poultry",
    "base": "potato",
    "tags": [
      "traybake"
    ],
    "name": {
      "en": "Lemon & Herb Roast Chicken with Vegetables",
      "es": "Pollo al Horno con Limón, Hierbas y Verduras"
    },
    "ing": {
      "en": [
        "8 chicken thighs",
        "4 medium potatoes, chunked",
        "3 carrots, chunked",
        "1 red onion, wedged",
        "1 lemon, halved",
        "4 cloves garlic",
        "2 sprigs fresh rosemary",
        "3 tbsp olive oil",
        "Salt & pepper"
      ],
      "es": [
        "8 muslos de pollo",
        "4 papas medianas en trozos",
        "3 zanahorias en trozos",
        "1 cebolla morada en gajos",
        "1 limón cortado a la mitad",
        "4 dientes de ajo",
        "2 ramas de romero fresco",
        "3 cdas aceite de oliva",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Preheat oven to 200°C / 400°F.",
        "Toss potatoes, carrots, onion, and garlic with half the oil in a large tray.",
        "Rub chicken with the rest of the oil, lemon juice, rosemary, salt, and pepper; nestle on top with the lemon halves.",
        "Roast 45 min until the chicken reaches 74°C / 165°F inside.",
        "Toddler tip: shred the meat off the bone; mash the soft vegetables."
      ],
      "es": [
        "Precalentar el horno a 200 °C.",
        "Mezclar las papas, las zanahorias, la cebolla y el ajo con la mitad del aceite en una asadera grande.",
        "Frotar el pollo con el resto del aceite, jugo de limón, romero, sal y pimienta; acomodar encima con las mitades de limón.",
        "Asar 45 min hasta que el pollo llegue a 74 °C por dentro.",
        "Consejo para pequeños: desmenuzar la carne del hueso; pisar las verduras blandas."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "vegetable-lasagna",
    "type": "dinner",
    "protein": "plant",
    "base": "pasta",
    "tags": [
      "lasagna"
    ],
    "name": {
      "en": "Vegetable Lasagna",
      "es": "Lasaña de Verduras"
    },
    "ing": {
      "en": [
        "12 lasagna sheets",
        "2 zucchini, diced",
        "1 red bell pepper, diced",
        "2 cups fresh spinach",
        "1 can (400g) crushed tomatoes",
        "500g ricotta",
        "250g mozzarella, grated",
        "1 egg",
        "1 onion, diced",
        "2 cloves garlic, minced",
        "1 tsp dried basil",
        "2 tbsp olive oil"
      ],
      "es": [
        "12 láminas de lasaña",
        "2 zapallitos en cubos",
        "1 morrón rojo picado",
        "2 tazas espinaca fresca",
        "1 lata (400 g) tomates triturados",
        "500 g ricota",
        "250 g mozzarella rallada",
        "1 huevo",
        "1 cebolla picada",
        "2 dientes de ajo picados",
        "1 cdita albahaca seca",
        "2 cdas aceite de oliva"
      ]
    },
    "steps": {
      "en": [
        "Sauté onion, garlic, zucchini, and pepper 8 min; add tomatoes and basil, simmer 10 min.",
        "Mix ricotta with egg and chopped spinach.",
        "Layer sauce, sheets, ricotta, and mozzarella three times, ending with sauce and mozzarella.",
        "Cover with foil and bake at 190°C / 375°F for 30 min; uncover for 15 min more.",
        "Rest 10 min before cutting.",
        "Toddler tip: cut a soft middle piece into small squares."
      ],
      "es": [
        "Saltear la cebolla, el ajo, el zapallito y el morrón 8 min; agregar los tomates y la albahaca, cocinar 10 min.",
        "Mezclar la ricota con el huevo y la espinaca picada.",
        "Armar capas de salsa, láminas, ricota y mozzarella tres veces, terminando con salsa y mozzarella.",
        "Tapar con papel aluminio y hornear a 190 °C 30 min; destapar y hornear 15 min más.",
        "Dejar reposar 10 min antes de cortar.",
        "Consejo para pequeños: cortar un trozo blando del centro en cuadraditos."
      ]
    },
    "tip": {
      "en": "Ricotta and mozzarella make it a calcium powerhouse — use pasteurised cheese.",
      "es": "La ricota y la mozzarella la llenan de calcio — usá quesos pasteurizados."
    }
  },
  {
    "id": "turkey-chili-with-beans",
    "type": "dinner",
    "protein": "poultry",
    "base": "rice",
    "tags": [
      "chili"
    ],
    "name": {
      "en": "Turkey Chili with Beans",
      "es": "Chili de Pavo con Porotos"
    },
    "ing": {
      "en": [
        "500g ground turkey",
        "1 can kidney beans, drained",
        "1 can (400g) diced tomatoes",
        "1 onion, diced",
        "1 red bell pepper, diced",
        "2 cloves garlic, minced",
        "1 tsp cumin",
        "1 tsp chili powder",
        "3 cups cooked rice",
        "½ cup sour cream",
        "1 tbsp olive oil"
      ],
      "es": [
        "500 g carne picada de pavo",
        "1 lata porotos kidney escurridos",
        "1 lata (400 g) tomates picados",
        "1 cebolla picada",
        "1 morrón rojo picado",
        "2 dientes de ajo picados",
        "1 cdita comino",
        "1 cdita ají molido",
        "3 tazas arroz cocido",
        "½ taza crema agria",
        "1 cda aceite de oliva"
      ]
    },
    "steps": {
      "en": [
        "Brown turkey with onion, pepper, and garlic in olive oil 8 min.",
        "Add cumin, chili powder, tomatoes, and beans; simmer 20 min.",
        "Serve over rice with a spoonful of sour cream.",
        "Toddler tip: make it mild and mash the beans a little."
      ],
      "es": [
        "Dorar el pavo con la cebolla, el morrón y el ajo en aceite de oliva 8 min.",
        "Agregar el comino, el ají, los tomates y los porotos; cocinar 20 min.",
        "Servir sobre arroz con una cucharada de crema agria.",
        "Consejo para pequeños: hacerlo suave y pisar un poco los porotos."
      ]
    },
    "tip": {
      "en": "Lean turkey plus beans: protein and fibre in one pot.",
      "es": "Pavo magro más porotos: proteína y fibra en una sola olla."
    },
    "prep": [
      "rice"
    ]
  },
  {
    "id": "teriyaki-salmon-with-rice",
    "type": "dinner",
    "protein": "fish",
    "base": "rice",
    "tags": [
      "salmon"
    ],
    "name": {
      "en": "Teriyaki Salmon with Rice & Greens",
      "es": "Salmón Teriyaki con Arroz y Verdes"
    },
    "ing": {
      "en": [
        "4 salmon fillets (180g each)",
        "3 tbsp soy sauce",
        "2 tbsp honey",
        "1 tsp fresh ginger, grated",
        "1 clove garlic, grated",
        "3 cups cooked rice",
        "2 cups broccoli florets",
        "1 tsp sesame seeds"
      ],
      "es": [
        "4 filetes de salmón (180 g c/u)",
        "3 cdas salsa de soja",
        "2 cdas miel",
        "1 cdita jengibre fresco rallado",
        "1 diente de ajo rallado",
        "3 tazas arroz cocido",
        "2 tazas floretes de brócoli",
        "1 cdita semillas de sésamo"
      ]
    },
    "steps": {
      "en": [
        "Mix soy sauce, honey, ginger, and garlic.",
        "Brush over the salmon and bake at 200°C / 400°F for 12–15 min until it flakes.",
        "Steam the broccoli 4 min.",
        "Serve salmon over rice with broccoli; sprinkle sesame seeds.",
        "Toddler tip: flake the salmon, checking for bones."
      ],
      "es": [
        "Mezclar la salsa de soja, la miel, el jengibre y el ajo.",
        "Pincelar el salmón y hornear a 200 °C 12–15 min hasta que se desmenuce.",
        "Cocinar el brócoli al vapor 4 min.",
        "Servir el salmón sobre el arroz con brócoli; espolvorear sésamo.",
        "Consejo para pequeños: desmenuzar el salmón revisando las espinas."
      ]
    },
    "tip": {
      "en": "Omega-3 rich salmon twice a week is great for baby’s development.",
      "es": "El salmón rico en omega-3 dos veces por semana es excelente para el desarrollo del bebé."
    },
    "prep": [
      "rice"
    ]
  },
  {
    "id": "arroz-con-pollo",
    "type": "dinner",
    "protein": "poultry",
    "base": "rice",
    "name": {
      "en": "Arroz con Pollo",
      "es": "Arroz con Pollo"
    },
    "ing": {
      "en": [
        "700g chicken thighs, boneless, cubed",
        "1½ cups long-grain rice",
        "1 onion, diced",
        "1 red bell pepper, diced",
        "2 cloves garlic, minced",
        "1 cup frozen peas",
        "1 tsp turmeric",
        "1 tsp paprika",
        "3 cups chicken broth",
        "2 tbsp olive oil"
      ],
      "es": [
        "700 g muslos de pollo deshuesados en cubos",
        "1½ tazas arroz largo fino",
        "1 cebolla picada",
        "1 morrón rojo picado",
        "2 dientes de ajo picados",
        "1 taza arvejas congeladas",
        "1 cdita cúrcuma",
        "1 cdita pimentón",
        "3 tazas caldo de pollo",
        "2 cdas aceite de oliva"
      ]
    },
    "steps": {
      "en": [
        "Brown the chicken in olive oil 6 min; set aside.",
        "Sauté onion, pepper, and garlic 5 min; stir in rice, turmeric, and paprika for 1 min.",
        "Add broth and chicken; cover and simmer 18 min.",
        "Stir in peas and cook 3 more min until the rice is tender.",
        "Toddler tip: chop the chicken small; the rice is perfectly soft."
      ],
      "es": [
        "Dorar el pollo en aceite de oliva 6 min; reservar.",
        "Saltear la cebolla, el morrón y el ajo 5 min; agregar el arroz, la cúrcuma y el pimentón 1 min.",
        "Agregar el caldo y el pollo; tapar y cocinar 18 min.",
        "Incorporar las arvejas y cocinar 3 min más hasta que el arroz esté tierno.",
        "Consejo para pequeños: picar el pollo chiquito; el arroz queda bien blando."
      ]
    },
    "tip": {
      "en": "One pot, everyone happy — a Latin American family classic.",
      "es": "Una sola olla y todos contentos — un clásico familiar latinoamericano."
    }
  },
  {
    "id": "stuffed-zucchini",
    "type": "dinner",
    "protein": "beef",
    "base": "none",
    "name": {
      "en": "Stuffed Zucchini (Zapallitos Rellenos)",
      "es": "Zapallitos Rellenos"
    },
    "ing": {
      "en": [
        "6 round or regular zucchini",
        "400g ground beef",
        "1 onion, finely diced",
        "1 egg",
        "½ cup breadcrumbs",
        "½ cup grated parmesan",
        "1 can (400g) crushed tomatoes",
        "1 tbsp olive oil",
        "Crusty bread"
      ],
      "es": [
        "6 zapallitos redondos o largos",
        "400 g carne picada",
        "1 cebolla picada fina",
        "1 huevo",
        "½ taza pan rallado",
        "½ taza parmesano rallado",
        "1 lata (400 g) tomates triturados",
        "1 cda aceite de oliva",
        "Pan de campo"
      ]
    },
    "steps": {
      "en": [
        "Halve the zucchini, scoop out the centres, and chop the scooped flesh.",
        "Brown beef, onion, and chopped zucchini 8 min; cool slightly, then mix with egg and half the breadcrumbs.",
        "Fill the zucchini shells; top with parmesan and the rest of the breadcrumbs.",
        "Spread tomatoes in a dish, set the zucchini on top, and bake at 190°C / 375°F for 30 min.",
        "Serve with crusty bread for the sauce.",
        "Toddler tip: scoop out the soft filling and mash with sauce."
      ],
      "es": [
        "Cortar los zapallitos a la mitad, ahuecarlos y picar la pulpa.",
        "Dorar la carne, la cebolla y la pulpa 8 min; entibiar y mezclar con el huevo y la mitad del pan rallado.",
        "Rellenar los zapallitos; cubrir con parmesano y el resto del pan rallado.",
        "Poner los tomates en una fuente, acomodar los zapallitos encima y hornear a 190 °C 30 min.",
        "Servir con pan de campo para la salsa.",
        "Consejo para pequeños: sacar el relleno blando y pisarlo con la salsa."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "shrimp-veggie-noodle-stir-fry",
    "type": "dinner",
    "protein": "fish",
    "base": "pasta",
    "tags": [
      "stir-fry-noodles"
    ],
    "name": {
      "en": "Shrimp & Veggie Noodle Stir-Fry",
      "es": "Salteado de Fideos con Langostinos y Verduras"
    },
    "ing": {
      "en": [
        "400g peeled shrimp",
        "300g egg noodles",
        "2 cups broccoli florets",
        "1 red bell pepper, sliced",
        "1 carrot, julienned",
        "3 tbsp soy sauce",
        "1 tbsp oyster sauce",
        "1 tbsp fresh ginger, grated",
        "2 cloves garlic, minced",
        "2 tbsp cooking oil"
      ],
      "es": [
        "400 g langostinos pelados",
        "300 g fideos de huevo",
        "2 tazas floretes de brócoli",
        "1 morrón rojo en tiras",
        "1 zanahoria en juliana",
        "3 cdas salsa de soja",
        "1 cda salsa de ostras",
        "1 cda jengibre fresco rallado",
        "2 dientes de ajo picados",
        "2 cdas aceite para cocinar"
      ]
    },
    "steps": {
      "en": [
        "Cook noodles; drain.",
        "Stir-fry shrimp 2–3 min until pink and cooked through; remove.",
        "Stir-fry broccoli, pepper, carrot, garlic, and ginger 4 min.",
        "Add noodles, shrimp, soy, and oyster sauce; toss until glossy.",
        "Toddler tip: cut noodles and shrimp small."
      ],
      "es": [
        "Cocinar los fideos; escurrir.",
        "Saltear los langostinos 2–3 min hasta que estén rosados y cocidos; retirar.",
        "Saltear el brócoli, el morrón, la zanahoria, el ajo y el jengibre 4 min.",
        "Agregar los fideos, los langostinos, la soja y la salsa de ostras; mezclar hasta que brille.",
        "Consejo para pequeños: cortar los fideos y los langostinos chiquitos."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "black-bean-sweet-potato-chili",
    "type": "dinner",
    "protein": "plant",
    "base": "potato",
    "tags": [
      "chili"
    ],
    "name": {
      "en": "Black Bean & Sweet Potato Chili",
      "es": "Chili de Porotos Negros y Batata"
    },
    "ing": {
      "en": [
        "2 large sweet potatoes, cubed",
        "2 cans black beans, drained",
        "1 can (400g) diced tomatoes",
        "1 onion, diced",
        "2 cloves garlic, minced",
        "1 tsp cumin",
        "1 tsp paprika",
        "2 cups vegetable broth",
        "1 avocado, sliced",
        "½ cup shredded cheese",
        "1 tbsp olive oil"
      ],
      "es": [
        "2 batatas grandes en cubos",
        "2 latas porotos negros escurridos",
        "1 lata (400 g) tomates picados",
        "1 cebolla picada",
        "2 dientes de ajo picados",
        "1 cdita comino",
        "1 cdita pimentón",
        "2 tazas caldo de verduras",
        "1 palta en rodajas",
        "½ taza queso rallado",
        "1 cda aceite de oliva"
      ]
    },
    "steps": {
      "en": [
        "Sauté onion and garlic in olive oil 5 min; add spices.",
        "Add sweet potatoes, beans, tomatoes, and broth; simmer 25 min until tender.",
        "Serve topped with avocado and cheese.",
        "Toddler tip: mash sweet potato and beans together."
      ],
      "es": [
        "Saltear la cebolla y el ajo en aceite de oliva 5 min; agregar las especias.",
        "Agregar las batatas, los porotos, los tomates y el caldo; cocinar 25 min hasta que estén tiernas.",
        "Servir con palta y queso por encima.",
        "Consejo para pequeños: pisar la batata con los porotos."
      ]
    },
    "tip": {
      "en": "Fibre, folate, and beta-carotene — a cosy meat-free night.",
      "es": "Fibra, folato y betacaroteno — una noche sin carne bien reconfortante."
    }
  },
  {
    "id": "pork-and-pepper-stir-fry",
    "type": "dinner",
    "protein": "pork",
    "base": "rice",
    "name": {
      "en": "Pork & Pepper Stir-Fry with Rice",
      "es": "Salteado de Cerdo y Morrones con Arroz"
    },
    "ing": {
      "en": [
        "500g pork tenderloin, thin strips",
        "2 bell peppers, sliced",
        "1 onion, sliced",
        "2 cups broccoli florets",
        "3 tbsp soy sauce",
        "1 tbsp honey",
        "1 tsp cornstarch",
        "3 cups cooked rice",
        "2 tbsp cooking oil"
      ],
      "es": [
        "500 g lomo de cerdo en tiras finas",
        "2 morrones en tiras",
        "1 cebolla en pluma",
        "2 tazas floretes de brócoli",
        "3 cdas salsa de soja",
        "1 cda miel",
        "1 cdita maicena",
        "3 tazas arroz cocido",
        "2 cdas aceite para cocinar"
      ]
    },
    "steps": {
      "en": [
        "Toss pork with 1 tbsp soy sauce and the cornstarch.",
        "Stir-fry pork in hot oil 4–5 min until cooked through; remove.",
        "Stir-fry peppers, onion, and broccoli 4 min.",
        "Return the pork with the rest of the soy and the honey; serve over rice.",
        "Toddler tip: chop the pork into tiny pieces."
      ],
      "es": [
        "Mezclar el cerdo con 1 cda de salsa de soja y la maicena.",
        "Saltear el cerdo en aceite caliente 4–5 min hasta que esté bien cocido; retirar.",
        "Saltear los morrones, la cebolla y el brócoli 4 min.",
        "Volver a poner el cerdo con el resto de la soja y la miel; servir sobre arroz.",
        "Consejo para pequeños: picar el cerdo en trocitos muy chicos."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    },
    "prep": [
      "rice"
    ]
  },
  {
    "id": "hake-provencal-with-potatoes",
    "type": "dinner",
    "protein": "fish",
    "base": "potato",
    "name": {
      "en": "Hake Provençal with Roast Potatoes",
      "es": "Merluza a la Provenzal con Papas al Horno"
    },
    "ing": {
      "en": [
        "4 hake fillets (150g each)",
        "4 medium potatoes, cubed",
        "3 cloves garlic, minced",
        "Fresh parsley",
        "3 tbsp olive oil",
        "1 lemon, in wedges",
        "Mixed greens for salad",
        "Salt & pepper"
      ],
      "es": [
        "4 filetes de merluza (150 g c/u)",
        "4 papas medianas en cubos",
        "3 dientes de ajo picados",
        "Perejil fresco",
        "3 cdas aceite de oliva",
        "1 limón en gajos",
        "Hojas verdes variadas para la ensalada",
        "Sal y pimienta"
      ]
    },
    "steps": {
      "en": [
        "Roast potatoes with 1 tbsp oil and salt at 220°C / 425°F for 30 min.",
        "Mix garlic, chopped parsley, and the rest of the oil.",
        "Spread over the hake and bake for the last 12 min until it flakes.",
        "Serve with lemon wedges and salad.",
        "Toddler tip: flake the fish and check for bones."
      ],
      "es": [
        "Asar las papas con 1 cda de aceite y sal a 220 °C 30 min.",
        "Mezclar el ajo, el perejil picado y el resto del aceite.",
        "Untar la merluza y hornear los últimos 12 min hasta que se desmenuce.",
        "Servir con gajos de limón y ensalada.",
        "Consejo para pequeños: desmenuzar el pescado y revisar las espinas."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "chicken-fajitas",
    "type": "dinner",
    "protein": "poultry",
    "base": "bread",
    "tags": [
      "tortilla"
    ],
    "name": {
      "en": "Chicken Fajitas",
      "es": "Fajitas de Pollo"
    },
    "ing": {
      "en": [
        "600g chicken breast, cut into strips",
        "2 bell peppers, sliced",
        "1 onion, sliced",
        "1 tsp cumin",
        "1 tsp paprika",
        "Juice of 1 lime",
        "8 small flour tortillas",
        "1 avocado, sliced",
        "½ cup sour cream",
        "2 tbsp olive oil"
      ],
      "es": [
        "600 g pechuga de pollo en tiras",
        "2 morrones en tiras",
        "1 cebolla en pluma",
        "1 cdita comino",
        "1 cdita pimentón",
        "Jugo de 1 lima",
        "8 tortillas de harina pequeñas",
        "1 palta en rodajas",
        "½ taza crema agria",
        "2 cdas aceite de oliva"
      ]
    },
    "steps": {
      "en": [
        "Toss chicken with cumin, paprika, lime juice, and 1 tbsp oil.",
        "Cook in a hot pan 6–8 min until cooked through; remove.",
        "Sauté peppers and onion 5 min.",
        "Serve everything with warm tortillas, avocado, and sour cream.",
        "Toddler tip: chicken strips, soft peppers, and avocado as finger food."
      ],
      "es": [
        "Mezclar el pollo con el comino, el pimentón, el jugo de lima y 1 cda de aceite.",
        "Cocinar en sartén bien caliente 6–8 min hasta que esté bien cocido; retirar.",
        "Saltear los morrones y la cebolla 5 min.",
        "Servir todo con tortillas tibias, palta y crema agria.",
        "Consejo para pequeños: tiras de pollo, morrón blando y palta para comer con la mano."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "beef-kebabs-with-couscous",
    "type": "dinner",
    "protein": "beef",
    "base": "grain",
    "tags": [
      "skewers"
    ],
    "name": {
      "en": "Beef & Vegetable Kebabs with Couscous",
      "es": "Brochetas de Carne y Verduras con Cuscús"
    },
    "ing": {
      "en": [
        "600g beef sirloin, cubed",
        "1 red bell pepper, chunked",
        "1 zucchini, chunked",
        "1 red onion, wedged",
        "2 tbsp olive oil",
        "1 tsp paprika",
        "1½ cups dry couscous",
        "1 cup Greek yogurt",
        "Fresh mint, chopped",
        "Wooden skewers"
      ],
      "es": [
        "600 g bife de lomo fino en cubos",
        "1 morrón rojo en trozos",
        "1 zapallito en trozos",
        "1 cebolla morada en gajos",
        "2 cdas aceite de oliva",
        "1 cdita pimentón",
        "1½ tazas cuscús seco",
        "1 taza yogur griego",
        "Menta fresca picada",
        "Palitos de brochette de madera"
      ]
    },
    "steps": {
      "en": [
        "Toss beef and vegetables with oil, paprika, and salt; thread onto skewers.",
        "Grill or bake at 220°C / 425°F for 12–15 min, turning, until the beef is cooked through.",
        "Pour boiling water over the couscous, cover 5 min, and fluff.",
        "Serve with mint yogurt.",
        "Toddler tip: off the skewer, beef cut into tiny pieces."
      ],
      "es": [
        "Mezclar la carne y las verduras con aceite, pimentón y sal; armar las brochetas.",
        "Grillar u hornear a 220 °C 12–15 min, girando, hasta que la carne esté bien cocida.",
        "Cubrir el cuscús con agua hirviendo, tapar 5 min y desgranar.",
        "Servir con yogur con menta.",
        "Consejo para pequeños: sin palito, con la carne en trocitos muy chicos."
      ]
    },
    "tip": {
      "en": "Cook beef well done during pregnancy.",
      "es": "En el embarazo, cocinar la carne bien cocida."
    }
  },
  {
    "id": "eggplant-parmesan-with-pasta",
    "type": "dinner",
    "protein": "plant",
    "base": "pasta",
    "name": {
      "en": "Eggplant Parmesan with Spaghetti",
      "es": "Berenjenas a la Parmesana con Spaghetti"
    },
    "ing": {
      "en": [
        "2 eggplants, sliced",
        "2 eggs, beaten",
        "1 cup breadcrumbs",
        "1 can (400g) crushed tomatoes",
        "250g mozzarella, sliced",
        "½ cup grated parmesan",
        "300g spaghetti",
        "Fresh basil leaves",
        "2 tbsp olive oil"
      ],
      "es": [
        "2 berenjenas en rodajas",
        "2 huevos batidos",
        "1 taza pan rallado",
        "1 lata (400 g) tomates triturados",
        "250 g mozzarella en rodajas",
        "½ taza parmesano rallado",
        "300 g spaghetti",
        "Hojas de albahaca fresca",
        "2 cdas aceite de oliva"
      ]
    },
    "steps": {
      "en": [
        "Dip eggplant in egg and breadcrumbs; bake on an oiled tray at 200°C / 400°F for 20 min.",
        "Layer eggplant, tomato, mozzarella, and parmesan in a dish.",
        "Bake 20 min more until bubbling.",
        "Serve with spaghetti tossed in a little sauce and basil.",
        "Toddler tip: soft middle pieces, cut small."
      ],
      "es": [
        "Pasar las berenjenas por huevo y pan rallado; hornear en bandeja aceitada a 200 °C 20 min.",
        "Armar capas de berenjena, tomate, mozzarella y parmesano en una fuente.",
        "Hornear 20 min más hasta que burbujee.",
        "Servir con spaghetti con un poco de salsa y albahaca.",
        "Consejo para pequeños: trozos blandos del centro, cortados chiquitos."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "mushroom-and-spinach-risotto",
    "type": "dinner",
    "protein": "plant",
    "base": "rice",
    "tags": [
      "risotto"
    ],
    "name": {
      "en": "Mushroom & Spinach Risotto",
      "es": "Risotto de Hongos y Espinaca"
    },
    "ing": {
      "en": [
        "1½ cups arborio rice",
        "300g mushrooms, sliced",
        "2 cups fresh spinach",
        "1 onion, finely diced",
        "2 cloves garlic, minced",
        "1.2L hot vegetable broth",
        "½ cup grated parmesan",
        "2 tbsp butter",
        "1 tbsp olive oil"
      ],
      "es": [
        "1½ tazas arroz arborio",
        "300 g champiñones en láminas",
        "2 tazas espinaca fresca",
        "1 cebolla picada fina",
        "2 dientes de ajo picados",
        "1,2 L caldo de verduras caliente",
        "½ taza parmesano rallado",
        "2 cdas manteca",
        "1 cda aceite de oliva"
      ]
    },
    "steps": {
      "en": [
        "Sauté onion, garlic, and mushrooms in olive oil 6 min.",
        "Stir in rice for 1 min, then add broth a ladle at a time, stirring, for 18–20 min.",
        "Stir in spinach, butter, and parmesan until creamy.",
        "Rest 2 min and serve.",
        "Toddler tip: naturally soft — chop the mushrooms small."
      ],
      "es": [
        "Saltear la cebolla, el ajo y los champiñones en aceite de oliva 6 min.",
        "Agregar el arroz 1 min y luego el caldo de a un cucharón, revolviendo, 18–20 min.",
        "Incorporar la espinaca, la manteca y el parmesano hasta que quede cremoso.",
        "Reposar 2 min y servir.",
        "Consejo para pequeños: ya es blando — picar los champiñones chiquitos."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "pork-meatballs-with-mash",
    "type": "dinner",
    "protein": "pork",
    "base": "potato",
    "tags": [
      "meatballs"
    ],
    "name": {
      "en": "Pork Meatballs in Tomato Sauce with Mash",
      "es": "Albóndigas de Cerdo en Salsa con Puré"
    },
    "ing": {
      "en": [
        "500g ground pork",
        "1 egg",
        "½ cup breadcrumbs",
        "1 onion, finely diced",
        "1 can (400g) crushed tomatoes",
        "1 tsp dried oregano",
        "1 kg potatoes, peeled & cubed",
        "½ cup warm milk",
        "2 tbsp butter",
        "1 tbsp olive oil"
      ],
      "es": [
        "500 g carne picada de cerdo",
        "1 huevo",
        "½ taza pan rallado",
        "1 cebolla picada fina",
        "1 lata (400 g) tomates triturados",
        "1 cdita orégano seco",
        "1 kg papas peladas y en cubos",
        "½ taza leche tibia",
        "2 cdas manteca",
        "1 cda aceite de oliva"
      ]
    },
    "steps": {
      "en": [
        "Mix pork, egg, breadcrumbs, half the onion, salt, and pepper; roll into balls.",
        "Brown in olive oil; add the rest of the onion, tomatoes, and oregano.",
        "Cover and simmer 20 min until cooked through.",
        "Boil potatoes; mash with milk and butter. Serve together.",
        "Toddler tip: mash a meatball into the potato."
      ],
      "es": [
        "Mezclar el cerdo, el huevo, el pan rallado, la mitad de la cebolla, sal y pimienta; formar bolitas.",
        "Dorar en aceite de oliva; agregar el resto de la cebolla, los tomates y el orégano.",
        "Tapar y cocinar 20 min hasta que estén bien cocidas.",
        "Hervir las papas; hacer puré con leche y manteca. Servir juntos.",
        "Consejo para pequeños: pisar una albóndiga con el puré."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "creamy-fish-pie",
    "type": "dinner",
    "protein": "fish",
    "base": "potato",
    "name": {
      "en": "Creamy Fish Pie",
      "es": "Pastel de Pescado Cremoso"
    },
    "ing": {
      "en": [
        "500g white fish fillets (cod or hake), cubed",
        "200g peeled shrimp",
        "1 cup frozen peas",
        "2 cups milk",
        "3 tbsp butter",
        "3 tbsp flour",
        "1 kg potatoes, peeled & cubed",
        "Fresh parsley",
        "½ cup shredded cheese"
      ],
      "es": [
        "500 g filetes de pescado blanco (bacalao o merluza) en cubos",
        "200 g langostinos pelados",
        "1 taza arvejas congeladas",
        "2 tazas leche",
        "3 cdas manteca",
        "3 cdas harina",
        "1 kg papas peladas y en cubos",
        "Perejil fresco",
        "½ taza queso rallado"
      ]
    },
    "steps": {
      "en": [
        "Boil potatoes and mash with a little butter.",
        "Melt the rest of the butter, stir in flour, then whisk in milk until thick.",
        "Stir in fish, shrimp, peas, and parsley; pour into a dish.",
        "Top with mash and cheese; bake at 200°C / 400°F for 30 min until the fish is cooked and the top golden.",
        "Toddler tip: soft and creamy — check carefully for bones."
      ],
      "es": [
        "Hervir las papas y hacer puré con un poco de manteca.",
        "Derretir el resto de la manteca, agregar la harina y luego la leche, batiendo hasta espesar.",
        "Incorporar el pescado, los langostinos, las arvejas y el perejil; volcar en una fuente.",
        "Cubrir con el puré y el queso; hornear a 200 °C 30 min hasta que el pescado esté cocido y dorado.",
        "Consejo para pequeños: blando y cremoso — revisar bien las espinas."
      ]
    },
    "tip": {
      "en": "Two low-mercury seafoods in one cosy dish.",
      "es": "Dos pescados bajos en mercurio en un plato reconfortante."
    }
  },
  {
    "id": "chicken-noodle-stir-fry",
    "type": "dinner",
    "protein": "poultry",
    "base": "pasta",
    "tags": [
      "stir-fry-noodles"
    ],
    "name": {
      "en": "Chicken Noodle Stir-Fry",
      "es": "Salteado de Fideos con Pollo"
    },
    "ing": {
      "en": [
        "600g chicken breast, cut into strips",
        "300g egg noodles",
        "2 cups shredded cabbage",
        "2 carrots, julienned",
        "1 cup green beans, cut",
        "3 tbsp soy sauce",
        "1 tbsp honey",
        "1 tbsp sesame oil",
        "2 tbsp cooking oil"
      ],
      "es": [
        "600 g pechuga de pollo en tiras",
        "300 g fideos de huevo",
        "2 tazas repollo rallado",
        "2 zanahorias en juliana",
        "1 taza chauchas cortadas",
        "3 cdas salsa de soja",
        "1 cda miel",
        "1 cda aceite de sésamo",
        "2 cdas aceite para cocinar"
      ]
    },
    "steps": {
      "en": [
        "Cook noodles; drain.",
        "Stir-fry chicken in hot oil 6 min until cooked through.",
        "Add cabbage, carrots, and green beans; stir-fry 4 min.",
        "Add noodles, soy, honey, and sesame oil; toss well.",
        "Toddler tip: cut noodles short and chicken small."
      ],
      "es": [
        "Cocinar los fideos; escurrir.",
        "Saltear el pollo en aceite caliente 6 min hasta que esté bien cocido.",
        "Agregar el repollo, las zanahorias y las chauchas; saltear 4 min.",
        "Agregar los fideos, la soja, la miel y el aceite de sésamo; mezclar bien.",
        "Consejo para pequeños: cortar los fideos cortitos y el pollo chiquito."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    }
  },
  {
    "id": "homemade-veggie-pizza",
    "type": "dinner",
    "protein": "plant",
    "base": "bread",
    "tags": [
      "pizza"
    ],
    "name": {
      "en": "Homemade Veggie Pizza Night",
      "es": "Noche de Pizza Casera de Verduras"
    },
    "ing": {
      "en": [
        "2 pizza doughs (500g total)",
        "1 can (400g) crushed tomatoes",
        "300g mozzarella, grated",
        "1 red bell pepper, sliced",
        "150g mushrooms, sliced",
        "10 black olives, sliced",
        "1 tsp dried oregano",
        "1 tbsp olive oil",
        "Mixed greens for salad"
      ],
      "es": [
        "2 masas de pizza (500 g en total)",
        "1 lata (400 g) tomates triturados",
        "300 g mozzarella rallada",
        "1 morrón rojo en tiras",
        "150 g champiñones en láminas",
        "10 aceitunas negras en rodajas",
        "1 cdita orégano seco",
        "1 cda aceite de oliva",
        "Hojas verdes variadas para la ensalada"
      ]
    },
    "steps": {
      "en": [
        "Preheat oven to its hottest setting with the trays inside.",
        "Stretch the dough; spread with tomato and oregano.",
        "Let everyone add mozzarella and toppings.",
        "Bake 10–12 min until crisp and bubbling; drizzle with olive oil.",
        "Serve with a green salad.",
        "Toddler tip: cut into small squares; skip the olives."
      ],
      "es": [
        "Precalentar el horno al máximo con las bandejas adentro.",
        "Estirar la masa; untar con el tomate y el orégano.",
        "Que cada uno agregue la mozzarella y los ingredientes.",
        "Hornear 10–12 min hasta que esté crocante y burbujeante; rociar con aceite de oliva.",
        "Servir con una ensalada verde.",
        "Consejo para pequeños: cortar en cuadraditos; sin aceitunas."
      ]
    },
    "tip": {
      "en": "Kids love building their own — a fun Friday tradition.",
      "es": "A los chicos les encanta armar la suya — una linda tradición de viernes."
    }
  },
  {
    "id": "beef-stroganoff-with-rice",
    "type": "dinner",
    "protein": "beef",
    "base": "rice",
    "name": {
      "en": "Beef Stroganoff with Rice",
      "es": "Strogonoff de Carne con Arroz"
    },
    "ing": {
      "en": [
        "500g beef sirloin, thin strips",
        "250g mushrooms, sliced",
        "1 onion, sliced",
        "1 cup beef broth",
        "1 cup sour cream",
        "1 tsp paprika",
        "1 tsp Dijon mustard",
        "3 cups cooked rice",
        "Fresh parsley",
        "2 tbsp olive oil"
      ],
      "es": [
        "500 g bife de lomo fino en tiras",
        "250 g champiñones en láminas",
        "1 cebolla en pluma",
        "1 taza caldo de carne",
        "1 taza crema agria",
        "1 cdita pimentón",
        "1 cdita mostaza Dijon",
        "3 tazas arroz cocido",
        "Perejil fresco",
        "2 cdas aceite de oliva"
      ]
    },
    "steps": {
      "en": [
        "Sear beef in hot oil in batches until browned and cooked through; set aside.",
        "Sauté onion and mushrooms 6 min.",
        "Add broth, paprika, and mustard; simmer 5 min, then stir in sour cream and the beef.",
        "Warm through without boiling; serve over rice with parsley.",
        "Toddler tip: chop the beef very small and mix into the creamy rice."
      ],
      "es": [
        "Sellar la carne en aceite caliente en tandas hasta dorar y cocinar bien; reservar.",
        "Saltear la cebolla y los champiñones 6 min.",
        "Agregar el caldo, el pimentón y la mostaza; cocinar 5 min y luego incorporar la crema agria y la carne.",
        "Calentar sin que hierva; servir sobre arroz con perejil.",
        "Consejo para pequeños: picar la carne bien chiquita y mezclar con el arroz cremoso."
      ]
    },
    "tip": {
      "en": "",
      "es": ""
    },
    "prep": [
      "rice"
    ]
  },
  {
    "id": "cauliflower-crust-pizza",
    "type": "dinner",
    "protein": "plant",
    "base": "none",
    "tags": [
      "pizza"
    ],
    "experimental": true,
    "name": {
      "en": "Cauliflower Crust Pizza",
      "es": "Pizza con Masa de Coliflor"
    },
    "ing": {
      "en": [
        "1 large cauliflower, grated",
        "2 eggs",
        "250g mozzarella, grated",
        "½ cup grated parmesan",
        "1 can (400g) crushed tomatoes",
        "1 tsp dried oregano",
        "1 cup cherry tomatoes, halved",
        "Fresh basil leaves"
      ],
      "es": [
        "1 coliflor grande rallada",
        "2 huevos",
        "250 g mozzarella rallada",
        "½ taza parmesano rallado",
        "1 lata (400 g) tomates triturados",
        "1 cdita orégano seco",
        "1 taza tomates cherry en mitades",
        "Hojas de albahaca fresca"
      ]
    },
    "steps": {
      "en": [
        "Microwave the grated cauliflower 5 min; cool and squeeze out all the liquid in a towel.",
        "Mix with eggs, half the mozzarella, and parmesan; press into a thin round on a lined tray.",
        "Bake at 220°C / 425°F for 20 min until golden and firm.",
        "Top with tomato, oregano, the rest of the mozzarella, and cherry tomatoes; bake 10 min more.",
        "Finish with basil.",
        "Toddler tip: cut into small soft squares."
      ],
      "es": [
        "Cocinar la coliflor rallada 5 min en el microondas; enfriar y escurrir todo el líquido en un repasador.",
        "Mezclar con los huevos, la mitad de la mozzarella y el parmesano; extender en un disco fino sobre una bandeja forrada.",
        "Hornear a 220 °C 20 min hasta que esté dorada y firme.",
        "Cubrir con tomate, orégano, el resto de la mozzarella y los cherry; hornear 10 min más.",
        "Terminar con albahaca.",
        "Consejo para pequeños: cortar en cuadraditos blandos."
      ]
    },
    "tip": {
      "en": "A vegetable disguised as pizza — worth the squeeze!",
      "es": "Una verdura disfrazada de pizza — ¡vale la pena escurrirla bien!"
    }
  },
  {
    "id": "korean-beef-lettuce-wraps",
    "type": "dinner",
    "protein": "beef",
    "base": "rice",
    "experimental": true,
    "name": {
      "en": "Korean-Style Beef Lettuce Wraps",
      "es": "Wraps de Lechuga con Carne al Estilo Coreano"
    },
    "ing": {
      "en": [
        "500g ground beef",
        "3 tbsp soy sauce",
        "1 tbsp honey",
        "1 tbsp sesame oil",
        "2 cloves garlic, minced",
        "1 tbsp fresh ginger, grated",
        "3 cups cooked rice",
        "1 head butter lettuce, leaves separated",
        "1 carrot, julienned",
        "1 cucumber, cut into sticks",
        "1 tsp sesame seeds"
      ],
      "es": [
        "500 g carne picada",
        "3 cdas salsa de soja",
        "1 cda miel",
        "1 cda aceite de sésamo",
        "2 dientes de ajo picados",
        "1 cda jengibre fresco rallado",
        "3 tazas arroz cocido",
        "1 planta de lechuga manteca, en hojas",
        "1 zanahoria en juliana",
        "1 pepino en bastones",
        "1 cdita semillas de sésamo"
      ]
    },
    "steps": {
      "en": [
        "Brown the beef 8 min until fully cooked; drain.",
        "Add garlic, ginger, soy sauce, honey, and sesame oil; cook 2 min.",
        "Spoon rice and beef into lettuce cups; top with carrot, cucumber, and sesame seeds.",
        "Wrap and eat with your hands.",
        "Toddler tip: serve beef and rice in a bowl with soft cucumber pieces."
      ],
      "es": [
        "Dorar la carne 8 min hasta que esté bien cocida; escurrir.",
        "Agregar el ajo, el jengibre, la soja, la miel y el aceite de sésamo; cocinar 2 min.",
        "Poner arroz y carne en las hojas de lechuga; cubrir con zanahoria, pepino y sésamo.",
        "Envolver y comer con las manos.",
        "Consejo para pequeños: servir la carne y el arroz en un bol con trocitos de pepino."
      ]
    },
    "tip": {
      "en": "Sweet-salty and crunchy — a new favourite in the making?",
      "es": "Dulce, salado y crocante — ¿un nuevo favorito?"
    },
    "prep": [
      "rice"
    ]
  },
  {
    "id": "butternut-squash-mac-and-cheese",
    "type": "dinner",
    "protein": "plant",
    "base": "pasta",
    "tags": [
      "mac-cheese"
    ],
    "experimental": true,
    "name": {
      "en": "Butternut Squash Mac & Cheese",
      "es": "Macarrones con Queso y Calabaza"
    },
    "ing": {
      "en": [
        "400g macaroni",
        "500g butternut squash, peeled & cubed",
        "1½ cups milk",
        "1½ cups shredded cheese",
        "2 tbsp butter",
        "Pinch of nutmeg",
        "½ cup breadcrumbs",
        "2 cups broccoli florets"
      ],
      "es": [
        "400 g macarrones",
        "500 g calabaza pelada y en cubos",
        "1½ tazas leche",
        "1½ tazas queso rallado",
        "2 cdas manteca",
        "Pizca de nuez moscada",
        "½ taza pan rallado",
        "2 tazas floretes de brócoli"
      ]
    },
    "steps": {
      "en": [
        "Boil the squash 12 min until soft; blend with milk, butter, and nutmeg.",
        "Cook macaroni, adding broccoli for the last 3 min; drain.",
        "Stir the squash sauce and cheese into the pasta.",
        "Top with breadcrumbs and grill 5 min until crisp.",
        "Toddler tip: creamy and soft — perfect as is."
      ],
      "es": [
        "Hervir la calabaza 12 min hasta que esté blanda; licuar con la leche, la manteca y la nuez moscada.",
        "Cocinar los macarrones, agregando el brócoli los últimos 3 min; escurrir.",
        "Mezclar la pasta con la salsa de calabaza y el queso.",
        "Cubrir con pan rallado y gratinar 5 min hasta que esté crocante.",
        "Consejo para pequeños: cremoso y blando — perfecto así."
      ]
    },
    "tip": {
      "en": "The orange sauce is half vegetable — kids never notice.",
      "es": "La salsa naranja es mitad verdura — los chicos ni se dan cuenta."
    }
  }
];

/* Make-ahead tasks — listed once per week, with the meals that need them */
const prepTasks = {
  "chop-veg": {
    "en": "Wash and chop the week’s vegetables; store them in containers",
    "es": "Lavar y picar las verduras de la semana; guardarlas en recipientes"
  },
  "cook-chicken": {
    "en": "Cook chicken to shred or slice — roast or poach 2–3 breasts, or a whole chicken",
    "es": "Cocinar pollo para desmenuzar o cortar — asar o hervir 2–3 pechugas, o un pollo entero"
  },
  "rice": {
    "en": "Cook a big pot of rice",
    "es": "Cocinar una olla grande de arroz"
  },
  "quinoa": {
    "en": "Cook a pot of quinoa",
    "es": "Cocinar una olla de quinoa"
  },
  "brown-beef": {
    "en": "Brown the ground beef",
    "es": "Dorar la carne picada"
  },
  "marinate-chicken": {
    "en": "Marinate the chicken thighs in soy sauce, garlic, and ginger",
    "es": "Marinar los muslos de pollo en salsa de soja, ajo y jengibre"
  },
  "marinate-pork-chops": {
    "en": "Marinate the pork chops in garlic, thyme, and olive oil",
    "es": "Marinar las chuletas de cerdo en ajo, tomillo y aceite de oliva"
  },
  "marinate-pork-tenderloin": {
    "en": "Marinate the pork tenderloin in rosemary, garlic, and olive oil",
    "es": "Marinar el lomo de cerdo en romero, ajo y aceite de oliva"
  },
  "roast-veg": {
    "en": "Roast a tray of zucchini, bell peppers, and cherry tomatoes",
    "es": "Asar una bandeja de zapallitos, morrones y tomates cherry"
  },
  "beef-stew": {
    "en": "Cook the beef stew ahead — it tastes even better the next day",
    "es": "Cocinar el guiso de carne de antemano — al día siguiente queda aún más rico"
  },
  "freeze-bananas": {
    "en": "Freeze peeled banana halves in bags for smoothies",
    "es": "Congelar mitades de banana peladas en bolsas para los batidos"
  },
  "muffins": {
    "en": "Bake the banana oat muffins — they keep all week",
    "es": "Hornear los muffins de banana y avena — duran toda la semana"
  },
  "rub-ribs": {
    "en": "Rub the ribs with spices and shred the coleslaw veg (store dry)",
    "es": "Condimentar las costillas y rallar las verduras de la ensalada (guardarlas secas)"
  },
  "egg-muffins": {
    "en": "Bake the egg & veggie muffins — they keep 3 days in the fridge",
    "es": "Hornear los muffins de huevo y verduras — duran 3 días en la heladera"
  },
  "overnight-oats": {
    "en": "Mix the overnight oats the evening before (they keep 2 days)",
    "es": "Preparar la avena remojada la noche anterior (dura 2 días)"
  },
  "chia-pudding": {
    "en": "Stir the chia pudding the evening before (it keeps 3 days)",
    "es": "Preparar el pudín de chía la noche anterior (dura 3 días)"
  },
  "blueberry-muffins": {
    "en": "Bake the blueberry oat muffins (they keep 3 days)",
    "es": "Hornear los muffins de avena y arándanos (duran 3 días)"
  },
  "banana-bread": {
    "en": "Bake the banana bread — it keeps 4 days wrapped",
    "es": "Hornear el budín de banana — dura 4 días envuelto"
  },
  "arroz-con-leche": {
    "en": "Cook the arroz con leche and chill it",
    "es": "Preparar el arroz con leche y enfriarlo"
  },
  "banana-pops": {
    "en": "Dip and freeze the yogurt banana pops",
    "es": "Bañar y congelar las paletas de banana"
  },
  "apple-chips": {
    "en": "Bake the apple chips (low oven, about 2 hours)",
    "es": "Hornear los chips de manzana (horno bajo, unas 2 horas)"
  },
  "yogurt-bark": {
    "en": "Spread and freeze the yogurt bark",
    "es": "Extender y congelar la barrita de yogur"
  },
  "energy-balls": {
    "en": "Roll the oat & date energy balls (they keep a week)",
    "es": "Armar las bolitas de avena y dátiles (duran una semana)"
  },
  "oat-cookies": {
    "en": "Bake the oatmeal raisin cookies",
    "es": "Hornear las galletitas de avena y pasas"
  }
};
