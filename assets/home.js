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

  // collapsed categories and series, remembered per browser ("cat:<id>", "series:<cat>/<id>")
  const CKEY = 'xp-collapsed';
  let collapsed = new Set();
  try { collapsed = new Set(JSON.parse(localStorage.getItem(CKEY) || '[]')); } catch (e) {}
  const saveCollapsed = () => { try { localStorage.setItem(CKEY, JSON.stringify([...collapsed])); } catch (e) {} };
  const CHEV = '<svg class="chev" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const plural = (n, w) => `${n} ${w}${n === 1 ? '' : 's'}`;
  // a heading that toggles the block below it; while searching everything stays open
  function toggle(tag, key, label, bodyId, searching) {
    const open = searching || !collapsed.has(key);
    return `<${tag} class="tog-h"><button type="button" class="tog" data-key="${esc(key)}" aria-expanded="${open}" aria-controls="${bodyId}"${searching ? ' disabled' : ''}>${CHEV}<span>${esc(label)}</span></button></${tag}>`;
  }

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
</div>
      <div class="card-body">${part ? `<span class="part">Part ${part}</span>` : ''}<h4>${esc(t.title)}</h4><p>${esc(t.summary)}</p>
        ${(t.tags || []).length ? `<div class="tags">${t.tags.slice(0, 3).map(g => `<span>${esc(g)}</span>`).join('')}</div>` : ''}</div>
    </a></li>`;
  }
  function rowHTML(t, part) {
    return `<li>${part ? `<span class="num">${part}</span>` : ''}<a href="${XP.url(t.path)}">${esc(t.title)}</a><p>${esc(t.summary)}</p></li>`;
  }

  function render() {
    const terms = q.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    let shown = 0, html = '';
    const searching = terms.length > 0;
    CAT.categories.forEach(c => {
      let body = '', count = 0;
      const gs = groups(c), multi = gs.length > 1;
      gs.forEach(g => {
        const s = g.series;
        const items = g.topics.map((t, i) => ({t, part: s ? i + 1 : 0})).filter(x => matches(x.t, c, s, terms));
        if (!items.length) return;
        shown += items.length; count += items.length;
        const list = view === 'cards'
          ? `<ul class="grid">${items.map(x => cardHTML(x.t, x.part)).join('')}</ul>`
          : `<${s ? 'ol' : 'ul'} class="list${s ? '' : ' unordered'}">${items.map(x => rowHTML(x.t, x.part)).join('')}</${s ? 'ol' : 'ul'}>`;
        if (s) {
          const key = `series:${c.id}/${s.id}`, id = `gb-${c.id}-${s.id}`, open = searching || !collapsed.has(key);
          body += `<div class="group"><div class="group-head">${toggle('h3', key, s.title, id, searching)}<span class="meta">${plural(g.topics.length, 'part')} · read in order</span></div>` +
            `<div class="group-body" id="${id}"${open ? '' : ' hidden'}>${s.blurb ? `<p class="blurb">${esc(s.blurb)}</p>` : ''}${list}</div></div>`;
        } else {
          body += `<div class="group">${multi ? `<div class="group-head"><h3>More in ${esc(c.title)}</h3></div>` : ''}${list}</div>`;
        }
      });
      if (!body) return;
      const key = `cat:${c.id}`, id = `cb-${c.id}`, open = searching || !collapsed.has(key);
      html += `<section class="cat" id="${esc(c.id)}"><div class="cat-head">${toggle('h2', key, c.title, id, searching)}<span class="meta">${plural(searching ? count : c.topics.length, 'explainer')}</span></div>` +
        `<div class="cat-body" id="${id}"${open ? '' : ' hidden'}>${c.blurb ? `<p class="blurb">${esc(c.blurb)}</p>` : ''}${body}</div></section>`;
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
  content.addEventListener('click', e => {
    const b = e.target.closest('button.tog'); if (!b || b.disabled) return;
    const open = b.getAttribute('aria-expanded') !== 'true';
    b.setAttribute('aria-expanded', String(open));
    document.getElementById(b.getAttribute('aria-controls')).hidden = !open;
    if (open) collapsed.delete(b.dataset.key); else collapsed.add(b.dataset.key);
    saveCollapsed();
  });
  document.addEventListener('xp-themechange', () => {
    document.querySelectorAll('img[data-thumb]').forEach(img => { img.src = thumbSrc(XP.byId(img.dataset.thumb)); });
  });

  render();
  // keep a #category link working after the content is rendered
  // (and open that category if it was collapsed)
  if (location.hash) {
    const id = decodeURIComponent(location.hash.slice(1));
    if (collapsed.delete('cat:' + id)) { saveCollapsed(); render(); }
    const t = document.getElementById(id); if (t) t.scrollIntoView();
  }
})();
