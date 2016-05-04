'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _googleImages = require('google-images');

var _googleImages2 = _interopRequireDefault(_googleImages);

var _expressAsyncWrap = require('express-async-wrap');

var _expressAsyncWrap2 = _interopRequireDefault(_expressAsyncWrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var _process$env = process.env;
var CSE_ID = _process$env.CSE_ID;
var CSE_KEY = _process$env.CSE_KEY;


var api = (0, _googleImages2.default)(CSE_ID, CSE_KEY);

var imageSearch = (0, _expressAsyncWrap2.default)(function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref, res) {
    var params = _ref.params;
    var query = _ref.query;
    var term, images;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            term = params.term;
            _context.next = 3;
            return api.search(term);

          case 3:
            images = _context.sent;


            res.json(images);

          case 5:
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

exports.default = imageSearch;