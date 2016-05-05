'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var database = exports.database = {
  development: {
    client: 'postgresql',
    connection: {
      user: 'image-search',
      password: 'image-search',
      database: 'image-search'
    }
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    ssl: true
  }
};

var search = exports.search = {
  key: process.env.CSE_KEY,
  cx: process.env.CSE_ID,
  num: 10,
  safe: 'medium',
  searchType: 'image',
  fields: 'items(link,snippet,image/contextLink,image/thumbnailLink)'
};

var appName = exports.appName = process.env.APP_NAME || 'localhost:3000';

var searchEndpoint = exports.searchEndpoint = '/api/imagesearch/:term';

var logEndpoint = exports.logEndpoint = '/api/latest/imagesearch';

var port = exports.port = process.env.PORT || 3000;