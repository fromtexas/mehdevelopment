import {lettersRemove, lettersReveals} from './lettersAnimation';

const notDoneSet = new Set();

export const titleAnime = (index) => {
    if(index > 0 && !notDoneSet.has(index)){
        let removed = lettersRemove(`.large-word-${index}`);
        lettersReveals(removed);
        notDoneSet.add(index);      
    }
}