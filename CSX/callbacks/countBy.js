const countBy = (arr, callback) => {
    const newObj = {};
    
    forEach(arr, function(element) {
      if (callback(element) === 'even') {
              if (!newObj.hasOwnProperty('even')) newObj.even = 1;
        else newObj.even++;
      }
      if (callback(element) === 'odd') {
              if (!newObj.hasOwnProperty('odd')) newObj.odd = 1;
        else newObj.odd++;
      }
    })
    
    return newObj;
  }
  
  function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  }
  
  function evenOdd(n) {
    if (n % 2 === 0) return 'even';
    else return 'odd';
  }
  const nums = [1, 2, 3, 4, 5];
  console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }