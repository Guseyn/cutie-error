'use strict'

const { AsyncObject } = require('@cuties/cutie');

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
