'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connection = process.env.NODE_ENV || 'development';

exports.default = (0, _knex2.default)(_config.database[connection]);