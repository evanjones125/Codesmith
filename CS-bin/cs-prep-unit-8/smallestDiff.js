//find the smallest difference between any two numbers in an array

function smallestDiff(arr) {
    
    const newArr = arr.sort(function(a, b) {
      return a - b;
  })
  
  //newArr = [1, 3, 4]

  const diffStore = [];
  
  for (let i = 0; i < newArr.length; i++) {
    const storage = [arr[i], arr[i + 1]];
    diffStore.push(storage[1] - storage[0]);
  }

  const newStore = diffStore.sort(function(a, b) {
      return a - b;
  })

  return newStore[0];
}

// // To check if you've completed the challenge, uncomment these console.logs!
console.log(smallestDiff([4, 1, 3])); // -> 1
console.log(smallestDiff([10, 20, 30, 40, 50, 60])); // -> 10
console.log(smallestDiff([1, 2, 3, 4, 5, 6, 7])); // -> 1