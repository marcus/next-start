'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;

var _extends2 = require('/Users/marcus.vorwaller/Dropbox/Code/quote/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _prompts = require('./prompts');

var _prompts2 = _interopRequireDefault(_prompts);

var _redux = require('redux');

var _thunkMiddleware = require('../lib/thunk-middleware');

var _thunkMiddleware2 = _interopRequireDefault(_thunkMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  prompts: _prompts2.default
});
var initStore = exports.initStore = function initStore(reducer) {
  var is = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isServer = arguments[2];

  var initialState = (0, _extends3.default)({}, {
    prompts: (0, _prompts2.default)()
  });

  if (isServer && typeof window === 'undefined') {
    return (0, _redux.createStore)(reducer, initialState, (0, _redux.applyMiddleware)(_thunkMiddleware2.default));
  } else {
    if (!window.store) {
      window.store = (0, _redux.createStore)(reducer, initialState, (0, _redux.compose)((0, _redux.applyMiddleware)(_thunkMiddleware2.default), window.devToolsExtension ? window.devToolsExtension({
        actionsBlacklist: ['LOAD_ALERTS', 'LOAD_ALERTS_SUCCESS']
      }) : function (f) {
        return f;
      }));
    }
    return window.store;
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbInByb21wdHMiLCJpbml0U3RvcmUiLCJyZWR1Y2VyIiwiaXMiLCJpc1NlcnZlciIsImluaXRpYWxTdGF0ZSIsIndpbmRvdyIsInN0b3JlIiwiZGV2VG9vbHNFeHRlbnNpb24iLCJhY3Rpb25zQmxhY2tsaXN0IiwiZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7a0JBRWUsNEJBQWdCO0FBQzdCQTtBQUQ2QixDQUFoQixDO0FBSVIsSUFBTUMsZ0NBQVksU0FBWkEsU0FBWSxDQUFDQyxPQUFELEVBQThCO0FBQUEsTUFBcEJDLEVBQW9CLHVFQUFqQixFQUFpQjtBQUFBLE1BQWJDLFFBQWE7O0FBQ3JELE1BQU1DLHNDQUNELEVBREM7QUFFSkwsYUFBUztBQUZMLElBQU47O0FBS0EsTUFBSUksWUFBWSxPQUFPRSxNQUFQLEtBQWtCLFdBQWxDLEVBQStDO0FBQzdDLFdBQU8sd0JBQVlKLE9BQVosRUFBcUJHLFlBQXJCLEVBQW1DLHNEQUFuQyxDQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsUUFBSSxDQUFDQyxPQUFPQyxLQUFaLEVBQW1CO0FBQ2pCRCxhQUFPQyxLQUFQLEdBQWUsd0JBQVlMLE9BQVosRUFBcUJHLFlBQXJCLEVBQ2Isb0JBQ0Usc0RBREYsRUFFRUMsT0FBT0UsaUJBQVAsR0FBMkJGLE9BQU9FLGlCQUFQLENBQXlCO0FBQ2xEQywwQkFBa0IsQ0FBQyxhQUFELEVBQWdCLHFCQUFoQjtBQURnQyxPQUF6QixDQUEzQixHQUVLO0FBQUEsZUFBS0MsQ0FBTDtBQUFBLE9BSlAsQ0FEYSxDQUFmO0FBT0M7QUFDSCxXQUFPSixPQUFPQyxLQUFkO0FBQ0Q7QUFDRixDQXBCTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFyY3VzLnZvcndhbGxlci9Ecm9wYm94L0NvZGUvcXVvdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvbXB0cyBmcm9tICcuL3Byb21wdHMnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJy4uL2xpYi90aHVuay1taWRkbGV3YXJlJztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgcHJvbXB0cyxcbn0pO1xuXG5leHBvcnQgY29uc3QgaW5pdFN0b3JlID0gKHJlZHVjZXIsIGlzPXt9LCBpc1NlcnZlcikgPT4ge1xuICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgLi4ue30sXG4gICAgcHJvbXB0czogcHJvbXB0cygpLFxuICB9O1xuXG4gIGlmIChpc1NlcnZlciAmJiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKVxuICB9IGVsc2Uge1xuICAgIGlmICghd2luZG93LnN0b3JlKSB7XG4gICAgICB3aW5kb3cuc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUsXG4gICAgICAgIGNvbXBvc2UoXG4gICAgICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSksXG4gICAgICAgICAgd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uID8gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uKHtcbiAgICAgICAgICAgIGFjdGlvbnNCbGFja2xpc3Q6IFsnTE9BRF9BTEVSVFMnLCAnTE9BRF9BTEVSVFNfU1VDQ0VTUyddLFxuICAgICAgICAgIH0pIDogZiA9PiBmXG4gICAgICAgICkpO1xuICAgICAgfVxuICAgIHJldHVybiB3aW5kb3cuc3RvcmVcbiAgfVxufTtcblxuIl19