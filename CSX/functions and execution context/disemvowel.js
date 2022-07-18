// replace method solution
// const disemvowel = str => str.replace(/a|e|i|o|u|A|E|I|O|U/g, '');

// filter method solution
const disemvowel = str => {
    const vowels = /a|e|i|o|u/;

    const removed = str.split('').filter(letter => {
        if (!vowels.test(letter.toLowerCase())) return letter;
    });

    return removed.join('');
}

console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'