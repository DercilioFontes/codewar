
// reference: https://flaviocopes.com/javascript-regular-expressions/
const isAllSameDigit = (num) => {
    const firstDigit = ('' + num).split('').shift();
    const re = new RegExp(`^${firstDigit}+$`);
    return re.test(num.toString());
}

console.log(111, isAllSameDigit(111));
console.log(113457, isAllSameDigit(113457));
console.log(55555, isAllSameDigit(55555));
console.log(55576, isAllSameDigit(55576));
console.log(333333, isAllSameDigit(333333));
