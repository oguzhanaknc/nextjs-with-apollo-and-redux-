webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/PostUpvoter.js":
/*!***********************************!*\
  !*** ./components/PostUpvoter.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostUpvoter; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _atlaskit_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @atlaskit/button */ "./node_modules/@atlaskit/button/dist/esm/index.js");

var _jsxFileName = "C:\\Users\\oguzh\\OneDrive\\Masa\xFCst\xFC\\with-apollo\\components\\PostUpvoter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable  */



var votes;

var useCounter = function useCounter() {
  var count = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.count;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var increment = function increment(likes) {
    return dispatch({
      type: "INCREMENT",
      payload: likes
    });
  };

  return {
    count: count,
    increment: increment
  };
};

function PostUpvoter(_ref) {
  var id = _ref.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      count = _useState[0],
      setCount = _useState[1];

  var _useCounter = useCounter(0),
      counte = _useCounter.counte,
      increment = _useCounter.increment;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    votes = localStorage.getItem(id);
    setCount(votes);
  }, []);

  var upvotePost = function upvotePost(id) {
    localStorage.setItem(id, _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(count) + 1);
    increment(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(count) + 1);
    setCount(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(count) + 1);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_atlaskit_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    appearance: "primary",
    style: {
      width: "100%",
      paddingLeft: "45%",
      height: "35px",
      paddingBottom: "20%"
    },
    onClick: function onClick() {
      return upvotePost(id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, count)));
}

/***/ })

})
//# sourceMappingURL=index.js.b94d63479127c0539a6c.hot-update.js.map