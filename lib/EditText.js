'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('antd/es/input');

var _input2 = _interopRequireDefault(_input);

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  font-size: 1.25em;\n  padding: 0.25em 1em;\n  border-width: 1px;\n  border-color: ', ';\n  background-color: transparent;\n  width: auto;\n  height: auto;\n  text-align: center;\n'], ['\n  color: ', ';\n  font-size: 1.25em;\n  padding: 0.25em 1em;\n  border-width: 1px;\n  border-color: ', ';\n  background-color: transparent;\n  width: auto;\n  height: auto;\n  text-align: center;\n']);

require('antd/es/input/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledInput = (0, _styledComponents2.default)(_input2.default)(_templateObject, function (props) {
  return props.color ? props.color : '#181919';
}, function (props) {
  return props.focused ? '#181919' : 'transparent';
});

var EditText = function EditText(_ref) {
  var _onChange = _ref.onChange,
      value = _ref.value,
      size = _ref.size,
      placeholder = _ref.placeholder,
      textAlign = _ref.textAlign;
  return _react2.default.createElement(StyledInput, {
    onFocus: function onFocus(e) {
      return e.target.select();
    },
    onBlur: function onBlur(e) {
      return e.target.blur();
    },
    onPressEnter: function onPressEnter(e) {
      return e.target.blur();
    },
    size: size,
    value: value,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    placeholder: placeholder
  });
};

EditText.propTypes = {
  value: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  size: _propTypes2.default.oneOf(["small", "large"]),
  placeholder: _propTypes2.default.string
};

EditText.defaultProps = {
  size: "small",
  placeholder: "placeholder"
};

exports.default = EditText;