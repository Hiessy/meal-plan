# Family Meal Plan — May 2026

Responsive, interactive weekly meal planner for a family of 4.
Covers **Lunch + Afternoon Snack + Dinner** every weekday across all 4 weeks of May 2026,
with pregnancy-friendly nutrition notes and toddler tips throughout.

## Features

- 4 weeks of curated meals (Mon–Fri · 3 meals/day)
- Click any meal card to view the full recipe, ingredients, and steps
- Weekly Sunday meal-prep checklist
- Collapsible weekly shopping list organised by category
- **🌐 English / Español** language toggle — switches all UI labels and day names
- Fully responsive — mobile, tablet, and desktop
- Zero dependencies — pure HTML, CSS, and JavaScript

## Hosting on GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under *Source*: **Deploy from a branch → main (root)**
4. Click **Save** — live at `https://<username>.github.io/<repo>/`

## File Structure

| File | Purpose |
|------|---------|
| `index.html` | HTML shell — structure only, no inline styles or scripts |
| `style.css` | All styles; edit **CSS variables at the top** to retheme |
| `app.js` | Meal data, EN/ES translations, and all UI logic |
| `README.md` | This file |

## Customising

**Colors** — open `style.css` and edit the `:root` block at the top.
Every color in the app flows from those variables; one change, whole site updates.

**Meals / Recipes** — edit the `data` object in `app.js`.
Each week has `days[]` with `meals[]`, each meal has `ing`, `steps`, and an optional `tip`.

**Translations** — edit the `i18n` object at the top of `app.js`.
Add more languages by extending the object and updating `toggleLang()`.
