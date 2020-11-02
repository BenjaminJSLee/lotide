const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');

module.exports = {
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  eqArrays: eqArrays,
  head:   head,
  tail:   tail,
  middle: middle
};