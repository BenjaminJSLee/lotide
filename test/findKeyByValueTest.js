const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe("#findKeyByValue", () => {
  it("returns undefined when input is an empty object", () => {
    let actual = findKeyByValue({},"");
    let expected = undefined;
    assert.strictEqual(actual,expected);
    actual = findKeyByValue({},undefined);
    expected = undefined;
    assert.strictEqual(actual,expected);
  });
  it("returns the correct key when input is an object with the specified value", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    let actual = findKeyByValue(bestTVShowsByGenre,"The Wire");
    let expected = "drama";
    assert.strictEqual(actual,expected);
  });
  it("returns undefined when input is an object without the specified value", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    let actual = findKeyByValue(bestTVShowsByGenre,"That '70s Show");
    let expected = undefined;
    assert.strictEqual(actual,expected);
  });
  it("returns appropriate key when the key is a string or input is an object with a strange data type as the specified value", () => {
    const objWithWeirdVals = {
      "1-1": "weird key name",
      key1: "repeating vals",
      key2: "repeating vals",
      "": "empty key?",
      notDefined: undefined,
      notANum: NaN,
      null: null
    };
    let actual = findKeyByValue(objWithWeirdVals,"weird key name");
    let expected = "1-1";
    assert.strictEqual(actual,expected);
    actual = findKeyByValue(objWithWeirdVals,"repeating vals");
    expected = "key1";
    assert.strictEqual(actual,expected);
    actual = findKeyByValue(objWithWeirdVals,"empty key?");
    expected = "";
    assert.strictEqual(actual,expected);
    actual = findKeyByValue(objWithWeirdVals,undefined);
    expected = "notDefined";
    assert.strictEqual(actual,expected);
    actual = findKeyByValue(objWithWeirdVals,NaN);
    expected = "notANum";
    assert.strictEqual(actual,expected);
    actual = findKeyByValue(objWithWeirdVals,null);
    expected = "null";
    assert.strictEqual(actual,expected);
  });
});
