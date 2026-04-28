/* ============================================================
   i18n — UI translations (EN / ES)
   ============================================================ */
const i18n = {
  en: {
    pageTitle:   'Family Meal Plan — May 2026',
    subtitle:    '4 people · Lunch + Afternoon Snack + Dinner · Monday–Friday',
    tabs:        ['Week 1 · May 4–8','Week 2 · May 11–15','Week 3 · May 18–22','Week 4 · May 25–29'],
    days:        ['Monday','Tuesday','Wednesday','Thursday','Friday'],
    mealTypes:   {
      lunch:  { label:'Lunch',     icon:'🥗' },
      snack:  { label:'Snack',     icon:'🍎' },
      dinner: { label:'Dinner',    icon:'🍽' }
    },
    ingredients: 'Ingredients',
    serves:      '(serves 4)',
    steps:       'Steps',
    tapRecipe:   'Tap for recipe →',
    shopping:    'Weekly Shopping List',
    langBtn:     '🌐 Español',
    shopCats: {
      'Proteins & Fish': 'Proteins & Fish',
      'Vegetables':      'Vegetables',
      'Fruit':           'Fruit',
      'Grains & Bread':  'Grains & Bread',
      'Pantry':          'Pantry',
      'Dairy & Fridge':  'Dairy & Fridge',
      'Other':           'Other'
    }
  },
  es: {
    pageTitle:   'Plan de Comidas Familiar — Mayo 2026',
    subtitle:    '4 personas · Almuerzo + Merienda + Cena · Lunes–Viernes',
    tabs:        ['Semana 1 · 4–8 Mayo','Semana 2 · 11–15 Mayo','Semana 3 · 18–22 Mayo','Semana 4 · 25–29 Mayo'],
    days:        ['Lunes','Martes','Miércoles','Jueves','Viernes'],
    mealTypes:   {
      lunch:  { label:'Almuerzo',  icon:'🥗' },
      snack:  { label:'Merienda',  icon:'🍎' },
      dinner: { label:'Cena',      icon:'🍽' }
    },
    ingredients: 'Ingredientes',
    serves:      '(para 4 personas)',
    steps:       'Preparación',
    tapRecipe:   'Ver receta →',
    shopping:    'Lista de Compras',
    langBtn:     '🌐 English',
    shopCats: {
      'Proteins & Fish': 'Proteínas y Pescado',
      'Vegetables':      'Verduras',
      'Fruit':           'Frutas',
      'Grains & Bread':  'Cereales y Pan',
      'Pantry':          'Despensa',
      'Dairy & Fridge':  'Lácteos y Nevera',
      'Other':           'Otros'
    }
  }
};

let lang = 'en';
const t = k => i18n[lang][k];

/* ============================================================
   Meal Data
   ============================================================ */
const data = {
  1: {
    title:'Week 1', titleEs:'Semana 1',
    dates:'May 4–8, 2026', datesEs:'4–8 de Mayo, 2026',
    prep:{
      date:'Sunday, May 3 — Meal Prep',
      dateEs:'Domingo, 3 de Mayo — Preparación',
      tasks:[
        'Cook 3 cups dry rice → ~9 cups cooked (Mon lunch + Wed lunch)',
        'Marinate 2 lbs chicken thighs in soy sauce, garlic, ginger',
        'Brown 1.5 lbs ground beef (Mon dinner soup + Tue pasta)',
        'Chop bell peppers, broccoli, carrots, celery — store in containers',
        'Cook 1 cup dry red lentils (for Thu soup, or cook Thu morning)',
        'Make or buy hummus for Wed snack'
      ]
    },
    days:[
      {name:'Monday',date:'May 4',meals:[
        {type:'lunch',name:'Chicken Stir-Fry Rice Bowl',
         ing:['2 lbs chicken thighs (pre-marinated)','3 cups cooked rice','1 red bell pepper, sliced','1½ cups broccoli florets','2 carrots, julienned','3 tbsp soy sauce','2 cloves garlic, minced','1 tsp fresh ginger','2 tbsp olive oil'],
         steps:['Heat olive oil in a wok or large pan over high heat.','Add sliced marinated chicken; cook 5–7 min until golden and cooked through.','Add bell pepper, broccoli, and carrots; stir-fry 4–5 min until tender-crisp.','Add garlic, ginger, and soy sauce; toss everything to coat.','Serve over cooked rice.','Toddler tip: chop chicken and veggies small, serve with extra-soft rice.'],
         tip:''},
        {type:'snack',name:'Apple Slices with Peanut Butter & Cheese',
         ing:['4 apples','4 tbsp peanut butter','100g cheddar cheese, cubed'],
         steps:['Wash and slice apples into wedges, removing cores.','Arrange on a plate with peanut butter in a small bowl for dipping.','Add cheese cubes on the side.','Toddler tip: cut apple into tiny pieces, thin smear of peanut butter.'],
         tip:''},
        {type:'dinner',name:'Beef & Lentil Soup with Bread',
         ing:['500g pre-browned ground beef','1 cup dry red lentils (or pre-cooked)','2 carrots, diced','2 celery stalks, diced','1 onion, diced','2 cloves garlic','1 can (400g) diced tomatoes','1L beef broth','1 tsp cumin','Salt & pepper','Olive oil','Crusty bread to serve'],
         steps:['Heat olive oil in a large pot; sauté onion and garlic 5 min until soft.','Add pre-browned beef, carrots, and celery; stir 2 min.','Add lentils, tomatoes, and broth. Bring to a boil.','Reduce heat, cover, simmer 25–30 min until lentils are tender.','Season with cumin, salt, and pepper.','Serve with crusty bread.'],
         tip:'Iron-rich meal for mom — lentils + red meat is a great combination in the third trimester!'}
      ]},
      {name:'Tuesday',date:'May 5',meals:[
        {type:'lunch',name:'Pasta Bolognese',
         ing:['Leftover cooked ground beef','1 can (400g) crushed tomatoes','1 onion, diced','2 cloves garlic','500g penne pasta','1 tsp dried oregano','1 tsp dried basil','Olive oil','Parmesan to serve'],
         steps:['Cook pasta per package instructions; drain.','Sauté diced onion and garlic in olive oil 5 min.','Add leftover ground beef; stir together over medium heat.','Add crushed tomatoes, oregano, and basil; simmer 15 min.','Toss pasta with sauce. Serve with parmesan.','Toddler tip: serve with smaller pasta shapes, sauce on the side if preferred.'],
         tip:''},
        {type:'snack',name:'Yogurt Parfait with Berries',
         ing:['2 cups Greek yogurt','½ cup granola','1 cup mixed berries (fresh or frozen-thawed)'],
         steps:['In individual cups or bowls, layer yogurt, then granola, then berries.','Repeat layers if desired.','Toddler tip: skip granola to avoid choking; just yogurt and soft berries.','Great calcium boost for mom and the whole family.'],
         tip:''},
        {type:'dinner',name:'Baked Salmon, Sweet Potato & Broccoli',
         ing:['4 salmon fillets (180g each)','2 large sweet potatoes, cubed','2 cups broccoli florets','2 tbsp olive oil','1 lemon (zest + wedges)','2 cloves garlic, minced','Fresh dill or parsley','Salt & pepper'],
         steps:['Preheat oven to 200°C / 400°F.','Toss sweet potato cubes with 1 tbsp olive oil, salt, pepper; spread on baking sheet.','Roast potatoes 20 min; push to sides of pan.','Season salmon with lemon zest, garlic, remaining oil, salt, and herbs; add to center.','Add broccoli florets around salmon; drizzle with oil.','Bake 12–15 min until salmon flakes easily.','Squeeze fresh lemon over everything before serving.'],
         tip:'Salmon is one of the best foods during pregnancy — rich in omega-3 DHA, vitamin D, and protein. Great for baby\'s brain development!'}
      ]},
      {name:'Wednesday',date:'May 6',meals:[
        {type:'lunch',name:'Chicken Rice Bowl with Avocado',
         ing:['Leftover cooked chicken, sliced','2 cups cooked rice','2 avocados, sliced','1 cucumber, sliced','1 cup frozen corn, thawed','Juice of 1 lime','1 tbsp olive oil','Salt'],
         steps:['Reheat chicken and rice (microwave with a splash of water, or stovetop).','Slice avocado and cucumber.','Build bowls: rice base, top with chicken, cucumber, corn, and avocado.','Drizzle with lime juice and olive oil; season with salt.','Toddler tip: mash avocado into rice with soft chicken pieces.'],
         tip:''},
        {type:'snack',name:'Hummus & Veggie Sticks',
         ing:['1 cup hummus','3 carrots, cut into sticks','1 cucumber, cut into rounds','1 cup cherry tomatoes'],
         steps:['Peel and cut carrots into sticks.','Cut cucumber into rounds or sticks.','Arrange vegetables on a plate with hummus for dipping.','Toddler tip: lightly steam carrots first for softer texture.'],
         tip:''},
        {type:'dinner',name:'Pork Tenderloin, Mashed Potatoes & Green Beans',
         ing:['700g pork tenderloin','4 large potatoes, peeled & cubed','400g green beans','3 cloves garlic, minced','1 tbsp olive oil','1 tsp rosemary','1 tsp thyme','3 tbsp butter','½ cup warm milk','Salt & pepper'],
         steps:['Preheat oven to 200°C / 400°F.','Rub pork with garlic, rosemary, thyme, olive oil, salt, and pepper.','Roast pork 25–30 min until internal temp reaches 63°C / 145°F.','Meanwhile, boil potatoes until fork-tender (~15 min); drain.','Mash with butter, warm milk, salt, and pepper.','Steam green beans 4–5 min until tender-crisp.','Rest pork 5 min, then slice and serve.'],
         tip:''}
      ]},
      {name:'Thursday',date:'May 7',meals:[
        {type:'lunch',name:'Red Lentil & Spinach Soup',
         ing:['1½ cups red lentils','2 cups fresh spinach','1 onion, diced','3 cloves garlic','1 carrot, diced','1L vegetable broth','1 tsp cumin','1 tsp turmeric','Juice of 1 lemon','2 tbsp olive oil','Salt','Pita or bread to serve'],
         steps:['Heat olive oil in pot; sauté onion and garlic 5 min.','Add cumin and turmeric; stir 30 seconds until fragrant.','Add lentils, carrot, and broth; bring to a boil.','Reduce heat, simmer 20–25 min until lentils dissolve into a thick soup.','Stir in spinach until wilted; add lemon juice.','Blend partially for creamy texture, or leave chunky.','Serve with warm pita or bread.'],
         tip:'Double iron punch — lentils AND spinach — perfect for mom\'s iron levels!'},
        {type:'snack',name:'Banana with Almond Butter',
         ing:['4 bananas','4 tbsp almond butter'],
         steps:['Peel and slice bananas.','Serve with almond butter on the side for dipping.','Toddler tip: mash banana with a little almond butter for a soft spread.'],
         tip:''},
        {type:'dinner',name:'Paprika Chicken Thighs & Roasted Veggies',
         ing:['8 bone-in chicken thighs','3 potatoes, quartered','2 bell peppers, chunked','2 zucchini, chunked','1 onion, wedged','3 cloves garlic, minced','2 tbsp smoked paprika','3 tbsp olive oil','Salt & pepper'],
         steps:['Preheat oven to 220°C / 425°F.','Toss chicken thighs with paprika, garlic, 2 tbsp oil, salt, and pepper.','Toss potato, bell pepper, zucchini, and onion with remaining oil and salt.','Spread vegetables in a large roasting pan; nestle chicken on top.','Roast 35–40 min until chicken skin is crispy and temp reaches 74°C / 165°F.','Toddler tip: shred chicken, serve with soft roasted potato pieces.'],
         tip:''}
      ]},
      {name:'Friday',date:'May 8',meals:[
        {type:'lunch',name:'Fish Tacos with Slaw',
         ing:['600g tilapia or cod fillets','2 tsp cumin','1 tsp chili powder','2 tbsp olive oil','8 small flour tortillas','2 cups shredded cabbage','2 tbsp mayonnaise','2 tbsp lime juice','Salt'],
         steps:['Mix cumin and chili powder; season fish fillets on both sides.','Heat oil in pan over medium-high; cook fish 3–4 min each side until cooked and flaky.','Mix shredded cabbage with mayo, lime juice, and salt to make slaw.','Warm tortillas in a dry pan or microwave (30 sec wrapped in damp paper towel).','Break fish into chunks; assemble tacos with slaw on top.','Toddler tip: deconstructed — soft fish, tortilla pieces, skip slaw.'],
         tip:''},
        {type:'snack',name:'Fresh Fruit Salad',
         ing:['1 cup strawberries, halved','1 cup grapes, halved','2 kiwis, peeled & sliced','1 orange, segmented','Juice of 1 lime'],
         steps:['Wash and prepare all fruit; cut into bite-sized pieces.','Combine in a bowl and squeeze lime juice over.','Toss gently and serve.','Toddler tip: ensure all pieces are very small and grapes are halved (choking hazard).'],
         tip:''},
        {type:'dinner',name:'Beef & Broccoli Noodles',
         ing:['500g beef sirloin, thin strips','2 cups broccoli florets','340g egg noodles','3 tbsp soy sauce','1 tbsp oyster sauce','2 cloves garlic, minced','1 tsp fresh ginger, grated','1 tbsp sesame oil','2 tbsp cooking oil'],
         steps:['Cook noodles per package instructions; drain and set aside.','Mix soy sauce, oyster sauce, ginger, and sesame oil in a small bowl.','Heat cooking oil in wok on high heat; sear beef strips 2–3 min until browned.','Add garlic and broccoli; stir-fry 4 min until broccoli is bright green.','Pour sauce over; toss to coat.','Add cooked noodles; toss and mix well. Serve hot.'],
         tip:'Good iron from beef — remember vitamin C helps iron absorption, squeeze lemon or have some orange juice with this!'}
      ]}
    ],
    shopping:[
      {cat:'Proteins & Fish',items:['2 lbs chicken thighs (bone-in)','1.5 lbs ground beef','4 salmon fillets (180g each)','700g pork tenderloin','600g tilapia or cod fillets','500g beef sirloin']},
      {cat:'Vegetables',items:['4 bell peppers (mixed colors)','2 heads broccoli','5 large carrots','3 stalks celery','4 onions','2 heads garlic','2 large sweet potatoes','400g green beans','2 zucchini','4 large potatoes','1 bag fresh spinach (150g)','2 avocados','1 cucumber','1 cup cherry tomatoes','2 cups green cabbage (or pre-shredded)','1 cup frozen corn']},
      {cat:'Fruit',items:['4 apples','4 bananas','1 cup strawberries','1 cup grapes','2 kiwis','2 oranges','5 limes','2 lemons']},
      {cat:'Grains & Bread',items:['3 cups dry white rice','500g penne pasta','340g egg noodles','8 small flour tortillas','Crusty bread loaf','Pita bread']},
      {cat:'Pantry',items:['Soy sauce','Oyster sauce','Sesame oil','Cumin (ground)','Turmeric','Smoked paprika','Chili powder','Dried oregano','Dried basil','Rosemary','Thyme','Dill or parsley','2 cans crushed/diced tomatoes','1L beef broth','1L vegetable broth','1 cup dry red lentils','Olive oil','Peanut butter','Almond butter']},
      {cat:'Dairy & Fridge',items:['Parmesan cheese','Butter','Milk','2 cups Greek yogurt','100g cheddar cheese','Mayonnaise']},
      {cat:'Other',items:['1 cup granola','1 cup mixed berries (fresh or frozen)','Hummus (store-bought OK)']}
    ]
  },

  2: {
    title:'Week 2', titleEs:'Semana 2',
    dates:'May 11–15, 2026', datesEs:'11–15 de Mayo, 2026',
    prep:{
      date:'Sunday, May 10 — Meal Prep',
      dateEs:'Domingo, 10 de Mayo — Preparación',
      tasks:[
        'Roast a whole chicken or 2 lbs chicken pieces — for Mon soup, Fri fried rice',
        'Cook 2 cups dry quinoa → ~6 cups cooked (Tue bowl + Thu cod)',
        'Roast a tray of zucchini, bell peppers, cherry tomatoes (for Tue bowl)',
        'Marinate pork chops in garlic, thyme, and olive oil',
        'Prepare beef stew: sear beef, sauté vegetables, slow-cook (or use slow cooker 6–8 hrs low)',
        'Freeze banana halves in zip bags for Tue smoothie'
      ]
    },
    days:[
      {name:'Monday',date:'May 11',meals:[
        {type:'lunch',name:'Chicken Vegetable Soup',
         ing:['2 cups shredded roasted chicken','2 carrots, diced','2 celery stalks, diced','1 onion, diced','2 cloves garlic','1.2L chicken broth','1 cup frozen peas','1 tsp thyme','Salt & pepper','Olive oil','Small pasta or rice (optional)'],
         steps:['Heat olive oil in large pot; sauté onion, garlic, carrots, celery 5 min.','Add chicken broth and thyme; bring to a boil.','Add shredded chicken and peas; simmer 10 min.','Season with salt and pepper.','Optional: add small pasta or rice for the last 10 min.','Toddler tip: blend a portion for smoother texture, or pick out soft veggies.'],
         tip:''},
        {type:'snack',name:'Cheese, Crackers & Grapes',
         ing:['200g assorted cheese','Whole-grain crackers','2 cups grapes'],
         steps:['Slice or cube cheese into bite-sized pieces.','Arrange crackers, cheese, and grapes on a plate or board.','For toddler: small cheese cubes, grapes halved lengthways (choking risk!).','Fun as a \'mini charcuterie\' the 5-year-old can help arrange.'],
         tip:''},
        {type:'dinner',name:'Pork Chops with Apple Sauce & Roasted Potatoes',
         ing:['4 pork chops (from Sunday marinade)','4 medium potatoes, cubed','2 apples, peeled & diced','2 tbsp brown sugar','1 tsp cinnamon','1 tsp garlic powder','1 tsp thyme','2 tbsp olive oil','Salt & pepper'],
         steps:['Preheat oven to 200°C / 400°F. Toss potatoes with oil, garlic, salt; roast 30–35 min.','Sear pork chops in ovenproof pan 3 min each side over medium-high heat.','Transfer pan to oven; cook 10–12 min until internal temp 63°C / 145°F.','Meanwhile, simmer diced apples with brown sugar, cinnamon, and 2 tbsp water in a small pot ~10 min until soft. Mash lightly.','Serve pork topped with applesauce alongside roasted potatoes.'],
         tip:''}
      ]},
      {name:'Tuesday',date:'May 12',meals:[
        {type:'lunch',name:'Quinoa Bowl with Roasted Veggies & Chickpeas',
         ing:['2 cups cooked quinoa','1 can (400g) chickpeas, drained & rinsed','Roasted vegetables from Sunday','2 tbsp olive oil','1 tbsp lemon juice','1 tsp cumin','Fresh parsley','Salt'],
         steps:['Reheat quinoa and roasted vegetables (microwave or in pan).','Optionally toast chickpeas in a dry pan with cumin and oil for 5 min until crispy.','Build bowls: quinoa base, topped with roasted vegetables and chickpeas.','Drizzle with olive oil and lemon juice; garnish with parsley.','Toddler tip: mash chickpeas slightly, serve with soft veggies and quinoa.'],
         tip:''},
        {type:'snack',name:'Green Power Smoothie',
         ing:['2 cups fresh spinach','2 frozen bananas','2 cups milk (or oat milk)','1 tbsp honey'],
         steps:['Add all ingredients to blender.','Blend on high until completely smooth.','Taste and adjust sweetness with honey.','Pour into cups. Serve cold.','Toddler tip: dilute slightly with extra milk, serve in sippy cup.'],
         tip:'Spinach + banana = great iron and potassium combo for mom! Vitamin C in the milk helps iron absorption.'},
        {type:'dinner',name:'Hearty Beef Stew with Bread',
         ing:['700g beef chuck, cubed (pre-cooked from Sunday)','3 potatoes, chunked','2 carrots, chunked','1 onion','3 cloves garlic','1 can diced tomatoes','500ml beef broth','1 cup red wine (optional, or extra broth)','1 tsp rosemary','1 tsp thyme','Flour (for coating)','Olive oil','Crusty bread'],
         steps:['If not made Sunday: dust beef with flour, salt, pepper; brown in batches in Dutch oven.','Sauté onion and garlic in same pot; add herbs.','Return beef; add tomatoes, broth (and wine). Bring to boil.','Cover and simmer 1.5–2 hrs until beef is very tender.','Add potatoes and carrots in last 30 min.','If made Sunday, simply reheat gently and serve with crusty bread.'],
         tip:'Beef stew is one of the best iron-rich dinners — red meat + vegetables in a hearty, comforting dish.'}
      ]},
      {name:'Wednesday',date:'May 13',meals:[
        {type:'lunch',name:'Tuna Pasta Salad',
         ing:['2 cans (160g each) tuna, drained','340g pasta (cooled)','1 cup frozen peas, thawed','1 cup cherry tomatoes, halved','3 tbsp mayonnaise','1 tbsp lemon juice','Fresh herbs (parsley or dill)','Salt & pepper'],
         steps:['Cook pasta al dente; drain and run under cold water until cooled.','In a large bowl, mix tuna, peas, cherry tomatoes, mayo, lemon juice, and herbs.','Fold in cooled pasta; season with salt and pepper.','Serve at room temperature or chilled.','Toddler tip: separate small portion of pasta + tuna + peas without mayo.'],
         tip:'Limit tuna to 2 servings per week for pregnant women (mercury). This week we use it just once more on Friday.'},
        {type:'snack',name:'Rice Cakes with Cream Cheese & Cucumber',
         ing:['8 rice cakes','115g cream cheese','1 cucumber, thinly sliced','Salt & dill (optional)'],
         steps:['Spread cream cheese on each rice cake.','Layer thin cucumber slices on top.','Optional: sprinkle with salt and dried dill.','For toddler: soft rice cake broken into pieces with cream cheese spread.'],
         tip:''},
        {type:'dinner',name:'Chicken Curry with Rice',
         ing:['700g chicken breast or thighs, cubed','1 can (400ml) coconut milk','1 can diced tomatoes','1 onion, diced','3 cloves garlic, minced','1 tbsp fresh ginger, grated','2 tbsp curry powder','1 tsp turmeric','1 tsp cumin','2 cups cooked rice','2 cups spinach (optional)','Oil, salt'],
         steps:['Sauté onion, garlic, and ginger in oil over medium heat, 5 min.','Add curry powder, turmeric, and cumin; stir 1 min until fragrant.','Add chicken; cook until sealed on outside, ~5 min.','Pour in coconut milk and tomatoes; bring to a simmer.','Cook 15–20 min until chicken is cooked through. Stir in spinach if using.','Serve over cooked rice.','Toddler tip: set aside a mild portion before adding full spice, serve with extra rice.'],
         tip:''}
      ]},
      {name:'Thursday',date:'May 14',meals:[
        {type:'lunch',name:'White Bean & Vegetable Stew',
         ing:['2 cans (400g each) white beans, drained','2 cups fresh spinach','1 onion, diced','2 cloves garlic','2 carrots, diced','1 celery stalk, diced','1 can diced tomatoes','700ml vegetable broth','1 tsp rosemary','Olive oil','Salt & pepper','Bread to serve'],
         steps:['Sauté onion, garlic, carrots, and celery in oil 5 min.','Add tomatoes, broth, beans, and rosemary; bring to a boil.','Simmer 15 min; stir in spinach until wilted.','Season and serve with bread.','Toddler tip: mash beans slightly for easier eating, serve with soft bread.'],
         tip:'White beans + spinach = excellent plant-based iron. Paired with the tomatoes (vitamin C), iron absorption is boosted!'},
        {type:'snack',name:'Orange Slices & Cheese',
         ing:['3 large oranges, peeled & segmented','150g cheese, sliced'],
         steps:['Peel and segment oranges into easy pieces.','Slice or cube cheese.','Serve together on a plate.','For toddler: small orange pieces, small cheese cubes.'],
         tip:'The vitamin C in oranges actively boosts iron absorption from meals — great afternoon snack for mom!'},
        {type:'dinner',name:'Baked Cod with Quinoa & Asparagus',
         ing:['4 cod fillets (180g each)','2 cups cooked quinoa','1 bunch asparagus, trimmed','2 tbsp olive oil','2 cloves garlic, minced','1 lemon (zest + wedges)','Fresh parsley','Salt & pepper'],
         steps:['Preheat oven to 200°C / 400°F.','Place cod on lined baking sheet; season with garlic, lemon zest, olive oil, salt, and pepper.','Toss asparagus with oil and salt; place alongside fish.','Bake 15–18 min until fish is opaque and flakes easily.','Warm quinoa; plate with fish and asparagus.','Squeeze fresh lemon over everything before serving. Garnish with parsley.'],
         tip:''}
      ]},
      {name:'Friday',date:'May 15',meals:[
        {type:'lunch',name:'Pork Fried Rice',
         ing:['Leftover cooked pork chop, diced','3 cups cooked rice (day-old works best)','2 eggs','1 cup frozen peas & carrots mix, thawed','3 tbsp soy sauce','2 cloves garlic, minced','1 tbsp sesame oil','3 spring onions, sliced','Oil for cooking'],
         steps:['Dice or shred leftover pork chop meat.','Heat oil in wok on high; add pork and stir-fry 2 min.','Push to side; crack and scramble eggs in the pan.','Add rice, breaking up clumps; stir-fry 3 min.','Add peas, carrots, and garlic; stir 2 more min.','Drizzle soy sauce and sesame oil; toss to combine.','Garnish with spring onions. Toddler: separate soft portion.'],
         tip:''},
        {type:'snack',name:'Yogurt with Honey & Nuts',
         ing:['2 cups Greek yogurt','3 tbsp honey','½ cup mixed nuts, roughly chopped','Fresh fruit (optional)'],
         steps:['Spoon yogurt into bowls.','Drizzle honey generously over top.','Sprinkle with chopped nuts.','Add fresh fruit if available.','Toddler tip: NO nuts (choking hazard) — just yogurt with honey.','5-year-old: chopped nuts are fine with supervision.'],
         tip:''},
        {type:'dinner',name:'Beef Burgers & Sweet Potato Fries',
         ing:['700g ground beef','1 egg','1 tbsp Worcestershire sauce','1 tsp garlic powder','4 burger buns','Lettuce, tomato, onion rings','Ketchup & mustard','3 large sweet potatoes, cut into wedges','2 tbsp olive oil','1 tsp paprika','Salt & pepper'],
         steps:['Preheat oven to 220°C / 425°F. Toss sweet potato wedges with oil, paprika, salt; roast 30–35 min, flipping halfway.','Mix ground beef with egg, Worcestershire, garlic powder, salt, and pepper; form 4 patties.','Cook patties in pan or on grill 4–5 min each side for medium.','Toast buns; assemble burgers with lettuce, tomato, onion, and condiments.','Serve with sweet potato fries.','Toddler tip: skip bun, serve small patty with soft sweet potato fries.'],
         tip:''}
      ]}
    ],
    shopping:[
      {cat:'Proteins & Fish',items:['1 whole chicken or 2 lbs chicken pieces','700g beef chuck (for stew)','4 pork chops','700g chicken breast or thighs (for curry)','4 cod fillets (180g each)','700g ground beef','2 cans tuna in spring water']},
      {cat:'Vegetables',items:['4 carrots','3 celery stalks','3 onions','2 heads garlic','1 head fresh ginger','1 cup frozen peas','1 bunch asparagus','2 cups fresh spinach','3 potatoes (for stew)','4 medium potatoes (for roasting)','1 cup cherry tomatoes','3 zucchini (for Sunday roast)','2 bell peppers (for Sunday roast)','Spring onions (1 bunch)','Lettuce (for burgers)','2 tomatoes (for burgers)']},
      {cat:'Fruit',items:['2 cups grapes','4 bananas (freeze 2 for smoothie)','3 large oranges','Fresh fruit for yogurt (optional)','2 apples (for pork applesauce)']},
      {cat:'Grains & Bread',items:['2 cups dry quinoa','340g pasta (for tuna salad)','3 cups dry rice','4 burger buns','8 rice cakes','Crusty bread loaf']},
      {cat:'Pantry',items:['Chicken broth (1.2L)','Beef broth (500ml)','Vegetable broth (700ml)','2 cans diced tomatoes','1 can (400ml) coconut milk','2 cans white beans','1 can chickpeas','Curry powder','Rosemary','Thyme','Garlic powder','Smoked paprika','Worcestershire sauce','Soy sauce','Sesame oil','Red wine (optional for stew)','Flour (for coating beef)','Olive oil','Brown sugar','Cinnamon']},
      {cat:'Dairy & Fridge',items:['200g assorted cheese','115g cream cheese','Greek yogurt (2 cups)','Butter','Milk','Eggs (2)','Mayonnaise']},
      {cat:'Other',items:['Mixed nuts (½ cup)','Honey','Whole-grain crackers','Ketchup & mustard']}
    ]
  },

  3: {
    title:'Week 3', titleEs:'Semana 3',
    dates:'May 18–22, 2026', datesEs:'18–22 de Mayo, 2026',
    prep:{
      date:'Sunday, May 17 — Meal Prep',
      dateEs:'Domingo, 17 de Mayo — Preparación',
      tasks:[
        'Cook 2 large chicken breasts — slice half for Caesar wraps, keep rest for pasta',
        'Bake banana oat muffins (recipe in Tuesday snack) — 12 muffins for the week',
        'Shred cabbage and carrots for coleslaw; store dry until Tuesday dinner',
        'Hard-boil 4 eggs for the week',
        'Pre-cook a pot of rice (2 cups dry) for the week',
        'Make or buy Caesar dressing'
      ]
    },
    days:[
      {name:'Monday',date:'May 18',meals:[
        {type:'lunch',name:'Caesar Chicken Wraps',
         ing:['2 cups sliced cooked chicken','4 large flour tortillas','4 cups romaine lettuce, torn','½ cup Caesar dressing','¼ cup grated parmesan','Croutons (optional)'],
         steps:['Shred or slice pre-cooked chicken.','Toss romaine with Caesar dressing and parmesan.','Warm tortillas briefly in a dry pan or microwave.','Fill each tortilla with the lettuce mixture and chicken.','Roll tightly, slice in half, and serve.','Toddler tip: serve filling in a bowl (deconstructed); skip raw lettuce if preferred.'],
         tip:''},
        {type:'snack',name:'Apple Slices & Cheddar',
         ing:['4 apples','200g cheddar cheese'],
         steps:['Core and slice apples into wedges.','Slice or cube the cheese.','Arrange on a plate and serve.','Simple, filling, and kids love the sweet-salty combo.'],
         tip:''},
        {type:'dinner',name:'Salmon with Couscous & Roasted Vegetables',
         ing:['4 salmon fillets (180g each)','1½ cups dry couscous','2 zucchini, sliced','1 red bell pepper, chunked','1 yellow bell pepper, chunked','1 red onion, wedged','2 tbsp olive oil','1 lemon','1 tsp cumin','Fresh mint or parsley','Salt & pepper'],
         steps:['Preheat oven to 200°C / 400°F.','Toss zucchini, peppers, and red onion with olive oil, cumin, salt, pepper; roast 20 min.','Pour 1.75 cups boiling water over dry couscous; cover 5 min, then fluff with fork.','Season salmon with salt, pepper, lemon zest; add to oven for last 12–15 min.','Mix roasted vegetables into couscous; top with salmon.','Squeeze fresh lemon over; garnish with mint or parsley.'],
         tip:''}
      ]},
      {name:'Tuesday',date:'May 19',meals:[
        {type:'lunch',name:'Red Lentil Soup',
         ing:['1½ cups red lentils','1 onion, diced','3 cloves garlic','2 carrots, diced','1 tsp cumin','1 tsp smoked paprika','1L vegetable broth','Juice of 1 lemon','2 tbsp olive oil','Salt','Pita or bread'],
         steps:['Sauté onion and garlic in oil 5 min.','Add cumin and paprika; stir 30 sec.','Add lentils, carrots, and broth; bring to a boil.','Simmer 20–25 min until lentils are very soft.','Add lemon juice; season. Blend partially for creamy-chunky texture.','Serve with warm pita or bread.'],
         tip:''},
        {type:'snack',name:'Banana Oat Muffins (baked Sunday)',
         ing:['3 ripe bananas','2 cups rolled oats','2 eggs','¼ cup honey','1 tsp baking powder','1 tsp vanilla','½ tsp cinnamon','Pinch of salt'],
         steps:['Sunday: Preheat oven to 180°C / 350°F; line muffin tin.','Mash bananas in a large bowl until smooth.','Add eggs, honey, vanilla, and cinnamon; mix well.','Stir in oats, baking powder, and salt until combined.','Fill muffin cups ¾ full; bake 18–20 min until toothpick comes out clean.','Cool; store in airtight container for the week (or freeze).','Serve 1–2 muffins per person as snack Mon–Fri.'],
         tip:'These muffins are naturally sweetened, great for the toddler, and a wholesome snack for all. Oats provide iron too!'},
        {type:'dinner',name:'Pork Ribs with Coleslaw & Corn',
         ing:['1kg pork spare ribs','3 tbsp BBQ sauce','1 tsp smoked paprika','1 tsp garlic powder','Salt','3 cups shredded cabbage & carrot mix','3 tbsp mayonnaise','2 tbsp apple cider vinegar','1 tsp sugar','4 corn cobs (or 2 cups frozen corn)'],
         steps:['Rub ribs with paprika, garlic powder, and salt (Sunday if possible).','Wrap ribs in foil; bake at 150°C / 300°F for 2.5 hours.','Brush with BBQ sauce; bake uncovered 15 min more.','Mix coleslaw: combine cabbage, carrot, mayo, vinegar, and sugar; chill until serving.','Boil corn 8–10 min, or roast alongside ribs.','Toddler tip: shred rib meat off the bone, serve with soft cooked corn.'],
         tip:''}
      ]},
      {name:'Wednesday',date:'May 20',meals:[
        {type:'lunch',name:'Chicken Pasta with Pesto',
         ing:['500g penne pasta','1½ cups leftover cooked chicken, sliced','4 tbsp pesto (jar or homemade)','1 cup cherry tomatoes, halved','½ cup parmesan, grated','Olive oil','Salt & pepper','Pine nuts (optional)'],
         steps:['Cook pasta per package; reserve ½ cup pasta water before draining.','Slice chicken; warm briefly in a pan.','Toss hot pasta with pesto, adding pasta water gradually if too thick.','Add chicken and cherry tomatoes; toss to combine.','Serve topped with parmesan and a drizzle of olive oil.','Toddler tip: small pasta (fusilli or penne), mild pesto, no pine nuts.'],
         tip:''},
        {type:'snack',name:'Hummus & Warm Pita with Cucumber',
         ing:['1 cup hummus','4 pita breads','1 cucumber, sliced'],
         steps:['Warm pita in oven at 180°C for 3 min, or microwave 30 sec.','Cut pita into wedges.','Slice cucumber into rounds.','Serve with hummus for dipping.','Toddler tip: soft small pita pieces with hummus as a dip.'],
         tip:''},
        {type:'dinner',name:'Beef Bolognese with Spaghetti',
         ing:['700g ground beef','500g spaghetti','1 can (400g) crushed tomatoes','1 can diced tomatoes','1 onion, diced','2 cloves garlic','1 carrot, diced','1 celery stalk, diced','½ cup red wine (optional)','1 tsp oregano','1 tsp basil','Olive oil','Parmesan to serve','Salt & pepper'],
         steps:['Sauté onion, garlic, carrot, and celery in oil over medium heat, 8 min.','Add ground beef; cook until browned, breaking up lumps.','Add wine if using; simmer 2 min. Add both cans of tomatoes, oregano, basil.','Simmer 30 min (up to 1 hour for richer sauce).','Cook spaghetti per package; drain.','Serve sauce over pasta with parmesan.','Toddler tip: use shorter pasta like penne, cut into smaller pieces.'],
         tip:''}
      ]},
      {name:'Thursday',date:'May 21',meals:[
        {type:'lunch',name:'Tuna Salad Sandwiches',
         ing:['2 cans (160g) tuna, drained','3 tbsp mayonnaise','1 celery stalk, finely diced','1 tbsp lemon juice','1 tbsp Dijon mustard','8 slices bread','Lettuce leaves','Tomato slices','Salt & pepper'],
         steps:['Mix tuna, mayo, celery, lemon juice, and mustard in a bowl; season.','Toast bread if preferred.','Lay lettuce and tomato on half the slices; spread tuna mixture generously.','Top with remaining bread, press, and slice diagonally.','Toddler tip: soft untoasted bread with tuna only, no crunchy additions.'],
         tip:'Second tuna serving this week — keep to 2 max for pregnant women (mercury). Omega-3s are beneficial for baby!'},
        {type:'snack',name:'Watermelon & Strawberry Skewers',
         ing:['½ small watermelon, cubed','1 cup strawberries, halved','Wooden skewers'],
         steps:['Cut watermelon into even-sized cubes.','Hull and halve strawberries.','Thread alternating fruit onto wooden skewers.','Toddler tip: skip skewers entirely (choking hazard!), just serve fruit pieces in a bowl.','Refreshing and hydrating for a warm May afternoon.'],
         tip:''},
        {type:'dinner',name:'Chicken & Mushroom Risotto',
         ing:['1½ cups arborio rice','2 cups cooked chicken, diced','300g mushrooms, sliced','1 onion, finely diced','3 cloves garlic, minced','1L hot chicken broth','½ cup white wine (optional)','½ cup parmesan, grated','2 tbsp butter','1 tbsp olive oil','Fresh thyme','Salt & pepper'],
         steps:['Keep broth warm in a small pot on low heat.','Sauté onion and garlic in butter and oil in wide pan 5 min.','Add mushrooms; cook until golden, 5–7 min.','Add arborio rice; stir to toast for 2 min. Add wine; stir until absorbed.','Add warm broth one ladle at a time, stirring constantly, waiting until each ladle is absorbed (~18–20 min total).','Fold in diced chicken in last 5 min. Stir in parmesan; season.','Serve immediately — risotto waits for no one!'],
         tip:''}
      ]},
      {name:'Friday',date:'May 22',meals:[
        {type:'lunch',name:'Minestrone Soup with Bread',
         ing:['1 can diced tomatoes','1 can cannellini beans, drained','200g small pasta','1 zucchini, diced','2 carrots, diced','2 celery stalks, diced','1 onion, diced','2 cloves garlic','1L vegetable broth','2 cups spinach','1 tsp basil','1 tsp oregano','Olive oil','Parmesan to serve','Crusty bread'],
         steps:['Sauté onion, garlic, carrots, celery in oil 5 min.','Add tomatoes, beans, and broth; bring to a boil.','Add diced zucchini and pasta; simmer 10–12 min until pasta is cooked.','Stir in spinach; season with basil, oregano, salt, and pepper.','Ladle into bowls; top with parmesan. Serve with crusty bread.','Toddler tip: blend a small portion or pick out soft vegetables.'],
         tip:''},
        {type:'snack',name:'Cheese & Fruit Plate',
         ing:['200g assorted cheese','1 cup grapes','2 pears, sliced','Handful of crackers'],
         steps:['Slice or cube cheese.','Halve grapes; slice pears.','Arrange cheese, fruit, and crackers on a board or plate.','For toddler: small cheese cubes, grapes halved, soft pear pieces.'],
         tip:''},
        {type:'dinner',name:'Baked Fish & Chips',
         ing:['4 white fish fillets (cod or haddock, 180g each)','3 large potatoes, cut into thick wedges','2 eggs, beaten','1 cup breadcrumbs','1 tsp garlic powder','1 tsp lemon zest','Olive oil','Salt & pepper','Lemon wedges to serve','Ketchup or tartar sauce'],
         steps:['Preheat oven to 220°C / 425°F.','Toss potato wedges with oil, salt, and pepper; spread on baking sheet. Roast 25 min, flipping halfway.','Meanwhile, dip fish in beaten egg, then coat in breadcrumbs mixed with garlic powder, lemon zest, and salt.','Place fish on a separate lined baking sheet; drizzle with oil.','Bake fish 15–18 min until golden and cooked through.','Serve with potato wedges, lemon wedges, and dipping sauce.','Toddler tip: remove breading for softer fish, serve with soft oven chips.'],
         tip:''}
      ]}
    ],
    shopping:[
      {cat:'Proteins & Fish',items:['2 large chicken breasts (for Sunday prep)','4 salmon fillets (180g each)','1kg pork spare ribs','700g ground beef','2 cans tuna in spring water','4 cod or haddock fillets (180g each)']},
      {cat:'Vegetables',items:['4 zucchini','4 bell peppers (mixed)','1 red onion','3 onions','3 heads garlic','4 carrots','4 celery stalks','1 bag fresh spinach (150g)','1 cup cherry tomatoes','1 bunch asparagus','3 large potatoes (for fish chips)','3 cups shredded cabbage (or buy coleslaw mix)','1 head romaine lettuce','2 tomatoes','300g mushrooms','Fresh thyme','Fresh mint or parsley','Fresh ginger']},
      {cat:'Fruit',items:['4 apples','4 bananas (+ 3 ripe for muffins)','½ small watermelon','1 cup strawberries','2 cups grapes','2 pears','1 lemon','3 limes']},
      {cat:'Grains & Bread',items:['1½ cups dry couscous','500g penne','500g spaghetti','1½ cups arborio rice','200g small pasta (for minestrone)','4 large flour tortillas','4 pita breads','8 slices sandwich bread','Crusty bread loaf','2 cups rolled oats']},
      {cat:'Pantry',items:['Vegetable broth (1.5L)','Chicken broth (1L)','1 can crushed tomatoes','2 cans diced tomatoes','1 can cannellini beans','1 can chickpeas','Pesto (jar, 200g)','BBQ sauce','Apple cider vinegar','Smoked paprika','Cumin','Oregano','Basil','Garlic powder','Dijon mustard','Breadcrumbs (1 cup)','Red wine (optional)','Olive oil','Baking powder','Vanilla extract','Cinnamon','Pine nuts (optional)','Honey']},
      {cat:'Dairy & Fridge',items:['Parmesan cheese (200g)','Caesar dressing (bottle, or make your own)','200g cheddar cheese','200g assorted cheese','Cream cheese','Butter','Milk','Eggs (4)','Mayonnaise']},
      {cat:'Other',items:['4 corn cobs or frozen corn','Wooden skewers','Crackers']}
    ]
  },

  4: {
    title:'Week 4', titleEs:'Semana 4',
    dates:'May 25–29, 2026', datesEs:'25–29 de Mayo, 2026',
    prep:{
      date:'Sunday, May 24 — Meal Prep',
      dateEs:'Domingo, 24 de Mayo — Preparación',
      tasks:[
        'Make a full beef & vegetable stew (for Mon lunch — big batch)',
        'Cook 2 cups dry rice and 1.5 cups dry quinoa',
        'Cook and shred 2 chicken breasts — for enchiladas and noodle soup',
        'Make enchilada filling: mix chicken with black beans, corn, and spices',
        'Marinate pork tenderloin in rosemary, garlic, and olive oil',
        'Freeze mixed berries + banana in bags for Friday smoothie'
      ]
    },
    days:[
      {name:'Monday',date:'May 25',meals:[
        {type:'lunch',name:'Beef & Vegetable Stew with Rice',
         ing:['Batch beef & vegetable stew from Sunday','2 cups cooked rice'],
         steps:['Reheat stew on stovetop over medium heat, stirring occasionally, until piping hot.','Taste and adjust seasoning.','Serve over steamed rice.','Toddler tip: shred beef pieces small, ensure vegetables are soft.'],
         tip:'Iron-rich, comforting Monday lunch to start the week strong!'},
        {type:'snack',name:'Yogurt with Honey & Nuts',
         ing:['2 cups Greek yogurt','3 tbsp honey','½ cup mixed nuts, roughly chopped'],
         steps:['Spoon yogurt into bowls.','Drizzle honey over top.','Sprinkle with chopped nuts.','Toddler tip: NO nuts — just yogurt with honey and maybe a few berries.'],
         tip:''},
        {type:'dinner',name:'Chicken Enchiladas',
         ing:['2 cups shredded cooked chicken','8 corn tortillas','2 cups enchilada sauce (jarred or homemade)','1½ cups shredded cheese','1 can black beans, drained','1 cup frozen corn, thawed','1 tsp cumin','1 tsp garlic powder','Fresh cilantro & sour cream to serve'],
         steps:['Preheat oven to 190°C / 375°F.','Mix chicken with black beans, corn, cumin, garlic powder, and ½ cup enchilada sauce.','Warm tortillas briefly (microwave 30 sec); fill each with chicken mixture and roll tightly.','Place seam-side down in greased baking dish; pour remaining sauce over top.','Sprinkle cheese over enchiladas.','Bake 20–25 min until sauce bubbles and cheese is golden.','Serve with cilantro and sour cream.','Toddler tip: deconstructed — chicken, beans, corn, soft tortilla pieces, skip sauce.'],
         tip:''}
      ]},
      {name:'Tuesday',date:'May 26',meals:[
        {type:'lunch',name:'Spinach & Egg Frittata with Green Salad',
         ing:['8 eggs','2 cups fresh spinach','1 onion, diced','1 cup cherry tomatoes, halved','100g feta cheese (optional)','2 tbsp olive oil','Mixed greens for salad','Simple vinaigrette (olive oil + lemon + salt)','Salt & pepper'],
         steps:['Preheat oven to 190°C / 375°F.','Sauté onion in ovenproof skillet with oil 5 min; add spinach until wilted.','Whisk eggs with salt and pepper; pour over vegetables.','Scatter cherry tomatoes and feta on top.','Cook stovetop 3–4 min until edges set; transfer to oven 10–12 min until fully set.','Cut into wedges; serve with a simple green salad dressed with vinaigrette.'],
         tip:'Spinach + eggs = double iron boost for mom. This frittata is also soft enough for the toddler and nutritious for the whole family!'},
        {type:'snack',name:'Pear with Almond Butter',
         ing:['4 pears','4 tbsp almond butter'],
         steps:['Core and slice pears into wedges.','Serve with almond butter in a small bowl for dipping.','Toddler tip: small pear pieces, thin spread of almond butter.'],
         tip:''},
        {type:'dinner',name:'Pork Tenderloin with Roasted Root Vegetables',
         ing:['700g pork tenderloin (pre-marinated from Sunday)','3 carrots, chunked','2 parsnips, chunked','2 beets, quartered','1 sweet potato, chunked','2 tbsp olive oil','1 tbsp honey','1 tsp thyme','1 tsp rosemary','2 cloves garlic','Salt & pepper'],
         steps:['Preheat oven to 200°C / 400°F.','Peel and chunk all root vegetables; toss with olive oil, honey, thyme, and salt.','Spread in large roasting pan; roast 20 min.','Rub pork with garlic, rosemary, olive oil, salt, and pepper.','Place pork on top of vegetables; roast 25–30 min until internal temp 63°C / 145°F.','Rest pork 5 min; slice and serve over roasted vegetables.'],
         tip:'Colorful, nutrient-dense, and naturally sweet. A beautiful end-of-month spring dinner!'}
      ]},
      {name:'Wednesday',date:'May 27',meals:[
        {type:'lunch',name:'Chicken Noodle Soup',
         ing:['2 cups shredded cooked chicken','200g egg noodles','2 carrots, diced','2 celery stalks, diced','1 onion, diced','3 cloves garlic, minced','1.2L chicken broth','1 tsp thyme','Fresh parsley','Salt & pepper','Olive oil'],
         steps:['Sauté onion, garlic, carrots, and celery in oil in large pot, 5 min.','Add broth and thyme; bring to a boil.','Add egg noodles; cook 6–8 min per package instructions.','Add shredded chicken; simmer 5 more min.','Adjust seasoning; garnish with fresh parsley.','A classic that everyone loves, easy on the stomach, great for all ages.'],
         tip:''},
        {type:'snack',name:'Rice Cakes with Avocado Smash',
         ing:['8 rice cakes','2 ripe avocados','Juice of 1 lime','Salt','Chili flakes (optional, adults only)'],
         steps:['Halve and pit avocados; scoop flesh into a bowl.','Mash with lime juice and salt until creamy (or chunky — your preference).','Spread generously on rice cakes.','Adults: add a pinch of chili flakes.','Toddler tip: plain avocado mash on soft rice cake, no chili.'],
         tip:''},
        {type:'dinner',name:'Baked Salmon, Quinoa & Asparagus',
         ing:['4 salmon fillets (180g each)','2 cups cooked quinoa','1 bunch asparagus, trimmed','2 tbsp olive oil','2 cloves garlic, minced','1 lemon','Fresh dill','Salt & pepper'],
         steps:['Preheat oven to 200°C / 400°F.','Season salmon with garlic, lemon zest, olive oil, salt, and pepper.','Toss asparagus with oil and salt.','Arrange salmon and asparagus together on lined baking sheet.','Bake 12–15 min until salmon flakes easily.','Warm quinoa; plate with salmon and asparagus.','Garnish with fresh dill and lemon wedges.'],
         tip:'Third salmon meal of the month — great for baby brain development in the final trimester!'}
      ]},
      {name:'Thursday',date:'May 28',meals:[
        {type:'lunch',name:'Bean Burrito Bowls',
         ing:['1 can black beans, drained','1 can kidney beans, drained','2 cups cooked rice','1 cup frozen corn, thawed & heated','1 cup cherry tomatoes, halved','1 avocado, sliced','½ cup sour cream','1 tsp cumin','1 tsp chili powder','1 lime','Salt','Flour tortillas (optional, on the side)'],
         steps:['Heat both cans of beans together in a pan with cumin, chili powder, and salt.','Warm rice and corn separately.','Build bowls: rice base, beans, corn, cherry tomatoes, avocado, sour cream.','Squeeze lime over everything.','Serve with warm tortillas on the side.','Toddler tip: mash beans into rice, offer soft toppings without sour cream.'],
         tip:''},
        {type:'snack',name:'Apple Slices & Cheddar',
         ing:['4 apples','200g cheddar cheese'],
         steps:['Core and slice apples.','Slice or cube cheddar.','Arrange on a plate.','Classic combination — kids always eat this without fuss!'],
         tip:''},
        {type:'dinner',name:'Beef & Broccoli Stir-Fry with Rice',
         ing:['500g beef sirloin, thin strips','2 cups broccoli florets','2 cups cooked rice','3 tbsp soy sauce','1 tbsp oyster sauce','1 tsp cornstarch','2 cloves garlic, minced','1 tsp fresh ginger, grated','1 tbsp sesame oil','2 tbsp cooking oil'],
         steps:['Mix soy sauce, oyster sauce, and cornstarch; toss with beef strips to marinate 15 min.','Blanch or steam broccoli 3 min; drain.','Heat oil in wok on high; sear beef strips 2–3 min until browned and caramelised.','Add garlic and ginger; stir 30 sec.','Add broccoli; stir-fry 2 min.','Pour remaining marinade over; toss until coated and glossy.','Serve over rice.'],
         tip:'Beef + broccoli: both are great iron sources. A satisfying, classic stir-fry to end the working week on a high!'}
      ]},
      {name:'Friday',date:'May 29',meals:[
        {type:'lunch',name:'Tuna & Pasta Bake',
         ing:['2 cans (160g) tuna, drained','340g penne pasta','1 can cream of mushroom soup','1 cup milk','1 cup frozen peas','1 cup shredded cheese','Salt & pepper','Breadcrumbs (optional topping)'],
         steps:['Preheat oven to 190°C / 375°F. Cook pasta until al dente; drain.','Mix tuna, soup, milk, peas, and pasta in a large bowl; season.','Pour into greased baking dish; top with shredded cheese and breadcrumbs.','Bake 25–30 min until golden and bubbling.','Let stand 5 min before serving.','Toddler tip: serve from the soft centre without the crunchy topping.'],
         tip:''},
        {type:'snack',name:'Berry Banana Smoothie',
         ing:['2 cups frozen mixed berries','2 bananas (frozen from Sunday prep)','2 cups milk or Greek yogurt','1 tbsp honey'],
         steps:['Add all ingredients to blender.','Blend on high until smooth and thick.','Add a splash more milk for thinner consistency.','Pour into cups and serve immediately.','Toddler tip: slightly thinner consistency in a sippy cup.'],
         tip:'Great antioxidants and vitamins to end the week! Frozen berries are just as nutritious as fresh.'},
        {type:'dinner',name:'Chicken & Potato Traybake',
         ing:['8 bone-in chicken thighs or drumsticks','4 medium potatoes, chunked','1 whole head garlic, halved crosswise','1 lemon, halved','2 sprigs fresh rosemary','2 sprigs fresh thyme','3 tbsp olive oil','1 cup cherry tomatoes','Salt & pepper'],
         steps:['Preheat oven to 220°C / 425°F.','Toss potato chunks, garlic halves, and cherry tomatoes in olive oil, salt, and pepper; spread in large roasting pan.','Place chicken pieces on top; drizzle with oil; lay rosemary and thyme over everything.','Place lemon halves cut-side down in the pan.','Roast 45–50 min until chicken is golden and internal temp 74°C / 165°F.','Squeeze the roasted lemon halves over the chicken just before serving.','A rustic, hands-off Friday dinner — the oven does all the work!'],
         tip:'Perfect end to May — minimal effort, maximum flavour. The roasted garlic becomes sweet and spreadable!'}
      ]}
    ],
    shopping:[
      {cat:'Proteins & Fish',items:['700g beef (for Sunday stew — chuck or shin)','2 chicken breasts (for Sunday prep — shred for enchiladas + soup)','8 bone-in chicken thighs or drumsticks','700g pork tenderloin','4 salmon fillets (180g each)','500g beef sirloin (for stir-fry)','2 cans tuna in spring water']},
      {cat:'Vegetables',items:['3 large carrots','2 parsnips','2 beets','1 sweet potato','2 celery stalks','2 onions','2 heads garlic','1 whole garlic head (for traybake)','2 cups cherry tomatoes','2 cups fresh spinach','2 cups broccoli (for stir-fry)','1 bunch asparagus','Mixed greens (for salad)','4 medium potatoes (for traybake)','Fresh rosemary','Fresh thyme','Fresh dill','Fresh parsley','Fresh cilantro','Fresh ginger']},
      {cat:'Fruit',items:['4 apples','4 pears','2 avocados','4 bananas (freeze 2 for smoothie)','2 cups frozen mixed berries','2 limes','1 lemon']},
      {cat:'Grains & Bread',items:['2 cups dry rice','1.5 cups dry quinoa','200g egg noodles','340g penne','8 corn tortillas','Flour tortillas']},
      {cat:'Pantry',items:['Enchilada sauce (jar, 2 cups)','Chicken broth (1.2L)','1 can black beans','1 can kidney beans','1 can black beans (extra for enchiladas)','1 can cream of mushroom soup','Cumin','Chili powder','Garlic powder','Rosemary','Thyme','Smoked paprika','Soy sauce','Oyster sauce','Cornstarch','Sesame oil','Honey','Breadcrumbs (½ cup)','Olive oil']},
      {cat:'Dairy & Fridge',items:['Greek yogurt (2 cups)','1.5 cups shredded cheese (for enchiladas)','1 cup shredded cheese (for pasta bake)','200g cheddar cheese','100g feta cheese (optional)','Sour cream (½ cup)','Butter','Milk (2 cups)','Eggs (8)']},
      {cat:'Other',items:['Mixed nuts (½ cup)','8 rice cakes','Crackers']}
    ]
  }
};

/* ============================================================
   Language
   ============================================================ */
function toggleLang() {
  lang = lang === 'en' ? 'es' : 'en';
  applyLang();
}

function applyLang() {
  document.documentElement.lang = lang;

  // Static elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang][key] !== undefined) el.textContent = i18n[lang][key];
  });

  // Lang button
  document.getElementById('lang-btn').textContent = t('langBtn');

  // Tab buttons
  const tabs = document.querySelectorAll('.tab-btn');
  t('tabs').forEach((label, i) => { if (tabs[i]) tabs[i].textContent = label; });

  // Rebuild all week content
  [1,2,3,4].forEach(buildWeek);
}

/* ============================================================
   Navigation
   ============================================================ */
let currentWeek = 1;

function showWeek(n) {
  document.querySelectorAll('.week-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('w' + n).classList.add('active');
  document.querySelectorAll('.tab-btn')[n - 1].classList.add('active');
  currentWeek = n;
}

/* ============================================================
   Modal
   ============================================================ */
function openModal(wk, day, mealIdx) {
  const d = data[wk].days[day].meals[mealIdx];
  const mt = t('mealTypes')[d.type];

  document.getElementById('m-name').textContent = d.name;
  document.getElementById('m-meta').textContent =
    mt.icon + ' ' + mt.label + ' · ' + t('serves');

  document.getElementById('m-ing').innerHTML =
    d.ing.map(i => `<li>${i}</li>`).join('');
  document.getElementById('m-steps').innerHTML =
    d.steps.map(s => `<li>${s}</li>`).join('');

  const tipEl = document.getElementById('m-tip');
  if (d.tip) { tipEl.textContent = '💚 ' + d.tip; tipEl.style.display = 'block'; }
  else { tipEl.style.display = 'none'; }

  // Update modal section labels (in case lang changed while modal was closed)
  document.querySelector('#modal [data-i18n="ingredients"]').textContent = t('ingredients');
  document.querySelector('#modal [data-i18n="steps"]').textContent = t('steps');

  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modal')) return;
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ============================================================
   Shopping Toggle
   ============================================================ */
function toggleShopping(n) {
  document.querySelector(`#shop-toggle-${n}`).classList.toggle('open');
  document.querySelector(`#shop-body-${n}`).classList.toggle('open');
}

/* ============================================================
   Week Renderer
   ============================================================ */
function buildWeek(n) {
  const w = data[n];
  const section = document.getElementById('w' + n);
  const days = t('days');
  const mealTypes = t('mealTypes');
  const shopCats = t('shopCats');

  const title  = lang === 'es' ? w.titleEs  : w.title;
  const dates  = lang === 'es' ? w.datesEs  : w.dates;
  const prepDate = lang === 'es' ? w.prep.dateEs : w.prep.date;

  const daysHtml = w.days.map((day, di) => {
    const mealsHtml = day.meals.map((meal, mi) => {
      const mt = mealTypes[meal.type];
      return `<div class="meal-slot" onclick="openModal(${n},${di},${mi})">
        <span class="meal-badge badge-${meal.type}">${mt.icon} ${mt.label}</span>
        <div class="meal-name">${meal.name}</div>
        <div class="meal-hint">${t('tapRecipe')}</div>
      </div>`;
    }).join('');

    return `<div class="day-col">
      <div class="day-header">${days[di]}<span>${day.date}</span></div>
      ${mealsHtml}
    </div>`;
  }).join('');

  const shopHtml = w.shopping.map(cat => `
    <div class="shop-cat">
      <h4>${shopCats[cat.cat] || cat.cat}</h4>
      <ul>${cat.items.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>`).join('');

  section.innerHTML = `
    <h2 class="week-header">${title} &nbsp;·&nbsp; ${dates}</h2>
    <div class="sunday-prep">
      <h3>📋 ${prepDate}</h3>
      <ul>${w.prep.tasks.map(task => `<li>${task}</li>`).join('')}</ul>
    </div>
    <div class="calendar">${daysHtml}</div>
    <div class="shopping-section">
      <div class="shopping-toggle" id="shop-toggle-${n}" onclick="toggleShopping(${n})">
        <h3>🛒 ${t('shopping')} — ${title}</h3>
        <span class="arrow">▼</span>
      </div>
      <div class="shopping-body" id="shop-body-${n}">
        <div class="shop-grid">${shopHtml}</div>
      </div>
    </div>`;
}

/* ============================================================
   Build tab buttons then render all weeks
   ============================================================ */
(function init() {
  const nav = document.getElementById('tabs-nav');
  i18n.en.tabs.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (i === 0 ? ' active' : '');
    btn.textContent = i18n[lang].tabs[i];
    btn.onclick = () => showWeek(i + 1);
    nav.appendChild(btn);
  });
  [1,2,3,4].forEach(buildWeek);
})();
