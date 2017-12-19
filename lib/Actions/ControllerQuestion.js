'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleCollapsedQuestion = undefined;

var _ControllerQuestion = require('../Types/ControllerQuestion');

// Action Creators
var toggleCollapsedQuestion = exports.toggleCollapsedQuestion = function toggleCollapsedQuestion(id) {
  return {
    type: _ControllerQuestion.TOGGLE_COLLAPSED_QUESTION,
    payload: {
      id: id
    }
  };
};