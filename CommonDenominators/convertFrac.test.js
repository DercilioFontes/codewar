const convertFrac = require("./convertFrac");
const lst1 = [
  [1, 2],
  [1, 3],
  [1, 4],
];

const lst2 = [
  [1, 100],
  [3, 1000],
  [1, 2500],
  [1, 20000],
];

const lst3 = [
  [296, 555],
  [7, 111],
  [4, 25]
];

test("test 1", () => {
  expect(convertFrac(lst1)).toBe("(6,12)(4,12)(3,12)");
});

test("test 2", () => {
  expect(convertFrac(lst2)).toBe("(200,20000)(60,20000)(8,20000)(1,20000)");
});

test("test 3", () => {
  expect(convertFrac(lst3)).toBe("(1480,2775)(175,2775)(444,2775)");
});