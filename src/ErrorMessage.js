'use strict'

const { AsyncObject } = require('@guseyn/cutie');

// Repressented result is string
class ErrorMessage extends AsyncObject {

  constructor(error) {
    super(error);
  }

  definedSyncCall() {
    return (error) => {
      return error.message;
    }
  }

}

module.exports = ErrorMessage;
