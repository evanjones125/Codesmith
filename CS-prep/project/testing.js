function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }

class Card {
    constructor(number, color) {
      this.number = number;
      this.color = color;
    }
  }

const buildDeck = () => {
    const deck = [];

    const colors = ["Red", "Green", "Blue", "Yellow"];
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let color in colors) {
        for (let value in values) {
            // the next line creates an array element instead of an object (ex: ['Red 4', 'Green 8', ...])
            deck.push(colors[color] + ' ' + values[value]);
            // deck.push(new Card(values[value], colors[color]));
            // deck.push(new Card(values[value], colors[color]));
        }
    }

    return deck;
}

const fullDeck = shuffle(buildDeck());
console.log(fullDeck);

// Constructor function to build individual card attributes
// class Card {
//     constructor(number, color) {
//       this.number = number;
//       this.color = color;
//       // Do we want to add ALL the attributes we might need to build our cards here so that we only ever have to use one constructor function?
//     }
//     // Methods would go here... not sure if we'd ever need them
//   }
  
//   // Builds a deck in ascending order with four colors per card
//   function buildDeck(totalCards) {
//     const outputArray = [];
//     let numberedCards = 0;
//     let colors = ['red', 'yellow', 'blue', 'green']
//     let colorIndex = 0;
//     for (let i = totalCards; i > 0; i--) {
//       if (colors[colorIndex] === undefined) {
//         colorIndex = 0;
//         numberedCards++;
//       }
//       const cardToPush = new Card(numberedCards, colors[colorIndex])
//       outputArray.push(cardToPush);
//       colorIndex++;
//     }
//     return outputArray;
//   }
  
//   // Tests to make sure deck is built how we want
//   let firstHalfDeck = buildDeck(40);
//   let secondHalfDeck = buildDeck(40);
//   let fullDeck = firstHalfDeck.concat(secondHalfDeck);

//   fullDeck = shuffle(fullDeck);
  
//   console.log(fullDeck[0]);