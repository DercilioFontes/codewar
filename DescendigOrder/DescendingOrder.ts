function descendingOrder(n: number) {
  const nDSC = n
    .toString()
    .split("")
    .sort()
    .reverse()
    .join("");
  // return Number(nDSC);
  return +nDSC;
}

console.log(descendingOrder(1234));

/*
references:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
https://flaviocopes.com/how-to-convert-string-to-number-javascript/
https://stackoverflow.com/questions/52030110/sorting-strings-in-descending-order-in-javascript-most-efficiently
*/