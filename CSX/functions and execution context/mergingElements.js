function mergingElements(array1, array2){
	let newArray = array1;
  
    for (let i = 0; i < array1.length; i++) {
        newArray[i] += array2[i];
    }
       
    return newArray;     
}

console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]
console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]