const toCamelCase = require("./toCamelCase");

test("test 1", () => {
  expect(toCamelCase("")).toBe("");
});

test("test 2", () => {
  expect(toCamelCase("the_stealth_warrior")).toBe("theStealthWarrior");
});

test("test 3", () => {
  expect(toCamelCase("The-Stealth-Warrior")).toBe("TheStealthWarrior");
});

test("test 4", () => {
  expect(toCamelCase("A-B-C")).toBe("ABC");
});
