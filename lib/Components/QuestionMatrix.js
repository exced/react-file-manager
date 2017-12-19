'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = undefined;

var _inputNumber = require('antd/es/input-number');

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _input = require('antd/es/input');

var _input2 = _interopRequireDefault(_input);

var _form = require('antd/es/form');

var _form2 = _interopRequireDefault(_form);

require('antd/es/input-number/style');

require('antd/es/input/style');

require('antd/es/form/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Editable = require('../Components/Editable');

var _Editable2 = _interopRequireDefault(_Editable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormItem = _form2.default.Item;

var Item = exports.Item = function Item(_ref) {
  var disabled = _ref.disabled,
      value = _ref.value,
      onChange = _ref.onChange;
  return _react2.default.createElement(_input2.default, { disabled: disabled, placeholder: 'R\xE9ponse courte', size: value.size, style: { width: 'auto' } });
};

var Meta = function Meta(_ref2) {
  var value = _ref2.value,
      _onChange = _ref2.onChange;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      FormItem,
      { label: 'max' },
      _react2.default.createElement(_inputNumber2.default, { defaultValue: 1, onChange: function onChange(max) {
          return _onChange({ max: max });
        } })
    ),
    _react2.default.createElement(
      FormItem,
      { label: 'Indications' },
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