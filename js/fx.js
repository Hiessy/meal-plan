/* ============================================================
   Fx — the flashy layer: sounds and motion. Optional: the page
   works the same without this file and css/fx.css.

   - Sounds are synthesized with the Web Audio API (no audio
     files): a soft note when the pointer moves onto a meal,
     button or tab, plus chimes for opening a recipe, ticking
     items, shuffling (a dice roll) and finishing a list.
   - Motion: cards deal in after a shuffle, rise in on a new
     week, pop after a swap; confetti when a list is all ticked.
   - Pixel art: a pan flipping pancakes and a soup pot in the
     header (hover them, or an experimental meal, for their own
     sounds). The animated kitchen TV lives in js/fx-scenes.js.

   Shares window.Fx = { play, sprites, ink } with js/fx-scenes.js.
   - Adds a 🔊 / 🔇 button to the header; the choice is saved.

   It reacts to pointer hovers and to the plan:* events that
   js/ui.js sends (see the top of that file).
   ============================================================ */
(() => {
  const PREF_KEY = 'meal-plan-sound';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let soundOn = (() => { try { return localStorage.getItem(PREF_KEY) !== 'off'; } catch (e) { return true; } })();

  /* ── Sound engine ─────────────────────────────────────────── */
  let ctx = null, out = null, noiseBuffer = null;

  // Browsers only allow sound once the visitor has clicked, tapped or typed
  function unlock() {
    if (!soundOn) return;
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      ctx = new AudioCtx();
      const limiter = ctx.createDynamicsCompressor();
      limiter.connect(ctx.destination);
      out = ctx.createGain();
      out.gain.value = 0.9;
      out.connect(limiter);
      // a short, soft echo gives the chimes some air
      const echo = ctx.createDelay(), feedback = ctx.createGain(), damp = ctx.createBiquadFilter(), wet = ctx.createGain();
      echo.delayTime.value = 0.13;
      feedback.gain.value = 0.28;
      damp.type = 'lowpass';
      damp.frequency.value = 3200;
      wet.gain.value = 0.22;
      out.connect(echo);
      echo.connect(damp);
      damp.connect(feedback);
      feedback.connect(echo);
      damp.connect(wet);
      wet.connect(limiter);
    }
    if (ctx.state === 'suspended') ctx.resume();
  }
  ['pointerdown', 'keydown'].forEach(type => document.addEventListener(type, unlock, true));

  function tone(freq, { at = 0, dur = 0.15, vol = 0.05, type = 'sine', to, attack = 0.004 } = {}) {
    const t0 = ctx.currentTime + at;
    const osc = ctx.createOscillator(), amp = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (to) osc.frequency.exponentialRampToValueAtTime(to, t0 + dur);
    amp.gain.setValueAtTime(0.0001, t0);
    amp.gain.exponentialRampToValueAtTime(vol, t0 + attack);
    amp.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(amp);
    amp.connect(out);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
  }

  function noise({ at = 0, dur = 0.12, vol = 0.04, freq = 1200, to, q = 1 } = {}) {
    if (!noiseBuffer) {
      noiseBuffer = ctx.createBuffer(1, Math.round(ctx.sampleRate / 2), ctx.sampleRate);
      const data = noiseBuffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    }
    const t0 = ctx.currentTime + at;
    const src = ctx.createBufferSource(), filter = ctx.createBiquadFilter(), amp = ctx.createGain();
    src.buffer = noiseBuffer;
    filter.type = 'bandpass';
    filter.Q.value = q;
    filter.frequency.setValueAtTime(freq, t0);
    if (to) filter.frequency.exponentialRampToValueAtTime(to, t0 + dur);
    amp.gain.setValueAtTime(0.0001, t0);
    amp.gain.exponentialRampToValueAtTime(vol, t0 + 0.01);
    amp.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(filter);
    filter.connect(amp);
    amp.connect(out);
    src.start(t0);
    src.stop(t0 + dur + 0.05);
  }

  /* ── The sounds ───────────────────────────────────────────── */
  // C major pentatonic from C5: any notes in a row sound good together
  const SCALE = [523.25, 587.33, 659.25, 783.99, 880, 1046.5, 1174.66, 1318.51, 1567.98, 1760, 2093, 2349.32];

  const sounds = {
    // hovers — quiet, short
    meal: (day, slot) => {                // each meal of the week its own note
      const f = SCALE[Math.min(day + slot * 2, SCALE.length - 1)];
      tone(f, { dur: 0.3, vol: 0.05 });
      tone(f * 2, { dur: 0.14, vol: 0.012 });
    },
    tab:    () => { tone(392, { dur: 0.1, vol: 0.04, type: 'triangle' }); tone(784, { dur: 0.06, vol: 0.01 }); },
    button: () => tone(1500, { dur: 0.05, vol: 0.018, to: 1150 }),
    row:    () => tone(2200, { dur: 0.03, vol: 0.007 }),

    // clicks and moments
    tap:    () => tone(620, { dur: 0.08, vol: 0.05, to: 310 }),
    open:   () => {
      noise({ dur: 0.3, vol: 0.03, freq: 300, to: 2600 });
      tone(523.25, { at: 0.09, dur: 0.4, vol: 0.03 });
      tone(783.99, { at: 0.13, dur: 0.4, vol: 0.026 });
    },
    close:  () => noise({ dur: 0.22, vol: 0.026, freq: 2400, to: 300 }),
    step:   dir => {
      tone(dir > 0 ? 880 : 659.25, { dur: 0.08, vol: 0.035, to: dir > 0 ? 1046.5 : 523.25 });
      noise({ dur: 0.07, vol: 0.012, freq: 1800 });
    },
    tickOn:  () => { tone(1318.51, { dur: 0.12, vol: 0.045 }); tone(1760, { at: 0.06, dur: 0.25, vol: 0.045 }); },
    tickOff: () => tone(440, { dur: 0.1, vol: 0.035, type: 'triangle', to: 330 }),
    complete: () => {                     // a little fanfare
      [523.25, 659.25, 783.99, 1046.5, 1318.51].forEach((f, i) =>
        tone(f, { at: 0.12 + i * 0.075, dur: 0.55, vol: 0.04, type: 'triangle' }));
      tone(2093, { at: 0.5, dur: 0.7, vol: 0.018 });
    },
    dice:   () => {                       // a rattle, then a "ta-da"
      for (let i = 0; i < 8; i++) {
        noise({ at: i * 0.045 + Math.random() * 0.015, dur: 0.035, vol: 0.06 - i * 0.005,
                freq: 1500 + Math.random() * 2500, q: 7 });
      }
      tone(783.99, { at: 0.42, dur: 0.25, vol: 0.04 });
      tone(1046.5, { at: 0.5, dur: 0.45, vol: 0.04 });
    },
    swap:   () => { tone(400, { dur: 0.17, vol: 0.03, type: 'triangle', to: 1200 }); tone(1318.51, { at: 0.16, dur: 0.35, vol: 0.04 }); },
    reset:  () => { tone(1200, { dur: 0.2, vol: 0.03, type: 'triangle', to: 400 }); tone(523.25, { at: 0.19, dur: 0.35, vol: 0.035 }); },
    page:   () => { noise({ dur: 0.1, vol: 0.025, freq: 900, q: 0.8 }); tone(330, { dur: 0.11, vol: 0.03, type: 'triangle' }); },
    lang:   () => { tone(523.25, { dur: 0.1, vol: 0.035, to: 659.25 }); tone(659.25, { at: 0.09, dur: 0.15, vol: 0.035, to: 783.99 }); },
    up:     () => tone(880, { dur: 0.07, vol: 0.03, to: 1046.5 }),
    down:   () => tone(659.25, { dur: 0.07, vol: 0.03, to: 523.25 }),
    copy:   () => { tone(987.77, { dur: 0.08, vol: 0.035 }); tone(1479.98, { at: 0.07, dur: 0.22, vol: 0.035 }); },
    ping:   () => { tone(1567.98, { dur: 0.5, vol: 0.035 }); tone(2349.32, { at: 0.05, dur: 0.4, vol: 0.012 }); },
    hello:  () => { tone(659.25, { dur: 0.09, vol: 0.04 }); tone(987.77, { at: 0.08, dur: 0.22, vol: 0.04 }); },

    // the pixel kitchen and experimental recipes
    sizzle: () => { noise({ dur: 0.35, vol: 0.03, freq: 6000, q: 0.6 }); noise({ at: 0.12, dur: 0.25, vol: 0.02, freq: 4500, q: 0.6 }); },
    bubble: () => [0, 0.09, 0.2].forEach(t0 => {
      const f = 260 + Math.random() * 180;
      tone(f, { at: t0, dur: 0.08, vol: 0.04, to: f * 2.2 });
    }),
    ding:   () => { tone(2093, { dur: 0.6, vol: 0.03 }); tone(2637.02, { at: 0.02, dur: 0.5, vol: 0.02 }); },
    coin:   () => { tone(1975.5, { dur: 0.08, vol: 0.035 }); tone(2637.02, { at: 0.07, dur: 0.3, vol: 0.035 }); noise({ dur: 0.05, vol: 0.02, freq: 7000 }); },
    chop:   () => { noise({ dur: 0.04, vol: 0.05, freq: 900, q: 2 }); tone(180, { dur: 0.05, vol: 0.03, type: 'triangle' }); },
    whirr:  () => { noise({ dur: 0.9, vol: 0.025, freq: 500, to: 1800, q: 3 }); tone(110, { dur: 0.9, vol: 0.02, type: 'sawtooth', to: 140 }); },
    thunk:  () => { tone(140, { dur: 0.12, vol: 0.05, type: 'triangle', to: 90 }); noise({ dur: 0.06, vol: 0.02, freq: 400 }); },
    munch:  () => [0, 0.11, 0.22].forEach(t0 => noise({ at: t0, dur: 0.06, vol: 0.035, freq: 2500, q: 1.5 })),
    yum:    () => { tone(784, { dur: 0.12, vol: 0.035 }); tone(1046.5, { at: 0.1, dur: 0.25, vol: 0.035 }); },
    bloop:  () => {                       // a lab beaker going "blub-blub"
      tone(330, { dur: 0.12, vol: 0.04, type: 'triangle', to: 880 });
      tone(494, { at: 0.11, dur: 0.12, vol: 0.035, type: 'triangle', to: 1320 });
    }
  };

  // After a click: the audio may still be waking up, the sound plays as soon as it can
  function play(name, ...args) {
    if (!soundOn) return;
    unlock();
    if (!ctx) return;
    try { sounds[name](...args); } catch (e) { /* sound is decoration only */ }
  }

  /* ── Hover sounds (mouse and pen; touch has no hover) ─────── */
  const HOVERS = [
    ['.meal-slot[data-exp]', () => sounds.bloop()],
    ['.meal-slot', el => sounds.meal(+el.dataset.day || 0, +el.dataset.slot || 0)],
    ['.px-pan', () => sounds.sizzle()],
    ['.px-pot', () => sounds.bubble()],
    ['.tab-btn',   () => sounds.tab()],
    ['.check',     () => sounds.row()],
    ['button',     () => sounds.button()]
  ];
  let hovered = null, lastHover = 0;

  document.addEventListener('pointerover', e => {
    if (e.pointerType === 'touch') return;
    let el = null, sound = null;
    for (const [selector, fn] of HOVERS) {
      el = e.target.closest(selector);
      if (el) { sound = fn; break; }
    }
    if (el === hovered) return;            // still on the same thing
    hovered = el;
    // only once the audio is awake — queued hovers would all sound at once
    if (!el || el.disabled || !soundOn || !ctx || ctx.state !== 'running') return;
    const now = performance.now();
    if (now - lastHover < 40) return;      // sweeping across many items: not a buzz
    lastHover = now;
    try { sound(el); } catch (err) { /* decoration only */ }
  });

  /* ── Motion ───────────────────────────────────────────────── */
  function animate(els, cls) {
    if (reduceMotion) return;
    els.forEach((el, i) => {
      if (!el) return;
      el.classList.remove(cls);
      void el.offsetWidth;                 // restart if it is already running
      el.style.setProperty('--fx-i', i);
      el.classList.add(cls);
      const done = ev => {
        if (ev.target !== el) return;
        el.classList.remove(cls);
        el.removeEventListener('animationend', done);
      };
      el.addEventListener('animationend', done);
    });
  }
  const all = selector => [...document.querySelectorAll(selector)];

  const CONFETTI = ['#c08457', '#e4b98a', '#8b5e3c', '#f59e0b', '#16a34a', '#2563eb', '#db2777', '#7c3aed'];
  function confetti(from) {
    if (reduceMotion || !from) return;
    const r = from.getBoundingClientRect();
    const burst = document.createElement('div');
    burst.className = 'fx-confetti';
    burst.style.left = r.left + r.width / 2 + 'px';
    burst.style.top = r.top + r.height / 2 + 'px';
    for (let i = 0; i < 28; i++) {
      const bit = document.createElement('i');
      const angle = Math.random() * Math.PI * 2, dist = 50 + Math.random() * 90;
      bit.style.setProperty('--x', Math.cos(angle) * dist + 'px');
      bit.style.setProperty('--y', Math.sin(angle) * dist - 50 + 'px');
      bit.style.setProperty('--r', Math.random() * 720 - 360 + 'deg');
      bit.style.background = CONFETTI[i % CONFETTI.length];
      burst.appendChild(bit);
    }
    document.body.appendChild(burst);
    setTimeout(() => burst.remove(), 1400);
  }

  /* ── Pixel kitchen: little animated sprites around the page ──
     Each sprite is a few frames of pixel rows ('.' = empty), drawn
     side by side into one SVG; css/fx.css steps through the frames. */
  const INK = {
    k: '#3b2a1f', m: '#4b5563', M: '#9ca3af', L: '#e5e7eb', H: '#a0673a',
    p: '#f4c06a', P: '#c98a3c', r: '#d94b3d', R: '#9b2c22', o: '#f59e0b', O: '#fde68a',
    s: 'rgba(255,255,255,.85)', f: '#f97316', F: '#fde047', w: '#ffffff', c: '#f2c9a0',
    n: '#ef4444', t: '#e8b273', T: '#a8652b', g: '#e2e8f0', G: '#94a3b8'
  };

  // A frame from a list of rows, with some rows swapped and single pixels set
  function frame(base, rows = {}, dots = []) {
    const out = base.map((row, y) => rows[y] || row);
    dots.forEach(([x, y, ch]) => { out[y] = out[y].slice(0, x) + ch + out[y].slice(x + 1); });
    return out;
  }
  const blank = (w, h) => Array.from({ length: h }, () => '.'.repeat(w));

  // Frying pan flipping a pancake over a flame
  const panBase = frame(blank(18, 17), {
    11: 'k............k....', 12: 'kmmmmmmmmmmmmkkHHH', 13: '.kMMMMMMMMMMk.....', 14: '..kkkkkkkkkk......'
  });
  const flameA = { 15: '...f..F..f..F.....', 16: '..fFf.fFf.fFf.....' };
  const flameB = { 15: '....F..f..F..f....', 16: '...fFf.fFf.fFf....' };
  const cakeIn = { 10: '.ppppppppppp......', 11: 'kPPPPPPPPPPPPk....' };
  const at = (top, flipped) => ({ [top]: flipped ? '.PPPPPPPPPPP......' : '.ppppppppppp......',
                                  [top + 1]: flipped ? '.ppppppppppp......' : '.PPPPPPPPPPP......' });
  const PAN = [
    frame(panBase, { ...cakeIn, ...flameA }, [[3, 9, 'O'], [9, 9, 'O']]),
    frame(panBase, { ...cakeIn, ...flameB }, [[5, 9, 'O'], [11, 8, 'O']]),
    frame(panBase, { ...cakeIn, ...flameA }, [[2, 8, 'O'], [8, 9, 'O']]),
    frame(panBase, { ...at(6, false), ...flameB }),
    frame(panBase, { ...at(2, true), ...flameA }),
    frame(panBase, { ...at(6, true), ...flameB })
  ];

  // Soup pot bubbling, with steam rising
  const potBase = frame(blank(16, 18), {
    8: '..kkkkkkkkkkkk..', 10: 'kkrrrrrrrrrrrrkk', 11: '.krrrrrrrrrrrrk.', 12: '.krLrrrrrrrrrrk.',
    13: '.krLrrrrrrrrrrk.', 14: '.kRrrrrrrrrrrRk.', 15: '..kRRRRRRRRRRk..', 16: '...kkkkkkkkkk...'
  });
  const soup = surface => '.k' + surface + 'k.';
  const steam = pts => pts.map(([x, y]) => [x, y, 's']);
  const POT = [
    frame(potBase, { 9: soup('oOoooooOoooo'), 17: '..fFf.fFf.fFf...' },
      steam([[6, 4], [5, 5], [6, 5], [10, 5], [6, 6], [9, 6], [10, 6], [10, 7]])),
    frame(potBase, { 9: soup('oooOoooooOoo'), 17: '...fFf.fFf.fFf..' },
      steam([[5, 2], [4, 3], [5, 3], [11, 3], [5, 4], [10, 4], [11, 4], [11, 5], [7, 6], [6, 7], [7, 7]])),
    frame(potBase, { 9: soup('ooooOoOooooo'), 17: '..fFf.fFf.fFf...' },
      steam([[4, 0], [3, 1], [4, 1], [11, 1], [4, 2], [10, 2], [11, 2], [10, 3], [6, 4], [5, 5], [6, 5], [12, 5], [6, 6], [11, 6], [12, 6]]))
  ];

  // Toaster that pops now and then
  const toasterBase = frame(blank(16, 15), {
    8: '..kkkkkkkkkkkk..', 9: '.kgGGGgggGGGggk.', 10: '.kggggggggggggk.', 11: '.kggggggggggggkk',
    12: '.kggggggggggggk.', 13: '.kGGGGGGGGGGGGk.', 14: '..kk........kk..'
  });
  const toastUp = top => {
    const rows = { [top]: '...TTT...TTT....' };
    for (let y = top + 1; y <= 7; y++) rows[y] = '...TtT...TtT....';
    return rows;
  };
  const down = frame(toasterBase, { 7: '...TTT...TTT....' });
  const TOASTER = [down, down, down, down, down,
    frame(toasterBase, toastUp(1), [[2, 0, 'O'], [13, 0, 'O']]),
    frame(toasterBase, toastUp(3)),
    down];

  // A chef with a wooden spoon, two walking frames
  const chefTop = [
    '...wwwwww...', '..wwwwwwww..', '..wwwwwwww..', '...LLLLLL...', '...cccccc...', '...ckcckc.H.',
    '...cccccc.H.', '....nnnn..H.', '..wwwwwwwwH.', '.cwwwwwwwwc.', '.cwwwkwwwwc.', '..wwwwwwww..', '..mmmmmmmm..'
  ];
  const CHEF = [
    chefTop.concat(['..mm....mm..', '..mm....mm..', '.kkk....kkk.']),
    chefTop.concat(['...mm..mm...', '...mm..mm...', '..kkk.kkk...'])
  ];

  // → <div class="px px-NAME"> holding every frame side by side
  function sprite(name, frames, scale, seconds) {
    const w = frames[0][0].length, h = frames[0].length;
    let rects = '';
    frames.forEach((rows, f) => rows.forEach((row, y) => {
      for (let x = 0; x < row.length;) {          // one rect per run of the same colour
        let end = x;
        while (end < row.length && row[end] === row[x]) end++;
        if (row[x] !== '.') rects += `<rect x="${f * w + x}" y="${y}" width="${end - x}" height="1" fill="${INK[row[x]]}"/>`;
        x = end;
      }
    }));
    const el = document.createElement('div');
    el.className = 'px px-' + name;
    el.setAttribute('aria-hidden', 'true');
    el.style.cssText = `--frames:${frames.length};--px-time:${seconds}s;width:${w * scale}px;height:${h * scale}px`;
    el.innerHTML = `<svg viewBox="0 0 ${w * frames.length} ${h}" width="${w * frames.length * scale}" height="${h * scale}"
      shape-rendering="crispEdges">${rects}</svg>`;
    return el;
  }

  const head = document.querySelector('header');
  if (head) head.append(sprite('pot', POT, 3, 0.9), sprite('pan', PAN, 3, 1.5));

  /* ── Reacting to the planner ──────────────────────────────── */
  document.addEventListener('plan:action', e => {
    const { name, el } = e.detail;
    switch (name) {
      case 'open': case 'close': case 'shuffle': case 'reset': case 'swap': case 'facet':
      case 'deck-step': case 'deck-go':
        return;                            // these sound in plan:modal / plan:rendered / plan:focus / plan:deck
      case 'lang':   return play('lang');
      case 'week':   return play('page');
      case 'step':   return play('step', +el.dataset.step);
      case 'offset': return play(+el.dataset.delta > 0 ? 'up' : 'down');
      case 'copy': case 'share': return play('copy');
      case 'clear':  return play('reset');
      case 'today':
        play('ping');
        return animate(all('.week-section.active .day-col.today'), 'fx-flash');
      default:       return play('tap');
    }
  });

  document.addEventListener('plan:modal', e => play(e.detail.open ? 'open' : 'close'));
  document.addEventListener('plan:deck', e => play('step', e.detail.dir));

  // A balance chip picked: chime and bounce the meals it lights up
  document.addEventListener('plan:focus', e => {
    play(e.detail.on ? 'tickOn' : 'tickOff');
    if (e.detail.on) animate(all(`#w${e.detail.n} .meal-slot.hl`), 'fx-pop');
  });

  document.addEventListener('plan:week', e => animate(all(`#w${e.detail.n} .day-col`), 'fx-rise'));

  document.addEventListener('plan:rendered', e => {
    const { n, why, k } = e.detail;
    if (why === 'swap') {
      play('swap');
      animate(all(`#w${n} .meal-slot[data-k="${k}"]`), 'fx-pop');
    } else {
      play(why === 'shuffle' ? 'dice' : 'reset');
      animate(all(`#w${n} .meal-slot`), 'fx-deal');
    }
  });

  document.addEventListener('plan:tick', e => {
    const { checked, complete, pill, el } = e.detail;
    play(checked ? 'tickOn' : 'tickOff');
    if (checked) animate([el], 'fx-check');
    if (!complete) return;
    play('complete');
    animate([pill], 'fx-pop');
    confetti(pill);
    if (soundOn && navigator.vibrate) navigator.vibrate([30, 40, 30]);
  });

  /* ── Sound on / off button ────────────────────────────────── */
  const LABELS = {
    en: { on: 'Sound effects on — click to mute', off: 'Sound effects off — click to turn them on' },
    es: { on: 'Efectos de sonido activados — clic para silenciar', off: 'Efectos de sonido desactivados — clic para activarlos' }
  };
  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'fx-sound';

  function label() {
    const L = LABELS[document.documentElement.lang] || LABELS.en;
    toggle.textContent = soundOn ? '🔊' : '🔇';
    toggle.setAttribute('aria-pressed', soundOn);
    toggle.dataset.tip = soundOn ? L.on : L.off;
    toggle.setAttribute('aria-label', toggle.dataset.tip);
  }

  toggle.addEventListener('click', () => {
    soundOn = !soundOn;
    try { localStorage.setItem(PREF_KEY, soundOn ? 'on' : 'off'); } catch (e) {}
    label();
    if (soundOn) play('hello');
    if (typeof Tooltip !== 'undefined') Tooltip.refresh();
  });

  label();
  document.addEventListener('plan:lang', label);
  const header = document.querySelector('header');
  if (header) header.appendChild(toggle);

  window.Fx = { play, sprites: { PAN, POT, TOASTER, CHEF }, ink: INK };
})();
