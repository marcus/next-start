'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('/Users/marcus.vorwaller/Dropbox/Code/quote/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/marcus.vorwaller/Dropbox/Code/quote/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/marcus.vorwaller/Dropbox/Code/quote/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/marcus.vorwaller/Dropbox/Code/quote/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/marcus.vorwaller/Dropbox/Code/quote/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('/Users/marcus.vorwaller/Dropbox/Code/quote/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/marcus.vorwaller/Dropbox/Code/quote/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('/Users/marcus.vorwaller/Dropbox/Code/quote/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _ansiHtml = require('/Users/marcus.vorwaller/Dropbox/Code/quote/node_modules/ansi-html/index.js');

var _ansiHtml2 = _interopRequireDefault(_ansiHtml);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ErrorDebug = function (_React$Component) {
  (0, _inherits3.default)(ErrorDebug, _React$Component);

  function ErrorDebug() {
    (0, _classCallCheck3.default)(this, ErrorDebug);
    return (0, _possibleConstructorReturn3.default)(this, (ErrorDebug.__proto__ || (0, _getPrototypeOf2.default)(ErrorDebug)).apply(this, arguments));
  }

  (0, _createClass3.default)(ErrorDebug, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          message = _props.message,
          stack = _props.stack,
          path = _props.path;

      return _react2.default.createElement('div', { className: 'errorDebug', 'data-jsx': 1455198374
      }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', 'data-jsx': 1455198374
      })), path ? _react2.default.createElement('div', { className: 'heading', 'data-jsx': 1455198374
      }, 'Error in ', path) : null, name === 'ModuleBuildError' ? _react2.default.createElement('pre', { className: 'message', dangerouslySetInnerHTML: { __html: (0, _ansiHtml2.default)(encodeHtml(message)) }, 'data-jsx': 1455198374
      }) : _react2.default.createElement('pre', { className: 'message', 'data-jsx': 1455198374
      }, stack), _react2.default.createElement(_style2.default, {
        styleId: 1579730202,
        css: '\n        body {\n          background: #a6004c;\n          margin: 0;\n        }\n      '
      }), _react2.default.createElement(_style2.default, {
        styleId: 3076811513,
        css: '.errorDebug[data-jsx="1455198374"] {height: 100%;padding: 16px;box-sizing: border-box;}.message[data-jsx="1455198374"] {font-family: "SF Mono", "Roboto Mono", "Fira Mono", menlo-regular, monospace;font-size: 10px;color: #fbe7f1;margin: 0;white-space: pre-wrap;word-wrap: break-word;}.heading[data-jsx="1455198374"] {font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;font-size: 13px;font-weight: bold;color: #ff84bf;margin-bottom: 20pxl        }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2Vycm9yLWRlYnVnLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCa0IsQUFDRyxvQ0FDRSxhQUNDLGNBQ1MsdUJBQ3hCLENBRVMsaUNBQ3FFLDZFQUM3RCxnQkFDRCxlQUNMLFVBQ1ksc0JBQ0Esc0JBQ3ZCLENBRVMsaUNBQytILHVJQUN2SCxnQkFDRSxrQkFDSCxlQUVoQiIsImZpbGUiOiJub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci1kZWJ1Zy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFyY3VzLnZvcndhbGxlci9Ecm9wYm94L0NvZGUvcXVvdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgYW5zaUhUTUwgZnJvbSAnYW5zaS1odG1sJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvckRlYnVnIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoeyBlcnIgfSkge1xuICAgIGNvbnN0IHsgbmFtZSwgbWVzc2FnZSwgc3RhY2ssIG1vZHVsZSB9ID0gZXJyXG4gICAgcmV0dXJuIHsgbmFtZSwgbWVzc2FnZSwgc3RhY2ssIHBhdGg6IG1vZHVsZSA/IG1vZHVsZS5yYXdSZXF1ZXN0IDogbnVsbCB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgbWVzc2FnZSwgc3RhY2ssIHBhdGggfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZXJyb3JEZWJ1Zyc+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAnIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7cGF0aCA/IDxkaXYgY2xhc3NOYW1lPSdoZWFkaW5nJz5FcnJvciBpbiB7cGF0aH08L2Rpdj4gOiBudWxsfVxuICAgICAge1xuICAgICAgICBuYW1lID09PSAnTW9kdWxlQnVpbGRFcnJvcidcbiAgICAgICAgPyA8cHJlIGNsYXNzTmFtZT0nbWVzc2FnZScgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBhbnNpSFRNTChlbmNvZGVIdG1sKG1lc3NhZ2UpKSB9fSAvPlxuICAgICAgICA6IDxwcmUgY2xhc3NOYW1lPSdtZXNzYWdlJz57c3RhY2t9PC9wcmU+XG4gICAgICB9XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjYTYwMDRjO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZXJyb3JEZWJ1ZyB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJTRiBNb25vXCIsIFwiUm9ib3RvIE1vbm9cIiwgXCJGaXJhIE1vbm9cIiwgbWVubG8tcmVndWxhciwgbW9ub3NwYWNlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICBjb2xvcjogI2ZiZTdmMTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkaW5nIHtcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIFwiU2Vnb2UgVUlcIiwgXCJGaXJhIFNhbnNcIiwgQXZlbmlyLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBjb2xvcjogI2ZmODRiZjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4bFxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIH1cbn1cblxuY29uc3QgZW5jb2RlSHRtbCA9IHN0ciA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKVxufVxuXG4vLyBzZWUgY29sb3IgZGVmaW5pdGlvbnMgb2YgYmFiZWwtY29kZS1mcmFtZTpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9ibG9iL21hc3Rlci9wYWNrYWdlcy9iYWJlbC1jb2RlLWZyYW1lL3NyYy9pbmRleC5qc1xuXG5hbnNpSFRNTC5zZXRDb2xvcnMoe1xuICByZXNldDogWydmZmYnLCAnYTYwMDRjJ10sXG4gIGRhcmtncmV5OiAnZTU0NTkwJyxcbiAgeWVsbG93OiAnZWU4Y2JiJyxcbiAgZ3JlZW46ICdmMmEyYzcnLFxuICBtYWdlbnRhOiAnZmJlN2YxJyxcbiAgYmx1ZTogJ2ZmZicsXG4gIGN5YW46ICdlZjhiYjknLFxuICByZWQ6ICdmZmYnXG59KVxuIl19 */\n/*@ sourceURL=node_modules/next/dist/pages/_error-debug.js?entry */'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var err = _ref.err;
      var name = err.name,
          message = err.message,
          stack = err.stack,
          module = err.module;

      return { name: name, message: message, stack: stack, path: module ? module.rawRequest : null };
    }
  }]);
  return ErrorDebug;
}(_react2.default.Component);

exports.default = ErrorDebug;

var encodeHtml = function encodeHtml(str) {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

// see color definitions of babel-code-frame:
// https://github.com/babel/babel/blob/master/packages/babel-code-frame/src/index.js

_ansiHtml2.default.setColors({
  reset: ['fff', 'a6004c'],
  darkgrey: 'e54590',
  yellow: 'ee8cbb',
  green: 'f2a2c7',
  magenta: 'fbe7f1',
  blue: 'fff',
  cyan: 'ef8bb9',
  red: 'fff'
});