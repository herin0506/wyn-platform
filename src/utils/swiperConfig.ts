import { SwiperProps } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

export const thumbnailSliderConfig: SwiperProps = {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: true,
  spaceBetween: 15,
  slidesPerView: 4,
  centeredSlides: false,
  modules: [Autoplay, Navigation],
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 1,
    },
    639: {
      slidesPerView: 3,
    },
    865: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 4,
    },
    1500: {
      slidesPerView: 4,
    },
    1700: {
      slidesPerView: 4,
    },
  },
};

export const nuturalHerbsSliderConfig: SwiperProps = {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: true,
  spaceBetween: 15,
  slidesPerView: 4,
  centeredSlides: false,
  modules: [Autoplay, Navigation],
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
    },
    639: {
      slidesPerView: 3,
    },
    865: {
      slidesPerView: 5,
    },
    1000: {
      slidesPerView: 5,
    },
    1500: {
      slidesPerView: 5,
    },
    1700: {
      slidesPerView: 5,
    },
  },
};

export const womenHealthSliderConfig: SwiperProps = {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: true,
  spaceBetween: 15,
  slidesPerView: 2,
  centeredSlides: false,
  modules: [Autoplay, Navigation],
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 1,
    },
    639: {
      slidesPerView: 2,
    },
    865: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 2,
    },
    1500: {
      slidesPerView: 2,
    },
    1700: {
      slidesPerView: 2,
    },
  },
};
