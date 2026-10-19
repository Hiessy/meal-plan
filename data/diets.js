/* ============================================================
   Diets — the facts behind the blood-type and age filters.
   Both work on ingredient keys of data/ingredients.js: a recipe is
   left out when one of its lines (not marked "optional") matches
   an ingredient listed here.

   bloodTypes : Eat Right 4 Your Type (Dr. Peter J. D'Adamo with
                Catherine Whitney), simplified: the foods each type
                is told to avoid. Studies have not found that eating
                for your blood type brings health benefits.
   ageGroups  : from 6 months on, after WHO guidance on feeding
                infants and young children (6–23 months) and common
                choking-risk advice; `months` is where the group starts
                and `how` says how to serve the family meal.
   minAge     : ingredient key → youngest age in months it suits
   minAgeTags : recipe tag → youngest age in months it suits
   dietFoods  : the ingredient keys behind the meat-free, vegan and
                gluten-free marks on each meal
   ============================================================ */
const bloodTypes = (() => {
  const WHEAT = ['bread', 'pasta', 'flour', 'pita', 'burger-buns', 'breadcrumbs', 'croutons', 'flour-tortillas',
    'couscous', 'egg-noodles', 'gnocchi', 'pizza-dough', 'pie-crust', 'empanada-discs', 'crackers', 'bulgur',
    'semolina', 'puff-pastry', 'udon', 'naan', 'medialunas', 'cookies', 'filled-pasta', 'rolls', 'sponge-cake'];
  const CORN = ['corn', 'corn-tortillas', 'popcorn', 'cornstarch', 'polenta', 'cornmeal', 'arepa-flour', 'tortilla-chips',
    'cornflakes', 'hominy'];
  const PORK = ['pork-tenderloin', 'pork-chops', 'pork-ribs', 'ground-pork', 'pork-shoulder', 'bacon', 'ham',
    'chorizo', 'salami', 'sausages'];
  const BEEF = ['ground-beef', 'beef-chuck', 'beef-sirloin', 'beef-steak', 'beef-ribs', 'beef-mince-lean'];
  const CHICKEN = ['chicken-cooked', 'chicken-breast', 'chicken-thighs', 'chicken-wings', 'whole-chicken', 'chicken-broth'];
  const SHELLFISH = ['shrimp', 'squid', 'mussels', 'clams', 'crab'];
  const DAIRY = ['milk', 'greek-yogurt', 'cream-cheese', 'cheddar', 'parmesan', 'ricotta', 'sour-cream',
    'shredded-cheese', 'cheese', 'cream', 'ice-cream', 'dulce-de-leche', 'condensed-milk', 'paneer', 'halloumi'];
  const TOMATO = ['tomatoes', 'cherry-tomatoes', 'canned-tomatoes', 'tomato-paste', 'passata'];

  return {
    O: {
      name: { en: 'O', es: '0' },
      avoid: [...WHEAT, ...CORN, ...PORK, ...DAIRY.filter(k => !['halloumi'].includes(k)), 'oats', 'granola',
        'kidney-beans', 'lentils', 'white-beans', 'potatoes', 'eggplant', 'cabbage', 'coleslaw-mix', 'cauliflower',
        'mushrooms', 'avocados', 'olives', 'oranges', 'strawberries', 'melon', 'coconut-milk', 'coconut',
        'peanut-butter', 'peanuts', 'vinegar', 'ketchup', 'cinnamon', 'nutmeg', 'maple-syrup']
    },
    A: {
      name: { en: 'A', es: 'A' },
      avoid: [...BEEF, ...PORK, ...SHELLFISH, 'lamb', 'milk', 'butter', 'cheddar', 'cream-cheese', 'parmesan',
        'sour-cream', 'shredded-cheese', 'cheese', 'cream', 'ice-cream', 'condensed-milk', 'dulce-de-leche',
        'mayonnaise', 'ketchup', 'vinegar', 'potatoes', 'sweet-potatoes', ...TOMATO, 'bell-peppers', 'eggplant',
        'cabbage', 'coleslaw-mix', 'mushrooms', 'olives', 'oranges', 'bananas', 'mango', 'melon', 'coconut-milk',
        'coconut', 'kidney-beans', 'chickpeas', 'chickpea-flour', 'hummus', 'white-beans']
    },
    B: {
      name: { en: 'B', es: 'B' },
      avoid: [...CHICKEN, ...SHELLFISH, ...PORK, ...CORN, ...WHEAT, 'lentils', 'chickpeas', 'chickpea-flour', 'hummus', 'black-beans',
        'peanut-butter', 'peanuts', 'sesame-oil', 'seeds', 'tahini', 'pine-nuts', 'mixed-nuts', ...TOMATO,
        'avocados', 'olives', 'pumpkin', 'coconut-milk', 'coconut', 'buckwheat']
    },
    AB: {
      name: { en: 'AB', es: 'AB' },
      avoid: [...BEEF, ...PORK, ...CHICKEN, ...SHELLFISH, ...CORN, 'kidney-beans', 'black-beans', 'chickpeas', 'chickpea-flour',
        'hummus', 'sesame-oil', 'seeds', 'tahini', 'avocados', 'bananas', 'oranges', 'mango', 'coconut-milk',
        'coconut', 'bell-peppers', 'olives', 'butter', 'parmesan', 'vinegar', 'buckwheat']
    }
  };
})();

const ageGroups = [
  { id: 'm6', months: 6,
    name: { en: '6–8 months', es: '6–8 meses' },
    how: { en: 'Mash or purée a small portion before adding any salt or sugar. Start with 2–3 spoonfuls, 2–3 times a day, and keep breastfeeding.',
           es: 'Pisá o hacé puré una porción chica antes de agregar sal o azúcar. Empezá con 2–3 cucharadas, 2–3 veces por día, y seguí con la lactancia.' } },
  { id: 'm9', months: 9,
    name: { en: '9–11 months', es: '9–11 meses' },
    how: { en: 'Chop finely or mash, and offer soft pieces to pick up. 3–4 meals a day, plus breast milk.',
           es: 'Picá bien fino o pisá, y ofrecé trocitos blandos para agarrar con la mano. 3–4 comidas por día, más la leche materna.' } },
  { id: 'm12', months: 12,
    name: { en: '12–23 months', es: '12–23 meses' },
    how: { en: 'Family food cut into small pieces. 3–4 meals and 1–2 snacks a day; keep added salt and sugar low.',
           es: 'La comida de la familia en trocitos. 3–4 comidas y 1–2 colaciones por día, con poca sal y poca azúcar agregadas.' } },
  { id: 'y2', months: 24,
    name: { en: '2–5 years', es: '2–5 años' },
    how: { en: 'Family food. Cut round foods (grapes, cherry tomatoes, sausages) lengthwise; no whole nuts or popcorn.',
           es: 'La comida de la familia. Cortá a lo largo los alimentos redondos (uvas, tomates cherry, salchichas); nada de frutos secos enteros ni pochoclo.' } },
  { id: 'y6', months: 72,
    name: { en: '6 years and up', es: '6 años o más' },
    how: { en: 'Everything the family eats, in a child-sized portion.',
           es: 'Todo lo que come la familia, en una porción a su medida.' } }
];

const minAge = {
  // Honey can carry botulism spores: not before 1 year
  'honey': 12,
  // Added sugar: not before 2 years
  'sugar': 24, 'brown-sugar': 24, 'maple-syrup': 24, 'dulce-de-leche': 24, 'condensed-milk': 24,
  'chocolate': 24, 'jam': 24, 'ice-cream': 24, 'cookies': 24, 'medialunas': 24, 'bbq-sauce': 24, 'ketchup': 24,
  'quince-paste': 24, 'meringues': 24, 'sponge-cake': 24,
  // Very salty foods: not before 1 year; processed meats not before 2
  'soy-sauce': 12, 'fish-sauce': 12, 'oyster-sauce': 12, 'worcestershire': 12, 'olives': 12, 'capers': 12,
  'parmesan': 12, 'feta': 12, 'halloumi': 12, 'pickles': 12, 'caesar-dressing': 12, 'cocoa': 12, 'miso': 12,
  'kimchi': 12, 'anchovies': 12, 'chili-pastes': 12, 'baked-beans': 12,
  'bacon': 24, 'ham': 24, 'chorizo': 24, 'salami': 24, 'sausages': 24,
  // Tea, coffee and mate hold back iron and carry caffeine
  'tea': 24, 'yerba-mate': 24, 'coffee': 72,
  // Choking risk: whole nuts and popcorn not before 5 years
  'mixed-nuts': 60, 'pine-nuts': 60, 'peanuts': 60, 'popcorn': 60, 'cashews': 60, 'walnuts': 60, 'almonds': 60,
  // Alcohol, even cooked
  'red-wine': 72, 'white-wine': 72, 'beer': 72
};

// Raw fish or eggs (ceviche, sushi, poke, tartare)
const minAgeTags = { raw: 72 };

// What a meal must not have to be marked meat-free (no meat, poultry or
// fish), vegan (nothing from animals) or gluten-free. Regular oats count
// as gluten: only certified gluten-free oats are safe for coeliacs.
const dietFoods = {
  meat: ['lamb', 'beef-steak', 'beef-chuck', 'beef-sirloin', 'ground-beef', 'pork-shoulder', 'pork-tenderloin',
    'pork-chops', 'pork-ribs', 'ground-pork', 'sausages', 'ham', 'bacon', 'chicken-cooked', 'chicken-breast',
    'chicken-thighs', 'turkey', 'beef-broth', 'chicken-broth', 'gelatine',
    'trout', 'salmon', 'white-fish', 'tuna', 'shrimp', 'mussels', 'squid', 'fish-sauce', 'oyster-sauce',
    'caesar-dressing'],
  animal: ['milk', 'greek-yogurt', 'butter', 'ricotta', 'mozzarella', 'cheddar', 'parmesan', 'cream-cheese', 'feta',
    'shredded-cheese', 'cheese', 'sour-cream', 'cream', 'dulce-de-leche', 'paneer', 'eggs', 'mayonnaise', 'meringues',
    'honey', 'medialunas', 'cookies', 'sponge-cake', 'egg-noodles', 'filled-pasta', 'puff-pastry', 'pie-crust',
    'pesto', 'mushroom-soup', 'kimchi'],
  gluten: ['flour', 'bread', 'rolls', 'pasta', 'filled-pasta', 'egg-noodles', 'udon', 'couscous', 'bulgur', 'semolina',
    'pita', 'burger-buns', 'breadcrumbs', 'croutons', 'flour-tortillas', 'gnocchi', 'pizza-dough', 'pie-crust',
    'empanada-discs', 'puff-pastry', 'crackers', 'medialunas', 'cookies', 'sponge-cake', 'cornflakes', 'oats',
    'granola', 'soy-sauce', 'miso'],
  // Lines that name meat although their shopping row is something else
  // ("ham and cheese sorrentinos"), and gluten-free lines of a gluten row
  meatWords: /\b(ham|beef|pork|chicken|lamb|bacon|chorizo|salami|sausages?|anchov\w*|tuna|salmon|shrimp|fish)\b/i,
  notGluten: /gluten-free|glass noodles/i
};
