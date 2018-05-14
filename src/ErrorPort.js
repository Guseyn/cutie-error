'use strict'

const { AsyncObject } = require('@guseyn/cutie');

// Repressented result is number
class ErrorPort extends AsyncObject {

  constructor(error) {
    super(error);
  }

  definedSyncCall() {
    return (error) => {
      return error.port;
    }
  }

}

module.exports = ErrorPort;
