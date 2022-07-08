const average = () => {
    let mean = 0;
    let counter = 1;
    const store = [];

    return function(num) {
        if (num) store.push(num);
        let storeTotal = store.reduce((partialSum, a) => partialSum + a, 0);

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