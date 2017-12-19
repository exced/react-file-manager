'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _row = require('antd/es/row');

var _row2 = _interopRequireDefault(_row);

var _col = require('antd/es/col');

var _col2 = _interopRequireDefault(_col);

require('antd/es/row/style');

require('antd/es/col/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Editable = function Editable(Item, Meta) {
  return function (_ref) {
    var value = _ref.value,
        onChange = _ref.onChange,
        editable = _ref.editable;
    return editable ? _react2.default.createElement(
      _row2.default,
      { type: 'flex', align: 'bottom' },
      _react2.default.createElement(
        _col2.default,
        { span: 14 },
        _react2.default.createElement(Item, { disabled: true, value: value, onChange: function onChange() {} })
      ),
      _react2.default.createElement(
        _col2.default,
        { span: 10, style: { textAlign: 'center' } },
        _react2.default.createElement(
          'h3',
          null,
          'M\xE9ta donn\xE9es'
        ),
        _react2.default.createElement(Meta, { value: value, onChange: onChange, editable: editable })
      )
    ) : _react2.default.createElement(Item, { disabled: false, value: value, onChange: onChange });
  };
};

exports.default = Editable;