/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/game/index.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/game/index.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
	--card-height: 19vh;
	--card-ratio: 0.7168142914;
}

body {
	display: flex;
	background-color: #35654d;
	margin: 0;

	height: 100%;
	width: 100%;
	-webkit-overflow-scrolling: touch;
}

#win {
	font-size: 5rem;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	background-color: white;
	border-radius: 5%;
}

#game {
	display: flex;
	align-items: center;
	flex-flow: column;
	max-width: calc(5 * (var(--card-height) * var(--card-ratio) + 1vw));
	width: 100%;
	margin: auto;
}

#choices {
	display: flex;
	flex-flow: row;
	margin: 2vh;
	width: 100%;
}

#choices>#next {
	border: 2px solid #F6F4F4;
	border-radius: 7px;
	margin: 0.5vw;
	padding: 0.5vh;

	margin-left: auto;

	height: var(--card-height);
	width: calc(var(--card-height) * var(--card-ratio));

	color: #F6F4F4;
	text-align: center;
	font-family:  sans-serif;
	font-weight: 900;
	letter-spacing: min(0.5vw, 0.5vh);
	line-height: min(5vw, 5vh);
	font-size: calc(var(--card-height) * var(--card-ratio) / 5);
	text-align: center;


	display: flex;
	align-items: center;
	justify-content: center;
}

#choices>#reserve {
	outline:none;
	border: 2px solid #F6F4F4;
	border-radius: 7px;

	margin: 0.5vw;
	padding: 0.5vh;

	height: var(--card-height);
	width: calc(var(--card-height) * var(--card-ratio));
}

#choices>#deck {
	/* box-shadow: inset 12px -22px 15px -1px rgba(0,0,0,0.36); */

	outline: solid 2px #F6F4F4;
	border-radius: 7px;

	margin: calc(0.5vw + 2px);
	padding: 0.5vh;

	height: var(--card-height);
	width: calc(var(--card-height) * var(--card-ratio));
}

#player {
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
}

.group {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: start;
	width: 100%;
	
	/* background: ; */
	margin: 0.5vh;
	padding: 0.5vh;

	border: 2px solid #F6F4F4;
	border-radius: 15px;
}

.filler {
	height: var(--card-height);
	margin-top: 0.5vw;
	margin-bottom: 0.5vw;
}


img.card {
	height: var(--card-height);
	margin: 0.5vw;

    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}

img.card.selected-card {
	transform: TranslateY(-5%);
}

@media (max-aspect-ratio: 1/1) {
	:root {
		--card-height: calc(15vw / var(--card-ratio));
	}
}
`, "",{"version":3,"sources":["webpack://./src/game/index.css"],"names":[],"mappings":"AAAA;CACC,mBAAmB;CACnB,0BAA0B;AAC3B;;AAEA;CACC,aAAa;CACb,yBAAyB;CACzB,SAAS;;CAET,YAAY;CACZ,WAAW;CACX,iCAAiC;AAClC;;AAEA;CACC,eAAe;CACf,kBAAkB;CAClB,QAAQ;CACR,SAAS;CACT,gCAAgC;CAChC,kBAAkB;CAClB,uBAAuB;CACvB,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,iBAAiB;CACjB,mEAAmE;CACnE,WAAW;CACX,YAAY;AACb;;AAEA;CACC,aAAa;CACb,cAAc;CACd,WAAW;CACX,WAAW;AACZ;;AAEA;CACC,yBAAyB;CACzB,kBAAkB;CAClB,aAAa;CACb,cAAc;;CAEd,iBAAiB;;CAEjB,0BAA0B;CAC1B,mDAAmD;;CAEnD,cAAc;CACd,kBAAkB;CAClB,wBAAwB;CACxB,gBAAgB;CAChB,iCAAiC;CACjC,0BAA0B;CAC1B,2DAA2D;CAC3D,kBAAkB;;;CAGlB,aAAa;CACb,mBAAmB;CACnB,uBAAuB;AACxB;;AAEA;CACC,YAAY;CACZ,yBAAyB;CACzB,kBAAkB;;CAElB,aAAa;CACb,cAAc;;CAEd,0BAA0B;CAC1B,mDAAmD;AACpD;;AAEA;CACC,6DAA6D;;CAE7D,0BAA0B;CAC1B,kBAAkB;;CAElB,yBAAyB;CACzB,cAAc;;CAEd,0BAA0B;CAC1B,mDAAmD;AACpD;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,sBAAsB;CACtB,WAAW;AACZ;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,iBAAiB;CACjB,kBAAkB;CAClB,WAAW;;CAEX,kBAAkB;CAClB,aAAa;CACb,cAAc;;CAEd,yBAAyB;CACzB,mBAAmB;AACpB;;AAEA;CACC,0BAA0B;CAC1B,iBAAiB;CACjB,oBAAoB;AACrB;;;AAGA;CACC,0BAA0B;CAC1B,aAAa;;IAEV,uBAAuB;IACvB,iBAAiB;IACjB,sBAAsB;IACtB,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;CACC,0BAA0B;AAC3B;;AAEA;CACC;EACC,6CAA6C;CAC9C;AACD","sourcesContent":[":root {\n\t--card-height: 19vh;\n\t--card-ratio: 0.7168142914;\n}\n\nbody {\n\tdisplay: flex;\n\tbackground-color: #35654d;\n\tmargin: 0;\n\n\theight: 100%;\n\twidth: 100%;\n\t-webkit-overflow-scrolling: touch;\n}\n\n#win {\n\tfont-size: 5rem;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\ttext-align: center;\n\tbackground-color: white;\n\tborder-radius: 5%;\n}\n\n#game {\n\tdisplay: flex;\n\talign-items: center;\n\tflex-flow: column;\n\tmax-width: calc(5 * (var(--card-height) * var(--card-ratio) + 1vw));\n\twidth: 100%;\n\tmargin: auto;\n}\n\n#choices {\n\tdisplay: flex;\n\tflex-flow: row;\n\tmargin: 2vh;\n\twidth: 100%;\n}\n\n#choices>#next {\n\tborder: 2px solid #F6F4F4;\n\tborder-radius: 7px;\n\tmargin: 0.5vw;\n\tpadding: 0.5vh;\n\n\tmargin-left: auto;\n\n\theight: var(--card-height);\n\twidth: calc(var(--card-height) * var(--card-ratio));\n\n\tcolor: #F6F4F4;\n\ttext-align: center;\n\tfont-family:  sans-serif;\n\tfont-weight: 900;\n\tletter-spacing: min(0.5vw, 0.5vh);\n\tline-height: min(5vw, 5vh);\n\tfont-size: calc(var(--card-height) * var(--card-ratio) / 5);\n\ttext-align: center;\n\n\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n#choices>#reserve {\n\toutline:none;\n\tborder: 2px solid #F6F4F4;\n\tborder-radius: 7px;\n\n\tmargin: 0.5vw;\n\tpadding: 0.5vh;\n\n\theight: var(--card-height);\n\twidth: calc(var(--card-height) * var(--card-ratio));\n}\n\n#choices>#deck {\n\t/* box-shadow: inset 12px -22px 15px -1px rgba(0,0,0,0.36); */\n\n\toutline: solid 2px #F6F4F4;\n\tborder-radius: 7px;\n\n\tmargin: calc(0.5vw + 2px);\n\tpadding: 0.5vh;\n\n\theight: var(--card-height);\n\twidth: calc(var(--card-height) * var(--card-ratio));\n}\n\n#player {\n\tdisplay: flex;\n\talign-items: center;\n\tflex-direction: column;\n\twidth: 100%;\n}\n\n.group {\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: nowrap;\n\talign-items: start;\n\twidth: 100%;\n\t\n\t/* background: ; */\n\tmargin: 0.5vh;\n\tpadding: 0.5vh;\n\n\tborder: 2px solid #F6F4F4;\n\tborder-radius: 15px;\n}\n\n.filler {\n\theight: var(--card-height);\n\tmargin-top: 0.5vw;\n\tmargin-bottom: 0.5vw;\n}\n\n\nimg.card {\n\theight: var(--card-height);\n\tmargin: 0.5vw;\n\n    -webkit-user-drag: none;\n    user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n}\n\nimg.card.selected-card {\n\ttransform: TranslateY(-5%);\n}\n\n@media (max-aspect-ratio: 1/1) {\n\t:root {\n\t\t--card-height: calc(15vw / var(--card-ratio));\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/game/index.css":
/*!****************************!*\
  !*** ./src/game/index.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/game/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/game/guest.ts":
/*!***************************!*\
  !*** ./src/game/guest.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./index.css */ "./src/game/index.css");
const display_1 = __webpack_require__(/*! ../lib/display */ "./src/lib/display.ts");
const game_1 = __webpack_require__(/*! ../lib/game */ "./src/lib/game.ts");
let player;
let deckResolve;
window.addEventListener("message", receiveMessage);
function receiveMessage({ data }) {
    console.log(`Guest Received from window ${data}`);
    const [cmd, arg] = data.split(/ (.*)/s);
    switch (cmd) {
        case "start":
            player = new game_1.Player();
            (0, display_1.setup)(player, handleDeckClick, handleNextClick);
            console.log("Guest Started");
            break;
        case "setup":
            player.hand = JSON.parse(arg);
            console.log("Received Hand");
            console.log("Actual player", player.hand);
            (0, display_1.displayPlayerHand)(player);
            break;
        case "deck":
            console.log("Received Deck pop");
            if (deckResolve !== undefined) {
                deckResolve(parseInt(arg));
            }
            break;
        case "next":
            console.log("Received next");
            player.addReserve(parseInt(arg));
            player.state = game_1.State.Choose;
            (0, display_1.displayPlayerHand)(player);
            break;
    }
}
const sendMessage = window.parent.postMessage;
function handleDeckClick(_e, player) {
    return __awaiter(this, void 0, void 0, function* () {
        function popDeck() {
            sendMessage("pop");
            console.log("Sent command pop");
            return new Promise((resolve, _) => {
                deckResolve = resolve;
            });
        }
        try {
            if (player.state === game_1.State.Choose) {
                const card = yield popDeck();
                player.choose(card);
                (0, display_1.displayPlayerHand)(player);
            }
        }
        catch (err) {
            console.error(`Failed to get card from deck. ${err}`);
        }
    });
}
function handleNextClick(_e, player, selectedElement) {
    try {
        if (selectedElement !== null) {
            const index = parseInt(selectedElement.dataset.index || "-1");
            const card = player.leave(index);
            sendMessage("next " + card);
            console.log("Sent command next");
            (0, display_1.displayPlayerHand)(player);
        }
    }
    catch (err) {
        console.error(`Failed to leave card. ${err}`);
    }
}


/***/ }),

/***/ "./src/lib/cards.ts":
/*!**************************!*\
  !*** ./src/lib/cards.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


// Card Bit Structure
// 
// 0001 Clubs
// 0010 Diamonds
// 0100 Hearts
// 1000 Spades
//
// 10000000000001 Ace
// 00000000000010 Two 
// 00000000000100 Three 
//
// Card 2 of Clubs
// 00000000000010 1000
//
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.swap = exports.shuffle = exports.createDeck = exports.createEmptyDeck = exports.getSVG = exports.getString = exports.getRank = exports.getSuit = exports.createCard = exports.SuitEntries = exports.RankEntries = exports.Rank = exports.Suit = void 0;
var Suit;
(function (Suit) {
    Suit[Suit["Clubs"] = 1] = "Clubs";
    Suit[Suit["Diamonds"] = 2] = "Diamonds";
    Suit[Suit["Hearts"] = 4] = "Hearts";
    Suit[Suit["Spades"] = 8] = "Spades";
})(Suit || (exports.Suit = Suit = {}));
var Rank;
(function (Rank) {
    Rank[Rank["Ace"] = 131088] = "Ace";
    Rank[Rank["Two"] = 32] = "Two";
    Rank[Rank["Three"] = 64] = "Three";
    Rank[Rank["Four"] = 128] = "Four";
    Rank[Rank["Five"] = 256] = "Five";
    Rank[Rank["Six"] = 512] = "Six";
    Rank[Rank["Seven"] = 1024] = "Seven";
    Rank[Rank["Eight"] = 2048] = "Eight";
    Rank[Rank["Nine"] = 4096] = "Nine";
    Rank[Rank["Ten"] = 8192] = "Ten";
    Rank[Rank["Jack"] = 16384] = "Jack";
    Rank[Rank["Queen"] = 32768] = "Queen";
    Rank[Rank["King"] = 65536] = "King";
})(Rank || (exports.Rank = Rank = {}));
const SuitToSvg = {
    "Clubs": "C",
    "Diamonds": "D",
    "Hearts": "H",
    "Spades": "S",
};
const RankToSvg = {
    "Ace": "A",
    "Two": "2",
    "Three": "3",
    "Four": "4",
    "Five": "5",
    "Six": "6",
    "Seven": "7",
    "Eight": "8",
    "Nine": "9",
    "Ten": "10",
    "Jack": "J",
    "Queen": "Q",
    "King": "K",
};
exports.RankEntries = Object.entries(Rank).slice(13);
exports.SuitEntries = Object.entries(Suit).slice(4);
function createCard(rank, suit) {
    return rank | suit;
}
exports.createCard = createCard;
function getSuit(card) {
    const suitb = ((1 << 4) - 1) & card;
    for (let [name, suit] of exports.SuitEntries) {
        if (suit === suitb)
            return name;
    }
    throw new Error("Suit not found");
}
exports.getSuit = getSuit;
function getRank(card) {
    const rankb = (((1 << 14) - 1) << 4) & card;
    for (let [name, rank] of exports.RankEntries) {
        if (rank === rankb)
            return name;
    }
    throw new Error("Rank not found");
}
exports.getRank = getRank;
function getString(card) {
    return `${getSuit(card)} ${getRank(card)}`;
}
exports.getString = getString;
function getSVG(card) {
    const [suit, rank] = getString(card).split(" ");
    let svg = "";
    svg += RankToSvg[rank];
    svg += SuitToSvg[suit];
    return svg;
}
exports.getSVG = getSVG;
function createEmptyDeck() {
    return [];
}
exports.createEmptyDeck = createEmptyDeck;
function createDeck(size) {
    let deck = [];
    for (let s = 0; s < size; s++) {
        for (let [suit, _] of exports.SuitEntries) {
            for (let [rank, _] of exports.RankEntries) {
                deck.push(createCard(Rank[rank], Suit[suit]));
            }
        }
    }
    return deck;
}
exports.createDeck = createDeck;
function shuffle(deck) {
    let current_index = deck.length;
    while (current_index != 0) {
        let random_index = Math.floor(Math.random() * deck.length);
        current_index -= 1;
        swap(deck, current_index, random_index);
    }
}
exports.shuffle = shuffle;
function swap(deck, current_index, random_index) {
    [deck[current_index], deck[random_index]] = [deck[random_index], deck[current_index]];
}
exports.swap = swap;


/***/ }),

/***/ "./src/lib/display.ts":
/*!****************************!*\
  !*** ./src/lib/display.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.displayPlayerHand = exports.setup = void 0;
const cards_1 = __webpack_require__(/*! ./cards */ "./src/lib/cards.ts");
const game_1 = __webpack_require__(/*! ./game */ "./src/lib/game.ts");
function setup(player, handleDeckClick, handleNextClick) {
    const deckElement = document.getElementById("deck");
    deckElement === null || deckElement === void 0 ? void 0 : deckElement.addEventListener("click", e => {
        if (player.state === game_1.State.Choose) {
            handleDeckClick(e, player);
            const cardElement = document.querySelector("#player .card[data-index='10']");
            if (cardElement) {
                const group = document.querySelectorAll("#player .group")[2];
                group.appendChild(cardElement);
            }
            if (player.checkWin()) {
                console.log("WON");
                const winElement = document.getElementById("win");
                if (winElement) {
                    winElement.innerHTML = "You Won";
                }
            }
            else {
                console.log("Lost or not");
            }
        }
    });
    const reserveElement = document.getElementById("reserve");
    reserveElement === null || reserveElement === void 0 ? void 0 : reserveElement.addEventListener("click", e => {
        if (player.state === game_1.State.Choose) {
            handleReserveClick(e, player);
            const cardElement = document.querySelector("#player .card[data-index='10']");
            if (cardElement) {
                const group = document.querySelectorAll("#player .group")[2];
                group.appendChild(cardElement);
            }
            if (player.checkWin()) {
                console.log("WON");
                const winElement = document.getElementById("win");
                if (winElement) {
                    winElement.innerHTML = "You Won";
                }
            }
            else {
                console.log("Lost or not");
            }
        }
    });
    const nextElement = document.getElementById("next");
    nextElement === null || nextElement === void 0 ? void 0 : nextElement.addEventListener("click", e => {
        if (player.state === game_1.State.Leave) {
            if (selectedElement !== null) {
                handleNextClick(e, player, selectedElement);
                const cardElements = document.querySelectorAll("#player img");
                const index = parseInt(selectedElement.dataset.index || "-1");
                for (let i = 0; i < cardElements.length; i++) {
                    const cardElement = cardElements[i];
                    const jndex = parseInt(cardElement.dataset.index || "-1");
                    if (jndex > index) {
                        cardElement.dataset.index = `${jndex - 1}`;
                    }
                    if (jndex === index) {
                        cardElement.remove();
                    }
                }
                const group = document.querySelectorAll("#player .group")[2];
                const newCard = document.createElement("img");
                newCard.dataset.index = "10";
                newCard.style.display = "none";
                newCard.addEventListener('click', e => handleClick(e, player));
                group.appendChild(newCard);
                selectedElement.classList.remove("selected-card");
                selectedElement = null;
                displayPlayerHand(player);
            }
        }
    });
    const cardElements = document.querySelectorAll("#player img");
    for (let i = 0; i < cardElements.length; i++) {
        const cardElement = cardElements[i];
        cardElement.addEventListener('click', e => handleClick(e, player));
    }
    const groupElements = document.querySelectorAll("#player .group");
    for (let i = 0; i < groupElements.length; i++) {
        const groupElement = groupElements[i];
        groupElement.addEventListener('click', e => handleGroupClick(e));
    }
}
exports.setup = setup;
function handleReserveClick(_e, player) {
    try {
        player.choose(player.reserve.pop());
        displayPlayerHand(player);
    }
    catch (err) {
        console.error(`Failed to get card from reserve. ${err}`);
    }
}
function displayPlayerHand(player) {
    const cardElements = document.querySelectorAll("#player img");
    if (cardElements !== undefined) {
        for (let i = 0; i < cardElements.length; i++) {
            const cardElement = cardElements[i];
            const index = parseInt(cardElement.dataset.index || "-1");
            const card = player.hand[index];
            if (card !== undefined) {
                cardElement.src = "./cards/" + (0, cards_1.getSVG)(card) + ".svg";
                if (index === 10) {
                    cardElement.style.display = "";
                    cardElement.classList.add('card');
                }
            }
        }
    }
    else {
        throw new Error("Cards to replace not found");
    }
    const reserve = player.reserve[player.reserve.length - 1];
    const reserveElement = document.getElementById("reserve");
    if (reserveElement) {
        if (reserve) {
            reserveElement.src = "./cards/" + (0, cards_1.getSVG)(reserve) + ".svg";
        }
        else {
            reserveElement.src = "./cards/transparent.png";
        }
    }
    const deckElement = document.getElementById("deck");
    const leaveElement = document.getElementById("next");
    const white = "#F6F4F4";
    const green = "#00c86c";
    if (deckElement && reserveElement && leaveElement) {
        if (player.state === game_1.State.Choose) {
            deckElement.style.outlineColor = green;
            reserveElement.style.borderColor = green;
            leaveElement.style.borderColor = white;
        }
        if (player.state === game_1.State.Leave) {
            deckElement.style.outlineColor = white;
            reserveElement.style.borderColor = white;
            leaveElement.style.borderColor = green;
        }
        if (player.state === game_1.State.Wait) {
            deckElement.style.outlineColor = white;
            reserveElement.style.borderColor = white;
            leaveElement.style.borderColor = white;
        }
    }
}
exports.displayPlayerHand = displayPlayerHand;
let selectedElement = null;
function handleClick(e, player) {
    e.stopPropagation();
    e.preventDefault();
    const target = e.target;
    if (selectedElement === null) {
        selectedElement = target;
        selectedElement.classList.add("selected-card");
        return;
    }
    if (selectedElement === target) {
        selectedElement.classList.remove("selected-card");
        selectedElement = null;
        return;
    }
    const group = target.parentNode;
    if ((group === null || group === void 0 ? void 0 : group.querySelectorAll(".card").length) < 5 || group === selectedElement.parentNode) {
        group === null || group === void 0 ? void 0 : group.insertBefore(selectedElement, target);
    }
    selectedElement.classList.remove("selected-card");
    selectedElement = null;
}
function handleGroupClick(e) {
    if (selectedElement === null)
        return;
    const group = e.target;
    if ((group === null || group === void 0 ? void 0 : group.querySelectorAll(".card").length) < 5) {
        group === null || group === void 0 ? void 0 : group.appendChild(selectedElement);
    }
    selectedElement.classList.remove("selected-card");
    selectedElement = null;
}


/***/ }),

/***/ "./src/lib/game.ts":
/*!*************************!*\
  !*** ./src/lib/game.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Game = exports.Player = exports.State = void 0;
const cards_1 = __webpack_require__(/*! ./../lib/cards */ "./src/lib/cards.ts");
var State;
(function (State) {
    State[State["Wait"] = 0] = "Wait";
    State[State["Choose"] = 1] = "Choose";
    State[State["Leave"] = 2] = "Leave";
})(State || (exports.State = State = {}));
class Player {
    constructor() {
        this.hand = [];
        this.reserve = [];
        this.state = State.Wait;
    }
    add(card) {
        if (this.hand.length > 11) {
            throw new Error("Hand of player is too big");
        }
        this.hand.push(card);
    }
    addReserve(card) {
        this.reserve.push(card);
    }
    checkWin() {
        return this.checkWinHelp([], [], [], [...this.hand]);
    }
    checkWinHelp(a, b, c, deck) {
        if (this.checkGroups(a, b, c)) {
            return true;
        }
        if (a.length > 5 || b.length > 4 || c.length > 3)
            return false;
        if (a.length === 5 && !this.checkGroup(a))
            return false;
        if (b.length === 4 && !this.checkGroup(b))
            return false;
        if (c.length === 3 && !this.checkGroup(c))
            return false;
        const card = deck.pop();
        if (card !== undefined) {
            if (this.checkWinHelp([...a, card], b, c, [...deck]))
                return true;
            if (this.checkWinHelp(a, [...b, card], c, [...deck]))
                return true;
            if (this.checkWinHelp(a, b, [...c, card], [...deck]))
                return true;
        }
        return false;
    }
    checkGroups(a, b, c) {
        if (!this.checkSize(a.length, b.length, c.length))
            return false;
        return this.checkGroup(a) && this.checkGroup(b) && this.checkGroup(c);
    }
    checkGroup(a) {
        return this.checkSequence(a) || this.checkStair(a);
    }
    checkSequence(a) {
        if (a.length < 3)
            return false;
        let test = ((1 << 14) - 1) << 4;
        for (let c of a) {
            test &= c;
        }
        return test !== 0;
    }
    checkStair(a) {
        if (a.length < 3)
            return false;
        let test = 0;
        for (let c of a) {
            test |= c;
        }
        let suitTest = ((1 << 4) - 1) & test;
        if (suitTest === 0 ||
            (suitTest & (suitTest - 1)) !== 0)
            return false;
        test &= ((1 << 14) - 1) << 4;
        for (let i = 1; i < a.length; i++) {
            test &= (test << 1);
        }
        return test !== 0;
    }
    checkSize(a, b, c) {
        return a + b + c == 11 && a >= 3 && b >= 3 && c >= 3;
    }
    choose(card) {
        if (this.state !== State.Choose) {
            throw new Error("Player not in choose state");
        }
        if (card !== undefined) {
            this.hand.push(card);
            this.state = State.Leave;
        }
        else {
            throw new Error("No cards in argument");
        }
    }
    leave(index) {
        if (this.state !== State.Leave) {
            throw new Error("Player not in leave state");
        }
        if (index < 0 || index > this.hand.length) {
            throw new Error("Index out of bounds");
        }
        const [card] = this.hand.splice(index, 1);
        this.state = State.Wait;
        return card;
    }
}
exports.Player = Player;
class Game {
    ;
    constructor(numberPlayers) {
        this.players = [];
        this.deck = [];
        this.playerIndex = 0;
        if (numberPlayers < 2)
            throw new Error("Game needs atleast 2 player");
        for (let i = 0; i < numberPlayers; i++) {
            this.players.push(new Player());
        }
        this.player = this.players[this.playerIndex];
        this.deck = (0, cards_1.createDeck)(1);
        (0, cards_1.shuffle)(this.deck);
        this.deal();
        this.player.state = State.Choose;
    }
    deal() {
        for (let i = 0; i < 10; i++) {
            for (let player of this.players) {
                const card = this.deck.pop();
                if (card) {
                    player.add(card);
                }
                else {
                    throw new Error("No cards left to deal");
                }
            }
        }
    }
    nextPlayer() {
        this.playerIndex = (this.playerIndex + 1) % this.players.length;
        this.player = this.players[this.playerIndex];
    }
}
exports.Game = Game;


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/game/guest.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FyZF9nYW1lLy4vc3JjL2dhbWUvaW5kZXguY3NzIiwid2VicGFjazovL2NhcmRfZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lLy4vc3JjL2dhbWUvaW5kZXguY3NzP2E1MTUiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NhcmRfZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NhcmRfZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9zcmMvZ2FtZS9ndWVzdC50cyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9zcmMvbGliL2NhcmRzLnRzIiwid2VicGFjazovL2NhcmRfZ2FtZS8uL3NyYy9saWIvZGlzcGxheS50cyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9zcmMvbGliL2dhbWUudHMiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhcmRfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NhcmRfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhcmRfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NhcmRfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG5cdC0tY2FyZC1oZWlnaHQ6IDE5dmg7XG5cdC0tY2FyZC1yYXRpbzogMC43MTY4MTQyOTE0O1xufVxuXG5ib2R5IHtcblx0ZGlzcGxheTogZmxleDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzM1NjU0ZDtcblx0bWFyZ2luOiAwO1xuXG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDEwMCU7XG5cdC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn1cblxuI3dpbiB7XG5cdGZvbnQtc2l6ZTogNXJlbTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDUwJTtcblx0bGVmdDogNTAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0Ym9yZGVyLXJhZGl1czogNSU7XG59XG5cbiNnYW1lIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ZmxleC1mbG93OiBjb2x1bW47XG5cdG1heC13aWR0aDogY2FsYyg1ICogKHZhcigtLWNhcmQtaGVpZ2h0KSAqIHZhcigtLWNhcmQtcmF0aW8pICsgMXZ3KSk7XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXJnaW46IGF1dG87XG59XG5cbiNjaG9pY2VzIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1mbG93OiByb3c7XG5cdG1hcmdpbjogMnZoO1xuXHR3aWR0aDogMTAwJTtcbn1cblxuI2Nob2ljZXM+I25leHQge1xuXHRib3JkZXI6IDJweCBzb2xpZCAjRjZGNEY0O1xuXHRib3JkZXItcmFkaXVzOiA3cHg7XG5cdG1hcmdpbjogMC41dnc7XG5cdHBhZGRpbmc6IDAuNXZoO1xuXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXG5cdGhlaWdodDogdmFyKC0tY2FyZC1oZWlnaHQpO1xuXHR3aWR0aDogY2FsYyh2YXIoLS1jYXJkLWhlaWdodCkgKiB2YXIoLS1jYXJkLXJhdGlvKSk7XG5cblx0Y29sb3I6ICNGNkY0RjQ7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1mYW1pbHk6ICBzYW5zLXNlcmlmO1xuXHRmb250LXdlaWdodDogOTAwO1xuXHRsZXR0ZXItc3BhY2luZzogbWluKDAuNXZ3LCAwLjV2aCk7XG5cdGxpbmUtaGVpZ2h0OiBtaW4oNXZ3LCA1dmgpO1xuXHRmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1oZWlnaHQpICogdmFyKC0tY2FyZC1yYXRpbykgLyA1KTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNjaG9pY2VzPiNyZXNlcnZlIHtcblx0b3V0bGluZTpub25lO1xuXHRib3JkZXI6IDJweCBzb2xpZCAjRjZGNEY0O1xuXHRib3JkZXItcmFkaXVzOiA3cHg7XG5cblx0bWFyZ2luOiAwLjV2dztcblx0cGFkZGluZzogMC41dmg7XG5cblx0aGVpZ2h0OiB2YXIoLS1jYXJkLWhlaWdodCk7XG5cdHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtaGVpZ2h0KSAqIHZhcigtLWNhcmQtcmF0aW8pKTtcbn1cblxuI2Nob2ljZXM+I2RlY2sge1xuXHQvKiBib3gtc2hhZG93OiBpbnNldCAxMnB4IC0yMnB4IDE1cHggLTFweCByZ2JhKDAsMCwwLDAuMzYpOyAqL1xuXG5cdG91dGxpbmU6IHNvbGlkIDJweCAjRjZGNEY0O1xuXHRib3JkZXItcmFkaXVzOiA3cHg7XG5cblx0bWFyZ2luOiBjYWxjKDAuNXZ3ICsgMnB4KTtcblx0cGFkZGluZzogMC41dmg7XG5cblx0aGVpZ2h0OiB2YXIoLS1jYXJkLWhlaWdodCk7XG5cdHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtaGVpZ2h0KSAqIHZhcigtLWNhcmQtcmF0aW8pKTtcbn1cblxuI3BsYXllciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4uZ3JvdXAge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRmbGV4LXdyYXA6IG5vd3JhcDtcblx0YWxpZ24taXRlbXM6IHN0YXJ0O1xuXHR3aWR0aDogMTAwJTtcblx0XG5cdC8qIGJhY2tncm91bmQ6IDsgKi9cblx0bWFyZ2luOiAwLjV2aDtcblx0cGFkZGluZzogMC41dmg7XG5cblx0Ym9yZGVyOiAycHggc29saWQgI0Y2RjRGNDtcblx0Ym9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmZpbGxlciB7XG5cdGhlaWdodDogdmFyKC0tY2FyZC1oZWlnaHQpO1xuXHRtYXJnaW4tdG9wOiAwLjV2dztcblx0bWFyZ2luLWJvdHRvbTogMC41dnc7XG59XG5cblxuaW1nLmNhcmQge1xuXHRoZWlnaHQ6IHZhcigtLWNhcmQtaGVpZ2h0KTtcblx0bWFyZ2luOiAwLjV2dztcblxuICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbmltZy5jYXJkLnNlbGVjdGVkLWNhcmQge1xuXHR0cmFuc2Zvcm06IFRyYW5zbGF0ZVkoLTUlKTtcbn1cblxuQG1lZGlhIChtYXgtYXNwZWN0LXJhdGlvOiAxLzEpIHtcblx0OnJvb3Qge1xuXHRcdC0tY2FyZC1oZWlnaHQ6IGNhbGMoMTV2dyAvIHZhcigtLWNhcmQtcmF0aW8pKTtcblx0fVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZ2FtZS9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxtQkFBbUI7Q0FDbkIsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHlCQUF5QjtDQUN6QixTQUFTOztDQUVULFlBQVk7Q0FDWixXQUFXO0NBQ1gsaUNBQWlDO0FBQ2xDOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsU0FBUztDQUNULGdDQUFnQztDQUNoQyxrQkFBa0I7Q0FDbEIsdUJBQXVCO0NBQ3ZCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLG1FQUFtRTtDQUNuRSxXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsV0FBVztBQUNaOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsY0FBYzs7Q0FFZCxpQkFBaUI7O0NBRWpCLDBCQUEwQjtDQUMxQixtREFBbUQ7O0NBRW5ELGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsd0JBQXdCO0NBQ3hCLGdCQUFnQjtDQUNoQixpQ0FBaUM7Q0FDakMsMEJBQTBCO0NBQzFCLDJEQUEyRDtDQUMzRCxrQkFBa0I7OztDQUdsQixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLFlBQVk7Q0FDWix5QkFBeUI7Q0FDekIsa0JBQWtCOztDQUVsQixhQUFhO0NBQ2IsY0FBYzs7Q0FFZCwwQkFBMEI7Q0FDMUIsbURBQW1EO0FBQ3BEOztBQUVBO0NBQ0MsNkRBQTZEOztDQUU3RCwwQkFBMEI7Q0FDMUIsa0JBQWtCOztDQUVsQix5QkFBeUI7Q0FDekIsY0FBYzs7Q0FFZCwwQkFBMEI7Q0FDMUIsbURBQW1EO0FBQ3BEOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsV0FBVztBQUNaOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLFdBQVc7O0NBRVgsa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixjQUFjOztDQUVkLHlCQUF5QjtDQUN6QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIsaUJBQWlCO0NBQ2pCLG9CQUFvQjtBQUNyQjs7O0FBR0E7Q0FDQywwQkFBMEI7Q0FDMUIsYUFBYTs7SUFFVix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBO0NBQ0MsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0M7RUFDQyw2Q0FBNkM7Q0FDOUM7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuXFx0LS1jYXJkLWhlaWdodDogMTl2aDtcXG5cXHQtLWNhcmQtcmF0aW86IDAuNzE2ODE0MjkxNDtcXG59XFxuXFxuYm9keSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzU2NTRkO1xcblxcdG1hcmdpbjogMDtcXG5cXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbn1cXG5cXG4jd2luIHtcXG5cXHRmb250LXNpemU6IDVyZW07XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNTAlO1xcblxcdGxlZnQ6IDUwJTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNSU7XFxufVxcblxcbiNnYW1lIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0ZmxleC1mbG93OiBjb2x1bW47XFxuXFx0bWF4LXdpZHRoOiBjYWxjKDUgKiAodmFyKC0tY2FyZC1oZWlnaHQpICogdmFyKC0tY2FyZC1yYXRpbykgKyAxdncpKTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXJnaW46IGF1dG87XFxufVxcblxcbiNjaG9pY2VzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZmxvdzogcm93O1xcblxcdG1hcmdpbjogMnZoO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jY2hvaWNlcz4jbmV4dCB7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgI0Y2RjRGNDtcXG5cXHRib3JkZXItcmFkaXVzOiA3cHg7XFxuXFx0bWFyZ2luOiAwLjV2dztcXG5cXHRwYWRkaW5nOiAwLjV2aDtcXG5cXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXG5cXG5cXHRoZWlnaHQ6IHZhcigtLWNhcmQtaGVpZ2h0KTtcXG5cXHR3aWR0aDogY2FsYyh2YXIoLS1jYXJkLWhlaWdodCkgKiB2YXIoLS1jYXJkLXJhdGlvKSk7XFxuXFxuXFx0Y29sb3I6ICNGNkY0RjQ7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtZmFtaWx5OiAgc2Fucy1zZXJpZjtcXG5cXHRmb250LXdlaWdodDogOTAwO1xcblxcdGxldHRlci1zcGFjaW5nOiBtaW4oMC41dncsIDAuNXZoKTtcXG5cXHRsaW5lLWhlaWdodDogbWluKDV2dywgNXZoKTtcXG5cXHRmb250LXNpemU6IGNhbGModmFyKC0tY2FyZC1oZWlnaHQpICogdmFyKC0tY2FyZC1yYXRpbykgLyA1KTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jY2hvaWNlcz4jcmVzZXJ2ZSB7XFxuXFx0b3V0bGluZTpub25lO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkICNGNkY0RjQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogN3B4O1xcblxcblxcdG1hcmdpbjogMC41dnc7XFxuXFx0cGFkZGluZzogMC41dmg7XFxuXFxuXFx0aGVpZ2h0OiB2YXIoLS1jYXJkLWhlaWdodCk7XFxuXFx0d2lkdGg6IGNhbGModmFyKC0tY2FyZC1oZWlnaHQpICogdmFyKC0tY2FyZC1yYXRpbykpO1xcbn1cXG5cXG4jY2hvaWNlcz4jZGVjayB7XFxuXFx0LyogYm94LXNoYWRvdzogaW5zZXQgMTJweCAtMjJweCAxNXB4IC0xcHggcmdiYSgwLDAsMCwwLjM2KTsgKi9cXG5cXG5cXHRvdXRsaW5lOiBzb2xpZCAycHggI0Y2RjRGNDtcXG5cXHRib3JkZXItcmFkaXVzOiA3cHg7XFxuXFxuXFx0bWFyZ2luOiBjYWxjKDAuNXZ3ICsgMnB4KTtcXG5cXHRwYWRkaW5nOiAwLjV2aDtcXG5cXG5cXHRoZWlnaHQ6IHZhcigtLWNhcmQtaGVpZ2h0KTtcXG5cXHR3aWR0aDogY2FsYyh2YXIoLS1jYXJkLWhlaWdodCkgKiB2YXIoLS1jYXJkLXJhdGlvKSk7XFxufVxcblxcbiNwbGF5ZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZ3JvdXAge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRmbGV4LXdyYXA6IG5vd3JhcDtcXG5cXHRhbGlnbi1pdGVtczogc3RhcnQ7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0XFxuXFx0LyogYmFja2dyb3VuZDogOyAqL1xcblxcdG1hcmdpbjogMC41dmg7XFxuXFx0cGFkZGluZzogMC41dmg7XFxuXFxuXFx0Ym9yZGVyOiAycHggc29saWQgI0Y2RjRGNDtcXG5cXHRib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4uZmlsbGVyIHtcXG5cXHRoZWlnaHQ6IHZhcigtLWNhcmQtaGVpZ2h0KTtcXG5cXHRtYXJnaW4tdG9wOiAwLjV2dztcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjV2dztcXG59XFxuXFxuXFxuaW1nLmNhcmQge1xcblxcdGhlaWdodDogdmFyKC0tY2FyZC1oZWlnaHQpO1xcblxcdG1hcmdpbjogMC41dnc7XFxuXFxuICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5pbWcuY2FyZC5zZWxlY3RlZC1jYXJkIHtcXG5cXHR0cmFuc2Zvcm06IFRyYW5zbGF0ZVkoLTUlKTtcXG59XFxuXFxuQG1lZGlhIChtYXgtYXNwZWN0LXJhdGlvOiAxLzEpIHtcXG5cXHQ6cm9vdCB7XFxuXFx0XFx0LS1jYXJkLWhlaWdodDogY2FsYygxNXZ3IC8gdmFyKC0tY2FyZC1yYXRpbykpO1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwiLi9pbmRleC5jc3NcIik7XG5jb25zdCBkaXNwbGF5XzEgPSByZXF1aXJlKFwiLi4vbGliL2Rpc3BsYXlcIik7XG5jb25zdCBnYW1lXzEgPSByZXF1aXJlKFwiLi4vbGliL2dhbWVcIik7XG5sZXQgcGxheWVyO1xubGV0IGRlY2tSZXNvbHZlO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHJlY2VpdmVNZXNzYWdlKTtcbmZ1bmN0aW9uIHJlY2VpdmVNZXNzYWdlKHsgZGF0YSB9KSB7XG4gICAgY29uc29sZS5sb2coYEd1ZXN0IFJlY2VpdmVkIGZyb20gd2luZG93ICR7ZGF0YX1gKTtcbiAgICBjb25zdCBbY21kLCBhcmddID0gZGF0YS5zcGxpdCgvICguKikvcyk7XG4gICAgc3dpdGNoIChjbWQpIHtcbiAgICAgICAgY2FzZSBcInN0YXJ0XCI6XG4gICAgICAgICAgICBwbGF5ZXIgPSBuZXcgZ2FtZV8xLlBsYXllcigpO1xuICAgICAgICAgICAgKDAsIGRpc3BsYXlfMS5zZXR1cCkocGxheWVyLCBoYW5kbGVEZWNrQ2xpY2ssIGhhbmRsZU5leHRDbGljayk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkd1ZXN0IFN0YXJ0ZWRcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNldHVwXCI6XG4gICAgICAgICAgICBwbGF5ZXIuaGFuZCA9IEpTT04ucGFyc2UoYXJnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgSGFuZFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWN0dWFsIHBsYXllclwiLCBwbGF5ZXIuaGFuZCk7XG4gICAgICAgICAgICAoMCwgZGlzcGxheV8xLmRpc3BsYXlQbGF5ZXJIYW5kKShwbGF5ZXIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJkZWNrXCI6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIERlY2sgcG9wXCIpO1xuICAgICAgICAgICAgaWYgKGRlY2tSZXNvbHZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBkZWNrUmVzb2x2ZShwYXJzZUludChhcmcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibmV4dFwiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBuZXh0XCIpO1xuICAgICAgICAgICAgcGxheWVyLmFkZFJlc2VydmUocGFyc2VJbnQoYXJnKSk7XG4gICAgICAgICAgICBwbGF5ZXIuc3RhdGUgPSBnYW1lXzEuU3RhdGUuQ2hvb3NlO1xuICAgICAgICAgICAgKDAsIGRpc3BsYXlfMS5kaXNwbGF5UGxheWVySGFuZCkocGxheWVyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbmNvbnN0IHNlbmRNZXNzYWdlID0gd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZTtcbmZ1bmN0aW9uIGhhbmRsZURlY2tDbGljayhfZSwgcGxheWVyKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgZnVuY3Rpb24gcG9wRGVjaygpIHtcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKFwicG9wXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZW50IGNvbW1hbmQgcG9wXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCBfKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVja1Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIuc3RhdGUgPT09IGdhbWVfMS5TdGF0ZS5DaG9vc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkID0geWllbGQgcG9wRGVjaygpO1xuICAgICAgICAgICAgICAgIHBsYXllci5jaG9vc2UoY2FyZCk7XG4gICAgICAgICAgICAgICAgKDAsIGRpc3BsYXlfMS5kaXNwbGF5UGxheWVySGFuZCkocGxheWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gZ2V0IGNhcmQgZnJvbSBkZWNrLiAke2Vycn1gKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gaGFuZGxlTmV4dENsaWNrKF9lLCBwbGF5ZXIsIHNlbGVjdGVkRWxlbWVudCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoc2VsZWN0ZWRFbGVtZW50LmRhdGFzZXQuaW5kZXggfHwgXCItMVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBwbGF5ZXIubGVhdmUoaW5kZXgpO1xuICAgICAgICAgICAgc2VuZE1lc3NhZ2UoXCJuZXh0IFwiICsgY2FyZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlbnQgY29tbWFuZCBuZXh0XCIpO1xuICAgICAgICAgICAgKDAsIGRpc3BsYXlfMS5kaXNwbGF5UGxheWVySGFuZCkocGxheWVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBsZWF2ZSBjYXJkLiAke2Vycn1gKTtcbiAgICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIENhcmQgQml0IFN0cnVjdHVyZVxuLy8gXG4vLyAwMDAxIENsdWJzXG4vLyAwMDEwIERpYW1vbmRzXG4vLyAwMTAwIEhlYXJ0c1xuLy8gMTAwMCBTcGFkZXNcbi8vXG4vLyAxMDAwMDAwMDAwMDAwMSBBY2Vcbi8vIDAwMDAwMDAwMDAwMDEwIFR3byBcbi8vIDAwMDAwMDAwMDAwMTAwIFRocmVlIFxuLy9cbi8vIENhcmQgMiBvZiBDbHVic1xuLy8gMDAwMDAwMDAwMDAwMTAgMTAwMFxuLy9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3dhcCA9IGV4cG9ydHMuc2h1ZmZsZSA9IGV4cG9ydHMuY3JlYXRlRGVjayA9IGV4cG9ydHMuY3JlYXRlRW1wdHlEZWNrID0gZXhwb3J0cy5nZXRTVkcgPSBleHBvcnRzLmdldFN0cmluZyA9IGV4cG9ydHMuZ2V0UmFuayA9IGV4cG9ydHMuZ2V0U3VpdCA9IGV4cG9ydHMuY3JlYXRlQ2FyZCA9IGV4cG9ydHMuU3VpdEVudHJpZXMgPSBleHBvcnRzLlJhbmtFbnRyaWVzID0gZXhwb3J0cy5SYW5rID0gZXhwb3J0cy5TdWl0ID0gdm9pZCAwO1xudmFyIFN1aXQ7XG4oZnVuY3Rpb24gKFN1aXQpIHtcbiAgICBTdWl0W1N1aXRbXCJDbHVic1wiXSA9IDFdID0gXCJDbHVic1wiO1xuICAgIFN1aXRbU3VpdFtcIkRpYW1vbmRzXCJdID0gMl0gPSBcIkRpYW1vbmRzXCI7XG4gICAgU3VpdFtTdWl0W1wiSGVhcnRzXCJdID0gNF0gPSBcIkhlYXJ0c1wiO1xuICAgIFN1aXRbU3VpdFtcIlNwYWRlc1wiXSA9IDhdID0gXCJTcGFkZXNcIjtcbn0pKFN1aXQgfHwgKGV4cG9ydHMuU3VpdCA9IFN1aXQgPSB7fSkpO1xudmFyIFJhbms7XG4oZnVuY3Rpb24gKFJhbmspIHtcbiAgICBSYW5rW1JhbmtbXCJBY2VcIl0gPSAxMzEwODhdID0gXCJBY2VcIjtcbiAgICBSYW5rW1JhbmtbXCJUd29cIl0gPSAzMl0gPSBcIlR3b1wiO1xuICAgIFJhbmtbUmFua1tcIlRocmVlXCJdID0gNjRdID0gXCJUaHJlZVwiO1xuICAgIFJhbmtbUmFua1tcIkZvdXJcIl0gPSAxMjhdID0gXCJGb3VyXCI7XG4gICAgUmFua1tSYW5rW1wiRml2ZVwiXSA9IDI1Nl0gPSBcIkZpdmVcIjtcbiAgICBSYW5rW1JhbmtbXCJTaXhcIl0gPSA1MTJdID0gXCJTaXhcIjtcbiAgICBSYW5rW1JhbmtbXCJTZXZlblwiXSA9IDEwMjRdID0gXCJTZXZlblwiO1xuICAgIFJhbmtbUmFua1tcIkVpZ2h0XCJdID0gMjA0OF0gPSBcIkVpZ2h0XCI7XG4gICAgUmFua1tSYW5rW1wiTmluZVwiXSA9IDQwOTZdID0gXCJOaW5lXCI7XG4gICAgUmFua1tSYW5rW1wiVGVuXCJdID0gODE5Ml0gPSBcIlRlblwiO1xuICAgIFJhbmtbUmFua1tcIkphY2tcIl0gPSAxNjM4NF0gPSBcIkphY2tcIjtcbiAgICBSYW5rW1JhbmtbXCJRdWVlblwiXSA9IDMyNzY4XSA9IFwiUXVlZW5cIjtcbiAgICBSYW5rW1JhbmtbXCJLaW5nXCJdID0gNjU1MzZdID0gXCJLaW5nXCI7XG59KShSYW5rIHx8IChleHBvcnRzLlJhbmsgPSBSYW5rID0ge30pKTtcbmNvbnN0IFN1aXRUb1N2ZyA9IHtcbiAgICBcIkNsdWJzXCI6IFwiQ1wiLFxuICAgIFwiRGlhbW9uZHNcIjogXCJEXCIsXG4gICAgXCJIZWFydHNcIjogXCJIXCIsXG4gICAgXCJTcGFkZXNcIjogXCJTXCIsXG59O1xuY29uc3QgUmFua1RvU3ZnID0ge1xuICAgIFwiQWNlXCI6IFwiQVwiLFxuICAgIFwiVHdvXCI6IFwiMlwiLFxuICAgIFwiVGhyZWVcIjogXCIzXCIsXG4gICAgXCJGb3VyXCI6IFwiNFwiLFxuICAgIFwiRml2ZVwiOiBcIjVcIixcbiAgICBcIlNpeFwiOiBcIjZcIixcbiAgICBcIlNldmVuXCI6IFwiN1wiLFxuICAgIFwiRWlnaHRcIjogXCI4XCIsXG4gICAgXCJOaW5lXCI6IFwiOVwiLFxuICAgIFwiVGVuXCI6IFwiMTBcIixcbiAgICBcIkphY2tcIjogXCJKXCIsXG4gICAgXCJRdWVlblwiOiBcIlFcIixcbiAgICBcIktpbmdcIjogXCJLXCIsXG59O1xuZXhwb3J0cy5SYW5rRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKFJhbmspLnNsaWNlKDEzKTtcbmV4cG9ydHMuU3VpdEVudHJpZXMgPSBPYmplY3QuZW50cmllcyhTdWl0KS5zbGljZSg0KTtcbmZ1bmN0aW9uIGNyZWF0ZUNhcmQocmFuaywgc3VpdCkge1xuICAgIHJldHVybiByYW5rIHwgc3VpdDtcbn1cbmV4cG9ydHMuY3JlYXRlQ2FyZCA9IGNyZWF0ZUNhcmQ7XG5mdW5jdGlvbiBnZXRTdWl0KGNhcmQpIHtcbiAgICBjb25zdCBzdWl0YiA9ICgoMSA8PCA0KSAtIDEpICYgY2FyZDtcbiAgICBmb3IgKGxldCBbbmFtZSwgc3VpdF0gb2YgZXhwb3J0cy5TdWl0RW50cmllcykge1xuICAgICAgICBpZiAoc3VpdCA9PT0gc3VpdGIpXG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU3VpdCBub3QgZm91bmRcIik7XG59XG5leHBvcnRzLmdldFN1aXQgPSBnZXRTdWl0O1xuZnVuY3Rpb24gZ2V0UmFuayhjYXJkKSB7XG4gICAgY29uc3QgcmFua2IgPSAoKCgxIDw8IDE0KSAtIDEpIDw8IDQpICYgY2FyZDtcbiAgICBmb3IgKGxldCBbbmFtZSwgcmFua10gb2YgZXhwb3J0cy5SYW5rRW50cmllcykge1xuICAgICAgICBpZiAocmFuayA9PT0gcmFua2IpXG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUmFuayBub3QgZm91bmRcIik7XG59XG5leHBvcnRzLmdldFJhbmsgPSBnZXRSYW5rO1xuZnVuY3Rpb24gZ2V0U3RyaW5nKGNhcmQpIHtcbiAgICByZXR1cm4gYCR7Z2V0U3VpdChjYXJkKX0gJHtnZXRSYW5rKGNhcmQpfWA7XG59XG5leHBvcnRzLmdldFN0cmluZyA9IGdldFN0cmluZztcbmZ1bmN0aW9uIGdldFNWRyhjYXJkKSB7XG4gICAgY29uc3QgW3N1aXQsIHJhbmtdID0gZ2V0U3RyaW5nKGNhcmQpLnNwbGl0KFwiIFwiKTtcbiAgICBsZXQgc3ZnID0gXCJcIjtcbiAgICBzdmcgKz0gUmFua1RvU3ZnW3JhbmtdO1xuICAgIHN2ZyArPSBTdWl0VG9Tdmdbc3VpdF07XG4gICAgcmV0dXJuIHN2Zztcbn1cbmV4cG9ydHMuZ2V0U1ZHID0gZ2V0U1ZHO1xuZnVuY3Rpb24gY3JlYXRlRW1wdHlEZWNrKCkge1xuICAgIHJldHVybiBbXTtcbn1cbmV4cG9ydHMuY3JlYXRlRW1wdHlEZWNrID0gY3JlYXRlRW1wdHlEZWNrO1xuZnVuY3Rpb24gY3JlYXRlRGVjayhzaXplKSB7XG4gICAgbGV0IGRlY2sgPSBbXTtcbiAgICBmb3IgKGxldCBzID0gMDsgcyA8IHNpemU7IHMrKykge1xuICAgICAgICBmb3IgKGxldCBbc3VpdCwgX10gb2YgZXhwb3J0cy5TdWl0RW50cmllcykge1xuICAgICAgICAgICAgZm9yIChsZXQgW3JhbmssIF9dIG9mIGV4cG9ydHMuUmFua0VudHJpZXMpIHtcbiAgICAgICAgICAgICAgICBkZWNrLnB1c2goY3JlYXRlQ2FyZChSYW5rW3JhbmtdLCBTdWl0W3N1aXRdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlY2s7XG59XG5leHBvcnRzLmNyZWF0ZURlY2sgPSBjcmVhdGVEZWNrO1xuZnVuY3Rpb24gc2h1ZmZsZShkZWNrKSB7XG4gICAgbGV0IGN1cnJlbnRfaW5kZXggPSBkZWNrLmxlbmd0aDtcbiAgICB3aGlsZSAoY3VycmVudF9pbmRleCAhPSAwKSB7XG4gICAgICAgIGxldCByYW5kb21faW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkZWNrLmxlbmd0aCk7XG4gICAgICAgIGN1cnJlbnRfaW5kZXggLT0gMTtcbiAgICAgICAgc3dhcChkZWNrLCBjdXJyZW50X2luZGV4LCByYW5kb21faW5kZXgpO1xuICAgIH1cbn1cbmV4cG9ydHMuc2h1ZmZsZSA9IHNodWZmbGU7XG5mdW5jdGlvbiBzd2FwKGRlY2ssIGN1cnJlbnRfaW5kZXgsIHJhbmRvbV9pbmRleCkge1xuICAgIFtkZWNrW2N1cnJlbnRfaW5kZXhdLCBkZWNrW3JhbmRvbV9pbmRleF1dID0gW2RlY2tbcmFuZG9tX2luZGV4XSwgZGVja1tjdXJyZW50X2luZGV4XV07XG59XG5leHBvcnRzLnN3YXAgPSBzd2FwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRpc3BsYXlQbGF5ZXJIYW5kID0gZXhwb3J0cy5zZXR1cCA9IHZvaWQgMDtcbmNvbnN0IGNhcmRzXzEgPSByZXF1aXJlKFwiLi9jYXJkc1wiKTtcbmNvbnN0IGdhbWVfMSA9IHJlcXVpcmUoXCIuL2dhbWVcIik7XG5mdW5jdGlvbiBzZXR1cChwbGF5ZXIsIGhhbmRsZURlY2tDbGljaywgaGFuZGxlTmV4dENsaWNrKSB7XG4gICAgY29uc3QgZGVja0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlY2tcIik7XG4gICAgZGVja0VsZW1lbnQgPT09IG51bGwgfHwgZGVja0VsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlY2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgaWYgKHBsYXllci5zdGF0ZSA9PT0gZ2FtZV8xLlN0YXRlLkNob29zZSkge1xuICAgICAgICAgICAgaGFuZGxlRGVja0NsaWNrKGUsIHBsYXllcik7XG4gICAgICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyIC5jYXJkW2RhdGEtaW5kZXg9JzEwJ11cIik7XG4gICAgICAgICAgICBpZiAoY2FyZEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyIC5ncm91cFwiKVsyXTtcbiAgICAgICAgICAgICAgICBncm91cC5hcHBlbmRDaGlsZChjYXJkRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGxheWVyLmNoZWNrV2luKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldPTlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCB3aW5FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5cIik7XG4gICAgICAgICAgICAgICAgaWYgKHdpbkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luRWxlbWVudC5pbm5lckhUTUwgPSBcIllvdSBXb25cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvc3Qgb3Igbm90XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgcmVzZXJ2ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VydmVcIik7XG4gICAgcmVzZXJ2ZUVsZW1lbnQgPT09IG51bGwgfHwgcmVzZXJ2ZUVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlc2VydmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgaWYgKHBsYXllci5zdGF0ZSA9PT0gZ2FtZV8xLlN0YXRlLkNob29zZSkge1xuICAgICAgICAgICAgaGFuZGxlUmVzZXJ2ZUNsaWNrKGUsIHBsYXllcik7XG4gICAgICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyIC5jYXJkW2RhdGEtaW5kZXg9JzEwJ11cIik7XG4gICAgICAgICAgICBpZiAoY2FyZEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyIC5ncm91cFwiKVsyXTtcbiAgICAgICAgICAgICAgICBncm91cC5hcHBlbmRDaGlsZChjYXJkRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGxheWVyLmNoZWNrV2luKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldPTlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCB3aW5FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5cIik7XG4gICAgICAgICAgICAgICAgaWYgKHdpbkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luRWxlbWVudC5pbm5lckhUTUwgPSBcIllvdSBXb25cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvc3Qgb3Igbm90XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgbmV4dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRcIik7XG4gICAgbmV4dEVsZW1lbnQgPT09IG51bGwgfHwgbmV4dEVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5leHRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgaWYgKHBsYXllci5zdGF0ZSA9PT0gZ2FtZV8xLlN0YXRlLkxlYXZlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlTmV4dENsaWNrKGUsIHBsYXllciwgc2VsZWN0ZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3BsYXllciBpbWdcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChzZWxlY3RlZEVsZW1lbnQuZGF0YXNldC5pbmRleCB8fCBcIi0xXCIpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZEVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBqbmRleCA9IHBhcnNlSW50KGNhcmRFbGVtZW50LmRhdGFzZXQuaW5kZXggfHwgXCItMVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGpuZGV4ID4gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRFbGVtZW50LmRhdGFzZXQuaW5kZXggPSBgJHtqbmRleCAtIDF9YDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoam5kZXggPT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBncm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyIC5ncm91cFwiKVsyXTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgICAgICBuZXdDYXJkLmRhdGFzZXQuaW5kZXggPSBcIjEwXCI7XG4gICAgICAgICAgICAgICAgbmV3Q2FyZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgbmV3Q2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gaGFuZGxlQ2xpY2soZSwgcGxheWVyKSk7XG4gICAgICAgICAgICAgICAgZ3JvdXAuYXBwZW5kQ2hpbGQobmV3Q2FyZCk7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC1jYXJkXCIpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgZGlzcGxheVBsYXllckhhbmQocGxheWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGNhcmRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyIGltZ1wiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmRFbGVtZW50c1tpXTtcbiAgICAgICAgY2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGhhbmRsZUNsaWNrKGUsIHBsYXllcikpO1xuICAgIH1cbiAgICBjb25zdCBncm91cEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwbGF5ZXIgLmdyb3VwXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JvdXBFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBncm91cEVsZW1lbnQgPSBncm91cEVsZW1lbnRzW2ldO1xuICAgICAgICBncm91cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGhhbmRsZUdyb3VwQ2xpY2soZSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuc2V0dXAgPSBzZXR1cDtcbmZ1bmN0aW9uIGhhbmRsZVJlc2VydmVDbGljayhfZSwgcGxheWVyKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcGxheWVyLmNob29zZShwbGF5ZXIucmVzZXJ2ZS5wb3AoKSk7XG4gICAgICAgIGRpc3BsYXlQbGF5ZXJIYW5kKHBsYXllcik7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGdldCBjYXJkIGZyb20gcmVzZXJ2ZS4gJHtlcnJ9YCk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGlzcGxheVBsYXllckhhbmQocGxheWVyKSB7XG4gICAgY29uc3QgY2FyZEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwbGF5ZXIgaW1nXCIpO1xuICAgIGlmIChjYXJkRWxlbWVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkRWxlbWVudHNbaV07XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGNhcmRFbGVtZW50LmRhdGFzZXQuaW5kZXggfHwgXCItMVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBwbGF5ZXIuaGFuZFtpbmRleF07XG4gICAgICAgICAgICBpZiAoY2FyZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY2FyZEVsZW1lbnQuc3JjID0gXCIuL2NhcmRzL1wiICsgKDAsIGNhcmRzXzEuZ2V0U1ZHKShjYXJkKSArIFwiLnN2Z1wiO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGNhcmRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhcmRzIHRvIHJlcGxhY2Ugbm90IGZvdW5kXCIpO1xuICAgIH1cbiAgICBjb25zdCByZXNlcnZlID0gcGxheWVyLnJlc2VydmVbcGxheWVyLnJlc2VydmUubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgcmVzZXJ2ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VydmVcIik7XG4gICAgaWYgKHJlc2VydmVFbGVtZW50KSB7XG4gICAgICAgIGlmIChyZXNlcnZlKSB7XG4gICAgICAgICAgICByZXNlcnZlRWxlbWVudC5zcmMgPSBcIi4vY2FyZHMvXCIgKyAoMCwgY2FyZHNfMS5nZXRTVkcpKHJlc2VydmUpICsgXCIuc3ZnXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXNlcnZlRWxlbWVudC5zcmMgPSBcIi4vY2FyZHMvdHJhbnNwYXJlbnQucG5nXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZGVja0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlY2tcIik7XG4gICAgY29uc3QgbGVhdmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0XCIpO1xuICAgIGNvbnN0IHdoaXRlID0gXCIjRjZGNEY0XCI7XG4gICAgY29uc3QgZ3JlZW4gPSBcIiMwMGM4NmNcIjtcbiAgICBpZiAoZGVja0VsZW1lbnQgJiYgcmVzZXJ2ZUVsZW1lbnQgJiYgbGVhdmVFbGVtZW50KSB7XG4gICAgICAgIGlmIChwbGF5ZXIuc3RhdGUgPT09IGdhbWVfMS5TdGF0ZS5DaG9vc2UpIHtcbiAgICAgICAgICAgIGRlY2tFbGVtZW50LnN0eWxlLm91dGxpbmVDb2xvciA9IGdyZWVuO1xuICAgICAgICAgICAgcmVzZXJ2ZUVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBncmVlbjtcbiAgICAgICAgICAgIGxlYXZlRWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGF5ZXIuc3RhdGUgPT09IGdhbWVfMS5TdGF0ZS5MZWF2ZSkge1xuICAgICAgICAgICAgZGVja0VsZW1lbnQuc3R5bGUub3V0bGluZUNvbG9yID0gd2hpdGU7XG4gICAgICAgICAgICByZXNlcnZlRWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IHdoaXRlO1xuICAgICAgICAgICAgbGVhdmVFbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gZ3JlZW47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYXllci5zdGF0ZSA9PT0gZ2FtZV8xLlN0YXRlLldhaXQpIHtcbiAgICAgICAgICAgIGRlY2tFbGVtZW50LnN0eWxlLm91dGxpbmVDb2xvciA9IHdoaXRlO1xuICAgICAgICAgICAgcmVzZXJ2ZUVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSB3aGl0ZTtcbiAgICAgICAgICAgIGxlYXZlRWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5kaXNwbGF5UGxheWVySGFuZCA9IGRpc3BsYXlQbGF5ZXJIYW5kO1xubGV0IHNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG5mdW5jdGlvbiBoYW5kbGVDbGljayhlLCBwbGF5ZXIpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAoc2VsZWN0ZWRFbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgIHNlbGVjdGVkRWxlbWVudCA9IHRhcmdldDtcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC1jYXJkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgPT09IHRhcmdldCkge1xuICAgICAgICBzZWxlY3RlZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLWNhcmRcIik7XG4gICAgICAgIHNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZ3JvdXAgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICBpZiAoKGdyb3VwID09PSBudWxsIHx8IGdyb3VwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBncm91cC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIikubGVuZ3RoKSA8IDUgfHwgZ3JvdXAgPT09IHNlbGVjdGVkRWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGdyb3VwID09PSBudWxsIHx8IGdyb3VwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBncm91cC5pbnNlcnRCZWZvcmUoc2VsZWN0ZWRFbGVtZW50LCB0YXJnZXQpO1xuICAgIH1cbiAgICBzZWxlY3RlZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLWNhcmRcIik7XG4gICAgc2VsZWN0ZWRFbGVtZW50ID0gbnVsbDtcbn1cbmZ1bmN0aW9uIGhhbmRsZUdyb3VwQ2xpY2soZSkge1xuICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgPT09IG51bGwpXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zdCBncm91cCA9IGUudGFyZ2V0O1xuICAgIGlmICgoZ3JvdXAgPT09IG51bGwgfHwgZ3JvdXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKS5sZW5ndGgpIDwgNSkge1xuICAgICAgICBncm91cCA9PT0gbnVsbCB8fCBncm91cCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ3JvdXAuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRFbGVtZW50KTtcbiAgICB9XG4gICAgc2VsZWN0ZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC1jYXJkXCIpO1xuICAgIHNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2FtZSA9IGV4cG9ydHMuUGxheWVyID0gZXhwb3J0cy5TdGF0ZSA9IHZvaWQgMDtcbmNvbnN0IGNhcmRzXzEgPSByZXF1aXJlKFwiLi8uLi9saWIvY2FyZHNcIik7XG52YXIgU3RhdGU7XG4oZnVuY3Rpb24gKFN0YXRlKSB7XG4gICAgU3RhdGVbU3RhdGVbXCJXYWl0XCJdID0gMF0gPSBcIldhaXRcIjtcbiAgICBTdGF0ZVtTdGF0ZVtcIkNob29zZVwiXSA9IDFdID0gXCJDaG9vc2VcIjtcbiAgICBTdGF0ZVtTdGF0ZVtcIkxlYXZlXCJdID0gMl0gPSBcIkxlYXZlXCI7XG59KShTdGF0ZSB8fCAoZXhwb3J0cy5TdGF0ZSA9IFN0YXRlID0ge30pKTtcbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGFuZCA9IFtdO1xuICAgICAgICB0aGlzLnJlc2VydmUgPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLldhaXQ7XG4gICAgfVxuICAgIGFkZChjYXJkKSB7XG4gICAgICAgIGlmICh0aGlzLmhhbmQubGVuZ3RoID4gMTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkhhbmQgb2YgcGxheWVyIGlzIHRvbyBiaWdcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kLnB1c2goY2FyZCk7XG4gICAgfVxuICAgIGFkZFJlc2VydmUoY2FyZCkge1xuICAgICAgICB0aGlzLnJlc2VydmUucHVzaChjYXJkKTtcbiAgICB9XG4gICAgY2hlY2tXaW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrV2luSGVscChbXSwgW10sIFtdLCBbLi4udGhpcy5oYW5kXSk7XG4gICAgfVxuICAgIGNoZWNrV2luSGVscChhLCBiLCBjLCBkZWNrKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrR3JvdXBzKGEsIGIsIGMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYS5sZW5ndGggPiA1IHx8IGIubGVuZ3RoID4gNCB8fCBjLmxlbmd0aCA+IDMpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChhLmxlbmd0aCA9PT0gNSAmJiAhdGhpcy5jaGVja0dyb3VwKGEpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoYi5sZW5ndGggPT09IDQgJiYgIXRoaXMuY2hlY2tHcm91cChiKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGMubGVuZ3RoID09PSAzICYmICF0aGlzLmNoZWNrR3JvdXAoYykpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkZWNrLnBvcCgpO1xuICAgICAgICBpZiAoY2FyZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1dpbkhlbHAoWy4uLmEsIGNhcmRdLCBiLCBjLCBbLi4uZGVja10pKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tXaW5IZWxwKGEsIFsuLi5iLCBjYXJkXSwgYywgWy4uLmRlY2tdKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrV2luSGVscChhLCBiLCBbLi4uYywgY2FyZF0sIFsuLi5kZWNrXSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjaGVja0dyb3VwcyhhLCBiLCBjKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGVja1NpemUoYS5sZW5ndGgsIGIubGVuZ3RoLCBjLmxlbmd0aCkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrR3JvdXAoYSkgJiYgdGhpcy5jaGVja0dyb3VwKGIpICYmIHRoaXMuY2hlY2tHcm91cChjKTtcbiAgICB9XG4gICAgY2hlY2tHcm91cChhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrU2VxdWVuY2UoYSkgfHwgdGhpcy5jaGVja1N0YWlyKGEpO1xuICAgIH1cbiAgICBjaGVja1NlcXVlbmNlKGEpIHtcbiAgICAgICAgaWYgKGEubGVuZ3RoIDwgMylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgbGV0IHRlc3QgPSAoKDEgPDwgMTQpIC0gMSkgPDwgNDtcbiAgICAgICAgZm9yIChsZXQgYyBvZiBhKSB7XG4gICAgICAgICAgICB0ZXN0ICY9IGM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlc3QgIT09IDA7XG4gICAgfVxuICAgIGNoZWNrU3RhaXIoYSkge1xuICAgICAgICBpZiAoYS5sZW5ndGggPCAzKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBsZXQgdGVzdCA9IDA7XG4gICAgICAgIGZvciAobGV0IGMgb2YgYSkge1xuICAgICAgICAgICAgdGVzdCB8PSBjO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzdWl0VGVzdCA9ICgoMSA8PCA0KSAtIDEpICYgdGVzdDtcbiAgICAgICAgaWYgKHN1aXRUZXN0ID09PSAwIHx8XG4gICAgICAgICAgICAoc3VpdFRlc3QgJiAoc3VpdFRlc3QgLSAxKSkgIT09IDApXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHRlc3QgJj0gKCgxIDw8IDE0KSAtIDEpIDw8IDQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGVzdCAmPSAodGVzdCA8PCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVzdCAhPT0gMDtcbiAgICB9XG4gICAgY2hlY2tTaXplKGEsIGIsIGMpIHtcbiAgICAgICAgcmV0dXJuIGEgKyBiICsgYyA9PSAxMSAmJiBhID49IDMgJiYgYiA+PSAzICYmIGMgPj0gMztcbiAgICB9XG4gICAgY2hvb3NlKGNhcmQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IFN0YXRlLkNob29zZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxheWVyIG5vdCBpbiBjaG9vc2Ugc3RhdGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kLnB1c2goY2FyZCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuTGVhdmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBjYXJkcyBpbiBhcmd1bWVudFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZWF2ZShpbmRleCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gU3RhdGUuTGVhdmUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsYXllciBub3QgaW4gbGVhdmUgc3RhdGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHRoaXMuaGFuZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluZGV4IG91dCBvZiBib3VuZHNcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgW2NhcmRdID0gdGhpcy5oYW5kLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5XYWl0O1xuICAgICAgICByZXR1cm4gY2FyZDtcbiAgICB9XG59XG5leHBvcnRzLlBsYXllciA9IFBsYXllcjtcbmNsYXNzIEdhbWUge1xuICAgIDtcbiAgICBjb25zdHJ1Y3RvcihudW1iZXJQbGF5ZXJzKSB7XG4gICAgICAgIHRoaXMucGxheWVycyA9IFtdO1xuICAgICAgICB0aGlzLmRlY2sgPSBbXTtcbiAgICAgICAgdGhpcy5wbGF5ZXJJbmRleCA9IDA7XG4gICAgICAgIGlmIChudW1iZXJQbGF5ZXJzIDwgMilcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdhbWUgbmVlZHMgYXRsZWFzdCAyIHBsYXllclwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJQbGF5ZXJzOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVycy5wdXNoKG5ldyBQbGF5ZXIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBsYXllcnNbdGhpcy5wbGF5ZXJJbmRleF07XG4gICAgICAgIHRoaXMuZGVjayA9ICgwLCBjYXJkc18xLmNyZWF0ZURlY2spKDEpO1xuICAgICAgICAoMCwgY2FyZHNfMS5zaHVmZmxlKSh0aGlzLmRlY2spO1xuICAgICAgICB0aGlzLmRlYWwoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc3RhdGUgPSBTdGF0ZS5DaG9vc2U7XG4gICAgfVxuICAgIGRlYWwoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgcGxheWVyIG9mIHRoaXMucGxheWVycykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmRlY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNhcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLmFkZChjYXJkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGNhcmRzIGxlZnQgdG8gZGVhbFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbmV4dFBsYXllcigpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJJbmRleCA9ICh0aGlzLnBsYXllckluZGV4ICsgMSkgJSB0aGlzLnBsYXllcnMubGVuZ3RoO1xuICAgICAgICB0aGlzLnBsYXllciA9IHRoaXMucGxheWVyc1t0aGlzLnBsYXllckluZGV4XTtcbiAgICB9XG59XG5leHBvcnRzLkdhbWUgPSBHYW1lO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZ2FtZS9ndWVzdC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==