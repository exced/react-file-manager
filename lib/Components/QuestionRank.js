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

var _row = require('antd/es/row');

var _row2 = _interopRequireDefault(_row);

var _col = require('antd/es/col');

var _col2 = _interopRequireDefault(_col);

var _form = require('antd/es/form');

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/es/button/style');

require('antd/es/icon/style');

require('antd/es/input/style');

require('antd/es/row/style');

require('antd/es/col/style');

require('antd/es/form/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DragList = require('../Components/DragList');

var _DragList2 = require('./DragList');

var _DragList3 = _interopRequireDefault(_DragList2);

var _Editable = require('../Components/Editable');

var _Editable2 = _interopRequireDefault(_Editable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

var ChoiceItem = function ChoiceItem(_ref) {
  var id = _ref.id;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _row2.default,
      { style: { padding: 10 } },
      _react2.default.createElement(
        _col2.default,
        { span: 2 },
        _react2.default.createElement(_DragList.Handle, null)
      ),
      _react2.default.createElement(
        _col2.default,
        { span: 22 },
        _react2.default.createElement(
          'span',
          null,
          id
        )
      )
    )
  );
};

var Item = exports.Item = function Item(_ref2) {
  var disabled = _ref2.disabled,
      value = _ref2.value,
      onChange = _ref2.onChange;
  return _react2.default.createElement(_DragList3.default, { disabled: disabled, Component: ChoiceItem, data: value.choices, onChange: onChange });
};

var Meta = function Meta(_ref3) {
  var value = _ref3.value,
      _onChange = _ref3.onChange;
  return _react2.default.createElement(
    'div',
    null,
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
      { icon: 'plus', type: 'dashed', onClick: function onClick() {
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