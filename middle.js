const middle = (arr) => {
  if (arr.length <= 2) return [];
  let mid, midVal;
  mid = Math.floor(arr.length / 2);
  midVal = arr.length % 2 === 1 ? [arr[mid]] : [arr[mid - 1],arr[mid]];
  return midVal;
};

module.exports = middle;