import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

new Swiper('.juri', {
  modules: [ Navigation],

  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  speed: 400,

  breakpoints: {
    320: {
      width: 227,
      slidesPerView: 1,
      initialSlide: 2,
      spaceBetween: 60,
    },
    768: {
      width: 560,
      slidesPerView: 2,
      initialSlide: 0,
      spaceBetween: 40,
    },
    1366: {
      width: 1160,
      slidesPerView: 4,
      initialSlide: 0,
      spaceBetween: 40,
      simulateTouch: false,
    },
  }
});
