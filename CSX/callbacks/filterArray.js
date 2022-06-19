function filterArray(array, callback) {
const newArray = [];

for (let i = 0; i < array.length; i += 1) {
    callback(array[i]) ? newArray.push(array[i]) : null;
}

return newArray;
}

const arrOfNums = [1, 2, 3, 4, 5];

const func1 = num => (num % 2 === 0 ? num : null);

const func2 = num => (num % 2 !== 0 ? num : null);
  
console.log(filterArray(arrOfNums, func1)); // should log: [2, 4]
console.log(filterArray(arrOfNums, func2)); // should log: [1, 3, 5]