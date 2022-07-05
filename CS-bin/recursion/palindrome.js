function palindrome(string) {
    
    if (string.length <= 1) return true;

    else {
        if (string[0].replace(/ |-|,/g, '').toLowerCase() === string[string.length - 1].replace(/ |-|,/g, '').toLowerCase()) {
            const newStr = string.replace(/ |-|,/g, '').toLowerCase()
            return palindrome(newStr.slice(1, -1));
        } 
        return false;
    }
}

console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); // -> true
console.log(palindrome("llama mall")); // -> true
console.log(palindrome("jmoney")); // -> false