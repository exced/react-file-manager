'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DragList = require('./DragList');

var _DragList2 = _interopRequireDefault(_DragList);

var _QuestionEditor = require('../Containers/QuestionEditor');

var _QuestionEditor2 = _interopRequireDefault(_QuestionEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuestionList = function QuestionList(_ref) {
  var parent = _ref.parent,
      data = _ref.data,
      onMove = _ref.onMove;
  return _react2.default.createElement(_DragList2.default, { Component: _QuestionEditor2.default, parent: parent, data: data, onMove: onMove });
};

QuestionList.propTypes = {
  parent: _propTypes2.default.object.isRequired,
  data: _propTypes2.default.array.isRequired,
  onMove: _propTypes2.default.func.isRequired
};

exports.default = QuestionList;