function equalTo(num) {
    return function (x) {
        return x === num;
    }
}

const checkFive = equalTo(5);

console.log(checkFive(5));