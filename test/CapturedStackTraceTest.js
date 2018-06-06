 'use strict'

const {
  DeepEqualAssertion
} = require('@guseyn/cutie-assert');
const {
  CapturedStackTrace
} = require('./../index');

const obj = {};

new DeepEqualAssertion(
  new CapturedStackTrace(obj), obj 
).call();
