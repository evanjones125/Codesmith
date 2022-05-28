const largestAndSmallest = array => [ Math.min(...array), Math.max(...array) ];

// const largestAndSmallest = (array) => {
//     //create sortedArray with
//     //the result of the sorting function
//     const sortedArray = sorting(array);

//     //return first and last values
//     //of the sorted array
//     return [sortedArray[0], sortedArray[sortedArray.length - 1]];
// }

// const sorting = (input) => input.sort((a, b) => a - b);

console.log(largestAndSmallest([1, 2, 3, 4, 5])); // should log [1, 5]
console.log(largestAndSmallest([90, 30, 44, 66, 10])); // should log [10, 90]
console.log(largestAndSmallest([16, -70, 122])); // should log [-70, 122]