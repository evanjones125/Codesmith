const myForEach = (arr, callback) => {
    for (let i in arr) {
        callback(arr[i]);
    }
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

const nums = [1, 2, 3];
myForEach(nums, addToSum);
console.log(sum); // Should output 6