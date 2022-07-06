var getConcatenation = function(nums) {
    // const ans = [];

    // for (let i = 0; i < nums.length; i++) {
    //     ans.push(nums[i]);
    // }

    // for (let i = 0; i < nums.length; i++) {
    //     ans.push(nums[i]);
    // }

    return [...nums, ...nums];
}

console.log(getConcatenation([1, 2, 1]));