/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var lib;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/***/ ((module, exports) => {

eval(" // ref: https://github.com/tc39/proposal-global\n\nvar getGlobal = function getGlobal() {\n  // the only reliable means to get the global object is\n  // `Function('return this')()`\n  // However, this causes CSP violations in Chrome apps.\n  if (typeof self !== 'undefined') {\n    return self;\n  }\n\n  if (typeof window !== 'undefined') {\n    return window;\n  }\n\n  if (typeof global !== 'undefined') {\n    return global;\n  }\n\n  throw new Error('unable to locate global object');\n};\n\nvar global = getGlobal();\nmodule.exports = exports = global.fetch; // Needed for TypeScript and Webpack.\n\nif (global.fetch) {\n  exports.default = global.fetch.bind(global);\n}\n\nexports.Headers = global.Headers;\nexports.Request = global.Request;\nexports.Response = global.Response;\n\n//# sourceURL=webpack://lib/./node_modules/node-fetch/browser.js?");

/***/ }),

/***/ "./src/activateProgress.js":
/*!*********************************!*\
  !*** ./src/activateProgress.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ activateProgress)\n/* harmony export */ });\nvar fetch = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n\nfunction activateProgress() {\n  // const test;\n  var telephone = document.getElementById('phoneNo');\n  var searchBtn = document.getElementById('searchBtn');\n  var requestUrl = new URL(\"https://script.google.com/macros/s/AKfycbyON8os4KenTA0AXE_B5eopMbm0ziiQH3moefWZ6HoMHPJvWPJJQOc5zsYhuUG1A_4S/exec\"),\n      params = {\n    type: \"select\",\n    phone: \"0908286805\"\n  };\n  Object.keys(params).forEach(function (key) {\n    return requestUrl.searchParams.append(key, params[key]);\n  });\n  searchBtn.addEventListener(\"onClick\", function (e) {\n    var city = document.getElementById('city');\n\n    if (e) {\n      fetch(requestUrl, {\n        credentials: \"same-origin\"\n      }).then(function (res) {\n        return res.json();\n      }).then(function (res) {\n        if (res) {\n          console.log('res >>>', res.testResult);\n          city.innerHTML = res.testResult;\n        }\n      })[\"catch\"](function (error) {\n        return console.log('error', error);\n      });\n    }\n  });\n}\n\n//# sourceURL=webpack://lib/./src/activateProgress.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _activateProgress_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activateProgress.js */ \"./src/activateProgress.js\");\n\n(0,_activateProgress_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://lib/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	lib = __webpack_exports__;
/******/ 	
/******/ })()
;