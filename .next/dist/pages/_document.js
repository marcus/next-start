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

var _react = require('/Users/marcus.vorwaller/Dropbox/Code/quote/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _document = require('/Users/marcus.vorwaller/Dropbox/Code/quote/node_modules/next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);
    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',

    //static async getInitialProps (ctx) {
    //const props = await Document.getInitialProps(ctx)
    //return { ...props, customValue: 'hi there!'  }
    //}

    value: function render() {
      return _react2.default.createElement(
        'html',
        { style: { height: '100%', width: '100%' } },
        _react2.default.createElement(
          _document.Head,
          null,
          _react2.default.createElement('meta', { charSet: 'utf-8' }),
          _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css' }),
          _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/css/base.css' }),
          _react2.default.createElement(
            'style',
            null,
            '\n              html, #__next {\n                width: 100%;\n                height: 100%;\n              }\n              body {\n                margin: 0;\n                width: 100%;\n                height: 100%;\n              }\n            '
          )
        ),
        _react2.default.createElement(
          'body',
          null,
          _react2.default.createElement(_document.Main, null),
          _react2.default.createElement(_document.NextScript, null)
        )
      );
    }
  }]);
  return MyDocument;
}(_document2.default);

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcz9lbnRyeSJdLCJuYW1lcyI6WyJNeURvY3VtZW50IiwiaGVpZ2h0Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7O0FBQ25CO0FBQ0U7QUFDQTtBQUNGOzs2QkFFUztBQUNQLGFBQ0k7QUFBQTtBQUFBLFVBQU0sT0FBTyxFQUFDQyxRQUFRLE1BQVQsRUFBaUJDLE9BQU8sTUFBeEIsRUFBYjtBQUNFO0FBQUE7QUFBQTtBQUNFLGtEQUFNLFNBQVEsT0FBZCxHQURGO0FBRUUsa0RBQU0sS0FBSSxZQUFWLEVBQXVCLE1BQUssd0VBQTVCLEdBRkY7QUFHRSxrREFBTSxLQUFJLFlBQVYsRUFBdUIsTUFBSyxzQkFBNUIsR0FIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRixTQURGO0FBaUJFO0FBQUE7QUFBQTtBQUNFLDZEQURGO0FBRUU7QUFGRjtBQWpCRixPQURKO0FBd0JEOzs7OztrQkEvQmtCRixVIiwiZmlsZSI6Il9kb2N1bWVudC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFyY3VzLnZvcndhbGxlci9Ecm9wYm94L0NvZGUvcXVvdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9jdW1lbnQsIHsgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCAgfSBmcm9tICduZXh0L2RvY3VtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgLy9zdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzIChjdHgpIHtcbiAgICAvL2NvbnN0IHByb3BzID0gYXdhaXQgRG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiAgICAvL3JldHVybiB7IC4uLnByb3BzLCBjdXN0b21WYWx1ZTogJ2hpIHRoZXJlIScgIH1cbiAgLy99XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgICAgPGh0bWwgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvbGF0ZXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9jc3MvYmFzZS5jc3NcIi8+XG4gICAgICAgICAgICA8c3R5bGU+e2BcbiAgICAgICAgICAgICAgaHRtbCwgI19fbmV4dCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgICA8L2JvZHk+XG4gICAgICAgIDwvaHRtbD5cbiAgICApO1xuICB9XG59XG4iXX0=