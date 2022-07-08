const average = () => {
    let mean = 0;
    let counter = 1;
    const store = [];

    return function(num) {
        // store all arguments in an array
        if (num) store.push(num);
        // store the total of the array in a variable
        let storeTotal = store.reduce((partialSum, a) => partialSum + a, 0);

        // if there's an argument, divide the array total by the number of invocations with an argument passed
        if (mean > 0 && num) {
            counter++;
            mean = storeTotal / counter;
        }
        
        if (mean === 0 && num) {
            mean += num;
        }

        return mean;
    }
}

const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8