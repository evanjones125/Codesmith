class Player {
    constructor(name, hand) {
      this.name = name;
      this.hand = hand;
      // Do we want to add ALL the attributes we might need to build our cards here so that we only ever have to use one constructor function?
    }
    // Methods would go here... not sure if we'd ever need them
  }
  
  const player = new Player(prompt("What's your name?", "Please enter your name."), [])
  
  