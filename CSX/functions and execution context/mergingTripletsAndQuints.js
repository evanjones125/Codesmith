function mergingTripletsAndQuints(array1, array2) {
	const newArray = [];
  
    for (let i in array1) {
        if (array1[i] % 3 === 0 || array1[i] % 5 === 0) newArray.push(array1[i] + array2[i]);
        else newArray.push(array1[i]);
    }
    
    return newArray;
}

console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]