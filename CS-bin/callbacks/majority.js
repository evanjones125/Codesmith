const majority = (arr, callback) => {
    let trues = 0;
    let falses = 0;

    for (let i in arr) callback(arr[i]) ? trues++ : falses++;

    if (trues > falses) return true;
    return false;
}

const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false