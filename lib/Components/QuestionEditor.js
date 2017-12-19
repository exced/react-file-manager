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

var _tooltip = require('antd/es/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _icon = require('antd/es/icon');

var _icon2 = _interopRequireDefault(_icon);

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

require('antd/es/tooltip/style');

require('antd/es/icon/style');

require('antd/es/tag/style');

require('antd/es/col/style');

require('antd/es/layout/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _QuestionMenu = require('../Components/QuestionMenu');

var _QuestionMenu2 = _interopRequireDefault(_QuestionMenu);

var _QuestionEditorItem = require('../Components/QuestionEditorItem');

var _QuestionEditorItem2 = _interopRequireDefault(_QuestionEditorItem);

var _DragList = require('../Components/DragList');

var _EditFields = require('../Components/EditFields');

var _Editor = require('../Transforms/Editor');

var _VisibleIfEditorQuestion = require('../Containers/VisibleIfEditorQuestion');

var _VisibleIfEditorQuestion2 = _interopRequireDefault(_VisibleIfEditorQuestion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var layoutStyle = {
  margin: 20,
  background: '#f7f7f7',
  borderRadius: 6,
  marginBottom: 24,
  border: '2px solid',
  borderColor: '#f7f7f7',
  overflow: 'hidden'
};

var Content = _layout2.default.Content;

var QuestionEditor = function (_Component) {
  _inherits(QuestionEditor, _Component);

  function QuestionEditor(props) {
    _classCallCheck(this, QuestionEditor);

    var _this = _possibleConstructorReturn(this, (QuestionEditor.__proto__ || Object.getPrototypeOf(QuestionEditor)).call(this, props));

    _this.toggleVisibleIf = function () {
      return _this.setState({ visibleIf: !_this.state.visibleIf });
    };

    _this.state = {
      visibleIf: false
    };
    return _this;
  }

  _createClass(QuestionEditor, [{
    key: 'render',
    value: function render() {
      var visibleIf = this.state.visibleIf;
      var _props = this.props,
          index = _props.index,
          value = _props.value,
          _onChange = _props.onChange,
          onRemove = _props.onRemove,
          onReset = _props.onReset,
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
                { color: 'gold' },
                'Question ' + (index + 1)
              )
            ),
            _react2.default.createElement(
              _col2.default,
              { span: 14, style: { textAlign: 'center' } },
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  _tooltip2.default,
                  { title: value.tooltip },
                  _react2.default.createElement(_icon2.default, { type: 'question-circle-o' })
                ),
                _react2.default.createElement(_EditFields.EditText, { value: value.title, onChange: function onChange(title) {
                    return _onChange({ title: title });
                  }, size: 'large', placeholder: 'Question' }),
                _react2.default.createElement(
                  'sup',
                  null,
                  _react2.default.createElement(_button2.default, { type: 'dashed', onClick: function onClick() {
                      return _onChange({ mandatory: !value.mandatory });
                    }, shape: 'circle', icon: value.mandatory ? 'star' : 'star-o', size: 'small' })
                )
              )
            ),
            _react2.default.createElement(
              _col2.default,
              { span: 6 },
              _react2.default.createElement(
                _dropdown2.default,
                { overlay: _react2.default.createElement(_QuestionMenu2.default, { onClick: function onClick(type) {
                      return onReset(type);
                    } }) },
                _react2.default.createElement(
                  _button2.default,
                  { shape: 'circle', type: 'secondary', icon: 'edit', size: 'large' },
                  (0, _Editor.typeToName)()
                )
              ),
              _react2.default.createElement(_button2.default, { onClick: this.toggleVisibleIf, shape: 'circle', icon: visibleIf ? 'eye' : 'eye-o', size: 'large' }),
              _react2.default.createElement(_button2.default, { onClick: onToggleCollapsed, shape: 'circle', icon: collapsed ? 'down' : 'up', size: 'large' }),
              _react2.default.createElement(_button2.default, { type: 'danger', onClick: onRemove, shape: 'circle', icon: 'delete', size: 'large' })
            )
          ),
          !collapsed && _react2.default.createElement(
            Content,
            { style: { textAlign: 'left', margin: 10, marginLeft: 50 } },
            visibleIf && _react2.default.createElement(_VisibleIfEditorQuestion2.default, { value: value, onChange: function onChange(visibleIf) {
                return _onChange({ visibleIf: visibleIf });
              } }),
            _react2.default.createElement(_QuestionEditorItem2.default, { value: value, onChange: _onChange, editable: true })
          )
        )
      );
    }
  }]);

  return QuestionEditor;
}(_react.Component);

exports.default = QuestionEditor;


QuestionEditor.propTypes = {
  value: _propTypes2.default.object.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  onRemove: _propTypes2.default.func.isRequired,
  onReset: _propTypes2.default.func.isRequired
};