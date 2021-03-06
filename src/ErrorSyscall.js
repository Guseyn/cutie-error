'use strict'

const { AsyncObject } = require('@cuties/cutie')

// Repressented result is string
class ErrorSyscall extends AsyncObject {
  constructor (error) {
    super(error)
  }

  syncCall () {
    return (error) => {
      return error.syscall
    }
  }
}

module.exports = ErrorSyscall
