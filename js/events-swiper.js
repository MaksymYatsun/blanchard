document.addEventListener("DOMContentLoaded", () => {
  const eventsSwiper = new Swiper('.js-events-swiper', {
    speed: 400,
    spaceBetween: 100,
    navigation: {
      nextEl: ".events-next",
      prevEl: ".events-prev"
    },
    autoplay: {
      delay: 1000,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    }
  });
});
