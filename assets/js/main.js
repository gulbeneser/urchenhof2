// Progressive enhancements for the Urchenhof static website.
(() => {
  const header = document.getElementById('header');
  const sidePatterns = document.querySelectorAll('.side-pattern');

  const updateHeaderState = () => {
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 70);
    }

    sidePatterns.forEach((el, index) => {
      el.style.transform = `translateY(${window.scrollY * (index ? 0.035 : -0.025)}px)`;
    });
  };

  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });

  const revealItems = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    revealItems.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((el) => observer.observe(el));
})();
