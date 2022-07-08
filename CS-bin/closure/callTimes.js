const callTimes = () => {
    let counter = 0;

    return function() {
        counter ++;
        return counter;
    }
}

let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
console.log(myNewFunc1()); // => 1
console.log(myNewFunc1()); // => 2
console.log(myNewFunc2()); // => 1
console.log(myNewFunc2()); // => 2