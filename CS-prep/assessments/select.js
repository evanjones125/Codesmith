const select = (arr, callback) => {
    if (!arr.length) return null;
    else {
        return callback(arr[0]), select(arr.slice(1), callback);
    }
  }
  
  const arr = [1, 2, 3, 4, 5];
  const isEven = n => n % 2 === 0;
  console.log(select(arr, isEven)); // should log: [2, 4]