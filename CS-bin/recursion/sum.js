const sum = arr => {
    return arr.length === 1 ? arr[0] : arr[0] + sum(arr.slice(1));
}

 console.log(sum([1,1,1])); // -> returns 3
 console.log(sum([1,2,3,4,5,6])); // -> returns 21