const makeTriangle = require('./CompleteTheTrianglePattern');

const result1 = `   1
  9 2
 8 0 3
7 6 5 4`;

test(`makeTriangle(1, 10) should be
   1
  9 2
 8 0 3
7 6 5 4`, () => {
  expect(makeTriangle(1, 10)).toBe(result1);
});

const result2 = ` 1
3 2`;

test(`makeTriangle(1, 3) should be
 1
3 2`, () => {
  expect(makeTriangle(1, 3)).toBe(result2);
});

const result3 = `    6
   7 7
  6 8 8
 5 0 9 9
4 3 2 1 0`;

test(`makeTriangle(6, 20) should be
    6
   7 7
  6 8 8
 5 0 9 9
4 3 2 1 0`, () => {
  expect(makeTriangle(6, 20)).toBe(result3);
});

test(`makeTriangle(1, 5) should be ""`, () => {
  expect(makeTriangle(1, 5)).toBe("");
});