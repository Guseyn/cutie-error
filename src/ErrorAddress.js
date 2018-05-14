'use strict'

const { AsyncObject } = require('@guseyn/cutie');

// Repressented result is string
class ErrorAddress extends AsyncObject {

  constructor(error) {
    super(error);
  }

  definedSyncCall() {
    return (error) => {
      return error.address;
    }
  }

}

module.exports = ErrorAddress;
