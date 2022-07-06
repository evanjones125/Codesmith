const delay = (callback, wait, ...args) => {
    setTimeout(() => callback(...args), wait);
}

const called = function() { console.log('hello') };
console.log(delay(called, 1000));