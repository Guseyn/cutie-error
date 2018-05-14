'use strict'

const { AsyncObject } = require('@guseyn/cutie');

// Repressented result is targetObject (with captured stackTrace)
class CapturedStackTrace extends AsyncObject {

  constructor(targetObject, constructorOpt) {
    super(targetObject, constructorOpt);
  }

  definedSyncCall() {
    return (targetObject, constructorOpt) => {
      Error.captureStackTrace(targetObject, constructorOpt);
      return targetObject;
    }
  }

}

module.exports = CapturedStackTrace;
