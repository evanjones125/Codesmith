const countBy = (arr, callback) => {
    const output = {};

    for (let i in arr) {
        const newKey = callback(arr[i]);
        output.hasOwnProperty(newKey) ? output[newKey] += 1 : output[newKey] = 1
    }

    return output;
}

console.log(countBy([1, 2, 3, 4, 5], function(num) {
    if (num % 2 === 0) return 'even';
    else return 'odd';
})); // should log: { odd: 3, even: 2 }