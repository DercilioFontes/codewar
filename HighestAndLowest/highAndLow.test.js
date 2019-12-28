const highAndLow = require("./highAndLow");

test("test 1", () => {
  expect(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")).toBe("542 -214");
});

test("test 2", () => {
  expect(highAndLow("1 2 3 4 5 6 7 8 9")).toBe("9 1");
});