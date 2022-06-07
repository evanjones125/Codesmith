const buildDeck = () => {
    const outputArray = [];
    const colors = ["Red", "Green", "Yellow", "Blue"];
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "Skip", "Draw Two", "Reverse"]

    for (let color in colors) {
        for (let value in values) {
            // creates an array element instead of an object (ex: ['Red 4', 'Green 8', ...])
            outputArray.push(colors[color] + ' ' + values[value]);
        }
    }
    return outputArray;
}

const shuffle = array => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

const shuffledDeck = shuffle(buildDeck());

const drawCards = numCards => {
    const cardsDrawn = [];

    for (let i = 0; i < numCards; i++) {
        cardsDrawn.push(shuffledDeck.shift());
    }

    return cardsDrawn;
}

const makeHand = (callback) => {
    for (let i = 0; i < numPlayers; i++) {
        players.push(drawCards(7));
    }
}

const showHand = (player, playerHand) => {
    console.log(`Player ${player + 1}'s turn`);
    console.log("Your hand:");
    console.log("------------------");

    let counter = 1;

    for (let card in playerHand) {
        console.log(`${counter}) ${playerHand[card]}`);
        counter += 1;
    }
}

const players = [];
const numPlayers = 4;

makeHand(drawCards());

playerTurn = 0;
playDirection = 0;
playing = true;

showHand(playerTurn, players[0]);


// console.log(newDeck);
// console.log(drawCards(4));
// console.log(newDeck);
// console.log(players[0]);
// console.log(discardPile);