function shuffleCards(topHalf, bottomHalf) {
	const newArr = [];
  
  if (topHalf.length > bottomHalf.length) {
	  for (let i = 0; i < topHalf.length; i++) {
      newArr.push(topHalf[i]);
      if (bottomHalf[i] !== undefined) {
        newArr.push(bottomHalf[i]);
      }
    }
  }
  
	return newArr;
}



const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
console.log(shuffleCards(topHalf, bottomHalf));

  /*-> ['Queen of Diamonds',
        'Jack of Hearts',
        'Five of Hearts',
        'Ten of Spades',
        'Ace of Spades',
        'Eight of Clubs',
      ]
  */