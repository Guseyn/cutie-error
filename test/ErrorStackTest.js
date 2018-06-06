'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  ErrorStack
} = require('./../index');

try {
  let error = new Error('error');
  error.stack = 'Error:\n stack of error';
  throw error;
} catch (error) {
  new Assertion(
    new IsString(
      new ErrorStack(
        error
      )
    )
  ).call();
}
