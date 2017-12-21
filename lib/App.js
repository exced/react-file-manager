'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _breadcrumb = require('antd/es/breadcrumb');

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _layout = require('antd/es/layout');

var _layout2 = _interopRequireDefault(_layout);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  min-height: 100%;\n  height: 100%;\n'], ['\n  box-sizing: border-box;\n  min-height: 100%;\n  height: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  min-height: 100%;\n  height: 100%;\n  padding: 8px;\n  max-width: 100%;\n  overflow: auto;\n'], ['\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  min-height: 100%;\n  height: 100%;\n  padding: 8px;\n  max-width: 100%;\n  overflow: auto;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  border-right: 1px solid #ccc;\n  max-height: 100%;\n  overflow: auto;\n'], ['\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  border-right: 1px solid #ccc;\n  max-height: 100%;\n  overflow: auto;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  background-color: white;\n'], ['\n  background-color: white;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  background-color: white;\n  border-left: 1px solid #ccc;\n'], ['\n  background-color: white;\n  border-left: 1px solid #ccc;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  border-top: 1px solid #ccc;\n  background-color: white;\n'], ['\n  border-top: 1px solid #ccc;\n  background-color: white;\n']);

require('antd/es/breadcrumb/style');

require('antd/es/layout/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBeautifulDnd = require('react-beautiful-dnd');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _lodash = require('lodash');

var _Column = require('./Column');

var _Column2 = _interopRequireDefault(_Column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } // License: https://github.com/atlassian/react-beautiful-dnd
// See https://github.com/atlassian/react-beautiful-dnd


var Footer = _layout2.default.Footer,
    Content = _layout2.default.Content,
    Sider = _layout2.default.Sider;


var Root = _styledComponents2.default.div(_templateObject);

var HorizontalScrollContainer = _styledComponents2.default.div(_templateObject2);

var VerticalScrollContainer = _styledComponents2.default.div(_templateObject3);

var StyledContent = (0, _styledComponents2.default)(Content)(_templateObject4);

var StyledSider = (0, _styledComponents2.default)(Sider)(_templateObject5);

var StyledFooter = (0, _styledComponents2.default)(Footer)(_templateObject6);

var assemble = function assemble(map, ids) {
  return ids.map(function (id) {
    return map[id];
  });
};

var reorder = function reorder(list, startIndex, endIndex) {
  var result = Array.from(list);

  var _result$splice = result.splice(startIndex, 1),
      _result$splice2 = _slicedToArray(_result$splice, 1),
      removed = _result$splice2[0];

  result.splice(endIndex, 0, removed);
  return result;
};

var reorderMap = function reorderMap(_ref) {
  var _extends3;

  var map = _ref.map,
      source = _ref.source,
      destination = _ref.destination;

  var current = map[source.droppableId].children;
  var next = map[destination.droppableId].children;
  var target = current[source.index];

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    var reordered = reorder(current, source.index, destination.index);

    var _result = _extends({}, map, _defineProperty({}, source.droppableId, _extends({}, map[source.droppableId], {
      children: reordered
    })));

    return {
      map: _result,
      // not auto focusing in own list
      autoFocusId: null
    };
  }

  // moving to different list

  // remove from original
  current.splice(source.index, 1);
  // insert into next
  next.splice(destination.index, 0, target);

  var result = _extends({}, map, (_extends3 = {}, _defineProperty(_extends3, target, _extends({}, map[target], {
    parent: destination.droppableId
  })), _defineProperty(_extends3, source.droppableId, _extends({}, map[source.droppableId], {
    children: current
  })), _defineProperty(_extends3, destination.droppableId, _extends({}, map[destination.droppableId], {
    children: next
  })), _extends3));

  return {
    map: result,
    autoFocusId: target.id
  };
};

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.onDragStart = function (initial) {
      console.log('onDragStart');
    };

    _this.onDragEnd = function (result) {
      console.log('onDragEnd', result);
      // dropped nowhere  
      if (!result.destination) {
        return;
      }

      var source = result.source,
          destination = result.destination;

      var _reorderMap = reorderMap({ map: _this.state.map, source: source, destination: destination }),
          map = _reorderMap.map,
          autoFocusId = _reorderMap.autoFocusId;

      _this.setState({ columnSelectedId: null, itemSelectedId: null, map: map, autoFocusId: autoFocusId });
      _this.props.onChange(map); // Propagates changes
    };

    _this.onClickBreadcrumb = function (id) {
      var nav = _this.state.nav;

      var index = (0, _lodash.indexOf)(nav, id);
      _this.setState({ nav: nav.slice(0, index + 1), itemSelectedId: null, columnSelectedId: id });
    };

    _this.onClickItem = function (item) {
      var nav = _this.state.nav;

      var last = (0, _lodash.last)(nav);
      var index = (0, _lodash.indexOf)(nav, item.parent);

      // Click on last
      if (item.parent === last) {
        if (item.children.length > 0) {
          _this.setState({ nav: [].concat(_toConsumableArray(nav), [item.id]) });
        }
      } else {
        // Click before last
        if (item.children.length > 0) {
          _this.setState({ nav: [].concat(_toConsumableArray(nav.slice(0, index + 1)), [item.id]) });
        } else {
          _this.setState({ nav: nav.slice(0, index + 1) });
        }
      }

      _this.setState({ itemSelectedId: item.id, columnSelectedId: null });
    };

    _this.state = {
      map: _this.props.initial,
      nav: [_this.props.rootId],
      itemSelectedId: null,
      columnSelectedId: null,
      autoFocusId: null
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          map = _state.map,
          nav = _state.nav,
          autoFocusId = _state.autoFocusId,
          itemSelectedId = _state.itemSelectedId,
          columnSelectedId = _state.columnSelectedId;
      var _props = this.props,
          renderItem = _props.renderItem,
          renderPreviewItem = _props.renderPreviewItem,
          renderPreviewColumn = _props.renderPreviewColumn;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _layout2.default,
          { style: { minHeight: '100vh' } },
          _react2.default.createElement(
            _layout2.default,
            null,
            _react2.default.createElement(
              StyledContent,
              null,
              _react2.default.createElement(
                _reactBeautifulDnd.DragDropContext,
                { onDragStart: this.onDragStart, onDragEnd: this.onDragEnd },
                _react2.default.createElement(
                  Root,
                  null,
                  _react2.default.createElement(
                    HorizontalScrollContainer,
                    null,
                    nav.map(function (id) {
                      return map[id].children && _react2.default.createElement(
                        VerticalScrollContainer,
                        { key: 'column-' + id },
                        _react2.default.createElement(_Column2.default, {
                          listId: id,
                          listType: 'card',
                          data: assemble(map, map[id].children),
                          autoFocusId: autoFocusId,
                          selectedId: itemSelectedId,
                          onClickItem: _this2.onClickItem,
                          renderItem: renderItem
                        })
                      );
                    })
                  )
                )
              )
            ),
            _react2.default.createElement(
              StyledSider,
              { width: 300 },
              itemSelectedId && renderPreviewItem(map[itemSelectedId]) || columnSelectedId && renderPreviewColumn(map[columnSelectedId])
            )
          ),
          _react2.default.createElement(
            StyledFooter,
            null,
            _react2.default.createElement(
              _breadcrumb2.default,
              { separator: '>' },
              nav.map(function (id) {
                return _react2.default.createElement(
                  _breadcrumb2.default.Item,
                  { key: 'breadcrumb-' + id },
                  ' ',
                  _react2.default.createElement(
                    'a',
                    { onClick: function onClick() {
                        return _this2.onClickBreadcrumb(id);
                      } },
                    map[id].title
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;


App.propTypes = {
  initial: _propTypes2.default.objectOf(_propTypes2.default.shape({
    id: _propTypes2.default.any.isRequired,
    title: _propTypes2.default.string.isRequired,
    children: _propTypes2.default.array.isRequired,
    icon: _propTypes2.default.string
  })).isRequired,
  rootId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onChange: _propTypes2.default.func.isRequired,
  renderItem: _propTypes2.default.func.isRequired,
  renderPreviewItem: _propTypes2.default.func.isRequired
};