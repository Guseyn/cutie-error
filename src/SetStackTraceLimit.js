'use strict'

const { AsyncObject } = require('@guseyn/cutie');

// Repressented result is number
class SetStackTraceLimit extends AsyncObject {

  constructor(num) {
    super(num);
  }

  definedSyncCall() {
    return (num) => {
      return Error.stackTraceLimit = num;
    }
  }

}

module.exports = SetStackTraceLimit;
