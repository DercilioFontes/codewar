// Not done

function decomposeSum(n, k, s) {
  const result = [];
  if (n === 0 || k === 0 || s === 0) return result;
  const arr1ToK = [...Array(k).keys()].map(x => x + 1);
  if (n === 1) result.push(arr1ToK.map(x => x === s));
  if (n === 2) {
    const arrComb = arr1ToK.flatMap((e, i) => arr1ToK.slice(i + 1).map(x => [e, x]));
    result.push(...arrComb.filter(arr => arr.reduce((acc, e) => acc += e, 0) === s));
  } else {

  }

  return result;
}

decomposeSum(2, 6, 10);

module.exports = decomposeSum;
