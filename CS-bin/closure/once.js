const once = callback => {
    let tracker = 0;
    let output;
    
    return function(num) {
        if (!tracker) {
            tracker++;
            output = callback(num);
            return callback(num);
        }
        if (tracker) return output;
    }
}

function addByX(x) {
    return function add(y) {
        return x + y;
    }
}

const addByTwo = addByX(2);

const onceFunc = once(addByTwo);
console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6