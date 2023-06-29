// Отримання посилань на елементи
const navbarCollapse = document.getElementById('navbarSupportedContent');
const navbarToggler = document.querySelector('.navbar-toggler');

// Додавання обробника подій для натискання на бургер
navbarToggler.addEventListener('click', function() {
  navbarCollapse.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function() {
  var carouselContainer = document.querySelector(".carousel-container");
  var carouselItems = carouselContainer.querySelectorAll(".carousel-item");
  var carouselArrowLeft = carouselContainer.querySelector(".left-arrow");
  var carouselArrowRight = carouselContainer.querySelector(".right-arrow");
  var activeIndex = 0;

  carouselArrowLeft.addEventListener("click", function() {
    rotateCarousel("left");
  });

  carouselArrowRight.addEventListener("click", function() {
    rotateCarousel("right");
  });

  showInitialItems();

  function showInitialItems() {
    carouselItems[activeIndex].classList.add("visible-left");
    carouselItems[(activeIndex + 1) % carouselItems.length].classList.add("active");
    carouselItems[(activeIndex + 2) % carouselItems.length].classList.add("visible-right");
  }

  function rotateCarousel(direction) {
    carouselItems.forEach(function(item) {
      item.classList.remove("active", "visible-left", "visible-right");
    });

    if (direction === "left") {
      activeIndex = (activeIndex - 1 + carouselItems.length) % carouselItems.length;
    } else {
      activeIndex = (activeIndex + 1) % carouselItems.length;
    }

    carouselItems[(activeIndex - 1 + carouselItems.length) % carouselItems.length].classList.add("visible-left");
    carouselItems[activeIndex].classList.add("active");
    carouselItems[(activeIndex + 1) % carouselItems.length].classList.add("visible-right");
  }
});






