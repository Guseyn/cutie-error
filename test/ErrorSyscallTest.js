'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
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
