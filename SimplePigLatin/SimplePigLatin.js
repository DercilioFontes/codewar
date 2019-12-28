function pigIt(str) {
  //Code here
  return str.split(" ").map(word => changeWord(word)).join(" ");

  function changeWord(word) {
    if (/[A-Za-z]/.test(word)) {
      const charArr = word.split("");
      charArr.push(charArr[0] + "ay");
      charArr[0] = "";
      return charArr.join("");
    } else {
      return word; // only punctuation
    }
  }
}

module.exports = pigIt;

/**
 * Other solution
 * return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
 */