'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumericInput = exports.UploadImage = exports.EditText = undefined;

var _inputNumber = require('antd/es/input-number');

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _upload = require('antd/es/upload');

var _upload2 = _interopRequireDefault(_upload);

var _icon = require('antd/es/icon');

var _icon2 = _interopRequireDefault(_icon);

var _message2 = require('antd/es/message');

var _message3 = _interopRequireDefault(_message2);

var _input = require('antd/es/input');

var _input2 = _interopRequireDefault(_input);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\ncolor: ', ';\nfont-size: 1.25em;\npadding: 0.25em 1em;\nborder-width: 1px;\nborder-color: ', ';\nbackground-color: transparent;\nwidth: auto;\nheight: auto;\ntext-align: center;\n'], ['\ncolor: ', ';\nfont-size: 1.25em;\npadding: 0.25em 1em;\nborder-width: 1px;\nborder-color: ', ';\nbackground-color: transparent;\nwidth: auto;\nheight: auto;\ntext-align: center;\n']);

require('antd/es/input-number/style');

require('antd/es/upload/style');

require('antd/es/icon/style');

require('antd/es/message/style');

require('antd/es/input/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledInput = (0, _styledComponents2.default)(_input2.default)(_templateObject, function (props) {
  return props.color ? props.color : '#181919';
}, function (props) {
  return props.focused ? '#181919' : 'transparent';
});

var EditText = exports.EditText = function EditText(_ref) {
  var _onChange = _ref.onChange,
      value = _ref.value,
      size = _ref.size,
      placeholder = _ref.placeholder;
  return _react2.default.createElement(StyledInput, {
    onFocus: function onFocus(e) {
      return e.target.select();
    },
    onBlur: function onBlur(e) {
      return e.target.blur();
    },
    onPressEnter: function onPressEnter(e) {
      return e.target.blur();
    },
    size: size,
    value: value,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    placeholder: placeholder
  });
};

EditText.propTypes = {
  onChange: _propTypes2.default.func.isRequired
};

var UploadImage = exports.UploadImage = function (_Component) {
  _inherits(UploadImage, _Component);

  function UploadImage(props) {
    _classCallCheck(this, UploadImage);

    var _this = _possibleConstructorReturn(this, (UploadImage.__proto__ || Object.getPrototypeOf(UploadImage)).call(this, props));

    _this.getBase64 = function (img, callback) {
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        return callback(reader.result);
      });
      reader.readAsDataURL(img);
    };

    _this.beforeUpload = function (file) {
      var isImageOk = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isImageOk) {
        _message3.default.error('Fichier image requis');
      }
      var isSizeOk = file.size / 1024 / 1024 < 2;
      if (!isSizeOk) {
        _message3.default.error("La taille de l'image doit être inférieure à 2M");
      }
      return isImageOk && isSizeOk;
    };

    _this.handleChange = function (info) {
      if (info.file.status === 'uploading') {
        _this.setState({ loading: true });
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        _this.getBase64(info.file.originFileObj, function (imageUrl) {
          return _this.setState({
            imageUrl: imageUrl,
            loading: false
          });
        });
      }
    };

    _this.state = {
      loading: false,
      imageUrl: ''
    };
    return _this;
  }

  _createClass(UploadImage, [{
    key: 'render',
    value: function render() {
      var imageUrl = this.state.imageUrl;
      var disabled = this.props.disabled;


      var uploadButton = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_icon2.default, { type: this.state.loading ? 'loading' : 'plus' }),
        _react2.default.createElement(
          'div',
          { className: 'ant-upload-text' },
          'Image'
        )
      );

      return _react2.default.createElement(
        _upload2.default,
        {
          disabled: disabled,
          name: 'avatar',
          listType: 'picture-card',
          showUploadList: false,
          action: '//jsonplaceholder.typicode.com/posts/',
          beforeUpload: this.beforeUpload,
          onChange: this.handleChange
        },
        imageUrl ? _react2.default.createElement('img', { src: imageUrl, alt: '' }) : uploadButton
      );
    }
  }]);

  return UploadImage;
}(_react.Component);

UploadImage.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  disabled: _propTypes2.default.boolean
};

UploadImage.defaultProps = {
  disabled: false
};

var NumericInput = exports.NumericInput = function (_Component2) {
  _inherits(NumericInput, _Component2);

  function NumericInput() {
    var _ref2;

    var _temp, _this2, _ret;

    _classCallCheck(this, NumericInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref2 = NumericInput.__proto__ || Object.getPrototypeOf(NumericInput)).call.apply(_ref2, [this].concat(args))), _this2), _this2.onChange = function (value) {
      var reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
      if (value && (!isNaN(value) && reg.test(value) || value === '' || value === '-')) {
        _this2.props.onChange(Number(value));
      }
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(NumericInput, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_inputNumber2.default, _extends({}, this.props, {
        onChange: this.onChange,
        placeholder: this.props.placeholder,
        maxLength: this.props.maxLength
      }));
    }
  }]);

  return NumericInput;
}(_react.Component);

NumericInput.propTypes = {
  value: _propTypes2.default.number.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  placeholder: _propTypes2.default.string,
  maxLength: _propTypes2.default.string,
  min: _propTypes2.default.number,
  max: _propTypes2.default.number
};

NumericInput.defaultProps = {
  placeholder: "Nombre",
  maxLength: "25",
  min: 0,
  max: 100
};