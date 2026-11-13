# explainers
Visual explainers of topics of my interest

Open `index.html` for the full collection. Everything is static HTML, so the
site works straight from the repo on GitHub Pages or opened locally.

## Layout

```
index.html              home page: cards or list view, search
assets/
  catalog.js            the list of every explainer (the single source of truth)
  site.js, site.css     top bar, light/dark/auto theme switch, series navigation
  home.js               renders the home page from the catalog
  thumbs/               card images, <id>-light.png and <id>-dark.png
probability/            one folder per category, one file per topic
  bernoulli.html …
tools/
  check.py              checks catalog, files and every link/#anchor
  thumbs.py             regenerates the card images with headless Chrome
```

Each explainer is a self-contained page with its own styles. It only needs to
define the usual theme tokens (`--bg`, `--ink`, `--accent`, …, with the
`[data-theme="dark"]` / `[data-theme="light"]` overrides) and redraw its
charts when the `data-theme` attribute on `<html>` changes.

## Adding an explainer

1. Write the page at `<category>/<topic>.html`. Link other pages relatively
   (`binomial.html`, `../probability/binomial.html`).
2. Add these lines just before `</head>`:
   ```html
   <script>try{var t=localStorage.getItem('xp-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}</script>
   <link rel="stylesheet" href="../assets/site.css">
   <script src="../assets/catalog.js" defer></script>
   <script src="../assets/site.js" defer></script>
   ```
3. Add an entry to `assets/catalog.js` under its category (a new category is
   a new object in `categories`). To make it part of a reading order, add its
   id to a `series`; otherwise it shows as a standalone topic.
4. `python3 tools/thumbs.py <id>` to make its card images (needs Chrome and Pillow).
5. `python3 tools/check.py` and fix anything it reports.
