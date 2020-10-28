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

const middle = (arr) => {
  if (arr.length <= 2) return [];
  let mid, midVal;
  mid = Math.floor(arr.length / 2);
  midVal = arr.length % 2 === 1 ? [arr[mid]] : arr.slice(mid - 1,mid + 1);
  return midVal;
};

const noMiddle = [1];
const noMiddleAgain = [1,2];
const evenLength = [1,2,3,4];
const oddLength = [1,2,3,4,5];

assertArraysEqual(middle(noMiddle),[]);
assertArraysEqual(middle(noMiddleAgain),[]);
assertArraysEqual(middle(evenLength),[2,3]);
assertArraysEqual(middle(oddLength),[3]);