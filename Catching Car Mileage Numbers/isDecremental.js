
const isDecremental = (num) => {

    const decrement = (digit) => {
        let result = digit;
        for(let i = 0; i < num.toString().length - 1; i++) {
            result += digit === 0 ? digit = 9 : --digit;
        }
        return result;
    }

    const firstDigit = ('' + num).split('').shift();
    const re = new RegExp(`${decrement(firstDigit)}`);
    return re.test(num.toString());
}

console.log(3210, isDecremental(3210));
console.log(4325, isDecremental(4325));
console.log(6543, isDecremental(6543));
console.log(7891, isDecremental(7891));
console.log(1111, isDecremental(1111));
console.log(210987, isDecremental(210987));
console.log(654, isDecremental(654));