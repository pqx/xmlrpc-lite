# xmlrpc-lite
[![Build Status](https://travis-ci.org/pqx/xmlrpc-lite.svg)](https://travis-ci.org/pqx/xmlrpc-lite) [![codecov.io](http://codecov.io/github/pqx/xmlrpc-lite/coverage.svg?branch=master)](http://codecov.io/github/pqx/xmlrpc-lite?branch=master)

Simple xmlrpc client for node and browser
- Object params support via `<struct>`
- String type only

### Installation
``` sh
npm install xmlrpc-lite --save
```
### Example
``` javascript
// xmlrpc request to ipboard forum
var Client = require('xmlrpc-lite');
var t = new Client('http://forum/interface/board/index.php');
t.call('loginUser', {
  id: 'xxxx',
  api_module: 'ipb',
  api_key: 'xxxxxx'
}, function(err, xml) {
  if(err) throw err;
  console.log(xml);
});
```
### License
ISC
