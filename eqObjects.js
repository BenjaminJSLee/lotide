const eqArrays = require("./eqArrays");

const eqObjects = (obj1,obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  for (const key in obj1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!(eqArrays(obj1[key],obj2[key]))) return false;
    } else if ((typeof obj1[key] === "object") && (typeof obj2[key] === "object") &&
     !Array.isArray(obj1[key]) && !Array.isArray(obj2[key])) {
      if (!eqObjects(obj1[key],obj2[key])) return false;
    } else if (obj2[key] !== obj1[key]) return false;
  }
  return true;
};

module.exports = eqObjects;