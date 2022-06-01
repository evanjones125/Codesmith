function repeater(char, n = 5) {
	// Base case: when char is equal to n
  if (char.length === n) {
    return char;
  }
  else {
    return char += repeater(char, n - 1);
  }
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(repeater('g')); // -> 'ggggg'
// console.log(repeater('j'));// -> 'jjjjj'

// Repeater

// Modify the function so that it returns a string containing the input character repeated 5 times. Use recursion!