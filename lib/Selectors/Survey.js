'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSurvey = exports.survey = undefined;

var _reselect = require('reselect');

var _Normalizr = require('../Selectors/Normalizr');

// Input Selectors
var survey = exports.survey = function survey(state) {
    return state.editor.present.entities.survey;
};

// Selectors
var getSurvey = exports.getSurvey = (0, _reselect.createSelector)([_Normalizr.result, survey], function (result, survey) {
    return survey[result] || {};
});