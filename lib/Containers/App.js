'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _App = require('../Components/App');

var _App2 = _interopRequireDefault(_App);

var _Survey = require('../Selectors/Survey');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    value: (0, _Survey.getSurvey)(state)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_App2.default);