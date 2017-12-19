'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _reduxUndo = require('redux-undo');

var _Normalizr = require('../Selectors/Normalizr');

var _Survey = require('../Schemas/Survey');

var _SiderMenu = require('../Components/SiderMenu');

var _SiderMenu2 = _interopRequireDefault(_SiderMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    denormalize: function denormalize() {
      return (0, _Survey.denormalize)((0, _Normalizr.getResult)(state), (0, _Normalizr.getEntities)(state));
    }
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    onUndo: function onUndo() {
      return dispatch(_reduxUndo.ActionCreators.undo());
    },
    onRedo: function onRedo() {
      return dispatch(_reduxUndo.ActionCreators.redo());
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_SiderMenu2.default);