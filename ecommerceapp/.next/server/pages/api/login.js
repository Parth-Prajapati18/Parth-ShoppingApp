"use strict";
(() => {
var exports = {};
exports.id = 994;
exports.ids = [994,312];
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

/***/ 4193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./pages/api/lib/data.js + 1 modules
var data = __webpack_require__(517);
// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__(7096);
var external_bcrypt_default = /*#__PURE__*/__webpack_require__.n(external_bcrypt_);
;// CONCATENATED MODULE: external "jsonwebtoken"
const external_jsonwebtoken_namespaceObject = require("jsonwebtoken");
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/login.js



async function handler(req, res) {
    try {
        const { email, password } = req.body;
        const [rows] = await data.connection.promise().query("SELECT * FROM `user_details` WHERE email = ?", [
            email
        ]);
        if (rows.length === 0) {
            return res.status(401).json({
                Message: "User not found"
            });
        }
        const hash = rows[0].password;
        const result = await external_bcrypt_default().compare(password, hash);
        if (result) {
            const token = external_jsonwebtoken_default().sign({
                user: rows[0]
            }, "eyJSb2xlIjoiQWRta1ZXIiLCJVc2VybmFtZSI6W4iLCJJ3NIkphdmFJblVzZSIsImV4cCI6MTY5MTk0OD", {
                expiresIn: "1h"
            });
            return res.status(200).json({
                Message: true,
                user: rows[0],
                token: token
            });
        } else {
            return res.status(200).json({
                Message: false
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            Message: "Internal Server Error"
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
var __webpack_exports__ = (__webpack_exec__(4193));
module.exports = __webpack_exports__;

})();