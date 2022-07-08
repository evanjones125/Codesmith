const createSecretHolder = secret => {
    return output = {
        getSecret: function() {
            return secret;
        },
        setSecret: function() {
            return secret;
        }
    }
}

obj = createSecretHolder(5)
obj.getSecret() // => returns 5
obj.setSecret(2)
obj.getSecret() // => returns 2