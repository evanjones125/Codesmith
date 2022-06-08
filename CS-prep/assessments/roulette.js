const roulette = n => {
    // keep track of number of "spins"
    let spins = 1;
    
    // return a function that checks conditions and outputs based on spins' value
    return function() {
        for (let i = 0; i < n; i++) {
            if (spins > n) return 'pick a number to play again';
            else if (spins === n) {
                spins++;
                return 'win';
            }
            else if (spins < n) {
                spins++;
                return 'spin';
            }
        }
    }
}


const play = roulette(3);

for (let i = 0; i < 5; i++) {
    console.log(play());
}