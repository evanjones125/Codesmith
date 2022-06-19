const prioritize = (arr, callback) => {
    const trueArray = [];
    const falseArray = [];
    
    arr.forEach(element => {
      if (callback(element)) trueArray.push(element);
      if (!callback(element)) falseArray.push(element);
    })
    
    return trueArray.concat(falseArray);
  }
  
  function startsWithS(str) { return str[0].toLowerCase() === 's'; }
  const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
  console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']