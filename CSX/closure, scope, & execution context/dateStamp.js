const dateStamp = func => {
    const newObj = {
      date: new Date().toDateString(),
      output: undefined
    };
    
    return function(...args) {
      for (let i in args) newObj.output = func(args[i]);
      return newObj;
    }
  }
  
  const stampedMultBy2 = dateStamp(n => n * 2);
  console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
  console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }