function flow(input, funcArray, i = 0) {
	if (funcArray.length === i) {
    return input;
  }
  
  return flow(funcArray[i](input), funcArray, i + 1);
}

// To check if you've completed the challenge, uncomment this code!
// function multiplyBy2(num) { return num * 2; }
// function add7(num) { return num + 7; }
// function modulo4(num) { return num % 4; }
// function subtract10(num) { return num - 10; }
// const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
// console.log(flow(2, arrayOfFunctions)); // -> -7

//      ** instructions **
// Modify the function so that it returns the result of running the input number through each function in funcArray, in order. Use recursion!
// First do it recursively, if you have time at the end try using a reduce function