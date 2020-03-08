const anagrams = require("./anagrams");

test("test 1", () => {
  expect(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])).toEqual([
    "aabb",
    "bbaa"
  ]);
});

test("test 2", () => {
  expect(
    anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"])
  ).toEqual(["carer", "racer"]);
});

test("test 3", () => {
  expect(anagrams("laser", ["lazing", "lazy", "lacer"])).toEqual([]);
});
