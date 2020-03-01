// https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str) {
  return str
    .split(/[-_]/)
    .map((word, i) => {
      if (i > 0) word = word[0].toUpperCase() + word.substring(1);
      return word;
    })
    .join("");
}

module.exports = toCamelCase;

/**
 * Other solution
 *
 * function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}
 */