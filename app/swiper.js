import Swiper from 'swiper';

const mySwiper = new Swiper ('.swiper-container', {
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
    slidesPerView: 4,
    freeMode: true,
    spaceBetween: 100,
    scrollbar: {
        el: '.swiper-scrollbar'
    }
});