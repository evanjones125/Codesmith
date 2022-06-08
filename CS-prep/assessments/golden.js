const goldenSequence = n => {
    // find nth Fibonacci term using Binet's formula
    let rootFive = Math.sqrt(5);
    const binet = Math.round((Math.pow(((1 + rootFive) / 2), n)) / rootFive);
    
    // set base cases    
    if (n === 0) return 0;
    if (n === 1) return 1;
    // the time complexity difference between the recusive/Binet solutions ...
    // ... caused a large disparity in processing time in favor of the Binet method
    // however, Binet's fomula was only accurate up to n = 70 in my testing
    if (n < 70) return binet;

    // recursively find nth Fibonacci term using the recursive formula if n >= 70
    return goldenSequence(n - 1) + goldenSequence(n - 2);

}

console.log(goldenSequence(0)); // should log: 0
console.log(goldenSequence(1)); // should log: 1
console.log(goldenSequence(2)); // should log: 1
console.log(goldenSequence(76)); // should log: 2
console.log(goldenSequence(4)); // should log: 3
console.log(goldenSequence(70)); // should log: 233