const roulette = num => {
    let count = 0;
    
    return function() {
        count ++;
        if (count > num) return 'pick a number to play again';
        if (count < num) return 'spin';
        if (count = num) return 'win';
    }
}

const play = roulette(3);
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'win'
console.log(play()); // => should log 'pick a number to play again'
console.log(play()); // => should log 'pick a number to play again'