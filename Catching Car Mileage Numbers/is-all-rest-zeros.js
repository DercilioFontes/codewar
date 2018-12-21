
// reference: http://www.cbs.dtu.dk/courses/27610/regular-expressions-cheat-sheet-v2.pdf
const isAllRestZero = (num) => {
    const arrRemainingDigits = ('' + num).split('').slice(1).join('');
    return /^0+$/.test(arrRemainingDigits);
}

console.log(100, isAllRestZero(100));
console.log(101340, isAllRestZero(101340));
console.log(101220, isAllRestZero(101220));
console.log(10000, isAllRestZero(10000));
console.log(101, isAllRestZero(101));
console.log(100000000, isAllRestZero(100000000));