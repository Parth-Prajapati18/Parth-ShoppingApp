"use strict";
(() => {
var exports = {};
exports.id = 964;
exports.ids = [964,312];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

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

/***/ 3460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(517);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);


async function handler(req, res) {
    if (req.method === "GET") {
        try {
            return res.status(200).json({
                Message: "GET Request Success"
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                Message: "GET Request Error"
            });
        }
    } else if (req.method === "POST") {
        try {
            const { firstName, lastName, email, password, aptName, streetName, city, province, country, postalCode, mobileNumber, acceptTerms } = req.body;
            const saltRounds = 10;
            const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hash(password, saltRounds);
            await _lib_data__WEBPACK_IMPORTED_MODULE_0__.connection.promise().query("INSERT INTO user_details (firstName, lastName, email, mobileNumber, password, aptName, streetName, city, province, country, postalCode, acceptTerm) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
                firstName,
                lastName,
                email,
                mobileNumber,
                hashedPassword,
                aptName,
                streetName,
                city,
                province,
                country,
                postalCode,
                acceptTerms
            ]);
            return res.status(200).json({
                Message: "POST Request Success"
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                Message: "POST Request SQL Error"
            });
        }
    } else {
        return res.status(405).json({
            Message: "Method Not Allowed"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3460));
module.exports = __webpack_exports__;

})();