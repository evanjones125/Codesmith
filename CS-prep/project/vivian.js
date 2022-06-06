class Player {
    constructor(name, hand) {
      this.name = name;
      this.hand = hand;
      // Do we want to add ALL the attributes we might need to build our cards here so that we only ever have to use one constructor function?
    }
    // Methods would go here... not sure if we'd ever need them
  }
  
  //we want to create separate objects for each player
  const username = prompt("What's your name?", "Type name here.")
  const player = new Player(username, [])
  console.log(username);
  
  