"use strict";
exports.id = 835;
exports.ids = [835];
exports.modules = {

/***/ 7636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Trending)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const images = [
    "P1.jpg",
    "P2.jpg",
    "P3.jpg",
    "P4.jpg",
    "P5.jpg",
    "P6.jpg",
    "P7.jpg",
    "P8.jpg"
];
function Trending() {
    const [startIndex, setStartIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);
    const [isAutomatic, setIsAutomatic] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const subArray = [];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let interval;
        if (isAutomatic) {
            interval = setInterval(()=>{
                setStartIndex((prevIndex)=>(prevIndex + 1) % images.length);
            }, 2000);
        }
        // Clean up the interval on unmount
        return ()=>clearInterval(interval);
    }, [
        isAutomatic
    ]);
    for(let i = startIndex; i < startIndex + 5; i++){
        subArray.push(images[i % images.length]);
    }
    const handlePrev = ()=>{
        setIsAutomatic(false); // Stop automatic motion on button click
        setStartIndex((prevIndex)=>(prevIndex - 1 + images.length) % images.length);
    };
    const handleNext = ()=>{
        setIsAutomatic(false); // Stop automatic motion on button click
        setStartIndex((prevIndex)=>(prevIndex + 1) % images.length);
    };
    const handleMouseEnter = ()=>{
        setIsAutomatic(false); // Stop automatic motion on button hover
    };
    const handleMouseLeave = ()=>{
        setIsAutomatic(true); // Start automatic motion when the mouse leaves the buttons
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: " mx-1 md:mx-4 xl:mx-16 2xl:mx-24 bg-white py-12",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hidden md:grid grid-cols-5 gap-4 flex flex-col items-center justify-center ml-8 lg:ml-14 xl:ml-20",
                children: subArray.map((image, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: `/assets/${image}`,
                        alt: `Image ${startIndex - 5 + i + 1}`,
                        height: 200,
                        width: 200,
                        className: `top-0 h-full px-2 ease-in-out ${i === 2 ? "scale-125 lg:scale-150" : null}`
                    }, i))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "md:hidden flex justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: `/assets/${images[startIndex]}`,
                    alt: `Image ${startIndex}`,
                    height: 200,
                    width: 200,
                    className: `top-0 h-full px-2 scale-150`
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-center mt-12 md:mt-8 lg:mt-12 text-3xl lg:text-5xl",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "bg-transparent hover:bg-e2e9e9 text-e2e9e9 border border-black-900 font-bold py-2 px-8 lg:px-12 rounded-full focus:outline-none mx-6",
                        onClick: handlePrev,
                        onMouseEnter: handleMouseEnter,
                        onMouseLeave: handleMouseLeave,
                        children: "←"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "bg-transparent hover:bg-e2e9e9 text-e2e9e9 border border-black-900 font-bold py-2 px-8 lg:px-12 rounded-full focus:outline-none mx-6",
                        onClick: handleNext,
                        onMouseEnter: handleMouseEnter,
                        onMouseLeave: handleMouseLeave,
                        children: "→"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 7441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Parth\Parth-ShoppingApp\ecommerceapp\app\components\Trending\page.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;