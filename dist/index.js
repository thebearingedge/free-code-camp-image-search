'use strict';

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _imageSearch = require('./image-search');

var _imageSearch2 = _interopRequireDefault(_imageSearch);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/', function (req, res) {
  return res.send('hello world');
}).get('/api/imagesearch/:term', _imageSearch2.default).listen(_config.PORT, function (_) {
  return console.log('listening on ' + _config.PORT);
});