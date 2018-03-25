import anime from 'animejs';

let notDone = true;

export const skillsAnimation = (index) => {
    if(index === 2 && notDone){
        anime({
            targets: '.skills__icon-wrap',
            scale: [0, 1],
            delay: (el, i) => i*300,
            duration: 1000,
        });

        notDone = false;
    }
};


