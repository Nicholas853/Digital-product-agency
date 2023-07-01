// Отримання посилань на елементи
const navbarCollapse = document.getElementById('navbarSupportedContent');
const navbarToggler = document.querySelector('.navbar-toggler');

// Додавання обробника подій для натискання на бургер
navbarToggler.addEventListener('click', function() {
  navbarCollapse.classList.toggle('show');
});

//Ініціалізія Swiper
new Swiper('.image-slider', {
  //Стрілки
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
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
  // breakpoints: {
  //   // 1024: {
  //   //   slidesPerView: 3,
  //   // },
  //   // 768: {
  //   //   slidesPerView: 2,
  //   // },
  //   1024: {
  //     slidesPerView: 3,
  // //   },
  // },
});








