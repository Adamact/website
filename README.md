# Website

Static site (HTML, CSS, JS). This repo is intended for GitHub Pages (see `CNAME`).

## Host locally

Serve the project folder with any static file server so links and assets load correctly (avoid opening `index.html` directly with `file://`).

**Option 1 — Python (no install if you have Python):**

```bash
# Python 3
python -m http.server 8000
```

Then open **http://localhost:8000** in your browser.

**Option 2 — Node (npx):**

```bash
npx serve .
```

Then open the URL shown in the terminal (e.g. http://localhost:3000).

**Option 3 — VS Code / Cursor:**  
Use an extension like “Live Server” and “Open with Live Server” on `index.html`.
