'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _seamlessImmutable = require('seamless-immutable');

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

var _Survey = require('../Types/Survey');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = (0, _seamlessImmutable2.default)({});

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {

    case _Survey.SET:
      return action.payload.value.result || initialState;

    default:
      return state;
  }
};

exports.default = reducer;