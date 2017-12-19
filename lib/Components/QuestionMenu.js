'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = require('antd/es/menu');

var _menu2 = _interopRequireDefault(_menu);

require('antd/es/menu/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Question = require('../Types/Question');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubMenu = _menu2.default.SubMenu;

var QuestionMenu = function QuestionMenu(_ref) {
  var _onClick = _ref.onClick;
  return _react2.default.createElement(
    _menu2.default,
    { onClick: function onClick(_ref2) {
        var key = _ref2.key;
        return _onClick(key);
      } },
    _react2.default.createElement(
      _menu2.default.Item,
      { key: _Question.QUESTION_SWITCH },
      'Switch'
    ),
    _react2.default.createElement(
      SubMenu,
      { title: 'Texte' },
      _react2.default.createElement(
        _menu2.default.Item,
        { key: _Question.QUESTION_TEXT },
        'Court'
      ),
      _react2.default.createElement(
        _menu2.default.Item,
        { key: _Question.QUESTION_TEXT_AREA },
        'Long'
      )
    ),
    _react2.default.createElement(
      _menu2.default.Item,
      { key: _Question.QUESTION_DATE },
      'Date'
    ),
    _react2.default.createElement(
      SubMenu,
      { title: '\xC9chelle' },
      _react2.default.createElement(
        _menu2.default.Item,
        { key: _Question.QUESTION_DISCRETE_SCALE },
        'Discr\xE8te'
      ),
      _react2.default.createElement(
        _menu2.default.Item,
        { key: _Question.QUESTION_NUMERICAL_SCALE },
        'Num\xE9rique'
      )
    ),
    _react2.default.createElement(
      SubMenu,
      { title: 'Choix' },
      _react2.default.createElement(
        _menu2.default.Item,
        { key: _Question.QUESTION_CHOICES },
        'Liste'
      ),
      _react2.default.createElement(
        _menu2.default.Item,
        { key: _Question.QUESTION_MATRIX },
        'Matrice'
      )
    ),
    _react2.default.createElement(
      _menu2.default.Item,
      { key: _Question.QUESTION_IMAGE },
      'Image'
    ),
    _react2.default.createElement(
      _menu2.default.Item,
      { key: _Question.QUESTION_RANK },
      'Classement'
    ),
    _react2.default.createElement(
      _menu2.default.Item,
      { key: _Question.QUESTION_RATE },
      'Note'
    )
  );
};

QuestionMenu.propTypes = {
  onClick: _propTypes2.default.func
};

QuestionMenu.defaultProps = {
  onClick: function onClick() {}
};

exports.default = QuestionMenu;