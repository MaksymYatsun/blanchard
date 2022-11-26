document.addEventListener("DOMContentLoaded", () => {
  let eventsSlider = new Swiper('.js-projects-swiper', {
    speed: 400,
    spaceBetween: 50,
    navigation: {
      nextEl: ".projects-next",
      prevEl: ".projects-prev"
    },
    autoplay: {
      delay: 1000,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    }
  });
});
