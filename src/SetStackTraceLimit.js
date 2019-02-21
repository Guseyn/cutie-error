'use strict'

const { AsyncObject } = require('@cuties/cutie')

// Repressented result is number
class SetStackTraceLimit extends AsyncObject {
  constructor (num) {
    super(num)
  }

  syncCall () {
    return (num) => {
      Error.stackTraceLimit = num
      return num
    }
  }
}

module.exports = SetStackTraceLimit
