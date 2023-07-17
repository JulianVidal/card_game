/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/offer/index.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/offer/index.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `body {
	background-color: #E0F0E0;

	display: flex;
	align-items: center;
	justify-content: center;

	height: 100%;
	width: 100%;
}

h1 {
	text-align: center;
	font-family: sans-serif;
}

#number-container {

	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 2fr 1fr;
	grid-template-areas: 
		"left number right"
		"btn btn btn";

	gap: 1vh 0;

	align-items: center;
	justify-items: center;

	width: min(90vw, 90vh);
	height: min(90vw, 90vh);
}

#number-container>* {
	font-family: sans-serif;
	/* line-height: 17vw; */
	user-select: none;
}

#left-chevron {
	grid-area: left;
	width: 100%;
	height: 100%;
}

#right-chevron {
	grid-area: right;
	width: 100%;
	height: 100%;
}

#number {
	grid-area: number;
	text-align: center;
	font-size: min(30vw, 30vh);
}

#number-button {
	grid-area: btn;
	width: 100%;
	height: 100%;

	align-self: self-start;
	border: none;
	border-radius: 10px;
	background-color: #197BBD;
	color: #E0F0E0;

	padding: 0;
	font-size: min(15vw, 15vh);
}

#webrtc {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
}

#container {
	flex-grow: 1;
	overflow-y: hidden;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: center;

}

#qr {
	width: min(50%, calc(90vh - 70px));

	display: flex;
	justify-content: center;
	align-items: center;

	aspect-ratio: 1 / 1;
}

#qr>svg {
	width: 90%;
	height: auto;
	/* border-radius: 20px; */
}

#scan {
	width: min(45%, calc(90vh - 70px));
}


#game {
	width: 100vw;
	height: 100%;
}

@media (min-height: 100vw) {
	#container {
		flex-direction: column;
	}

	#qr {
		height: 50%;
		width: auto;
	}

	#scan {
		height: 50%;
		width: auto;
	}
}
`, "",{"version":3,"sources":["webpack://./src/offer/index.css"],"names":[],"mappings":"AAAA;CACC,yBAAyB;;CAEzB,aAAa;CACb,mBAAmB;CACnB,uBAAuB;;CAEvB,YAAY;CACZ,WAAW;AACZ;;AAEA;CACC,kBAAkB;CAClB,uBAAuB;AACxB;;AAEA;;CAEC,aAAa;CACb,kCAAkC;CAClC,2BAA2B;CAC3B;;eAEc;;CAEd,UAAU;;CAEV,mBAAmB;CACnB,qBAAqB;;CAErB,sBAAsB;CACtB,uBAAuB;AACxB;;AAEA;CACC,uBAAuB;CACvB,uBAAuB;CACvB,iBAAiB;AAClB;;AAEA;CACC,eAAe;CACf,WAAW;CACX,YAAY;AACb;;AAEA;CACC,gBAAgB;CAChB,WAAW;CACX,YAAY;AACb;;AAEA;CACC,iBAAiB;CACjB,kBAAkB;CAClB,0BAA0B;AAC3B;;AAEA;CACC,cAAc;CACd,WAAW;CACX,YAAY;;CAEZ,sBAAsB;CACtB,YAAY;CACZ,mBAAmB;CACnB,yBAAyB;CACzB,cAAc;;CAEd,UAAU;CACV,0BAA0B;AAC3B;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,YAAY;CACZ,kBAAkB;CAClB,aAAa;CACb,mBAAmB;CACnB,iBAAiB;CACjB,6BAA6B;CAC7B,mBAAmB;;AAEpB;;AAEA;CACC,kCAAkC;;CAElC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;;CAEnB,mBAAmB;AACpB;;AAEA;CACC,UAAU;CACV,YAAY;CACZ,yBAAyB;AAC1B;;AAEA;CACC,kCAAkC;AACnC;;;AAGA;CACC,YAAY;CACZ,YAAY;AACb;;AAEA;CACC;EACC,sBAAsB;CACvB;;CAEA;EACC,WAAW;EACX,WAAW;CACZ;;CAEA;EACC,WAAW;EACX,WAAW;CACZ;AACD","sourcesContent":["body {\n\tbackground-color: #E0F0E0;\n\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\theight: 100%;\n\twidth: 100%;\n}\n\nh1 {\n\ttext-align: center;\n\tfont-family: sans-serif;\n}\n\n#number-container {\n\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr 1fr;\n\tgrid-template-rows: 2fr 1fr;\n\tgrid-template-areas: \n\t\t\"left number right\"\n\t\t\"btn btn btn\";\n\n\tgap: 1vh 0;\n\n\talign-items: center;\n\tjustify-items: center;\n\n\twidth: min(90vw, 90vh);\n\theight: min(90vw, 90vh);\n}\n\n#number-container>* {\n\tfont-family: sans-serif;\n\t/* line-height: 17vw; */\n\tuser-select: none;\n}\n\n#left-chevron {\n\tgrid-area: left;\n\twidth: 100%;\n\theight: 100%;\n}\n\n#right-chevron {\n\tgrid-area: right;\n\twidth: 100%;\n\theight: 100%;\n}\n\n#number {\n\tgrid-area: number;\n\ttext-align: center;\n\tfont-size: min(30vw, 30vh);\n}\n\n#number-button {\n\tgrid-area: btn;\n\twidth: 100%;\n\theight: 100%;\n\n\talign-self: self-start;\n\tborder: none;\n\tborder-radius: 10px;\n\tbackground-color: #197BBD;\n\tcolor: #E0F0E0;\n\n\tpadding: 0;\n\tfont-size: min(15vw, 15vh);\n}\n\n#webrtc {\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#container {\n\tflex-grow: 1;\n\toverflow-y: hidden;\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: nowrap;\n\tjustify-content: space-around;\n\talign-items: center;\n\n}\n\n#qr {\n\twidth: min(50%, calc(90vh - 70px));\n\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\taspect-ratio: 1 / 1;\n}\n\n#qr>svg {\n\twidth: 90%;\n\theight: auto;\n\t/* border-radius: 20px; */\n}\n\n#scan {\n\twidth: min(45%, calc(90vh - 70px));\n}\n\n\n#game {\n\twidth: 100vw;\n\theight: 100%;\n}\n\n@media (min-height: 100vw) {\n\t#container {\n\t\tflex-direction: column;\n\t}\n\n\t#qr {\n\t\theight: 50%;\n\t\twidth: auto;\n\t}\n\n\t#scan {\n\t\theight: 50%;\n\t\twidth: auto;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "./node_modules/qr-scanner/qr-scanner.min.js":
/*!***************************************************!*\
  !*** ./node_modules/qr-scanner/qr-scanner.min.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class e{constructor(a,b,c,d,f){this._legacyCanvasSize=e.DEFAULT_CANVAS_SIZE;this._preferredCamera="environment";this._maxScansPerSecond=25;this._lastScanTimestamp=-1;this._destroyed=this._flashOn=this._paused=this._active=!1;this.$video=a;this.$canvas=document.createElement("canvas");c&&"object"===typeof c?this._onDecode=b:(c||d||f?console.warn("You're using a deprecated version of the QrScanner constructor which will be removed in the future"):console.warn("Note that the type of the scan result passed to onDecode will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."),
this._legacyOnDecode=b);b="object"===typeof c?c:{};this._onDecodeError=b.onDecodeError||("function"===typeof c?c:this._onDecodeError);this._calculateScanRegion=b.calculateScanRegion||("function"===typeof d?d:this._calculateScanRegion);this._preferredCamera=b.preferredCamera||f||this._preferredCamera;this._legacyCanvasSize="number"===typeof c?c:"number"===typeof d?d:this._legacyCanvasSize;this._maxScansPerSecond=b.maxScansPerSecond||this._maxScansPerSecond;this._onPlay=this._onPlay.bind(this);this._onLoadedMetaData=
this._onLoadedMetaData.bind(this);this._onVisibilityChange=this._onVisibilityChange.bind(this);this._updateOverlay=this._updateOverlay.bind(this);a.disablePictureInPicture=!0;a.playsInline=!0;a.muted=!0;let h=!1;a.hidden&&(a.hidden=!1,h=!0);document.body.contains(a)||(document.body.appendChild(a),h=!0);c=a.parentElement;if(b.highlightScanRegion||b.highlightCodeOutline){d=!!b.overlay;this.$overlay=b.overlay||document.createElement("div");f=this.$overlay.style;f.position="absolute";f.display="none";
f.pointerEvents="none";this.$overlay.classList.add("scan-region-highlight");if(!d&&b.highlightScanRegion){this.$overlay.innerHTML='<svg class="scan-region-highlight-svg" viewBox="0 0 238 238" preserveAspectRatio="none" style="position:absolute;width:100%;height:100%;left:0;top:0;fill:none;stroke:#e9b213;stroke-width:4;stroke-linecap:round;stroke-linejoin:round"><path d="M31 2H10a8 8 0 0 0-8 8v21M207 2h21a8 8 0 0 1 8 8v21m0 176v21a8 8 0 0 1-8 8h-21m-176 0H10a8 8 0 0 1-8-8v-21"/></svg>';try{this.$overlay.firstElementChild.animate({transform:["scale(.98)",
"scale(1.01)"]},{duration:400,iterations:Infinity,direction:"alternate",easing:"ease-in-out"})}catch(m){}c.insertBefore(this.$overlay,this.$video.nextSibling)}b.highlightCodeOutline&&(this.$overlay.insertAdjacentHTML("beforeend",'<svg class="code-outline-highlight" preserveAspectRatio="none" style="display:none;width:100%;height:100%;fill:none;stroke:#e9b213;stroke-width:5;stroke-dasharray:25;stroke-linecap:round;stroke-linejoin:round"><polygon/></svg>'),this.$codeOutlineHighlight=this.$overlay.lastElementChild)}this._scanRegion=
this._calculateScanRegion(a);requestAnimationFrame(()=>{let m=window.getComputedStyle(a);"none"===m.display&&(a.style.setProperty("display","block","important"),h=!0);"visible"!==m.visibility&&(a.style.setProperty("visibility","visible","important"),h=!0);h&&(console.warn("QrScanner has overwritten the video hiding style to avoid Safari stopping the playback."),a.style.opacity="0",a.style.width="0",a.style.height="0",this.$overlay&&this.$overlay.parentElement&&this.$overlay.parentElement.removeChild(this.$overlay),
delete this.$overlay,delete this.$codeOutlineHighlight);this.$overlay&&this._updateOverlay()});a.addEventListener("play",this._onPlay);a.addEventListener("loadedmetadata",this._onLoadedMetaData);document.addEventListener("visibilitychange",this._onVisibilityChange);window.addEventListener("resize",this._updateOverlay);this._qrEnginePromise=e.createQrEngine()}static set WORKER_PATH(a){console.warn("Setting QrScanner.WORKER_PATH is not required and not supported anymore. Have a look at the README for new setup instructions.")}static async hasCamera(){try{return!!(await e.listCameras(!1)).length}catch(a){return!1}}static async listCameras(a=
!1){if(!navigator.mediaDevices)return[];let b=async()=>(await navigator.mediaDevices.enumerateDevices()).filter(d=>"videoinput"===d.kind),c;try{a&&(await b()).every(d=>!d.label)&&(c=await navigator.mediaDevices.getUserMedia({audio:!1,video:!0}))}catch(d){}try{return(await b()).map((d,f)=>({id:d.deviceId,label:d.label||(0===f?"Default Camera":`Camera ${f+1}`)}))}finally{c&&(console.warn("Call listCameras after successfully starting a QR scanner to avoid creating a temporary video stream"),e._stopVideoStream(c))}}async hasFlash(){let a;
try{if(this.$video.srcObject){if(!(this.$video.srcObject instanceof MediaStream))return!1;a=this.$video.srcObject}else a=(await this._getCameraStream()).stream;return"torch"in a.getVideoTracks()[0].getSettings()}catch(b){return!1}finally{a&&a!==this.$video.srcObject&&(console.warn("Call hasFlash after successfully starting the scanner to avoid creating a temporary video stream"),e._stopVideoStream(a))}}isFlashOn(){return this._flashOn}async toggleFlash(){this._flashOn?await this.turnFlashOff():await this.turnFlashOn()}async turnFlashOn(){if(!this._flashOn&&
!this._destroyed&&(this._flashOn=!0,this._active&&!this._paused))try{if(!await this.hasFlash())throw"No flash available";await this.$video.srcObject.getVideoTracks()[0].applyConstraints({advanced:[{torch:!0}]})}catch(a){throw this._flashOn=!1,a;}}async turnFlashOff(){this._flashOn&&(this._flashOn=!1,await this._restartVideoStream())}destroy(){this.$video.removeEventListener("loadedmetadata",this._onLoadedMetaData);this.$video.removeEventListener("play",this._onPlay);document.removeEventListener("visibilitychange",
this._onVisibilityChange);window.removeEventListener("resize",this._updateOverlay);this._destroyed=!0;this._flashOn=!1;this.stop();e._postWorkerMessage(this._qrEnginePromise,"close")}async start(){if(this._destroyed)throw Error("The QR scanner can not be started as it had been destroyed.");if(!this._active||this._paused)if("https:"!==window.location.protocol&&console.warn("The camera stream is only accessible if the page is transferred via https."),this._active=!0,!document.hidden)if(this._paused=
!1,this.$video.srcObject)await this.$video.play();else try{let {stream:a,facingMode:b}=await this._getCameraStream();!this._active||this._paused?e._stopVideoStream(a):(this._setVideoMirror(b),this.$video.srcObject=a,await this.$video.play(),this._flashOn&&(this._flashOn=!1,this.turnFlashOn().catch(()=>{})))}catch(a){if(!this._paused)throw this._active=!1,a;}}stop(){this.pause();this._active=!1}async pause(a=!1){this._paused=!0;if(!this._active)return!0;this.$video.pause();this.$overlay&&(this.$overlay.style.display=
"none");let b=()=>{this.$video.srcObject instanceof MediaStream&&(e._stopVideoStream(this.$video.srcObject),this.$video.srcObject=null)};if(a)return b(),!0;await new Promise(c=>setTimeout(c,300));if(!this._paused)return!1;b();return!0}async setCamera(a){a!==this._preferredCamera&&(this._preferredCamera=a,await this._restartVideoStream())}static async scanImage(a,b,c,d,f=!1,h=!1){let m,n=!1;b&&("scanRegion"in b||"qrEngine"in b||"canvas"in b||"disallowCanvasResizing"in b||"alsoTryWithoutScanRegion"in
b||"returnDetailedScanResult"in b)?(m=b.scanRegion,c=b.qrEngine,d=b.canvas,f=b.disallowCanvasResizing||!1,h=b.alsoTryWithoutScanRegion||!1,n=!0):b||c||d||f||h?console.warn("You're using a deprecated api for scanImage which will be removed in the future."):console.warn("Note that the return type of scanImage will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true.");b=!!c;try{let p,k;[c,p]=await Promise.all([c||e.createQrEngine(),e._loadImage(a)]);
[d,k]=e._drawToCanvas(p,m,d,f);let q;if(c instanceof Worker){let g=c;b||e._postWorkerMessageSync(g,"inversionMode","both");q=await new Promise((l,v)=>{let w,u,r,y=-1;u=t=>{t.data.id===y&&(g.removeEventListener("message",u),g.removeEventListener("error",r),clearTimeout(w),null!==t.data.data?l({data:t.data.data,cornerPoints:e._convertPoints(t.data.cornerPoints,m)}):v(e.NO_QR_CODE_FOUND))};r=t=>{g.removeEventListener("message",u);g.removeEventListener("error",r);clearTimeout(w);v("Scanner error: "+(t?
t.message||t:"Unknown Error"))};g.addEventListener("message",u);g.addEventListener("error",r);w=setTimeout(()=>r("timeout"),1E4);let x=k.getImageData(0,0,d.width,d.height);y=e._postWorkerMessageSync(g,"decode",x,[x.data.buffer])})}else q=await Promise.race([new Promise((g,l)=>window.setTimeout(()=>l("Scanner error: timeout"),1E4)),(async()=>{try{var [g]=await c.detect(d);if(!g)throw e.NO_QR_CODE_FOUND;return{data:g.rawValue,cornerPoints:e._convertPoints(g.cornerPoints,m)}}catch(l){g=l.message||l;
if(/not implemented|service unavailable/.test(g))return e._disableBarcodeDetector=!0,e.scanImage(a,{scanRegion:m,canvas:d,disallowCanvasResizing:f,alsoTryWithoutScanRegion:h});throw`Scanner error: ${g}`;}})()]);return n?q:q.data}catch(p){if(!m||!h)throw p;let k=await e.scanImage(a,{qrEngine:c,canvas:d,disallowCanvasResizing:f});return n?k:k.data}finally{b||e._postWorkerMessage(c,"close")}}setGrayscaleWeights(a,b,c,d=!0){e._postWorkerMessage(this._qrEnginePromise,"grayscaleWeights",{red:a,green:b,
blue:c,useIntegerApproximation:d})}setInversionMode(a){e._postWorkerMessage(this._qrEnginePromise,"inversionMode",a)}static async createQrEngine(a){a&&console.warn("Specifying a worker path is not required and not supported anymore.");a=()=>__webpack_require__.e(/*! import() */ "vendors-node_modules_qr-scanner_qr-scanner-worker_min_js").then(__webpack_require__.bind(__webpack_require__, /*! ./qr-scanner-worker.min.js */ "./node_modules/qr-scanner/qr-scanner-worker.min.js")).then(c=>c.createWorker());if(!(!e._disableBarcodeDetector&&"BarcodeDetector"in window&&BarcodeDetector.getSupportedFormats&&(await BarcodeDetector.getSupportedFormats()).includes("qr_code")))return a();let b=navigator.userAgentData;
return b&&b.brands.some(({brand:c})=>/Chromium/i.test(c))&&/mac ?OS/i.test(b.platform)&&await b.getHighEntropyValues(["architecture","platformVersion"]).then(({architecture:c,platformVersion:d})=>/arm/i.test(c||"arm")&&13<=parseInt(d||"13")).catch(()=>!0)?a():new BarcodeDetector({formats:["qr_code"]})}_onPlay(){this._scanRegion=this._calculateScanRegion(this.$video);this._updateOverlay();this.$overlay&&(this.$overlay.style.display="");this._scanFrame()}_onLoadedMetaData(){this._scanRegion=this._calculateScanRegion(this.$video);
this._updateOverlay()}_onVisibilityChange(){document.hidden?this.pause():this._active&&this.start()}_calculateScanRegion(a){let b=Math.round(2/3*Math.min(a.videoWidth,a.videoHeight));return{x:Math.round((a.videoWidth-b)/2),y:Math.round((a.videoHeight-b)/2),width:b,height:b,downScaledWidth:this._legacyCanvasSize,downScaledHeight:this._legacyCanvasSize}}_updateOverlay(){requestAnimationFrame(()=>{if(this.$overlay){var a=this.$video,b=a.videoWidth,c=a.videoHeight,d=a.offsetWidth,f=a.offsetHeight,h=a.offsetLeft,
m=a.offsetTop,n=window.getComputedStyle(a),p=n.objectFit,k=b/c,q=d/f;switch(p){case "none":var g=b;var l=c;break;case "fill":g=d;l=f;break;default:("cover"===p?k>q:k<q)?(l=f,g=l*k):(g=d,l=g/k),"scale-down"===p&&(g=Math.min(g,b),l=Math.min(l,c))}var [v,w]=n.objectPosition.split(" ").map((r,y)=>{const x=parseFloat(r);return r.endsWith("%")?(y?f-l:d-g)*x/100:x});n=this._scanRegion.width||b;q=this._scanRegion.height||c;p=this._scanRegion.x||0;var u=this._scanRegion.y||0;k=this.$overlay.style;k.width=
`${n/b*g}px`;k.height=`${q/c*l}px`;k.top=`${m+w+u/c*l}px`;c=/scaleX\(-1\)/.test(a.style.transform);k.left=`${h+(c?d-v-g:v)+(c?b-p-n:p)/b*g}px`;k.transform=a.style.transform}})}static _convertPoints(a,b){if(!b)return a;let c=b.x||0,d=b.y||0,f=b.width&&b.downScaledWidth?b.width/b.downScaledWidth:1;b=b.height&&b.downScaledHeight?b.height/b.downScaledHeight:1;for(let h of a)h.x=h.x*f+c,h.y=h.y*b+d;return a}_scanFrame(){!this._active||this.$video.paused||this.$video.ended||("requestVideoFrameCallback"in
this.$video?this.$video.requestVideoFrameCallback.bind(this.$video):requestAnimationFrame)(async()=>{if(!(1>=this.$video.readyState)){var a=Date.now()-this._lastScanTimestamp,b=1E3/this._maxScansPerSecond;a<b&&await new Promise(d=>setTimeout(d,b-a));this._lastScanTimestamp=Date.now();try{var c=await e.scanImage(this.$video,{scanRegion:this._scanRegion,qrEngine:this._qrEnginePromise,canvas:this.$canvas})}catch(d){if(!this._active)return;this._onDecodeError(d)}!e._disableBarcodeDetector||await this._qrEnginePromise instanceof
Worker||(this._qrEnginePromise=e.createQrEngine());c?(this._onDecode?this._onDecode(c):this._legacyOnDecode&&this._legacyOnDecode(c.data),this.$codeOutlineHighlight&&(clearTimeout(this._codeOutlineHighlightRemovalTimeout),this._codeOutlineHighlightRemovalTimeout=void 0,this.$codeOutlineHighlight.setAttribute("viewBox",`${this._scanRegion.x||0} `+`${this._scanRegion.y||0} `+`${this._scanRegion.width||this.$video.videoWidth} `+`${this._scanRegion.height||this.$video.videoHeight}`),this.$codeOutlineHighlight.firstElementChild.setAttribute("points",
c.cornerPoints.map(({x:d,y:f})=>`${d},${f}`).join(" ")),this.$codeOutlineHighlight.style.display="")):this.$codeOutlineHighlight&&!this._codeOutlineHighlightRemovalTimeout&&(this._codeOutlineHighlightRemovalTimeout=setTimeout(()=>this.$codeOutlineHighlight.style.display="none",100))}this._scanFrame()})}_onDecodeError(a){a!==e.NO_QR_CODE_FOUND&&console.log(a)}async _getCameraStream(){if(!navigator.mediaDevices)throw"Camera not found.";let a=/^(environment|user)$/.test(this._preferredCamera)?"facingMode":
"deviceId",b=[{width:{min:1024}},{width:{min:768}},{}],c=b.map(d=>Object.assign({},d,{[a]:{exact:this._preferredCamera}}));for(let d of[...c,...b])try{let f=await navigator.mediaDevices.getUserMedia({video:d,audio:!1}),h=this._getFacingMode(f)||(d.facingMode?this._preferredCamera:"environment"===this._preferredCamera?"user":"environment");return{stream:f,facingMode:h}}catch(f){}throw"Camera not found.";}async _restartVideoStream(){let a=this._paused;await this.pause(!0)&&!a&&this._active&&await this.start()}static _stopVideoStream(a){for(let b of a.getTracks())b.stop(),
a.removeTrack(b)}_setVideoMirror(a){this.$video.style.transform="scaleX("+("user"===a?-1:1)+")"}_getFacingMode(a){return(a=a.getVideoTracks()[0])?/rear|back|environment/i.test(a.label)?"environment":/front|user|face/i.test(a.label)?"user":null:null}static _drawToCanvas(a,b,c,d=!1){c=c||document.createElement("canvas");let f=b&&b.x?b.x:0,h=b&&b.y?b.y:0,m=b&&b.width?b.width:a.videoWidth||a.width,n=b&&b.height?b.height:a.videoHeight||a.height;d||(d=b&&b.downScaledWidth?b.downScaledWidth:m,b=b&&b.downScaledHeight?
b.downScaledHeight:n,c.width!==d&&(c.width=d),c.height!==b&&(c.height=b));b=c.getContext("2d",{alpha:!1});b.imageSmoothingEnabled=!1;b.drawImage(a,f,h,m,n,0,0,c.width,c.height);return[c,b]}static async _loadImage(a){if(a instanceof Image)return await e._awaitImageLoad(a),a;if(a instanceof HTMLVideoElement||a instanceof HTMLCanvasElement||a instanceof SVGImageElement||"OffscreenCanvas"in window&&a instanceof OffscreenCanvas||"ImageBitmap"in window&&a instanceof ImageBitmap)return a;if(a instanceof
File||a instanceof Blob||a instanceof URL||"string"===typeof a){let b=new Image;b.src=a instanceof File||a instanceof Blob?URL.createObjectURL(a):a.toString();try{return await e._awaitImageLoad(b),b}finally{(a instanceof File||a instanceof Blob)&&URL.revokeObjectURL(b.src)}}else throw"Unsupported image type.";}static async _awaitImageLoad(a){a.complete&&0!==a.naturalWidth||await new Promise((b,c)=>{let d=f=>{a.removeEventListener("load",d);a.removeEventListener("error",d);f instanceof ErrorEvent?
c("Image load error"):b()};a.addEventListener("load",d);a.addEventListener("error",d)})}static async _postWorkerMessage(a,b,c,d){return e._postWorkerMessageSync(await a,b,c,d)}static _postWorkerMessageSync(a,b,c,d){if(!(a instanceof Worker))return-1;let f=e._workerMessageId++;a.postMessage({id:f,type:b,data:c},d);return f}}e.DEFAULT_CANVAS_SIZE=400;e.NO_QR_CODE_FOUND="No QR code found";e._disableBarcodeDetector=!1;e._workerMessageId=0;/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (e);
//# sourceMappingURL=qr-scanner.min.js.map


/***/ }),

/***/ "./node_modules/qrcode-generator/qrcode.js":
/*!*************************************************!*\
  !*** ./node_modules/qrcode-generator/qrcode.js ***!
  \*************************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//---------------------------------------------------------------------
//
// QR Code Generator for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//  http://www.opensource.org/licenses/mit-license.php
//
// The word 'QR Code' is registered trademark of
// DENSO WAVE INCORPORATED
//  http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------

var qrcode = function() {

  //---------------------------------------------------------------------
  // qrcode
  //---------------------------------------------------------------------

  /**
   * qrcode
   * @param typeNumber 1 to 40
   * @param errorCorrectionLevel 'L','M','Q','H'
   */
  var qrcode = function(typeNumber, errorCorrectionLevel) {

    var PAD0 = 0xEC;
    var PAD1 = 0x11;

    var _typeNumber = typeNumber;
    var _errorCorrectionLevel = QRErrorCorrectionLevel[errorCorrectionLevel];
    var _modules = null;
    var _moduleCount = 0;
    var _dataCache = null;
    var _dataList = [];

    var _this = {};

    var makeImpl = function(test, maskPattern) {

      _moduleCount = _typeNumber * 4 + 17;
      _modules = function(moduleCount) {
        var modules = new Array(moduleCount);
        for (var row = 0; row < moduleCount; row += 1) {
          modules[row] = new Array(moduleCount);
          for (var col = 0; col < moduleCount; col += 1) {
            modules[row][col] = null;
          }
        }
        return modules;
      }(_moduleCount);

      setupPositionProbePattern(0, 0);
      setupPositionProbePattern(_moduleCount - 7, 0);
      setupPositionProbePattern(0, _moduleCount - 7);
      setupPositionAdjustPattern();
      setupTimingPattern();
      setupTypeInfo(test, maskPattern);

      if (_typeNumber >= 7) {
        setupTypeNumber(test);
      }

      if (_dataCache == null) {
        _dataCache = createData(_typeNumber, _errorCorrectionLevel, _dataList);
      }

      mapData(_dataCache, maskPattern);
    };

    var setupPositionProbePattern = function(row, col) {

      for (var r = -1; r <= 7; r += 1) {

        if (row + r <= -1 || _moduleCount <= row + r) continue;

        for (var c = -1; c <= 7; c += 1) {

          if (col + c <= -1 || _moduleCount <= col + c) continue;

          if ( (0 <= r && r <= 6 && (c == 0 || c == 6) )
              || (0 <= c && c <= 6 && (r == 0 || r == 6) )
              || (2 <= r && r <= 4 && 2 <= c && c <= 4) ) {
            _modules[row + r][col + c] = true;
          } else {
            _modules[row + r][col + c] = false;
          }
        }
      }
    };

    var getBestMaskPattern = function() {

      var minLostPoint = 0;
      var pattern = 0;

      for (var i = 0; i < 8; i += 1) {

        makeImpl(true, i);

        var lostPoint = QRUtil.getLostPoint(_this);

        if (i == 0 || minLostPoint > lostPoint) {
          minLostPoint = lostPoint;
          pattern = i;
        }
      }

      return pattern;
    };

    var setupTimingPattern = function() {

      for (var r = 8; r < _moduleCount - 8; r += 1) {
        if (_modules[r][6] != null) {
          continue;
        }
        _modules[r][6] = (r % 2 == 0);
      }

      for (var c = 8; c < _moduleCount - 8; c += 1) {
        if (_modules[6][c] != null) {
          continue;
        }
        _modules[6][c] = (c % 2 == 0);
      }
    };

    var setupPositionAdjustPattern = function() {

      var pos = QRUtil.getPatternPosition(_typeNumber);

      for (var i = 0; i < pos.length; i += 1) {

        for (var j = 0; j < pos.length; j += 1) {

          var row = pos[i];
          var col = pos[j];

          if (_modules[row][col] != null) {
            continue;
          }

          for (var r = -2; r <= 2; r += 1) {

            for (var c = -2; c <= 2; c += 1) {

              if (r == -2 || r == 2 || c == -2 || c == 2
                  || (r == 0 && c == 0) ) {
                _modules[row + r][col + c] = true;
              } else {
                _modules[row + r][col + c] = false;
              }
            }
          }
        }
      }
    };

    var setupTypeNumber = function(test) {

      var bits = QRUtil.getBCHTypeNumber(_typeNumber);

      for (var i = 0; i < 18; i += 1) {
        var mod = (!test && ( (bits >> i) & 1) == 1);
        _modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = mod;
      }

      for (var i = 0; i < 18; i += 1) {
        var mod = (!test && ( (bits >> i) & 1) == 1);
        _modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
      }
    };

    var setupTypeInfo = function(test, maskPattern) {

      var data = (_errorCorrectionLevel << 3) | maskPattern;
      var bits = QRUtil.getBCHTypeInfo(data);

      // vertical
      for (var i = 0; i < 15; i += 1) {

        var mod = (!test && ( (bits >> i) & 1) == 1);

        if (i < 6) {
          _modules[i][8] = mod;
        } else if (i < 8) {
          _modules[i + 1][8] = mod;
        } else {
          _modules[_moduleCount - 15 + i][8] = mod;
        }
      }

      // horizontal
      for (var i = 0; i < 15; i += 1) {

        var mod = (!test && ( (bits >> i) & 1) == 1);

        if (i < 8) {
          _modules[8][_moduleCount - i - 1] = mod;
        } else if (i < 9) {
          _modules[8][15 - i - 1 + 1] = mod;
        } else {
          _modules[8][15 - i - 1] = mod;
        }
      }

      // fixed module
      _modules[_moduleCount - 8][8] = (!test);
    };

    var mapData = function(data, maskPattern) {

      var inc = -1;
      var row = _moduleCount - 1;
      var bitIndex = 7;
      var byteIndex = 0;
      var maskFunc = QRUtil.getMaskFunction(maskPattern);

      for (var col = _moduleCount - 1; col > 0; col -= 2) {

        if (col == 6) col -= 1;

        while (true) {

          for (var c = 0; c < 2; c += 1) {

            if (_modules[row][col - c] == null) {

              var dark = false;

              if (byteIndex < data.length) {
                dark = ( ( (data[byteIndex] >>> bitIndex) & 1) == 1);
              }

              var mask = maskFunc(row, col - c);

              if (mask) {
                dark = !dark;
              }

              _modules[row][col - c] = dark;
              bitIndex -= 1;

              if (bitIndex == -1) {
                byteIndex += 1;
                bitIndex = 7;
              }
            }
          }

          row += inc;

          if (row < 0 || _moduleCount <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    };

    var createBytes = function(buffer, rsBlocks) {

      var offset = 0;

      var maxDcCount = 0;
      var maxEcCount = 0;

      var dcdata = new Array(rsBlocks.length);
      var ecdata = new Array(rsBlocks.length);

      for (var r = 0; r < rsBlocks.length; r += 1) {

        var dcCount = rsBlocks[r].dataCount;
        var ecCount = rsBlocks[r].totalCount - dcCount;

        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);

        dcdata[r] = new Array(dcCount);

        for (var i = 0; i < dcdata[r].length; i += 1) {
          dcdata[r][i] = 0xff & buffer.getBuffer()[i + offset];
        }
        offset += dcCount;

        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        var rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);

        var modPoly = rawPoly.mod(rsPoly);
        ecdata[r] = new Array(rsPoly.getLength() - 1);
        for (var i = 0; i < ecdata[r].length; i += 1) {
          var modIndex = i + modPoly.getLength() - ecdata[r].length;
          ecdata[r][i] = (modIndex >= 0)? modPoly.getAt(modIndex) : 0;
        }
      }

      var totalCodeCount = 0;
      for (var i = 0; i < rsBlocks.length; i += 1) {
        totalCodeCount += rsBlocks[i].totalCount;
      }

      var data = new Array(totalCodeCount);
      var index = 0;

      for (var i = 0; i < maxDcCount; i += 1) {
        for (var r = 0; r < rsBlocks.length; r += 1) {
          if (i < dcdata[r].length) {
            data[index] = dcdata[r][i];
            index += 1;
          }
        }
      }

      for (var i = 0; i < maxEcCount; i += 1) {
        for (var r = 0; r < rsBlocks.length; r += 1) {
          if (i < ecdata[r].length) {
            data[index] = ecdata[r][i];
            index += 1;
          }
        }
      }

      return data;
    };

    var createData = function(typeNumber, errorCorrectionLevel, dataList) {

      var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectionLevel);

      var buffer = qrBitBuffer();

      for (var i = 0; i < dataList.length; i += 1) {
        var data = dataList[i];
        buffer.put(data.getMode(), 4);
        buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
        data.write(buffer);
      }

      // calc num max data.
      var totalDataCount = 0;
      for (var i = 0; i < rsBlocks.length; i += 1) {
        totalDataCount += rsBlocks[i].dataCount;
      }

      if (buffer.getLengthInBits() > totalDataCount * 8) {
        throw 'code length overflow. ('
          + buffer.getLengthInBits()
          + '>'
          + totalDataCount * 8
          + ')';
      }

      // end code
      if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
        buffer.put(0, 4);
      }

      // padding
      while (buffer.getLengthInBits() % 8 != 0) {
        buffer.putBit(false);
      }

      // padding
      while (true) {

        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(PAD0, 8);

        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(PAD1, 8);
      }

      return createBytes(buffer, rsBlocks);
    };

    _this.addData = function(data, mode) {

      mode = mode || 'Byte';

      var newData = null;

      switch(mode) {
      case 'Numeric' :
        newData = qrNumber(data);
        break;
      case 'Alphanumeric' :
        newData = qrAlphaNum(data);
        break;
      case 'Byte' :
        newData = qr8BitByte(data);
        break;
      case 'Kanji' :
        newData = qrKanji(data);
        break;
      default :
        throw 'mode:' + mode;
      }

      _dataList.push(newData);
      _dataCache = null;
    };

    _this.isDark = function(row, col) {
      if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {
        throw row + ',' + col;
      }
      return _modules[row][col];
    };

    _this.getModuleCount = function() {
      return _moduleCount;
    };

    _this.make = function() {
      if (_typeNumber < 1) {
        var typeNumber = 1;

        for (; typeNumber < 40; typeNumber++) {
          var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, _errorCorrectionLevel);
          var buffer = qrBitBuffer();

          for (var i = 0; i < _dataList.length; i++) {
            var data = _dataList[i];
            buffer.put(data.getMode(), 4);
            buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
            data.write(buffer);
          }

          var totalDataCount = 0;
          for (var i = 0; i < rsBlocks.length; i++) {
            totalDataCount += rsBlocks[i].dataCount;
          }

          if (buffer.getLengthInBits() <= totalDataCount * 8) {
            break;
          }
        }

        _typeNumber = typeNumber;
      }

      makeImpl(false, getBestMaskPattern() );
    };

    _this.createTableTag = function(cellSize, margin) {

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      var qrHtml = '';

      qrHtml += '<table style="';
      qrHtml += ' border-width: 0px; border-style: none;';
      qrHtml += ' border-collapse: collapse;';
      qrHtml += ' padding: 0px; margin: ' + margin + 'px;';
      qrHtml += '">';
      qrHtml += '<tbody>';

      for (var r = 0; r < _this.getModuleCount(); r += 1) {

        qrHtml += '<tr>';

        for (var c = 0; c < _this.getModuleCount(); c += 1) {
          qrHtml += '<td style="';
          qrHtml += ' border-width: 0px; border-style: none;';
          qrHtml += ' border-collapse: collapse;';
          qrHtml += ' padding: 0px; margin: 0px;';
          qrHtml += ' width: ' + cellSize + 'px;';
          qrHtml += ' height: ' + cellSize + 'px;';
          qrHtml += ' background-color: ';
          qrHtml += _this.isDark(r, c)? '#000000' : '#ffffff';
          qrHtml += ';';
          qrHtml += '"/>';
        }

        qrHtml += '</tr>';
      }

      qrHtml += '</tbody>';
      qrHtml += '</table>';

      return qrHtml;
    };

    _this.createSvgTag = function(cellSize, margin, alt, title) {

      var opts = {};
      if (typeof arguments[0] == 'object') {
        // Called by options.
        opts = arguments[0];
        // overwrite cellSize and margin.
        cellSize = opts.cellSize;
        margin = opts.margin;
        alt = opts.alt;
        title = opts.title;
      }

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      // Compose alt property surrogate
      alt = (typeof alt === 'string') ? {text: alt} : alt || {};
      alt.text = alt.text || null;
      alt.id = (alt.text) ? alt.id || 'qrcode-description' : null;

      // Compose title property surrogate
      title = (typeof title === 'string') ? {text: title} : title || {};
      title.text = title.text || null;
      title.id = (title.text) ? title.id || 'qrcode-title' : null;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var c, mc, r, mr, qrSvg='', rect;

      rect = 'l' + cellSize + ',0 0,' + cellSize +
        ' -' + cellSize + ',0 0,-' + cellSize + 'z ';

      qrSvg += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"';
      qrSvg += !opts.scalable ? ' width="' + size + 'px" height="' + size + 'px"' : '';
      qrSvg += ' viewBox="0 0 ' + size + ' ' + size + '" ';
      qrSvg += ' preserveAspectRatio="xMinYMin meet"';
      qrSvg += (title.text || alt.text) ? ' role="img" aria-labelledby="' +
          escapeXml([title.id, alt.id].join(' ').trim() ) + '"' : '';
      qrSvg += '>';
      qrSvg += (title.text) ? '<title id="' + escapeXml(title.id) + '">' +
          escapeXml(title.text) + '</title>' : '';
      qrSvg += (alt.text) ? '<description id="' + escapeXml(alt.id) + '">' +
          escapeXml(alt.text) + '</description>' : '';
      qrSvg += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>';
      qrSvg += '<path d="';

      for (r = 0; r < _this.getModuleCount(); r += 1) {
        mr = r * cellSize + margin;
        for (c = 0; c < _this.getModuleCount(); c += 1) {
          if (_this.isDark(r, c) ) {
            mc = c*cellSize+margin;
            qrSvg += 'M' + mc + ',' + mr + rect;
          }
        }
      }

      qrSvg += '" stroke="transparent" fill="black"/>';
      qrSvg += '</svg>';

      return qrSvg;
    };

    _this.createDataURL = function(cellSize, margin) {

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;

      return createDataURL(size, size, function(x, y) {
        if (min <= x && x < max && min <= y && y < max) {
          var c = Math.floor( (x - min) / cellSize);
          var r = Math.floor( (y - min) / cellSize);
          return _this.isDark(r, c)? 0 : 1;
        } else {
          return 1;
        }
      } );
    };

    _this.createImgTag = function(cellSize, margin, alt) {

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;

      var img = '';
      img += '<img';
      img += '\u0020src="';
      img += _this.createDataURL(cellSize, margin);
      img += '"';
      img += '\u0020width="';
      img += size;
      img += '"';
      img += '\u0020height="';
      img += size;
      img += '"';
      if (alt) {
        img += '\u0020alt="';
        img += escapeXml(alt);
        img += '"';
      }
      img += '/>';

      return img;
    };

    var escapeXml = function(s) {
      var escaped = '';
      for (var i = 0; i < s.length; i += 1) {
        var c = s.charAt(i);
        switch(c) {
        case '<': escaped += '&lt;'; break;
        case '>': escaped += '&gt;'; break;
        case '&': escaped += '&amp;'; break;
        case '"': escaped += '&quot;'; break;
        default : escaped += c; break;
        }
      }
      return escaped;
    };

    var _createHalfASCII = function(margin) {
      var cellSize = 1;
      margin = (typeof margin == 'undefined')? cellSize * 2 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;

      var y, x, r1, r2, p;

      var blocks = {
        '██': '█',
        '█ ': '▀',
        ' █': '▄',
        '  ': ' '
      };

      var blocksLastLineNoMargin = {
        '██': '▀',
        '█ ': '▀',
        ' █': ' ',
        '  ': ' '
      };

      var ascii = '';
      for (y = 0; y < size; y += 2) {
        r1 = Math.floor((y - min) / cellSize);
        r2 = Math.floor((y + 1 - min) / cellSize);
        for (x = 0; x < size; x += 1) {
          p = '█';

          if (min <= x && x < max && min <= y && y < max && _this.isDark(r1, Math.floor((x - min) / cellSize))) {
            p = ' ';
          }

          if (min <= x && x < max && min <= y+1 && y+1 < max && _this.isDark(r2, Math.floor((x - min) / cellSize))) {
            p += ' ';
          }
          else {
            p += '█';
          }

          // Output 2 characters per pixel, to create full square. 1 character per pixels gives only half width of square.
          ascii += (margin < 1 && y+1 >= max) ? blocksLastLineNoMargin[p] : blocks[p];
        }

        ascii += '\n';
      }

      if (size % 2 && margin > 0) {
        return ascii.substring(0, ascii.length - size - 1) + Array(size+1).join('▀');
      }

      return ascii.substring(0, ascii.length-1);
    };

    _this.createASCII = function(cellSize, margin) {
      cellSize = cellSize || 1;

      if (cellSize < 2) {
        return _createHalfASCII(margin);
      }

      cellSize -= 1;
      margin = (typeof margin == 'undefined')? cellSize * 2 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;

      var y, x, r, p;

      var white = Array(cellSize+1).join('██');
      var black = Array(cellSize+1).join('  ');

      var ascii = '';
      var line = '';
      for (y = 0; y < size; y += 1) {
        r = Math.floor( (y - min) / cellSize);
        line = '';
        for (x = 0; x < size; x += 1) {
          p = 1;

          if (min <= x && x < max && min <= y && y < max && _this.isDark(r, Math.floor((x - min) / cellSize))) {
            p = 0;
          }

          // Output 2 characters per pixel, to create full square. 1 character per pixels gives only half width of square.
          line += p ? white : black;
        }

        for (r = 0; r < cellSize; r += 1) {
          ascii += line + '\n';
        }
      }

      return ascii.substring(0, ascii.length-1);
    };

    _this.renderTo2dContext = function(context, cellSize) {
      cellSize = cellSize || 2;
      var length = _this.getModuleCount();
      for (var row = 0; row < length; row++) {
        for (var col = 0; col < length; col++) {
          context.fillStyle = _this.isDark(row, col) ? 'black' : 'white';
          context.fillRect(row * cellSize, col * cellSize, cellSize, cellSize);
        }
      }
    }

    return _this;
  };

  //---------------------------------------------------------------------
  // qrcode.stringToBytes
  //---------------------------------------------------------------------

  qrcode.stringToBytesFuncs = {
    'default' : function(s) {
      var bytes = [];
      for (var i = 0; i < s.length; i += 1) {
        var c = s.charCodeAt(i);
        bytes.push(c & 0xff);
      }
      return bytes;
    }
  };

  qrcode.stringToBytes = qrcode.stringToBytesFuncs['default'];

  //---------------------------------------------------------------------
  // qrcode.createStringToBytes
  //---------------------------------------------------------------------

  /**
   * @param unicodeData base64 string of byte array.
   * [16bit Unicode],[16bit Bytes], ...
   * @param numChars
   */
  qrcode.createStringToBytes = function(unicodeData, numChars) {

    // create conversion map.

    var unicodeMap = function() {

      var bin = base64DecodeInputStream(unicodeData);
      var read = function() {
        var b = bin.read();
        if (b == -1) throw 'eof';
        return b;
      };

      var count = 0;
      var unicodeMap = {};
      while (true) {
        var b0 = bin.read();
        if (b0 == -1) break;
        var b1 = read();
        var b2 = read();
        var b3 = read();
        var k = String.fromCharCode( (b0 << 8) | b1);
        var v = (b2 << 8) | b3;
        unicodeMap[k] = v;
        count += 1;
      }
      if (count != numChars) {
        throw count + ' != ' + numChars;
      }

      return unicodeMap;
    }();

    var unknownChar = '?'.charCodeAt(0);

    return function(s) {
      var bytes = [];
      for (var i = 0; i < s.length; i += 1) {
        var c = s.charCodeAt(i);
        if (c < 128) {
          bytes.push(c);
        } else {
          var b = unicodeMap[s.charAt(i)];
          if (typeof b == 'number') {
            if ( (b & 0xff) == b) {
              // 1byte
              bytes.push(b);
            } else {
              // 2bytes
              bytes.push(b >>> 8);
              bytes.push(b & 0xff);
            }
          } else {
            bytes.push(unknownChar);
          }
        }
      }
      return bytes;
    };
  };

  //---------------------------------------------------------------------
  // QRMode
  //---------------------------------------------------------------------

  var QRMode = {
    MODE_NUMBER :    1 << 0,
    MODE_ALPHA_NUM : 1 << 1,
    MODE_8BIT_BYTE : 1 << 2,
    MODE_KANJI :     1 << 3
  };

  //---------------------------------------------------------------------
  // QRErrorCorrectionLevel
  //---------------------------------------------------------------------

  var QRErrorCorrectionLevel = {
    L : 1,
    M : 0,
    Q : 3,
    H : 2
  };

  //---------------------------------------------------------------------
  // QRMaskPattern
  //---------------------------------------------------------------------

  var QRMaskPattern = {
    PATTERN000 : 0,
    PATTERN001 : 1,
    PATTERN010 : 2,
    PATTERN011 : 3,
    PATTERN100 : 4,
    PATTERN101 : 5,
    PATTERN110 : 6,
    PATTERN111 : 7
  };

  //---------------------------------------------------------------------
  // QRUtil
  //---------------------------------------------------------------------

  var QRUtil = function() {

    var PATTERN_POSITION_TABLE = [
      [],
      [6, 18],
      [6, 22],
      [6, 26],
      [6, 30],
      [6, 34],
      [6, 22, 38],
      [6, 24, 42],
      [6, 26, 46],
      [6, 28, 50],
      [6, 30, 54],
      [6, 32, 58],
      [6, 34, 62],
      [6, 26, 46, 66],
      [6, 26, 48, 70],
      [6, 26, 50, 74],
      [6, 30, 54, 78],
      [6, 30, 56, 82],
      [6, 30, 58, 86],
      [6, 34, 62, 90],
      [6, 28, 50, 72, 94],
      [6, 26, 50, 74, 98],
      [6, 30, 54, 78, 102],
      [6, 28, 54, 80, 106],
      [6, 32, 58, 84, 110],
      [6, 30, 58, 86, 114],
      [6, 34, 62, 90, 118],
      [6, 26, 50, 74, 98, 122],
      [6, 30, 54, 78, 102, 126],
      [6, 26, 52, 78, 104, 130],
      [6, 30, 56, 82, 108, 134],
      [6, 34, 60, 86, 112, 138],
      [6, 30, 58, 86, 114, 142],
      [6, 34, 62, 90, 118, 146],
      [6, 30, 54, 78, 102, 126, 150],
      [6, 24, 50, 76, 102, 128, 154],
      [6, 28, 54, 80, 106, 132, 158],
      [6, 32, 58, 84, 110, 136, 162],
      [6, 26, 54, 82, 110, 138, 166],
      [6, 30, 58, 86, 114, 142, 170]
    ];
    var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
    var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
    var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);

    var _this = {};

    var getBCHDigit = function(data) {
      var digit = 0;
      while (data != 0) {
        digit += 1;
        data >>>= 1;
      }
      return digit;
    };

    _this.getBCHTypeInfo = function(data) {
      var d = data << 10;
      while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
        d ^= (G15 << (getBCHDigit(d) - getBCHDigit(G15) ) );
      }
      return ( (data << 10) | d) ^ G15_MASK;
    };

    _this.getBCHTypeNumber = function(data) {
      var d = data << 12;
      while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
        d ^= (G18 << (getBCHDigit(d) - getBCHDigit(G18) ) );
      }
      return (data << 12) | d;
    };

    _this.getPatternPosition = function(typeNumber) {
      return PATTERN_POSITION_TABLE[typeNumber - 1];
    };

    _this.getMaskFunction = function(maskPattern) {

      switch (maskPattern) {

      case QRMaskPattern.PATTERN000 :
        return function(i, j) { return (i + j) % 2 == 0; };
      case QRMaskPattern.PATTERN001 :
        return function(i, j) { return i % 2 == 0; };
      case QRMaskPattern.PATTERN010 :
        return function(i, j) { return j % 3 == 0; };
      case QRMaskPattern.PATTERN011 :
        return function(i, j) { return (i + j) % 3 == 0; };
      case QRMaskPattern.PATTERN100 :
        return function(i, j) { return (Math.floor(i / 2) + Math.floor(j / 3) ) % 2 == 0; };
      case QRMaskPattern.PATTERN101 :
        return function(i, j) { return (i * j) % 2 + (i * j) % 3 == 0; };
      case QRMaskPattern.PATTERN110 :
        return function(i, j) { return ( (i * j) % 2 + (i * j) % 3) % 2 == 0; };
      case QRMaskPattern.PATTERN111 :
        return function(i, j) { return ( (i * j) % 3 + (i + j) % 2) % 2 == 0; };

      default :
        throw 'bad maskPattern:' + maskPattern;
      }
    };

    _this.getErrorCorrectPolynomial = function(errorCorrectLength) {
      var a = qrPolynomial([1], 0);
      for (var i = 0; i < errorCorrectLength; i += 1) {
        a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0) );
      }
      return a;
    };

    _this.getLengthInBits = function(mode, type) {

      if (1 <= type && type < 10) {

        // 1 - 9

        switch(mode) {
        case QRMode.MODE_NUMBER    : return 10;
        case QRMode.MODE_ALPHA_NUM : return 9;
        case QRMode.MODE_8BIT_BYTE : return 8;
        case QRMode.MODE_KANJI     : return 8;
        default :
          throw 'mode:' + mode;
        }

      } else if (type < 27) {

        // 10 - 26

        switch(mode) {
        case QRMode.MODE_NUMBER    : return 12;
        case QRMode.MODE_ALPHA_NUM : return 11;
        case QRMode.MODE_8BIT_BYTE : return 16;
        case QRMode.MODE_KANJI     : return 10;
        default :
          throw 'mode:' + mode;
        }

      } else if (type < 41) {

        // 27 - 40

        switch(mode) {
        case QRMode.MODE_NUMBER    : return 14;
        case QRMode.MODE_ALPHA_NUM : return 13;
        case QRMode.MODE_8BIT_BYTE : return 16;
        case QRMode.MODE_KANJI     : return 12;
        default :
          throw 'mode:' + mode;
        }

      } else {
        throw 'type:' + type;
      }
    };

    _this.getLostPoint = function(qrcode) {

      var moduleCount = qrcode.getModuleCount();

      var lostPoint = 0;

      // LEVEL1

      for (var row = 0; row < moduleCount; row += 1) {
        for (var col = 0; col < moduleCount; col += 1) {

          var sameCount = 0;
          var dark = qrcode.isDark(row, col);

          for (var r = -1; r <= 1; r += 1) {

            if (row + r < 0 || moduleCount <= row + r) {
              continue;
            }

            for (var c = -1; c <= 1; c += 1) {

              if (col + c < 0 || moduleCount <= col + c) {
                continue;
              }

              if (r == 0 && c == 0) {
                continue;
              }

              if (dark == qrcode.isDark(row + r, col + c) ) {
                sameCount += 1;
              }
            }
          }

          if (sameCount > 5) {
            lostPoint += (3 + sameCount - 5);
          }
        }
      };

      // LEVEL2

      for (var row = 0; row < moduleCount - 1; row += 1) {
        for (var col = 0; col < moduleCount - 1; col += 1) {
          var count = 0;
          if (qrcode.isDark(row, col) ) count += 1;
          if (qrcode.isDark(row + 1, col) ) count += 1;
          if (qrcode.isDark(row, col + 1) ) count += 1;
          if (qrcode.isDark(row + 1, col + 1) ) count += 1;
          if (count == 0 || count == 4) {
            lostPoint += 3;
          }
        }
      }

      // LEVEL3

      for (var row = 0; row < moduleCount; row += 1) {
        for (var col = 0; col < moduleCount - 6; col += 1) {
          if (qrcode.isDark(row, col)
              && !qrcode.isDark(row, col + 1)
              &&  qrcode.isDark(row, col + 2)
              &&  qrcode.isDark(row, col + 3)
              &&  qrcode.isDark(row, col + 4)
              && !qrcode.isDark(row, col + 5)
              &&  qrcode.isDark(row, col + 6) ) {
            lostPoint += 40;
          }
        }
      }

      for (var col = 0; col < moduleCount; col += 1) {
        for (var row = 0; row < moduleCount - 6; row += 1) {
          if (qrcode.isDark(row, col)
              && !qrcode.isDark(row + 1, col)
              &&  qrcode.isDark(row + 2, col)
              &&  qrcode.isDark(row + 3, col)
              &&  qrcode.isDark(row + 4, col)
              && !qrcode.isDark(row + 5, col)
              &&  qrcode.isDark(row + 6, col) ) {
            lostPoint += 40;
          }
        }
      }

      // LEVEL4

      var darkCount = 0;

      for (var col = 0; col < moduleCount; col += 1) {
        for (var row = 0; row < moduleCount; row += 1) {
          if (qrcode.isDark(row, col) ) {
            darkCount += 1;
          }
        }
      }

      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
      lostPoint += ratio * 10;

      return lostPoint;
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // QRMath
  //---------------------------------------------------------------------

  var QRMath = function() {

    var EXP_TABLE = new Array(256);
    var LOG_TABLE = new Array(256);

    // initialize tables
    for (var i = 0; i < 8; i += 1) {
      EXP_TABLE[i] = 1 << i;
    }
    for (var i = 8; i < 256; i += 1) {
      EXP_TABLE[i] = EXP_TABLE[i - 4]
        ^ EXP_TABLE[i - 5]
        ^ EXP_TABLE[i - 6]
        ^ EXP_TABLE[i - 8];
    }
    for (var i = 0; i < 255; i += 1) {
      LOG_TABLE[EXP_TABLE[i] ] = i;
    }

    var _this = {};

    _this.glog = function(n) {

      if (n < 1) {
        throw 'glog(' + n + ')';
      }

      return LOG_TABLE[n];
    };

    _this.gexp = function(n) {

      while (n < 0) {
        n += 255;
      }

      while (n >= 256) {
        n -= 255;
      }

      return EXP_TABLE[n];
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // qrPolynomial
  //---------------------------------------------------------------------

  function qrPolynomial(num, shift) {

    if (typeof num.length == 'undefined') {
      throw num.length + '/' + shift;
    }

    var _num = function() {
      var offset = 0;
      while (offset < num.length && num[offset] == 0) {
        offset += 1;
      }
      var _num = new Array(num.length - offset + shift);
      for (var i = 0; i < num.length - offset; i += 1) {
        _num[i] = num[i + offset];
      }
      return _num;
    }();

    var _this = {};

    _this.getAt = function(index) {
      return _num[index];
    };

    _this.getLength = function() {
      return _num.length;
    };

    _this.multiply = function(e) {

      var num = new Array(_this.getLength() + e.getLength() - 1);

      for (var i = 0; i < _this.getLength(); i += 1) {
        for (var j = 0; j < e.getLength(); j += 1) {
          num[i + j] ^= QRMath.gexp(QRMath.glog(_this.getAt(i) ) + QRMath.glog(e.getAt(j) ) );
        }
      }

      return qrPolynomial(num, 0);
    };

    _this.mod = function(e) {

      if (_this.getLength() - e.getLength() < 0) {
        return _this;
      }

      var ratio = QRMath.glog(_this.getAt(0) ) - QRMath.glog(e.getAt(0) );

      var num = new Array(_this.getLength() );
      for (var i = 0; i < _this.getLength(); i += 1) {
        num[i] = _this.getAt(i);
      }

      for (var i = 0; i < e.getLength(); i += 1) {
        num[i] ^= QRMath.gexp(QRMath.glog(e.getAt(i) ) + ratio);
      }

      // recursive call
      return qrPolynomial(num, 0).mod(e);
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // QRRSBlock
  //---------------------------------------------------------------------

  var QRRSBlock = function() {

    var RS_BLOCK_TABLE = [

      // L
      // M
      // Q
      // H

      // 1
      [1, 26, 19],
      [1, 26, 16],
      [1, 26, 13],
      [1, 26, 9],

      // 2
      [1, 44, 34],
      [1, 44, 28],
      [1, 44, 22],
      [1, 44, 16],

      // 3
      [1, 70, 55],
      [1, 70, 44],
      [2, 35, 17],
      [2, 35, 13],

      // 4
      [1, 100, 80],
      [2, 50, 32],
      [2, 50, 24],
      [4, 25, 9],

      // 5
      [1, 134, 108],
      [2, 67, 43],
      [2, 33, 15, 2, 34, 16],
      [2, 33, 11, 2, 34, 12],

      // 6
      [2, 86, 68],
      [4, 43, 27],
      [4, 43, 19],
      [4, 43, 15],

      // 7
      [2, 98, 78],
      [4, 49, 31],
      [2, 32, 14, 4, 33, 15],
      [4, 39, 13, 1, 40, 14],

      // 8
      [2, 121, 97],
      [2, 60, 38, 2, 61, 39],
      [4, 40, 18, 2, 41, 19],
      [4, 40, 14, 2, 41, 15],

      // 9
      [2, 146, 116],
      [3, 58, 36, 2, 59, 37],
      [4, 36, 16, 4, 37, 17],
      [4, 36, 12, 4, 37, 13],

      // 10
      [2, 86, 68, 2, 87, 69],
      [4, 69, 43, 1, 70, 44],
      [6, 43, 19, 2, 44, 20],
      [6, 43, 15, 2, 44, 16],

      // 11
      [4, 101, 81],
      [1, 80, 50, 4, 81, 51],
      [4, 50, 22, 4, 51, 23],
      [3, 36, 12, 8, 37, 13],

      // 12
      [2, 116, 92, 2, 117, 93],
      [6, 58, 36, 2, 59, 37],
      [4, 46, 20, 6, 47, 21],
      [7, 42, 14, 4, 43, 15],

      // 13
      [4, 133, 107],
      [8, 59, 37, 1, 60, 38],
      [8, 44, 20, 4, 45, 21],
      [12, 33, 11, 4, 34, 12],

      // 14
      [3, 145, 115, 1, 146, 116],
      [4, 64, 40, 5, 65, 41],
      [11, 36, 16, 5, 37, 17],
      [11, 36, 12, 5, 37, 13],

      // 15
      [5, 109, 87, 1, 110, 88],
      [5, 65, 41, 5, 66, 42],
      [5, 54, 24, 7, 55, 25],
      [11, 36, 12, 7, 37, 13],

      // 16
      [5, 122, 98, 1, 123, 99],
      [7, 73, 45, 3, 74, 46],
      [15, 43, 19, 2, 44, 20],
      [3, 45, 15, 13, 46, 16],

      // 17
      [1, 135, 107, 5, 136, 108],
      [10, 74, 46, 1, 75, 47],
      [1, 50, 22, 15, 51, 23],
      [2, 42, 14, 17, 43, 15],

      // 18
      [5, 150, 120, 1, 151, 121],
      [9, 69, 43, 4, 70, 44],
      [17, 50, 22, 1, 51, 23],
      [2, 42, 14, 19, 43, 15],

      // 19
      [3, 141, 113, 4, 142, 114],
      [3, 70, 44, 11, 71, 45],
      [17, 47, 21, 4, 48, 22],
      [9, 39, 13, 16, 40, 14],

      // 20
      [3, 135, 107, 5, 136, 108],
      [3, 67, 41, 13, 68, 42],
      [15, 54, 24, 5, 55, 25],
      [15, 43, 15, 10, 44, 16],

      // 21
      [4, 144, 116, 4, 145, 117],
      [17, 68, 42],
      [17, 50, 22, 6, 51, 23],
      [19, 46, 16, 6, 47, 17],

      // 22
      [2, 139, 111, 7, 140, 112],
      [17, 74, 46],
      [7, 54, 24, 16, 55, 25],
      [34, 37, 13],

      // 23
      [4, 151, 121, 5, 152, 122],
      [4, 75, 47, 14, 76, 48],
      [11, 54, 24, 14, 55, 25],
      [16, 45, 15, 14, 46, 16],

      // 24
      [6, 147, 117, 4, 148, 118],
      [6, 73, 45, 14, 74, 46],
      [11, 54, 24, 16, 55, 25],
      [30, 46, 16, 2, 47, 17],

      // 25
      [8, 132, 106, 4, 133, 107],
      [8, 75, 47, 13, 76, 48],
      [7, 54, 24, 22, 55, 25],
      [22, 45, 15, 13, 46, 16],

      // 26
      [10, 142, 114, 2, 143, 115],
      [19, 74, 46, 4, 75, 47],
      [28, 50, 22, 6, 51, 23],
      [33, 46, 16, 4, 47, 17],

      // 27
      [8, 152, 122, 4, 153, 123],
      [22, 73, 45, 3, 74, 46],
      [8, 53, 23, 26, 54, 24],
      [12, 45, 15, 28, 46, 16],

      // 28
      [3, 147, 117, 10, 148, 118],
      [3, 73, 45, 23, 74, 46],
      [4, 54, 24, 31, 55, 25],
      [11, 45, 15, 31, 46, 16],

      // 29
      [7, 146, 116, 7, 147, 117],
      [21, 73, 45, 7, 74, 46],
      [1, 53, 23, 37, 54, 24],
      [19, 45, 15, 26, 46, 16],

      // 30
      [5, 145, 115, 10, 146, 116],
      [19, 75, 47, 10, 76, 48],
      [15, 54, 24, 25, 55, 25],
      [23, 45, 15, 25, 46, 16],

      // 31
      [13, 145, 115, 3, 146, 116],
      [2, 74, 46, 29, 75, 47],
      [42, 54, 24, 1, 55, 25],
      [23, 45, 15, 28, 46, 16],

      // 32
      [17, 145, 115],
      [10, 74, 46, 23, 75, 47],
      [10, 54, 24, 35, 55, 25],
      [19, 45, 15, 35, 46, 16],

      // 33
      [17, 145, 115, 1, 146, 116],
      [14, 74, 46, 21, 75, 47],
      [29, 54, 24, 19, 55, 25],
      [11, 45, 15, 46, 46, 16],

      // 34
      [13, 145, 115, 6, 146, 116],
      [14, 74, 46, 23, 75, 47],
      [44, 54, 24, 7, 55, 25],
      [59, 46, 16, 1, 47, 17],

      // 35
      [12, 151, 121, 7, 152, 122],
      [12, 75, 47, 26, 76, 48],
      [39, 54, 24, 14, 55, 25],
      [22, 45, 15, 41, 46, 16],

      // 36
      [6, 151, 121, 14, 152, 122],
      [6, 75, 47, 34, 76, 48],
      [46, 54, 24, 10, 55, 25],
      [2, 45, 15, 64, 46, 16],

      // 37
      [17, 152, 122, 4, 153, 123],
      [29, 74, 46, 14, 75, 47],
      [49, 54, 24, 10, 55, 25],
      [24, 45, 15, 46, 46, 16],

      // 38
      [4, 152, 122, 18, 153, 123],
      [13, 74, 46, 32, 75, 47],
      [48, 54, 24, 14, 55, 25],
      [42, 45, 15, 32, 46, 16],

      // 39
      [20, 147, 117, 4, 148, 118],
      [40, 75, 47, 7, 76, 48],
      [43, 54, 24, 22, 55, 25],
      [10, 45, 15, 67, 46, 16],

      // 40
      [19, 148, 118, 6, 149, 119],
      [18, 75, 47, 31, 76, 48],
      [34, 54, 24, 34, 55, 25],
      [20, 45, 15, 61, 46, 16]
    ];

    var qrRSBlock = function(totalCount, dataCount) {
      var _this = {};
      _this.totalCount = totalCount;
      _this.dataCount = dataCount;
      return _this;
    };

    var _this = {};

    var getRsBlockTable = function(typeNumber, errorCorrectionLevel) {

      switch(errorCorrectionLevel) {
      case QRErrorCorrectionLevel.L :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
      case QRErrorCorrectionLevel.M :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
      case QRErrorCorrectionLevel.Q :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
      case QRErrorCorrectionLevel.H :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
      default :
        return undefined;
      }
    };

    _this.getRSBlocks = function(typeNumber, errorCorrectionLevel) {

      var rsBlock = getRsBlockTable(typeNumber, errorCorrectionLevel);

      if (typeof rsBlock == 'undefined') {
        throw 'bad rs block @ typeNumber:' + typeNumber +
            '/errorCorrectionLevel:' + errorCorrectionLevel;
      }

      var length = rsBlock.length / 3;

      var list = [];

      for (var i = 0; i < length; i += 1) {

        var count = rsBlock[i * 3 + 0];
        var totalCount = rsBlock[i * 3 + 1];
        var dataCount = rsBlock[i * 3 + 2];

        for (var j = 0; j < count; j += 1) {
          list.push(qrRSBlock(totalCount, dataCount) );
        }
      }

      return list;
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // qrBitBuffer
  //---------------------------------------------------------------------

  var qrBitBuffer = function() {

    var _buffer = [];
    var _length = 0;

    var _this = {};

    _this.getBuffer = function() {
      return _buffer;
    };

    _this.getAt = function(index) {
      var bufIndex = Math.floor(index / 8);
      return ( (_buffer[bufIndex] >>> (7 - index % 8) ) & 1) == 1;
    };

    _this.put = function(num, length) {
      for (var i = 0; i < length; i += 1) {
        _this.putBit( ( (num >>> (length - i - 1) ) & 1) == 1);
      }
    };

    _this.getLengthInBits = function() {
      return _length;
    };

    _this.putBit = function(bit) {

      var bufIndex = Math.floor(_length / 8);
      if (_buffer.length <= bufIndex) {
        _buffer.push(0);
      }

      if (bit) {
        _buffer[bufIndex] |= (0x80 >>> (_length % 8) );
      }

      _length += 1;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qrNumber
  //---------------------------------------------------------------------

  var qrNumber = function(data) {

    var _mode = QRMode.MODE_NUMBER;
    var _data = data;

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return _data.length;
    };

    _this.write = function(buffer) {

      var data = _data;

      var i = 0;

      while (i + 2 < data.length) {
        buffer.put(strToNum(data.substring(i, i + 3) ), 10);
        i += 3;
      }

      if (i < data.length) {
        if (data.length - i == 1) {
          buffer.put(strToNum(data.substring(i, i + 1) ), 4);
        } else if (data.length - i == 2) {
          buffer.put(strToNum(data.substring(i, i + 2) ), 7);
        }
      }
    };

    var strToNum = function(s) {
      var num = 0;
      for (var i = 0; i < s.length; i += 1) {
        num = num * 10 + chatToNum(s.charAt(i) );
      }
      return num;
    };

    var chatToNum = function(c) {
      if ('0' <= c && c <= '9') {
        return c.charCodeAt(0) - '0'.charCodeAt(0);
      }
      throw 'illegal char :' + c;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qrAlphaNum
  //---------------------------------------------------------------------

  var qrAlphaNum = function(data) {

    var _mode = QRMode.MODE_ALPHA_NUM;
    var _data = data;

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return _data.length;
    };

    _this.write = function(buffer) {

      var s = _data;

      var i = 0;

      while (i + 1 < s.length) {
        buffer.put(
          getCode(s.charAt(i) ) * 45 +
          getCode(s.charAt(i + 1) ), 11);
        i += 2;
      }

      if (i < s.length) {
        buffer.put(getCode(s.charAt(i) ), 6);
      }
    };

    var getCode = function(c) {

      if ('0' <= c && c <= '9') {
        return c.charCodeAt(0) - '0'.charCodeAt(0);
      } else if ('A' <= c && c <= 'Z') {
        return c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
      } else {
        switch (c) {
        case ' ' : return 36;
        case '$' : return 37;
        case '%' : return 38;
        case '*' : return 39;
        case '+' : return 40;
        case '-' : return 41;
        case '.' : return 42;
        case '/' : return 43;
        case ':' : return 44;
        default :
          throw 'illegal char :' + c;
        }
      }
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qr8BitByte
  //---------------------------------------------------------------------

  var qr8BitByte = function(data) {

    var _mode = QRMode.MODE_8BIT_BYTE;
    var _data = data;
    var _bytes = qrcode.stringToBytes(data);

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return _bytes.length;
    };

    _this.write = function(buffer) {
      for (var i = 0; i < _bytes.length; i += 1) {
        buffer.put(_bytes[i], 8);
      }
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qrKanji
  //---------------------------------------------------------------------

  var qrKanji = function(data) {

    var _mode = QRMode.MODE_KANJI;
    var _data = data;

    var stringToBytes = qrcode.stringToBytesFuncs['SJIS'];
    if (!stringToBytes) {
      throw 'sjis not supported.';
    }
    !function(c, code) {
      // self test for sjis support.
      var test = stringToBytes(c);
      if (test.length != 2 || ( (test[0] << 8) | test[1]) != code) {
        throw 'sjis not supported.';
      }
    }('\u53cb', 0x9746);

    var _bytes = stringToBytes(data);

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return ~~(_bytes.length / 2);
    };

    _this.write = function(buffer) {

      var data = _bytes;

      var i = 0;

      while (i + 1 < data.length) {

        var c = ( (0xff & data[i]) << 8) | (0xff & data[i + 1]);

        if (0x8140 <= c && c <= 0x9FFC) {
          c -= 0x8140;
        } else if (0xE040 <= c && c <= 0xEBBF) {
          c -= 0xC140;
        } else {
          throw 'illegal char at ' + (i + 1) + '/' + c;
        }

        c = ( (c >>> 8) & 0xff) * 0xC0 + (c & 0xff);

        buffer.put(c, 13);

        i += 2;
      }

      if (i < data.length) {
        throw 'illegal char at ' + (i + 1);
      }
    };

    return _this;
  };

  //=====================================================================
  // GIF Support etc.
  //

  //---------------------------------------------------------------------
  // byteArrayOutputStream
  //---------------------------------------------------------------------

  var byteArrayOutputStream = function() {

    var _bytes = [];

    var _this = {};

    _this.writeByte = function(b) {
      _bytes.push(b & 0xff);
    };

    _this.writeShort = function(i) {
      _this.writeByte(i);
      _this.writeByte(i >>> 8);
    };

    _this.writeBytes = function(b, off, len) {
      off = off || 0;
      len = len || b.length;
      for (var i = 0; i < len; i += 1) {
        _this.writeByte(b[i + off]);
      }
    };

    _this.writeString = function(s) {
      for (var i = 0; i < s.length; i += 1) {
        _this.writeByte(s.charCodeAt(i) );
      }
    };

    _this.toByteArray = function() {
      return _bytes;
    };

    _this.toString = function() {
      var s = '';
      s += '[';
      for (var i = 0; i < _bytes.length; i += 1) {
        if (i > 0) {
          s += ',';
        }
        s += _bytes[i];
      }
      s += ']';
      return s;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // base64EncodeOutputStream
  //---------------------------------------------------------------------

  var base64EncodeOutputStream = function() {

    var _buffer = 0;
    var _buflen = 0;
    var _length = 0;
    var _base64 = '';

    var _this = {};

    var writeEncoded = function(b) {
      _base64 += String.fromCharCode(encode(b & 0x3f) );
    };

    var encode = function(n) {
      if (n < 0) {
        // error.
      } else if (n < 26) {
        return 0x41 + n;
      } else if (n < 52) {
        return 0x61 + (n - 26);
      } else if (n < 62) {
        return 0x30 + (n - 52);
      } else if (n == 62) {
        return 0x2b;
      } else if (n == 63) {
        return 0x2f;
      }
      throw 'n:' + n;
    };

    _this.writeByte = function(n) {

      _buffer = (_buffer << 8) | (n & 0xff);
      _buflen += 8;
      _length += 1;

      while (_buflen >= 6) {
        writeEncoded(_buffer >>> (_buflen - 6) );
        _buflen -= 6;
      }
    };

    _this.flush = function() {

      if (_buflen > 0) {
        writeEncoded(_buffer << (6 - _buflen) );
        _buffer = 0;
        _buflen = 0;
      }

      if (_length % 3 != 0) {
        // padding
        var padlen = 3 - _length % 3;
        for (var i = 0; i < padlen; i += 1) {
          _base64 += '=';
        }
      }
    };

    _this.toString = function() {
      return _base64;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // base64DecodeInputStream
  //---------------------------------------------------------------------

  var base64DecodeInputStream = function(str) {

    var _str = str;
    var _pos = 0;
    var _buffer = 0;
    var _buflen = 0;

    var _this = {};

    _this.read = function() {

      while (_buflen < 8) {

        if (_pos >= _str.length) {
          if (_buflen == 0) {
            return -1;
          }
          throw 'unexpected end of file./' + _buflen;
        }

        var c = _str.charAt(_pos);
        _pos += 1;

        if (c == '=') {
          _buflen = 0;
          return -1;
        } else if (c.match(/^\s$/) ) {
          // ignore if whitespace.
          continue;
        }

        _buffer = (_buffer << 6) | decode(c.charCodeAt(0) );
        _buflen += 6;
      }

      var n = (_buffer >>> (_buflen - 8) ) & 0xff;
      _buflen -= 8;
      return n;
    };

    var decode = function(c) {
      if (0x41 <= c && c <= 0x5a) {
        return c - 0x41;
      } else if (0x61 <= c && c <= 0x7a) {
        return c - 0x61 + 26;
      } else if (0x30 <= c && c <= 0x39) {
        return c - 0x30 + 52;
      } else if (c == 0x2b) {
        return 62;
      } else if (c == 0x2f) {
        return 63;
      } else {
        throw 'c:' + c;
      }
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // gifImage (B/W)
  //---------------------------------------------------------------------

  var gifImage = function(width, height) {

    var _width = width;
    var _height = height;
    var _data = new Array(width * height);

    var _this = {};

    _this.setPixel = function(x, y, pixel) {
      _data[y * _width + x] = pixel;
    };

    _this.write = function(out) {

      //---------------------------------
      // GIF Signature

      out.writeString('GIF87a');

      //---------------------------------
      // Screen Descriptor

      out.writeShort(_width);
      out.writeShort(_height);

      out.writeByte(0x80); // 2bit
      out.writeByte(0);
      out.writeByte(0);

      //---------------------------------
      // Global Color Map

      // black
      out.writeByte(0x00);
      out.writeByte(0x00);
      out.writeByte(0x00);

      // white
      out.writeByte(0xff);
      out.writeByte(0xff);
      out.writeByte(0xff);

      //---------------------------------
      // Image Descriptor

      out.writeString(',');
      out.writeShort(0);
      out.writeShort(0);
      out.writeShort(_width);
      out.writeShort(_height);
      out.writeByte(0);

      //---------------------------------
      // Local Color Map

      //---------------------------------
      // Raster Data

      var lzwMinCodeSize = 2;
      var raster = getLZWRaster(lzwMinCodeSize);

      out.writeByte(lzwMinCodeSize);

      var offset = 0;

      while (raster.length - offset > 255) {
        out.writeByte(255);
        out.writeBytes(raster, offset, 255);
        offset += 255;
      }

      out.writeByte(raster.length - offset);
      out.writeBytes(raster, offset, raster.length - offset);
      out.writeByte(0x00);

      //---------------------------------
      // GIF Terminator
      out.writeString(';');
    };

    var bitOutputStream = function(out) {

      var _out = out;
      var _bitLength = 0;
      var _bitBuffer = 0;

      var _this = {};

      _this.write = function(data, length) {

        if ( (data >>> length) != 0) {
          throw 'length over';
        }

        while (_bitLength + length >= 8) {
          _out.writeByte(0xff & ( (data << _bitLength) | _bitBuffer) );
          length -= (8 - _bitLength);
          data >>>= (8 - _bitLength);
          _bitBuffer = 0;
          _bitLength = 0;
        }

        _bitBuffer = (data << _bitLength) | _bitBuffer;
        _bitLength = _bitLength + length;
      };

      _this.flush = function() {
        if (_bitLength > 0) {
          _out.writeByte(_bitBuffer);
        }
      };

      return _this;
    };

    var getLZWRaster = function(lzwMinCodeSize) {

      var clearCode = 1 << lzwMinCodeSize;
      var endCode = (1 << lzwMinCodeSize) + 1;
      var bitLength = lzwMinCodeSize + 1;

      // Setup LZWTable
      var table = lzwTable();

      for (var i = 0; i < clearCode; i += 1) {
        table.add(String.fromCharCode(i) );
      }
      table.add(String.fromCharCode(clearCode) );
      table.add(String.fromCharCode(endCode) );

      var byteOut = byteArrayOutputStream();
      var bitOut = bitOutputStream(byteOut);

      // clear code
      bitOut.write(clearCode, bitLength);

      var dataIndex = 0;

      var s = String.fromCharCode(_data[dataIndex]);
      dataIndex += 1;

      while (dataIndex < _data.length) {

        var c = String.fromCharCode(_data[dataIndex]);
        dataIndex += 1;

        if (table.contains(s + c) ) {

          s = s + c;

        } else {

          bitOut.write(table.indexOf(s), bitLength);

          if (table.size() < 0xfff) {

            if (table.size() == (1 << bitLength) ) {
              bitLength += 1;
            }

            table.add(s + c);
          }

          s = c;
        }
      }

      bitOut.write(table.indexOf(s), bitLength);

      // end code
      bitOut.write(endCode, bitLength);

      bitOut.flush();

      return byteOut.toByteArray();
    };

    var lzwTable = function() {

      var _map = {};
      var _size = 0;

      var _this = {};

      _this.add = function(key) {
        if (_this.contains(key) ) {
          throw 'dup key:' + key;
        }
        _map[key] = _size;
        _size += 1;
      };

      _this.size = function() {
        return _size;
      };

      _this.indexOf = function(key) {
        return _map[key];
      };

      _this.contains = function(key) {
        return typeof _map[key] != 'undefined';
      };

      return _this;
    };

    return _this;
  };

  var createDataURL = function(width, height, getPixel) {
    var gif = gifImage(width, height);
    for (var y = 0; y < height; y += 1) {
      for (var x = 0; x < width; x += 1) {
        gif.setPixel(x, y, getPixel(x, y) );
      }
    }

    var b = byteArrayOutputStream();
    gif.write(b);

    var base64 = base64EncodeOutputStream();
    var bytes = b.toByteArray();
    for (var i = 0; i < bytes.length; i += 1) {
      base64.writeByte(bytes[i]);
    }
    base64.flush();

    return 'data:image/gif;base64,' + base64;
  };

  //---------------------------------------------------------------------
  // returns qrcode function.

  return qrcode;
}();

// multibyte support
!function() {

  qrcode.stringToBytesFuncs['UTF-8'] = function(s) {
    // http://stackoverflow.com/questions/18729405/how-to-convert-utf8-string-to-byte-array
    function toUTF8Array(str) {
      var utf8 = [];
      for (var i=0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
          utf8.push(0xc0 | (charcode >> 6),
              0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
          utf8.push(0xe0 | (charcode >> 12),
              0x80 | ((charcode>>6) & 0x3f),
              0x80 | (charcode & 0x3f));
        }
        // surrogate pair
        else {
          i++;
          // UTF-16 encodes 0x10000-0x10FFFF by
          // subtracting 0x10000 and splitting the
          // 20 bits of 0x0-0xFFFFF into two halves
          charcode = 0x10000 + (((charcode & 0x3ff)<<10)
            | (str.charCodeAt(i) & 0x3ff));
          utf8.push(0xf0 | (charcode >>18),
              0x80 | ((charcode>>12) & 0x3f),
              0x80 | ((charcode>>6) & 0x3f),
              0x80 | (charcode & 0x3f));
        }
      }
      return utf8;
    }
    return toUTF8Array(s);
  };

}();

(function (factory) {
  if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(function () {
    return qrcode;
}));


/***/ }),

/***/ "./src/offer/index.css":
/*!*****************************!*\
  !*** ./src/offer/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/offer/index.css");

      
      
      
      
      
      
      
      
      

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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/lib/qrcode.ts":
/*!***************************!*\
  !*** ./src/lib/qrcode.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createQrCode = exports.readQrCode = void 0;
const qr_scanner_1 = __importDefault(__webpack_require__(/*! qr-scanner */ "./node_modules/qr-scanner/qr-scanner.min.js"));
const qrcode_generator_1 = __importDefault(__webpack_require__(/*! qrcode-generator */ "./node_modules/qrcode-generator/qrcode.js"));
let scanner;
function readQrCode(callback, videoElement) {
    if (!scanner) {
        scanner = new qr_scanner_1.default(videoElement, ({ data }) => {
            scanner.stop();
            callback(JSON.parse(data));
        }, {
            highlightScanRegion: true,
            onDecodeError: () => { }
        });
    }
    scanner.start();
}
exports.readQrCode = readQrCode;
function createQrCode(data) {
    const qr = (0, qrcode_generator_1.default)(0, 'L');
    qr.addData(JSON.stringify(data));
    qr.make();
    const el = document.getElementById('qr');
    if (el) {
        el.innerHTML = qr.createSvgTag();
    }
    else {
        throw new Error("SVG container not found");
    }
}
exports.createQrCode = createQrCode;


/***/ }),

/***/ "./src/lib/webrtc.ts":
/*!***************************!*\
  !*** ./src/lib/webrtc.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.sendIframeMessage = exports.sendMessage = exports.addAnswer = exports.createAnswer = exports.createOffer = void 0;
const qrcode_1 = __webpack_require__(/*! ./qrcode */ "./src/lib/qrcode.ts");
const servers = {
    iceServers: [
        {
            urls: [
                'stun:stun1.1.google.com:19302',
                'stun:stun2.1.google.com:19302',
            ]
        }
    ]
};
// const servers = {"iceServers":[]};
function createPeerConnection(handleOpen) {
    return __awaiter(this, void 0, void 0, function* () {
        const pc = new RTCPeerConnection(servers);
        const dc = pc.createDataChannel("datachannel");
        const handleClose = function () { console.log("------- DC closed! -------"); };
        const handleError = function () { console.log("DC ERROR!!!"); };
        // dataChannel.onmessage = handleMessage;
        // dataChannel.onopen = handleOpen;
        // dataChannel.onclose = handleClose;
        dc.onerror = handleError;
        pc.ondatachannel = function (event) {
            const receive = event.channel;
            receive.onmessage = handleMessage;
            receive.onopen = handleOpen;
            receive.onclose = handleClose;
            receive.onerror = handleError;
        };
        pc.onicecandidate = (event) => __awaiter(this, void 0, void 0, function* () {
            if (event.candidate) {
                if (pc.localDescription != null) {
                    // const box = document.getElementById(type + "-box") as HTMLTextAreaElement;
                    // box.value = JSON.stringify(pc.localDescription)
                    (0, qrcode_1.createQrCode)(pc.localDescription);
                }
                else {
                    throw new Error("Peer connection local description is null");
                }
            }
        });
        return { pc, dc };
    });
}
function createOffer(handleOpen) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield createPeerConnection(handleOpen);
        const offer = yield connection.pc.createOffer();
        yield connection.pc.setLocalDescription(offer);
        return connection;
    });
}
exports.createOffer = createOffer;
function createAnswer(offer, handleOpen) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield createPeerConnection(handleOpen);
        yield connection.pc.setRemoteDescription(offer);
        const answer = yield connection.pc.createAnswer();
        yield connection.pc.setLocalDescription(answer);
        return connection;
    });
}
exports.createAnswer = createAnswer;
function addAnswer(answer, pc) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!pc.currentRemoteDescription) {
            pc.setRemoteDescription(answer);
        }
        else {
            throw new Error("Connection already made");
        }
    });
}
exports.addAnswer = addAnswer;
function sendMessage(msg, dc) {
    dc.send(msg);
    console.log("Sent to DC " + msg);
}
exports.sendMessage = sendMessage;
function sendIframeMessage(msg) {
    const game = document.getElementById("game");
    if (game) {
        if (game.contentWindow) {
            console.log(`Sent ${msg} to iframe ${window.location.pathname}`);
            game.contentWindow.postMessage(msg);
        }
    }
}
exports.sendIframeMessage = sendIframeMessage;
function handleMessage(e) {
    console.log("Received DC message:" + e.data);
    sendIframeMessage(e.data);
}
;


/***/ }),

/***/ "./src/offer/offer.ts":
/*!****************************!*\
  !*** ./src/offer/offer.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
__webpack_require__(/*! ./index.css */ "./src/offer/index.css");
const qrcode_1 = __webpack_require__(/*! ../lib/qrcode */ "./src/lib/qrcode.ts");
const webrtc_1 = __webpack_require__(/*! ../lib/webrtc */ "./src/lib/webrtc.ts");
const videoEl = document.getElementById("scan");
if (!videoEl) {
    throw new Error("Video Element not found");
}
const numberButton = document.getElementById("number-button");
if (numberButton) {
    numberButton.onclick = start;
}
const connections = [];
function createConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        function handleOpen() {
            console.log("------ DATACHANNEL OPENED ------");
            connectionResolve();
        }
        ;
        const connection = yield (0, webrtc_1.createOffer)(handleOpen);
        connections.push(connection);
        let connectionResolve;
        (0, qrcode_1.readQrCode)((data) => {
            (0, webrtc_1.addAnswer)(data, connections[connections.length - 1].pc);
        }, videoEl);
        return new Promise((resolve, _) => {
            connectionResolve = resolve;
        });
    });
}
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        const numberContainer = document.getElementById("number-container");
        const webrtcContainer = document.getElementById("webrtc");
        if (numberContainer && webrtcContainer) {
            numberContainer.style.display = "none";
            webrtcContainer.style.display = "";
        }
        const numberElement = document.getElementById("number");
        const number = parseInt(numberElement === null || numberElement === void 0 ? void 0 : numberElement.innerText);
        for (let p = 0; p < number - 1; p++) {
            yield createConnection();
        }
        window.addEventListener("message", ({ data }) => {
            console.log("Received From iframe", data);
            const [connection, msg] = data.split(/ (.*)/s);
            (0, webrtc_1.sendMessage)(msg, connections[parseInt(connection) - 1].dc);
        });
        const rtcElement = document.getElementById("webrtc");
        if (rtcElement) {
            rtcElement.style.display = "none";
        }
        const gameElement = document.getElementById("game");
        if (gameElement) {
            gameElement.hidden = false;
        }
        (0, webrtc_1.sendIframeMessage)("start " + number);
    });
}


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "-bundle.js";
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
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"offer/index": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/offer/offer.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsY0FBYztBQUN0QywwQkFBMEIsY0FBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixjQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixjQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxzQkFBc0IsWUFBWTs7QUFFbEM7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixjQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLG1CQUFtQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixjQUFjO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1CQUFtQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FB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Ozs7Ozs7O1VDckVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjs7Ozs7V0NSQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQkFBZ0IscUJBQXFCO1dBQ3JDOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsYUFBYTtXQUNiO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1VFckNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FyZF9nYW1lLy4vc3JjL29mZmVyL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NhcmRfZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NhcmRfZ2FtZS8uL25vZGVfbW9kdWxlcy9xci1zY2FubmVyL3FyLXNjYW5uZXIubWluLmpzIiwid2VicGFjazovL2NhcmRfZ2FtZS8uL25vZGVfbW9kdWxlcy9xcmNvZGUtZ2VuZXJhdG9yL3FyY29kZS5qcyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9zcmMvb2ZmZXIvaW5kZXguY3NzP2NlOWQiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NhcmRfZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NhcmRfZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9zcmMvbGliL3FyY29kZS50cyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9zcmMvbGliL3dlYnJ0Yy50cyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9zcmMvb2ZmZXIvb2ZmZXIudHMiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhcmRfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NhcmRfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL2NhcmRfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvd2VicGFjay9ydW50aW1lL3JlcXVpcmUgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NhcmRfZ2FtZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRTBGMEUwO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDEwMCU7XG59XG5cbmgxIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuI251bWJlci1jb250YWluZXIge1xuXG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcblx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogXG5cdFx0XCJsZWZ0IG51bWJlciByaWdodFwiXG5cdFx0XCJidG4gYnRuIGJ0blwiO1xuXG5cdGdhcDogMXZoIDA7XG5cblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1pdGVtczogY2VudGVyO1xuXG5cdHdpZHRoOiBtaW4oOTB2dywgOTB2aCk7XG5cdGhlaWdodDogbWluKDkwdncsIDkwdmgpO1xufVxuXG4jbnVtYmVyLWNvbnRhaW5lcj4qIHtcblx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG5cdC8qIGxpbmUtaGVpZ2h0OiAxN3Z3OyAqL1xuXHR1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuI2xlZnQtY2hldnJvbiB7XG5cdGdyaWQtYXJlYTogbGVmdDtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcbn1cblxuI3JpZ2h0LWNoZXZyb24ge1xuXHRncmlkLWFyZWE6IHJpZ2h0O1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xufVxuXG4jbnVtYmVyIHtcblx0Z3JpZC1hcmVhOiBudW1iZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1zaXplOiBtaW4oMzB2dywgMzB2aCk7XG59XG5cbiNudW1iZXItYnV0dG9uIHtcblx0Z3JpZC1hcmVhOiBidG47XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cblx0YWxpZ24tc2VsZjogc2VsZi1zdGFydDtcblx0Ym9yZGVyOiBub25lO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3QkJEO1xuXHRjb2xvcjogI0UwRjBFMDtcblxuXHRwYWRkaW5nOiAwO1xuXHRmb250LXNpemU6IG1pbigxNXZ3LCAxNXZoKTtcbn1cblxuI3dlYnJ0YyB7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNjb250YWluZXIge1xuXHRmbGV4LWdyb3c6IDE7XG5cdG92ZXJmbG93LXk6IGhpZGRlbjtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0ZmxleC13cmFwOiBub3dyYXA7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG59XG5cbiNxciB7XG5cdHdpZHRoOiBtaW4oNTAlLCBjYWxjKDkwdmggLSA3MHB4KSk7XG5cblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0YXNwZWN0LXJhdGlvOiAxIC8gMTtcbn1cblxuI3FyPnN2ZyB7XG5cdHdpZHRoOiA5MCU7XG5cdGhlaWdodDogYXV0bztcblx0LyogYm9yZGVyLXJhZGl1czogMjBweDsgKi9cbn1cblxuI3NjYW4ge1xuXHR3aWR0aDogbWluKDQ1JSwgY2FsYyg5MHZoIC0gNzBweCkpO1xufVxuXG5cbiNnYW1lIHtcblx0d2lkdGg6IDEwMHZ3O1xuXHRoZWlnaHQ6IDEwMCU7XG59XG5cbkBtZWRpYSAobWluLWhlaWdodDogMTAwdncpIHtcblx0I2NvbnRhaW5lciB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0fVxuXG5cdCNxciB7XG5cdFx0aGVpZ2h0OiA1MCU7XG5cdFx0d2lkdGg6IGF1dG87XG5cdH1cblxuXHQjc2NhbiB7XG5cdFx0aGVpZ2h0OiA1MCU7XG5cdFx0d2lkdGg6IGF1dG87XG5cdH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL29mZmVyL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLHlCQUF5Qjs7Q0FFekIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7O0NBRXZCLFlBQVk7Q0FDWixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsdUJBQXVCO0FBQ3hCOztBQUVBOztDQUVDLGFBQWE7Q0FDYixrQ0FBa0M7Q0FDbEMsMkJBQTJCO0NBQzNCOztlQUVjOztDQUVkLFVBQVU7O0NBRVYsbUJBQW1CO0NBQ25CLHFCQUFxQjs7Q0FFckIsc0JBQXNCO0NBQ3RCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2Qix1QkFBdUI7Q0FDdkIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsY0FBYztDQUNkLFdBQVc7Q0FDWCxZQUFZOztDQUVaLHNCQUFzQjtDQUN0QixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixjQUFjOztDQUVkLFVBQVU7Q0FDViwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLDZCQUE2QjtDQUM3QixtQkFBbUI7O0FBRXBCOztBQUVBO0NBQ0Msa0NBQWtDOztDQUVsQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjs7Q0FFbkIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLFlBQVk7Q0FDWix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxrQ0FBa0M7QUFDbkM7OztBQUdBO0NBQ0MsWUFBWTtDQUNaLFlBQVk7QUFDYjs7QUFFQTtDQUNDO0VBQ0Msc0JBQXNCO0NBQ3ZCOztDQUVBO0VBQ0MsV0FBVztFQUNYLFdBQVc7Q0FDWjs7Q0FFQTtFQUNDLFdBQVc7RUFDWCxXQUFXO0NBQ1o7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRTBGMEUwO1xcblxcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbmgxIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbiNudW1iZXItY29udGFpbmVyIHtcXG5cXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcblxcdFxcdFxcXCJsZWZ0IG51bWJlciByaWdodFxcXCJcXG5cXHRcXHRcXFwiYnRuIGJ0biBidG5cXFwiO1xcblxcblxcdGdhcDogMXZoIDA7XFxuXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0d2lkdGg6IG1pbig5MHZ3LCA5MHZoKTtcXG5cXHRoZWlnaHQ6IG1pbig5MHZ3LCA5MHZoKTtcXG59XFxuXFxuI251bWJlci1jb250YWluZXI+KiB7XFxuXFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuXFx0LyogbGluZS1oZWlnaHQ6IDE3dnc7ICovXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbiNsZWZ0LWNoZXZyb24ge1xcblxcdGdyaWQtYXJlYTogbGVmdDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNyaWdodC1jaGV2cm9uIHtcXG5cXHRncmlkLWFyZWE6IHJpZ2h0O1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuXFxuI251bWJlciB7XFxuXFx0Z3JpZC1hcmVhOiBudW1iZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogbWluKDMwdncsIDMwdmgpO1xcbn1cXG5cXG4jbnVtYmVyLWJ1dHRvbiB7XFxuXFx0Z3JpZC1hcmVhOiBidG47XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcblxcdGFsaWduLXNlbGY6IHNlbGYtc3RhcnQ7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzE5N0JCRDtcXG5cXHRjb2xvcjogI0UwRjBFMDtcXG5cXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQtc2l6ZTogbWluKDE1dncsIDE1dmgpO1xcbn1cXG5cXG4jd2VicnRjIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG5cXHRmbGV4LWdyb3c6IDE7XFxuXFx0b3ZlcmZsb3cteTogaGlkZGVuO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRmbGV4LXdyYXA6IG5vd3JhcDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4jcXIge1xcblxcdHdpZHRoOiBtaW4oNTAlLCBjYWxjKDkwdmggLSA3MHB4KSk7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdGFzcGVjdC1yYXRpbzogMSAvIDE7XFxufVxcblxcbiNxcj5zdmcge1xcblxcdHdpZHRoOiA5MCU7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdC8qIGJvcmRlci1yYWRpdXM6IDIwcHg7ICovXFxufVxcblxcbiNzY2FuIHtcXG5cXHR3aWR0aDogbWluKDQ1JSwgY2FsYyg5MHZoIC0gNzBweCkpO1xcbn1cXG5cXG5cXG4jZ2FtZSB7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuXFxuQG1lZGlhIChtaW4taGVpZ2h0OiAxMDB2dykge1xcblxcdCNjb250YWluZXIge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0fVxcblxcblxcdCNxciB7XFxuXFx0XFx0aGVpZ2h0OiA1MCU7XFxuXFx0XFx0d2lkdGg6IGF1dG87XFxuXFx0fVxcblxcblxcdCNzY2FuIHtcXG5cXHRcXHRoZWlnaHQ6IDUwJTtcXG5cXHRcXHR3aWR0aDogYXV0bztcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiY2xhc3MgZXtjb25zdHJ1Y3RvcihhLGIsYyxkLGYpe3RoaXMuX2xlZ2FjeUNhbnZhc1NpemU9ZS5ERUZBVUxUX0NBTlZBU19TSVpFO3RoaXMuX3ByZWZlcnJlZENhbWVyYT1cImVudmlyb25tZW50XCI7dGhpcy5fbWF4U2NhbnNQZXJTZWNvbmQ9MjU7dGhpcy5fbGFzdFNjYW5UaW1lc3RhbXA9LTE7dGhpcy5fZGVzdHJveWVkPXRoaXMuX2ZsYXNoT249dGhpcy5fcGF1c2VkPXRoaXMuX2FjdGl2ZT0hMTt0aGlzLiR2aWRlbz1hO3RoaXMuJGNhbnZhcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO2MmJlwib2JqZWN0XCI9PT10eXBlb2YgYz90aGlzLl9vbkRlY29kZT1iOihjfHxkfHxmP2NvbnNvbGUud2FybihcIllvdSdyZSB1c2luZyBhIGRlcHJlY2F0ZWQgdmVyc2lvbiBvZiB0aGUgUXJTY2FubmVyIGNvbnN0cnVjdG9yIHdoaWNoIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlXCIpOmNvbnNvbGUud2FybihcIk5vdGUgdGhhdCB0aGUgdHlwZSBvZiB0aGUgc2NhbiByZXN1bHQgcGFzc2VkIHRvIG9uRGVjb2RlIHdpbGwgY2hhbmdlIGluIHRoZSBmdXR1cmUuIFRvIGFscmVhZHkgc3dpdGNoIHRvIHRoZSBuZXcgYXBpIHRvZGF5LCB5b3UgY2FuIHBhc3MgcmV0dXJuRGV0YWlsZWRTY2FuUmVzdWx0OiB0cnVlLlwiKSxcbnRoaXMuX2xlZ2FjeU9uRGVjb2RlPWIpO2I9XCJvYmplY3RcIj09PXR5cGVvZiBjP2M6e307dGhpcy5fb25EZWNvZGVFcnJvcj1iLm9uRGVjb2RlRXJyb3J8fChcImZ1bmN0aW9uXCI9PT10eXBlb2YgYz9jOnRoaXMuX29uRGVjb2RlRXJyb3IpO3RoaXMuX2NhbGN1bGF0ZVNjYW5SZWdpb249Yi5jYWxjdWxhdGVTY2FuUmVnaW9ufHwoXCJmdW5jdGlvblwiPT09dHlwZW9mIGQ/ZDp0aGlzLl9jYWxjdWxhdGVTY2FuUmVnaW9uKTt0aGlzLl9wcmVmZXJyZWRDYW1lcmE9Yi5wcmVmZXJyZWRDYW1lcmF8fGZ8fHRoaXMuX3ByZWZlcnJlZENhbWVyYTt0aGlzLl9sZWdhY3lDYW52YXNTaXplPVwibnVtYmVyXCI9PT10eXBlb2YgYz9jOlwibnVtYmVyXCI9PT10eXBlb2YgZD9kOnRoaXMuX2xlZ2FjeUNhbnZhc1NpemU7dGhpcy5fbWF4U2NhbnNQZXJTZWNvbmQ9Yi5tYXhTY2Fuc1BlclNlY29uZHx8dGhpcy5fbWF4U2NhbnNQZXJTZWNvbmQ7dGhpcy5fb25QbGF5PXRoaXMuX29uUGxheS5iaW5kKHRoaXMpO3RoaXMuX29uTG9hZGVkTWV0YURhdGE9XG50aGlzLl9vbkxvYWRlZE1ldGFEYXRhLmJpbmQodGhpcyk7dGhpcy5fb25WaXNpYmlsaXR5Q2hhbmdlPXRoaXMuX29uVmlzaWJpbGl0eUNoYW5nZS5iaW5kKHRoaXMpO3RoaXMuX3VwZGF0ZU92ZXJsYXk9dGhpcy5fdXBkYXRlT3ZlcmxheS5iaW5kKHRoaXMpO2EuZGlzYWJsZVBpY3R1cmVJblBpY3R1cmU9ITA7YS5wbGF5c0lubGluZT0hMDthLm11dGVkPSEwO2xldCBoPSExO2EuaGlkZGVuJiYoYS5oaWRkZW49ITEsaD0hMCk7ZG9jdW1lbnQuYm9keS5jb250YWlucyhhKXx8KGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSksaD0hMCk7Yz1hLnBhcmVudEVsZW1lbnQ7aWYoYi5oaWdobGlnaHRTY2FuUmVnaW9ufHxiLmhpZ2hsaWdodENvZGVPdXRsaW5lKXtkPSEhYi5vdmVybGF5O3RoaXMuJG92ZXJsYXk9Yi5vdmVybGF5fHxkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Y9dGhpcy4kb3ZlcmxheS5zdHlsZTtmLnBvc2l0aW9uPVwiYWJzb2x1dGVcIjtmLmRpc3BsYXk9XCJub25lXCI7XG5mLnBvaW50ZXJFdmVudHM9XCJub25lXCI7dGhpcy4kb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwic2Nhbi1yZWdpb24taGlnaGxpZ2h0XCIpO2lmKCFkJiZiLmhpZ2hsaWdodFNjYW5SZWdpb24pe3RoaXMuJG92ZXJsYXkuaW5uZXJIVE1MPSc8c3ZnIGNsYXNzPVwic2Nhbi1yZWdpb24taGlnaGxpZ2h0LXN2Z1wiIHZpZXdCb3g9XCIwIDAgMjM4IDIzOFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2xlZnQ6MDt0b3A6MDtmaWxsOm5vbmU7c3Ryb2tlOiNlOWIyMTM7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kXCI+PHBhdGggZD1cIk0zMSAySDEwYTggOCAwIDAgMC04IDh2MjFNMjA3IDJoMjFhOCA4IDAgMCAxIDggOHYyMW0wIDE3NnYyMWE4IDggMCAwIDEtOCA4aC0yMW0tMTc2IDBIMTBhOCA4IDAgMCAxLTgtOHYtMjFcIi8+PC9zdmc+Jzt0cnl7dGhpcy4kb3ZlcmxheS5maXJzdEVsZW1lbnRDaGlsZC5hbmltYXRlKHt0cmFuc2Zvcm06W1wic2NhbGUoLjk4KVwiLFxuXCJzY2FsZSgxLjAxKVwiXX0se2R1cmF0aW9uOjQwMCxpdGVyYXRpb25zOkluZmluaXR5LGRpcmVjdGlvbjpcImFsdGVybmF0ZVwiLGVhc2luZzpcImVhc2UtaW4tb3V0XCJ9KX1jYXRjaChtKXt9Yy5pbnNlcnRCZWZvcmUodGhpcy4kb3ZlcmxheSx0aGlzLiR2aWRlby5uZXh0U2libGluZyl9Yi5oaWdobGlnaHRDb2RlT3V0bGluZSYmKHRoaXMuJG92ZXJsYXkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsJzxzdmcgY2xhc3M9XCJjb2RlLW91dGxpbmUtaGlnaGxpZ2h0XCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2ZpbGw6bm9uZTtzdHJva2U6I2U5YjIxMztzdHJva2Utd2lkdGg6NTtzdHJva2UtZGFzaGFycmF5OjI1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZFwiPjxwb2x5Z29uLz48L3N2Zz4nKSx0aGlzLiRjb2RlT3V0bGluZUhpZ2hsaWdodD10aGlzLiRvdmVybGF5Lmxhc3RFbGVtZW50Q2hpbGQpfXRoaXMuX3NjYW5SZWdpb249XG50aGlzLl9jYWxjdWxhdGVTY2FuUmVnaW9uKGEpO3JlcXVlc3RBbmltYXRpb25GcmFtZSgoKT0+e2xldCBtPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGEpO1wibm9uZVwiPT09bS5kaXNwbGF5JiYoYS5zdHlsZS5zZXRQcm9wZXJ0eShcImRpc3BsYXlcIixcImJsb2NrXCIsXCJpbXBvcnRhbnRcIiksaD0hMCk7XCJ2aXNpYmxlXCIhPT1tLnZpc2liaWxpdHkmJihhLnN0eWxlLnNldFByb3BlcnR5KFwidmlzaWJpbGl0eVwiLFwidmlzaWJsZVwiLFwiaW1wb3J0YW50XCIpLGg9ITApO2gmJihjb25zb2xlLndhcm4oXCJRclNjYW5uZXIgaGFzIG92ZXJ3cml0dGVuIHRoZSB2aWRlbyBoaWRpbmcgc3R5bGUgdG8gYXZvaWQgU2FmYXJpIHN0b3BwaW5nIHRoZSBwbGF5YmFjay5cIiksYS5zdHlsZS5vcGFjaXR5PVwiMFwiLGEuc3R5bGUud2lkdGg9XCIwXCIsYS5zdHlsZS5oZWlnaHQ9XCIwXCIsdGhpcy4kb3ZlcmxheSYmdGhpcy4kb3ZlcmxheS5wYXJlbnRFbGVtZW50JiZ0aGlzLiRvdmVybGF5LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy4kb3ZlcmxheSksXG5kZWxldGUgdGhpcy4kb3ZlcmxheSxkZWxldGUgdGhpcy4kY29kZU91dGxpbmVIaWdobGlnaHQpO3RoaXMuJG92ZXJsYXkmJnRoaXMuX3VwZGF0ZU92ZXJsYXkoKX0pO2EuYWRkRXZlbnRMaXN0ZW5lcihcInBsYXlcIix0aGlzLl9vblBsYXkpO2EuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlZG1ldGFkYXRhXCIsdGhpcy5fb25Mb2FkZWRNZXRhRGF0YSk7ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIix0aGlzLl9vblZpc2liaWxpdHlDaGFuZ2UpO3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5fdXBkYXRlT3ZlcmxheSk7dGhpcy5fcXJFbmdpbmVQcm9taXNlPWUuY3JlYXRlUXJFbmdpbmUoKX1zdGF0aWMgc2V0IFdPUktFUl9QQVRIKGEpe2NvbnNvbGUud2FybihcIlNldHRpbmcgUXJTY2FubmVyLldPUktFUl9QQVRIIGlzIG5vdCByZXF1aXJlZCBhbmQgbm90IHN1cHBvcnRlZCBhbnltb3JlLiBIYXZlIGEgbG9vayBhdCB0aGUgUkVBRE1FIGZvciBuZXcgc2V0dXAgaW5zdHJ1Y3Rpb25zLlwiKX1zdGF0aWMgYXN5bmMgaGFzQ2FtZXJhKCl7dHJ5e3JldHVybiEhKGF3YWl0IGUubGlzdENhbWVyYXMoITEpKS5sZW5ndGh9Y2F0Y2goYSl7cmV0dXJuITF9fXN0YXRpYyBhc3luYyBsaXN0Q2FtZXJhcyhhPVxuITEpe2lmKCFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKXJldHVybltdO2xldCBiPWFzeW5jKCk9Pihhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKSkuZmlsdGVyKGQ9PlwidmlkZW9pbnB1dFwiPT09ZC5raW5kKSxjO3RyeXthJiYoYXdhaXQgYigpKS5ldmVyeShkPT4hZC5sYWJlbCkmJihjPWF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHthdWRpbzohMSx2aWRlbzohMH0pKX1jYXRjaChkKXt9dHJ5e3JldHVybihhd2FpdCBiKCkpLm1hcCgoZCxmKT0+KHtpZDpkLmRldmljZUlkLGxhYmVsOmQubGFiZWx8fCgwPT09Zj9cIkRlZmF1bHQgQ2FtZXJhXCI6YENhbWVyYSAke2YrMX1gKX0pKX1maW5hbGx5e2MmJihjb25zb2xlLndhcm4oXCJDYWxsIGxpc3RDYW1lcmFzIGFmdGVyIHN1Y2Nlc3NmdWxseSBzdGFydGluZyBhIFFSIHNjYW5uZXIgdG8gYXZvaWQgY3JlYXRpbmcgYSB0ZW1wb3JhcnkgdmlkZW8gc3RyZWFtXCIpLGUuX3N0b3BWaWRlb1N0cmVhbShjKSl9fWFzeW5jIGhhc0ZsYXNoKCl7bGV0IGE7XG50cnl7aWYodGhpcy4kdmlkZW8uc3JjT2JqZWN0KXtpZighKHRoaXMuJHZpZGVvLnNyY09iamVjdCBpbnN0YW5jZW9mIE1lZGlhU3RyZWFtKSlyZXR1cm4hMTthPXRoaXMuJHZpZGVvLnNyY09iamVjdH1lbHNlIGE9KGF3YWl0IHRoaXMuX2dldENhbWVyYVN0cmVhbSgpKS5zdHJlYW07cmV0dXJuXCJ0b3JjaFwiaW4gYS5nZXRWaWRlb1RyYWNrcygpWzBdLmdldFNldHRpbmdzKCl9Y2F0Y2goYil7cmV0dXJuITF9ZmluYWxseXthJiZhIT09dGhpcy4kdmlkZW8uc3JjT2JqZWN0JiYoY29uc29sZS53YXJuKFwiQ2FsbCBoYXNGbGFzaCBhZnRlciBzdWNjZXNzZnVsbHkgc3RhcnRpbmcgdGhlIHNjYW5uZXIgdG8gYXZvaWQgY3JlYXRpbmcgYSB0ZW1wb3JhcnkgdmlkZW8gc3RyZWFtXCIpLGUuX3N0b3BWaWRlb1N0cmVhbShhKSl9fWlzRmxhc2hPbigpe3JldHVybiB0aGlzLl9mbGFzaE9ufWFzeW5jIHRvZ2dsZUZsYXNoKCl7dGhpcy5fZmxhc2hPbj9hd2FpdCB0aGlzLnR1cm5GbGFzaE9mZigpOmF3YWl0IHRoaXMudHVybkZsYXNoT24oKX1hc3luYyB0dXJuRmxhc2hPbigpe2lmKCF0aGlzLl9mbGFzaE9uJiZcbiF0aGlzLl9kZXN0cm95ZWQmJih0aGlzLl9mbGFzaE9uPSEwLHRoaXMuX2FjdGl2ZSYmIXRoaXMuX3BhdXNlZCkpdHJ5e2lmKCFhd2FpdCB0aGlzLmhhc0ZsYXNoKCkpdGhyb3dcIk5vIGZsYXNoIGF2YWlsYWJsZVwiO2F3YWl0IHRoaXMuJHZpZGVvLnNyY09iamVjdC5nZXRWaWRlb1RyYWNrcygpWzBdLmFwcGx5Q29uc3RyYWludHMoe2FkdmFuY2VkOlt7dG9yY2g6ITB9XX0pfWNhdGNoKGEpe3Rocm93IHRoaXMuX2ZsYXNoT249ITEsYTt9fWFzeW5jIHR1cm5GbGFzaE9mZigpe3RoaXMuX2ZsYXNoT24mJih0aGlzLl9mbGFzaE9uPSExLGF3YWl0IHRoaXMuX3Jlc3RhcnRWaWRlb1N0cmVhbSgpKX1kZXN0cm95KCl7dGhpcy4kdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRlZG1ldGFkYXRhXCIsdGhpcy5fb25Mb2FkZWRNZXRhRGF0YSk7dGhpcy4kdmlkZW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBsYXlcIix0aGlzLl9vblBsYXkpO2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsXG50aGlzLl9vblZpc2liaWxpdHlDaGFuZ2UpO3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5fdXBkYXRlT3ZlcmxheSk7dGhpcy5fZGVzdHJveWVkPSEwO3RoaXMuX2ZsYXNoT249ITE7dGhpcy5zdG9wKCk7ZS5fcG9zdFdvcmtlck1lc3NhZ2UodGhpcy5fcXJFbmdpbmVQcm9taXNlLFwiY2xvc2VcIil9YXN5bmMgc3RhcnQoKXtpZih0aGlzLl9kZXN0cm95ZWQpdGhyb3cgRXJyb3IoXCJUaGUgUVIgc2Nhbm5lciBjYW4gbm90IGJlIHN0YXJ0ZWQgYXMgaXQgaGFkIGJlZW4gZGVzdHJveWVkLlwiKTtpZighdGhpcy5fYWN0aXZlfHx0aGlzLl9wYXVzZWQpaWYoXCJodHRwczpcIiE9PXdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCYmY29uc29sZS53YXJuKFwiVGhlIGNhbWVyYSBzdHJlYW0gaXMgb25seSBhY2Nlc3NpYmxlIGlmIHRoZSBwYWdlIGlzIHRyYW5zZmVycmVkIHZpYSBodHRwcy5cIiksdGhpcy5fYWN0aXZlPSEwLCFkb2N1bWVudC5oaWRkZW4paWYodGhpcy5fcGF1c2VkPVxuITEsdGhpcy4kdmlkZW8uc3JjT2JqZWN0KWF3YWl0IHRoaXMuJHZpZGVvLnBsYXkoKTtlbHNlIHRyeXtsZXQge3N0cmVhbTphLGZhY2luZ01vZGU6Yn09YXdhaXQgdGhpcy5fZ2V0Q2FtZXJhU3RyZWFtKCk7IXRoaXMuX2FjdGl2ZXx8dGhpcy5fcGF1c2VkP2UuX3N0b3BWaWRlb1N0cmVhbShhKToodGhpcy5fc2V0VmlkZW9NaXJyb3IoYiksdGhpcy4kdmlkZW8uc3JjT2JqZWN0PWEsYXdhaXQgdGhpcy4kdmlkZW8ucGxheSgpLHRoaXMuX2ZsYXNoT24mJih0aGlzLl9mbGFzaE9uPSExLHRoaXMudHVybkZsYXNoT24oKS5jYXRjaCgoKT0+e30pKSl9Y2F0Y2goYSl7aWYoIXRoaXMuX3BhdXNlZCl0aHJvdyB0aGlzLl9hY3RpdmU9ITEsYTt9fXN0b3AoKXt0aGlzLnBhdXNlKCk7dGhpcy5fYWN0aXZlPSExfWFzeW5jIHBhdXNlKGE9ITEpe3RoaXMuX3BhdXNlZD0hMDtpZighdGhpcy5fYWN0aXZlKXJldHVybiEwO3RoaXMuJHZpZGVvLnBhdXNlKCk7dGhpcy4kb3ZlcmxheSYmKHRoaXMuJG92ZXJsYXkuc3R5bGUuZGlzcGxheT1cblwibm9uZVwiKTtsZXQgYj0oKT0+e3RoaXMuJHZpZGVvLnNyY09iamVjdCBpbnN0YW5jZW9mIE1lZGlhU3RyZWFtJiYoZS5fc3RvcFZpZGVvU3RyZWFtKHRoaXMuJHZpZGVvLnNyY09iamVjdCksdGhpcy4kdmlkZW8uc3JjT2JqZWN0PW51bGwpfTtpZihhKXJldHVybiBiKCksITA7YXdhaXQgbmV3IFByb21pc2UoYz0+c2V0VGltZW91dChjLDMwMCkpO2lmKCF0aGlzLl9wYXVzZWQpcmV0dXJuITE7YigpO3JldHVybiEwfWFzeW5jIHNldENhbWVyYShhKXthIT09dGhpcy5fcHJlZmVycmVkQ2FtZXJhJiYodGhpcy5fcHJlZmVycmVkQ2FtZXJhPWEsYXdhaXQgdGhpcy5fcmVzdGFydFZpZGVvU3RyZWFtKCkpfXN0YXRpYyBhc3luYyBzY2FuSW1hZ2UoYSxiLGMsZCxmPSExLGg9ITEpe2xldCBtLG49ITE7YiYmKFwic2NhblJlZ2lvblwiaW4gYnx8XCJxckVuZ2luZVwiaW4gYnx8XCJjYW52YXNcImluIGJ8fFwiZGlzYWxsb3dDYW52YXNSZXNpemluZ1wiaW4gYnx8XCJhbHNvVHJ5V2l0aG91dFNjYW5SZWdpb25cImluXG5ifHxcInJldHVybkRldGFpbGVkU2NhblJlc3VsdFwiaW4gYik/KG09Yi5zY2FuUmVnaW9uLGM9Yi5xckVuZ2luZSxkPWIuY2FudmFzLGY9Yi5kaXNhbGxvd0NhbnZhc1Jlc2l6aW5nfHwhMSxoPWIuYWxzb1RyeVdpdGhvdXRTY2FuUmVnaW9ufHwhMSxuPSEwKTpifHxjfHxkfHxmfHxoP2NvbnNvbGUud2FybihcIllvdSdyZSB1c2luZyBhIGRlcHJlY2F0ZWQgYXBpIGZvciBzY2FuSW1hZ2Ugd2hpY2ggd2lsbCBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuXCIpOmNvbnNvbGUud2FybihcIk5vdGUgdGhhdCB0aGUgcmV0dXJuIHR5cGUgb2Ygc2NhbkltYWdlIHdpbGwgY2hhbmdlIGluIHRoZSBmdXR1cmUuIFRvIGFscmVhZHkgc3dpdGNoIHRvIHRoZSBuZXcgYXBpIHRvZGF5LCB5b3UgY2FuIHBhc3MgcmV0dXJuRGV0YWlsZWRTY2FuUmVzdWx0OiB0cnVlLlwiKTtiPSEhYzt0cnl7bGV0IHAsaztbYyxwXT1hd2FpdCBQcm9taXNlLmFsbChbY3x8ZS5jcmVhdGVRckVuZ2luZSgpLGUuX2xvYWRJbWFnZShhKV0pO1xuW2Qsa109ZS5fZHJhd1RvQ2FudmFzKHAsbSxkLGYpO2xldCBxO2lmKGMgaW5zdGFuY2VvZiBXb3JrZXIpe2xldCBnPWM7Ynx8ZS5fcG9zdFdvcmtlck1lc3NhZ2VTeW5jKGcsXCJpbnZlcnNpb25Nb2RlXCIsXCJib3RoXCIpO3E9YXdhaXQgbmV3IFByb21pc2UoKGwsdik9PntsZXQgdyx1LHIseT0tMTt1PXQ9Pnt0LmRhdGEuaWQ9PT15JiYoZy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHUpLGcucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsciksY2xlYXJUaW1lb3V0KHcpLG51bGwhPT10LmRhdGEuZGF0YT9sKHtkYXRhOnQuZGF0YS5kYXRhLGNvcm5lclBvaW50czplLl9jb252ZXJ0UG9pbnRzKHQuZGF0YS5jb3JuZXJQb2ludHMsbSl9KTp2KGUuTk9fUVJfQ09ERV9GT1VORCkpfTtyPXQ9PntnLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsdSk7Zy5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIixyKTtjbGVhclRpbWVvdXQodyk7dihcIlNjYW5uZXIgZXJyb3I6IFwiKyh0P1xudC5tZXNzYWdlfHx0OlwiVW5rbm93biBFcnJvclwiKSl9O2cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIix1KTtnLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLHIpO3c9c2V0VGltZW91dCgoKT0+cihcInRpbWVvdXRcIiksMUU0KTtsZXQgeD1rLmdldEltYWdlRGF0YSgwLDAsZC53aWR0aCxkLmhlaWdodCk7eT1lLl9wb3N0V29ya2VyTWVzc2FnZVN5bmMoZyxcImRlY29kZVwiLHgsW3guZGF0YS5idWZmZXJdKX0pfWVsc2UgcT1hd2FpdCBQcm9taXNlLnJhY2UoW25ldyBQcm9taXNlKChnLGwpPT53aW5kb3cuc2V0VGltZW91dCgoKT0+bChcIlNjYW5uZXIgZXJyb3I6IHRpbWVvdXRcIiksMUU0KSksKGFzeW5jKCk9Pnt0cnl7dmFyIFtnXT1hd2FpdCBjLmRldGVjdChkKTtpZighZyl0aHJvdyBlLk5PX1FSX0NPREVfRk9VTkQ7cmV0dXJue2RhdGE6Zy5yYXdWYWx1ZSxjb3JuZXJQb2ludHM6ZS5fY29udmVydFBvaW50cyhnLmNvcm5lclBvaW50cyxtKX19Y2F0Y2gobCl7Zz1sLm1lc3NhZ2V8fGw7XG5pZigvbm90IGltcGxlbWVudGVkfHNlcnZpY2UgdW5hdmFpbGFibGUvLnRlc3QoZykpcmV0dXJuIGUuX2Rpc2FibGVCYXJjb2RlRGV0ZWN0b3I9ITAsZS5zY2FuSW1hZ2UoYSx7c2NhblJlZ2lvbjptLGNhbnZhczpkLGRpc2FsbG93Q2FudmFzUmVzaXppbmc6ZixhbHNvVHJ5V2l0aG91dFNjYW5SZWdpb246aH0pO3Rocm93YFNjYW5uZXIgZXJyb3I6ICR7Z31gO319KSgpXSk7cmV0dXJuIG4/cTpxLmRhdGF9Y2F0Y2gocCl7aWYoIW18fCFoKXRocm93IHA7bGV0IGs9YXdhaXQgZS5zY2FuSW1hZ2UoYSx7cXJFbmdpbmU6YyxjYW52YXM6ZCxkaXNhbGxvd0NhbnZhc1Jlc2l6aW5nOmZ9KTtyZXR1cm4gbj9rOmsuZGF0YX1maW5hbGx5e2J8fGUuX3Bvc3RXb3JrZXJNZXNzYWdlKGMsXCJjbG9zZVwiKX19c2V0R3JheXNjYWxlV2VpZ2h0cyhhLGIsYyxkPSEwKXtlLl9wb3N0V29ya2VyTWVzc2FnZSh0aGlzLl9xckVuZ2luZVByb21pc2UsXCJncmF5c2NhbGVXZWlnaHRzXCIse3JlZDphLGdyZWVuOmIsXG5ibHVlOmMsdXNlSW50ZWdlckFwcHJveGltYXRpb246ZH0pfXNldEludmVyc2lvbk1vZGUoYSl7ZS5fcG9zdFdvcmtlck1lc3NhZ2UodGhpcy5fcXJFbmdpbmVQcm9taXNlLFwiaW52ZXJzaW9uTW9kZVwiLGEpfXN0YXRpYyBhc3luYyBjcmVhdGVRckVuZ2luZShhKXthJiZjb25zb2xlLndhcm4oXCJTcGVjaWZ5aW5nIGEgd29ya2VyIHBhdGggaXMgbm90IHJlcXVpcmVkIGFuZCBub3Qgc3VwcG9ydGVkIGFueW1vcmUuXCIpO2E9KCk9PmltcG9ydChcIi4vcXItc2Nhbm5lci13b3JrZXIubWluLmpzXCIpLnRoZW4oYz0+Yy5jcmVhdGVXb3JrZXIoKSk7aWYoISghZS5fZGlzYWJsZUJhcmNvZGVEZXRlY3RvciYmXCJCYXJjb2RlRGV0ZWN0b3JcImluIHdpbmRvdyYmQmFyY29kZURldGVjdG9yLmdldFN1cHBvcnRlZEZvcm1hdHMmJihhd2FpdCBCYXJjb2RlRGV0ZWN0b3IuZ2V0U3VwcG9ydGVkRm9ybWF0cygpKS5pbmNsdWRlcyhcInFyX2NvZGVcIikpKXJldHVybiBhKCk7bGV0IGI9bmF2aWdhdG9yLnVzZXJBZ2VudERhdGE7XG5yZXR1cm4gYiYmYi5icmFuZHMuc29tZSgoe2JyYW5kOmN9KT0+L0Nocm9taXVtL2kudGVzdChjKSkmJi9tYWMgP09TL2kudGVzdChiLnBsYXRmb3JtKSYmYXdhaXQgYi5nZXRIaWdoRW50cm9weVZhbHVlcyhbXCJhcmNoaXRlY3R1cmVcIixcInBsYXRmb3JtVmVyc2lvblwiXSkudGhlbigoe2FyY2hpdGVjdHVyZTpjLHBsYXRmb3JtVmVyc2lvbjpkfSk9Pi9hcm0vaS50ZXN0KGN8fFwiYXJtXCIpJiYxMzw9cGFyc2VJbnQoZHx8XCIxM1wiKSkuY2F0Y2goKCk9PiEwKT9hKCk6bmV3IEJhcmNvZGVEZXRlY3Rvcih7Zm9ybWF0czpbXCJxcl9jb2RlXCJdfSl9X29uUGxheSgpe3RoaXMuX3NjYW5SZWdpb249dGhpcy5fY2FsY3VsYXRlU2NhblJlZ2lvbih0aGlzLiR2aWRlbyk7dGhpcy5fdXBkYXRlT3ZlcmxheSgpO3RoaXMuJG92ZXJsYXkmJih0aGlzLiRvdmVybGF5LnN0eWxlLmRpc3BsYXk9XCJcIik7dGhpcy5fc2NhbkZyYW1lKCl9X29uTG9hZGVkTWV0YURhdGEoKXt0aGlzLl9zY2FuUmVnaW9uPXRoaXMuX2NhbGN1bGF0ZVNjYW5SZWdpb24odGhpcy4kdmlkZW8pO1xudGhpcy5fdXBkYXRlT3ZlcmxheSgpfV9vblZpc2liaWxpdHlDaGFuZ2UoKXtkb2N1bWVudC5oaWRkZW4/dGhpcy5wYXVzZSgpOnRoaXMuX2FjdGl2ZSYmdGhpcy5zdGFydCgpfV9jYWxjdWxhdGVTY2FuUmVnaW9uKGEpe2xldCBiPU1hdGgucm91bmQoMi8zKk1hdGgubWluKGEudmlkZW9XaWR0aCxhLnZpZGVvSGVpZ2h0KSk7cmV0dXJue3g6TWF0aC5yb3VuZCgoYS52aWRlb1dpZHRoLWIpLzIpLHk6TWF0aC5yb3VuZCgoYS52aWRlb0hlaWdodC1iKS8yKSx3aWR0aDpiLGhlaWdodDpiLGRvd25TY2FsZWRXaWR0aDp0aGlzLl9sZWdhY3lDYW52YXNTaXplLGRvd25TY2FsZWRIZWlnaHQ6dGhpcy5fbGVnYWN5Q2FudmFzU2l6ZX19X3VwZGF0ZU92ZXJsYXkoKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCk9PntpZih0aGlzLiRvdmVybGF5KXt2YXIgYT10aGlzLiR2aWRlbyxiPWEudmlkZW9XaWR0aCxjPWEudmlkZW9IZWlnaHQsZD1hLm9mZnNldFdpZHRoLGY9YS5vZmZzZXRIZWlnaHQsaD1hLm9mZnNldExlZnQsXG5tPWEub2Zmc2V0VG9wLG49d2luZG93LmdldENvbXB1dGVkU3R5bGUoYSkscD1uLm9iamVjdEZpdCxrPWIvYyxxPWQvZjtzd2l0Y2gocCl7Y2FzZSBcIm5vbmVcIjp2YXIgZz1iO3ZhciBsPWM7YnJlYWs7Y2FzZSBcImZpbGxcIjpnPWQ7bD1mO2JyZWFrO2RlZmF1bHQ6KFwiY292ZXJcIj09PXA/az5xOms8cSk/KGw9ZixnPWwqayk6KGc9ZCxsPWcvayksXCJzY2FsZS1kb3duXCI9PT1wJiYoZz1NYXRoLm1pbihnLGIpLGw9TWF0aC5taW4obCxjKSl9dmFyIFt2LHddPW4ub2JqZWN0UG9zaXRpb24uc3BsaXQoXCIgXCIpLm1hcCgocix5KT0+e2NvbnN0IHg9cGFyc2VGbG9hdChyKTtyZXR1cm4gci5lbmRzV2l0aChcIiVcIik/KHk/Zi1sOmQtZykqeC8xMDA6eH0pO249dGhpcy5fc2NhblJlZ2lvbi53aWR0aHx8YjtxPXRoaXMuX3NjYW5SZWdpb24uaGVpZ2h0fHxjO3A9dGhpcy5fc2NhblJlZ2lvbi54fHwwO3ZhciB1PXRoaXMuX3NjYW5SZWdpb24ueXx8MDtrPXRoaXMuJG92ZXJsYXkuc3R5bGU7ay53aWR0aD1cbmAke24vYipnfXB4YDtrLmhlaWdodD1gJHtxL2MqbH1weGA7ay50b3A9YCR7bSt3K3UvYypsfXB4YDtjPS9zY2FsZVhcXCgtMVxcKS8udGVzdChhLnN0eWxlLnRyYW5zZm9ybSk7ay5sZWZ0PWAke2grKGM/ZC12LWc6dikrKGM/Yi1wLW46cCkvYipnfXB4YDtrLnRyYW5zZm9ybT1hLnN0eWxlLnRyYW5zZm9ybX19KX1zdGF0aWMgX2NvbnZlcnRQb2ludHMoYSxiKXtpZighYilyZXR1cm4gYTtsZXQgYz1iLnh8fDAsZD1iLnl8fDAsZj1iLndpZHRoJiZiLmRvd25TY2FsZWRXaWR0aD9iLndpZHRoL2IuZG93blNjYWxlZFdpZHRoOjE7Yj1iLmhlaWdodCYmYi5kb3duU2NhbGVkSGVpZ2h0P2IuaGVpZ2h0L2IuZG93blNjYWxlZEhlaWdodDoxO2ZvcihsZXQgaCBvZiBhKWgueD1oLngqZitjLGgueT1oLnkqYitkO3JldHVybiBhfV9zY2FuRnJhbWUoKXshdGhpcy5fYWN0aXZlfHx0aGlzLiR2aWRlby5wYXVzZWR8fHRoaXMuJHZpZGVvLmVuZGVkfHwoXCJyZXF1ZXN0VmlkZW9GcmFtZUNhbGxiYWNrXCJpblxudGhpcy4kdmlkZW8/dGhpcy4kdmlkZW8ucmVxdWVzdFZpZGVvRnJhbWVDYWxsYmFjay5iaW5kKHRoaXMuJHZpZGVvKTpyZXF1ZXN0QW5pbWF0aW9uRnJhbWUpKGFzeW5jKCk9PntpZighKDE+PXRoaXMuJHZpZGVvLnJlYWR5U3RhdGUpKXt2YXIgYT1EYXRlLm5vdygpLXRoaXMuX2xhc3RTY2FuVGltZXN0YW1wLGI9MUUzL3RoaXMuX21heFNjYW5zUGVyU2Vjb25kO2E8YiYmYXdhaXQgbmV3IFByb21pc2UoZD0+c2V0VGltZW91dChkLGItYSkpO3RoaXMuX2xhc3RTY2FuVGltZXN0YW1wPURhdGUubm93KCk7dHJ5e3ZhciBjPWF3YWl0IGUuc2NhbkltYWdlKHRoaXMuJHZpZGVvLHtzY2FuUmVnaW9uOnRoaXMuX3NjYW5SZWdpb24scXJFbmdpbmU6dGhpcy5fcXJFbmdpbmVQcm9taXNlLGNhbnZhczp0aGlzLiRjYW52YXN9KX1jYXRjaChkKXtpZighdGhpcy5fYWN0aXZlKXJldHVybjt0aGlzLl9vbkRlY29kZUVycm9yKGQpfSFlLl9kaXNhYmxlQmFyY29kZURldGVjdG9yfHxhd2FpdCB0aGlzLl9xckVuZ2luZVByb21pc2UgaW5zdGFuY2VvZlxuV29ya2VyfHwodGhpcy5fcXJFbmdpbmVQcm9taXNlPWUuY3JlYXRlUXJFbmdpbmUoKSk7Yz8odGhpcy5fb25EZWNvZGU/dGhpcy5fb25EZWNvZGUoYyk6dGhpcy5fbGVnYWN5T25EZWNvZGUmJnRoaXMuX2xlZ2FjeU9uRGVjb2RlKGMuZGF0YSksdGhpcy4kY29kZU91dGxpbmVIaWdobGlnaHQmJihjbGVhclRpbWVvdXQodGhpcy5fY29kZU91dGxpbmVIaWdobGlnaHRSZW1vdmFsVGltZW91dCksdGhpcy5fY29kZU91dGxpbmVIaWdobGlnaHRSZW1vdmFsVGltZW91dD12b2lkIDAsdGhpcy4kY29kZU91dGxpbmVIaWdobGlnaHQuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLGAke3RoaXMuX3NjYW5SZWdpb24ueHx8MH0gYCtgJHt0aGlzLl9zY2FuUmVnaW9uLnl8fDB9IGArYCR7dGhpcy5fc2NhblJlZ2lvbi53aWR0aHx8dGhpcy4kdmlkZW8udmlkZW9XaWR0aH0gYCtgJHt0aGlzLl9zY2FuUmVnaW9uLmhlaWdodHx8dGhpcy4kdmlkZW8udmlkZW9IZWlnaHR9YCksdGhpcy4kY29kZU91dGxpbmVIaWdobGlnaHQuZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKFwicG9pbnRzXCIsXG5jLmNvcm5lclBvaW50cy5tYXAoKHt4OmQseTpmfSk9PmAke2R9LCR7Zn1gKS5qb2luKFwiIFwiKSksdGhpcy4kY29kZU91dGxpbmVIaWdobGlnaHQuc3R5bGUuZGlzcGxheT1cIlwiKSk6dGhpcy4kY29kZU91dGxpbmVIaWdobGlnaHQmJiF0aGlzLl9jb2RlT3V0bGluZUhpZ2hsaWdodFJlbW92YWxUaW1lb3V0JiYodGhpcy5fY29kZU91dGxpbmVIaWdobGlnaHRSZW1vdmFsVGltZW91dD1zZXRUaW1lb3V0KCgpPT50aGlzLiRjb2RlT3V0bGluZUhpZ2hsaWdodC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLDEwMCkpfXRoaXMuX3NjYW5GcmFtZSgpfSl9X29uRGVjb2RlRXJyb3IoYSl7YSE9PWUuTk9fUVJfQ09ERV9GT1VORCYmY29uc29sZS5sb2coYSl9YXN5bmMgX2dldENhbWVyYVN0cmVhbSgpe2lmKCFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKXRocm93XCJDYW1lcmEgbm90IGZvdW5kLlwiO2xldCBhPS9eKGVudmlyb25tZW50fHVzZXIpJC8udGVzdCh0aGlzLl9wcmVmZXJyZWRDYW1lcmEpP1wiZmFjaW5nTW9kZVwiOlxuXCJkZXZpY2VJZFwiLGI9W3t3aWR0aDp7bWluOjEwMjR9fSx7d2lkdGg6e21pbjo3Njh9fSx7fV0sYz1iLm1hcChkPT5PYmplY3QuYXNzaWduKHt9LGQse1thXTp7ZXhhY3Q6dGhpcy5fcHJlZmVycmVkQ2FtZXJhfX0pKTtmb3IobGV0IGQgb2ZbLi4uYywuLi5iXSl0cnl7bGV0IGY9YXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe3ZpZGVvOmQsYXVkaW86ITF9KSxoPXRoaXMuX2dldEZhY2luZ01vZGUoZil8fChkLmZhY2luZ01vZGU/dGhpcy5fcHJlZmVycmVkQ2FtZXJhOlwiZW52aXJvbm1lbnRcIj09PXRoaXMuX3ByZWZlcnJlZENhbWVyYT9cInVzZXJcIjpcImVudmlyb25tZW50XCIpO3JldHVybntzdHJlYW06ZixmYWNpbmdNb2RlOmh9fWNhdGNoKGYpe310aHJvd1wiQ2FtZXJhIG5vdCBmb3VuZC5cIjt9YXN5bmMgX3Jlc3RhcnRWaWRlb1N0cmVhbSgpe2xldCBhPXRoaXMuX3BhdXNlZDthd2FpdCB0aGlzLnBhdXNlKCEwKSYmIWEmJnRoaXMuX2FjdGl2ZSYmYXdhaXQgdGhpcy5zdGFydCgpfXN0YXRpYyBfc3RvcFZpZGVvU3RyZWFtKGEpe2ZvcihsZXQgYiBvZiBhLmdldFRyYWNrcygpKWIuc3RvcCgpLFxuYS5yZW1vdmVUcmFjayhiKX1fc2V0VmlkZW9NaXJyb3IoYSl7dGhpcy4kdmlkZW8uc3R5bGUudHJhbnNmb3JtPVwic2NhbGVYKFwiKyhcInVzZXJcIj09PWE/LTE6MSkrXCIpXCJ9X2dldEZhY2luZ01vZGUoYSl7cmV0dXJuKGE9YS5nZXRWaWRlb1RyYWNrcygpWzBdKT8vcmVhcnxiYWNrfGVudmlyb25tZW50L2kudGVzdChhLmxhYmVsKT9cImVudmlyb25tZW50XCI6L2Zyb250fHVzZXJ8ZmFjZS9pLnRlc3QoYS5sYWJlbCk/XCJ1c2VyXCI6bnVsbDpudWxsfXN0YXRpYyBfZHJhd1RvQ2FudmFzKGEsYixjLGQ9ITEpe2M9Y3x8ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtsZXQgZj1iJiZiLng/Yi54OjAsaD1iJiZiLnk/Yi55OjAsbT1iJiZiLndpZHRoP2Iud2lkdGg6YS52aWRlb1dpZHRofHxhLndpZHRoLG49YiYmYi5oZWlnaHQ/Yi5oZWlnaHQ6YS52aWRlb0hlaWdodHx8YS5oZWlnaHQ7ZHx8KGQ9YiYmYi5kb3duU2NhbGVkV2lkdGg/Yi5kb3duU2NhbGVkV2lkdGg6bSxiPWImJmIuZG93blNjYWxlZEhlaWdodD9cbmIuZG93blNjYWxlZEhlaWdodDpuLGMud2lkdGghPT1kJiYoYy53aWR0aD1kKSxjLmhlaWdodCE9PWImJihjLmhlaWdodD1iKSk7Yj1jLmdldENvbnRleHQoXCIyZFwiLHthbHBoYTohMX0pO2IuaW1hZ2VTbW9vdGhpbmdFbmFibGVkPSExO2IuZHJhd0ltYWdlKGEsZixoLG0sbiwwLDAsYy53aWR0aCxjLmhlaWdodCk7cmV0dXJuW2MsYl19c3RhdGljIGFzeW5jIF9sb2FkSW1hZ2UoYSl7aWYoYSBpbnN0YW5jZW9mIEltYWdlKXJldHVybiBhd2FpdCBlLl9hd2FpdEltYWdlTG9hZChhKSxhO2lmKGEgaW5zdGFuY2VvZiBIVE1MVmlkZW9FbGVtZW50fHxhIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnR8fGEgaW5zdGFuY2VvZiBTVkdJbWFnZUVsZW1lbnR8fFwiT2Zmc2NyZWVuQ2FudmFzXCJpbiB3aW5kb3cmJmEgaW5zdGFuY2VvZiBPZmZzY3JlZW5DYW52YXN8fFwiSW1hZ2VCaXRtYXBcImluIHdpbmRvdyYmYSBpbnN0YW5jZW9mIEltYWdlQml0bWFwKXJldHVybiBhO2lmKGEgaW5zdGFuY2VvZlxuRmlsZXx8YSBpbnN0YW5jZW9mIEJsb2J8fGEgaW5zdGFuY2VvZiBVUkx8fFwic3RyaW5nXCI9PT10eXBlb2YgYSl7bGV0IGI9bmV3IEltYWdlO2Iuc3JjPWEgaW5zdGFuY2VvZiBGaWxlfHxhIGluc3RhbmNlb2YgQmxvYj9VUkwuY3JlYXRlT2JqZWN0VVJMKGEpOmEudG9TdHJpbmcoKTt0cnl7cmV0dXJuIGF3YWl0IGUuX2F3YWl0SW1hZ2VMb2FkKGIpLGJ9ZmluYWxseXsoYSBpbnN0YW5jZW9mIEZpbGV8fGEgaW5zdGFuY2VvZiBCbG9iKSYmVVJMLnJldm9rZU9iamVjdFVSTChiLnNyYyl9fWVsc2UgdGhyb3dcIlVuc3VwcG9ydGVkIGltYWdlIHR5cGUuXCI7fXN0YXRpYyBhc3luYyBfYXdhaXRJbWFnZUxvYWQoYSl7YS5jb21wbGV0ZSYmMCE9PWEubmF0dXJhbFdpZHRofHxhd2FpdCBuZXcgUHJvbWlzZSgoYixjKT0+e2xldCBkPWY9PnthLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZCk7YS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIixkKTtmIGluc3RhbmNlb2YgRXJyb3JFdmVudD9cbmMoXCJJbWFnZSBsb2FkIGVycm9yXCIpOmIoKX07YS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGQpO2EuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsZCl9KX1zdGF0aWMgYXN5bmMgX3Bvc3RXb3JrZXJNZXNzYWdlKGEsYixjLGQpe3JldHVybiBlLl9wb3N0V29ya2VyTWVzc2FnZVN5bmMoYXdhaXQgYSxiLGMsZCl9c3RhdGljIF9wb3N0V29ya2VyTWVzc2FnZVN5bmMoYSxiLGMsZCl7aWYoIShhIGluc3RhbmNlb2YgV29ya2VyKSlyZXR1cm4tMTtsZXQgZj1lLl93b3JrZXJNZXNzYWdlSWQrKzthLnBvc3RNZXNzYWdlKHtpZDpmLHR5cGU6YixkYXRhOmN9LGQpO3JldHVybiBmfX1lLkRFRkFVTFRfQ0FOVkFTX1NJWkU9NDAwO2UuTk9fUVJfQ09ERV9GT1VORD1cIk5vIFFSIGNvZGUgZm91bmRcIjtlLl9kaXNhYmxlQmFyY29kZURldGVjdG9yPSExO2UuX3dvcmtlck1lc3NhZ2VJZD0wO2V4cG9ydCBkZWZhdWx0IGVcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFyLXNjYW5uZXIubWluLmpzLm1hcFxuIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyBRUiBDb2RlIEdlbmVyYXRvciBmb3IgSmF2YVNjcmlwdFxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAwOSBLYXp1aGlrbyBBcmFzZVxuLy9cbi8vIFVSTDogaHR0cDovL3d3dy5kLXByb2plY3QuY29tL1xuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbi8vICBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuLy9cbi8vIFRoZSB3b3JkICdRUiBDb2RlJyBpcyByZWdpc3RlcmVkIHRyYWRlbWFyayBvZlxuLy8gREVOU08gV0FWRSBJTkNPUlBPUkFURURcbi8vICBodHRwOi8vd3d3LmRlbnNvLXdhdmUuY29tL3FyY29kZS9mYXFwYXRlbnQtZS5odG1sXG4vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIHFyY29kZSA9IGZ1bmN0aW9uKCkge1xuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHFyY29kZVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBxcmNvZGVcbiAgICogQHBhcmFtIHR5cGVOdW1iZXIgMSB0byA0MFxuICAgKiBAcGFyYW0gZXJyb3JDb3JyZWN0aW9uTGV2ZWwgJ0wnLCdNJywnUScsJ0gnXG4gICAqL1xuICB2YXIgcXJjb2RlID0gZnVuY3Rpb24odHlwZU51bWJlciwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpIHtcblxuICAgIHZhciBQQUQwID0gMHhFQztcbiAgICB2YXIgUEFEMSA9IDB4MTE7XG5cbiAgICB2YXIgX3R5cGVOdW1iZXIgPSB0eXBlTnVtYmVyO1xuICAgIHZhciBfZXJyb3JDb3JyZWN0aW9uTGV2ZWwgPSBRUkVycm9yQ29ycmVjdGlvbkxldmVsW2Vycm9yQ29ycmVjdGlvbkxldmVsXTtcbiAgICB2YXIgX21vZHVsZXMgPSBudWxsO1xuICAgIHZhciBfbW9kdWxlQ291bnQgPSAwO1xuICAgIHZhciBfZGF0YUNhY2hlID0gbnVsbDtcbiAgICB2YXIgX2RhdGFMaXN0ID0gW107XG5cbiAgICB2YXIgX3RoaXMgPSB7fTtcblxuICAgIHZhciBtYWtlSW1wbCA9IGZ1bmN0aW9uKHRlc3QsIG1hc2tQYXR0ZXJuKSB7XG5cbiAgICAgIF9tb2R1bGVDb3VudCA9IF90eXBlTnVtYmVyICogNCArIDE3O1xuICAgICAgX21vZHVsZXMgPSBmdW5jdGlvbihtb2R1bGVDb3VudCkge1xuICAgICAgICB2YXIgbW9kdWxlcyA9IG5ldyBBcnJheShtb2R1bGVDb3VudCk7XG4gICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50OyByb3cgKz0gMSkge1xuICAgICAgICAgIG1vZHVsZXNbcm93XSA9IG5ldyBBcnJheShtb2R1bGVDb3VudCk7XG4gICAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQ7IGNvbCArPSAxKSB7XG4gICAgICAgICAgICBtb2R1bGVzW3Jvd11bY29sXSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb2R1bGVzO1xuICAgICAgfShfbW9kdWxlQ291bnQpO1xuXG4gICAgICBzZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuKDAsIDApO1xuICAgICAgc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybihfbW9kdWxlQ291bnQgLSA3LCAwKTtcbiAgICAgIHNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4oMCwgX21vZHVsZUNvdW50IC0gNyk7XG4gICAgICBzZXR1cFBvc2l0aW9uQWRqdXN0UGF0dGVybigpO1xuICAgICAgc2V0dXBUaW1pbmdQYXR0ZXJuKCk7XG4gICAgICBzZXR1cFR5cGVJbmZvKHRlc3QsIG1hc2tQYXR0ZXJuKTtcblxuICAgICAgaWYgKF90eXBlTnVtYmVyID49IDcpIHtcbiAgICAgICAgc2V0dXBUeXBlTnVtYmVyKHRlc3QpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX2RhdGFDYWNoZSA9PSBudWxsKSB7XG4gICAgICAgIF9kYXRhQ2FjaGUgPSBjcmVhdGVEYXRhKF90eXBlTnVtYmVyLCBfZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIF9kYXRhTGlzdCk7XG4gICAgICB9XG5cbiAgICAgIG1hcERhdGEoX2RhdGFDYWNoZSwgbWFza1BhdHRlcm4pO1xuICAgIH07XG5cbiAgICB2YXIgc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybiA9IGZ1bmN0aW9uKHJvdywgY29sKSB7XG5cbiAgICAgIGZvciAodmFyIHIgPSAtMTsgciA8PSA3OyByICs9IDEpIHtcblxuICAgICAgICBpZiAocm93ICsgciA8PSAtMSB8fCBfbW9kdWxlQ291bnQgPD0gcm93ICsgcikgY29udGludWU7XG5cbiAgICAgICAgZm9yICh2YXIgYyA9IC0xOyBjIDw9IDc7IGMgKz0gMSkge1xuXG4gICAgICAgICAgaWYgKGNvbCArIGMgPD0gLTEgfHwgX21vZHVsZUNvdW50IDw9IGNvbCArIGMpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgaWYgKCAoMCA8PSByICYmIHIgPD0gNiAmJiAoYyA9PSAwIHx8IGMgPT0gNikgKVxuICAgICAgICAgICAgICB8fCAoMCA8PSBjICYmIGMgPD0gNiAmJiAociA9PSAwIHx8IHIgPT0gNikgKVxuICAgICAgICAgICAgICB8fCAoMiA8PSByICYmIHIgPD0gNCAmJiAyIDw9IGMgJiYgYyA8PSA0KSApIHtcbiAgICAgICAgICAgIF9tb2R1bGVzW3JvdyArIHJdW2NvbCArIGNdID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX21vZHVsZXNbcm93ICsgcl1bY29sICsgY10gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGdldEJlc3RNYXNrUGF0dGVybiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgbWluTG9zdFBvaW50ID0gMDtcbiAgICAgIHZhciBwYXR0ZXJuID0gMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpICs9IDEpIHtcblxuICAgICAgICBtYWtlSW1wbCh0cnVlLCBpKTtcblxuICAgICAgICB2YXIgbG9zdFBvaW50ID0gUVJVdGlsLmdldExvc3RQb2ludChfdGhpcyk7XG5cbiAgICAgICAgaWYgKGkgPT0gMCB8fCBtaW5Mb3N0UG9pbnQgPiBsb3N0UG9pbnQpIHtcbiAgICAgICAgICBtaW5Mb3N0UG9pbnQgPSBsb3N0UG9pbnQ7XG4gICAgICAgICAgcGF0dGVybiA9IGk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgfTtcblxuICAgIHZhciBzZXR1cFRpbWluZ1BhdHRlcm4gPSBmdW5jdGlvbigpIHtcblxuICAgICAgZm9yICh2YXIgciA9IDg7IHIgPCBfbW9kdWxlQ291bnQgLSA4OyByICs9IDEpIHtcbiAgICAgICAgaWYgKF9tb2R1bGVzW3JdWzZdICE9IG51bGwpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBfbW9kdWxlc1tyXVs2XSA9IChyICUgMiA9PSAwKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgYyA9IDg7IGMgPCBfbW9kdWxlQ291bnQgLSA4OyBjICs9IDEpIHtcbiAgICAgICAgaWYgKF9tb2R1bGVzWzZdW2NdICE9IG51bGwpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBfbW9kdWxlc1s2XVtjXSA9IChjICUgMiA9PSAwKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHNldHVwUG9zaXRpb25BZGp1c3RQYXR0ZXJuID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBwb3MgPSBRUlV0aWwuZ2V0UGF0dGVyblBvc2l0aW9uKF90eXBlTnVtYmVyKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3MubGVuZ3RoOyBpICs9IDEpIHtcblxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBvcy5sZW5ndGg7IGogKz0gMSkge1xuXG4gICAgICAgICAgdmFyIHJvdyA9IHBvc1tpXTtcbiAgICAgICAgICB2YXIgY29sID0gcG9zW2pdO1xuXG4gICAgICAgICAgaWYgKF9tb2R1bGVzW3Jvd11bY29sXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKHZhciByID0gLTI7IHIgPD0gMjsgciArPSAxKSB7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGMgPSAtMjsgYyA8PSAyOyBjICs9IDEpIHtcblxuICAgICAgICAgICAgICBpZiAociA9PSAtMiB8fCByID09IDIgfHwgYyA9PSAtMiB8fCBjID09IDJcbiAgICAgICAgICAgICAgICAgIHx8IChyID09IDAgJiYgYyA9PSAwKSApIHtcbiAgICAgICAgICAgICAgICBfbW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IHRydWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX21vZHVsZXNbcm93ICsgcl1bY29sICsgY10gPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgc2V0dXBUeXBlTnVtYmVyID0gZnVuY3Rpb24odGVzdCkge1xuXG4gICAgICB2YXIgYml0cyA9IFFSVXRpbC5nZXRCQ0hUeXBlTnVtYmVyKF90eXBlTnVtYmVyKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxODsgaSArPSAxKSB7XG4gICAgICAgIHZhciBtb2QgPSAoIXRlc3QgJiYgKCAoYml0cyA+PiBpKSAmIDEpID09IDEpO1xuICAgICAgICBfbW9kdWxlc1tNYXRoLmZsb29yKGkgLyAzKV1baSAlIDMgKyBfbW9kdWxlQ291bnQgLSA4IC0gM10gPSBtb2Q7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgbW9kID0gKCF0ZXN0ICYmICggKGJpdHMgPj4gaSkgJiAxKSA9PSAxKTtcbiAgICAgICAgX21vZHVsZXNbaSAlIDMgKyBfbW9kdWxlQ291bnQgLSA4IC0gM11bTWF0aC5mbG9vcihpIC8gMyldID0gbW9kO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgc2V0dXBUeXBlSW5mbyA9IGZ1bmN0aW9uKHRlc3QsIG1hc2tQYXR0ZXJuKSB7XG5cbiAgICAgIHZhciBkYXRhID0gKF9lcnJvckNvcnJlY3Rpb25MZXZlbCA8PCAzKSB8IG1hc2tQYXR0ZXJuO1xuICAgICAgdmFyIGJpdHMgPSBRUlV0aWwuZ2V0QkNIVHlwZUluZm8oZGF0YSk7XG5cbiAgICAgIC8vIHZlcnRpY2FsXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE1OyBpICs9IDEpIHtcblxuICAgICAgICB2YXIgbW9kID0gKCF0ZXN0ICYmICggKGJpdHMgPj4gaSkgJiAxKSA9PSAxKTtcblxuICAgICAgICBpZiAoaSA8IDYpIHtcbiAgICAgICAgICBfbW9kdWxlc1tpXVs4XSA9IG1vZDtcbiAgICAgICAgfSBlbHNlIGlmIChpIDwgOCkge1xuICAgICAgICAgIF9tb2R1bGVzW2kgKyAxXVs4XSA9IG1vZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfbW9kdWxlc1tfbW9kdWxlQ291bnQgLSAxNSArIGldWzhdID0gbW9kO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGhvcml6b250YWxcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTU7IGkgKz0gMSkge1xuXG4gICAgICAgIHZhciBtb2QgPSAoIXRlc3QgJiYgKCAoYml0cyA+PiBpKSAmIDEpID09IDEpO1xuXG4gICAgICAgIGlmIChpIDwgOCkge1xuICAgICAgICAgIF9tb2R1bGVzWzhdW19tb2R1bGVDb3VudCAtIGkgLSAxXSA9IG1vZDtcbiAgICAgICAgfSBlbHNlIGlmIChpIDwgOSkge1xuICAgICAgICAgIF9tb2R1bGVzWzhdWzE1IC0gaSAtIDEgKyAxXSA9IG1vZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfbW9kdWxlc1s4XVsxNSAtIGkgLSAxXSA9IG1vZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBmaXhlZCBtb2R1bGVcbiAgICAgIF9tb2R1bGVzW19tb2R1bGVDb3VudCAtIDhdWzhdID0gKCF0ZXN0KTtcbiAgICB9O1xuXG4gICAgdmFyIG1hcERhdGEgPSBmdW5jdGlvbihkYXRhLCBtYXNrUGF0dGVybikge1xuXG4gICAgICB2YXIgaW5jID0gLTE7XG4gICAgICB2YXIgcm93ID0gX21vZHVsZUNvdW50IC0gMTtcbiAgICAgIHZhciBiaXRJbmRleCA9IDc7XG4gICAgICB2YXIgYnl0ZUluZGV4ID0gMDtcbiAgICAgIHZhciBtYXNrRnVuYyA9IFFSVXRpbC5nZXRNYXNrRnVuY3Rpb24obWFza1BhdHRlcm4pO1xuXG4gICAgICBmb3IgKHZhciBjb2wgPSBfbW9kdWxlQ291bnQgLSAxOyBjb2wgPiAwOyBjb2wgLT0gMikge1xuXG4gICAgICAgIGlmIChjb2wgPT0gNikgY29sIC09IDE7XG5cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcblxuICAgICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgMjsgYyArPSAxKSB7XG5cbiAgICAgICAgICAgIGlmIChfbW9kdWxlc1tyb3ddW2NvbCAtIGNdID09IG51bGwpIHtcblxuICAgICAgICAgICAgICB2YXIgZGFyayA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgIGlmIChieXRlSW5kZXggPCBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGRhcmsgPSAoICggKGRhdGFbYnl0ZUluZGV4XSA+Pj4gYml0SW5kZXgpICYgMSkgPT0gMSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB2YXIgbWFzayA9IG1hc2tGdW5jKHJvdywgY29sIC0gYyk7XG5cbiAgICAgICAgICAgICAgaWYgKG1hc2spIHtcbiAgICAgICAgICAgICAgICBkYXJrID0gIWRhcms7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBfbW9kdWxlc1tyb3ddW2NvbCAtIGNdID0gZGFyaztcbiAgICAgICAgICAgICAgYml0SW5kZXggLT0gMTtcblxuICAgICAgICAgICAgICBpZiAoYml0SW5kZXggPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBieXRlSW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICBiaXRJbmRleCA9IDc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3cgKz0gaW5jO1xuXG4gICAgICAgICAgaWYgKHJvdyA8IDAgfHwgX21vZHVsZUNvdW50IDw9IHJvdykge1xuICAgICAgICAgICAgcm93IC09IGluYztcbiAgICAgICAgICAgIGluYyA9IC1pbmM7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGNyZWF0ZUJ5dGVzID0gZnVuY3Rpb24oYnVmZmVyLCByc0Jsb2Nrcykge1xuXG4gICAgICB2YXIgb2Zmc2V0ID0gMDtcblxuICAgICAgdmFyIG1heERjQ291bnQgPSAwO1xuICAgICAgdmFyIG1heEVjQ291bnQgPSAwO1xuXG4gICAgICB2YXIgZGNkYXRhID0gbmV3IEFycmF5KHJzQmxvY2tzLmxlbmd0aCk7XG4gICAgICB2YXIgZWNkYXRhID0gbmV3IEFycmF5KHJzQmxvY2tzLmxlbmd0aCk7XG5cbiAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgcnNCbG9ja3MubGVuZ3RoOyByICs9IDEpIHtcblxuICAgICAgICB2YXIgZGNDb3VudCA9IHJzQmxvY2tzW3JdLmRhdGFDb3VudDtcbiAgICAgICAgdmFyIGVjQ291bnQgPSByc0Jsb2Nrc1tyXS50b3RhbENvdW50IC0gZGNDb3VudDtcblxuICAgICAgICBtYXhEY0NvdW50ID0gTWF0aC5tYXgobWF4RGNDb3VudCwgZGNDb3VudCk7XG4gICAgICAgIG1heEVjQ291bnQgPSBNYXRoLm1heChtYXhFY0NvdW50LCBlY0NvdW50KTtcblxuICAgICAgICBkY2RhdGFbcl0gPSBuZXcgQXJyYXkoZGNDb3VudCk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkY2RhdGFbcl0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBkY2RhdGFbcl1baV0gPSAweGZmICYgYnVmZmVyLmdldEJ1ZmZlcigpW2kgKyBvZmZzZXRdO1xuICAgICAgICB9XG4gICAgICAgIG9mZnNldCArPSBkY0NvdW50O1xuXG4gICAgICAgIHZhciByc1BvbHkgPSBRUlV0aWwuZ2V0RXJyb3JDb3JyZWN0UG9seW5vbWlhbChlY0NvdW50KTtcbiAgICAgICAgdmFyIHJhd1BvbHkgPSBxclBvbHlub21pYWwoZGNkYXRhW3JdLCByc1BvbHkuZ2V0TGVuZ3RoKCkgLSAxKTtcblxuICAgICAgICB2YXIgbW9kUG9seSA9IHJhd1BvbHkubW9kKHJzUG9seSk7XG4gICAgICAgIGVjZGF0YVtyXSA9IG5ldyBBcnJheShyc1BvbHkuZ2V0TGVuZ3RoKCkgLSAxKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlY2RhdGFbcl0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICB2YXIgbW9kSW5kZXggPSBpICsgbW9kUG9seS5nZXRMZW5ndGgoKSAtIGVjZGF0YVtyXS5sZW5ndGg7XG4gICAgICAgICAgZWNkYXRhW3JdW2ldID0gKG1vZEluZGV4ID49IDApPyBtb2RQb2x5LmdldEF0KG1vZEluZGV4KSA6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHRvdGFsQ29kZUNvdW50ID0gMDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnNCbG9ja3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdG90YWxDb2RlQ291bnQgKz0gcnNCbG9ja3NbaV0udG90YWxDb3VudDtcbiAgICAgIH1cblxuICAgICAgdmFyIGRhdGEgPSBuZXcgQXJyYXkodG90YWxDb2RlQ291bnQpO1xuICAgICAgdmFyIGluZGV4ID0gMDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXhEY0NvdW50OyBpICs9IDEpIHtcbiAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCByc0Jsb2Nrcy5sZW5ndGg7IHIgKz0gMSkge1xuICAgICAgICAgIGlmIChpIDwgZGNkYXRhW3JdLmxlbmd0aCkge1xuICAgICAgICAgICAgZGF0YVtpbmRleF0gPSBkY2RhdGFbcl1baV07XG4gICAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heEVjQ291bnQ7IGkgKz0gMSkge1xuICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IHJzQmxvY2tzLmxlbmd0aDsgciArPSAxKSB7XG4gICAgICAgICAgaWYgKGkgPCBlY2RhdGFbcl0ubGVuZ3RoKSB7XG4gICAgICAgICAgICBkYXRhW2luZGV4XSA9IGVjZGF0YVtyXVtpXTtcbiAgICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH07XG5cbiAgICB2YXIgY3JlYXRlRGF0YSA9IGZ1bmN0aW9uKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdGlvbkxldmVsLCBkYXRhTGlzdCkge1xuXG4gICAgICB2YXIgcnNCbG9ja3MgPSBRUlJTQmxvY2suZ2V0UlNCbG9ja3ModHlwZU51bWJlciwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpO1xuXG4gICAgICB2YXIgYnVmZmVyID0gcXJCaXRCdWZmZXIoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhTGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgZGF0YSA9IGRhdGFMaXN0W2ldO1xuICAgICAgICBidWZmZXIucHV0KGRhdGEuZ2V0TW9kZSgpLCA0KTtcbiAgICAgICAgYnVmZmVyLnB1dChkYXRhLmdldExlbmd0aCgpLCBRUlV0aWwuZ2V0TGVuZ3RoSW5CaXRzKGRhdGEuZ2V0TW9kZSgpLCB0eXBlTnVtYmVyKSApO1xuICAgICAgICBkYXRhLndyaXRlKGJ1ZmZlcik7XG4gICAgICB9XG5cbiAgICAgIC8vIGNhbGMgbnVtIG1heCBkYXRhLlxuICAgICAgdmFyIHRvdGFsRGF0YUNvdW50ID0gMDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnNCbG9ja3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdG90YWxEYXRhQ291bnQgKz0gcnNCbG9ja3NbaV0uZGF0YUNvdW50O1xuICAgICAgfVxuXG4gICAgICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpID4gdG90YWxEYXRhQ291bnQgKiA4KSB7XG4gICAgICAgIHRocm93ICdjb2RlIGxlbmd0aCBvdmVyZmxvdy4gKCdcbiAgICAgICAgICArIGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKVxuICAgICAgICAgICsgJz4nXG4gICAgICAgICAgKyB0b3RhbERhdGFDb3VudCAqIDhcbiAgICAgICAgICArICcpJztcbiAgICAgIH1cblxuICAgICAgLy8gZW5kIGNvZGVcbiAgICAgIGlmIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgKyA0IDw9IHRvdGFsRGF0YUNvdW50ICogOCkge1xuICAgICAgICBidWZmZXIucHV0KDAsIDQpO1xuICAgICAgfVxuXG4gICAgICAvLyBwYWRkaW5nXG4gICAgICB3aGlsZSAoYnVmZmVyLmdldExlbmd0aEluQml0cygpICUgOCAhPSAwKSB7XG4gICAgICAgIGJ1ZmZlci5wdXRCaXQoZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICAvLyBwYWRkaW5nXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuXG4gICAgICAgIGlmIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgPj0gdG90YWxEYXRhQ291bnQgKiA4KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgYnVmZmVyLnB1dChQQUQwLCA4KTtcblxuICAgICAgICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpID49IHRvdGFsRGF0YUNvdW50ICogOCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGJ1ZmZlci5wdXQoUEFEMSwgOCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjcmVhdGVCeXRlcyhidWZmZXIsIHJzQmxvY2tzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuYWRkRGF0YSA9IGZ1bmN0aW9uKGRhdGEsIG1vZGUpIHtcblxuICAgICAgbW9kZSA9IG1vZGUgfHwgJ0J5dGUnO1xuXG4gICAgICB2YXIgbmV3RGF0YSA9IG51bGw7XG5cbiAgICAgIHN3aXRjaChtb2RlKSB7XG4gICAgICBjYXNlICdOdW1lcmljJyA6XG4gICAgICAgIG5ld0RhdGEgPSBxck51bWJlcihkYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBbHBoYW51bWVyaWMnIDpcbiAgICAgICAgbmV3RGF0YSA9IHFyQWxwaGFOdW0oZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQnl0ZScgOlxuICAgICAgICBuZXdEYXRhID0gcXI4Qml0Qnl0ZShkYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdLYW5qaScgOlxuICAgICAgICBuZXdEYXRhID0gcXJLYW5qaShkYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0IDpcbiAgICAgICAgdGhyb3cgJ21vZGU6JyArIG1vZGU7XG4gICAgICB9XG5cbiAgICAgIF9kYXRhTGlzdC5wdXNoKG5ld0RhdGEpO1xuICAgICAgX2RhdGFDYWNoZSA9IG51bGw7XG4gICAgfTtcblxuICAgIF90aGlzLmlzRGFyayA9IGZ1bmN0aW9uKHJvdywgY29sKSB7XG4gICAgICBpZiAocm93IDwgMCB8fCBfbW9kdWxlQ291bnQgPD0gcm93IHx8IGNvbCA8IDAgfHwgX21vZHVsZUNvdW50IDw9IGNvbCkge1xuICAgICAgICB0aHJvdyByb3cgKyAnLCcgKyBjb2w7XG4gICAgICB9XG4gICAgICByZXR1cm4gX21vZHVsZXNbcm93XVtjb2xdO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRNb2R1bGVDb3VudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIF9tb2R1bGVDb3VudDtcbiAgICB9O1xuXG4gICAgX3RoaXMubWFrZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKF90eXBlTnVtYmVyIDwgMSkge1xuICAgICAgICB2YXIgdHlwZU51bWJlciA9IDE7XG5cbiAgICAgICAgZm9yICg7IHR5cGVOdW1iZXIgPCA0MDsgdHlwZU51bWJlcisrKSB7XG4gICAgICAgICAgdmFyIHJzQmxvY2tzID0gUVJSU0Jsb2NrLmdldFJTQmxvY2tzKHR5cGVOdW1iZXIsIF9lcnJvckNvcnJlY3Rpb25MZXZlbCk7XG4gICAgICAgICAgdmFyIGJ1ZmZlciA9IHFyQml0QnVmZmVyKCk7XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9kYXRhTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBfZGF0YUxpc3RbaV07XG4gICAgICAgICAgICBidWZmZXIucHV0KGRhdGEuZ2V0TW9kZSgpLCA0KTtcbiAgICAgICAgICAgIGJ1ZmZlci5wdXQoZGF0YS5nZXRMZW5ndGgoKSwgUVJVdGlsLmdldExlbmd0aEluQml0cyhkYXRhLmdldE1vZGUoKSwgdHlwZU51bWJlcikgKTtcbiAgICAgICAgICAgIGRhdGEud3JpdGUoYnVmZmVyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgdG90YWxEYXRhQ291bnQgPSAwO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnNCbG9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRvdGFsRGF0YUNvdW50ICs9IHJzQmxvY2tzW2ldLmRhdGFDb3VudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpIDw9IHRvdGFsRGF0YUNvdW50ICogOCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgX3R5cGVOdW1iZXIgPSB0eXBlTnVtYmVyO1xuICAgICAgfVxuXG4gICAgICBtYWtlSW1wbChmYWxzZSwgZ2V0QmVzdE1hc2tQYXR0ZXJuKCkgKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuY3JlYXRlVGFibGVUYWcgPSBmdW5jdGlvbihjZWxsU2l6ZSwgbWFyZ2luKSB7XG5cbiAgICAgIGNlbGxTaXplID0gY2VsbFNpemUgfHwgMjtcbiAgICAgIG1hcmdpbiA9ICh0eXBlb2YgbWFyZ2luID09ICd1bmRlZmluZWQnKT8gY2VsbFNpemUgKiA0IDogbWFyZ2luO1xuXG4gICAgICB2YXIgcXJIdG1sID0gJyc7XG5cbiAgICAgIHFySHRtbCArPSAnPHRhYmxlIHN0eWxlPVwiJztcbiAgICAgIHFySHRtbCArPSAnIGJvcmRlci13aWR0aDogMHB4OyBib3JkZXItc3R5bGU6IG5vbmU7JztcbiAgICAgIHFySHRtbCArPSAnIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7JztcbiAgICAgIHFySHRtbCArPSAnIHBhZGRpbmc6IDBweDsgbWFyZ2luOiAnICsgbWFyZ2luICsgJ3B4Oyc7XG4gICAgICBxckh0bWwgKz0gJ1wiPic7XG4gICAgICBxckh0bWwgKz0gJzx0Ym9keT4nO1xuXG4gICAgICBmb3IgKHZhciByID0gMDsgciA8IF90aGlzLmdldE1vZHVsZUNvdW50KCk7IHIgKz0gMSkge1xuXG4gICAgICAgIHFySHRtbCArPSAnPHRyPic7XG5cbiAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBfdGhpcy5nZXRNb2R1bGVDb3VudCgpOyBjICs9IDEpIHtcbiAgICAgICAgICBxckh0bWwgKz0gJzx0ZCBzdHlsZT1cIic7XG4gICAgICAgICAgcXJIdG1sICs9ICcgYm9yZGVyLXdpZHRoOiAwcHg7IGJvcmRlci1zdHlsZTogbm9uZTsnO1xuICAgICAgICAgIHFySHRtbCArPSAnIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7JztcbiAgICAgICAgICBxckh0bWwgKz0gJyBwYWRkaW5nOiAwcHg7IG1hcmdpbjogMHB4Oyc7XG4gICAgICAgICAgcXJIdG1sICs9ICcgd2lkdGg6ICcgKyBjZWxsU2l6ZSArICdweDsnO1xuICAgICAgICAgIHFySHRtbCArPSAnIGhlaWdodDogJyArIGNlbGxTaXplICsgJ3B4Oyc7XG4gICAgICAgICAgcXJIdG1sICs9ICcgYmFja2dyb3VuZC1jb2xvcjogJztcbiAgICAgICAgICBxckh0bWwgKz0gX3RoaXMuaXNEYXJrKHIsIGMpPyAnIzAwMDAwMCcgOiAnI2ZmZmZmZic7XG4gICAgICAgICAgcXJIdG1sICs9ICc7JztcbiAgICAgICAgICBxckh0bWwgKz0gJ1wiLz4nO1xuICAgICAgICB9XG5cbiAgICAgICAgcXJIdG1sICs9ICc8L3RyPic7XG4gICAgICB9XG5cbiAgICAgIHFySHRtbCArPSAnPC90Ym9keT4nO1xuICAgICAgcXJIdG1sICs9ICc8L3RhYmxlPic7XG5cbiAgICAgIHJldHVybiBxckh0bWw7XG4gICAgfTtcblxuICAgIF90aGlzLmNyZWF0ZVN2Z1RhZyA9IGZ1bmN0aW9uKGNlbGxTaXplLCBtYXJnaW4sIGFsdCwgdGl0bGUpIHtcblxuICAgICAgdmFyIG9wdHMgPSB7fTtcbiAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIENhbGxlZCBieSBvcHRpb25zLlxuICAgICAgICBvcHRzID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAvLyBvdmVyd3JpdGUgY2VsbFNpemUgYW5kIG1hcmdpbi5cbiAgICAgICAgY2VsbFNpemUgPSBvcHRzLmNlbGxTaXplO1xuICAgICAgICBtYXJnaW4gPSBvcHRzLm1hcmdpbjtcbiAgICAgICAgYWx0ID0gb3B0cy5hbHQ7XG4gICAgICAgIHRpdGxlID0gb3B0cy50aXRsZTtcbiAgICAgIH1cblxuICAgICAgY2VsbFNpemUgPSBjZWxsU2l6ZSB8fCAyO1xuICAgICAgbWFyZ2luID0gKHR5cGVvZiBtYXJnaW4gPT0gJ3VuZGVmaW5lZCcpPyBjZWxsU2l6ZSAqIDQgOiBtYXJnaW47XG5cbiAgICAgIC8vIENvbXBvc2UgYWx0IHByb3BlcnR5IHN1cnJvZ2F0ZVxuICAgICAgYWx0ID0gKHR5cGVvZiBhbHQgPT09ICdzdHJpbmcnKSA/IHt0ZXh0OiBhbHR9IDogYWx0IHx8IHt9O1xuICAgICAgYWx0LnRleHQgPSBhbHQudGV4dCB8fCBudWxsO1xuICAgICAgYWx0LmlkID0gKGFsdC50ZXh0KSA/IGFsdC5pZCB8fCAncXJjb2RlLWRlc2NyaXB0aW9uJyA6IG51bGw7XG5cbiAgICAgIC8vIENvbXBvc2UgdGl0bGUgcHJvcGVydHkgc3Vycm9nYXRlXG4gICAgICB0aXRsZSA9ICh0eXBlb2YgdGl0bGUgPT09ICdzdHJpbmcnKSA/IHt0ZXh0OiB0aXRsZX0gOiB0aXRsZSB8fCB7fTtcbiAgICAgIHRpdGxlLnRleHQgPSB0aXRsZS50ZXh0IHx8IG51bGw7XG4gICAgICB0aXRsZS5pZCA9ICh0aXRsZS50ZXh0KSA/IHRpdGxlLmlkIHx8ICdxcmNvZGUtdGl0bGUnIDogbnVsbDtcblxuICAgICAgdmFyIHNpemUgPSBfdGhpcy5nZXRNb2R1bGVDb3VudCgpICogY2VsbFNpemUgKyBtYXJnaW4gKiAyO1xuICAgICAgdmFyIGMsIG1jLCByLCBtciwgcXJTdmc9JycsIHJlY3Q7XG5cbiAgICAgIHJlY3QgPSAnbCcgKyBjZWxsU2l6ZSArICcsMCAwLCcgKyBjZWxsU2l6ZSArXG4gICAgICAgICcgLScgKyBjZWxsU2l6ZSArICcsMCAwLC0nICsgY2VsbFNpemUgKyAneiAnO1xuXG4gICAgICBxclN2ZyArPSAnPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiJztcbiAgICAgIHFyU3ZnICs9ICFvcHRzLnNjYWxhYmxlID8gJyB3aWR0aD1cIicgKyBzaXplICsgJ3B4XCIgaGVpZ2h0PVwiJyArIHNpemUgKyAncHhcIicgOiAnJztcbiAgICAgIHFyU3ZnICs9ICcgdmlld0JveD1cIjAgMCAnICsgc2l6ZSArICcgJyArIHNpemUgKyAnXCIgJztcbiAgICAgIHFyU3ZnICs9ICcgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaW5ZTWluIG1lZXRcIic7XG4gICAgICBxclN2ZyArPSAodGl0bGUudGV4dCB8fCBhbHQudGV4dCkgPyAnIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsbGVkYnk9XCInICtcbiAgICAgICAgICBlc2NhcGVYbWwoW3RpdGxlLmlkLCBhbHQuaWRdLmpvaW4oJyAnKS50cmltKCkgKSArICdcIicgOiAnJztcbiAgICAgIHFyU3ZnICs9ICc+JztcbiAgICAgIHFyU3ZnICs9ICh0aXRsZS50ZXh0KSA/ICc8dGl0bGUgaWQ9XCInICsgZXNjYXBlWG1sKHRpdGxlLmlkKSArICdcIj4nICtcbiAgICAgICAgICBlc2NhcGVYbWwodGl0bGUudGV4dCkgKyAnPC90aXRsZT4nIDogJyc7XG4gICAgICBxclN2ZyArPSAoYWx0LnRleHQpID8gJzxkZXNjcmlwdGlvbiBpZD1cIicgKyBlc2NhcGVYbWwoYWx0LmlkKSArICdcIj4nICtcbiAgICAgICAgICBlc2NhcGVYbWwoYWx0LnRleHQpICsgJzwvZGVzY3JpcHRpb24+JyA6ICcnO1xuICAgICAgcXJTdmcgKz0gJzxyZWN0IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBmaWxsPVwid2hpdGVcIiBjeD1cIjBcIiBjeT1cIjBcIi8+JztcbiAgICAgIHFyU3ZnICs9ICc8cGF0aCBkPVwiJztcblxuICAgICAgZm9yIChyID0gMDsgciA8IF90aGlzLmdldE1vZHVsZUNvdW50KCk7IHIgKz0gMSkge1xuICAgICAgICBtciA9IHIgKiBjZWxsU2l6ZSArIG1hcmdpbjtcbiAgICAgICAgZm9yIChjID0gMDsgYyA8IF90aGlzLmdldE1vZHVsZUNvdW50KCk7IGMgKz0gMSkge1xuICAgICAgICAgIGlmIChfdGhpcy5pc0RhcmsociwgYykgKSB7XG4gICAgICAgICAgICBtYyA9IGMqY2VsbFNpemUrbWFyZ2luO1xuICAgICAgICAgICAgcXJTdmcgKz0gJ00nICsgbWMgKyAnLCcgKyBtciArIHJlY3Q7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHFyU3ZnICs9ICdcIiBzdHJva2U9XCJ0cmFuc3BhcmVudFwiIGZpbGw9XCJibGFja1wiLz4nO1xuICAgICAgcXJTdmcgKz0gJzwvc3ZnPic7XG5cbiAgICAgIHJldHVybiBxclN2ZztcbiAgICB9O1xuXG4gICAgX3RoaXMuY3JlYXRlRGF0YVVSTCA9IGZ1bmN0aW9uKGNlbGxTaXplLCBtYXJnaW4pIHtcblxuICAgICAgY2VsbFNpemUgPSBjZWxsU2l6ZSB8fCAyO1xuICAgICAgbWFyZ2luID0gKHR5cGVvZiBtYXJnaW4gPT0gJ3VuZGVmaW5lZCcpPyBjZWxsU2l6ZSAqIDQgOiBtYXJnaW47XG5cbiAgICAgIHZhciBzaXplID0gX3RoaXMuZ2V0TW9kdWxlQ291bnQoKSAqIGNlbGxTaXplICsgbWFyZ2luICogMjtcbiAgICAgIHZhciBtaW4gPSBtYXJnaW47XG4gICAgICB2YXIgbWF4ID0gc2l6ZSAtIG1hcmdpbjtcblxuICAgICAgcmV0dXJuIGNyZWF0ZURhdGFVUkwoc2l6ZSwgc2l6ZSwgZnVuY3Rpb24oeCwgeSkge1xuICAgICAgICBpZiAobWluIDw9IHggJiYgeCA8IG1heCAmJiBtaW4gPD0geSAmJiB5IDwgbWF4KSB7XG4gICAgICAgICAgdmFyIGMgPSBNYXRoLmZsb29yKCAoeCAtIG1pbikgLyBjZWxsU2l6ZSk7XG4gICAgICAgICAgdmFyIHIgPSBNYXRoLmZsb29yKCAoeSAtIG1pbikgLyBjZWxsU2l6ZSk7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmlzRGFyayhyLCBjKT8gMCA6IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgIH0gKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuY3JlYXRlSW1nVGFnID0gZnVuY3Rpb24oY2VsbFNpemUsIG1hcmdpbiwgYWx0KSB7XG5cbiAgICAgIGNlbGxTaXplID0gY2VsbFNpemUgfHwgMjtcbiAgICAgIG1hcmdpbiA9ICh0eXBlb2YgbWFyZ2luID09ICd1bmRlZmluZWQnKT8gY2VsbFNpemUgKiA0IDogbWFyZ2luO1xuXG4gICAgICB2YXIgc2l6ZSA9IF90aGlzLmdldE1vZHVsZUNvdW50KCkgKiBjZWxsU2l6ZSArIG1hcmdpbiAqIDI7XG5cbiAgICAgIHZhciBpbWcgPSAnJztcbiAgICAgIGltZyArPSAnPGltZyc7XG4gICAgICBpbWcgKz0gJ1xcdTAwMjBzcmM9XCInO1xuICAgICAgaW1nICs9IF90aGlzLmNyZWF0ZURhdGFVUkwoY2VsbFNpemUsIG1hcmdpbik7XG4gICAgICBpbWcgKz0gJ1wiJztcbiAgICAgIGltZyArPSAnXFx1MDAyMHdpZHRoPVwiJztcbiAgICAgIGltZyArPSBzaXplO1xuICAgICAgaW1nICs9ICdcIic7XG4gICAgICBpbWcgKz0gJ1xcdTAwMjBoZWlnaHQ9XCInO1xuICAgICAgaW1nICs9IHNpemU7XG4gICAgICBpbWcgKz0gJ1wiJztcbiAgICAgIGlmIChhbHQpIHtcbiAgICAgICAgaW1nICs9ICdcXHUwMDIwYWx0PVwiJztcbiAgICAgICAgaW1nICs9IGVzY2FwZVhtbChhbHQpO1xuICAgICAgICBpbWcgKz0gJ1wiJztcbiAgICAgIH1cbiAgICAgIGltZyArPSAnLz4nO1xuXG4gICAgICByZXR1cm4gaW1nO1xuICAgIH07XG5cbiAgICB2YXIgZXNjYXBlWG1sID0gZnVuY3Rpb24ocykge1xuICAgICAgdmFyIGVzY2FwZWQgPSAnJztcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgYyA9IHMuY2hhckF0KGkpO1xuICAgICAgICBzd2l0Y2goYykge1xuICAgICAgICBjYXNlICc8JzogZXNjYXBlZCArPSAnJmx0Oyc7IGJyZWFrO1xuICAgICAgICBjYXNlICc+JzogZXNjYXBlZCArPSAnJmd0Oyc7IGJyZWFrO1xuICAgICAgICBjYXNlICcmJzogZXNjYXBlZCArPSAnJmFtcDsnOyBicmVhaztcbiAgICAgICAgY2FzZSAnXCInOiBlc2NhcGVkICs9ICcmcXVvdDsnOyBicmVhaztcbiAgICAgICAgZGVmYXVsdCA6IGVzY2FwZWQgKz0gYzsgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlc2NhcGVkO1xuICAgIH07XG5cbiAgICB2YXIgX2NyZWF0ZUhhbGZBU0NJSSA9IGZ1bmN0aW9uKG1hcmdpbikge1xuICAgICAgdmFyIGNlbGxTaXplID0gMTtcbiAgICAgIG1hcmdpbiA9ICh0eXBlb2YgbWFyZ2luID09ICd1bmRlZmluZWQnKT8gY2VsbFNpemUgKiAyIDogbWFyZ2luO1xuXG4gICAgICB2YXIgc2l6ZSA9IF90aGlzLmdldE1vZHVsZUNvdW50KCkgKiBjZWxsU2l6ZSArIG1hcmdpbiAqIDI7XG4gICAgICB2YXIgbWluID0gbWFyZ2luO1xuICAgICAgdmFyIG1heCA9IHNpemUgLSBtYXJnaW47XG5cbiAgICAgIHZhciB5LCB4LCByMSwgcjIsIHA7XG5cbiAgICAgIHZhciBibG9ja3MgPSB7XG4gICAgICAgICfilojilognOiAn4paIJyxcbiAgICAgICAgJ+KWiCAnOiAn4paAJyxcbiAgICAgICAgJyDilognOiAn4paEJyxcbiAgICAgICAgJyAgJzogJyAnXG4gICAgICB9O1xuXG4gICAgICB2YXIgYmxvY2tzTGFzdExpbmVOb01hcmdpbiA9IHtcbiAgICAgICAgJ+KWiOKWiCc6ICfiloAnLFxuICAgICAgICAn4paIICc6ICfiloAnLFxuICAgICAgICAnIOKWiCc6ICcgJyxcbiAgICAgICAgJyAgJzogJyAnXG4gICAgICB9O1xuXG4gICAgICB2YXIgYXNjaWkgPSAnJztcbiAgICAgIGZvciAoeSA9IDA7IHkgPCBzaXplOyB5ICs9IDIpIHtcbiAgICAgICAgcjEgPSBNYXRoLmZsb29yKCh5IC0gbWluKSAvIGNlbGxTaXplKTtcbiAgICAgICAgcjIgPSBNYXRoLmZsb29yKCh5ICsgMSAtIG1pbikgLyBjZWxsU2l6ZSk7XG4gICAgICAgIGZvciAoeCA9IDA7IHggPCBzaXplOyB4ICs9IDEpIHtcbiAgICAgICAgICBwID0gJ+KWiCc7XG5cbiAgICAgICAgICBpZiAobWluIDw9IHggJiYgeCA8IG1heCAmJiBtaW4gPD0geSAmJiB5IDwgbWF4ICYmIF90aGlzLmlzRGFyayhyMSwgTWF0aC5mbG9vcigoeCAtIG1pbikgLyBjZWxsU2l6ZSkpKSB7XG4gICAgICAgICAgICBwID0gJyAnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtaW4gPD0geCAmJiB4IDwgbWF4ICYmIG1pbiA8PSB5KzEgJiYgeSsxIDwgbWF4ICYmIF90aGlzLmlzRGFyayhyMiwgTWF0aC5mbG9vcigoeCAtIG1pbikgLyBjZWxsU2l6ZSkpKSB7XG4gICAgICAgICAgICBwICs9ICcgJztcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwICs9ICfilognO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIE91dHB1dCAyIGNoYXJhY3RlcnMgcGVyIHBpeGVsLCB0byBjcmVhdGUgZnVsbCBzcXVhcmUuIDEgY2hhcmFjdGVyIHBlciBwaXhlbHMgZ2l2ZXMgb25seSBoYWxmIHdpZHRoIG9mIHNxdWFyZS5cbiAgICAgICAgICBhc2NpaSArPSAobWFyZ2luIDwgMSAmJiB5KzEgPj0gbWF4KSA/IGJsb2Nrc0xhc3RMaW5lTm9NYXJnaW5bcF0gOiBibG9ja3NbcF07XG4gICAgICAgIH1cblxuICAgICAgICBhc2NpaSArPSAnXFxuJztcbiAgICAgIH1cblxuICAgICAgaWYgKHNpemUgJSAyICYmIG1hcmdpbiA+IDApIHtcbiAgICAgICAgcmV0dXJuIGFzY2lpLnN1YnN0cmluZygwLCBhc2NpaS5sZW5ndGggLSBzaXplIC0gMSkgKyBBcnJheShzaXplKzEpLmpvaW4oJ+KWgCcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXNjaWkuc3Vic3RyaW5nKDAsIGFzY2lpLmxlbmd0aC0xKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuY3JlYXRlQVNDSUkgPSBmdW5jdGlvbihjZWxsU2l6ZSwgbWFyZ2luKSB7XG4gICAgICBjZWxsU2l6ZSA9IGNlbGxTaXplIHx8IDE7XG5cbiAgICAgIGlmIChjZWxsU2l6ZSA8IDIpIHtcbiAgICAgICAgcmV0dXJuIF9jcmVhdGVIYWxmQVNDSUkobWFyZ2luKTtcbiAgICAgIH1cblxuICAgICAgY2VsbFNpemUgLT0gMTtcbiAgICAgIG1hcmdpbiA9ICh0eXBlb2YgbWFyZ2luID09ICd1bmRlZmluZWQnKT8gY2VsbFNpemUgKiAyIDogbWFyZ2luO1xuXG4gICAgICB2YXIgc2l6ZSA9IF90aGlzLmdldE1vZHVsZUNvdW50KCkgKiBjZWxsU2l6ZSArIG1hcmdpbiAqIDI7XG4gICAgICB2YXIgbWluID0gbWFyZ2luO1xuICAgICAgdmFyIG1heCA9IHNpemUgLSBtYXJnaW47XG5cbiAgICAgIHZhciB5LCB4LCByLCBwO1xuXG4gICAgICB2YXIgd2hpdGUgPSBBcnJheShjZWxsU2l6ZSsxKS5qb2luKCfilojilognKTtcbiAgICAgIHZhciBibGFjayA9IEFycmF5KGNlbGxTaXplKzEpLmpvaW4oJyAgJyk7XG5cbiAgICAgIHZhciBhc2NpaSA9ICcnO1xuICAgICAgdmFyIGxpbmUgPSAnJztcbiAgICAgIGZvciAoeSA9IDA7IHkgPCBzaXplOyB5ICs9IDEpIHtcbiAgICAgICAgciA9IE1hdGguZmxvb3IoICh5IC0gbWluKSAvIGNlbGxTaXplKTtcbiAgICAgICAgbGluZSA9ICcnO1xuICAgICAgICBmb3IgKHggPSAwOyB4IDwgc2l6ZTsgeCArPSAxKSB7XG4gICAgICAgICAgcCA9IDE7XG5cbiAgICAgICAgICBpZiAobWluIDw9IHggJiYgeCA8IG1heCAmJiBtaW4gPD0geSAmJiB5IDwgbWF4ICYmIF90aGlzLmlzRGFyayhyLCBNYXRoLmZsb29yKCh4IC0gbWluKSAvIGNlbGxTaXplKSkpIHtcbiAgICAgICAgICAgIHAgPSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIE91dHB1dCAyIGNoYXJhY3RlcnMgcGVyIHBpeGVsLCB0byBjcmVhdGUgZnVsbCBzcXVhcmUuIDEgY2hhcmFjdGVyIHBlciBwaXhlbHMgZ2l2ZXMgb25seSBoYWxmIHdpZHRoIG9mIHNxdWFyZS5cbiAgICAgICAgICBsaW5lICs9IHAgPyB3aGl0ZSA6IGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChyID0gMDsgciA8IGNlbGxTaXplOyByICs9IDEpIHtcbiAgICAgICAgICBhc2NpaSArPSBsaW5lICsgJ1xcbic7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFzY2lpLnN1YnN0cmluZygwLCBhc2NpaS5sZW5ndGgtMSk7XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlclRvMmRDb250ZXh0ID0gZnVuY3Rpb24oY29udGV4dCwgY2VsbFNpemUpIHtcbiAgICAgIGNlbGxTaXplID0gY2VsbFNpemUgfHwgMjtcbiAgICAgIHZhciBsZW5ndGggPSBfdGhpcy5nZXRNb2R1bGVDb3VudCgpO1xuICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgbGVuZ3RoOyByb3crKykge1xuICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBsZW5ndGg7IGNvbCsrKSB7XG4gICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBfdGhpcy5pc0Rhcmsocm93LCBjb2wpID8gJ2JsYWNrJyA6ICd3aGl0ZSc7XG4gICAgICAgICAgY29udGV4dC5maWxsUmVjdChyb3cgKiBjZWxsU2l6ZSwgY29sICogY2VsbFNpemUsIGNlbGxTaXplLCBjZWxsU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH07XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcXJjb2RlLnN0cmluZ1RvQnl0ZXNcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBxcmNvZGUuc3RyaW5nVG9CeXRlc0Z1bmNzID0ge1xuICAgICdkZWZhdWx0JyA6IGZ1bmN0aW9uKHMpIHtcbiAgICAgIHZhciBieXRlcyA9IFtdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBjID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBieXRlcy5wdXNoKGMgJiAweGZmKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9XG4gIH07XG5cbiAgcXJjb2RlLnN0cmluZ1RvQnl0ZXMgPSBxcmNvZGUuc3RyaW5nVG9CeXRlc0Z1bmNzWydkZWZhdWx0J107XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcXJjb2RlLmNyZWF0ZVN0cmluZ1RvQnl0ZXNcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogQHBhcmFtIHVuaWNvZGVEYXRhIGJhc2U2NCBzdHJpbmcgb2YgYnl0ZSBhcnJheS5cbiAgICogWzE2Yml0IFVuaWNvZGVdLFsxNmJpdCBCeXRlc10sIC4uLlxuICAgKiBAcGFyYW0gbnVtQ2hhcnNcbiAgICovXG4gIHFyY29kZS5jcmVhdGVTdHJpbmdUb0J5dGVzID0gZnVuY3Rpb24odW5pY29kZURhdGEsIG51bUNoYXJzKSB7XG5cbiAgICAvLyBjcmVhdGUgY29udmVyc2lvbiBtYXAuXG5cbiAgICB2YXIgdW5pY29kZU1hcCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgYmluID0gYmFzZTY0RGVjb2RlSW5wdXRTdHJlYW0odW5pY29kZURhdGEpO1xuICAgICAgdmFyIHJlYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGIgPSBiaW4ucmVhZCgpO1xuICAgICAgICBpZiAoYiA9PSAtMSkgdGhyb3cgJ2VvZic7XG4gICAgICAgIHJldHVybiBiO1xuICAgICAgfTtcblxuICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgIHZhciB1bmljb2RlTWFwID0ge307XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgYjAgPSBiaW4ucmVhZCgpO1xuICAgICAgICBpZiAoYjAgPT0gLTEpIGJyZWFrO1xuICAgICAgICB2YXIgYjEgPSByZWFkKCk7XG4gICAgICAgIHZhciBiMiA9IHJlYWQoKTtcbiAgICAgICAgdmFyIGIzID0gcmVhZCgpO1xuICAgICAgICB2YXIgayA9IFN0cmluZy5mcm9tQ2hhckNvZGUoIChiMCA8PCA4KSB8IGIxKTtcbiAgICAgICAgdmFyIHYgPSAoYjIgPDwgOCkgfCBiMztcbiAgICAgICAgdW5pY29kZU1hcFtrXSA9IHY7XG4gICAgICAgIGNvdW50ICs9IDE7XG4gICAgICB9XG4gICAgICBpZiAoY291bnQgIT0gbnVtQ2hhcnMpIHtcbiAgICAgICAgdGhyb3cgY291bnQgKyAnICE9ICcgKyBudW1DaGFycztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuaWNvZGVNYXA7XG4gICAgfSgpO1xuXG4gICAgdmFyIHVua25vd25DaGFyID0gJz8nLmNoYXJDb2RlQXQoMCk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24ocykge1xuICAgICAgdmFyIGJ5dGVzID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGMgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjIDwgMTI4KSB7XG4gICAgICAgICAgYnl0ZXMucHVzaChjKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgYiA9IHVuaWNvZGVNYXBbcy5jaGFyQXQoaSldO1xuICAgICAgICAgIGlmICh0eXBlb2YgYiA9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaWYgKCAoYiAmIDB4ZmYpID09IGIpIHtcbiAgICAgICAgICAgICAgLy8gMWJ5dGVcbiAgICAgICAgICAgICAgYnl0ZXMucHVzaChiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIDJieXRlc1xuICAgICAgICAgICAgICBieXRlcy5wdXNoKGIgPj4+IDgpO1xuICAgICAgICAgICAgICBieXRlcy5wdXNoKGIgJiAweGZmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnl0ZXMucHVzaCh1bmtub3duQ2hhcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfTtcbiAgfTtcblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBRUk1vZGVcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICB2YXIgUVJNb2RlID0ge1xuICAgIE1PREVfTlVNQkVSIDogICAgMSA8PCAwLFxuICAgIE1PREVfQUxQSEFfTlVNIDogMSA8PCAxLFxuICAgIE1PREVfOEJJVF9CWVRFIDogMSA8PCAyLFxuICAgIE1PREVfS0FOSkkgOiAgICAgMSA8PCAzXG4gIH07XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUVJFcnJvckNvcnJlY3Rpb25MZXZlbFxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHZhciBRUkVycm9yQ29ycmVjdGlvbkxldmVsID0ge1xuICAgIEwgOiAxLFxuICAgIE0gOiAwLFxuICAgIFEgOiAzLFxuICAgIEggOiAyXG4gIH07XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUVJNYXNrUGF0dGVyblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHZhciBRUk1hc2tQYXR0ZXJuID0ge1xuICAgIFBBVFRFUk4wMDAgOiAwLFxuICAgIFBBVFRFUk4wMDEgOiAxLFxuICAgIFBBVFRFUk4wMTAgOiAyLFxuICAgIFBBVFRFUk4wMTEgOiAzLFxuICAgIFBBVFRFUk4xMDAgOiA0LFxuICAgIFBBVFRFUk4xMDEgOiA1LFxuICAgIFBBVFRFUk4xMTAgOiA2LFxuICAgIFBBVFRFUk4xMTEgOiA3XG4gIH07XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUVJVdGlsXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgdmFyIFFSVXRpbCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIFBBVFRFUk5fUE9TSVRJT05fVEFCTEUgPSBbXG4gICAgICBbXSxcbiAgICAgIFs2LCAxOF0sXG4gICAgICBbNiwgMjJdLFxuICAgICAgWzYsIDI2XSxcbiAgICAgIFs2LCAzMF0sXG4gICAgICBbNiwgMzRdLFxuICAgICAgWzYsIDIyLCAzOF0sXG4gICAgICBbNiwgMjQsIDQyXSxcbiAgICAgIFs2LCAyNiwgNDZdLFxuICAgICAgWzYsIDI4LCA1MF0sXG4gICAgICBbNiwgMzAsIDU0XSxcbiAgICAgIFs2LCAzMiwgNThdLFxuICAgICAgWzYsIDM0LCA2Ml0sXG4gICAgICBbNiwgMjYsIDQ2LCA2Nl0sXG4gICAgICBbNiwgMjYsIDQ4LCA3MF0sXG4gICAgICBbNiwgMjYsIDUwLCA3NF0sXG4gICAgICBbNiwgMzAsIDU0LCA3OF0sXG4gICAgICBbNiwgMzAsIDU2LCA4Ml0sXG4gICAgICBbNiwgMzAsIDU4LCA4Nl0sXG4gICAgICBbNiwgMzQsIDYyLCA5MF0sXG4gICAgICBbNiwgMjgsIDUwLCA3MiwgOTRdLFxuICAgICAgWzYsIDI2LCA1MCwgNzQsIDk4XSxcbiAgICAgIFs2LCAzMCwgNTQsIDc4LCAxMDJdLFxuICAgICAgWzYsIDI4LCA1NCwgODAsIDEwNl0sXG4gICAgICBbNiwgMzIsIDU4LCA4NCwgMTEwXSxcbiAgICAgIFs2LCAzMCwgNTgsIDg2LCAxMTRdLFxuICAgICAgWzYsIDM0LCA2MiwgOTAsIDExOF0sXG4gICAgICBbNiwgMjYsIDUwLCA3NCwgOTgsIDEyMl0sXG4gICAgICBbNiwgMzAsIDU0LCA3OCwgMTAyLCAxMjZdLFxuICAgICAgWzYsIDI2LCA1MiwgNzgsIDEwNCwgMTMwXSxcbiAgICAgIFs2LCAzMCwgNTYsIDgyLCAxMDgsIDEzNF0sXG4gICAgICBbNiwgMzQsIDYwLCA4NiwgMTEyLCAxMzhdLFxuICAgICAgWzYsIDMwLCA1OCwgODYsIDExNCwgMTQyXSxcbiAgICAgIFs2LCAzNCwgNjIsIDkwLCAxMTgsIDE0Nl0sXG4gICAgICBbNiwgMzAsIDU0LCA3OCwgMTAyLCAxMjYsIDE1MF0sXG4gICAgICBbNiwgMjQsIDUwLCA3NiwgMTAyLCAxMjgsIDE1NF0sXG4gICAgICBbNiwgMjgsIDU0LCA4MCwgMTA2LCAxMzIsIDE1OF0sXG4gICAgICBbNiwgMzIsIDU4LCA4NCwgMTEwLCAxMzYsIDE2Ml0sXG4gICAgICBbNiwgMjYsIDU0LCA4MiwgMTEwLCAxMzgsIDE2Nl0sXG4gICAgICBbNiwgMzAsIDU4LCA4NiwgMTE0LCAxNDIsIDE3MF1cbiAgICBdO1xuICAgIHZhciBHMTUgPSAoMSA8PCAxMCkgfCAoMSA8PCA4KSB8ICgxIDw8IDUpIHwgKDEgPDwgNCkgfCAoMSA8PCAyKSB8ICgxIDw8IDEpIHwgKDEgPDwgMCk7XG4gICAgdmFyIEcxOCA9ICgxIDw8IDEyKSB8ICgxIDw8IDExKSB8ICgxIDw8IDEwKSB8ICgxIDw8IDkpIHwgKDEgPDwgOCkgfCAoMSA8PCA1KSB8ICgxIDw8IDIpIHwgKDEgPDwgMCk7XG4gICAgdmFyIEcxNV9NQVNLID0gKDEgPDwgMTQpIHwgKDEgPDwgMTIpIHwgKDEgPDwgMTApIHwgKDEgPDwgNCkgfCAoMSA8PCAxKTtcblxuICAgIHZhciBfdGhpcyA9IHt9O1xuXG4gICAgdmFyIGdldEJDSERpZ2l0ID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgdmFyIGRpZ2l0ID0gMDtcbiAgICAgIHdoaWxlIChkYXRhICE9IDApIHtcbiAgICAgICAgZGlnaXQgKz0gMTtcbiAgICAgICAgZGF0YSA+Pj49IDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGlnaXQ7XG4gICAgfTtcblxuICAgIF90aGlzLmdldEJDSFR5cGVJbmZvID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgdmFyIGQgPSBkYXRhIDw8IDEwO1xuICAgICAgd2hpbGUgKGdldEJDSERpZ2l0KGQpIC0gZ2V0QkNIRGlnaXQoRzE1KSA+PSAwKSB7XG4gICAgICAgIGQgXj0gKEcxNSA8PCAoZ2V0QkNIRGlnaXQoZCkgLSBnZXRCQ0hEaWdpdChHMTUpICkgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoIChkYXRhIDw8IDEwKSB8IGQpIF4gRzE1X01BU0s7XG4gICAgfTtcblxuICAgIF90aGlzLmdldEJDSFR5cGVOdW1iZXIgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICB2YXIgZCA9IGRhdGEgPDwgMTI7XG4gICAgICB3aGlsZSAoZ2V0QkNIRGlnaXQoZCkgLSBnZXRCQ0hEaWdpdChHMTgpID49IDApIHtcbiAgICAgICAgZCBePSAoRzE4IDw8IChnZXRCQ0hEaWdpdChkKSAtIGdldEJDSERpZ2l0KEcxOCkgKSApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChkYXRhIDw8IDEyKSB8IGQ7XG4gICAgfTtcblxuICAgIF90aGlzLmdldFBhdHRlcm5Qb3NpdGlvbiA9IGZ1bmN0aW9uKHR5cGVOdW1iZXIpIHtcbiAgICAgIHJldHVybiBQQVRURVJOX1BPU0lUSU9OX1RBQkxFW3R5cGVOdW1iZXIgLSAxXTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0TWFza0Z1bmN0aW9uID0gZnVuY3Rpb24obWFza1BhdHRlcm4pIHtcblxuICAgICAgc3dpdGNoIChtYXNrUGF0dGVybikge1xuXG4gICAgICBjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjAwMCA6XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihpLCBqKSB7IHJldHVybiAoaSArIGopICUgMiA9PSAwOyB9O1xuICAgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4wMDEgOlxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oaSwgaikgeyByZXR1cm4gaSAlIDIgPT0gMDsgfTtcbiAgICAgIGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMDEwIDpcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGksIGopIHsgcmV0dXJuIGogJSAzID09IDA7IH07XG4gICAgICBjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjAxMSA6XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihpLCBqKSB7IHJldHVybiAoaSArIGopICUgMyA9PSAwOyB9O1xuICAgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4xMDAgOlxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oaSwgaikgeyByZXR1cm4gKE1hdGguZmxvb3IoaSAvIDIpICsgTWF0aC5mbG9vcihqIC8gMykgKSAlIDIgPT0gMDsgfTtcbiAgICAgIGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMTAxIDpcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGksIGopIHsgcmV0dXJuIChpICogaikgJSAyICsgKGkgKiBqKSAlIDMgPT0gMDsgfTtcbiAgICAgIGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMTEwIDpcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGksIGopIHsgcmV0dXJuICggKGkgKiBqKSAlIDIgKyAoaSAqIGopICUgMykgJSAyID09IDA7IH07XG4gICAgICBjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjExMSA6XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihpLCBqKSB7IHJldHVybiAoIChpICogaikgJSAzICsgKGkgKyBqKSAlIDIpICUgMiA9PSAwOyB9O1xuXG4gICAgICBkZWZhdWx0IDpcbiAgICAgICAgdGhyb3cgJ2JhZCBtYXNrUGF0dGVybjonICsgbWFza1BhdHRlcm47XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmdldEVycm9yQ29ycmVjdFBvbHlub21pYWwgPSBmdW5jdGlvbihlcnJvckNvcnJlY3RMZW5ndGgpIHtcbiAgICAgIHZhciBhID0gcXJQb2x5bm9taWFsKFsxXSwgMCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVycm9yQ29ycmVjdExlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGEgPSBhLm11bHRpcGx5KHFyUG9seW5vbWlhbChbMSwgUVJNYXRoLmdleHAoaSldLCAwKSApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGE7XG4gICAgfTtcblxuICAgIF90aGlzLmdldExlbmd0aEluQml0cyA9IGZ1bmN0aW9uKG1vZGUsIHR5cGUpIHtcblxuICAgICAgaWYgKDEgPD0gdHlwZSAmJiB0eXBlIDwgMTApIHtcblxuICAgICAgICAvLyAxIC0gOVxuXG4gICAgICAgIHN3aXRjaChtb2RlKSB7XG4gICAgICAgIGNhc2UgUVJNb2RlLk1PREVfTlVNQkVSICAgIDogcmV0dXJuIDEwO1xuICAgICAgICBjYXNlIFFSTW9kZS5NT0RFX0FMUEhBX05VTSA6IHJldHVybiA5O1xuICAgICAgICBjYXNlIFFSTW9kZS5NT0RFXzhCSVRfQllURSA6IHJldHVybiA4O1xuICAgICAgICBjYXNlIFFSTW9kZS5NT0RFX0tBTkpJICAgICA6IHJldHVybiA4O1xuICAgICAgICBkZWZhdWx0IDpcbiAgICAgICAgICB0aHJvdyAnbW9kZTonICsgbW9kZTtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPCAyNykge1xuXG4gICAgICAgIC8vIDEwIC0gMjZcblxuICAgICAgICBzd2l0Y2gobW9kZSkge1xuICAgICAgICBjYXNlIFFSTW9kZS5NT0RFX05VTUJFUiAgICA6IHJldHVybiAxMjtcbiAgICAgICAgY2FzZSBRUk1vZGUuTU9ERV9BTFBIQV9OVU0gOiByZXR1cm4gMTE7XG4gICAgICAgIGNhc2UgUVJNb2RlLk1PREVfOEJJVF9CWVRFIDogcmV0dXJuIDE2O1xuICAgICAgICBjYXNlIFFSTW9kZS5NT0RFX0tBTkpJICAgICA6IHJldHVybiAxMDtcbiAgICAgICAgZGVmYXVsdCA6XG4gICAgICAgICAgdGhyb3cgJ21vZGU6JyArIG1vZGU7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmICh0eXBlIDwgNDEpIHtcblxuICAgICAgICAvLyAyNyAtIDQwXG5cbiAgICAgICAgc3dpdGNoKG1vZGUpIHtcbiAgICAgICAgY2FzZSBRUk1vZGUuTU9ERV9OVU1CRVIgICAgOiByZXR1cm4gMTQ7XG4gICAgICAgIGNhc2UgUVJNb2RlLk1PREVfQUxQSEFfTlVNIDogcmV0dXJuIDEzO1xuICAgICAgICBjYXNlIFFSTW9kZS5NT0RFXzhCSVRfQllURSA6IHJldHVybiAxNjtcbiAgICAgICAgY2FzZSBRUk1vZGUuTU9ERV9LQU5KSSAgICAgOiByZXR1cm4gMTI7XG4gICAgICAgIGRlZmF1bHQgOlxuICAgICAgICAgIHRocm93ICdtb2RlOicgKyBtb2RlO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93ICd0eXBlOicgKyB0eXBlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5nZXRMb3N0UG9pbnQgPSBmdW5jdGlvbihxcmNvZGUpIHtcblxuICAgICAgdmFyIG1vZHVsZUNvdW50ID0gcXJjb2RlLmdldE1vZHVsZUNvdW50KCk7XG5cbiAgICAgIHZhciBsb3N0UG9pbnQgPSAwO1xuXG4gICAgICAvLyBMRVZFTDFcblxuICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQ7IHJvdyArPSAxKSB7XG4gICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50OyBjb2wgKz0gMSkge1xuXG4gICAgICAgICAgdmFyIHNhbWVDb3VudCA9IDA7XG4gICAgICAgICAgdmFyIGRhcmsgPSBxcmNvZGUuaXNEYXJrKHJvdywgY29sKTtcblxuICAgICAgICAgIGZvciAodmFyIHIgPSAtMTsgciA8PSAxOyByICs9IDEpIHtcblxuICAgICAgICAgICAgaWYgKHJvdyArIHIgPCAwIHx8IG1vZHVsZUNvdW50IDw9IHJvdyArIHIpIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAodmFyIGMgPSAtMTsgYyA8PSAxOyBjICs9IDEpIHtcblxuICAgICAgICAgICAgICBpZiAoY29sICsgYyA8IDAgfHwgbW9kdWxlQ291bnQgPD0gY29sICsgYykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHIgPT0gMCAmJiBjID09IDApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChkYXJrID09IHFyY29kZS5pc0Rhcmsocm93ICsgciwgY29sICsgYykgKSB7XG4gICAgICAgICAgICAgICAgc2FtZUNvdW50ICs9IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2FtZUNvdW50ID4gNSkge1xuICAgICAgICAgICAgbG9zdFBvaW50ICs9ICgzICsgc2FtZUNvdW50IC0gNSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAvLyBMRVZFTDJcblxuICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQgLSAxOyByb3cgKz0gMSkge1xuICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudCAtIDE7IGNvbCArPSAxKSB7XG4gICAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICAgICBpZiAocXJjb2RlLmlzRGFyayhyb3csIGNvbCkgKSBjb3VudCArPSAxO1xuICAgICAgICAgIGlmIChxcmNvZGUuaXNEYXJrKHJvdyArIDEsIGNvbCkgKSBjb3VudCArPSAxO1xuICAgICAgICAgIGlmIChxcmNvZGUuaXNEYXJrKHJvdywgY29sICsgMSkgKSBjb3VudCArPSAxO1xuICAgICAgICAgIGlmIChxcmNvZGUuaXNEYXJrKHJvdyArIDEsIGNvbCArIDEpICkgY291bnQgKz0gMTtcbiAgICAgICAgICBpZiAoY291bnQgPT0gMCB8fCBjb3VudCA9PSA0KSB7XG4gICAgICAgICAgICBsb3N0UG9pbnQgKz0gMztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTEVWRUwzXG5cbiAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50OyByb3cgKz0gMSkge1xuICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudCAtIDY7IGNvbCArPSAxKSB7XG4gICAgICAgICAgaWYgKHFyY29kZS5pc0Rhcmsocm93LCBjb2wpXG4gICAgICAgICAgICAgICYmICFxcmNvZGUuaXNEYXJrKHJvdywgY29sICsgMSlcbiAgICAgICAgICAgICAgJiYgIHFyY29kZS5pc0Rhcmsocm93LCBjb2wgKyAyKVxuICAgICAgICAgICAgICAmJiAgcXJjb2RlLmlzRGFyayhyb3csIGNvbCArIDMpXG4gICAgICAgICAgICAgICYmICBxcmNvZGUuaXNEYXJrKHJvdywgY29sICsgNClcbiAgICAgICAgICAgICAgJiYgIXFyY29kZS5pc0Rhcmsocm93LCBjb2wgKyA1KVxuICAgICAgICAgICAgICAmJiAgcXJjb2RlLmlzRGFyayhyb3csIGNvbCArIDYpICkge1xuICAgICAgICAgICAgbG9zdFBvaW50ICs9IDQwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudDsgY29sICs9IDEpIHtcbiAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQgLSA2OyByb3cgKz0gMSkge1xuICAgICAgICAgIGlmIChxcmNvZGUuaXNEYXJrKHJvdywgY29sKVxuICAgICAgICAgICAgICAmJiAhcXJjb2RlLmlzRGFyayhyb3cgKyAxLCBjb2wpXG4gICAgICAgICAgICAgICYmICBxcmNvZGUuaXNEYXJrKHJvdyArIDIsIGNvbClcbiAgICAgICAgICAgICAgJiYgIHFyY29kZS5pc0Rhcmsocm93ICsgMywgY29sKVxuICAgICAgICAgICAgICAmJiAgcXJjb2RlLmlzRGFyayhyb3cgKyA0LCBjb2wpXG4gICAgICAgICAgICAgICYmICFxcmNvZGUuaXNEYXJrKHJvdyArIDUsIGNvbClcbiAgICAgICAgICAgICAgJiYgIHFyY29kZS5pc0Rhcmsocm93ICsgNiwgY29sKSApIHtcbiAgICAgICAgICAgIGxvc3RQb2ludCArPSA0MDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTEVWRUw0XG5cbiAgICAgIHZhciBkYXJrQ291bnQgPSAwO1xuXG4gICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudDsgY29sICs9IDEpIHtcbiAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQ7IHJvdyArPSAxKSB7XG4gICAgICAgICAgaWYgKHFyY29kZS5pc0Rhcmsocm93LCBjb2wpICkge1xuICAgICAgICAgICAgZGFya0NvdW50ICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciByYXRpbyA9IE1hdGguYWJzKDEwMCAqIGRhcmtDb3VudCAvIG1vZHVsZUNvdW50IC8gbW9kdWxlQ291bnQgLSA1MCkgLyA1O1xuICAgICAgbG9zdFBvaW50ICs9IHJhdGlvICogMTA7XG5cbiAgICAgIHJldHVybiBsb3N0UG9pbnQ7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfSgpO1xuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFFSTWF0aFxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHZhciBRUk1hdGggPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBFWFBfVEFCTEUgPSBuZXcgQXJyYXkoMjU2KTtcbiAgICB2YXIgTE9HX1RBQkxFID0gbmV3IEFycmF5KDI1Nik7XG5cbiAgICAvLyBpbml0aWFsaXplIHRhYmxlc1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSArPSAxKSB7XG4gICAgICBFWFBfVEFCTEVbaV0gPSAxIDw8IGk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSA4OyBpIDwgMjU2OyBpICs9IDEpIHtcbiAgICAgIEVYUF9UQUJMRVtpXSA9IEVYUF9UQUJMRVtpIC0gNF1cbiAgICAgICAgXiBFWFBfVEFCTEVbaSAtIDVdXG4gICAgICAgIF4gRVhQX1RBQkxFW2kgLSA2XVxuICAgICAgICBeIEVYUF9UQUJMRVtpIC0gOF07XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjU1OyBpICs9IDEpIHtcbiAgICAgIExPR19UQUJMRVtFWFBfVEFCTEVbaV0gXSA9IGk7XG4gICAgfVxuXG4gICAgdmFyIF90aGlzID0ge307XG5cbiAgICBfdGhpcy5nbG9nID0gZnVuY3Rpb24obikge1xuXG4gICAgICBpZiAobiA8IDEpIHtcbiAgICAgICAgdGhyb3cgJ2dsb2coJyArIG4gKyAnKSc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBMT0dfVEFCTEVbbl07XG4gICAgfTtcblxuICAgIF90aGlzLmdleHAgPSBmdW5jdGlvbihuKSB7XG5cbiAgICAgIHdoaWxlIChuIDwgMCkge1xuICAgICAgICBuICs9IDI1NTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKG4gPj0gMjU2KSB7XG4gICAgICAgIG4gLT0gMjU1O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gRVhQX1RBQkxFW25dO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH0oKTtcblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBxclBvbHlub21pYWxcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBmdW5jdGlvbiBxclBvbHlub21pYWwobnVtLCBzaGlmdCkge1xuXG4gICAgaWYgKHR5cGVvZiBudW0ubGVuZ3RoID09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBudW0ubGVuZ3RoICsgJy8nICsgc2hpZnQ7XG4gICAgfVxuXG4gICAgdmFyIF9udW0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvZmZzZXQgPSAwO1xuICAgICAgd2hpbGUgKG9mZnNldCA8IG51bS5sZW5ndGggJiYgbnVtW29mZnNldF0gPT0gMCkge1xuICAgICAgICBvZmZzZXQgKz0gMTtcbiAgICAgIH1cbiAgICAgIHZhciBfbnVtID0gbmV3IEFycmF5KG51bS5sZW5ndGggLSBvZmZzZXQgKyBzaGlmdCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bS5sZW5ndGggLSBvZmZzZXQ7IGkgKz0gMSkge1xuICAgICAgICBfbnVtW2ldID0gbnVtW2kgKyBvZmZzZXRdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9udW07XG4gICAgfSgpO1xuXG4gICAgdmFyIF90aGlzID0ge307XG5cbiAgICBfdGhpcy5nZXRBdCA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICByZXR1cm4gX251bVtpbmRleF07XG4gICAgfTtcblxuICAgIF90aGlzLmdldExlbmd0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIF9udW0ubGVuZ3RoO1xuICAgIH07XG5cbiAgICBfdGhpcy5tdWx0aXBseSA9IGZ1bmN0aW9uKGUpIHtcblxuICAgICAgdmFyIG51bSA9IG5ldyBBcnJheShfdGhpcy5nZXRMZW5ndGgoKSArIGUuZ2V0TGVuZ3RoKCkgLSAxKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfdGhpcy5nZXRMZW5ndGgoKTsgaSArPSAxKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZS5nZXRMZW5ndGgoKTsgaiArPSAxKSB7XG4gICAgICAgICAgbnVtW2kgKyBqXSBePSBRUk1hdGguZ2V4cChRUk1hdGguZ2xvZyhfdGhpcy5nZXRBdChpKSApICsgUVJNYXRoLmdsb2coZS5nZXRBdChqKSApICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHFyUG9seW5vbWlhbChudW0sIDApO1xuICAgIH07XG5cbiAgICBfdGhpcy5tb2QgPSBmdW5jdGlvbihlKSB7XG5cbiAgICAgIGlmIChfdGhpcy5nZXRMZW5ndGgoKSAtIGUuZ2V0TGVuZ3RoKCkgPCAwKSB7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIHJhdGlvID0gUVJNYXRoLmdsb2coX3RoaXMuZ2V0QXQoMCkgKSAtIFFSTWF0aC5nbG9nKGUuZ2V0QXQoMCkgKTtcblxuICAgICAgdmFyIG51bSA9IG5ldyBBcnJheShfdGhpcy5nZXRMZW5ndGgoKSApO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfdGhpcy5nZXRMZW5ndGgoKTsgaSArPSAxKSB7XG4gICAgICAgIG51bVtpXSA9IF90aGlzLmdldEF0KGkpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGUuZ2V0TGVuZ3RoKCk7IGkgKz0gMSkge1xuICAgICAgICBudW1baV0gXj0gUVJNYXRoLmdleHAoUVJNYXRoLmdsb2coZS5nZXRBdChpKSApICsgcmF0aW8pO1xuICAgICAgfVxuXG4gICAgICAvLyByZWN1cnNpdmUgY2FsbFxuICAgICAgcmV0dXJuIHFyUG9seW5vbWlhbChudW0sIDApLm1vZChlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9O1xuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFFSUlNCbG9ja1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHZhciBRUlJTQmxvY2sgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBSU19CTE9DS19UQUJMRSA9IFtcblxuICAgICAgLy8gTFxuICAgICAgLy8gTVxuICAgICAgLy8gUVxuICAgICAgLy8gSFxuXG4gICAgICAvLyAxXG4gICAgICBbMSwgMjYsIDE5XSxcbiAgICAgIFsxLCAyNiwgMTZdLFxuICAgICAgWzEsIDI2LCAxM10sXG4gICAgICBbMSwgMjYsIDldLFxuXG4gICAgICAvLyAyXG4gICAgICBbMSwgNDQsIDM0XSxcbiAgICAgIFsxLCA0NCwgMjhdLFxuICAgICAgWzEsIDQ0LCAyMl0sXG4gICAgICBbMSwgNDQsIDE2XSxcblxuICAgICAgLy8gM1xuICAgICAgWzEsIDcwLCA1NV0sXG4gICAgICBbMSwgNzAsIDQ0XSxcbiAgICAgIFsyLCAzNSwgMTddLFxuICAgICAgWzIsIDM1LCAxM10sXG5cbiAgICAgIC8vIDRcbiAgICAgIFsxLCAxMDAsIDgwXSxcbiAgICAgIFsyLCA1MCwgMzJdLFxuICAgICAgWzIsIDUwLCAyNF0sXG4gICAgICBbNCwgMjUsIDldLFxuXG4gICAgICAvLyA1XG4gICAgICBbMSwgMTM0LCAxMDhdLFxuICAgICAgWzIsIDY3LCA0M10sXG4gICAgICBbMiwgMzMsIDE1LCAyLCAzNCwgMTZdLFxuICAgICAgWzIsIDMzLCAxMSwgMiwgMzQsIDEyXSxcblxuICAgICAgLy8gNlxuICAgICAgWzIsIDg2LCA2OF0sXG4gICAgICBbNCwgNDMsIDI3XSxcbiAgICAgIFs0LCA0MywgMTldLFxuICAgICAgWzQsIDQzLCAxNV0sXG5cbiAgICAgIC8vIDdcbiAgICAgIFsyLCA5OCwgNzhdLFxuICAgICAgWzQsIDQ5LCAzMV0sXG4gICAgICBbMiwgMzIsIDE0LCA0LCAzMywgMTVdLFxuICAgICAgWzQsIDM5LCAxMywgMSwgNDAsIDE0XSxcblxuICAgICAgLy8gOFxuICAgICAgWzIsIDEyMSwgOTddLFxuICAgICAgWzIsIDYwLCAzOCwgMiwgNjEsIDM5XSxcbiAgICAgIFs0LCA0MCwgMTgsIDIsIDQxLCAxOV0sXG4gICAgICBbNCwgNDAsIDE0LCAyLCA0MSwgMTVdLFxuXG4gICAgICAvLyA5XG4gICAgICBbMiwgMTQ2LCAxMTZdLFxuICAgICAgWzMsIDU4LCAzNiwgMiwgNTksIDM3XSxcbiAgICAgIFs0LCAzNiwgMTYsIDQsIDM3LCAxN10sXG4gICAgICBbNCwgMzYsIDEyLCA0LCAzNywgMTNdLFxuXG4gICAgICAvLyAxMFxuICAgICAgWzIsIDg2LCA2OCwgMiwgODcsIDY5XSxcbiAgICAgIFs0LCA2OSwgNDMsIDEsIDcwLCA0NF0sXG4gICAgICBbNiwgNDMsIDE5LCAyLCA0NCwgMjBdLFxuICAgICAgWzYsIDQzLCAxNSwgMiwgNDQsIDE2XSxcblxuICAgICAgLy8gMTFcbiAgICAgIFs0LCAxMDEsIDgxXSxcbiAgICAgIFsxLCA4MCwgNTAsIDQsIDgxLCA1MV0sXG4gICAgICBbNCwgNTAsIDIyLCA0LCA1MSwgMjNdLFxuICAgICAgWzMsIDM2LCAxMiwgOCwgMzcsIDEzXSxcblxuICAgICAgLy8gMTJcbiAgICAgIFsyLCAxMTYsIDkyLCAyLCAxMTcsIDkzXSxcbiAgICAgIFs2LCA1OCwgMzYsIDIsIDU5LCAzN10sXG4gICAgICBbNCwgNDYsIDIwLCA2LCA0NywgMjFdLFxuICAgICAgWzcsIDQyLCAxNCwgNCwgNDMsIDE1XSxcblxuICAgICAgLy8gMTNcbiAgICAgIFs0LCAxMzMsIDEwN10sXG4gICAgICBbOCwgNTksIDM3LCAxLCA2MCwgMzhdLFxuICAgICAgWzgsIDQ0LCAyMCwgNCwgNDUsIDIxXSxcbiAgICAgIFsxMiwgMzMsIDExLCA0LCAzNCwgMTJdLFxuXG4gICAgICAvLyAxNFxuICAgICAgWzMsIDE0NSwgMTE1LCAxLCAxNDYsIDExNl0sXG4gICAgICBbNCwgNjQsIDQwLCA1LCA2NSwgNDFdLFxuICAgICAgWzExLCAzNiwgMTYsIDUsIDM3LCAxN10sXG4gICAgICBbMTEsIDM2LCAxMiwgNSwgMzcsIDEzXSxcblxuICAgICAgLy8gMTVcbiAgICAgIFs1LCAxMDksIDg3LCAxLCAxMTAsIDg4XSxcbiAgICAgIFs1LCA2NSwgNDEsIDUsIDY2LCA0Ml0sXG4gICAgICBbNSwgNTQsIDI0LCA3LCA1NSwgMjVdLFxuICAgICAgWzExLCAzNiwgMTIsIDcsIDM3LCAxM10sXG5cbiAgICAgIC8vIDE2XG4gICAgICBbNSwgMTIyLCA5OCwgMSwgMTIzLCA5OV0sXG4gICAgICBbNywgNzMsIDQ1LCAzLCA3NCwgNDZdLFxuICAgICAgWzE1LCA0MywgMTksIDIsIDQ0LCAyMF0sXG4gICAgICBbMywgNDUsIDE1LCAxMywgNDYsIDE2XSxcblxuICAgICAgLy8gMTdcbiAgICAgIFsxLCAxMzUsIDEwNywgNSwgMTM2LCAxMDhdLFxuICAgICAgWzEwLCA3NCwgNDYsIDEsIDc1LCA0N10sXG4gICAgICBbMSwgNTAsIDIyLCAxNSwgNTEsIDIzXSxcbiAgICAgIFsyLCA0MiwgMTQsIDE3LCA0MywgMTVdLFxuXG4gICAgICAvLyAxOFxuICAgICAgWzUsIDE1MCwgMTIwLCAxLCAxNTEsIDEyMV0sXG4gICAgICBbOSwgNjksIDQzLCA0LCA3MCwgNDRdLFxuICAgICAgWzE3LCA1MCwgMjIsIDEsIDUxLCAyM10sXG4gICAgICBbMiwgNDIsIDE0LCAxOSwgNDMsIDE1XSxcblxuICAgICAgLy8gMTlcbiAgICAgIFszLCAxNDEsIDExMywgNCwgMTQyLCAxMTRdLFxuICAgICAgWzMsIDcwLCA0NCwgMTEsIDcxLCA0NV0sXG4gICAgICBbMTcsIDQ3LCAyMSwgNCwgNDgsIDIyXSxcbiAgICAgIFs5LCAzOSwgMTMsIDE2LCA0MCwgMTRdLFxuXG4gICAgICAvLyAyMFxuICAgICAgWzMsIDEzNSwgMTA3LCA1LCAxMzYsIDEwOF0sXG4gICAgICBbMywgNjcsIDQxLCAxMywgNjgsIDQyXSxcbiAgICAgIFsxNSwgNTQsIDI0LCA1LCA1NSwgMjVdLFxuICAgICAgWzE1LCA0MywgMTUsIDEwLCA0NCwgMTZdLFxuXG4gICAgICAvLyAyMVxuICAgICAgWzQsIDE0NCwgMTE2LCA0LCAxNDUsIDExN10sXG4gICAgICBbMTcsIDY4LCA0Ml0sXG4gICAgICBbMTcsIDUwLCAyMiwgNiwgNTEsIDIzXSxcbiAgICAgIFsxOSwgNDYsIDE2LCA2LCA0NywgMTddLFxuXG4gICAgICAvLyAyMlxuICAgICAgWzIsIDEzOSwgMTExLCA3LCAxNDAsIDExMl0sXG4gICAgICBbMTcsIDc0LCA0Nl0sXG4gICAgICBbNywgNTQsIDI0LCAxNiwgNTUsIDI1XSxcbiAgICAgIFszNCwgMzcsIDEzXSxcblxuICAgICAgLy8gMjNcbiAgICAgIFs0LCAxNTEsIDEyMSwgNSwgMTUyLCAxMjJdLFxuICAgICAgWzQsIDc1LCA0NywgMTQsIDc2LCA0OF0sXG4gICAgICBbMTEsIDU0LCAyNCwgMTQsIDU1LCAyNV0sXG4gICAgICBbMTYsIDQ1LCAxNSwgMTQsIDQ2LCAxNl0sXG5cbiAgICAgIC8vIDI0XG4gICAgICBbNiwgMTQ3LCAxMTcsIDQsIDE0OCwgMTE4XSxcbiAgICAgIFs2LCA3MywgNDUsIDE0LCA3NCwgNDZdLFxuICAgICAgWzExLCA1NCwgMjQsIDE2LCA1NSwgMjVdLFxuICAgICAgWzMwLCA0NiwgMTYsIDIsIDQ3LCAxN10sXG5cbiAgICAgIC8vIDI1XG4gICAgICBbOCwgMTMyLCAxMDYsIDQsIDEzMywgMTA3XSxcbiAgICAgIFs4LCA3NSwgNDcsIDEzLCA3NiwgNDhdLFxuICAgICAgWzcsIDU0LCAyNCwgMjIsIDU1LCAyNV0sXG4gICAgICBbMjIsIDQ1LCAxNSwgMTMsIDQ2LCAxNl0sXG5cbiAgICAgIC8vIDI2XG4gICAgICBbMTAsIDE0MiwgMTE0LCAyLCAxNDMsIDExNV0sXG4gICAgICBbMTksIDc0LCA0NiwgNCwgNzUsIDQ3XSxcbiAgICAgIFsyOCwgNTAsIDIyLCA2LCA1MSwgMjNdLFxuICAgICAgWzMzLCA0NiwgMTYsIDQsIDQ3LCAxN10sXG5cbiAgICAgIC8vIDI3XG4gICAgICBbOCwgMTUyLCAxMjIsIDQsIDE1MywgMTIzXSxcbiAgICAgIFsyMiwgNzMsIDQ1LCAzLCA3NCwgNDZdLFxuICAgICAgWzgsIDUzLCAyMywgMjYsIDU0LCAyNF0sXG4gICAgICBbMTIsIDQ1LCAxNSwgMjgsIDQ2LCAxNl0sXG5cbiAgICAgIC8vIDI4XG4gICAgICBbMywgMTQ3LCAxMTcsIDEwLCAxNDgsIDExOF0sXG4gICAgICBbMywgNzMsIDQ1LCAyMywgNzQsIDQ2XSxcbiAgICAgIFs0LCA1NCwgMjQsIDMxLCA1NSwgMjVdLFxuICAgICAgWzExLCA0NSwgMTUsIDMxLCA0NiwgMTZdLFxuXG4gICAgICAvLyAyOVxuICAgICAgWzcsIDE0NiwgMTE2LCA3LCAxNDcsIDExN10sXG4gICAgICBbMjEsIDczLCA0NSwgNywgNzQsIDQ2XSxcbiAgICAgIFsxLCA1MywgMjMsIDM3LCA1NCwgMjRdLFxuICAgICAgWzE5LCA0NSwgMTUsIDI2LCA0NiwgMTZdLFxuXG4gICAgICAvLyAzMFxuICAgICAgWzUsIDE0NSwgMTE1LCAxMCwgMTQ2LCAxMTZdLFxuICAgICAgWzE5LCA3NSwgNDcsIDEwLCA3NiwgNDhdLFxuICAgICAgWzE1LCA1NCwgMjQsIDI1LCA1NSwgMjVdLFxuICAgICAgWzIzLCA0NSwgMTUsIDI1LCA0NiwgMTZdLFxuXG4gICAgICAvLyAzMVxuICAgICAgWzEzLCAxNDUsIDExNSwgMywgMTQ2LCAxMTZdLFxuICAgICAgWzIsIDc0LCA0NiwgMjksIDc1LCA0N10sXG4gICAgICBbNDIsIDU0LCAyNCwgMSwgNTUsIDI1XSxcbiAgICAgIFsyMywgNDUsIDE1LCAyOCwgNDYsIDE2XSxcblxuICAgICAgLy8gMzJcbiAgICAgIFsxNywgMTQ1LCAxMTVdLFxuICAgICAgWzEwLCA3NCwgNDYsIDIzLCA3NSwgNDddLFxuICAgICAgWzEwLCA1NCwgMjQsIDM1LCA1NSwgMjVdLFxuICAgICAgWzE5LCA0NSwgMTUsIDM1LCA0NiwgMTZdLFxuXG4gICAgICAvLyAzM1xuICAgICAgWzE3LCAxNDUsIDExNSwgMSwgMTQ2LCAxMTZdLFxuICAgICAgWzE0LCA3NCwgNDYsIDIxLCA3NSwgNDddLFxuICAgICAgWzI5LCA1NCwgMjQsIDE5LCA1NSwgMjVdLFxuICAgICAgWzExLCA0NSwgMTUsIDQ2LCA0NiwgMTZdLFxuXG4gICAgICAvLyAzNFxuICAgICAgWzEzLCAxNDUsIDExNSwgNiwgMTQ2LCAxMTZdLFxuICAgICAgWzE0LCA3NCwgNDYsIDIzLCA3NSwgNDddLFxuICAgICAgWzQ0LCA1NCwgMjQsIDcsIDU1LCAyNV0sXG4gICAgICBbNTksIDQ2LCAxNiwgMSwgNDcsIDE3XSxcblxuICAgICAgLy8gMzVcbiAgICAgIFsxMiwgMTUxLCAxMjEsIDcsIDE1MiwgMTIyXSxcbiAgICAgIFsxMiwgNzUsIDQ3LCAyNiwgNzYsIDQ4XSxcbiAgICAgIFszOSwgNTQsIDI0LCAxNCwgNTUsIDI1XSxcbiAgICAgIFsyMiwgNDUsIDE1LCA0MSwgNDYsIDE2XSxcblxuICAgICAgLy8gMzZcbiAgICAgIFs2LCAxNTEsIDEyMSwgMTQsIDE1MiwgMTIyXSxcbiAgICAgIFs2LCA3NSwgNDcsIDM0LCA3NiwgNDhdLFxuICAgICAgWzQ2LCA1NCwgMjQsIDEwLCA1NSwgMjVdLFxuICAgICAgWzIsIDQ1LCAxNSwgNjQsIDQ2LCAxNl0sXG5cbiAgICAgIC8vIDM3XG4gICAgICBbMTcsIDE1MiwgMTIyLCA0LCAxNTMsIDEyM10sXG4gICAgICBbMjksIDc0LCA0NiwgMTQsIDc1LCA0N10sXG4gICAgICBbNDksIDU0LCAyNCwgMTAsIDU1LCAyNV0sXG4gICAgICBbMjQsIDQ1LCAxNSwgNDYsIDQ2LCAxNl0sXG5cbiAgICAgIC8vIDM4XG4gICAgICBbNCwgMTUyLCAxMjIsIDE4LCAxNTMsIDEyM10sXG4gICAgICBbMTMsIDc0LCA0NiwgMzIsIDc1LCA0N10sXG4gICAgICBbNDgsIDU0LCAyNCwgMTQsIDU1LCAyNV0sXG4gICAgICBbNDIsIDQ1LCAxNSwgMzIsIDQ2LCAxNl0sXG5cbiAgICAgIC8vIDM5XG4gICAgICBbMjAsIDE0NywgMTE3LCA0LCAxNDgsIDExOF0sXG4gICAgICBbNDAsIDc1LCA0NywgNywgNzYsIDQ4XSxcbiAgICAgIFs0MywgNTQsIDI0LCAyMiwgNTUsIDI1XSxcbiAgICAgIFsxMCwgNDUsIDE1LCA2NywgNDYsIDE2XSxcblxuICAgICAgLy8gNDBcbiAgICAgIFsxOSwgMTQ4LCAxMTgsIDYsIDE0OSwgMTE5XSxcbiAgICAgIFsxOCwgNzUsIDQ3LCAzMSwgNzYsIDQ4XSxcbiAgICAgIFszNCwgNTQsIDI0LCAzNCwgNTUsIDI1XSxcbiAgICAgIFsyMCwgNDUsIDE1LCA2MSwgNDYsIDE2XVxuICAgIF07XG5cbiAgICB2YXIgcXJSU0Jsb2NrID0gZnVuY3Rpb24odG90YWxDb3VudCwgZGF0YUNvdW50KSB7XG4gICAgICB2YXIgX3RoaXMgPSB7fTtcbiAgICAgIF90aGlzLnRvdGFsQ291bnQgPSB0b3RhbENvdW50O1xuICAgICAgX3RoaXMuZGF0YUNvdW50ID0gZGF0YUNvdW50O1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH07XG5cbiAgICB2YXIgX3RoaXMgPSB7fTtcblxuICAgIHZhciBnZXRSc0Jsb2NrVGFibGUgPSBmdW5jdGlvbih0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3Rpb25MZXZlbCkge1xuXG4gICAgICBzd2l0Y2goZXJyb3JDb3JyZWN0aW9uTGV2ZWwpIHtcbiAgICAgIGNhc2UgUVJFcnJvckNvcnJlY3Rpb25MZXZlbC5MIDpcbiAgICAgICAgcmV0dXJuIFJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgMF07XG4gICAgICBjYXNlIFFSRXJyb3JDb3JyZWN0aW9uTGV2ZWwuTSA6XG4gICAgICAgIHJldHVybiBSU19CTE9DS19UQUJMRVsodHlwZU51bWJlciAtIDEpICogNCArIDFdO1xuICAgICAgY2FzZSBRUkVycm9yQ29ycmVjdGlvbkxldmVsLlEgOlxuICAgICAgICByZXR1cm4gUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXIgLSAxKSAqIDQgKyAyXTtcbiAgICAgIGNhc2UgUVJFcnJvckNvcnJlY3Rpb25MZXZlbC5IIDpcbiAgICAgICAgcmV0dXJuIFJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgM107XG4gICAgICBkZWZhdWx0IDpcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0UlNCbG9ja3MgPSBmdW5jdGlvbih0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3Rpb25MZXZlbCkge1xuXG4gICAgICB2YXIgcnNCbG9jayA9IGdldFJzQmxvY2tUYWJsZSh0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3Rpb25MZXZlbCk7XG5cbiAgICAgIGlmICh0eXBlb2YgcnNCbG9jayA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyAnYmFkIHJzIGJsb2NrIEAgdHlwZU51bWJlcjonICsgdHlwZU51bWJlciArXG4gICAgICAgICAgICAnL2Vycm9yQ29ycmVjdGlvbkxldmVsOicgKyBlcnJvckNvcnJlY3Rpb25MZXZlbDtcbiAgICAgIH1cblxuICAgICAgdmFyIGxlbmd0aCA9IHJzQmxvY2subGVuZ3RoIC8gMztcblxuICAgICAgdmFyIGxpc3QgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuXG4gICAgICAgIHZhciBjb3VudCA9IHJzQmxvY2tbaSAqIDMgKyAwXTtcbiAgICAgICAgdmFyIHRvdGFsQ291bnQgPSByc0Jsb2NrW2kgKiAzICsgMV07XG4gICAgICAgIHZhciBkYXRhQ291bnQgPSByc0Jsb2NrW2kgKiAzICsgMl07XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjb3VudDsgaiArPSAxKSB7XG4gICAgICAgICAgbGlzdC5wdXNoKHFyUlNCbG9jayh0b3RhbENvdW50LCBkYXRhQ291bnQpICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfSgpO1xuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHFyQml0QnVmZmVyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgdmFyIHFyQml0QnVmZmVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgX2J1ZmZlciA9IFtdO1xuICAgIHZhciBfbGVuZ3RoID0gMDtcblxuICAgIHZhciBfdGhpcyA9IHt9O1xuXG4gICAgX3RoaXMuZ2V0QnVmZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gX2J1ZmZlcjtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0QXQgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgdmFyIGJ1ZkluZGV4ID0gTWF0aC5mbG9vcihpbmRleCAvIDgpO1xuICAgICAgcmV0dXJuICggKF9idWZmZXJbYnVmSW5kZXhdID4+PiAoNyAtIGluZGV4ICUgOCkgKSAmIDEpID09IDE7XG4gICAgfTtcblxuICAgIF90aGlzLnB1dCA9IGZ1bmN0aW9uKG51bSwgbGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIF90aGlzLnB1dEJpdCggKCAobnVtID4+PiAobGVuZ3RoIC0gaSAtIDEpICkgJiAxKSA9PSAxKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0TGVuZ3RoSW5CaXRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gX2xlbmd0aDtcbiAgICB9O1xuXG4gICAgX3RoaXMucHV0Qml0ID0gZnVuY3Rpb24oYml0KSB7XG5cbiAgICAgIHZhciBidWZJbmRleCA9IE1hdGguZmxvb3IoX2xlbmd0aCAvIDgpO1xuICAgICAgaWYgKF9idWZmZXIubGVuZ3RoIDw9IGJ1ZkluZGV4KSB7XG4gICAgICAgIF9idWZmZXIucHVzaCgwKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJpdCkge1xuICAgICAgICBfYnVmZmVyW2J1ZkluZGV4XSB8PSAoMHg4MCA+Pj4gKF9sZW5ndGggJSA4KSApO1xuICAgICAgfVxuXG4gICAgICBfbGVuZ3RoICs9IDE7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfTtcblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBxck51bWJlclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHZhciBxck51bWJlciA9IGZ1bmN0aW9uKGRhdGEpIHtcblxuICAgIHZhciBfbW9kZSA9IFFSTW9kZS5NT0RFX05VTUJFUjtcbiAgICB2YXIgX2RhdGEgPSBkYXRhO1xuXG4gICAgdmFyIF90aGlzID0ge307XG5cbiAgICBfdGhpcy5nZXRNb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gX21vZGU7XG4gICAgfTtcblxuICAgIF90aGlzLmdldExlbmd0aCA9IGZ1bmN0aW9uKGJ1ZmZlcikge1xuICAgICAgcmV0dXJuIF9kYXRhLmxlbmd0aDtcbiAgICB9O1xuXG4gICAgX3RoaXMud3JpdGUgPSBmdW5jdGlvbihidWZmZXIpIHtcblxuICAgICAgdmFyIGRhdGEgPSBfZGF0YTtcblxuICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICB3aGlsZSAoaSArIDIgPCBkYXRhLmxlbmd0aCkge1xuICAgICAgICBidWZmZXIucHV0KHN0clRvTnVtKGRhdGEuc3Vic3RyaW5nKGksIGkgKyAzKSApLCAxMCk7XG4gICAgICAgIGkgKz0gMztcbiAgICAgIH1cblxuICAgICAgaWYgKGkgPCBkYXRhLmxlbmd0aCkge1xuICAgICAgICBpZiAoZGF0YS5sZW5ndGggLSBpID09IDEpIHtcbiAgICAgICAgICBidWZmZXIucHV0KHN0clRvTnVtKGRhdGEuc3Vic3RyaW5nKGksIGkgKyAxKSApLCA0KTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmxlbmd0aCAtIGkgPT0gMikge1xuICAgICAgICAgIGJ1ZmZlci5wdXQoc3RyVG9OdW0oZGF0YS5zdWJzdHJpbmcoaSwgaSArIDIpICksIDcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBzdHJUb051bSA9IGZ1bmN0aW9uKHMpIHtcbiAgICAgIHZhciBudW0gPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIG51bSA9IG51bSAqIDEwICsgY2hhdFRvTnVtKHMuY2hhckF0KGkpICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVtO1xuICAgIH07XG5cbiAgICB2YXIgY2hhdFRvTnVtID0gZnVuY3Rpb24oYykge1xuICAgICAgaWYgKCcwJyA8PSBjICYmIGMgPD0gJzknKSB7XG4gICAgICAgIHJldHVybiBjLmNoYXJDb2RlQXQoMCkgLSAnMCcuY2hhckNvZGVBdCgwKTtcbiAgICAgIH1cbiAgICAgIHRocm93ICdpbGxlZ2FsIGNoYXIgOicgKyBjO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH07XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcXJBbHBoYU51bVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHZhciBxckFscGhhTnVtID0gZnVuY3Rpb24oZGF0YSkge1xuXG4gICAgdmFyIF9tb2RlID0gUVJNb2RlLk1PREVfQUxQSEFfTlVNO1xuICAgIHZhciBfZGF0YSA9IGRhdGE7XG5cbiAgICB2YXIgX3RoaXMgPSB7fTtcblxuICAgIF90aGlzLmdldE1vZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBfbW9kZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0TGVuZ3RoID0gZnVuY3Rpb24oYnVmZmVyKSB7XG4gICAgICByZXR1cm4gX2RhdGEubGVuZ3RoO1xuICAgIH07XG5cbiAgICBfdGhpcy53cml0ZSA9IGZ1bmN0aW9uKGJ1ZmZlcikge1xuXG4gICAgICB2YXIgcyA9IF9kYXRhO1xuXG4gICAgICB2YXIgaSA9IDA7XG5cbiAgICAgIHdoaWxlIChpICsgMSA8IHMubGVuZ3RoKSB7XG4gICAgICAgIGJ1ZmZlci5wdXQoXG4gICAgICAgICAgZ2V0Q29kZShzLmNoYXJBdChpKSApICogNDUgK1xuICAgICAgICAgIGdldENvZGUocy5jaGFyQXQoaSArIDEpICksIDExKTtcbiAgICAgICAgaSArPSAyO1xuICAgICAgfVxuXG4gICAgICBpZiAoaSA8IHMubGVuZ3RoKSB7XG4gICAgICAgIGJ1ZmZlci5wdXQoZ2V0Q29kZShzLmNoYXJBdChpKSApLCA2KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGdldENvZGUgPSBmdW5jdGlvbihjKSB7XG5cbiAgICAgIGlmICgnMCcgPD0gYyAmJiBjIDw9ICc5Jykge1xuICAgICAgICByZXR1cm4gYy5jaGFyQ29kZUF0KDApIC0gJzAnLmNoYXJDb2RlQXQoMCk7XG4gICAgICB9IGVsc2UgaWYgKCdBJyA8PSBjICYmIGMgPD0gJ1onKSB7XG4gICAgICAgIHJldHVybiBjLmNoYXJDb2RlQXQoMCkgLSAnQScuY2hhckNvZGVBdCgwKSArIDEwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpdGNoIChjKSB7XG4gICAgICAgIGNhc2UgJyAnIDogcmV0dXJuIDM2O1xuICAgICAgICBjYXNlICckJyA6IHJldHVybiAzNztcbiAgICAgICAgY2FzZSAnJScgOiByZXR1cm4gMzg7XG4gICAgICAgIGNhc2UgJyonIDogcmV0dXJuIDM5O1xuICAgICAgICBjYXNlICcrJyA6IHJldHVybiA0MDtcbiAgICAgICAgY2FzZSAnLScgOiByZXR1cm4gNDE7XG4gICAgICAgIGNhc2UgJy4nIDogcmV0dXJuIDQyO1xuICAgICAgICBjYXNlICcvJyA6IHJldHVybiA0MztcbiAgICAgICAgY2FzZSAnOicgOiByZXR1cm4gNDQ7XG4gICAgICAgIGRlZmF1bHQgOlxuICAgICAgICAgIHRocm93ICdpbGxlZ2FsIGNoYXIgOicgKyBjO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfTtcblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBxcjhCaXRCeXRlXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgdmFyIHFyOEJpdEJ5dGUgPSBmdW5jdGlvbihkYXRhKSB7XG5cbiAgICB2YXIgX21vZGUgPSBRUk1vZGUuTU9ERV84QklUX0JZVEU7XG4gICAgdmFyIF9kYXRhID0gZGF0YTtcbiAgICB2YXIgX2J5dGVzID0gcXJjb2RlLnN0cmluZ1RvQnl0ZXMoZGF0YSk7XG5cbiAgICB2YXIgX3RoaXMgPSB7fTtcblxuICAgIF90aGlzLmdldE1vZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBfbW9kZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0TGVuZ3RoID0gZnVuY3Rpb24oYnVmZmVyKSB7XG4gICAgICByZXR1cm4gX2J5dGVzLmxlbmd0aDtcbiAgICB9O1xuXG4gICAgX3RoaXMud3JpdGUgPSBmdW5jdGlvbihidWZmZXIpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX2J5dGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGJ1ZmZlci5wdXQoX2J5dGVzW2ldLCA4KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9O1xuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHFyS2FuamlcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICB2YXIgcXJLYW5qaSA9IGZ1bmN0aW9uKGRhdGEpIHtcblxuICAgIHZhciBfbW9kZSA9IFFSTW9kZS5NT0RFX0tBTkpJO1xuICAgIHZhciBfZGF0YSA9IGRhdGE7XG5cbiAgICB2YXIgc3RyaW5nVG9CeXRlcyA9IHFyY29kZS5zdHJpbmdUb0J5dGVzRnVuY3NbJ1NKSVMnXTtcbiAgICBpZiAoIXN0cmluZ1RvQnl0ZXMpIHtcbiAgICAgIHRocm93ICdzamlzIG5vdCBzdXBwb3J0ZWQuJztcbiAgICB9XG4gICAgIWZ1bmN0aW9uKGMsIGNvZGUpIHtcbiAgICAgIC8vIHNlbGYgdGVzdCBmb3Igc2ppcyBzdXBwb3J0LlxuICAgICAgdmFyIHRlc3QgPSBzdHJpbmdUb0J5dGVzKGMpO1xuICAgICAgaWYgKHRlc3QubGVuZ3RoICE9IDIgfHwgKCAodGVzdFswXSA8PCA4KSB8IHRlc3RbMV0pICE9IGNvZGUpIHtcbiAgICAgICAgdGhyb3cgJ3NqaXMgbm90IHN1cHBvcnRlZC4nO1xuICAgICAgfVxuICAgIH0oJ1xcdTUzY2InLCAweDk3NDYpO1xuXG4gICAgdmFyIF9ieXRlcyA9IHN0cmluZ1RvQnl0ZXMoZGF0YSk7XG5cbiAgICB2YXIgX3RoaXMgPSB7fTtcblxuICAgIF90aGlzLmdldE1vZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBfbW9kZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0TGVuZ3RoID0gZnVuY3Rpb24oYnVmZmVyKSB7XG4gICAgICByZXR1cm4gfn4oX2J5dGVzLmxlbmd0aCAvIDIpO1xuICAgIH07XG5cbiAgICBfdGhpcy53cml0ZSA9IGZ1bmN0aW9uKGJ1ZmZlcikge1xuXG4gICAgICB2YXIgZGF0YSA9IF9ieXRlcztcblxuICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICB3aGlsZSAoaSArIDEgPCBkYXRhLmxlbmd0aCkge1xuXG4gICAgICAgIHZhciBjID0gKCAoMHhmZiAmIGRhdGFbaV0pIDw8IDgpIHwgKDB4ZmYgJiBkYXRhW2kgKyAxXSk7XG5cbiAgICAgICAgaWYgKDB4ODE0MCA8PSBjICYmIGMgPD0gMHg5RkZDKSB7XG4gICAgICAgICAgYyAtPSAweDgxNDA7XG4gICAgICAgIH0gZWxzZSBpZiAoMHhFMDQwIDw9IGMgJiYgYyA8PSAweEVCQkYpIHtcbiAgICAgICAgICBjIC09IDB4QzE0MDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyAnaWxsZWdhbCBjaGFyIGF0ICcgKyAoaSArIDEpICsgJy8nICsgYztcbiAgICAgICAgfVxuXG4gICAgICAgIGMgPSAoIChjID4+PiA4KSAmIDB4ZmYpICogMHhDMCArIChjICYgMHhmZik7XG5cbiAgICAgICAgYnVmZmVyLnB1dChjLCAxMyk7XG5cbiAgICAgICAgaSArPSAyO1xuICAgICAgfVxuXG4gICAgICBpZiAoaSA8IGRhdGEubGVuZ3RoKSB7XG4gICAgICAgIHRocm93ICdpbGxlZ2FsIGNoYXIgYXQgJyArIChpICsgMSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfTtcblxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBHSUYgU3VwcG9ydCBldGMuXG4gIC8vXG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gYnl0ZUFycmF5T3V0cHV0U3RyZWFtXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgdmFyIGJ5dGVBcnJheU91dHB1dFN0cmVhbSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIF9ieXRlcyA9IFtdO1xuXG4gICAgdmFyIF90aGlzID0ge307XG5cbiAgICBfdGhpcy53cml0ZUJ5dGUgPSBmdW5jdGlvbihiKSB7XG4gICAgICBfYnl0ZXMucHVzaChiICYgMHhmZik7XG4gICAgfTtcblxuICAgIF90aGlzLndyaXRlU2hvcnQgPSBmdW5jdGlvbihpKSB7XG4gICAgICBfdGhpcy53cml0ZUJ5dGUoaSk7XG4gICAgICBfdGhpcy53cml0ZUJ5dGUoaSA+Pj4gOCk7XG4gICAgfTtcblxuICAgIF90aGlzLndyaXRlQnl0ZXMgPSBmdW5jdGlvbihiLCBvZmYsIGxlbikge1xuICAgICAgb2ZmID0gb2ZmIHx8IDA7XG4gICAgICBsZW4gPSBsZW4gfHwgYi5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIF90aGlzLndyaXRlQnl0ZShiW2kgKyBvZmZdKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMud3JpdGVTdHJpbmcgPSBmdW5jdGlvbihzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgX3RoaXMud3JpdGVCeXRlKHMuY2hhckNvZGVBdChpKSApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy50b0J5dGVBcnJheSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIF9ieXRlcztcbiAgICB9O1xuXG4gICAgX3RoaXMudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzID0gJyc7XG4gICAgICBzICs9ICdbJztcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX2J5dGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgIHMgKz0gJywnO1xuICAgICAgICB9XG4gICAgICAgIHMgKz0gX2J5dGVzW2ldO1xuICAgICAgfVxuICAgICAgcyArPSAnXSc7XG4gICAgICByZXR1cm4gcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9O1xuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGJhc2U2NEVuY29kZU91dHB1dFN0cmVhbVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHZhciBiYXNlNjRFbmNvZGVPdXRwdXRTdHJlYW0gPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBfYnVmZmVyID0gMDtcbiAgICB2YXIgX2J1ZmxlbiA9IDA7XG4gICAgdmFyIF9sZW5ndGggPSAwO1xuICAgIHZhciBfYmFzZTY0ID0gJyc7XG5cbiAgICB2YXIgX3RoaXMgPSB7fTtcblxuICAgIHZhciB3cml0ZUVuY29kZWQgPSBmdW5jdGlvbihiKSB7XG4gICAgICBfYmFzZTY0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoZW5jb2RlKGIgJiAweDNmKSApO1xuICAgIH07XG5cbiAgICB2YXIgZW5jb2RlID0gZnVuY3Rpb24obikge1xuICAgICAgaWYgKG4gPCAwKSB7XG4gICAgICAgIC8vIGVycm9yLlxuICAgICAgfSBlbHNlIGlmIChuIDwgMjYpIHtcbiAgICAgICAgcmV0dXJuIDB4NDEgKyBuO1xuICAgICAgfSBlbHNlIGlmIChuIDwgNTIpIHtcbiAgICAgICAgcmV0dXJuIDB4NjEgKyAobiAtIDI2KTtcbiAgICAgIH0gZWxzZSBpZiAobiA8IDYyKSB7XG4gICAgICAgIHJldHVybiAweDMwICsgKG4gLSA1Mik7XG4gICAgICB9IGVsc2UgaWYgKG4gPT0gNjIpIHtcbiAgICAgICAgcmV0dXJuIDB4MmI7XG4gICAgICB9IGVsc2UgaWYgKG4gPT0gNjMpIHtcbiAgICAgICAgcmV0dXJuIDB4MmY7XG4gICAgICB9XG4gICAgICB0aHJvdyAnbjonICsgbjtcbiAgICB9O1xuXG4gICAgX3RoaXMud3JpdGVCeXRlID0gZnVuY3Rpb24obikge1xuXG4gICAgICBfYnVmZmVyID0gKF9idWZmZXIgPDwgOCkgfCAobiAmIDB4ZmYpO1xuICAgICAgX2J1ZmxlbiArPSA4O1xuICAgICAgX2xlbmd0aCArPSAxO1xuXG4gICAgICB3aGlsZSAoX2J1ZmxlbiA+PSA2KSB7XG4gICAgICAgIHdyaXRlRW5jb2RlZChfYnVmZmVyID4+PiAoX2J1ZmxlbiAtIDYpICk7XG4gICAgICAgIF9idWZsZW4gLT0gNjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuZmx1c2ggPSBmdW5jdGlvbigpIHtcblxuICAgICAgaWYgKF9idWZsZW4gPiAwKSB7XG4gICAgICAgIHdyaXRlRW5jb2RlZChfYnVmZmVyIDw8ICg2IC0gX2J1ZmxlbikgKTtcbiAgICAgICAgX2J1ZmZlciA9IDA7XG4gICAgICAgIF9idWZsZW4gPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoX2xlbmd0aCAlIDMgIT0gMCkge1xuICAgICAgICAvLyBwYWRkaW5nXG4gICAgICAgIHZhciBwYWRsZW4gPSAzIC0gX2xlbmd0aCAlIDM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFkbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICBfYmFzZTY0ICs9ICc9JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIF9iYXNlNjQ7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfTtcblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBiYXNlNjREZWNvZGVJbnB1dFN0cmVhbVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHZhciBiYXNlNjREZWNvZGVJbnB1dFN0cmVhbSA9IGZ1bmN0aW9uKHN0cikge1xuXG4gICAgdmFyIF9zdHIgPSBzdHI7XG4gICAgdmFyIF9wb3MgPSAwO1xuICAgIHZhciBfYnVmZmVyID0gMDtcbiAgICB2YXIgX2J1ZmxlbiA9IDA7XG5cbiAgICB2YXIgX3RoaXMgPSB7fTtcblxuICAgIF90aGlzLnJlYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgd2hpbGUgKF9idWZsZW4gPCA4KSB7XG5cbiAgICAgICAgaWYgKF9wb3MgPj0gX3N0ci5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAoX2J1ZmxlbiA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93ICd1bmV4cGVjdGVkIGVuZCBvZiBmaWxlLi8nICsgX2J1ZmxlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjID0gX3N0ci5jaGFyQXQoX3Bvcyk7XG4gICAgICAgIF9wb3MgKz0gMTtcblxuICAgICAgICBpZiAoYyA9PSAnPScpIHtcbiAgICAgICAgICBfYnVmbGVuID0gMDtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0gZWxzZSBpZiAoYy5tYXRjaCgvXlxccyQvKSApIHtcbiAgICAgICAgICAvLyBpZ25vcmUgaWYgd2hpdGVzcGFjZS5cbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9idWZmZXIgPSAoX2J1ZmZlciA8PCA2KSB8IGRlY29kZShjLmNoYXJDb2RlQXQoMCkgKTtcbiAgICAgICAgX2J1ZmxlbiArPSA2O1xuICAgICAgfVxuXG4gICAgICB2YXIgbiA9IChfYnVmZmVyID4+PiAoX2J1ZmxlbiAtIDgpICkgJiAweGZmO1xuICAgICAgX2J1ZmxlbiAtPSA4O1xuICAgICAgcmV0dXJuIG47XG4gICAgfTtcblxuICAgIHZhciBkZWNvZGUgPSBmdW5jdGlvbihjKSB7XG4gICAgICBpZiAoMHg0MSA8PSBjICYmIGMgPD0gMHg1YSkge1xuICAgICAgICByZXR1cm4gYyAtIDB4NDE7XG4gICAgICB9IGVsc2UgaWYgKDB4NjEgPD0gYyAmJiBjIDw9IDB4N2EpIHtcbiAgICAgICAgcmV0dXJuIGMgLSAweDYxICsgMjY7XG4gICAgICB9IGVsc2UgaWYgKDB4MzAgPD0gYyAmJiBjIDw9IDB4MzkpIHtcbiAgICAgICAgcmV0dXJuIGMgLSAweDMwICsgNTI7XG4gICAgICB9IGVsc2UgaWYgKGMgPT0gMHgyYikge1xuICAgICAgICByZXR1cm4gNjI7XG4gICAgICB9IGVsc2UgaWYgKGMgPT0gMHgyZikge1xuICAgICAgICByZXR1cm4gNjM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyAnYzonICsgYztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9O1xuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGdpZkltYWdlIChCL1cpXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgdmFyIGdpZkltYWdlID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xuXG4gICAgdmFyIF93aWR0aCA9IHdpZHRoO1xuICAgIHZhciBfaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHZhciBfZGF0YSA9IG5ldyBBcnJheSh3aWR0aCAqIGhlaWdodCk7XG5cbiAgICB2YXIgX3RoaXMgPSB7fTtcblxuICAgIF90aGlzLnNldFBpeGVsID0gZnVuY3Rpb24oeCwgeSwgcGl4ZWwpIHtcbiAgICAgIF9kYXRhW3kgKiBfd2lkdGggKyB4XSA9IHBpeGVsO1xuICAgIH07XG5cbiAgICBfdGhpcy53cml0ZSA9IGZ1bmN0aW9uKG91dCkge1xuXG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgLy8gR0lGIFNpZ25hdHVyZVxuXG4gICAgICBvdXQud3JpdGVTdHJpbmcoJ0dJRjg3YScpO1xuXG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgLy8gU2NyZWVuIERlc2NyaXB0b3JcblxuICAgICAgb3V0LndyaXRlU2hvcnQoX3dpZHRoKTtcbiAgICAgIG91dC53cml0ZVNob3J0KF9oZWlnaHQpO1xuXG4gICAgICBvdXQud3JpdGVCeXRlKDB4ODApOyAvLyAyYml0XG4gICAgICBvdXQud3JpdGVCeXRlKDApO1xuICAgICAgb3V0LndyaXRlQnl0ZSgwKTtcblxuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIC8vIEdsb2JhbCBDb2xvciBNYXBcblxuICAgICAgLy8gYmxhY2tcbiAgICAgIG91dC53cml0ZUJ5dGUoMHgwMCk7XG4gICAgICBvdXQud3JpdGVCeXRlKDB4MDApO1xuICAgICAgb3V0LndyaXRlQnl0ZSgweDAwKTtcblxuICAgICAgLy8gd2hpdGVcbiAgICAgIG91dC53cml0ZUJ5dGUoMHhmZik7XG4gICAgICBvdXQud3JpdGVCeXRlKDB4ZmYpO1xuICAgICAgb3V0LndyaXRlQnl0ZSgweGZmKTtcblxuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIC8vIEltYWdlIERlc2NyaXB0b3JcblxuICAgICAgb3V0LndyaXRlU3RyaW5nKCcsJyk7XG4gICAgICBvdXQud3JpdGVTaG9ydCgwKTtcbiAgICAgIG91dC53cml0ZVNob3J0KDApO1xuICAgICAgb3V0LndyaXRlU2hvcnQoX3dpZHRoKTtcbiAgICAgIG91dC53cml0ZVNob3J0KF9oZWlnaHQpO1xuICAgICAgb3V0LndyaXRlQnl0ZSgwKTtcblxuICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIC8vIExvY2FsIENvbG9yIE1hcFxuXG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgLy8gUmFzdGVyIERhdGFcblxuICAgICAgdmFyIGx6d01pbkNvZGVTaXplID0gMjtcbiAgICAgIHZhciByYXN0ZXIgPSBnZXRMWldSYXN0ZXIobHp3TWluQ29kZVNpemUpO1xuXG4gICAgICBvdXQud3JpdGVCeXRlKGx6d01pbkNvZGVTaXplKTtcblxuICAgICAgdmFyIG9mZnNldCA9IDA7XG5cbiAgICAgIHdoaWxlIChyYXN0ZXIubGVuZ3RoIC0gb2Zmc2V0ID4gMjU1KSB7XG4gICAgICAgIG91dC53cml0ZUJ5dGUoMjU1KTtcbiAgICAgICAgb3V0LndyaXRlQnl0ZXMocmFzdGVyLCBvZmZzZXQsIDI1NSk7XG4gICAgICAgIG9mZnNldCArPSAyNTU7XG4gICAgICB9XG5cbiAgICAgIG91dC53cml0ZUJ5dGUocmFzdGVyLmxlbmd0aCAtIG9mZnNldCk7XG4gICAgICBvdXQud3JpdGVCeXRlcyhyYXN0ZXIsIG9mZnNldCwgcmFzdGVyLmxlbmd0aCAtIG9mZnNldCk7XG4gICAgICBvdXQud3JpdGVCeXRlKDB4MDApO1xuXG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgLy8gR0lGIFRlcm1pbmF0b3JcbiAgICAgIG91dC53cml0ZVN0cmluZygnOycpO1xuICAgIH07XG5cbiAgICB2YXIgYml0T3V0cHV0U3RyZWFtID0gZnVuY3Rpb24ob3V0KSB7XG5cbiAgICAgIHZhciBfb3V0ID0gb3V0O1xuICAgICAgdmFyIF9iaXRMZW5ndGggPSAwO1xuICAgICAgdmFyIF9iaXRCdWZmZXIgPSAwO1xuXG4gICAgICB2YXIgX3RoaXMgPSB7fTtcblxuICAgICAgX3RoaXMud3JpdGUgPSBmdW5jdGlvbihkYXRhLCBsZW5ndGgpIHtcblxuICAgICAgICBpZiAoIChkYXRhID4+PiBsZW5ndGgpICE9IDApIHtcbiAgICAgICAgICB0aHJvdyAnbGVuZ3RoIG92ZXInO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKF9iaXRMZW5ndGggKyBsZW5ndGggPj0gOCkge1xuICAgICAgICAgIF9vdXQud3JpdGVCeXRlKDB4ZmYgJiAoIChkYXRhIDw8IF9iaXRMZW5ndGgpIHwgX2JpdEJ1ZmZlcikgKTtcbiAgICAgICAgICBsZW5ndGggLT0gKDggLSBfYml0TGVuZ3RoKTtcbiAgICAgICAgICBkYXRhID4+Pj0gKDggLSBfYml0TGVuZ3RoKTtcbiAgICAgICAgICBfYml0QnVmZmVyID0gMDtcbiAgICAgICAgICBfYml0TGVuZ3RoID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIF9iaXRCdWZmZXIgPSAoZGF0YSA8PCBfYml0TGVuZ3RoKSB8IF9iaXRCdWZmZXI7XG4gICAgICAgIF9iaXRMZW5ndGggPSBfYml0TGVuZ3RoICsgbGVuZ3RoO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuZmx1c2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKF9iaXRMZW5ndGggPiAwKSB7XG4gICAgICAgICAgX291dC53cml0ZUJ5dGUoX2JpdEJ1ZmZlcik7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9O1xuXG4gICAgdmFyIGdldExaV1Jhc3RlciA9IGZ1bmN0aW9uKGx6d01pbkNvZGVTaXplKSB7XG5cbiAgICAgIHZhciBjbGVhckNvZGUgPSAxIDw8IGx6d01pbkNvZGVTaXplO1xuICAgICAgdmFyIGVuZENvZGUgPSAoMSA8PCBsendNaW5Db2RlU2l6ZSkgKyAxO1xuICAgICAgdmFyIGJpdExlbmd0aCA9IGx6d01pbkNvZGVTaXplICsgMTtcblxuICAgICAgLy8gU2V0dXAgTFpXVGFibGVcbiAgICAgIHZhciB0YWJsZSA9IGx6d1RhYmxlKCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xlYXJDb2RlOyBpICs9IDEpIHtcbiAgICAgICAgdGFibGUuYWRkKFN0cmluZy5mcm9tQ2hhckNvZGUoaSkgKTtcbiAgICAgIH1cbiAgICAgIHRhYmxlLmFkZChTdHJpbmcuZnJvbUNoYXJDb2RlKGNsZWFyQ29kZSkgKTtcbiAgICAgIHRhYmxlLmFkZChTdHJpbmcuZnJvbUNoYXJDb2RlKGVuZENvZGUpICk7XG5cbiAgICAgIHZhciBieXRlT3V0ID0gYnl0ZUFycmF5T3V0cHV0U3RyZWFtKCk7XG4gICAgICB2YXIgYml0T3V0ID0gYml0T3V0cHV0U3RyZWFtKGJ5dGVPdXQpO1xuXG4gICAgICAvLyBjbGVhciBjb2RlXG4gICAgICBiaXRPdXQud3JpdGUoY2xlYXJDb2RlLCBiaXRMZW5ndGgpO1xuXG4gICAgICB2YXIgZGF0YUluZGV4ID0gMDtcblxuICAgICAgdmFyIHMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKF9kYXRhW2RhdGFJbmRleF0pO1xuICAgICAgZGF0YUluZGV4ICs9IDE7XG5cbiAgICAgIHdoaWxlIChkYXRhSW5kZXggPCBfZGF0YS5sZW5ndGgpIHtcblxuICAgICAgICB2YXIgYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoX2RhdGFbZGF0YUluZGV4XSk7XG4gICAgICAgIGRhdGFJbmRleCArPSAxO1xuXG4gICAgICAgIGlmICh0YWJsZS5jb250YWlucyhzICsgYykgKSB7XG5cbiAgICAgICAgICBzID0gcyArIGM7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIGJpdE91dC53cml0ZSh0YWJsZS5pbmRleE9mKHMpLCBiaXRMZW5ndGgpO1xuXG4gICAgICAgICAgaWYgKHRhYmxlLnNpemUoKSA8IDB4ZmZmKSB7XG5cbiAgICAgICAgICAgIGlmICh0YWJsZS5zaXplKCkgPT0gKDEgPDwgYml0TGVuZ3RoKSApIHtcbiAgICAgICAgICAgICAgYml0TGVuZ3RoICs9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhYmxlLmFkZChzICsgYyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcyA9IGM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYml0T3V0LndyaXRlKHRhYmxlLmluZGV4T2YocyksIGJpdExlbmd0aCk7XG5cbiAgICAgIC8vIGVuZCBjb2RlXG4gICAgICBiaXRPdXQud3JpdGUoZW5kQ29kZSwgYml0TGVuZ3RoKTtcblxuICAgICAgYml0T3V0LmZsdXNoKCk7XG5cbiAgICAgIHJldHVybiBieXRlT3V0LnRvQnl0ZUFycmF5KCk7XG4gICAgfTtcblxuICAgIHZhciBsendUYWJsZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgX21hcCA9IHt9O1xuICAgICAgdmFyIF9zaXplID0gMDtcblxuICAgICAgdmFyIF90aGlzID0ge307XG5cbiAgICAgIF90aGlzLmFkZCA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBpZiAoX3RoaXMuY29udGFpbnMoa2V5KSApIHtcbiAgICAgICAgICB0aHJvdyAnZHVwIGtleTonICsga2V5O1xuICAgICAgICB9XG4gICAgICAgIF9tYXBba2V5XSA9IF9zaXplO1xuICAgICAgICBfc2l6ZSArPSAxO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3NpemU7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5pbmRleE9mID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHJldHVybiBfbWFwW2tleV07XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5jb250YWlucyA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIF9tYXBba2V5XSAhPSAndW5kZWZpbmVkJztcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9O1xuXG4gIHZhciBjcmVhdGVEYXRhVVJMID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgZ2V0UGl4ZWwpIHtcbiAgICB2YXIgZ2lmID0gZ2lmSW1hZ2Uod2lkdGgsIGhlaWdodCk7XG4gICAgZm9yICh2YXIgeSA9IDA7IHkgPCBoZWlnaHQ7IHkgKz0gMSkge1xuICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB3aWR0aDsgeCArPSAxKSB7XG4gICAgICAgIGdpZi5zZXRQaXhlbCh4LCB5LCBnZXRQaXhlbCh4LCB5KSApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBiID0gYnl0ZUFycmF5T3V0cHV0U3RyZWFtKCk7XG4gICAgZ2lmLndyaXRlKGIpO1xuXG4gICAgdmFyIGJhc2U2NCA9IGJhc2U2NEVuY29kZU91dHB1dFN0cmVhbSgpO1xuICAgIHZhciBieXRlcyA9IGIudG9CeXRlQXJyYXkoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBiYXNlNjQud3JpdGVCeXRlKGJ5dGVzW2ldKTtcbiAgICB9XG4gICAgYmFzZTY0LmZsdXNoKCk7XG5cbiAgICByZXR1cm4gJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCwnICsgYmFzZTY0O1xuICB9O1xuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybnMgcXJjb2RlIGZ1bmN0aW9uLlxuXG4gIHJldHVybiBxcmNvZGU7XG59KCk7XG5cbi8vIG11bHRpYnl0ZSBzdXBwb3J0XG4hZnVuY3Rpb24oKSB7XG5cbiAgcXJjb2RlLnN0cmluZ1RvQnl0ZXNGdW5jc1snVVRGLTgnXSA9IGZ1bmN0aW9uKHMpIHtcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE4NzI5NDA1L2hvdy10by1jb252ZXJ0LXV0Zjgtc3RyaW5nLXRvLWJ5dGUtYXJyYXlcbiAgICBmdW5jdGlvbiB0b1VURjhBcnJheShzdHIpIHtcbiAgICAgIHZhciB1dGY4ID0gW107XG4gICAgICBmb3IgKHZhciBpPTA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoYXJjb2RlID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjaGFyY29kZSA8IDB4ODApIHV0ZjgucHVzaChjaGFyY29kZSk7XG4gICAgICAgIGVsc2UgaWYgKGNoYXJjb2RlIDwgMHg4MDApIHtcbiAgICAgICAgICB1dGY4LnB1c2goMHhjMCB8IChjaGFyY29kZSA+PiA2KSxcbiAgICAgICAgICAgICAgMHg4MCB8IChjaGFyY29kZSAmIDB4M2YpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGFyY29kZSA8IDB4ZDgwMCB8fCBjaGFyY29kZSA+PSAweGUwMDApIHtcbiAgICAgICAgICB1dGY4LnB1c2goMHhlMCB8IChjaGFyY29kZSA+PiAxMiksXG4gICAgICAgICAgICAgIDB4ODAgfCAoKGNoYXJjb2RlPj42KSAmIDB4M2YpLFxuICAgICAgICAgICAgICAweDgwIHwgKGNoYXJjb2RlICYgMHgzZikpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGkrKztcbiAgICAgICAgICAvLyBVVEYtMTYgZW5jb2RlcyAweDEwMDAwLTB4MTBGRkZGIGJ5XG4gICAgICAgICAgLy8gc3VidHJhY3RpbmcgMHgxMDAwMCBhbmQgc3BsaXR0aW5nIHRoZVxuICAgICAgICAgIC8vIDIwIGJpdHMgb2YgMHgwLTB4RkZGRkYgaW50byB0d28gaGFsdmVzXG4gICAgICAgICAgY2hhcmNvZGUgPSAweDEwMDAwICsgKCgoY2hhcmNvZGUgJiAweDNmZik8PDEwKVxuICAgICAgICAgICAgfCAoc3RyLmNoYXJDb2RlQXQoaSkgJiAweDNmZikpO1xuICAgICAgICAgIHV0ZjgucHVzaCgweGYwIHwgKGNoYXJjb2RlID4+MTgpLFxuICAgICAgICAgICAgICAweDgwIHwgKChjaGFyY29kZT4+MTIpICYgMHgzZiksXG4gICAgICAgICAgICAgIDB4ODAgfCAoKGNoYXJjb2RlPj42KSAmIDB4M2YpLFxuICAgICAgICAgICAgICAweDgwIHwgKGNoYXJjb2RlICYgMHgzZikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdXRmODtcbiAgICB9XG4gICAgcmV0dXJuIHRvVVRGOEFycmF5KHMpO1xuICB9O1xuXG59KCk7XG5cbihmdW5jdGlvbiAoZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH1cbn0oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBxcmNvZGU7XG59KSk7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVRckNvZGUgPSBleHBvcnRzLnJlYWRRckNvZGUgPSB2b2lkIDA7XG5jb25zdCBxcl9zY2FubmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInFyLXNjYW5uZXJcIikpO1xuY29uc3QgcXJjb2RlX2dlbmVyYXRvcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJxcmNvZGUtZ2VuZXJhdG9yXCIpKTtcbmxldCBzY2FubmVyO1xuZnVuY3Rpb24gcmVhZFFyQ29kZShjYWxsYmFjaywgdmlkZW9FbGVtZW50KSB7XG4gICAgaWYgKCFzY2FubmVyKSB7XG4gICAgICAgIHNjYW5uZXIgPSBuZXcgcXJfc2Nhbm5lcl8xLmRlZmF1bHQodmlkZW9FbGVtZW50LCAoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgIHNjYW5uZXIuc3RvcCgpO1xuICAgICAgICAgICAgY2FsbGJhY2soSlNPTi5wYXJzZShkYXRhKSk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGhpZ2hsaWdodFNjYW5SZWdpb246IHRydWUsXG4gICAgICAgICAgICBvbkRlY29kZUVycm9yOiAoKSA9PiB7IH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNjYW5uZXIuc3RhcnQoKTtcbn1cbmV4cG9ydHMucmVhZFFyQ29kZSA9IHJlYWRRckNvZGU7XG5mdW5jdGlvbiBjcmVhdGVRckNvZGUoZGF0YSkge1xuICAgIGNvbnN0IHFyID0gKDAsIHFyY29kZV9nZW5lcmF0b3JfMS5kZWZhdWx0KSgwLCAnTCcpO1xuICAgIHFyLmFkZERhdGEoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIHFyLm1ha2UoKTtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxcicpO1xuICAgIGlmIChlbCkge1xuICAgICAgICBlbC5pbm5lckhUTUwgPSBxci5jcmVhdGVTdmdUYWcoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNWRyBjb250YWluZXIgbm90IGZvdW5kXCIpO1xuICAgIH1cbn1cbmV4cG9ydHMuY3JlYXRlUXJDb2RlID0gY3JlYXRlUXJDb2RlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2VuZElmcmFtZU1lc3NhZ2UgPSBleHBvcnRzLnNlbmRNZXNzYWdlID0gZXhwb3J0cy5hZGRBbnN3ZXIgPSBleHBvcnRzLmNyZWF0ZUFuc3dlciA9IGV4cG9ydHMuY3JlYXRlT2ZmZXIgPSB2b2lkIDA7XG5jb25zdCBxcmNvZGVfMSA9IHJlcXVpcmUoXCIuL3FyY29kZVwiKTtcbmNvbnN0IHNlcnZlcnMgPSB7XG4gICAgaWNlU2VydmVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICB1cmxzOiBbXG4gICAgICAgICAgICAgICAgJ3N0dW46c3R1bjEuMS5nb29nbGUuY29tOjE5MzAyJyxcbiAgICAgICAgICAgICAgICAnc3R1bjpzdHVuMi4xLmdvb2dsZS5jb206MTkzMDInLFxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgXVxufTtcbi8vIGNvbnN0IHNlcnZlcnMgPSB7XCJpY2VTZXJ2ZXJzXCI6W119O1xuZnVuY3Rpb24gY3JlYXRlUGVlckNvbm5lY3Rpb24oaGFuZGxlT3Blbikge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHBjID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKHNlcnZlcnMpO1xuICAgICAgICBjb25zdCBkYyA9IHBjLmNyZWF0ZURhdGFDaGFubmVsKFwiZGF0YWNoYW5uZWxcIik7XG4gICAgICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gZnVuY3Rpb24gKCkgeyBjb25zb2xlLmxvZyhcIi0tLS0tLS0gREMgY2xvc2VkISAtLS0tLS0tXCIpOyB9O1xuICAgICAgICBjb25zdCBoYW5kbGVFcnJvciA9IGZ1bmN0aW9uICgpIHsgY29uc29sZS5sb2coXCJEQyBFUlJPUiEhIVwiKTsgfTtcbiAgICAgICAgLy8gZGF0YUNoYW5uZWwub25tZXNzYWdlID0gaGFuZGxlTWVzc2FnZTtcbiAgICAgICAgLy8gZGF0YUNoYW5uZWwub25vcGVuID0gaGFuZGxlT3BlbjtcbiAgICAgICAgLy8gZGF0YUNoYW5uZWwub25jbG9zZSA9IGhhbmRsZUNsb3NlO1xuICAgICAgICBkYy5vbmVycm9yID0gaGFuZGxlRXJyb3I7XG4gICAgICAgIHBjLm9uZGF0YWNoYW5uZWwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY2VpdmUgPSBldmVudC5jaGFubmVsO1xuICAgICAgICAgICAgcmVjZWl2ZS5vbm1lc3NhZ2UgPSBoYW5kbGVNZXNzYWdlO1xuICAgICAgICAgICAgcmVjZWl2ZS5vbm9wZW4gPSBoYW5kbGVPcGVuO1xuICAgICAgICAgICAgcmVjZWl2ZS5vbmNsb3NlID0gaGFuZGxlQ2xvc2U7XG4gICAgICAgICAgICByZWNlaXZlLm9uZXJyb3IgPSBoYW5kbGVFcnJvcjtcbiAgICAgICAgfTtcbiAgICAgICAgcGMub25pY2VjYW5kaWRhdGUgPSAoZXZlbnQpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5jYW5kaWRhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAocGMubG9jYWxEZXNjcmlwdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHR5cGUgKyBcIi1ib3hcIikgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgLy8gYm94LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkocGMubG9jYWxEZXNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICAgICAgKDAsIHFyY29kZV8xLmNyZWF0ZVFyQ29kZSkocGMubG9jYWxEZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQZWVyIGNvbm5lY3Rpb24gbG9jYWwgZGVzY3JpcHRpb24gaXMgbnVsbFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4geyBwYywgZGMgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZU9mZmVyKGhhbmRsZU9wZW4pIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0geWllbGQgY3JlYXRlUGVlckNvbm5lY3Rpb24oaGFuZGxlT3Blbik7XG4gICAgICAgIGNvbnN0IG9mZmVyID0geWllbGQgY29ubmVjdGlvbi5wYy5jcmVhdGVPZmZlcigpO1xuICAgICAgICB5aWVsZCBjb25uZWN0aW9uLnBjLnNldExvY2FsRGVzY3JpcHRpb24ob2ZmZXIpO1xuICAgICAgICByZXR1cm4gY29ubmVjdGlvbjtcbiAgICB9KTtcbn1cbmV4cG9ydHMuY3JlYXRlT2ZmZXIgPSBjcmVhdGVPZmZlcjtcbmZ1bmN0aW9uIGNyZWF0ZUFuc3dlcihvZmZlciwgaGFuZGxlT3Blbikge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSB5aWVsZCBjcmVhdGVQZWVyQ29ubmVjdGlvbihoYW5kbGVPcGVuKTtcbiAgICAgICAgeWllbGQgY29ubmVjdGlvbi5wYy5zZXRSZW1vdGVEZXNjcmlwdGlvbihvZmZlcik7XG4gICAgICAgIGNvbnN0IGFuc3dlciA9IHlpZWxkIGNvbm5lY3Rpb24ucGMuY3JlYXRlQW5zd2VyKCk7XG4gICAgICAgIHlpZWxkIGNvbm5lY3Rpb24ucGMuc2V0TG9jYWxEZXNjcmlwdGlvbihhbnN3ZXIpO1xuICAgICAgICByZXR1cm4gY29ubmVjdGlvbjtcbiAgICB9KTtcbn1cbmV4cG9ydHMuY3JlYXRlQW5zd2VyID0gY3JlYXRlQW5zd2VyO1xuZnVuY3Rpb24gYWRkQW5zd2VyKGFuc3dlciwgcGMpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoIXBjLmN1cnJlbnRSZW1vdGVEZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgcGMuc2V0UmVtb3RlRGVzY3JpcHRpb24oYW5zd2VyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbm5lY3Rpb24gYWxyZWFkeSBtYWRlXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmFkZEFuc3dlciA9IGFkZEFuc3dlcjtcbmZ1bmN0aW9uIHNlbmRNZXNzYWdlKG1zZywgZGMpIHtcbiAgICBkYy5zZW5kKG1zZyk7XG4gICAgY29uc29sZS5sb2coXCJTZW50IHRvIERDIFwiICsgbXNnKTtcbn1cbmV4cG9ydHMuc2VuZE1lc3NhZ2UgPSBzZW5kTWVzc2FnZTtcbmZ1bmN0aW9uIHNlbmRJZnJhbWVNZXNzYWdlKG1zZykge1xuICAgIGNvbnN0IGdhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVcIik7XG4gICAgaWYgKGdhbWUpIHtcbiAgICAgICAgaWYgKGdhbWUuY29udGVudFdpbmRvdykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFNlbnQgJHttc2d9IHRvIGlmcmFtZSAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX1gKTtcbiAgICAgICAgICAgIGdhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShtc2cpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5zZW5kSWZyYW1lTWVzc2FnZSA9IHNlbmRJZnJhbWVNZXNzYWdlO1xuZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShlKSB7XG4gICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBEQyBtZXNzYWdlOlwiICsgZS5kYXRhKTtcbiAgICBzZW5kSWZyYW1lTWVzc2FnZShlLmRhdGEpO1xufVxuO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCIuL2luZGV4LmNzc1wiKTtcbmNvbnN0IHFyY29kZV8xID0gcmVxdWlyZShcIi4uL2xpYi9xcmNvZGVcIik7XG5jb25zdCB3ZWJydGNfMSA9IHJlcXVpcmUoXCIuLi9saWIvd2VicnRjXCIpO1xuY29uc3QgdmlkZW9FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NhblwiKTtcbmlmICghdmlkZW9FbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlZpZGVvIEVsZW1lbnQgbm90IGZvdW5kXCIpO1xufVxuY29uc3QgbnVtYmVyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJudW1iZXItYnV0dG9uXCIpO1xuaWYgKG51bWJlckJ1dHRvbikge1xuICAgIG51bWJlckJ1dHRvbi5vbmNsaWNrID0gc3RhcnQ7XG59XG5jb25zdCBjb25uZWN0aW9ucyA9IFtdO1xuZnVuY3Rpb24gY3JlYXRlQ29ubmVjdGlvbigpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBmdW5jdGlvbiBoYW5kbGVPcGVuKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0gREFUQUNIQU5ORUwgT1BFTkVEIC0tLS0tLVwiKTtcbiAgICAgICAgICAgIGNvbm5lY3Rpb25SZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0geWllbGQgKDAsIHdlYnJ0Y18xLmNyZWF0ZU9mZmVyKShoYW5kbGVPcGVuKTtcbiAgICAgICAgY29ubmVjdGlvbnMucHVzaChjb25uZWN0aW9uKTtcbiAgICAgICAgbGV0IGNvbm5lY3Rpb25SZXNvbHZlO1xuICAgICAgICAoMCwgcXJjb2RlXzEucmVhZFFyQ29kZSkoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICgwLCB3ZWJydGNfMS5hZGRBbnN3ZXIpKGRhdGEsIGNvbm5lY3Rpb25zW2Nvbm5lY3Rpb25zLmxlbmd0aCAtIDFdLnBjKTtcbiAgICAgICAgfSwgdmlkZW9FbCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgXykgPT4ge1xuICAgICAgICAgICAgY29ubmVjdGlvblJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IG51bWJlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibnVtYmVyLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3Qgd2VicnRjQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWJydGNcIik7XG4gICAgICAgIGlmIChudW1iZXJDb250YWluZXIgJiYgd2VicnRjQ29udGFpbmVyKSB7XG4gICAgICAgICAgICBudW1iZXJDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgd2VicnRjQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG51bWJlckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm51bWJlclwiKTtcbiAgICAgICAgY29uc3QgbnVtYmVyID0gcGFyc2VJbnQobnVtYmVyRWxlbWVudCA9PT0gbnVsbCB8fCBudW1iZXJFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBudW1iZXJFbGVtZW50LmlubmVyVGV4dCk7XG4gICAgICAgIGZvciAobGV0IHAgPSAwOyBwIDwgbnVtYmVyIC0gMTsgcCsrKSB7XG4gICAgICAgICAgICB5aWVsZCBjcmVhdGVDb25uZWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsICh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBGcm9tIGlmcmFtZVwiLCBkYXRhKTtcbiAgICAgICAgICAgIGNvbnN0IFtjb25uZWN0aW9uLCBtc2ddID0gZGF0YS5zcGxpdCgvICguKikvcyk7XG4gICAgICAgICAgICAoMCwgd2VicnRjXzEuc2VuZE1lc3NhZ2UpKG1zZywgY29ubmVjdGlvbnNbcGFyc2VJbnQoY29ubmVjdGlvbikgLSAxXS5kYyk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBydGNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWJydGNcIik7XG4gICAgICAgIGlmIChydGNFbGVtZW50KSB7XG4gICAgICAgICAgICBydGNFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBnYW1lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZVwiKTtcbiAgICAgICAgaWYgKGdhbWVFbGVtZW50KSB7XG4gICAgICAgICAgICBnYW1lRWxlbWVudC5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAoMCwgd2VicnRjXzEuc2VuZElmcmFtZU1lc3NhZ2UpKFwic3RhcnQgXCIgKyBudW1iZXIpO1xuICAgIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi1idW5kbGUuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuLy8gXCIxXCIgbWVhbnMgXCJsb2FkZWRcIiwgb3RoZXJ3aXNlIG5vdCBsb2FkZWQgeWV0XG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm9mZmVyL2luZGV4XCI6IDFcbn07XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxudmFyIGluc3RhbGxDaHVuayA9IChjaHVuaykgPT4ge1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcywgcnVudGltZSA9IGNodW5rLnJ1bnRpbWU7XG5cdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAxO1xuXG59O1xuXG4vLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLnJlcXVpcmUgPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0Ly8gXCIxXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG5cdGlmKCFpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0aW5zdGFsbENodW5rKHJlcXVpcmUoXCIuLi9cIiArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKSkpO1xuXHRcdH0gZWxzZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAxO1xuXHR9XG59O1xuXG4vLyBubyBleHRlcm5hbCBpbnN0YWxsIGNodW5rXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3QiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9vZmZlci9vZmZlci50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==