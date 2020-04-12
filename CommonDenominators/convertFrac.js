// https://www.codewars.com/kata/54d7660d2daf68c619000d95

function convertFrac(lst) {
  const lcm = getLcm(lst.map((e) => e[1]));

  // least common multiple
  function getLcm(arr) {
    const counter = {};
    let divisor = 2;

    if (arr.every((e) => e === 1)) return 1;

    // for (let i = 0; i < arr.length; i++) {
    //   if (arr.every((e) => arr[i] % e === 0)) return arr[i];
    // }

    while (arr.some((e) => e !== 1)) {
      while (arr.some((e) => e % divisor === 0)) {
        if (counter[divisor]) counter[divisor]++;
        else counter[divisor] = 1;
        arr = arr.map((e) => {
          if (e % divisor === 0) return e / divisor;
          else return e;
        });
      }

      divisor++;

      while (!isPrime(divisor)) {
        divisor++;
      }
    }

    return Object.entries(counter).reduce(
      (acc, [key, value]) => (acc *= Math.pow(key, value)),
      1
    );
  }

  function isPrime(num) {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  }

  return lst.map((e) => `(${e[0] * (lcm / e[1])},${lcm})`).join("");
}


module.exports = convertFrac;

/**
 * https://en.wikipedia.org/wiki/Least_common_multiple
 *
 * Other solution
 *
 * const gcd = (a, b) => b ? gcd(b, a % b) : a;
const lcm = (a, b) => a * b / gcd(a, b);

function convertFrac(arr) {
  const cd = arr.reduce((a, [_, d]) => lcm(d, a), 1);
  return arr.map(([n, d]) => `(${n * cd/d},${cd})`).join('');
}
 */