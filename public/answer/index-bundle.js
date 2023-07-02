/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/qrcode.ts":
/*!***********************!*\
  !*** ./src/qrcode.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createQrCode = exports.readQrCode = void 0;
const qr_scanner_1 = __importDefault(__webpack_require__(/*! qr-scanner */ "./node_modules/qr-scanner/qr-scanner.min.js"));
const qrcode_generator_1 = __importDefault(__webpack_require__(/*! qrcode-generator */ "./node_modules/qrcode-generator/qrcode.js"));
function readQrCode(callback, videoElement) {
    videoElement.style.display = "";
    const qrScanner = new qr_scanner_1.default(videoElement, ({ data }) => {
        videoElement.style.display = "none";
        callback(qrScanner, JSON.parse(data));
    }, { highlightScanRegion: true,
        onDecodeError: () => { } });
    qrScanner.start();
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

/***/ "./src/webrtc.ts":
/*!***********************!*\
  !*** ./src/webrtc.ts ***!
  \***********************/
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
exports.sendMessage = exports.addAnswer = exports.createAnswer = exports.createOffer = void 0;
const qrcode_1 = __webpack_require__(/*! ./qrcode */ "./src/qrcode.ts");
let pc;
let dataChannel;
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
function createPeerConnection(type) {
    return __awaiter(this, void 0, void 0, function* () {
        pc = new RTCPeerConnection(servers);
        dataChannel = pc.createDataChannel("datachannel");
        const handleMessage = function (e) { console.log("DC message:" + e.data); };
        const handleoOpen = function () { console.log("------ DATACHANNEL OPENED ------"); };
        const handleClose = function () { console.log("------- DC closed! -------"); };
        const handleError = function () { console.log("DC ERROR!!!"); };
        dataChannel.onmessage = handleMessage;
        dataChannel.onopen = handleoOpen;
        dataChannel.onclose = handleClose;
        dataChannel.onerror = handleError;
        pc.ondatachannel = function (event) {
            const receive = event.channel;
            receive.onmessage = handleMessage;
            receive.onopen = handleoOpen;
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
    });
}
function createOffer() {
    return __awaiter(this, void 0, void 0, function* () {
        createPeerConnection("offer");
        const offer = yield pc.createOffer();
        yield pc.setLocalDescription(offer);
        (0, qrcode_1.createQrCode)(offer);
    });
}
exports.createOffer = createOffer;
function createAnswer(offer) {
    return __awaiter(this, void 0, void 0, function* () {
        createPeerConnection("answer");
        yield pc.setRemoteDescription(offer);
        const answer = yield pc.createAnswer();
        yield pc.setLocalDescription(answer);
        (0, qrcode_1.createQrCode)(answer);
    });
}
exports.createAnswer = createAnswer;
function addAnswer(answer) {
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
function sendMessage(msg) {
    dataChannel.send(msg);
}
exports.sendMessage = sendMessage;


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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "card_game:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"answer/index": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcard_game"] = self["webpackChunkcard_game"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!***********************!*\
  !*** ./src/answer.ts ***!
  \***********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const qrcode_1 = __webpack_require__(/*! ./qrcode */ "./src/qrcode.ts");
const webrtc_1 = __webpack_require__(/*! ./webrtc */ "./src/webrtc.ts");
const videoEl = document.getElementById("scan");
if (!videoEl) {
    throw new Error("Video Element not found");
}
(0, qrcode_1.readQrCode)((scanner, data) => {
    scanner.stop();
    videoEl.style.display = "none";
    (0, webrtc_1.createAnswer)(data);
}, videoEl);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2VyL2luZGV4LWJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLFFBQVEsdUJBQXVCLDZDQUE2QyxvQ0FBb0MsMkJBQTJCLDJCQUEyQiwyREFBMkQsY0FBYyw4Q0FBOEM7QUFDN1Isd0JBQXdCLDJCQUEyQixtRkFBbUYscUdBQXFHLGtFQUFrRSwwRkFBMEYscUVBQXFFLHFDQUFxQztBQUNqZixrQ0FBa0MsNkRBQTZELG1EQUFtRCw2QkFBNkIsaUJBQWlCLFdBQVcsU0FBUyw2QkFBNkIsK0RBQStELGtCQUFrQixrREFBa0QsY0FBYyx1REFBdUQsc0JBQXNCLHNCQUFzQjtBQUNyZSx1QkFBdUIscURBQXFELDhCQUE4QiwwSUFBMEksV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLGVBQWUsZUFBZSxxQkFBcUIscUpBQXFKLElBQUkseUNBQXlDO0FBQ3ZoQixlQUFlLEVBQUUsNEVBQTRFLEVBQUUsVUFBVSxzREFBc0QsMEpBQTBKLFdBQVcsWUFBWSxVQUFVLGVBQWUsZUFBZSxvQkFBb0IscUJBQXFCLHFHQUFxRztBQUN0Z0IsNkJBQTZCLDJCQUEyQixpQ0FBaUMsOEVBQThFLHlGQUF5RjtBQUNoUSx3REFBd0QscUNBQXFDLEVBQUUsd0NBQXdDLDREQUE0RCx1RUFBdUUsc0RBQXNELHlDQUF5QywwQkFBMEIsK0lBQStJLHlCQUF5QixJQUFJLHlDQUF5QyxTQUFTLFVBQVU7QUFDM21CLElBQUksb0NBQW9DLG9HQUFvRyxJQUFJLGlGQUFpRixrQkFBa0IsR0FBRyxVQUFVLElBQUksK0JBQStCLCtEQUErRCxJQUFJLEdBQUcsR0FBRyxRQUFRLGlKQUFpSixpQkFBaUI7QUFDdGhCLElBQUksMEJBQTBCLDREQUE0RCx3QkFBd0IsOENBQThDLG9EQUFvRCxTQUFTLFNBQVMsUUFBUSx3S0FBd0ssWUFBWSxxQkFBcUIsb0JBQW9CLGlFQUFpRSxvQkFBb0I7QUFDaGlCLHFFQUFxRSxvREFBb0Qsa0VBQWtFLFdBQVcsU0FBUyxFQUFFLEVBQUUsU0FBUywyQkFBMkIscUJBQXFCLG1FQUFtRSxVQUFVLHlFQUF5RSxxREFBcUQ7QUFDdmQsMEJBQTBCLHlEQUF5RCxtQkFBbUIsaUJBQWlCLFlBQVksb0RBQW9ELGNBQWMsOEZBQThGO0FBQ25TLGtEQUFrRCxTQUFTLEtBQUssc0JBQXNCLCtCQUErQiw0TEFBNEwsSUFBSSxTQUFTLDJDQUEyQyxPQUFPLGFBQWEsZ0JBQWdCLGtCQUFrQixnQkFBZ0IsMEJBQTBCLG9CQUFvQjtBQUM3ZCxRQUFRLFdBQVcsc0hBQXNILG1CQUFtQix3Q0FBd0MsMEJBQTBCLElBQUksU0FBUyxtQkFBbUIsc0ZBQXNGLDBDQUEwQyxXQUFXO0FBQ3pZLHVhQUF1YSxNQUFNLElBQUksUUFBUTtBQUN6YiwrQkFBK0IsTUFBTSx3QkFBd0IsUUFBUSxzREFBc0QsNEJBQTRCLGVBQWUsTUFBTSwwSEFBMEgsc0VBQXNFLDBCQUEwQixNQUFNLG1DQUFtQyxpQ0FBaUMsZ0JBQWdCO0FBQ2hlLGdDQUFnQyxnQ0FBZ0MsOEJBQThCLG1DQUFtQywyQ0FBMkMseURBQXlELEVBQUUsaUhBQWlILElBQUksMEJBQTBCLCtCQUErQixPQUFPLGlFQUFpRSxTQUFTO0FBQ3RlLG9HQUFvRywwRUFBMEUsRUFBRSx1QkFBdUIsRUFBRSxJQUFJLE1BQU0sa0JBQWtCLFNBQVMsa0JBQWtCLDJCQUEyQiw2Q0FBNkMsRUFBRSxrQkFBa0IsUUFBUSxvQ0FBb0MsZ0NBQWdDLCtEQUErRDtBQUN2ZSxpQ0FBaUMsRUFBRSxvQkFBb0IsOERBQThELCtCQUErQix1RkFBdUYsTUFBTSw2T0FBb0MsMkJBQTJCLGdMQUFnTDtBQUNoZSwwQkFBMEIsUUFBUSw4SEFBOEgsaUNBQWlDLHdGQUF3RixvQkFBb0IsRUFBRSxVQUFVLHdEQUF3RCxzQkFBc0IsZ0RBQWdELGtCQUFrQixvQkFBb0I7QUFDN2Qsc0JBQXNCLHNCQUFzQix3REFBd0Qsd0JBQXdCLDJEQUEyRCxPQUFPLG9LQUFvSyxpQkFBaUIsMkJBQTJCLGtCQUFrQjtBQUNoYSxxRUFBcUUsVUFBVSxvQkFBb0IsUUFBUSxNQUFNLGdCQUFnQixJQUFJLE1BQU0sMEdBQTBHLGtEQUFrRCxzQkFBc0IsMkNBQTJDLEVBQUUsNEJBQTRCLDZCQUE2Qix3QkFBd0IsNEJBQTRCLHNCQUFzQjtBQUM3ZSxHQUFHLE1BQU0sSUFBSSxZQUFZLE1BQU0sSUFBSSxTQUFTLFVBQVUsSUFBSSx5Q0FBeUMsVUFBVSw4QkFBOEIsSUFBSSwrQkFBK0IsRUFBRSwyQkFBMkIsZUFBZSwrRUFBK0UsNkRBQTZELHVDQUF1QyxTQUFTLGFBQWE7QUFDbmEscUdBQXFHLGlDQUFpQyx1RUFBdUUsNkNBQTZDLG1DQUFtQyxJQUFJLHFDQUFxQywrRUFBK0UsRUFBRSxTQUFTLHdCQUF3Qix1QkFBdUI7QUFDL2MsbURBQW1ELGdSQUFnUix1QkFBdUIsS0FBSyx1QkFBdUIsS0FBSyxnREFBZ0QsS0FBSyxpREFBaUQ7QUFDamUscUJBQXFCLFFBQVEsTUFBTSxFQUFFLEdBQUcsRUFBRSxrUEFBa1Asa0JBQWtCLEVBQUUsa0JBQWtCLHVDQUF1Qyx5QkFBeUIsb0RBQW9EO0FBQ3RiLGVBQWUsT0FBTyxVQUFVLEVBQUUsT0FBTyxTQUFTLEdBQUcsNkJBQTZCLElBQUksS0FBSyw2QkFBNkIsR0FBRyw0QkFBNEIsaURBQWlELGlCQUFpQiw0SEFBNEgsT0FBTyx1QkFBdUIsVUFBVSwwQkFBMEIsNEJBQTRCLG1CQUFtQiwyREFBMkQsMkJBQTJCO0FBQzVoQixpQkFBaUIsbUJBQW1CLDREQUE0RCxrQkFBa0IsdUlBQXVJLGlDQUFpQyxzQ0FBc0MsNEhBQTRIO0FBQzViLDBFQUEwRSxxQkFBcUIsU0FBUyxFQUFFLDJCQUEyQiw0Q0FBNEMsWUFBWSwyQkFBMkIsMERBQTBELG9OQUFvTjtBQUN0ZSxnRUFBZ0UsZ0JBQWdCLCtFQUErRSxJQUFJLG9DQUFvQyxRQUFRLG9FQUFvRSxxQ0FBcUMsZ0NBQWdDLDBEQUEwRCxVQUFVLGdDQUFnQyxpQ0FBaUM7QUFDN2QsMkJBQTJCLDZCQUE2Qiw4QkFBOEIsRUFBRSx5Q0FBeUMsK0NBQStDLHVDQUF1QyxtQ0FBbUMsMkJBQTJCLGVBQWUsbUJBQW1CLElBQUksVUFBVSwwQkFBMEIsc0NBQXNDLDZCQUE2QixxQkFBcUIsaUVBQWUsQ0FBQztBQUN2Yzs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUJBQW1CO0FBQzdDO0FBQ0EsNEJBQTRCLG1CQUFtQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx1QkFBdUIsUUFBUTs7QUFFL0I7O0FBRUEseUJBQXlCLFFBQVE7O0FBRWpDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxzQkFBc0IsT0FBTzs7QUFFN0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHNCQUFzQixzQkFBc0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0Isc0JBQXNCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxzQkFBc0IsZ0JBQWdCOztBQUV0Qyx3QkFBd0IsZ0JBQWdCOztBQUV4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsUUFBUTs7QUFFbkMsNkJBQTZCLFFBQVE7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixRQUFROztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixRQUFROztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsU0FBUzs7QUFFaEQ7O0FBRUE7O0FBRUEsMEJBQTBCLE9BQU87O0FBRWpDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0JBQXNCLHFCQUFxQjs7QUFFM0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixnQkFBZ0I7QUFDdEMsd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixxQkFBcUI7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTs7QUFFQSwwQkFBMEIsc0JBQXNCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIscUJBQXFCO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQ0FBcUMsbUJBQW1CO0FBQ3hELDRDQUE0QztBQUM1QyxnQ0FBZ0MseUJBQXlCO0FBQ3pEO0FBQ0E7O0FBRUEsc0JBQXNCLDRCQUE0Qjs7QUFFbEQ7O0FBRUEsd0JBQXdCLDRCQUE0QjtBQUNwRDtBQUNBLHlDQUF5QyxtQkFBbUI7QUFDNUQsZ0RBQWdEO0FBQ2hELG9DQUFvQyxZQUFZO0FBQ2hELGdEQUFnRDtBQUNoRCxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUMsV0FBVztBQUNwRDtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLGFBQWE7QUFDMUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLDRCQUE0QjtBQUM5QztBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixjQUFjO0FBQ3BDO0FBQ0E7QUFDQSxrQ0FBa0MsR0FBRztBQUNyQyxrQ0FBa0MsR0FBRztBQUNyQyxtQ0FBbUMsR0FBRztBQUN0QyxvQ0FBb0MsR0FBRztBQUN2QyxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLFVBQVU7QUFDNUI7QUFDQTtBQUNBLG9CQUFvQixVQUFVO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFVBQVU7QUFDNUI7QUFDQTtBQUNBLG9CQUFvQixVQUFVO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGNBQWM7QUFDdEMsMEJBQTBCLGNBQWM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsY0FBYztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsY0FBYztBQUNwQztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0Isd0JBQXdCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUTs7QUFFUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVE7O0FBRVI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHdCQUF3QixtQkFBbUI7QUFDM0MsMEJBQTBCLG1CQUFtQjs7QUFFN0M7QUFDQTs7QUFFQSwyQkFBMkIsUUFBUTs7QUFFbkM7QUFDQTtBQUNBOztBQUVBLDZCQUE2QixRQUFROztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx3QkFBd0IsdUJBQXVCO0FBQy9DLDBCQUEwQix1QkFBdUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsd0JBQXdCLG1CQUFtQjtBQUMzQywwQkFBMEIsdUJBQXVCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLG1CQUFtQjtBQUMzQywwQkFBMEIsdUJBQXVCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCLG1CQUFtQjtBQUMzQywwQkFBMEIsbUJBQW1CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlCQUF5QjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsc0JBQXNCLHVCQUF1QjtBQUM3Qyx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQix1QkFBdUI7QUFDN0M7QUFDQTs7QUFFQSxzQkFBc0IsbUJBQW1CO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsc0JBQXNCLFlBQVk7O0FBRWxDO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsV0FBVztBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsY0FBYztBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixtQkFBbUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsY0FBYztBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQkFBbUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNCQUFzQixlQUFlO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsVUFBVTs7QUFFVjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQyxzQkFBc0IsV0FBVztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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QztBQUM3RCxpQkFBaUIsbUJBQU8sQ0FBQyxpQ0FBVTtBQUNuQyxpQkFBaUIsbUJBQU8sQ0FBQyxpQ0FBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcmRfZ2FtZS8uL25vZGVfbW9kdWxlcy9xci1zY2FubmVyL3FyLXNjYW5uZXIubWluLmpzIiwid2VicGFjazovL2NhcmRfZ2FtZS8uL25vZGVfbW9kdWxlcy9xcmNvZGUtZ2VuZXJhdG9yL3FyY29kZS5qcyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9zcmMvcXJjb2RlLnRzIiwid2VicGFjazovL2NhcmRfZ2FtZS8uL3NyYy93ZWJydGMudHMiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhcmRfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL2NhcmRfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NhcmRfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lLy4vc3JjL2Fuc3dlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBle2NvbnN0cnVjdG9yKGEsYixjLGQsZil7dGhpcy5fbGVnYWN5Q2FudmFzU2l6ZT1lLkRFRkFVTFRfQ0FOVkFTX1NJWkU7dGhpcy5fcHJlZmVycmVkQ2FtZXJhPVwiZW52aXJvbm1lbnRcIjt0aGlzLl9tYXhTY2Fuc1BlclNlY29uZD0yNTt0aGlzLl9sYXN0U2NhblRpbWVzdGFtcD0tMTt0aGlzLl9kZXN0cm95ZWQ9dGhpcy5fZmxhc2hPbj10aGlzLl9wYXVzZWQ9dGhpcy5fYWN0aXZlPSExO3RoaXMuJHZpZGVvPWE7dGhpcy4kY2FudmFzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7YyYmXCJvYmplY3RcIj09PXR5cGVvZiBjP3RoaXMuX29uRGVjb2RlPWI6KGN8fGR8fGY/Y29uc29sZS53YXJuKFwiWW91J3JlIHVzaW5nIGEgZGVwcmVjYXRlZCB2ZXJzaW9uIG9mIHRoZSBRclNjYW5uZXIgY29uc3RydWN0b3Igd2hpY2ggd2lsbCBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmVcIik6Y29uc29sZS53YXJuKFwiTm90ZSB0aGF0IHRoZSB0eXBlIG9mIHRoZSBzY2FuIHJlc3VsdCBwYXNzZWQgdG8gb25EZWNvZGUgd2lsbCBjaGFuZ2UgaW4gdGhlIGZ1dHVyZS4gVG8gYWxyZWFkeSBzd2l0Y2ggdG8gdGhlIG5ldyBhcGkgdG9kYXksIHlvdSBjYW4gcGFzcyByZXR1cm5EZXRhaWxlZFNjYW5SZXN1bHQ6IHRydWUuXCIpLFxudGhpcy5fbGVnYWN5T25EZWNvZGU9Yik7Yj1cIm9iamVjdFwiPT09dHlwZW9mIGM/Yzp7fTt0aGlzLl9vbkRlY29kZUVycm9yPWIub25EZWNvZGVFcnJvcnx8KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBjP2M6dGhpcy5fb25EZWNvZGVFcnJvcik7dGhpcy5fY2FsY3VsYXRlU2NhblJlZ2lvbj1iLmNhbGN1bGF0ZVNjYW5SZWdpb258fChcImZ1bmN0aW9uXCI9PT10eXBlb2YgZD9kOnRoaXMuX2NhbGN1bGF0ZVNjYW5SZWdpb24pO3RoaXMuX3ByZWZlcnJlZENhbWVyYT1iLnByZWZlcnJlZENhbWVyYXx8Znx8dGhpcy5fcHJlZmVycmVkQ2FtZXJhO3RoaXMuX2xlZ2FjeUNhbnZhc1NpemU9XCJudW1iZXJcIj09PXR5cGVvZiBjP2M6XCJudW1iZXJcIj09PXR5cGVvZiBkP2Q6dGhpcy5fbGVnYWN5Q2FudmFzU2l6ZTt0aGlzLl9tYXhTY2Fuc1BlclNlY29uZD1iLm1heFNjYW5zUGVyU2Vjb25kfHx0aGlzLl9tYXhTY2Fuc1BlclNlY29uZDt0aGlzLl9vblBsYXk9dGhpcy5fb25QbGF5LmJpbmQodGhpcyk7dGhpcy5fb25Mb2FkZWRNZXRhRGF0YT1cbnRoaXMuX29uTG9hZGVkTWV0YURhdGEuYmluZCh0aGlzKTt0aGlzLl9vblZpc2liaWxpdHlDaGFuZ2U9dGhpcy5fb25WaXNpYmlsaXR5Q2hhbmdlLmJpbmQodGhpcyk7dGhpcy5fdXBkYXRlT3ZlcmxheT10aGlzLl91cGRhdGVPdmVybGF5LmJpbmQodGhpcyk7YS5kaXNhYmxlUGljdHVyZUluUGljdHVyZT0hMDthLnBsYXlzSW5saW5lPSEwO2EubXV0ZWQ9ITA7bGV0IGg9ITE7YS5oaWRkZW4mJihhLmhpZGRlbj0hMSxoPSEwKTtkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGEpfHwoZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKSxoPSEwKTtjPWEucGFyZW50RWxlbWVudDtpZihiLmhpZ2hsaWdodFNjYW5SZWdpb258fGIuaGlnaGxpZ2h0Q29kZU91dGxpbmUpe2Q9ISFiLm92ZXJsYXk7dGhpcy4kb3ZlcmxheT1iLm92ZXJsYXl8fGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Zj10aGlzLiRvdmVybGF5LnN0eWxlO2YucG9zaXRpb249XCJhYnNvbHV0ZVwiO2YuZGlzcGxheT1cIm5vbmVcIjtcbmYucG9pbnRlckV2ZW50cz1cIm5vbmVcIjt0aGlzLiRvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJzY2FuLXJlZ2lvbi1oaWdobGlnaHRcIik7aWYoIWQmJmIuaGlnaGxpZ2h0U2NhblJlZ2lvbil7dGhpcy4kb3ZlcmxheS5pbm5lckhUTUw9JzxzdmcgY2xhc3M9XCJzY2FuLXJlZ2lvbi1oaWdobGlnaHQtc3ZnXCIgdmlld0JveD1cIjAgMCAyMzggMjM4XCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bGVmdDowO3RvcDowO2ZpbGw6bm9uZTtzdHJva2U6I2U5YjIxMztzdHJva2Utd2lkdGg6NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmRcIj48cGF0aCBkPVwiTTMxIDJIMTBhOCA4IDAgMCAwLTggOHYyMU0yMDcgMmgyMWE4IDggMCAwIDEgOCA4djIxbTAgMTc2djIxYTggOCAwIDAgMS04IDhoLTIxbS0xNzYgMEgxMGE4IDggMCAwIDEtOC04di0yMVwiLz48L3N2Zz4nO3RyeXt0aGlzLiRvdmVybGF5LmZpcnN0RWxlbWVudENoaWxkLmFuaW1hdGUoe3RyYW5zZm9ybTpbXCJzY2FsZSguOTgpXCIsXG5cInNjYWxlKDEuMDEpXCJdfSx7ZHVyYXRpb246NDAwLGl0ZXJhdGlvbnM6SW5maW5pdHksZGlyZWN0aW9uOlwiYWx0ZXJuYXRlXCIsZWFzaW5nOlwiZWFzZS1pbi1vdXRcIn0pfWNhdGNoKG0pe31jLmluc2VydEJlZm9yZSh0aGlzLiRvdmVybGF5LHRoaXMuJHZpZGVvLm5leHRTaWJsaW5nKX1iLmhpZ2hsaWdodENvZGVPdXRsaW5lJiYodGhpcy4kb3ZlcmxheS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwnPHN2ZyBjbGFzcz1cImNvZGUtb3V0bGluZS1oaWdobGlnaHRcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiIHN0eWxlPVwiZGlzcGxheTpub25lO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZmlsbDpub25lO3N0cm9rZTojZTliMjEzO3N0cm9rZS13aWR0aDo1O3N0cm9rZS1kYXNoYXJyYXk6MjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kXCI+PHBvbHlnb24vPjwvc3ZnPicpLHRoaXMuJGNvZGVPdXRsaW5lSGlnaGxpZ2h0PXRoaXMuJG92ZXJsYXkubGFzdEVsZW1lbnRDaGlsZCl9dGhpcy5fc2NhblJlZ2lvbj1cbnRoaXMuX2NhbGN1bGF0ZVNjYW5SZWdpb24oYSk7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpPT57bGV0IG09d2luZG93LmdldENvbXB1dGVkU3R5bGUoYSk7XCJub25lXCI9PT1tLmRpc3BsYXkmJihhLnN0eWxlLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLFwiYmxvY2tcIixcImltcG9ydGFudFwiKSxoPSEwKTtcInZpc2libGVcIiE9PW0udmlzaWJpbGl0eSYmKGEuc3R5bGUuc2V0UHJvcGVydHkoXCJ2aXNpYmlsaXR5XCIsXCJ2aXNpYmxlXCIsXCJpbXBvcnRhbnRcIiksaD0hMCk7aCYmKGNvbnNvbGUud2FybihcIlFyU2Nhbm5lciBoYXMgb3ZlcndyaXR0ZW4gdGhlIHZpZGVvIGhpZGluZyBzdHlsZSB0byBhdm9pZCBTYWZhcmkgc3RvcHBpbmcgdGhlIHBsYXliYWNrLlwiKSxhLnN0eWxlLm9wYWNpdHk9XCIwXCIsYS5zdHlsZS53aWR0aD1cIjBcIixhLnN0eWxlLmhlaWdodD1cIjBcIix0aGlzLiRvdmVybGF5JiZ0aGlzLiRvdmVybGF5LnBhcmVudEVsZW1lbnQmJnRoaXMuJG92ZXJsYXkucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLiRvdmVybGF5KSxcbmRlbGV0ZSB0aGlzLiRvdmVybGF5LGRlbGV0ZSB0aGlzLiRjb2RlT3V0bGluZUhpZ2hsaWdodCk7dGhpcy4kb3ZlcmxheSYmdGhpcy5fdXBkYXRlT3ZlcmxheSgpfSk7YS5hZGRFdmVudExpc3RlbmVyKFwicGxheVwiLHRoaXMuX29uUGxheSk7YS5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVkbWV0YWRhdGFcIix0aGlzLl9vbkxvYWRlZE1ldGFEYXRhKTtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLHRoaXMuX29uVmlzaWJpbGl0eUNoYW5nZSk7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLl91cGRhdGVPdmVybGF5KTt0aGlzLl9xckVuZ2luZVByb21pc2U9ZS5jcmVhdGVRckVuZ2luZSgpfXN0YXRpYyBzZXQgV09SS0VSX1BBVEgoYSl7Y29uc29sZS53YXJuKFwiU2V0dGluZyBRclNjYW5uZXIuV09SS0VSX1BBVEggaXMgbm90IHJlcXVpcmVkIGFuZCBub3Qgc3VwcG9ydGVkIGFueW1vcmUuIEhhdmUgYSBsb29rIGF0IHRoZSBSRUFETUUgZm9yIG5ldyBzZXR1cCBpbnN0cnVjdGlvbnMuXCIpfXN0YXRpYyBhc3luYyBoYXNDYW1lcmEoKXt0cnl7cmV0dXJuISEoYXdhaXQgZS5saXN0Q2FtZXJhcyghMSkpLmxlbmd0aH1jYXRjaChhKXtyZXR1cm4hMX19c3RhdGljIGFzeW5jIGxpc3RDYW1lcmFzKGE9XG4hMSl7aWYoIW5hdmlnYXRvci5tZWRpYURldmljZXMpcmV0dXJuW107bGV0IGI9YXN5bmMoKT0+KGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpKS5maWx0ZXIoZD0+XCJ2aWRlb2lucHV0XCI9PT1kLmtpbmQpLGM7dHJ5e2EmJihhd2FpdCBiKCkpLmV2ZXJ5KGQ9PiFkLmxhYmVsKSYmKGM9YXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe2F1ZGlvOiExLHZpZGVvOiEwfSkpfWNhdGNoKGQpe310cnl7cmV0dXJuKGF3YWl0IGIoKSkubWFwKChkLGYpPT4oe2lkOmQuZGV2aWNlSWQsbGFiZWw6ZC5sYWJlbHx8KDA9PT1mP1wiRGVmYXVsdCBDYW1lcmFcIjpgQ2FtZXJhICR7ZisxfWApfSkpfWZpbmFsbHl7YyYmKGNvbnNvbGUud2FybihcIkNhbGwgbGlzdENhbWVyYXMgYWZ0ZXIgc3VjY2Vzc2Z1bGx5IHN0YXJ0aW5nIGEgUVIgc2Nhbm5lciB0byBhdm9pZCBjcmVhdGluZyBhIHRlbXBvcmFyeSB2aWRlbyBzdHJlYW1cIiksZS5fc3RvcFZpZGVvU3RyZWFtKGMpKX19YXN5bmMgaGFzRmxhc2goKXtsZXQgYTtcbnRyeXtpZih0aGlzLiR2aWRlby5zcmNPYmplY3Qpe2lmKCEodGhpcy4kdmlkZW8uc3JjT2JqZWN0IGluc3RhbmNlb2YgTWVkaWFTdHJlYW0pKXJldHVybiExO2E9dGhpcy4kdmlkZW8uc3JjT2JqZWN0fWVsc2UgYT0oYXdhaXQgdGhpcy5fZ2V0Q2FtZXJhU3RyZWFtKCkpLnN0cmVhbTtyZXR1cm5cInRvcmNoXCJpbiBhLmdldFZpZGVvVHJhY2tzKClbMF0uZ2V0U2V0dGluZ3MoKX1jYXRjaChiKXtyZXR1cm4hMX1maW5hbGx5e2EmJmEhPT10aGlzLiR2aWRlby5zcmNPYmplY3QmJihjb25zb2xlLndhcm4oXCJDYWxsIGhhc0ZsYXNoIGFmdGVyIHN1Y2Nlc3NmdWxseSBzdGFydGluZyB0aGUgc2Nhbm5lciB0byBhdm9pZCBjcmVhdGluZyBhIHRlbXBvcmFyeSB2aWRlbyBzdHJlYW1cIiksZS5fc3RvcFZpZGVvU3RyZWFtKGEpKX19aXNGbGFzaE9uKCl7cmV0dXJuIHRoaXMuX2ZsYXNoT259YXN5bmMgdG9nZ2xlRmxhc2goKXt0aGlzLl9mbGFzaE9uP2F3YWl0IHRoaXMudHVybkZsYXNoT2ZmKCk6YXdhaXQgdGhpcy50dXJuRmxhc2hPbigpfWFzeW5jIHR1cm5GbGFzaE9uKCl7aWYoIXRoaXMuX2ZsYXNoT24mJlxuIXRoaXMuX2Rlc3Ryb3llZCYmKHRoaXMuX2ZsYXNoT249ITAsdGhpcy5fYWN0aXZlJiYhdGhpcy5fcGF1c2VkKSl0cnl7aWYoIWF3YWl0IHRoaXMuaGFzRmxhc2goKSl0aHJvd1wiTm8gZmxhc2ggYXZhaWxhYmxlXCI7YXdhaXQgdGhpcy4kdmlkZW8uc3JjT2JqZWN0LmdldFZpZGVvVHJhY2tzKClbMF0uYXBwbHlDb25zdHJhaW50cyh7YWR2YW5jZWQ6W3t0b3JjaDohMH1dfSl9Y2F0Y2goYSl7dGhyb3cgdGhpcy5fZmxhc2hPbj0hMSxhO319YXN5bmMgdHVybkZsYXNoT2ZmKCl7dGhpcy5fZmxhc2hPbiYmKHRoaXMuX2ZsYXNoT249ITEsYXdhaXQgdGhpcy5fcmVzdGFydFZpZGVvU3RyZWFtKCkpfWRlc3Ryb3koKXt0aGlzLiR2aWRlby5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZGVkbWV0YWRhdGFcIix0aGlzLl9vbkxvYWRlZE1ldGFEYXRhKTt0aGlzLiR2aWRlby5yZW1vdmVFdmVudExpc3RlbmVyKFwicGxheVwiLHRoaXMuX29uUGxheSk7ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIixcbnRoaXMuX29uVmlzaWJpbGl0eUNoYW5nZSk7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLl91cGRhdGVPdmVybGF5KTt0aGlzLl9kZXN0cm95ZWQ9ITA7dGhpcy5fZmxhc2hPbj0hMTt0aGlzLnN0b3AoKTtlLl9wb3N0V29ya2VyTWVzc2FnZSh0aGlzLl9xckVuZ2luZVByb21pc2UsXCJjbG9zZVwiKX1hc3luYyBzdGFydCgpe2lmKHRoaXMuX2Rlc3Ryb3llZCl0aHJvdyBFcnJvcihcIlRoZSBRUiBzY2FubmVyIGNhbiBub3QgYmUgc3RhcnRlZCBhcyBpdCBoYWQgYmVlbiBkZXN0cm95ZWQuXCIpO2lmKCF0aGlzLl9hY3RpdmV8fHRoaXMuX3BhdXNlZClpZihcImh0dHBzOlwiIT09d2luZG93LmxvY2F0aW9uLnByb3RvY29sJiZjb25zb2xlLndhcm4oXCJUaGUgY2FtZXJhIHN0cmVhbSBpcyBvbmx5IGFjY2Vzc2libGUgaWYgdGhlIHBhZ2UgaXMgdHJhbnNmZXJyZWQgdmlhIGh0dHBzLlwiKSx0aGlzLl9hY3RpdmU9ITAsIWRvY3VtZW50LmhpZGRlbilpZih0aGlzLl9wYXVzZWQ9XG4hMSx0aGlzLiR2aWRlby5zcmNPYmplY3QpYXdhaXQgdGhpcy4kdmlkZW8ucGxheSgpO2Vsc2UgdHJ5e2xldCB7c3RyZWFtOmEsZmFjaW5nTW9kZTpifT1hd2FpdCB0aGlzLl9nZXRDYW1lcmFTdHJlYW0oKTshdGhpcy5fYWN0aXZlfHx0aGlzLl9wYXVzZWQ/ZS5fc3RvcFZpZGVvU3RyZWFtKGEpOih0aGlzLl9zZXRWaWRlb01pcnJvcihiKSx0aGlzLiR2aWRlby5zcmNPYmplY3Q9YSxhd2FpdCB0aGlzLiR2aWRlby5wbGF5KCksdGhpcy5fZmxhc2hPbiYmKHRoaXMuX2ZsYXNoT249ITEsdGhpcy50dXJuRmxhc2hPbigpLmNhdGNoKCgpPT57fSkpKX1jYXRjaChhKXtpZighdGhpcy5fcGF1c2VkKXRocm93IHRoaXMuX2FjdGl2ZT0hMSxhO319c3RvcCgpe3RoaXMucGF1c2UoKTt0aGlzLl9hY3RpdmU9ITF9YXN5bmMgcGF1c2UoYT0hMSl7dGhpcy5fcGF1c2VkPSEwO2lmKCF0aGlzLl9hY3RpdmUpcmV0dXJuITA7dGhpcy4kdmlkZW8ucGF1c2UoKTt0aGlzLiRvdmVybGF5JiYodGhpcy4kb3ZlcmxheS5zdHlsZS5kaXNwbGF5PVxuXCJub25lXCIpO2xldCBiPSgpPT57dGhpcy4kdmlkZW8uc3JjT2JqZWN0IGluc3RhbmNlb2YgTWVkaWFTdHJlYW0mJihlLl9zdG9wVmlkZW9TdHJlYW0odGhpcy4kdmlkZW8uc3JjT2JqZWN0KSx0aGlzLiR2aWRlby5zcmNPYmplY3Q9bnVsbCl9O2lmKGEpcmV0dXJuIGIoKSwhMDthd2FpdCBuZXcgUHJvbWlzZShjPT5zZXRUaW1lb3V0KGMsMzAwKSk7aWYoIXRoaXMuX3BhdXNlZClyZXR1cm4hMTtiKCk7cmV0dXJuITB9YXN5bmMgc2V0Q2FtZXJhKGEpe2EhPT10aGlzLl9wcmVmZXJyZWRDYW1lcmEmJih0aGlzLl9wcmVmZXJyZWRDYW1lcmE9YSxhd2FpdCB0aGlzLl9yZXN0YXJ0VmlkZW9TdHJlYW0oKSl9c3RhdGljIGFzeW5jIHNjYW5JbWFnZShhLGIsYyxkLGY9ITEsaD0hMSl7bGV0IG0sbj0hMTtiJiYoXCJzY2FuUmVnaW9uXCJpbiBifHxcInFyRW5naW5lXCJpbiBifHxcImNhbnZhc1wiaW4gYnx8XCJkaXNhbGxvd0NhbnZhc1Jlc2l6aW5nXCJpbiBifHxcImFsc29UcnlXaXRob3V0U2NhblJlZ2lvblwiaW5cbmJ8fFwicmV0dXJuRGV0YWlsZWRTY2FuUmVzdWx0XCJpbiBiKT8obT1iLnNjYW5SZWdpb24sYz1iLnFyRW5naW5lLGQ9Yi5jYW52YXMsZj1iLmRpc2FsbG93Q2FudmFzUmVzaXppbmd8fCExLGg9Yi5hbHNvVHJ5V2l0aG91dFNjYW5SZWdpb258fCExLG49ITApOmJ8fGN8fGR8fGZ8fGg/Y29uc29sZS53YXJuKFwiWW91J3JlIHVzaW5nIGEgZGVwcmVjYXRlZCBhcGkgZm9yIHNjYW5JbWFnZSB3aGljaCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZS5cIik6Y29uc29sZS53YXJuKFwiTm90ZSB0aGF0IHRoZSByZXR1cm4gdHlwZSBvZiBzY2FuSW1hZ2Ugd2lsbCBjaGFuZ2UgaW4gdGhlIGZ1dHVyZS4gVG8gYWxyZWFkeSBzd2l0Y2ggdG8gdGhlIG5ldyBhcGkgdG9kYXksIHlvdSBjYW4gcGFzcyByZXR1cm5EZXRhaWxlZFNjYW5SZXN1bHQ6IHRydWUuXCIpO2I9ISFjO3RyeXtsZXQgcCxrO1tjLHBdPWF3YWl0IFByb21pc2UuYWxsKFtjfHxlLmNyZWF0ZVFyRW5naW5lKCksZS5fbG9hZEltYWdlKGEpXSk7XG5bZCxrXT1lLl9kcmF3VG9DYW52YXMocCxtLGQsZik7bGV0IHE7aWYoYyBpbnN0YW5jZW9mIFdvcmtlcil7bGV0IGc9YztifHxlLl9wb3N0V29ya2VyTWVzc2FnZVN5bmMoZyxcImludmVyc2lvbk1vZGVcIixcImJvdGhcIik7cT1hd2FpdCBuZXcgUHJvbWlzZSgobCx2KT0+e2xldCB3LHUscix5PS0xO3U9dD0+e3QuZGF0YS5pZD09PXkmJihnLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsdSksZy5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIixyKSxjbGVhclRpbWVvdXQodyksbnVsbCE9PXQuZGF0YS5kYXRhP2woe2RhdGE6dC5kYXRhLmRhdGEsY29ybmVyUG9pbnRzOmUuX2NvbnZlcnRQb2ludHModC5kYXRhLmNvcm5lclBvaW50cyxtKX0pOnYoZS5OT19RUl9DT0RFX0ZPVU5EKSl9O3I9dD0+e2cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIix1KTtnLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLHIpO2NsZWFyVGltZW91dCh3KTt2KFwiU2Nhbm5lciBlcnJvcjogXCIrKHQ/XG50Lm1lc3NhZ2V8fHQ6XCJVbmtub3duIEVycm9yXCIpKX07Zy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHUpO2cuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIscik7dz1zZXRUaW1lb3V0KCgpPT5yKFwidGltZW91dFwiKSwxRTQpO2xldCB4PWsuZ2V0SW1hZ2VEYXRhKDAsMCxkLndpZHRoLGQuaGVpZ2h0KTt5PWUuX3Bvc3RXb3JrZXJNZXNzYWdlU3luYyhnLFwiZGVjb2RlXCIseCxbeC5kYXRhLmJ1ZmZlcl0pfSl9ZWxzZSBxPWF3YWl0IFByb21pc2UucmFjZShbbmV3IFByb21pc2UoKGcsbCk9PndpbmRvdy5zZXRUaW1lb3V0KCgpPT5sKFwiU2Nhbm5lciBlcnJvcjogdGltZW91dFwiKSwxRTQpKSwoYXN5bmMoKT0+e3RyeXt2YXIgW2ddPWF3YWl0IGMuZGV0ZWN0KGQpO2lmKCFnKXRocm93IGUuTk9fUVJfQ09ERV9GT1VORDtyZXR1cm57ZGF0YTpnLnJhd1ZhbHVlLGNvcm5lclBvaW50czplLl9jb252ZXJ0UG9pbnRzKGcuY29ybmVyUG9pbnRzLG0pfX1jYXRjaChsKXtnPWwubWVzc2FnZXx8bDtcbmlmKC9ub3QgaW1wbGVtZW50ZWR8c2VydmljZSB1bmF2YWlsYWJsZS8udGVzdChnKSlyZXR1cm4gZS5fZGlzYWJsZUJhcmNvZGVEZXRlY3Rvcj0hMCxlLnNjYW5JbWFnZShhLHtzY2FuUmVnaW9uOm0sY2FudmFzOmQsZGlzYWxsb3dDYW52YXNSZXNpemluZzpmLGFsc29UcnlXaXRob3V0U2NhblJlZ2lvbjpofSk7dGhyb3dgU2Nhbm5lciBlcnJvcjogJHtnfWA7fX0pKCldKTtyZXR1cm4gbj9xOnEuZGF0YX1jYXRjaChwKXtpZighbXx8IWgpdGhyb3cgcDtsZXQgaz1hd2FpdCBlLnNjYW5JbWFnZShhLHtxckVuZ2luZTpjLGNhbnZhczpkLGRpc2FsbG93Q2FudmFzUmVzaXppbmc6Zn0pO3JldHVybiBuP2s6ay5kYXRhfWZpbmFsbHl7Ynx8ZS5fcG9zdFdvcmtlck1lc3NhZ2UoYyxcImNsb3NlXCIpfX1zZXRHcmF5c2NhbGVXZWlnaHRzKGEsYixjLGQ9ITApe2UuX3Bvc3RXb3JrZXJNZXNzYWdlKHRoaXMuX3FyRW5naW5lUHJvbWlzZSxcImdyYXlzY2FsZVdlaWdodHNcIix7cmVkOmEsZ3JlZW46YixcbmJsdWU6Yyx1c2VJbnRlZ2VyQXBwcm94aW1hdGlvbjpkfSl9c2V0SW52ZXJzaW9uTW9kZShhKXtlLl9wb3N0V29ya2VyTWVzc2FnZSh0aGlzLl9xckVuZ2luZVByb21pc2UsXCJpbnZlcnNpb25Nb2RlXCIsYSl9c3RhdGljIGFzeW5jIGNyZWF0ZVFyRW5naW5lKGEpe2EmJmNvbnNvbGUud2FybihcIlNwZWNpZnlpbmcgYSB3b3JrZXIgcGF0aCBpcyBub3QgcmVxdWlyZWQgYW5kIG5vdCBzdXBwb3J0ZWQgYW55bW9yZS5cIik7YT0oKT0+aW1wb3J0KFwiLi9xci1zY2FubmVyLXdvcmtlci5taW4uanNcIikudGhlbihjPT5jLmNyZWF0ZVdvcmtlcigpKTtpZighKCFlLl9kaXNhYmxlQmFyY29kZURldGVjdG9yJiZcIkJhcmNvZGVEZXRlY3RvclwiaW4gd2luZG93JiZCYXJjb2RlRGV0ZWN0b3IuZ2V0U3VwcG9ydGVkRm9ybWF0cyYmKGF3YWl0IEJhcmNvZGVEZXRlY3Rvci5nZXRTdXBwb3J0ZWRGb3JtYXRzKCkpLmluY2x1ZGVzKFwicXJfY29kZVwiKSkpcmV0dXJuIGEoKTtsZXQgYj1uYXZpZ2F0b3IudXNlckFnZW50RGF0YTtcbnJldHVybiBiJiZiLmJyYW5kcy5zb21lKCh7YnJhbmQ6Y30pPT4vQ2hyb21pdW0vaS50ZXN0KGMpKSYmL21hYyA/T1MvaS50ZXN0KGIucGxhdGZvcm0pJiZhd2FpdCBiLmdldEhpZ2hFbnRyb3B5VmFsdWVzKFtcImFyY2hpdGVjdHVyZVwiLFwicGxhdGZvcm1WZXJzaW9uXCJdKS50aGVuKCh7YXJjaGl0ZWN0dXJlOmMscGxhdGZvcm1WZXJzaW9uOmR9KT0+L2FybS9pLnRlc3QoY3x8XCJhcm1cIikmJjEzPD1wYXJzZUludChkfHxcIjEzXCIpKS5jYXRjaCgoKT0+ITApP2EoKTpuZXcgQmFyY29kZURldGVjdG9yKHtmb3JtYXRzOltcInFyX2NvZGVcIl19KX1fb25QbGF5KCl7dGhpcy5fc2NhblJlZ2lvbj10aGlzLl9jYWxjdWxhdGVTY2FuUmVnaW9uKHRoaXMuJHZpZGVvKTt0aGlzLl91cGRhdGVPdmVybGF5KCk7dGhpcy4kb3ZlcmxheSYmKHRoaXMuJG92ZXJsYXkuc3R5bGUuZGlzcGxheT1cIlwiKTt0aGlzLl9zY2FuRnJhbWUoKX1fb25Mb2FkZWRNZXRhRGF0YSgpe3RoaXMuX3NjYW5SZWdpb249dGhpcy5fY2FsY3VsYXRlU2NhblJlZ2lvbih0aGlzLiR2aWRlbyk7XG50aGlzLl91cGRhdGVPdmVybGF5KCl9X29uVmlzaWJpbGl0eUNoYW5nZSgpe2RvY3VtZW50LmhpZGRlbj90aGlzLnBhdXNlKCk6dGhpcy5fYWN0aXZlJiZ0aGlzLnN0YXJ0KCl9X2NhbGN1bGF0ZVNjYW5SZWdpb24oYSl7bGV0IGI9TWF0aC5yb3VuZCgyLzMqTWF0aC5taW4oYS52aWRlb1dpZHRoLGEudmlkZW9IZWlnaHQpKTtyZXR1cm57eDpNYXRoLnJvdW5kKChhLnZpZGVvV2lkdGgtYikvMikseTpNYXRoLnJvdW5kKChhLnZpZGVvSGVpZ2h0LWIpLzIpLHdpZHRoOmIsaGVpZ2h0OmIsZG93blNjYWxlZFdpZHRoOnRoaXMuX2xlZ2FjeUNhbnZhc1NpemUsZG93blNjYWxlZEhlaWdodDp0aGlzLl9sZWdhY3lDYW52YXNTaXplfX1fdXBkYXRlT3ZlcmxheSgpe3JlcXVlc3RBbmltYXRpb25GcmFtZSgoKT0+e2lmKHRoaXMuJG92ZXJsYXkpe3ZhciBhPXRoaXMuJHZpZGVvLGI9YS52aWRlb1dpZHRoLGM9YS52aWRlb0hlaWdodCxkPWEub2Zmc2V0V2lkdGgsZj1hLm9mZnNldEhlaWdodCxoPWEub2Zmc2V0TGVmdCxcbm09YS5vZmZzZXRUb3Asbj13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShhKSxwPW4ub2JqZWN0Rml0LGs9Yi9jLHE9ZC9mO3N3aXRjaChwKXtjYXNlIFwibm9uZVwiOnZhciBnPWI7dmFyIGw9YzticmVhaztjYXNlIFwiZmlsbFwiOmc9ZDtsPWY7YnJlYWs7ZGVmYXVsdDooXCJjb3ZlclwiPT09cD9rPnE6azxxKT8obD1mLGc9bCprKTooZz1kLGw9Zy9rKSxcInNjYWxlLWRvd25cIj09PXAmJihnPU1hdGgubWluKGcsYiksbD1NYXRoLm1pbihsLGMpKX12YXIgW3Ysd109bi5vYmplY3RQb3NpdGlvbi5zcGxpdChcIiBcIikubWFwKChyLHkpPT57Y29uc3QgeD1wYXJzZUZsb2F0KHIpO3JldHVybiByLmVuZHNXaXRoKFwiJVwiKT8oeT9mLWw6ZC1nKSp4LzEwMDp4fSk7bj10aGlzLl9zY2FuUmVnaW9uLndpZHRofHxiO3E9dGhpcy5fc2NhblJlZ2lvbi5oZWlnaHR8fGM7cD10aGlzLl9zY2FuUmVnaW9uLnh8fDA7dmFyIHU9dGhpcy5fc2NhblJlZ2lvbi55fHwwO2s9dGhpcy4kb3ZlcmxheS5zdHlsZTtrLndpZHRoPVxuYCR7bi9iKmd9cHhgO2suaGVpZ2h0PWAke3EvYypsfXB4YDtrLnRvcD1gJHttK3crdS9jKmx9cHhgO2M9L3NjYWxlWFxcKC0xXFwpLy50ZXN0KGEuc3R5bGUudHJhbnNmb3JtKTtrLmxlZnQ9YCR7aCsoYz9kLXYtZzp2KSsoYz9iLXAtbjpwKS9iKmd9cHhgO2sudHJhbnNmb3JtPWEuc3R5bGUudHJhbnNmb3JtfX0pfXN0YXRpYyBfY29udmVydFBvaW50cyhhLGIpe2lmKCFiKXJldHVybiBhO2xldCBjPWIueHx8MCxkPWIueXx8MCxmPWIud2lkdGgmJmIuZG93blNjYWxlZFdpZHRoP2Iud2lkdGgvYi5kb3duU2NhbGVkV2lkdGg6MTtiPWIuaGVpZ2h0JiZiLmRvd25TY2FsZWRIZWlnaHQ/Yi5oZWlnaHQvYi5kb3duU2NhbGVkSGVpZ2h0OjE7Zm9yKGxldCBoIG9mIGEpaC54PWgueCpmK2MsaC55PWgueSpiK2Q7cmV0dXJuIGF9X3NjYW5GcmFtZSgpeyF0aGlzLl9hY3RpdmV8fHRoaXMuJHZpZGVvLnBhdXNlZHx8dGhpcy4kdmlkZW8uZW5kZWR8fChcInJlcXVlc3RWaWRlb0ZyYW1lQ2FsbGJhY2tcImluXG50aGlzLiR2aWRlbz90aGlzLiR2aWRlby5yZXF1ZXN0VmlkZW9GcmFtZUNhbGxiYWNrLmJpbmQodGhpcy4kdmlkZW8pOnJlcXVlc3RBbmltYXRpb25GcmFtZSkoYXN5bmMoKT0+e2lmKCEoMT49dGhpcy4kdmlkZW8ucmVhZHlTdGF0ZSkpe3ZhciBhPURhdGUubm93KCktdGhpcy5fbGFzdFNjYW5UaW1lc3RhbXAsYj0xRTMvdGhpcy5fbWF4U2NhbnNQZXJTZWNvbmQ7YTxiJiZhd2FpdCBuZXcgUHJvbWlzZShkPT5zZXRUaW1lb3V0KGQsYi1hKSk7dGhpcy5fbGFzdFNjYW5UaW1lc3RhbXA9RGF0ZS5ub3coKTt0cnl7dmFyIGM9YXdhaXQgZS5zY2FuSW1hZ2UodGhpcy4kdmlkZW8se3NjYW5SZWdpb246dGhpcy5fc2NhblJlZ2lvbixxckVuZ2luZTp0aGlzLl9xckVuZ2luZVByb21pc2UsY2FudmFzOnRoaXMuJGNhbnZhc30pfWNhdGNoKGQpe2lmKCF0aGlzLl9hY3RpdmUpcmV0dXJuO3RoaXMuX29uRGVjb2RlRXJyb3IoZCl9IWUuX2Rpc2FibGVCYXJjb2RlRGV0ZWN0b3J8fGF3YWl0IHRoaXMuX3FyRW5naW5lUHJvbWlzZSBpbnN0YW5jZW9mXG5Xb3JrZXJ8fCh0aGlzLl9xckVuZ2luZVByb21pc2U9ZS5jcmVhdGVRckVuZ2luZSgpKTtjPyh0aGlzLl9vbkRlY29kZT90aGlzLl9vbkRlY29kZShjKTp0aGlzLl9sZWdhY3lPbkRlY29kZSYmdGhpcy5fbGVnYWN5T25EZWNvZGUoYy5kYXRhKSx0aGlzLiRjb2RlT3V0bGluZUhpZ2hsaWdodCYmKGNsZWFyVGltZW91dCh0aGlzLl9jb2RlT3V0bGluZUhpZ2hsaWdodFJlbW92YWxUaW1lb3V0KSx0aGlzLl9jb2RlT3V0bGluZUhpZ2hsaWdodFJlbW92YWxUaW1lb3V0PXZvaWQgMCx0aGlzLiRjb2RlT3V0bGluZUhpZ2hsaWdodC5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsYCR7dGhpcy5fc2NhblJlZ2lvbi54fHwwfSBgK2Ake3RoaXMuX3NjYW5SZWdpb24ueXx8MH0gYCtgJHt0aGlzLl9zY2FuUmVnaW9uLndpZHRofHx0aGlzLiR2aWRlby52aWRlb1dpZHRofSBgK2Ake3RoaXMuX3NjYW5SZWdpb24uaGVpZ2h0fHx0aGlzLiR2aWRlby52aWRlb0hlaWdodH1gKSx0aGlzLiRjb2RlT3V0bGluZUhpZ2hsaWdodC5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoXCJwb2ludHNcIixcbmMuY29ybmVyUG9pbnRzLm1hcCgoe3g6ZCx5OmZ9KT0+YCR7ZH0sJHtmfWApLmpvaW4oXCIgXCIpKSx0aGlzLiRjb2RlT3V0bGluZUhpZ2hsaWdodC5zdHlsZS5kaXNwbGF5PVwiXCIpKTp0aGlzLiRjb2RlT3V0bGluZUhpZ2hsaWdodCYmIXRoaXMuX2NvZGVPdXRsaW5lSGlnaGxpZ2h0UmVtb3ZhbFRpbWVvdXQmJih0aGlzLl9jb2RlT3V0bGluZUhpZ2hsaWdodFJlbW92YWxUaW1lb3V0PXNldFRpbWVvdXQoKCk9PnRoaXMuJGNvZGVPdXRsaW5lSGlnaGxpZ2h0LnN0eWxlLmRpc3BsYXk9XCJub25lXCIsMTAwKSl9dGhpcy5fc2NhbkZyYW1lKCl9KX1fb25EZWNvZGVFcnJvcihhKXthIT09ZS5OT19RUl9DT0RFX0ZPVU5EJiZjb25zb2xlLmxvZyhhKX1hc3luYyBfZ2V0Q2FtZXJhU3RyZWFtKCl7aWYoIW5hdmlnYXRvci5tZWRpYURldmljZXMpdGhyb3dcIkNhbWVyYSBub3QgZm91bmQuXCI7bGV0IGE9L14oZW52aXJvbm1lbnR8dXNlcikkLy50ZXN0KHRoaXMuX3ByZWZlcnJlZENhbWVyYSk/XCJmYWNpbmdNb2RlXCI6XG5cImRldmljZUlkXCIsYj1be3dpZHRoOnttaW46MTAyNH19LHt3aWR0aDp7bWluOjc2OH19LHt9XSxjPWIubWFwKGQ9Pk9iamVjdC5hc3NpZ24oe30sZCx7W2FdOntleGFjdDp0aGlzLl9wcmVmZXJyZWRDYW1lcmF9fSkpO2ZvcihsZXQgZCBvZlsuLi5jLC4uLmJdKXRyeXtsZXQgZj1hd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7dmlkZW86ZCxhdWRpbzohMX0pLGg9dGhpcy5fZ2V0RmFjaW5nTW9kZShmKXx8KGQuZmFjaW5nTW9kZT90aGlzLl9wcmVmZXJyZWRDYW1lcmE6XCJlbnZpcm9ubWVudFwiPT09dGhpcy5fcHJlZmVycmVkQ2FtZXJhP1widXNlclwiOlwiZW52aXJvbm1lbnRcIik7cmV0dXJue3N0cmVhbTpmLGZhY2luZ01vZGU6aH19Y2F0Y2goZil7fXRocm93XCJDYW1lcmEgbm90IGZvdW5kLlwiO31hc3luYyBfcmVzdGFydFZpZGVvU3RyZWFtKCl7bGV0IGE9dGhpcy5fcGF1c2VkO2F3YWl0IHRoaXMucGF1c2UoITApJiYhYSYmdGhpcy5fYWN0aXZlJiZhd2FpdCB0aGlzLnN0YXJ0KCl9c3RhdGljIF9zdG9wVmlkZW9TdHJlYW0oYSl7Zm9yKGxldCBiIG9mIGEuZ2V0VHJhY2tzKCkpYi5zdG9wKCksXG5hLnJlbW92ZVRyYWNrKGIpfV9zZXRWaWRlb01pcnJvcihhKXt0aGlzLiR2aWRlby5zdHlsZS50cmFuc2Zvcm09XCJzY2FsZVgoXCIrKFwidXNlclwiPT09YT8tMToxKStcIilcIn1fZ2V0RmFjaW5nTW9kZShhKXtyZXR1cm4oYT1hLmdldFZpZGVvVHJhY2tzKClbMF0pPy9yZWFyfGJhY2t8ZW52aXJvbm1lbnQvaS50ZXN0KGEubGFiZWwpP1wiZW52aXJvbm1lbnRcIjovZnJvbnR8dXNlcnxmYWNlL2kudGVzdChhLmxhYmVsKT9cInVzZXJcIjpudWxsOm51bGx9c3RhdGljIF9kcmF3VG9DYW52YXMoYSxiLGMsZD0hMSl7Yz1jfHxkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO2xldCBmPWImJmIueD9iLng6MCxoPWImJmIueT9iLnk6MCxtPWImJmIud2lkdGg/Yi53aWR0aDphLnZpZGVvV2lkdGh8fGEud2lkdGgsbj1iJiZiLmhlaWdodD9iLmhlaWdodDphLnZpZGVvSGVpZ2h0fHxhLmhlaWdodDtkfHwoZD1iJiZiLmRvd25TY2FsZWRXaWR0aD9iLmRvd25TY2FsZWRXaWR0aDptLGI9YiYmYi5kb3duU2NhbGVkSGVpZ2h0P1xuYi5kb3duU2NhbGVkSGVpZ2h0Om4sYy53aWR0aCE9PWQmJihjLndpZHRoPWQpLGMuaGVpZ2h0IT09YiYmKGMuaGVpZ2h0PWIpKTtiPWMuZ2V0Q29udGV4dChcIjJkXCIse2FscGhhOiExfSk7Yi5pbWFnZVNtb290aGluZ0VuYWJsZWQ9ITE7Yi5kcmF3SW1hZ2UoYSxmLGgsbSxuLDAsMCxjLndpZHRoLGMuaGVpZ2h0KTtyZXR1cm5bYyxiXX1zdGF0aWMgYXN5bmMgX2xvYWRJbWFnZShhKXtpZihhIGluc3RhbmNlb2YgSW1hZ2UpcmV0dXJuIGF3YWl0IGUuX2F3YWl0SW1hZ2VMb2FkKGEpLGE7aWYoYSBpbnN0YW5jZW9mIEhUTUxWaWRlb0VsZW1lbnR8fGEgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudHx8YSBpbnN0YW5jZW9mIFNWR0ltYWdlRWxlbWVudHx8XCJPZmZzY3JlZW5DYW52YXNcImluIHdpbmRvdyYmYSBpbnN0YW5jZW9mIE9mZnNjcmVlbkNhbnZhc3x8XCJJbWFnZUJpdG1hcFwiaW4gd2luZG93JiZhIGluc3RhbmNlb2YgSW1hZ2VCaXRtYXApcmV0dXJuIGE7aWYoYSBpbnN0YW5jZW9mXG5GaWxlfHxhIGluc3RhbmNlb2YgQmxvYnx8YSBpbnN0YW5jZW9mIFVSTHx8XCJzdHJpbmdcIj09PXR5cGVvZiBhKXtsZXQgYj1uZXcgSW1hZ2U7Yi5zcmM9YSBpbnN0YW5jZW9mIEZpbGV8fGEgaW5zdGFuY2VvZiBCbG9iP1VSTC5jcmVhdGVPYmplY3RVUkwoYSk6YS50b1N0cmluZygpO3RyeXtyZXR1cm4gYXdhaXQgZS5fYXdhaXRJbWFnZUxvYWQoYiksYn1maW5hbGx5eyhhIGluc3RhbmNlb2YgRmlsZXx8YSBpbnN0YW5jZW9mIEJsb2IpJiZVUkwucmV2b2tlT2JqZWN0VVJMKGIuc3JjKX19ZWxzZSB0aHJvd1wiVW5zdXBwb3J0ZWQgaW1hZ2UgdHlwZS5cIjt9c3RhdGljIGFzeW5jIF9hd2FpdEltYWdlTG9hZChhKXthLmNvbXBsZXRlJiYwIT09YS5uYXR1cmFsV2lkdGh8fGF3YWl0IG5ldyBQcm9taXNlKChiLGMpPT57bGV0IGQ9Zj0+e2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixkKTthLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLGQpO2YgaW5zdGFuY2VvZiBFcnJvckV2ZW50P1xuYyhcIkltYWdlIGxvYWQgZXJyb3JcIik6YigpfTthLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZCk7YS5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixkKX0pfXN0YXRpYyBhc3luYyBfcG9zdFdvcmtlck1lc3NhZ2UoYSxiLGMsZCl7cmV0dXJuIGUuX3Bvc3RXb3JrZXJNZXNzYWdlU3luYyhhd2FpdCBhLGIsYyxkKX1zdGF0aWMgX3Bvc3RXb3JrZXJNZXNzYWdlU3luYyhhLGIsYyxkKXtpZighKGEgaW5zdGFuY2VvZiBXb3JrZXIpKXJldHVybi0xO2xldCBmPWUuX3dvcmtlck1lc3NhZ2VJZCsrO2EucG9zdE1lc3NhZ2Uoe2lkOmYsdHlwZTpiLGRhdGE6Y30sZCk7cmV0dXJuIGZ9fWUuREVGQVVMVF9DQU5WQVNfU0laRT00MDA7ZS5OT19RUl9DT0RFX0ZPVU5EPVwiTm8gUVIgY29kZSBmb3VuZFwiO2UuX2Rpc2FibGVCYXJjb2RlRGV0ZWN0b3I9ITE7ZS5fd29ya2VyTWVzc2FnZUlkPTA7ZXhwb3J0IGRlZmF1bHQgZVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXItc2Nhbm5lci5taW4uanMubWFwXG4iLCIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vIFFSIENvZGUgR2VuZXJhdG9yIGZvciBKYXZhU2NyaXB0XG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDA5IEthenVoaWtvIEFyYXNlXG4vL1xuLy8gVVJMOiBodHRwOi8vd3d3LmQtcHJvamVjdC5jb20vXG4vL1xuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlOlxuLy8gIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4vL1xuLy8gVGhlIHdvcmQgJ1FSIENvZGUnIGlzIHJlZ2lzdGVyZWQgdHJhZGVtYXJrIG9mXG4vLyBERU5TTyBXQVZFIElOQ09SUE9SQVRFRFxuLy8gIGh0dHA6Ly93d3cuZGVuc28td2F2ZS5jb20vcXJjb2RlL2ZhcXBhdGVudC1lLmh0bWxcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgcXJjb2RlID0gZnVuY3Rpb24oKSB7XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcXJjb2RlXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIHFyY29kZVxuICAgKiBAcGFyYW0gdHlwZU51bWJlciAxIHRvIDQwXG4gICAqIEBwYXJhbSBlcnJvckNvcnJlY3Rpb25MZXZlbCAnTCcsJ00nLCdRJywnSCdcbiAgICovXG4gIHZhciBxcmNvZGUgPSBmdW5jdGlvbih0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3Rpb25MZXZlbCkge1xuXG4gICAgdmFyIFBBRDAgPSAweEVDO1xuICAgIHZhciBQQUQxID0gMHgxMTtcblxuICAgIHZhciBfdHlwZU51bWJlciA9IHR5cGVOdW1iZXI7XG4gICAgdmFyIF9lcnJvckNvcnJlY3Rpb25MZXZlbCA9IFFSRXJyb3JDb3JyZWN0aW9uTGV2ZWxbZXJyb3JDb3JyZWN0aW9uTGV2ZWxdO1xuICAgIHZhciBfbW9kdWxlcyA9IG51bGw7XG4gICAgdmFyIF9tb2R1bGVDb3VudCA9IDA7XG4gICAgdmFyIF9kYXRhQ2FjaGUgPSBudWxsO1xuICAgIHZhciBfZGF0YUxpc3QgPSBbXTtcblxuICAgIHZhciBfdGhpcyA9IHt9O1xuXG4gICAgdmFyIG1ha2VJbXBsID0gZnVuY3Rpb24odGVzdCwgbWFza1BhdHRlcm4pIHtcblxuICAgICAgX21vZHVsZUNvdW50ID0gX3R5cGVOdW1iZXIgKiA0ICsgMTc7XG4gICAgICBfbW9kdWxlcyA9IGZ1bmN0aW9uKG1vZHVsZUNvdW50KSB7XG4gICAgICAgIHZhciBtb2R1bGVzID0gbmV3IEFycmF5KG1vZHVsZUNvdW50KTtcbiAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQ7IHJvdyArPSAxKSB7XG4gICAgICAgICAgbW9kdWxlc1tyb3ddID0gbmV3IEFycmF5KG1vZHVsZUNvdW50KTtcbiAgICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudDsgY29sICs9IDEpIHtcbiAgICAgICAgICAgIG1vZHVsZXNbcm93XVtjb2xdID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZHVsZXM7XG4gICAgICB9KF9tb2R1bGVDb3VudCk7XG5cbiAgICAgIHNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4oMCwgMCk7XG4gICAgICBzZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuKF9tb2R1bGVDb3VudCAtIDcsIDApO1xuICAgICAgc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybigwLCBfbW9kdWxlQ291bnQgLSA3KTtcbiAgICAgIHNldHVwUG9zaXRpb25BZGp1c3RQYXR0ZXJuKCk7XG4gICAgICBzZXR1cFRpbWluZ1BhdHRlcm4oKTtcbiAgICAgIHNldHVwVHlwZUluZm8odGVzdCwgbWFza1BhdHRlcm4pO1xuXG4gICAgICBpZiAoX3R5cGVOdW1iZXIgPj0gNykge1xuICAgICAgICBzZXR1cFR5cGVOdW1iZXIodGVzdCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfZGF0YUNhY2hlID09IG51bGwpIHtcbiAgICAgICAgX2RhdGFDYWNoZSA9IGNyZWF0ZURhdGEoX3R5cGVOdW1iZXIsIF9lcnJvckNvcnJlY3Rpb25MZXZlbCwgX2RhdGFMaXN0KTtcbiAgICAgIH1cblxuICAgICAgbWFwRGF0YShfZGF0YUNhY2hlLCBtYXNrUGF0dGVybik7XG4gICAgfTtcblxuICAgIHZhciBzZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuID0gZnVuY3Rpb24ocm93LCBjb2wpIHtcblxuICAgICAgZm9yICh2YXIgciA9IC0xOyByIDw9IDc7IHIgKz0gMSkge1xuXG4gICAgICAgIGlmIChyb3cgKyByIDw9IC0xIHx8IF9tb2R1bGVDb3VudCA8PSByb3cgKyByKSBjb250aW51ZTtcblxuICAgICAgICBmb3IgKHZhciBjID0gLTE7IGMgPD0gNzsgYyArPSAxKSB7XG5cbiAgICAgICAgICBpZiAoY29sICsgYyA8PSAtMSB8fCBfbW9kdWxlQ291bnQgPD0gY29sICsgYykgY29udGludWU7XG5cbiAgICAgICAgICBpZiAoICgwIDw9IHIgJiYgciA8PSA2ICYmIChjID09IDAgfHwgYyA9PSA2KSApXG4gICAgICAgICAgICAgIHx8ICgwIDw9IGMgJiYgYyA8PSA2ICYmIChyID09IDAgfHwgciA9PSA2KSApXG4gICAgICAgICAgICAgIHx8ICgyIDw9IHIgJiYgciA8PSA0ICYmIDIgPD0gYyAmJiBjIDw9IDQpICkge1xuICAgICAgICAgICAgX21vZHVsZXNbcm93ICsgcl1bY29sICsgY10gPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfbW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZ2V0QmVzdE1hc2tQYXR0ZXJuID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBtaW5Mb3N0UG9pbnQgPSAwO1xuICAgICAgdmFyIHBhdHRlcm4gPSAwO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkgKz0gMSkge1xuXG4gICAgICAgIG1ha2VJbXBsKHRydWUsIGkpO1xuXG4gICAgICAgIHZhciBsb3N0UG9pbnQgPSBRUlV0aWwuZ2V0TG9zdFBvaW50KF90aGlzKTtcblxuICAgICAgICBpZiAoaSA9PSAwIHx8IG1pbkxvc3RQb2ludCA+IGxvc3RQb2ludCkge1xuICAgICAgICAgIG1pbkxvc3RQb2ludCA9IGxvc3RQb2ludDtcbiAgICAgICAgICBwYXR0ZXJuID0gaTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9O1xuXG4gICAgdmFyIHNldHVwVGltaW5nUGF0dGVybiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICBmb3IgKHZhciByID0gODsgciA8IF9tb2R1bGVDb3VudCAtIDg7IHIgKz0gMSkge1xuICAgICAgICBpZiAoX21vZHVsZXNbcl1bNl0gIT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIF9tb2R1bGVzW3JdWzZdID0gKHIgJSAyID09IDApO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBjID0gODsgYyA8IF9tb2R1bGVDb3VudCAtIDg7IGMgKz0gMSkge1xuICAgICAgICBpZiAoX21vZHVsZXNbNl1bY10gIT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIF9tb2R1bGVzWzZdW2NdID0gKGMgJSAyID09IDApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgc2V0dXBQb3NpdGlvbkFkanVzdFBhdHRlcm4gPSBmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIHBvcyA9IFFSVXRpbC5nZXRQYXR0ZXJuUG9zaXRpb24oX3R5cGVOdW1iZXIpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvcy5sZW5ndGg7IGkgKz0gMSkge1xuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcG9zLmxlbmd0aDsgaiArPSAxKSB7XG5cbiAgICAgICAgICB2YXIgcm93ID0gcG9zW2ldO1xuICAgICAgICAgIHZhciBjb2wgPSBwb3Nbal07XG5cbiAgICAgICAgICBpZiAoX21vZHVsZXNbcm93XVtjb2xdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAodmFyIHIgPSAtMjsgciA8PSAyOyByICs9IDEpIHtcblxuICAgICAgICAgICAgZm9yICh2YXIgYyA9IC0yOyBjIDw9IDI7IGMgKz0gMSkge1xuXG4gICAgICAgICAgICAgIGlmIChyID09IC0yIHx8IHIgPT0gMiB8fCBjID09IC0yIHx8IGMgPT0gMlxuICAgICAgICAgICAgICAgICAgfHwgKHIgPT0gMCAmJiBjID09IDApICkge1xuICAgICAgICAgICAgICAgIF9tb2R1bGVzW3JvdyArIHJdW2NvbCArIGNdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfbW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBzZXR1cFR5cGVOdW1iZXIgPSBmdW5jdGlvbih0ZXN0KSB7XG5cbiAgICAgIHZhciBiaXRzID0gUVJVdGlsLmdldEJDSFR5cGVOdW1iZXIoX3R5cGVOdW1iZXIpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE4OyBpICs9IDEpIHtcbiAgICAgICAgdmFyIG1vZCA9ICghdGVzdCAmJiAoIChiaXRzID4+IGkpICYgMSkgPT0gMSk7XG4gICAgICAgIF9tb2R1bGVzW01hdGguZmxvb3IoaSAvIDMpXVtpICUgMyArIF9tb2R1bGVDb3VudCAtIDggLSAzXSA9IG1vZDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxODsgaSArPSAxKSB7XG4gICAgICAgIHZhciBtb2QgPSAoIXRlc3QgJiYgKCAoYml0cyA+PiBpKSAmIDEpID09IDEpO1xuICAgICAgICBfbW9kdWxlc1tpICUgMyArIF9tb2R1bGVDb3VudCAtIDggLSAzXVtNYXRoLmZsb29yKGkgLyAzKV0gPSBtb2Q7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBzZXR1cFR5cGVJbmZvID0gZnVuY3Rpb24odGVzdCwgbWFza1BhdHRlcm4pIHtcblxuICAgICAgdmFyIGRhdGEgPSAoX2Vycm9yQ29ycmVjdGlvbkxldmVsIDw8IDMpIHwgbWFza1BhdHRlcm47XG4gICAgICB2YXIgYml0cyA9IFFSVXRpbC5nZXRCQ0hUeXBlSW5mbyhkYXRhKTtcblxuICAgICAgLy8gdmVydGljYWxcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTU7IGkgKz0gMSkge1xuXG4gICAgICAgIHZhciBtb2QgPSAoIXRlc3QgJiYgKCAoYml0cyA+PiBpKSAmIDEpID09IDEpO1xuXG4gICAgICAgIGlmIChpIDwgNikge1xuICAgICAgICAgIF9tb2R1bGVzW2ldWzhdID0gbW9kO1xuICAgICAgICB9IGVsc2UgaWYgKGkgPCA4KSB7XG4gICAgICAgICAgX21vZHVsZXNbaSArIDFdWzhdID0gbW9kO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9tb2R1bGVzW19tb2R1bGVDb3VudCAtIDE1ICsgaV1bOF0gPSBtb2Q7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gaG9yaXpvbnRhbFxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNTsgaSArPSAxKSB7XG5cbiAgICAgICAgdmFyIG1vZCA9ICghdGVzdCAmJiAoIChiaXRzID4+IGkpICYgMSkgPT0gMSk7XG5cbiAgICAgICAgaWYgKGkgPCA4KSB7XG4gICAgICAgICAgX21vZHVsZXNbOF1bX21vZHVsZUNvdW50IC0gaSAtIDFdID0gbW9kO1xuICAgICAgICB9IGVsc2UgaWYgKGkgPCA5KSB7XG4gICAgICAgICAgX21vZHVsZXNbOF1bMTUgLSBpIC0gMSArIDFdID0gbW9kO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9tb2R1bGVzWzhdWzE1IC0gaSAtIDFdID0gbW9kO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGZpeGVkIG1vZHVsZVxuICAgICAgX21vZHVsZXNbX21vZHVsZUNvdW50IC0gOF1bOF0gPSAoIXRlc3QpO1xuICAgIH07XG5cbiAgICB2YXIgbWFwRGF0YSA9IGZ1bmN0aW9uKGRhdGEsIG1hc2tQYXR0ZXJuKSB7XG5cbiAgICAgIHZhciBpbmMgPSAtMTtcbiAgICAgIHZhciByb3cgPSBfbW9kdWxlQ291bnQgLSAxO1xuICAgICAgdmFyIGJpdEluZGV4ID0gNztcbiAgICAgIHZhciBieXRlSW5kZXggPSAwO1xuICAgICAgdmFyIG1hc2tGdW5jID0gUVJVdGlsLmdldE1hc2tGdW5jdGlvbihtYXNrUGF0dGVybik7XG5cbiAgICAgIGZvciAodmFyIGNvbCA9IF9tb2R1bGVDb3VudCAtIDE7IGNvbCA+IDA7IGNvbCAtPSAyKSB7XG5cbiAgICAgICAgaWYgKGNvbCA9PSA2KSBjb2wgLT0gMTtcblxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuXG4gICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCAyOyBjICs9IDEpIHtcblxuICAgICAgICAgICAgaWYgKF9tb2R1bGVzW3Jvd11bY29sIC0gY10gPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgIHZhciBkYXJrID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgaWYgKGJ5dGVJbmRleCA8IGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZGFyayA9ICggKCAoZGF0YVtieXRlSW5kZXhdID4+PiBiaXRJbmRleCkgJiAxKSA9PSAxKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZhciBtYXNrID0gbWFza0Z1bmMocm93LCBjb2wgLSBjKTtcblxuICAgICAgICAgICAgICBpZiAobWFzaykge1xuICAgICAgICAgICAgICAgIGRhcmsgPSAhZGFyaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIF9tb2R1bGVzW3Jvd11bY29sIC0gY10gPSBkYXJrO1xuICAgICAgICAgICAgICBiaXRJbmRleCAtPSAxO1xuXG4gICAgICAgICAgICAgIGlmIChiaXRJbmRleCA9PSAtMSkge1xuICAgICAgICAgICAgICAgIGJ5dGVJbmRleCArPSAxO1xuICAgICAgICAgICAgICAgIGJpdEluZGV4ID0gNztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdyArPSBpbmM7XG5cbiAgICAgICAgICBpZiAocm93IDwgMCB8fCBfbW9kdWxlQ291bnQgPD0gcm93KSB7XG4gICAgICAgICAgICByb3cgLT0gaW5jO1xuICAgICAgICAgICAgaW5jID0gLWluYztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgY3JlYXRlQnl0ZXMgPSBmdW5jdGlvbihidWZmZXIsIHJzQmxvY2tzKSB7XG5cbiAgICAgIHZhciBvZmZzZXQgPSAwO1xuXG4gICAgICB2YXIgbWF4RGNDb3VudCA9IDA7XG4gICAgICB2YXIgbWF4RWNDb3VudCA9IDA7XG5cbiAgICAgIHZhciBkY2RhdGEgPSBuZXcgQXJyYXkocnNCbG9ja3MubGVuZ3RoKTtcbiAgICAgIHZhciBlY2RhdGEgPSBuZXcgQXJyYXkocnNCbG9ja3MubGVuZ3RoKTtcblxuICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCByc0Jsb2Nrcy5sZW5ndGg7IHIgKz0gMSkge1xuXG4gICAgICAgIHZhciBkY0NvdW50ID0gcnNCbG9ja3Nbcl0uZGF0YUNvdW50O1xuICAgICAgICB2YXIgZWNDb3VudCA9IHJzQmxvY2tzW3JdLnRvdGFsQ291bnQgLSBkY0NvdW50O1xuXG4gICAgICAgIG1heERjQ291bnQgPSBNYXRoLm1heChtYXhEY0NvdW50LCBkY0NvdW50KTtcbiAgICAgICAgbWF4RWNDb3VudCA9IE1hdGgubWF4KG1heEVjQ291bnQsIGVjQ291bnQpO1xuXG4gICAgICAgIGRjZGF0YVtyXSA9IG5ldyBBcnJheShkY0NvdW50KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRjZGF0YVtyXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGRjZGF0YVtyXVtpXSA9IDB4ZmYgJiBidWZmZXIuZ2V0QnVmZmVyKClbaSArIG9mZnNldF07XG4gICAgICAgIH1cbiAgICAgICAgb2Zmc2V0ICs9IGRjQ291bnQ7XG5cbiAgICAgICAgdmFyIHJzUG9seSA9IFFSVXRpbC5nZXRFcnJvckNvcnJlY3RQb2x5bm9taWFsKGVjQ291bnQpO1xuICAgICAgICB2YXIgcmF3UG9seSA9IHFyUG9seW5vbWlhbChkY2RhdGFbcl0sIHJzUG9seS5nZXRMZW5ndGgoKSAtIDEpO1xuXG4gICAgICAgIHZhciBtb2RQb2x5ID0gcmF3UG9seS5tb2QocnNQb2x5KTtcbiAgICAgICAgZWNkYXRhW3JdID0gbmV3IEFycmF5KHJzUG9seS5nZXRMZW5ndGgoKSAtIDEpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVjZGF0YVtyXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHZhciBtb2RJbmRleCA9IGkgKyBtb2RQb2x5LmdldExlbmd0aCgpIC0gZWNkYXRhW3JdLmxlbmd0aDtcbiAgICAgICAgICBlY2RhdGFbcl1baV0gPSAobW9kSW5kZXggPj0gMCk/IG1vZFBvbHkuZ2V0QXQobW9kSW5kZXgpIDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdG90YWxDb2RlQ291bnQgPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByc0Jsb2Nrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB0b3RhbENvZGVDb3VudCArPSByc0Jsb2Nrc1tpXS50b3RhbENvdW50O1xuICAgICAgfVxuXG4gICAgICB2YXIgZGF0YSA9IG5ldyBBcnJheSh0b3RhbENvZGVDb3VudCk7XG4gICAgICB2YXIgaW5kZXggPSAwO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heERjQ291bnQ7IGkgKz0gMSkge1xuICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IHJzQmxvY2tzLmxlbmd0aDsgciArPSAxKSB7XG4gICAgICAgICAgaWYgKGkgPCBkY2RhdGFbcl0ubGVuZ3RoKSB7XG4gICAgICAgICAgICBkYXRhW2luZGV4XSA9IGRjZGF0YVtyXVtpXTtcbiAgICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF4RWNDb3VudDsgaSArPSAxKSB7XG4gICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgcnNCbG9ja3MubGVuZ3RoOyByICs9IDEpIHtcbiAgICAgICAgICBpZiAoaSA8IGVjZGF0YVtyXS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRhdGFbaW5kZXhdID0gZWNkYXRhW3JdW2ldO1xuICAgICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfTtcblxuICAgIHZhciBjcmVhdGVEYXRhID0gZnVuY3Rpb24odHlwZU51bWJlciwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIGRhdGFMaXN0KSB7XG5cbiAgICAgIHZhciByc0Jsb2NrcyA9IFFSUlNCbG9jay5nZXRSU0Jsb2Nrcyh0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3Rpb25MZXZlbCk7XG5cbiAgICAgIHZhciBidWZmZXIgPSBxckJpdEJ1ZmZlcigpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGFMaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBkYXRhID0gZGF0YUxpc3RbaV07XG4gICAgICAgIGJ1ZmZlci5wdXQoZGF0YS5nZXRNb2RlKCksIDQpO1xuICAgICAgICBidWZmZXIucHV0KGRhdGEuZ2V0TGVuZ3RoKCksIFFSVXRpbC5nZXRMZW5ndGhJbkJpdHMoZGF0YS5nZXRNb2RlKCksIHR5cGVOdW1iZXIpICk7XG4gICAgICAgIGRhdGEud3JpdGUoYnVmZmVyKTtcbiAgICAgIH1cblxuICAgICAgLy8gY2FsYyBudW0gbWF4IGRhdGEuXG4gICAgICB2YXIgdG90YWxEYXRhQ291bnQgPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByc0Jsb2Nrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB0b3RhbERhdGFDb3VudCArPSByc0Jsb2Nrc1tpXS5kYXRhQ291bnQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgPiB0b3RhbERhdGFDb3VudCAqIDgpIHtcbiAgICAgICAgdGhyb3cgJ2NvZGUgbGVuZ3RoIG92ZXJmbG93LiAoJ1xuICAgICAgICAgICsgYnVmZmVyLmdldExlbmd0aEluQml0cygpXG4gICAgICAgICAgKyAnPidcbiAgICAgICAgICArIHRvdGFsRGF0YUNvdW50ICogOFxuICAgICAgICAgICsgJyknO1xuICAgICAgfVxuXG4gICAgICAvLyBlbmQgY29kZVxuICAgICAgaWYgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSArIDQgPD0gdG90YWxEYXRhQ291bnQgKiA4KSB7XG4gICAgICAgIGJ1ZmZlci5wdXQoMCwgNCk7XG4gICAgICB9XG5cbiAgICAgIC8vIHBhZGRpbmdcbiAgICAgIHdoaWxlIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgJSA4ICE9IDApIHtcbiAgICAgICAgYnVmZmVyLnB1dEJpdChmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHBhZGRpbmdcbiAgICAgIHdoaWxlICh0cnVlKSB7XG5cbiAgICAgICAgaWYgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSA+PSB0b3RhbERhdGFDb3VudCAqIDgpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBidWZmZXIucHV0KFBBRDAsIDgpO1xuXG4gICAgICAgIGlmIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgPj0gdG90YWxEYXRhQ291bnQgKiA4KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgYnVmZmVyLnB1dChQQUQxLCA4KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNyZWF0ZUJ5dGVzKGJ1ZmZlciwgcnNCbG9ja3MpO1xuICAgIH07XG5cbiAgICBfdGhpcy5hZGREYXRhID0gZnVuY3Rpb24oZGF0YSwgbW9kZSkge1xuXG4gICAgICBtb2RlID0gbW9kZSB8fCAnQnl0ZSc7XG5cbiAgICAgIHZhciBuZXdEYXRhID0gbnVsbDtcblxuICAgICAgc3dpdGNoKG1vZGUpIHtcbiAgICAgIGNhc2UgJ051bWVyaWMnIDpcbiAgICAgICAgbmV3RGF0YSA9IHFyTnVtYmVyKGRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0FscGhhbnVtZXJpYycgOlxuICAgICAgICBuZXdEYXRhID0gcXJBbHBoYU51bShkYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdCeXRlJyA6XG4gICAgICAgIG5ld0RhdGEgPSBxcjhCaXRCeXRlKGRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0thbmppJyA6XG4gICAgICAgIG5ld0RhdGEgPSBxckthbmppKGRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQgOlxuICAgICAgICB0aHJvdyAnbW9kZTonICsgbW9kZTtcbiAgICAgIH1cblxuICAgICAgX2RhdGFMaXN0LnB1c2gobmV3RGF0YSk7XG4gICAgICBfZGF0YUNhY2hlID0gbnVsbDtcbiAgICB9O1xuXG4gICAgX3RoaXMuaXNEYXJrID0gZnVuY3Rpb24ocm93LCBjb2wpIHtcbiAgICAgIGlmIChyb3cgPCAwIHx8IF9tb2R1bGVDb3VudCA8PSByb3cgfHwgY29sIDwgMCB8fCBfbW9kdWxlQ291bnQgPD0gY29sKSB7XG4gICAgICAgIHRocm93IHJvdyArICcsJyArIGNvbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfbW9kdWxlc1tyb3ddW2NvbF07XG4gICAgfTtcblxuICAgIF90aGlzLmdldE1vZHVsZUNvdW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gX21vZHVsZUNvdW50O1xuICAgIH07XG5cbiAgICBfdGhpcy5tYWtlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoX3R5cGVOdW1iZXIgPCAxKSB7XG4gICAgICAgIHZhciB0eXBlTnVtYmVyID0gMTtcblxuICAgICAgICBmb3IgKDsgdHlwZU51bWJlciA8IDQwOyB0eXBlTnVtYmVyKyspIHtcbiAgICAgICAgICB2YXIgcnNCbG9ja3MgPSBRUlJTQmxvY2suZ2V0UlNCbG9ja3ModHlwZU51bWJlciwgX2Vycm9yQ29ycmVjdGlvbkxldmVsKTtcbiAgICAgICAgICB2YXIgYnVmZmVyID0gcXJCaXRCdWZmZXIoKTtcblxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX2RhdGFMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IF9kYXRhTGlzdFtpXTtcbiAgICAgICAgICAgIGJ1ZmZlci5wdXQoZGF0YS5nZXRNb2RlKCksIDQpO1xuICAgICAgICAgICAgYnVmZmVyLnB1dChkYXRhLmdldExlbmd0aCgpLCBRUlV0aWwuZ2V0TGVuZ3RoSW5CaXRzKGRhdGEuZ2V0TW9kZSgpLCB0eXBlTnVtYmVyKSApO1xuICAgICAgICAgICAgZGF0YS53cml0ZShidWZmZXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciB0b3RhbERhdGFDb3VudCA9IDA7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByc0Jsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdG90YWxEYXRhQ291bnQgKz0gcnNCbG9ja3NbaV0uZGF0YUNvdW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgPD0gdG90YWxEYXRhQ291bnQgKiA4KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfdHlwZU51bWJlciA9IHR5cGVOdW1iZXI7XG4gICAgICB9XG5cbiAgICAgIG1ha2VJbXBsKGZhbHNlLCBnZXRCZXN0TWFza1BhdHRlcm4oKSApO1xuICAgIH07XG5cbiAgICBfdGhpcy5jcmVhdGVUYWJsZVRhZyA9IGZ1bmN0aW9uKGNlbGxTaXplLCBtYXJnaW4pIHtcblxuICAgICAgY2VsbFNpemUgPSBjZWxsU2l6ZSB8fCAyO1xuICAgICAgbWFyZ2luID0gKHR5cGVvZiBtYXJnaW4gPT0gJ3VuZGVmaW5lZCcpPyBjZWxsU2l6ZSAqIDQgOiBtYXJnaW47XG5cbiAgICAgIHZhciBxckh0bWwgPSAnJztcblxuICAgICAgcXJIdG1sICs9ICc8dGFibGUgc3R5bGU9XCInO1xuICAgICAgcXJIdG1sICs9ICcgYm9yZGVyLXdpZHRoOiAwcHg7IGJvcmRlci1zdHlsZTogbm9uZTsnO1xuICAgICAgcXJIdG1sICs9ICcgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsnO1xuICAgICAgcXJIdG1sICs9ICcgcGFkZGluZzogMHB4OyBtYXJnaW46ICcgKyBtYXJnaW4gKyAncHg7JztcbiAgICAgIHFySHRtbCArPSAnXCI+JztcbiAgICAgIHFySHRtbCArPSAnPHRib2R5Pic7XG5cbiAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgX3RoaXMuZ2V0TW9kdWxlQ291bnQoKTsgciArPSAxKSB7XG5cbiAgICAgICAgcXJIdG1sICs9ICc8dHI+JztcblxuICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IF90aGlzLmdldE1vZHVsZUNvdW50KCk7IGMgKz0gMSkge1xuICAgICAgICAgIHFySHRtbCArPSAnPHRkIHN0eWxlPVwiJztcbiAgICAgICAgICBxckh0bWwgKz0gJyBib3JkZXItd2lkdGg6IDBweDsgYm9yZGVyLXN0eWxlOiBub25lOyc7XG4gICAgICAgICAgcXJIdG1sICs9ICcgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsnO1xuICAgICAgICAgIHFySHRtbCArPSAnIHBhZGRpbmc6IDBweDsgbWFyZ2luOiAwcHg7JztcbiAgICAgICAgICBxckh0bWwgKz0gJyB3aWR0aDogJyArIGNlbGxTaXplICsgJ3B4Oyc7XG4gICAgICAgICAgcXJIdG1sICs9ICcgaGVpZ2h0OiAnICsgY2VsbFNpemUgKyAncHg7JztcbiAgICAgICAgICBxckh0bWwgKz0gJyBiYWNrZ3JvdW5kLWNvbG9yOiAnO1xuICAgICAgICAgIHFySHRtbCArPSBfdGhpcy5pc0RhcmsociwgYyk/ICcjMDAwMDAwJyA6ICcjZmZmZmZmJztcbiAgICAgICAgICBxckh0bWwgKz0gJzsnO1xuICAgICAgICAgIHFySHRtbCArPSAnXCIvPic7XG4gICAgICAgIH1cblxuICAgICAgICBxckh0bWwgKz0gJzwvdHI+JztcbiAgICAgIH1cblxuICAgICAgcXJIdG1sICs9ICc8L3Rib2R5Pic7XG4gICAgICBxckh0bWwgKz0gJzwvdGFibGU+JztcblxuICAgICAgcmV0dXJuIHFySHRtbDtcbiAgICB9O1xuXG4gICAgX3RoaXMuY3JlYXRlU3ZnVGFnID0gZnVuY3Rpb24oY2VsbFNpemUsIG1hcmdpbiwgYWx0LCB0aXRsZSkge1xuXG4gICAgICB2YXIgb3B0cyA9IHt9O1xuICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT0gJ29iamVjdCcpIHtcbiAgICAgICAgLy8gQ2FsbGVkIGJ5IG9wdGlvbnMuXG4gICAgICAgIG9wdHMgPSBhcmd1bWVudHNbMF07XG4gICAgICAgIC8vIG92ZXJ3cml0ZSBjZWxsU2l6ZSBhbmQgbWFyZ2luLlxuICAgICAgICBjZWxsU2l6ZSA9IG9wdHMuY2VsbFNpemU7XG4gICAgICAgIG1hcmdpbiA9IG9wdHMubWFyZ2luO1xuICAgICAgICBhbHQgPSBvcHRzLmFsdDtcbiAgICAgICAgdGl0bGUgPSBvcHRzLnRpdGxlO1xuICAgICAgfVxuXG4gICAgICBjZWxsU2l6ZSA9IGNlbGxTaXplIHx8IDI7XG4gICAgICBtYXJnaW4gPSAodHlwZW9mIG1hcmdpbiA9PSAndW5kZWZpbmVkJyk/IGNlbGxTaXplICogNCA6IG1hcmdpbjtcblxuICAgICAgLy8gQ29tcG9zZSBhbHQgcHJvcGVydHkgc3Vycm9nYXRlXG4gICAgICBhbHQgPSAodHlwZW9mIGFsdCA9PT0gJ3N0cmluZycpID8ge3RleHQ6IGFsdH0gOiBhbHQgfHwge307XG4gICAgICBhbHQudGV4dCA9IGFsdC50ZXh0IHx8IG51bGw7XG4gICAgICBhbHQuaWQgPSAoYWx0LnRleHQpID8gYWx0LmlkIHx8ICdxcmNvZGUtZGVzY3JpcHRpb24nIDogbnVsbDtcblxuICAgICAgLy8gQ29tcG9zZSB0aXRsZSBwcm9wZXJ0eSBzdXJyb2dhdGVcbiAgICAgIHRpdGxlID0gKHR5cGVvZiB0aXRsZSA9PT0gJ3N0cmluZycpID8ge3RleHQ6IHRpdGxlfSA6IHRpdGxlIHx8IHt9O1xuICAgICAgdGl0bGUudGV4dCA9IHRpdGxlLnRleHQgfHwgbnVsbDtcbiAgICAgIHRpdGxlLmlkID0gKHRpdGxlLnRleHQpID8gdGl0bGUuaWQgfHwgJ3FyY29kZS10aXRsZScgOiBudWxsO1xuXG4gICAgICB2YXIgc2l6ZSA9IF90aGlzLmdldE1vZHVsZUNvdW50KCkgKiBjZWxsU2l6ZSArIG1hcmdpbiAqIDI7XG4gICAgICB2YXIgYywgbWMsIHIsIG1yLCBxclN2Zz0nJywgcmVjdDtcblxuICAgICAgcmVjdCA9ICdsJyArIGNlbGxTaXplICsgJywwIDAsJyArIGNlbGxTaXplICtcbiAgICAgICAgJyAtJyArIGNlbGxTaXplICsgJywwIDAsLScgKyBjZWxsU2l6ZSArICd6ICc7XG5cbiAgICAgIHFyU3ZnICs9ICc8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCInO1xuICAgICAgcXJTdmcgKz0gIW9wdHMuc2NhbGFibGUgPyAnIHdpZHRoPVwiJyArIHNpemUgKyAncHhcIiBoZWlnaHQ9XCInICsgc2l6ZSArICdweFwiJyA6ICcnO1xuICAgICAgcXJTdmcgKz0gJyB2aWV3Qm94PVwiMCAwICcgKyBzaXplICsgJyAnICsgc2l6ZSArICdcIiAnO1xuICAgICAgcXJTdmcgKz0gJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pbllNaW4gbWVldFwiJztcbiAgICAgIHFyU3ZnICs9ICh0aXRsZS50ZXh0IHx8IGFsdC50ZXh0KSA/ICcgcm9sZT1cImltZ1wiIGFyaWEtbGFiZWxsZWRieT1cIicgK1xuICAgICAgICAgIGVzY2FwZVhtbChbdGl0bGUuaWQsIGFsdC5pZF0uam9pbignICcpLnRyaW0oKSApICsgJ1wiJyA6ICcnO1xuICAgICAgcXJTdmcgKz0gJz4nO1xuICAgICAgcXJTdmcgKz0gKHRpdGxlLnRleHQpID8gJzx0aXRsZSBpZD1cIicgKyBlc2NhcGVYbWwodGl0bGUuaWQpICsgJ1wiPicgK1xuICAgICAgICAgIGVzY2FwZVhtbCh0aXRsZS50ZXh0KSArICc8L3RpdGxlPicgOiAnJztcbiAgICAgIHFyU3ZnICs9IChhbHQudGV4dCkgPyAnPGRlc2NyaXB0aW9uIGlkPVwiJyArIGVzY2FwZVhtbChhbHQuaWQpICsgJ1wiPicgK1xuICAgICAgICAgIGVzY2FwZVhtbChhbHQudGV4dCkgKyAnPC9kZXNjcmlwdGlvbj4nIDogJyc7XG4gICAgICBxclN2ZyArPSAnPHJlY3Qgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbGw9XCJ3aGl0ZVwiIGN4PVwiMFwiIGN5PVwiMFwiLz4nO1xuICAgICAgcXJTdmcgKz0gJzxwYXRoIGQ9XCInO1xuXG4gICAgICBmb3IgKHIgPSAwOyByIDwgX3RoaXMuZ2V0TW9kdWxlQ291bnQoKTsgciArPSAxKSB7XG4gICAgICAgIG1yID0gciAqIGNlbGxTaXplICsgbWFyZ2luO1xuICAgICAgICBmb3IgKGMgPSAwOyBjIDwgX3RoaXMuZ2V0TW9kdWxlQ291bnQoKTsgYyArPSAxKSB7XG4gICAgICAgICAgaWYgKF90aGlzLmlzRGFyayhyLCBjKSApIHtcbiAgICAgICAgICAgIG1jID0gYypjZWxsU2l6ZSttYXJnaW47XG4gICAgICAgICAgICBxclN2ZyArPSAnTScgKyBtYyArICcsJyArIG1yICsgcmVjdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcXJTdmcgKz0gJ1wiIHN0cm9rZT1cInRyYW5zcGFyZW50XCIgZmlsbD1cImJsYWNrXCIvPic7XG4gICAgICBxclN2ZyArPSAnPC9zdmc+JztcblxuICAgICAgcmV0dXJuIHFyU3ZnO1xuICAgIH07XG5cbiAgICBfdGhpcy5jcmVhdGVEYXRhVVJMID0gZnVuY3Rpb24oY2VsbFNpemUsIG1hcmdpbikge1xuXG4gICAgICBjZWxsU2l6ZSA9IGNlbGxTaXplIHx8IDI7XG4gICAgICBtYXJnaW4gPSAodHlwZW9mIG1hcmdpbiA9PSAndW5kZWZpbmVkJyk/IGNlbGxTaXplICogNCA6IG1hcmdpbjtcblxuICAgICAgdmFyIHNpemUgPSBfdGhpcy5nZXRNb2R1bGVDb3VudCgpICogY2VsbFNpemUgKyBtYXJnaW4gKiAyO1xuICAgICAgdmFyIG1pbiA9IG1hcmdpbjtcbiAgICAgIHZhciBtYXggPSBzaXplIC0gbWFyZ2luO1xuXG4gICAgICByZXR1cm4gY3JlYXRlRGF0YVVSTChzaXplLCBzaXplLCBmdW5jdGlvbih4LCB5KSB7XG4gICAgICAgIGlmIChtaW4gPD0geCAmJiB4IDwgbWF4ICYmIG1pbiA8PSB5ICYmIHkgPCBtYXgpIHtcbiAgICAgICAgICB2YXIgYyA9IE1hdGguZmxvb3IoICh4IC0gbWluKSAvIGNlbGxTaXplKTtcbiAgICAgICAgICB2YXIgciA9IE1hdGguZmxvb3IoICh5IC0gbWluKSAvIGNlbGxTaXplKTtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuaXNEYXJrKHIsIGMpPyAwIDogMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgfSApO1xuICAgIH07XG5cbiAgICBfdGhpcy5jcmVhdGVJbWdUYWcgPSBmdW5jdGlvbihjZWxsU2l6ZSwgbWFyZ2luLCBhbHQpIHtcblxuICAgICAgY2VsbFNpemUgPSBjZWxsU2l6ZSB8fCAyO1xuICAgICAgbWFyZ2luID0gKHR5cGVvZiBtYXJnaW4gPT0gJ3VuZGVmaW5lZCcpPyBjZWxsU2l6ZSAqIDQgOiBtYXJnaW47XG5cbiAgICAgIHZhciBzaXplID0gX3RoaXMuZ2V0TW9kdWxlQ291bnQoKSAqIGNlbGxTaXplICsgbWFyZ2luICogMjtcblxuICAgICAgdmFyIGltZyA9ICcnO1xuICAgICAgaW1nICs9ICc8aW1nJztcbiAgICAgIGltZyArPSAnXFx1MDAyMHNyYz1cIic7XG4gICAgICBpbWcgKz0gX3RoaXMuY3JlYXRlRGF0YVVSTChjZWxsU2l6ZSwgbWFyZ2luKTtcbiAgICAgIGltZyArPSAnXCInO1xuICAgICAgaW1nICs9ICdcXHUwMDIwd2lkdGg9XCInO1xuICAgICAgaW1nICs9IHNpemU7XG4gICAgICBpbWcgKz0gJ1wiJztcbiAgICAgIGltZyArPSAnXFx1MDAyMGhlaWdodD1cIic7XG4gICAgICBpbWcgKz0gc2l6ZTtcbiAgICAgIGltZyArPSAnXCInO1xuICAgICAgaWYgKGFsdCkge1xuICAgICAgICBpbWcgKz0gJ1xcdTAwMjBhbHQ9XCInO1xuICAgICAgICBpbWcgKz0gZXNjYXBlWG1sKGFsdCk7XG4gICAgICAgIGltZyArPSAnXCInO1xuICAgICAgfVxuICAgICAgaW1nICs9ICcvPic7XG5cbiAgICAgIHJldHVybiBpbWc7XG4gICAgfTtcblxuICAgIHZhciBlc2NhcGVYbWwgPSBmdW5jdGlvbihzKSB7XG4gICAgICB2YXIgZXNjYXBlZCA9ICcnO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBjID0gcy5jaGFyQXQoaSk7XG4gICAgICAgIHN3aXRjaChjKSB7XG4gICAgICAgIGNhc2UgJzwnOiBlc2NhcGVkICs9ICcmbHQ7JzsgYnJlYWs7XG4gICAgICAgIGNhc2UgJz4nOiBlc2NhcGVkICs9ICcmZ3Q7JzsgYnJlYWs7XG4gICAgICAgIGNhc2UgJyYnOiBlc2NhcGVkICs9ICcmYW1wOyc7IGJyZWFrO1xuICAgICAgICBjYXNlICdcIic6IGVzY2FwZWQgKz0gJyZxdW90Oyc7IGJyZWFrO1xuICAgICAgICBkZWZhdWx0IDogZXNjYXBlZCArPSBjOyBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVzY2FwZWQ7XG4gICAgfTtcblxuICAgIHZhciBfY3JlYXRlSGFsZkFTQ0lJID0gZnVuY3Rpb24obWFyZ2luKSB7XG4gICAgICB2YXIgY2VsbFNpemUgPSAxO1xuICAgICAgbWFyZ2luID0gKHR5cGVvZiBtYXJnaW4gPT0gJ3VuZGVmaW5lZCcpPyBjZWxsU2l6ZSAqIDIgOiBtYXJnaW47XG5cbiAgICAgIHZhciBzaXplID0gX3RoaXMuZ2V0TW9kdWxlQ291bnQoKSAqIGNlbGxTaXplICsgbWFyZ2luICogMjtcbiAgICAgIHZhciBtaW4gPSBtYXJnaW47XG4gICAgICB2YXIgbWF4ID0gc2l6ZSAtIG1hcmdpbjtcblxuICAgICAgdmFyIHksIHgsIHIxLCByMiwgcDtcblxuICAgICAgdmFyIGJsb2NrcyA9IHtcbiAgICAgICAgJ+KWiOKWiCc6ICfilognLFxuICAgICAgICAn4paIICc6ICfiloAnLFxuICAgICAgICAnIOKWiCc6ICfiloQnLFxuICAgICAgICAnICAnOiAnICdcbiAgICAgIH07XG5cbiAgICAgIHZhciBibG9ja3NMYXN0TGluZU5vTWFyZ2luID0ge1xuICAgICAgICAn4paI4paIJzogJ+KWgCcsXG4gICAgICAgICfiloggJzogJ+KWgCcsXG4gICAgICAgICcg4paIJzogJyAnLFxuICAgICAgICAnICAnOiAnICdcbiAgICAgIH07XG5cbiAgICAgIHZhciBhc2NpaSA9ICcnO1xuICAgICAgZm9yICh5ID0gMDsgeSA8IHNpemU7IHkgKz0gMikge1xuICAgICAgICByMSA9IE1hdGguZmxvb3IoKHkgLSBtaW4pIC8gY2VsbFNpemUpO1xuICAgICAgICByMiA9IE1hdGguZmxvb3IoKHkgKyAxIC0gbWluKSAvIGNlbGxTaXplKTtcbiAgICAgICAgZm9yICh4ID0gMDsgeCA8IHNpemU7IHggKz0gMSkge1xuICAgICAgICAgIHAgPSAn4paIJztcblxuICAgICAgICAgIGlmIChtaW4gPD0geCAmJiB4IDwgbWF4ICYmIG1pbiA8PSB5ICYmIHkgPCBtYXggJiYgX3RoaXMuaXNEYXJrKHIxLCBNYXRoLmZsb29yKCh4IC0gbWluKSAvIGNlbGxTaXplKSkpIHtcbiAgICAgICAgICAgIHAgPSAnICc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG1pbiA8PSB4ICYmIHggPCBtYXggJiYgbWluIDw9IHkrMSAmJiB5KzEgPCBtYXggJiYgX3RoaXMuaXNEYXJrKHIyLCBNYXRoLmZsb29yKCh4IC0gbWluKSAvIGNlbGxTaXplKSkpIHtcbiAgICAgICAgICAgIHAgKz0gJyAnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHAgKz0gJ+KWiCc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gT3V0cHV0IDIgY2hhcmFjdGVycyBwZXIgcGl4ZWwsIHRvIGNyZWF0ZSBmdWxsIHNxdWFyZS4gMSBjaGFyYWN0ZXIgcGVyIHBpeGVscyBnaXZlcyBvbmx5IGhhbGYgd2lkdGggb2Ygc3F1YXJlLlxuICAgICAgICAgIGFzY2lpICs9IChtYXJnaW4gPCAxICYmIHkrMSA+PSBtYXgpID8gYmxvY2tzTGFzdExpbmVOb01hcmdpbltwXSA6IGJsb2Nrc1twXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFzY2lpICs9ICdcXG4nO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2l6ZSAlIDIgJiYgbWFyZ2luID4gMCkge1xuICAgICAgICByZXR1cm4gYXNjaWkuc3Vic3RyaW5nKDAsIGFzY2lpLmxlbmd0aCAtIHNpemUgLSAxKSArIEFycmF5KHNpemUrMSkuam9pbign4paAJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhc2NpaS5zdWJzdHJpbmcoMCwgYXNjaWkubGVuZ3RoLTEpO1xuICAgIH07XG5cbiAgICBfdGhpcy5jcmVhdGVBU0NJSSA9IGZ1bmN0aW9uKGNlbGxTaXplLCBtYXJnaW4pIHtcbiAgICAgIGNlbGxTaXplID0gY2VsbFNpemUgfHwgMTtcblxuICAgICAgaWYgKGNlbGxTaXplIDwgMikge1xuICAgICAgICByZXR1cm4gX2NyZWF0ZUhhbGZBU0NJSShtYXJnaW4pO1xuICAgICAgfVxuXG4gICAgICBjZWxsU2l6ZSAtPSAxO1xuICAgICAgbWFyZ2luID0gKHR5cGVvZiBtYXJnaW4gPT0gJ3VuZGVmaW5lZCcpPyBjZWxsU2l6ZSAqIDIgOiBtYXJnaW47XG5cbiAgICAgIHZhciBzaXplID0gX3RoaXMuZ2V0TW9kdWxlQ291bnQoKSAqIGNlbGxTaXplICsgbWFyZ2luICogMjtcbiAgICAgIHZhciBtaW4gPSBtYXJnaW47XG4gICAgICB2YXIgbWF4ID0gc2l6ZSAtIG1hcmdpbjtcblxuICAgICAgdmFyIHksIHgsIHIsIHA7XG5cbiAgICAgIHZhciB3aGl0ZSA9IEFycmF5KGNlbGxTaXplKzEpLmpvaW4oJ+KWiOKWiCcpO1xuICAgICAgdmFyIGJsYWNrID0gQXJyYXkoY2VsbFNpemUrMSkuam9pbignICAnKTtcblxuICAgICAgdmFyIGFzY2lpID0gJyc7XG4gICAgICB2YXIgbGluZSA9ICcnO1xuICAgICAgZm9yICh5ID0gMDsgeSA8IHNpemU7IHkgKz0gMSkge1xuICAgICAgICByID0gTWF0aC5mbG9vciggKHkgLSBtaW4pIC8gY2VsbFNpemUpO1xuICAgICAgICBsaW5lID0gJyc7XG4gICAgICAgIGZvciAoeCA9IDA7IHggPCBzaXplOyB4ICs9IDEpIHtcbiAgICAgICAgICBwID0gMTtcblxuICAgICAgICAgIGlmIChtaW4gPD0geCAmJiB4IDwgbWF4ICYmIG1pbiA8PSB5ICYmIHkgPCBtYXggJiYgX3RoaXMuaXNEYXJrKHIsIE1hdGguZmxvb3IoKHggLSBtaW4pIC8gY2VsbFNpemUpKSkge1xuICAgICAgICAgICAgcCA9IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gT3V0cHV0IDIgY2hhcmFjdGVycyBwZXIgcGl4ZWwsIHRvIGNyZWF0ZSBmdWxsIHNxdWFyZS4gMSBjaGFyYWN0ZXIgcGVyIHBpeGVscyBnaXZlcyBvbmx5IGhhbGYgd2lkdGggb2Ygc3F1YXJlLlxuICAgICAgICAgIGxpbmUgKz0gcCA/IHdoaXRlIDogYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHIgPSAwOyByIDwgY2VsbFNpemU7IHIgKz0gMSkge1xuICAgICAgICAgIGFzY2lpICs9IGxpbmUgKyAnXFxuJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXNjaWkuc3Vic3RyaW5nKDAsIGFzY2lpLmxlbmd0aC0xKTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyVG8yZENvbnRleHQgPSBmdW5jdGlvbihjb250ZXh0LCBjZWxsU2l6ZSkge1xuICAgICAgY2VsbFNpemUgPSBjZWxsU2l6ZSB8fCAyO1xuICAgICAgdmFyIGxlbmd0aCA9IF90aGlzLmdldE1vZHVsZUNvdW50KCk7XG4gICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBsZW5ndGg7IHJvdysrKSB7XG4gICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IGxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IF90aGlzLmlzRGFyayhyb3csIGNvbCkgPyAnYmxhY2snIDogJ3doaXRlJztcbiAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHJvdyAqIGNlbGxTaXplLCBjb2wgKiBjZWxsU2l6ZSwgY2VsbFNpemUsIGNlbGxTaXplKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfTtcblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBxcmNvZGUuc3RyaW5nVG9CeXRlc1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHFyY29kZS5zdHJpbmdUb0J5dGVzRnVuY3MgPSB7XG4gICAgJ2RlZmF1bHQnIDogZnVuY3Rpb24ocykge1xuICAgICAgdmFyIGJ5dGVzID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGMgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGJ5dGVzLnB1c2goYyAmIDB4ZmYpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH1cbiAgfTtcblxuICBxcmNvZGUuc3RyaW5nVG9CeXRlcyA9IHFyY29kZS5zdHJpbmdUb0J5dGVzRnVuY3NbJ2RlZmF1bHQnXTtcblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBxcmNvZGUuY3JlYXRlU3RyaW5nVG9CeXRlc1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gdW5pY29kZURhdGEgYmFzZTY0IHN0cmluZyBvZiBieXRlIGFycmF5LlxuICAgKiBbMTZiaXQgVW5pY29kZV0sWzE2Yml0IEJ5dGVzXSwgLi4uXG4gICAqIEBwYXJhbSBudW1DaGFyc1xuICAgKi9cbiAgcXJjb2RlLmNyZWF0ZVN0cmluZ1RvQnl0ZXMgPSBmdW5jdGlvbih1bmljb2RlRGF0YSwgbnVtQ2hhcnMpIHtcblxuICAgIC8vIGNyZWF0ZSBjb252ZXJzaW9uIG1hcC5cblxuICAgIHZhciB1bmljb2RlTWFwID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBiaW4gPSBiYXNlNjREZWNvZGVJbnB1dFN0cmVhbSh1bmljb2RlRGF0YSk7XG4gICAgICB2YXIgcmVhZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYiA9IGJpbi5yZWFkKCk7XG4gICAgICAgIGlmIChiID09IC0xKSB0aHJvdyAnZW9mJztcbiAgICAgICAgcmV0dXJuIGI7XG4gICAgICB9O1xuXG4gICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgdmFyIHVuaWNvZGVNYXAgPSB7fTtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBiMCA9IGJpbi5yZWFkKCk7XG4gICAgICAgIGlmIChiMCA9PSAtMSkgYnJlYWs7XG4gICAgICAgIHZhciBiMSA9IHJlYWQoKTtcbiAgICAgICAgdmFyIGIyID0gcmVhZCgpO1xuICAgICAgICB2YXIgYjMgPSByZWFkKCk7XG4gICAgICAgIHZhciBrID0gU3RyaW5nLmZyb21DaGFyQ29kZSggKGIwIDw8IDgpIHwgYjEpO1xuICAgICAgICB2YXIgdiA9IChiMiA8PCA4KSB8IGIzO1xuICAgICAgICB1bmljb2RlTWFwW2tdID0gdjtcbiAgICAgICAgY291bnQgKz0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChjb3VudCAhPSBudW1DaGFycykge1xuICAgICAgICB0aHJvdyBjb3VudCArICcgIT0gJyArIG51bUNoYXJzO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdW5pY29kZU1hcDtcbiAgICB9KCk7XG5cbiAgICB2YXIgdW5rbm93bkNoYXIgPSAnPycuY2hhckNvZGVBdCgwKTtcblxuICAgIHJldHVybiBmdW5jdGlvbihzKSB7XG4gICAgICB2YXIgYnl0ZXMgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgYyA9IHMuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGMgPCAxMjgpIHtcbiAgICAgICAgICBieXRlcy5wdXNoKGMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBiID0gdW5pY29kZU1hcFtzLmNoYXJBdChpKV07XG4gICAgICAgICAgaWYgKHR5cGVvZiBiID09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAoIChiICYgMHhmZikgPT0gYikge1xuICAgICAgICAgICAgICAvLyAxYnl0ZVxuICAgICAgICAgICAgICBieXRlcy5wdXNoKGIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gMmJ5dGVzXG4gICAgICAgICAgICAgIGJ5dGVzLnB1c2goYiA+Pj4gOCk7XG4gICAgICAgICAgICAgIGJ5dGVzLnB1c2goYiAmIDB4ZmYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBieXRlcy5wdXNoKHVua25vd25DaGFyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9O1xuICB9O1xuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFFSTW9kZVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHZhciBRUk1vZGUgPSB7XG4gICAgTU9ERV9OVU1CRVIgOiAgICAxIDw8IDAsXG4gICAgTU9ERV9BTFBIQV9OVU0gOiAxIDw8IDEsXG4gICAgTU9ERV84QklUX0JZVEUgOiAxIDw8IDIsXG4gICAgTU9ERV9LQU5KSSA6ICAgICAxIDw8IDNcbiAgfTtcblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBRUkVycm9yQ29ycmVjdGlvbkxldmVsXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgdmFyIFFSRXJyb3JDb3JyZWN0aW9uTGV2ZWwgPSB7XG4gICAgTCA6IDEsXG4gICAgTSA6IDAsXG4gICAgUSA6IDMsXG4gICAgSCA6IDJcbiAgfTtcblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBRUk1hc2tQYXR0ZXJuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgdmFyIFFSTWFza1BhdHRlcm4gPSB7XG4gICAgUEFUVEVSTjAwMCA6IDAsXG4gICAgUEFUVEVSTjAwMSA6IDEsXG4gICAgUEFUVEVSTjAxMCA6IDIsXG4gICAgUEFUVEVSTjAxMSA6IDMsXG4gICAgUEFUVEVSTjEwMCA6IDQsXG4gICAgUEFUVEVSTjEwMSA6IDUsXG4gICAgUEFUVEVSTjExMCA6IDYsXG4gICAgUEFUVEVSTjExMSA6IDdcbiAgfTtcblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBRUlV0aWxcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICB2YXIgUVJVdGlsID0gZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgUEFUVEVSTl9QT1NJVElPTl9UQUJMRSA9IFtcbiAgICAgIFtdLFxuICAgICAgWzYsIDE4XSxcbiAgICAgIFs2LCAyMl0sXG4gICAgICBbNiwgMjZdLFxuICAgICAgWzYsIDMwXSxcbiAgICAgIFs2LCAzNF0sXG4gICAgICBbNiwgMjIsIDM4XSxcbiAgICAgIFs2LCAyNCwgNDJdLFxuICAgICAgWzYsIDI2LCA0Nl0sXG4gICAgICBbNiwgMjgsIDUwXSxcbiAgICAgIFs2LCAzMCwgNTRdLFxuICAgICAgWzYsIDMyLCA1OF0sXG4gICAgICBbNiwgMzQsIDYyXSxcbiAgICAgIFs2LCAyNiwgNDYsIDY2XSxcbiAgICAgIFs2LCAyNiwgNDgsIDcwXSxcbiAgICAgIFs2LCAyNiwgNTAsIDc0XSxcbiAgICAgIFs2LCAzMCwgNTQsIDc4XSxcbiAgICAgIFs2LCAzMCwgNTYsIDgyXSxcbiAgICAgIFs2LCAzMCwgNTgsIDg2XSxcbiAgICAgIFs2LCAzNCwgNjIsIDkwXSxcbiAgICAgIFs2LCAyOCwgNTAsIDcyLCA5NF0sXG4gICAgICBbNiwgMjYsIDUwLCA3NCwgOThdLFxuICAgICAgWzYsIDMwLCA1NCwgNzgsIDEwMl0sXG4gICAgICBbNiwgMjgsIDU0LCA4MCwgMTA2XSxcbiAgICAgIFs2LCAzMiwgNTgsIDg0LCAxMTBdLFxuICAgICAgWzYsIDMwLCA1OCwgODYsIDExNF0sXG4gICAgICBbNiwgMzQsIDYyLCA5MCwgMTE4XSxcbiAgICAgIFs2LCAyNiwgNTAsIDc0LCA5OCwgMTIyXSxcbiAgICAgIFs2LCAzMCwgNTQsIDc4LCAxMDIsIDEyNl0sXG4gICAgICBbNiwgMjYsIDUyLCA3OCwgMTA0LCAxMzBdLFxuICAgICAgWzYsIDMwLCA1NiwgODIsIDEwOCwgMTM0XSxcbiAgICAgIFs2LCAzNCwgNjAsIDg2LCAxMTIsIDEzOF0sXG4gICAgICBbNiwgMzAsIDU4LCA4NiwgMTE0LCAxNDJdLFxuICAgICAgWzYsIDM0LCA2MiwgOTAsIDExOCwgMTQ2XSxcbiAgICAgIFs2LCAzMCwgNTQsIDc4LCAxMDIsIDEyNiwgMTUwXSxcbiAgICAgIFs2LCAyNCwgNTAsIDc2LCAxMDIsIDEyOCwgMTU0XSxcbiAgICAgIFs2LCAyOCwgNTQsIDgwLCAxMDYsIDEzMiwgMTU4XSxcbiAgICAgIFs2LCAzMiwgNTgsIDg0LCAxMTAsIDEzNiwgMTYyXSxcbiAgICAgIFs2LCAyNiwgNTQsIDgyLCAxMTAsIDEzOCwgMTY2XSxcbiAgICAgIFs2LCAzMCwgNTgsIDg2LCAxMTQsIDE0MiwgMTcwXVxuICAgIF07XG4gICAgdmFyIEcxNSA9ICgxIDw8IDEwKSB8ICgxIDw8IDgpIHwgKDEgPDwgNSkgfCAoMSA8PCA0KSB8ICgxIDw8IDIpIHwgKDEgPDwgMSkgfCAoMSA8PCAwKTtcbiAgICB2YXIgRzE4ID0gKDEgPDwgMTIpIHwgKDEgPDwgMTEpIHwgKDEgPDwgMTApIHwgKDEgPDwgOSkgfCAoMSA8PCA4KSB8ICgxIDw8IDUpIHwgKDEgPDwgMikgfCAoMSA8PCAwKTtcbiAgICB2YXIgRzE1X01BU0sgPSAoMSA8PCAxNCkgfCAoMSA8PCAxMikgfCAoMSA8PCAxMCkgfCAoMSA8PCA0KSB8ICgxIDw8IDEpO1xuXG4gICAgdmFyIF90aGlzID0ge307XG5cbiAgICB2YXIgZ2V0QkNIRGlnaXQgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICB2YXIgZGlnaXQgPSAwO1xuICAgICAgd2hpbGUgKGRhdGEgIT0gMCkge1xuICAgICAgICBkaWdpdCArPSAxO1xuICAgICAgICBkYXRhID4+Pj0gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkaWdpdDtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0QkNIVHlwZUluZm8gPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICB2YXIgZCA9IGRhdGEgPDwgMTA7XG4gICAgICB3aGlsZSAoZ2V0QkNIRGlnaXQoZCkgLSBnZXRCQ0hEaWdpdChHMTUpID49IDApIHtcbiAgICAgICAgZCBePSAoRzE1IDw8IChnZXRCQ0hEaWdpdChkKSAtIGdldEJDSERpZ2l0KEcxNSkgKSApO1xuICAgICAgfVxuICAgICAgcmV0dXJuICggKGRhdGEgPDwgMTApIHwgZCkgXiBHMTVfTUFTSztcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0QkNIVHlwZU51bWJlciA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHZhciBkID0gZGF0YSA8PCAxMjtcbiAgICAgIHdoaWxlIChnZXRCQ0hEaWdpdChkKSAtIGdldEJDSERpZ2l0KEcxOCkgPj0gMCkge1xuICAgICAgICBkIF49IChHMTggPDwgKGdldEJDSERpZ2l0KGQpIC0gZ2V0QkNIRGlnaXQoRzE4KSApICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKGRhdGEgPDwgMTIpIHwgZDtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0UGF0dGVyblBvc2l0aW9uID0gZnVuY3Rpb24odHlwZU51bWJlcikge1xuICAgICAgcmV0dXJuIFBBVFRFUk5fUE9TSVRJT05fVEFCTEVbdHlwZU51bWJlciAtIDFdO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRNYXNrRnVuY3Rpb24gPSBmdW5jdGlvbihtYXNrUGF0dGVybikge1xuXG4gICAgICBzd2l0Y2ggKG1hc2tQYXR0ZXJuKSB7XG5cbiAgICAgIGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMDAwIDpcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGksIGopIHsgcmV0dXJuIChpICsgaikgJSAyID09IDA7IH07XG4gICAgICBjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjAwMSA6XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihpLCBqKSB7IHJldHVybiBpICUgMiA9PSAwOyB9O1xuICAgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4wMTAgOlxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oaSwgaikgeyByZXR1cm4gaiAlIDMgPT0gMDsgfTtcbiAgICAgIGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMDExIDpcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGksIGopIHsgcmV0dXJuIChpICsgaikgJSAzID09IDA7IH07XG4gICAgICBjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjEwMCA6XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihpLCBqKSB7IHJldHVybiAoTWF0aC5mbG9vcihpIC8gMikgKyBNYXRoLmZsb29yKGogLyAzKSApICUgMiA9PSAwOyB9O1xuICAgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4xMDEgOlxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oaSwgaikgeyByZXR1cm4gKGkgKiBqKSAlIDIgKyAoaSAqIGopICUgMyA9PSAwOyB9O1xuICAgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4xMTAgOlxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oaSwgaikgeyByZXR1cm4gKCAoaSAqIGopICUgMiArIChpICogaikgJSAzKSAlIDIgPT0gMDsgfTtcbiAgICAgIGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMTExIDpcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGksIGopIHsgcmV0dXJuICggKGkgKiBqKSAlIDMgKyAoaSArIGopICUgMikgJSAyID09IDA7IH07XG5cbiAgICAgIGRlZmF1bHQgOlxuICAgICAgICB0aHJvdyAnYmFkIG1hc2tQYXR0ZXJuOicgKyBtYXNrUGF0dGVybjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0RXJyb3JDb3JyZWN0UG9seW5vbWlhbCA9IGZ1bmN0aW9uKGVycm9yQ29ycmVjdExlbmd0aCkge1xuICAgICAgdmFyIGEgPSBxclBvbHlub21pYWwoWzFdLCAwKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXJyb3JDb3JyZWN0TGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgYSA9IGEubXVsdGlwbHkocXJQb2x5bm9taWFsKFsxLCBRUk1hdGguZ2V4cChpKV0sIDApICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0TGVuZ3RoSW5CaXRzID0gZnVuY3Rpb24obW9kZSwgdHlwZSkge1xuXG4gICAgICBpZiAoMSA8PSB0eXBlICYmIHR5cGUgPCAxMCkge1xuXG4gICAgICAgIC8vIDEgLSA5XG5cbiAgICAgICAgc3dpdGNoKG1vZGUpIHtcbiAgICAgICAgY2FzZSBRUk1vZGUuTU9ERV9OVU1CRVIgICAgOiByZXR1cm4gMTA7XG4gICAgICAgIGNhc2UgUVJNb2RlLk1PREVfQUxQSEFfTlVNIDogcmV0dXJuIDk7XG4gICAgICAgIGNhc2UgUVJNb2RlLk1PREVfOEJJVF9CWVRFIDogcmV0dXJuIDg7XG4gICAgICAgIGNhc2UgUVJNb2RlLk1PREVfS0FOSkkgICAgIDogcmV0dXJuIDg7XG4gICAgICAgIGRlZmF1bHQgOlxuICAgICAgICAgIHRocm93ICdtb2RlOicgKyBtb2RlO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSBpZiAodHlwZSA8IDI3KSB7XG5cbiAgICAgICAgLy8gMTAgLSAyNlxuXG4gICAgICAgIHN3aXRjaChtb2RlKSB7XG4gICAgICAgIGNhc2UgUVJNb2RlLk1PREVfTlVNQkVSICAgIDogcmV0dXJuIDEyO1xuICAgICAgICBjYXNlIFFSTW9kZS5NT0RFX0FMUEhBX05VTSA6IHJldHVybiAxMTtcbiAgICAgICAgY2FzZSBRUk1vZGUuTU9ERV84QklUX0JZVEUgOiByZXR1cm4gMTY7XG4gICAgICAgIGNhc2UgUVJNb2RlLk1PREVfS0FOSkkgICAgIDogcmV0dXJuIDEwO1xuICAgICAgICBkZWZhdWx0IDpcbiAgICAgICAgICB0aHJvdyAnbW9kZTonICsgbW9kZTtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPCA0MSkge1xuXG4gICAgICAgIC8vIDI3IC0gNDBcblxuICAgICAgICBzd2l0Y2gobW9kZSkge1xuICAgICAgICBjYXNlIFFSTW9kZS5NT0RFX05VTUJFUiAgICA6IHJldHVybiAxNDtcbiAgICAgICAgY2FzZSBRUk1vZGUuTU9ERV9BTFBIQV9OVU0gOiByZXR1cm4gMTM7XG4gICAgICAgIGNhc2UgUVJNb2RlLk1PREVfOEJJVF9CWVRFIDogcmV0dXJuIDE2O1xuICAgICAgICBjYXNlIFFSTW9kZS5NT0RFX0tBTkpJICAgICA6IHJldHVybiAxMjtcbiAgICAgICAgZGVmYXVsdCA6XG4gICAgICAgICAgdGhyb3cgJ21vZGU6JyArIG1vZGU7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgJ3R5cGU6JyArIHR5cGU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmdldExvc3RQb2ludCA9IGZ1bmN0aW9uKHFyY29kZSkge1xuXG4gICAgICB2YXIgbW9kdWxlQ291bnQgPSBxcmNvZGUuZ2V0TW9kdWxlQ291bnQoKTtcblxuICAgICAgdmFyIGxvc3RQb2ludCA9IDA7XG5cbiAgICAgIC8vIExFVkVMMVxuXG4gICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudDsgcm93ICs9IDEpIHtcbiAgICAgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQ7IGNvbCArPSAxKSB7XG5cbiAgICAgICAgICB2YXIgc2FtZUNvdW50ID0gMDtcbiAgICAgICAgICB2YXIgZGFyayA9IHFyY29kZS5pc0Rhcmsocm93LCBjb2wpO1xuXG4gICAgICAgICAgZm9yICh2YXIgciA9IC0xOyByIDw9IDE7IHIgKz0gMSkge1xuXG4gICAgICAgICAgICBpZiAocm93ICsgciA8IDAgfHwgbW9kdWxlQ291bnQgPD0gcm93ICsgcikge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgYyA9IC0xOyBjIDw9IDE7IGMgKz0gMSkge1xuXG4gICAgICAgICAgICAgIGlmIChjb2wgKyBjIDwgMCB8fCBtb2R1bGVDb3VudCA8PSBjb2wgKyBjKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAociA9PSAwICYmIGMgPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGRhcmsgPT0gcXJjb2RlLmlzRGFyayhyb3cgKyByLCBjb2wgKyBjKSApIHtcbiAgICAgICAgICAgICAgICBzYW1lQ291bnQgKz0gMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzYW1lQ291bnQgPiA1KSB7XG4gICAgICAgICAgICBsb3N0UG9pbnQgKz0gKDMgKyBzYW1lQ291bnQgLSA1KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8vIExFVkVMMlxuXG4gICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudCAtIDE7IHJvdyArPSAxKSB7XG4gICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50IC0gMTsgY29sICs9IDEpIHtcbiAgICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICAgIGlmIChxcmNvZGUuaXNEYXJrKHJvdywgY29sKSApIGNvdW50ICs9IDE7XG4gICAgICAgICAgaWYgKHFyY29kZS5pc0Rhcmsocm93ICsgMSwgY29sKSApIGNvdW50ICs9IDE7XG4gICAgICAgICAgaWYgKHFyY29kZS5pc0Rhcmsocm93LCBjb2wgKyAxKSApIGNvdW50ICs9IDE7XG4gICAgICAgICAgaWYgKHFyY29kZS5pc0Rhcmsocm93ICsgMSwgY29sICsgMSkgKSBjb3VudCArPSAxO1xuICAgICAgICAgIGlmIChjb3VudCA9PSAwIHx8IGNvdW50ID09IDQpIHtcbiAgICAgICAgICAgIGxvc3RQb2ludCArPSAzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBMRVZFTDNcblxuICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQ7IHJvdyArPSAxKSB7XG4gICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50IC0gNjsgY29sICs9IDEpIHtcbiAgICAgICAgICBpZiAocXJjb2RlLmlzRGFyayhyb3csIGNvbClcbiAgICAgICAgICAgICAgJiYgIXFyY29kZS5pc0Rhcmsocm93LCBjb2wgKyAxKVxuICAgICAgICAgICAgICAmJiAgcXJjb2RlLmlzRGFyayhyb3csIGNvbCArIDIpXG4gICAgICAgICAgICAgICYmICBxcmNvZGUuaXNEYXJrKHJvdywgY29sICsgMylcbiAgICAgICAgICAgICAgJiYgIHFyY29kZS5pc0Rhcmsocm93LCBjb2wgKyA0KVxuICAgICAgICAgICAgICAmJiAhcXJjb2RlLmlzRGFyayhyb3csIGNvbCArIDUpXG4gICAgICAgICAgICAgICYmICBxcmNvZGUuaXNEYXJrKHJvdywgY29sICsgNikgKSB7XG4gICAgICAgICAgICBsb3N0UG9pbnQgKz0gNDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50OyBjb2wgKz0gMSkge1xuICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudCAtIDY7IHJvdyArPSAxKSB7XG4gICAgICAgICAgaWYgKHFyY29kZS5pc0Rhcmsocm93LCBjb2wpXG4gICAgICAgICAgICAgICYmICFxcmNvZGUuaXNEYXJrKHJvdyArIDEsIGNvbClcbiAgICAgICAgICAgICAgJiYgIHFyY29kZS5pc0Rhcmsocm93ICsgMiwgY29sKVxuICAgICAgICAgICAgICAmJiAgcXJjb2RlLmlzRGFyayhyb3cgKyAzLCBjb2wpXG4gICAgICAgICAgICAgICYmICBxcmNvZGUuaXNEYXJrKHJvdyArIDQsIGNvbClcbiAgICAgICAgICAgICAgJiYgIXFyY29kZS5pc0Rhcmsocm93ICsgNSwgY29sKVxuICAgICAgICAgICAgICAmJiAgcXJjb2RlLmlzRGFyayhyb3cgKyA2LCBjb2wpICkge1xuICAgICAgICAgICAgbG9zdFBvaW50ICs9IDQwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBMRVZFTDRcblxuICAgICAgdmFyIGRhcmtDb3VudCA9IDA7XG5cbiAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50OyBjb2wgKz0gMSkge1xuICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudDsgcm93ICs9IDEpIHtcbiAgICAgICAgICBpZiAocXJjb2RlLmlzRGFyayhyb3csIGNvbCkgKSB7XG4gICAgICAgICAgICBkYXJrQ291bnQgKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHJhdGlvID0gTWF0aC5hYnMoMTAwICogZGFya0NvdW50IC8gbW9kdWxlQ291bnQgLyBtb2R1bGVDb3VudCAtIDUwKSAvIDU7XG4gICAgICBsb3N0UG9pbnQgKz0gcmF0aW8gKiAxMDtcblxuICAgICAgcmV0dXJuIGxvc3RQb2ludDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9KCk7XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUVJNYXRoXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgdmFyIFFSTWF0aCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIEVYUF9UQUJMRSA9IG5ldyBBcnJheSgyNTYpO1xuICAgIHZhciBMT0dfVEFCTEUgPSBuZXcgQXJyYXkoMjU2KTtcblxuICAgIC8vIGluaXRpYWxpemUgdGFibGVzXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpICs9IDEpIHtcbiAgICAgIEVYUF9UQUJMRVtpXSA9IDEgPDwgaTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDg7IGkgPCAyNTY7IGkgKz0gMSkge1xuICAgICAgRVhQX1RBQkxFW2ldID0gRVhQX1RBQkxFW2kgLSA0XVxuICAgICAgICBeIEVYUF9UQUJMRVtpIC0gNV1cbiAgICAgICAgXiBFWFBfVEFCTEVbaSAtIDZdXG4gICAgICAgIF4gRVhQX1RBQkxFW2kgLSA4XTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTU7IGkgKz0gMSkge1xuICAgICAgTE9HX1RBQkxFW0VYUF9UQUJMRVtpXSBdID0gaTtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMgPSB7fTtcblxuICAgIF90aGlzLmdsb2cgPSBmdW5jdGlvbihuKSB7XG5cbiAgICAgIGlmIChuIDwgMSkge1xuICAgICAgICB0aHJvdyAnZ2xvZygnICsgbiArICcpJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIExPR19UQUJMRVtuXTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V4cCA9IGZ1bmN0aW9uKG4pIHtcblxuICAgICAgd2hpbGUgKG4gPCAwKSB7XG4gICAgICAgIG4gKz0gMjU1O1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAobiA+PSAyNTYpIHtcbiAgICAgICAgbiAtPSAyNTU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBFWFBfVEFCTEVbbl07XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfSgpO1xuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHFyUG9seW5vbWlhbFxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGZ1bmN0aW9uIHFyUG9seW5vbWlhbChudW0sIHNoaWZ0KSB7XG5cbiAgICBpZiAodHlwZW9mIG51bS5sZW5ndGggPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG51bS5sZW5ndGggKyAnLycgKyBzaGlmdDtcbiAgICB9XG5cbiAgICB2YXIgX251bSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG9mZnNldCA9IDA7XG4gICAgICB3aGlsZSAob2Zmc2V0IDwgbnVtLmxlbmd0aCAmJiBudW1bb2Zmc2V0XSA9PSAwKSB7XG4gICAgICAgIG9mZnNldCArPSAxO1xuICAgICAgfVxuICAgICAgdmFyIF9udW0gPSBuZXcgQXJyYXkobnVtLmxlbmd0aCAtIG9mZnNldCArIHNoaWZ0KTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtLmxlbmd0aCAtIG9mZnNldDsgaSArPSAxKSB7XG4gICAgICAgIF9udW1baV0gPSBudW1baSArIG9mZnNldF07XG4gICAgICB9XG4gICAgICByZXR1cm4gX251bTtcbiAgICB9KCk7XG5cbiAgICB2YXIgX3RoaXMgPSB7fTtcblxuICAgIF90aGlzLmdldEF0ID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIHJldHVybiBfbnVtW2luZGV4XTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0TGVuZ3RoID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gX251bS5sZW5ndGg7XG4gICAgfTtcblxuICAgIF90aGlzLm11bHRpcGx5ID0gZnVuY3Rpb24oZSkge1xuXG4gICAgICB2YXIgbnVtID0gbmV3IEFycmF5KF90aGlzLmdldExlbmd0aCgpICsgZS5nZXRMZW5ndGgoKSAtIDEpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF90aGlzLmdldExlbmd0aCgpOyBpICs9IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBlLmdldExlbmd0aCgpOyBqICs9IDEpIHtcbiAgICAgICAgICBudW1baSArIGpdIF49IFFSTWF0aC5nZXhwKFFSTWF0aC5nbG9nKF90aGlzLmdldEF0KGkpICkgKyBRUk1hdGguZ2xvZyhlLmdldEF0KGopICkgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcXJQb2x5bm9taWFsKG51bSwgMCk7XG4gICAgfTtcblxuICAgIF90aGlzLm1vZCA9IGZ1bmN0aW9uKGUpIHtcblxuICAgICAgaWYgKF90aGlzLmdldExlbmd0aCgpIC0gZS5nZXRMZW5ndGgoKSA8IDApIHtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmF0aW8gPSBRUk1hdGguZ2xvZyhfdGhpcy5nZXRBdCgwKSApIC0gUVJNYXRoLmdsb2coZS5nZXRBdCgwKSApO1xuXG4gICAgICB2YXIgbnVtID0gbmV3IEFycmF5KF90aGlzLmdldExlbmd0aCgpICk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF90aGlzLmdldExlbmd0aCgpOyBpICs9IDEpIHtcbiAgICAgICAgbnVtW2ldID0gX3RoaXMuZ2V0QXQoaSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZS5nZXRMZW5ndGgoKTsgaSArPSAxKSB7XG4gICAgICAgIG51bVtpXSBePSBRUk1hdGguZ2V4cChRUk1hdGguZ2xvZyhlLmdldEF0KGkpICkgKyByYXRpbyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHJlY3Vyc2l2ZSBjYWxsXG4gICAgICByZXR1cm4gcXJQb2x5bm9taWFsKG51bSwgMCkubW9kKGUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH07XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUVJSU0Jsb2NrXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgdmFyIFFSUlNCbG9jayA9IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIFJTX0JMT0NLX1RBQkxFID0gW1xuXG4gICAgICAvLyBMXG4gICAgICAvLyBNXG4gICAgICAvLyBRXG4gICAgICAvLyBIXG5cbiAgICAgIC8vIDFcbiAgICAgIFsxLCAyNiwgMTldLFxuICAgICAgWzEsIDI2LCAxNl0sXG4gICAgICBbMSwgMjYsIDEzXSxcbiAgICAgIFsxLCAyNiwgOV0sXG5cbiAgICAgIC8vIDJcbiAgICAgIFsxLCA0NCwgMzRdLFxuICAgICAgWzEsIDQ0LCAyOF0sXG4gICAgICBbMSwgNDQsIDIyXSxcbiAgICAgIFsxLCA0NCwgMTZdLFxuXG4gICAgICAvLyAzXG4gICAgICBbMSwgNzAsIDU1XSxcbiAgICAgIFsxLCA3MCwgNDRdLFxuICAgICAgWzIsIDM1LCAxN10sXG4gICAgICBbMiwgMzUsIDEzXSxcblxuICAgICAgLy8gNFxuICAgICAgWzEsIDEwMCwgODBdLFxuICAgICAgWzIsIDUwLCAzMl0sXG4gICAgICBbMiwgNTAsIDI0XSxcbiAgICAgIFs0LCAyNSwgOV0sXG5cbiAgICAgIC8vIDVcbiAgICAgIFsxLCAxMzQsIDEwOF0sXG4gICAgICBbMiwgNjcsIDQzXSxcbiAgICAgIFsyLCAzMywgMTUsIDIsIDM0LCAxNl0sXG4gICAgICBbMiwgMzMsIDExLCAyLCAzNCwgMTJdLFxuXG4gICAgICAvLyA2XG4gICAgICBbMiwgODYsIDY4XSxcbiAgICAgIFs0LCA0MywgMjddLFxuICAgICAgWzQsIDQzLCAxOV0sXG4gICAgICBbNCwgNDMsIDE1XSxcblxuICAgICAgLy8gN1xuICAgICAgWzIsIDk4LCA3OF0sXG4gICAgICBbNCwgNDksIDMxXSxcbiAgICAgIFsyLCAzMiwgMTQsIDQsIDMzLCAxNV0sXG4gICAgICBbNCwgMzksIDEzLCAxLCA0MCwgMTRdLFxuXG4gICAgICAvLyA4XG4gICAgICBbMiwgMTIxLCA5N10sXG4gICAgICBbMiwgNjAsIDM4LCAyLCA2MSwgMzldLFxuICAgICAgWzQsIDQwLCAxOCwgMiwgNDEsIDE5XSxcbiAgICAgIFs0LCA0MCwgMTQsIDIsIDQxLCAxNV0sXG5cbiAgICAgIC8vIDlcbiAgICAgIFsyLCAxNDYsIDExNl0sXG4gICAgICBbMywgNTgsIDM2LCAyLCA1OSwgMzddLFxuICAgICAgWzQsIDM2LCAxNiwgNCwgMzcsIDE3XSxcbiAgICAgIFs0LCAzNiwgMTIsIDQsIDM3LCAxM10sXG5cbiAgICAgIC8vIDEwXG4gICAgICBbMiwgODYsIDY4LCAyLCA4NywgNjldLFxuICAgICAgWzQsIDY5LCA0MywgMSwgNzAsIDQ0XSxcbiAgICAgIFs2LCA0MywgMTksIDIsIDQ0LCAyMF0sXG4gICAgICBbNiwgNDMsIDE1LCAyLCA0NCwgMTZdLFxuXG4gICAgICAvLyAxMVxuICAgICAgWzQsIDEwMSwgODFdLFxuICAgICAgWzEsIDgwLCA1MCwgNCwgODEsIDUxXSxcbiAgICAgIFs0LCA1MCwgMjIsIDQsIDUxLCAyM10sXG4gICAgICBbMywgMzYsIDEyLCA4LCAzNywgMTNdLFxuXG4gICAgICAvLyAxMlxuICAgICAgWzIsIDExNiwgOTIsIDIsIDExNywgOTNdLFxuICAgICAgWzYsIDU4LCAzNiwgMiwgNTksIDM3XSxcbiAgICAgIFs0LCA0NiwgMjAsIDYsIDQ3LCAyMV0sXG4gICAgICBbNywgNDIsIDE0LCA0LCA0MywgMTVdLFxuXG4gICAgICAvLyAxM1xuICAgICAgWzQsIDEzMywgMTA3XSxcbiAgICAgIFs4LCA1OSwgMzcsIDEsIDYwLCAzOF0sXG4gICAgICBbOCwgNDQsIDIwLCA0LCA0NSwgMjFdLFxuICAgICAgWzEyLCAzMywgMTEsIDQsIDM0LCAxMl0sXG5cbiAgICAgIC8vIDE0XG4gICAgICBbMywgMTQ1LCAxMTUsIDEsIDE0NiwgMTE2XSxcbiAgICAgIFs0LCA2NCwgNDAsIDUsIDY1LCA0MV0sXG4gICAgICBbMTEsIDM2LCAxNiwgNSwgMzcsIDE3XSxcbiAgICAgIFsxMSwgMzYsIDEyLCA1LCAzNywgMTNdLFxuXG4gICAgICAvLyAxNVxuICAgICAgWzUsIDEwOSwgODcsIDEsIDExMCwgODhdLFxuICAgICAgWzUsIDY1LCA0MSwgNSwgNjYsIDQyXSxcbiAgICAgIFs1LCA1NCwgMjQsIDcsIDU1LCAyNV0sXG4gICAgICBbMTEsIDM2LCAxMiwgNywgMzcsIDEzXSxcblxuICAgICAgLy8gMTZcbiAgICAgIFs1LCAxMjIsIDk4LCAxLCAxMjMsIDk5XSxcbiAgICAgIFs3LCA3MywgNDUsIDMsIDc0LCA0Nl0sXG4gICAgICBbMTUsIDQzLCAxOSwgMiwgNDQsIDIwXSxcbiAgICAgIFszLCA0NSwgMTUsIDEzLCA0NiwgMTZdLFxuXG4gICAgICAvLyAxN1xuICAgICAgWzEsIDEzNSwgMTA3LCA1LCAxMzYsIDEwOF0sXG4gICAgICBbMTAsIDc0LCA0NiwgMSwgNzUsIDQ3XSxcbiAgICAgIFsxLCA1MCwgMjIsIDE1LCA1MSwgMjNdLFxuICAgICAgWzIsIDQyLCAxNCwgMTcsIDQzLCAxNV0sXG5cbiAgICAgIC8vIDE4XG4gICAgICBbNSwgMTUwLCAxMjAsIDEsIDE1MSwgMTIxXSxcbiAgICAgIFs5LCA2OSwgNDMsIDQsIDcwLCA0NF0sXG4gICAgICBbMTcsIDUwLCAyMiwgMSwgNTEsIDIzXSxcbiAgICAgIFsyLCA0MiwgMTQsIDE5LCA0MywgMTVdLFxuXG4gICAgICAvLyAxOVxuICAgICAgWzMsIDE0MSwgMTEzLCA0LCAxNDIsIDExNF0sXG4gICAgICBbMywgNzAsIDQ0LCAxMSwgNzEsIDQ1XSxcbiAgICAgIFsxNywgNDcsIDIxLCA0LCA0OCwgMjJdLFxuICAgICAgWzksIDM5LCAxMywgMTYsIDQwLCAxNF0sXG5cbiAgICAgIC8vIDIwXG4gICAgICBbMywgMTM1LCAxMDcsIDUsIDEzNiwgMTA4XSxcbiAgICAgIFszLCA2NywgNDEsIDEzLCA2OCwgNDJdLFxuICAgICAgWzE1LCA1NCwgMjQsIDUsIDU1LCAyNV0sXG4gICAgICBbMTUsIDQzLCAxNSwgMTAsIDQ0LCAxNl0sXG5cbiAgICAgIC8vIDIxXG4gICAgICBbNCwgMTQ0LCAxMTYsIDQsIDE0NSwgMTE3XSxcbiAgICAgIFsxNywgNjgsIDQyXSxcbiAgICAgIFsxNywgNTAsIDIyLCA2LCA1MSwgMjNdLFxuICAgICAgWzE5LCA0NiwgMTYsIDYsIDQ3LCAxN10sXG5cbiAgICAgIC8vIDIyXG4gICAgICBbMiwgMTM5LCAxMTEsIDcsIDE0MCwgMTEyXSxcbiAgICAgIFsxNywgNzQsIDQ2XSxcbiAgICAgIFs3LCA1NCwgMjQsIDE2LCA1NSwgMjVdLFxuICAgICAgWzM0LCAzNywgMTNdLFxuXG4gICAgICAvLyAyM1xuICAgICAgWzQsIDE1MSwgMTIxLCA1LCAxNTIsIDEyMl0sXG4gICAgICBbNCwgNzUsIDQ3LCAxNCwgNzYsIDQ4XSxcbiAgICAgIFsxMSwgNTQsIDI0LCAxNCwgNTUsIDI1XSxcbiAgICAgIFsxNiwgNDUsIDE1LCAxNCwgNDYsIDE2XSxcblxuICAgICAgLy8gMjRcbiAgICAgIFs2LCAxNDcsIDExNywgNCwgMTQ4LCAxMThdLFxuICAgICAgWzYsIDczLCA0NSwgMTQsIDc0LCA0Nl0sXG4gICAgICBbMTEsIDU0LCAyNCwgMTYsIDU1LCAyNV0sXG4gICAgICBbMzAsIDQ2LCAxNiwgMiwgNDcsIDE3XSxcblxuICAgICAgLy8gMjVcbiAgICAgIFs4LCAxMzIsIDEwNiwgNCwgMTMzLCAxMDddLFxuICAgICAgWzgsIDc1LCA0NywgMTMsIDc2LCA0OF0sXG4gICAgICBbNywgNTQsIDI0LCAyMiwgNTUsIDI1XSxcbiAgICAgIFsyMiwgNDUsIDE1LCAxMywgNDYsIDE2XSxcblxuICAgICAgLy8gMjZcbiAgICAgIFsxMCwgMTQyLCAxMTQsIDIsIDE0MywgMTE1XSxcbiAgICAgIFsxOSwgNzQsIDQ2LCA0LCA3NSwgNDddLFxuICAgICAgWzI4LCA1MCwgMjIsIDYsIDUxLCAyM10sXG4gICAgICBbMzMsIDQ2LCAxNiwgNCwgNDcsIDE3XSxcblxuICAgICAgLy8gMjdcbiAgICAgIFs4LCAxNTIsIDEyMiwgNCwgMTUzLCAxMjNdLFxuICAgICAgWzIyLCA3MywgNDUsIDMsIDc0LCA0Nl0sXG4gICAgICBbOCwgNTMsIDIzLCAyNiwgNTQsIDI0XSxcbiAgICAgIFsxMiwgNDUsIDE1LCAyOCwgNDYsIDE2XSxcblxuICAgICAgLy8gMjhcbiAgICAgIFszLCAxNDcsIDExNywgMTAsIDE0OCwgMTE4XSxcbiAgICAgIFszLCA3MywgNDUsIDIzLCA3NCwgNDZdLFxuICAgICAgWzQsIDU0LCAyNCwgMzEsIDU1LCAyNV0sXG4gICAgICBbMTEsIDQ1LCAxNSwgMzEsIDQ2LCAxNl0sXG5cbiAgICAgIC8vIDI5XG4gICAgICBbNywgMTQ2LCAxMTYsIDcsIDE0NywgMTE3XSxcbiAgICAgIFsyMSwgNzMsIDQ1LCA3LCA3NCwgNDZdLFxuICAgICAgWzEsIDUzLCAyMywgMzcsIDU0LCAyNF0sXG4gICAgICBbMTksIDQ1LCAxNSwgMjYsIDQ2LCAxNl0sXG5cbiAgICAgIC8vIDMwXG4gICAgICBbNSwgMTQ1LCAxMTUsIDEwLCAxNDYsIDExNl0sXG4gICAgICBbMTksIDc1LCA0NywgMTAsIDc2LCA0OF0sXG4gICAgICBbMTUsIDU0LCAyNCwgMjUsIDU1LCAyNV0sXG4gICAgICBbMjMsIDQ1LCAxNSwgMjUsIDQ2LCAxNl0sXG5cbiAgICAgIC8vIDMxXG4gICAgICBbMTMsIDE0NSwgMTE1LCAzLCAxNDYsIDExNl0sXG4gICAgICBbMiwgNzQsIDQ2LCAyOSwgNzUsIDQ3XSxcbiAgICAgIFs0MiwgNTQsIDI0LCAxLCA1NSwgMjVdLFxuICAgICAgWzIzLCA0NSwgMTUsIDI4LCA0NiwgMTZdLFxuXG4gICAgICAvLyAzMlxuICAgICAgWzE3LCAxNDUsIDExNV0sXG4gICAgICBbMTAsIDc0LCA0NiwgMjMsIDc1LCA0N10sXG4gICAgICBbMTAsIDU0LCAyNCwgMzUsIDU1LCAyNV0sXG4gICAgICBbMTksIDQ1LCAxNSwgMzUsIDQ2LCAxNl0sXG5cbiAgICAgIC8vIDMzXG4gICAgICBbMTcsIDE0NSwgMTE1LCAxLCAxNDYsIDExNl0sXG4gICAgICBbMTQsIDc0LCA0NiwgMjEsIDc1LCA0N10sXG4gICAgICBbMjksIDU0LCAyNCwgMTksIDU1LCAyNV0sXG4gICAgICBbMTEsIDQ1LCAxNSwgNDYsIDQ2LCAxNl0sXG5cbiAgICAgIC8vIDM0XG4gICAgICBbMTMsIDE0NSwgMTE1LCA2LCAxNDYsIDExNl0sXG4gICAgICBbMTQsIDc0LCA0NiwgMjMsIDc1LCA0N10sXG4gICAgICBbNDQsIDU0LCAyNCwgNywgNTUsIDI1XSxcbiAgICAgIFs1OSwgNDYsIDE2LCAxLCA0NywgMTddLFxuXG4gICAgICAvLyAzNVxuICAgICAgWzEyLCAxNTEsIDEyMSwgNywgMTUyLCAxMjJdLFxuICAgICAgWzEyLCA3NSwgNDcsIDI2LCA3NiwgNDhdLFxuICAgICAgWzM5LCA1NCwgMjQsIDE0LCA1NSwgMjVdLFxuICAgICAgWzIyLCA0NSwgMTUsIDQxLCA0NiwgMTZdLFxuXG4gICAgICAvLyAzNlxuICAgICAgWzYsIDE1MSwgMTIxLCAxNCwgMTUyLCAxMjJdLFxuICAgICAgWzYsIDc1LCA0NywgMzQsIDc2LCA0OF0sXG4gICAgICBbNDYsIDU0LCAyNCwgMTAsIDU1LCAyNV0sXG4gICAgICBbMiwgNDUsIDE1LCA2NCwgNDYsIDE2XSxcblxuICAgICAgLy8gMzdcbiAgICAgIFsxNywgMTUyLCAxMjIsIDQsIDE1MywgMTIzXSxcbiAgICAgIFsyOSwgNzQsIDQ2LCAxNCwgNzUsIDQ3XSxcbiAgICAgIFs0OSwgNTQsIDI0LCAxMCwgNTUsIDI1XSxcbiAgICAgIFsyNCwgNDUsIDE1LCA0NiwgNDYsIDE2XSxcblxuICAgICAgLy8gMzhcbiAgICAgIFs0LCAxNTIsIDEyMiwgMTgsIDE1MywgMTIzXSxcbiAgICAgIFsxMywgNzQsIDQ2LCAzMiwgNzUsIDQ3XSxcbiAgICAgIFs0OCwgNTQsIDI0LCAxNCwgNTUsIDI1XSxcbiAgICAgIFs0MiwgNDUsIDE1LCAzMiwgNDYsIDE2XSxcblxuICAgICAgLy8gMzlcbiAgICAgIFsyMCwgMTQ3LCAxMTcsIDQsIDE0OCwgMTE4XSxcbiAgICAgIFs0MCwgNzUsIDQ3LCA3LCA3NiwgNDhdLFxuICAgICAgWzQzLCA1NCwgMjQsIDIyLCA1NSwgMjVdLFxuICAgICAgWzEwLCA0NSwgMTUsIDY3LCA0NiwgMTZdLFxuXG4gICAgICAvLyA0MFxuICAgICAgWzE5LCAxNDgsIDExOCwgNiwgMTQ5LCAxMTldLFxuICAgICAgWzE4LCA3NSwgNDcsIDMxLCA3NiwgNDhdLFxuICAgICAgWzM0LCA1NCwgMjQsIDM0LCA1NSwgMjVdLFxuICAgICAgWzIwLCA0NSwgMTUsIDYxLCA0NiwgMTZdXG4gICAgXTtcblxuICAgIHZhciBxclJTQmxvY2sgPSBmdW5jdGlvbih0b3RhbENvdW50LCBkYXRhQ291bnQpIHtcbiAgICAgIHZhciBfdGhpcyA9IHt9O1xuICAgICAgX3RoaXMudG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XG4gICAgICBfdGhpcy5kYXRhQ291bnQgPSBkYXRhQ291bnQ7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfTtcblxuICAgIHZhciBfdGhpcyA9IHt9O1xuXG4gICAgdmFyIGdldFJzQmxvY2tUYWJsZSA9IGZ1bmN0aW9uKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdGlvbkxldmVsKSB7XG5cbiAgICAgIHN3aXRjaChlcnJvckNvcnJlY3Rpb25MZXZlbCkge1xuICAgICAgY2FzZSBRUkVycm9yQ29ycmVjdGlvbkxldmVsLkwgOlxuICAgICAgICByZXR1cm4gUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXIgLSAxKSAqIDQgKyAwXTtcbiAgICAgIGNhc2UgUVJFcnJvckNvcnJlY3Rpb25MZXZlbC5NIDpcbiAgICAgICAgcmV0dXJuIFJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgMV07XG4gICAgICBjYXNlIFFSRXJyb3JDb3JyZWN0aW9uTGV2ZWwuUSA6XG4gICAgICAgIHJldHVybiBSU19CTE9DS19UQUJMRVsodHlwZU51bWJlciAtIDEpICogNCArIDJdO1xuICAgICAgY2FzZSBRUkVycm9yQ29ycmVjdGlvbkxldmVsLkggOlxuICAgICAgICByZXR1cm4gUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXIgLSAxKSAqIDQgKyAzXTtcbiAgICAgIGRlZmF1bHQgOlxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5nZXRSU0Jsb2NrcyA9IGZ1bmN0aW9uKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdGlvbkxldmVsKSB7XG5cbiAgICAgIHZhciByc0Jsb2NrID0gZ2V0UnNCbG9ja1RhYmxlKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdGlvbkxldmVsKTtcblxuICAgICAgaWYgKHR5cGVvZiByc0Jsb2NrID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93ICdiYWQgcnMgYmxvY2sgQCB0eXBlTnVtYmVyOicgKyB0eXBlTnVtYmVyICtcbiAgICAgICAgICAgICcvZXJyb3JDb3JyZWN0aW9uTGV2ZWw6JyArIGVycm9yQ29ycmVjdGlvbkxldmVsO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGVuZ3RoID0gcnNCbG9jay5sZW5ndGggLyAzO1xuXG4gICAgICB2YXIgbGlzdCA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG5cbiAgICAgICAgdmFyIGNvdW50ID0gcnNCbG9ja1tpICogMyArIDBdO1xuICAgICAgICB2YXIgdG90YWxDb3VudCA9IHJzQmxvY2tbaSAqIDMgKyAxXTtcbiAgICAgICAgdmFyIGRhdGFDb3VudCA9IHJzQmxvY2tbaSAqIDMgKyAyXTtcblxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNvdW50OyBqICs9IDEpIHtcbiAgICAgICAgICBsaXN0LnB1c2gocXJSU0Jsb2NrKHRvdGFsQ291bnQsIGRhdGFDb3VudCkgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGlzdDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9KCk7XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcXJCaXRCdWZmZXJcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICB2YXIgcXJCaXRCdWZmZXIgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBfYnVmZmVyID0gW107XG4gICAgdmFyIF9sZW5ndGggPSAwO1xuXG4gICAgdmFyIF90aGlzID0ge307XG5cbiAgICBfdGhpcy5nZXRCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBfYnVmZmVyO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRBdCA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICB2YXIgYnVmSW5kZXggPSBNYXRoLmZsb29yKGluZGV4IC8gOCk7XG4gICAgICByZXR1cm4gKCAoX2J1ZmZlcltidWZJbmRleF0gPj4+ICg3IC0gaW5kZXggJSA4KSApICYgMSkgPT0gMTtcbiAgICB9O1xuXG4gICAgX3RoaXMucHV0ID0gZnVuY3Rpb24obnVtLCBsZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgX3RoaXMucHV0Qml0KCAoIChudW0gPj4+IChsZW5ndGggLSBpIC0gMSkgKSAmIDEpID09IDEpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5nZXRMZW5ndGhJbkJpdHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBfbGVuZ3RoO1xuICAgIH07XG5cbiAgICBfdGhpcy5wdXRCaXQgPSBmdW5jdGlvbihiaXQpIHtcblxuICAgICAgdmFyIGJ1ZkluZGV4ID0gTWF0aC5mbG9vcihfbGVuZ3RoIC8gOCk7XG4gICAgICBpZiAoX2J1ZmZlci5sZW5ndGggPD0gYnVmSW5kZXgpIHtcbiAgICAgICAgX2J1ZmZlci5wdXNoKDApO1xuICAgICAgfVxuXG4gICAgICBpZiAoYml0KSB7XG4gICAgICAgIF9idWZmZXJbYnVmSW5kZXhdIHw9ICgweDgwID4+PiAoX2xlbmd0aCAlIDgpICk7XG4gICAgICB9XG5cbiAgICAgIF9sZW5ndGggKz0gMTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9O1xuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHFyTnVtYmVyXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgdmFyIHFyTnVtYmVyID0gZnVuY3Rpb24oZGF0YSkge1xuXG4gICAgdmFyIF9tb2RlID0gUVJNb2RlLk1PREVfTlVNQkVSO1xuICAgIHZhciBfZGF0YSA9IGRhdGE7XG5cbiAgICB2YXIgX3RoaXMgPSB7fTtcblxuICAgIF90aGlzLmdldE1vZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBfbW9kZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0TGVuZ3RoID0gZnVuY3Rpb24oYnVmZmVyKSB7XG4gICAgICByZXR1cm4gX2RhdGEubGVuZ3RoO1xuICAgIH07XG5cbiAgICBfdGhpcy53cml0ZSA9IGZ1bmN0aW9uKGJ1ZmZlcikge1xuXG4gICAgICB2YXIgZGF0YSA9IF9kYXRhO1xuXG4gICAgICB2YXIgaSA9IDA7XG5cbiAgICAgIHdoaWxlIChpICsgMiA8IGRhdGEubGVuZ3RoKSB7XG4gICAgICAgIGJ1ZmZlci5wdXQoc3RyVG9OdW0oZGF0YS5zdWJzdHJpbmcoaSwgaSArIDMpICksIDEwKTtcbiAgICAgICAgaSArPSAzO1xuICAgICAgfVxuXG4gICAgICBpZiAoaSA8IGRhdGEubGVuZ3RoKSB7XG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCAtIGkgPT0gMSkge1xuICAgICAgICAgIGJ1ZmZlci5wdXQoc3RyVG9OdW0oZGF0YS5zdWJzdHJpbmcoaSwgaSArIDEpICksIDQpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEubGVuZ3RoIC0gaSA9PSAyKSB7XG4gICAgICAgICAgYnVmZmVyLnB1dChzdHJUb051bShkYXRhLnN1YnN0cmluZyhpLCBpICsgMikgKSwgNyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHN0clRvTnVtID0gZnVuY3Rpb24ocykge1xuICAgICAgdmFyIG51bSA9IDA7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgbnVtID0gbnVtICogMTAgKyBjaGF0VG9OdW0ocy5jaGFyQXQoaSkgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudW07XG4gICAgfTtcblxuICAgIHZhciBjaGF0VG9OdW0gPSBmdW5jdGlvbihjKSB7XG4gICAgICBpZiAoJzAnIDw9IGMgJiYgYyA8PSAnOScpIHtcbiAgICAgICAgcmV0dXJuIGMuY2hhckNvZGVBdCgwKSAtICcwJy5jaGFyQ29kZUF0KDApO1xuICAgICAgfVxuICAgICAgdGhyb3cgJ2lsbGVnYWwgY2hhciA6JyArIGM7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfTtcblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBxckFscGhhTnVtXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgdmFyIHFyQWxwaGFOdW0gPSBmdW5jdGlvbihkYXRhKSB7XG5cbiAgICB2YXIgX21vZGUgPSBRUk1vZGUuTU9ERV9BTFBIQV9OVU07XG4gICAgdmFyIF9kYXRhID0gZGF0YTtcblxuICAgIHZhciBfdGhpcyA9IHt9O1xuXG4gICAgX3RoaXMuZ2V0TW9kZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIF9tb2RlO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRMZW5ndGggPSBmdW5jdGlvbihidWZmZXIpIHtcbiAgICAgIHJldHVybiBfZGF0YS5sZW5ndGg7XG4gICAgfTtcblxuICAgIF90aGlzLndyaXRlID0gZnVuY3Rpb24oYnVmZmVyKSB7XG5cbiAgICAgIHZhciBzID0gX2RhdGE7XG5cbiAgICAgIHZhciBpID0gMDtcblxuICAgICAgd2hpbGUgKGkgKyAxIDwgcy5sZW5ndGgpIHtcbiAgICAgICAgYnVmZmVyLnB1dChcbiAgICAgICAgICBnZXRDb2RlKHMuY2hhckF0KGkpICkgKiA0NSArXG4gICAgICAgICAgZ2V0Q29kZShzLmNoYXJBdChpICsgMSkgKSwgMTEpO1xuICAgICAgICBpICs9IDI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpIDwgcy5sZW5ndGgpIHtcbiAgICAgICAgYnVmZmVyLnB1dChnZXRDb2RlKHMuY2hhckF0KGkpICksIDYpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZ2V0Q29kZSA9IGZ1bmN0aW9uKGMpIHtcblxuICAgICAgaWYgKCcwJyA8PSBjICYmIGMgPD0gJzknKSB7XG4gICAgICAgIHJldHVybiBjLmNoYXJDb2RlQXQoMCkgLSAnMCcuY2hhckNvZGVBdCgwKTtcbiAgICAgIH0gZWxzZSBpZiAoJ0EnIDw9IGMgJiYgYyA8PSAnWicpIHtcbiAgICAgICAgcmV0dXJuIGMuY2hhckNvZGVBdCgwKSAtICdBJy5jaGFyQ29kZUF0KDApICsgMTA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2l0Y2ggKGMpIHtcbiAgICAgICAgY2FzZSAnICcgOiByZXR1cm4gMzY7XG4gICAgICAgIGNhc2UgJyQnIDogcmV0dXJuIDM3O1xuICAgICAgICBjYXNlICclJyA6IHJldHVybiAzODtcbiAgICAgICAgY2FzZSAnKicgOiByZXR1cm4gMzk7XG4gICAgICAgIGNhc2UgJysnIDogcmV0dXJuIDQwO1xuICAgICAgICBjYXNlICctJyA6IHJldHVybiA0MTtcbiAgICAgICAgY2FzZSAnLicgOiByZXR1cm4gNDI7XG4gICAgICAgIGNhc2UgJy8nIDogcmV0dXJuIDQzO1xuICAgICAgICBjYXNlICc6JyA6IHJldHVybiA0NDtcbiAgICAgICAgZGVmYXVsdCA6XG4gICAgICAgICAgdGhyb3cgJ2lsbGVnYWwgY2hhciA6JyArIGM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9O1xuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHFyOEJpdEJ5dGVcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICB2YXIgcXI4Qml0Qnl0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcblxuICAgIHZhciBfbW9kZSA9IFFSTW9kZS5NT0RFXzhCSVRfQllURTtcbiAgICB2YXIgX2RhdGEgPSBkYXRhO1xuICAgIHZhciBfYnl0ZXMgPSBxcmNvZGUuc3RyaW5nVG9CeXRlcyhkYXRhKTtcblxuICAgIHZhciBfdGhpcyA9IHt9O1xuXG4gICAgX3RoaXMuZ2V0TW9kZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIF9tb2RlO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRMZW5ndGggPSBmdW5jdGlvbihidWZmZXIpIHtcbiAgICAgIHJldHVybiBfYnl0ZXMubGVuZ3RoO1xuICAgIH07XG5cbiAgICBfdGhpcy53cml0ZSA9IGZ1bmN0aW9uKGJ1ZmZlcikge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfYnl0ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgYnVmZmVyLnB1dChfYnl0ZXNbaV0sIDgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH07XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcXJLYW5qaVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHZhciBxckthbmppID0gZnVuY3Rpb24oZGF0YSkge1xuXG4gICAgdmFyIF9tb2RlID0gUVJNb2RlLk1PREVfS0FOSkk7XG4gICAgdmFyIF9kYXRhID0gZGF0YTtcblxuICAgIHZhciBzdHJpbmdUb0J5dGVzID0gcXJjb2RlLnN0cmluZ1RvQnl0ZXNGdW5jc1snU0pJUyddO1xuICAgIGlmICghc3RyaW5nVG9CeXRlcykge1xuICAgICAgdGhyb3cgJ3NqaXMgbm90IHN1cHBvcnRlZC4nO1xuICAgIH1cbiAgICAhZnVuY3Rpb24oYywgY29kZSkge1xuICAgICAgLy8gc2VsZiB0ZXN0IGZvciBzamlzIHN1cHBvcnQuXG4gICAgICB2YXIgdGVzdCA9IHN0cmluZ1RvQnl0ZXMoYyk7XG4gICAgICBpZiAodGVzdC5sZW5ndGggIT0gMiB8fCAoICh0ZXN0WzBdIDw8IDgpIHwgdGVzdFsxXSkgIT0gY29kZSkge1xuICAgICAgICB0aHJvdyAnc2ppcyBub3Qgc3VwcG9ydGVkLic7XG4gICAgICB9XG4gICAgfSgnXFx1NTNjYicsIDB4OTc0Nik7XG5cbiAgICB2YXIgX2J5dGVzID0gc3RyaW5nVG9CeXRlcyhkYXRhKTtcblxuICAgIHZhciBfdGhpcyA9IHt9O1xuXG4gICAgX3RoaXMuZ2V0TW9kZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIF9tb2RlO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRMZW5ndGggPSBmdW5jdGlvbihidWZmZXIpIHtcbiAgICAgIHJldHVybiB+fihfYnl0ZXMubGVuZ3RoIC8gMik7XG4gICAgfTtcblxuICAgIF90aGlzLndyaXRlID0gZnVuY3Rpb24oYnVmZmVyKSB7XG5cbiAgICAgIHZhciBkYXRhID0gX2J5dGVzO1xuXG4gICAgICB2YXIgaSA9IDA7XG5cbiAgICAgIHdoaWxlIChpICsgMSA8IGRhdGEubGVuZ3RoKSB7XG5cbiAgICAgICAgdmFyIGMgPSAoICgweGZmICYgZGF0YVtpXSkgPDwgOCkgfCAoMHhmZiAmIGRhdGFbaSArIDFdKTtcblxuICAgICAgICBpZiAoMHg4MTQwIDw9IGMgJiYgYyA8PSAweDlGRkMpIHtcbiAgICAgICAgICBjIC09IDB4ODE0MDtcbiAgICAgICAgfSBlbHNlIGlmICgweEUwNDAgPD0gYyAmJiBjIDw9IDB4RUJCRikge1xuICAgICAgICAgIGMgLT0gMHhDMTQwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93ICdpbGxlZ2FsIGNoYXIgYXQgJyArIChpICsgMSkgKyAnLycgKyBjO1xuICAgICAgICB9XG5cbiAgICAgICAgYyA9ICggKGMgPj4+IDgpICYgMHhmZikgKiAweEMwICsgKGMgJiAweGZmKTtcblxuICAgICAgICBidWZmZXIucHV0KGMsIDEzKTtcblxuICAgICAgICBpICs9IDI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpIDwgZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgJ2lsbGVnYWwgY2hhciBhdCAnICsgKGkgKyAxKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9O1xuXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIEdJRiBTdXBwb3J0IGV0Yy5cbiAgLy9cblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBieXRlQXJyYXlPdXRwdXRTdHJlYW1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICB2YXIgYnl0ZUFycmF5T3V0cHV0U3RyZWFtID0gZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgX2J5dGVzID0gW107XG5cbiAgICB2YXIgX3RoaXMgPSB7fTtcblxuICAgIF90aGlzLndyaXRlQnl0ZSA9IGZ1bmN0aW9uKGIpIHtcbiAgICAgIF9ieXRlcy5wdXNoKGIgJiAweGZmKTtcbiAgICB9O1xuXG4gICAgX3RoaXMud3JpdGVTaG9ydCA9IGZ1bmN0aW9uKGkpIHtcbiAgICAgIF90aGlzLndyaXRlQnl0ZShpKTtcbiAgICAgIF90aGlzLndyaXRlQnl0ZShpID4+PiA4KTtcbiAgICB9O1xuXG4gICAgX3RoaXMud3JpdGVCeXRlcyA9IGZ1bmN0aW9uKGIsIG9mZiwgbGVuKSB7XG4gICAgICBvZmYgPSBvZmYgfHwgMDtcbiAgICAgIGxlbiA9IGxlbiB8fCBiLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgX3RoaXMud3JpdGVCeXRlKGJbaSArIG9mZl0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy53cml0ZVN0cmluZyA9IGZ1bmN0aW9uKHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBfdGhpcy53cml0ZUJ5dGUocy5jaGFyQ29kZUF0KGkpICk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnRvQnl0ZUFycmF5ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gX2J5dGVzO1xuICAgIH07XG5cbiAgICBfdGhpcy50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHMgPSAnJztcbiAgICAgIHMgKz0gJ1snO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfYnl0ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgcyArPSAnLCc7XG4gICAgICAgIH1cbiAgICAgICAgcyArPSBfYnl0ZXNbaV07XG4gICAgICB9XG4gICAgICBzICs9ICddJztcbiAgICAgIHJldHVybiBzO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH07XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gYmFzZTY0RW5jb2RlT3V0cHV0U3RyZWFtXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgdmFyIGJhc2U2NEVuY29kZU91dHB1dFN0cmVhbSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIF9idWZmZXIgPSAwO1xuICAgIHZhciBfYnVmbGVuID0gMDtcbiAgICB2YXIgX2xlbmd0aCA9IDA7XG4gICAgdmFyIF9iYXNlNjQgPSAnJztcblxuICAgIHZhciBfdGhpcyA9IHt9O1xuXG4gICAgdmFyIHdyaXRlRW5jb2RlZCA9IGZ1bmN0aW9uKGIpIHtcbiAgICAgIF9iYXNlNjQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShlbmNvZGUoYiAmIDB4M2YpICk7XG4gICAgfTtcblxuICAgIHZhciBlbmNvZGUgPSBmdW5jdGlvbihuKSB7XG4gICAgICBpZiAobiA8IDApIHtcbiAgICAgICAgLy8gZXJyb3IuXG4gICAgICB9IGVsc2UgaWYgKG4gPCAyNikge1xuICAgICAgICByZXR1cm4gMHg0MSArIG47XG4gICAgICB9IGVsc2UgaWYgKG4gPCA1Mikge1xuICAgICAgICByZXR1cm4gMHg2MSArIChuIC0gMjYpO1xuICAgICAgfSBlbHNlIGlmIChuIDwgNjIpIHtcbiAgICAgICAgcmV0dXJuIDB4MzAgKyAobiAtIDUyKTtcbiAgICAgIH0gZWxzZSBpZiAobiA9PSA2Mikge1xuICAgICAgICByZXR1cm4gMHgyYjtcbiAgICAgIH0gZWxzZSBpZiAobiA9PSA2Mykge1xuICAgICAgICByZXR1cm4gMHgyZjtcbiAgICAgIH1cbiAgICAgIHRocm93ICduOicgKyBuO1xuICAgIH07XG5cbiAgICBfdGhpcy53cml0ZUJ5dGUgPSBmdW5jdGlvbihuKSB7XG5cbiAgICAgIF9idWZmZXIgPSAoX2J1ZmZlciA8PCA4KSB8IChuICYgMHhmZik7XG4gICAgICBfYnVmbGVuICs9IDg7XG4gICAgICBfbGVuZ3RoICs9IDE7XG5cbiAgICAgIHdoaWxlIChfYnVmbGVuID49IDYpIHtcbiAgICAgICAgd3JpdGVFbmNvZGVkKF9idWZmZXIgPj4+IChfYnVmbGVuIC0gNikgKTtcbiAgICAgICAgX2J1ZmxlbiAtPSA2O1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5mbHVzaCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICBpZiAoX2J1ZmxlbiA+IDApIHtcbiAgICAgICAgd3JpdGVFbmNvZGVkKF9idWZmZXIgPDwgKDYgLSBfYnVmbGVuKSApO1xuICAgICAgICBfYnVmZmVyID0gMDtcbiAgICAgICAgX2J1ZmxlbiA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChfbGVuZ3RoICUgMyAhPSAwKSB7XG4gICAgICAgIC8vIHBhZGRpbmdcbiAgICAgICAgdmFyIHBhZGxlbiA9IDMgLSBfbGVuZ3RoICUgMztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWRsZW47IGkgKz0gMSkge1xuICAgICAgICAgIF9iYXNlNjQgKz0gJz0nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gX2Jhc2U2NDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9O1xuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIGJhc2U2NERlY29kZUlucHV0U3RyZWFtXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgdmFyIGJhc2U2NERlY29kZUlucHV0U3RyZWFtID0gZnVuY3Rpb24oc3RyKSB7XG5cbiAgICB2YXIgX3N0ciA9IHN0cjtcbiAgICB2YXIgX3BvcyA9IDA7XG4gICAgdmFyIF9idWZmZXIgPSAwO1xuICAgIHZhciBfYnVmbGVuID0gMDtcblxuICAgIHZhciBfdGhpcyA9IHt9O1xuXG4gICAgX3RoaXMucmVhZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICB3aGlsZSAoX2J1ZmxlbiA8IDgpIHtcblxuICAgICAgICBpZiAoX3BvcyA+PSBfc3RyLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChfYnVmbGVuID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgJ3VuZXhwZWN0ZWQgZW5kIG9mIGZpbGUuLycgKyBfYnVmbGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGMgPSBfc3RyLmNoYXJBdChfcG9zKTtcbiAgICAgICAgX3BvcyArPSAxO1xuXG4gICAgICAgIGlmIChjID09ICc9Jykge1xuICAgICAgICAgIF9idWZsZW4gPSAwO1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSBlbHNlIGlmIChjLm1hdGNoKC9eXFxzJC8pICkge1xuICAgICAgICAgIC8vIGlnbm9yZSBpZiB3aGl0ZXNwYWNlLlxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgX2J1ZmZlciA9IChfYnVmZmVyIDw8IDYpIHwgZGVjb2RlKGMuY2hhckNvZGVBdCgwKSApO1xuICAgICAgICBfYnVmbGVuICs9IDY7XG4gICAgICB9XG5cbiAgICAgIHZhciBuID0gKF9idWZmZXIgPj4+IChfYnVmbGVuIC0gOCkgKSAmIDB4ZmY7XG4gICAgICBfYnVmbGVuIC09IDg7XG4gICAgICByZXR1cm4gbjtcbiAgICB9O1xuXG4gICAgdmFyIGRlY29kZSA9IGZ1bmN0aW9uKGMpIHtcbiAgICAgIGlmICgweDQxIDw9IGMgJiYgYyA8PSAweDVhKSB7XG4gICAgICAgIHJldHVybiBjIC0gMHg0MTtcbiAgICAgIH0gZWxzZSBpZiAoMHg2MSA8PSBjICYmIGMgPD0gMHg3YSkge1xuICAgICAgICByZXR1cm4gYyAtIDB4NjEgKyAyNjtcbiAgICAgIH0gZWxzZSBpZiAoMHgzMCA8PSBjICYmIGMgPD0gMHgzOSkge1xuICAgICAgICByZXR1cm4gYyAtIDB4MzAgKyA1MjtcbiAgICAgIH0gZWxzZSBpZiAoYyA9PSAweDJiKSB7XG4gICAgICAgIHJldHVybiA2MjtcbiAgICAgIH0gZWxzZSBpZiAoYyA9PSAweDJmKSB7XG4gICAgICAgIHJldHVybiA2MztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93ICdjOicgKyBjO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH07XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gZ2lmSW1hZ2UgKEIvVylcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICB2YXIgZ2lmSW1hZ2UgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XG5cbiAgICB2YXIgX3dpZHRoID0gd2lkdGg7XG4gICAgdmFyIF9oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdmFyIF9kYXRhID0gbmV3IEFycmF5KHdpZHRoICogaGVpZ2h0KTtcblxuICAgIHZhciBfdGhpcyA9IHt9O1xuXG4gICAgX3RoaXMuc2V0UGl4ZWwgPSBmdW5jdGlvbih4LCB5LCBwaXhlbCkge1xuICAgICAgX2RhdGFbeSAqIF93aWR0aCArIHhdID0gcGl4ZWw7XG4gICAgfTtcblxuICAgIF90aGlzLndyaXRlID0gZnVuY3Rpb24ob3V0KSB7XG5cbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBHSUYgU2lnbmF0dXJlXG5cbiAgICAgIG91dC53cml0ZVN0cmluZygnR0lGODdhJyk7XG5cbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBTY3JlZW4gRGVzY3JpcHRvclxuXG4gICAgICBvdXQud3JpdGVTaG9ydChfd2lkdGgpO1xuICAgICAgb3V0LndyaXRlU2hvcnQoX2hlaWdodCk7XG5cbiAgICAgIG91dC53cml0ZUJ5dGUoMHg4MCk7IC8vIDJiaXRcbiAgICAgIG91dC53cml0ZUJ5dGUoMCk7XG4gICAgICBvdXQud3JpdGVCeXRlKDApO1xuXG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgLy8gR2xvYmFsIENvbG9yIE1hcFxuXG4gICAgICAvLyBibGFja1xuICAgICAgb3V0LndyaXRlQnl0ZSgweDAwKTtcbiAgICAgIG91dC53cml0ZUJ5dGUoMHgwMCk7XG4gICAgICBvdXQud3JpdGVCeXRlKDB4MDApO1xuXG4gICAgICAvLyB3aGl0ZVxuICAgICAgb3V0LndyaXRlQnl0ZSgweGZmKTtcbiAgICAgIG91dC53cml0ZUJ5dGUoMHhmZik7XG4gICAgICBvdXQud3JpdGVCeXRlKDB4ZmYpO1xuXG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgLy8gSW1hZ2UgRGVzY3JpcHRvclxuXG4gICAgICBvdXQud3JpdGVTdHJpbmcoJywnKTtcbiAgICAgIG91dC53cml0ZVNob3J0KDApO1xuICAgICAgb3V0LndyaXRlU2hvcnQoMCk7XG4gICAgICBvdXQud3JpdGVTaG9ydChfd2lkdGgpO1xuICAgICAgb3V0LndyaXRlU2hvcnQoX2hlaWdodCk7XG4gICAgICBvdXQud3JpdGVCeXRlKDApO1xuXG4gICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgLy8gTG9jYWwgQ29sb3IgTWFwXG5cbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBSYXN0ZXIgRGF0YVxuXG4gICAgICB2YXIgbHp3TWluQ29kZVNpemUgPSAyO1xuICAgICAgdmFyIHJhc3RlciA9IGdldExaV1Jhc3RlcihsendNaW5Db2RlU2l6ZSk7XG5cbiAgICAgIG91dC53cml0ZUJ5dGUobHp3TWluQ29kZVNpemUpO1xuXG4gICAgICB2YXIgb2Zmc2V0ID0gMDtcblxuICAgICAgd2hpbGUgKHJhc3Rlci5sZW5ndGggLSBvZmZzZXQgPiAyNTUpIHtcbiAgICAgICAgb3V0LndyaXRlQnl0ZSgyNTUpO1xuICAgICAgICBvdXQud3JpdGVCeXRlcyhyYXN0ZXIsIG9mZnNldCwgMjU1KTtcbiAgICAgICAgb2Zmc2V0ICs9IDI1NTtcbiAgICAgIH1cblxuICAgICAgb3V0LndyaXRlQnl0ZShyYXN0ZXIubGVuZ3RoIC0gb2Zmc2V0KTtcbiAgICAgIG91dC53cml0ZUJ5dGVzKHJhc3Rlciwgb2Zmc2V0LCByYXN0ZXIubGVuZ3RoIC0gb2Zmc2V0KTtcbiAgICAgIG91dC53cml0ZUJ5dGUoMHgwMCk7XG5cbiAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBHSUYgVGVybWluYXRvclxuICAgICAgb3V0LndyaXRlU3RyaW5nKCc7Jyk7XG4gICAgfTtcblxuICAgIHZhciBiaXRPdXRwdXRTdHJlYW0gPSBmdW5jdGlvbihvdXQpIHtcblxuICAgICAgdmFyIF9vdXQgPSBvdXQ7XG4gICAgICB2YXIgX2JpdExlbmd0aCA9IDA7XG4gICAgICB2YXIgX2JpdEJ1ZmZlciA9IDA7XG5cbiAgICAgIHZhciBfdGhpcyA9IHt9O1xuXG4gICAgICBfdGhpcy53cml0ZSA9IGZ1bmN0aW9uKGRhdGEsIGxlbmd0aCkge1xuXG4gICAgICAgIGlmICggKGRhdGEgPj4+IGxlbmd0aCkgIT0gMCkge1xuICAgICAgICAgIHRocm93ICdsZW5ndGggb3Zlcic7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoX2JpdExlbmd0aCArIGxlbmd0aCA+PSA4KSB7XG4gICAgICAgICAgX291dC53cml0ZUJ5dGUoMHhmZiAmICggKGRhdGEgPDwgX2JpdExlbmd0aCkgfCBfYml0QnVmZmVyKSApO1xuICAgICAgICAgIGxlbmd0aCAtPSAoOCAtIF9iaXRMZW5ndGgpO1xuICAgICAgICAgIGRhdGEgPj4+PSAoOCAtIF9iaXRMZW5ndGgpO1xuICAgICAgICAgIF9iaXRCdWZmZXIgPSAwO1xuICAgICAgICAgIF9iaXRMZW5ndGggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgX2JpdEJ1ZmZlciA9IChkYXRhIDw8IF9iaXRMZW5ndGgpIHwgX2JpdEJ1ZmZlcjtcbiAgICAgICAgX2JpdExlbmd0aCA9IF9iaXRMZW5ndGggKyBsZW5ndGg7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5mbHVzaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoX2JpdExlbmd0aCA+IDApIHtcbiAgICAgICAgICBfb3V0LndyaXRlQnl0ZShfYml0QnVmZmVyKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0TFpXUmFzdGVyID0gZnVuY3Rpb24obHp3TWluQ29kZVNpemUpIHtcblxuICAgICAgdmFyIGNsZWFyQ29kZSA9IDEgPDwgbHp3TWluQ29kZVNpemU7XG4gICAgICB2YXIgZW5kQ29kZSA9ICgxIDw8IGx6d01pbkNvZGVTaXplKSArIDE7XG4gICAgICB2YXIgYml0TGVuZ3RoID0gbHp3TWluQ29kZVNpemUgKyAxO1xuXG4gICAgICAvLyBTZXR1cCBMWldUYWJsZVxuICAgICAgdmFyIHRhYmxlID0gbHp3VGFibGUoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGVhckNvZGU7IGkgKz0gMSkge1xuICAgICAgICB0YWJsZS5hZGQoU3RyaW5nLmZyb21DaGFyQ29kZShpKSApO1xuICAgICAgfVxuICAgICAgdGFibGUuYWRkKFN0cmluZy5mcm9tQ2hhckNvZGUoY2xlYXJDb2RlKSApO1xuICAgICAgdGFibGUuYWRkKFN0cmluZy5mcm9tQ2hhckNvZGUoZW5kQ29kZSkgKTtcblxuICAgICAgdmFyIGJ5dGVPdXQgPSBieXRlQXJyYXlPdXRwdXRTdHJlYW0oKTtcbiAgICAgIHZhciBiaXRPdXQgPSBiaXRPdXRwdXRTdHJlYW0oYnl0ZU91dCk7XG5cbiAgICAgIC8vIGNsZWFyIGNvZGVcbiAgICAgIGJpdE91dC53cml0ZShjbGVhckNvZGUsIGJpdExlbmd0aCk7XG5cbiAgICAgIHZhciBkYXRhSW5kZXggPSAwO1xuXG4gICAgICB2YXIgcyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoX2RhdGFbZGF0YUluZGV4XSk7XG4gICAgICBkYXRhSW5kZXggKz0gMTtcblxuICAgICAgd2hpbGUgKGRhdGFJbmRleCA8IF9kYXRhLmxlbmd0aCkge1xuXG4gICAgICAgIHZhciBjID0gU3RyaW5nLmZyb21DaGFyQ29kZShfZGF0YVtkYXRhSW5kZXhdKTtcbiAgICAgICAgZGF0YUluZGV4ICs9IDE7XG5cbiAgICAgICAgaWYgKHRhYmxlLmNvbnRhaW5zKHMgKyBjKSApIHtcblxuICAgICAgICAgIHMgPSBzICsgYztcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgYml0T3V0LndyaXRlKHRhYmxlLmluZGV4T2YocyksIGJpdExlbmd0aCk7XG5cbiAgICAgICAgICBpZiAodGFibGUuc2l6ZSgpIDwgMHhmZmYpIHtcblxuICAgICAgICAgICAgaWYgKHRhYmxlLnNpemUoKSA9PSAoMSA8PCBiaXRMZW5ndGgpICkge1xuICAgICAgICAgICAgICBiaXRMZW5ndGggKz0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGFibGUuYWRkKHMgKyBjKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzID0gYztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBiaXRPdXQud3JpdGUodGFibGUuaW5kZXhPZihzKSwgYml0TGVuZ3RoKTtcblxuICAgICAgLy8gZW5kIGNvZGVcbiAgICAgIGJpdE91dC53cml0ZShlbmRDb2RlLCBiaXRMZW5ndGgpO1xuXG4gICAgICBiaXRPdXQuZmx1c2goKTtcblxuICAgICAgcmV0dXJuIGJ5dGVPdXQudG9CeXRlQXJyYXkoKTtcbiAgICB9O1xuXG4gICAgdmFyIGx6d1RhYmxlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBfbWFwID0ge307XG4gICAgICB2YXIgX3NpemUgPSAwO1xuXG4gICAgICB2YXIgX3RoaXMgPSB7fTtcblxuICAgICAgX3RoaXMuYWRkID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIGlmIChfdGhpcy5jb250YWlucyhrZXkpICkge1xuICAgICAgICAgIHRocm93ICdkdXAga2V5OicgKyBrZXk7XG4gICAgICAgIH1cbiAgICAgICAgX21hcFtrZXldID0gX3NpemU7XG4gICAgICAgIF9zaXplICs9IDE7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfc2l6ZTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmluZGV4T2YgPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuIF9tYXBba2V5XTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmNvbnRhaW5zID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgX21hcFtrZXldICE9ICd1bmRlZmluZWQnO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZURhdGFVUkwgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0LCBnZXRQaXhlbCkge1xuICAgIHZhciBnaWYgPSBnaWZJbWFnZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICBmb3IgKHZhciB5ID0gMDsgeSA8IGhlaWdodDsgeSArPSAxKSB7XG4gICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHdpZHRoOyB4ICs9IDEpIHtcbiAgICAgICAgZ2lmLnNldFBpeGVsKHgsIHksIGdldFBpeGVsKHgsIHkpICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGIgPSBieXRlQXJyYXlPdXRwdXRTdHJlYW0oKTtcbiAgICBnaWYud3JpdGUoYik7XG5cbiAgICB2YXIgYmFzZTY0ID0gYmFzZTY0RW5jb2RlT3V0cHV0U3RyZWFtKCk7XG4gICAgdmFyIGJ5dGVzID0gYi50b0J5dGVBcnJheSgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGJhc2U2NC53cml0ZUJ5dGUoYnl0ZXNbaV0pO1xuICAgIH1cbiAgICBiYXNlNjQuZmx1c2goKTtcblxuICAgIHJldHVybiAnZGF0YTppbWFnZS9naWY7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIH07XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJucyBxcmNvZGUgZnVuY3Rpb24uXG5cbiAgcmV0dXJuIHFyY29kZTtcbn0oKTtcblxuLy8gbXVsdGlieXRlIHN1cHBvcnRcbiFmdW5jdGlvbigpIHtcblxuICBxcmNvZGUuc3RyaW5nVG9CeXRlc0Z1bmNzWydVVEYtOCddID0gZnVuY3Rpb24ocykge1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTg3Mjk0MDUvaG93LXRvLWNvbnZlcnQtdXRmOC1zdHJpbmctdG8tYnl0ZS1hcnJheVxuICAgIGZ1bmN0aW9uIHRvVVRGOEFycmF5KHN0cikge1xuICAgICAgdmFyIHV0ZjggPSBbXTtcbiAgICAgIGZvciAodmFyIGk9MDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hhcmNvZGUgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGNoYXJjb2RlIDwgMHg4MCkgdXRmOC5wdXNoKGNoYXJjb2RlKTtcbiAgICAgICAgZWxzZSBpZiAoY2hhcmNvZGUgPCAweDgwMCkge1xuICAgICAgICAgIHV0ZjgucHVzaCgweGMwIHwgKGNoYXJjb2RlID4+IDYpLFxuICAgICAgICAgICAgICAweDgwIHwgKGNoYXJjb2RlICYgMHgzZikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoYXJjb2RlIDwgMHhkODAwIHx8IGNoYXJjb2RlID49IDB4ZTAwMCkge1xuICAgICAgICAgIHV0ZjgucHVzaCgweGUwIHwgKGNoYXJjb2RlID4+IDEyKSxcbiAgICAgICAgICAgICAgMHg4MCB8ICgoY2hhcmNvZGU+PjYpICYgMHgzZiksXG4gICAgICAgICAgICAgIDB4ODAgfCAoY2hhcmNvZGUgJiAweDNmKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc3Vycm9nYXRlIHBhaXJcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIC8vIFVURi0xNiBlbmNvZGVzIDB4MTAwMDAtMHgxMEZGRkYgYnlcbiAgICAgICAgICAvLyBzdWJ0cmFjdGluZyAweDEwMDAwIGFuZCBzcGxpdHRpbmcgdGhlXG4gICAgICAgICAgLy8gMjAgYml0cyBvZiAweDAtMHhGRkZGRiBpbnRvIHR3byBoYWx2ZXNcbiAgICAgICAgICBjaGFyY29kZSA9IDB4MTAwMDAgKyAoKChjaGFyY29kZSAmIDB4M2ZmKTw8MTApXG4gICAgICAgICAgICB8IChzdHIuY2hhckNvZGVBdChpKSAmIDB4M2ZmKSk7XG4gICAgICAgICAgdXRmOC5wdXNoKDB4ZjAgfCAoY2hhcmNvZGUgPj4xOCksXG4gICAgICAgICAgICAgIDB4ODAgfCAoKGNoYXJjb2RlPj4xMikgJiAweDNmKSxcbiAgICAgICAgICAgICAgMHg4MCB8ICgoY2hhcmNvZGU+PjYpICYgMHgzZiksXG4gICAgICAgICAgICAgIDB4ODAgfCAoY2hhcmNvZGUgJiAweDNmKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB1dGY4O1xuICAgIH1cbiAgICByZXR1cm4gdG9VVEY4QXJyYXkocyk7XG4gIH07XG5cbn0oKTtcblxuKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfVxufShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHFyY29kZTtcbn0pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVRckNvZGUgPSBleHBvcnRzLnJlYWRRckNvZGUgPSB2b2lkIDA7XG5jb25zdCBxcl9zY2FubmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInFyLXNjYW5uZXJcIikpO1xuY29uc3QgcXJjb2RlX2dlbmVyYXRvcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJxcmNvZGUtZ2VuZXJhdG9yXCIpKTtcbmZ1bmN0aW9uIHJlYWRRckNvZGUoY2FsbGJhY2ssIHZpZGVvRWxlbWVudCkge1xuICAgIHZpZGVvRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICBjb25zdCBxclNjYW5uZXIgPSBuZXcgcXJfc2Nhbm5lcl8xLmRlZmF1bHQodmlkZW9FbGVtZW50LCAoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgdmlkZW9FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgY2FsbGJhY2socXJTY2FubmVyLCBKU09OLnBhcnNlKGRhdGEpKTtcbiAgICB9LCB7IGhpZ2hsaWdodFNjYW5SZWdpb246IHRydWUsXG4gICAgICAgIG9uRGVjb2RlRXJyb3I6ICgpID0+IHsgfSB9KTtcbiAgICBxclNjYW5uZXIuc3RhcnQoKTtcbn1cbmV4cG9ydHMucmVhZFFyQ29kZSA9IHJlYWRRckNvZGU7XG5mdW5jdGlvbiBjcmVhdGVRckNvZGUoZGF0YSkge1xuICAgIGNvbnN0IHFyID0gKDAsIHFyY29kZV9nZW5lcmF0b3JfMS5kZWZhdWx0KSgwLCAnTCcpO1xuICAgIHFyLmFkZERhdGEoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIHFyLm1ha2UoKTtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxcicpO1xuICAgIGlmIChlbCkge1xuICAgICAgICBlbC5pbm5lckhUTUwgPSBxci5jcmVhdGVTdmdUYWcoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNWRyBjb250YWluZXIgbm90IGZvdW5kXCIpO1xuICAgIH1cbn1cbmV4cG9ydHMuY3JlYXRlUXJDb2RlID0gY3JlYXRlUXJDb2RlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2VuZE1lc3NhZ2UgPSBleHBvcnRzLmFkZEFuc3dlciA9IGV4cG9ydHMuY3JlYXRlQW5zd2VyID0gZXhwb3J0cy5jcmVhdGVPZmZlciA9IHZvaWQgMDtcbmNvbnN0IHFyY29kZV8xID0gcmVxdWlyZShcIi4vcXJjb2RlXCIpO1xubGV0IHBjO1xubGV0IGRhdGFDaGFubmVsO1xuY29uc3Qgc2VydmVycyA9IHtcbiAgICBpY2VTZXJ2ZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVybHM6IFtcbiAgICAgICAgICAgICAgICAnc3R1bjpzdHVuMS4xLmdvb2dsZS5jb206MTkzMDInLFxuICAgICAgICAgICAgICAgICdzdHVuOnN0dW4yLjEuZ29vZ2xlLmNvbToxOTMwMicsXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICBdXG59O1xuLy8gY29uc3Qgc2VydmVycyA9IHtcImljZVNlcnZlcnNcIjpbXX07XG5mdW5jdGlvbiBjcmVhdGVQZWVyQ29ubmVjdGlvbih0eXBlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgcGMgPSBuZXcgUlRDUGVlckNvbm5lY3Rpb24oc2VydmVycyk7XG4gICAgICAgIGRhdGFDaGFubmVsID0gcGMuY3JlYXRlRGF0YUNoYW5uZWwoXCJkYXRhY2hhbm5lbFwiKTtcbiAgICAgICAgY29uc3QgaGFuZGxlTWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7IGNvbnNvbGUubG9nKFwiREMgbWVzc2FnZTpcIiArIGUuZGF0YSk7IH07XG4gICAgICAgIGNvbnN0IGhhbmRsZW9PcGVuID0gZnVuY3Rpb24gKCkgeyBjb25zb2xlLmxvZyhcIi0tLS0tLSBEQVRBQ0hBTk5FTCBPUEVORUQgLS0tLS0tXCIpOyB9O1xuICAgICAgICBjb25zdCBoYW5kbGVDbG9zZSA9IGZ1bmN0aW9uICgpIHsgY29uc29sZS5sb2coXCItLS0tLS0tIERDIGNsb3NlZCEgLS0tLS0tLVwiKTsgfTtcbiAgICAgICAgY29uc3QgaGFuZGxlRXJyb3IgPSBmdW5jdGlvbiAoKSB7IGNvbnNvbGUubG9nKFwiREMgRVJST1IhISFcIik7IH07XG4gICAgICAgIGRhdGFDaGFubmVsLm9ubWVzc2FnZSA9IGhhbmRsZU1lc3NhZ2U7XG4gICAgICAgIGRhdGFDaGFubmVsLm9ub3BlbiA9IGhhbmRsZW9PcGVuO1xuICAgICAgICBkYXRhQ2hhbm5lbC5vbmNsb3NlID0gaGFuZGxlQ2xvc2U7XG4gICAgICAgIGRhdGFDaGFubmVsLm9uZXJyb3IgPSBoYW5kbGVFcnJvcjtcbiAgICAgICAgcGMub25kYXRhY2hhbm5lbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgY29uc3QgcmVjZWl2ZSA9IGV2ZW50LmNoYW5uZWw7XG4gICAgICAgICAgICByZWNlaXZlLm9ubWVzc2FnZSA9IGhhbmRsZU1lc3NhZ2U7XG4gICAgICAgICAgICByZWNlaXZlLm9ub3BlbiA9IGhhbmRsZW9PcGVuO1xuICAgICAgICAgICAgcmVjZWl2ZS5vbmNsb3NlID0gaGFuZGxlQ2xvc2U7XG4gICAgICAgICAgICByZWNlaXZlLm9uZXJyb3IgPSBoYW5kbGVFcnJvcjtcbiAgICAgICAgfTtcbiAgICAgICAgcGMub25pY2VjYW5kaWRhdGUgPSAoZXZlbnQpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5jYW5kaWRhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAocGMubG9jYWxEZXNjcmlwdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHR5cGUgKyBcIi1ib3hcIikgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgLy8gYm94LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkocGMubG9jYWxEZXNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICAgICAgKDAsIHFyY29kZV8xLmNyZWF0ZVFyQ29kZSkocGMubG9jYWxEZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQZWVyIGNvbm5lY3Rpb24gbG9jYWwgZGVzY3JpcHRpb24gaXMgbnVsbFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlT2ZmZXIoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY3JlYXRlUGVlckNvbm5lY3Rpb24oXCJvZmZlclwiKTtcbiAgICAgICAgY29uc3Qgb2ZmZXIgPSB5aWVsZCBwYy5jcmVhdGVPZmZlcigpO1xuICAgICAgICB5aWVsZCBwYy5zZXRMb2NhbERlc2NyaXB0aW9uKG9mZmVyKTtcbiAgICAgICAgKDAsIHFyY29kZV8xLmNyZWF0ZVFyQ29kZSkob2ZmZXIpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5jcmVhdGVPZmZlciA9IGNyZWF0ZU9mZmVyO1xuZnVuY3Rpb24gY3JlYXRlQW5zd2VyKG9mZmVyKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY3JlYXRlUGVlckNvbm5lY3Rpb24oXCJhbnN3ZXJcIik7XG4gICAgICAgIHlpZWxkIHBjLnNldFJlbW90ZURlc2NyaXB0aW9uKG9mZmVyKTtcbiAgICAgICAgY29uc3QgYW5zd2VyID0geWllbGQgcGMuY3JlYXRlQW5zd2VyKCk7XG4gICAgICAgIHlpZWxkIHBjLnNldExvY2FsRGVzY3JpcHRpb24oYW5zd2VyKTtcbiAgICAgICAgKDAsIHFyY29kZV8xLmNyZWF0ZVFyQ29kZSkoYW5zd2VyKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuY3JlYXRlQW5zd2VyID0gY3JlYXRlQW5zd2VyO1xuZnVuY3Rpb24gYWRkQW5zd2VyKGFuc3dlcikge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmICghcGMuY3VycmVudFJlbW90ZURlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBwYy5zZXRSZW1vdGVEZXNjcmlwdGlvbihhbnN3ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29ubmVjdGlvbiBhbHJlYWR5IG1hZGVcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuYWRkQW5zd2VyID0gYWRkQW5zd2VyO1xuZnVuY3Rpb24gc2VuZE1lc3NhZ2UobXNnKSB7XG4gICAgZGF0YUNoYW5uZWwuc2VuZChtc2cpO1xufVxuZXhwb3J0cy5zZW5kTWVzc2FnZSA9IHNlbmRNZXNzYWdlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCItYnVuZGxlLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcImNhcmRfZ2FtZTpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblxuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsICsgXCIuLi9cIjsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJhbnN3ZXIvaW5kZXhcIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjYXJkX2dhbWVcIl0gPSBzZWxmW1wid2VicGFja0NodW5rY2FyZF9nYW1lXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHFyY29kZV8xID0gcmVxdWlyZShcIi4vcXJjb2RlXCIpO1xuY29uc3Qgd2VicnRjXzEgPSByZXF1aXJlKFwiLi93ZWJydGNcIik7XG5jb25zdCB2aWRlb0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2FuXCIpO1xuaWYgKCF2aWRlb0VsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVmlkZW8gRWxlbWVudCBub3QgZm91bmRcIik7XG59XG4oMCwgcXJjb2RlXzEucmVhZFFyQ29kZSkoKHNjYW5uZXIsIGRhdGEpID0+IHtcbiAgICBzY2FubmVyLnN0b3AoKTtcbiAgICB2aWRlb0VsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAoMCwgd2VicnRjXzEuY3JlYXRlQW5zd2VyKShkYXRhKTtcbn0sIHZpZGVvRWwpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9