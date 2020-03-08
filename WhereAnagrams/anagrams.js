// https://www.codewars.com/kata/523a86aa4230ebb5420001e1

function anagrams(word, words) {
  function countLetters(word) {
    const letterCounter = {};
    word.split("").forEach(letter => {
      if (letterCounter[letter]) letterCounter[letter]++;
      else letterCounter[letter] = 1;
    });
    return letterCounter;
  }
  function compareWords(word1, word2) {
    if (word1.length !== word2.length) return false;
    const objWord1 = countLetters(word1);
    const objWord2 = countLetters(word2);
    for (const key in objWord1) {
      if (!objWord2.hasOwnProperty(key)) return false;
      else if (objWord1[key] !== objWord2[key]) return false;
    }
    return true;
  }

  return words.filter(wordToCheck => compareWords(word, wordToCheck));
}

module.exports = anagrams;

/**
 * Other solution
 *
 *
String.prototype.sort = function() {
  return this.split("").sort().join("");
};

function anagrams(word, words) {
  return words.filter(function(x) {
      return x.sort() === word.sort();
  });
}
 */