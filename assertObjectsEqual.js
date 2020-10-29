const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const eqObjects = (obj1,obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  for (const key in obj1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!(eqArrays(obj1[key],obj2[key]))) return false;
    } else if (obj2[key] !== obj1[key]) return false;
  }
  return true;
};

const assertObjectsEqual = (actual,expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: {${inspect(actual)}} === {${inspect(expected)}}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: {${inspect(actual)}} !== {${inspect(expected)}}`);
  }
};

// same tests as eqObjects, should produce the same results

const sameObj1 = { a: 1, b: 2, c: 3};
const sameObj2 = { c: 3, a: 1, b: 2};
const diffObj1 = { a: 3, b: 2, c: 1};
const diffObj2 = { c: 1, b: 2, a: 3};

assertObjectsEqual(sameObj1,sameObj2); // TRUE
assertObjectsEqual(sameObj1,diffObj1); // FALSE
assertObjectsEqual(sameObj1,diffObj2); // FALSE

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // TRUE

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // FALSE
