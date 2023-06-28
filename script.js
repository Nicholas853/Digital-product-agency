// Отримання посилань на елементи
const navbarCollapse = document.getElementById('navbarSupportedContent');
const navbarToggler = document.querySelector('.navbar-toggler');

// Додавання обробника подій для натискання на бургер
navbarToggler.addEventListener('click', function() {
  navbarCollapse.classList.toggle('show');
});




