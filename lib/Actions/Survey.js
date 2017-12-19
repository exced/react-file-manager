'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSurvey = exports.reset = exports.set = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Survey = require('../Types/Survey');

var _lodash = require('lodash');

var _Survey2 = require('../Schemas/Survey');

var initialValue = function initialValue() {
  return {
    id: (0, _lodash.uniqueId)(),
    title: 'Questionnaire',
    description: 'Description',
    responseTime: '',
    active: false,
    dates: [],
    password: '',
    link: '',
    pages: []
  };
};

// Action Creators
var set = exports.set = function set(value) {
  return {
    type: _Survey.SET,
    payload: {
      value: (0, _Survey2.normalize)(value)
    }
  };
};

var reset = exports.reset = function reset() {
  return {
    type: _Survey.SET,
    payload: {
      value: (0, _Survey2.normalize)(initialValue())
    }
  };
};

var setSurvey = exports.setSurvey = function setSurvey(id, value) {
  return {
    type: _Survey.SET_SURVEY,
    payload: _extends({
      id: id
    }, value)
  };
};