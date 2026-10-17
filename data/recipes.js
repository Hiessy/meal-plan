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
      "beef-broccoli"
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
  }
};
