const length = [];
const popped = [];

function cascade(number, counter = 0) {
  let toString = '' + number;
  const numberLength = toString.length;
  length.push(toString.length);

  if (numberLength === 1) {
    counter ++;
    console.log(Number(toString));
  }
    
  if (counter < length.length) {
    console.log(Number(toString));
    popped.push(toString[numberLength - 1]);
    return cascade(Number(toString.slice(0, toString.length - 1)), counter += 1);
  }
  
  if (counter >= numberLength && counter < (length[0] * 2) - 1) {
    toString += popped[popped.length - 1];
    popped.pop();
    console.log(Number(toString));
    return cascade(Number(toString), counter += 1);
  }
}



cascade(1876351)
// should print
/*
111
11
1
11
111
*/