const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for(let i = 0; i < arr1.length; i++) {
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

assertArraysEqual([],[]);
assertArraysEqual([],[1]);
assertArraysEqual([1],[]);
assertArraysEqual([1],[1]);
assertArraysEqual([3,2,1],[3,2,1]);
assertArraysEqual([1,2,3],[1,2]);
assertArraysEqual([2,3],[1,2,3]);
assertArraysEqual(['1','2','3'],[1,2,3]);
assertArraysEqual(['1','2','3'],['1','2','3']);