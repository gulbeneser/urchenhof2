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

// Price calculator for the home page and accommodation detail pages.
(() => {
  const formatEuro = (value) => new Intl.NumberFormat('de-AT', { style: 'currency', currency: 'EUR' }).format(value);

  document.querySelectorAll('[data-price-calculator]').forEach((form) => {
    const unit = form.querySelector('[data-price-unit]');
    const guests = form.querySelector('[data-price-guests]');
    const nights = form.querySelector('[data-price-nights]');
    const result = form.querySelector('[data-price-result]');
    const note = form.querySelector('[data-price-note]');
    const mail = form.querySelector('[data-price-mail]');

    const calculate = () => {
      const selected = unit.selectedOptions[0];
      const price = Number(selected.dataset.price || 0);
      const mode = selected.dataset.mode;
      const min = Number(selected.dataset.min || 1);
      const max = Number(selected.dataset.max || 99);
      let guestCount = Number(guests.value || min);
      const nightCount = Math.max(1, Number(nights.value || 1));

      guestCount = Math.min(Math.max(guestCount, min), max);
      guests.value = guestCount;
      guests.min = min;
      guests.max = max;

      const total = mode === 'person' ? price * guestCount * nightCount : price * nightCount;
      const basis = mode === 'person'
        ? `${guestCount} Personen × ${nightCount} Nächte × ${formatEuro(price)}`
        : `${nightCount} Nächte × ${formatEuro(price)} pro Ferienwohnung`;
      const accommodation = selected.textContent.split('·')[0].trim();

      result.textContent = formatEuro(total);
      note.textContent = `Unverbindliche Berechnung: ${basis}. Belegung laut Unterkunft: ${min} - ${max} Personen.`;
      mail.href = `mailto:info@pension-urchenhof.at?subject=${encodeURIComponent(`Anfrage ${accommodation}`)}&body=${encodeURIComponent(`Gewünschte Unterkunft: ${accommodation}\nPersonen: ${guestCount}\nNächte: ${nightCount}\nUnverbindliche Orientierung: ${formatEuro(total)}\n`)}`;
    };

    ['change', 'input'].forEach((eventName) => form.addEventListener(eventName, calculate));
    calculate();
  });
})();
