function array_diff(a, b) {
  return a.filter(x => !b.includes(x));
}

console.log(array_diff([], [4, 5]));
console.log(array_diff([3, 4], [3]));
console.log(array_diff([1, 8, 2], []));