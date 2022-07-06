const rollCall = arr => {
    let counter = -1;

    return function() {
        counter++;
        return counter < arr.length ? arr[counter] : 'Everyone accounted for';
    }
}

const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
console.log(rollCaller()) // => should log 'Victoria'
console.log(rollCaller()) // => should log 'Juan'
console.log(rollCaller()) // => should log 'Ruth'
console.log(rollCaller()) // => should log 'Everyone accounted for'