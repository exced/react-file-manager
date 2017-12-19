'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = require('antd/es/menu');

var _menu2 = _interopRequireDefault(_menu);

var _icon = require('antd/es/icon');

var _icon2 = _interopRequireDefault(_icon);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var SiderMenu = function SiderMenu(_ref) {
  var onUndo = _ref.onUndo,
      onRedo = _ref.onRedo,
      onExport = _ref.onExport,
      denormalize = _ref.denormalize,
      collapsed = _ref.collapsed,
      onCollapse = _ref.onCollapse;


  var onClick = function onClick(_ref2) {
    var key = _ref2.key;

    switch (key) {
      case "onUndo":
        return onUndo();
      case "onRedo":
        return onRedo();
      case "onExport":
        return onExport(denormalize());
      case "onToggle":
        return onCollapse();
      default:
        return;
    }
  };

  return _react2.default.createElement(
    _menu2.default,
    { theme: 'dark', selectable: false, onClick: onClick, mode: 'inline', inlineCollapsed: collapsed },
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
    ),
    _react2.default.createElement(
      _menu2.default.Item,
      { style: { position: 'absolute', bottom: 0 }, key: 'onToggle' },
      _react2.default.createElement(_icon2.default, { type: collapsed ? 'right' : 'left', style: iconStyle })
    )
  );
};

SiderMenu.propTypes = {
  onUndo: _propTypes2.default.func.isRequired,
  onRedo: _propTypes2.default.func.isRequired,
  onExport: _propTypes2.default.func.isRequired,
  denormalize: _propTypes2.default.func.isRequired
};

exports.default = SiderMenu;