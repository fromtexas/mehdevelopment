import anime from 'animejs';


const lettersInit = (() => {
    const title = document.querySelector('.header__logo');
    const titleLetter = [...title.innerHTML];
    title.innerHTML = '';

    return {
        title,
        titleLetter
    };
})();

export const letter = () => {
    
    lettersInit.titleLetter.forEach(item => {
        lettersInit.title.innerHTML += `<span class="logo__letter">${item}</span`
    });

    anime({
        targets: '.logo__letter',
        opacity: [0, 1],
        duration: 1000,
        delay: (el, i) => i*200,
        easing: 'easeInOutQuad',
    });

};