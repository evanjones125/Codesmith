let friendsAvailable = true;

function makePlans(name) {
	return (callFriend(friendsAvailable, name));
}

function callFriend(bool, name) {
	if (bool == true) {
    return `Plans made with ${name} this weekend`;
  } else {
    return "Everyone is busy this weekend"
  }
}

console.log(makePlans("Mary")) // should return: "Plans made with Mary this weekend'
friendsAvailable = false;
console.log(makePlans("James")) //should return: "Everyone is busy this weekend."