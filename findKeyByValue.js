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

module.exports = findKeyByValue;