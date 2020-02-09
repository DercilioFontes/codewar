const decomposeSum = require("./SumDecomposition");

// function decomposeSum(n, k, s) { ... }

test("test 1", () => {
  expect(decomposeSum(3, 6, 10)).toEqual([
    [1, 3, 6],
    [1, 4, 5],
    [2, 3, 5]
  ]);
});

test("test 2", () => {
  expect(decomposeSum(1, 2, 3)).toEqual([]);
});

test("test 3", () => {
  expect(decomposeSum(5, 5, 15)).toEqual([[1, 2, 3, 4, 5]]);
});

test("test 4", () => {
  expect(decomposeSum(0, 0, 0)).toEqual([]);
});
