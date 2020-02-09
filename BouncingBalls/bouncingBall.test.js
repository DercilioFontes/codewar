const bouncingBall = require("./bouncingBall");

test("test 1", () => {
  expect(bouncingBall(3.0, 0.66, 1.5)).toEqual(3);
});

test("test 2", () => {
  expect(bouncingBall(30.0, 0.66, 1.5)).toEqual(15);
});