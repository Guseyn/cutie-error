 'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
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
