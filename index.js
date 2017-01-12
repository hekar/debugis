'use strict';

let debug = require('debug');

function promise(debugInstance) {
  return function(functionName, data) {
    return function(results) {
      debugInstance(functionName, ':', { data, results });
      return results;
    };
  };
}

module.exports = function createDebug(name) {
  const debugInstance = debug(name);
  return {
    debug: debugInstance,
    promise: promise(debugInstance)
  };
};
