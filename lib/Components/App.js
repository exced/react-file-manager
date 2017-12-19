'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backTop = require('antd/es/back-top');

var _backTop2 = _interopRequireDefault(_backTop);

var _layout = require('antd/es/layout');

var _layout2 = _interopRequireDefault(_layout);

require('antd/es/back-top/style');

require('antd/es/layout/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FAB = require('../Containers/FAB');

var _FAB2 = _interopRequireDefault(_FAB);

var _SurveyEditor = require('../Containers/SurveyEditor');

var _SurveyEditor2 = _interopRequireDefault(_SurveyEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = _layout2.default.Content;


var App = function App(_ref) {
  var value = _ref.value,
      onExport = _ref.onExport;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _layout2.default,
      { style: { minHeight: '100vh' } },
      _react2.default.createElement(_backTop2.default, null),
      _react2.default.createElement(
        'div',
        { style: { zIndex: 9999, position: 'fixed', bottom: 30, right: 30 } },
        _react2.default.createElement(_FAB2.default, { value: value, onExport: onExport })
      ),
      _react2.default.createElement(
        Content,
        null,
        _react2.default.createElement(
          'div',
          { style: { padding: 24, background: '#fff', textAlign: 'center' } },
          _react2.default.createElement(_SurveyEditor2.default, { value: value })
        )
      )
    )
  );
};

App.propTypes = {
  value: _propTypes2.default.object.isRequired,
  onExport: _propTypes2.default.func.isRequired
};

exports.default = App;