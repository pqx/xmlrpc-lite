var request = require('superagent');
var json2xml = require('json2xml');

var HEADER = '<?xml version="1.0"?>';

function Client(url) {
  this.url = url;
}

var proto = Client.prototype;

proto.call = function(method, params, cb) {
  var xmlParams = (params instanceof Array) ? params.map(function(p) {
    return {param: {value: {string: p}}};
  }) : {
    param: {
      value: {
        struct: Object.keys(params).map(function(k) {
          return {member: {name: k, value: {string: params[k]}}};
        })
      }
    }
  };

  xml = json2xml({
    methodCall: {
      methodName: method,
      params: xmlParams
    }
  });

  xml = HEADER + xml;

  request
    .post(this.url)
    .send(xml)
    .end(function(err, res) {
      if(err) return cb(err);
      cb(null, res.text);
    });
};

module.exports = Client;
