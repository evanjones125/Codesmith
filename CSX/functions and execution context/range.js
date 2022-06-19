const getTheRange = arr => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return [min, max, (max - min)];
}

console.log(getTheRange([3, 2, 5, 4, 7, 9, 10]));