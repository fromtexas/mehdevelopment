import {mySwiper} from './swiper';
import {lettersRemove, lettersReveals} from './lettersAnimation';



const notDoneSet = new Set();

//refactoring remove on events, set all in one file
//folders for js
//slides counter
//responsivness
//email form

mySwiper.on('slideChange', () => {

    if(mySwiper.activeIndex > 0 && !notDoneSet.has(mySwiper.activeIndex)){
        let active = mySwiper.activeIndex;
        let removed = lettersRemove(`.large-word-${active}`);

        lettersReveals(removed);
        notDoneSet.add(mySwiper.activeIndex);
        
    }
});