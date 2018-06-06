'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  ErrorSyscall
} = require('./../index');

try {
  let error = new Error('error');
  error.syscall = 'syscall';
  throw error;
} catch (error) {
  new Assertion(
    new IsString(
      new ErrorSyscall(
        error
      )
    )
  ).call();
}
