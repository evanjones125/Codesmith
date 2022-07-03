const rating = (arr, val) => {
    let trues = 0;

    for (let i in arr) {
        if (arr[i](val)) trues ++;
    }
    
    return trues === 0 ? 0 : (trues / arr.length) * 100;
}

const isEven = n => n % 2 === 0;
const greaterThanFour = n => n > 4;
const isSquare = n => Math.sqrt(n) % 1 === 0;
const hasSix = n => n.toString().includes('6');
const checks = [isEven, greaterThanFour, isSquare, hasSix];
console.log(rating(checks, 64)); // should log: 100
console.log(rating(checks, 66)); // should log: 75