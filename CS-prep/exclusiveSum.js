function exclusiveSum(arr) {
    const newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
      let otherSum = 0;
  
      for (let j = 0; j < arr.length; j++) {
        otherSum += arr[j];
      }
  
      otherSum -= arr[i];
  
      newArr.push(otherSum);
    }
  
    return newArr;
  }
  
  function exclusiveSumTests() {
    console.log(exclusiveSum([1,3,4,2]), ' -> ', [9, 7, 6, 8]);
    console.log(exclusiveSum([1,2,5]), ' -> ', [7, 6, 3]);
    console.log(exclusiveSum([1,2,5,0]), ' -> ', [7, 6, 3, 8]);
    console.log(exclusiveSum([1]), ' -> ', [0]);
  }
  
  exclusiveSumTests() // uncomment to test