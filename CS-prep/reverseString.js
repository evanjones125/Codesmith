function reverseString(string) {
  //iterates through the argument using decrementing for loop
  //and adds string at position
  //length - 1, length - 2... to the variable reversedString
  
  let reversedString = "";
  
  for (let i = string.length - 1; i > -1; i--) {
    reversedString += string[i];
  }
  
  return reversedString;
}

console.log('Challenge 1:', reverseString("codesmith prep") === "perp htimsedoc" ? "Correct!" : "Try again!");
