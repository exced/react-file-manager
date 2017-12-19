'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.denormalize = exports.normalize = undefined;

var _normalizr = require('normalizr');

var _Page = require('./Page');

var _Question = require('./Question');

// Schemas
var survey = new _normalizr.schema.Entity('survey', {
  pages: [_Page.page],
  questions: [_Question.question]
});

var normalize = exports.normalize = function normalize(input) {
  return (0, _normalizr.normalize)(input, survey);
};

var denormalize = exports.denormalize = function denormalize(input, entities) {
  return (0, _normalizr.denormalize)(input, survey, entities);
};