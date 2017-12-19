'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/icon/style');

require('antd/lib/layout/style');

require('antd/lib/menu/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reduxUndo = require('redux-undo');

var _Editor = require('../Actions/Editor');

var _Editor2 = require('../Selectors/Editor');

var _Editor3 = require('../Types/Editor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubMenu = _menu2.default.SubMenu;
var MenuItemGroup = _menu2.default.ItemGroup;
var Sider = _layout2.default.Sider;

var ToolBar = function (_Component) {
  _inherits(ToolBar, _Component);

  function ToolBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ToolBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ToolBar.__proto__ || Object.getPrototypeOf(ToolBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      collapsed: false
    }, _this.toggleCollapsed = function () {
      _this.setState({
        collapsed: !_this.state.collapsed
      });
    }, _this.onCollapse = function (collapsed) {
      console.log(collapsed);
      _this.setState({ collapsed: collapsed });
    }, _this.onClick = function (_ref2) {
      var key = _ref2.key;
      var _this$props = _this.props,
          addPage = _this$props.addPage,
          pages = _this$props.pages;


      if (key === "addPage") {
        addPage(pages.length);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ToolBar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _menu2.default,
        {
          onClick: this.onClick,
          selectable: false,
          mode: 'horizontal',
          theme: 'light',
          inlineCollapsed: this.state.collapsed
        },
        _react2.default.createElement(
          _menu2.default.Item,
          { key: 'addPage' },
          _react2.default.createElement(_icon2.default, { type: 'plus-circle' }),
          _react2.default.createElement(
            'span',
            null,
            'Page'
          )
        ),
        _react2.default.createElement(
          _menu2.default.Item,
          { key: '2' },
          _react2.default.createElement(_icon2.default, { type: 'desktop' }),
          _react2.default.createElement(
            'span',
            null,
            'Option 2'
          )
        ),
        _react2.default.createElement(
          _menu2.default.Item,
          { key: '3' },
          _react2.default.createElement(_icon2.default, { type: 'inbox' }),
          _react2.default.createElement(
            'span',
            null,
            'Option 3'
          )
        ),
        _react2.default.createElement(
          SubMenu,
          { key: 'sub1', title: _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(_icon2.default, { type: 'mail' }),
              _react2.default.createElement(
                'span',
                null,
                'Navigation One'
              )
            ) },
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '5' },
            'Option 5'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '6' },
            'Option 6'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '7' },
            'Option 7'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '8' },
            'Option 8'
          )
        ),
        _react2.default.createElement(
          SubMenu,
          { key: 'sub2', title: _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(_icon2.default, { type: 'appstore' }),
              _react2.default.createElement(
                'span',
                null,
                'Navigation Two'
              )
            ) },
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '9' },
            'Option 9'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '10' },
            'Option 10'
          ),
          _react2.default.createElement(
            SubMenu,
            { key: 'sub3', title: 'Submenu' },
            _react2.default.createElement(
              _menu2.default.Item,
              { key: '11' },
              'Option 11'
            ),
            _react2.default.createElement(
              _menu2.default.Item,
              { key: '12' },
              'Option 12'
            )
          )
        )
      );
    }
  }]);

  return ToolBar;
}(_react.Component);

ToolBar.propTypes = {
  prop: _propTypes2.default
};


var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    pages: (0, _Editor2.getPages)(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    undo: function undo() {
      return dispatch(_reduxUndo.ActionCreators.undo());
    },
    redo: function redo() {
      return dispatch(_reduxUndo.ActionCreators.redo());
    },
    addPage: function addPage(index) {
      return dispatch((0, _Editor.addItem)(_Editor3.PAGE, index));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ToolBar);