'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Meta = exports.Item = undefined;

var _input = require('antd/es/input');

var _input2 = _interopRequireDefault(_input);

var _slider = require('antd/es/slider');

var _slider2 = _interopRequireDefault(_slider);

var _form = require('antd/es/form');

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/es/input/style');

require('antd/es/slider/style');

require('antd/es/form/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _EditFields = require('../Components/EditFields');

var _Editable = require('../Components/Editable');

var _Editable2 = _interopRequireDefault(_Editable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  return _react2.default.createElement(_slider2.default, { disabled: disabled, min: value.min, max: value.max, step: value.step, style: { width: 400 } });
};

var Meta = exports.Meta = function Meta(_ref2) {
  var value = _ref2.value,
      _onChange = _ref2.onChange;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      FormItem,
      _extends({ label: 'min' }, formItemLayout),
      _react2.default.createElement(_EditFields.NumericInput, { min: 0, max: 100, value: value.min, onChange: function onChange(min) {
          return _onChange({ min: min });
        } })
    ),
    _react2.default.createElement(
      FormItem,
      _extends({ label: 'max' }, formItemLayout),
      _react2.default.createElement(_EditFields.NumericInput, { min: 0, max: 100, value: value.max, onChange: function onChange(max) {
          return _onChange({ max: max });
        } })
    ),
    _react2.default.createElement(
      FormItem,
      _extends({ label: 'pas' }, formItemLayout),
      _react2.default.createElement(_EditFields.NumericInput, { min: 0, max: 100, value: value.step, onChange: function onChange(step) {
          return _onChange({ step: step });
        } })
    ),
    _react2.default.createElement(
      FormItem,
      _extends({ label: 'Indications' }, formItemLayout),
      _react2.default.createElement(_input2.default, { value: value.tooltip, onChange: function onChange(e) {
          return _onChange({ tooltip: e.target.value });
        }, placeholder: 'Indications', size: 'small', style: { width: 'auto' } })
    )
  );
};

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