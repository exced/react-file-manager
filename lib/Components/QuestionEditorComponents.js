'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuestionRank = exports.QuestionImage = exports.QuestionChoices = exports.QuestionNumericalScale = exports.QuestionDiscreteScale = exports.QuestionDate = exports.QuestionTextArea = exports.QuestionText = undefined;

var _datePicker = require('antd/lib/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

require('antd/lib/date-picker/style');

require('antd/lib/row/style');

require('antd/lib/col/style');

require('antd/lib/input/style');

require('antd/lib/form/style');

require('antd/lib/select/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Editor = require('./Styles/Editor.css');

var _Editor2 = _interopRequireDefault(_Editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _select2.default.Option;
var FormItem = _form2.default.Item;

var Edit = function Edit() {};

var MetaData = function MetaData() {};

var QuestionText = exports.QuestionText = function QuestionText(_ref) {
  var _onChange = _ref.onChange,
      value = _ref.value;
  return _react2.default.createElement(
    _row2.default,
    { type: 'flex', align: 'bottom' },
    _react2.default.createElement(
      _col2.default,
      { span: 16 },
      _react2.default.createElement(_input2.default, { disabled: true, placeholder: 'R\xE9ponse courte', size: value.size, style: { width: 'auto' } })
    ),
    _react2.default.createElement(
      _col2.default,
      { span: 8 },
      _react2.default.createElement(
        'h3',
        null,
        'M\xE9ta donn\xE9es'
      ),
      _react2.default.createElement(
        FormItem,
        { label: 'taille' },
        _react2.default.createElement(
          _select2.default,
          { defaultValue: value.size, style: { width: 120 }, onChange: function onChange(size) {
              return _onChange({ size: size });
            } },
          _react2.default.createElement(
            Option,
            { value: 'small' },
            'Petit'
          ),
          _react2.default.createElement(
            Option,
            { value: 'default' },
            'D\xE9faut'
          ),
          _react2.default.createElement(
            Option,
            { value: 'large' },
            'Grand'
          )
        )
      )
    )
  );
};

var QuestionTextArea = exports.QuestionTextArea = function QuestionTextArea(_ref2) {
  var onChange = _ref2.onChange,
      value = _ref2.value;
  return _react2.default.createElement(_input2.default, { disabled: true, placeholder: 'R\xE9ponse longue' });
};

var QuestionDate = exports.QuestionDate = function QuestionDate(_ref3) {
  var onChange = _ref3.onChange,
      value = _ref3.value;
  return _react2.default.createElement(_datePicker2.default, { disabled: true, placeholder: 'S\xE9lectionner date' });
};

var QuestionDiscreteScale = exports.QuestionDiscreteScale = function QuestionDiscreteScale(_ref4) {
  var onChange = _ref4.onChange;
  return _react2.default.createElement(
    'span',
    null,
    'QuestionDiscreteScale'
  );
};

var QuestionNumericalScale = exports.QuestionNumericalScale = function QuestionNumericalScale(_ref5) {
  var onChange = _ref5.onChange;
  return _react2.default.createElement(
    'span',
    null,
    'QuestionNumericalScale'
  );
};

var QuestionChoices = exports.QuestionChoices = function QuestionChoices(_ref6) {
  var onChange = _ref6.onChange;
  return _react2.default.createElement(
    'span',
    null,
    'QuestionChoices'
  );
};

var QuestionImage = exports.QuestionImage = function QuestionImage(_ref7) {
  var onChange = _ref7.onChange;
  return _react2.default.createElement(
    'span',
    null,
    'QuestionImage'
  );
};

var QuestionRank = exports.QuestionRank = function QuestionRank(_ref8) {
  var onChange = _ref8.onChange;
  return _react2.default.createElement(
    'span',
    null,
    'QuestionRank'
  );
};