import anime from 'animejs';
import {mySwiper} from './swiper';



const timeline = anime.timeline();
let notDone = true;


const city = document.querySelector('.city');
city.setAttribute('height', window.innerWidth);
city.setAttribute('width', window.innerWidth);




mySwiper.on('slideChange', () => {
    if(mySwiper.isEnd && notDone){
        notDone = false;

        timeline
        .add({
            targets: '.city__item',
            direction: 'alternate',
            loop: false,
            strokeDashoffset:{
                value: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: 9000,
                delay: (el, i) => i * 250,
            }
        })
        .add({
            targets: '.city__item',
            direction: 'alternate',
            loop: false,
            fill: {
                value: (el, i) => i ? ['#fff', '#556459'] : ['#fff', '#cfd8d4'],
                easing: 'easeInOutSine',
                duration: 2000,
                delay: (el, i) => i * 250,
            } 
        });
    }
});
