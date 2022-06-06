const goldenSequence = n => {
    // recursive solution (linear time complexity)
        // set base cases    
        // if (n === 0) return 0;
        // if (n === 1) return 1;

        // // recursively find nth term in FS using the recursive formula
        // return goldenSequence(n - 1) + goldenSequence(n - 2);

    let rootFive = Math.sqrt(5);

    return Math.round((Math.pow(((1 + rootFive) / 2), n)) / rootFive);
}

console.log(goldenSequence(0)); // should log: 0
console.log(goldenSequence(1)); // should log: 1
console.log(goldenSequence(2)); // should log: 1
console.log(goldenSequence(76)); // should log: 2
console.log(goldenSequence(4)); // should log: 3
console.log(goldenSequence(37)); // should log: 233