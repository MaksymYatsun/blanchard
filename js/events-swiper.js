document.addEventListener("DOMContentLoaded", () => {
  const eventsSwiper = new Swiper('.js-events-swiper', {
    speed: 400,
    spaceBetween: 100,
    navigation: {
      nextEl: ".events-next",
      prevEl: ".events-prev"
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    autoplay: {
      delay: 1000,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20
      },
      440: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 27
      }
    }
  });
});
