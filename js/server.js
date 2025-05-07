const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.ul-navbar');

burger.addEventListener('click', () => {
  menu.classList.toggle('active');
});
