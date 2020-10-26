const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: '${actual}' === '${expected}'`);
  } else {
    console.log(`❌❌❌ Assertion Failed: '${actual}' !== '${expected}'`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual("", "");
assertEqual(1, 1);
assertEqual(1, -1);
assertEqual(-1, 0);
assertEqual(-1, -1);
