/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports) {


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
const offerBox = document.getElementById("offer-box");
const offerBtn = document.getElementById("offer-button");
const answerBox = document.getElementById("answer-box");
const answerBtn = document.getElementById("answer-button");
const answerAddBtn = document.getElementById("answer-add-button");
const messageBox = document.getElementById("message-box");
const sendBtn = document.getElementById("send-button");
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
                const box = document.getElementById(type + "-box");
                box.value = JSON.stringify(pc.localDescription);
            }
        });
    });
}
function createOffer() {
    return __awaiter(this, void 0, void 0, function* () {
        createPeerConnection("offer");
        const offer = yield pc.createOffer();
        yield pc.setLocalDescription(offer);
        offerBox.value = JSON.stringify(offer);
    });
}
function createAnswer() {
    return __awaiter(this, void 0, void 0, function* () {
        createPeerConnection("answer");
        if (!offerBox.value)
            throw new Error("No offer present");
        const offer = JSON.parse(offerBox.value);
        yield pc.setRemoteDescription(offer);
        const answer = yield pc.createAnswer();
        yield pc.setLocalDescription(answer);
        answerBox.value = JSON.stringify(answer);
    });
}
function addAnswer() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!answerBox.value)
            throw new Error("Copy answer to box");
        const answer = JSON.parse(answerBox.value);
        if (!pc.currentRemoteDescription) {
            pc.setRemoteDescription(answer);
        }
    });
}
function sendMessage() {
    dataChannel.send(messageBox.value);
}
offerBtn.addEventListener("click", createOffer);
answerBtn.addEventListener("click", createAnswer);
answerAddBtn.addEventListener("click", addAnswer);
sendBtn.addEventListener("click", sendMessage);
// import { displayPlayerHand, setup } from "./display";
// import { Player, Game, State } from "./game";
// const game = new Game(2);
// setup(game);
// displayPlayerHand(game.player);
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QywwQ0FBMEM7QUFDMUMsMENBQTBDO0FBQzFDLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkJBQTJCO0FBQ3ZDLFlBQVksc0JBQXNCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFlBQVk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msd0JBQXdCO0FBQzlEO0FBQ0E7Ozs7Ozs7O1VFOUdBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBvZmZlckJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2ZmZXItYm94XCIpO1xuY29uc3Qgb2ZmZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9mZmVyLWJ1dHRvblwiKTtcbmNvbnN0IGFuc3dlckJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5zd2VyLWJveFwiKTtcbmNvbnN0IGFuc3dlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5zd2VyLWJ1dHRvblwiKTtcbmNvbnN0IGFuc3dlckFkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5zd2VyLWFkZC1idXR0b25cIik7XG5jb25zdCBtZXNzYWdlQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlLWJveFwiKTtcbmNvbnN0IHNlbmRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbmQtYnV0dG9uXCIpO1xubGV0IHBjO1xubGV0IGRhdGFDaGFubmVsO1xuY29uc3Qgc2VydmVycyA9IHtcbiAgICBpY2VTZXJ2ZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVybHM6IFtcbiAgICAgICAgICAgICAgICAnc3R1bjpzdHVuMS4xLmdvb2dsZS5jb206MTkzMDInLFxuICAgICAgICAgICAgICAgICdzdHVuOnN0dW4yLjEuZ29vZ2xlLmNvbToxOTMwMicsXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICBdXG59O1xuZnVuY3Rpb24gY3JlYXRlUGVlckNvbm5lY3Rpb24odHlwZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHBjID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKHNlcnZlcnMpO1xuICAgICAgICBkYXRhQ2hhbm5lbCA9IHBjLmNyZWF0ZURhdGFDaGFubmVsKFwiZGF0YWNoYW5uZWxcIik7XG4gICAgICAgIGNvbnN0IGhhbmRsZU1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkgeyBjb25zb2xlLmxvZyhcIkRDIG1lc3NhZ2U6XCIgKyBlLmRhdGEpOyB9O1xuICAgICAgICBjb25zdCBoYW5kbGVvT3BlbiA9IGZ1bmN0aW9uICgpIHsgY29uc29sZS5sb2coXCItLS0tLS0gREFUQUNIQU5ORUwgT1BFTkVEIC0tLS0tLVwiKTsgfTtcbiAgICAgICAgY29uc3QgaGFuZGxlQ2xvc2UgPSBmdW5jdGlvbiAoKSB7IGNvbnNvbGUubG9nKFwiLS0tLS0tLSBEQyBjbG9zZWQhIC0tLS0tLS1cIik7IH07XG4gICAgICAgIGNvbnN0IGhhbmRsZUVycm9yID0gZnVuY3Rpb24gKCkgeyBjb25zb2xlLmxvZyhcIkRDIEVSUk9SISEhXCIpOyB9O1xuICAgICAgICBkYXRhQ2hhbm5lbC5vbm1lc3NhZ2UgPSBoYW5kbGVNZXNzYWdlO1xuICAgICAgICBkYXRhQ2hhbm5lbC5vbm9wZW4gPSBoYW5kbGVvT3BlbjtcbiAgICAgICAgZGF0YUNoYW5uZWwub25jbG9zZSA9IGhhbmRsZUNsb3NlO1xuICAgICAgICBkYXRhQ2hhbm5lbC5vbmVycm9yID0gaGFuZGxlRXJyb3I7XG4gICAgICAgIHBjLm9uZGF0YWNoYW5uZWwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY2VpdmUgPSBldmVudC5jaGFubmVsO1xuICAgICAgICAgICAgcmVjZWl2ZS5vbm1lc3NhZ2UgPSBoYW5kbGVNZXNzYWdlO1xuICAgICAgICAgICAgcmVjZWl2ZS5vbm9wZW4gPSBoYW5kbGVvT3BlbjtcbiAgICAgICAgICAgIHJlY2VpdmUub25jbG9zZSA9IGhhbmRsZUNsb3NlO1xuICAgICAgICAgICAgcmVjZWl2ZS5vbmVycm9yID0gaGFuZGxlRXJyb3I7XG4gICAgICAgIH07XG4gICAgICAgIHBjLm9uaWNlY2FuZGlkYXRlID0gKGV2ZW50KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY2FuZGlkYXRlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodHlwZSArIFwiLWJveFwiKTtcbiAgICAgICAgICAgICAgICBib3gudmFsdWUgPSBKU09OLnN0cmluZ2lmeShwYy5sb2NhbERlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVPZmZlcigpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjcmVhdGVQZWVyQ29ubmVjdGlvbihcIm9mZmVyXCIpO1xuICAgICAgICBjb25zdCBvZmZlciA9IHlpZWxkIHBjLmNyZWF0ZU9mZmVyKCk7XG4gICAgICAgIHlpZWxkIHBjLnNldExvY2FsRGVzY3JpcHRpb24ob2ZmZXIpO1xuICAgICAgICBvZmZlckJveC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KG9mZmVyKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUFuc3dlcigpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjcmVhdGVQZWVyQ29ubmVjdGlvbihcImFuc3dlclwiKTtcbiAgICAgICAgaWYgKCFvZmZlckJveC52YWx1ZSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIG9mZmVyIHByZXNlbnRcIik7XG4gICAgICAgIGNvbnN0IG9mZmVyID0gSlNPTi5wYXJzZShvZmZlckJveC52YWx1ZSk7XG4gICAgICAgIHlpZWxkIHBjLnNldFJlbW90ZURlc2NyaXB0aW9uKG9mZmVyKTtcbiAgICAgICAgY29uc3QgYW5zd2VyID0geWllbGQgcGMuY3JlYXRlQW5zd2VyKCk7XG4gICAgICAgIHlpZWxkIHBjLnNldExvY2FsRGVzY3JpcHRpb24oYW5zd2VyKTtcbiAgICAgICAgYW5zd2VyQm94LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkoYW5zd2VyKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZEFuc3dlcigpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoIWFuc3dlckJveC52YWx1ZSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvcHkgYW5zd2VyIHRvIGJveFwiKTtcbiAgICAgICAgY29uc3QgYW5zd2VyID0gSlNPTi5wYXJzZShhbnN3ZXJCb3gudmFsdWUpO1xuICAgICAgICBpZiAoIXBjLmN1cnJlbnRSZW1vdGVEZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgcGMuc2V0UmVtb3RlRGVzY3JpcHRpb24oYW5zd2VyKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gc2VuZE1lc3NhZ2UoKSB7XG4gICAgZGF0YUNoYW5uZWwuc2VuZChtZXNzYWdlQm94LnZhbHVlKTtcbn1cbm9mZmVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVPZmZlcik7XG5hbnN3ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZUFuc3dlcik7XG5hbnN3ZXJBZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZEFuc3dlcik7XG5zZW5kQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZW5kTWVzc2FnZSk7XG4vLyBpbXBvcnQgeyBkaXNwbGF5UGxheWVySGFuZCwgc2V0dXAgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG4vLyBpbXBvcnQgeyBQbGF5ZXIsIEdhbWUsIFN0YXRlIH0gZnJvbSBcIi4vZ2FtZVwiO1xuLy8gY29uc3QgZ2FtZSA9IG5ldyBHYW1lKDIpO1xuLy8gc2V0dXAoZ2FtZSk7XG4vLyBkaXNwbGF5UGxheWVySGFuZChnYW1lLnBsYXllcik7XG4vLyBmdW5jdGlvbiB0aW1lcihhbm9uOiBGdW5jdGlvbikge1xuLy8gICAgIGNvbnN0IFRyaWFscyA9IDEwMDtcbi8vICAgICBjb25zdCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuLy9cbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFRyaWFsczsgaSsrKSB7XG4vLyAgICAgICAgIGFub24oKTtcbi8vICAgICB9XG4vL1xuLy8gICAgIGNvbnN0IGVuZCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuLy8gICAgIGNvbnNvbGUubG9nKGBFeGVjdXRpb24gdGltZTogJHsoZW5kIC0gc3RhcnQpIC8gVHJpYWxzfSBtc2ApO1xuLy8gfVxuLy9cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG5fX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9zcmMvaW5kZXgudHNcIl0oMCwgX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=