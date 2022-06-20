function droids(arr) {
    let result = "These are not the droids you're looking for.";
  
    arr.forEach((element) => {
      if (element === "Droids") result = "Found Droids!";
    })
    
    return result;
  }
  
  const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"] 
  const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"] 
  console.log(droids(starWars)) // should log: "Found Droids!"
  console.log(droids(thrones)) //should log: "These are not the droids you're looking for."