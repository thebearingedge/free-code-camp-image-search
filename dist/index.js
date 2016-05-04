'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/', function (req, res) {
  return res.send('<meta name="google-site-verification" content="01Gg77g4krecLRBSmFFivbCAgctlY13exV7B3gGc6RE" />');
}).listen(_config.PORT, function (_) {
  return console.log('listening on ' + _config.PORT);
});