// Reference https://www.mathsisfun.com/numbers/fibonacci-sequence.html

function fibonacci(n) {
    if(n === 0) {
        return 0;
    }
    if(n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("fibonacci(4): ", fibonacci(4));
console.log("fibonacci(5): ", fibonacci(5));
console.log("fibonacci(6): ", fibonacci(6));
console.log("fibonacci(7): ", fibonacci(7));
console.log("fibonacci(8): ", fibonacci(8));
console.log("fibonacci(9): ", fibonacci(9));
console.log("fibonacci(10): ", fibonacci(10));
console.log("fibonacci(11): ", fibonacci(11));
console.log("fibonacci(12): ", fibonacci(12));