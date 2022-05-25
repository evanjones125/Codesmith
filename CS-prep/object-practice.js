const reverse = (str) => {
    let newStr = "";

    for (let i = 1; i <= str.length; i++) {newStr += str[str.length - i]};
    
    return newStr;
}

console.log(reverse("abcdefghijklmnop"));




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