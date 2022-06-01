const reverseNumber = num => Number(Math.abs(num).toString().split("").reverse().join(""));

console.log(reverseNumber(-107));