function makePerson(name, age) {
    const newObj = {};

    newObj.name = name;
    newObj.age = age;

    return newObj;
}

console.log(makePerson("evan", 24));