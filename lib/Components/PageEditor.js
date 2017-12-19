'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _row = require('antd/es/row');

var _row2 = _interopRequireDefault(_row);

var _dropdown = require('antd/es/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _button = require('antd/es/button');

var _button2 = _interopRequireDefault(_button);

var _tag = require('antd/es/tag');

var _tag2 = _interopRequireDefault(_tag);

var _col = require('antd/es/col');

var _col2 = _interopRequireDefault(_col);

var _layout = require('antd/es/layout');

var _layout2 = _interopRequireDefault(_layout);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/row/style');

require('antd/es/dropdown/style');

require('antd/es/button/style');

require('antd/es/tag/style');

require('antd/es/col/style');

require('antd/es/layout/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DragList = require('../Components/DragList');

var _EditFields = require('../Components/EditFields');

var _QuestionMenu = require('../Components/QuestionMenu');

var _QuestionMenu2 = _interopRequireDefault(_QuestionMenu);

var _QuestionList = require('../Components/QuestionList');

var _QuestionList2 = _interopRequireDefault(_QuestionList);

var _VisibleIfEditorPage = require('../Containers/VisibleIfEditorPage');

var _VisibleIfEditorPage2 = _interopRequireDefault(_VisibleIfEditorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = _layout2.default.Content;


var layoutStyle = {
  background: '#e8e5e5',
  borderRadius: 6,
  marginBottom: 24,
  border: '2px solid',
  borderColor: '#e8e5e5',
  overflow: 'hidden'
};

var PageEditor = function (_Component) {
  _inherits(PageEditor, _Component);

  function PageEditor(props) {
    _classCallCheck(this, PageEditor);

    var _this = _possibleConstructorReturn(this, (PageEditor.__proto__ || Object.getPrototypeOf(PageEditor)).call(this, props));

    _this.toggleVisibleIf = function () {
      return _this.setState({ visibleIf: !_this.state.visibleIf });
    };

    _this.state = {
      visibleIf: false
    };
    return _this;
  }

  _createClass(PageEditor, [{
    key: 'render',
    value: function render() {
      var visibleIf = this.state.visibleIf;
      var _props = this.props,
          index = _props.index,
          value = _props.value,
          _onChange = _props.onChange,
          onRemove = _props.onRemove,
          onAdd = _props.onAdd,
          onMove = _props.onMove,
          collapsed = _props.collapsed,
          onToggleCollapsed = _props.onToggleCollapsed;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _layout2.default,
          { style: layoutStyle },
          _react2.default.createElement(
            _row2.default,
            { style: { padding: 10 } },
            _react2.default.createElement(
              _col2.default,
              { span: 2 },
              _react2.default.createElement(_DragList.Handle, null)
            ),
            _react2.default.createElement(
              _col2.default,
              { span: 2 },
              _react2.default.createElement(
                _tag2.default,
                { color: 'blue' },
                'Page ' + (index + 1)
              )
            ),
            _react2.default.createElement(
              _col2.default,
              { span: 14, style: { textAlign: 'center' } },
              _react2.default.createElement(
                'h2',
                null,
                _react2.default.createElement(_EditFields.EditText, { value: value.title, onChange: function onChange(title) {
                    return _onChange({ title: title });
                  }, size: 'large', placeholder: 'Page' })
              )
            ),
            _react2.default.createElement(
              _col2.default,
              { span: 6 },
              _react2.default.createElement(
                _dropdown2.default,
                { overlay: _react2.default.createElement(_QuestionMenu2.default, { onClick: onAdd }) },
                _react2.default.createElement(_button2.default, { type: 'secondary', shape: 'circle', icon: 'plus', size: 'large' })
              ),
              _react2.default.createElement(_button2.default, { onClick: this.toggleVisibleIf, shape: 'circle', icon: visibleIf ? 'eye' : 'eye-o', size: 'large' }),
              _react2.default.createElement(_button2.default, { onClick: onToggleCollapsed, shape: 'circle', icon: collapsed ? 'down' : 'up', size: 'large' }),
              _react2.default.createElement(_button2.default, { type: 'danger', onClick: onRemove, shape: 'circle', icon: 'delete', size: 'large' })
            )
          ),
          !collapsed && _react2.default.createElement(
            Content,
            { style: { textAlign: 'left', margin: 10, marginLeft: 50 } },
            visibleIf && _react2.default.createElement(_VisibleIfEditorPage2.default, { value: value, onChange: function onChange(visibleIf) {
                return _onChange({ visibleIf: visibleIf });
              } }),
            _react2.default.createElement(_QuestionList2.default, { parent: value, data: value.questions, onMove: onMove })
          )
        )
      );
    }
  }]);

  return PageEditor;
}(_react.Component);

exports.default = PageEditor;


PageEditor.propTypes = {
  value: _propTypes2.default.object.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  onRemove: _propTypes2.default.func.isRequired,
  onAdd: _propTypes2.default.func.isRequired,
  onMove: _propTypes2.default.func.isRequired
};