'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Repressented result is string
class ErrorPath extends AsyncObject {

  constructor(error) {
    super(error);
  }

  definedSyncCall() {
    return (error) => {
      return error.path;
    }
  }

}

module.exports = ErrorPath;
