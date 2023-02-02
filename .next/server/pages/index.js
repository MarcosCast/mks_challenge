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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"C:\\\\Users\\\\maxmy\\\\OneDrive\\\\Documentos\\\\Teste T\\xE9cnico\\\\mks_challenge\\\\pages\\\\index.tsx\";\n\n\n\nconst Home = () => {\n  const {\n    0: data,\n    1: setData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const fetchApi = async () => {\n      const url = 'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=6&sortBy=id&orderBy=ASC';\n      const response = await fetch(url);\n      const objJson = await response.json();\n      setData(objJson.Resultados);\n    };\n\n    fetchApi();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      children: \"MKS\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      children: data.map(e => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n          children: e.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 27\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n          src: e.photo,\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 27\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n          children: `R$ ${e.price}`\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 27\n        }, undefined)]\n      }, e.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 25\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQUtBLE1BQU1HLElBQUksR0FBRyxNQUFNO0VBRWYsTUFBTTtJQUFBLEdBQUNDLElBQUQ7SUFBQSxHQUFPQztFQUFQLElBQWtCSCwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7RUFFQUQsZ0RBQVMsQ0FBQyxNQUFNO0lBQ1osTUFBTUssUUFBUSxHQUFHLFlBQVk7TUFDN0IsTUFBTUMsR0FBRyxHQUFHLHNHQUFaO01BQ0EsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsR0FBRCxDQUE1QjtNQUNBLE1BQU1HLE9BQU8sR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBdEI7TUFDQU4sT0FBTyxDQUFDSyxPQUFPLENBQUVFLFVBQVYsQ0FBUDtJQUNILENBTEc7O0lBTUpOLFFBQVE7RUFDUCxDQVJRLEVBUVAsRUFSTyxDQUFUO0VBVUEsb0JBQ0k7SUFBQSx3QkFDSTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxhQURKLGVBRUk7TUFBQSxVQUVRRixJQUFJLENBQUNTLEdBQUwsQ0FBVUMsQ0FBRCxpQkFDTDtRQUFBLHdCQUNFO1VBQUEsVUFBS0EsQ0FBQyxDQUFDQztRQUFQO1VBQUE7VUFBQTtVQUFBO1FBQUEsYUFERixlQUVFO1VBQUssR0FBRyxFQUFFRCxDQUFDLENBQUNFLEtBQVo7VUFBbUIsR0FBRyxFQUFDO1FBQXZCO1VBQUE7VUFBQTtVQUFBO1FBQUEsYUFGRixlQUdFO1VBQUEsVUFBTSxNQUFLRixDQUFDLENBQUNHLEtBQU07UUFBbkI7VUFBQTtVQUFBO1VBQUE7UUFBQSxhQUhGO01BQUEsR0FBVUgsQ0FBQyxDQUFDSSxFQUFaO1FBQUE7UUFBQTtRQUFBO01BQUEsYUFESjtJQUZSO01BQUE7TUFBQTtNQUFBO0lBQUEsYUFGSjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsYUFESjtBQW1CSCxDQWpDRDs7QUFtQ0EsaUVBQWVmLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ta3NfY2hhbGxlbmdlLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmZXRjaEFwaSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9ta3MtY2hhbGxlbmdlLWFwaS1mcm9udGVuZC5oZXJva3VhcHAuY29tL2FwaS92MS9wcm9kdWN0cz9wYWdlPTEmcm93cz02JnNvcnRCeT1pZCZvcmRlckJ5PUFTQyc7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IG9iakpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICBzZXREYXRhKG9iakpzb24uIFJlc3VsdGFkb3MpXHJcbiAgICB9XHJcbiAgICBmZXRjaEFwaSgpO1xyXG4gICAgfSxbXSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPk1LUzwvaDE+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKGUpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2UuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoND57ZS5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2UucGhvdG99IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PntgUiQgJHtlLnByaWNlfWB9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKSAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiAgICBcclxuICAgIFxyXG4gICAgIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwiZGF0YSIsInNldERhdGEiLCJmZXRjaEFwaSIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvYmpKc29uIiwianNvbiIsIlJlc3VsdGFkb3MiLCJtYXAiLCJlIiwibmFtZSIsInBob3RvIiwicHJpY2UiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();