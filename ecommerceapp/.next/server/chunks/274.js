exports.id = 274;
exports.ids = [274];
exports.modules = {

/***/ 6349:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3269));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2410))

/***/ }),

/***/ 3269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1061);
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7935);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_globals_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2410);
/* __next_internal_client_entry_do_not_use__ default auto */ 






function Navbar() {
    const { userLogin, setIsLogin, setUserObj, user } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_app_globals_context__WEBPACK_IMPORTED_MODULE_4__.globalContext);
    const [isSidebarOpen, setIsSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const profileDropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const toggleSidebar = ()=>{
        setIsSidebarOpen(!isSidebarOpen);
    };
    const toggleProfileDropdown = ()=>{
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
        // Disable scrolling when the profile dropdown is open
        if (!isProfileDropdownOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handleClickOutside = (event)=>{
            if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
                setIsProfileDropdownOpen(false);
            }
        };
        if (isProfileDropdownOpen) {
            document.addEventListener("click", handleClickOutside);
        }
        return ()=>{
            document.removeEventListener("click", handleClickOutside);
        };
    }, [
        isProfileDropdownOpen
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: "flex bg-white md:grid md:grid-cols-3 px-[3%] md:px-[5%] xl:px-[8%] py-5 md:py-2 justify-between items-center sticky top-0 z-[100] shadow md:shadow-none drop-shadow-md",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid md:hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "text-black font-extralight hover:text-teal-500 duration-200 ease-in-out transition-colors",
                    onClick: toggleSidebar,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_rx__WEBPACK_IMPORTED_MODULE_5__/* .RxHamburgerMenu */ .Bbf, {
                        className: "text-3xl"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `md:hidden fixed top-0 right-0 bottom-0 left-0 w-screen h-screen bg-white z-[101] transition-transform ${isSidebarOpen ? "transform translate-x-0" : "hidden"}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "text-black font-extralight hover:text-teal-500 duration-200 ease-in-out transition-colors absolute top-4 right-4",
                        onClick: toggleSidebar,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-3xl",
                            children: "\xd7"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative grid grid-rows-7 gap-2 text-lg top-20 px-[7%] font-base font-semibold tracking-[0.04em]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "w-full hover:text-teal-500 text-primary",
                                href: "/",
                                children: "Home"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-px bg-gray-100 w-full"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "w-full hover:text-teal-500 text-primary",
                                href: "/shop",
                                children: "Shop"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-px bg-gray-100 w-full"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "w-full hover:text-teal-500 text-primary",
                                href: "/",
                                children: "Consultation"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-px bg-gray-100 w-full"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "w-full hover:text-teal-500 text-primary",
                                href: "/",
                                children: "Profile"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-px bg-gray-100 w-full"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "w-full hover:text-teal-500 text-primary",
                                href: "/wishlist",
                                children: "Wishlist"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-px bg-gray-100 w-full"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "w-full hover:text-teal-500 text-primary",
                                href: "/cart",
                                children: "Cart"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-px bg-gray-100 w-full"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "w-full hover:text-teal-500 text-primary",
                                href: "/",
                                children: "Contact Us"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-px bg-gray-100 w-full"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "md:grid grid-cols-3 gap-3 items-center text-center mx-auto font-normal font-base hidden tracking-[0.04em] py-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            className: "text-sm w-full max-w-[80px] md:max-w-[128px] xl:max-w-[135px] uppercase hover:text-teal-500 xl:whitespace-nowrap text-primary",
                            href: "/",
                            children: "Home"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            className: "text-sm w-full max-w-[80px] md:max-w-[128px] xl:max-w-[135px] uppercase hover:text-teal-500 xl:whitespace-nowrap text-primary",
                            href: "/shop",
                            children: "Shop"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            className: "text-sm w-full max-w-[80px] md:max-w-[128px] xl:max-w-[135px] uppercase hover:text-teal-500 xl:whitespace-nowrap text-primary",
                            href: "/",
                            children: "Consultation"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "justify-center hidden md:flex",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: "/assets/logo.png",
                    alt: "Logo",
                    height: 35,
                    width: 100
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative grid place-items-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative flex items-center justify-end space-x-4 lg:space-x-8",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    className: "text-black font-extralight hover:text-teal-500 duration-200 ease-in-out transition-colors relative flex justify-center gap-1 items-center",
                                    onClick: toggleProfileDropdown,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_6__/* .CgProfile */ .Mdg, {
                                            className: "text-3xl md:text-2xl"
                                        }),
                                        userLogin && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "font-normal",
                                            children: [
                                                "Hi, ",
                                                user.firstName
                                            ]
                                        })
                                    ]
                                }),
                                isProfileDropdownOpen && (userLogin ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute md:mt-2 -left-20 bg-white drop-shadow-2xl px-3 py-1",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: "hover:bg-slate-100 hover:text-teal-500 flex items-center justify-end px-2 py-1",
                                        onClick: ()=>{
                                            setIsLogin(false);
                                            setUserObj([]);
                                            setIsProfileDropdownOpen(false);
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "mr-16",
                                                children: "Log Out"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_6__/* .CgLogIn */ .gry, {
                                                className: "text-2xl"
                                            })
                                        ]
                                    })
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    ref: profileDropdownRef,
                                    className: "absolute md:mt-2 -left-20 grid grid-rows-2 bg-white drop-shadow-2xl px-3 py-1",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/login",
                                            className: "hover:bg-slate-100 hover:text-teal-500 flex items-center justify-end px-2 py-1",
                                            onClick: ()=>setIsProfileDropdownOpen(false),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "mr-16",
                                                    children: "Sign In"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_6__/* .CgLogIn */ .gry, {
                                                    className: "text-2xl"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/signup",
                                            className: "hover:bg-slate-100 hover:text-teal-500 flex items-center justify-end px-2 py-1",
                                            onClick: ()=>setIsProfileDropdownOpen(false),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "mr-14",
                                                    children: "Sign Up"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_6__/* .CgUserAdd */ .v2c, {
                                                    className: "text-2xl"
                                                })
                                            ]
                                        })
                                    ]
                                }))
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            className: "text-black font-extralight hover:text-teal-500 duration-200 ease-in-out transition-colors text-3xl md:text-2xl",
                            title: "Wishlist",
                            href: "/wishlist",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_6__/* .CgHeart */ .BV1, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            className: "text-black font-extralight hover:text-teal-500 duration-200 ease-in-out transition-colors text-3xl md:text-2xl",
                            title: "CgSearch",
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_6__/* .CgSearch */ .lnn, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            className: "text-black font-extralight hover:text-teal-500 duration-200 ease-in-out transition-colors text-3xl md:text-2xl",
                            title: "Wishlist",
                            href: "/cart",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_6__/* .CgShoppingCart */ .Tr3, {})
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ }),

/***/ 2410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextProvider: () => (/* binding */ ContextProvider),
/* harmony export */   globalContext: () => (/* binding */ globalContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable react-hooks/rules-of-hooks */ /* __next_internal_client_entry_do_not_use__ globalContext,ContextProvider auto */ 

const globalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
function ContextProvider({ children }) {
    const [isLogIn, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [cartAry, setCartAry] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        1
    ]);
    const [wishList, setWhishList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const userLogin = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>isLogIn, [
        isLogIn
    ]);
    function addToCart(product) {
        setCartAry([
            ...cartAry,
            product
        ]);
    }
    function removeToCart(product) {
        setCartAry(cartAry.filter((item)=>item !== product));
    }
    function removeAllCart() {
        setCartAry([]);
    }
    function addToWishList(product) {
        setWhishList([
            ...wishList,
            product
        ]);
    }
    function removeToWishList(product) {
        setWhishList(wishList.filter((item)=>item !== product));
    }
    function removeAllWishList() {
        setWhishList([]);
    }
    function setUserObj(obj) {
        setUser(obj);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(globalContext.Provider, {
        value: {
            userLogin,
            setIsLogin,
            addToCart,
            removeToCart,
            removeAllCart,
            addToWishList,
            removeToWishList,
            removeAllWishList,
            wishList,
            cartAry,
            user,
            setUserObj
        },
        children: children
    });
}


/***/ }),

/***/ 1495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Parth\Parth-ShoppingApp\ecommerceapp\app\components\Navbar\page.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 2813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.js","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(4010);
var target_path_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./app/components/Navbar/page.js
var page = __webpack_require__(1495);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(7272);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./app/globals/context.js

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Parth\Parth-ShoppingApp\ecommerceapp\app\globals\context.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["globalContext"];

const e1 = proxy["ContextProvider"];

;// CONCATENATED MODULE: ./app/layout.js





const metadata = {
    title: "Parth Prajapati",
    description: "This is my Online store"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (target_path_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(e1, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(page["default"], {}),
                    children
                ]
            })
        })
    });
}


/***/ }),

/***/ 7481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 7272:
/***/ (() => {



/***/ })

};
;