const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true when the two arrays are empty", () => {
    const arr1 = [];
    const arr2 = [];
    assert.isTrue(eqArrays(arr1,arr2));
  });
  it("returns false when the one array is empty and one is not", () => {
    const arr1 = [];
    const arr2 = [1];
    assert.isFalse(eqArrays(arr1,arr2));
  });
  it("returns true when the two arrays have only one value each and it is the same", () => {
    const arr1 = [1];
    const arr2 = [1];
    assert.isTrue(eqArrays(arr1,arr2));
  });
  it("returns true when the two arrays have the same contents in the same order", () => {
    const arr1 = [1,2,3];
    const arr2 = [1,2,3];
    assert.isTrue(eqArrays(arr1,arr2));
  });
  it("returns false when the two arrays have the same contents in a different order", () => {
    const arr1 = [1,2,3];
    const arr2 = [3,2,1];
    assert.isFalse(eqArrays(arr1,arr2));
  });
  it("returns false when an array is a subset of another array and is smaller", () => {
    const arr1 = [1,2,3];
    const arr2 = [1,2];
    assert.isFalse(eqArrays(arr1,arr2));
  });
  it("returns false when an array of numbers is compared to an array of same number strings", () => {
    const arr1 = [1,2,3];
    const arr2 = ['1','2','3'];
    assert.isFalse(eqArrays(arr1,arr2));
  });
  it("returns true when the two arrays have the same string contents in the same order", () => {
    const arr1 = ['1','2','3'];
    const arr2 = ['1','2','3'];
    assert.isTrue(eqArrays(arr1,arr2));
  });
  it("returns true when the two arrays contain identical nested arrays in the same order", () => {
    const arr1 = [1,[2,[3,[4,[5,6]]]],7];
    const arr2 = [1,[2,[3,[4,[5,6]]]],7];
    assert.isTrue(eqArrays(arr1,arr2));
  });
});