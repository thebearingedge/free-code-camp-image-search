'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 3000;

var app = (0, _express2.default)();

app.get('/', function (req, res) {
  return res.send('hello world');
}).listen(PORT, function (_) {
  return console.log('listening on ' + PORT);
});