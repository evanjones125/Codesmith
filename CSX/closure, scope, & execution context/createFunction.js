function createFunction() {
    return function hello() {
        return 'hello world';
    }
}

const myFunction = createFunction();
console.log(myFunction());

// Create a function createFunction that creates and returns a function. When that newly created function is called, it should return the string 'hello world'.

// const myFunction = createFunction();
//  // Let's call the function we created and log its return value
// console.log(myFunction()); //should log: 'hello world'