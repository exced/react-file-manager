"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeToName = undefined;

var _Question = require("../Types/Question");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var typeToName = exports.typeToName = function typeToName(type) {
  var _QUESTION_TEXT$QUESTI;

  return (_QUESTION_TEXT$QUESTI = {}, _defineProperty(_QUESTION_TEXT$QUESTI, _Question.QUESTION_TEXT, "Texte"), _defineProperty(_QUESTION_TEXT$QUESTI, _Question.QUESTION_DATE, "Date"), _defineProperty(_QUESTION_TEXT$QUESTI, _Question.QUESTION_DISCRETE_SCALE, "Échelle discrète"), _defineProperty(_QUESTION_TEXT$QUESTI, _Question.QUESTION_NUMERICAL_SCALE, "Échelle numérique"), _defineProperty(_QUESTION_TEXT$QUESTI, _Question.QUESTION_CHOICES, "Choix"), _defineProperty(_QUESTION_TEXT$QUESTI, _Question.QUESTION_IMAGE, "Image"), _defineProperty(_QUESTION_TEXT$QUESTI, _Question.QUESTION_RANK, "Classement"), _QUESTION_TEXT$QUESTI)[type];
};