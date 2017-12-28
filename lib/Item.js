'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\nborder-radius: 3px;\nborder: 1px solid grey;\nbackground-color: ', ';\n/* cursor: grabbing is handled by app */\ncursor: grab;\nbox-shadow: ', ';\npadding: 6px;\nmin-height: 40px;\nmargin-bottom: 6px;\nuser-select: none;\ntransition: background-color 0.1s ease;\n/* anchor overrides */\ncolor: black;\n&:hover {\n  color: black;\n  text-decoration: none;\n}\n&:focus {\n  outline: 2px solid purple;\n  box-shadow: none;\n}\n'], ['\nborder-radius: 3px;\nborder: 1px solid grey;\nbackground-color: ', ';\n/* cursor: grabbing is handled by app */\ncursor: grab;\nbox-shadow: ', ';\npadding: 6px;\nmin-height: 40px;\nmargin-bottom: 6px;\nuser-select: none;\ntransition: background-color 0.1s ease;\n/* anchor overrides */\ncolor: black;\n&:hover {\n  color: black;\n  text-decoration: none;\n}\n&:focus {\n  outline: 2px solid purple;\n  box-shadow: none;\n}\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject, function (_ref) {
  var selected = _ref.selected,
      isDragging = _ref.isDragging;
  return isDragging || selected ? '#1a53ff' : 'white';
}, function (_ref2) {
  var isDragging = _ref2.isDragging;
  return isDragging ? '2px 2px 1px grey' : 'none';
});

var Item = function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
  }

  _createClass(Item, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.autoFocus) {
        return;
      }
      // eslint-disable-next-line react/no-find-dom-node
      var node = _reactDom2.default.findDOMNode(this);
      node.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          item = _props.item,
          index = _props.index,
          renderItem = _props.renderItem,
          isDragging = _props.isDragging,
          provided = _props.provided,
          selected = _props.selected,
          onClick = _props.onClick;


      return _react2.default.createElement(
        'div',
        { onClick: onClick },
        _react2.default.createElement(
          Container,
          _extends({
            isDragging: isDragging,
            innerRef: provided.innerRef,
            style: provided.draggableStyle,
            selected: selected
          }, provided.dragHandleProps),
          renderItem(item, index)
        )
      );
    }
  }]);

  return Item;
}(_react.Component);

exports.default = Item;