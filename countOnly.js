const countOnly = (allItems, itemsToCount) => {
  const itemCount = {};
  for (const item of itemsToCount) {
    if (allItems[item]) {
      itemCount[item] = itemCount[item] ? itemCount[item] + 1 : 1;
    }
  }
  return itemCount;
};

module.exports = countOnly;