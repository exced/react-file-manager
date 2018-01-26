'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tooltip = require('antd/es/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _icon = require('antd/es/icon');

var _icon2 = _interopRequireDefault(_icon);

var _modal = require('antd/es/modal');

var _modal2 = _interopRequireDefault(_modal);

var _button = require('antd/es/button');

var _button2 = _interopRequireDefault(_button);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/tooltip/style');

require('antd/es/icon/style');

require('antd/es/modal/style');

require('antd/es/button/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _EditText = require('./EditText');

var _EditText2 = _interopRequireDefault(_EditText);

var _Types = require('./Types');

var _Types2 = _interopRequireDefault(_Types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonGroup = _button2.default.Group;
var confirm = _modal2.default.confirm;


var images = {
  file: 'https://raw.githubusercontent.com/exced/react-file-manager/master/public/images/file.png',
  folder: 'https://raw.githubusercontent.com/exced/react-file-manager/master/public/images/folder.png'
};

var Facade = function (_Component) {
  _inherits(Facade, _Component);

  function Facade() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Facade);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Facade.__proto__ || Object.getPrototypeOf(Facade)).call.apply(_ref, [this].concat(args))), _this), _this.onAddFolder = function (parentId) {
      var _extends2;

      var _this$props = _this.props,
          map = _this$props.map,
          onChange = _this$props.onChange;

      var folder = {
        id: '@@' + (0, _lodash.uniqueId)(),
        title: 'New folder',
        type: _Types2.default.folder,
        children: [],
        parent: parentId
      };
      onChange(_extends({}, map, (_extends2 = {}, _defineProperty(_extends2, parentId, _extends({}, map[parentId], {
        children: [].concat(_toConsumableArray(map[parentId].children), [folder.id])
      })), _defineProperty(_extends2, folder.id, folder), _extends2)));
    }, _this.onClickRemoveFolder = function (item) {
      return confirm({
        title: "Remove this folder ?",
        content: item.title,
        onOk: function onOk() {
          return _this.onRemoveFolder(item.id);
        },
        onCancel: function onCancel() {}
      });
    }, _this.removeFolder = function (map, id) {
      var folder = map[id],
          rest = _objectWithoutProperties(map, [id]);

      return folder.parent ? _extends({}, rest, _defineProperty({}, folder.parent, _extends({}, map[folder.parent], {
        children: map[folder.parent].children.filter(function (e) {
          return e !== id;
        })
      }))) : rest;
    }, _this.cascadeRemoveFolder = function (map, id) {
      var folder = map[id];

      var c = folder.children.reduce(function (a, e) {
        return a[e].type === _Types2.default.folder ? _this.cascadeRemoveFolder(a, e) : _this.removeFile(a, e);
      }, map);
      return _this.removeFolder(c, id);
    }, _this.onRemoveFolder = function (id) {
      var _this$props2 = _this.props,
          map = _this$props2.map,
          onChange = _this$props2.onChange;

      onChange(_this.cascadeRemoveFolder(map, id));
    }, _this.onChangeFolder = function (id, input) {
      var _this$props3 = _this.props,
          map = _this$props3.map,
          onChange = _this$props3.onChange;

      onChange(_extends({}, map, _defineProperty({}, id, _extends({}, map[id], input))));
    }, _this.onAddFile = function (parentId) {
      var _extends5;

      var _this$props4 = _this.props,
          map = _this$props4.map,
          onChange = _this$props4.onChange;

      var file = {
        id: '@@' + (0, _lodash.uniqueId)(),
        title: 'New file',
        type: _Types2.default.file,
        children: [],
        parent: parentId
      };
      onChange(_extends({}, map, (_extends5 = {}, _defineProperty(_extends5, parentId, _extends({}, map[parentId], {
        children: [].concat(_toConsumableArray(map[parentId].children), [file.id])
      })), _defineProperty(_extends5, file.id, file), _extends5)));
    }, _this.onClickRemoveFile = function (item) {
      return confirm({
        title: "Remove this file ?",
        content: item.title,
        onOk: function onOk() {
          return _this.onRemoveFile(item.id);
        },
        onCancel: function onCancel() {}
      });
    }, _this.removeFile = function (map, id) {
      var file = map[id],
          rest = _objectWithoutProperties(map, [id]);

      return file.parent ? _extends({}, rest, _defineProperty({}, file.parent, _extends({}, map[file.parent], {
        children: map[file.parent].children.filter(function (e) {
          return e !== id;
        })
      }))) : rest;
    }, _this.onRemoveFile = function (id) {
      var _this$props5 = _this.props,
          map = _this$props5.map,
          onChange = _this$props5.onChange;

      onChange(_this.removeFile(map, id));
    }, _this.onChangeFile = function (id, input) {
      var _this$props6 = _this.props,
          map = _this$props6.map,
          onChange = _this$props6.onChange;

      onChange(_extends({}, map, _defineProperty({}, id, _extends({}, map[id], input))));
    }, _this.renderItem = function (item, index) {
      return _react2.default.createElement(
        'div',
        { style: { display: 'flex', alignItems: 'center', justifyContent: 'center' } },
        _react2.default.createElement(
          'div',
          { style: { flex: 1 } },
          _react2.default.createElement('img', { src: item.type === _Types2.default.folder ? images.folder : images.file, alt: item.title, style: { width: 22, height: 22, float: 'left' } })
        ),
        _react2.default.createElement(
          'div',
          { style: { flex: 5 } },
          _react2.default.createElement(
            'span',
            { style: { width: 150, textAlign: 'left', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' } },
            item.title
          )
        ),
        _react2.default.createElement(
          'div',
          { style: { flex: 1 } },
          item.type === _Types2.default.folder && _react2.default.createElement(_icon2.default, { style: { float: 'right' }, type: 'right' })
        )
      );
    }, _this.renderPreview = function (item, index) {
      var rootId = _this.props.rootId;
      // folder

      if (item.type === _Types2.default.folder) {
        if (item.id === rootId) {
          return _react2.default.createElement(
            'div',
            { style: { textAlign: 'center', margin: 'auto', marginTop: 170, width: 200, height: 200, border: '1px solid', borderRadius: 6, borderColor: '#ccc' } },
            _react2.default.createElement('img', { src: images.folder, alt: item.title, style: { width: 70, height: 70, margin: 'auto', display: 'block', marginTop: 40 } }),
            _react2.default.createElement(
              'span',
              null,
              item.title
            ),
            _react2.default.createElement(
              'div',
              { style: { marginTop: 10 } },
              _react2.default.createElement(
                ButtonGroup,
                null,
                _react2.default.createElement(
                  _tooltip2.default,
                  { title: 'New folder' },
                  _react2.default.createElement(_button2.default, { onClick: function onClick() {
                      return _this.onClickAddFolder(item.id);
                    }, icon: 'folder-add' })
                ),
                _react2.default.createElement(
                  _tooltip2.default,
                  { title: 'New file' },
                  _react2.default.createElement(_button2.default, { onClick: function onClick() {
                      return _this.onClickAddFile(item.id);
                    }, icon: 'file-add' })
                )
              )
            )
          );
        }
        return _react2.default.createElement(
          'div',
          { style: { textAlign: 'center', margin: 'auto', marginTop: 170, width: 200, height: 200, border: '1px solid', borderRadius: 6, borderColor: '#ccc' } },
          _react2.default.createElement('img', { src: images.folder, alt: item.title, style: { width: 70, height: 70, margin: 'auto', display: 'block', marginTop: 40 } }),
          _react2.default.createElement(_EditText2.default, {
            value: item.title,
            onChange: function onChange(title) {
              return _this.onChangeFolder(item.id, { title: title });
            },
            size: 'small',
            placeholder: 'Title'
          }),
          _react2.default.createElement(
            'div',
            { style: { marginTop: 10 } },
            _react2.default.createElement(
              ButtonGroup,
              null,
              _react2.default.createElement(
                _tooltip2.default,
                { title: 'New folder' },
                _react2.default.createElement(_button2.default, { onClick: function onClick() {
                    return _this.onAddFolder(item.id);
                  }, icon: 'folder-add' })
              ),
              _react2.default.createElement(
                _tooltip2.default,
                { title: 'New file' },
                _react2.default.createElement(_button2.default, { onClick: function onClick() {
                    return _this.onAddFile(item.id);
                  }, icon: 'file-add' })
              ),
              _react2.default.createElement(
                _tooltip2.default,
                { title: 'Remove folder' },
                _react2.default.createElement(_button2.default, { onClick: function onClick() {
                    return _this.onClickRemoveFolder(item);
                  }, type: 'danger', icon: 'delete' })
              )
            )
          )
        );
      }
      // file
      return _react2.default.createElement(
        'div',
        { style: { textAlign: 'center', margin: 'auto', marginTop: 170, width: 200, height: 200, border: '1px solid', borderRadius: 6, borderColor: '#ccc' } },
        _react2.default.createElement('img', { src: images.file, alt: item.title, style: { width: 70, height: 70, margin: 'auto', display: 'block', marginTop: 40 } }),
        _react2.default.createElement(_EditText2.default, {
          value: item.title,
          onChange: function onChange(title) {
            return _this.onChangeFile(item.id, { title: title });
          },
          size: 'small',
          placeholder: 'Title'
        }),
        _react2.default.createElement(
          'div',
          { style: { marginTop: 10 } },
          _react2.default.createElement(
            ButtonGroup,
            null,
            _react2.default.createElement(
              _tooltip2.default,
              { title: 'Remove file' },
              _react2.default.createElement(_button2.default, { onClick: function onClick() {
                  return _this.onClickRemoveFile(item);
                }, type: 'danger', icon: 'delete' })
            )
          )
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Facade, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          map = _props.map,
          rootId = _props.rootId,
          onChange = _props.onChange;


      return _react2.default.createElement(_App2.default, {
        map: map,
        rootId: rootId,
        onChange: onChange,
        onChangeRow: this.props.onChangeRow,
        onChangeColumn: this.props.onChangeColumn,
        onOutsideDrop: this.props.onOutsideDrop,
        renderItem: this.props.renderItem ? this.props.renderItem : this.renderItem,
        renderPreview: this.props.renderPreview ? this.props.renderPreview : this.renderPreview,
        itemSelectedColor: this.props.itemSelectedColor,
        dropBackgroundColor: this.props.dropBackgroundColor
      });
    }
  }]);

  return Facade;
}(_react.Component);

exports.default = Facade;


Facade.propTypes = {
  map: _propTypes2.default.object.isRequired,
  rootId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onChange: _propTypes2.default.func.isRequired,
  onChangeRow: _propTypes2.default.func,
  onChangeColumn: _propTypes2.default.func
};

Facade.defaultProps = {
  onChangeRow: function onChangeRow(id, src, dest) {},
  onChangeColumn: function onChangeColumn(id, src, dest) {},
  onOutsideDrop: function onOutsideDrop(id, files) {},
  itemSelectedColor: '#1a53ff',
  dropBackgroundColor: '#cccdce'
};