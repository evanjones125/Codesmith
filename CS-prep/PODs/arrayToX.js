function arrayToX(num) {
    let newArr = [];
  
    for (let i = 1; i <= num; i++) {
      newArr.push(addingToX(i));
    }
    
    return newArr;
  }
  
  console.log(arrayToX(3));