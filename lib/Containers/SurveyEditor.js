'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _Survey = require('../Actions/Survey');

var _Page = require('../Actions/Page');

var _ControllerSurvey = require('../Actions/ControllerSurvey');

var _ControllerSurvey2 = require('../Selectors/ControllerSurvey');

var _SurveyEditor = require('../Components/SurveyEditor');

var _SurveyEditor2 = _interopRequireDefault(_SurveyEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    collapsed: (0, _ControllerSurvey2.getControllerSurvey)(state, ownProps).collapsed
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    onChange: function onChange(value) {
      return dispatch((0, _Survey.setSurvey)(ownProps.value.id, value));
    },
    onAdd: function onAdd() {
      return dispatch((0, _Page.addPage)(ownProps.value.id));
    },
    onMove: function onMove(value) {
      return dispatch((0, _Page.movePage)(ownProps.value.id, value));
    },
    onToggleCollapsed: function onToggleCollapsed() {
      return dispatch((0, _ControllerSurvey.toggleCollapsedSurvey)(ownProps.value.id));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_SurveyEditor2.default);