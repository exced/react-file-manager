'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getResult = exports.getEntities = exports.result = exports.entities = undefined;

var _reselect = require('reselect');

// Input Selectors
var entities = exports.entities = function entities(state) {
    return state.editor.present.entities;
};

var result = exports.result = function result(state) {
    return state.editor.present.result;
};

// Selectors

var getEntities = exports.getEntities = (0, _reselect.createSelector)([entities], function (entities) {
    return entities || {};
});

var getResult = exports.getResult = (0, _reselect.createSelector)([result], function (result) {
    return result || {};
});