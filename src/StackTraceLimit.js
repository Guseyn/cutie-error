'use strict'

const { AsyncObject } = require('@guseyn/cutie');

// Repressented result is number
class StackTraceLimit extends AsyncObject {

  constructor() {
    super();
  }

  definedSyncCall() {
    return () => {
      return Error.stackTraceLimit;
    }
  }

}

module.exports = StackTraceLimit;
