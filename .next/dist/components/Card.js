'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = undefined;

var _extends2 = require('/Users/marcus.vorwaller/Dropbox/Code/quote/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _slate = require('slate');

var _reactRedux = require('react-redux');

var _prompts = require('../reducers/prompts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = _slate.Raw.deserialize({
  nodes: [{
    kind: 'block',
    type: 'paragraph',
    nodes: [{
      kind: 'text',
      text: 'Type here'
    }]
  }]
}, { terse: true });

var Card = exports.Card = function (_React$Component) {
  (0, _inherits3.default)(Card, _React$Component);

  function Card() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Card);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Card.__proto__ || (0, _getPrototypeOf2.default)(Card)).call.apply(_ref, [this].concat(args))), _this), _this.state = (0, _extends3.default)({}, initialState, {
      prompts: "default"
    }), _this.onChange = function (state) {
      _this.setState({ state: state });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Card, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      //this.props.getPrompts();
    }
  }, {
    key: 'render',


    //<Editor
    //state={this.state.state}
    //onChange={this.onChange}
    ///>
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'card', 'data-jsx': 2068672131
        },
        _react2.default.createElement(
          'div',
          {
            'data-jsx': 2068672131
          },
          _react2.default.createElement(
            'span',
            { className: 'title', 'data-jsx': 2068672131
            },
            'Teach me about'
          ),
          ' ',
          _react2.default.createElement(
            'span',
            { className: 'subject', 'data-jsx': 2068672131
            },
            this.props.prompt
          )
        ),
        _react2.default.createElement('div', { className: 'editor', 'data-jsx': 2068672131
        }),
        _react2.default.createElement(_style2.default, {
          styleId: 2068672131,
          css: '.card[data-jsx="2068672131"] {background-color: white;padding: 15px;width: 98%;max-width: 1100px;height: 98%;overflow: auto;}.title[data-jsx="2068672131"] {font-size: 2.0em;color: #95989A;}.subject[data-jsx="2068672131"]{font-size: 2.0em;color: #32D900;}.editor[data-jsx="2068672131"] {margin-top: 10px;font-size: 2.2em;line-height: 1.2em;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRG9CLEFBQ0gsOEJBQ21CLHdCQUNJLEFBQ2QsY0FDSCxXQUNPLGtCQUNOLFlBQ0csZUFDaEIsQ0FDTywrQkFDVyxpQkFDRixlQUNoQixDQUNRLGdDQUNVLGlCQUNGLGVBQ2hCLENBQ1EsZ0NBQ1UsaUJBQ0EsaUJBQ0UsbUJBQ3BCIiwiZmlsZSI6ImNvbXBvbmVudHMvQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFyY3VzLnZvcndhbGxlci9Ecm9wYm94L0NvZGUvcXVvdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBFZGl0b3IsIFJhdyB9IGZyb20gJ3NsYXRlJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGdldFByb21wdHMgfSBmcm9tICcuLi9yZWR1Y2Vycy9wcm9tcHRzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gUmF3LmRlc2VyaWFsaXplKHtcbiAgbm9kZXM6IFtcbiAgICB7XG4gICAgICBraW5kOiAnYmxvY2snLFxuICAgICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgICBub2RlczogW1xuICAgICAgICB7XG4gICAgICAgICAga2luZDogJ3RleHQnLFxuICAgICAgICAgIHRleHQ6ICdUeXBlIGhlcmUnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0sIHsgdGVyc2U6IHRydWUgfSk7XG5cbmV4cG9ydCBjbGFzcyBDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgLi4uaW5pdGlhbFN0YXRlLFxuICAgIHByb21wdHM6IFwiZGVmYXVsdFwiLFxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIC8vdGhpcy5wcm9wcy5nZXRQcm9tcHRzKCk7XG4gIH1cblxuICBvbkNoYW5nZSA9IChzdGF0ZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0ZSB9KVxuICB9XG5cbiAgICAgICAgICAvLzxFZGl0b3JcbiAgICAgICAgICAgIC8vc3RhdGU9e3RoaXMuc3RhdGUuc3RhdGV9XG4gICAgICAgICAgICAvL29uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIC8vLz5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5UZWFjaCBtZSBhYm91dDwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwic3ViamVjdFwiPnt0aGlzLnByb3BzLnByb21wdH08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdG9yXCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIC8vYm9yZGVyOiAxcHggc29saWQgIzM5MzczNjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICB3aWR0aDogOTglO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMTAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDk4JTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjBlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjOTU5ODlBO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3ViamVjdHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4wZW07XG4gICAgICAgICAgICBjb2xvcjogIzMyRDkwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmVkaXRvciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+ICh7XG4gIHByb21wdHM6IHN0YXRlLnByb21wdHMsXG4gIHByb21wdDogc3RhdGUucHJvbXB0LFxufSksIHsgZ2V0UHJvbXB0cyB9KShDYXJkKTtcbiJdfQ== */\n/*@ sourceURL=components/Card.js */'
        })
      );
    }
  }]);
  return Card;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    prompts: state.prompts,
    prompt: state.prompt
  };
}, { getPrompts: _prompts.getPrompts })(Card);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FyZC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJkZXNlcmlhbGl6ZSIsIm5vZGVzIiwia2luZCIsInR5cGUiLCJ0ZXh0IiwidGVyc2UiLCJDYXJkIiwic3RhdGUiLCJwcm9tcHRzIiwib25DaGFuZ2UiLCJzZXRTdGF0ZSIsInByb3BzIiwicHJvbXB0IiwiQ29tcG9uZW50IiwiZ2V0UHJvbXB0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsZUFBZSxXQUFJQyxXQUFKLENBQWdCO0FBQ25DQyxTQUFPLENBQ0w7QUFDRUMsVUFBTSxPQURSO0FBRUVDLFVBQU0sV0FGUjtBQUdFRixXQUFPLENBQ0w7QUFDRUMsWUFBTSxNQURSO0FBRUVFLFlBQU07QUFGUixLQURLO0FBSFQsR0FESztBQUQ0QixDQUFoQixFQWFsQixFQUFFQyxPQUFPLElBQVQsRUFia0IsQ0FBckI7O0lBZWFDLEksV0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7d01BQ1hDLEssOEJBQ0tSLFk7QUFDSFMsZUFBUztjQU9YQyxRLEdBQVcsVUFBQ0YsS0FBRCxFQUFXO0FBQ3BCLFlBQUtHLFFBQUwsQ0FBYyxFQUFFSCxZQUFGLEVBQWQ7QUFDRCxLOzs7Ozt5Q0FOb0I7QUFDbkI7QUFDRDs7Ozs7QUFNTztBQUNFO0FBQ0E7QUFDRjs2QkFDRTtBQUNSLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxNQUFmO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQU0sV0FBVSxPQUFoQjtBQUFBO0FBQUE7QUFBQSxXQURGO0FBQUE7QUFDZ0Q7QUFBQTtBQUFBLGNBQU0sV0FBVSxTQUFoQjtBQUFBO0FBQTJCLGlCQUFLSSxLQUFMLENBQVdDO0FBQXRDO0FBRGhELFNBREY7QUFLRSwrQ0FBSyxXQUFVLFFBQWY7QUFBQSxVQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBbUNEOzs7RUF0RHVCLGdCQUFNQyxTOztrQkF5RGpCLHlCQUFRO0FBQUEsU0FBVTtBQUMvQkwsYUFBU0QsTUFBTUMsT0FEZ0I7QUFFL0JJLFlBQVFMLE1BQU1LO0FBRmlCLEdBQVY7QUFBQSxDQUFSLEVBR1gsRUFBRUUsK0JBQUYsRUFIVyxFQUdLUixJQUhMLEMiLCJmaWxlIjoiQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFyY3VzLnZvcndhbGxlci9Ecm9wYm94L0NvZGUvcXVvdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBFZGl0b3IsIFJhdyB9IGZyb20gJ3NsYXRlJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGdldFByb21wdHMgfSBmcm9tICcuLi9yZWR1Y2Vycy9wcm9tcHRzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gUmF3LmRlc2VyaWFsaXplKHtcbiAgbm9kZXM6IFtcbiAgICB7XG4gICAgICBraW5kOiAnYmxvY2snLFxuICAgICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgICBub2RlczogW1xuICAgICAgICB7XG4gICAgICAgICAga2luZDogJ3RleHQnLFxuICAgICAgICAgIHRleHQ6ICdUeXBlIGhlcmUnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0sIHsgdGVyc2U6IHRydWUgfSk7XG5cbmV4cG9ydCBjbGFzcyBDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgLi4uaW5pdGlhbFN0YXRlLFxuICAgIHByb21wdHM6IFwiZGVmYXVsdFwiLFxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIC8vdGhpcy5wcm9wcy5nZXRQcm9tcHRzKCk7XG4gIH1cblxuICBvbkNoYW5nZSA9IChzdGF0ZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0ZSB9KVxuICB9XG5cbiAgICAgICAgICAvLzxFZGl0b3JcbiAgICAgICAgICAgIC8vc3RhdGU9e3RoaXMuc3RhdGUuc3RhdGV9XG4gICAgICAgICAgICAvL29uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIC8vLz5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5UZWFjaCBtZSBhYm91dDwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwic3ViamVjdFwiPnt0aGlzLnByb3BzLnByb21wdH08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdG9yXCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIC8vYm9yZGVyOiAxcHggc29saWQgIzM5MzczNjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICB3aWR0aDogOTglO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMTAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDk4JTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjBlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjOTU5ODlBO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3ViamVjdHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4wZW07XG4gICAgICAgICAgICBjb2xvcjogIzMyRDkwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmVkaXRvciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+ICh7XG4gIHByb21wdHM6IHN0YXRlLnByb21wdHMsXG4gIHByb21wdDogc3RhdGUucHJvbXB0LFxufSksIHsgZ2V0UHJvbXB0cyB9KShDYXJkKTtcbiJdfQ==