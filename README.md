# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by Benjamin Lee as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @benjaminjslee/lotide`

**Require it:**

`const _ = require('@benjaminjslee/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: creates a verbose message to console explaining whether or not the two inputted arrays are equal. 
* `assertEqual(val1, val2)`: creates a verbose message to console explainging whether or not the two inputted values are equal.
* `eqArrays(arr1, arr2)`: returns a boolean; true if the arrays are equal, false if they are not.
* `head(arr)`: returns the first value of an array, or an empty array if there are no values.
* `tail(arr)`: returns every value but the first value of an array, or an empty array if there are no values beyond the first value.
* `middle(arr)`: returns an array containing the middle value(s) of an array (two if even number of values, single if odd). Will return an empty array if the array is equal to or smaller than two elements.