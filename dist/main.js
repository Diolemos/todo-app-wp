/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\r\n\r\n\r\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n\n\n//# sourceURL=webpack://todoapp/./src/index.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadApp)\n/* harmony export */ });\n//all todos will go into the default project and will have no priority, until edited by more curious users  \r\n   //current project\r\n    //add project btn\r\n\r\n   \r\n\r\n//create hidden sidebar\r\n//sidebar will be hidden and activated by a menu btn\r\nfunction createSidebar(){\r\n    const sidebar = document.createElement(\"sidebar\")\r\n    sidebar.classList.add(\"sidebar\",\"hidden\")\r\n\r\n    //project list\r\n    const listContainer = document.createElement(\"div\")\r\n    listContainer.classList.add(\"ProjectListContainer\")\r\n    const list = document.createElement(\"ul\");\r\n    list.classList.add(\"projectList\")\r\n    listContainer.appendChild(list)\r\n    \r\n    //placeholder code to be replace by loadlist function\r\n    const firstLi = document.createElement(\"li\")\r\n    const listText = document.createElement(\"p\")\r\n    listText.textContent = \"Default Project\"\r\n    firstLi.appendChild(listText)\r\n    list.appendChild(firstLi)\r\n    sidebar.appendChild(listContainer)\r\n\r\n\r\n    //add project btn\r\n\r\n\r\n    return sidebar\r\n}    \r\n\r\n//create <main>\r\n    \r\nfunction createMain(){\r\n    const main = document.createElement(\"main\")\r\n\r\n        //input: New todo \r\n    const form = document.createElement(\"div\")\r\n    form.classList.add(\"input-section\")\r\n\r\n    const input = document.createElement(\"input\")\r\n    input.setAttribute(\"type\", \"text\")\r\n    input.setAttribute(\"placeholder\", \"..Walk the dog\" )\r\n    input.classList.add(\"input\")\r\n    form.appendChild(input)\r\n        //btn add todo\r\n    const button = document.createElement(\"button\")\r\n    button.classList.add(\"btn\")\r\n    button.textContent = \"Add todo\"\r\n\r\n        //list of todos \r\n        const listContainer = document.createElement(\"div\")\r\n        listContainer.classList.add(\"todoListContainer\")\r\n        const list = document.createElement(\"ul\");\r\n        list.classList.add(\"todoList\")\r\n        listContainer.appendChild(list)\r\n        const firstLi = document.createElement(\"li\")\r\n        const listText = document.createElement(\"p\")\r\n        listText.textContent = \"Default todo\"\r\n        firstLi.appendChild(listText)\r\n        list.appendChild(firstLi)\r\n\r\nmain.appendChild(form)\r\nmain.appendChild(button)\r\nmain.appendChild(listContainer)\r\n    return main    \r\n}\r\n\r\n\r\n\r\n//create footer\r\nfunction createFooter() {\r\n    const footer = document.createElement(\"footer\");\r\n    footer.classList.add(\"footer\");\r\n  \r\n    const copyright = document.createElement(\"p\");\r\n    copyright.textContent = `Made with 💚 in Joinville, Brazil.`;\r\n  \r\n    const githubLink = document.createElement(\"a\");\r\n    githubLink.href = \"https://github.com/DioLemos\";\r\n  \r\n    const githubIcon = document.createElement(\"i\");\r\n    githubIcon.classList.add(\"fa-brands\");\r\n    githubIcon.classList.add(\"fa-github\");\r\n  \r\n    githubLink.appendChild(githubIcon);\r\n    footer.appendChild(copyright);\r\n    footer.appendChild(githubLink);\r\n  \r\n    return footer;\r\n  }\r\n\r\n\r\n//loadApp\r\nfunction loadApp(){\r\n    const body = document.body \r\n    body.appendChild(createSidebar())\r\n    body.appendChild(createMain())\r\n    body.appendChild(createFooter())\r\n\r\n}    \n\n//# sourceURL=webpack://todoapp/./src/website.js?");

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
/******/ 	
/******/ })()
;