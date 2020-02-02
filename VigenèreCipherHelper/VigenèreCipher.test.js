const VigenèreCipher = require("./VigenèreCipher");

const abc = "abcdefghijklmnopqrstuvwxyz";
const key = "password";

const c = new VigenèreCipher(key, abc);

test("test 1.1 - c.encode('codewars')", () => {
  expect(c.encode("codewars")).toBe("rovwsoiv");
});

test("test 1.2 - c.decode('rovwsoiv')", () => {
  expect(c.decode("rovwsoiv")).toBe("codewars");
});

test("test 2.1 - c.encode('waffles')", () => {
  expect(c.encode("waffles")).toBe("laxxhsj");
});

test("test 2.2 - c.decode('laxxhsj')", () => {
  expect(c.decode("laxxhsj")).toBe("waffles");
});

test("test 3.1 - c.encode('CODEWARS')", () => {
  expect(c.encode("CODEWARS")).toBe("CODEWARS");
});

test("test 3.2 - c.decode('CODEWARS')", () => {
  expect(c.decode("CODEWARS")).toBe("CODEWARS");
});