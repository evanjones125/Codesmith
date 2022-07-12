class PersonClass {
	constructor(name) {
        this.name = name;
	}
    greet() { console.log('hello') }
}

const george = new PersonClass;
george.greet(); // -> Logs 'hello'