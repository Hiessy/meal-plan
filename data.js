/* ============================================================
   Bilingual meal data — access any field as  field[lang]
   where lang is 'en' or 'es'
   ============================================================ */
const data = {
  "1": {
    "title": {
      "en": "Week 1",
      "es": "Semana 1"
    },
    "dates": {
      "en": "May 4–8, 2026",
      "es": "4–8 de Mayo, 2026"
    },
    "prep": {
      "date": {
        "en": "Sunday, May 3 — Meal Prep",
        "es": "Domingo, 3 de Mayo — Preparación"
      },
      "tasks": {
        "en": [
          "Cook 3 cups dry rice → ~9 cups cooked (Mon lunch + Wed lunch)",
          "Marinate 2 lbs chicken thighs in soy sauce, garlic, ginger",
          "Brown 1.5 lbs ground beef (Mon dinner soup + Tue pasta)",
          "Chop bell peppers, broccoli, carrots, celery — store in containers",
          "Cook 1 cup dry red lentils (for Thu soup, or cook Thu morning)",
          "Make or buy hummus for Wed snack"
        ],
        "es": [
          "Cocinar 3 tazas de arroz seco → ~9 tazas cocidas (almuerzo lunes + miércoles)",
          "Marinar 1 kg de muslos de pollo en salsa de soja, ajo y jengibre",
          "Dorar 700 g de carne picada (para la sopa del lunes + pasta del martes)",
          "Picar morrones, brócoli, zanahorias y apio — guardar en recipientes",
          "Cocinar ½ taza de lentejas rojas (para la sopa del jueves, o cocinar esa mañana)",
          "Preparar o comprar hummus para la merienda del miércoles"
        ]
      }
    },
    "days": [
      {
        "date": "May 4",
        "meals": [
          {
            "type": "lunch",
            "name": {
              "en": "Chicken Stir-Fry Rice Bowl",
              "es": "Bowl de Arroz con Pollo Salteado"
            },
            "ing": {
              "en": [
                "2 lbs chicken thighs (pre-marinated)",
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
                "1 kg muslos de pollo (marinados)",
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
            }
          },
          {
            "type": "snack",
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
            "type": "dinner",
            "name": {
              "en": "Beef & Lentil Soup with Bread",
              "es": "Sopa de Carne y Lentejas con Pan"
            },
            "ing": {
              "en": [
                "500g pre-browned ground beef",
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
                "500 g carne picada dorada",
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
                "Heat olive oil in a large pot; sauté onion and garlic 5 min until soft.",
                "Add pre-browned beef, carrots, and celery; stir 2 min.",
                "Add lentils, tomatoes, and broth. Bring to a boil.",
                "Reduce heat, cover, simmer 25–30 min until lentils are tender.",
                "Season with cumin, salt, and pepper.",
                "Serve with crusty bread."
              ],
              "es": [
                "Calentar aceite en olla grande; saltear la cebolla y el ajo 5 min hasta ablandar.",
                "Agregar la carne dorada, las zanahorias y el apio; mezclar 2 min.",
                "Agregar las lentejas, los tomates y el caldo. Llevar a hervor.",
                "Reducir el fuego, tapar y cocinar a fuego lento 25–30 min hasta que las lentejas estén tiernas.",
                "Condimentar con comino, sal y pimienta.",
                "Servir con pan de campo."
              ]
            },
            "tip": {
              "en": "Iron-rich meal for mom — lentils + red meat is a great combination in the third trimester!",
              "es": "¡Plato rico en hierro para mamá — lentejas y carne roja son una combinación excelente en el tercer trimestre!"
            }
          }
        ]
      },
      {
        "date": "May 5",
        "meals": [
          {
            "type": "lunch",
            "name": {
              "en": "Pasta Bolognese",
              "es": "Pasta Boloñesa"
            },
            "ing": {
              "en": [
                "Leftover cooked ground beef",
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
                "Carne picada sobrante cocida",
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
                "Add leftover ground beef; stir together over medium heat.",
                "Add crushed tomatoes, oregano, and basil; simmer 15 min.",
                "Toss pasta with sauce. Serve with parmesan.",
                "Toddler tip: serve with smaller pasta shapes, sauce on the side if preferred."
              ],
              "es": [
                "Cocinar la pasta según las instrucciones del paquete; escurrir.",
                "Saltear la cebolla y el ajo en aceite de oliva 5 min.",
                "Agregar la carne picada sobrante; mezclar a fuego medio.",
                "Agregar los tomates triturados, el orégano y la albahaca; cocinar a fuego lento 15 min.",
                "Mezclar la pasta con la salsa. Servir con parmesano.",
                "Consejo para pequeños: servir con pasta más chica, salsa al costado si prefieren."
              ]
            },
            "tip": {
              "en": "",
              "es": ""
            }
          },
          {
            "type": "snack",
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
            "type": "dinner",
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
          }
        ]
      },
      {
        "date": "May 6",
        "meals": [
          {
            "type": "lunch",
            "name": {
              "en": "Chicken Rice Bowl with Avocado",
              "es": "Bowl de Arroz con Pollo y Palta"
            },
            "ing": {
              "en": [
                "Leftover cooked chicken, sliced",
                "2 cups cooked rice",
                "2 avocados, sliced",
                "1 cucumber, sliced",
                "1 cup frozen corn, thawed",
                "Juice of 1 lime",
                "1 tbsp olive oil",
                "Salt"
              ],
              "es": [
                "Pollo cocido sobrante en rodajas",
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
            }
          },
          {
            "type": "snack",
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
            "type": "dinner",
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
          }
        ]
      },
      {
        "date": "May 7",
        "meals": [
          {
            "type": "lunch",
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
            "type": "snack",
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
            "type": "dinner",
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
          }
        ]
      },
      {
        "date": "May 8",
        "meals": [
          {
            "type": "lunch",
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
            "type": "snack",
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
            "type": "dinner",
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
          }
        ]
      }
    ],
    "shopping": [
      {
        "cat": "Proteins & Fish",
        "items": {
          "en": [
            "2 lbs chicken thighs (bone-in)",
            "1.5 lbs ground beef",
            "4 salmon fillets (180g each)",
            "700g pork tenderloin",
            "600g tilapia or cod fillets",
            "500g beef sirloin"
          ],
          "es": [
            "1 kg muslos de pollo (con hueso)",
            "700 g carne picada",
            "4 filetes de salmón (180 g c/u)",
            "700 g lomo de cerdo",
            "600 g tilapia o bacalao",
            "500 g bife de lomo fino"
          ]
        }
      },
      {
        "cat": "Vegetables",
        "items": {
          "en": [
            "4 bell peppers (mixed colors)",
            "2 heads broccoli",
            "5 large carrots",
            "3 stalks celery",
            "4 onions",
            "2 heads garlic",
            "2 large sweet potatoes",
            "400g green beans",
            "2 zucchini",
            "4 large potatoes",
            "1 bag fresh spinach (150g)",
            "2 avocados",
            "1 cucumber",
            "1 cup cherry tomatoes",
            "2 cups green cabbage (or pre-shredded)",
            "1 cup frozen corn"
          ],
          "es": [
            "4 morrones (colores variados)",
            "2 cabezas de brócoli",
            "5 zanahorias grandes",
            "3 tallos de apio",
            "4 cebollas",
            "2 cabezas de ajo",
            "2 batatas grandes",
            "400 g chauchas",
            "2 zapallitos",
            "4 papas grandes",
            "1 bolsa espinaca fresca (150 g)",
            "2 paltas",
            "1 pepino",
            "1 taza tomates cherry",
            "2 tazas repollo verde (o comprado rallado)",
            "1 taza choclo congelado"
          ]
        }
      },
      {
        "cat": "Fruit",
        "items": {
          "en": [
            "4 apples",
            "4 bananas",
            "1 cup strawberries",
            "1 cup grapes",
            "2 kiwis",
            "2 oranges",
            "5 limes",
            "2 lemons"
          ],
          "es": [
            "4 manzanas",
            "4 bananas",
            "1 taza frutillas",
            "1 taza uvas",
            "2 kiwis",
            "2 naranjas",
            "5 limas",
            "2 limones"
          ]
        }
      },
      {
        "cat": "Grains & Bread",
        "items": {
          "en": [
            "3 cups dry white rice",
            "500g penne pasta",
            "340g egg noodles",
            "8 small flour tortillas",
            "Crusty bread loaf",
            "Pita bread"
          ],
          "es": [
            "3 tazas arroz blanco seco",
            "500 g pasta penne",
            "340 g fideos de huevo",
            "8 tortillas de harina pequeñas",
            "Pan de campo",
            "Pan pita"
          ]
        }
      },
      {
        "cat": "Pantry",
        "items": {
          "en": [
            "Soy sauce",
            "Oyster sauce",
            "Sesame oil",
            "Cumin (ground)",
            "Turmeric",
            "Smoked paprika",
            "Chili powder",
            "Dried oregano",
            "Dried basil",
            "Rosemary",
            "Thyme",
            "Dill or parsley",
            "2 cans crushed/diced tomatoes",
            "1L beef broth",
            "1L vegetable broth",
            "1 cup dry red lentils",
            "Olive oil",
            "Peanut butter",
            "Almond butter"
          ],
          "es": [
            "Salsa de soja",
            "Salsa de ostras",
            "Aceite de sésamo",
            "Comino molido",
            "Cúrcuma",
            "Pimentón ahumado",
            "Ají molido",
            "Orégano seco",
            "Albahaca seca",
            "Romero",
            "Tomillo",
            "Eneldo o perejil",
            "2 latas de tomates picados/triturados",
            "1 L caldo de carne",
            "1 L caldo de verduras",
            "1 taza lentejas rojas",
            "Aceite de oliva",
            "Mantequilla de maní",
            "Mantequilla de almendras"
          ]
        }
      },
      {
        "cat": "Dairy & Fridge",
        "items": {
          "en": [
            "Parmesan cheese",
            "Butter",
            "Milk",
            "2 cups Greek yogurt",
            "100g cheddar cheese",
            "Mayonnaise"
          ],
          "es": [
            "Queso parmesano",
            "Manteca",
            "Leche",
            "2 tazas yogur griego",
            "100 g queso cheddar",
            "Mayonesa"
          ]
        }
      },
      {
        "cat": "Other",
        "items": {
          "en": [
            "1 cup granola",
            "1 cup mixed berries (fresh or frozen)",
            "Hummus (store-bought OK)"
          ],
          "es": [
            "1 taza granola",
            "1 taza frutas del bosque (frescas o congeladas)",
            "Hummus (comprado está bien)"
          ]
        }
      }
    ]
  },
  "2": {
    "title": {
      "en": "Week 2",
      "es": "Semana 2"
    },
    "dates": {
      "en": "May 11–15, 2026",
      "es": "11–15 de Mayo, 2026"
    },
    "prep": {
      "date": {
        "en": "Sunday, May 10 — Meal Prep",
        "es": "Domingo, 10 de Mayo — Preparación"
      },
      "tasks": {
        "en": [
          "Roast a whole chicken or 2 lbs chicken pieces — for Mon soup, Fri fried rice",
          "Cook 2 cups dry quinoa → ~6 cups cooked (Tue bowl + Thu cod)",
          "Roast a tray of zucchini, bell peppers, cherry tomatoes (for Tue bowl)",
          "Marinate pork chops in garlic, thyme, and olive oil",
          "Prepare beef stew: sear beef, sauté vegetables, slow-cook (or use slow cooker 6–8 hrs low)",
          "Freeze banana halves in zip bags for Tue smoothie"
        ],
        "es": [
          "Asar un pollo entero o 1 kg de trozos de pollo — para la sopa del lunes y el arroz frito del viernes",
          "Cocinar 2 tazas de quinoa seca → ~6 tazas cocidas (bol del martes + bacalao del jueves)",
          "Asar una bandeja de zapallitos, morrones y tomates cherry (para el bol del martes)",
          "Marinar las chuletas de cerdo en ajo, tomillo y aceite de oliva",
          "Preparar el guiso de carne: sellar la carne, saltear las verduras, cocinar a fuego lento (o usar olla de cocción lenta 6–8 hs a temperatura baja)",
          "Congelar mitades de banana en bolsas con cierre para el batido del martes"
        ]
      }
    },
    "days": [
      {
        "date": "May 11",
        "meals": [
          {
            "type": "lunch",
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
            }
          },
          {
            "type": "snack",
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
            "type": "dinner",
            "name": {
              "en": "Pork Chops with Apple Sauce & Roasted Potatoes",
              "es": "Chuletas de Cerdo con Compota de Manzana y Papas Asadas"
            },
            "ing": {
              "en": [
                "4 pork chops (from Sunday marinade)",
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
                "4 chuletas de cerdo (de la marinada del domingo)",
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
            }
          }
        ]
      },
      {
        "date": "May 12",
        "meals": [
          {
            "type": "lunch",
            "name": {
              "en": "Quinoa Bowl with Roasted Veggies & Chickpeas",
              "es": "Bowl de Quinoa con Verduras Asadas y Garbanzos"
            },
            "ing": {
              "en": [
                "2 cups cooked quinoa",
                "1 can (400g) chickpeas, drained & rinsed",
                "Roasted vegetables from Sunday",
                "2 tbsp olive oil",
                "1 tbsp lemon juice",
                "1 tsp cumin",
                "Fresh parsley",
                "Salt"
              ],
              "es": [
                "2 tazas quinoa cocida",
                "1 lata (400 g) garbanzos escurridos y enjuagados",
                "Verduras asadas del domingo",
                "2 cdas aceite de oliva",
                "1 cda jugo de limón",
                "1 cdita comino",
                "Perejil fresco",
                "Sal"
              ]
            },
            "steps": {
              "en": [
                "Reheat quinoa and roasted vegetables (microwave or in pan).",
                "Optionally toast chickpeas in a dry pan with cumin and oil for 5 min until crispy.",
                "Build bowls: quinoa base, topped with roasted vegetables and chickpeas.",
                "Drizzle with olive oil and lemon juice; garnish with parsley.",
                "Toddler tip: mash chickpeas slightly, serve with soft veggies and quinoa."
              ],
              "es": [
                "Calentar la quinoa y las verduras asadas (microondas o en sartén).",
                "Opcionalmente tostar los garbanzos en sartén seca con comino y aceite 5 min hasta que estén crocantes.",
                "Armar los bols: base de quinoa, encima las verduras y los garbanzos.",
                "Rociar con aceite de oliva y jugo de limón; decorar con perejil.",
                "Consejo para pequeños: aplastar los garbanzos un poco, servir con verduras blandas y quinoa."
              ]
            },
            "tip": {
              "en": "",
              "es": ""
            }
          },
          {
            "type": "snack",
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
            }
          },
          {
            "type": "dinner",
            "name": {
              "en": "Hearty Beef Stew with Bread",
              "es": "Guiso de Carne con Pan"
            },
            "ing": {
              "en": [
                "700g beef chuck, cubed (pre-cooked from Sunday)",
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
                "700 g aguja en cubos (pre-cocida del domingo)",
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
                "If not made Sunday: dust beef with flour, salt, pepper; brown in batches in Dutch oven.",
                "Sauté onion and garlic in same pot; add herbs.",
                "Return beef; add tomatoes, broth (and wine). Bring to boil.",
                "Cover and simmer 1.5–2 hrs until beef is very tender.",
                "Add potatoes and carrots in last 30 min.",
                "If made Sunday, simply reheat gently and serve with crusty bread."
              ],
              "es": [
                "Si no se hizo el domingo: rebozar la carne en harina, sal y pimienta; dorar en tandas en olla de hierro.",
                "Saltear la cebolla y el ajo en la misma olla; agregar las hierbas.",
                "Volver a poner la carne; agregar tomates, caldo (y vino). Llevar a hervor.",
                "Tapar y cocinar a fuego lento 1,5–2 hs hasta que la carne esté muy tierna.",
                "Agregar papas y zanahorias en los últimos 30 min.",
                "Si se hizo el domingo, simplemente calentar suavemente y servir con pan."
              ]
            },
            "tip": {
              "en": "Beef stew is one of the best iron-rich dinners — red meat + vegetables in a hearty, comforting dish.",
              "es": "El guiso de carne es una de las mejores cenas ricas en hierro — carne roja + verduras en un plato reconfortante y nutritivo."
            }
          }
        ]
      },
      {
        "date": "May 13",
        "meals": [
          {
            "type": "lunch",
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
              "en": "Limit tuna to 2 servings per week for pregnant women (mercury). This week we use it just once more on Friday.",
              "es": "Limitar el atún a 2 porciones por semana para embarazadas (mercurio). Esta semana lo usamos una vez más el viernes."
            }
          },
          {
            "type": "snack",
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
            "type": "dinner",
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
            }
          }
        ]
      },
      {
        "date": "May 14",
        "meals": [
          {
            "type": "lunch",
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
            "type": "snack",
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
            "type": "dinner",
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
            }
          }
        ]
      },
      {
        "date": "May 15",
        "meals": [
          {
            "type": "lunch",
            "name": {
              "en": "Pork Fried Rice",
              "es": "Arroz Frito con Cerdo"
            },
            "ing": {
              "en": [
                "Leftover cooked pork chop, diced",
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
                "Chuleta de cerdo sobrante picada",
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
                "Dice or shred leftover pork chop meat.",
                "Heat oil in wok on high; add pork and stir-fry 2 min.",
                "Push to side; crack and scramble eggs in the pan.",
                "Add rice, breaking up clumps; stir-fry 3 min.",
                "Add peas, carrots, and garlic; stir 2 more min.",
                "Drizzle soy sauce and sesame oil; toss to combine.",
                "Garnish with spring onions. Toddler: separate soft portion."
              ],
              "es": [
                "Picar o desmenuzar la carne sobrante.",
                "Calentar aceite en wok a fuego alto; agregar la carne y saltear 2 min.",
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
            }
          },
          {
            "type": "snack",
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
            "type": "dinner",
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
                "Lettuce, tomato, onion rings",
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
                "Lechuga, tomate, aros de cebolla",
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
          }
        ]
      }
    ],
    "shopping": [
      {
        "cat": "Proteins & Fish",
        "items": {
          "en": [
            "1 whole chicken or 2 lbs chicken pieces",
            "700g beef chuck (for stew)",
            "4 pork chops",
            "700g chicken breast or thighs (for curry)",
            "4 cod fillets (180g each)",
            "700g ground beef",
            "2 cans tuna in spring water"
          ],
          "es": [
            "1 pollo entero o 1 kg de trozos de pollo",
            "700 g aguja (para el guiso)",
            "4 chuletas de cerdo",
            "700 g pechuga o muslos de pollo (para el curry)",
            "4 filetes de bacalao (180 g c/u)",
            "700 g carne picada",
            "2 latas de atún en agua"
          ]
        }
      },
      {
        "cat": "Vegetables",
        "items": {
          "en": [
            "4 carrots",
            "3 celery stalks",
            "3 onions",
            "2 heads garlic",
            "1 head fresh ginger",
            "1 cup frozen peas",
            "1 bunch asparagus",
            "2 cups fresh spinach",
            "3 potatoes (for stew)",
            "4 medium potatoes (for roasting)",
            "1 cup cherry tomatoes",
            "3 zucchini (for Sunday roast)",
            "2 bell peppers (for Sunday roast)",
            "Spring onions (1 bunch)",
            "Lettuce (for burgers)",
            "2 tomatoes (for burgers)"
          ],
          "es": [
            "4 zanahorias",
            "3 tallos de apio",
            "3 cebollas",
            "2 cabezas de ajo",
            "1 trozo jengibre fresco",
            "1 taza arvejas congeladas",
            "1 atado de espárragos",
            "2 tazas espinaca fresca",
            "3 papas (para el guiso)",
            "4 papas medianas (para asar)",
            "1 taza tomates cherry",
            "3 zapallitos (para el asado del domingo)",
            "2 morrones (para el asado del domingo)",
            "Cebollas de verdeo (1 atado)",
            "Lechuga (para hamburguesas)",
            "2 tomates (para hamburguesas)"
          ]
        }
      },
      {
        "cat": "Fruit",
        "items": {
          "en": [
            "2 cups grapes",
            "4 bananas (freeze 2 for smoothie)",
            "3 large oranges",
            "Fresh fruit for yogurt (optional)",
            "2 apples (for pork applesauce)"
          ],
          "es": [
            "2 tazas uvas",
            "4 bananas (congelar 2 para el batido)",
            "3 naranjas grandes",
            "Fruta fresca para yogur (opcional)",
            "2 manzanas (para la compota de cerdo)"
          ]
        }
      },
      {
        "cat": "Grains & Bread",
        "items": {
          "en": [
            "2 cups dry quinoa",
            "340g pasta (for tuna salad)",
            "3 cups dry rice",
            "4 burger buns",
            "8 rice cakes",
            "Crusty bread loaf"
          ],
          "es": [
            "2 tazas quinoa seca",
            "340 g pasta (para la ensalada de atún)",
            "3 tazas arroz seco",
            "4 panes de hamburguesa",
            "8 galletas de arroz",
            "Pan de campo"
          ]
        }
      },
      {
        "cat": "Pantry",
        "items": {
          "en": [
            "Chicken broth (1.2L)",
            "Beef broth (500ml)",
            "Vegetable broth (700ml)",
            "2 cans diced tomatoes",
            "1 can (400ml) coconut milk",
            "2 cans white beans",
            "1 can chickpeas",
            "Curry powder",
            "Rosemary",
            "Thyme",
            "Garlic powder",
            "Smoked paprika",
            "Worcestershire sauce",
            "Soy sauce",
            "Sesame oil",
            "Red wine (optional for stew)",
            "Flour (for coating beef)",
            "Olive oil",
            "Brown sugar",
            "Cinnamon"
          ],
          "es": [
            "Caldo de pollo (1,2 L)",
            "Caldo de carne (500 ml)",
            "Caldo de verduras (700 ml)",
            "2 latas de tomates picados",
            "1 lata (400 ml) leche de coco",
            "2 latas de alubias blancas",
            "1 lata de garbanzos",
            "Curry en polvo",
            "Romero",
            "Tomillo",
            "Ajo en polvo",
            "Pimentón ahumado",
            "Salsa Worcestershire",
            "Salsa de soja",
            "Aceite de sésamo",
            "Vino tinto (opcional para el guiso)",
            "Harina (para rebozar la carne)",
            "Aceite de oliva",
            "Azúcar mascabo",
            "Canela"
          ]
        }
      },
      {
        "cat": "Dairy & Fridge",
        "items": {
          "en": [
            "200g assorted cheese",
            "115g cream cheese",
            "Greek yogurt (2 cups)",
            "Butter",
            "Milk",
            "Eggs (2)",
            "Mayonnaise"
          ],
          "es": [
            "200 g queso variado",
            "115 g queso crema",
            "Yogur griego (2 tazas)",
            "Manteca",
            "Leche",
            "Huevos (2)",
            "Mayonesa"
          ]
        }
      },
      {
        "cat": "Other",
        "items": {
          "en": [
            "Mixed nuts (½ cup)",
            "Honey",
            "Whole-grain crackers",
            "Ketchup & mustard"
          ],
          "es": [
            "Nueces variadas (½ taza)",
            "Miel",
            "Galletas integrales",
            "Ketchup y mostaza"
          ]
        }
      }
    ]
  },
  "3": {
    "title": {
      "en": "Week 3",
      "es": "Semana 3"
    },
    "dates": {
      "en": "May 18–22, 2026",
      "es": "18–22 de Mayo, 2026"
    },
    "prep": {
      "date": {
        "en": "Sunday, May 17 — Meal Prep",
        "es": "Domingo, 17 de Mayo — Preparación"
      },
      "tasks": {
        "en": [
          "Cook 2 large chicken breasts — slice half for Caesar wraps, keep rest for pasta",
          "Bake banana oat muffins (recipe in Tuesday snack) — 12 muffins for the week",
          "Shred cabbage and carrots for coleslaw; store dry until Tuesday dinner",
          "Hard-boil 4 eggs for the week",
          "Pre-cook a pot of rice (2 cups dry) for the week",
          "Make or buy Caesar dressing"
        ],
        "es": [
          "Cocinar 2 pechugas de pollo grandes — cortar la mitad para los wraps César, reservar el resto para la pasta",
          "Hornear muffins de banana y avena (receta en la merienda del martes) — 12 muffins para la semana",
          "Rallar el repollo y las zanahorias para la ensalada; guardar seco hasta la cena del martes",
          "Cocer 4 huevos duros para la semana",
          "Pre-cocinar una olla de arroz (2 tazas secas) para la semana",
          "Preparar o comprar aderezo César"
        ]
      }
    },
    "days": [
      {
        "date": "May 18",
        "meals": [
          {
            "type": "lunch",
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
                "Shred or slice pre-cooked chicken.",
                "Toss romaine with Caesar dressing and parmesan.",
                "Warm tortillas briefly in a dry pan or microwave.",
                "Fill each tortilla with the lettuce mixture and chicken.",
                "Roll tightly, slice in half, and serve.",
                "Toddler tip: serve filling in a bowl (deconstructed); skip raw lettuce if preferred."
              ],
              "es": [
                "Desmenuzar o cortar el pollo pre-cocido.",
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
            }
          },
          {
            "type": "snack",
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
            "type": "dinner",
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
          }
        ]
      },
      {
        "date": "May 19",
        "meals": [
          {
            "type": "lunch",
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
            "type": "snack",
            "name": {
              "en": "Banana Oat Muffins (baked Sunday)",
              "es": "Muffins de Banana y Avena (horneados el domingo)"
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
                "Sunday: Preheat oven to 180°C / 350°F; line muffin tin.",
                "Mash bananas in a large bowl until smooth.",
                "Add eggs, honey, vanilla, and cinnamon; mix well.",
                "Stir in oats, baking powder, and salt until combined.",
                "Fill muffin cups ¾ full; bake 18–20 min until toothpick comes out clean.",
                "Cool; store in airtight container for the week (or freeze).",
                "Serve 1–2 muffins per person as snack Mon–Fri."
              ],
              "es": [
                "Domingo: Precalentar el horno a 180 °C; forrar el molde de muffins.",
                "Pisar las bananas en un bol grande hasta obtener un puré suave.",
                "Agregar los huevos, la miel, la vainilla y la canela; mezclar bien.",
                "Incorporar la avena, el polvo para hornear y la sal hasta combinar.",
                "Rellenar los moldes ¾ del volumen; hornear 18–20 min hasta que el palillo salga limpio.",
                "Enfriar; guardar en recipiente hermético por toda la semana (o congelar).",
                "Servir 1–2 muffins por persona como merienda de lunes a viernes."
              ]
            },
            "tip": {
              "en": "These muffins are naturally sweetened, great for the toddler, and a wholesome snack for all. Oats provide iron too!",
              "es": "¡Estos muffins son naturalmente dulces, perfectos para el bebé, y una merienda nutritiva para todos. La avena también aporta hierro!"
            }
          },
          {
            "type": "dinner",
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
                "Rub ribs with paprika, garlic powder, and salt (Sunday if possible).",
                "Wrap ribs in foil; bake at 150°C / 300°F for 2.5 hours.",
                "Brush with BBQ sauce; bake uncovered 15 min more.",
                "Mix coleslaw: combine cabbage, carrot, mayo, vinegar, and sugar; chill until serving.",
                "Boil corn 8–10 min, or roast alongside ribs.",
                "Toddler tip: shred rib meat off the bone, serve with soft cooked corn."
              ],
              "es": [
                "Condimentar las costillas con pimentón, ajo en polvo y sal (el domingo si es posible).",
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
            }
          }
        ]
      },
      {
        "date": "May 20",
        "meals": [
          {
            "type": "lunch",
            "name": {
              "en": "Chicken Pasta with Pesto",
              "es": "Pasta con Pollo y Pesto"
            },
            "ing": {
              "en": [
                "500g penne pasta",
                "1½ cups leftover cooked chicken, sliced",
                "4 tbsp pesto (jar or homemade)",
                "1 cup cherry tomatoes, halved",
                "½ cup parmesan, grated",
                "Olive oil",
                "Salt & pepper",
                "Pine nuts (optional)"
              ],
              "es": [
                "500 g pasta penne",
                "1½ tazas pollo cocido sobrante en rodajas",
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
            }
          },
          {
            "type": "snack",
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
            "type": "dinner",
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
          }
        ]
      },
      {
        "date": "May 21",
        "meals": [
          {
            "type": "lunch",
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
              "en": "Second tuna serving this week — keep to 2 max for pregnant women (mercury). Omega-3s are beneficial for baby!",
              "es": "Segunda porción de atún esta semana — máximo 2 veces por semana para embarazadas (mercurio). ¡Los omega-3 son beneficiosos para el bebé!"
            }
          },
          {
            "type": "snack",
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
                "Refreshing and hydrating for a warm May afternoon."
              ],
              "es": [
                "Cortar la sandía en cubos del mismo tamaño.",
                "Quitar el cabito y cortar las frutillas por la mitad.",
                "Ensartar fruta alternada en los palitos de brocheta.",
                "Consejo para pequeños: omitir los palitos completamente (¡riesgo de atragantamiento!), servir los trozos de fruta en un bol.",
                "Refrescante e hidratante para una tarde cálida de mayo."
              ]
            },
            "tip": {
              "en": "",
              "es": ""
            }
          },
          {
            "type": "dinner",
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
            }
          }
        ]
      },
      {
        "date": "May 22",
        "meals": [
          {
            "type": "lunch",
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
            "type": "snack",
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
            "type": "dinner",
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
          }
        ]
      }
    ],
    "shopping": [
      {
        "cat": "Proteins & Fish",
        "items": {
          "en": [
            "2 large chicken breasts (for Sunday prep)",
            "4 salmon fillets (180g each)",
            "1kg pork spare ribs",
            "700g ground beef",
            "2 cans tuna in spring water",
            "4 cod or haddock fillets (180g each)"
          ],
          "es": [
            "2 pechugas de pollo grandes (para la preparación del domingo)",
            "4 filetes de salmón (180 g c/u)",
            "1 kg costillas de cerdo",
            "700 g carne picada",
            "2 latas de atún en agua",
            "4 filetes de bacalao o merluza (180 g c/u)"
          ]
        }
      },
      {
        "cat": "Vegetables",
        "items": {
          "en": [
            "4 zucchini",
            "4 bell peppers (mixed)",
            "1 red onion",
            "3 onions",
            "3 heads garlic",
            "4 carrots",
            "4 celery stalks",
            "1 bag fresh spinach (150g)",
            "1 cup cherry tomatoes",
            "1 bunch asparagus",
            "3 large potatoes (for fish chips)",
            "3 cups shredded cabbage (or buy coleslaw mix)",
            "1 head romaine lettuce",
            "2 tomatoes",
            "300g mushrooms",
            "Fresh thyme",
            "Fresh mint or parsley",
            "Fresh ginger"
          ],
          "es": [
            "4 zapallitos",
            "4 morrones (variados)",
            "1 cebolla morada",
            "3 cebollas",
            "3 cabezas de ajo",
            "4 zanahorias",
            "4 tallos de apio",
            "1 bolsa espinaca fresca (150 g)",
            "1 taza tomates cherry",
            "1 atado espárragos",
            "3 papas grandes (para el pescado con papas)",
            "3 tazas repollo rallado (o comprar mezcla para ensalada)",
            "1 cabeza lechuga romana",
            "2 tomates",
            "300 g champiñones",
            "Tomillo fresco",
            "Menta o perejil fresco",
            "Jengibre fresco"
          ]
        }
      },
      {
        "cat": "Fruit",
        "items": {
          "en": [
            "4 apples",
            "4 bananas (+ 3 ripe for muffins)",
            "½ small watermelon",
            "1 cup strawberries",
            "2 cups grapes",
            "2 pears",
            "1 lemon",
            "3 limes"
          ],
          "es": [
            "4 manzanas",
            "4 bananas (+ 3 maduras para los muffins)",
            "½ sandía pequeña",
            "1 taza frutillas",
            "2 tazas uvas",
            "2 peras",
            "1 limón",
            "3 limas"
          ]
        }
      },
      {
        "cat": "Grains & Bread",
        "items": {
          "en": [
            "1½ cups dry couscous",
            "500g penne",
            "500g spaghetti",
            "1½ cups arborio rice",
            "200g small pasta (for minestrone)",
            "4 large flour tortillas",
            "4 pita breads",
            "8 slices sandwich bread",
            "Crusty bread loaf",
            "2 cups rolled oats"
          ],
          "es": [
            "1½ tazas cuscús seco",
            "500 g penne",
            "500 g spaghetti",
            "1½ tazas arroz arborio",
            "200 g pasta chica (para la minestrone)",
            "4 tortillas de harina grandes",
            "4 panes pita",
            "8 rebanadas de pan de molde",
            "Pan de campo",
            "2 tazas avena arrollada"
          ]
        }
      },
      {
        "cat": "Pantry",
        "items": {
          "en": [
            "Vegetable broth (1.5L)",
            "Chicken broth (1L)",
            "1 can crushed tomatoes",
            "2 cans diced tomatoes",
            "1 can cannellini beans",
            "1 can chickpeas",
            "Pesto (jar, 200g)",
            "BBQ sauce",
            "Apple cider vinegar",
            "Smoked paprika",
            "Cumin",
            "Oregano",
            "Basil",
            "Garlic powder",
            "Dijon mustard",
            "Breadcrumbs (1 cup)",
            "Red wine (optional)",
            "Olive oil",
            "Baking powder",
            "Vanilla extract",
            "Cinnamon",
            "Pine nuts (optional)",
            "Honey"
          ],
          "es": [
            "Caldo de verduras (1,5 L)",
            "Caldo de pollo (1 L)",
            "1 lata tomates triturados",
            "2 latas tomates picados",
            "1 lata alubias cannellini",
            "1 lata garbanzos",
            "Pesto (frasco, 200 g)",
            "Salsa BBQ",
            "Vinagre de manzana",
            "Pimentón ahumado",
            "Comino",
            "Orégano",
            "Albahaca",
            "Ajo en polvo",
            "Mostaza Dijon",
            "Pan rallado (1 taza)",
            "Vino tinto (opcional)",
            "Aceite de oliva",
            "Polvo para hornear",
            "Esencia de vainilla",
            "Canela",
            "Piñones (opcional)",
            "Miel"
          ]
        }
      },
      {
        "cat": "Dairy & Fridge",
        "items": {
          "en": [
            "Parmesan cheese (200g)",
            "Caesar dressing (bottle, or make your own)",
            "200g cheddar cheese",
            "200g assorted cheese",
            "Cream cheese",
            "Butter",
            "Milk",
            "Eggs (4)",
            "Mayonnaise"
          ],
          "es": [
            "Parmesano (200 g)",
            "Aderezo César (botella, o preparar casero)",
            "200 g queso cheddar",
            "200 g queso variado",
            "Queso crema",
            "Manteca",
            "Leche",
            "Huevos (4)",
            "Mayonesa"
          ]
        }
      },
      {
        "cat": "Other",
        "items": {
          "en": [
            "4 corn cobs or frozen corn",
            "Wooden skewers",
            "Crackers"
          ],
          "es": [
            "4 choclos o choclo congelado",
            "Palitos de brocheta de madera",
            "Galletas"
          ]
        }
      }
    ]
  },
  "4": {
    "title": {
      "en": "Week 4",
      "es": "Semana 4"
    },
    "dates": {
      "en": "May 25–29, 2026",
      "es": "25–29 de Mayo, 2026"
    },
    "prep": {
      "date": {
        "en": "Sunday, May 24 — Meal Prep",
        "es": "Domingo, 24 de Mayo — Preparación"
      },
      "tasks": {
        "en": [
          "Make a full beef & vegetable stew (for Mon lunch — big batch)",
          "Cook 2 cups dry rice and 1.5 cups dry quinoa",
          "Cook and shred 2 chicken breasts — for enchiladas and noodle soup",
          "Make enchilada filling: mix chicken with black beans, corn, and spices",
          "Marinate pork tenderloin in rosemary, garlic, and olive oil",
          "Freeze mixed berries + banana in bags for Friday smoothie"
        ],
        "es": [
          "Preparar un guiso completo de carne y verduras (para el almuerzo del lunes — en cantidad)",
          "Cocinar 2 tazas de arroz seco y 1,5 tazas de quinoa seca",
          "Cocinar y desmenuzar 2 pechugas de pollo — para las enchiladas y la sopa de fideos",
          "Preparar el relleno de enchiladas: mezclar el pollo con porotos negros, choclo y especias",
          "Marinar el lomo de cerdo en romero, ajo y aceite de oliva",
          "Congelar frutas del bosque + banana en bolsas para el batido del viernes"
        ]
      }
    },
    "days": [
      {
        "date": "May 25",
        "meals": [
          {
            "type": "lunch",
            "name": {
              "en": "Beef & Vegetable Stew with Rice",
              "es": "Guiso de Carne y Verduras con Arroz"
            },
            "ing": {
              "en": [
                "Batch beef & vegetable stew from Sunday",
                "2 cups cooked rice"
              ],
              "es": [
                "Guiso de carne y verduras del domingo",
                "2 tazas arroz cocido"
              ]
            },
            "steps": {
              "en": [
                "Reheat stew on stovetop over medium heat, stirring occasionally, until piping hot.",
                "Taste and adjust seasoning.",
                "Serve over steamed rice.",
                "Toddler tip: shred beef pieces small, ensure vegetables are soft."
              ],
              "es": [
                "Calentar el guiso en la hornalla a fuego medio, revolviendo ocasionalmente, hasta que esté bien caliente.",
                "Probar y ajustar la sazón.",
                "Servir sobre el arroz.",
                "Consejo para pequeños: desmenuzar los trozos de carne en pedazos chicos, asegurarse de que las verduras estén blandas."
              ]
            },
            "tip": {
              "en": "Iron-rich, comforting Monday lunch to start the week strong!",
              "es": "¡Almuerzo rico en hierro para empezar la semana con energía!"
            }
          },
          {
            "type": "snack",
            "name": {
              "en": "Yogurt with Honey & Nuts",
              "es": "Yogur con Miel y Nueces"
            },
            "ing": {
              "en": [
                "2 cups Greek yogurt",
                "3 tbsp honey",
                "½ cup mixed nuts, roughly chopped"
              ],
              "es": [
                "2 tazas yogur griego",
                "3 cdas miel",
                "½ taza nueces variadas groseramente picadas"
              ]
            },
            "steps": {
              "en": [
                "Spoon yogurt into bowls.",
                "Drizzle honey over top.",
                "Sprinkle with chopped nuts.",
                "Toddler tip: NO nuts — just yogurt with honey and maybe a few berries."
              ],
              "es": [
                "Poner el yogur en bols.",
                "Rociar con miel.",
                "Espolvorear con nueces picadas.",
                "Consejo para pequeños: SIN nueces — solo yogur con miel y quizás algunas frutas del bosque."
              ]
            },
            "tip": {
              "en": "",
              "es": ""
            }
          },
          {
            "type": "dinner",
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
                "Fresh cilantro & sour cream to serve"
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
                "Cilantro fresco y crema agria para servir"
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
            }
          }
        ]
      },
      {
        "date": "May 26",
        "meals": [
          {
            "type": "lunch",
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
            "type": "snack",
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
            "type": "dinner",
            "name": {
              "en": "Pork Tenderloin with Roasted Root Vegetables",
              "es": "Lomo de Cerdo con Verduras de Raíz Asadas"
            },
            "ing": {
              "en": [
                "700g pork tenderloin (pre-marinated from Sunday)",
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
                "700 g lomo de cerdo (marinado desde el domingo)",
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
              "en": "Colorful, nutrient-dense, and naturally sweet. A beautiful end-of-month spring dinner!",
              "es": "¡Colorido, nutritivo y naturalmente dulce. Una hermosa cena de otoño de fin de mes!"
            }
          }
        ]
      },
      {
        "date": "May 27",
        "meals": [
          {
            "type": "lunch",
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
            }
          },
          {
            "type": "snack",
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
            "type": "dinner",
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
            }
          }
        ]
      },
      {
        "date": "May 28",
        "meals": [
          {
            "type": "lunch",
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
            }
          },
          {
            "type": "snack",
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
                "Core and slice apples.",
                "Slice or cube cheddar.",
                "Arrange on a plate.",
                "Classic combination — kids always eat this without fuss!"
              ],
              "es": [
                "Descorazonar y cortar las manzanas en rodajas.",
                "Cortar o hacer cubos el cheddar.",
                "Acomodar en un plato.",
                "¡Combinación clásica que los chicos siempre comen sin quejarse!"
              ]
            },
            "tip": {
              "en": "",
              "es": ""
            }
          },
          {
            "type": "dinner",
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
              "en": "Beef + broccoli: both are great iron sources. A satisfying, classic stir-fry to end the working week on a high!",
              "es": "¡Carne + brócoli: ambos son excelentes fuentes de hierro. Un salteado clásico y satisfactorio para terminar la semana en lo alto!"
            }
          }
        ]
      },
      {
        "date": "May 29",
        "meals": [
          {
            "type": "lunch",
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
            "type": "snack",
            "name": {
              "en": "Berry Banana Smoothie",
              "es": "Batido de Frutas del Bosque y Banana"
            },
            "ing": {
              "en": [
                "2 cups frozen mixed berries",
                "2 bananas (frozen from Sunday prep)",
                "2 cups milk or Greek yogurt",
                "1 tbsp honey"
              ],
              "es": [
                "2 tazas frutas del bosque congeladas variadas",
                "2 bananas (congeladas desde el domingo)",
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
              "en": "Great antioxidants and vitamins to end the week! Frozen berries are just as nutritious as fresh.",
              "es": "¡Excelentes antioxidantes y vitaminas para cerrar la semana! Las frutas del bosque congeladas son igual de nutritivas que las frescas."
            }
          },
          {
            "type": "dinner",
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
                "A rustic, hands-off Friday dinner — the oven does all the work!"
              ],
              "es": [
                "Precalentar el horno a 220 °C.",
                "Mezclar los trozos de papa, las mitades de ajo y los tomates cherry con aceite, sal y pimienta; distribuir en asadera grande.",
                "Colocar los trozos de pollo encima; rociar con aceite; poner el romero y el tomillo sobre todo.",
                "Colocar las mitades de limón con la parte cortada hacia abajo en la asadera.",
                "Asar 45–50 min hasta que el pollo esté dorado y la temperatura interna llegue a 74 °C.",
                "Exprimir las mitades de limón asadas sobre el pollo justo antes de servir.",
                "¡Una cena rústica del viernes donde el horno hace todo el trabajo!"
              ]
            },
            "tip": {
              "en": "Perfect end to May — minimal effort, maximum flavour. The roasted garlic becomes sweet and spreadable!",
              "es": "¡Fin perfecto de mayo — mínimo esfuerzo, máximo sabor. El ajo asado se vuelve dulce y untable!"
            }
          }
        ]
      }
    ],
    "shopping": [
      {
        "cat": "Proteins & Fish",
        "items": {
          "en": [
            "700g beef (for Sunday stew — chuck or shin)",
            "2 chicken breasts (for Sunday prep — shred for enchiladas + soup)",
            "8 bone-in chicken thighs or drumsticks",
            "700g pork tenderloin",
            "4 salmon fillets (180g each)",
            "500g beef sirloin (for stir-fry)",
            "2 cans tuna in spring water"
          ],
          "es": [
            "700 g carne (para el guiso del domingo — aguja u osobuco)",
            "2 pechugas de pollo (para la preparación del domingo)",
            "8 muslos o drumsticks de pollo con hueso",
            "700 g lomo de cerdo",
            "4 filetes de salmón (180 g c/u)",
            "500 g bife de lomo fino (para el salteado)",
            "2 latas de atún en agua"
          ]
        }
      },
      {
        "cat": "Vegetables",
        "items": {
          "en": [
            "3 large carrots",
            "2 parsnips",
            "2 beets",
            "1 sweet potato",
            "2 celery stalks",
            "2 onions",
            "2 heads garlic",
            "1 whole garlic head (for traybake)",
            "2 cups cherry tomatoes",
            "2 cups fresh spinach",
            "2 cups broccoli (for stir-fry)",
            "1 bunch asparagus",
            "Mixed greens (for salad)",
            "4 medium potatoes (for traybake)",
            "Fresh rosemary",
            "Fresh thyme",
            "Fresh dill",
            "Fresh parsley",
            "Fresh cilantro",
            "Fresh ginger"
          ],
          "es": [
            "3 zanahorias grandes",
            "2 chirivías",
            "2 remolachas",
            "1 batata",
            "2 tallos de apio",
            "2 cebollas",
            "2 cabezas de ajo",
            "1 cabeza entera de ajo (para el pollo al horno)",
            "2 tazas tomates cherry",
            "2 tazas espinaca fresca",
            "2 tazas brócoli (para el salteado)",
            "1 atado espárragos",
            "Hojas verdes variadas (para la ensalada)",
            "4 papas medianas (para el pollo al horno)",
            "Romero fresco",
            "Tomillo fresco",
            "Eneldo fresco",
            "Perejil fresco",
            "Cilantro fresco",
            "Jengibre fresco"
          ]
        }
      },
      {
        "cat": "Fruit",
        "items": {
          "en": [
            "4 apples",
            "4 pears",
            "2 avocados",
            "4 bananas (freeze 2 for smoothie)",
            "2 cups frozen mixed berries",
            "2 limes",
            "1 lemon"
          ],
          "es": [
            "4 manzanas",
            "4 peras",
            "2 paltas",
            "4 bananas (congelar 2 para el batido)",
            "2 tazas frutas del bosque congeladas variadas",
            "2 limas",
            "1 limón"
          ]
        }
      },
      {
        "cat": "Grains & Bread",
        "items": {
          "en": [
            "2 cups dry rice",
            "1.5 cups dry quinoa",
            "200g egg noodles",
            "340g penne",
            "8 corn tortillas",
            "Flour tortillas"
          ],
          "es": [
            "2 tazas arroz seco",
            "1,5 tazas quinoa seca",
            "200 g fideos de huevo",
            "340 g penne",
            "8 tortillas de choclo",
            "Tortillas de harina"
          ]
        }
      },
      {
        "cat": "Pantry",
        "items": {
          "en": [
            "Enchilada sauce (jar, 2 cups)",
            "Chicken broth (1.2L)",
            "1 can black beans",
            "1 can kidney beans",
            "1 can black beans (extra for enchiladas)",
            "1 can cream of mushroom soup",
            "Cumin",
            "Chili powder",
            "Garlic powder",
            "Rosemary",
            "Thyme",
            "Smoked paprika",
            "Soy sauce",
            "Oyster sauce",
            "Cornstarch",
            "Sesame oil",
            "Honey",
            "Breadcrumbs (½ cup)",
            "Olive oil"
          ],
          "es": [
            "Salsa de enchiladas (frasco, 2 tazas)",
            "Caldo de pollo (1,2 L)",
            "1 lata porotos negros",
            "1 lata porotos kidney",
            "1 lata porotos negros extra (para las enchiladas)",
            "1 lata crema de champiñones",
            "Comino",
            "Ají molido",
            "Ajo en polvo",
            "Romero",
            "Tomillo",
            "Pimentón ahumado",
            "Salsa de soja",
            "Salsa de ostras",
            "Maicena",
            "Aceite de sésamo",
            "Miel",
            "Pan rallado (½ taza)",
            "Aceite de oliva"
          ]
        }
      },
      {
        "cat": "Dairy & Fridge",
        "items": {
          "en": [
            "Greek yogurt (2 cups)",
            "1.5 cups shredded cheese (for enchiladas)",
            "1 cup shredded cheese (for pasta bake)",
            "200g cheddar cheese",
            "100g feta cheese (optional)",
            "Sour cream (½ cup)",
            "Butter",
            "Milk (2 cups)",
            "Eggs (8)"
          ],
          "es": [
            "Yogur griego (2 tazas)",
            "1,5 tazas queso rallado (para enchiladas)",
            "1 taza queso rallado (para el gratinado)",
            "200 g queso cheddar",
            "100 g queso feta (opcional)",
            "Crema agria (½ taza)",
            "Manteca",
            "Leche (2 tazas)",
            "Huevos (8)"
          ]
        }
      },
      {
        "cat": "Other",
        "items": {
          "en": [
            "Mixed nuts (½ cup)",
            "8 rice cakes",
            "Crackers"
          ],
          "es": [
            "Nueces variadas (½ taza)",
            "8 galletas de arroz",
            "Galletas"
          ]
        }
      }
    ]
  }
};
