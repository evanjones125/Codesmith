const findInOrderedSet = (arr, target) => {
    if (arr[0] === target) return true;
    if (arr.length === 0) return false;
    return findInOrderedSet(arr.slice(1), target);
}

const nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(nums, 4));  //-> true
console.log(findInOrderedSet(nums, 2));  //-> false