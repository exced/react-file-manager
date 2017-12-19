'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _Page = require('../Actions/Page');

var _Question = require('../Actions/Question');

var _ControllerPage = require('../Actions/ControllerPage');

var _ControllerPage2 = require('../Selectors/ControllerPage');

var _Page2 = require('../Selectors/Page');

var _PageEditor = require('../Components/PageEditor');

var _PageEditor2 = _interopRequireDefault(_PageEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    value: (0, _Page2.getPage)(state, ownProps),
    collapsed: (0, _ControllerPage2.getControllerPage)(state, ownProps).collapsed
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    onChange: function onChange(value) {
      return dispatch((0, _Page.setPage)(ownProps.id, value));
    },
    onRemove: function onRemove() {
      return dispatch((0, _Page.removePage)(ownProps.parent.id, ownProps.id));
    },
    onAdd: function onAdd(type) {
      return dispatch((0, _Question.addQuestion)(ownProps.id, type));
    },
    onMove: function onMove(value) {
      return dispatch((0, _Question.moveQuestion)(ownProps.id, value));
    },
    onToggleCollapsed: function onToggleCollapsed() {
      return dispatch((0, _ControllerPage.toggleCollapsedPage)(ownProps.id));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_PageEditor2.default);