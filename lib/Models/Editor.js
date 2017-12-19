'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.values = undefined;

var _values;

var _Editor = require('../Types/Editor');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var values = exports.values = (_values = {}, _defineProperty(_values, _Editor.SURVEY, {
  title: 'Questionnaire'
}), _defineProperty(_values, _Editor.PAGE, {
  title: 'Page',
  enabledIf: 'true'
}), _defineProperty(_values, _Editor.QUESTION_TEXT, {
  title: 'Question texte court',
  mandatory: false,
  enabledIf: 'true',
  tooltip: '',
  size: 'small'
}), _defineProperty(_values, _Editor.QUESTION_TEXT_AREA, {
  title: 'Question texte long',
  mandatory: false,
  enabledIf: 'true',
  tooltip: ''
}), _defineProperty(_values, _Editor.QUESTION_DATE, {
  title: 'Question date',
  mandatory: false,
  enabledIf: 'true',
  tooltip: '',
  begin: null,
  end: null
}), _defineProperty(_values, _Editor.QUESTION_DISCRETE_SCALE, {
  title: 'Question échelle discrète',
  mandatory: false,
  enabledIf: 'true',
  tooltip: '',
  begin: 0,
  end: 100,
  step: 1
}), _defineProperty(_values, _Editor.QUESTION_NUMERICAL_SCALE, {
  title: 'Question échelle numérique',
  mandatory: false,
  enabledIf: 'true',
  tooltip: '',
  begin: 0,
  end: 100,
  step: 1
}), _defineProperty(_values, _Editor.QUESTION_CHOICES, {
  title: 'Question choix multiples',
  mandatory: false,
  enabledIf: 'true',
  tooltip: '',
  choices: []
}), _defineProperty(_values, _Editor.QUESTION_IMAGE, {
  title: 'Question Image',
  mandatory: false,
  enabledIf: 'true',
  tooltip: '',
  maxSize: 10000
}), _defineProperty(_values, _Editor.QUESTION_RANK, {
  title: 'Question rang',
  mandatory: false,
  enabledIf: 'true',
  tooltip: '',
  choices: []
}), _values);