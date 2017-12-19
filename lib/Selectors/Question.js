'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getQuestion = exports.questionKeys = exports.getQuestionValues = exports.questions = undefined;

var _reselect = require('reselect');

// Input Selectors
var id = function id(state, props) {
    return props.id;
};

var questions = exports.questions = function questions(state) {
    return state.editor.present.entities.questions;
};

var getQuestionValues = exports.getQuestionValues = (0, _reselect.createSelector)([questions], function (questions) {
    return Object.values(questions);
});

var questionKeys = exports.questionKeys = function questionKeys(state) {
    return Object.keys(state.editor.present.entities.questions);
};

// Selectors
var getQuestion = exports.getQuestion = (0, _reselect.createSelector)([questions, id], function (questions, id) {
    return questions[id];
});