function arrToObj(array, callback) {
	const newObj = {};
  
  array.forEach(element => {
    newObj[element] = callback(element);
  })
  
  return newObj;
}

const arrOfStrings = ['beer', 'glue'];
const capitalize = str => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }