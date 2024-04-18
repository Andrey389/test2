import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';

const aboutMeSwiperBox = document.querySelector('.about-swipper');
const aboutMeNextButton = document.querySelector('.about-swiper-next-button');

const swiper = new Swiper(aboutMeSwiperBox, {
  modules: [Navigation, Keyboard],
  navigation: {
    nextEl: aboutMeNextButton,
  },
  loop: true,
  direction: 'horizontal',
  watchOverflow: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  spaceBetween: 0,
  breakpoints: {
    375: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});
swiper.update();
const firstSlide = document.querySelector('.swiper-slide-item');

firstSlide.style.backgroundColor = 'rgb(237, 59, 68)';

swiper.on('slideChangeTransitionStart', () => {
  const currentIndex = swiper.activeIndex;

  const previousSlide = swiper.slides[currentIndex - 1];

  if (previousSlide) {
    previousSlide.style.backgroundColor = 'initial';
  }

  // const nextSlide = swiper.slides[currentIndex + 1];
  // if (nextSlide) {
  //   console.log(nextSlide);
  //   firstSlide.style.backgroundColor = 'rgb(237, 59, 68)';
  // }
  const currentSlide = swiper.slides[currentIndex];
  console.log(currentSlide);
  currentSlide.style.backgroundColor = 'rgb(237, 59, 68)';
});

let currentDivIndex = 0; // Індекс поточного div
const divs = document.querySelectorAll('.swiper-slide-item'); // Отримуємо всі divs

swiper.on('slideChangeTransitionStart', () => {
  const currentIndex = swiper.activeIndex;

  const previousSlide = swiper.slides[currentIndex - 1];
  if (previousSlide) {
    previousSlide.style.backgroundColor = 'initial';
  }

  const nextSlide = swiper.slides[currentIndex + 1];
  if (nextSlide) {
    console.log(nextSlide);
    if (divs[currentDivIndex]) {
      // Перевіряємо, чи існує поточний div
      divs[currentDivIndex].style.backgroundColor = 'initial'; // Скидаємо стиль поточного div
    }
    currentDivIndex = (currentDivIndex + 1) % divs.length; // Переходимо до наступного div
    if (divs[currentDivIndex]) {
      // Перевіряємо, чи існує наступний div
      divs[currentDivIndex].style.backgroundColor = 'rgb(237, 59, 68)'; // Змінюємо стиль наступного
    }
  }
});

new Accordion('.about-education', {
  duration: 600,
  collapse: true,
  openOnInit: [0],
  showMultiple: true,
  onOpen: () => {
    aboutArr.classList.add('rotate');
  },
  onClose: () => {
    aboutArr.classList.remove('rotate');
  },
});

document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.querySelectorAll('.about-education-list');

  accordions.forEach(accordion => {
    accordion.addEventListener('click', function () {
      const arrow = this.querySelector('.about-arrow');
      const description = this.querySelector('.text-acordion');

      arrow.classList.toggle('rotate');
      description.classList.toggle('visually-hidden');
    });
  });

  new Accordion('.faq-section', {
    duration: 400,
    showFirstItem: false,
  });
});
