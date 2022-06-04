const check = arr => {
    if (!arr[0]) return true;
    if (arr[0] > arr[1]) return false;
    return check(arr.slice(1));
}

// Given an array of integers, check to see if the array is already sorted (return true or false)
// Focus on clearly explaining your solution
// Once you've solved it iteratively, try to solve it recursively or using functional programming
// If you have time, write and walk through some test cases for your code.
// What's the time complexity of your solution?