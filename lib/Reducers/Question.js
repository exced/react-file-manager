'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _seamlessImmutable = require('seamless-immutable');

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

var _Question = require('../Types/Question');

var _Survey = require('../Types/Survey');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = (0, _seamlessImmutable2.default)({});

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {

    case _Survey.SET:
      return action.payload.value.entities.questions || initialState;

    case _Question.ADD_QUESTION:
      return _extends({}, state, _defineProperty({}, action.payload.id, action.payload));

    case _Question.REMOVE_QUESTION:
      {
        var item = state[action.payload.id],
            rest = _objectWithoutProperties(state, [action.payload.id]);

        return _extends({}, rest);
      }

    case _Question.SET_QUESTION:
      {
        return _extends({}, state, _defineProperty({}, action.payload.id, _extends({}, state[action.payload.id], action.payload)));
      }

    default:
      return state;
  }
};

exports.default = reducer;