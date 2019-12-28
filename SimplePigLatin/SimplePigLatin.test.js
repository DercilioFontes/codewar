const pigIt = require("./SimplePigLatin");

test("test 1", () => {
  expect(pigIt("Pig latin is cool")).toBe("igPay atinlay siay oolcay");
});

test("test 2", () => {
  expect(pigIt("This is my string")).toBe("hisTay siay ymay tringsay");
});