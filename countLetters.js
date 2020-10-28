const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: '${actual}' === '${expected}'`);
  } else {
    console.log(`❌❌❌ Assertion Failed: '${actual}' !== '${expected}'`);
  }
};

const countLetters = (sentence) => {
  const letterCount = {};
  let noSpc = sentence.replace(/ /g,'');
  for (let char of noSpc) {
    letterCount[char] = letterCount[char] ? letterCount[char] + 1 : 1;
  }
  return letterCount;
};

const s1 = "hello world!";
const s2 = "merry christmas!";
const s3 = " a a a b b c c d e f g i a ";
const c1 = countLetters(s1);
const c2 = countLetters(s2);
const c3 = countLetters(s3);

assertEqual(c1["l"], 3);
assertEqual(c1["d"], 1);
assertEqual(c1[" "], undefined);
assertEqual(c2["r"], 3);
assertEqual(c2["!"], 1);
assertEqual(c3[' '], undefined);
assertEqual(c3['a'], 4);
