'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var client = 'postgresql';

var development = exports.development = {
  client: client,
  connection: {
    user: 'image-search',
    password: 'image-search',
    database: 'image-search'
  }
};

var production = exports.production = {
  client: client,
  connection: process.env.DATABASE_URL,
  ssl: true
};

var PORT = exports.PORT = process.env.PORT || 3000;