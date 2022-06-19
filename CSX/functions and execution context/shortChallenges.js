/* 
these challenges weren't lengthy or difficult enough to warrant a full file dedicated to them
*/

// ---addTwo---
const addTwo = (num) => num += 2;
// console.log(typeof addTwo); // should log: 'function'
// console.log(addTwo(10)); // should log: 12


// ---addS---
const addS = (str) => str + 's';
// console.log(typeof addS); // should log: 'function'
// console.log(addS('cat')); // should log: 'cats'


// ---addWaldo---
const addWaldo = obj => {
    obj["Waldo"] = 'unknown';
    return obj;
}
// const siliconValley = {'Richard': 'Hendricks', 'Erlich': 'Bachman', 'Bertram': 'Gilfoyle'}
// console.log(addWaldo(siliconValley)) // should log:{ Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }


// ---function expression---
const myFunc = () => "Hi there!";
// console.log(myFunc());


// ---ES6---
const myJob = (name, profession) => `Hi, my name is ${name} and I'm a ${profession}.`;
// console.log(myJob("Jon", "Knights Watchman"));