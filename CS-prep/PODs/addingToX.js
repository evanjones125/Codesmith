function addingToX(num) {
    if (typeof num !== 'number') throw new TypeError("wrong input type");
    
    //return num * (num + 1) / 2;

    sum = 0;
  
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
  
    return sum;
  }
  
  let time1 = performance.now();

  addingToX(1000000000);

  //console.log(addingToX(3));

  let time2 = performance.now();

  console.log(`time elapsed: ${(time2 - time1) / 1000} seconds`);