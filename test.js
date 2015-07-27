var test = require('tape');
var xmlrpc = require('xmlrpc');
var Client = require('./');

function check(t, params, response) {
  var server = xmlrpc.createServer({
    host: 'localhost',
    port: 9090
  });

  server.on('check', function(err, params, cb) {
    cb(null, params);
  });

  setTimeout(function() {
    var c = new Client('http://localhost:9090');
    c.call('check', params, function(err, xml) {
      server.close(function() {
        t.equal(xml, response);
      });
    });
  }, 1000);
}

test('array params', function(t) {
  t.plan(1);
  check(t, ['a', 'b'], '<?xml version="1.0"?><methodResponse><params><param><value><array><data><value><string>a</string></value><value><string>b</string></value></data></array></value></param></params></methodResponse>');
});

test('object params', function(t) {
  t.plan(1);
  check(t, {a: 'hello', b: 'world'}, '<?xml version="1.0"?><methodResponse><params><param><value><array><data><value><struct><member><name>a</name><value><string>hello</string></value></member><member><name>b</name><value><string>world</string></value></member></struct></value></data></array></value></param></params></methodResponse>');
});
