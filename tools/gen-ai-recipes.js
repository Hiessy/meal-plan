// node tools/gen-ai-recipes.js → data/recipes-ai.js: original recipes invented
// by combining proteins, flavours, bases and vegetables (mains, from
// tools/ai-components.js) and fruit, grains, dairy and spices (breakfasts
// and snacks, below). The same seed always gives the same recipes and ids;
// changing a component or a quota changes which combinations are picked.
const fs = require('fs'), path = require('path');
const { L, PROTEINS, VEG, BASES, FLAVOURS } = require('./ai-components.js');
const root = process.argv[2] || path.join(__dirname, '..');

// mulberry32
let seed = 20261017;
const rnd = () => { seed = (seed + 0x6D2B79F5) >>> 0; let x = Math.imul(seed ^ (seed >>> 15), seed | 1); x ^= x + Math.imul(x ^ (x >>> 7), x | 61); return ((x ^ (x >>> 14)) >>> 0) / 4294967296; };
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const slug = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
const low = s => s.toLowerCase();

const out = [], names = new Set();
function add(r) {
  const id = 'ai-' + slug(r.name.en);
  if (names.has(id)) return false;
  // ingredient lines: no duplicates (two flavours may share a line)
  const seen = new Set(), en = [], es = [];
  r.ing.forEach(l => { if (!seen.has(l.en)) { seen.add(l.en); en.push(l.en); es.push(l.es); } });
  const rec = { id, type: r.type };
  if (r.group) rec.group = r.group; else { rec.protein = r.protein; rec.base = r.base; }
  if (r.tags && r.tags.length) rec.tags = r.tags;
  rec.ai = true;
  rec.experimental = true;
  rec.name = r.name;
  rec.ing = { en, es };
  rec.steps = { en: r.steps.map(s => s.en), es: r.steps.map(s => s.es) };
  if (r.prep && r.prep.length) rec.prep = r.prep;
  names.add(id);
  out.push(rec);
  return true;
}

/* ═════════════════════════ Lunches & dinners ═════════════════════════ */
const vegHow = (v, ways) => ways.find(w => w === 'raw' ? v.raw : v[w]);
function vegStep(v, how) {
  if (how === 'roast') return L(`Roast ${v.the.en} with a little oil at 200°C for ${v.roast} min.`, `Asá ${v.the.es} con un poco de aceite a 200°C ${v.roast} min.`);
  if (how === 'saute') return L(`Sauté ${v.the.en} in a little oil for ${v.saute} min.`, `Salteá ${v.the.es} en un poco de aceite ${v.saute} min.`);
  return L(`Cut ${v.the.en} into thin slices or shreds.`, `Cortá ${v.the.es} en láminas finas o en tiras.`);
}
const serveWith = b => L(`Serve with the ${low(b.en)} and the rest of the sauce.`, `Serví con ${b.es} y el resto de la salsa.`);
const brothFor = p => p.fact === 'poultry' ? L('5 cups chicken broth', '5 tazas caldo de pollo') : L('5 cups vegetable broth', '5 tazas caldo de verduras');

const STYLES = {
  tray: { type: 'dinner', quota: 150, ok: (p, f, b, v) => p.roast && v.roast,
    name: (p, f, b, v) => L(`${f.en} ${p.en} with ${b.en} & ${v.en}`, `${cap(p.es)} ${f.es} con ${b.es} y ${v.es}`),
    steps: (p, f, b, v) => [f.make,
      v.roast > p.roast
        ? L(`Spread ${v.the.en} on a tray with a little oil and roast at 200°C for ${v.roast - p.roast} min; add ${p.the.en} tossed in half the sauce and roast ${p.roast} min more.`,
            `Acomodá ${v.the.es} en una placa con un poco de aceite y asá a 200°C ${v.roast - p.roast} min; sumá ${p.the.es} con la mitad de la salsa y asá ${p.roast} min más.`)
        : L(`Toss ${p.the.en} and ${v.the.en} with half the sauce and a little oil and roast at 200°C for ${p.roast} min.`,
            `Mezclá ${p.the.es} y ${v.the.es} con la mitad de la salsa y un poco de aceite y asá a 200°C ${p.roast} min.`),
      b.cook, serveWith(b)] },
  stew: { type: 'dinner', quota: 120, ok: (p, f, b, v) => f.stew && p.simmer && v.simmer, tags: ['stew'], prep: ['chop-veg'],
    name: (p, f, b, v) => L(`${f.en} ${p.en} & ${v.en} Stew with ${b.en}`, `Guiso de ${p.es} y ${v.es} ${f.es} con ${b.es}`),
    ing: f => f.stewIng,
    steps: (p, f, b, v) => [f.stew, p.simmer, L(`Add ${v.the.en} for the last ${v.simmer} min.`, `Sumá ${v.the.es} los últimos ${v.simmer} min.`),
      b.cook, L(`Serve the stew with the ${low(b.en)}.`, `Serví el guiso con ${b.es}.`)] },
  pasta: { type: 'dinner', quota: 90, ok: (p, f, b, v) => v.saute || v.roast,
    name: (p, f, b, v) => L(`${f.en} ${p.en} ${b.en} with ${v.en}`, `${cap(b.es)} con ${p.es} ${f.es} y ${v.es}`),
    steps: (p, f, b, v) => [f.make, b.cook, p.pan, vegStep(v, vegHow(v, ['saute', 'roast'])),
      L(`Toss the pasta with ${p.the.en}, ${v.the.en} and the sauce, loosening with a little of the pasta water.`,
        `Mezclá la pasta con ${p.the.es}, ${v.the.es} y la salsa, aligerando con un poco del agua de cocción.`)] },
  noodles: { type: 'dinner', quota: 90, ok: (p, f, b, v) => v.saute, tags: ['stir-fry-noodles'],
    name: (p, f, b, v) => L(`${f.en} ${p.en} ${b.en} with ${v.en}`, `${cap(b.es)} con ${p.es} ${f.es} y ${v.es}`),
    steps: (p, f, b, v) => [f.make, b.cook, p.pan, vegStep(v, 'saute'),
      L(`Toss the noodles with ${p.the.en}, ${v.the.en} and the sauce for 2 min.`, `Saltá los fideos con ${p.the.es}, ${v.the.es} y la salsa 2 min.`)] },
  skewers: { type: 'dinner', quota: 70, ok: (p, f, b, v) => p.skewer && v.skewer, tags: ['skewers'],
    name: (p, f, b, v) => L(`${f.en} ${p.en} Skewers with ${b.en} & ${v.en}`, `Brochetas de ${p.es} ${f.es} con ${b.es} y ${v.es}`),
    steps: (p, f, b, v) => [f.make,
      L(`Cut ${p.the.en} and ${v.the.en} into chunks, thread onto skewers and brush with half the sauce.`, `Cortá ${p.the.es} y ${v.the.es} en trozos, ensartalos en brochetas y pincelá con la mitad de la salsa.`),
      L(`Grill or roast at 220°C for ${p.skewer} min, turning once.`, `Cociná a la parrilla o al horno a 220°C ${p.skewer} min, dando vuelta una vez.`),
      b.cook, serveWith(b)] },
  bowl: { type: 'lunch', quota: 120, ok: (p, f, b, v) => true,
    name: (p, f, b, v) => L(`${f.en} ${p.en} ${b.en} Bowl with ${v.en}`, `Bowl de ${b.es} con ${p.es} ${f.es} y ${v.es}`),
    steps: (p, f, b, v) => [f.make, b.cook, p.pan, vegStep(v, vegHow(v, ['roast', 'raw', 'saute'])),
      L(`Fill bowls with the ${low(b.en)}, ${p.the.en} and ${v.the.en}, and spoon the sauce over.`, `Armá los bowls con ${b.es}, ${p.the.es} y ${v.the.es}, y bañá con la salsa.`)] },
  salad: { type: 'lunch', quota: 80, ok: (p, f, b, v) => v.raw || v.roast,
    name: (p, f, b, v) => b.key === 'lettuce'
      ? L(`Warm ${f.en} ${p.en} Salad with ${v.en}`, `Ensalada tibia de ${p.es} ${f.es} con ${v.es}`)
      : L(`Warm ${f.en} ${p.en} Salad with ${b.en} & ${v.en}`, `Ensalada tibia de ${p.es} ${f.es} con ${b.es} y ${v.es}`),
    steps: (p, f, b, v) => [f.make, b.cook,
      p.roast ? L(`Roast ${p.the.en} with a little of the sauce at 200°C for ${p.roast} min.`, `Asá ${p.the.es} con un poco de la salsa a 200°C ${p.roast} min.`) : p.pan,
      vegStep(v, vegHow(v, ['raw', 'roast'])),
      L(`Toss everything with the rest of the sauce as a dressing and serve warm.`, `Mezclá todo con el resto de la salsa como aderezo y serví tibio.`)] },
  tacos: { type: 'lunch', quota: 90, ok: (p, f, b, v) => v.raw || v.saute, tags: ['tacos'],
    name: (p, f, b, v) => L(`${f.en} ${p.en} Tacos with ${v.en}`, `Tacos de ${p.es} ${f.es} con ${v.es}`),
    steps: (p, f, b, v) => [f.make, p.pan, vegStep(v, vegHow(v, ['raw', 'saute'])), b.cook,
      L(`Fill the tortillas with ${p.the.en} and ${v.the.en} and spoon the sauce over.`, `Rellená las tortillas con ${p.the.es} y ${v.the.es} y bañá con la salsa.`)] },
  flatbread: { type: 'lunch', quota: 70, ok: (p, f, b, v) => v.raw || v.roast, tags: ['wraps'],
    name: (p, f, b, v) => L(`${f.en} ${p.en} ${b.en} Wraps with ${v.en}`, `Wraps de ${b.es} con ${p.es} ${f.es} y ${v.es}`),
    steps: (p, f, b, v) => [f.make,
      p.roast ? L(`Roast ${p.the.en} with half the sauce at 200°C for ${p.roast} min.`, `Asá ${p.the.es} con la mitad de la salsa a 200°C ${p.roast} min.`) : p.pan,
      vegStep(v, vegHow(v, ['roast', 'raw'])), b.cook,
      L(`Fill the breads with ${p.the.en} and ${v.the.en}, add the sauce and roll up.`, `Rellená los panes con ${p.the.es} y ${v.the.es}, sumá la salsa y enrollá.`)] },
  soup: { type: 'lunch', quota: 60, ok: (p, f, b, v) => f.stew && p.soup && v.simmer, tags: ['soup'], prep: ['chop-veg'],
    name: (p, f, b, v) => b.key === 'soup-plain'
      ? L(`${f.en} ${p.en} & ${v.en} Soup`, `Sopa de ${p.es} y ${v.es} ${f.es}`)
      : L(`${f.en} ${p.en} & ${v.en} Soup with ${b.en}`, `Sopa de ${p.es} y ${v.es} ${f.es} con ${b.es}`),
    ing: (f, p) => f.stewIng.some(l => /broth/.test(l.en)) ? f.stewIng : [...f.stewIng, brothFor(p)],
    steps: (p, f, b, v) => [f.stew,
      L('Add the broth and bring to a gentle simmer.', 'Sumá el caldo y llevá a hervor suave.'),
      L(`Add ${p.the.en} and simmer ${p.soup} min.`, `Agregá ${p.the.es} y cociná ${p.soup} min.`),
      L(`Add ${v.the.en} for the last ${v.simmer} min.`, `Sumá ${v.the.es} los últimos ${v.simmer} min.`),
      ...(b.cook ? [b.cook] : [])] },
  rice: { type: 'lunch', quota: 50, ok: (p, f, b, v) => v.saute, tags: ['fried-rice'],
    name: (p, f, b, v) => L(`${f.en} ${p.en} Fried Rice with ${v.en}`, `Arroz salteado con ${p.es} ${f.es} y ${v.es}`),
    steps: (p, f, b, v) => [f.make, p.pan, vegStep(v, 'saute'),
      L(`Add the cooked rice and the sauce to the pan and stir-fry 5 min until hot; fold in ${p.the.en}.`, `Sumá el arroz cocido y la salsa a la sartén y saltá 5 min, hasta que esté caliente; incorporá ${p.the.es}.`)] },
  empanadas: { type: 'lunch', quota: 40, ok: (p, f, b, v) => v.saute, tags: ['empanadas'],
    name: (p, f, b, v) => L(`${f.en} ${p.en} & ${v.en} Empanadas`, `Empanadas de ${p.es} y ${v.es} ${f.es}`),
    steps: (p, f, b, v) => [f.make, p.pan, vegStep(v, 'saute'),
      L(`Mix ${p.the.en} and ${v.the.en} with 3 tbsp of the sauce and let cool.`, `Mezclá ${p.the.es} y ${v.the.es} con 3 cdas de la salsa y dejá enfriar.`),
      L('Fill the discs, seal and bake at 220°C for 15 min; serve with the rest of the sauce.', 'Rellená las tapas, cerrá y horneá a 220°C 15 min; serví con el resto de la salsa.')] }
};

function mains() {
  const usedPF = {};
  for (const [style, S] of Object.entries(STYLES)) {
    const combos = [];
    for (const p of PROTEINS) {
      if (!p.styles.includes(style)) continue;
      for (const f of FLAVOURS) {
        if (!f.styles.includes(style)) continue;
        for (const b of BASES) {
          if (!b.styles.includes(style) || (b.coconut && f.coconut)) continue;
          for (const v of VEG) {
            if ((p.noVeg || []).includes(v.key) || (b.noVeg || []).includes(v.key)) continue;
            if (S.ok(p, f, b, v)) combos.push([p, f, b, v]);
          }
        }
      }
    }
    let made = 0;
    const usedTriple = new Set();
    for (const [p, f, b, v] of shuffle(combos)) {
      if (made >= S.quota) break;
      const triple = p.key + '|' + f.key, pf = triple + '|' + style;
      if (usedTriple.has(pf) || (usedPF[triple] || 0) >= 3) continue;
      const ing = [...f.ing, ...(S.ing ? S.ing(f, p) : []), ...p.ing, v.ing, ...b.ing];
      const prep = [...(S.prep || [])];
      if (b.key === 'rice' || b.key === 'coconut-rice') prep.push('rice');
      if (b.key === 'quinoa') prep.push('quinoa');
      const ok = add({ type: S.type, protein: p.fact, base: b.fact, tags: [...(S.tags || []), 'ai-' + f.key],
        name: S.name(p, f, b, v), ing, steps: S.steps(p, f, b, v).filter(Boolean), prep });
      if (ok) { made++; usedTriple.add(pf); usedPF[triple] = (usedPF[triple] || 0) + 1; }
    }
    console.log(style.padEnd(10), made, 'of', combos.length, 'combinations');
  }
}

/* ═════════════════════════ Breakfasts & snacks ═════════════════════════ */
const FRUIT = {
  banana:     { en: 'Banana', es: 'banana', ing: L('2 bananas', '2 bananas'), the: L('the banana', 'la banana'), baked: L('Baked Bananas', 'Bananas asadas'), slices: L('4 bananas, halved lengthwise', '4 bananas cortadas a lo largo') },
  apple:      { en: 'Apple', es: 'manzana', ing: L('2 apples, grated', '2 manzanas ralladas'), the: L('the apple', 'la manzana'), baked: L('Baked Apples', 'Manzanas asadas'), slices: L('2 apples, sliced', '2 manzanas en gajos') },
  pear:       { en: 'Pear', es: 'pera', ing: L('2 pears, diced', '2 peras en cubos'), the: L('the pear', 'la pera'), baked: L('Baked Pears', 'Peras asadas'), slices: L('2 pears, sliced', '2 peras en gajos') },
  berries:    { en: 'Berry', es: 'frutos rojos', ing: L('1½ cups mixed berries', '1½ tazas frutos rojos'), the: L('the berries', 'los frutos rojos') },
  strawberry: { en: 'Strawberry', es: 'frutilla', ing: L('1½ cups strawberries', '1½ tazas frutillas'), the: L('the strawberries', 'las frutillas') },
  mango:      { en: 'Mango', es: 'mango', ing: L('1 mango, diced', '1 mango en cubos'), the: L('the mango', 'el mango') },
  peach:      { en: 'Peach', es: 'durazno', ing: L('2 peaches, diced', '2 duraznos en cubos'), the: L('the peaches', 'los duraznos'), baked: L('Baked Peaches', 'Duraznos asados'), slices: L('4 peaches, halved', '4 duraznos en mitades') },
  kiwi:       { en: 'Kiwi', es: 'kiwi', ing: L('3 kiwis, diced', '3 kiwis en cubos'), the: L('the kiwi', 'el kiwi') },
  pineapple:  { en: 'Pineapple', es: 'ananá', ing: L('1½ cups pineapple, diced', '1½ tazas ananá en cubos'), the: L('the pineapple', 'el ananá') },
  orange:     { en: 'Orange', es: 'naranja', ing: L('2 oranges', '2 naranjas'), the: L('the orange', 'la naranja') },
  grape:      { en: 'Grape', es: 'uva', ing: L('1½ cups grapes, halved', '1½ tazas uvas en mitades'), the: L('the grapes', 'las uvas') },
  melon:      { en: 'Melon', es: 'melón', ing: L('½ melon, diced', '½ melón en cubos'), the: L('the melon', 'el melón') },
  watermelon: { en: 'Watermelon', es: 'sandía', ing: L('3 cups watermelon, diced', '3 tazas sandía en cubos'), the: L('the watermelon', 'la sandía') },
  tangerine:  { en: 'Tangerine', es: 'mandarina', ing: L('4 tangerines', '4 mandarinas'), the: L('the tangerines', 'las mandarinas') }
};
const F = k => FRUIT[k];
const SPICE = {
  cinnamon: { en: 'Cinnamon', es: 'canela', ing: L('1 tsp cinnamon', '1 cdita canela') },
  vanilla:  { en: 'Vanilla', es: 'vainilla', ing: L('1 tsp vanilla extract', '1 cdita esencia de vainilla') },
  cocoa:    { en: 'Cocoa', es: 'cacao', ing: L('1 tbsp cocoa powder', '1 cda cacao en polvo') },
  ginger:   { en: 'Ginger', es: 'jengibre', ing: L('1 tsp ground ginger', '1 cdita jengibre en polvo') },
  cardamom: { en: 'Cardamom', es: 'cardamomo', ing: L('½ tsp ground cardamom', '½ cdita cardamomo molido') },
  nutmeg:   { en: 'Nutmeg', es: 'nuez moscada', ing: L('¼ tsp nutmeg', '¼ cdita nuez moscada') }
};
const TOP = {
  walnuts:  { en: 'Walnuts', es: 'nueces', ing: L('¼ cup walnuts, chopped', '¼ taza nueces picadas') },
  seeds:    { en: 'Seeds', es: 'semillas', ing: L('2 tbsp sunflower seeds', '2 cdas semillas de girasol') },
  granola:  { en: 'Granola', es: 'granola', ing: L('½ cup granola', '½ taza granola') },
  coconut:  { en: 'Coconut', es: 'coco', ing: L('2 tbsp desiccated coconut', '2 cdas coco rallado') },
  pb:       { en: 'Peanut Butter', es: 'mantequilla de maní', ing: L('2 tbsp peanut butter', '2 cdas mantequilla de maní') },
  ab:       { en: 'Almond Butter', es: 'mantequilla de almendras', ing: L('2 tbsp almond butter', '2 cdas mantequilla de almendras') },
  honey:    { en: 'Honey', es: 'miel', ing: L('2 tbsp honey', '2 cdas miel') },
  ddl:      { en: 'Dulce de Leche', es: 'dulce de leche', ing: L('2 tbsp dulce de leche', '2 cdas dulce de leche') },
  maple:    { en: 'Maple', es: 'jarabe de arce', ing: L('2 tbsp maple syrup', '2 cdas jarabe de arce') },
  chia:     { en: 'Chia', es: 'chía', ing: L('1 tbsp chia seeds', '1 cda semillas de chía') },
  raisins:  { en: 'Raisins', es: 'pasas', ing: L('2 tbsp raisins', '2 cdas pasas de uva') },
  dates:    { en: 'Dates', es: 'dátiles', ing: L('4 dates, chopped', '4 dátiles picados') },
  yogurt:   { en: 'Yogurt', es: 'yogur', ing: L('1 cup plain yogurt', '1 taza yogur natural') }
};
const T = k => TOP[k];
const fruitKeys = Object.keys(FRUIT), breakfastFruit = ['banana', 'apple', 'pear', 'berries', 'strawberry', 'mango', 'peach', 'kiwi', 'pineapple', 'orange'];
const pickQuota = (combos, n, make) => { let made = 0; for (const c of shuffle(combos)) { if (made >= n) break; if (make(...c)) made++; } return made; };
const cross = (...lists) => lists.reduce((acc, list) => acc.flatMap(a => list.map(x => [...a, x])), [[]]);

function breakfasts() {
  const counts = {};
  const done = (k, n) => { counts[k] = n; };
  // Overnight oats
  done('oats', pickQuota(cross(breakfastFruit, Object.keys(SPICE), ['walnuts', 'seeds', 'granola', 'coconut', 'pb', 'ab', 'honey', 'ddl', 'chia', 'maple']), 55,
    (fk, sk, tk) => { const f = F(fk), s = SPICE[sk], t = T(tk); return add({ type: 'breakfast', group: 'grain', tags: ['oats'], prep: ['overnight-oats'],
      name: L(`${f.en} & ${s.en} Overnight Oats with ${t.en}`, `Avena remojada de ${f.es} y ${s.es} con ${t.es}`),
      ing: [L('1½ cups rolled oats', '1½ tazas avena arrollada'), L('1½ cups milk', '1½ tazas leche'), L('½ cup plain yogurt', '½ taza yogur natural'), s.ing, f.ing, t.ing],
      steps: [L(`Stir the oats, milk, yogurt and ${low(s.en)} together; cover and chill overnight.`, `Mezclá la avena, la leche, el yogur y ${s.es}; tapá y enfriá toda la noche.`),
        L(`In the morning stir in half of ${f.the.en}.`, `A la mañana incorporá la mitad de ${f.the.es}.`),
        L(`Top with the rest and the ${low(t.en)}.`, `Terminá con el resto y ${t.es}.`)] }); }));
  // Warm porridge
  const PORR = {
    oat: { en: 'Oat', es: 'Avena', ing: L('1½ cups rolled oats', '1½ tazas avena arrollada'), t: 5, the: L('the oats', 'la avena') },
    quinoa: { en: 'Quinoa', es: 'Quinoa', ing: L('1 cup quinoa', '1 taza quinoa'), t: 22, the: L('the quinoa', 'la quinoa') },
    cornmeal: { en: 'Cornmeal', es: 'Polenta dulce', ing: L('¾ cup fine cornmeal', '¾ taza harina de maíz fina'), t: 8, the: L('the cornmeal', 'la harina de maíz') },
    rice: { en: 'Rice', es: 'Arroz', ing: L('1 cup short-grain rice', '1 taza arroz de grano corto'), t: 25, the: L('the rice', 'el arroz') }
  };
  done('porridge', pickQuota(cross(Object.keys(PORR), breakfastFruit, ['cinnamon', 'vanilla', 'cardamom', 'nutmeg', 'ginger'], ['walnuts', 'seeds', 'raisins', 'dates', 'honey', 'coconut', 'pb']), 50,
    (bk, fk, sk, tk) => { const b = PORR[bk], f = F(fk), s = SPICE[sk], t = T(tk); return add({ type: 'breakfast', group: 'grain', tags: ['oats'],
      name: L(`${s.en} ${b.en} Porridge with ${f.en} & ${t.en}`, `${b.es} con leche y ${s.es}, ${f.es} y ${t.es}`),
      ing: [b.ing, L('3 cups milk', '3 tazas leche'), s.ing, f.ing, t.ing],
      steps: [L(`Simmer ${b.the.en} in the milk with the ${low(s.en)} for ${b.t} min, stirring often.`, `Cociná ${b.the.es} en la leche con ${s.es} ${b.t} min, revolviendo seguido.`),
        L(`Stir in half of ${f.the.en}.`, `Incorporá la mitad de ${f.the.es}.`),
        L(`Serve warm with the rest and the ${low(t.en)}.`, `Serví tibio con el resto y ${t.es}.`)] }); }));
  // Pancakes
  const BATTER = {
    'banana-oat': { en: 'Banana-Oat', es: 'de banana y avena', group: 'grain', ing: [L('2 ripe bananas', '2 bananas maduras'), L('1 cup rolled oats', '1 taza avena arrollada'), L('2 eggs', '2 huevos'), L('½ cup milk', '½ taza leche')] },
    pumpkin: { en: 'Pumpkin Spice', es: 'de zapallo y canela', group: 'grain', ing: [L('1 cup pumpkin, cooked and mashed', '1 taza zapallo cocido y pisado'), L('1 cup flour', '1 taza harina'), L('2 eggs', '2 huevos'), L('1 tsp cinnamon', '1 cdita canela'), L('1 tsp baking powder', '1 cdita polvo para hornear'), L('¾ cup milk', '¾ taza leche')] },
    carrot: { en: 'Carrot Cake', es: 'de zanahoria', group: 'grain', ing: [L('2 carrots, grated', '2 zanahorias ralladas'), L('1 cup flour', '1 taza harina'), L('2 eggs', '2 huevos'), L('1 tsp cinnamon', '1 cdita canela'), L('1 tsp baking powder', '1 cdita polvo para hornear'), L('¾ cup milk', '¾ taza leche')] },
    cocoa: { en: 'Cocoa-Banana', es: 'de cacao y banana', group: 'grain', ing: [L('1 banana', '1 banana'), L('1 cup flour', '1 taza harina'), L('1 tbsp cocoa powder', '1 cda cacao en polvo'), L('2 eggs', '2 huevos'), L('1 tsp baking powder', '1 cdita polvo para hornear'), L('¾ cup milk', '¾ taza leche')] },
    sweetpotato: { en: 'Sweet Potato', es: 'de batata', group: 'grain', ing: [L('1 cup sweet potato, cooked and mashed', '1 taza batata cocida y pisada'), L('1 cup flour', '1 taza harina'), L('2 eggs', '2 huevos'), L('1 tsp baking powder', '1 cdita polvo para hornear'), L('¾ cup milk', '¾ taza leche')] },
    yogurt: { en: 'Lemon-Yogurt', es: 'de yogur y limón', group: 'grain', ing: [L('1 cup plain yogurt', '1 taza yogur natural'), L('1 cup flour', '1 taza harina'), L('2 eggs', '2 huevos'), L('1 lemon (zest)', '1 limón (ralladura)'), L('1 tsp baking powder', '1 cdita polvo para hornear')] },
    corn: { en: 'Sweet Corn', es: 'de choclo', group: 'grain', ing: [L('1 cup corn', '1 taza choclo'), L('¾ cup flour', '¾ taza harina'), L('2 eggs', '2 huevos'), L('½ cup milk', '½ taza leche'), L('1 tsp baking powder', '1 cdita polvo para hornear')] },
    blender: { en: 'Blender Oat', es: 'de avena licuada', group: 'grain', ing: [L('1½ cups rolled oats', '1½ tazas avena arrollada'), L('1 cup milk', '1 taza leche'), L('2 eggs', '2 huevos'), L('1 tsp baking powder', '1 cdita polvo para hornear')] },
    ricotta: { en: 'Ricotta-Lemon', es: 'de ricota y limón', group: 'dairy', ing: [L('250 g ricotta', '250 g ricota'), L('3 eggs', '3 huevos'), L('¾ cup flour', '¾ taza harina'), L('1 lemon (zest)', '1 limón (ralladura)'), L('1 tsp baking powder', '1 cdita polvo para hornear')] }
  };
  done('pancakes', pickQuota(cross(Object.keys(BATTER), ['banana', 'berries', 'strawberry', 'mango', 'peach', 'kiwi', 'apple', 'pear'], ['honey', 'maple', 'ddl', 'yogurt', 'pb']), 55,
    (bk, fk, tk) => { const b = BATTER[bk], f = F(fk), t = T(tk); return add({ type: 'breakfast', group: b.group, tags: ['pancakes'],
      name: L(`${b.en} Pancakes with ${f.en} & ${t.en}`, `Panqueques ${b.es} con ${f.es} y ${t.es}`),
      ing: [...b.ing, L('1 tbsp butter', '1 cda manteca'), f.ing, t.ing],
      steps: [L('Blend or whisk the batter ingredients until smooth; rest 5 min.', 'Licuá o batí los ingredientes de la mezcla hasta que quede lisa; dejá reposar 5 min.'),
        L('Cook small pancakes in a lightly buttered pan, 2 min a side.', 'Cociná panqueques chicos en sartén apenas enmantecada, 2 min por lado.'),
        L(`Serve with ${f.the.en} and the ${low(t.en)}.`, `Serví con ${f.the.es} y ${t.es}.`)] }); }));
  // Toast
  const SPREAD = {
    avocado: { en: 'Avocado', es: 'palta', ing: L('2 ripe avocados, mashed', '2 paltas maduras pisadas'), group: 'grain', savory: true },
    ricotta: { en: 'Ricotta', es: 'ricota', ing: L('250 g ricotta', '250 g ricota'), group: 'dairy', savory: true, sweet: true },
    creamcheese: { en: 'Cream Cheese', es: 'queso crema', ing: L('150 g cream cheese', '150 g queso crema'), group: 'dairy', savory: true, sweet: true },
    hummus: { en: 'Hummus', es: 'hummus', ing: L('1 cup hummus', '1 taza hummus'), group: 'grain', savory: true },
    pb: { en: 'Peanut Butter', es: 'mantequilla de maní', ing: L('4 tbsp peanut butter', '4 cdas mantequilla de maní'), group: 'grain', sweet: true },
    ab: { en: 'Almond Butter', es: 'mantequilla de almendras', ing: L('4 tbsp almond butter', '4 cdas mantequilla de almendras'), group: 'grain', sweet: true },
    tahini: { en: 'Tahini-Honey', es: 'tahini y miel', ing: L('3 tbsp tahini', '3 cdas tahini'), extra: L('1 tbsp honey', '1 cda miel'), group: 'grain', sweet: true },
    bean: { en: 'White Bean', es: 'porotos blancos', ing: L('1 can white beans, drained and mashed', '1 lata porotos blancos escurridos y pisados'), group: 'grain', savory: true },
    labneh: { en: 'Labneh', es: 'labneh', ing: L('200 g labneh or cream cheese', '200 g labneh o queso crema'), group: 'dairy', savory: true, sweet: true }
  };
  const TOPPING = {
    tomato: { en: 'Tomato', es: 'tomate', ing: L('2 tomatoes, sliced', '2 tomates en rodajas'), savory: true },
    cucumber: { en: 'Cucumber', es: 'pepino', ing: L('1 cucumber, sliced', '1 pepino en rodajas'), savory: true },
    radish: { en: 'Radish', es: 'rabanitos', ing: L('4 radishes, sliced', '4 rabanitos en rodajas'), savory: true },
    cherry: { en: 'Cherry Tomatoes', es: 'tomates cherry', ing: L('1 cup cherry tomatoes, halved', '1 taza tomates cherry en mitades'), savory: true },
    carrot: { en: 'Grated Carrot', es: 'zanahoria rallada', ing: L('1 carrot, grated', '1 zanahoria rallada'), savory: true },
    spinach: { en: 'Baby Spinach', es: 'espinaca baby', ing: L('1 cup baby spinach', '1 taza espinaca baby'), savory: true },
    egg: { en: 'Boiled Egg', es: 'huevo duro', ing: L('4 eggs, boiled and sliced', '4 huevos duros en rodajas'), savory: true, egg: true },
    strawberry: { en: 'Strawberries', es: 'frutillas', ing: L('1 cup strawberries, sliced', '1 taza frutillas en láminas'), sweet: true },
    banana: { en: 'Banana', es: 'banana', ing: L('2 bananas, sliced', '2 bananas en rodajas'), sweet: true },
    pear: { en: 'Pear', es: 'pera', ing: L('2 pears, sliced', '2 peras en láminas'), sweet: true },
    peach: { en: 'Peach', es: 'durazno', ing: L('2 peaches, sliced', '2 duraznos en láminas'), sweet: true },
    kiwi: { en: 'Kiwi', es: 'kiwi', ing: L('2 kiwis, sliced', '2 kiwis en rodajas'), sweet: true },
    apple: { en: 'Apple', es: 'manzana', ing: L('2 apples, sliced', '2 manzanas en láminas'), sweet: true },
    berries: { en: 'Berries', es: 'frutos rojos', ing: L('1 cup mixed berries', '1 taza frutos rojos'), sweet: true }
  };
  const FINISH = { seeds: T('seeds'), honey: T('honey'), cinnamon: SPICE.cinnamon, oregano: { en: 'Oregano', es: 'orégano', ing: L('1 tsp dried oregano', '1 cdita orégano') }, lemon: { en: 'Lemon', es: 'limón', ing: L('1 lemon', '1 limón') } };
  done('toast', pickQuota(cross(Object.keys(SPREAD), Object.keys(TOPPING), Object.keys(FINISH)), 60,
    (sk, tk, xk) => { const s = SPREAD[sk], t = TOPPING[tk], x = FINISH[xk];
      if (!((s.savory && t.savory) || (s.sweet && t.sweet))) return false;
      if (t.savory && (xk === 'honey' || xk === 'cinnamon')) return false;
      if (t.sweet && (xk === 'oregano' || xk === 'lemon')) return false;
      return add({ type: 'breakfast', group: t.egg ? 'egg' : s.group, tags: ['toast'],
      name: L(`${s.en} Toast with ${t.en} & ${x.en}`, `Tostadas con ${s.es}, ${t.es} y ${x.es}`),
      ing: [L('8 slices whole-grain bread', '8 rebanadas de pan integral'), s.ing, ...(s.extra ? [s.extra] : []), t.ing, x.ing],
      steps: [L('Toast the bread.', 'Tostá el pan.'), L(`Spread with the ${low(s.en)}.`, `Untá con ${s.es}.`),
        L(`Top with the ${low(t.en)} and finish with the ${low(x.en)}.`, `Cubrí con ${t.es} y terminá con ${x.es}.`)] }); }));
  // Egg scrambles, egg muffins, breakfast tacos
  const EVEG = {
    spinach: { en: 'Spinach', es: 'espinaca', ing: L('2 cups spinach', '2 tazas espinaca'), t: 2 },
    pepper: { en: 'Pepper', es: 'morrón', ing: L('1 red bell pepper, diced', '1 morrón rojo en cubitos'), t: 5 },
    mushroom: { en: 'Mushroom', es: 'champiñones', ing: L('200 g mushrooms, sliced', '200 g champiñones en láminas'), t: 6 },
    zucchini: { en: 'Zucchini', es: 'zapallito', ing: L('1 zucchini, grated', '1 zapallito rallado'), t: 4 },
    tomato: { en: 'Tomato', es: 'tomate', ing: L('2 tomatoes, diced', '2 tomates en cubitos'), t: 4 },
    corn: { en: 'Corn', es: 'choclo', ing: L('1 cup corn', '1 taza choclo'), t: 3 },
    kale: { en: 'Kale', es: 'kale', ing: L('1 bunch kale, shredded', '1 atado de kale en tiras'), t: 4 },
    chard: { en: 'Chard', es: 'acelga', ing: L('1 bunch Swiss chard, shredded', '1 atado de acelga en tiras'), t: 4 },
    onion: { en: 'Spring Onion', es: 'verdeo', ing: L('3 spring onions, sliced', '3 cebollas de verdeo en rodajas'), t: 2 },
    asparagus: { en: 'Asparagus', es: 'espárragos', ing: L('1 bunch asparagus, chopped', '1 atado de espárragos picados'), t: 4 }
  };
  const CHEESE = {
    feta: { en: 'Feta', es: 'feta', ing: L('100 g feta cheese, crumbled', '100 g queso feta desmenuzado') },
    mozzarella: { en: 'Mozzarella', es: 'mozzarella', ing: L('100 g mozzarella, grated', '100 g mozzarella rallada') },
    cheddar: { en: 'Cheddar', es: 'cheddar', ing: L('80 g cheddar cheese, grated', '80 g queso cheddar rallado') },
    fresh: { en: 'Fresh Cheese', es: 'queso fresco', ing: L('100 g fresh cheese, diced', '100 g queso fresco en cubitos') },
    parmesan: { en: 'Parmesan', es: 'parmesano', ing: L('4 tbsp grated parmesan', '4 cdas queso parmesano rallado') },
    creamcheese: { en: 'Cream Cheese', es: 'queso crema', ing: L('4 tbsp cream cheese', '4 cdas queso crema') }
  };
  const CARRIER = {
    toast: { en: 'on Toast', es: 'con tostadas', ing: L('8 slices whole-grain bread', '8 rebanadas de pan integral'), serve: L('Serve on toast.', 'Serví sobre tostadas.') },
    pita: { en: 'in Pita', es: 'en pan pita', ing: L('4 pita breads', '4 panes pita'), serve: L('Spoon into warm pitas.', 'Rellená pitas tibias.') },
    wrap: { en: 'Wraps', es: 'en wraps', ing: L('4 flour tortillas', '4 tortillas de harina'), serve: L('Roll up in warm tortillas.', 'Enrollá en tortillas tibias.') }
  };
  done('scramble', pickQuota(cross(Object.keys(EVEG), Object.keys(CHEESE), Object.keys(CARRIER)), 50,
    (vk, ck, kk) => { const v = EVEG[vk], c = CHEESE[ck], k = CARRIER[kk]; return add({ type: 'breakfast', group: 'egg',
      name: L(`${v.en} & ${c.en} Scramble ${k.en}`, `Revuelto de ${v.es} y ${c.es} ${k.es}`),
      ing: [L('8 eggs', '8 huevos'), v.ing, c.ing, L('1 tbsp butter', '1 cda manteca'), k.ing],
      steps: [L(`Soften the ${low(v.en)} in the butter for ${v.t} min.`, `Rehogá la verdura en la manteca ${v.t} min.`),
        L('Add the beaten eggs and stir gently until just set; fold in the cheese.', 'Sumá los huevos batidos y revolvé despacio hasta que apenas cuajen; incorporá el queso.'), k.serve] }); }));
  done('egg-muffins', pickQuota(cross(Object.keys(EVEG), Object.keys(CHEESE)), 25,
    (vk, ck) => { const v = EVEG[vk], c = CHEESE[ck]; return add({ type: 'breakfast', group: 'egg', tags: ['egg-muffins'], prep: ['egg-muffins'],
      name: L(`${v.en} & ${c.en} Egg Muffins`, `Muffins de huevo con ${v.es} y ${c.es}`),
      ing: [L('8 eggs', '8 huevos'), L('¼ cup milk', '¼ taza leche'), v.ing, c.ing, L('4 slices bread', '4 rebanadas de pan')],
      steps: [L('Whisk the eggs and milk; stir in the vegetables and cheese.', 'Batí los huevos con la leche; sumá las verduras y el queso.'),
        L('Pour into an oiled 12-cup muffin tin and bake at 180°C for 18 min.', 'Volcá en una placa de 12 muffins aceitada y horneá a 180°C 18 min.'),
        L('Serve warm with bread; they keep 3 days in the fridge.', 'Serví tibios con pan; duran 3 días en la heladera.')] }); }));
  const SALSA = {
    criolla: { en: 'Salsa Criolla', es: 'salsa criolla', ing: [L('2 tomatoes, finely diced', '2 tomates en cubitos'), L('1 red onion, finely chopped', '1 cebolla morada picada fina')] },
    verde: { en: 'Green Salsa', es: 'salsa verde', ing: [L('½ cup green salsa (tomatillo)', '½ taza salsa verde')] },
    avocado: { en: 'Avocado', es: 'palta', ing: [L('1 avocado, diced', '1 palta en cubos'), L('1 lime', '1 lima')] },
    beans: { en: 'Black Beans', es: 'porotos negros', ing: [L('1 can black beans, drained', '1 lata porotos negros escurridos')] },
    corn: { en: 'Corn Salsa', es: 'salsa de choclo', ing: [L('1 cup corn', '1 taza choclo'), L('1 tomato, diced', '1 tomate en cubitos'), L('1 lime', '1 lima')] }
  };
  done('tacos', pickQuota(cross(Object.keys(EVEG), Object.keys(SALSA)), 25,
    (vk, sk) => { const v = EVEG[vk], s = SALSA[sk]; if (vk === 'corn' && sk === 'corn') return false; return add({ type: 'breakfast', group: 'egg', tags: ['tortilla'],
      name: L(`Breakfast Tacos with ${v.en} & ${s.en}`, `Tacos de desayuno con ${v.es} y ${s.es}`),
      ing: [L('6 eggs', '6 huevos'), v.ing, ...s.ing, L('8 corn tortillas', '8 tortillas de maíz'), L('1 tbsp butter', '1 cda manteca')],
      steps: [L(`Soften the ${low(v.en)} in the butter, add the beaten eggs and scramble softly.`, `Rehogá la verdura en la manteca, sumá los huevos batidos y revolvé suave.`),
        L('Warm the tortillas in a dry pan.', 'Calentá las tortillas en una sartén seca.'),
        L(`Fill with the eggs and top with the ${low(s.en)}.`, `Rellená con los huevos y terminá con ${s.es}.`)] }); }));
  const SAUCE = [
    [L('Green Shakshuka', 'Shakshuka verde'), [L('2 cups spinach', '2 tazas espinaca'), L('1 bunch kale, shredded', '1 atado de kale en tiras'), L('100 g feta cheese, crumbled', '100 g queso feta desmenuzado')], L('Wilt the spinach and kale in a little oil with a pinch of cumin.', 'Rehogá la espinaca y el kale en un poco de aceite con una pizca de comino.')],
    [L('Pumpkin & Cumin Eggs', 'Huevos en salsa de zapallo y comino'), [L('2 cups pumpkin, cooked and mashed', '2 tazas zapallo cocido y pisado'), L('1 tsp ground cumin', '1 cdita comino'), L('½ cup vegetable broth', '½ taza caldo de verduras')], L('Warm the pumpkin with the cumin and broth into a thick sauce.', 'Calentá el zapallo con el comino y el caldo hasta tener una salsa espesa.')],
    [L('Eggs in Bean & Tomato Sauce', 'Huevos en salsa de porotos y tomate'), [L('1 can white beans, drained', '1 lata porotos blancos escurridos'), L('1 can crushed tomatoes', '1 lata tomate triturado'), L('1 tsp paprika', '1 cdita pimentón')], L('Simmer the tomatoes, beans and paprika for 10 min.', 'Cociná el tomate, los porotos y el pimentón 10 min.')],
    [L('Coconut-Curry Eggs', 'Huevos al curry de coco'), [L('1 can coconut milk', '1 lata leche de coco'), L('1 tbsp curry powder', '1 cda curry en polvo'), L('2 tomatoes, chopped', '2 tomates picados')], L('Simmer the coconut milk, curry and tomato for 8 min.', 'Cociná la leche de coco, el curry y el tomate 8 min.')],
    [L('Piperrada Eggs (Peppers & Paprika)', 'Huevos a la piperrada (morrones y pimentón)'), [L('3 bell peppers, sliced', '3 morrones en tiras'), L('1 onion, sliced', '1 cebolla en pluma'), L('1 tsp smoked paprika', '1 cdita pimentón ahumado')], L('Cook the peppers and onion slowly for 15 min with the paprika.', 'Cociná los morrones y la cebolla despacio 15 min con el pimentón.')],
    [L('Zucchini & Tomato Eggs', 'Huevos con zapallitos y tomate'), [L('2 zucchini, diced', '2 zapallitos en cubos'), L('1 can crushed tomatoes', '1 lata tomate triturado'), L('1 tsp dried oregano', '1 cdita orégano')], L('Cook the zucchini 5 min, add the tomatoes and oregano and simmer 8 min.', 'Cociná los zapallitos 5 min, sumá el tomate y el orégano y cociná 8 min.')],
    [L('Chickpea & Spinach Eggs', 'Huevos con garbanzos y espinaca'), [L('1 can chickpeas, drained', '1 lata garbanzos escurridos'), L('2 cups spinach', '2 tazas espinaca'), L('1 can crushed tomatoes', '1 lata tomate triturado')], L('Simmer the tomatoes and chickpeas 8 min; stir in the spinach.', 'Cociná el tomate con los garbanzos 8 min; sumá la espinaca.')],
    [L('Mushroom & Cream Eggs', 'Huevos con hongos y crema'), [L('250 g mushrooms, sliced', '250 g champiñones en láminas'), L('½ cup cream', '½ taza crema de leche'), L('1 tsp dried thyme', '1 cdita tomillo seco')], L('Brown the mushrooms with the thyme and stir in the cream.', 'Dorá los champiñones con el tomillo y sumá la crema.')]
  ];
  done('shakshuka', pickQuota(cross(SAUCE, Object.keys(CARRIER)), 16,
    (s, kk) => { const k = CARRIER[kk]; return add({ type: 'breakfast', group: 'egg', tags: ['shakshuka'],
      name: L(`${s[0].en} ${k.en}`, `${s[0].es} ${k.es}`),
      ing: [...s[1], L('6 eggs', '6 huevos'), k.ing],
      steps: [s[2], L('Make 6 hollows, crack in the eggs, cover and cook 6 min until the whites set.', 'Hacé 6 huecos, rompé los huevos, tapá y cociná 6 min hasta que cuajen las claras.'), k.serve] }); }));
  // Yogurt bowls, chia pudding
  done('yogurt', pickQuota(cross(breakfastFruit, ['granola', 'walnuts', 'seeds', 'coconut', 'chia'], ['honey', 'maple', 'ddl', 'pb', 'dates']), 40,
    (fk, ck, dk) => { const f = F(fk), c = T(ck), d = T(dk); return add({ type: 'breakfast', group: 'dairy', tags: ['yogurt'],
      name: L(`${f.en} Yogurt Bowl with ${c.en} & ${d.en}`, `Bowl de yogur con ${f.es}, ${c.es} y ${d.es}`),
      ing: [L('3 cups plain yogurt', '3 tazas yogur natural'), f.ing, c.ing, d.ing],
      steps: [L('Spoon the yogurt into bowls.', 'Serví el yogur en bowls.'), L(`Add ${f.the.en}.`, `Sumá ${f.the.es}.`),
        L(`Finish with the ${low(c.en)} and a little ${low(d.en)}.`, `Terminá con ${c.es} y un poco de ${d.es}.`)] }); }));
  const CHIA = {
    vanilla: { en: 'Vanilla', es: 'de vainilla', ing: [L('2 cups milk', '2 tazas leche'), L('1 tsp vanilla extract', '1 cdita esencia de vainilla')] },
    cocoa: { en: 'Cocoa', es: 'de cacao', ing: [L('2 cups milk', '2 tazas leche'), L('1 tbsp cocoa powder', '1 cda cacao en polvo')] },
    coconut: { en: 'Coconut', es: 'de coco', ing: [L('1 can coconut milk', '1 lata leche de coco'), L('½ cup milk', '½ taza leche')] },
    cinnamon: { en: 'Cinnamon', es: 'de canela', ing: [L('2 cups milk', '2 tazas leche'), L('1 tsp cinnamon', '1 cdita canela')] },
    orange: { en: 'Orange', es: 'de naranja', ing: [L('2 cups milk', '2 tazas leche'), L('1 orange (zest and juice)', '1 naranja (ralladura y jugo)')] }
  };
  done('chia', pickQuota(cross(Object.keys(CHIA), breakfastFruit.filter(f => f !== 'orange')), 22,
    (ck, fk) => { const c = CHIA[ck], f = F(fk); return add({ type: 'breakfast', group: 'dairy', tags: ['chia'], prep: ['chia-pudding'],
      name: L(`${c.en} Chia Pudding with ${f.en}`, `Pudding de chía ${c.es} con ${f.es}`),
      ing: [L('½ cup chia seeds', '½ taza semillas de chía'), ...c.ing, L('1 tbsp honey (optional)', '1 cda miel (opcional)'), f.ing],
      steps: [L('Whisk the chia seeds into the milk with the flavouring.', 'Batí las semillas de chía con la leche y el saborizante.'),
        L('Whisk again after 10 min, then chill overnight.', 'Volvé a batir a los 10 min y enfriá toda la noche.'),
        L(`Serve topped with ${f.the.en}.`, `Serví con ${f.the.es} arriba.`)] }); }));
  // Smoothie bowls, licuados, baked fruit
  done('smoothie-bowl', pickQuota(cross(breakfastFruit, breakfastFruit, ['granola', 'coconut', 'seeds', 'chia', 'walnuts']), 30,
    (ak, bk, tk) => { if (ak >= bk) return false; const a = F(ak), b = F(bk), t = T(tk); return add({ type: 'breakfast', group: 'fruit', tags: ['smoothie'],
      name: L(`${a.en}-${b.en} Smoothie Bowl with ${t.en}`, `Bowl de licuado de ${a.es} y ${b.es} con ${t.es}`),
      ing: [a.ing, b.ing, L('1 banana, frozen', '1 banana congelada'), L('1 cup plain yogurt', '1 taza yogur natural'), t.ing],
      steps: [L('Blend the fruit with the frozen banana and yogurt until thick.', 'Licuá la fruta con la banana congelada y el yogur hasta que quede espeso.'),
        L('Pour into bowls.', 'Serví en bowls.'), L(`Top with the ${low(t.en)} and a few pieces of fruit.`, `Terminá con ${t.es} y unos trozos de fruta.`)] }); }));
  done('licuado', pickQuota(cross(breakfastFruit, ['pb', 'ab', 'ddl', 'honey']), 18,
    (fk, sk) => { const f = F(fk), s = T(sk); return add({ type: 'breakfast', group: 'fruit', tags: ['smoothie'],
      name: L(`${f.en} Licuado with ${s.en} Toast`, `Licuado de ${f.es} con tostadas con ${s.es}`),
      ing: [f.ing, L('3 cups milk', '3 tazas leche'), L('8 slices bread', '8 rebanadas de pan'), s.ing],
      steps: [L(`Blend ${f.the.en} with the milk until frothy.`, `Licuá ${f.the.es} con la leche hasta que haga espuma.`),
        L(`Toast the bread and spread thinly with the ${low(s.en)}.`, `Tostá el pan y untá apenas con ${s.es}.`), L('Serve straight away.', 'Serví enseguida.')] }); }));
  done('baked-fruit', pickQuota(cross(['apple', 'pear', 'peach', 'banana'], ['granola', 'walnuts', 'yogurt', 'raisins', 'coconut'], ['cinnamon', 'vanilla', 'cardamom']), 16,
    (fk, tk, sk) => { const f = F(fk), t = T(tk), s = SPICE[sk]; return add({ type: 'breakfast', group: 'fruit',
      name: L(`${f.baked.en} with ${s.en} & ${t.en}`, `${f.baked.es} con ${s.es} y ${t.es}`),
      ing: [f.slices, s.ing, t.ing, L('1 tbsp butter', '1 cda manteca')],
      steps: [L(`Lay the fruit in a dish, dot with butter and sprinkle with the ${low(s.en)}.`, `Acomodá la fruta en una fuente, poné trocitos de manteca y espolvoreá con ${s.es}.`),
        L('Bake at 190°C for 20 min until soft.', 'Horneá a 190°C 20 min, hasta que esté tierna.'), L(`Serve warm with the ${low(t.en)}.`, `Serví tibio con ${t.es}.`)] }); }));
  console.log('breakfasts', JSON.stringify(counts));
}

function snacks() {
  const counts = {};
  const done = (k, n) => { counts[k] = n; };
  const DIP = {
    pb: { en: 'Peanut Butter', es: 'mantequilla de maní', ing: [L('4 tbsp peanut butter', '4 cdas mantequilla de maní')] },
    ab: { en: 'Almond Butter', es: 'mantequilla de almendras', ing: [L('4 tbsp almond butter', '4 cdas mantequilla de almendras')] },
    honeyyog: { en: 'Honey Yogurt', es: 'yogur con miel', ing: [L('1 cup plain yogurt', '1 taza yogur natural'), L('1 tbsp honey', '1 cda miel')] },
    cinnyog: { en: 'Cinnamon Yogurt', es: 'yogur con canela', ing: [L('1 cup plain yogurt', '1 taza yogur natural'), L('1 tsp cinnamon', '1 cdita canela')] },
    cocoayog: { en: 'Cocoa Yogurt', es: 'yogur con cacao', ing: [L('1 cup plain yogurt', '1 taza yogur natural'), L('1 tbsp cocoa powder', '1 cda cacao en polvo'), L('1 tbsp honey', '1 cda miel')] },
    ricotta: { en: 'Lemon Ricotta', es: 'ricota al limón', ing: [L('200 g ricotta', '200 g ricota'), L('1 lemon (zest)', '1 limón (ralladura)')] },
    tahini: { en: 'Tahini-Date', es: 'tahini y dátiles', ing: [L('3 tbsp tahini', '3 cdas tahini'), L('4 dates, chopped', '4 dátiles picados')] }
  };
  const dipFruit = ['apple', 'pear', 'banana', 'strawberry', 'mango', 'melon', 'kiwi', 'tangerine', 'grape', 'peach', 'pineapple'];
  const sliceOf = f => f.slices || f.ing;
  done('fruit-dip', pickQuota(cross(dipFruit, Object.keys(DIP)), 50,
    (fk, dk) => { const f = F(fk), d = DIP[dk]; return add({ type: 'snack', group: 'fruit',
      name: L(`${f.en} with ${d.en} Dip`, `${cap(f.es)} con dip de ${d.es}`),
      ing: [sliceOf(f), ...d.ing],
      steps: [L(`Cut ${f.the.en} into bite-size pieces.`, `Cortá ${f.the.es} en trozos de un bocado.`),
        L(`Mix the ${low(d.en)} dip until smooth.`, `Mezclá el dip de ${d.es} hasta que quede liso.`), L('Serve for dipping.', 'Serví para mojar.')] }); }));
  done('fruit-skewers', pickQuota(cross(dipFruit, dipFruit, ['strawberry', 'grape', 'kiwi', 'melon']), 25,
    (ak, bk, ck) => { if (!(ak < bk && bk < ck)) return false; const a = F(ak), b = F(bk), c = F(ck); return add({ type: 'snack', group: 'fruit', tags: ['skewers'],
      name: L(`${a.en}, ${b.en} & ${c.en} Skewers`, `Brochetas de ${a.es}, ${b.es} y ${c.es}`),
      ing: [sliceOf(a), sliceOf(b), sliceOf(c), L('1 lime', '1 lima'), L('Wooden skewers', 'Palitos de brochette')],
      steps: [L('Cut the fruit into chunks.', 'Cortá la fruta en trozos.'), L('Thread onto skewers, alternating colours.', 'Ensartá en los palitos alternando colores.'),
        L('Squeeze lime over just before serving.', 'Exprimí lima por encima justo antes de servir.')] }); }));
  done('frozen-bites', pickQuota(cross(['banana', 'strawberry', 'mango', 'berries', 'kiwi', 'peach', 'pineapple'], ['coconut', 'granola', 'seeds', 'chia']), 20,
    (fk, tk) => { const f = F(fk), t = T(tk); return add({ type: 'snack', group: 'fruit', tags: ['frozen'],
      name: L(`Frozen ${f.en} Yogurt Bites with ${t.en}`, `Bocaditos helados de yogur y ${f.es} con ${t.es}`),
      ing: [f.ing, L('1½ cups plain yogurt', '1½ tazas yogur natural'), t.ing],
      steps: [L(`Fold ${f.the.en} into the yogurt.`, `Incorporá ${f.the.es} al yogur.`), L('Spoon small mounds onto a lined tray and sprinkle with the topping.', 'Formá montoncitos sobre una placa con papel y espolvoreá con el topping.'),
        L('Freeze 2 hours.', 'Congelá 2 horas.')] }); }));
  const DRESS = {
    'lime-mint': { en: 'Lime & Mint', es: 'lima y menta', ing: [L('1 lime', '1 lima'), L('1 tbsp fresh mint, chopped', '1 cda menta fresca picada')] },
    'orange-cinnamon': { en: 'Orange & Cinnamon', es: 'naranja y canela', ing: [L('1 orange (juice)', '1 naranja (jugo)'), L('½ tsp cinnamon', '½ cdita canela')] },
    'honey-lemon': { en: 'Honey & Lemon', es: 'miel y limón', ing: [L('1 lemon', '1 limón'), L('1 tbsp honey', '1 cda miel')] },
    'yogurt': { en: 'Vanilla Yogurt', es: 'yogur de vainilla', ing: [L('1 cup plain yogurt', '1 taza yogur natural'), L('1 tsp vanilla extract', '1 cdita esencia de vainilla')] }
  };
  done('fruit-salad', pickQuota(cross(fruitKeys, fruitKeys, fruitKeys, Object.keys(DRESS)), 30,
    (ak, bk, ck, dk) => { if (!(ak < bk && bk < ck)) return false; const a = F(ak), b = F(bk), c = F(ck), d = DRESS[dk]; return add({ type: 'snack', group: 'fruit',
      name: L(`${a.en}, ${b.en} & ${c.en} Cups with ${d.en}`, `Vasitos de ${a.es}, ${b.es} y ${c.es} con ${d.es}`),
      ing: [a.ing, b.ing, c.ing, ...d.ing],
      steps: [L('Dice the fruit and mix in a bowl.', 'Cortá la fruta en cubos y mezclá en un bol.'), L(`Dress with the ${low(d.en)}.`, `Condimentá con ${d.es}.`), L('Serve chilled in small cups.', 'Serví frío en vasitos.')] }); }));
  done('smoothie', pickQuota(cross(fruitKeys.filter(k => k !== 'tangerine' && k !== 'grape'), fruitKeys.filter(k => k !== 'tangerine' && k !== 'grape'), ['oats', 'spinach', 'yogurt', 'pb']), 30,
    (ak, bk, xk) => { if (ak >= bk) return false; const a = F(ak), b = F(bk);
      const X = { oats: [L('Oats', 'avena'), L('3 tbsp oats', '3 cdas avena')], spinach: [L('Spinach', 'espinaca'), L('1 cup baby spinach', '1 taza espinaca baby')], yogurt: [L('Yogurt', 'yogur'), L('1 cup plain yogurt', '1 taza yogur natural')], pb: [L('Peanut Butter', 'mantequilla de maní'), L('2 tbsp peanut butter', '2 cdas mantequilla de maní')] }[xk];
      return add({ type: 'snack', group: 'fruit', tags: ['smoothie'],
      name: L(`${a.en}-${b.en} Smoothie with ${X[0].en}`, `Licuado de ${a.es} y ${b.es} con ${X[0].es}`),
      ing: [a.ing, b.ing, X[1], L('2 cups milk', '2 tazas leche')],
      steps: [L('Put everything in the blender.', 'Poné todo en la licuadora.'), L('Blend until smooth, adding ice if you like.', 'Licuá hasta que quede liso; sumá hielo si querés.'), L('Serve straight away.', 'Serví enseguida.')] }); }));
  // Veg & dips
  const VS = {
    carrot: { en: 'Carrot', es: 'zanahoria', ing: L('3 carrots, in sticks', '3 zanahorias en bastones') },
    cucumber: { en: 'Cucumber', es: 'pepino', ing: L('1 cucumber, in sticks', '1 pepino en bastones') },
    celery: { en: 'Celery', es: 'apio', ing: L('3 celery stalks, in sticks', '3 tallos de apio en bastones') },
    pepper: { en: 'Pepper', es: 'morrón', ing: L('2 bell peppers, in strips', '2 morrones en tiras') },
    tomato: { en: 'Cherry Tomato', es: 'tomate cherry', ing: L('1 cup cherry tomatoes', '1 taza tomates cherry') },
    radish: { en: 'Radish', es: 'rabanito', ing: L('6 radishes, halved', '6 rabanitos en mitades') },
    zucchini: { en: 'Zucchini', es: 'zapallito', ing: L('1 zucchini, in sticks', '1 zapallito en bastones') }
  };
  const VDIP = {
    hummus: { en: 'Hummus', es: 'hummus', ing: [L('1 can chickpeas, drained', '1 lata garbanzos escurridos'), L('2 tbsp tahini', '2 cdas tahini'), L('1 lemon', '1 limón')], how: L('Blend the chickpeas, tahini, lemon juice and a splash of water until smooth.', 'Procesá los garbanzos con el tahini, el jugo de limón y un chorrito de agua.') },
    beet: { en: 'Beet Hummus', es: 'hummus de remolacha', ing: [L('1 can chickpeas, drained', '1 lata garbanzos escurridos'), L('1 beet, cooked', '1 remolacha cocida'), L('1 lemon', '1 limón')], how: L('Blend the chickpeas, beet and lemon juice until smooth and pink.', 'Procesá los garbanzos, la remolacha y el jugo de limón hasta que quede liso y rosado.') },
    pumpkin: { en: 'Pumpkin Hummus', es: 'hummus de zapallo', ing: [L('1 can chickpeas, drained', '1 lata garbanzos escurridos'), L('1 cup pumpkin, cooked and mashed', '1 taza zapallo cocido y pisado'), L('1 tsp ground cumin', '1 cdita comino')], how: L('Blend the chickpeas, pumpkin and cumin until smooth.', 'Procesá los garbanzos, el zapallo y el comino hasta que quede liso.') },
    bean: { en: 'White Bean & Rosemary Dip', es: 'dip de porotos blancos y romero', ing: [L('1 can white beans, drained', '1 lata porotos blancos escurridos'), L('1 sprig fresh rosemary', '1 rama de romero fresco'), L('2 tbsp olive oil', '2 cdas aceite de oliva')], how: L('Blend the beans with the rosemary leaves, oil and a pinch of salt.', 'Procesá los porotos con las hojas de romero, el aceite y una pizca de sal.') },
    guac: { en: 'Avocado-Lime Dip', es: 'dip de palta y lima', ing: [L('2 ripe avocados', '2 paltas maduras'), L('1 lime', '1 lima')], how: L('Mash the avocado with lime juice and a pinch of salt.', 'Pisá la palta con jugo de lima y una pizca de sal.') },
    tzatziki: { en: 'Tzatziki', es: 'tzatziki', ing: [L('1 cup plain yogurt', '1 taza yogur natural'), L('½ cucumber, grated', '½ pepino rallado'), L('1 tbsp fresh dill, chopped', '1 cda eneldo fresco picado')], how: L('Squeeze the cucumber dry and mix with the yogurt and dill.', 'Escurrí el pepino y mezclalo con el yogur y el eneldo.') },
    pea: { en: 'Pea & Mint Dip', es: 'dip de arvejas y menta', ing: [L('2 cups frozen peas', '2 tazas arvejas congeladas'), L('1 tbsp fresh mint, chopped', '1 cda menta fresca picada'), L('2 tbsp cream cheese', '2 cdas queso crema')], how: L('Cook the peas 3 min, cool and blend with the mint and cream cheese.', 'Cociná las arvejas 3 min, enfrialas y procesá con la menta y el queso crema.') },
    pepper: { en: 'Red Pepper & Walnut Dip', es: 'dip de morrón y nueces', ing: [L('2 red bell peppers, roasted', '2 morrones rojos asados'), L('¼ cup walnuts', '¼ taza nueces'), L('1 tsp smoked paprika', '1 cdita pimentón ahumado')], how: L('Blend the roasted peppers, walnuts and paprika until smooth.', 'Procesá los morrones asados, las nueces y el pimentón hasta que quede liso.') },
    yogherb: { en: 'Herby Yogurt Dip', es: 'dip de yogur y hierbas', ing: [L('1 cup plain yogurt', '1 taza yogur natural'), L('2 tbsp fresh parsley, chopped', '2 cdas perejil fresco picado'), L('1 garlic clove, minced', '1 diente de ajo picado')], how: L('Mix the yogurt with the herbs, garlic and a pinch of salt.', 'Mezclá el yogur con las hierbas, el ajo y una pizca de sal.') },
    peanut: { en: 'Peanut-Lime Dip', es: 'dip de maní y lima', ing: [L('3 tbsp peanut butter', '3 cdas mantequilla de maní'), L('1 lime', '1 lima'), L('1 tbsp soy sauce', '1 cda salsa de soja')], how: L('Whisk the peanut butter, lime juice, soy and warm water until smooth.', 'Batí la mantequilla de maní, el jugo de lima, la soja y agua tibia hasta que quede liso.') }
  };
  done('veg-dip', pickQuota(cross(Object.keys(VS), Object.keys(VS), Object.keys(VDIP)), 50,
    (ak, bk, dk) => { if (ak >= bk) return false; const a = VS[ak], b = VS[bk], d = VDIP[dk];
      if ((dk === 'tzatziki' && (ak === 'cucumber' || bk === 'cucumber')) || (dk === 'pepper' && (ak === 'pepper' || bk === 'pepper'))) return false;
      return add({ type: 'snack', group: 'veg', tags: ['dip-' + dk],
      name: L(`${a.en} & ${b.en} Sticks with ${d.en}`, `Bastones de ${a.es} y ${b.es} con ${d.es}`),
      ing: [a.ing, b.ing, ...d.ing], steps: [d.how, L('Cut the vegetables into sticks.', 'Cortá las verduras en bastones.'), L('Serve for dipping.', 'Serví para mojar.')] }); }));
  const SPICED = [[L('Smoky Paprika', 'al pimentón ahumado'), L('1 tsp smoked paprika', '1 cdita pimentón ahumado')], [L('Cumin-Lime', 'al comino y lima'), L('1 tsp ground cumin', '1 cdita comino')],
    [L('Curry', 'al curry'), L('1 tsp curry powder', '1 cdita curry en polvo')], [L("Za'atar", "con za'atar"), L("1 tbsp za'atar", "1 cda za'atar")], [L('Garlic-Rosemary', 'al ajo y romero'), L('1 tsp garlic powder', '1 cdita ajo en polvo')],
    [L('Cinnamon-Maple', 'canela y arce'), L('1 tsp cinnamon', '1 cdita canela')]];
  done('chickpeas', pickQuota(SPICED.map(s => [s]), 6, s => add({ type: 'snack', group: 'veg', tags: ['roasted-chickpeas'],
    name: L(`${s[0].en} Roasted Chickpeas`, `Garbanzos crocantes ${s[0].es}`),
    ing: [L('2 cans chickpeas, drained', '2 latas garbanzos escurridos'), L('1 tbsp olive oil', '1 cda aceite de oliva'), s[1]],
    steps: [L('Dry the chickpeas well on a towel.', 'Secá bien los garbanzos con un repasador.'), L('Toss with the oil and spice.', 'Mezclalos con el aceite y la especia.'), L('Roast at 200°C for 30 min, shaking twice, until crunchy.', 'Horneá a 200°C 30 min, moviendo dos veces, hasta que estén crocantes.')] })));
  const BITES = {
    zucchini: { en: 'Zucchini', es: 'zapallito', ing: L('2 zucchini, grated and squeezed', '2 zapallitos rallados y escurridos') },
    corn: { en: 'Corn', es: 'choclo', ing: L('2 cups corn', '2 tazas choclo') },
    carrot: { en: 'Carrot', es: 'zanahoria', ing: L('2 carrots, grated', '2 zanahorias ralladas') },
    sweetpotato: { en: 'Sweet Potato', es: 'batata', ing: L('1 sweet potato, grated', '1 batata rallada') },
    spinach: { en: 'Spinach', es: 'espinaca', ing: L('2 cups spinach, chopped', '2 tazas espinaca picada') },
    pea: { en: 'Pea', es: 'arvejas', ing: L('1½ cups frozen peas', '1½ tazas arvejas congeladas') },
    broccoli: { en: 'Broccoli', es: 'brócoli', ing: L('1 head broccoli, finely chopped', '1 brócoli picado fino') },
    pumpkin: { en: 'Pumpkin', es: 'zapallo', ing: L('1 cup pumpkin, cooked and mashed', '1 taza zapallo cocido y pisado') }
  };
  done('veg-bites', pickQuota(cross(Object.keys(BITES), Object.keys(CHEESE_SNACK)), 24,
    (vk, ck) => { const v = BITES[vk], c = CHEESE_SNACK[ck]; return add({ type: 'snack', group: 'veg', tags: ['veg-bites'],
      name: L(`Baked ${v.en} & ${c.en} Bites`, `Bocaditos de ${v.es} y ${c.es} al horno`),
      ing: [v.ing, c.ing, L('2 eggs', '2 huevos'), L('½ cup breadcrumbs', '½ taza pan rallado')],
      steps: [L('Mix the vegetable, cheese, eggs and breadcrumbs.', 'Mezclá la verdura, el queso, los huevos y el pan rallado.'), L('Shape small patties on a lined tray.', 'Formá medallones chicos sobre una placa con papel.'), L('Bake at 200°C for 20 min, turning once.', 'Horneá a 200°C 20 min, dando vuelta una vez.')] }); }));
  // Dairy
  done('yogurt-bark', pickQuota(cross(['strawberry', 'berries', 'mango', 'kiwi', 'banana', 'peach', 'pineapple'], ['granola', 'coconut', 'seeds', 'walnuts', 'chia']), 20,
    (fk, tk) => { const f = F(fk), t = T(tk); return add({ type: 'snack', group: 'dairy', tags: ['yogurt', 'frozen'],
      name: L(`${f.en} Yogurt Bark with ${t.en}`, `Placa helada de yogur con ${f.es} y ${t.es}`),
      ing: [L('2 cups plain yogurt', '2 tazas yogur natural'), L('1 tbsp honey', '1 cda miel'), f.ing, t.ing],
      steps: [L('Spread the yogurt mixed with honey 1 cm thick on a lined tray.', 'Esparcí el yogur con miel en una placa con papel, de 1 cm de alto.'), L(`Scatter ${f.the.en} and the ${low(t.en)} over.`, `Repartí ${f.the.es} y ${t.es} por encima.`), L('Freeze 3 hours and break into pieces.', 'Congelá 3 horas y partí en trozos.')] }); }));
  done('cheese-plate', pickQuota(cross(Object.keys(CHEESE_SNACK), dipFruit, ['crackers', 'ricecakes', 'breadsticks']), 30,
    (ck, fk, kk) => { const c = CHEESE_SNACK[ck], f = F(fk);
      const K = { crackers: [L('Crackers', 'galletitas'), L('12 crackers', '12 galletitas')], ricecakes: [L('Rice Cakes', 'galletas de arroz'), L('8 rice cakes', '8 galletas de arroz')], breadsticks: [L('Breadsticks', 'grisines'), L('12 breadsticks', '12 grisines')] }[kk];
      return add({ type: 'snack', group: 'dairy', tags: ['cheese-plate'],
      name: L(`${c.en}, ${f.en} & ${K[0].en} Plate`, `Platito de ${c.es}, ${f.es} y ${K[0].es}`),
      ing: [c.ing, sliceOf(f), K[1]], steps: [L('Cut the cheese into small pieces.', 'Cortá el queso en trocitos.'), L(`Slice ${f.the.en}.`, `Cortá ${f.the.es}.`), L('Arrange on small plates.', 'Armá platitos individuales.')] }); }));
  const DDIP = {
    ricottaherb: { en: 'Herby Ricotta', es: 'ricota con hierbas', ing: [L('250 g ricotta', '250 g ricota'), L('2 tbsp fresh parsley, chopped', '2 cdas perejil fresco picado'), L('1 lemon (zest)', '1 limón (ralladura)')], savory: true },
    ricottahoney: { en: 'Honey-Cinnamon Ricotta', es: 'ricota con miel y canela', ing: [L('250 g ricotta', '250 g ricota'), L('1 tbsp honey', '1 cda miel'), L('½ tsp cinnamon', '½ cdita canela')], sweet: true },
    cottage: { en: 'Cottage Cheese & Chive', es: 'queso blanco con ciboulette', ing: [L('1 cup cottage cheese', '1 taza queso blanco'), L('1 tbsp fresh chives, chopped', '1 cda ciboulette picada')], savory: true },
    labneh: { en: "Za'atar Labneh", es: "labneh con za'atar", ing: [L('200 g labneh or cream cheese', '200 g labneh o queso crema'), L("1 tbsp za'atar", "1 cda za'atar"), L('1 tbsp olive oil', '1 cda aceite de oliva')], savory: true },
    yogvanilla: { en: 'Vanilla Yogurt', es: 'yogur de vainilla', ing: [L('1½ cups plain yogurt', '1½ tazas yogur natural'), L('1 tsp vanilla extract', '1 cdita esencia de vainilla'), L('1 tbsp honey', '1 cda miel')], sweet: true }
  };
  const DIPPER = {
    veg: { en: 'Veggie Sticks', es: 'bastones de verdura', ing: [L('2 carrots, in sticks', '2 zanahorias en bastones'), L('1 cucumber, in sticks', '1 pepino en bastones')], savory: true },
    pita: { en: 'Pita Chips', es: 'chips de pita', ing: [L('3 pita breads, cut into triangles and toasted', '3 panes pita en triángulos tostados')], savory: true },
    apple: { en: 'Apple Slices', es: 'manzana en gajos', ing: [L('2 apples, sliced', '2 manzanas en gajos')], sweet: true },
    strawberry: { en: 'Strawberries', es: 'frutillas', ing: [L('2 cups strawberries', '2 tazas frutillas')], sweet: true },
    crackers: { en: 'Crackers', es: 'galletitas', ing: [L('12 crackers', '12 galletitas')], savory: true }
  };
  done('dairy-dip', pickQuota(cross(Object.keys(DDIP), Object.keys(DIPPER)), 20,
    (dk, kk) => { const d = DDIP[dk], k = DIPPER[kk]; if (!((d.savory && k.savory) || (d.sweet && k.sweet))) return false; return add({ type: 'snack', group: 'dairy',
      name: L(`${d.en} Dip with ${k.en}`, `Dip de ${d.es} con ${k.es}`), ing: [...d.ing, ...k.ing],
      steps: [L('Mix the dip ingredients until smooth.', 'Mezclá los ingredientes del dip hasta que quede liso.'), L(`Prepare the ${low(k.en)}.`, `Prepará ${k.es}.`), L('Serve for dipping.', 'Serví para mojar.')] }); }));
  // Grain snacks
  const ADD = [[L('Cocoa', 'cacao'), L('2 tbsp cocoa powder', '2 cdas cacao en polvo')], [L('Coconut', 'coco'), L('3 tbsp desiccated coconut', '3 cdas coco rallado')],
    [L('Peanut Butter', 'maní'), L('3 tbsp peanut butter', '3 cdas mantequilla de maní')], [L('Orange', 'naranja'), L('1 orange (zest)', '1 naranja (ralladura)')],
    [L('Cinnamon-Raisin', 'canela y pasas'), L('3 tbsp raisins', '3 cdas pasas de uva')], [L('Seedy', 'semillas'), L('3 tbsp sunflower seeds', '3 cdas semillas de girasol')],
    [L('Apricot', 'orejones'), L('½ cup dried apricots, chopped', '½ taza orejones picados')], [L('Vanilla-Almond', 'vainilla y almendras'), L('2 tbsp almond butter', '2 cdas mantequilla de almendras')]];
  done('energy-balls', pickQuota(cross(ADD, ADD), 20, (a, b) => { if (a[0].en >= b[0].en) return false; return add({ type: 'snack', group: 'grain', tags: ['energy-balls'],
    name: L(`${a[0].en} & ${b[0].en} Energy Balls`, `Bolitas energéticas de ${a[0].es} y ${b[0].es}`),
    ing: [L('1 cup rolled oats', '1 taza avena arrollada'), L('8 dates, pitted', '8 dátiles sin carozo'), a[1], b[1]],
    steps: [L('Soak the dates in hot water 10 min; drain.', 'Remojá los dátiles en agua caliente 10 min; escurrí.'), L('Blend everything into a sticky dough.', 'Procesá todo hasta tener una pasta pegajosa.'), L('Roll into small balls and chill 30 min.', 'Formá bolitas y enfriá 30 min.')] }); }));
  const MUF = [[L('Banana-Cinnamon', 'banana y canela'), [L('2 ripe bananas', '2 bananas maduras'), L('1 tsp cinnamon', '1 cdita canela')]],
    [L('Carrot-Raisin', 'zanahoria y pasas'), [L('2 carrots, grated', '2 zanahorias ralladas'), L('3 tbsp raisins', '3 cdas pasas de uva')]],
    [L('Apple-Oat', 'manzana y avena'), [L('2 apples, grated', '2 manzanas ralladas'), L('½ cup rolled oats', '½ taza avena arrollada')]],
    [L('Pumpkin-Spice', 'zapallo y especias'), [L('1 cup pumpkin, cooked and mashed', '1 taza zapallo cocido y pisado'), L('1 tsp cinnamon', '1 cdita canela')]],
    [L('Zucchini-Lemon', 'zapallito y limón'), [L('1 zucchini, grated', '1 zapallito rallado'), L('1 lemon (zest)', '1 limón (ralladura)')]],
    [L('Corn & Cheese', 'choclo y queso'), [L('1 cup corn', '1 taza choclo'), L('80 g cheddar cheese, grated', '80 g queso cheddar rallado')]],
    [L('Berry-Yogurt', 'frutos rojos y yogur'), [L('1 cup mixed berries', '1 taza frutos rojos'), L('½ cup plain yogurt', '½ taza yogur natural')]],
    [L('Cocoa-Banana', 'cacao y banana'), [L('1 banana', '1 banana'), L('2 tbsp cocoa powder', '2 cdas cacao en polvo')]],
    [L('Orange-Poppy', 'naranja'), [L('1 orange (zest and juice)', '1 naranja (ralladura y jugo)'), L('1 tbsp chia seeds', '1 cda semillas de chía')]],
    [L('Spinach & Feta', 'espinaca y feta'), [L('1 cup spinach, chopped', '1 taza espinaca picada'), L('80 g feta cheese, crumbled', '80 g queso feta desmenuzado')]]];
  done('muffins', pickQuota(cross(MUF, ['wholemeal', 'oat']), 20, (m, flour) => add({ type: 'snack', group: 'grain', tags: ['muffin'],
    name: L(`${m[0].en} ${flour === 'oat' ? 'Oat ' : 'Wholemeal '}Muffins`, `Muffins ${flour === 'oat' ? 'de avena' : 'integrales'} de ${m[0].es}`),
    ing: [flour === 'oat' ? L('1½ cups oat flour or blended oats', '1½ tazas harina de avena o avena procesada') : L('1½ cups wholemeal flour', '1½ tazas harina integral'),
      L('2 eggs', '2 huevos'), L('½ cup milk', '½ taza leche'), L('3 tbsp sunflower oil', '3 cdas aceite de girasol'), L('2 tsp baking powder', '2 cditas polvo para hornear'), ...m[1]],
    steps: [L('Whisk the eggs, milk and oil; stir in the flavourings.', 'Batí los huevos, la leche y el aceite; sumá los sabores.'), L('Fold in the flour and baking powder.', 'Incorporá la harina y el polvo de hornear.'), L('Fill a 12-cup tin and bake at 180°C for 20 min.', 'Llená una placa de 12 muffins y horneá a 180°C 20 min.')], prep: ['muffins'] })));
  const BAR = [[L('Apple-Cinnamon', 'manzana y canela'), [L('1 apple, grated', '1 manzana rallada'), L('1 tsp cinnamon', '1 cdita canela')]], [L('Banana-Peanut', 'banana y maní'), [L('2 bananas', '2 bananas'), L('3 tbsp peanut butter', '3 cdas mantequilla de maní')]],
    [L('Berry', 'frutos rojos'), [L('1 cup mixed berries', '1 taza frutos rojos')]], [L('Date-Coconut', 'dátiles y coco'), [L('6 dates, chopped', '6 dátiles picados'), L('3 tbsp desiccated coconut', '3 cdas coco rallado')]],
    [L('Apricot-Seed', 'orejones y semillas'), [L('½ cup dried apricots, chopped', '½ taza orejones picados'), L('3 tbsp sunflower seeds', '3 cdas semillas de girasol')]], [L('Cocoa-Banana', 'cacao y banana'), [L('2 bananas', '2 bananas'), L('2 tbsp cocoa powder', '2 cdas cacao en polvo')]],
    [L('Carrot Cake', 'torta de zanahoria'), [L('1 carrot, grated', '1 zanahoria rallada'), L('3 tbsp raisins', '3 cdas pasas de uva'), L('1 tsp cinnamon', '1 cdita canela')]],
    [L('Pumpkin-Pecan', 'zapallo y nueces'), [L('1 cup pumpkin, cooked and mashed', '1 taza zapallo cocido y pisado'), L('¼ cup walnuts, chopped', '¼ taza nueces picadas')]]];
  done('oat-bars', pickQuota(BAR.map(b => [b]), 8, b => add({ type: 'snack', group: 'grain', tags: ['oat-bars'],
    name: L(`Soft ${b[0].en} Oat Bars`, `Barritas blandas de avena con ${b[0].es}`),
    ing: [L('2 cups rolled oats', '2 tazas avena arrollada'), L('1 egg', '1 huevo'), L('½ cup milk', '½ taza leche'), ...b[1]],
    steps: [L('Mix everything well and rest 5 min.', 'Mezclá todo bien y dejá reposar 5 min.'), L('Press into a lined 20 cm tin.', 'Aplastá en un molde de 20 cm con papel.'), L('Bake at 180°C for 25 min; cool and cut into bars.', 'Horneá a 180°C 25 min; enfriá y cortá en barritas.')] })));
  const RCT = [[L('Avocado & Tomato', 'palta y tomate'), [L('1 avocado', '1 palta'), L('1 tomato, sliced', '1 tomate en rodajas')]], [L('Peanut Butter & Banana', 'maní y banana'), [L('3 tbsp peanut butter', '3 cdas mantequilla de maní'), L('1 banana', '1 banana')]],
    [L('Ricotta & Strawberry', 'ricota y frutilla'), [L('150 g ricotta', '150 g ricota'), L('1 cup strawberries', '1 taza frutillas')]], [L('Hummus & Cucumber', 'hummus y pepino'), [L('½ cup hummus', '½ taza hummus'), L('1 cucumber, sliced', '1 pepino en rodajas')]],
    [L('Cream Cheese & Kiwi', 'queso crema y kiwi'), [L('4 tbsp cream cheese', '4 cdas queso crema'), L('2 kiwis', '2 kiwis')]], [L('Almond Butter & Apple', 'mantequilla de almendras y manzana'), [L('3 tbsp almond butter', '3 cdas mantequilla de almendras'), L('1 apple, sliced', '1 manzana en láminas')]],
    [L('Tahini & Date', 'tahini y dátiles'), [L('3 tbsp tahini', '3 cdas tahini'), L('4 dates, chopped', '4 dátiles picados')]], [L('Cottage Cheese & Tomato', 'queso blanco y tomate'), [L('½ cup cottage cheese', '½ taza queso blanco'), L('1 cup cherry tomatoes, halved', '1 taza tomates cherry en mitades')]]];
  done('rice-cakes', pickQuota(RCT.map(r => [r]), 8, r => add({ type: 'snack', group: 'grain', tags: ['rice-cakes'],
    name: L(`Rice Cakes with ${r[0].en}`, `Galletas de arroz con ${r[0].es}`), ing: [L('8 rice cakes', '8 galletas de arroz'), ...r[1]],
    steps: [L('Prepare the toppings.', 'Prepará los toppings.'), L('Spread or arrange them on the rice cakes.', 'Untá o acomodá los toppings sobre las galletas.'), L('Eat straight away so they stay crisp.', 'Comé enseguida para que sigan crocantes.')] })));
  console.log('snacks', JSON.stringify(counts));
}
const CHEESE_SNACK = {
  cheddar: { en: 'Cheddar', es: 'cheddar', ing: L('100 g cheddar cheese, grated', '100 g queso cheddar rallado') },
  mozzarella: { en: 'Mozzarella', es: 'mozzarella', ing: L('100 g mozzarella, grated', '100 g mozzarella rallada') },
  fresh: { en: 'Fresh Cheese', es: 'queso fresco', ing: L('150 g fresh cheese, diced', '150 g queso fresco en cubitos') },
  parmesan: { en: 'Parmesan', es: 'parmesano', ing: L('4 tbsp grated parmesan', '4 cdas queso parmesano rallado') },
  ricotta: { en: 'Ricotta', es: 'ricota', ing: L('150 g ricotta', '150 g ricota') }
};

mains();
breakfasts();
snacks();

const count = {};
out.forEach(r => { count[r.type] = (count[r.type] || 0) + 1; });
fs.writeFileSync(path.join(root, 'data/recipes-ai.js'), `/* ============================================================
   AI-created recipes — original combinations invented by Claude
   (AI): proteins, sauces, sides and cooking styles from around the
   world put together in new ways. They are not traditional dishes.
   Each has ai: true and experimental: true (an Erlenmeyer flask, at
   most two a week), and the "AI-created recipes" filter turns them
   on and off. Same fields as data/recipes.js; no country.
   ============================================================ */
recipes.push(
${out.map(r => JSON.stringify(r)).join(',\n')}
);
`);
console.log('AI recipes:', out.length, JSON.stringify(count));
