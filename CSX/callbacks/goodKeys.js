const goodKeys = (obj, callback) => {
    const returnArr = [];
    
    for (const i in obj) {
      if (callback(obj[i])) returnArr.push(i);
    }
    
    return returnArr;
  }
  
  const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
  function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
  console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']