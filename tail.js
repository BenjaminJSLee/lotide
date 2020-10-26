const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: '${actual}' === '${expected}'`);
  } else {
    console.log(`❌❌❌ Assertion Failed: '${actual}' !== '${expected}'`);
  }
};

const tail = function(arr) {
  if (arr.length > 1) {
    return arr.slice(1);
  } else {
    return [];
  }
};

const words = ["hi","hey","hello"];
const nums = [1];
const oops = [];
tail(words);
assertEqual(words.length,3);
tail(nums);
assertEqual(nums.length,1);
tail(oops);
assertEqual(oops.length,0);