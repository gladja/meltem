const uaBtn = document.querySelector('[data-ua]');
const ruBtn = document.querySelector('[data-ru]');
const uaBtnMob = document.querySelector('[data-ua-mob]');
const ruBtnMob = document.querySelector('[data-ru-mob]');

const overlayForm = document.querySelector('[data-overlay]');
// const mobileMenu = document.querySelector('.modal__btn');
const mobileMenu = document.querySelector('.js-menu-container');
const form = document.querySelector('.js-form-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const openFormBtn = document.querySelector('.js-open-form');
const closeFormBtn = document.querySelector('.js-close-form');

const formValue = document.querySelector('.contactForm');
const formHide = document.querySelector('.form__wrap');
const formSuccess = document.querySelector('.form__success');

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
  form.classList.remove('is__open');
  overlayForm.classList.remove('backdrop');
  mobileMenu.classList.toggle('is__open');
});

openFormBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is__open');
  form.classList.toggle('is__open');

  overlayForm.classList.toggle('backdrop');
});

closeFormBtn.addEventListener('click', () => {
  form.classList.remove('is__open');
  document.body.classList.remove('backdrop');
  overlayForm.classList.remove('backdrop');
});

formValue.addEventListener('submit', e => {
  e.preventDefault();
  formHide.classList.add('send');
  formSuccess.classList.remove('send');

  setTimeout(() => {
    form.classList.remove('is__open');
    formSuccess.classList.add('send');
    overlayForm.classList.toggle('backdrop');
  }, 1000);

  setTimeout(() => {
    formValue.reset();
    formHide.classList.remove('send');
  }, 2000);
});
