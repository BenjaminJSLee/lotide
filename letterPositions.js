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
  for(let i = 0; i < sentence.length; i++){
    let char = sentence[i];
    if( char !== ' ' ){
      if(results[char]){
        results[char].push(i);
      } else {
        results[char] = [i];
      }
    }
  }
  return results;
};

const test = "hello";
const testPos = letterPositions(test);

assertArraysEqual(testPos["h"],[0]);
assertArraysEqual(testPos["e"], [1]);
assertArraysEqual(testPos["l"], [2,3]);
assertArraysEqual(testPos["o"], [4]);