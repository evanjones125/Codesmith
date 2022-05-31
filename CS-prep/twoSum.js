function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      let total = arr[i];
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] + total == target) {
          return true;
        }
      }
    }
  
    return false;
  }
  
  function twoSumTests() {
    console.log(twoSum([1,2,5,7], 3), ' -> ', true);
    console.log(twoSum([1,2,5,7], 5), ' -> ', false);
    console.log(twoSum([1], 5), ' -> ', false);
    console.log(twoSum([1, -1, 0, -2, 2, 2, 3, 4, 5, 7], -1), ' -> ', true);
  }
  
  twoSumTests() // uncomment to test