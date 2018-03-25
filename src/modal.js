var btn = document.querySelector('.header-container__menu');
var modal = document.querySelector('.modal');
var back = document.querySelector('.header-container__menu__link__back');
var overlay = document.querySelector('.modal-overlay');
var contact = document.querySelector('.header-container__menu__link');

btn.addEventListener('click', function() {
  modal.style.display = 'block';
  back.style.display = 'block';
  contact.style.display = 'none';

});

overlay.addEventListener('click', function() {
  modal.style.display = '';
  back.style.display = '';
  contact.style.display = 'block';
});
