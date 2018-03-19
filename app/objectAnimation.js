import anime from 'animejs';

const rects = document.querySelectorAll('rect');
[...rects].forEach(item => {
    item.style.transform = 'scale(0)';
});

const braket = document.querySelectorAll('.braket');
[...braket].forEach(item => {
    item.style.opacity = '0';
});

const timeline = anime.timeline();


export const objAnimation = () => {

    timeline
    .add({
        targets: '.braket',
        opacity: 1
    })
    .add({
        offset: '-=1000',
        targets: '.braket',
        direction: 'alternate',
        loop: false,
        strokeDashoffset:{
            value: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1500,
            delay: (el, i) => i * 250,
        },
        translateX: {
            value: (el, i) => i? [-150, 0] : [150, 0],
            delay: 1000
        },
    })
    .add({
        targets: 'rect',
        scale: [0, 1],
        delay: (el, i) => i * 250,
        duration: 1000,
    });
    
};






