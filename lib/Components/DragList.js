'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.Handle = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactSortableHoc = require('react-sortable-hoc');

var _Editor = require('./Styles/Editor.css');

var _Editor2 = _interopRequireDefault(_Editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Handle = exports.Handle = (0, _reactSortableHoc.SortableHandle)(function () {
  return _react2.default.createElement('div', { className: _Editor2.default.handle });
});

var Wrapper = exports.Wrapper = function (_Component) {
  _inherits(Wrapper, _Component);

  function Wrapper(props) {
    _classCallCheck(this, Wrapper);

    var _this = _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).call(this, props));

    _this.componentWillReceiveProps = function (nextProps) {
      if (_this.state.data !== nextProps.data) {
        _this.setState({ data: nextProps.data });
      }
    };

    _this.onSortStart = function () {
      var onSortStart = _this.props.onSortStart;

      _this.setState({ isSorting: true });

      if (onSortStart) {
        onSortStart(_this.refs.component);
      }
    };

    _this.onSortEnd = function (_ref) {
      var oldIndex = _ref.oldIndex,
          newIndex = _ref.newIndex;

      if (_this.state.data.length > 1) {
        var _this$props = _this.props,
            onSortEnd = _this$props.onSortEnd,
            onMove = _this$props.onMove;

        var data = (0, _reactSortableHoc.arrayMove)(_this.state.data, oldIndex, newIndex);

        _this.setState({ data: data, isSorting: false });

        if (onSortEnd) {
          onSortEnd(_this.refs.component);
        }

        if (onMove) {
          onMove(data);
        }
      }
    };

    _this.state = {
      data: props.data,
      isSorting: false
    };
    return _this;
  }

  _createClass(Wrapper, [{
    key: 'render',
    value: function render() {
      var Component = this.props.component;
      var _state = this.state,
          data = _state.data,
          isSorting = _state.isSorting;

      var props = {
        isSorting: isSorting,
        data: data,
        onSortStart: this.onSortStart,
        onSortEnd: this.onSortEnd,
        ref: 'component',
        useDragHandle: this.props.shouldUseDragHandle
      };

      return _react2.default.createElement(Component, _extends({}, this.props, props));
    }
  }]);

  return Wrapper;
}(_react.Component);

Wrapper.propTypes = {
  data: _propTypes2.default.array,
  className: _propTypes2.default.string,
  itemClass: _propTypes2.default.string,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  onMove: _propTypes2.default.func,
  onSortStart: _propTypes2.default.func,
  onSortEnd: _propTypes2.default.func,
  component: _propTypes2.default.func,
  shouldUseDragHandle: _propTypes2.default.bool
};

Wrapper.defaultProps = {
  className: (0, _classnames2.default)(_Editor2.default.list, _Editor2.default.stylizedList),
  itemClass: (0, _classnames2.default)(_Editor2.default.item, _Editor2.default.stylizedItem)
};

var DragList = function DragList(_ref2) {
  var Component = _ref2.Component,
      data = _ref2.data,
      onMove = _ref2.onMove,
      disabled = _ref2.disabled,
      rest = _objectWithoutProperties(_ref2, ['Component', 'data', 'onMove', 'disabled']);

  var Element = function Element(newProps) {
    return (0, _reactSortableHoc.SortableElement)(function (props) {
      return _react2.default.createElement(Component, _extends({}, props, newProps));
    });
  };
  var Wrapped = function Wrapped(props) {
    var Wrapper = Element(props);
    return _react2.default.createElement(Wrapper, props);
  };
  var Container = (0, _reactSortableHoc.SortableContainer)(function (_ref3) {
    var data = _ref3.data,
        props = _objectWithoutProperties(_ref3, ['data']);

    return (
      // pass a list of ids instead of plain objects to avoid useless re-rendering on item changes
      _react2.default.createElement(
        'div',
        null,
        data.map(function (item, index) {
          return _react2.default.createElement(Wrapped, _extends({ key: item, index: index, id: item }, props));
        })
      )
    );
  });
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(Wrapper, _extends({
      component: Container,
      data: data,
      shouldUseDragHandle: true,
      helperClass: _Editor2.default.stylizedHelper,
      onMove: onMove
    }, rest))
  );
};

DragList.propTypes = {
  data: _propTypes2.default.array.isRequired, // ids
  Component: _propTypes2.default.func.isRequired,
  onMove: _propTypes2.default.func.isRequired,
  disabled: _propTypes2.default.bool
};

DragList.defaultProps = {
  disabled: false
};

exports.default = DragList;