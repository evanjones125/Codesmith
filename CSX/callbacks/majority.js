const majority = (arr, callback) => {
    const trueArray = [];
    const falseArray = [];
  
    arr.forEach(element => { callback(element) ? trueArray.push(callback(element)) : falseArray.push(callback(element)) });

    return trueArray.length > falseArray.length ? true : false;
  }
  
  const isOdd = function(num) { return num % 2 === 1; };
  console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
  console.log(majority([2, 3, 4, 5], isOdd)); // should log: false