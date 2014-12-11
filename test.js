var assert = require('assert');
var getports = require('./');

getports(3, function (err, ports) {
  assert.ifError(err, 'should not error');
  assert(ports.length === 3,
    'should get the required number of ports');
});
