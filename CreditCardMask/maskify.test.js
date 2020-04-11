


const maskify = require("./maskify");

test("test 1", () => {
  expect(maskify("4556364607935616")).toBe("############5616");
});

test("test 2", () => {
  expect(maskify("1")).toBe("1");
});

test("test 3", () => {
  expect(maskify("11111")).toBe("#1111");
});