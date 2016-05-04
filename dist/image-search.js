'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _url = require('url');

var _expressAsyncWrap = require('express-async-wrap');

var _expressAsyncWrap2 = _interopRequireDefault(_expressAsyncWrap);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var _process$env = process.env;
var key = _process$env.CSE_KEY;
var cx = _process$env.CSE_ID;

var searchType = 'image';
var safe = 'medium';
var num = 10;

var parameters = { key: key, cx: cx, searchType: searchType, safe: safe, num: num };

var protocol = 'https';
var host = 'www.googleapis.com';
var pathname = '/customsearch/v1';

var imageSearch = (0, _expressAsyncWrap2.default)(function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref, res) {
    var params = _ref.params;

    var q, query, uri, _ref2, images;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            q = params.term;
            query = _extends({}, parameters, { q: q });
            uri = (0, _url.format)({ protocol: protocol, host: host, pathname: pathname, query: query });
            _context.next = 5;
            return (0, _requestPromise2.default)({ uri: uri, json: true });

          case 5:
            _ref2 = _context.sent;
            images = _ref2.items;

            res.json(images.map(formatImageData));

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return ref.apply(this, arguments);
  };
}());

var formatImageData = function formatImageData(_ref3) {
  var image = _ref3.image;
  var snippet = _ref3.snippet;
  var link = _ref3.link;
  return {
    url: link,
    snippet: snippet,
    thumbnail: image.thumbnailLink,
    context: image.contextLink
  };
};

exports.default = imageSearch;