function palindrome(string) {
    if (string.length <= 1) return true;
    
    else {
        if (string[0].replace(/ |-|,/gi, '').toLowerCase() === string[string.length - 1].replace(/ |-|,/gi, '').toLowerCase()) {
            const newStr = string.replace(/ |-|,/gi, '').toLowerCase()
            return palindrome(newStr.slice(1, -1));
        } else {
            return false;
        }
    }
}

console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
console.log(palindrome("llama mall")); //-> true
console.log(palindrome("jmoney")); //-> false