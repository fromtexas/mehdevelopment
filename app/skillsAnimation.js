import anime from 'animejs';
import {mySwiper} from './swiper';

const skills = (() => {

    let notDone = true;

    const fadeIn = () => {
        if(mySwiper.activeIndex === 2 && notDone){
            anime({
                targets: '.skills__icon-wrap',
                scale: [0, 1],
                delay: (el, i) => i*300,
                duration: 1000,
            });

            notDone = false;
        }    
    };
    
    mySwiper.on('slideChange', fadeIn);
})();


