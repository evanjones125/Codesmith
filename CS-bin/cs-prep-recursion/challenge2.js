function isEven(n) {
	//base case
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return isEven(n - 2);
  }
  return true;
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(isEven(0)); // -> true
// console.log(isEven(5)); // -> false
// console.log(isEven(10)); // -> true

// Is Even

// Modify the function so that it returns true if a number is even (and false if it's not). Assume input will be a positive integer. Use recursion!