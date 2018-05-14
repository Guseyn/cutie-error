'use strict'

const { AsyncObject } = require('@guseyn/cutie');

// Repressented result is string
class ErrorCode extends AsyncObject {

  constructor(error) {
    super(error);
  }

  definedSyncCall() {
    return (error) => {
      return error.code;
    }
  }

}

module.exports = ErrorCode;
