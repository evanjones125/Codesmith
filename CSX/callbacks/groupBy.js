const groupBy = (arr, callback) => {
    const newObj = {};
    
    arr.forEach(element => {
      if (!newObj.hasOwnProperty(callback(element))) newObj[callback(element)] = [element];
      else newObj[callback(element)].push(element);
    })
    
    return newObj;
  }
  
  const decimals = [1.3, 2.1, 2.4];
  const floored = function(num) { return Math.floor(num); };
  console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }