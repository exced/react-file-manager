'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _breadcrumb = require('antd/es/breadcrumb');

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _layout = require('antd/es/layout');

var _layout2 = _interopRequireDefault(_layout);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(['\n  height: 100vh;\n  overflow-y: hidden;\n'], ['\n  height: 100vh;\n  overflow-y: hidden;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  background-color: white;\n  width: 100%;\n  min-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  overflow-y: hidden;\n  overflow-x: auto;\n  box-sizing: border-box;\n'], ['\n  display: flex;\n  background-color: white;\n  width: 100%;\n  min-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  overflow-y: hidden;\n  overflow-x: auto;\n  box-sizing: border-box;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  border-right: 1px solid #ccc;\n  height: 100%;\n  max-height: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  min-width: 250px;\n'], ['\n  border-right: 1px solid #ccc;\n  height: 100%;\n  max-height: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  min-width: 250px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  background-color: white;\n  border-left: 1px solid #ccc;\n'], ['\n  background-color: white;\n  border-left: 1px solid #ccc;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  border-top: 1px solid #ccc;\n  background-color: white;\n'], ['\n  border-top: 1px solid #ccc;\n  background-color: white;\n']);

require('antd/es/breadcrumb/style');

require('antd/es/layout/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBeautifulDnd = require('react-beautiful-dnd');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Column = require('./Column');

var _Column2 = _interopRequireDefault(_Column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } // License: https://github.com/atlassian/react-beautiful-dnd
// See https://github.com/atlassian/react-beautiful-dnd


var Footer = _layout2.default.Footer,
    Content = _layout2.default.Content,
    Sider = _layout2.default.Sider;


var LayoutContainer = (0, _styledComponents2.default)(_layout2.default)(_templateObject);

var ContentContainer = _styledComponents2.default.section(_templateObject2);

var ColumnContainer = _styledComponents2.default.div(_templateObject3);

var StyledSider = (0, _styledComponents2.default)(Sider)(_templateObject4);

var StyledFooter = (0, _styledComponents2.default)(Footer)(_templateObject5);

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

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.deselect = function () {
      var _this$state = _this.state,
          nav = _this$state.nav,
          itemSelectedId = _this$state.itemSelectedId;

      var index = nav.indexOf(itemSelectedId);
      _this.setState({ itemSelectedId: null, itemSelectedIndex: null, nav: _this.state.nav.slice(0, index) });
    };

    _this.reorderMap = function (_ref) {
      var _extends3;

      var map = _ref.map,
          source = _ref.source,
          destination = _ref.destination;

      var current = map[source.droppableId].children;
      var next = map[destination.droppableId].children;
      var target = current[source.index];

      // moving to same list
      if (source.droppableId === destination.droppableId) {

        // Propagates to handle specific cases
        _this.props.onChangeRow(target, source, destination);

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
      // Propagates to handle specific cases
      _this.props.onChangeColumn(target, source, destination);

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

    _this.onDragStart = function (initial) {
      var _this$state2 = _this.state,
          itemSelectedId = _this$state2.itemSelectedId,
          nav = _this$state2.nav;
      var map = _this.props.map;
      // cannot move folder to right if selected

      if (itemSelectedId === initial.draggableId && map[itemSelectedId].children.length > 0) {
        _this.setState({ nav: nav.slice(0, -1) });
      }
    };

    _this.onDragEnd = function (result) {
      // dropped nowhere  
      if (!result.destination) {
        return;
      }

      var source = result.source,
          destination = result.destination;

      var _this$reorderMap = _this.reorderMap({ map: _this.props.map, source: source, destination: destination }),
          map = _this$reorderMap.map,
          autoFocusId = _this$reorderMap.autoFocusId;

      _this.setState({ itemSelectedId: null, map: map, autoFocusId: autoFocusId });
      _this.props.onChange(map); // Propagates changes
    };

    _this.onClickBreadcrumb = function (id) {
      var nav = _this.state.nav;

      var index = nav.indexOf(id);
      _this.setState({ nav: nav.slice(0, index + 1), itemSelectedId: id });
    };

    _this.onClickItem = function (item, itemIndex) {
      var nav = _this.state.nav;

      var index = nav.indexOf(item.parent);
      _this.setState({
        itemSelectedIndex: itemIndex,
        itemSelectedId: item.id,
        nav: [].concat(_toConsumableArray(nav.slice(0, index + 1)), [item.id])
      });
    };

    _this.state = {
      nav: [_this.props.rootId],
      itemSelectedId: null,
      itemSelectedIndex: null,
      autoFocusId: null
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          nav = _state.nav,
          autoFocusId = _state.autoFocusId,
          itemSelectedId = _state.itemSelectedId,
          itemSelectedIndex = _state.itemSelectedIndex;
      var _props = this.props,
          map = _props.map,
          renderItem = _props.renderItem,
          renderPreview = _props.renderPreview,
          itemSelectedColor = _props.itemSelectedColor,
          dropBackgroundColor = _props.dropBackgroundColor;


      var preview = itemSelectedId ? renderPreview(map[itemSelectedId], itemSelectedIndex) : null;

      return _react2.default.createElement(
        LayoutContainer,
        null,
        _react2.default.createElement(
          _layout2.default,
          null,
          _react2.default.createElement(
            Content,
            null,
            _react2.default.createElement(
              ContentContainer,
              null,
              _react2.default.createElement(
                _reactBeautifulDnd.DragDropContext,
                { onDragStart: this.onDragStart, onDragEnd: this.onDragEnd },
                nav.map(function (id) {
                  return map[id].children && _react2.default.createElement(
                    ColumnContainer,
                    { key: 'column-' + id },
                    _react2.default.createElement(_Column2.default, {
                      listId: id,
                      listType: 'card',
                      data: assemble(map, map[id].children),
                      autoFocusId: autoFocusId,
                      selectedId: itemSelectedId,
                      onClickItem: _this2.onClickItem,
                      itemSelectedColor: itemSelectedColor,
                      dropBackgroundColor: dropBackgroundColor,
                      renderItem: renderItem
                    })
                  );
                })
              )
            )
          ),
          _react2.default.createElement(
            StyledSider,
            { width: 300 },
            preview
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
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;


App.propTypes = {
  map: _propTypes2.default.object.isRequired,
  rootId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onChange: _propTypes2.default.func.isRequired,
  onChangeRow: _propTypes2.default.func,
  onChangeColumn: _propTypes2.default.func,
  renderItem: _propTypes2.default.func.isRequired,
  renderPreview: _propTypes2.default.func.isRequired,
  itemSelectedColor: _propTypes2.default.string,
  dropBackgroundColor: _propTypes2.default.string
};

App.defaultProps = {
  onChangeRow: function onChangeRow(a, b, c) {},
  onChangeColumn: function onChangeColumn(a, b, c) {},
  itemSelectedColor: '#1a53ff',
  dropBackgroundColor: '#cccdce'
};