const largestAndSmallest = (array) => {
    //create new array with the results of the sorting function
    const sortedArray = sorting(array);
    
    //create second new array and push sortedArray at
    //indices 0 and length - 1
    const returnArray = [];
    returnArray.push(sortedArray[0]);
    returnArray.push(sortedArray[sortedArray.length - 1]);

    return returnArray;
}

const sorting = (input) => input.sort((a, b) => a - b);

console.log(largestAndSmallest([1, 2, 3, 4, 5])); // should log [1, 5]
console.log(largestAndSmallest([90, 30, 44, 66, 10])); // should log [10, 90]
console.log(largestAndSmallest([16, -70, 122])); // should log [-70, 122]