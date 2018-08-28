 'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
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
