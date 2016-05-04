'use strict';

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _imageSearch = require('./image-search');

var _imageSearch2 = _interopRequireDefault(_imageSearch);

var _searchLogger = require('./search-logger');

var _config = require('./config');

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/', function (req, res) {
  return res.send('hello world');
}).get('/api/imagesearch/:term', (0, _searchLogger.logSearches)(_db2.default), (0, _imageSearch2.default)(_config.search)).get('/api/latest/imagesearch', (0, _searchLogger.getSearches)(_db2.default)).listen(_config.port, function (_) {
  return console.log('listening on ' + _config.port);
});