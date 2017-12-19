'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Reducers = require('./Reducers');

Object.defineProperty(exports, 'Reducers', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Reducers).default;
  }
});

var _Root = require('./Containers/Root');

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Root).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }