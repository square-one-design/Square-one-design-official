/* ---------- Projects gallery ----------
   Photos live in the "projects" folder. The list of photos, their titles and
   descriptions is in projects.json — see README.md for how to add one. */
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var gallery = $('gallery'), empty = $('empty');
  var items = [];
  var lbIndex = 0;

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function render() {
    gallery.textContent = '';
    empty.hidden = items.length > 0;
    items.forEach(function (p, i) {
      var fig = el('figure', 'shot');
      var btn = el('button', 'shot-img');
      btn.type = 'button';
      btn.setAttribute('aria-label', 'View larger' + (p.title ? ': ' + p.title : ''));
      var img = el('img');
      img.src = p.file;
      img.alt = p.title || 'Project photo';
      img.loading = 'lazy';
      btn.appendChild(img);
      btn.addEventListener('click', function () { openLightbox(i); });
      fig.appendChild(btn);
      if (p.title || p.caption) {
        var cap = el('figcaption');
        if (p.title) cap.appendChild(el('h3', null, p.title));
        if (p.caption) cap.appendChild(el('p', null, p.caption));
        fig.appendChild(cap);
      }
      gallery.appendChild(fig);
    });
  }

  /* lightbox */
  var lb = $('lightbox');
  function showLb() {
    var p = items[lbIndex]; if (!p) return;
    $('lb-img').src = p.file;
    $('lb-img').alt = p.title || 'Project photo';
    $('lb-title').textContent = p.title || '';
    $('lb-caption').textContent = p.caption || '';
    $('lb-prev').disabled = $('lb-next').disabled = items.length < 2;
  }
  function openLightbox(i) { lbIndex = i; showLb(); lb.hidden = false; $('lb-close').focus(); }
  function closeLightbox() { lb.hidden = true; }
  function step(d) { lbIndex = (lbIndex + d + items.length) % items.length; showLb(); }
  $('lb-close').addEventListener('click', closeLightbox);
  $('lb-prev').addEventListener('click', function () { step(-1); });
  $('lb-next').addEventListener('click', function () { step(1); });
  lb.addEventListener('click', function (e) { if (e.target === lb || e.target.classList.contains('lb-stage')) closeLightbox(); });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') step(-1);
    else if (e.key === 'ArrowRight') step(1);
  });

  /* load the photo list */
  fetch('projects.json', { cache: 'no-cache' })
    .then(function (r) { if (!r.ok) throw new Error('projects.json not found'); return r.json(); })
    .then(function (data) {
      items = (data && Array.isArray(data.projects) ? data.projects : []).filter(function (p) { return p && p.file; });
      render();
    })
    .catch(function (err) {
      console.warn('Could not load projects.json:', err);
      items = [];
      render();
    });
})();
