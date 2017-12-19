'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _Question = require('../Actions/Question');

var _ControllerQuestion = require('../Actions/ControllerQuestion');

var _ControllerQuestion2 = require('../Selectors/ControllerQuestion');

var _Question2 = require('../Selectors/Question');

var _QuestionEditor = require('../Components/QuestionEditor');

var _QuestionEditor2 = _interopRequireDefault(_QuestionEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    value: (0, _Question2.getQuestion)(state, ownProps),
    collapsed: (0, _ControllerQuestion2.getControllerQuestion)(state, ownProps).collapsed
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    onChange: function onChange(value) {
      return dispatch((0, _Question.setQuestion)(ownProps.id, value));
    },
    onReset: function onReset(type) {
      return dispatch((0, _Question.resetQuestion)(ownProps.id, type));
    },
    onRemove: function onRemove() {
      return dispatch((0, _Question.removeQuestion)(ownProps.parent.id, ownProps.id));
    },
    onToggleCollapsed: function onToggleCollapsed() {
      return dispatch((0, _ControllerQuestion.toggleCollapsedQuestion)(ownProps.id));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_QuestionEditor2.default);