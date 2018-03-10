import anime from 'animejs';

const rects = document.querySelectorAll('rect');
[...rects].forEach(item => {
    item.style.opacity = 0;
});

const timeline = anime.timeline();

timeline
.add({
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
}).add({
    targets: 'rect',
    opacity: [0, 1],
    delay: (el, i) => i * 250,
    duration: 1000,
    easing: 'easeInOutSine'
})
// .add({
//     targets: '.braket',
//     duration: 1500,
//     delay: (el, i) => i * 300,
//     translateX: (el, i) => {
//         if(i){
//             return [150, 0];
//         } else{
//             return [-150, 0];
//         }
//     }
// })
// .add({
//     targets: '.braket__2',
//     duration: 1500,
//     translateX: [-150, 0]
// })