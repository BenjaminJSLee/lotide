const letterPositions = (sentence) => {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (char !== ' ') {
      if (results[char]) {
        results[char].push(i);
      } else {
        results[char] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;
