function addingAllTheWeirdStuff(array1, array2){
	//find sum of all the odd numbers and even numbers in array2 and store in respective variables
  let oddSum = 0;
  let evenSum = 0;
  let twentyCheck = false;
  
  for (const i in array2) {
    if (array2[i] % 2 == 1) {oddSum += array2[i]}
    if (array2[i] % 2 == 0) {evenSum += array2[i]}
    if (array2[i] > 20) {twentyCheck = true}
  }
  
  if (twentyCheck == true) {
    oddSum += 1;
    evenSum += 1;
  }
  
  //make new array to be returned; add modified array1 items to newArr
  const newArr = [];
  
  for (const j in array1) {
    if (array1[j] < 10) {newArr.push(array1[j] + oddSum)}
    if (array1[j] > 10) {newArr.push(array1[j] + evenSum)}
  }
    
  return newArr;
}

console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]