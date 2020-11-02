const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe("#countOnly", () => {
  it("returns an object with key-value pair 'Jason: 1'", () => {
    const firstNames = ["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"];
    const parse = countOnly({ "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }, firstNames);
    const actual = parse["Jason"];
    const expected = 1;
    assert.strictEqual(actual,expected);
  });
  it("returns an object without a key of 'Karima'", () => {
    const firstNames = ["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"];
    const parse = countOnly({ "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }, firstNames);
    const actual = parse["Karima"];
    const expected = undefined;
    assert.strictEqual(actual,expected);
  });
  it("returns an object with key-value pair 'Fang: 2'", () => {
    const firstNames = ["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"];
    const parse = countOnly({ "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }, firstNames);
    const actual = parse["Fang"];
    const expected = 2;
    assert.strictEqual(actual,expected);
  });
  it("returns an object without a key of 'Agouhanna'", () => {
    const firstNames = ["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"];
    const parse = countOnly({ "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }, firstNames);
    const actual = parse["Agouhanna"];
    const expected = undefined;
    assert.strictEqual(actual,expected);
  });
});