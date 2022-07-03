const goodKeys = (obj, callback) => {
    const output = [];

    for (const key in obj) callback(obj[key]) ? output.push(key) : null;
    
    return output;
}

const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']