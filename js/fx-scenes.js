/* ============================================================
   Fx scenes — the kitchen TV: a little pixel-art screen in the
   corner whose scene follows what the visitor is looking at.
   Part of the optional flashy layer; needs js/fx.js first.

     shopping list   → a shopper walks the market: talks, pays,
                       takes the produce, skips a stall, buys again
                       (the stalls sell whatever aisle you hover)
     Sunday prep     → a cook chops, blends and fries
     breakfast meal  → morning table, toast pops, mugs steam
     lunch meal      → fridge → oven → table
     snack meal      → a kid grabs an apple from the bowl and munches
     dinner meal     → the family eats together under the lamp
     nothing         → the chef strolls round the kitchen

   Mouse: whatever is hovered. Touch: what sits in the middle of the
   screen, or what was just tapped. Every scene is a function of
   time t (ms) inside its loop, drawn at 12 frames a second onto a
   144 × 54 canvas that CSS scales up with crisp pixels.
   ============================================================ */
(() => {
  const W = 144, H = 54, FLOOR = 50;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canHover = window.matchMedia('(hover: hover)').matches;
  const PREF_KEY = 'meal-plan-tv';
  const FX = window.Fx || { play() {}, sprites: null, ink: {} };

  /* ── Drawing ──────────────────────────────────────────────── */
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  canvas.setAttribute('aria-hidden', 'true');
  const g = canvas.getContext('2d');

  const rect = (x, y, w, h, color) => { g.fillStyle = color; g.fillRect(Math.round(x), Math.round(y), w, h); };
  // Pixel rows ('.' = empty) in a palette; flip mirrors them
  function draw(map, x, y, pal, flip = false) {
    x = Math.round(x); y = Math.round(y);
    const w = map[0].length;
    map.forEach((row, j) => {
      for (let i = 0; i < w; i++) {
        const color = pal[row[i]];
        if (color) { g.fillStyle = color; g.fillRect(flip ? x + w - 1 - i : x + i, y + j, 1, 1); }
      }
    });
  }
  const clamp01 = v => Math.max(0, Math.min(1, v));
  const seg = (t, a, b) => clamp01((t - a) / (b - a));          // 0 → 1 between a and b
  const lerp = (a, b, k) => a + (b - a) * k;
  const between = (t, a, b) => t >= a && t < b;
  const blink = (t, ms) => Math.floor(t / ms) % 2;

  /* ── People ───────────────────────────────────────────────── */
  const INK = '#2b1d14';
  const TOP = ['..hhh..', '.hhhhh.', '.hcccc.', '.cccec.', '..ccc..', '.sssss.', 'sssssss', 'c.sss.c', '..sss..'];
  const EAT = ['..hhh..', '.hhhhh.', '.hcccc.', '.ccceco', '..cccc.', '.sssss.', 'ssssss.', 'c.sss..', '..sss..'];
  const LEGS = {
    stand: ['..ppp..', '..p.p..', '..p.p..', '.kk.kk.'],
    a:     ['..ppp..', '.p...p.', '.p...p.', 'kk...kk'],
    b:     ['..ppp..', '..pp...', '...p...', '..kk...']
  };
  const KID = ['.hhh.', 'hcccc', '.ccec', '.sss.', 'sssss', 'c.s.c'];
  const KID_LEGS = { stand: ['.ppp.', '.p.p.', '.k.k.'], a: ['.ppp.', 'p...p', 'k...k'], b: ['.ppp.', '.pp..', '.kk..'] };
  const KID_EAT = ['.hhh.', 'hcccc', '.ccec', '.sssc', 'ssss.', 'c.s..'];

  const person = (hair, skin, shirt, pants) => ({ h: hair, c: skin, e: INK, s: shirt, p: pants, k: INK, o: '#9ca3af' });
  const PEOPLE = {
    shopper: person('#5a3e2b', '#f2c9a0', '#4caf50', '#3b4a6b'),
    vendor1: person('#2b1d14', '#c68a5c', '#d94b3d', '#3b4a6b'),
    vendor2: person('#d97706', '#f2c9a0', '#3b82f6', '#3b4a6b'),
    vendor3: person('#9ca3af', '#e0ac7a', '#8b5cf6', '#3b4a6b'),
    cook:    person('#5a3e2b', '#f2c9a0', '#ffffff', '#4b5563'),
    dad:     person('#2b1d14', '#e0ac7a', '#3b82f6', '#374151'),
    mom:     person('#7c3f1d', '#f2c9a0', '#db2777', '#374151'),
    kid:     person('#5a3e2b', '#f2c9a0', '#f59e0b', '#2563eb'),
    toddler: person('#d9a066', '#f7d7b5', '#10b981', '#2563eb')
  };

  // A grown-up from the feet up; moving → walking legs
  function grownUp(who, x, t, { moving = false, flip = false, eating = false } = {}) {
    const legs = moving ? (blink(t, 140) ? LEGS.a : LEGS.b) : LEGS.stand;
    const y = FLOOR - 13 - (moving && blink(t, 140) ? 1 : 0);
    draw((eating ? EAT : TOP).concat(legs), x, y, PEOPLE[who], flip);
  }
  // Just the upper body, for someone behind a counter or at a table (top at y)
  const upper = (who, x, y, { flip = false, eating = false } = {}) => draw(eating ? EAT : TOP, x, y, PEOPLE[who], flip);
  function kid(who, x, t, { moving = false, flip = false } = {}) {
    const legs = moving ? (blink(t, 120) ? KID_LEGS.a : KID_LEGS.b) : KID_LEGS.stand;
    draw(KID.concat(legs), x, FLOOR - 9, PEOPLE[who], flip);
  }
  const kidUpper = (who, x, y, eating) => draw(eating ? KID_EAT : KID, x, y, PEOPLE[who]);
  const chefHat = (x, y) => { rect(x + 1, y - 3, 5, 2, '#ffffff'); rect(x + 2, y - 4, 3, 1, '#ffffff'); rect(x + 1, y - 1, 5, 1, '#e5e7eb'); };

  /* ── Props ────────────────────────────────────────────────── */
  const ITEM = {
    carrot: { map: ['g.g', '.g.', 'ooo', '.oo', '.o.'], pal: { g: '#4caf50', o: '#f97316' }, dot: '#f97316' },
    apple:  { map: ['.g.', 'rrr', 'rrr'], pal: { g: '#4caf50', r: '#e11d48' }, dot: '#e11d48' },
    fish:   { map: ['.bbb.b', 'bbkbbb', '.bbb.b'], pal: { b: '#7dd3fc', k: INK }, dot: '#7dd3fc' },
    bread:  { map: ['.ttt.', 'ttttt', 'TTTTT'], pal: { t: '#f4c06a', T: '#c98a3c' }, dot: '#f4c06a' },
    milk:   { map: ['.w.', 'www', 'wbw', 'www'], pal: { w: '#ffffff', b: '#60a5fa' }, dot: '#ffffff' },
    jar:    { map: ['TTT', 'yyy', 'yyy', 'yyy'], pal: { T: '#a0673a', y: '#fbbf24' }, dot: '#fbbf24' }
  };
  const AISLE = { 'Vegetables': 'carrot', 'Fruit': 'apple', 'Proteins & Fish': 'fish', 'Grains & Bread': 'bread',
                  'Dairy & Fridge': 'milk', 'Pantry': 'jar', 'Other': 'jar' };
  const item = (name, x, y) => { const it = ITEM[name]; draw(it.map, x, y - it.map.length + 1, it.pal); };

  function bubble(x, y, kind, tailRight = false) {
    rect(x, y, 9, 6, '#ffffff');
    rect(x, y - 1, 9, 1, INK); rect(x, y + 6, 9, 1, INK); rect(x - 1, y, 1, 6, INK); rect(x + 9, y, 1, 6, INK);
    if (tailRight) { rect(x + 6, y + 7, 1, 1, INK); rect(x + 7, y + 8, 1, 1, INK); }
    else { rect(x + 2, y + 7, 1, 1, INK); rect(x + 1, y + 8, 1, 1, INK); }
    if (kind === 'talk') [2, 4, 6].forEach(i => rect(x + i, y + 3, 1, 1, INK));
    if (kind === 'yes') draw(['....g', '...g.', 'g.g..', '.g...'], x + 2, y + 1, { g: '#16a34a' });
    if (kind === 'no') draw(['r...r', '.r.r.', '..r..', '.r.r.'], x + 2, y + 1, { r: '#dc2626' });
    if (kind === 'heart') draw(['.r.r.', 'rrrrr', '.rrr.', '..r..'], x + 2, y + 1, { r: '#e11d48' });
    if (kind === 'coin') draw(['.y.', 'yYy', '.y.'], x + 3, y + 1, { y: '#facc15', Y: '#a16207' });
  }
  const coin = (x, y) => draw(['yy', 'yY'], x, y, { y: '#facc15', Y: '#ca8a04' });
  const steam = (x, y, t, n = 3) => {
    for (let i = 0; i < n; i++) {
      const k = ((t / 900) + i / n) % 1;
      rect(x + Math.round(Math.sin((t / 300) + i * 2)), y - k * 8, 1, 1, `rgba(255,255,255,${(1 - k) * 0.85})`);
    }
  };
  const flames = (x, y, w, t) => {
    for (let i = 0; i < w; i += 2) {
      const h = 1 + ((Math.floor(t / 90) + i) % 3);
      rect(x + i, y - h + 1, 1, h, h > 2 ? '#fde047' : '#f97316');
    }
  };

  /* ── Rooms ────────────────────────────────────────────────── */
  function kitchenRoom() {
    rect(0, 0, W, H, '#f3e5d0');
    for (let x = 0; x < W; x += 8) for (let y = 0; y < 26; y += 8) rect(x + ((y / 8) % 2) * 4, y, 4, 4, '#ecd9bf');
    rect(0, FLOOR, W, H - FLOOR, '#b98a5f');
    for (let x = 0; x < W; x += 12) rect(x, FLOOR, 1, H - FLOOR, '#a37650');
  }
  // A window onto `sky`; scenery(x, y, w, h) paints the view
  function windowPane(x, y, w, h, sky, scenery) {
    rect(x, y, w, h, '#7c4a25');
    rect(x + 2, y + 2, w - 4, h - 4, sky);
    if (scenery) scenery(x + 2, y + 2, w - 4, h - 4);
    rect(x + (w >> 1), y + 2, 1, h - 4, '#7c4a25');
    rect(x + 2, y + (h >> 1), w - 4, 1, '#7c4a25');
    rect(x - 1, y + h, w + 2, 1, '#a0673a');
  }
  const hills = (x, y, w, h) => { rect(x, y + h - 4, w, 4, '#86c06c'); rect(x + 2, y + h - 6, w >> 1, 2, '#86c06c'); };
  // Wall clock with a ticking red hand
  const RIM = [[3, 1], [4, 1], [5, 2], [5, 3], [5, 4], [4, 5], [3, 5], [2, 5], [1, 4], [1, 3], [1, 2], [2, 1]];
  function clock(x, y, t) {
    draw(['.kkkkk.', 'kwwwwwk', 'kwwkwwk', 'kwwkkwk', 'kwwwwwk', 'kwwwwwk', '.kkkkk.'], x, y, { k: INK, w: '#fffbeb' });
    const [hx, hy] = RIM[Math.floor(t / 1000) % 12];
    rect(x + hx, y + hy, 1, 1, '#dc2626');
  }
  // Upper cupboards with knobs
  function cupboards(x, w) {
    rect(x, 2, w, 13, '#8b5e3c');
    for (let i = x + 1; i + 9 <= x + w; i += 10) { rect(i, 3, 9, 11, '#a0673a'); rect(i + 7, 8, 1, 2, '#f4c06a'); }
  }
  // A shelf with jars and a plant
  function shelf(x, y, w) {
    rect(x, y, w, 1, '#7c4a25');
    rect(x + 1, y + 1, 1, 2, '#7c4a25'); rect(x + w - 2, y + 1, 1, 2, '#7c4a25');
    [['#fbbf24', 0], ['#ef4444', 5], ['#a3e635', 10]].forEach(([c, dx]) => {
      if (dx + 4 > w - 7) return;
      rect(x + 1 + dx, y - 4, 3, 4, c); rect(x + 1 + dx, y - 5, 3, 1, '#a0673a');
    });
    draw(['g.g.g', '.ggg.', '..g..', '.ttt.', '.ttt.'], x + w - 6, y - 5, { g: '#4caf50', t: '#c2410c' });
  }
  // Ladle, spoon and whisk hanging from a rail
  function utensils(x, y) {
    rect(x, y, 15, 1, '#9ca3af');
    draw(['m...H...m', 'm...H...m', 'm...H..mmm', 'mm..H..mmm', 'mm.HHH.mmm', '...HHH..m.'].map(r => r.padEnd(10, '.')),
      x + 2, y + 1, { m: '#6b7280', H: '#a0673a' });
  }
  // Extractor hood over a stove
  function hood(x, w) {
    rect(x + 4, 0, w - 8, 6, '#9ca3af');
    rect(x, 6, w, 3, '#6b7280');
    rect(x + 1, 9, w - 2, 1, '#4b5563');
  }
  const counter = (x, w, top = 36) => {
    rect(x, top, w, 2, '#c98a3c');
    rect(x, top + 2, w, FLOOR - top - 2, '#8b5e3c');
    for (let i = x + 4; i < x + w - 4; i += 10) rect(i, top + 6, 6, 8, '#7a5133');
  };

  /* ── Scenes ───────────────────────────────────────────────── */
  const SCENES = {
    kitchen: {
      len: 12000,
      caption: { en: 'In the kitchen', es: 'En la cocina' },
      draw(t) {
        kitchenRoom();
        cupboards(0, 41);
        windowPane(52, 5, 30, 20, '#bfe3f7', (x, y, w, h) => { rect(x + 18, y + 3, 4, 4, '#fde047'); hills(x, y, w, h); });
        clock(90, 7, t);
        shelf(110, 12, 32);
        counter(0, 40, 34);
        counter(112, 32, 34);
        const S = FX.sprites;
        if (S) {
          draw(S.TOASTER[Math.floor(t / 300) % S.TOASTER.length], 10, 19, FX.ink);
          draw(S.POT[Math.floor(t / 300) % S.POT.length], 120, 16, FX.ink);
        }
        // the chef strolls left and right
        const k = (t % 12000) / 12000, back = k > 0.5;
        const x = back ? lerp(96, 44, (k - 0.5) * 2) : lerp(44, 96, k * 2);
        if (S) draw(S.CHEF[blink(t, 250)], x, FLOOR - 16, FX.ink, back);
        if (between(t, 5600, 6400) || between(t, 11600, 12000)) bubble(x + 1, FLOOR - 26, 'heart');
      }
    },

    market: {
      len: 15000,
      caption: { en: 'At the market', es: 'En el mercado' },
      stalls() {
        const order = ['carrot', 'apple', 'fish', 'bread', 'milk', 'jar'];
        const first = AISLE[scene.cat] || 'carrot';
        const rest = order.filter(n => n !== first);
        return [first, rest[0], rest[1]];
      },
      draw(t) {
        // sky, sun, cobbles
        rect(0, 0, W, 20, '#bfe3f7'); rect(0, 20, W, 24, '#e6f4fb');
        rect(96, 2, 6, 6, '#fde047');
        rect(0, 44, W, H - 44, '#cdb79e');
        for (let x = 2; x < W; x += 7) rect(x + (x % 3), 47 + (x % 4), 3, 1, '#b8a084');

        const goods = this.stalls();
        const stalls = [{ x: 10, v: 'vendor1', c: '#d94b3d' }, { x: 60, v: 'vendor2', c: '#16a34a' }, { x: 110, v: 'vendor3', c: '#3b82f6' }];
        stalls.forEach((s, i) => {
          upper(s.v, s.x + 9, 27, { flip: true });
          rect(s.x, 12, 1, 32, '#7c4a25'); rect(s.x + 25, 12, 1, 32, '#7c4a25');
          for (let j = 0; j < 26; j += 4) rect(s.x + j, 9, 2, 5, s.c), rect(s.x + j + 2, 9, 2, 5, '#ffffff');
          rect(s.x, 14, 26, 1, s.c);
          rect(s.x, 36, 26, 8, '#a0673a'); rect(s.x, 36, 26, 1, '#c98a3c');
          [3, 10, 17].forEach(dx => item(goods[i], s.x + dx, 35));
        });

        // the shopper's walk: [time, x] — stops at stall 1 and 3 to buy, at 2 to look
        const path = [[0, -10], [2200, 16], [5500, 16], [7300, 66], [8900, 66], [10700, 116], [13200, 116], [15000, 150]];
        let x = path[0][1], moving = false;
        for (let i = 1; i < path.length; i++) {
          if (t < path[i][0]) {
            const [t0, x0] = path[i - 1], [t1, x1] = path[i];
            x = lerp(x0, x1, seg(t, t0, t1));
            moving = x0 !== x1;
            break;
          }
        }
        if (t >= 15000) x = 150;
        grownUp('shopper', x, t, { moving });
        // basket with what was bought so far
        const bought = (t > 5000 ? 1 : 0) + (t > 12700 ? 1 : 0);
        rect(x + 6, FLOOR - 6, 5, 3, '#a0673a'); rect(x + 6, FLOOR - 7, 5, 1, '#7c4a25');
        if (bought > 0) rect(x + 7, FLOOR - 8, 2, 1, ITEM[goods[0]].dot);
        if (bought > 1) rect(x + 9, FLOOR - 8, 2, 1, ITEM[goods[2]].dot);

        // buying at stall 1 and 3
        [[2200, 16, 0], [10700, 116, 2]].forEach(([t0, sx, i]) => {
          const vx = stalls[i].x + 12;
          if (between(t, t0, t0 + 800)) bubble(sx - 8, 27, 'talk', true);
          if (between(t, t0 + 800, t0 + 1400)) bubble(vx, 17, 'talk');
          if (between(t, t0 + 1400, t0 + 2100)) {
            const k = seg(t, t0 + 1400, t0 + 2100);
            coin(lerp(sx + 6, vx, k), lerp(42, 33, k) - Math.sin(k * Math.PI) * 6);
          }
          if (between(t, t0 + 2100, t0 + 2800)) {
            const k = seg(t, t0 + 2100, t0 + 2800);
            item(goods[i], lerp(vx, sx + 7, k), lerp(35, FLOOR - 6, k) - Math.sin(k * Math.PI) * 6);
          }
          if (between(t, t0 + 2800, t0 + 3300)) bubble(sx - 8, 27, i === 2 ? 'heart' : 'yes', true);
          cue('coin' + i, t0 + 2100, 'coin');
        });
        // looking at stall 2, no thanks
        if (between(t, 7300, 8100)) bubble(58, 27, 'talk', true);
        if (between(t, 8100, 8900)) bubble(58, 27, 'no', true);
      }
    },

    cooking: {
      len: 13000,
      caption: { en: 'Prepping: chop, blend, fry', es: 'Preparando: picar, licuar, freír' },
      draw(t) {
        kitchenRoom();
        cupboards(0, 51);
        utensils(38, 17);
        windowPane(58, 4, 22, 14, '#bfe3f7', hills);
        hood(98, 30);
        // where the cook stands over time
        const spots = [[0, 10], [3500, 10], [4600, 58], [7200, 58], [8400, 92], [11800, 92], [13000, 10]];
        let x = 10;
        for (let i = 1; i < spots.length; i++) {
          if (t < spots[i][0]) { x = lerp(spots[i - 1][1], spots[i][1], seg(t, spots[i - 1][0], spots[i][0])); break; }
        }
        const moving = (t > 3500 && t < 4600) || (t > 7200 && t < 8400) || t > 11800;
        upper('cook', x, 27 - (moving && blink(t, 140) ? 1 : 0), { flip: t > 11800 });
        chefHat(x, 27 - (moving && blink(t, 140) ? 1 : 0));
        counter(0, W);

        // 1 · chopping board: the knife works along the carrot, slices pile up
        rect(16, 34, 20, 2, '#e8c597');
        const chopping = t < 3500;
        const cuts = Math.min(7, Math.floor(t / 450)), left = 9 - cuts;
        rect(33 - left, 32, left, 2, '#f97316'); rect(33, 31, 2, 3, '#4caf50');
        for (let i = 0; i < cuts; i++) rect(18 + (i % 4) * 2, 33 - Math.floor(i / 4), 1, 1, '#fb923c');
        const kx = 32 - left, knifeUp = chopping && blink(t, 200);
        rect(kx, knifeUp ? 26 : 29, 1, 4, '#cbd5e1'); rect(kx, knifeUp ? 24 : 27, 1, 2, INK);
        if (chopping) [450, 900, 1350, 1800, 2250, 2700, 3150].forEach((ms, i) => cue('chop' + i, ms, 'chop'));

        // 2 · blender, shaking while it runs
        const blending = between(t, 4600, 7200);
        const jig = blending ? (blink(t, 70) ? 1 : -1) : 0;
        rect(64 + jig, 32, 9, 4, '#374151');
        rect(65 + jig, 22, 7, 10, '#dbeafe');
        rect(65 + jig, 21, 7, 1, '#475569');
        const fill = blending ? 4 + Math.floor(seg(t, 4600, 7200) * 5) : (t > 7200 && t < 11800 ? 8 : 3);
        const juice = blending && blink(t, 120) ? '#a3e635' : '#f59e0b';
        rect(66 + jig, 31 - fill, 5, fill, juice);
        if (blending) cue('whirr', 4700, 'whirr');

        // 3 · stove: pan over flames, a pancake flipping
        rect(100, 34, 26, 2, '#1f2937');
        flames(106, 33, 14, t);
        rect(104, 30, 18, 2, '#374151'); rect(122, 30, 5, 1, '#a0673a');
        const frying = between(t, 8400, 11800);
        let cakeY = 29;
        if (frying) {
          const k = (t - 8400) % 1700;
          if (k > 1000) cakeY = 29 - Math.sin(seg(k, 1000, 1700) * Math.PI) * 9;
          if (k > 1150 && k < 1550) { rect(108, cakeY, 10, 1, '#c98a3c'); }
          else { rect(107, cakeY, 12, 1, '#f4c06a'); }
          if (blink(t, 160)) rect(105 + (t % 7) * 2, 27 - (t % 3), 1, 1, '#fde047');
          cue('sizzle', 8500, 'sizzle');
        } else {
          rect(107, 29, 12, 1, '#f4c06a');
        }
      }
    },

    breakfast: {
      len: 9000,
      caption: { en: 'Breakfast time', es: 'Hora del desayuno' },
      draw(t) {
        rect(0, 0, W, H, '#fff4e0');
        // window at sunrise
        rect(6, 6, 26, 22, '#7c4a25');
        rect(8, 8, 22, 18, '#fde2b3');
        rect(8, 8, 22, 6, '#bfe3f7');
        const sunY = lerp(24, 10, (t % 9000) / 9000);
        rect(16, sunY, 5, 5, '#fbbf24');
        rect(8, 22, 22, 4, '#a7d38f');
        rect(18, 8, 1, 18, '#7c4a25'); rect(8, 16, 22, 1, '#7c4a25');
        rect(0, FLOOR, W, H - FLOOR, '#d6b48c');
        clock(48, 8, t);
        shelf(70, 14, 36);
        rect(116, 6, 18, 14, '#a0673a'); rect(118, 8, 14, 10, '#fde2b3');
        rect(120, 12, 4, 6, '#f472b6'); rect(125, 10, 5, 8, '#60a5fa');
        // side counter with the toaster
        counter(34, 22, 40);
        const S = FX.sprites;
        const pop = t > 3000 && t < 4400;
        if (S) draw(S.TOASTER[pop ? 6 : 0], 37, 25, FX.ink);
        cue('ding', 3000, 'ding');
        // the table: mom, dad and the kid
        upper('mom', 66, 30, { eating: blink(t + 300, 900) === 1 });
        upper('dad', 90, 30, { eating: blink(t, 1100) === 1, flip: true });
        kidUpper('kid', 114, 33, blink(t + 600, 700) === 1);
        rect(58, 39, 80, 2, '#a0673a'); rect(60, 41, 2, 9, '#7c4a25'); rect(134, 41, 2, 9, '#7c4a25');
        // mugs with steam and toast on plates
        [[70, '#ffffff'], [94, '#fde68a'], [116, '#f472b6']].forEach(([mx, c], i) => {
          rect(mx, 36, 3, 3, c); rect(mx + 3, 37, 1, 1, c);
          steam(mx + 1, 35, t + i * 300, 2);
          rect(mx - 6, 38, 5, 1, '#ffffff'); rect(mx - 5, 37, 3, 1, '#f4c06a');
        });
        if (between(t, 6200, 7200)) bubble(112, 22, 'heart');
      }
    },

    lunch: {
      len: 13500,
      caption: { en: 'Lunch: fridge → oven → table', es: 'Almuerzo: heladera → horno → mesa' },
      draw(t) {
        kitchenRoom();
        hood(64, 28);
        clock(40, 8, t);
        windowPane(108, 4, 28, 20, '#bfe3f7', (x, y, w, h) => { rect(x + 3, y + 2, 4, 4, '#fde047'); hills(x, y, w, h); });
        // fridge, door open while picking the dish
        const open = between(t, 1300, 3100);
        rect(4, 18, 16, 32, '#94a3b8'); rect(5, 19, 14, 30, '#f8fafc');
        rect(5, 32, 14, 1, '#94a3b8');
        if (open) {
          rect(5, 19, 14, 30, '#fef9c3');
          [26, 34, 42].forEach(y => rect(5, y, 14, 1, '#cbd5e1'));
          rect(7, 23, 4, 3, '#86efac'); rect(13, 31, 4, 3, '#fda4af'); rect(8, 39, 5, 3, '#93c5fd');
          rect(19, 19, 3, 30, '#e2e8f0');
          if (t < 2300) rect(11, 31, 5, 3, '#f97316');
        } else {
          rect(17, 24, 1, 5, '#64748b'); rect(17, 36, 1, 6, '#64748b');
        }
        cue('fridge', 1300, 'thunk');
        // oven
        const ovenOpen = between(t, 5300, 6000) || between(t, 8700, 9400);
        const baking = between(t, 6000, 8700);
        rect(66, 30, 24, 20, '#4b5563'); rect(66, 30, 24, 3, '#1f2937');
        rect(70, 36, 16, 8, ovenOpen ? INK : baking ? (blink(t, 200) ? '#fb923c' : '#f97316') : '#111827');
        rect(70, 34, 16, 1, '#cbd5e1');
        [69, 73, 77].forEach(kx => rect(kx, 31, 2, 1, '#f97316'));
        if (baking) for (let i = 0; i < 3; i++) rect(72 + i * 5, 26 - ((t / 150 + i * 3) % 5), 1, 1, '#fdba74');
        cue('ding', 8700, 'ding');
        // table and chair
        rect(108, 38, 32, 2, '#a0673a'); rect(110, 40, 2, 10, '#7c4a25'); rect(136, 40, 2, 10, '#7c4a25');
        rect(130, 30, 2, 20, '#7c4a25');

        // the walk: fridge → oven → table
        const path = [[0, 40], [1200, 22], [3100, 22], [5200, 58], [9400, 58], [11000, 118]];
        let x = 118, moving = false, flip = false;
        for (let i = 1; i < path.length; i++) {
          if (t < path[i][0]) {
            const [t0, x0] = path[i - 1], [t1, x1] = path[i];
            x = lerp(x0, x1, seg(t, t0, t1)); moving = x0 !== x1; flip = x1 < x0;
            break;
          }
        }
        const carrying = (t > 2300 && t < 5700) || (t > 9000 && t < 11000);
        if (t < 11000) {
          grownUp('mom', x, t, { moving, flip: flip || (t > 1200 && t < 3100) });
          if (carrying) { rect(x + (flip ? -3 : 6), FLOOR - 7, 5, 3, '#f97316'); if (t > 9000) steam(x + 8, FLOOR - 8, t); }
        } else {
          upper('mom', 120, 29, { eating: blink(t, 700) === 1, flip: true });
          rect(112, 36, 7, 2, '#ffffff'); rect(113, 35, 5, 1, '#f97316');
          steam(115, 34, t);
          if (t > 12600) bubble(110, 18, 'heart');
        }
      }
    },

    snack: {
      len: 9000,
      caption: { en: 'Snack break', es: 'Hora de la merienda' },
      draw(t) {
        kitchenRoom();
        windowPane(8, 6, 28, 20, '#fcd9a8', (x, y, w, h) => { rect(x + 15, y + 8, 4, 4, '#fb923c'); hills(x, y, w, h); });
        shelf(52, 18, 40);
        clock(104, 8, t);
        counter(48, 44, 40);
        // fruit bowl
        rect(62, 38, 12, 2, '#fde68a'); rect(63, 40, 10, 1, '#d97706');
        item('apple', 63, 37); item('apple', 69, 37);
        draw(['..yy', '.yy.', 'yy..'], 65, 34, { y: '#facc15' });
        // the kid comes over, takes an apple and munches
        const x = t < 2000 ? lerp(6, 48, seg(t, 0, 2000)) : 48;
        kid('kid', x, t, { moving: t < 2000 });
        if (between(t, 2000, 2600)) {
          const k = seg(t, 2000, 2600);
          item('apple', lerp(68, x + 4, k), lerp(37, FLOOR - 4, k) - Math.sin(k * Math.PI) * 4);
        }
        if (t >= 2600) {
          const bites = Math.min(3, Math.floor((t - 2600) / 900));
          const apple = [['.g.', 'rrr', 'rrr'], ['.g.', 'rr.', 'rrr'], ['.g.', 'r..', 'rr.'], ['.g.', '...', '.r.']][bites];
          draw(apple, x + 4, FLOOR - 7, { g: '#4caf50', r: '#e11d48' });
          [2600, 3500, 4400].forEach((ms, i) => cue('munch' + i, ms + 300, 'munch'));
          if (bites > 0 && blink(t, 200)) rect(x + 5, FLOOR - 3, 1, 1, '#fecdd3');
        }
        if (between(t, 6000, 7400)) bubble(x - 2, FLOOR - 19, 'heart');
        cue('yum', 6000, 'yum');
        // the toddler waves from the high chair
        rect(112, 34, 10, 2, '#a0673a'); rect(113, 36, 1, 14, '#7c4a25'); rect(120, 36, 1, 14, '#7c4a25');
        kidUpper('toddler', 115, 28, blink(t, 600) === 1);
      }
    },

    dinner: {
      len: 10000,
      caption: { en: 'Family dinner', es: 'Cena en familia' },
      draw(t) {
        rect(0, 0, W, H, '#4a3328');
        rect(0, FLOOR, W, H - FLOOR, '#3b2a1f');
        // night window with moon and twinkling stars
        rect(6, 8, 22, 20, '#7c4a25'); rect(8, 10, 18, 16, '#1e2a4a');
        rect(20, 12, 3, 3, '#fef3c7'); rect(21, 12, 1, 1, '#1e2a4a');
        [[10, 13], [14, 20], [24, 22], [11, 24]].forEach(([sx, sy], i) => { if (blink(t + i * 250, 500)) rect(sx, sy, 1, 1, '#ffffff'); });
        rect(16, 10, 1, 16, '#7c4a25');
        // lamp and its warm light
        rect(84, 0, 1, 7, '#1f2937');
        rect(78, 7, 13, 3, '#f59e0b'); rect(80, 6, 9, 1, '#f59e0b');
        g.fillStyle = 'rgba(253, 224, 71, .13)';
        g.beginPath(); g.moveTo(80, 10); g.lineTo(89, 10); g.lineTo(120, 44); g.lineTo(48, 44); g.fill();
        rect(108, 8, 22, 15, '#a0673a'); rect(110, 10, 18, 11, '#1e3a5f');
        draw(['....w....', '...www...', '..wwwww..', '.ggggggg.', 'ggggggggg'], 114, 14, { w: '#e2e8f0', g: '#2f6b4f' });
        // chairs behind the family
        [43, 65].forEach(cx => { rect(cx, 29, 9, 2, '#7c4a25'); rect(cx, 31, 1, 8, '#7c4a25'); rect(cx + 8, 31, 1, 8, '#7c4a25'); });
        // the family
        upper('dad', 44, 31, { eating: blink(t, 1300) === 1 });
        upper('mom', 66, 31, { eating: blink(t + 500, 1100) === 1 });
        kidUpper('kid', 92, 34, blink(t + 200, 800) === 1);
        rect(108, 36, 10, 2, '#a0673a');
        kidUpper('toddler', 110, 30, blink(t + 900, 650) === 1);
        // table, cloth and plates with steaming food
        rect(30, 39, 108, 2, '#f8fafc');
        for (let i = 30; i < 138; i += 4) rect(i, 41, 2, 4, '#dc2626'), rect(i + 2, 41, 2, 4, '#ffffff');
        rect(34, 45, 2, 5, '#5a3e2b'); rect(132, 45, 2, 5, '#5a3e2b');
        [[45, '#f97316'], [67, '#16a34a'], [92, '#fbbf24'], [111, '#fb7185']].forEach(([px, c], i) => {
          rect(px, 38, 7, 1, '#ffffff'); rect(px + 2, 37, 3, 1, c);
          steam(px + 3, 36, t + i * 400, 2);
        });
        // candle
        rect(82, 34, 2, 5, '#fef3c7');
        rect(82, 32 - blink(t, 180), 2, 2, blink(t, 260) ? '#fde047' : '#f97316');
        // chatting and loving it
        if (between(t, 1500, 2600)) bubble(40, 18, 'talk');
        if (between(t, 3600, 4700)) bubble(62, 18, 'heart');
        if (between(t, 6000, 7000)) bubble(88, 21, 'talk');
        if (between(t, 7800, 9000)) bubble(106, 17, 'heart');
        cue('yum', 3600, 'yum');
      }
    }
  };

  /* ── Playing ──────────────────────────────────────────────── */
  const scene = { name: 'kitchen', cat: null, start: performance.now(), t: 0, loud: 0, fired: new Set(), loop: -1 };

  // A sound at `at` ms into the loop — only in the first loop after a change
  function cue(id, at, sound) {
    if (scene.t < at || scene.fired.has(id)) return;
    scene.fired.add(id);
    if (performance.now() < scene.loud && !stage.hidden && !reduceMotion) FX.play(sound);
  }

  let idleTimer = null;
  function setScene(name, cat = null) {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => setScene('kitchen'), 30000);
    if (name === scene.name) {
      if (cat && cat !== scene.cat) scene.cat = cat;
      return;
    }
    Object.assign(scene, { name, cat, start: performance.now(), fired: new Set(), loop: -1 });
    scene.loud = performance.now() + SCENES[name].len;
    caption.textContent = SCENES[name].caption[document.documentElement.lang === 'es' ? 'es' : 'en'];
    stage.classList.remove('swap');
    void stage.offsetWidth;
    stage.classList.add('swap');
    if (reduceMotion) render(performance.now());
  }

  function render(now) {
    const s = SCENES[scene.name];
    const elapsed = reduceMotion ? s.len * 0.3 : now - scene.start;
    const loop = Math.floor(elapsed / s.len);
    if (loop !== scene.loop) { scene.loop = loop; scene.fired = new Set(); }
    scene.t = elapsed % s.len;
    g.clearRect(0, 0, W, H);
    s.draw(scene.t);
  }

  let last = 0;
  function tick(now) {
    requestAnimationFrame(tick);
    if (stage.hidden || document.hidden || now - last < 83) return;
    last = now;
    render(now);
  }

  /* ── What the visitor is looking at ───────────────────────── */
  const TYPES = { breakfast: 1, lunch: 1, snack: 1, dinner: 1 };
  function sceneFor(el) {
    if (!el || !el.closest) return null;
    const meal = el.closest('.meal-slot[data-type]');
    if (meal && TYPES[meal.dataset.type]) return [meal.dataset.type];
    const aisle = el.closest('.shop-cat[data-cat]');
    if (aisle) return ['market', aisle.dataset.cat];
    if (el.closest('.shopping-section')) return ['market'];
    if (el.closest('.sunday-prep') || el.closest('header .px')) return ['cooking'];
    if (el.closest('.fx-stage')) return null;
    return null;
  }
  const follow = el => { const s = sceneFor(el); if (s) setScene(s[0], s[1]); };

  document.addEventListener('pointerover', e => { if (e.pointerType !== 'touch') follow(e.target); });
  document.addEventListener('pointerdown', e => { if (e.pointerType === 'touch') follow(e.target); });
  document.addEventListener('focusin', e => follow(e.target));
  if (!canHover) {
    let pending = false;
    window.addEventListener('scroll', () => {
      if (pending) return;
      pending = true;
      setTimeout(() => { pending = false; follow(document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2)); }, 250);
    }, { passive: true });
  }
  // Reading a recipe: the cook gets busy
  document.addEventListener('plan:modal', e => { if (e.detail.open) setScene('cooking'); });
  // A balance chip picked: show that kind of meal
  document.addEventListener('plan:focus', e => {
    const f = e.detail.on && e.detail.facet;
    if (f) setScene(f.startsWith('breakfast') ? 'breakfast' : f.startsWith('group') ? 'snack' : f === 'exp' ? 'cooking' : 'dinner');
  });
  document.addEventListener('plan:lang', () => {
    caption.textContent = SCENES[scene.name].caption[document.documentElement.lang === 'es' ? 'es' : 'en'];
    label();
  });

  /* ── The TV and its off switch ────────────────────────────── */
  const stage = document.createElement('div');
  stage.className = 'fx-stage';
  const bar = document.createElement('div');
  bar.className = 'fx-stage-bar';
  const caption = document.createElement('span');
  const hide = document.createElement('button');
  hide.type = 'button';
  hide.className = 'fx-stage-min';
  hide.textContent = '–';
  bar.append(caption, hide);
  stage.append(canvas, bar);

  const show = document.createElement('button');
  show.type = 'button';
  show.className = 'fx-stage-open';
  show.textContent = '📺';

  const grip = document.createElement('button');
  grip.type = 'button';
  grip.className = 'fx-stage-grip';
  stage.append(grip);
  bar.tabIndex = 0;

  const LABELS = {
    en: { hide: 'Hide the kitchen TV', show: 'Show the kitchen TV — pixel scenes that follow what you look at',
          move: 'Drag to move the kitchen TV · double-click to put it back · arrow keys work too',
          size: 'Drag to resize the kitchen TV · arrow keys work too' },
    es: { hide: 'Ocultar la tele de la cocina', show: 'Mostrar la tele de la cocina — escenas pixeladas según lo que mirás',
          move: 'Arrastrá para mover la tele · doble clic para devolverla a su lugar · también con las flechas',
          size: 'Arrastrá para cambiar el tamaño de la tele · también con las flechas' }
  };
  function label() {
    const L = LABELS[document.documentElement.lang === 'es' ? 'es' : 'en'];
    hide.dataset.tip = L.hide; hide.setAttribute('aria-label', L.hide);
    show.dataset.tip = L.show; show.setAttribute('aria-label', L.show);
    bar.dataset.tip = L.move; bar.setAttribute('aria-label', L.move);
    grip.dataset.tip = L.size; grip.setAttribute('aria-label', L.size);
  }

  /* ── Moving and resizing ──────────────────────────────────── */
  // Drag the bar to move the TV and the corner grip to resize it. The
  // spot is saved as a share of the free space on each axis, so it
  // keeps its corner when the window changes size.
  const BOX_KEY = 'meal-plan-tv-box';
  const MIN_W = 200, GAP = 8;
  let box = null;                                     // { x, y: 0 (left/top) … 1, w: px }
  try { box = JSON.parse(localStorage.getItem(BOX_KEY)); } catch (e) {}
  if (!box || !(box.w > 0)) box = null;

  const view = () => ({ w: document.documentElement.clientWidth, h: window.innerHeight });
  const frame = () => ({ w: stage.offsetWidth - canvas.clientWidth, h: stage.offsetHeight - canvas.clientHeight });
  const heightFor = w => (w - frame().w) * H / W + frame().h;
  const within = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

  function maxWidth() {
    const v = view(), f = frame();
    return Math.max(MIN_W, Math.min(v.w - 2 * GAP, (v.h - 2 * GAP - f.h) * W / H + f.w));
  }
  // Close to a whole number of screen pixels per scene pixel? Snap to it, so the art stays crisp
  function snap(w) {
    const f = frame().w, k = Math.round((w - f) / W);
    return k >= 1 && Math.abs(k * W + f - w) < 10 ? k * W + f : Math.round(w);
  }
  function put(left, top, width) {
    const v = view();
    stage.style.width = width + 'px';
    const h = stage.offsetHeight;
    stage.style.left = within(left, GAP, v.w - width - GAP) + 'px';
    stage.style.top = within(top, GAP, v.h - h - GAP) + 'px';
    stage.style.right = stage.style.bottom = 'auto';
  }
  // The grip goes on the corner that faces the middle of the screen
  function corner() {
    const v = view(), r = stage.getBoundingClientRect();
    stage.dataset.grip = (r.top + r.height / 2 < v.h / 2 ? 'b' : 't') + (r.left + r.width / 2 < v.w / 2 ? 'r' : 'l');
  }
  function place() {
    if (stage.hidden) return;
    if (!box) {
      stage.removeAttribute('style');
    } else {
      const v = view(), w = Math.min(box.w, maxWidth()), h = heightFor(w);
      put(GAP + box.x * Math.max(0, v.w - w - 2 * GAP), GAP + box.y * Math.max(0, v.h - h - 2 * GAP), w);
    }
    corner();
  }
  function remember() {
    const v = view(), r = stage.getBoundingClientRect();
    const share = (pos, free) => free > 0 ? within((pos - GAP) / free, 0, 1) : 0;
    box = { x: share(r.left, v.w - r.width - 2 * GAP), y: share(r.top, v.h - r.height - 2 * GAP), w: Math.round(r.width) };
    try { localStorage.setItem(BOX_KEY, JSON.stringify(box)); } catch (e) {}
    corner();
  }
  // New width with the corner opposite the grip held still
  function resizeFrom(start, width) {
    const g = stage.dataset.grip, w = snap(within(width, MIN_W, maxWidth())), h = heightFor(w);
    put(g[1] === 'r' ? start.left : start.right - w, g[0] === 'b' ? start.top : start.bottom - h, w);
  }

  function drag(e, resizing) {
    if (e.button !== 0 || (!resizing && e.target.closest('button'))) return;
    e.preventDefault();
    const el = e.currentTarget, start = stage.getBoundingClientRect(), x0 = e.clientX, y0 = e.clientY;
    const g = stage.dataset.grip, sx = g[1] === 'r' ? 1 : -1, sy = g[0] === 'b' ? 1 : -1;
    try { el.setPointerCapture(e.pointerId); } catch (err) {}
    stage.classList.add(resizing ? 'resizing' : 'dragging');
    const move = ev => {
      const dx = ev.clientX - x0, dy = ev.clientY - y0;
      if (!resizing) return put(start.left + dx, start.top + dy, start.width);
      const across = sx * dx, down = sy * dy * W / H;   // vertical drag counted in width
      resizeFrom(start, start.width + (Math.abs(across) > Math.abs(down) ? across : down));
    };
    const end = () => {
      ['pointermove', 'pointerup', 'pointercancel'].forEach((type, i) => el.removeEventListener(type, i ? end : move));
      stage.classList.remove('dragging', 'resizing');
      remember();
    };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', end);
  }
  bar.addEventListener('pointerdown', e => drag(e, false));
  grip.addEventListener('pointerdown', e => drag(e, true));
  bar.addEventListener('dblclick', e => {
    if (e.target.closest('button')) return;
    box = null;
    try { localStorage.removeItem(BOX_KEY); } catch (err) {}
    place();
  });

  const ARROWS = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };
  bar.addEventListener('keydown', e => {
    const a = ARROWS[e.key];
    if (!a || e.target !== bar) return;
    e.preventDefault();
    const r = stage.getBoundingClientRect();
    put(r.left + a[0] * 24, r.top + a[1] * 24, r.width);
    remember();
  });
  grip.addEventListener('keydown', e => {
    const a = ARROWS[e.key];
    if (!a) return;
    e.preventDefault();
    const r = stage.getBoundingClientRect();
    resizeFrom(r, r.width + (a[0] || -a[1]) * 36);
    remember();
  });
  window.addEventListener('resize', place);
  function setOpen(open) {
    stage.hidden = !open;
    show.hidden = open;
    document.body.classList.toggle('fx-stage-on', open);
    try { localStorage.setItem(PREF_KEY, open ? 'on' : 'off'); } catch (e) {}
    if (open) { place(); render(performance.now()); }
  }
  hide.addEventListener('click', () => setOpen(false));
  show.addEventListener('click', () => setOpen(true));

  label();
  caption.textContent = SCENES.kitchen.caption[document.documentElement.lang === 'es' ? 'es' : 'en'];
  document.body.append(stage, show);
  let saved = 'on';
  try { saved = localStorage.getItem(PREF_KEY) || 'on'; } catch (e) {}
  setOpen(saved !== 'off');
  render(performance.now());
  if (!reduceMotion) requestAnimationFrame(tick);
})();
