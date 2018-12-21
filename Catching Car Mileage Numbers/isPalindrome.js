
const isPalindrome = (num) => {
    const arrDigits = ('' + num).split('');
    let j = arrDigits.length - 1;
    for(let i = 0; j >= i; i++) {
        console.log(arrDigits[i], arrDigits[j])
        if(arrDigits[i] !== arrDigits[j]) {
            return false;
        }
        j--;
    }
    return true;
}

console.log(12321, isPalindrome(12321));
console.log(123321, isPalindrome(123321));
console.log(3456, isPalindrome(3456));
console.log(3434, isPalindrome(3434));
console.log(45754, isPalindrome(45754));
console.log(282, isPalindrome(282));
console.log(22, isPalindrome(22));