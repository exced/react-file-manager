'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxUndo = require('redux-undo');

var _reduxUndo2 = _interopRequireDefault(_reduxUndo);

var _redux = require('redux');

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

var _Survey = require('../Types/Survey');

var _Question = require('../Reducers/Question');

var _Question2 = _interopRequireDefault(_Question);

var _Survey2 = require('../Reducers/Survey');

var _Survey3 = _interopRequireDefault(_Survey2);

var _Result = require('../Reducers/Result');

var _Result2 = _interopRequireDefault(_Result);

var _ControllerSurvey = require('../Reducers/ControllerSurvey');

var _ControllerSurvey2 = _interopRequireDefault(_ControllerSurvey);

var _ControllerPage = require('../Reducers/ControllerPage');

var _ControllerPage2 = _interopRequireDefault(_ControllerPage);

var _ControllerQuestion = require('../Reducers/ControllerQuestion');

var _ControllerQuestion2 = _interopRequireDefault(_ControllerQuestion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var entities = (0, _redux.combineReducers)({ pages: _Page2.default, questions: _Question2.default, survey: _Survey3.default });

exports.default = {
  editor: (0, _reduxUndo2.default)((0, _redux.combineReducers)({ entities: entities, result: _Result2.default }), {
    limit: 10, // history limit
    filter: (0, _reduxUndo.excludeAction)([_Survey.SET])
  }),
  controller: (0, _redux.combineReducers)({ pages: _ControllerPage2.default, questions: _ControllerQuestion2.default, survey: _ControllerSurvey2.default })
};