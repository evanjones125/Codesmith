function makePerson(name, age) {
	const newUser = Object.create(null);

  newUser.name = name;
  newUser.age = age;
  
	return newUser;
}

const vicky = makePerson('Vicky', 24);

console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24