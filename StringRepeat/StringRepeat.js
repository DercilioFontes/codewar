function repeatStr(n, s) {
  let result = "";
  for (let i = 1; i <= n; i++){
    result += s;
  }
  return result;
}

console.log(repeatStr(3, "*"));
console.log(repeatStr(5, "#"));
console.log(repeatStr(2, "ha "));

/**
 * Better solution:
 * return s.repeat(n);
 * reference:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
 */