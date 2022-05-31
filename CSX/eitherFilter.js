function eitherFilter(array, callback1, callback2) {
	const output = [];
  
  for (let i = 0; i < array.length; i++) callback1(array[i]) || callback2(array[i]) ? output.push(array[i]) : null;
  
  return output;
}

const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;
console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]