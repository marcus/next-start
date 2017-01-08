'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('/Users/marcus.vorwaller/Dropbox/Code/quote/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require('/Users/marcus.vorwaller/Dropbox/Code/quote/node_modules/babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _objectWithoutProperties2 = require('/Users/marcus.vorwaller/Dropbox/Code/quote/node_modules/babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = thunk;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function thunk(_ref) {
  var dispatch = _ref.dispatch,
      getState = _ref.getState;

  return function (next) {
    return function (action) {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }

      var promise = action.promise,
          types = action.types,
          rest = (0, _objectWithoutProperties3.default)(action, ['promise', 'types']);

      if (!promise) {
        return next(action);
      }

      var _types = (0, _slicedToArray3.default)(types, 3),
          REQUEST = _types[0],
          SUCCESS = _types[1],
          FAILURE = _types[2];

      next((0, _extends3.default)({}, rest, { type: REQUEST }));
      return promise().then(function (result) {
        return next((0, _extends3.default)({}, rest, { result: result, type: SUCCESS }));
      }, function (error) {
        return next((0, _extends3.default)({}, rest, { error: error, type: FAILURE }));
      }).catch(function (error) {
        console.error('MIDDLEWARE ERROR:', error.stack);
        next((0, _extends3.default)({}, rest, { error: error, type: FAILURE }));
      });
    };
  };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi90aHVuay1taWRkbGV3YXJlLmpzIl0sIm5hbWVzIjpbInRodW5rIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsImFjdGlvbiIsInByb21pc2UiLCJ0eXBlcyIsInJlc3QiLCJuZXh0IiwiUkVRVUVTVCIsIlNVQ0NFU1MiLCJGQUlMVVJFIiwidHlwZSIsInRoZW4iLCJyZXN1bHQiLCJlcnJvciIsImNhdGNoIiwiY29uc29sZSIsInN0YWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBQXdCQSxLOzs7O0FBQVQsU0FBU0EsS0FBVCxPQUF1QztBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQ3BELFNBQU87QUFBQSxXQUFRLGtCQUFVO0FBQ3ZCLFVBQUksT0FBT0MsTUFBUCxLQUFrQixVQUF0QixFQUFrQztBQUNoQyxlQUFPQSxPQUFPRixRQUFQLEVBQWlCQyxRQUFqQixDQUFQO0FBQ0Q7O0FBSHNCLFVBS2ZFLE9BTGUsR0FLYUQsTUFMYixDQUtmQyxPQUxlO0FBQUEsVUFLTkMsS0FMTSxHQUthRixNQUxiLENBS05FLEtBTE07QUFBQSxVQUtJQyxJQUxKLDBDQUthSCxNQUxiOztBQU12QixVQUFJLENBQUNDLE9BQUwsRUFBYztBQUNaLGVBQU9HLEtBQUtKLE1BQUwsQ0FBUDtBQUNEOztBQVJzQixnREFVYUUsS0FWYjtBQUFBLFVBVWhCRyxPQVZnQjtBQUFBLFVBVVBDLE9BVk87QUFBQSxVQVVFQyxPQVZGOztBQVd2Qkgsc0NBQVNELElBQVQsSUFBZUssTUFBTUgsT0FBckI7QUFDQSxhQUFPSixVQUFVUSxJQUFWLENBQ0wsVUFBQ0MsTUFBRDtBQUFBLGVBQVlOLGdDQUFTRCxJQUFULElBQWVPLGNBQWYsRUFBdUJGLE1BQU1GLE9BQTdCLElBQVo7QUFBQSxPQURLLEVBRUwsVUFBQ0ssS0FBRDtBQUFBLGVBQVdQLGdDQUFTRCxJQUFULElBQWVRLFlBQWYsRUFBc0JILE1BQU1ELE9BQTVCLElBQVg7QUFBQSxPQUZLLEVBR0xLLEtBSEssQ0FHQyxVQUFDRCxLQUFELEVBQVU7QUFDaEJFLGdCQUFRRixLQUFSLENBQWMsbUJBQWQsRUFBbUNBLE1BQU1HLEtBQXpDO0FBQ0FWLHdDQUFTRCxJQUFULElBQWVRLFlBQWYsRUFBc0JILE1BQU1ELE9BQTVCO0FBQ0QsT0FOTSxDQUFQO0FBT0QsS0FuQk07QUFBQSxHQUFQO0FBb0JEIiwiZmlsZSI6InRodW5rLW1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmN1cy52b3J3YWxsZXIvRHJvcGJveC9Db2RlL3F1b3RlIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGh1bmsoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkge1xuICByZXR1cm4gbmV4dCA9PiBhY3Rpb24gPT4ge1xuICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gYWN0aW9uKGRpc3BhdGNoLCBnZXRTdGF0ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBwcm9taXNlLCB0eXBlcywgLi4ucmVzdCB9ID0gYWN0aW9uO1xuICAgIGlmICghcHJvbWlzZSkge1xuICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBbUkVRVUVTVCwgU1VDQ0VTUywgRkFJTFVSRV0gPSB0eXBlcztcbiAgICBuZXh0KHsuLi5yZXN0LCB0eXBlOiBSRVFVRVNUfSk7XG4gICAgcmV0dXJuIHByb21pc2UoKS50aGVuKFxuICAgICAgKHJlc3VsdCkgPT4gbmV4dCh7Li4ucmVzdCwgcmVzdWx0LCB0eXBlOiBTVUNDRVNTfSksXG4gICAgICAoZXJyb3IpID0+IG5leHQoey4uLnJlc3QsIGVycm9yLCB0eXBlOiBGQUlMVVJFfSlcbiAgICApLmNhdGNoKChlcnJvcik9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdNSURETEVXQVJFIEVSUk9SOicsIGVycm9yLnN0YWNrKTtcbiAgICAgIG5leHQoey4uLnJlc3QsIGVycm9yLCB0eXBlOiBGQUlMVVJFfSk7XG4gICAgfSk7XG4gIH07XG59XG4iXX0=