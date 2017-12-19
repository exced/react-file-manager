'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _seamlessImmutable = require('seamless-immutable');

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

var _Survey = require('../Types/Survey');

var _ControllerSurvey = require('../Types/ControllerSurvey');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = (0, _seamlessImmutable2.default)({});

var initialValue = (0, _seamlessImmutable2.default)({
  visibleIf: false,
  collapsed: false
});

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {

    case _Survey.SET:
      return _extends({}, state, _defineProperty({}, action.payload.value.result, initialValue));

    case _ControllerSurvey.TOGGLE_COLLAPSED_SURVEY:
      return _extends({}, state, _defineProperty({}, action.payload.id, _extends({}, state[action.payload.id], {
        collapsed: !state[action.payload.id].collapsed
      })));

    default:
      return state;
  }
};

exports.default = reducer;