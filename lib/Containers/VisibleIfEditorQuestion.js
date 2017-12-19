'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _ControllerQuestion = require('../Selectors/ControllerQuestion');

var _VisibleIfEditor = require('../Components/VisibleIfEditor');

var _VisibleIfEditor2 = _interopRequireDefault(_VisibleIfEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    questionsMap: (0, _ControllerQuestion.getPreviousQuestionsMapFromQuestion)(state, ownProps)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_VisibleIfEditor2.default);