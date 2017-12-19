'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('antd/es/input');

var _input2 = _interopRequireDefault(_input);

var _form = require('antd/es/form');

var _form2 = _interopRequireDefault(_form);

var _select = require('antd/es/select');

var _select2 = _interopRequireDefault(_select);

var _datePicker = require('antd/es/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

require('antd/es/input/style');

require('antd/es/form/style');

require('antd/es/select/style');

require('antd/es/date-picker/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Editable = require('../Components/Editable');

var _Editable2 = _interopRequireDefault(_Editable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MonthPicker = _datePicker2.default.MonthPicker,
    RangePicker = _datePicker2.default.RangePicker,
    WeekPicker = _datePicker2.default.WeekPicker;


var Option = _select2.default.Option;
var FormItem = _form2.default.Item;

var getNode = function getNode(type) {
  return {
    date: _datePicker2.default,
    month: MonthPicker,
    week: WeekPicker,
    range: RangePicker
  }[type];
};

var getPlaceholder = function getPlaceholder(type) {
  return {
    date: "Sélectionner date",
    month: "Sélectionner mois",
    week: "Sélectionner semaine",
    range: ["Début", "Fin"]
  }[type];
};

var Item = function Item(_ref) {
  var disabled = _ref.disabled,
      value = _ref.value,
      onChange = _ref.onChange;

  var Node = getNode(value.dateType);
  return _react2.default.createElement(Node, { disabled: disabled, placeholder: getPlaceholder(value.dateType), onChange: onChange });
};

var Meta = function Meta(_ref2) {
  var value = _ref2.value,
      _onChange = _ref2.onChange,
      editable = _ref2.editable;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      FormItem,
      { label: 'Type' },
      _react2.default.createElement(
        _select2.default,
        { defaultValue: value.dateType, style: { width: 120 }, onChange: function onChange(dateType) {
            return _onChange({ dateType: dateType });
          } },
        _react2.default.createElement(
          Option,
          { value: 'date' },
          'Date'
        ),
        _react2.default.createElement(
          Option,
          { value: 'month' },
          'Mois'
        ),
        _react2.default.createElement(
          Option,
          { value: 'week' },
          'Semaine'
        ),
        _react2.default.createElement(
          Option,
          { value: 'range' },
          'Dur\xE9e'
        )
      )
    ),
    _react2.default.createElement(
      FormItem,
      { label: 'Indications' },
      _react2.default.createElement(_input2.default, { value: value.tooltip, onChange: function onChange(tooltip) {
          return _onChange({ tooltip: tooltip });
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