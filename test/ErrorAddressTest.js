 'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  ErrorAddress
} = require('./../index');

try {
  let error = new Error('error');
  error.address = 'http://undefined';
  throw error;
} catch (error) {
  new Assertion(
    new IsString(
      new ErrorAddress(
        error
      )
    )
  ).call();
}
