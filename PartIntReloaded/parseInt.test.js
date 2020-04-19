
const parseInt = require("./parseInt");

test("test 1", () => {
  expect(parseInt("one")).toBe(1);
});

test("test 2", () => {
  expect(parseInt("twenty")).toBe(20);
});

test("test 3", () => {
  expect(parseInt("two hundred forty-six")).toBe(246);
});

test("test 4", () => {
  expect(parseInt("two hundred")).toBe(200);
});

test("test 5", () => {
  expect(parseInt("one million")).toBe(1000000);
});

test("test 6", () => {
  expect(parseInt("two thousands")).toBe(2000);
});

test("test 7", () => {
  expect(parseInt("one thousand three hundred thirty-seven")).toBe(1337);
});

test("test 8", () => {
  expect(parseInt("sixty-six thousand six hundred sixty-six")).toBe(66666);
});

test("test 9", () => {
  expect(parseInt("one hundred thousand seven hundred")).toBe(100700);
});

test("test 10", () => {
  expect(parseInt("six hundred sixty-six thousand six hundred sixty-six")).toBe(
    666666
  );
});