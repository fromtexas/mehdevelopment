import {mySwiper} from './swiper';
import {lettersRemove, lettersReveals} from './lettersAnimation';

let notDone = {
    1: true,
    2: true,
    3: true,
    4: true
};

//change and add new Set
//change preloader
//refactoring
//responsivness

mySwiper.on('slideChange', () => {
    if(mySwiper.activeIndex > 0 && notDone[mySwiper.activeIndex]){
        let active = mySwiper.activeIndex;
        let removed = lettersRemove(`.large-word-${active}`);

        lettersReveals(removed);
        notDone[mySwiper.activeIndex] = false;
        console.log(notDone);
        
    }
});