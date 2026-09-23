/**
 * "What's next" vote widget for the Dive / MMA cards. Talks to the Rhythm
 * Swimmin' Worker's public /vote endpoint. Fails silently: if the API is
 * unreachable the cards just show the plain vote button with no tally,
 * which is the same thing a first-time visitor sees anyway.
 */
(function () {
  var API = 'https://rhythm-swimmin-lb.theriskr.workers.dev';
  var STORAGE_KEY = 'theriskr-vote-id';

  function clientId() {
    try {
      var id = localStorage.getItem(STORAGE_KEY);
      if (id && /^[0-9a-f]{32}$/.test(id)) return id;
      var bytes = new Uint8Array(16);
      (window.crypto || {}).getRandomValues && crypto.getRandomValues(bytes);
      id = Array.prototype.map.call(bytes, function (b) {
        return (b || Math.floor(Math.random() * 256)).toString(16).padStart(2, '0');
      }).join('');
      if (!/^[0-9a-f]{32}$/.test(id)) return null;
      localStorage.setItem(STORAGE_KEY, id);
      return id;
    } catch (e) {
      return null;
    }
  }

  var cards = Array.prototype.slice.call(document.querySelectorAll('[data-vote]'));
  if (!cards.length) return;
  var id = clientId();

  function render(counts, total, mine) {
    cards.forEach(function (card) {
      var title = card.getAttribute('data-vote');
      var btn = card.querySelector('[data-vote-btn]');
      var result = card.querySelector('[data-vote-result]');
      var fill = card.querySelector('[data-vote-fill]');
      var pct = card.querySelector('[data-vote-pct]');
      var totalEl = card.querySelector('[data-vote-total]');
      var n = (counts && counts[title]) || 0;
      var pctVal = total > 0 ? Math.round((n / total) * 100) : 0;
      if (fill) fill.style.width = pctVal + '%';
      if (pct) pct.textContent = pctVal + '%';
      if (totalEl) totalEl.textContent = total + (total === 1 ? ' vote' : ' votes');
      if (result) result.hidden = !total;
      var isMine = mine === title;
      card.setAttribute('data-mine', isMine ? 'true' : 'false');
      if (btn) {
        btn.setAttribute('aria-pressed', isMine ? 'true' : 'false');
        var label = btn.querySelector('.vote-btn-label');
        if (label) label.textContent = isMine ? 'Voted' : 'Vote ' + (title === 'dive' ? 'Dive' : 'MMA');
      }
    });
  }

  function fetchTally() {
    if (!id) return;
    var url = API + '/vote?client=' + encodeURIComponent(id);
    fetch(url, { credentials: 'omit' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (data && data.ok) render(data.counts, data.total, data.mine);
      })
      .catch(function () { /* offline/unreachable: leave the plain buttons as-is */ });
  }

  function castVote(title, btn) {
    if (!id || !title) return;
    btn.disabled = true;
    // Optimistic: mark this one chosen right away.
    cards.forEach(function (card) {
      card.setAttribute('data-mine', card.getAttribute('data-vote') === title ? 'true' : 'false');
    });
    fetch(API + '/vote', {
      method: 'POST',
      credentials: 'omit',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ client: id, title: title }),
    })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (data && data.ok) render(data.counts, data.total, data.mine);
      })
      .catch(function () { /* keep the optimistic state; a later load will reconcile */ })
      .finally(function () { btn.disabled = false; });
  }

  cards.forEach(function (card) {
    var title = card.getAttribute('data-vote');
    var btn = card.querySelector('[data-vote-btn]');
    if (!btn) return;
    btn.addEventListener('click', function () { castVote(title, btn); });
  });

  fetchTally();
})();
