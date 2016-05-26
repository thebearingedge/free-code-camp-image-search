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

var protocol = 'https';
var host = 'www.googleapis.com';
var pathname = '/customsearch/v1';
var json = true;

var searchImages = function searchImages(config) {
  return (0, _expressAsyncWrap2.default)(function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
      var q, offset, start, query, uri, _ref, images;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              q = req.params.term;
              offset = req.query.offset;
              start = Number(offset || config.num) + 1;
              query = _extends({}, config, { q: q, start: start });
              uri = (0, _url.format)({ protocol: protocol, host: host, pathname: pathname, query: query });
              _context.next = 7;
              return (0, _requestPromise2.default)({ uri: uri, json: json });

            case 7:
              _ref = _context.sent;
              images = _ref.items;


              res.json(images.map(formatImage));

            case 10:
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
};

var formatImage = function formatImage(_ref2) {
  var link = _ref2.link;
  var snippet = _ref2.snippet;
  var image = _ref2.image;
  return {
    url: link,
    snippet: snippet,
    thumbnail: image.thumbnailLink,
    context: image.contextLink
  };
};

exports.default = searchImages;