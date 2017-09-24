webpackJsonp([0],{

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reducers__);




const createStore = (initialState = {}) => {
  
  const store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(
    Object(__WEBPACK_IMPORTED_MODULE_1__reducers__["default"])(),
    initialState
  )

  store.asyncReducers = {}
  

  if (false) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}

/* harmony default export */ __webpack_exports__["default"] = (createStore);

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

throw new Error("Module parse failed: C:\\LocalDev\\light-mail-client\\store\\reducers.js Unexpected token (7:4)\nYou may need an appropriate loader to handle this file type.\n|   return combineReducers({\r\n|     articleList: articleListReducer,\r\n|     ...asyncReducers\r\n|   })\r\n| }\r");

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
    return _react2.default.createElement(
        'div',
        null,
        'Hello world!'
    );
};

exports.default = App;

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(55);

var _createStore = __webpack_require__(183);

var _createStore2 = _interopRequireDefault(_createStore);

var _App = __webpack_require__(200);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _createStore2.default)();

var div = document.createElement('div');
document.body.append(div);

var render = function render() {
    _reactDom.ReactDOM.render(_react2.default.createElement(_App2.default, null), div);
};

store.subscribe(render);
render();

/***/ })

},[92]);