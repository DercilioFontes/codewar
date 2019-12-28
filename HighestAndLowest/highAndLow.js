function highAndLow(numbers) {
  const nStrArr = numbers.split(" ");
  let highest = Number(nStrArr[0]);
  let lowest = Number(nStrArr[0]);
  for (let n of nStrArr) {
    n = Number(n);
    if (n > highest) highest = n;
    if (n < lowest) lowest = n;
  }
  return `${highest} ${lowest}`;
}

module.exports = highAndLow;

/**
 * Other solution
 * numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
 */