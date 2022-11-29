const burgerBtn = document.querySelector('.burger');
const burgerMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.nav__link');
const body = document.body;

burgerBtn.addEventListener('click', function() {
  burgerBtn.classList.toggle('burger--active')
  burgerMenu.classList.toggle('menu--active')
  body.classList.toggle('disabled-scroll')
});

menuLinks.forEach(function(menuBtn) {
  menuBtn.addEventListener('click', function() {
    body.classList.remove('disabled-scroll')
    burgerMenu.classList.remove('menu--active')
    burgerBtn.classList.remove('burger--active')
  });
});
