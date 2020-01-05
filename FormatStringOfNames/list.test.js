const list = require('./list');

test("test 1", () => {
  expect(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])).toBe('Bart, Lisa, Maggie, Homer & Marge');
});

test("test 2", () => {
  expect(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])).toBe(
    "Bart, Lisa & Maggie"
  );
});

test("test 3", () => {
  expect(list([{ name: "Bart" }, { name: "Lisa" }])).toBe("Bart & Lisa");
});

test("test 4", () => {
  expect(list([{ name: "Bart" }])).toBe("Bart");
});

test("test 5", () => {
  expect(list([])).toBe("");
});