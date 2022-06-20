function closestToTheMark(player1, player2){
    const theMark = Math.floor(Math.random() * 100)
    console.log(`If theMark is ${theMark}...`);
    
    //if the difference between the mark and player 1 is less than the difference between the mark and player 2,
    //player 1 wins; otherwise, player 2 wins
    if (Math.abs(theMark - player1) < Math.abs(theMark - player2)) return 'Player 1 is closest';
    else if (theMark === Math.abs(player1 - player2) || player1 === player2) return 'Neither player is closer';
    else return 'Player 2 is closest';
  }
  
  console.log(closestToTheMark(25, 75));