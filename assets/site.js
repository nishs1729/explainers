/*
 * Site-wide chrome shared by every page: the theme switch, the top bar and,
 * on explainer pages, the series / "more in this category" navigation.
 * Pages keep their own styles; this file only adds elements styled by site.css.
 * Load it after catalog.js, both with `defer`.
 */
(function () {
  'use strict';
  const root = document.documentElement;
  const KEY = 'xp-theme';
  const SCRIPT = document.currentScript;
  const BASE = new URL('../', SCRIPT ? SCRIPT.src : location.href);   // site root (this file lives in assets/)
  const CAT = window.EXPLAINERS || {site: {title: 'Explainers'}, categories: []};
  const mq = window.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : null;

  /* ---------- theme ---------- */
  function pref() { try { const t = localStorage.getItem(KEY); return t === 'light' || t === 'dark' ? t : 'auto'; } catch (e) { return 'auto'; } }
  function effective() { const p = pref(); return p !== 'auto' ? p : (mq && mq.matches ? 'dark' : 'light'); }
  function apply(p) {
    if (p === 'light' || p === 'dark') root.setAttribute('data-theme', p); else root.removeAttribute('data-theme');
  }
  function setTheme(p) {
    try { if (p === 'auto') localStorage.removeItem(KEY); else localStorage.setItem(KEY, p); } catch (e) {}
    apply(p); syncButtons(); fire();
  }
  function fire() { document.dispatchEvent(new CustomEvent('xp-themechange', {detail: {theme: effective()}})); }
  if (mq) (mq.addEventListener ? mq.addEventListener('change', () => { if (pref() === 'auto') fire(); }) : mq.addListener(() => { if (pref() === 'auto') fire(); }));
  // another tab changed the theme
  window.addEventListener('storage', e => { if (e.key === KEY) { apply(pref()); syncButtons(); fire(); } });
  apply(pref());

  const ICONS = {
    auto: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="5.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M8 2.5a5.5 5.5 0 0 1 0 11z" fill="currentColor"/></svg>',
    light: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="3" fill="currentColor"/><g stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M8 1.5v1.6M8 12.9v1.6M1.5 8h1.6M12.9 8h1.6M3.4 3.4l1.1 1.1M11.5 11.5l1.1 1.1M3.4 12.6l1.1-1.1M11.5 4.5l1.1-1.1"/></g></svg>',
    dark: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M13.6 10.2A6 6 0 0 1 5.8 2.4a6 6 0 1 0 7.8 7.8z" fill="currentColor"/></svg>'
  };
  const LABEL = {auto: 'Match device', light: 'Light', dark: 'Dark'};
  function themeSwitch() {
    const g = document.createElement('div');
    g.className = 'xs-theme'; g.setAttribute('role', 'group'); g.setAttribute('aria-label', 'Color theme');
    ['auto', 'light', 'dark'].forEach(t => {
      const b = document.createElement('button');
      b.type = 'button'; b.dataset.xsTheme = t; b.innerHTML = ICONS[t];
      b.title = LABEL[t] + ' theme'; b.setAttribute('aria-label', LABEL[t] + ' theme');
      b.addEventListener('click', () => setTheme(t));
      g.appendChild(b);
    });
    return g;
  }
  function syncButtons() {
    const p = pref();
    document.querySelectorAll('[data-xs-theme]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.xsTheme === p)));
  }

  /* ---------- catalog lookups ---------- */
  const url = path => new URL(path, BASE).href;
  const strip = h => h.split('#')[0].split('?')[0].replace(/\/index\.html$/, '/');
  const here = strip(location.href);
  let current = null, category = null;
  CAT.categories.forEach(c => c.topics.forEach(t => { if (strip(url(t.path)) === here) { current = t; category = c; } }));
  const byId = id => { for (const c of CAT.categories) for (const t of c.topics) if (t.id === id) return t; return null; };
  const seriesOf = (c, t) => (c.series || []).find(s => s.topics.includes(t.id)) || null;

  function el(tag, cls, html) { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  const esc = s => String(s).replace(/[&<>"]/g, ch => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[ch]));

  /* ---------- top bar ---------- */
  function topBar() {
    const nav = el('nav', 'xs-bar'); nav.setAttribute('aria-label', 'Site');
    const inner = el('div', 'xs-in');
    const crumbs = el('div', 'xs-crumbs');
    crumbs.appendChild(el('a', 'xs-home', esc(CAT.site.title))).href = url('index.html');
    if (category) {
      crumbs.appendChild(el('span', 'xs-sep', '/')).setAttribute('aria-hidden', 'true');
      crumbs.appendChild(el('a', null, esc(category.title))).href = url('index.html#' + category.id);
      const s = seriesOf(category, current);
      if (s) crumbs.appendChild(el('span', 'xs-step', `${esc(s.title)} · ${s.topics.indexOf(current.id) + 1} of ${s.topics.length}`));
    }
    inner.appendChild(crumbs);
    inner.appendChild(themeSwitch());
    nav.appendChild(inner);
    document.body.insertBefore(nav, document.body.firstChild);
  }

  /* ---------- bottom navigation on explainer pages ---------- */
  function bottomNav() {
    const nav = el('nav', 'xs-next'); nav.setAttribute('aria-label', 'More explainers');
    const inner = el('div', 'xs-in');
    const s = seriesOf(category, current);
    if (s) {
      const i = s.topics.indexOf(current.id);
      inner.appendChild(el('p', 'xs-kick', `Series · ${esc(s.title)}`));
      const ol = el('ol', 'xs-steps');
      s.topics.forEach((id, j) => {
        const t = byId(id); if (!t) return;
        const li = el('li', j === i ? 'is-current' : '');
        if (j === i) li.innerHTML = `<span class="xs-n">${j + 1}</span><span>${esc(t.short || t.title)}</span>`;
        else { const a = el('a', null, `<span class="xs-n">${j + 1}</span><span>${esc(t.short || t.title)}</span>`); a.href = url(t.path); li.appendChild(a); }
        if (j === i) li.setAttribute('aria-current', 'page');
        ol.appendChild(li);
      });
      inner.appendChild(ol);
      const pn = el('div', 'xs-pn');
      const card = (t, dir) => {
        const a = el('a', 'xs-card xs-c-' + dir);
        a.href = url(t.path);
        a.innerHTML = `<span class="xs-dir">${dir === 'prev' ? '← Previous' : 'Next →'}</span><strong>${esc(t.title)}</strong><span class="xs-sum">${esc(t.summary)}</span>`;
        return a;
      };
      if (i > 0) pn.appendChild(card(byId(s.topics[i - 1]), 'prev'));
      if (i < s.topics.length - 1) pn.appendChild(card(byId(s.topics[i + 1]), 'next'));
      else { const a = el('a', 'xs-card xs-c-next'); a.href = url('index.html'); a.innerHTML = `<span class="xs-dir">End of the series</span><strong>All explainers</strong><span class="xs-sum">Back to the full collection.</span>`; pn.appendChild(a); }
      inner.appendChild(pn);
    }
    const inSeries = new Set(s ? s.topics : []);
    const more = category.topics.filter(t => t.id !== current.id && !inSeries.has(t.id));
    if (more.length) {
      inner.appendChild(el('p', 'xs-kick', `More in ${esc(category.title)}`));
      const ul = el('ul', 'xs-more');
      more.forEach(t => { const li = el('li'); li.innerHTML = `<a href="${url(t.path)}">${esc(t.title)}</a><span>${esc(t.summary)}</span>`; ul.appendChild(li); });
      inner.appendChild(ul);
    }
    if (!s && !more.length) return;
    nav.appendChild(inner);
    const main = document.querySelector('main');
    if (main && main.parentNode) main.parentNode.insertBefore(nav, main.nextSibling); else document.body.appendChild(nav);
  }

  function init() {
    topBar();
    if (current) bottomNav();
    syncButtons();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();

  window.XP = {catalog: CAT, base: BASE, url, effectiveTheme: effective, setTheme, byId, seriesOf, esc};
})();
