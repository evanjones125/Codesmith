const multiMap = (arr1, arr2) => {
	const newObj = {};
  
  for (let i = 0; i < arr1.length; i++) {
    newObj[arr1[i]] = [];
    
    for (let j = 0; j < arr2.length; j++) {
      newObj[arr1[i]].push(arr2[j](arr1[i]));
    }
  }
  
  return newObj;
}

function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }