const once = callback => {
    let hasRun = false;
    let result;

    return function(nums) {
        if (!hasRun) {
            result = callback(nums);
            hasRun = true;
        }
        return result;
    }
}

const addByTwoOnce = once(function(num) {
  return num + 2;
});

console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7