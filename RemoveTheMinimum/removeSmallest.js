function removeSmallest(numbers) {
  const lowest = Math.min(...numbers);
  const arrResult = [...numbers];
  arrResult.splice(numbers.indexOf(lowest), 1);
  return arrResult;
}

module.exports = removeSmallest;