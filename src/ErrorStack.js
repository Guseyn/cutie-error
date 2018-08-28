'use strict'

const { AsyncObject } = require('@cuties/cutie');

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
