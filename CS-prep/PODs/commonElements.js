function commonElements(array1, array2){
    const  newArr = [];
  
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array2[j] == array1[i] && !newArr.includes(array2[j])) {
          newArr.push(array2[j]);
        }
      }
    }
    
    return newArr;
  }
  
  function commonElementsTests() {
    var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
    var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
    console.log(commonElements(array1, array2), " -> ", [ 12, 'ferret', 'dog']);
  }
  
  commonElementsTests() // uncomment to test