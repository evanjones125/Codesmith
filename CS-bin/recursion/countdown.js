const countdown = num => {
    if (num === 1) console.log(1);
    else {
        console.log(num);
        return countdown(num - 1);
    }
}

countdown(5);
countdown(10);