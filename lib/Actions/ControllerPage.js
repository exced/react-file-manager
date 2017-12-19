'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleCollapsedPage = undefined;

var _ControllerPage = require('../Types/ControllerPage');

// Action Creators
var toggleCollapsedPage = exports.toggleCollapsedPage = function toggleCollapsedPage(id) {
  return {
    type: _ControllerPage.TOGGLE_COLLAPSED_PAGE,
    payload: {
      id: id
    }
  };
};