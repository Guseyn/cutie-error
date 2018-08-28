'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
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
