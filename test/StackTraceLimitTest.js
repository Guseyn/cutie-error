'use strict'

const {
  EqualAssertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
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
