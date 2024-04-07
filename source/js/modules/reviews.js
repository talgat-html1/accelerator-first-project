import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
const reviewsSlider = document.querySelector('.reviews__slider');

const reviewsSwiper = new Swiper(reviewsSlider, {
  modules: [ Navigation ],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: false,
  spaceBetween: 100,
});

export { reviewsSwiper };
