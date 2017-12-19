'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDeepEqualSelector = undefined;

var _reselect = require('reselect');

var _lodash = require('lodash');

var createDeepEqualSelector = exports.createDeepEqualSelector = (0, _reselect.createSelectorCreator)(_reselect.defaultMemoize, _lodash.isEqual);