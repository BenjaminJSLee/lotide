const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: '${actual}' === '${expected}'`);
  } else {
    console.log(`❌❌❌ Assertion Failed: '${actual}' !== '${expected}'`);
  }
};

const findKeyByValue = (obj,val) => {
  for (let key in obj) {
    if (/*obj.hasOwnProperty(key) && */ !(Number.isNaN(val)) && (obj[key] === val)) {
      return key;
    } else if (Number.isNaN(val) && Number.isNaN(obj[key])) {
      return key;
    }
  }
  return undefined;
};

// TEST CASES:
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const emptyObj = {};

assertEqual(findKeyByValue(emptyObj,""), undefined);
assertEqual(findKeyByValue(emptyObj,undefined), undefined);

const objWithWeirdVals = {
  "1-1": "weird key name",
  key1: "repeating vals",
  key2: "repeating vals",
  "": "empty key?",
  notDefined: undefined,
  notANum: NaN,
  null: null
};

assertEqual(findKeyByValue(objWithWeirdVals,"weird key name"), "1-1");
assertEqual(findKeyByValue(objWithWeirdVals,"repeating vals"), "key1");
assertEqual(findKeyByValue(objWithWeirdVals,"empty key?"), "");
assertEqual(findKeyByValue(objWithWeirdVals,undefined), "notDefined");
assertEqual(findKeyByValue(objWithWeirdVals,NaN), "notANum"); // this happens b/c NaN cannot equal NaN
assertEqual(findKeyByValue(objWithWeirdVals,null), "null");
