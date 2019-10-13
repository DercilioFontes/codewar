// reference: http://www.math.umbc.edu/~campbell/Computers/JavaScript/combin.html

function sum(num) {
  
  function partP(n, k) {
    if (k === undefined) {
      let sum = 0;
      for (let i = 1; i <= n; i++) {
        sum += partP(n, i);
      }
      return sum;
    }

    if (n === 0 || n === 1) return 1;
    if (k === 1 || n === k) return 1;
    let sum = 0;
    for (let i = 1; i <= Math.min(k, n - k); i++) {
      sum += partP(n - k, i);
    }

    return sum;
  }

  return partP(num);
}

console.log('sum(5)', sum(5));
console.log('sum(10)', sum(10));
