// uses forEach inside of the previously created map function
const mapWith = (array, callback) => {
    const newArray = [];

    forEach(array, function(element) {
        newArray.push(callback(element));
    })

    return newArray;
}

// function forEach(array, callback) {
// 	for (let i = 0; i < array.length; i++) {
//     callback(array[i]);
//   }
// }

// const addTwo = num => num + 2;

// console.log(mapWith([1, 2, 3], addTwo));