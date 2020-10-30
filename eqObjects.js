const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: '${actual}' === '${expected}'`);
  } else {
    console.log(`❌❌❌ Assertion Failed: '${actual}' !== '${expected}'`);
  }
};

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
    } else if ((typeof obj1[key] === "object") && (typeof obj2[key] === "object") &&
     !Array.isArray(obj1[key]) && !Array.isArray(obj2[key])) {
      if (!eqObjects(obj1[key],obj2[key])) return false;
    } else if (obj2[key] !== obj1[key]) return false;
  }
  return true;
};

const sameObj1 = { a: 1, b: 2, c: 3};
const sameObj2 = { c: 3, a: 1, b: 2};
const diffObj1 = { a: 3, b: 2, c: 1};
const diffObj2 = { c: 1, b: 2, a: 3};

assertEqual(eqObjects(sameObj1,sameObj2),true);
assertEqual(eqObjects(sameObj1,diffObj1),false);
assertEqual(eqObjects(sameObj1,diffObj2),false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false

const nestedObj1 = { a: { b: 1, c: 2 }, d: { e: { f: 10 }, g: 4 }, h: 1 };
const nestedObj2 = { d: { g: 4, e: { f: 10 } }, h: 1, a: { c: 2, b: 1 } };

assertEqual(eqObjects(nestedObj1, nestedObj2),true);