document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const hamburger = document.getElementById('hamburger');
  const navUl = document.querySelector('.nav ul');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', function() {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      // Scroll hacia abajo
      header.classList.add('hidden');
    } else {
      // Scroll hacia arriba
      header.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
  });

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navUl.classList.toggle('active');
  });
});