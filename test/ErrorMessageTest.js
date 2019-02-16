'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsString
} = require('@cuties/is')
const {
  ErrorMessage
} = require('./../index')

try {
  let error = new Error('error')
  error.message = 'ERROR_MESSAGE'
  throw error
} catch (error) {
  new Assertion(
    new IsString(
      new ErrorMessage(
        error
      )
    )
  ).call()
}
