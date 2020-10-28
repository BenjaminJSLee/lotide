const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = (actual,expected) => {
  if (eqArrays(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const letterPositions = (sentence) => {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (char !== ' ') {
      if (results[char]) {
        results[char].push(i);
      } else {
        results[char] = [i];
      }
    }
  }
  return results;
};

const test = "hello";
const testWithSpace = "lighthouse in the house";
const testPos = letterPositions(test);
const testWithSpacePos = letterPositions(testWithSpace);

assertArraysEqual(testPos["h"],[0]);
assertArraysEqual(testPos["e"], [1]);
assertArraysEqual(testPos["l"], [2,3]);
assertArraysEqual(testPos["o"], [4]);

assertArraysEqual(testWithSpacePos["l"], [0]);
assertArraysEqual(testWithSpacePos["i"], [1,11]);
assertArraysEqual(testWithSpacePos["g"], [2]);
assertArraysEqual(testWithSpacePos["h"], [3,5,15,18]);
assertArraysEqual(testWithSpacePos["t"], [4,14]);
