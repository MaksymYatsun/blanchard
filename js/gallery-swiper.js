document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".slides-container", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".gallery .gallery-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".gallery-next",
      prevEl: ".gallery-prev"
    },

    breakpoints: {
      769: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2
      },

      1025: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  });
});
