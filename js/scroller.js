(function(){
  function initScrollAnimations() {
    document.querySelectorAll('.decade-card').forEach((el, index) => {
      if (!el.classList.contains('scroll-animate')) {
        el.classList.add('scroll-animate', 'stagger-item');
        el.style.setProperty('--stagger-index', index);
      }
    });

    document.querySelectorAll('.milestone').forEach((el) => {
      if (!el.classList.contains('scroll-animate')) {
        el.classList.add('scroll-animate');
      }
    });

    document.querySelectorAll('.timeline').forEach((el) => {
      if (!el.classList.contains('scroll-animate')) {
        el.classList.add('scroll-animate');
      }
    });

    document.querySelectorAll('.decade-page-header').forEach((el) => {
      if (!el.classList.contains('scroll-animate')) {
        el.classList.add('scroll-animate');
      }
    });

    document.querySelectorAll('.home-kicker, .home-title, .home-sub').forEach((el) => {
      if (!el.classList.contains('scroll-animate')) {
        el.classList.add('scroll-animate');
      }
    });

    const decadeGrid = document.querySelector('.decade-grid');
    if (decadeGrid && !decadeGrid.classList.contains('scroll-animate')) {
      decadeGrid.classList.add('scroll-animate');
    }
  }

  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, observerOptions);

  function startObserving() {
    document.querySelectorAll('.scroll-animate').forEach(el => {
      observer.observe(el);
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    initScrollAnimations();
    startObserving();
  });
})();
