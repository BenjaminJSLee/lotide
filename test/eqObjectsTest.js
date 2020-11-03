const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it("returns true when two objects have identical key-value pairs stored in different order", () => {
    const obj1 = { a: 1, b: 2, c: 3};
    const obj2 = { c: 3, a: 1, b: 2};
    assert.isTrue(eqObjects(obj1,obj2));
  });
  it("returns false when two objects have different key-value pairs stored in any order", () => {
    let obj1 = { a: 1, b: 2, c: 3};
    let obj2 = { a: 3, b: 2, c: 1};
    assert.isFalse(eqObjects(obj1,obj2));
    obj1 = { a: 1, b: 2, c: 3};
    obj2 = { c: 1, b: 2, a: 3};
    assert.isFalse(eqObjects(obj1,obj2));
  });
  it("returns true when two objects have identical key-value pairs (arrays included) stored in any order", () => {
    let obj1 = { c: "1", d: ["2", 3] };
    let obj2 = { d: ["2", 3], c: "1" };
    assert.isTrue(eqObjects(obj1,obj2));
    obj1 = { d: ["2", 3], c: "1" };
    obj2 = { d: ["2", 3], c: "1" };
    assert.isTrue(eqObjects(obj1,obj2));
  });
  it("returns false when two objects have different key-value pairs (arrays included) stored in any order", () => {
    let obj1 = { c: "1", d: ["2", 3] };
    let obj2 = { c: "1", d: ["2", 3, 4] };
    assert.isFalse(eqObjects(obj1,obj2));
  });
  it("returns true when two objects have identical key-value pairs (nested objects included) stored in any order", () => {
    let obj1 = { a: { b: 1, c: 2 }, d: { e: { f: 10 }, g: 4 }, h: 1 };
    let obj2 = { d: { g: 4, e: { f: 10 } }, h: 1, a: { c: 2, b: 1 } };
    assert.isTrue(eqObjects(obj1,obj2));
    obj1 = { d: { g: 4, e: { f: 10 } }, h: 1, a: { c: 2, b: 1 } };
    obj2 = { d: { g: 4, e: { f: 10 } }, h: 1, a: { c: 2, b: 1 } };
    assert.isTrue(eqObjects(obj1,obj2));
  });
});