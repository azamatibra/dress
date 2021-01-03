let burger = document.querySelector(".hamburger");

burger.addEventListener("click", (e) => {
  e.preventDefault();
  burger.classList.toggle("is-active");
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
