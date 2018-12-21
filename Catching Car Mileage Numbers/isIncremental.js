
const isIncremental = (num) => {

    const increment = (digit) => {
        let result = digit;
        for(let i = 0; i < num.toString().length - 1; i++) {
            result += digit === 9 ? digit = 0 : ++digit;
        }
        return result;
    }

    const firstDigit = ('' + num).split('').shift();
    const re = new RegExp(`${increment(firstDigit)}`);
    return re.test(num.toString());
}

console.log(123, isIncrimental(123));
console.log(1235, isIncrimental(1235));
console.log(3456, isIncrimental(3456));
console.log(34560, isIncrimental(34560));
console.log(890123, isIncrimental(890123));
console.log(8013, isIncrimental(8013));