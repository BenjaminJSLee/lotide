const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([],[]),true);
assertEqual(eqArrays([],[1]),false);
assertEqual(eqArrays([1],[]),false);
assertEqual(eqArrays([1],[1]),true);
assertEqual(eqArrays([3,2,1],[3,2,1]),true);
assertEqual(eqArrays([1,2,3],[1,2]),false);
assertEqual(eqArrays([2,3],[1,2,3]),false);
assertEqual(eqArrays(['1','2','3'],[1,2,3]),false);
assertEqual(eqArrays(['1','2','3'],['1','2','3']),true);
assertEqual(eqArrays([1,[2,[3,[4,[5,6]]]],7],[1,[2,[3,[4,[5,6]]]],7]),true);