const sumStrings = require("./sumStrings");

test("test 1", () => {
  expect(sumStrings("123", "456")).toBe("579");
});

test("test 2", () => {
  expect(
    sumStrings("712569312664357328695151392", "8100824045303269669937")
  ).toBe("712577413488402631964821329");
});

test("test 3", () => {
  expect(
    sumStrings("50095301248058391139327916261", "81055900096023504197206408605")
  ).toBe("131151201344081895336534324866");
});

test("test 4", () => {
  expect(sumStrings("00103", "08567")).toBe("8670");
});