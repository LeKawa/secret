var btn = document.querySelector('.header-container__menu');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.modal-overlay');

btn.addEventListener('click', function() {
  modal.style.display = 'block';
});

overlay.addEventListener('click', function() {
  modal.style.display = '';
});
