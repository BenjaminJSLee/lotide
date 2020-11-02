const flatten = require('../flatten');
const assert = require('chai').assert;

describe("#flatten", () => {
  it('returns [] when input is []', () => {
    const actual = flatten([]);
    const expected = [];
    assert.deepEqual(actual,expected);
  });
  it('returns ["hi","hello","hey","bonjour","ni hao"] when input is ["hi",["hello","hey"],"bonjour",["ni hao"]', () => {
    const actual = flatten(["hi",["hello","hey"],"bonjour",["ni hao"]]);
    const expected = ["hi","hello","hey","bonjour","ni hao"];
    assert.deepEqual(actual,expected);
  });
  it('returns ["hi","hello","hey","bonjour","ni hao"] when input is [1,2,[3,4],5,[6],[7],[8,9,10]]', () => {
    const actual = flatten([1,2,[3,4],5,[6],[7],[8,9,10]]);
    const expected = [1,2,3,4,5,6,7,8,9,10];
    assert.deepEqual(actual,expected);
  });
  it('returns ["eggs",2,"bark",7,1,"sorry",1,4] when input is [["eggs",2],["bark",7,1],"sorry",[1],4]', () => {
    const actual = flatten([["eggs",2],["bark",7,1],"sorry",[1],4]);
    const expected = ["eggs",2,"bark",7,1,"sorry",1,4];
    assert.deepEqual(actual,expected);
  });
});