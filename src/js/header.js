const uaBtn = document.querySelector('[data-ua]');
const ruBtn = document.querySelector('[data-ru]');
const uaBtnMob = document.querySelector('[data-ua-mob]');
const ruBtnMob = document.querySelector('[data-ru-mob]');

// const overlayMenu = document.querySelector('[data-overlay]');
// const mobileMenu = document.querySelector('.modal__btn');
const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
// const closeMenuBtn = document.querySelector('.js-close-menu');

ruBtn.addEventListener('click', () => {
  uaBtn.classList.remove('active');
  ruBtn.classList.add('active');
});
ruBtnMob.addEventListener('click', () => {
  uaBtnMob.classList.remove('active');
  ruBtnMob.classList.add('active');
});

uaBtn.addEventListener('click', () => {
  ruBtn.classList.remove('active');
  uaBtn.classList.add('active');
});

uaBtnMob.addEventListener('click', () => {
  ruBtnMob.classList.remove('active');
  uaBtnMob.classList.add('active');
});

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobileMenu.classList.remove('is__open');
});

openMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('is__open');
});
