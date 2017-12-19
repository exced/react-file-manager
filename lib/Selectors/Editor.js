'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getQuestions = exports.getPages = undefined;

var _reselect = require('reselect');

var _Editor = require('../Types/Editor');

// Input Selectors
var items = function items(state) {
    return state.editor.items;
};

var questionsOf = function questionsOf(state, parentId) {
    return Object.values(state.editor.items).filter(function (e) {
        return e.parentId === parentId;
    });
};

// Selectors
var getPages = exports.getPages = (0, _reselect.createSelector)([items], function (items) {
    return Object.values(items).filter(function (e) {
        return e.type === _Editor.PAGE;
    });
});

var getQuestions = exports.getQuestions = (0, _reselect.createSelector)([questionsOf], function (questions) {
    return questions;
});