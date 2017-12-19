'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _localeProvider = require('antd/es/locale-provider');

var _localeProvider2 = _interopRequireDefault(_localeProvider);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/locale-provider/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _App = require('../Containers/App');

var _App2 = _interopRequireDefault(_App);

var _Survey = require('../Actions/Survey');

var _en_US = require('antd/lib/locale-provider/en_US');

var _en_US2 = _interopRequireDefault(_en_US);

var _fr_FR = require('antd/lib/locale-provider/fr_FR');

var _fr_FR2 = _interopRequireDefault(_fr_FR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var locales = {
  enUS: _en_US2.default,
  frFR: _fr_FR2.default
};

var Root = function (_Component) {
  _inherits(Root, _Component);

  function Root() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Root);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Root.__proto__ || Object.getPrototypeOf(Root)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillMount = function () {
      _this.props.reset();
    }, _this.componentWillReceiveProps = function (nextProps) {
      if (nextProps.initialValue) {
        _this.props.set(nextProps.initialValue);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Root, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          locale = _props.locale,
          onExport = _props.onExport;


      return _react2.default.createElement(
        _localeProvider2.default,
        { locale: locales[locale] },
        _react2.default.createElement(_App2.default, { onExport: onExport })
      );
    }
  }]);

  return Root;
}(_react.Component);

Root.propTypes = {
  locale: _propTypes2.default.string,
  initialValue: _propTypes2.default.object,
  onExport: _propTypes2.default.func
};

Root.defaultProps = {
  locale: "enUS",
  onExport: function onExport(v) {}
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    set: function set(v) {
      return dispatch((0, _Survey.set)(v));
    },
    reset: function reset() {
      return dispatch((0, _Survey.reset)());
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Root);