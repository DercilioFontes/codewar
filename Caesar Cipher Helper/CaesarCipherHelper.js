// reference: https://www.codewars.com/kata/526d42b6526963598d0004db

var CaesarCipher = function (shift) {
  // TODO: Complete the CaesarCipher object
  this.shift = shift;

  this.alphabetUpperCaseArray = [...Array(26)].map(
    x => String.fromCharCode(i++),
    (i = "A".charCodeAt(0))
  );

  this.encode = function(str) {
    const charUpperCaseArray = str.toUpperCase().split("");

    for (let i = 0; i < charUpperCaseArray.length; i++) {
      const charIndex = this.alphabetUpperCaseArray.indexOf(
        charUpperCaseArray[i]
      );
      let newCharIndex;

      if (charIndex >= 0) {
        newCharIndex = charIndex + this.shift;
        if (newCharIndex > 25) {
          newCharIndex -= 26;
        }
        charUpperCaseArray[i] = this.alphabetUpperCaseArray[newCharIndex];
      }
    }

    return charUpperCaseArray.join("");
  };

  this.decode = function(str) {
    const charUpperCaseArray = str.toUpperCase().split("");

    for (let i = 0; i < charUpperCaseArray.length; i++) {
      const charIndex = this.alphabetUpperCaseArray.indexOf(
        charUpperCaseArray[i]
      );
      let newCharIndex;

      if (charIndex >= 0) {
        newCharIndex = charIndex - this.shift;
        if (newCharIndex < 0) {
          newCharIndex += 26;
        }
        charUpperCaseArray[i] = this.alphabetUpperCaseArray[newCharIndex];
      }
    }

    return charUpperCaseArray.join("");
  };
};

const c = new CaesarCipher(5);

console.log(c.encode("Codewars")); // "HTIJBFWX"
console.log(c.decode("BFKKQJX")); // "WAFFLES"

// Good other solution
/*
var CaesarCipher = function (shift) {
  var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  this.encode = function(str) {
    return str.replace(/[a-z]/gi, function(s) {
      return a[(a.indexOf(s.toUpperCase()) + shift) % 26]
    })
  }
  this.decode = function(str) {
    return str.replace(/[a-z]/gi, function(s) {
      return a[(a.indexOf(s.toUpperCase()) + 26 - shift) % 26]
    })
  }
};
*/