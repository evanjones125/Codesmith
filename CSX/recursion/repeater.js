console.log('Hello, world!');

function repeater(char) {
  if (char.length == 5) return char;
  else return repeater(char + char[0]);
}

console.log(repeater('g'));
console.log(repeater('j'));