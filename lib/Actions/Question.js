'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moveQuestion = exports.removeQuestion = exports.resetQuestion = exports.setQuestion = exports.addQuestion = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

var _Question = require('../Types/Question');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Initial Values
var initialValue = function initialValue(type) {
  var _QUESTION_SWITCH$QUES;

  return (_QUESTION_SWITCH$QUES = {}, _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_SWITCH, {
    type: _Question.QUESTION_SWITCH,
    title: 'Question switch',
    mandatory: false,
    visibleIf: 'true',
    checkedChildren: 'Oui',
    unCheckedChildren: 'Non',
    tooltip: ''
  }), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_TEXT, {
    type: _Question.QUESTION_TEXT,
    title: 'Question texte court',
    mandatory: false,
    visibleIf: 'true',
    tooltip: ''
  }), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_TEXT_AREA, {
    type: _Question.QUESTION_TEXT_AREA,
    title: 'Question texte long',
    mandatory: false,
    visibleIf: 'true',
    tooltip: ''
  }), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_RATE, {
    type: _Question.QUESTION_RATE,
    title: 'Question note',
    mandatory: false,
    visibleIf: 'true',
    tooltip: '',
    count: 5
  }), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_DATE, {
    type: _Question.QUESTION_DATE,
    title: 'Question date',
    mandatory: false,
    visibleIf: 'true',
    tooltip: '',
    dateType: 'date',
    min: '',
    max: ''
  }), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_DISCRETE_SCALE, {
    type: _Question.QUESTION_DISCRETE_SCALE,
    title: 'Question échelle discrète',
    mandatory: false,
    visibleIf: 'true',
    tooltip: '',
    min: 0,
    max: 100,
    step: 1
  }), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_NUMERICAL_SCALE, {
    type: _Question.QUESTION_NUMERICAL_SCALE,
    title: 'Question échelle numérique',
    mandatory: false,
    visibleIf: 'true',
    tooltip: '',
    min: 0,
    max: 100,
    step: 1,
    marks: {}
  }), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_CHOICES, {
    type: _Question.QUESTION_CHOICES,
    title: 'Question choix multiples',
    mandatory: false,
    visibleIf: 'true',
    tooltip: '',
    choices: [],
    max: 4
  }), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_IMAGE, {
    type: _Question.QUESTION_IMAGE,
    title: 'Question Image',
    mandatory: false,
    visibleIf: 'true',
    tooltip: '',
    maxSize: 10000
  }), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_RANK, {
    type: _Question.QUESTION_RANK,
    title: 'Question rang',
    mandatory: false,
    visibleIf: 'true',
    tooltip: '',
    choices: []
  }), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_CASCADE, {
    type: _Question.QUESTION_CASCADE,
    title: 'Question cascade',
    mandatory: false,
    visibleIf: 'true',
    tooltip: '',
    options: []
  }), _QUESTION_SWITCH$QUES)[type];
};

// Action Creators
var addQuestion = exports.addQuestion = function addQuestion(pageId, type) {
  return {
    type: _Question.ADD_QUESTION,
    payload: _extends({
      id: (0, _lodash.uniqueId)(),
      pageId: pageId
    }, initialValue(type))
  };
};

var setQuestion = exports.setQuestion = function setQuestion(id, value) {
  return {
    type: _Question.SET_QUESTION,
    payload: _extends({
      id: id
    }, value)
  };
};

var resetQuestion = exports.resetQuestion = function resetQuestion(id, type) {
  return {
    type: _Question.SET_QUESTION,
    payload: _extends({
      id: id
    }, initialValue(type))
  };
};

var removeQuestion = exports.removeQuestion = function removeQuestion(pageId, id) {
  return {
    type: _Question.REMOVE_QUESTION,
    payload: {
      pageId: pageId,
      id: id
    }
  };
};

var moveQuestion = exports.moveQuestion = function moveQuestion(pageId, data) {
  return {
    type: _Question.MOVE_QUESTION,
    payload: {
      pageId: pageId,
      data: data
    }
  };
};