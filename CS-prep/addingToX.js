function addingToX(num) {
    if (typeof num !== 'number') throw new TypeError("wrong input type");
    
    sum = 0;
  
    for (let i = 0; i < num; i++) {
      sum += num - i;
    }
  
    return sum;
  }
  
  console.log(addingToX(10));