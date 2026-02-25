# Älgamo Software AB — Website

Static marketing site for Älgamo Software AB. No build step required.

## Run locally

Open `index.html` in a browser, or use a simple server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

Then visit `http://localhost:8000`.

## Structure

- `index.html` — Single-page layout (hero, solutions, about, contact, footer)
- `styles.css` — Typography, layout, and components
- `script.js` — Smooth scroll for anchor links

## Customise

- **Email:** Update the mailto link in the CTA section (`#contact`) and any footer links.
- **Copy:** Edit sections in `index.html` to match your actual offerings and company details.
- **Colours/fonts:** Change CSS variables in `:root` in `styles.css`.
