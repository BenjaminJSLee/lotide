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
const empty = [];
const tailWords = tail(words);
assertEqual(words.length,3);
assertEqual(tailWords[0],words[1]);
assertEqual(tailWords[1],words[2]);
const tailNums = tail(nums);
assertEqual(nums.length,1);
assertEqual(tailNums[0], nums[1]);
const emptyTail = tail(empty);
assertEqual(empty.length,0);
assertEqual(emptyTail[0],empty[1]);