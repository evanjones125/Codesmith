const highestFunc = (obj, val) => {
    let highest = -Infinity;
    let highestKey;

    for (let key in obj) {
        if (obj[key](val) > highest) {
            highestKey = key;
            highest = obj[key](val);
        }
    }

    return highestKey;
}

const groupOfFuncs = {};
groupOfFuncs.double = n => n * 2;
groupOfFuncs.addTen = n => n + 10;
groupOfFuncs.inverse = n => n * -1;
console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'