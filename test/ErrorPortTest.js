'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  ErrorPort
} = require('./../index');

try {
  let error = new Error('error');
  error.port = 8000;
  throw error;
} catch (error) {
  new Assertion(
    new IsNumber(
      new ErrorPort(
        error
      )
    )
  ).call();
}
