// https://www.codewars.com/kata/5412509bd436bd33920011bc

function maskify(cc) {
  return cc
    .split("")
    .map((e, i) => {
      if (i > cc.length - 5) return e;
      else return "#";
    })
    .join("");
}

module.exports = maskify;

/**
 * Other solution
 *
 * function maskify(cc) {
  return cc.replace(/.(?=....)/g, '#');
}
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions
 * x(?=y)
Lookahead assertion: Matches "x" only if "x" is followed by "y". For example, /Jack(?=Sprat)/ matches "Jack" only if it is followed by "Sprat".
/Jack(?=Sprat|Frost)/ matches "Jack" only if it is followed by "Sprat" or "Frost". However, neither "Sprat" nor "Frost" is part of the match results.
 */
