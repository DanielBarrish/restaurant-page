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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadhome\": () => (/* binding */ loadhome),\n/* harmony export */   \"loadmenu\": () => (/* binding */ loadmenu),\n/* harmony export */   \"loadcontact\": () => (/* binding */ loadcontact)\n/* harmony export */ });\nconst loadhome = () => {\n    let str = `Spicy jalapeno bacon ipsum dolor amet jerky culpa mollit ut frankfurter prosciutto magna esse in filet\n    mignon commodo sint exercitation corned beef elit.Turkey excepteur chuck swine ex non aliquip.Capicola ut\n    bresaola ham incididunt pastrami leberkas pork chop ut sausage minim pariatur frankfurter.Shankle doner\n    pork consectetur, laborum cupidatat laboris dolor porchetta consequat rump ball tip burgdoggen ut.Sint\n    boudin shoulder meatball.Capicola labore laborum cillum sint cupidatat, bacon t - bone shoulder ut tempor\n    reprehenderit.Consectetur picanha prosciutto short ribs shankle tail eu.`;\n\n    let divContent = document.getElementById(\"content\");\n\n    while (divContent.firstChild) {\n        divContent.firstChild.remove()\n    }\n\n\n    let h1Heading = document.createElement(\"h1\");\n    h1Heading.textContent = \"La Restaurante\";\n\n    let imgVineyard = document.createElement(\"img\");\n    imgVineyard.src = \"vineyard.jpg\";\n\n    let pIntro = document.createElement(\"p\");\n    pIntro.textContent = str;\n\n\n    divContent.appendChild(h1Heading);\n    divContent.appendChild(imgVineyard);\n    divContent.appendChild(pIntro);\n}\n\nconst loadmenu = () => {\n    let divContent = document.getElementById(\"content\");\n\n    while (divContent.firstChild) {\n        divContent.firstChild.remove()\n    }\n\n    let h1Heading = document.createElement(\"h1\");\n    h1Heading.textContent = \"Le Menu\";\n\n    let imgRestaurant = document.createElement(\"img\");\n    imgRestaurant.src = \"restaurant.jpeg\";\n\n    let foodHeading = document.createElement(\"h2\");\n    foodHeading.textContent = \"Food\";\n\n    let foodLink = document.createElement(\"a\");\n    foodLink.href = \"https://www.mcdonalds.co.za/menu\";\n    foodLink.textContent = \"Click here\";\n\n    let drinksHeading = document.createElement(\"h2\");\n    drinksHeading.textContent = \"Drinks\";\n\n    let drinkLink = document.createElement(\"a\");\n    drinkLink.href = \"steers.co.za\";\n    drinkLink.textContent = \"Click here\";\n\n\n\n    \n    divContent.appendChild(h1Heading);\n\n    divContent.appendChild(imgRestaurant);\n    divContent.appendChild(foodHeading);\n    divContent.appendChild(foodLink);\n    divContent.appendChild(drinksHeading);\n    divContent.appendChild(drinkLink);\n}\n\nconst loadcontact = () => {\n    let str = 'Address:  \\t      123 Restaurant Road, Fatland';\n    let str2 = 'Phone Number:      021 123 9876';\n    let str3 = 'Website:       larestaurante.xyz';\n\n    let divContent = document.getElementById(\"content\");\n\n    while (divContent.firstChild) {\n        divContent.firstChild.remove()\n    }\n\n    let h1Heading = document.createElement(\"h1\");\n    h1Heading.textContent = \"Contact Us\";\n\n    let imgContact = document.createElement(\"img\");\n    imgContact.src = \"contact.jpg\";\n\n    let contactHeading = document.createElement(\"h2\");\n    contactHeading.textContent = \"Details:\";\n\n    let paragraph = document.createElement(\"p\");\n    paragraph.textContent = str;\n\n    let paragraph2 = document.createElement(\"p\");\n    paragraph2.textContent = str2;\n\n    let paragraph3 = document.createElement(\"p\");\n    paragraph3.textContent = str3;\n\n\n\n\n\n    \n    divContent.appendChild(h1Heading);\n\n    divContent.appendChild(imgContact);\n    divContent.appendChild(contactHeading);\n\n    divContent.appendChild(paragraph);\n    divContent.appendChild(paragraph2);\n    divContent.appendChild(paragraph3);    \n\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\nlet divNav = document.getElementById(\"nav\");\nlet homebtn = document.createElement(\"button\");\nlet menubtn = document.createElement(\"button\");\nlet contactbtn = document.createElement(\"button\");\n\nhomebtn.textContent = \"Home\";\nmenubtn.textContent = \"Menu\";\ncontactbtn.textContent = \"Contact\";\n\n\n\ndivNav.appendChild(homebtn);\ndivNav.appendChild(menubtn);\ndivNav.appendChild(contactbtn);\n\nhomebtn.addEventListener('click', () => {\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadhome)();\n})\n\nmenubtn.addEventListener('click', () => {\n    ;(0,_home__WEBPACK_IMPORTED_MODULE_0__.loadmenu)();\n})\n\ncontactbtn.addEventListener('click', () => {\n    ;(0,_home__WEBPACK_IMPORTED_MODULE_0__.loadcontact)();\n})\n\nhomebtn.focus();\nhomebtn.click();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;