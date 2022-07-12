const personFromConstructor = (name, age) => {

}

const mike = personFromConstructor('Mike', 30);

console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'