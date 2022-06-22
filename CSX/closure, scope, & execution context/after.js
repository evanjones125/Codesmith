const after = (calls, callback) => {
	let counter = 0;
    let result = undefined;

  return function(num) {
    if (calls !== counter) counter++;
    if (calls === counter) result = callback(num);
    return result;
  }
  
}

const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed