const head = require('../head');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns undefined for []", () => {
    assert.equal(head([]),undefined);
  });
  it("returns 1 for [1]", () => {
    assert.equal(head([1]),1);
  });
  it("returns 'testing' for ['testing','stuff','like','this']", () => {
    assert.equal(head(["testing","stuff","like","this"]),"testing");
  });
});