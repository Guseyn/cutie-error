'use strict'

const { AsyncObject } = require('@guseyn/cutie');

// Repressented result is string
class ErrorStack extends AsyncObject {

  constructor(error) {
    super(error);
  }

  definedSyncCall() {
    return (error) => {
      return error.stack;
    }
  }

}

module.exports = ErrorStack;
