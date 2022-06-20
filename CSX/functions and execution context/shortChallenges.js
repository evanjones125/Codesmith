/* 
these challenges weren't lengthy or difficult enough to warrant a full file dedicated to them
*/

// ---addTwo---
const addTwo = num => num += 2;
// console.log(typeof addTwo); // should log: 'function'
// console.log(addTwo(10)); // should log: 12


// ---addS---
const addS = str => str + 's';
// console.log(typeof addS); // should log: 'function'
// console.log(addS('cat')); // should log: 'cats'


// ---sayHello---
const sayHello = str => 'Hi, ' + str;
// console.log(sayHello('Mary')); // should log: 'Hi, Mary'
// console.log(sayHello('Haley')); // should log: 'Hi, Haley'


// ---wereAwesome---
const wereAwesome = (you, yourBuddy) => `${yourBuddy} and ${you} are awesome!`;
// console.log(wereAwesome("Dave", "Will")); // => "Will and Dave are awesome!"
// console.log(wereAwesome("Victoria", "Jenny")); // => "Jenny and Victoria are awesome!"
// console.log(wereAwesome("Chris", "Jac")); // => "Jac and Chris are awesome!"
// console.log(wereAwesome("Phillip", "Skyler")); // => "Skyler and Phillip are awesome!"


// ---lastLetter---
const lastLetter = string => string[string.length - 1];
// console.log(lastLetter("hello")); //=> "o"
// console.log(lastLetter("goodbye!")); //=> "!"
// console.log(lastLetter("ZeltoiD")); //=> "D"
// console.log(lastLetter("I love Javascript")); //=> "t"


// ---passing arguments---
const x = 3;

function isX1(num) {
    const x = 5;
    return num === x;
}

function isX2(num) {
    return num === x;
}

const one = isX1(5);
const two = isX2(x);

// console.log(one); // should log: true
// console.log(two); // should log: true


// --- invoking functions---
let calls = "";

function jerry(str) {
	str += 'Jerry';
  return kramer(str);
}

function george(str) {
	str += 'George';
  return elaine(str);
}

function elaine(str) {
	str += 'Elaine';
  return str;
}

function kramer(str) {
	str += 'Kramer';
  return george(str);
}

calls = jerry(calls);
// console.log(calls); // should log: 'JerryKramerGeorgeElaine'


// ---isOdd---
const isOdd = num => {
    // non-recursive
      return num % 2 === 0 ? false : true;
    
    // recursive
    // if (num === 0) return false;
    // else if (num === 1) return true;
    // return isOdd(num - 2);
}


// ---if statements and remainders---
const iLoveEvenNumbers = num => num % 2 == 0 ? "Oh Yeah Evens!" : "I am too normal for odd numbers";


// ---getRemainder---
const getRemainder = (num1, num2) => num1 > num2 ? num1 % num2 : num2 % num1;


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