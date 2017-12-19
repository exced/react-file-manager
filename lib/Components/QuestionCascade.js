'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Meta = exports.Item = undefined;

var _input = require('antd/es/input');

var _input2 = _interopRequireDefault(_input);

require('antd/es/input/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Editable = require('../Components/Editable');

var _Editable2 = _interopRequireDefault(_Editable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = exports.Item = function Item(_ref) {
  var disabled = _ref.disabled,
      value = _ref.value,
      onChange = _ref.onChange;
  return _react2.default.createElement(_input2.default, { disabled: disabled, placeholder: 'R\xE9ponse courte', size: value.size, style: { width: 'auto' } });
};

var Meta = exports.Meta = function Meta(_ref2) {
  var value = _ref2.value,
      onChange = _ref2.onChange;
  return _react2.default.createElement('div', null);
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