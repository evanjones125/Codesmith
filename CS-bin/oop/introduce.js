const personFromPersonStore = (name, age) => {
    const person = Object.create(personStore);
    person.name = name;
    person.age = age;
    return person;
}

const personStore = {
    greet: function() {
        console.log('hello');
    }
}

personStore.introduce = function() {
    console.log(`Hi, my name is ${this.name}`)
}

const sandra = personFromPersonStore('Sandra', 26);

console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'
sandra.introduce(); // -> Logs 'Hi, my name is Sandra'