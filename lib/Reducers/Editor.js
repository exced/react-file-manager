'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Editor = require('../Types/Editor');

var _Editor2 = require('../Models/Editor');

var _lodash = require('lodash');

var _seamlessImmutable = require('seamless-immutable');

var _seamlessImmutable2 = _interopRequireDefault(_seamlessImmutable);

var _reduxUndo = require('redux-undo');

var _reduxUndo2 = _interopRequireDefault(_reduxUndo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Normalized state. Item Map. O(1) access
var initialState = (0, _seamlessImmutable2.default)({
  items: {}
});

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {

    case _Editor.ADD_ITEM:
      {
        var id = (0, _lodash.uniqueId)();
        return _extends({}, state, {
          items: _extends({}, state.items, _defineProperty({}, id, _extends({
            id: id
          }, action.payload, _Editor2.values[action.payload.type])))
        });
      }

    case _Editor.REMOVE_ITEM:
      {
        var _state$items = state.items,
            item = _state$items[action.payload.id],
            rest = _objectWithoutProperties(_state$items, [action.payload.id]);

        return _extends({}, state, {
          items: rest
        });
      }

    case _Editor.SET_ITEM:
      {
        return _extends({}, state, {
          items: _extends({}, state.items, _defineProperty({}, action.payload.id, action.payload.value))
        });
      }

    case _Editor.RESET_ITEM:
      {
        return _extends({}, state, {
          items: _extends({}, state.items, _defineProperty({}, action.payload.id, _extends({}, state.items[action.payload.id], { type: action.payload.type }, _Editor2.values[action.payload.type])))
        });
      }

    default:
      return state;
  }
};

exports.default = reducer;

//  undoable(reducer, {
//   limit: 10 // history limit
// }),