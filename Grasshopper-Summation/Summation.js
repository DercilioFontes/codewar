function summation(num) {
  let sum = 0;
  for (; num > 0; num--){
    sum += num;
  }
  return sum;
}

console.log(summation(1));
console.log(summation(8));

/**
 * Better solution:
 * const summation = n => n * (n + 1) / 2;
 * reference:
 * https://en.wikipedia.org/wiki/Summation
 */