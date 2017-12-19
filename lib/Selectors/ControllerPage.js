'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getControllerPage = undefined;

var _reselect = require('reselect');

// Input Selectors
var id = function id(state, props) {
  return props.id;
};

var pages = function pages(state, props) {
  return state.controller.pages;
};

// Selectors
var getControllerPage = exports.getControllerPage = (0, _reselect.createSelector)([pages, id], function (pages, id) {
  return pages[id] || {};
});