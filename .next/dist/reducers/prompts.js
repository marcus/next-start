"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("/Users/marcus.vorwaller/Dropbox/Code/quote/node_modules/babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = prompts;
exports.getPrompts = getPrompts;

var _actionTypes = require("./action-types");

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  prompt: "def"
};

function prompts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _actionTypes2.default.GET_PROMPTS:
      return (0, _extends3.default)({}, state);

    case _actionTypes2.default.GET_PROMPTS_SUCCESS:
      //console.log("action.result", action.result);
      return (0, _extends3.default)({}, state, {
        prompt: action.result
      });

    case _actionTypes2.default.GET_PROMPTS_FAIL:
      return (0, _extends3.default)({}, state);

    default:
      return state;
  }
}

function getPrompts() {
  return {
    types: [_actionTypes2.default.GET_PROMPTS, _actionTypes2.default.GET_PROMPTS_SUCCESS, _actionTypes2.default.GET_PROMPTS_FAIL]

  };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL3Byb21wdHMuanMiXSwibmFtZXMiOlsicHJvbXB0cyIsImdldFByb21wdHMiLCJpbml0aWFsU3RhdGUiLCJwcm9tcHQiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJHRVRfUFJPTVBUUyIsIkdFVF9QUk9NUFRTX1NVQ0NFU1MiLCJyZXN1bHQiLCJHRVRfUFJPTVBUU19GQUlMIiwidHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0JBTXdCQSxPO1FBd0JSQyxVLEdBQUFBLFU7O0FBOUJoQjs7Ozs7O0FBRUEsSUFBTUMsZUFBZTtBQUNuQkMsVUFBUTtBQURXLENBQXJCOztBQUllLFNBQVNILE9BQVQsR0FBb0Q7QUFBQSxNQUFuQ0ksS0FBbUMsdUVBQTNCRixZQUEyQjtBQUFBLE1BQWJHLE1BQWEsdUVBQUosRUFBSTs7QUFDakUsVUFBUUEsT0FBT0MsSUFBZjtBQUNFLFNBQUssc0JBQU1DLFdBQVg7QUFDRSx3Q0FDS0gsS0FETDs7QUFJRixTQUFLLHNCQUFNSSxtQkFBWDtBQUNFO0FBQ0Esd0NBQ0tKLEtBREw7QUFFRUQsZ0JBQVFFLE9BQU9JO0FBRmpCOztBQUtGLFNBQUssc0JBQU1DLGdCQUFYO0FBQ0Usd0NBQ0tOLEtBREw7O0FBSUY7QUFDRSxhQUFPQSxLQUFQO0FBbkJKO0FBcUJEOztBQUVNLFNBQVNILFVBQVQsR0FBc0I7QUFDM0IsU0FBTztBQUNMVSxXQUFPLENBQUMsc0JBQU1KLFdBQVAsRUFBb0Isc0JBQU1DLG1CQUExQixFQUErQyxzQkFBTUUsZ0JBQXJEOztBQURGLEdBQVA7QUFTRCIsImZpbGUiOiJwcm9tcHRzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJjdXMudm9yd2FsbGVyL0Ryb3Bib3gvQ29kZS9xdW90ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlcyBmcm9tICcuL2FjdGlvbi10eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgcHJvbXB0OiBcImRlZlwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvbXB0cyhzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgdHlwZXMuR0VUX1BST01QVFM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG5cbiAgICBjYXNlIHR5cGVzLkdFVF9QUk9NUFRTX1NVQ0NFU1M6XG4gICAgICAvL2NvbnNvbGUubG9nKFwiYWN0aW9uLnJlc3VsdFwiLCBhY3Rpb24ucmVzdWx0KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9tcHQ6IGFjdGlvbi5yZXN1bHQsXG4gICAgICB9XG5cbiAgICBjYXNlIHR5cGVzLkdFVF9QUk9NUFRTX0ZBSUw6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb21wdHMoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZXM6IFt0eXBlcy5HRVRfUFJPTVBUUywgdHlwZXMuR0VUX1BST01QVFNfU1VDQ0VTUywgdHlwZXMuR0VUX1BST01QVFNfRkFJTF0sXG5cbiAgICAvL3Byb21pc2U6ICgpID0+IGRiKCkucmVmKCcvb25lLycpLm9uY2UoJ3ZhbHVlJykudGhlbigoc25hcHNob3QpID0+IHtcbiAgICAgIC8vdmFyIGRhdGEgPSBzbmFwc2hvdC52YWwoKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJHb3QgZGF0YVwiLCBkYXRhKTtcbiAgICAgIC8vcmV0dXJuIGRhdGE7XG4gICAgLy99KS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhcIkVSUlwiLCBlcnIpKSxcbiAgfTtcbn1cbiJdfQ==