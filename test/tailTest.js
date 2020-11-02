const assert = require('chai').assert;
const tail = require('../tail.js');

describe("#tail", () => {
  it("array should have the same length before and after", () => {
    const input = ["hi","hey","hello"];
    const expected = input.length;
    tail(input);
    const actual = input.length;
    assert.strictEqual(actual,expected);
  });
  it("returns ['hey','hello'] when input is ['hi','hey','hello']", () => {
    const input = ["hi","hey","hello"];
    const actual = tail(input)
    const expected = ["hey","hello"];
    assert.deepEqual(actual,expected);
  });
  it("returns ['hey','hello'] when input is ['hi','hey','hello']", () => {
    const input = ["hi","hey","hello"];
    const actual = tail(input)
    const expected = ["hey","hello"];
    assert.deepEqual(actual,expected);
  });
  it("returns [] when input is [1]", () => {
    const input = [1];
    const actual = tail(input)
    const expected = [];
    assert.deepEqual(actual,expected);
  });
  it("returns [] when input is []", () => {
    const input = [];
    const actual = tail(input)
    const expected = [];
    assert.deepEqual(actual,expected);
  });
});