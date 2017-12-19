'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.page = undefined;

var _normalizr = require('normalizr');

var _Question = require('./Question');

// Schemas
var page = exports.page = new _normalizr.schema.Entity('pages', { questions: [_Question.question] });