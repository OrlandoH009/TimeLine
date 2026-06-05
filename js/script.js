// Centralized UI script: set active nav button based on filename
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    const file = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-btn').forEach(btn=>{
      const code = btn.getAttribute('onclick') || '';
      if (code.includes(file)) btn.classList.add('active');
      else btn.classList.remove('active');
    });
  });
})();
