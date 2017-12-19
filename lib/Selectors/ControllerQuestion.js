'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPreviousQuestionsMapFromQuestion = exports.getPreviousQuestionsMapFromPage = exports.getControllerQuestion = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reselect = require('reselect');

var _Question = require('../Selectors/Question');

var _Page = require('./Page');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Input Selectors
var id = function id(state, props) {
  return props.id;
};

var value = function value(state, props) {
  return props.value;
};

var questions = function questions(state) {
  return state.controller.questions;
};

// Selectors
var getControllerQuestion = exports.getControllerQuestion = (0, _reselect.createSelector)([questions, id], function (questions, id) {
  return questions[id] || {};
});

var getPreviousQuestionsMapFromPage = exports.getPreviousQuestionsMapFromPage = (0, _reselect.createSelector)([value, _Page.getOrderedPages, _Question.questions], function (value, pages, questions) {
  var pagesValues = Object.values(pages);
  return pagesValues.slice(0, pagesValues.findIndex(function (e) {
    return e.id === value.id;
  })).reduce(function (a, p) {
    return _extends({}, a, p.questions.reduce(function (b, q) {
      return _extends({}, b, _defineProperty({}, q, questions[q]));
    }, {}));
  }, {});
});

var getPreviousQuestionsMapFromQuestion = exports.getPreviousQuestionsMapFromQuestion = (0, _reselect.createSelector)([value, _Page.getOrderedPages, _Question.questions], function (value, pages, questions) {
  var pagesValues = Object.values(pages);
  return pagesValues.slice(0, pagesValues.findIndex(function (e) {
    return e.id === value.pageId;
  }) + 1).reduce(function (a, p) {
    return _extends({}, a, (p.id === value.pageId ? p.questions.slice(0, p.questions.indexOf(value.id)) : p.questions).reduce(function (b, q) {
      return _extends({}, b, _defineProperty({}, q, questions[q]));
    }, {}));
  }, {});
});