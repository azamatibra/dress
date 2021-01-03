$(function () {
  $(".header__btn").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $(".catalog").offset().top }, 1000);
    e.preventDefault();
  });
});
const swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".catalog__button-next",
    prevEl: ".catalog__button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  loop: true,
  watchOverflow: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1170: {
      slidesPerView: 3,
    },
  },
});
