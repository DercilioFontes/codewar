// reference: https://www.geeksforgeeks.org/generate-unique-partitions-of-an-integer/

function sum(num) {
  const arrPart = new Array(num);
  let last = 0;
  arrPart[last] = num;
  let count = 0;

  while (true) {
    //console.log(arrPart);
    count++;


    let lastNo1Val = 0;

    // rightmost non-one value
    while (last >= 0 && arrPart[last] === 1) {
      lastNo1Val += arrPart[last];
      last--;
    }

    if (last < 0) return count;

    arrPart[last]--;
    lastNo1Val++;

    while (lastNo1Val > arrPart[last]) {
      arrPart[last + 1] = arrPart[last];
      lastNo1Val -= arrPart[last];
      last++;
    }

    arrPart[last + 1] = lastNo1Val;
    last++;
  }
}

console.log('sum(5)', sum(5));
