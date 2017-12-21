'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n  opacity: ', ';\n  padding: 8px;\n  padding-bottom: 0;\n  transition: background-color 0.1s ease, opacity 0.1s ease;\n  user-select: none;\n  width: 250px;\n'], ['\n  background-color: ', ';\n  opacity: ', ';\n  padding: 8px;\n  padding-bottom: 0;\n  transition: background-color 0.1s ease, opacity 0.1s ease;\n  user-select: none;\n  width: 250px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  min-height: 100%;\n  margin-bottom: 8px;\n'], ['\n  min-height: 100%;\n  margin-bottom: 8px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  overflow-x: hidden;\n  overflow-y: auto;\n  max-height: 100%;\n'], ['\n  overflow-x: hidden;\n  overflow-y: auto;\n  max-height: 100%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactBeautifulDnd = require('react-beautiful-dnd');

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } // License: https://github.com/atlassian/react-beautiful-dnd
// See https://github.com/atlassian/react-beautiful-dnd


var Wrapper = _styledComponents2.default.div(_templateObject, function (_ref) {
  var isDraggingOver = _ref.isDraggingOver;
  return isDraggingOver ? '#cccdce' : 'white';
}, function (_ref2) {
  var isDropDisabled = _ref2.isDropDisabled;
  return isDropDisabled ? 0.5 : 'inherit';
});

var DropZone = _styledComponents2.default.div(_templateObject2);

var ScrollContainer = _styledComponents2.default.div(_templateObject3);

var Column = function (_Component) {
  _inherits(Column, _Component);

  function Column() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, Column);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = Column.__proto__ || Object.getPrototypeOf(Column)).call.apply(_ref3, [this].concat(args))), _this), _this.renderList = function (dropProvided) {
      var _this$props = _this.props,
          listType = _this$props.listType,
          data = _this$props.data,
          selectedId = _this$props.selectedId,
          onClickItem = _this$props.onClickItem,
          renderItem = _this$props.renderItem;


      return _react2.default.createElement(
        DropZone,
        { innerRef: dropProvided.innerRef },
        data.map(function (item) {
          return _react2.default.createElement(
            _reactBeautifulDnd.Draggable,
            { key: item.id, draggableId: item.id, type: listType },
            function (dragProvided, dragSnapshot) {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Item2.default, {
                  key: item.id,
                  item: item,
                  isDragging: dragSnapshot.isDragging,
                  provided: dragProvided,
                  autoFocus: _this.props.autoFocusId === item.id,
                  selected: selectedId && selectedId === item.id,
                  onClick: function onClick() {
                    return onClickItem(item);
                  },
                  renderItem: renderItem
                }),
                dragProvided.placeholder
              );
            }
          );
        }),
        dropProvided.placeholder
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Column, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          ignoreContainerClipping = _props.ignoreContainerClipping,
          internalScroll = _props.internalScroll,
          isDropDisabled = _props.isDropDisabled,
          listId = _props.listId,
          listType = _props.listType,
          style = _props.style;


      return _react2.default.createElement(
        _reactBeautifulDnd.Droppable,
        {
          droppableId: listId,
          ignoreContainerClipping: ignoreContainerClipping,
          isDropDisabled: isDropDisabled,
          type: listType
        },
        function (dropProvided, dropSnapshot) {
          return _react2.default.createElement(
            Wrapper,
            {
              style: style,
              isDraggingOver: dropSnapshot.isDraggingOver,
              isDropDisabled: isDropDisabled
            },
            internalScroll ? _react2.default.createElement(
              ScrollContainer,
              null,
              _this2.renderList(dropProvided)
            ) : _this2.renderList(dropProvided)
          );
        }
      );
    }
  }]);

  return Column;
}(_react.Component);

exports.default = Column;


Column.propTypes = {
  selectedId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onClickItem: _propTypes2.default.func.isRequired,
  renderItem: _propTypes2.default.func.isRequired
};