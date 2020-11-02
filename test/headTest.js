const assertEqual = require('../assertEqual');
const head = require('../head');


assertEqual(head([]),undefined);
assertEqual(head([1]),1);
assertEqual(head(["testing","stuff","like","this"]),"testing");