import Swiper, { Navigation, Pagination, EffectFade, Scrollbar } from 'swiper';

const swiperProjects = new Swiper('.slider__swiper', {
  slidesPerView: "auto",
  spaceBetween: 32,
  centeredSlides: true,
  speed: 1000,
  modules: [Navigation, Scrollbar, Pagination, EffectFade],
  pagination: {
    clickable: true,
    el: '.slider .swiper-pagination',
  },

  draggable: true,
  grabCursor: true,
  navigation: {
    clickable: true,
    nextEl: '.slider__nav .btn--next',
    prevEl: '.slider__nav .btn--prev',
  },
});

