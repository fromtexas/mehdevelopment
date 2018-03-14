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

const portfolioSwiper = new Swiper('.swiper-portfolio', {
    slidesPerView: 3,
    freeMode: true,
    spaceBetween: 250,
    scrollbar: {
        el: '.swiper-scrollbar'
    }
});