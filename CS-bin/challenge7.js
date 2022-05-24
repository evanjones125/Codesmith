const getArea = (radius) => {
    return 3.14 * square(radius);
}

const square = (num) => {return num ** 2};

console.log(getArea(5));