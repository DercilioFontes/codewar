function printerErrors(s) {
  const totalChar = s.split('').length;
  const notColorString = (s.match(/[^a-m]/g) || []).length;

  return notColorString + "/" + totalChar;
}

console.log(printerErrors("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));

/**
 * Obs: match returns null when no match
 * reference: https://flaviocopes.com/javascript-string-match/
 */