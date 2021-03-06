'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSearches = exports.logSearches = undefined;

var _expressAsyncWrap = require('express-async-wrap');

var _expressAsyncWrap2 = _interopRequireDefault(_expressAsyncWrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var logSearches = exports.logSearches = function logSearches(knex) {
  return (0, _expressAsyncWrap2.default)(function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref, _, next) {
      var params = _ref.params;
      var term;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              term = params.term;
              _context.next = 3;
              return knex.insert({ term: term }).into('searches');

            case 3:

              next();

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return ref.apply(this, arguments);
    };
  }());
};

var getSearches = exports.getSearches = function getSearches(knex) {
  return (0, _expressAsyncWrap2.default)(function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(_, res) {
      var searches;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return knex.select('term', 'when').from('searches').orderBy('when', 'desc').limit(10);

            case 2:
              searches = _context2.sent;


              res.json(searches);

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x4, _x5) {
      return ref.apply(this, arguments);
    };
  }());
};