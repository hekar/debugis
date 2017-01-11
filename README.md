# debugis

[Node.js](https://nodejs.org/en/) module that adds support for promises to [visionmedia/debug](https://github.com/visionmedia/debug)

## Install
```sh
npm install debugis
```

## Usage

##### Definition
```javascript
debug.promise(functionName, metaData)
```

##### Example
```javascript
  const debug = require('debug')('mydebuglog');

  // Log 'This is a message'
  debug.debug('This is a message');
  
  // Log the functionName, metadata and results from a promise

  const userName = ..., email = ...;
  client.createUser({ userName, email, ... }, { requestId })
    .then(debug.promise('createUser'), { userName, email, requestId });
```

[License](./LICENSE)
