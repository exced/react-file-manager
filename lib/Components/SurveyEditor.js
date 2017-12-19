'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('antd/es/input');

var _input2 = _interopRequireDefault(_input);

var _switch = require('antd/es/switch');

var _switch2 = _interopRequireDefault(_switch);

var _timePicker = require('antd/es/time-picker');

var _timePicker2 = _interopRequireDefault(_timePicker);

var _row = require('antd/es/row');

var _row2 = _interopRequireDefault(_row);

var _button = require('antd/es/button');

var _button2 = _interopRequireDefault(_button);

var _col = require('antd/es/col');

var _col2 = _interopRequireDefault(_col);

var _datePicker = require('antd/es/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _form = require('antd/es/form');

var _form2 = _interopRequireDefault(_form);

require('antd/es/input/style');

require('antd/es/switch/style');

require('antd/es/time-picker/style');

require('antd/es/row/style');

require('antd/es/button/style');

require('antd/es/col/style');

require('antd/es/date-picker/style');

require('antd/es/form/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _EditFields = require('../Components/EditFields');

var _PageList = require('../Components/PageList');

var _PageList2 = _interopRequireDefault(_PageList);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormItem = _form2.default.Item;
var RangePicker = _datePicker2.default.RangePicker;


var layoutStyle = {
  margin: 20,
  background: '#f7f7f7',
  borderRadius: 6,
  marginBottom: 24,
  border: '2px solid',
  borderColor: '#f7f7f7',
  overflow: 'hidden'
};

var SurveyEditor = function SurveyEditor(_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange,
      onAdd = _ref.onAdd,
      onMove = _ref.onMove,
      collapsed = _ref.collapsed,
      onToggleCollapsed = _ref.onToggleCollapsed;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { style: layoutStyle },
      _react2.default.createElement(
        _row2.default,
        { style: { padding: 10 } },
        _react2.default.createElement(
          _col2.default,
          { span: 2 },
          _react2.default.createElement(_EditFields.UploadImage, null)
        ),
        _react2.default.createElement(
          _col2.default,
          { span: 18, style: { textAlign: 'center' } },
          _react2.default.createElement(
            'h2',
            null,
            _react2.default.createElement(_EditFields.EditText, { value: value.title, onChange: function onChange(title) {
                return _onChange({ title: title });
              }, size: 'large', placeholder: 'Questionnaire' }),
            _react2.default.createElement(
              'sup',
              null,
              _react2.default.createElement(
                'span',
                { style: { border: '0.5px solid #ff0059', borderRadius: 6, padding: 3, color: '#ff0059' } },
                value.link
              )
            )
          ),
          _react2.default.createElement(
            'h3',
            null,
            _react2.default.createElement(_EditFields.EditText, { value: value.description, onChange: function onChange(description) {
                return _onChange({ description: description });
              }, size: 'large', placeholder: 'Description' })
          )
        ),
        _react2.default.createElement(
          _col2.default,
          { span: 4 },
          _react2.default.createElement(_button2.default, { onClick: onAdd, shape: 'circle', icon: 'plus', size: 'large' }),
          _react2.default.createElement(_button2.default, { onClick: onToggleCollapsed, shape: 'circle', icon: collapsed ? 'down' : 'up', size: 'large' })
        )
      ),
      !collapsed && _react2.default.createElement(
        _row2.default,
        { type: 'flex', align: 'bottom' },
        _react2.default.createElement(_col2.default, { span: 16 }),
        _react2.default.createElement(
          _col2.default,
          { span: 8 },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h3',
              null,
              'M\xE9ta donn\xE9es'
            ),
            _react2.default.createElement(
              FormItem,
              { label: 'Temps de r\xE9ponse' },
              _react2.default.createElement(_timePicker2.default, { placeholder: 'Dur\xE9e', format: 'mm:ss', onChange: function onChange(m, responseTime) {
                  return _onChange({ responseTime: responseTime });
                }, defaultOpenValue: (0, _moment2.default)('00:00', 'mm:ss') })
            ),
            _react2.default.createElement(
              FormItem,
              { label: 'Actif' },
              _react2.default.createElement(_switch2.default, { onChange: function onChange(active) {
                  return _onChange({ active: active });
                }, defaultChecked: value.active, checkedChildren: 'actif', unCheckedChildren: 'inactif' })
            ),
            value.active && _react2.default.createElement(
              FormItem,
              { label: 'Activation' },
              _react2.default.createElement(RangePicker, { defaultValue: value.dates, placeholder: ["Début", "Fin"], onChange: function onChange(m, dates) {
                  return _onChange({ dates: dates });
                } })
            ),
            _react2.default.createElement(
              FormItem,
              { label: 'Mot de passe' },
              _react2.default.createElement(_input2.default, { defaultValue: value.password, placeholder: "Mot de passe", onChange: function onChange(e) {
                  return _onChange({ password: e.target.value });
                }, style: { width: 'auto' } })
            )
          )
        )
      )
    ),
    _react2.default.createElement(_PageList2.default, { parent: value, data: value.pages, onMove: onMove })
  );
};

SurveyEditor.propTypes = {
  value: _propTypes2.default.object.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  onMove: _propTypes2.default.func.isRequired,
  onToggleCollapsed: _propTypes2.default.func.isRequired
};

exports.default = SurveyEditor;