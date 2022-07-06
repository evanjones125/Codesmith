const cycleIterator = arr => {
    let count = 0;
    
    return function() {
        count < arr.length ? count++ : count -= arr.length - 1;
        return arr[count - 1];
    }
}

const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'