const forEach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
      }
  }
  

const map = (arr, call) => {
    let output = [];

    forEach(arr, function(element) {
        output.push(call(element));  	
    });

    return output;
}
  
  
  console.log(typeof forEach); // should log: 'function'
  forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
  console.log(typeof map); // should log: 'function'
  console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]


// Part 1
// Create a function forEach which takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything. Please do not use the native forEach or map method.

// let alphabet = '';
// const letters = ['a', 'b', 'c', 'd'];
// forEach(letters, function(char) {
//   alphabet += char;
// });
// console.log(alphabet); //prints 'abcd'