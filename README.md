# xmlrpc-lite
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
