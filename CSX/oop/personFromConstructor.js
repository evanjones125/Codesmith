function PersonConstructor() {
    this.greet = function() {
      console.log('hello');
    }
  }
  
  function personFromConstructor(name, age) {
    const newUser = new PersonConstructor();
    newUser.name = name;
    newUser.age = age;
    return newUser;
  }
  
  const mike = personFromConstructor('Mike', 30);
  
  console.log(mike.name); // -> Logs 'Mike'
  console.log(mike.age); // -> Logs 30
  mike.greet(); // -> Logs 'hello'