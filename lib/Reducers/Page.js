'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _seamlessImmutable = require('seamless-immutable');

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

var _Page = require('../Types/Page');

var _Question = require('../Types/Question');

var _Survey = require('../Types/Survey');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = (0, _seamlessImmutable2.default)({});

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {

    case _Survey.SET:
      return action.payload.value.entities.pages || initialState;

    case _Page.ADD_PAGE:
      return _extends({}, state, _defineProperty({}, action.payload.id, action.payload));

    case _Page.REMOVE_PAGE:
      {
        var item = state[action.payload.id],
            rest = _objectWithoutProperties(state, [action.payload.id]);

        return _extends({}, rest);
      }

    case _Page.SET_PAGE:
      {
        return _extends({}, state, _defineProperty({}, action.payload.id, _extends({}, state[action.payload.id], action.payload)));
      }

    case _Question.ADD_QUESTION:
      return _extends({}, state, _defineProperty({}, action.payload.pageId, _extends({}, state[action.payload.pageId], {
        questions: [].concat(_toConsumableArray(state[action.payload.pageId].questions), [action.payload.id])
      })));

    case _Question.REMOVE_QUESTION:
      return _extends({}, state, _defineProperty({}, action.payload.pageId, _extends({}, state[action.payload.pageId], {
        questions: state[action.payload.pageId].questions.filter(function (e) {
          return e !== action.payload.id;
        })
      })));

    case _Question.MOVE_QUESTION:
      return _extends({}, state, _defineProperty({}, action.payload.pageId, _extends({}, state[action.payload.pageId], {
        questions: action.payload.data
      })));

    default:
      return state;
  }
};

exports.default = reducer;