const combineOperations = (val, arr) => {
    let output = 0;
    for (let i in arr) output = arr[i](output);
    return output;
}

function add100(num) { return num + 100 };
function divByFive(num) { return num / 5 };
function multiplyByThree(num) { return num * 3 };
function multiplyFive(num) { return num * 5 };
function addTen(num) { return num + 10 };

console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10