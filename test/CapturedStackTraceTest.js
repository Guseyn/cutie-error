'use strict'

const {
  DeepStrictEqualAssertion
} = require('@cuties/assert')
const {
  CapturedStackTrace
} = require('./../index')

const obj = {}

new DeepStrictEqualAssertion(
  new CapturedStackTrace(obj), obj
).call()
