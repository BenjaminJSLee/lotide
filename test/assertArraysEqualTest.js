const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([],[]);
assertArraysEqual([],[1]);
assertArraysEqual([1],[]);
assertArraysEqual([1],[1]);
assertArraysEqual([3,2,1],[3,2,1]);
assertArraysEqual([1,2,3],[1,2]);
assertArraysEqual([2,3],[1,2,3]);
assertArraysEqual(['1','2','3'],[1,2,3]);
assertArraysEqual(['1','2','3'],['1','2','3']);