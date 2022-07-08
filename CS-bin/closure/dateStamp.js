const dateStamp = func => {
    const newObj = {};

    return function(...args) {
        newObj.date = Date().toString();
        newObj.output = func(args);
        return newObj;
    }
}

const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }