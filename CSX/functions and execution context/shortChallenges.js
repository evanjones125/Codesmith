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


// ---if statements & multiple conditions---
function greetings(hour) {
	if (hour < 12) return "Good Morning!";
  else if (hour < 15) return "Good Afternoon!";
  else return "Good Night!";
}


// ---gradeCalculator---
const gradeCalculator = grade => {
	if (grade >= 90) return "A";
    if (grade >= 80 && grade < 90) return "B";
    if (grade >=70 && grade < 80) return "C";
    if (grade >=60 && grade < 70) return "D";
	return "F";
}


// ---updating array elements---
function addN(arr, n){
	for (let i = 0; i < arr.length; i++) {
    arr[i] += n;
  }
  return arr;
} 
// console.log(addN([1, 2, 3], 3)); // expected log [4, 5, 6]
// console.log(addN([3, 4, 5], 2)); // expected log [5, 6, 7]


// ---summing array elements---
function getTheSum(arr){
    let total = 0;
    for (let i in arr) total+= arr[i];
    return total;
  }
// console.log(getTheSum([3, 6, 9])); // expected log 18
// console.log(getTheSum([10, 11, 12])); // expected log 33


// ---multiplyAll---
const multiplyAll = (...ints) => {  
    let total = 1;
    for (let i in ints) total *= ints[i];
    return total;
  }
// console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
// console.log(multiplyAll(5, 5, 5, 3)) // should log: 375


// ---counters---
function imAboutToExplodeWithExcitement(n){
	while (n >= 1) {
    console.log(n);
    n --;
    if (n == 5) {console.log('Oh wow, I can\'t handle the anticipation')}
    if (n == 3) {console.log('I\'m about to explode with excitement!')}
    if (n == 0) {console.log('That was kind of a let down')}
  }
}
// imAboutToExplodeWithExcitement(10); // expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4, I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'


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