// https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5

function parseInt(string) {
  const stringNumbersValues = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
    million: 1000000,
  };

  const strNoAnd = string
    .split(" ")
    .filter((e) => e !== "and")
    .join(" ");

  // This is a new, ES2018 feature.
  // const matches = strNoAnd.match(
  //   /(?<million>one million)? ?(?<thousand>\w*-?\w+ ?\w*? thousands?)? ?(?<hundred>\w* hundreds?)? ?(?<tensOnes>\w*-?\w+)?/
  // );

  const matches = strNoAnd.match(
    /(one million)? ?(\w*-?\w*? ?\w*? ?\w*-?\w*? thousands?)? ?(\w*-?\w* hundreds?)? ?(\w*-?\w*)?/
  );

  let result = 0;

  if (matches[1]) result += stringNumbersValues.million;

  if (matches[2]) {
    result +=
      parseInt(matches[2].replace(/thousands?/, "")) *
      stringNumbersValues.thousand;
  }

  if (matches[3])
    result +=
      parseInt(matches[3].replace(/hundred?/, "")) *
      stringNumbersValues.hundred;

  if (matches[4]) result += getTensOnesResult(matches[4]);

  return result;

  function getTensOnesResult(tensOnes) {
    let partialResult = 0;
    if (tensOnes.includes("-")) {
      const combNumArr = tensOnes.split("-");
      partialResult +=
        stringNumbersValues[combNumArr[0]] + stringNumbersValues[combNumArr[1]];
    } else {
      partialResult += stringNumbersValues[tensOnes];
    }
    return partialResult;
  }
}

module.exports = parseInt;


/**
 *
 *  Other solution:
 * var words = {
  "zero":0, "one":1, "two":2, "three":3, "four":4, "five":5, "six":6, "seven":7, "eight":8, "nine":9,
  "ten":10, "eleven":11, "twelve":12, "thirteen":13, "fourteen":14, "fifteen":15, "sixteen":16,
  "seventeen":17, "eighteen":18, "nineteen":19, "twenty":20, "thirty":30, "forty":40, "fifty":50,
  "sixty":60, "seventy":70, "eighty":80, "ninety":90
};
var mult = { "hundred":100, "thousand":1000, "million": 1000000 };
function parseInt(str) {
  return str.split(/ |-/).reduce(function(value, word) {
    if (words[word]) value += words[word];
    if (mult[word]) value += mult[word] * (value % mult[word]) - (value % mult[word]);
    return value;
  },0);
}
 */