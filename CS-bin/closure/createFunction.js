function createFunction() {
    return function makeHello() {
        console.log("hello");
    }
}

const function1 = createFunction();
function1(); // => should console.log('hello');