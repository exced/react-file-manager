'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOrderedPages = exports.getOrderedPageIds = exports.getPage = exports.getPageIds = exports.getPages = exports.pageKeys = exports.pageValues = exports.pages = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reselect = require('reselect');

var _Selectors = require('../Selectors');

var _Survey = require('../Selectors/Survey');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Input Selectors
var id = function id(state, props) {
  return props.id;
};

var pages = exports.pages = function pages(state) {
  return state.editor.present.entities.pages;
};

var pageValues = exports.pageValues = function pageValues(state) {
  return Object.values(state.editor.present.entities.pages);
};

var pageKeys = exports.pageKeys = function pageKeys(state) {
  return Object.keys(state.editor.present.entities.pages);
};

// Selectors
var getPages = exports.getPages = (0, _reselect.createSelector)([pageValues], function (pages) {
  return pages || [];
});

var getPageIds = exports.getPageIds = (0, _Selectors.createDeepEqualSelector)([pageKeys], function (ids) {
  return ids || [];
});

var getPage = exports.getPage = (0, _reselect.createSelector)([pages, id], function (pages, id) {
  return pages[id];
});

var getOrderedPageIds = exports.getOrderedPageIds = (0, _reselect.createSelector)([_Survey.getSurvey], function (survey) {
  return survey.pages;
});

var getOrderedPages = exports.getOrderedPages = (0, _reselect.createSelector)([pages, getOrderedPageIds], function (pages, ids) {
  return ids.reduce(function (a, e) {
    return _extends({}, a, _defineProperty({}, e, pages[e]));
  }, {});
});