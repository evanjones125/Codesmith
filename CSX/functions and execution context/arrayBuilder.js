function arrayBuilder(obj) {
	const result = [];
  
  //check for empty object
  if (Object.keys(obj).length === 0) {return result}
  //if object isn't empty, fill result with x number of y, whereas 'y': x are a key-value pair
  else {
    for (let i in obj) {
      let howMany = obj[i];
      
      for (let j = 0; j < howMany; j++) {
      	result.push(i);
      }
    }
    return result;
  }
}

console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []