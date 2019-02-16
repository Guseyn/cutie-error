'use strict'

const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  SetStackTraceLimit,
  StackTraceLimit
} = require('./../index')

new StrictEqualAssertion(
  new SetStackTraceLimit(7), 7
).after(
  new StrictEqualAssertion(
    new StackTraceLimit(), 7
  )
).call()
