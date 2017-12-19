'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dropdown = require('antd/es/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _button = require('antd/es/button');

var _button2 = _interopRequireDefault(_button);

var _menu = require('antd/es/menu');

var _menu2 = _interopRequireDefault(_menu);

var _icon = require('antd/es/icon');

var _icon2 = _interopRequireDefault(_icon);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/es/dropdown/style');

require('antd/es/button/style');

require('antd/es/menu/style');

require('antd/es/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconStyle = {
  fontSize: 20
};

var titleStyle = {
  fontSize: 14
};

var FAB = function FAB(_ref) {
  var onUndo = _ref.onUndo,
      onRedo = _ref.onRedo,
      onExport = _ref.onExport,
      denormalize = _ref.denormalize;


  var onClick = function onClick(_ref2) {
    var key = _ref2.key;

    switch (key) {
      case "onUndo":
        return onUndo();
      case "onRedo":
        return onRedo();
      case "onExport":
        return onExport(denormalize());
      default:
        return;
    }
  };

  var menu = _react2.default.createElement(
    _menu2.default,
    { onClick: onClick },
    _react2.default.createElement(
      _menu2.default.Item,
      { key: 'onUndo' },
      _react2.default.createElement(_icon2.default, { type: 'rollback', style: iconStyle }),
      _react2.default.createElement(
        'span',
        { style: titleStyle },
        'Undo'
      )
    ),
    _react2.default.createElement(
      _menu2.default.Item,
      { key: 'onRedo' },
      _react2.default.createElement(_icon2.default, { type: 'enter', style: _extends({}, iconStyle, { transform: 'rotate(180deg)' }) }),
      _react2.default.createElement(
        'span',
        { style: titleStyle },
        'Redo'
      )
    ),
    _react2.default.createElement(
      _menu2.default.Item,
      { key: 'onExport' },
      _react2.default.createElement(_icon2.default, { type: 'save', style: iconStyle }),
      _react2.default.createElement(
        'span',
        { style: titleStyle },
        'Sauvegarder'
      )
    )
  );

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _dropdown2.default,
      { overlay: menu, placement: 'topCenter' },
      _react2.default.createElement(_button2.default, { type: 'primary', shape: 'circle', icon: 'plus', size: 'large' })
    )
  );
};

FAB.propTypes = {
  onUndo: _propTypes2.default.func.isRequired,
  onRedo: _propTypes2.default.func.isRequired,
  onExport: _propTypes2.default.func.isRequired,
  denormalize: _propTypes2.default.func.isRequired
};

exports.default = FAB;