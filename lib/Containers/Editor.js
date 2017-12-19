'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = require('react-redux');

var _reactBootstrap = require('react-bootstrap');

var _reactSortableHoc = require('react-sortable-hoc');

var _surveyReact = require('survey-react');

var SurveyJS = _interopRequireWildcard(_surveyReact);

var _riek = require('riek');

var _lodash = require('lodash');

var _reduxUndo = require('redux-undo');

var _Editor = require('../Selectors/Editor');

var _Survey = require('./Survey');

var _Survey2 = _interopRequireDefault(_Survey);

var _SurveyEditor = require('../Types/SurveyEditor');

var _Editor2 = require('../Actions/Editor');

require('survey-react/survey.css');

var _Editor3 = require('./Styles/Editor.css');

var _Editor4 = _interopRequireDefault(_Editor3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Handle = (0, _reactSortableHoc.SortableHandle)(function () {
    return _react2.default.createElement('div', { className: _Editor4.default.handle });
});

var Question = (0, _reactSortableHoc.SortableElement)(function (props) {
    return _react2.default.createElement(QuestionItem, props);
});

var QuestionText = function QuestionText(props) {
    return _react2.default.createElement(
        'div',
        null,
        'Question Text Content !!!'
    );
};

var dispatchQuestion = function dispatchQuestion(type, value) {
    return _defineProperty({}, _SurveyEditor.QUESTION_TEXT, _react2.default.createElement(QuestionText, undefined.props))[type];
};

var QuestionEditor = function QuestionEditor(_ref) {
    var question = _ref.question;
    return dispatchQuestion[question.type];
};

var QuestionItem = function (_Component) {
    _inherits(QuestionItem, _Component);

    function QuestionItem(props) {
        _classCallCheck(this, QuestionItem);

        var _this = _possibleConstructorReturn(this, (QuestionItem.__proto__ || Object.getPrototypeOf(QuestionItem)).call(this, props));

        _this.toggle = function () {
            return _this.setState({ opened: !_this.state.opened });
        };

        _this.state = {
            opened: false,
            hover: false
        };
        return _this;
    }

    _createClass(QuestionItem, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var opened = this.state.opened;
            var _props = this.props,
                className = _props.className,
                style = _props.style,
                wrapper = _props.wrapper,
                value = _props.value,
                shouldUseDragHandle = _props.shouldUseDragHandle;
            var question = value.question,
                index = value.index;


            return _react2.default.createElement(
                _reactBootstrap.Grid,
                { onMouseLeave: function onMouseLeave() {
                        return _this2.setState({ hover: false });
                    }, onMouseEnter: function onMouseEnter() {
                        return _this2.setState({ hover: true });
                    }, style: { backgroundColor: this.state.hover && 'grey' } },
                _react2.default.createElement(
                    _reactBootstrap.Row,
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.Col,
                        { md: 1 },
                        shouldUseDragHandle && _react2.default.createElement(Handle, null)
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Col,
                        { md: 6 },
                        _react2.default.createElement(
                            'div',
                            { className: wrapper },
                            question.title
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Collapse,
                            { 'in': opened },
                            _react2.default.createElement(
                                _reactBootstrap.Panel,
                                null,
                                _react2.default.createElement(QuestionEditor, this.props)
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Col,
                        { md: 1, style: { justifyContent: 'center' } },
                        _react2.default.createElement(
                            _reactBootstrap.Button,
                            { onClick: this.toggle },
                            _react2.default.createElement('i', { className: opened ? "fa fa-caret-square-o-up" : "fa fa-caret-square-o-down" })
                        )
                    )
                )
            );
        }
    }]);

    return QuestionItem;
}(_react.Component);

var QuestionList = (0, _reactSortableHoc.SortableContainer)(function (_ref2) {
    var className = _ref2.className,
        items = _ref2.items,
        itemClass = _ref2.itemClass,
        shouldUseDragHandle = _ref2.shouldUseDragHandle,
        rest = _objectWithoutProperties(_ref2, ['className', 'items', 'itemClass', 'shouldUseDragHandle']);

    return _react2.default.createElement(
        'div',
        { className: className },
        items.map(function (question, index) {
            return _react2.default.createElement(Question, _extends({
                key: 'question-' + index,
                className: itemClass,
                value: { question: question, index: index },
                shouldUseDragHandle: shouldUseDragHandle
            }, rest));
        })
    );
});

var PageItem = function (_Component2) {
    _inherits(PageItem, _Component2);

    function PageItem(props) {
        _classCallCheck(this, PageItem);

        var _this3 = _possibleConstructorReturn(this, (PageItem.__proto__ || Object.getPrototypeOf(PageItem)).call(this, props));

        _this3.toggle = function () {
            return _this3.setState({ opened: !_this3.state.opened });
        };

        _this3.state = {
            opened: false
        };
        return _this3;
    }

    _createClass(PageItem, [{
        key: 'render',
        value: function render() {
            var _this4 = this;

            var opened = this.state.opened;
            var _props2 = this.props,
                value = _props2.value,
                addQuestion = _props2.addQuestion;
            var page = value.page,
                index = value.index;


            return _react2.default.createElement(
                'div',
                { className: _Editor4.default.page },
                _react2.default.createElement(
                    'div',
                    { className: _Editor4.default.pageHeader },
                    _react2.default.createElement(
                        _reactBootstrap.Grid,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Row,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { md: 1 },
                                _react2.default.createElement(Handle, null)
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { md: 8, style: { textAlign: 'center' } },
                                _react2.default.createElement(_riek.RIEInput, {
                                    validate: function validate(text) {
                                        return text;
                                    },
                                    value: page.title,
                                    change: function change(state) {
                                        return _this4.setState(state);
                                    },
                                    propName: 'text',
                                    className: 'editable',
                                    classLoading: 'loading',
                                    classInvalid: 'invalid'
                                })
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { md: 3 },
                                _react2.default.createElement(
                                    _reactBootstrap.ButtonToolbar,
                                    null,
                                    _react2.default.createElement(
                                        _reactBootstrap.DropdownButton,
                                        { title: 'Question', id: 'dropdown-basic-1' },
                                        _react2.default.createElement(
                                            _reactBootstrap.MenuItem,
                                            { eventKey: '1', onClick: function onClick() {
                                                    return addQuestion(index, _SurveyEditor.QUESTION_TEXT);
                                                } },
                                            'Texte'
                                        ),
                                        _react2.default.createElement(
                                            _reactBootstrap.MenuItem,
                                            { eventKey: '2', onClick: function onClick() {
                                                    return addQuestion(index, _SurveyEditor.QUESTION_DATE);
                                                } },
                                            'Date'
                                        ),
                                        _react2.default.createElement(
                                            _reactBootstrap.MenuItem,
                                            { eventKey: '3', onClick: function onClick() {
                                                    return addQuestion(index, _SurveyEditor.QUESTION_DISCRETE_SCALE);
                                                } },
                                            '\xC9chelle discr\xE8te'
                                        ),
                                        _react2.default.createElement(
                                            _reactBootstrap.MenuItem,
                                            { eventKey: '4', onClick: function onClick() {
                                                    return addQuestion(index, _SurveyEditor.QUESTION_NUMERICAL_SCALE);
                                                } },
                                            '\xC9chelle num\xE9rique'
                                        ),
                                        _react2.default.createElement(
                                            _reactBootstrap.MenuItem,
                                            { eventKey: '5', onClick: function onClick() {
                                                    return addQuestion(index, _SurveyEditor.QUESTION_CHOICES);
                                                } },
                                            'Choix multiples'
                                        ),
                                        _react2.default.createElement(
                                            _reactBootstrap.MenuItem,
                                            { eventKey: '6', onClick: function onClick() {
                                                    return addQuestion(index, _SurveyEditor.QUESTION_IMAGE);
                                                } },
                                            'Image'
                                        ),
                                        _react2.default.createElement(
                                            _reactBootstrap.MenuItem,
                                            { eventKey: '7', onClick: function onClick() {
                                                    return addQuestion(index, _SurveyEditor.QUESTION_RANK);
                                                } },
                                            'Rang'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.Button,
                                        { onClick: this.expand },
                                        _react2.default.createElement('i', { className: 'fa fa-expand' })
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.Button,
                                        { onClick: this.compress },
                                        _react2.default.createElement('i', { className: 'fa fa-compress' })
                                    ),
                                    _react2.default.createElement(
                                        _reactBootstrap.Button,
                                        { onClick: this.props.removePage },
                                        _react2.default.createElement('i', { className: 'fa fa-minus-circle' })
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(ListWrapper, {
                    component: QuestionList,
                    className: _Editor4.default.pageList,
                    items: page.questions,
                    shouldUseDragHandle: true,
                    helperClass: _Editor4.default.stylizedHelper
                })
            );
        }
    }]);

    return PageItem;
}(_react.Component);

var Page = (0, _reactSortableHoc.SortableElement)(function (props) {
    return _react2.default.createElement(PageItem, props);
});

// Iterates over pages
var PageList = (0, _reactSortableHoc.SortableContainer)(function (_ref3) {
    var className = _ref3.className,
        items = _ref3.items,
        isSorting = _ref3.isSorting,
        rest = _objectWithoutProperties(_ref3, ['className', 'items', 'isSorting']);

    return _react2.default.createElement(
        'div',
        { className: className },
        items.map(function (page, index) {
            return _react2.default.createElement(Page, _extends({ key: 'page-' + index, value: { page: page, index: index } }, rest));
        })
    );
});

var ListWrapper = function (_Component3) {
    _inherits(ListWrapper, _Component3);

    function ListWrapper(props) {
        _classCallCheck(this, ListWrapper);

        var _this5 = _possibleConstructorReturn(this, (ListWrapper.__proto__ || Object.getPrototypeOf(ListWrapper)).call(this, props));

        _this5.componentWillReceiveProps = function (nextProps) {
            if (_this5.state.items !== nextProps.items) {
                _this5.setState({ items: nextProps.items });
            }
        };

        _this5.onSortStart = function () {
            var onSortStart = _this5.props.onSortStart;

            _this5.setState({ isSorting: true });

            if (onSortStart) {
                onSortStart(_this5.refs.component);
            }
        };

        _this5.onSortEnd = function (_ref4) {
            var oldIndex = _ref4.oldIndex,
                newIndex = _ref4.newIndex;
            var onSortEnd = _this5.props.onSortEnd;
            var items = _this5.state.items;


            _this5.setState({ items: (0, _reactSortableHoc.arrayMove)(items, oldIndex, newIndex), isSorting: false });

            if (onSortEnd) {
                onSortEnd(_this5.refs.component);
            }
        };

        _this5.state = {
            items: props.items,
            isSorting: false
        };
        return _this5;
    }

    _createClass(ListWrapper, [{
        key: 'render',
        value: function render() {
            var Component = this.props.component;
            var _state = this.state,
                items = _state.items,
                isSorting = _state.isSorting;

            var props = {
                isSorting: isSorting,
                items: items,
                onSortEnd: this.onSortEnd,
                onSortStart: this.onSortStart,
                ref: 'component',
                useDragHandle: this.props.shouldUseDragHandle
            };

            return _react2.default.createElement(Component, _extends({}, this.props, props));
        }
    }]);

    return ListWrapper;
}(_react.Component);

ListWrapper.propTypes = {
    items: _propTypes2.default.array,
    className: _propTypes2.default.string,
    itemClass: _propTypes2.default.string,
    width: _propTypes2.default.number,
    height: _propTypes2.default.number,
    onSortStart: _propTypes2.default.func,
    onSortEnd: _propTypes2.default.func,
    component: _propTypes2.default.func,
    shouldUseDragHandle: _propTypes2.default.bool
};
ListWrapper.defaultProps = {
    className: (0, _classnames2.default)(_Editor4.default.list, _Editor4.default.stylizedList),
    itemClass: (0, _classnames2.default)(_Editor4.default.item, _Editor4.default.stylizedItem),
    width: 400,
    height: 600
};


var SurveyToolBar = function SurveyToolBar(_ref5) {
    var addPage = _ref5.addPage,
        expand = _ref5.expand,
        compress = _ref5.compress,
        undo = _ref5.undo,
        redo = _ref5.redo;
    return _react2.default.createElement(
        _reactBootstrap.ButtonToolbar,
        { bsClass: 'pull-right' },
        _react2.default.createElement(
            _reactBootstrap.Button,
            { onClick: addPage },
            _react2.default.createElement(
                'i',
                { className: 'fa fa-plus-circle' },
                'Page'
            )
        ),
        _react2.default.createElement(
            _reactBootstrap.Button,
            { onClick: expand },
            _react2.default.createElement('i', { className: 'fa fa-expand' })
        ),
        _react2.default.createElement(
            _reactBootstrap.Button,
            { onClick: compress },
            _react2.default.createElement('i', { className: 'fa fa-compress' })
        ),
        _react2.default.createElement(
            _reactBootstrap.Button,
            { onClick: undo },
            _react2.default.createElement('i', { className: 'fa fa-undo' })
        ),
        _react2.default.createElement(
            _reactBootstrap.Button,
            { onClick: redo },
            _react2.default.createElement('i', { className: 'fa fa-repeat' })
        )
    );
};

var SurveyEditor = function (_Component4) {
    _inherits(SurveyEditor, _Component4);

    function SurveyEditor(props) {
        _classCallCheck(this, SurveyEditor);

        var _this6 = _possibleConstructorReturn(this, (SurveyEditor.__proto__ || Object.getPrototypeOf(SurveyEditor)).call(this, props));

        _this6.onClickTab = function (key) {
            if (_this6.state.activeTabKey !== key) {
                _this6.setState({
                    activeTabKey: key
                });
            }
        };

        _this6.expand = function () {};

        _this6.compress = function () {};

        _this6.toggleItemSelector = function () {
            return _this6.setState({ openedItemSelector: !_this6.state.openedItemSelector });
        };

        _this6.state = {
            openedItemSelector: false,
            activeTabKey: props.edit ? 2 : 1
        };
        return _this6;
    }

    _createClass(SurveyEditor, [{
        key: 'render',
        value: function render() {
            var _this7 = this;

            var _state2 = this.state,
                openedItemSelector = _state2.openedItemSelector,
                activeTabKey = _state2.activeTabKey;
            var _props3 = this.props,
                survey = _props3.survey,
                undo = _props3.undo,
                redo = _props3.redo,
                addPage = _props3.addPage,
                removePage = _props3.removePage,
                setPage = _props3.setPage,
                movePage = _props3.movePage,
                addQuestion = _props3.addQuestion,
                removeQuestion = _props3.removeQuestion,
                setQuestion = _props3.setQuestion,
                moveQuestion = _props3.moveQuestion;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactBootstrap.Tabs,
                    { activeKey: activeTabKey, onSelect: this.onClickTab, id: 'controlled-tab-example' },
                    _react2.default.createElement(
                        _reactBootstrap.Tab,
                        { eventKey: 1, title: 'Test' },
                        _react2.default.createElement(_Survey2.default, null)
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Tab,
                        { eventKey: 2, title: '\xC9diteur' },
                        _react2.default.createElement(
                            _reactBootstrap.Grid,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Row,
                                null,
                                _react2.default.createElement(
                                    _reactBootstrap.Col,
                                    null,
                                    _react2.default.createElement(_riek.RIEInput, {
                                        validate: function validate(text) {
                                            return text;
                                        },
                                        value: survey.title,
                                        change: function change(state) {
                                            return _this7.setState(state);
                                        },
                                        propName: 'text',
                                        className: 'editable',
                                        classLoading: 'loading',
                                        classInvalid: 'invalid'
                                    }),
                                    _react2.default.createElement(SurveyToolBar, this.props)
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Row,
                                null,
                                _react2.default.createElement(ListWrapper, _extends({
                                    component: PageList,
                                    items: survey.pages,
                                    shouldUseDragHandle: true,
                                    helperClass: _Editor4.default.stylizedHelper
                                }, this.props))
                            )
                        )
                    )
                )
            );
        }
    }]);

    return SurveyEditor;
}(_react.Component);

// Redux


SurveyEditor.propTypes = {
    edit: _propTypes2.default.bool,
    survey: _propTypes2.default.object,
    onSave: _propTypes2.default.func
};
SurveyEditor.defaultProps = {
    edit: false,
    onSave: function onSave() {}
};
var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        survey: state.surveyEditor.survey
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        undo: function undo() {
            return dispatch(_reduxUndo.ActionCreators.undo());
        },
        redo: function redo() {
            return dispatch(_reduxUndo.ActionCreators.redo());
        },
        addPage: function addPage() {
            return dispatch((0, _Editor2.addPage)());
        },
        removePage: function removePage(index) {
            return dispatch((0, _Editor2.removePage)(index));
        },
        setPage: function setPage(index, value) {
            return dispatch((0, _Editor2.setPage)(index, value));
        },
        movePage: function movePage(oldIndex, newIndex) {
            return dispatch((0, _Editor2.movePage)(oldIndex, newIndex));
        },
        addQuestion: function addQuestion(pageIndex, type) {
            return dispatch((0, _Editor2.addQuestion)(pageIndex, type));
        },
        removeQuestion: function removeQuestion(pageIndex, questionIndex) {
            return dispatch((0, _Editor2.removeQuestion)(pageIndex, questionIndex));
        },
        setQuestion: function setQuestion(pageIndex, questionIndex, value) {
            return dispatch((0, _Editor2.setQuestion)(pageIndex, questionIndex, value));
        },
        moveQuestion: function moveQuestion(pageIndex, oldIndex, newIndex) {
            return dispatch((0, _Editor2.moveQuestion)(pageIndex, oldIndex, newIndex));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SurveyEditor);