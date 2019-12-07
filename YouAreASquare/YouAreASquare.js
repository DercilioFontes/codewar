function isSquare(n) {
  return Number.isInteger(Math.sqrt(n));
}

console.log(isSquare(25));
console.log(isSquare(26));

/**
 * reference:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 */