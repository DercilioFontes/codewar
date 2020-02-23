const validBraces = require("./validBraces");

test("test 1", () => {
  expect(validBraces("()")).toBe(true);
});

test("test 2", () => {
  expect(validBraces("[(])")).toBe(false);
});
