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

const flatten = (arr) => {
  let flattenedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArr = flattenedArr.concat(arr[i]);
    } else {
      flattenedArr.push(arr[i]);
    }
  }
  return flattenedArr;
};

const nestedWords = ["hi",["hello","hey"],"bonjour",["ni hao"]];
const nestedNums = [1,2,[3,4],5,[6],[7],[8,9,10]];
const nestedNumsAndWords = [["eggs",2],["bark",7,1],"sorry",[1],4];

const flattenWords = flatten(nestedWords);
const flattenNums = flatten(nestedNums);
const flattenNumsAndWords = flatten(nestedNumsAndWords);

assertArraysEqual(flattenWords, ["hi","hello","hey","bonjour","ni hao"]);
assertArraysEqual(flattenNums, [1,2,3,4,5,6,7,8,9,10]);
assertArraysEqual(flattenNumsAndWords, ["eggs",2,"bark",7,1,"sorry",1,4]);