const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("returns {} when input is an empty string", () => {
    const positions = letterPositions("");
    const actual = positions;
    const expected = {};
    assert.deepEqual(actual,expected);
  });
  it("returns an object of letter positions when input is 'hello'", () => {
    const positions = letterPositions("hello");
    let actual = positions["h"];
    let expected = [0];
    assert.deepEqual(actual,expected);
    actual = positions["e"];
    expected = [1];
    assert.deepEqual(actual,expected);
    actual = positions["l"];
    expected = [2,3];
    assert.deepEqual(actual,expected);
    actual = positions["o"];
    expected = [4];
    assert.deepEqual(actual,expected);
  });
  it("returns an object of letter positions when input is 'lighthouse in the house'", () => {
    const positions = letterPositions("lighthouse in the house");
    let actual = positions["l"];
    let expected = [0];
    assert.deepEqual(actual,expected);
    actual = positions["i"];
    expected = [1,11];
    assert.deepEqual(actual,expected);
    actual = positions["g"];
    expected = [2];
    assert.deepEqual(actual,expected);
    actual = positions["h"];
    expected = [3,5,15,18];
    assert.deepEqual(actual,expected);
    actual = positions["t"];
    expected = [4,14];
    assert.deepEqual(actual,expected);
  });
});