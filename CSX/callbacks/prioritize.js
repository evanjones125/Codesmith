const prioritize = (arr, callback) => {
    const trueArray = [];
    const falseArray = [];
    
    forEach(arr, function(element) {
      if (callback(element)) trueArray.push(element);
      if (!callback(element)) falseArray.push(element);
    })
    
    return trueArray.concat(falseArray);
  }
  
  function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  }
  
  function startsWithS(str) { return str[0].toLowerCase() === 's'; }
  const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
  console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']