class PersonClass {
	constructor(name) {
        this.name = name;
	}
    greet = function() { console.log('hello') }
}

const george = new PersonClass;
george.greet(); // -> Logs 'hello'