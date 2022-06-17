const map = (array, callback) => {
    const newArray = [];
    
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }

    return newArray;
}

const addTwo = num => num + 2;

console.log(map([1, 2, 3], addTwo));