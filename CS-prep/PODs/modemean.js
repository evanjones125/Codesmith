const modemean = (input) => {
    //find mode and mean; store values in variables
    const avg = Math.floor(mean(input));
    const most = Math.floor(mode(input));

    console.log(avg, most);

    //compare mean and mode
    if (avg === most) {
        return true;
    } else {return false};
}

const mean = (arr) => arr.reduce((a, b) => a + b) / arr.length;
  
const mode = (arr) => {
    //create empty object to track occurrences
    const storage = {};

    arr.forEach(number => {
        //if number does not exist as a key in storage,
        //set it as a key with a value pair of 1
        if (storage[number]) {
            storage[number] += 1;
        } else {storage[number] = 1};
    })

    //create storage variable that can account for potential of negative value modes
    let highestKey = -Infinity;
    let highestValue = 0;

    //loop through object storage and find key with highest value pairing
    for (let key in storage) {
        const value = storage[key];
        if (value >= highestValue && Number(key > highestKey)) {
            //reassign values of our storage variables
            highestValue = value;
            highestKey = key;
        }
    }

    //convert highest key from string to int and return the mode
    return Number(highestKey);
}

console.log(modemean([6, 6, 7, 7, 7, 8, 8]))