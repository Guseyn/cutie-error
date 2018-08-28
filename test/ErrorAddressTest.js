 'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
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
