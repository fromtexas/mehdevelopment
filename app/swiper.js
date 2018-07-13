import Swiper from 'swiper';
import {titleAnime} from './sectionTitleAnimation';
import {cityAnimation} from './cityAnimaton';
import {skillsAnimation} from './skillsAnimation';
import Bubbles from './background';

let background;

window.addEventListener('DOMContentLoaded', () => {
    background = new Bubbles('.background');
    background.init();
});

export const mySwiper = new Swiper ('.swiper-container', {
    //virtualTranslate: true,
    direction: 'vertical',
    height: window.innerHeight,
    allowTouchMove: true,
    mousewheel: true,
    keyboard: {
        enabled: true,
    },
});

const portfolioSwiper = new Swiper('.portfolio__slider-container', {
    loop: true,
    navigation: {
        nextEl: '.portfolio__slider-button-next',
        prevEl: '.portfolio__slider-button-prev',
    },
});

mySwiper.on('slideChange', () => {
    background.onScrollThrottled(mySwiper.activeIndex);
    titleAnime(mySwiper.activeIndex);
    cityAnimation(mySwiper.isEnd);
    skillsAnimation(mySwiper.activeIndex);
});