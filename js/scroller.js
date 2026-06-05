// Scroll Animation with Intersection Observer
(function(){
  // Add scroll-animate class to elements on page load
  function initScrollAnimations() {
    // Animate decade cards with stagger
    document.querySelectorAll('.decade-card').forEach((el, index) => {
      if (!el.classList.contains('scroll-animate')) {
        el.classList.add('scroll-animate', 'stagger-item');
        el.style.setProperty('--stagger-index', index);
      }
    });
    
    // Animate milestone items
    document.querySelectorAll('.milestone').forEach((el) => {
      if (!el.classList.contains('scroll-animate')) {
        el.classList.add('scroll-animate');
      }
    });
    
    // Animate timeline itself
    document.querySelectorAll('.timeline').forEach((el) => {
      if (!el.classList.contains('scroll-animate')) {
        el.classList.add('scroll-animate');
      }
    });
    
    // Animate page headers
    document.querySelectorAll('.decade-page-header').forEach((el) => {
      if (!el.classList.contains('scroll-animate')) {
        el.classList.add('scroll-animate');
      }
    });
    
    // Animate home page elements
    document.querySelectorAll('.home-kicker, .home-title, .home-sub').forEach((el) => {
      if (!el.classList.contains('scroll-animate')) {
        el.classList.add('scroll-animate');
      }
    });
    
    // Animate decade grid container
    const decadeGrid = document.querySelector('.decade-grid');
    if (decadeGrid && !decadeGrid.classList.contains('scroll-animate')) {
      decadeGrid.classList.add('scroll-animate');
    }
  }
  
  // Create Intersection Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, observerOptions);
  
  // Observe all scroll-animate elements
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
