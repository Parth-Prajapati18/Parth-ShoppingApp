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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ order; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(app-pages-browser)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* eslint-disable @next/next/no-img-element */ /* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction order() {\n    _s();\n    const { push } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleClick = async (event)=>{\n        event.preventDefault();\n        const response = await fetch(\"/api/checkout\", {\n            method: \"POST\"\n        });\n        const data = await response.json();\n        push(\"\".concat(data.sessionUrl));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"boreder p-2\",\n            action: \"/api/checkout\",\n            method: \"POST\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                onSubmit: handleClick,\n                children: \"checkout\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Parth\\\\Parth-ShoppingApp\\\\ecommerceapp\\\\app\\\\order\\\\page.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Parth\\\\Parth-ShoppingApp\\\\ecommerceapp\\\\app\\\\order\\\\page.js\",\n            lineNumber: 21,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Parth\\\\Parth-ShoppingApp\\\\ecommerceapp\\\\app\\\\order\\\\page.js\",\n        lineNumber: 20,\n        columnNumber: 10\n    }, this);\n}\n_s(order, \"XcbUrA/aL/MBnMFoyOqNl+FGIz4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9vcmRlci9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDRDQUE0Qzs7QUFFbEI7QUFDYztBQUV6QixTQUFTRTs7SUFFdEIsTUFBTSxFQUFDQyxJQUFJLEVBQUMsR0FBR0Ysc0RBQVNBO0lBRXhCLE1BQU1HLGNBQWMsT0FBT0M7UUFDekJBLE1BQU1DLGNBQWM7UUFFcEIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGlCQUFpQjtZQUFDQyxRQUFRO1FBQU07UUFFN0QsTUFBTUMsT0FBTyxNQUFNSCxTQUFTSSxJQUFJO1FBRWhDUixLQUFLLEdBQW1CLE9BQWhCTyxLQUFLRSxVQUFVO0lBQ3pCO0lBRUEscUJBQU8sOERBQUNDO2tCQUNOLDRFQUFDQztZQUFLQyxXQUFVO1lBQWNDLFFBQU87WUFBZ0JQLFFBQU87c0JBQzFELDRFQUFDUTtnQkFBT0MsTUFBSztnQkFBU0MsVUFBVWY7MEJBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkQ7R0FwQndCRjs7UUFFUEQsa0RBQVNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9vcmRlci9wYWdlLmpzPzkxYTciXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1pbWctZWxlbWVudCAqL1xyXG5cInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3JkZXIoKXtcclxuXHJcbiAgY29uc3Qge3B1c2h9ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvY2hlY2tvdXQnLCB7bWV0aG9kOiAnUE9TVCd9KTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHB1c2goYCR7ZGF0YS5zZXNzaW9uVXJsfWApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gPGRpdj5cclxuICAgIDxmb3JtIGNsYXNzTmFtZT1cImJvcmVkZXIgcC0yXCIgYWN0aW9uPVwiL2FwaS9jaGVja291dFwiIG1ldGhvZD1cIlBPU1RcIj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25TdWJtaXQ9e2hhbmRsZUNsaWNrfT5jaGVja291dDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gIDwvZGl2PlxyXG5cclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsIm9yZGVyIiwicHVzaCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJkYXRhIiwianNvbiIsInNlc3Npb25VcmwiLCJkaXYiLCJmb3JtIiwiY2xhc3NOYW1lIiwiYWN0aW9uIiwiYnV0dG9uIiwidHlwZSIsIm9uU3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/order/page.js\n"));

/***/ })

});