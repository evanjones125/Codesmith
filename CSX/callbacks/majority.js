const majority = (arr, callback) => {
    const trueArray = [];
    const falseArray = [];
  
    forEach(arr, function(element) {
      if (callback(element)) trueArray.push(callback(element));
      if (!callback(element)) falseArray.push(callback(element));
    })

    return trueArray.length > falseArray.length ? true : false;
  }
  
  function forEach(array, callback) {
      for (let i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  }
  
  const isOdd = function(num) { return num % 2 === 1; };
  console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
  console.log(majority([2, 3, 4, 5], isOdd)); // should log: false