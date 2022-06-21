const intersection = arrs => {
    let acc = arrs.pop();

    while (arrs.length) {
        const currentArr = arrs.pop();
        const output = [];

        currentArr.forEach(element => {
            if (acc.includes(element)) output.push(element);
        })

        acc = output;
    }

    return acc;
}
  
  const arr1 = [5, 10, 15, 20];
  const arr2 = [15, 88, 1, 5, 7];
  const arr3 = [1, 10, 15, 5, 20];
  console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]