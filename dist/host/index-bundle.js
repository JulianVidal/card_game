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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**************************!*\
  !*** ./src/game/host.ts ***!
  \**************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./index.css */ "./src/game/index.css");
const display_1 = __webpack_require__(/*! ../lib/display */ "./src/lib/display.ts");
const game_1 = __webpack_require__(/*! ../lib/game */ "./src/lib/game.ts");
let game;
game = new game_1.Game(2);
(0, display_1.displayPlayerHand)(game.player);
window.addEventListener("message", receiveMessage, false);
function receiveMessage({ data }) {
    console.log(`Host Received from window ${data}`);
    const [cmd, arg] = data.split(/ (.*)/s);
    switch (cmd) {
        case "start":
            game = new game_1.Game(parseInt(arg));
            (0, display_1.displayPlayerHand)(game.player);
            (0, display_1.setup)(game.player, handleDeckClick, handleNextClick);
            for (let i = 1; i < game.players.length; i++) {
                sendMessage(i, `setup ${JSON.stringify(game.players[i].hand)}`);
                console.log("Sent " + i + " setup");
            }
            console.log("Host Started");
            (0, display_1.displayPlayerHand)(game.player);
            console.log(JSON.stringify(game));
            break;
        case "pop":
            sendMessage(game.playerIndex, "deck " + game.deck.pop());
            console.log("Sent deck pop");
            break;
        case "next":
            console.log("Received next");
            game.nextPlayer();
            if (game.playerIndex === 0) {
                game.player.addReserve(parseInt(arg));
                game.player.state = game_1.State.Choose;
                (0, display_1.displayPlayerHand)(game.player);
            }
            else {
                sendMessage(game.playerIndex, "next " + arg);
            }
            break;
    }
}
const sendMessage = (player, msg) => {
    window.parent.postMessage(`${player} ${msg}`);
};
function handleDeckClick(_e, player) {
    try {
        if (player.state === game_1.State.Choose) {
            const card = game.deck.pop();
            player.choose(card);
            (0, display_1.displayPlayerHand)(player);
        }
    }
    catch (err) {
        console.error(`Failed to get card from deck. ${err}`);
    }
}
function handleNextClick(_e, player, selectedElement) {
    try {
        if (selectedElement !== null) {
            const index = parseInt(selectedElement.dataset.index || "-1");
            const card = player.leave(index);
            game.nextPlayer();
            sendMessage(game.playerIndex, "next " + card);
            (0, display_1.displayPlayerHand)(player);
        }
    }
    catch (err) {
        console.error(`Failed to leave card. ${err}`);
    }
}
// function timer(anon: Function) {
//     const Trials = 100;
//     const start = performance.now();
//
//     for (let i = 0; i < Trials; i++) {
//         anon();
//     }
//
//     const end = performance.now();
//     console.log(`Execution time: ${(end - start) / Trials} ms`);
// }
//

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSx1REFBdUQsSUFBSTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxJQUFJO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHdCQUF3QjtBQUM5RDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FyZF9nYW1lLy4vc3JjL2dhbWUvaW5kZXguY3NzIiwid2VicGFjazovL2NhcmRfZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lLy4vc3JjL2dhbWUvaW5kZXguY3NzP2E1MTUiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NhcmRfZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NhcmRfZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9zcmMvbGliL2NhcmRzLnRzIiwid2VicGFjazovL2NhcmRfZ2FtZS8uL3NyYy9saWIvZGlzcGxheS50cyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9zcmMvbGliL2dhbWUudHMiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhcmRfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NhcmRfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhcmRfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NhcmRfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lLy4vc3JjL2dhbWUvaG9zdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuXHQtLWNhcmQtaGVpZ2h0OiAxOXZoO1xuXHQtLWNhcmQtcmF0aW86IDAuNzE2ODE0MjkxNDtcbn1cblxuYm9keSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMzNTY1NGQ7XG5cdG1hcmdpbjogMDtcblxuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAxMDAlO1xuXHQtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG59XG5cbiN3aW4ge1xuXHRmb250LXNpemU6IDVyZW07XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiA1MCU7XG5cdGxlZnQ6IDUwJTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdGJvcmRlci1yYWRpdXM6IDUlO1xufVxuXG4jZ2FtZSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZsZXgtZmxvdzogY29sdW1uO1xuXHRtYXgtd2lkdGg6IGNhbGMoNSAqICh2YXIoLS1jYXJkLWhlaWdodCkgKiB2YXIoLS1jYXJkLXJhdGlvKSArIDF2dykpO1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luOiBhdXRvO1xufVxuXG4jY2hvaWNlcyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZmxvdzogcm93O1xuXHRtYXJnaW46IDJ2aDtcblx0d2lkdGg6IDEwMCU7XG59XG5cbiNjaG9pY2VzPiNuZXh0IHtcblx0Ym9yZGVyOiAycHggc29saWQgI0Y2RjRGNDtcblx0Ym9yZGVyLXJhZGl1czogN3B4O1xuXHRtYXJnaW46IDAuNXZ3O1xuXHRwYWRkaW5nOiAwLjV2aDtcblxuXHRtYXJnaW4tbGVmdDogYXV0bztcblxuXHRoZWlnaHQ6IHZhcigtLWNhcmQtaGVpZ2h0KTtcblx0d2lkdGg6IGNhbGModmFyKC0tY2FyZC1oZWlnaHQpICogdmFyKC0tY2FyZC1yYXRpbykpO1xuXG5cdGNvbG9yOiAjRjZGNEY0O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtZmFtaWx5OiAgc2Fucy1zZXJpZjtcblx0Zm9udC13ZWlnaHQ6IDkwMDtcblx0bGV0dGVyLXNwYWNpbmc6IG1pbigwLjV2dywgMC41dmgpO1xuXHRsaW5lLWhlaWdodDogbWluKDV2dywgNXZoKTtcblx0Zm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtaGVpZ2h0KSAqIHZhcigtLWNhcmQtcmF0aW8pIC8gNSk7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jY2hvaWNlcz4jcmVzZXJ2ZSB7XG5cdG91dGxpbmU6bm9uZTtcblx0Ym9yZGVyOiAycHggc29saWQgI0Y2RjRGNDtcblx0Ym9yZGVyLXJhZGl1czogN3B4O1xuXG5cdG1hcmdpbjogMC41dnc7XG5cdHBhZGRpbmc6IDAuNXZoO1xuXG5cdGhlaWdodDogdmFyKC0tY2FyZC1oZWlnaHQpO1xuXHR3aWR0aDogY2FsYyh2YXIoLS1jYXJkLWhlaWdodCkgKiB2YXIoLS1jYXJkLXJhdGlvKSk7XG59XG5cbiNjaG9pY2VzPiNkZWNrIHtcblx0LyogYm94LXNoYWRvdzogaW5zZXQgMTJweCAtMjJweCAxNXB4IC0xcHggcmdiYSgwLDAsMCwwLjM2KTsgKi9cblxuXHRvdXRsaW5lOiBzb2xpZCAycHggI0Y2RjRGNDtcblx0Ym9yZGVyLXJhZGl1czogN3B4O1xuXG5cdG1hcmdpbjogY2FsYygwLjV2dyArIDJweCk7XG5cdHBhZGRpbmc6IDAuNXZoO1xuXG5cdGhlaWdodDogdmFyKC0tY2FyZC1oZWlnaHQpO1xuXHR3aWR0aDogY2FsYyh2YXIoLS1jYXJkLWhlaWdodCkgKiB2YXIoLS1jYXJkLXJhdGlvKSk7XG59XG5cbiNwbGF5ZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLmdyb3VwIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0ZmxleC13cmFwOiBub3dyYXA7XG5cdGFsaWduLWl0ZW1zOiBzdGFydDtcblx0d2lkdGg6IDEwMCU7XG5cdFxuXHQvKiBiYWNrZ3JvdW5kOiA7ICovXG5cdG1hcmdpbjogMC41dmg7XG5cdHBhZGRpbmc6IDAuNXZoO1xuXG5cdGJvcmRlcjogMnB4IHNvbGlkICNGNkY0RjQ7XG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5maWxsZXIge1xuXHRoZWlnaHQ6IHZhcigtLWNhcmQtaGVpZ2h0KTtcblx0bWFyZ2luLXRvcDogMC41dnc7XG5cdG1hcmdpbi1ib3R0b206IDAuNXZ3O1xufVxuXG5cbmltZy5jYXJkIHtcblx0aGVpZ2h0OiB2YXIoLS1jYXJkLWhlaWdodCk7XG5cdG1hcmdpbjogMC41dnc7XG5cbiAgICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xufVxuXG5pbWcuY2FyZC5zZWxlY3RlZC1jYXJkIHtcblx0dHJhbnNmb3JtOiBUcmFuc2xhdGVZKC01JSk7XG59XG5cbkBtZWRpYSAobWF4LWFzcGVjdC1yYXRpbzogMS8xKSB7XG5cdDpyb290IHtcblx0XHQtLWNhcmQtaGVpZ2h0OiBjYWxjKDE1dncgLyB2YXIoLS1jYXJkLXJhdGlvKSk7XG5cdH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2dhbWUvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsbUJBQW1CO0NBQ25CLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsU0FBUzs7Q0FFVCxZQUFZO0NBQ1osV0FBVztDQUNYLGlDQUFpQztBQUNsQzs7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFNBQVM7Q0FDVCxnQ0FBZ0M7Q0FDaEMsa0JBQWtCO0NBQ2xCLHVCQUF1QjtDQUN2QixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixtRUFBbUU7Q0FDbkUsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixjQUFjO0NBQ2QsV0FBVztDQUNYLFdBQVc7QUFDWjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLGNBQWM7O0NBRWQsaUJBQWlCOztDQUVqQiwwQkFBMEI7Q0FDMUIsbURBQW1EOztDQUVuRCxjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLHdCQUF3QjtDQUN4QixnQkFBZ0I7Q0FDaEIsaUNBQWlDO0NBQ2pDLDBCQUEwQjtDQUMxQiwyREFBMkQ7Q0FDM0Qsa0JBQWtCOzs7Q0FHbEIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1oseUJBQXlCO0NBQ3pCLGtCQUFrQjs7Q0FFbEIsYUFBYTtDQUNiLGNBQWM7O0NBRWQsMEJBQTBCO0NBQzFCLG1EQUFtRDtBQUNwRDs7QUFFQTtDQUNDLDZEQUE2RDs7Q0FFN0QsMEJBQTBCO0NBQzFCLGtCQUFrQjs7Q0FFbEIseUJBQXlCO0NBQ3pCLGNBQWM7O0NBRWQsMEJBQTBCO0NBQzFCLG1EQUFtRDtBQUNwRDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsc0JBQXNCO0NBQ3RCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixXQUFXOztDQUVYLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsY0FBYzs7Q0FFZCx5QkFBeUI7Q0FDekIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsMEJBQTBCO0NBQzFCLGlCQUFpQjtDQUNqQixvQkFBb0I7QUFDckI7OztBQUdBO0NBQ0MsMEJBQTBCO0NBQzFCLGFBQWE7O0lBRVYsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtDQUNDLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDO0VBQ0MsNkNBQTZDO0NBQzlDO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcblxcdC0tY2FyZC1oZWlnaHQ6IDE5dmg7XFxuXFx0LS1jYXJkLXJhdGlvOiAwLjcxNjgxNDI5MTQ7XFxufVxcblxcbmJvZHkge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzM1NjU0ZDtcXG5cXHRtYXJnaW46IDA7XFxuXFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXG59XFxuXFxuI3dpbiB7XFxuXFx0Zm9udC1zaXplOiA1cmVtO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDUwJTtcXG5cXHRsZWZ0OiA1MCU7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdGJvcmRlci1yYWRpdXM6IDUlO1xcbn1cXG5cXG4jZ2FtZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZsZXgtZmxvdzogY29sdW1uO1xcblxcdG1heC13aWR0aDogY2FsYyg1ICogKHZhcigtLWNhcmQtaGVpZ2h0KSAqIHZhcigtLWNhcmQtcmF0aW8pICsgMXZ3KSk7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4jY2hvaWNlcyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWZsb3c6IHJvdztcXG5cXHRtYXJnaW46IDJ2aDtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuI2Nob2ljZXM+I25leHQge1xcblxcdGJvcmRlcjogMnB4IHNvbGlkICNGNkY0RjQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogN3B4O1xcblxcdG1hcmdpbjogMC41dnc7XFxuXFx0cGFkZGluZzogMC41dmg7XFxuXFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxuXFxuXFx0aGVpZ2h0OiB2YXIoLS1jYXJkLWhlaWdodCk7XFxuXFx0d2lkdGg6IGNhbGModmFyKC0tY2FyZC1oZWlnaHQpICogdmFyKC0tY2FyZC1yYXRpbykpO1xcblxcblxcdGNvbG9yOiAjRjZGNEY0O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LWZhbWlseTogIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC13ZWlnaHQ6IDkwMDtcXG5cXHRsZXR0ZXItc3BhY2luZzogbWluKDAuNXZ3LCAwLjV2aCk7XFxuXFx0bGluZS1oZWlnaHQ6IG1pbig1dncsIDV2aCk7XFxuXFx0Zm9udC1zaXplOiBjYWxjKHZhcigtLWNhcmQtaGVpZ2h0KSAqIHZhcigtLWNhcmQtcmF0aW8pIC8gNSk7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2Nob2ljZXM+I3Jlc2VydmUge1xcblxcdG91dGxpbmU6bm9uZTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjRjZGNEY0O1xcblxcdGJvcmRlci1yYWRpdXM6IDdweDtcXG5cXG5cXHRtYXJnaW46IDAuNXZ3O1xcblxcdHBhZGRpbmc6IDAuNXZoO1xcblxcblxcdGhlaWdodDogdmFyKC0tY2FyZC1oZWlnaHQpO1xcblxcdHdpZHRoOiBjYWxjKHZhcigtLWNhcmQtaGVpZ2h0KSAqIHZhcigtLWNhcmQtcmF0aW8pKTtcXG59XFxuXFxuI2Nob2ljZXM+I2RlY2sge1xcblxcdC8qIGJveC1zaGFkb3c6IGluc2V0IDEycHggLTIycHggMTVweCAtMXB4IHJnYmEoMCwwLDAsMC4zNik7ICovXFxuXFxuXFx0b3V0bGluZTogc29saWQgMnB4ICNGNkY0RjQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogN3B4O1xcblxcblxcdG1hcmdpbjogY2FsYygwLjV2dyArIDJweCk7XFxuXFx0cGFkZGluZzogMC41dmg7XFxuXFxuXFx0aGVpZ2h0OiB2YXIoLS1jYXJkLWhlaWdodCk7XFxuXFx0d2lkdGg6IGNhbGModmFyKC0tY2FyZC1oZWlnaHQpICogdmFyKC0tY2FyZC1yYXRpbykpO1xcbn1cXG5cXG4jcGxheWVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLmdyb3VwIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0ZmxleC13cmFwOiBub3dyYXA7XFxuXFx0YWxpZ24taXRlbXM6IHN0YXJ0O1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdFxcblxcdC8qIGJhY2tncm91bmQ6IDsgKi9cXG5cXHRtYXJnaW46IDAuNXZoO1xcblxcdHBhZGRpbmc6IDAuNXZoO1xcblxcblxcdGJvcmRlcjogMnB4IHNvbGlkICNGNkY0RjQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLmZpbGxlciB7XFxuXFx0aGVpZ2h0OiB2YXIoLS1jYXJkLWhlaWdodCk7XFxuXFx0bWFyZ2luLXRvcDogMC41dnc7XFxuXFx0bWFyZ2luLWJvdHRvbTogMC41dnc7XFxufVxcblxcblxcbmltZy5jYXJkIHtcXG5cXHRoZWlnaHQ6IHZhcigtLWNhcmQtaGVpZ2h0KTtcXG5cXHRtYXJnaW46IDAuNXZ3O1xcblxcbiAgICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuaW1nLmNhcmQuc2VsZWN0ZWQtY2FyZCB7XFxuXFx0dHJhbnNmb3JtOiBUcmFuc2xhdGVZKC01JSk7XFxufVxcblxcbkBtZWRpYSAobWF4LWFzcGVjdC1yYXRpbzogMS8xKSB7XFxuXFx0OnJvb3Qge1xcblxcdFxcdC0tY2FyZC1oZWlnaHQ6IGNhbGMoMTV2dyAvIHZhcigtLWNhcmQtcmF0aW8pKTtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcInVzZSBzdHJpY3RcIjtcbi8vIENhcmQgQml0IFN0cnVjdHVyZVxuLy8gXG4vLyAwMDAxIENsdWJzXG4vLyAwMDEwIERpYW1vbmRzXG4vLyAwMTAwIEhlYXJ0c1xuLy8gMTAwMCBTcGFkZXNcbi8vXG4vLyAxMDAwMDAwMDAwMDAwMSBBY2Vcbi8vIDAwMDAwMDAwMDAwMDEwIFR3byBcbi8vIDAwMDAwMDAwMDAwMTAwIFRocmVlIFxuLy9cbi8vIENhcmQgMiBvZiBDbHVic1xuLy8gMDAwMDAwMDAwMDAwMTAgMTAwMFxuLy9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3dhcCA9IGV4cG9ydHMuc2h1ZmZsZSA9IGV4cG9ydHMuY3JlYXRlRGVjayA9IGV4cG9ydHMuY3JlYXRlRW1wdHlEZWNrID0gZXhwb3J0cy5nZXRTVkcgPSBleHBvcnRzLmdldFN0cmluZyA9IGV4cG9ydHMuZ2V0UmFuayA9IGV4cG9ydHMuZ2V0U3VpdCA9IGV4cG9ydHMuY3JlYXRlQ2FyZCA9IGV4cG9ydHMuU3VpdEVudHJpZXMgPSBleHBvcnRzLlJhbmtFbnRyaWVzID0gZXhwb3J0cy5SYW5rID0gZXhwb3J0cy5TdWl0ID0gdm9pZCAwO1xudmFyIFN1aXQ7XG4oZnVuY3Rpb24gKFN1aXQpIHtcbiAgICBTdWl0W1N1aXRbXCJDbHVic1wiXSA9IDFdID0gXCJDbHVic1wiO1xuICAgIFN1aXRbU3VpdFtcIkRpYW1vbmRzXCJdID0gMl0gPSBcIkRpYW1vbmRzXCI7XG4gICAgU3VpdFtTdWl0W1wiSGVhcnRzXCJdID0gNF0gPSBcIkhlYXJ0c1wiO1xuICAgIFN1aXRbU3VpdFtcIlNwYWRlc1wiXSA9IDhdID0gXCJTcGFkZXNcIjtcbn0pKFN1aXQgfHwgKGV4cG9ydHMuU3VpdCA9IFN1aXQgPSB7fSkpO1xudmFyIFJhbms7XG4oZnVuY3Rpb24gKFJhbmspIHtcbiAgICBSYW5rW1JhbmtbXCJBY2VcIl0gPSAxMzEwODhdID0gXCJBY2VcIjtcbiAgICBSYW5rW1JhbmtbXCJUd29cIl0gPSAzMl0gPSBcIlR3b1wiO1xuICAgIFJhbmtbUmFua1tcIlRocmVlXCJdID0gNjRdID0gXCJUaHJlZVwiO1xuICAgIFJhbmtbUmFua1tcIkZvdXJcIl0gPSAxMjhdID0gXCJGb3VyXCI7XG4gICAgUmFua1tSYW5rW1wiRml2ZVwiXSA9IDI1Nl0gPSBcIkZpdmVcIjtcbiAgICBSYW5rW1JhbmtbXCJTaXhcIl0gPSA1MTJdID0gXCJTaXhcIjtcbiAgICBSYW5rW1JhbmtbXCJTZXZlblwiXSA9IDEwMjRdID0gXCJTZXZlblwiO1xuICAgIFJhbmtbUmFua1tcIkVpZ2h0XCJdID0gMjA0OF0gPSBcIkVpZ2h0XCI7XG4gICAgUmFua1tSYW5rW1wiTmluZVwiXSA9IDQwOTZdID0gXCJOaW5lXCI7XG4gICAgUmFua1tSYW5rW1wiVGVuXCJdID0gODE5Ml0gPSBcIlRlblwiO1xuICAgIFJhbmtbUmFua1tcIkphY2tcIl0gPSAxNjM4NF0gPSBcIkphY2tcIjtcbiAgICBSYW5rW1JhbmtbXCJRdWVlblwiXSA9IDMyNzY4XSA9IFwiUXVlZW5cIjtcbiAgICBSYW5rW1JhbmtbXCJLaW5nXCJdID0gNjU1MzZdID0gXCJLaW5nXCI7XG59KShSYW5rIHx8IChleHBvcnRzLlJhbmsgPSBSYW5rID0ge30pKTtcbmNvbnN0IFN1aXRUb1N2ZyA9IHtcbiAgICBcIkNsdWJzXCI6IFwiQ1wiLFxuICAgIFwiRGlhbW9uZHNcIjogXCJEXCIsXG4gICAgXCJIZWFydHNcIjogXCJIXCIsXG4gICAgXCJTcGFkZXNcIjogXCJTXCIsXG59O1xuY29uc3QgUmFua1RvU3ZnID0ge1xuICAgIFwiQWNlXCI6IFwiQVwiLFxuICAgIFwiVHdvXCI6IFwiMlwiLFxuICAgIFwiVGhyZWVcIjogXCIzXCIsXG4gICAgXCJGb3VyXCI6IFwiNFwiLFxuICAgIFwiRml2ZVwiOiBcIjVcIixcbiAgICBcIlNpeFwiOiBcIjZcIixcbiAgICBcIlNldmVuXCI6IFwiN1wiLFxuICAgIFwiRWlnaHRcIjogXCI4XCIsXG4gICAgXCJOaW5lXCI6IFwiOVwiLFxuICAgIFwiVGVuXCI6IFwiMTBcIixcbiAgICBcIkphY2tcIjogXCJKXCIsXG4gICAgXCJRdWVlblwiOiBcIlFcIixcbiAgICBcIktpbmdcIjogXCJLXCIsXG59O1xuZXhwb3J0cy5SYW5rRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKFJhbmspLnNsaWNlKDEzKTtcbmV4cG9ydHMuU3VpdEVudHJpZXMgPSBPYmplY3QuZW50cmllcyhTdWl0KS5zbGljZSg0KTtcbmZ1bmN0aW9uIGNyZWF0ZUNhcmQocmFuaywgc3VpdCkge1xuICAgIHJldHVybiByYW5rIHwgc3VpdDtcbn1cbmV4cG9ydHMuY3JlYXRlQ2FyZCA9IGNyZWF0ZUNhcmQ7XG5mdW5jdGlvbiBnZXRTdWl0KGNhcmQpIHtcbiAgICBjb25zdCBzdWl0YiA9ICgoMSA8PCA0KSAtIDEpICYgY2FyZDtcbiAgICBmb3IgKGxldCBbbmFtZSwgc3VpdF0gb2YgZXhwb3J0cy5TdWl0RW50cmllcykge1xuICAgICAgICBpZiAoc3VpdCA9PT0gc3VpdGIpXG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU3VpdCBub3QgZm91bmRcIik7XG59XG5leHBvcnRzLmdldFN1aXQgPSBnZXRTdWl0O1xuZnVuY3Rpb24gZ2V0UmFuayhjYXJkKSB7XG4gICAgY29uc3QgcmFua2IgPSAoKCgxIDw8IDE0KSAtIDEpIDw8IDQpICYgY2FyZDtcbiAgICBmb3IgKGxldCBbbmFtZSwgcmFua10gb2YgZXhwb3J0cy5SYW5rRW50cmllcykge1xuICAgICAgICBpZiAocmFuayA9PT0gcmFua2IpXG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUmFuayBub3QgZm91bmRcIik7XG59XG5leHBvcnRzLmdldFJhbmsgPSBnZXRSYW5rO1xuZnVuY3Rpb24gZ2V0U3RyaW5nKGNhcmQpIHtcbiAgICByZXR1cm4gYCR7Z2V0U3VpdChjYXJkKX0gJHtnZXRSYW5rKGNhcmQpfWA7XG59XG5leHBvcnRzLmdldFN0cmluZyA9IGdldFN0cmluZztcbmZ1bmN0aW9uIGdldFNWRyhjYXJkKSB7XG4gICAgY29uc3QgW3N1aXQsIHJhbmtdID0gZ2V0U3RyaW5nKGNhcmQpLnNwbGl0KFwiIFwiKTtcbiAgICBsZXQgc3ZnID0gXCJcIjtcbiAgICBzdmcgKz0gUmFua1RvU3ZnW3JhbmtdO1xuICAgIHN2ZyArPSBTdWl0VG9Tdmdbc3VpdF07XG4gICAgcmV0dXJuIHN2Zztcbn1cbmV4cG9ydHMuZ2V0U1ZHID0gZ2V0U1ZHO1xuZnVuY3Rpb24gY3JlYXRlRW1wdHlEZWNrKCkge1xuICAgIHJldHVybiBbXTtcbn1cbmV4cG9ydHMuY3JlYXRlRW1wdHlEZWNrID0gY3JlYXRlRW1wdHlEZWNrO1xuZnVuY3Rpb24gY3JlYXRlRGVjayhzaXplKSB7XG4gICAgbGV0IGRlY2sgPSBbXTtcbiAgICBmb3IgKGxldCBzID0gMDsgcyA8IHNpemU7IHMrKykge1xuICAgICAgICBmb3IgKGxldCBbc3VpdCwgX10gb2YgZXhwb3J0cy5TdWl0RW50cmllcykge1xuICAgICAgICAgICAgZm9yIChsZXQgW3JhbmssIF9dIG9mIGV4cG9ydHMuUmFua0VudHJpZXMpIHtcbiAgICAgICAgICAgICAgICBkZWNrLnB1c2goY3JlYXRlQ2FyZChSYW5rW3JhbmtdLCBTdWl0W3N1aXRdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlY2s7XG59XG5leHBvcnRzLmNyZWF0ZURlY2sgPSBjcmVhdGVEZWNrO1xuZnVuY3Rpb24gc2h1ZmZsZShkZWNrKSB7XG4gICAgbGV0IGN1cnJlbnRfaW5kZXggPSBkZWNrLmxlbmd0aDtcbiAgICB3aGlsZSAoY3VycmVudF9pbmRleCAhPSAwKSB7XG4gICAgICAgIGxldCByYW5kb21faW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkZWNrLmxlbmd0aCk7XG4gICAgICAgIGN1cnJlbnRfaW5kZXggLT0gMTtcbiAgICAgICAgc3dhcChkZWNrLCBjdXJyZW50X2luZGV4LCByYW5kb21faW5kZXgpO1xuICAgIH1cbn1cbmV4cG9ydHMuc2h1ZmZsZSA9IHNodWZmbGU7XG5mdW5jdGlvbiBzd2FwKGRlY2ssIGN1cnJlbnRfaW5kZXgsIHJhbmRvbV9pbmRleCkge1xuICAgIFtkZWNrW2N1cnJlbnRfaW5kZXhdLCBkZWNrW3JhbmRvbV9pbmRleF1dID0gW2RlY2tbcmFuZG9tX2luZGV4XSwgZGVja1tjdXJyZW50X2luZGV4XV07XG59XG5leHBvcnRzLnN3YXAgPSBzd2FwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRpc3BsYXlQbGF5ZXJIYW5kID0gZXhwb3J0cy5zZXR1cCA9IHZvaWQgMDtcbmNvbnN0IGNhcmRzXzEgPSByZXF1aXJlKFwiLi9jYXJkc1wiKTtcbmNvbnN0IGdhbWVfMSA9IHJlcXVpcmUoXCIuL2dhbWVcIik7XG5mdW5jdGlvbiBzZXR1cChwbGF5ZXIsIGhhbmRsZURlY2tDbGljaywgaGFuZGxlTmV4dENsaWNrKSB7XG4gICAgY29uc3QgZGVja0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlY2tcIik7XG4gICAgZGVja0VsZW1lbnQgPT09IG51bGwgfHwgZGVja0VsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlY2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgaWYgKHBsYXllci5zdGF0ZSA9PT0gZ2FtZV8xLlN0YXRlLkNob29zZSkge1xuICAgICAgICAgICAgaGFuZGxlRGVja0NsaWNrKGUsIHBsYXllcik7XG4gICAgICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyIC5jYXJkW2RhdGEtaW5kZXg9JzEwJ11cIik7XG4gICAgICAgICAgICBpZiAoY2FyZEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyIC5ncm91cFwiKVsyXTtcbiAgICAgICAgICAgICAgICBncm91cC5hcHBlbmRDaGlsZChjYXJkRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGxheWVyLmNoZWNrV2luKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldPTlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCB3aW5FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5cIik7XG4gICAgICAgICAgICAgICAgaWYgKHdpbkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luRWxlbWVudC5pbm5lckhUTUwgPSBcIllvdSBXb25cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvc3Qgb3Igbm90XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgcmVzZXJ2ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VydmVcIik7XG4gICAgcmVzZXJ2ZUVsZW1lbnQgPT09IG51bGwgfHwgcmVzZXJ2ZUVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlc2VydmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgaWYgKHBsYXllci5zdGF0ZSA9PT0gZ2FtZV8xLlN0YXRlLkNob29zZSkge1xuICAgICAgICAgICAgaGFuZGxlUmVzZXJ2ZUNsaWNrKGUsIHBsYXllcik7XG4gICAgICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyIC5jYXJkW2RhdGEtaW5kZXg9JzEwJ11cIik7XG4gICAgICAgICAgICBpZiAoY2FyZEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyIC5ncm91cFwiKVsyXTtcbiAgICAgICAgICAgICAgICBncm91cC5hcHBlbmRDaGlsZChjYXJkRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGxheWVyLmNoZWNrV2luKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldPTlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCB3aW5FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5cIik7XG4gICAgICAgICAgICAgICAgaWYgKHdpbkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luRWxlbWVudC5pbm5lckhUTUwgPSBcIllvdSBXb25cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvc3Qgb3Igbm90XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgbmV4dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRcIik7XG4gICAgbmV4dEVsZW1lbnQgPT09IG51bGwgfHwgbmV4dEVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5leHRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgaWYgKHBsYXllci5zdGF0ZSA9PT0gZ2FtZV8xLlN0YXRlLkxlYXZlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlTmV4dENsaWNrKGUsIHBsYXllciwgc2VsZWN0ZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3BsYXllciBpbWdcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChzZWxlY3RlZEVsZW1lbnQuZGF0YXNldC5pbmRleCB8fCBcIi0xXCIpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZEVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBqbmRleCA9IHBhcnNlSW50KGNhcmRFbGVtZW50LmRhdGFzZXQuaW5kZXggfHwgXCItMVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGpuZGV4ID4gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRFbGVtZW50LmRhdGFzZXQuaW5kZXggPSBgJHtqbmRleCAtIDF9YDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoam5kZXggPT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBncm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyIC5ncm91cFwiKVsyXTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgICAgICBuZXdDYXJkLmRhdGFzZXQuaW5kZXggPSBcIjEwXCI7XG4gICAgICAgICAgICAgICAgbmV3Q2FyZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgbmV3Q2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gaGFuZGxlQ2xpY2soZSwgcGxheWVyKSk7XG4gICAgICAgICAgICAgICAgZ3JvdXAuYXBwZW5kQ2hpbGQobmV3Q2FyZCk7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC1jYXJkXCIpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgZGlzcGxheVBsYXllckhhbmQocGxheWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGNhcmRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyIGltZ1wiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmRFbGVtZW50c1tpXTtcbiAgICAgICAgY2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGhhbmRsZUNsaWNrKGUsIHBsYXllcikpO1xuICAgIH1cbiAgICBjb25zdCBncm91cEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwbGF5ZXIgLmdyb3VwXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JvdXBFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBncm91cEVsZW1lbnQgPSBncm91cEVsZW1lbnRzW2ldO1xuICAgICAgICBncm91cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGhhbmRsZUdyb3VwQ2xpY2soZSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuc2V0dXAgPSBzZXR1cDtcbmZ1bmN0aW9uIGhhbmRsZVJlc2VydmVDbGljayhfZSwgcGxheWVyKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcGxheWVyLmNob29zZShwbGF5ZXIucmVzZXJ2ZS5wb3AoKSk7XG4gICAgICAgIGRpc3BsYXlQbGF5ZXJIYW5kKHBsYXllcik7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGdldCBjYXJkIGZyb20gcmVzZXJ2ZS4gJHtlcnJ9YCk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGlzcGxheVBsYXllckhhbmQocGxheWVyKSB7XG4gICAgY29uc3QgY2FyZEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwbGF5ZXIgaW1nXCIpO1xuICAgIGlmIChjYXJkRWxlbWVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkRWxlbWVudHNbaV07XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGNhcmRFbGVtZW50LmRhdGFzZXQuaW5kZXggfHwgXCItMVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBwbGF5ZXIuaGFuZFtpbmRleF07XG4gICAgICAgICAgICBpZiAoY2FyZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY2FyZEVsZW1lbnQuc3JjID0gXCIuL2NhcmRzL1wiICsgKDAsIGNhcmRzXzEuZ2V0U1ZHKShjYXJkKSArIFwiLnN2Z1wiO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGNhcmRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhcmRzIHRvIHJlcGxhY2Ugbm90IGZvdW5kXCIpO1xuICAgIH1cbiAgICBjb25zdCByZXNlcnZlID0gcGxheWVyLnJlc2VydmVbcGxheWVyLnJlc2VydmUubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgcmVzZXJ2ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VydmVcIik7XG4gICAgaWYgKHJlc2VydmVFbGVtZW50KSB7XG4gICAgICAgIGlmIChyZXNlcnZlKSB7XG4gICAgICAgICAgICByZXNlcnZlRWxlbWVudC5zcmMgPSBcIi4vY2FyZHMvXCIgKyAoMCwgY2FyZHNfMS5nZXRTVkcpKHJlc2VydmUpICsgXCIuc3ZnXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXNlcnZlRWxlbWVudC5zcmMgPSBcIi4vY2FyZHMvdHJhbnNwYXJlbnQucG5nXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZGVja0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlY2tcIik7XG4gICAgY29uc3QgbGVhdmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0XCIpO1xuICAgIGNvbnN0IHdoaXRlID0gXCIjRjZGNEY0XCI7XG4gICAgY29uc3QgZ3JlZW4gPSBcIiMwMGM4NmNcIjtcbiAgICBpZiAoZGVja0VsZW1lbnQgJiYgcmVzZXJ2ZUVsZW1lbnQgJiYgbGVhdmVFbGVtZW50KSB7XG4gICAgICAgIGlmIChwbGF5ZXIuc3RhdGUgPT09IGdhbWVfMS5TdGF0ZS5DaG9vc2UpIHtcbiAgICAgICAgICAgIGRlY2tFbGVtZW50LnN0eWxlLm91dGxpbmVDb2xvciA9IGdyZWVuO1xuICAgICAgICAgICAgcmVzZXJ2ZUVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBncmVlbjtcbiAgICAgICAgICAgIGxlYXZlRWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGF5ZXIuc3RhdGUgPT09IGdhbWVfMS5TdGF0ZS5MZWF2ZSkge1xuICAgICAgICAgICAgZGVja0VsZW1lbnQuc3R5bGUub3V0bGluZUNvbG9yID0gd2hpdGU7XG4gICAgICAgICAgICByZXNlcnZlRWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IHdoaXRlO1xuICAgICAgICAgICAgbGVhdmVFbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gZ3JlZW47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYXllci5zdGF0ZSA9PT0gZ2FtZV8xLlN0YXRlLldhaXQpIHtcbiAgICAgICAgICAgIGRlY2tFbGVtZW50LnN0eWxlLm91dGxpbmVDb2xvciA9IHdoaXRlO1xuICAgICAgICAgICAgcmVzZXJ2ZUVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSB3aGl0ZTtcbiAgICAgICAgICAgIGxlYXZlRWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5kaXNwbGF5UGxheWVySGFuZCA9IGRpc3BsYXlQbGF5ZXJIYW5kO1xubGV0IHNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG5mdW5jdGlvbiBoYW5kbGVDbGljayhlLCBwbGF5ZXIpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAoc2VsZWN0ZWRFbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgIHNlbGVjdGVkRWxlbWVudCA9IHRhcmdldDtcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC1jYXJkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgPT09IHRhcmdldCkge1xuICAgICAgICBzZWxlY3RlZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLWNhcmRcIik7XG4gICAgICAgIHNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZ3JvdXAgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICBpZiAoKGdyb3VwID09PSBudWxsIHx8IGdyb3VwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBncm91cC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIikubGVuZ3RoKSA8IDUgfHwgZ3JvdXAgPT09IHNlbGVjdGVkRWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGdyb3VwID09PSBudWxsIHx8IGdyb3VwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBncm91cC5pbnNlcnRCZWZvcmUoc2VsZWN0ZWRFbGVtZW50LCB0YXJnZXQpO1xuICAgIH1cbiAgICBzZWxlY3RlZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLWNhcmRcIik7XG4gICAgc2VsZWN0ZWRFbGVtZW50ID0gbnVsbDtcbn1cbmZ1bmN0aW9uIGhhbmRsZUdyb3VwQ2xpY2soZSkge1xuICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgPT09IG51bGwpXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zdCBncm91cCA9IGUudGFyZ2V0O1xuICAgIGlmICgoZ3JvdXAgPT09IG51bGwgfHwgZ3JvdXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKS5sZW5ndGgpIDwgNSkge1xuICAgICAgICBncm91cCA9PT0gbnVsbCB8fCBncm91cCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ3JvdXAuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRFbGVtZW50KTtcbiAgICB9XG4gICAgc2VsZWN0ZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC1jYXJkXCIpO1xuICAgIHNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2FtZSA9IGV4cG9ydHMuUGxheWVyID0gZXhwb3J0cy5TdGF0ZSA9IHZvaWQgMDtcbmNvbnN0IGNhcmRzXzEgPSByZXF1aXJlKFwiLi8uLi9saWIvY2FyZHNcIik7XG52YXIgU3RhdGU7XG4oZnVuY3Rpb24gKFN0YXRlKSB7XG4gICAgU3RhdGVbU3RhdGVbXCJXYWl0XCJdID0gMF0gPSBcIldhaXRcIjtcbiAgICBTdGF0ZVtTdGF0ZVtcIkNob29zZVwiXSA9IDFdID0gXCJDaG9vc2VcIjtcbiAgICBTdGF0ZVtTdGF0ZVtcIkxlYXZlXCJdID0gMl0gPSBcIkxlYXZlXCI7XG59KShTdGF0ZSB8fCAoZXhwb3J0cy5TdGF0ZSA9IFN0YXRlID0ge30pKTtcbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGFuZCA9IFtdO1xuICAgICAgICB0aGlzLnJlc2VydmUgPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLldhaXQ7XG4gICAgfVxuICAgIGFkZChjYXJkKSB7XG4gICAgICAgIGlmICh0aGlzLmhhbmQubGVuZ3RoID4gMTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkhhbmQgb2YgcGxheWVyIGlzIHRvbyBiaWdcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kLnB1c2goY2FyZCk7XG4gICAgfVxuICAgIGFkZFJlc2VydmUoY2FyZCkge1xuICAgICAgICB0aGlzLnJlc2VydmUucHVzaChjYXJkKTtcbiAgICB9XG4gICAgY2hlY2tXaW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrV2luSGVscChbXSwgW10sIFtdLCBbLi4udGhpcy5oYW5kXSk7XG4gICAgfVxuICAgIGNoZWNrV2luSGVscChhLCBiLCBjLCBkZWNrKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrR3JvdXBzKGEsIGIsIGMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYS5sZW5ndGggPiA1IHx8IGIubGVuZ3RoID4gNCB8fCBjLmxlbmd0aCA+IDMpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChhLmxlbmd0aCA9PT0gNSAmJiAhdGhpcy5jaGVja0dyb3VwKGEpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoYi5sZW5ndGggPT09IDQgJiYgIXRoaXMuY2hlY2tHcm91cChiKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGMubGVuZ3RoID09PSAzICYmICF0aGlzLmNoZWNrR3JvdXAoYykpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkZWNrLnBvcCgpO1xuICAgICAgICBpZiAoY2FyZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1dpbkhlbHAoWy4uLmEsIGNhcmRdLCBiLCBjLCBbLi4uZGVja10pKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tXaW5IZWxwKGEsIFsuLi5iLCBjYXJkXSwgYywgWy4uLmRlY2tdKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrV2luSGVscChhLCBiLCBbLi4uYywgY2FyZF0sIFsuLi5kZWNrXSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjaGVja0dyb3VwcyhhLCBiLCBjKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGVja1NpemUoYS5sZW5ndGgsIGIubGVuZ3RoLCBjLmxlbmd0aCkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrR3JvdXAoYSkgJiYgdGhpcy5jaGVja0dyb3VwKGIpICYmIHRoaXMuY2hlY2tHcm91cChjKTtcbiAgICB9XG4gICAgY2hlY2tHcm91cChhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrU2VxdWVuY2UoYSkgfHwgdGhpcy5jaGVja1N0YWlyKGEpO1xuICAgIH1cbiAgICBjaGVja1NlcXVlbmNlKGEpIHtcbiAgICAgICAgaWYgKGEubGVuZ3RoIDwgMylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgbGV0IHRlc3QgPSAoKDEgPDwgMTQpIC0gMSkgPDwgNDtcbiAgICAgICAgZm9yIChsZXQgYyBvZiBhKSB7XG4gICAgICAgICAgICB0ZXN0ICY9IGM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlc3QgIT09IDA7XG4gICAgfVxuICAgIGNoZWNrU3RhaXIoYSkge1xuICAgICAgICBpZiAoYS5sZW5ndGggPCAzKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBsZXQgdGVzdCA9IDA7XG4gICAgICAgIGZvciAobGV0IGMgb2YgYSkge1xuICAgICAgICAgICAgdGVzdCB8PSBjO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzdWl0VGVzdCA9ICgoMSA8PCA0KSAtIDEpICYgdGVzdDtcbiAgICAgICAgaWYgKHN1aXRUZXN0ID09PSAwIHx8XG4gICAgICAgICAgICAoc3VpdFRlc3QgJiAoc3VpdFRlc3QgLSAxKSkgIT09IDApXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHRlc3QgJj0gKCgxIDw8IDE0KSAtIDEpIDw8IDQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGVzdCAmPSAodGVzdCA8PCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVzdCAhPT0gMDtcbiAgICB9XG4gICAgY2hlY2tTaXplKGEsIGIsIGMpIHtcbiAgICAgICAgcmV0dXJuIGEgKyBiICsgYyA9PSAxMSAmJiBhID49IDMgJiYgYiA+PSAzICYmIGMgPj0gMztcbiAgICB9XG4gICAgY2hvb3NlKGNhcmQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IFN0YXRlLkNob29zZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxheWVyIG5vdCBpbiBjaG9vc2Ugc3RhdGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kLnB1c2goY2FyZCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuTGVhdmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBjYXJkcyBpbiBhcmd1bWVudFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZWF2ZShpbmRleCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gU3RhdGUuTGVhdmUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsYXllciBub3QgaW4gbGVhdmUgc3RhdGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHRoaXMuaGFuZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluZGV4IG91dCBvZiBib3VuZHNcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgW2NhcmRdID0gdGhpcy5oYW5kLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5XYWl0O1xuICAgICAgICByZXR1cm4gY2FyZDtcbiAgICB9XG59XG5leHBvcnRzLlBsYXllciA9IFBsYXllcjtcbmNsYXNzIEdhbWUge1xuICAgIDtcbiAgICBjb25zdHJ1Y3RvcihudW1iZXJQbGF5ZXJzKSB7XG4gICAgICAgIHRoaXMucGxheWVycyA9IFtdO1xuICAgICAgICB0aGlzLmRlY2sgPSBbXTtcbiAgICAgICAgdGhpcy5wbGF5ZXJJbmRleCA9IDA7XG4gICAgICAgIGlmIChudW1iZXJQbGF5ZXJzIDwgMilcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdhbWUgbmVlZHMgYXRsZWFzdCAyIHBsYXllclwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJQbGF5ZXJzOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVycy5wdXNoKG5ldyBQbGF5ZXIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBsYXllcnNbdGhpcy5wbGF5ZXJJbmRleF07XG4gICAgICAgIHRoaXMuZGVjayA9ICgwLCBjYXJkc18xLmNyZWF0ZURlY2spKDEpO1xuICAgICAgICAoMCwgY2FyZHNfMS5zaHVmZmxlKSh0aGlzLmRlY2spO1xuICAgICAgICB0aGlzLmRlYWwoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc3RhdGUgPSBTdGF0ZS5DaG9vc2U7XG4gICAgfVxuICAgIGRlYWwoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgcGxheWVyIG9mIHRoaXMucGxheWVycykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmRlY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNhcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLmFkZChjYXJkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGNhcmRzIGxlZnQgdG8gZGVhbFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbmV4dFBsYXllcigpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJJbmRleCA9ICh0aGlzLnBsYXllckluZGV4ICsgMSkgJSB0aGlzLnBsYXllcnMubGVuZ3RoO1xuICAgICAgICB0aGlzLnBsYXllciA9IHRoaXMucGxheWVyc1t0aGlzLnBsYXllckluZGV4XTtcbiAgICB9XG59XG5leHBvcnRzLkdhbWUgPSBHYW1lO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwiLi9pbmRleC5jc3NcIik7XG5jb25zdCBkaXNwbGF5XzEgPSByZXF1aXJlKFwiLi4vbGliL2Rpc3BsYXlcIik7XG5jb25zdCBnYW1lXzEgPSByZXF1aXJlKFwiLi4vbGliL2dhbWVcIik7XG5sZXQgZ2FtZTtcbmdhbWUgPSBuZXcgZ2FtZV8xLkdhbWUoMik7XG4oMCwgZGlzcGxheV8xLmRpc3BsYXlQbGF5ZXJIYW5kKShnYW1lLnBsYXllcik7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgcmVjZWl2ZU1lc3NhZ2UsIGZhbHNlKTtcbmZ1bmN0aW9uIHJlY2VpdmVNZXNzYWdlKHsgZGF0YSB9KSB7XG4gICAgY29uc29sZS5sb2coYEhvc3QgUmVjZWl2ZWQgZnJvbSB3aW5kb3cgJHtkYXRhfWApO1xuICAgIGNvbnN0IFtjbWQsIGFyZ10gPSBkYXRhLnNwbGl0KC8gKC4qKS9zKTtcbiAgICBzd2l0Y2ggKGNtZCkge1xuICAgICAgICBjYXNlIFwic3RhcnRcIjpcbiAgICAgICAgICAgIGdhbWUgPSBuZXcgZ2FtZV8xLkdhbWUocGFyc2VJbnQoYXJnKSk7XG4gICAgICAgICAgICAoMCwgZGlzcGxheV8xLmRpc3BsYXlQbGF5ZXJIYW5kKShnYW1lLnBsYXllcik7XG4gICAgICAgICAgICAoMCwgZGlzcGxheV8xLnNldHVwKShnYW1lLnBsYXllciwgaGFuZGxlRGVja0NsaWNrLCBoYW5kbGVOZXh0Q2xpY2spO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBnYW1lLnBsYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzZW5kTWVzc2FnZShpLCBgc2V0dXAgJHtKU09OLnN0cmluZ2lmeShnYW1lLnBsYXllcnNbaV0uaGFuZCl9YCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZW50IFwiICsgaSArIFwiIHNldHVwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJIb3N0IFN0YXJ0ZWRcIik7XG4gICAgICAgICAgICAoMCwgZGlzcGxheV8xLmRpc3BsYXlQbGF5ZXJIYW5kKShnYW1lLnBsYXllcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShnYW1lKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInBvcFwiOlxuICAgICAgICAgICAgc2VuZE1lc3NhZ2UoZ2FtZS5wbGF5ZXJJbmRleCwgXCJkZWNrIFwiICsgZ2FtZS5kZWNrLnBvcCgpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VudCBkZWNrIHBvcFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibmV4dFwiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBuZXh0XCIpO1xuICAgICAgICAgICAgZ2FtZS5uZXh0UGxheWVyKCk7XG4gICAgICAgICAgICBpZiAoZ2FtZS5wbGF5ZXJJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGdhbWUucGxheWVyLmFkZFJlc2VydmUocGFyc2VJbnQoYXJnKSk7XG4gICAgICAgICAgICAgICAgZ2FtZS5wbGF5ZXIuc3RhdGUgPSBnYW1lXzEuU3RhdGUuQ2hvb3NlO1xuICAgICAgICAgICAgICAgICgwLCBkaXNwbGF5XzEuZGlzcGxheVBsYXllckhhbmQpKGdhbWUucGxheWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbmRNZXNzYWdlKGdhbWUucGxheWVySW5kZXgsIFwibmV4dCBcIiArIGFyZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5jb25zdCBzZW5kTWVzc2FnZSA9IChwbGF5ZXIsIG1zZykgPT4ge1xuICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoYCR7cGxheWVyfSAke21zZ31gKTtcbn07XG5mdW5jdGlvbiBoYW5kbGVEZWNrQ2xpY2soX2UsIHBsYXllcikge1xuICAgIHRyeSB7XG4gICAgICAgIGlmIChwbGF5ZXIuc3RhdGUgPT09IGdhbWVfMS5TdGF0ZS5DaG9vc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBnYW1lLmRlY2sucG9wKCk7XG4gICAgICAgICAgICBwbGF5ZXIuY2hvb3NlKGNhcmQpO1xuICAgICAgICAgICAgKDAsIGRpc3BsYXlfMS5kaXNwbGF5UGxheWVySGFuZCkocGxheWVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBnZXQgY2FyZCBmcm9tIGRlY2suICR7ZXJyfWApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGhhbmRsZU5leHRDbGljayhfZSwgcGxheWVyLCBzZWxlY3RlZEVsZW1lbnQpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KHNlbGVjdGVkRWxlbWVudC5kYXRhc2V0LmluZGV4IHx8IFwiLTFcIik7XG4gICAgICAgICAgICBjb25zdCBjYXJkID0gcGxheWVyLmxlYXZlKGluZGV4KTtcbiAgICAgICAgICAgIGdhbWUubmV4dFBsYXllcigpO1xuICAgICAgICAgICAgc2VuZE1lc3NhZ2UoZ2FtZS5wbGF5ZXJJbmRleCwgXCJuZXh0IFwiICsgY2FyZCk7XG4gICAgICAgICAgICAoMCwgZGlzcGxheV8xLmRpc3BsYXlQbGF5ZXJIYW5kKShwbGF5ZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGxlYXZlIGNhcmQuICR7ZXJyfWApO1xuICAgIH1cbn1cbi8vIGZ1bmN0aW9uIHRpbWVyKGFub246IEZ1bmN0aW9uKSB7XG4vLyAgICAgY29uc3QgVHJpYWxzID0gMTAwO1xuLy8gICAgIGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4vL1xuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgVHJpYWxzOyBpKyspIHtcbi8vICAgICAgICAgYW5vbigpO1xuLy8gICAgIH1cbi8vXG4vLyAgICAgY29uc3QgZW5kID0gcGVyZm9ybWFuY2Uubm93KCk7XG4vLyAgICAgY29uc29sZS5sb2coYEV4ZWN1dGlvbiB0aW1lOiAkeyhlbmQgLSBzdGFydCkgLyBUcmlhbHN9IG1zYCk7XG4vLyB9XG4vL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9