const censor = () => {
    const storage = {};
    
    return function(str1, str2) {
        if (str2) storage[str1] = str2;
        if (!str2) {
            const split = str1.split(' ');
            for (let i in split) {
                if (split[i].includes(Object.keys(storage)[0])) split.splice(i, 1, storage.dogs)
            }
            return split;
        }
    }
}

const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'