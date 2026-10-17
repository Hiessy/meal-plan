/* ============================================================
   Tooltip — shows the data-tip text of the element under the
   pointer, for any element on the page (needs #tooltip).
   Mouse: hover · keyboard: focus · touch: press and hold
   (the ⓘ buttons also open on a plain tap).
   ============================================================ */
const Tooltip = (() => {
  const tipEl = document.getElementById('tooltip');
  let target = null;         // element whose tooltip is showing
  let timer = null;          // hover delay / touch auto-hide
  let pressTimer = null;     // touch press-and-hold
  let longPressed = false;   // swallow the click that follows a press-and-hold
  let lastPointer = 'mouse';
  let shownBeforeDown = null;

  function show(el) {
    const text = el.dataset.tip;
    if (!text || !el.isConnected) return;
    clearTimeout(timer);
    target = el;
    tipEl.textContent = text;

    // Above the element by default; below when there is no room. Kept on screen.
    const r = el.getBoundingClientRect();
    const tw = tipEl.offsetWidth, th = tipEl.offsetHeight;
    const gap = 10, pad = 8;
    const below = r.top - th - gap < pad;
    const top = below ? r.bottom + gap : r.top - th - gap;
    const centre = r.left + r.width / 2;
    const left = Math.max(pad, Math.min(centre - tw / 2, window.innerWidth - tw - pad));
    tipEl.style.left = left + 'px';
    tipEl.style.top = top + 'px';
    tipEl.style.setProperty('--arrow-x', Math.max(12, Math.min(centre - left, tw - 12)) + 'px');
    tipEl.classList.toggle('below', below);
    tipEl.classList.add('show');
  }

  function hide() {
    clearTimeout(timer);
    target = null;
    tipEl.classList.remove('show');
  }

  // After a re-render (e.g. language switch): re-read the text or drop a stale tooltip
  function refresh() {
    if (!target) return;
    if (target.isConnected && target.dataset.tip) show(target);
    else hide();
  }

  document.addEventListener('pointerover', e => {
    if (e.pointerType === 'touch') return;
    const el = e.target.closest('[data-tip]');
    if (el === target) return;
    hide();
    if (el) timer = setTimeout(() => show(el), 250);
  });
  document.documentElement.addEventListener('mouseleave', hide);

  document.addEventListener('focusin', e => {
    const el = e.target.closest('[data-tip]');
    if (el && e.target.matches(':focus-visible')) show(el);
  });
  document.addEventListener('focusout', hide);

  document.addEventListener('pointerdown', e => {
    lastPointer = e.pointerType;
    shownBeforeDown = target;
    longPressed = false;
    hide();
    if (e.pointerType !== 'touch') return;
    const el = e.target.closest('[data-tip]');
    if (!el) return;
    clearTimeout(pressTimer);
    pressTimer = setTimeout(() => {
      longPressed = true;
      show(el);
      timer = setTimeout(hide, 4000);
    }, 500);
  });
  ['pointerup', 'pointercancel'].forEach(type =>
    document.addEventListener(type, () => clearTimeout(pressTimer)));

  document.addEventListener('click', e => {
    if (longPressed) {             // finger lifted after press-and-hold: show the tip, not the action
      longPressed = false;
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    const info = e.target.closest('.info-btn');
    if (!info) return;
    if (lastPointer === 'touch' && shownBeforeDown === info) return;   // second tap closes it
    show(info);
  }, true);

  // Keep the phone's own long-press menu from covering the tooltip
  document.addEventListener('contextmenu', e => {
    if (lastPointer === 'touch' && e.target.closest('[data-tip]')) e.preventDefault();
  });

  window.addEventListener('scroll', hide, true);
  window.addEventListener('resize', hide);

  return { show, hide, refresh };
})();
