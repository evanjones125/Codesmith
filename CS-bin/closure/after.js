const after = (count, func) => {
    let counter = 1;

    return function() {
        counter < count ? counter++ : func();
    }
}

const called = function() { console.log('hello') };
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed