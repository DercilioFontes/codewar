// https://www.codewars.com/kata/vigenere-cipher-helper/train/javascript

function VigenèreCipher(key, abc) {
  this.encode = function(str) {
    const msgKeyed =
      key.repeat(str.length / key.length) + // repeat function already converts to a integer
      key.substring(0, str.length % key.length);
    const msgKeyedArr = msgKeyed.split("");
    const strArr = str.split("");
    let result = "";

    for (let i = 0; i < msgKeyedArr.length; i++) {
      const strLetterIndexInABC = abc.indexOf(strArr[i]);
      if (strLetterIndexInABC !== -1) {
        const keyLetterIndexInABC = abc.indexOf(msgKeyedArr[i]);
        const newLetterIndexInABC =
          (keyLetterIndexInABC + strLetterIndexInABC) % abc.length;
        result += abc.charAt(newLetterIndexInABC);
      } else result += strArr[i];
    }

    return result;
  };

  this.decode = function(str) {
    const msgKeyed =
      key.repeat(str.length / key.length) + // repeat function already converts to a integer
      key.substring(0, str.length % key.length);
    const msgKeyedArr = msgKeyed.split("");
    const strArr = str.split("");
    let result = "";

    for (let i = 0; i < msgKeyedArr.length; i++) {
      const strLetterIndexInABC = abc.indexOf(strArr[i]);
      if (strLetterIndexInABC !== -1) {
        const keyLetterIndexInABC = abc.indexOf(msgKeyedArr[i]);
        const newLetterIndexInABC =
          (abc.length - keyLetterIndexInABC + strLetterIndexInABC) % abc.length;

        result += abc.charAt(newLetterIndexInABC);
      } else result += strArr[i];
    }

    return result;
  };
}

module.exports = VigenèreCipher;
