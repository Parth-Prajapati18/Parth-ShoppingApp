"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/order/page",{

/***/ "(app-pages-browser)/./app/order/page.js":
/*!***************************!*\
  !*** ./app/order/page.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* eslint-disable @next/next/no-img-element */ /* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst handleCheckOut = (event)=>{\n    event.preventDefault();\n    return axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/api/checkout\");\n};\nconst ProductDisplay = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"m-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"product\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://i.imgur.com/EHyR2nP.png\",\n                        alt: \"The cover of Stubborn Attachments\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Parth\\\\Parth-ShoppingApp\\\\ecommerceapp\\\\app\\\\order\\\\page.js\",\n                        lineNumber: 14,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"description\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Stubborn Attachments\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Parth\\\\Parth-ShoppingApp\\\\ecommerceapp\\\\app\\\\order\\\\page.js\",\n                                lineNumber: 19,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                children: \"$20.00\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Parth\\\\Parth-ShoppingApp\\\\ecommerceapp\\\\app\\\\order\\\\page.js\",\n                                lineNumber: 20,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Parth\\\\Parth-ShoppingApp\\\\ecommerceapp\\\\app\\\\order\\\\page.js\",\n                        lineNumber: 18,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Parth\\\\Parth-ShoppingApp\\\\ecommerceapp\\\\app\\\\order\\\\page.js\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleCheckOut,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"border text-white bg-black p-2 font-bold w-1/3\",\n                    type: \"submit\",\n                    children: \"Checkout\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Parth\\\\Parth-ShoppingApp\\\\ecommerceapp\\\\app\\\\order\\\\page.js\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Parth\\\\Parth-ShoppingApp\\\\ecommerceapp\\\\app\\\\order\\\\page.js\",\n                lineNumber: 23,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Parth\\\\Parth-ShoppingApp\\\\ecommerceapp\\\\app\\\\order\\\\page.js\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, undefined);\n_c = ProductDisplay;\nconst Message = (param)=>/*#__PURE__*/ {\n    let { message } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: message\n        }, void 0, false, {\n            fileName: \"C:\\\\Parth\\\\Parth-ShoppingApp\\\\ecommerceapp\\\\app\\\\order\\\\page.js\",\n            lineNumber: 33,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Parth\\\\Parth-ShoppingApp\\\\ecommerceapp\\\\app\\\\order\\\\page.js\",\n        lineNumber: 32,\n        columnNumber: 3\n    }, undefined);\n};\n_c1 = Message;\nfunction App() {\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Check to see if this is a redirect back from Checkout\n        const query = new URLSearchParams(window.location.search);\n        if (query.get(\"success\")) {\n            setMessage(\"Order placed! You will receive an email confirmation.\");\n        }\n        if (query.get(\"canceled\")) {\n            setMessage(\"Order canceled -- continue to shop around and checkout when you're ready.\");\n        }\n    }, []);\n    return message ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Message, {\n        message: message\n    }, void 0, false, {\n        fileName: \"C:\\\\Parth\\\\Parth-ShoppingApp\\\\ecommerceapp\\\\app\\\\order\\\\page.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductDisplay, {}, void 0, false, {\n        fileName: \"C:\\\\Parth\\\\Parth-ShoppingApp\\\\ecommerceapp\\\\app\\\\order\\\\page.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"ClLa+zvPL6vd0LAuHSvav3BaFBg=\");\n_c2 = App;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ProductDisplay\");\n$RefreshReg$(_c1, \"Message\");\n$RefreshReg$(_c2, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9vcmRlci9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsNENBQTRDOztBQUVsQjtBQUN5QjtBQUVuRCxNQUFNSSxpQkFBaUIsQ0FBQ0M7SUFDdEJBLE1BQU1DLGNBQWM7SUFDcEIsT0FBT04sNkNBQUtBLENBQUNPLElBQUksQ0FBQztBQUNwQjtBQUVBLE1BQU1DLGlCQUFpQixrQkFDckIsOERBQUNDO1FBQVFDLFdBQVU7OzBCQUNqQiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFDQ0MsS0FBSTt3QkFDSkMsS0FBSTs7Ozs7O2tDQUVOLDhEQUFDSDt3QkFBSUQsV0FBVTs7MENBQ2YsOERBQUNLOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNDOzBDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR04sOERBQUNDO2dCQUFLQyxVQUFVZDswQkFDZCw0RUFBQ2U7b0JBQU9ULFdBQVU7b0JBQWlEVSxNQUFLOzhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztLQWJqRlo7QUFvQk4sTUFBTWEsVUFBVTtRQUFDLEVBQUVDLE9BQU8sRUFBRTtXQUMxQiw4REFBQ2I7a0JBQ0MsNEVBQUNjO3NCQUFHRDs7Ozs7Ozs7Ozs7QUFDRztNQUhMRDtBQU1TLFNBQVNHOztJQUN0QixNQUFNLENBQUNGLFNBQVNHLFdBQVcsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBRXZDQyxnREFBU0EsQ0FBQztRQUNSLHdEQUF3RDtRQUN4RCxNQUFNdUIsUUFBUSxJQUFJQyxnQkFBZ0JDLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtRQUV4RCxJQUFJSixNQUFNSyxHQUFHLENBQUMsWUFBWTtZQUN4Qk4sV0FBVztRQUNiO1FBRUEsSUFBSUMsTUFBTUssR0FBRyxDQUFDLGFBQWE7WUFDekJOLFdBQ0U7UUFFSjtJQUNGLEdBQUcsRUFBRTtJQUVMLE9BQU9ILHdCQUNMLDhEQUFDRDtRQUFRQyxTQUFTQTs7Ozs7NkJBRWxCLDhEQUFDZDs7Ozs7QUFFTDtHQXZCd0JnQjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvb3JkZXIvcGFnZS5qcz85MWE3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cclxuXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgaGFuZGxlQ2hlY2tPdXQgPSAoZXZlbnQpID0+IHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2NoZWNrb3V0JylcclxufVxyXG5cclxuY29uc3QgUHJvZHVjdERpc3BsYXkgPSAoKSA9PiAoXHJcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibS0xMFwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0XCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCJodHRwczovL2kuaW1ndXIuY29tL0VIeVIyblAucG5nXCJcclxuICAgICAgICBhbHQ9XCJUaGUgY292ZXIgb2YgU3R1YmJvcm4gQXR0YWNobWVudHNcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgIDxoMz5TdHViYm9ybiBBdHRhY2htZW50czwvaDM+XHJcbiAgICAgIDxoNT4kMjAuMDA8L2g1PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUNoZWNrT3V0fT5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgdGV4dC13aGl0ZSBiZy1ibGFjayBwLTIgZm9udC1ib2xkIHctMS8zXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgIENoZWNrb3V0XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gIDwvc2VjdGlvbj5cclxuKTtcclxuXHJcbmNvbnN0IE1lc3NhZ2UgPSAoeyBtZXNzYWdlIH0pID0+IChcclxuICA8c2VjdGlvbj5cclxuICAgIDxwPnttZXNzYWdlfTwvcD5cclxuICA8L3NlY3Rpb24+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhpcyBpcyBhIHJlZGlyZWN0IGJhY2sgZnJvbSBDaGVja291dFxyXG4gICAgY29uc3QgcXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG5cclxuICAgIGlmIChxdWVyeS5nZXQoXCJzdWNjZXNzXCIpKSB7XHJcbiAgICAgIHNldE1lc3NhZ2UoXCJPcmRlciBwbGFjZWQhIFlvdSB3aWxsIHJlY2VpdmUgYW4gZW1haWwgY29uZmlybWF0aW9uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocXVlcnkuZ2V0KFwiY2FuY2VsZWRcIikpIHtcclxuICAgICAgc2V0TWVzc2FnZShcclxuICAgICAgICBcIk9yZGVyIGNhbmNlbGVkIC0tIGNvbnRpbnVlIHRvIHNob3AgYXJvdW5kIGFuZCBjaGVja291dCB3aGVuIHlvdSdyZSByZWFkeS5cIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIG1lc3NhZ2UgPyAoXHJcbiAgICA8TWVzc2FnZSBtZXNzYWdlPXttZXNzYWdlfSAvPlxyXG4gICkgOiAoXHJcbiAgICA8UHJvZHVjdERpc3BsYXkgLz5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbImF4aW9zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImhhbmRsZUNoZWNrT3V0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJQcm9kdWN0RGlzcGxheSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJpbWciLCJzcmMiLCJhbHQiLCJoMyIsImg1IiwiZm9ybSIsIm9uU3VibWl0IiwiYnV0dG9uIiwidHlwZSIsIk1lc3NhZ2UiLCJtZXNzYWdlIiwicCIsIkFwcCIsInNldE1lc3NhZ2UiLCJxdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/order/page.js\n"));

/***/ })

});