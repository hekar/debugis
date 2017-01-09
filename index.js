'use strict';

const debug = require('debug');

function promise(name) {
  return function(functionName, data) {
    return function(results) {
      debug(name)(functionName, ':', { data, results });
      return results;
    };
  };
}

module.exports = function createDebug(name) {
  return {
    debug: debug(name),
    promise: promise(name)
  };
};
