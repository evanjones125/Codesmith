const getRangeBetween = (x, y) => {
    if (y - x === 2) return [y - 1];
    return [x + 1].push(getRangeBetween(x + 1, y));
}

console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]
console.log(getRangeBetween(2, 4))