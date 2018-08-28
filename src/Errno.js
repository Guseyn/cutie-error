'use strict'

const { AsyncObject } = require('@cuties/cutie');

// Repressented result is string | number
class Errno extends AsyncObject {

  constructor(error) {
    super(error);
  }

  definedSyncCall() {
    return (error) => {
      return error.errno;
    }
  }

}

module.exports = Errno;
