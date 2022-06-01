function drawStairs(n) {
  let staircase = "";
  
  //create n number of rows
  for (let i = 1; i <= n; i++) {
    
    //add n - 1 spaces to row i
    for (let j = n - i; j > 0; j--) {
      staircase += " ";
    }

    //add i number of asterisks to row i
    for (k = i; k > 0; k--) {
      staircase += "*";
    }
    
    //create new line before incrementing i
    staircase += "\n";
  }
  
  console.log(staircase);
}

drawStairs(5);
