'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getControllerSurvey = undefined;

var _reselect = require('reselect');

var _Normalizr = require('../Selectors/Normalizr');

// Input Selectors
var survey = function survey(state) {
    return state.controller.survey;
};

// Selectors
var getControllerSurvey = exports.getControllerSurvey = (0, _reselect.createSelector)([_Normalizr.result, survey], function (result, survey) {
    return survey[result] || {};
});