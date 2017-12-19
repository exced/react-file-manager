'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _seamlessImmutable = require('seamless-immutable');

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

var _Survey = require('../Types/Survey');

var _Page = require('../Types/Page');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = (0, _seamlessImmutable2.default)({});

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  switch (action.type) {

    case _Survey.SET:
      return action.payload.value.entities.survey || initialState;

    case _Survey.SET_SURVEY:
      return _extends({}, state, _defineProperty({}, action.payload.id, _extends({}, state[action.payload.id], action.payload)));

    case _Page.ADD_PAGE:
      return _extends({}, state, _defineProperty({}, action.payload.surveyId, _extends({}, state[action.payload.surveyId], {
        pages: [].concat(_toConsumableArray(state[action.payload.surveyId].pages), [action.payload.id])
      })));

    case _Page.REMOVE_PAGE:
      return _extends({}, state, _defineProperty({}, action.payload.surveyId, _extends({}, state[action.payload.surveyId], {
        pages: state[action.payload.surveyId].pages.filter(function (e) {
          return e !== action.payload.id;
        })
      })));

    case _Page.MOVE_PAGE:
      return _extends({}, state, _defineProperty({}, action.payload.surveyId, _extends({}, state[action.payload.surveyId], {
        pages: action.payload.data
      })));

    default:
      return state;
  }
};

exports.default = reducer;