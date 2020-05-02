function sumStrings(a, b) {
  let sumStr = "";
  const aArr = a.split("").reverse();
  const bArr = b.split("").reverse();

  if (aArr.length >= bArr.length) {
    sumStr = getSumStr(aArr, bArr);
  } else {
    sumStr = getSumStr(bArr, aArr);
  }

  function getSumStr(biggerArr, smallerArr) {
    let sumStr = "";
    let next = 0;
    for (let i = 0; i < biggerArr.length; i++) {
      if (!smallerArr[i]) {
        const sum = Number(biggerArr[i]) + next;
        if (sum >= 10) {
          next = 1;
          sumStr += sum.toString()[1];
        } else {
          next = 0;
          sumStr += sum.toString();
        }
      } else {
        const sum = Number(biggerArr[i]) + Number(smallerArr[i]) + next;
        if (sum >= 10) {
          next = 1;
          sumStr += sum.toString()[1];
        } else {
          next = 0;
          sumStr += sum.toString();
        }
      }
    }

    return next.toString() + sumStr.split("").reverse().join("");
  }

  return sumStr.replace(/^0+/, "");
}

module.exports = sumStrings;
