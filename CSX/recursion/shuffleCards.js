function shuffleCards(topHalf, bottomHalf, newArr = []) {
  
  if (topHalf.length === 0) {
    return newArr;
  } else {
    newArr.push(topHalf[0]);
    if (bottomHalf[0]) {
      newArr.push(bottomHalf[0]);
    }
  }
  
  return shuffleCards(topHalf.slice(1), bottomHalf.slice(1), newArr);
}

//without recursion:

// function shuffleCards(topHalf, bottomHalf) {
// 	const newArr = [];
  
//   if (topHalf.length > bottomHalf.length) {
// 	  for (let i = 0; i < topHalf.length; i++) {
//       newArr.push(topHalf[i]);
//       if (bottomHalf[i] !== undefined) {
//         newArr.push(bottomHalf[i]);
//       }
//     }
//   }
  
// 	return newArr;
// }



const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];

console.log(topHalf.slice(0, -1));

const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
//console.log(shuffleCards(topHalf, bottomHalf));

  /*-> ['Queen of Diamonds',
        'Jack of Hearts',
        'Five of Hearts',
        'Ten of Spades',
        'Ace of Spades',
        'Eight of Clubs',
      ]
  */