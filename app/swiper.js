import Swiper from 'swiper';

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