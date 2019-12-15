function openOrSenior(data) {
  return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? "Senior" : "Open");
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20]
  ]),
  "=",
  ["Open", "Senior", "Open", "Senior"]
);

console.log(
  openOrSenior([
    [3, 12],
    [55, 1],
    [91, -2],
    [54, 23]
  ]),
  "=",
  ["Open", "Open", "Open", "Open"]
);

console.log(
  openOrSenior([
    [59, 12],
    [55, -1],
    [12, -2],
    [12, 12]
  ]),
  "=",
  ["Senior", "Open", "Open", "Open"]
);

/**
Good solution
Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}
 */