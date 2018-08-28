 'use strict'

const {
  DeepEqualAssertion
} = require('@cuties/assert');
const {
  CapturedStackTrace
} = require('./../index');

const obj = {};

new DeepEqualAssertion(
  new CapturedStackTrace(obj), obj 
).call();
