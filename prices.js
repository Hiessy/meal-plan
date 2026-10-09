/* ============================================================
   Price estimates & per-item offsets

   globalOffset  : fractional markup above base prices (0.30 = +30 %).
                   Changed at runtime via the offset control in the UI.
   base[i]       : reference price (USD) for item i in the shopping list,
                   same order as data.js items arrays.
   offsets[i]    : additional per-item fractional offset on top of
                   globalOffset (0.10 = item costs +10 % above the
                   global adjustment). Omit the offsets array when no
                   item needs a special tweak.

   Final price = base[i] × (1 + globalOffset) × (1 + offsets[i])
   ============================================================ */
const priceConfig = {
  globalOffset:   0.30,   // ← change in-app with the +/− control
  currencySymbol: '$'
};

/* shopPrices[week][categoryIndex]
   categoryIndex matches the order of data[week].shopping:
     0 Proteins & Fish · 1 Vegetables · 2 Fruit
     3 Grains & Bread  · 4 Pantry     · 5 Dairy & Fridge · 6 Other   */
const shopPrices = {

  /* ── WEEK 1 ──────────────────────────────────────────────── */
  "1": [
    { // 0 · Proteins & Fish  (6 items)
      base:    [ 8.00,  9.00, 22.00,  9.00,  8.00, 12.00],
      offsets: [ 0,     0,    0.10,   0,     0,    0.10 ]  // salmon & sirloin run pricier
    },
    { // 1 · Vegetables  (16 items)
      base: [ 5.00,  4.00,  2.50,  2.00,  2.50,  2.00,  3.00,  3.00,
              2.50,  3.50,  3.50,  3.00,  1.50,  3.00,  2.50,  2.00]
    },
    { // 2 · Fruit  (8 items)
      base: [ 3.00,  1.50,  3.50,  3.00,  1.50,  2.00,  2.50,  1.50]
    },
    { // 3 · Grains & Bread  (6 items)
      base: [ 3.00,  2.50,  2.50,  3.00,  4.00,  3.50]
    },
    { // 4 · Pantry  (19 items)
      base:    [ 3.50,  4.00,  5.00,  3.00,  3.00,  3.00,  3.00,  2.50,  2.50,
                 2.50,  2.50,  2.50,  3.00,  3.50,  3.50,  2.50,  7.00,  5.00,  8.00],
      offsets: [ 0,     0,     0,     0,     0,     0,     0,     0,     0,
                 0,     0,     0,     0,     0,     0,     0,     0,     0,     0.10]  // almond butter
    },
    { // 5 · Dairy & Fridge  (6 items)
      base: [ 5.00,  5.00,  3.50,  4.50,  3.00,  4.50]
    },
    { // 6 · Other  (3 items)
      base: [ 5.00,  4.50,  4.00]
    }
  ],

  /* ── WEEK 2 ──────────────────────────────────────────────── */
  "2": [
    { // 0 · Proteins & Fish  (7 items)
      base:    [12.00,  9.00, 10.00,  8.00, 20.00,  9.00,  4.00],
      offsets: [ 0,     0,    0,      0,    0.10,   0,     0   ]  // cod fillets
    },
    { // 1 · Vegetables  (16 items)
      base: [ 2.00,  2.00,  2.00,  2.00,  2.00,  2.50,  4.00,  3.00,
              2.50,  3.00,  3.00,  3.00,  3.00,  1.50,  2.50,  2.00]
    },
    { // 2 · Fruit  (5 items)
      base: [ 4.50,  1.50,  2.50,  4.00,  2.00]
    },
    { // 3 · Grains & Bread  (6 items)
      base: [ 5.00,  2.50,  3.00,  3.00,  3.50,  4.00]
    },
    { // 4 · Pantry  (20 items)
      base: [ 4.00,  2.50,  3.00,  3.00,  3.50,  3.50,  1.50,  3.00,  2.50,
              2.50,  2.50,  3.00,  3.50,  3.50,  5.00,  8.00,  2.00,  7.00,  2.50,  2.50]
    },
    { // 5 · Dairy & Fridge  (7 items)
      base: [ 5.00,  3.00,  4.50,  5.00,  3.50,  2.00,  4.50]
    },
    { // 6 · Other  (4 items)
      base: [ 5.00,  6.00,  4.00,  5.00]
    }
  ],

  /* ── WEEK 3 ──────────────────────────────────────────────── */
  "3": [
    { // 0 · Proteins & Fish  (6 items)
      base:    [ 7.00, 22.00, 12.00,  9.00,  4.00, 20.00],
      offsets: [ 0,    0.10,  0.10,   0,     0,    0    ]  // salmon & spare ribs
    },
    { // 1 · Vegetables  (18 items)
      base: [ 3.50,  5.00,  1.50,  2.00,  3.00,  2.00,  2.00,  3.50,  3.00,
              4.00,  2.50,  2.50,  2.50,  2.00,  3.50,  2.00,  2.00,  2.00]
    },
    { // 2 · Fruit  (8 items)
      base: [ 3.00,  2.00,  5.00,  3.50,  4.50,  2.50,  1.00,  1.50]
    },
    { // 3 · Grains & Bread  (10 items)
      base: [ 3.50,  2.50,  2.50,  4.50,  2.00,  3.00,  3.50,  3.50,  4.00,  3.50]
    },
    { // 4 · Pantry  (23 items)
      base:    [ 5.00,  3.50,  1.50,  3.00,  1.50,  1.50,  5.00,  3.50,  4.00,
                 3.00,  3.00,  2.50,  2.50,  2.50,  3.50,  2.50,  8.00,  7.00,
                 2.50,  5.00,  2.50,  8.00,  6.00],
      offsets: [ 0,     0,     0,     0,     0,     0,     0,     0,     0,
                 0,     0,     0,     0,     0,     0,     0,     0,     0,
                 0,     0,     0,     0.20,  0    ]  // pine nuts tend to be extra pricey
    },
    { // 5 · Dairy & Fridge  (9 items)
      base: [ 7.00,  4.50,  5.00,  5.00,  3.00,  5.00,  3.50,  3.50,  4.50]
    },
    { // 6 · Other  (3 items)
      base: [ 4.00,  2.50,  4.00]
    }
  ],

  /* ── WEEK 4 ──────────────────────────────────────────────── */
  "4": [
    { // 0 · Proteins & Fish  (7 items)
      base:    [ 9.00,  7.00, 12.00,  9.00, 22.00, 12.00,  4.00],
      offsets: [ 0,     0,    0,      0,    0.10,  0.10,   0   ]  // salmon & sirloin
    },
    { // 1 · Vegetables  (20 items)
      base: [ 1.50,  2.50,  3.00,  1.50,  1.50,  1.50,  2.00,  1.00,
              3.50,  3.00,  3.00,  4.00,  4.00,  3.00,  2.00,  2.00,  2.00,  2.00,  2.00,  2.00]
    },
    { // 2 · Fruit  (7 items)
      base: [ 3.00,  3.50,  3.00,  1.50,  5.00,  1.00,  1.00]
    },
    { // 3 · Grains & Bread  (6 items)
      base: [ 3.00,  4.00,  2.50,  2.50,  3.00,  3.00]
    },
    { // 4 · Pantry  (19 items)
      base: [ 4.00,  4.00,  1.50,  1.50,  1.50,  2.00,  3.00,  3.00,  2.50,
              2.50,  2.50,  3.00,  3.50,  4.00,  2.00,  5.00,  6.00,  1.50,  7.00]
    },
    { // 5 · Dairy & Fridge  (9 items)
      base: [ 4.50,  5.00,  3.50,  5.00,  3.50,  2.50,  5.00,  3.50,  5.00]
    },
    { // 6 · Other  (3 items)
      base: [ 5.00,  3.50,  4.00]
    }
  ]
};
