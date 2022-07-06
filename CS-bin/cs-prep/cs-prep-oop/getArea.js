const getArea = radius => {
    return 3.14 * square(radius);
}

const square = num => num ** 2;

console.log(getArea(5));