const groupBy = (arr, callback) => {
    const output = {};

    for (let i in arr) {
        const newKey = callback(arr[i]);
        output.hasOwnProperty(newKey) ? output[newKey].push(arr[i]) : output[newKey] = [arr[i]];
    }

    return output;
}

const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }