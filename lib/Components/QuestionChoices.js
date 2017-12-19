'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = undefined;

var _button = require('antd/es/button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('antd/es/icon');

var _icon2 = _interopRequireDefault(_icon);

var _input = require('antd/es/input');

var _input2 = _interopRequireDefault(_input);

var _form = require('antd/es/form');

var _form2 = _interopRequireDefault(_form);

var _checkbox = require('antd/es/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = require('antd/es/radio');

var _radio2 = _interopRequireDefault(_radio);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/es/button/style');

require('antd/es/icon/style');

require('antd/es/input/style');

require('antd/es/form/style');

require('antd/es/checkbox/style');

require('antd/es/radio/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _EditFields = require('../Components/EditFields');

var _Editable = require('../Components/Editable');

var _Editable2 = _interopRequireDefault(_Editable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var RadioGroup = _radio2.default.Group;
var CheckboxGroup = _checkbox2.default.Group;

var FormItem = _form2.default.Item;

var formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};

var radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px'
};

var Item = exports.Item = function Item(_ref) {
  var disabled = _ref.disabled,
      value = _ref.value,
      onChange = _ref.onChange;
  return _react2.default.createElement(
    'div',
    null,
    value.max === 1 ? _react2.default.createElement(
      RadioGroup,
      { disabled: disabled },
      value.choices.map(function (a, i) {
        return _react2.default.createElement(
          _radio2.default,
          { key: a + '-' + i, disabled: disabled, style: radioStyle, value: a, onChange: onChange },
          a
        );
      })
    ) : _react2.default.createElement(
      CheckboxGroup,
      { disabled: disabled },
      value.choices.map(function (a, i) {
        return _react2.default.createElement(
          _checkbox2.default,
          { key: a + '-' + i, disabled: disabled, style: radioStyle, value: a, onChange: onChange },
          a
        );
      })
    )
  );
};

var Meta = function Meta(_ref2) {
  var value = _ref2.value,
      _onChange = _ref2.onChange;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      FormItem,
      _extends({ label: 'Choix max' }, formItemLayout),
      _react2.default.createElement(_EditFields.NumericInput, { min: 0, max: 4, value: value.max, onChange: function onChange(max) {
          return _onChange({ max: max });
        } })
    ),
    value.choices.map(function (a, i) {
      return _react2.default.createElement(
        FormItem,
        _extends({ label: 'choix ' + (i + 1) }, formItemLayout),
        _react2.default.createElement(_input2.default, {
          value: a,
          onChange: function onChange(e) {
            return _onChange({ choices: value.choices.map(function (b, j) {
                return j === i ? e.target.value : b;
              }) });
          },
          placeholder: 'Choix ' + (i + 1), size: 'small', style: { width: 'auto' } }),
        _react2.default.createElement(_icon2.default, { type: 'minus-circle-o', style: { color: 'red' }, disabled: value.choices.length === 1, onClick: function onClick() {
            return _onChange({ choices: value.choices.filter(function (b, j) {
                return i !== j;
              }) });
          } })
      );
    }),
    _react2.default.createElement(
      _button2.default,
      { icon: 'plus', disabled: value.choices.length >= 4, type: 'dashed', onClick: function onClick() {
          return _onChange({ choices: [].concat(_toConsumableArray(value.choices), ['Nouveau choix']) });
        }, style: { width: '60%' } },
      'Ajouter choix'
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