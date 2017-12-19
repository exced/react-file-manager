'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movePage = exports.removePage = exports.setPage = exports.addPage = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

var _Page = require('../Types/Page');

var initialValue = function initialValue() {
  return {
    title: 'Page',
    visibleIf: 'true',
    questions: []
  };
};

// Action Creators
var addPage = exports.addPage = function addPage(surveyId) {
  return {
    type: _Page.ADD_PAGE,
    payload: _extends({
      id: (0, _lodash.uniqueId)(),
      surveyId: surveyId
    }, initialValue())
  };
};

var setPage = exports.setPage = function setPage(id, value) {
  return {
    type: _Page.SET_PAGE,
    payload: _extends({
      id: id
    }, value)
  };
};

var removePage = exports.removePage = function removePage(surveyId, id) {
  return {
    type: _Page.REMOVE_PAGE,
    payload: {
      surveyId: surveyId,
      id: id
    }
  };
};

var movePage = exports.movePage = function movePage(surveyId, data) {
  return {
    type: _Page.MOVE_PAGE,
    payload: {
      surveyId: surveyId,
      data: data
    }
  };
};