const buildDeck = () => {
    const deck = [];
    const colors = ["Red", "Green", "Yellow", "Blue"];
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "Skip", "Draw Two", "Reverse"]

    for (let color in colors) {
        for (let value in values) {
            // the next line creates an array element instead of an object (ex: ['Red 4', 'Green 8', ...])
            deck.push(colors[color] + ' ' + values[value]);
        }
    }
    return deck;
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

const newDeck = shuffle(buildDeck());
// const discardPile = [];

const drawCards = numCards => {
    const cardsDrawn = [];

    for (let i = 0; i < numCards; i++) {
        cardsDrawn.push(newDeck.shift());
    }

    return cardsDrawn;
}

const showHand = (player, playerHand) => {
    console.log(`Player ${player}'s turn`);
    console.log("Your hand:");
    console.log("------------------");

    let counter = 1;

    for (let card in playerHand) {
        console.log(`${counter}) ${playerHand[card]}`);
        counter += 1;
    }
}

// const canPlay = (color, value, playerHand) => {
//     for (let card in playerHand) {
//         if (card.includes(color) || card.includes(value)) return true;
//     }

//     return false;
// }

const players = [];
// const colors = ["Red", "Green", "Yellow", "Blue"];
//get user input
const numPlayers = 4;

for (let i = 0; i < numPlayers; i++) {
    players.push(drawCards(5));
}

playerTurn = 0;
playDirection = 0;
playing = true;
// discardPile.push(newDeck.shift());
// let currentCard = discardPile[0];


showHand(playerTurn, players[0]);


// console.log(newDeck);
// console.log(drawCards(4));
// console.log(newDeck);
console.log(players[0]);
// console.log(discardPile);
