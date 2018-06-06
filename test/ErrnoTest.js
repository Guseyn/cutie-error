 'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Errno
} = require('./../index');

try {
  let error = new Error('error');
  error.errno = 123;
  throw error;
} catch (error) {
  new Assertion(
    new IsNumber(
      new Errno(
        error
      )
    )
  ).call();
}
