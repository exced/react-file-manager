'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleCollapsedSurvey = undefined;

var _ControllerSurvey = require('../Types/ControllerSurvey');

// Action Creators
var toggleCollapsedSurvey = exports.toggleCollapsedSurvey = function toggleCollapsedSurvey(id) {
  return {
    type: _ControllerSurvey.TOGGLE_COLLAPSED_SURVEY,
    payload: {
      id: id
    }
  };
};