function deleteNth(arr, n) {
  const counter = {};
  return arr.filter(e => {
    if (counter[e]) counter[e]++;
    else counter[e] = 1;

    if (counter[e] > n) return false;
    else return true;
  });
}

module.exports = deleteNth;
