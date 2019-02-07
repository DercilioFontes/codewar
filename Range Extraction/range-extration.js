// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/solutions/javascript

function solution(list) {
  let stringResult = "";
  for (let i = 0, j = 1; i < list.length; i++) {
    if (j < list.length - 1) {
      if (list[j] - list[i] > 1 || list[j + 1] - list[i] > 2) {
        stringResult += list[i] + (i != list.length - 1 ? "," : "");
      } else {
        stringResult += list[i] + "-";
        while (list[j] - list[i] == 1) {
          i++;
          j++;
        }
        stringResult += list[i] + (i != list.length - 1 ? "," : "");
      }
    } else {
      stringResult += list[i] + (i != list.length - 1 ? "," : "");
    }
    j++;
  }
  return stringResult;
}

/* 
A clever solution:

function solution(list){
   for(var i = 0; i < list.length; i++){
      var j = i;
      while(list[j] - list[j+1] == -1) j++;
      if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
  }
  return list.join();
}
*/

console.log(
  solution([
    -6,
    -3,
    -2,
    -1,
    0,
    1,
    3,
    4,
    5,
    7,
    8,
    9,
    10,
    11,
    14,
    15,
    17,
    18,
    19,
    20
  ]),
  " | ",
  "-6,-3-1,3-5,7-11,14,15,17-20"
);
