import anime from 'animejs';
import {objAnimation} from './objectAnimation';


const preloader = (() => {

    const timeline = anime.timeline({
        loop: true,
        direction: 'alternate',
    });
    const doneTimeLine = anime.timeline({
    });

    const preloader = document.querySelector('.preloader');

    const done = () => {
        setTimeout(() => {
            doneTimeLine
            .add({
                targets: '.preloader__squre',
                opacity: 0,
                duration: 2000
            })
            .add({
                targets: '.preloader__md--1',
                translateX: -200,
                opacity: 0,
                duration: 2000,
                easing: 'easeInOutQuad',
                offset: '-=2000'
            })
            .add({
                targets: '.preloader__md--2',
                translateX: 200,
                opacity: 0,
                duration: 2000,
                easing: 'easeInOutQuad',
                offset: '-=2000'
            })
            .add({
                targets: '.preloader',
                opacity: 0
            });

            let promise = doneTimeLine.finished.then(() => {
                timeline.pause();
                preloader.style.display = 'none';
                objAnimation();
            });

        }, 3100);
    };

    timeline
    .add({
        targets: '.preloader__squre',
        rotate: '1turn' ,
        borderRadius: ['0', '1rem'],
        easing: 'easeInOutQuad',
        duration: 3000
    })
    .add({
        targets: '.preloader__color',
        height: ['0', '100%'],
        easing: 'easeInOutQuad',
    });

    window.addEventListener('load', done);  
})();

