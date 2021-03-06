const removeSmallest = require("./removeSmallest");

test("test 1", () => {
  expect(removeSmallest([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
});

test("test 2", () => {
  expect(removeSmallest([5, 3, 2, 1, 4])).toEqual([5, 3, 2, 4]);
});

test("test 3", () => {
  expect(removeSmallest([2, 2, 1, 2, 1])).toEqual([2, 2, 2, 1]);
});

test("test 4", () => {
  expect(removeSmallest([])).toEqual([]);
});