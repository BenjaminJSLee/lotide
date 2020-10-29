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

const takeUntil = (array, callback) => {
  const newArr = [];
  for (let i = 0; (i < array.length) && !callback(array[i]); i++) {
    newArr.push(array[i]);
  }
  return newArr;
};

const test1 = [1,2,3,4,5,6,7,8,4,10];
const test2 = [undefined, "", 0, null, false, true, "this shouldn't be printed :)"];

const call1 = (val) => val === 4;
const call2 = function(val) {
  return val;
};

assertArraysEqual(takeUntil(test1,call1),[1,2,3]);
assertArraysEqual(takeUntil(test2,call2),[undefined, "", 0, null, false]);