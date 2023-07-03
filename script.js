// Отримання посилань на елементи
const navbarCollapse = document.getElementById('navbarSupportedContent');
const navbarToggler = document.querySelector('.navbar-toggler');

// Додавання обробника подій для натискання на бургер
navbarToggler.addEventListener('click', function() {
  navbarCollapse.classList.toggle('show');
});

//Ініціалізія Swiper
new Swiper('.image-slider', {
  // Навігація
  // Булети, поточне положення, прогрессбар
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"><span class="swiper-pagination-bullet-inner"></span></span>';
    },
  },
  simulateTouch: true,
  slidesPerView: 2.3,
  spaceBetween: 153,
  loop: true,
  loopedSlides: 3,
});


document.addEventListener('DOMContentLoaded', function () {
  var hiddenElements = document.querySelectorAll('.hidden');
  console.log(hiddenElements);

  function isElementInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function handleScroll() {
      hiddenElements.forEach(function (element) {
          if (isElementInViewport(element)) {
              element.classList.add('visible');
          }
      });

      // Optional: Remove the event listener when all elements are visible
      if (document.querySelectorAll('.hidden.visible').length === hiddenElements.length) {
          window.removeEventListener('scroll', handleScroll);
      }
  }

  window.addEventListener('scroll', handleScroll);

  // Call handleScroll() once on page load
  handleScroll();
}); 







