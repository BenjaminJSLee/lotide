const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: '${actual}' === '${expected}'`);
  } else {
    console.log(`❌❌❌ Assertion Failed: '${actual}' !== '${expected}'`);
  }
};

const countOnly = (allItems, itemsToCount) => {
  const itemCount = {};
  for (const item of itemsToCount) {
    if (allItems[item]) {
      itemCount[item] = itemCount[item] ? itemCount[item] + 1 : 1;
    }
  }
  return itemCount;
};

// TEST CASES:
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly({ "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }, firstNames);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);