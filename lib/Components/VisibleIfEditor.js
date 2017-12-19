'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = require('antd/es/select');

var _select2 = _interopRequireDefault(_select);

var _form = require('antd/es/form');

var _form2 = _interopRequireDefault(_form);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/es/select/style');

require('antd/es/form/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _Question = require('../Types/Question');

var _QuestionEditorItem = require('../Components/QuestionEditorItem');

var _QuestionEditorItem2 = _interopRequireDefault(_QuestionEditorItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _form2.default.Item;
var Option = _select2.default.Option,
    OptGroup = _select2.default.OptGroup;


var types = {
  BLOCK: "BLOCK",
  OPERATOR: "OPERATOR",
  COMPARATOR: "COMPARATOR",
  OPERAND: "OPERAND",
  VAR: "VAR"
};

var tokens = {
  OPAR: '(',
  CPAR: ')',
  OPDAND: '&&',
  OPDOR: '||',
  OPLEQ: '<=',
  OPLT: '<',
  OPGEQ: '>=',
  OPGT: '>',
  OPSEQ: '==',
  OPDEQ: '==='
};

var InputOption = function (_Component) {
  _inherits(InputOption, _Component);

  function InputOption(props) {
    _classCallCheck(this, InputOption);

    var _this = _possibleConstructorReturn(this, (InputOption.__proto__ || Object.getPrototypeOf(InputOption)).call(this, props));

    _this.onChange = function (value) {
      _this.setState({ value: value });
      _this.props.onChange(value);
    };

    _this.state = { value: null };
    return _this;
  }

  _createClass(InputOption, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var value = this.state.value;
      var _props = this.props,
          children = _props.children,
          color = _props.color;

      return _react2.default.createElement(
        'div',
        null,
        value ? _react2.default.createElement(
          'span',
          { style: { color: color } },
          JSON.stringify(value)
        ) : _react2.default.Children.map(children, function (child) {
          return _react2.default.cloneElement(child, { onChange: _this2.onChange });
        })
      );
    }
  }]);

  return InputOption;
}(_react.Component);

var VisibleIfEditor = function (_Component2) {
  _inherits(VisibleIfEditor, _Component2);

  function VisibleIfEditor(props) {
    _classCallCheck(this, VisibleIfEditor);

    var _this3 = _possibleConstructorReturn(this, (VisibleIfEditor.__proto__ || Object.getPrototypeOf(VisibleIfEditor)).call(this, props));

    _this3.addValue = function (value) {
      return _this3.setState({ values: [].concat(_toConsumableArray(_this3.state.values), [value]) });
    };

    _this3.countInBlock = function (type) {
      var values = _this3.state.values;

      var c = 0;
      for (var i = values.length; i--;) {
        var v = values[i];
        if (v.type === types.BLOCK && v.tokens === tokens.OPAR) {
          return c;
        }
        c += v.type === type;
      }
      return c;
    };

    _this3.renderOptions = function (e) {
      return e.map(function (_ref) {
        var value = _ref.value,
            title = _ref.title,
            color = _ref.color;
        return _react2.default.createElement(
          Option,
          { key: value, value: value, filterBy: title },
          _react2.default.createElement(
            'span',
            { style: { color: color } },
            title
          )
        );
      });
    };

    _this3.renderBlocks = function () {
      var values = _this3.state.values;

      var previous = (0, _lodash.last)(values);
      var children = [];

      if (!previous || previous && previous.type === types.OPERATOR) {
        children = [].concat(_toConsumableArray(children), [{ value: { type: types.BLOCK, tokens: tokens.OPAR, value: tokens.OPAR }, title: tokens.OPAR, color: 'red' }]);
      }

      if (previous && previous.type === types.VAR && _this3.countInBlock(types.VAR) > 1) {
        children = [].concat(_toConsumableArray(children), [{ value: { type: types.BLOCK, tokens: tokens.CPAR, value: tokens.CPAR }, title: tokens.CPAR, color: 'red' }]);
      }

      return _react2.default.createElement(
        OptGroup,
        { label: 'blocks' },
        _this3.renderOptions(children)
      );
    };

    _this3.renderOperators = function () {
      var values = _this3.state.values;

      var previous = (0, _lodash.last)(values);
      var children = [];

      if (previous && (previous.type === types.OPERAND || previous.type === types.BLOCK && previous.tokens === tokens.CPAR)) {
        children = [].concat(_toConsumableArray(children), [{ value: { type: types.OPERATOR, tokens: tokens.OPDAND, value: tokens.OPDAND }, title: 'ET', color: 'red' }, { value: { type: types.OPERATOR, tokens: tokens.OPDOR, value: tokens.OPDOR }, title: 'OU', color: 'red' }]);
      }

      return _react2.default.createElement(
        OptGroup,
        { label: 'operators' },
        _this3.renderOptions(children)
      );
    };

    _this3.renderComparators = function () {
      var values = _this3.state.values;

      var previous = (0, _lodash.last)(values);
      var children = [];

      var leq = { value: { type: types.COMPARATOR, tokens: tokens.OPLEQ, value: tokens.OPLEQ }, title: '<=', color: 'blue' };
      var lt = { value: { type: types.COMPARATOR, tokens: tokens.OPLT, value: tokens.OPLT }, title: '<', color: 'blue' };
      var geq = { value: { type: types.COMPARATOR, tokens: tokens.OPGEQ, value: tokens.OPGEQ }, title: '>=', color: 'blue' };
      var gt = { value: { type: types.COMPARATOR, tokens: tokens.OPGT, value: tokens.OPGT }, title: '>', color: 'blue' };
      var deq = { value: { type: types.COMPARATOR, tokens: tokens.OPDEQ, value: tokens.OPDEQ }, title: '===', color: 'blue' };

      if (previous && previous.type === types.VAR) {
        children = [].concat(_toConsumableArray(children), [leq, lt, geq, gt, deq]);
      }

      return _react2.default.createElement(
        OptGroup,
        { label: 'comparators' },
        _this3.renderOptions(children)
      );
    };

    _this3.renderOperands = function () {
      var values = _this3.state.values;
      var questionsMap = _this3.props.questionsMap;

      var previous = (0, _lodash.last)(values);
      var previousQuestion = values && (0, _lodash.last)(values.slice(0, values.length - 1));

      if (previous && previous.type === types.COMPARATOR) {
        var question = questionsMap[previousQuestion.value];
        var value = { type: types.OPERAND, value: "" };
        return _react2.default.createElement(
          OptGroup,
          { label: 'operands' },
          _react2.default.createElement(
            Option,
            { key: value, value: value, filterBy: 'title' },
            _react2.default.createElement(
              InputOption,
              { onChange: function onChange(value) {
                  return _this3.addValue({ type: types.OPERAND, value: value });
                }, color: 'orange' },
              _react2.default.createElement(_QuestionEditorItem2.default, { disabled: true, value: question, editable: false })
            )
          )
        );
      }

      return _react2.default.createElement(OptGroup, { label: 'operands' });
    };

    _this3.renderVars = function () {
      var values = _this3.state.values;
      var questionsMap = _this3.props.questionsMap;

      var previous = (0, _lodash.last)(values);
      var children = [];

      // Keep only questions we can extract simple value from
      if (!previous || previous && previous.type === types.BLOCK || previous && previous.type === types.OPERATOR) {
        children = Object.values(questionsMap).filter(function (e) {
          return e.type === _Question.QUESTION_DATE || e.type === _Question.QUESTION_DISCRETE_SCALE || e.type === _Question.QUESTION_NUMERICAL_SCALE || e.type === _Question.QUESTION_RATE;
        }).map(function (e) {
          return { value: { type: types.VAR, value: e.id }, title: e.title, color: 'green' };
        });
      }

      return _react2.default.createElement(
        OptGroup,
        { label: 'vars' },
        _this3.renderOptions(children)
      );
    };

    _this3.onChange = function (values) {
      _this3.setState({ values: values });
      // Generates code as string because we want dynamic conditional rendering
      _this3.props.onChange(Object.values(values).reduce(function (a, e) {
        return a + (e.type === types.VAR ? "${values[" + e.value + "]}" : e.value);
      }, ''));
    };

    _this3.state = {
      values: [],
      visible: false
    };
    return _this3;
  }

  _createClass(VisibleIfEditor, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          FormItem,
          { label: 'Visible si' },
          _react2.default.createElement(
            _select2.default,
            {
              defaultValue: this.state.values,
              mode: 'multiple',
              filterOption: true,
              optionFilterProp: 'filterBy',
              style: { width: '50%' },
              placeholder: 'Visible si',
              onChange: this.onChange,
              size: 'large'
            },
            this.renderBlocks(),
            this.renderOperators(),
            this.renderComparators(),
            this.renderOperands(),
            this.renderVars()
          )
        )
      );
    }
  }]);

  return VisibleIfEditor;
}(_react.Component);

exports.default = VisibleIfEditor;


VisibleIfEditor.propTypes = {
  value: _propTypes2.default.object.isRequired,
  onChange: _propTypes2.default.func.isRequired
};