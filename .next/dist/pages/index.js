'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('/Users/marcus.vorwaller/Dropbox/Code/quote/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/marcus.vorwaller/Dropbox/Code/quote/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('/Users/marcus.vorwaller/Dropbox/Code/quote/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('/Users/marcus.vorwaller/Dropbox/Code/quote/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('/Users/marcus.vorwaller/Dropbox/Code/quote/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/marcus.vorwaller/Dropbox/Code/quote/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _index = require('../reducers/index');

var _index2 = _interopRequireDefault(_index);

var _Card = require('../components/Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);
  (0, _createClass3.default)(Index, null, [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var req = _ref.req;

      var isServer = !!req;
      var store = (0, _index.initStore)(_index2.default, null, isServer);
      return { initialState: store.getState(), isServer: isServer };
    }
  }]);

  function Index(props) {
    (0, _classCallCheck3.default)(this, Index);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));

    _this.store = (0, _index.initStore)(_index2.default, props.initialState, props.isServer);
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'main' },
        _react2.default.createElement('div', { id: 'firebaseui-auth-container' }),
        _react2.default.createElement(
          _reactRedux.Provider,
          { store: this.store },
          _react2.default.createElement(_Card2.default, null)
        ),
        _react2.default.createElement(
          'style',
          null,
          '\n          #main {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n          }\n        '
        )
      );
    }
  }]);
  return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbIkluZGV4IiwicmVxIiwiaXNTZXJ2ZXIiLCJzdG9yZSIsImluaXRpYWxTdGF0ZSIsImdldFN0YXRlIiwicHJvcHMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUE7Ozs7OztJQUVxQkEsSzs7OzswQ0FDYztBQUFBLFVBQVBDLEdBQU8sUUFBUEEsR0FBTzs7QUFDL0IsVUFBTUMsV0FBVyxDQUFDLENBQUNELEdBQW5CO0FBQ0EsVUFBTUUsUUFBUSx1Q0FBbUIsSUFBbkIsRUFBeUJELFFBQXpCLENBQWQ7QUFDQSxhQUFPLEVBQUVFLGNBQWNELE1BQU1FLFFBQU4sRUFBaEIsRUFBa0NILGtCQUFsQyxFQUFQO0FBQ0Q7OztBQUVELGlCQUFhSSxLQUFiLEVBQW9CO0FBQUE7O0FBQUEsb0lBQ1pBLEtBRFk7O0FBRWxCLFVBQUtILEtBQUwsR0FBYSx1Q0FBbUJHLE1BQU1GLFlBQXpCLEVBQXVDRSxNQUFNSixRQUE3QyxDQUFiO0FBRmtCO0FBR25COzs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBSyxJQUFHLE1BQVI7QUFDRSwrQ0FBSyxJQUFHLDJCQUFSLEdBREY7QUFFRTtBQUFBO0FBQUEsWUFBVSxPQUFPLEtBQUtDLEtBQXRCO0FBQ0U7QUFERixTQUZGO0FBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGLE9BREY7QUFlRDs7O0VBNUJnQyxnQkFBTUksUzs7a0JBQXBCUCxLIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJjdXMudm9yd2FsbGVyL0Ryb3Bib3gvQ29kZS9xdW90ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycy9pbmRleCc7XG5pbXBvcnQgeyBpbml0U3RvcmUgfSBmcm9tICcuLi9yZWR1Y2Vycy9pbmRleCc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVxIH0pIHtcbiAgICBjb25zdCBpc1NlcnZlciA9ICEhcmVxO1xuICAgIGNvbnN0IHN0b3JlID0gaW5pdFN0b3JlKHJlZHVjZXIsIG51bGwsIGlzU2VydmVyKTtcbiAgICByZXR1cm4geyBpbml0aWFsU3RhdGU6IHN0b3JlLmdldFN0YXRlKCksIGlzU2VydmVyIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0b3JlID0gaW5pdFN0b3JlKHJlZHVjZXIsIHByb3BzLmluaXRpYWxTdGF0ZSwgcHJvcHMuaXNTZXJ2ZXIpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwibWFpblwiPlxuICAgICAgICA8ZGl2IGlkPVwiZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lclwiIC8+XG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17dGhpcy5zdG9yZX0+XG4gICAgICAgICAgPENhcmQgLz5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgPHN0eWxlPntgXG4gICAgICAgICAgI21haW4ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==