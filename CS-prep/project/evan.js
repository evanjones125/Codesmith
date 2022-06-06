  class Player {
    constructor(name, hand, playerNumber) {
      this.name = name;
      this.hand = hand;
      this.playerNumber = playerNumber;
    }
  }
  
  const promptPlayerNumber = () => {
    return prompt("How many players?", "Please type a number");
  }

  const shuffledDeck = [5, 26, 8, 53, 6, 8, 0, 4, 6, 7, 3, 6, 8, 5, 4, 8, 4]
  
  //reassign numPlayers to the value that the user inputs
  let numPlayers = Number(promptPlayerNumber());
  
  const createPlayers = numPlayers => {
    const playersArr = [];
    
    for (let i = 0; i < numPlayers; i++) {
        const username = prompt("What's your name?", "Type name here.")
        const player = new Player(username, [])
        for(let i = 0; i < 7; i++) {
          player['hand'].push(shuffledDeck[0]);
          shuffledDeck.shift();
        }
    }
  
    playersArr.push(player);
  
    return playersArr;
  }
  
  const players = createPlayers(numPlayers);