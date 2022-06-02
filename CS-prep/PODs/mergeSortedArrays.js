function mergeSortedArrays(array1, array2){

  //create empty array to which we will push the sorted values
  const sorted = [];

  if (array1.length >= array2.length) {
    
    //iterate through whichever array is larger
    //on each iteration, push arrayX[i] to sorted
    for (let i = 0; i < array1.length; i++) {

      //push the larger array at [i] to sorted; if arrayX[i]
      //is smaller than the last element of sorted,
      //splice arrayX[i] to be the second to last element
      if (array1[i] < sorted[sorted.length - 1]) {
        sorted.splice(sorted.length - 1, 0, array1[i]);
      } else sorted.push(array1[i]);

      //push the smaller array at [i] to sorted ONLY IF
      //i has not exceeded the length of the smaller array
      array2.length <= i ? null : sorted.push(array2[i]);
    }
  } else {
    for (let i = 0; i < array2.length; i++) {
     
      if (array2[i] < sorted[sorted.length - 1]) {
        sorted.splice(sorted.length - 1, 0, array2[i]);
      } else sorted.push(array2[i]);
      
      array1.length <= i ? null : sorted.push(array1[i]);
    }
  }
  
  return sorted;
}

function mergeSortedArraysTest() {
  let array1 = [1, 2, 5, 7, 9];
  let array2  = [0, 1, 3, 4, 6, 7, 9];
  console.log(mergeSortedArrays(array1, array2), " ->",  [0, 1, 1, 2, 3, 4, 5, 6, 7, 7, 9, 9]);
}

mergeSortedArraysTest() // uncomment to test



// Given two arrays of integers sorted in ascending order, merge both into a single sorted array. Return the new array.
// The new array should contain all elements from the input arrays, including duplicates.
// Ex:
// let array1 = [1, 2, 5, 7, 9]; let array2 = [0, 1, 3, 4, 6, 7, 9]; mergeSortedArrays(array1, array2) -> [0, 1, 1, 2, 3, 4, 5, 6, 7, 7, 9, 9]