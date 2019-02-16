'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsString
} = require('@cuties/is')
const {
  ErrorPath
} = require('./../index')

try {
  let error = new Error('error')
  error.path = 'ERROR_PATH'
  throw error
} catch (error) {
  new Assertion(
    new IsString(
      new ErrorPath(
        error
      )
    )
  ).call()
}
