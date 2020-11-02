const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

const noMiddle = [1];
const noMiddleAgain = [1,2];
const evenLength = [1,2,3,4];
const oddLength = [1,2,3,4,5];

assertArraysEqual(middle(noMiddle),[]);
assertArraysEqual(middle(noMiddleAgain),[]);
assertArraysEqual(middle(evenLength),[2,3]);
assertArraysEqual(middle(oddLength),[3]);