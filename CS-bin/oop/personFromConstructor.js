const personFromConstructor = (name, age) => {
    const person = new PersonConstructor();
    person.name = name;
    person.age = age;
    return person;
}

function PersonConstructor() {
    this.greet = function() {
        console.log('hello');
    }
}

const mike = personFromConstructor('Mike', 30);

console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'