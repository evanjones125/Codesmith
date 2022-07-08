const createSecretHolder = secret => {
    let current = secret;
    
    return output = {
        getSecret: function() {
            return current;
        },
        setSecret: function(num) {
            current = num;
        }
    }
}

obj = createSecretHolder(5)
console.log(obj.getSecret()) // => returns 5
obj.setSecret(2)
console.log(obj.getSecret()) // => returns 2