const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [] when input is [1]", () => {
    const actual = middle([1]);
    const expected = [];
    assert.deepEqual(actual,expected);
  });
  it("returns [] when input is [1,2]", () => {
    const actual = middle([1,2]);
    const expected = [];
    assert.deepEqual(actual,expected);
  });
  it("returns [2,3] when input is [1,2,3,4]", () => {
    const actual = middle([1,2,3,4]);
    const expected = [2,3];
    assert.deepEqual(actual,expected);
  });
  it("returns [3] when input is [1,2,3,4,5]", () => {
    const actual = middle([1,2,3,4,5]);
    const expected = [3];
    assert.deepEqual(actual,expected);
  });
});