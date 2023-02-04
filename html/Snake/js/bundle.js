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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\nbody {\\n  overflow-x: hidden;\\n  overflow-y: hidden;\\n}\\n.main {\\n  position: relative;\\n  margin: 100px auto;\\n  margin-bottom: 5vh;\\n  width: 360px;\\n  height: 420px;\\n  background-color: #b7d4a8;\\n  border: 10px solid #000000;\\n  border-radius: 20px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-around;\\n  align-items: center;\\n}\\n.main .stage {\\n  position: relative;\\n  width: 304px;\\n  height: 304px;\\n  border: 2px solid #000000;\\n  border-radius: 5px;\\n}\\n.main .stage #snake > div {\\n  position: absolute;\\n  width: 10px;\\n  height: 10px;\\n  background-color: #000000;\\n  border: 1px solid #b7d4a8;\\n}\\n.main .stage > #food {\\n  position: absolute;\\n  width: 10px;\\n  height: 10px;\\n  font-size: 4px;\\n  background-color: #dd541e;\\n  border: 1px solid #b7d4a8;\\n  border-radius: 3px;\\n  transform: rotate(45deg);\\n  left: 40px;\\n  top: 80px;\\n}\\n.main .score-panel {\\n  width: 90%;\\n  height: 17%;\\n}\\n.main .score-panel .score {\\n  position: relative;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: flex-end;\\n  bottom: -1vh;\\n}\\n.main .score-panel .score #restart {\\n  width: 40px;\\n  position: absolute;\\n  background-color: #b7d4a8;\\n  border-radius: 10%;\\n  left: 44%;\\n  top: 50%;\\n}\\n.main .score-panel .score span {\\n  font-family: \\\"黑体\\\";\\n  font-weight: 600;\\n  font-size: 20px;\\n}\\n.controller {\\n  background-color: #b7d4a8;\\n  width: 195px;\\n  height: 200px;\\n  margin: 0 auto;\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: space-between;\\n  justify-content: space-between;\\n  transform: rotate(45deg);\\n  border-radius: 10px;\\n}\\n.controller > div {\\n  border-radius: 10px;\\n  width: 95px;\\n  height: 95px;\\n  border: 2px solid #100000;\\n}\\n.rank {\\n  background-color: #b7d4a8;\\n  line-height: 4vh;\\n  width: 50vh;\\n  height: 4vh;\\n  top: 10vh;\\n  margin: 0 auto;\\n  position: relative;\\n  border: 2px sold #4545a4;\\n  box-shadow: 4px 2px 5px #000000;\\n  border-radius: 3px;\\n  text-align: center;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Snake/./src/style/index.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://Snake/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Snake/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/index.less":
/*!******************************!*\
  !*** ./src/style/index.less ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./index.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Snake/./src/style/index.less?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Snake/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Snake/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Snake/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Snake/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Snake/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Snake/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.less */ \"./src/style/index.less\");\n/* harmony import */ var _moduls_GameControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduls/GameControl */ \"./src/moduls/GameControl.ts\");\n\r\n\r\nlet game = new _moduls_GameControl__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n// 重新开始\r\nfunction reStart() {\r\n    game.initGame();\r\n}\r\ndocument.getElementById(\"restart\").onclick = reStart;\r\n\n\n//# sourceURL=webpack://Snake/./src/index.ts?");

/***/ }),

/***/ "./src/moduls/Food.ts":
/*!****************************!*\
  !*** ./src/moduls/Food.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//定义食物类\r\nclass Food {\r\n    constructor() {\r\n        // 获取页面中的food元素并赋值给element\r\n        this.element = document.getElementById(\"food\");\r\n    }\r\n    //定义获取食物坐标的方法\r\n    get X() {\r\n        return this.element.offsetLeft;\r\n    }\r\n    get Y() {\r\n        return this.element.offsetTop;\r\n    }\r\n    // 生成食物的位置\r\n    // 位置必须是10的倍数  最小值0 最大值290\r\n    change() {\r\n        // floor 向下取整\r\n        const x = Math.floor(Math.random() * 30) * 10;\r\n        const y = Math.floor(Math.random() * 30) * 10;\r\n        this.element.style.left = x + \"px\";\r\n        this.element.style.top = y + \"px\";\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Food);\r\n\n\n//# sourceURL=webpack://Snake/./src/moduls/Food.ts?");

/***/ }),

/***/ "./src/moduls/GameControl.ts":
/*!***********************************!*\
  !*** ./src/moduls/GameControl.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Snake */ \"./src/moduls/Snake.ts\");\n/* harmony import */ var _Food__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Food */ \"./src/moduls/Food.ts\");\n/* harmony import */ var _ScorePanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScorePanel */ \"./src/moduls/ScorePanel.ts\");\n//引入其他类\r\n\r\n\r\n\r\nclass GameControl {\r\n    constructor() {\r\n        // 方向\r\n        this.direction = '';\r\n        this.snake = new _Snake__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n        this.food = new _Food__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n        this.food.change();\r\n        this.scorePanel = new _ScorePanel__WEBPACK_IMPORTED_MODULE_2__[\"default\"](7);\r\n        this.init();\r\n    }\r\n    // 重新初始化游戏\r\n    initGame() {\r\n        // this.snake.reSet();\r\n        // console.log(this.snake.isLive);\r\n        // this.food.change();\r\n        // this.scorePanel.reSet();\r\n        window.location.reload();\r\n    }\r\n    // 初始化游戏功能\r\n    init() {\r\n        // 绑定键盘事件\r\n        document.addEventListener('keydown', this.keyboardHandler.bind(this)); // 但是第一个this实际上指向document   所以要用bind 把函数的this改为原对象\r\n        // 绑定触屏事件\r\n        document.addEventListener('click', this.touchHandler.bind(this));\r\n        this.run();\r\n        this.snake.addBody(); // 用来弥补bug:  开局吃第一个不加\r\n    }\r\n    // ArrowUp  ArrowDown  ArrowLeft  ArrowRight\r\n    // 按键处理函数\r\n    keyboardHandler(event) {\r\n        this.direction = event.key;\r\n        console.log(this.direction);\r\n    }\r\n    // 移动端点击处理函数\r\n    touchHandler(e) {\r\n        console.log(e.target.id);\r\n        switch (e.target.id) {\r\n            case 'up':\r\n                this.direction = \"ArrowUp\";\r\n                break;\r\n            case 'down':\r\n                this.direction = \"ArrowDown\";\r\n                break;\r\n            case 'left':\r\n                this.direction = \"ArrowLeft\";\r\n                break;\r\n            case 'right':\r\n                this.direction = \"ArrowRight\";\r\n                break;\r\n            default:\r\n                break;\r\n        }\r\n    }\r\n    // 蛇移动的方法\r\n    run() {\r\n        // 先获取蛇现在的坐标\r\n        let X = this.snake.X;\r\n        let Y = this.snake.Y;\r\n        switch (this.direction) {\r\n            case \"ArrowLeft\":\r\n            case \"a\":\r\n                X -= 10;\r\n                break;\r\n            case \"ArrowUp\":\r\n            case \"w\":\r\n                Y -= 10;\r\n                break;\r\n            case \"ArrowRight\":\r\n            case \"d\":\r\n                X += 10;\r\n                break;\r\n            case \"ArrowDown\":\r\n            case \"s\":\r\n                Y += 10;\r\n                break;\r\n        }\r\n        // 移动过程中是否吃到\r\n        this.checkEat(X, Y);\r\n        // 根据移动 修改蛇的位置\r\n        this.snake.X = X;\r\n        this.snake.Y = Y;\r\n        this.snake.isLive && setTimeout(this.run.bind(this), 200 - (this.scorePanel.level - 1) * 30); //速度计算\r\n    }\r\n    // 定义一个方法检查蛇是否吃到食物\r\n    checkEat(X, Y) {\r\n        if (X === this.food.X && Y === this.food.Y) {\r\n            //食物位置重置\r\n            this.food.change();\r\n            //分数增加\r\n            this.scorePanel.addScore();\r\n            //蛇加长\r\n            this.snake.addBody();\r\n        }\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameControl);\r\n\n\n//# sourceURL=webpack://Snake/./src/moduls/GameControl.ts?");

/***/ }),

/***/ "./src/moduls/ScorePanel.ts":
/*!**********************************!*\
  !*** ./src/moduls/ScorePanel.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// 定义表示记分牌的类\r\nclass ScorePanel {\r\n    constructor(maxLevel) {\r\n        this.score = 0; // 数值\r\n        this.level = 1; // 数值\r\n        this.scoreEle = document.getElementById(\"score\");\r\n        this.levelEle = document.getElementById(\"level\");\r\n        this.maxLevel = maxLevel;\r\n    }\r\n    // 初始化分数\r\n    reSet() {\r\n        this.score = 0;\r\n        this.level = 1;\r\n        this.levelEle.innerHTML = 1 + '';\r\n        this.scoreEle.innerHTML = 0 + '';\r\n    }\r\n    // 加分的方法\r\n    addScore() {\r\n        // 分数自增\r\n        this.score++;\r\n        this.scoreEle.innerHTML = this.score + '';\r\n        //分数增加等级增加\r\n        if (this.score % 3 === 0) {\r\n            this.levelUp();\r\n        }\r\n    }\r\n    // 提升等级的方法 等级越高速度越快\r\n    levelUp() {\r\n        if (this.level < this.maxLevel) { //最高难度等级\r\n            this.levelEle.innerHTML = ++this.level + '';\r\n        }\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScorePanel);\r\n\n\n//# sourceURL=webpack://Snake/./src/moduls/ScorePanel.ts?");

/***/ }),

/***/ "./src/moduls/Snake.ts":
/*!*****************************!*\
  !*** ./src/moduls/Snake.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Snake {\r\n    constructor() {\r\n        var _a;\r\n        // 判断是否还存活\r\n        this.isLive = true;\r\n        this.element = document.getElementById('snake');\r\n        this.head = document.querySelector('#snake > div');\r\n        // 获取蛇容器内所有div 作为蛇身体(包括头)\r\n        this.bodies = (_a = document.getElementById(\"snake\")) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('div'); // 是个数组\r\n    }\r\n    //获取蛇头坐标\r\n    get X() {\r\n        return this.head.offsetLeft;\r\n    }\r\n    get Y() {\r\n        return this.head.offsetTop;\r\n    }\r\n    set X(val) {\r\n        if (this.X == val) {\r\n            return;\r\n        }\r\n        if (val < 0 || val > 290) {\r\n            alert(\"GAME OVER!\");\r\n            this.isLive = !this.isLive;\r\n        }\r\n        // 判断发生掉头\r\n        if (this.bodies[1].offsetLeft === val) {\r\n            if (val > this.X) {\r\n                val = this.X - 10;\r\n            }\r\n            else {\r\n                val = this.X + 10;\r\n            }\r\n        }\r\n        this.moveBody();\r\n        this.head.style.left = val + 'px';\r\n        this.checkHeadBody();\r\n    }\r\n    set Y(val) {\r\n        if (this.Y == val) {\r\n            return;\r\n        }\r\n        if (val < 0 || val > 290) {\r\n            alert(\"撞到墙了~GAME OVER!\");\r\n            this.isLive = false; // 蛇死了\r\n        }\r\n        // 判断发生掉头\r\n        if (this.bodies[1] && this.bodies[1].offsetTop === val) {\r\n            if (val > this.Y) {\r\n                val = this.Y - 10;\r\n            }\r\n            else {\r\n                val = this.Y + 10;\r\n            }\r\n        }\r\n        this.moveBody();\r\n        this.head.style.top = val + 'px';\r\n        this.checkHeadBody();\r\n    }\r\n    // 初始化蛇\r\n    reSet() {\r\n        this.head.style.top = this.head.style.left = 0 + 'px';\r\n        this.isLive = true;\r\n    }\r\n    // 蛇增长\r\n    addBody() {\r\n        // 其实是向蛇容器内添加div\r\n        const div = document.createElement('div');\r\n        this.element.insertBefore(div, this.element.lastChild);\r\n    }\r\n    // 身体移动\r\n    moveBody() {\r\n        for (let i = this.bodies.length - 1; i > 0; i--) {\r\n            // 获取当前身体前面一节的位置\r\n            const X = this.bodies[i - 1].offsetLeft;\r\n            const Y = this.bodies[i - 1].offsetTop;\r\n            // 将位置设置到当前身体\r\n            this.bodies[i].style.left = X + \"px\";\r\n            this.bodies[i].style.top = Y + \"px\";\r\n        }\r\n    }\r\n    // 判断头撞到身体\r\n    checkHeadBody() {\r\n        // 获取所有身体,检查是否和头发生重叠\r\n        for (let i = 4; i < this.bodies.length; i++) {\r\n            if (this.X === this.bodies[i].offsetLeft && this.Y === this.bodies[i].offsetTop) {\r\n                this.isLive = false;\r\n                alert(\"撞到自己了~\");\r\n            }\r\n        }\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Snake);\r\n\n\n//# sourceURL=webpack://Snake/./src/moduls/Snake.ts?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;