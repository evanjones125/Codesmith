const reduce = (arr, callback, acc) => {
    let output = acc;
    
    arr.forEach(element => {
      output = callback(element, output);
    })
    
    return output;
  }
  
  const nums = [4, 1, 3];
  const add = function(a, b) { return a + b; }
  console.log(reduce(nums, add, 0)); // should log 8