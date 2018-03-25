import {lettersRemove, lettersReveals} from './lettersAnimation';

const notDoneSet = new Set();

//refactoring remove on events, set all in one file
//folders for js
//slides counter
//responsivness

export const titleAnime = (index) => {
    if(index > 0 && !notDoneSet.has(index)){
        let removed = lettersRemove(`.large-word-${index}`);
        lettersReveals(removed);
        notDoneSet.add(index);      
    }
}