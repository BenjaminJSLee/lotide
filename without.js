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

const without = (srcArr,rmvArr) => {
  let newArr = [];
  for(let val of srcArr){
    newArr.push(val);
    for(let rmvVal of rmvArr){
      if(rmvVal === val){
        newArr.pop();
        break;
      }
    }
  }
  return newArr;
};

const words = ["lets","lets", "repeat","some","some","words","yes","lets"];
const nums = [1,2,1,5,3,2,4,3,1];
const numsAndWords = [1,"1",1,"0","0",0,"1",1];
const subWords = without(words,["yes","some","lets"]);
const subNums = without(nums,[1,4]);
const subNumsAndWords = without(numsAndWords,["0",1]);

assertArraysEqual(words,["lets","lets", "repeat","some","some","words","yes","lets"]);

assertArraysEqual(subWords,["repeat","words"]);
assertArraysEqual(subNums,[2,5,3,2,3]);
assertArraysEqual(subNumsAndWords,["1",0,"1"]);
