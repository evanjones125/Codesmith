const select = (arr, callback) => {
    const output = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
          output.push(arr[i]);
      }
    }

    return output;
  }
  
  const arr = [1, 2, 3, 4, 5, -10];
  const isEven = n => n % 2 === 0;
  console.log(select(arr, isEven)); // should log: [2, 4]