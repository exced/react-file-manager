'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Question = require('../Types/Question');

var _QuestionSwitch = require('../Components/QuestionSwitch');

var _QuestionSwitch2 = _interopRequireDefault(_QuestionSwitch);

var _QuestionText = require('../Components/QuestionText');

var _QuestionText2 = _interopRequireDefault(_QuestionText);

var _QuestionTextArea = require('../Components/QuestionTextArea');

var _QuestionTextArea2 = _interopRequireDefault(_QuestionTextArea);

var _QuestionDate = require('../Components/QuestionDate');

var _QuestionDate2 = _interopRequireDefault(_QuestionDate);

var _QuestionDiscreteScale = require('../Components/QuestionDiscreteScale');

var _QuestionDiscreteScale2 = _interopRequireDefault(_QuestionDiscreteScale);

var _QuestionNumericalScale = require('../Components/QuestionNumericalScale');

var _QuestionNumericalScale2 = _interopRequireDefault(_QuestionNumericalScale);

var _QuestionChoices = require('../Components/QuestionChoices');

var _QuestionChoices2 = _interopRequireDefault(_QuestionChoices);

var _QuestionImage = require('../Components/QuestionImage');

var _QuestionImage2 = _interopRequireDefault(_QuestionImage);

var _QuestionRank = require('../Components/QuestionRank');

var _QuestionRank2 = _interopRequireDefault(_QuestionRank);

var _QuestionMatrix = require('../Components/QuestionMatrix');

var _QuestionMatrix2 = _interopRequireDefault(_QuestionMatrix);

var _QuestionCascade = require('../Components/QuestionCascade');

var _QuestionCascade2 = _interopRequireDefault(_QuestionCascade);

var _QuestionRate = require('../Components/QuestionRate');

var _QuestionRate2 = _interopRequireDefault(_QuestionRate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dispatcher = function dispatcher(type) {
  var _QUESTION_SWITCH$QUES;

  return (_QUESTION_SWITCH$QUES = {}, _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_SWITCH, _QuestionSwitch2.default), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_TEXT, _QuestionText2.default), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_TEXT_AREA, _QuestionTextArea2.default), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_DATE, _QuestionDate2.default), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_DISCRETE_SCALE, _QuestionDiscreteScale2.default), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_NUMERICAL_SCALE, _QuestionNumericalScale2.default), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_CHOICES, _QuestionChoices2.default), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_MATRIX, _QuestionMatrix2.default), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_IMAGE, _QuestionImage2.default), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_RANK, _QuestionRank2.default), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_RATE, _QuestionRate2.default), _defineProperty(_QUESTION_SWITCH$QUES, _Question.QUESTION_CASCADE, _QuestionCascade2.default), _QUESTION_SWITCH$QUES)[type];
};

var QuestionEditorItem = function QuestionEditorItem(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      editable = _ref.editable;

  var Node = dispatcher(value.type);
  return _react2.default.createElement(Node, { value: value, onChange: onChange, editable: editable });
};

QuestionEditorItem.propTypes = {
  value: _propTypes2.default.object.isRequired,
  onChange: _propTypes2.default.func.isRequired
};

exports.default = QuestionEditorItem;