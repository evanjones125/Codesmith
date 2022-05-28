const reverseNumber = (num) => {
    let newNum = "";

    newNum += num;

    return newNum.split("").reverse().join("");

    return newNum;
}

console.log(reverseNumber(10000));