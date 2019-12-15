function solution(number) {
  number--; // bellow the number passed in
  let sum = 0;
  for (; number > 0; number--)
    if (number % 3 === 0 || number % 5 === 0) sum += number;
  return sum;
}

console.log(solution(10), "=", 23);

/**
 * number--; // bellow the number passed in
  let sum = 0;
  for (; number > 0; number--) {
    if (number % 3 === 0 || number % 5 === 0) sum += number;
    // else if (number % 3 === 0) sum += number;
    // else if (number % 5 === 0) sum += number;
  }
  return sum;
 */