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

const map = (arr,callback) => {
  let newArr = [];
  for (let val of arr) {
    newArr.push(callback(val));
  }
  return newArr;
};

const words = ["ground", "control", "to", "major", "tom"];

const firstChar = map(words, (word) => word[0]);
console.log(words,firstChar);

const test1 = [1];
const test2 = [];
const test3 = ['a','b',3];

const call1 = (val) => val + val;
const call2 = function(val) {
  return typeof val;
};
const call3 = () => "lolarrayruined";

assertArraysEqual(test1.map(call1),[2]);
assertArraysEqual(test2.map(call1),[]);
assertArraysEqual(test3.map(call1),['aa','bb',6]);

assertArraysEqual(test1.map(call2),["number"]);
assertArraysEqual(test2.map(call2),[]);
assertArraysEqual(test3.map(call2),['string','string','number']);

assertArraysEqual(test1.map(call3),["lolarrayruined"]);
assertArraysEqual(test2.map(call3),[]);
assertArraysEqual(test3.map(call3),['lolarrayruined','lolarrayruined','lolarrayruined']);
