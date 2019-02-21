'use strict'

const { AsyncObject } = require('@cuties/cutie')

// Repressented result is string
class ErrorAddress extends AsyncObject {
  constructor (error) {
    super(error)
  }

  syncCall () {
    return (error) => {
      return error.address
    }
  }
}

module.exports = ErrorAddress
