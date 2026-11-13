/*
 * Home page: renders the catalog as cards (default) or a compact list,
 * with search. Load after catalog.js and site.js.
 */
(function () {
  'use strict';
  const XP = window.XP, CAT = XP.catalog, esc = XP.esc;
  const VKEY = 'xp-view';
  const $ = s => document.querySelector(s);
  const content = $('#content'), q = $('#q'), empty = $('#empty');

  $('#siteTitle').textContent = CAT.site.title;
  $('#siteTagline').textContent = CAT.site.tagline || '';
  document.title = CAT.site.title;

  let view = 'cards';
  try { if (localStorage.getItem(VKEY) === 'list') view = 'list'; } catch (e) {}

  const thumbSrc = t => XP.url(`assets/thumbs/${t.id}-${XP.effectiveTheme()}.png`);

  // groups: each series in order, then the topics not in any series
  function groups(c) {
    const out = [], used = new Set();
    (c.series || []).forEach(s => {
      const topics = s.topics.map(id => c.topics.find(t => t.id === id)).filter(Boolean);
      topics.forEach(t => used.add(t.id));
      out.push({series: s, topics});
    });
    const rest = c.topics.filter(t => !used.has(t.id));
    if (rest.length) out.push({series: null, topics: rest});
    return out;
  }

  function matches(t, c, s, terms) {
    if (!terms.length) return true;
    const hay = [t.title, t.short, t.summary, (t.tags || []).join(' '), c.title, s ? s.title : ''].join(' ').toLowerCase();
    return terms.every(w => hay.includes(w));
  }

  function cardHTML(t, part) {
    return `<li><a class="card" href="${XP.url(t.path)}">
      <div class="thumb"><span class="ph" aria-hidden="true">${esc((t.short || t.title).charAt(0))}</span>
        <img src="${thumbSrc(t)}" alt="" loading="lazy" data-thumb="${esc(t.id)}" onerror="this.remove()">
        ${part ? `<span class="part">Part ${part}</span>` : ''}</div>
      <div class="card-body"><h4>${esc(t.title)}</h4><p>${esc(t.summary)}</p>
        ${(t.tags || []).length ? `<div class="tags">${t.tags.slice(0, 3).map(g => `<span>${esc(g)}</span>`).join('')}</div>` : ''}</div>
    </a></li>`;
  }
  function rowHTML(t, part) {
    return `<li>${part ? `<span class="num">${part}</span>` : ''}<a href="${XP.url(t.path)}">${esc(t.title)}</a><p>${esc(t.summary)}</p></li>`;
  }

  function render() {
    const terms = q.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    let shown = 0, html = '';
    CAT.categories.forEach(c => {
      let body = '';
      const gs = groups(c), multi = gs.length > 1;
      gs.forEach(g => {
        const s = g.series;
        const items = g.topics.map((t, i) => ({t, part: s ? i + 1 : 0})).filter(x => matches(x.t, c, s, terms));
        if (!items.length) return;
        shown += items.length;
        let head = '';
        if (s) head = `<div class="group-head"><h3>${esc(s.title)}</h3><span class="meta">${g.topics.length} parts · read in order</span></div>${s.blurb ? `<p class="blurb">${esc(s.blurb)}</p>` : ''}`;
        else if (multi) head = `<div class="group-head"><h3>More in ${esc(c.title)}</h3></div>`;
        const list = view === 'cards'
          ? `<ul class="grid">${items.map(x => cardHTML(x.t, x.part)).join('')}</ul>`
          : `<${s ? 'ol' : 'ul'} class="list${s ? '' : ' unordered'}">${items.map(x => rowHTML(x.t, x.part)).join('')}</${s ? 'ol' : 'ul'}>`;
        body += `<div class="group">${head}${list}</div>`;
      });
      if (body) html += `<section class="cat" id="${esc(c.id)}"><h2>${esc(c.title)}</h2>${c.blurb ? `<p class="blurb">${esc(c.blurb)}</p>` : ''}${body}</section>`;
    });
    content.innerHTML = html;
    empty.hidden = shown > 0;
    document.body.dataset.view = view;
    document.querySelectorAll('.views button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.view === view)));
  }

  // category shortcuts, only worth showing once there is more than one
  if (CAT.categories.length > 1) {
    const j = $('#jump');
    j.innerHTML = CAT.categories.map(c => `<a href="#${esc(c.id)}">${esc(c.title)}</a>`).join('');
    j.hidden = false;
  }

  document.querySelectorAll('.views button').forEach(b => b.addEventListener('click', () => {
    view = b.dataset.view;
    try { localStorage.setItem(VKEY, view); } catch (e) {}
    render();
  }));
  q.addEventListener('input', render);
  document.addEventListener('xp-themechange', () => {
    document.querySelectorAll('img[data-thumb]').forEach(img => { img.src = thumbSrc(XP.byId(img.dataset.thumb)); });
  });

  render();
  // keep a #category link working after the content is rendered
  if (location.hash) { const t = document.getElementById(decodeURIComponent(location.hash.slice(1))); if (t) t.scrollIntoView(); }
})();
