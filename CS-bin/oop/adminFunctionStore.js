const userFunctionStore = {
    sayType: function() {
        console.log("I am a " + this.type);
    }
}
  
function userFactory(name, score) {
    let user = Object.create(userFunctionStore);
    user.type = "User";
    user.name = name;
    user.score = score;
    return user;
}
  
const adminFunctionStore = {
    
}