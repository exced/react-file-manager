'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Meta = exports.Item = undefined;

var _switch = require('antd/es/switch');

var _switch2 = _interopRequireDefault(_switch);

var _input = require('antd/es/input');

var _input2 = _interopRequireDefault(_input);

var _form = require('antd/es/form');

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/switch/style');

require('antd/es/input/style');

require('antd/es/form/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Editable = require('../Components/Editable');

var _Editable2 = _interopRequireDefault(_Editable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _form2.default.Item;

var formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  }
};

var Item = exports.Item = function Item(_ref) {
  var disabled = _ref.disabled,
      value = _ref.value,
      onChange = _ref.onChange;
  return _react2.default.createElement(_input2.default.TextArea, { disabled: true, placeholder: 'R\xE9ponse longue', autosize: true });
};

var Meta = exports.Meta = function (_Component) {
  _inherits(Meta, _Component);

  function Meta(props) {
    _classCallCheck(this, Meta);

    var _this = _possibleConstructorReturn(this, (Meta.__proto__ || Object.getPrototypeOf(Meta)).call(this, props));

    _this.toggle = function () {
      return _this.setState({ autosize: !_this.state.autosize });
    };

    _this.state = {
      autosize: true
    };
    return _this;
  }

  _createClass(Meta, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _onChange = _props.onChange,
          value = _props.value;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          FormItem,
          _extends({ label: 'taille auto' }, formItemLayout),
          _react2.default.createElement(_switch2.default, null)
        ),
        _react2.default.createElement(
          FormItem,
          _extends({ label: 'Indications' }, formItemLayout),
          _react2.default.createElement(_input2.default, { value: value.tooltip, onChange: function onChange(e) {
              return _onChange({ tooltip: e.target.value });
            }, placeholder: 'Indications', size: 'small', style: { width: 'auto' } })
        )
      );
    }
  }]);

  return Meta;
}(_react.Component);

var Default = function Default(props) {
  return (0, _Editable2.default)(Item, Meta)(props);
};

Default.propTypes = {
  value: _propTypes2.default.object.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  editable: _propTypes2.default.bool
};

Default.defaultProps = {
  editable: true
};

exports.default = Default;