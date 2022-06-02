function singleNumber(arr) {

    //create new object to store key/value pairs of
    //numbers with their number of occurrences
    const obj = {};
  
    //iterate through obj; if the number doesn't
    //exist in obj, add it; if it does, increment
    arr.forEach(number => {
      if (obj[number]) {
        obj[number] += 1;
      } else {
        obj[number] = 1;
      }
    });
  
    //iterate through obj again to check which
    //number has a value of 1; return that key
    for (let i in obj) {
      if (obj[i] === 1) {
        return i;
      }
    }
  
    //contingency
    return 'no single numbers found';
  }
  
  function singleNumberTests() {
    console.log(singleNumber([1, 2, 2]), ' -> ', 1);
    console.log(singleNumber([1]), ' -> ', 1);
    console.log(singleNumber([4, 1, 2, 1, 2]), ' -> ', 4);
  }
  
  singleNumberTests() // uncomment to test


//You are given an array of integers. Every number in the array appears twice, except for one. Find that single one.
// Challenge: solve this with linear time complexity
// Ex:
// Input: [2, 2, 1] Output: 1
// Input: [4, 1, 2, 1, 2] Output: 4
// Input: [1] Output: 1