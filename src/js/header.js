const uaBtn = document.querySelector('[data-ua]');
const ruBtn = document.querySelector('[data-ru]');

const overlayMenu = document.querySelector(".menu__overlay");
// const mobileMenu = document.querySelector(".js-menu-container");
// const openMenuBtn = document.querySelector(".js-open-menu");
// const closeMenuBtn = document.querySelector(".js-close-menu");

const 

ruBtn.addEventListener('click', () => {
  uaBtn.classList.remove('active');
  ruBtn.classList.add('active');
});

uaBtn.addEventListener('click', () => {
  ruBtn.classList.remove('active');
  uaBtn.classList.add('active');
});
