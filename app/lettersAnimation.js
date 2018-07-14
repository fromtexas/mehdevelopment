import anime from 'animejs';


export const lettersRemove = (nodeDom) => {
    const dom = document.querySelector(nodeDom);
    const domContent = [...dom.innerHTML];

    dom.innerHTML = '';
    const className = nodeDom.split('.').join('');

    domContent.forEach(item => {
        dom.innerHTML += `<span class="${className}-letter revealed">${item}</span>`
    });

    return nodeDom;

};

export const lettersReveals = (nodeDom) => {
    return anime({
        targets: nodeDom+'-letter',
        opacity: [0, 1],
        duration: 700,
        delay: (el, i) => i*200,
        easing: 'easeInOutQuad',
    });
};