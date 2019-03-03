'use strict'

const {
  DeepStrictEqualAssertion
} = require('@cuties/assert')
const {
  ThrownError
} = require('./../index')

try {
  new ThrownError(
    new Error('error')
  ).call()
} catch (err) {
  new DeepStrictEqualAssertion(
    err, new Error('error')
  ).call()
}
