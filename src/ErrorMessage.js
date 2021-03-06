'use strict'

const { AsyncObject } = require('@cuties/cutie')

// Repressented result is string
class ErrorMessage extends AsyncObject {
  constructor (error) {
    super(error)
  }

  syncCall () {
    return (error) => {
      return error.message
    }
  }
}

module.exports = ErrorMessage
