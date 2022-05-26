function makePerson(name, age) {
    const newObj = {};

    newObj["name"] = name;
    newObj["age"] = age;

    return newObj;
}

console.log(makePerson("evan", 24));




// function multiplyByTwo(num) {
//     return num * 2;
// }

// multiplyByTwo.stored = 5;
// multiplyByTwo(3);

// console.log(multiplyByTwo.stored);
// console.log(multiplyByTwo.prototype);


// const reverse = (str) => {
//     let newStr = "";

//     for (let i = 1; i <= str.length; i++) {newStr += str[str.length - i]};
    
//     return newStr;
// }

// console.log(reverse("abcdefghijklmnop"));




// function userCreator(name, score) {
//     const newUser = {};
//     newUser.name = name;
//     newUser.score = score;
//     newUser.increment = function() {
//         newUser.score++;
//     }
//     return newUser;
// }

// const user1 = userCreator('Will', 3);
// const user2 = userCreator('Charlotte', 5);

// user1.increment();

// console.log(user1, user2);