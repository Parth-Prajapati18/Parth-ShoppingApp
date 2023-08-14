"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "(api)/./pages/api/lib/data.js":
/*!*******************************!*\
  !*** ./pages/api/lib/data.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connection: () => (/* binding */ connection)\n/* harmony export */ });\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2 */ \"mysql2\");\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = mysql2__WEBPACK_IMPORTED_MODULE_0___default().createConnection({\n    host: \"54.39.132.104\",\n    user: \"devparthp_myApp_db\",\n    password: \"B7KyDa%HrMu^2*hL@pIljxIT@k5v5ig&6Y#p$JsFKG#Bu2*WQOx&*Sb&QC#X2B0s73\",\n    database: \"devparthp_dimondShop\",\n    waitForConnections: true,\n    connectionLimit: 10,\n    queueLimit: 0\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGliL2RhdGEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJCO0FBRXBCLE1BQU1DLGFBQWFELDhEQUFzQixDQUFDO0lBQzdDRyxNQUFNO0lBQ05DLE1BQU07SUFDTkMsVUFBVTtJQUNWQyxVQUFVO0lBQ1ZDLG9CQUFvQjtJQUNwQkMsaUJBQWlCO0lBQ2pCQyxZQUFZO0FBQ2hCLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2VhcHAvLi9wYWdlcy9hcGkvbGliL2RhdGEuanM/MjBmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyJztcclxuXHJcbmV4cG9ydCBjb25zdCBjb25uZWN0aW9uID0gbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgICBob3N0OiAnNTQuMzkuMTMyLjEwNCcsXHJcbiAgICB1c2VyOiAnZGV2cGFydGhwX215QXBwX2RiJyxcclxuICAgIHBhc3N3b3JkOiAnQjdLeURhJUhyTXVeMipoTEBwSWxqeElUQGs1djVpZyY2WSNwJEpzRktHI0J1MipXUU94JipTYiZRQyNYMkIwczczJyxcclxuICAgIGRhdGFiYXNlOiAnZGV2cGFydGhwX2RpbW9uZFNob3AnLFxyXG4gICAgd2FpdEZvckNvbm5lY3Rpb25zOiB0cnVlLFxyXG4gICAgY29ubmVjdGlvbkxpbWl0OiAxMCxcclxuICAgIHF1ZXVlTGltaXQ6IDAgICAgICAgIFxyXG59KTsiXSwibmFtZXMiOlsibXlzcWwiLCJjb25uZWN0aW9uIiwiY3JlYXRlQ29ubmVjdGlvbiIsImhvc3QiLCJ1c2VyIiwicGFzc3dvcmQiLCJkYXRhYmFzZSIsIndhaXRGb3JDb25uZWN0aW9ucyIsImNvbm5lY3Rpb25MaW1pdCIsInF1ZXVlTGltaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/lib/data.js\n");

/***/ }),

/***/ "(api)/./pages/api/products.js":
/*!*******************************!*\
  !*** ./pages/api/products.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/data */ \"(api)/./pages/api/lib/data.js\");\n\nasync function handler(req, res) {\n    const query = \"SELECT * FROM `products` \";\n    try {\n        const rows = await _lib_data__WEBPACK_IMPORTED_MODULE_0__.connection.promise().query(query);\n        return res.status(200).json({\n            Message: \"Okay\",\n            Products: rows[0]\n        });\n    } catch  {\n        return res.status(401).json({\n            Message: \"Internal Server Problem\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBd0M7QUFFekIsZUFBZUMsUUFBU0MsR0FBRyxFQUFFQyxHQUFHO0lBRTNDLE1BQU1DLFFBQVE7SUFFZCxJQUFJO1FBQ0EsTUFBTUMsT0FBTyxNQUFNTCxpREFBVUEsQ0FBQ00sT0FBTyxHQUFHRixLQUFLLENBQUNBO1FBQzlDLE9BQU9ELElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBQ0MsU0FBUztZQUFRQyxVQUFXTCxJQUFJLENBQUMsRUFBRTtRQUFBO0lBQ3BFLEVBQUcsT0FBTTtRQUNMLE9BQU9GLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBQ0MsU0FBVTtRQUF5QjtJQUNwRTtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlYXBwLy4vcGFnZXMvYXBpL3Byb2R1Y3RzLmpzPzQ5Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdGlvbiB9IGZyb20gXCIuL2xpYi9kYXRhXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyIChyZXEsIHJlcykge1xyXG5cclxuICAgIGNvbnN0IHF1ZXJ5ID0gJ1NFTEVDVCAqIEZST00gYHByb2R1Y3RzYCAnO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgcm93cyA9IGF3YWl0IGNvbm5lY3Rpb24ucHJvbWlzZSgpLnF1ZXJ5KHF1ZXJ5KVxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7TWVzc2FnZTogXCJPa2F5XCIsIFByb2R1Y3RzIDogcm93c1swXX0pXHJcbiAgICB9ICBjYXRjaCB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHtNZXNzYWdlIDogXCJJbnRlcm5hbCBTZXJ2ZXIgUHJvYmxlbVwifSlcclxuICAgIH1cclxuXHJcbn0iXSwibmFtZXMiOlsiY29ubmVjdGlvbiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJxdWVyeSIsInJvd3MiLCJwcm9taXNlIiwic3RhdHVzIiwianNvbiIsIk1lc3NhZ2UiLCJQcm9kdWN0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/products.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products.js"));
module.exports = __webpack_exports__;

})();