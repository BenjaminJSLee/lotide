const head = require('../head');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns undefined for []", () => {
    assert.strictEqual(head([]),undefined);
  });
  it("returns 1 for [1]", () => {
    assert.strictEqual(head([1]),1);
  });
  it("returns 'testing' for ['testing','stuff','like','this']", () => {
    assert.strictEqual(head(["testing","stuff","like","this"]),"testing");
  });
});