const commutative = (one, two, val) => {
    const resultOne = one(val);
    const resultTwo = two(val);

    const oneOnTwo = one(resultTwo);
    const twoOnOne = two(resultOne);

    if (oneOnTwo === twoOnOne) return true;
    return false;
}

const multBy3 = n => n * 3;
const divBy4 = n => n / 4;
const subtract5 = n => n - 5;
console.log(commutative(multBy3, divBy4, 11)); // should log: true
console.log(commutative(multBy3, subtract5, 10)); // should log: false
console.log(commutative(divBy4, subtract5, 48)); // should log: false