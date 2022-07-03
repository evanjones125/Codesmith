const prioritize = (arr, callback) => {
    const output = [];

    for (let i in arr) if (callback(arr[i])) output.push(arr[i]);
    for (let i in arr) if (!callback(arr[i])) output.push(arr[i]);

    return output;
}

const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']