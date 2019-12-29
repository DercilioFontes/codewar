const towerBuilder = require("./towerBuilder");

test("test 1", () => {
  expect(towerBuilder(1)).toEqual(["*"]);
});

test("test 2", () => {
  expect(towerBuilder(2)).toEqual([" * ", "***"]);
});

test("test 3", () => {
  expect(towerBuilder(3)).toEqual(["  *  "," *** ","*****"]);
});