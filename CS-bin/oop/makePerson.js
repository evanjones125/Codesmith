const makePerson = (name, age) => {
    const person = {};
    person.name = name;
    person.age = age;
    return person;
}

const vicky = makePerson('Vicky', 24);

console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24