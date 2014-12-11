var getport = require('getport');

function getports(num, opts, callback) {
  if (!callback) {
    callback = opts;
    opts = { };
  }

  opts = opts || { };
  var start = opts.start || 2000;
  var end = opts.end || 60000;
  var ports = [];

  function _getports(err, port) {
    if (err) return callback(err, null);

    if (port) ports.push(port);

    if (ports.length === num) {
      return callback(null, ports);
    }

    return getport(port + 1, end, _getports);
  }

  _getports(null, start);
}

module.exports = getports;
