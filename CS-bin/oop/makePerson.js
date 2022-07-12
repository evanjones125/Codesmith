const makePerson = (name, age) => {
    const person = {};
    person.name = name;
    person.age = age;
    return person;
}

console.log(makePerson('shrek', 69));