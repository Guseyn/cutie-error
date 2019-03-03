'use strict'

const { AsyncObject } = require('@cuties/cutie')

class ThrownError extends AsyncObject {
  constructor (error) {
    super(error)
  }

  syncCall () {
    return (error) => {
      throw error
    }
  }
}

module.exports = ThrownError
