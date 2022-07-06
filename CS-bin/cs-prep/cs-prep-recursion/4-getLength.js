function getLength(array, i = 0) {
	if(array[0] == undefined) {
    return i;
  } else {
    return getLength(array.slice(1), i += 1)
  }
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(getLength([1])); // -> 1
// console.log(getLength([1, 2])); // -> 2
// console.log(getLength([1, 2, 3, 4, 5])); // -> 5


//      ** instructions **
// Modify the function so that it returns the length of an array recursively, without using the .length property. Use recursion!
// Hint: What does JavaScript return when you attempt to access an index that is greater than array.length - 1?