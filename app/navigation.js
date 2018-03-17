import {mySwiper} from './swiper';

const navigation = (() => {
    const naviList = document.querySelector('.navigation__list');
    const button = document.querySelector('.navigation__checkbox');

    const slide = (e) => {
        if(e && e.target.nodeName === 'A'){
            button.checked = false;
            mySwiper.slideTo(e.target.dataset.id);
        }
    };

    naviList.addEventListener('click', slide);
})();