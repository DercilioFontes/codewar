// https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
  const numCounterObj = {};
  for (const n of A) {
    if (numCounterObj[n]) numCounterObj[n]++;
    else numCounterObj[n] = 1;
  }
  const oddKey = Object.keys(numCounterObj).find(
    k => numCounterObj[k] % 2 !== 0
  );
  return Number(oddKey);
}

module.exports = findOdd;

/**
 * Other solution
 *
 * const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR
 */