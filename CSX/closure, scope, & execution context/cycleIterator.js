const cycleIterator = arr => {
    let acc = 0;
    
    return function() {
      if (acc === arr.length) acc = 0;
      acc ++;
      return arr[acc - 1];
    }
  }
  
  const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
  const getDay = cycleIterator(threeDayWeekend);
  console.log(getDay()); // should log: 'Fri'
  console.log(getDay()); // should log: 'Sat'
  console.log(getDay()); // should log: 'Sun'
  console.log(getDay()); // should log: 'Fri'