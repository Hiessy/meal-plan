/* ============================================================
   Share — a week's menu as a short text for a link
   (logic only, no DOM)

   "1.20261116aB3x9…": the format version, then for each week its
   Monday (yyyymmdd) and its 20 recipes as 5 characters each, weeks
   joined by dots. A recipe's 5 characters come from its id, so a
   link keeps working as recipes are added. Letters and digits
   only: chat apps keep such a link whole.
   ============================================================ */
const Share = (() => {
  const VERSION = '1', DIGITS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', SIZE = 5;

  // 5 letters or digits from the recipe id
  function code(id) {
    let n = Planner.hash(id) % DIGITS.length ** SIZE, text = '';
    for (let i = 0; i < SIZE; i++) { text = DIGITS[n % DIGITS.length] + text; n = Math.floor(n / DIGITS.length); }
    return text;
  }
  let ids = null;                              // code → recipe id, built when first needed
  const idOf = text => (ids || (ids = new Map(recipes.map(r => [code(r.id), r.id])))).get(text);

  // { '2026-11-16': [20 recipe ids], … } → text
  const encode = menus => [VERSION, ...Object.keys(menus).sort().map(iso =>
    iso.replace(/-/g, '') + menus[iso].map(code).join(''))].join('.');

  // text → { '2026-11-16': [20 recipe ids], … }, or null when any part of
  // it is not a week's menu (cut short, mistyped, from another version)
  function decode(text) {
    const parts = String(text || '').split('.');
    if (parts.shift() !== VERSION || !parts.length) return null;
    const menus = {};
    for (const part of parts) {
      const m = /^(\d{4})(\d{2})(\d{2})((?:[0-9A-Za-z]{5}){20})$/.exec(part);
      if (!m) return null;
      const monday = new Date(+m[1], +m[2] - 1, +m[3]);
      const menu = m[4].match(/.{5}/g).map(idOf);
      if (monday.getDay() !== 1 || monday.getMonth() !== +m[2] - 1 || !Planner.isMenu(menu)) return null;
      menus[`${m[1]}-${m[2]}-${m[3]}`] = menu;
    }
    return menus;
  }

  return { encode, decode, code };
})();
