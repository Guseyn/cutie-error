 'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  ErrorCode
} = require('./../index');

try {
  let error = new Error('error');
  error.code = 'ERROR_CODE';
  throw error;
} catch (error) {
  new Assertion(
    new IsString(
      new ErrorCode(
        error
      )
    )
  ).call();
}
