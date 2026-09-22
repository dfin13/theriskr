/* Progressive enhancement only. With JS off, every element is visible and static. */
(function () {
  'use strict';
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Sticky header hairline */
  var head = document.querySelector('.site-head');
  if (head && 'IntersectionObserver' in window) {
    var sentinel = document.createElement('div');
    sentinel.style.cssText = 'position:absolute;top:0;height:1px;width:1px;';
    document.body.prepend(sentinel);
    new IntersectionObserver(function (e) {
      head.classList.toggle('is-stuck', !e[0].isIntersecting);
    }).observe(sentinel);
  }

  if (reduce) return;

  /* Section reveals */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    document.querySelectorAll('[data-reveal]').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('[data-reveal]').forEach(function (el) { el.classList.add('is-in'); });
  }

  /* Hero parallax drift — transform only, rAF-throttled */
  var stage = document.querySelector('[data-parallax]');
  if (!stage || !window.requestAnimationFrame) return;
  var ticking = false;
  function frame() {
    ticking = false;
    if (window.innerWidth < 1000) { stage.style.transform = ''; return; }
    var y = window.scrollY || window.pageYOffset;
    var d = Math.max(-40, Math.min(40, y * 0.055));
    stage.style.transform = 'translate3d(0,' + (-d).toFixed(2) + 'px,0)';
  }
  addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(frame); }
  }, { passive: true });
  addEventListener('resize', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(frame); }
  }, { passive: true });
  frame();
})();
