'use strict'

const {
  EqualAssertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
const {
  SetStackTraceLimit,
  StackTraceLimit
} = require('./../index');

new EqualAssertion(
  new SetStackTraceLimit(7), 7
).after(
  new EqualAssertion(
    new StackTraceLimit(), 7
  )
).call();
