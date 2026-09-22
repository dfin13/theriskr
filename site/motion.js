// One entrance, then no animation work. Content remains visible without JavaScript.
const stage = document.querySelector('.device-stage');
if (stage && 'IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      stage.classList.add('is-visible');
      observer.disconnect();
    }
  }, { threshold: 0.25 });
  observer.observe(stage);
}
