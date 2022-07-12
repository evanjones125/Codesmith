class PersonClass {
	constructor(name) {
        this.name = name;
	}
    greet = function() { console.log('hello') }
}

class DeveloperClass extends PersonClass {
    introduce() { console.log(`Hello World, my name is ${this.name}`) }
}

const george = new PersonClass;
george.greet(); // -> Logs 'hello'

const thai = new DeveloperClass('Thai', 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'