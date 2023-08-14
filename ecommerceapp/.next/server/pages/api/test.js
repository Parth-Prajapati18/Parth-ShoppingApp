"use strict";
(() => {
var exports = {};
exports.id = 318;
exports.ids = [318,312];
exports.modules = {

/***/ 517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  connection: () => (/* binding */ connection)
});

;// CONCATENATED MODULE: external "mysql2"
const external_mysql2_namespaceObject = require("mysql2");
var external_mysql2_default = /*#__PURE__*/__webpack_require__.n(external_mysql2_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/lib/data.js

const connection = external_mysql2_default().createConnection({
    host: "54.39.132.104",
    user: "devparthp_myApp_db",
    password: "B7KyDa%HrMu^2*hL@pIljxIT@k5v5ig&6Y#p$JsFKG#Bu2*WQOx&*Sb&QC#X2B0s73",
    database: "devparthp_dimondShop",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


/***/ }),

/***/ 3455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ test)
/* harmony export */ });
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(517);

async function test(req, res) {
    const [rows] = await _lib_data__WEBPACK_IMPORTED_MODULE_0__.connection.promise().query("SELECT * FROM `user_details`");
    return res.status(200).json(rows);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3455));
module.exports = __webpack_exports__;

})();