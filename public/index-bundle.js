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
        else {
            throw new Error("Connection already made");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsMENBQTBDO0FBQzFDLDBDQUEwQztBQUMxQywwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJCQUEyQjtBQUN2QyxZQUFZLHNCQUFzQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHdCQUF3QjtBQUM5RDtBQUNBOzs7Ozs7OztVRWxIQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FyZF9nYW1lLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2NhcmRfZ2FtZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NhcmRfZ2FtZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgb2ZmZXJCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9mZmVyLWJveFwiKTtcbmNvbnN0IG9mZmVyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvZmZlci1idXR0b25cIik7XG5jb25zdCBhbnN3ZXJCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuc3dlci1ib3hcIik7XG5jb25zdCBhbnN3ZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuc3dlci1idXR0b25cIik7XG5jb25zdCBhbnN3ZXJBZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuc3dlci1hZGQtYnV0dG9uXCIpO1xuY29uc3QgbWVzc2FnZUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZS1ib3hcIik7XG5jb25zdCBzZW5kQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZW5kLWJ1dHRvblwiKTtcbmxldCBwYztcbmxldCBkYXRhQ2hhbm5lbDtcbmNvbnN0IHNlcnZlcnMgPSB7XG4gICAgaWNlU2VydmVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICB1cmxzOiBbXG4gICAgICAgICAgICAgICAgJ3N0dW46c3R1bjEuMS5nb29nbGUuY29tOjE5MzAyJyxcbiAgICAgICAgICAgICAgICAnc3R1bjpzdHVuMi4xLmdvb2dsZS5jb206MTkzMDInLFxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgXVxufTtcbi8vIGNvbnN0IHNlcnZlcnMgPSB7XCJpY2VTZXJ2ZXJzXCI6W119O1xuZnVuY3Rpb24gY3JlYXRlUGVlckNvbm5lY3Rpb24odHlwZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHBjID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKHNlcnZlcnMpO1xuICAgICAgICBkYXRhQ2hhbm5lbCA9IHBjLmNyZWF0ZURhdGFDaGFubmVsKFwiZGF0YWNoYW5uZWxcIik7XG4gICAgICAgIGNvbnN0IGhhbmRsZU1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkgeyBjb25zb2xlLmxvZyhcIkRDIG1lc3NhZ2U6XCIgKyBlLmRhdGEpOyB9O1xuICAgICAgICBjb25zdCBoYW5kbGVvT3BlbiA9IGZ1bmN0aW9uICgpIHsgY29uc29sZS5sb2coXCItLS0tLS0gREFUQUNIQU5ORUwgT1BFTkVEIC0tLS0tLVwiKTsgfTtcbiAgICAgICAgY29uc3QgaGFuZGxlQ2xvc2UgPSBmdW5jdGlvbiAoKSB7IGNvbnNvbGUubG9nKFwiLS0tLS0tLSBEQyBjbG9zZWQhIC0tLS0tLS1cIik7IH07XG4gICAgICAgIGNvbnN0IGhhbmRsZUVycm9yID0gZnVuY3Rpb24gKCkgeyBjb25zb2xlLmxvZyhcIkRDIEVSUk9SISEhXCIpOyB9O1xuICAgICAgICBkYXRhQ2hhbm5lbC5vbm1lc3NhZ2UgPSBoYW5kbGVNZXNzYWdlO1xuICAgICAgICBkYXRhQ2hhbm5lbC5vbm9wZW4gPSBoYW5kbGVvT3BlbjtcbiAgICAgICAgZGF0YUNoYW5uZWwub25jbG9zZSA9IGhhbmRsZUNsb3NlO1xuICAgICAgICBkYXRhQ2hhbm5lbC5vbmVycm9yID0gaGFuZGxlRXJyb3I7XG4gICAgICAgIHBjLm9uZGF0YWNoYW5uZWwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY2VpdmUgPSBldmVudC5jaGFubmVsO1xuICAgICAgICAgICAgcmVjZWl2ZS5vbm1lc3NhZ2UgPSBoYW5kbGVNZXNzYWdlO1xuICAgICAgICAgICAgcmVjZWl2ZS5vbm9wZW4gPSBoYW5kbGVvT3BlbjtcbiAgICAgICAgICAgIHJlY2VpdmUub25jbG9zZSA9IGhhbmRsZUNsb3NlO1xuICAgICAgICAgICAgcmVjZWl2ZS5vbmVycm9yID0gaGFuZGxlRXJyb3I7XG4gICAgICAgIH07XG4gICAgICAgIHBjLm9uaWNlY2FuZGlkYXRlID0gKGV2ZW50KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY2FuZGlkYXRlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodHlwZSArIFwiLWJveFwiKTtcbiAgICAgICAgICAgICAgICBib3gudmFsdWUgPSBKU09OLnN0cmluZ2lmeShwYy5sb2NhbERlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVPZmZlcigpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjcmVhdGVQZWVyQ29ubmVjdGlvbihcIm9mZmVyXCIpO1xuICAgICAgICBjb25zdCBvZmZlciA9IHlpZWxkIHBjLmNyZWF0ZU9mZmVyKCk7XG4gICAgICAgIHlpZWxkIHBjLnNldExvY2FsRGVzY3JpcHRpb24ob2ZmZXIpO1xuICAgICAgICBvZmZlckJveC52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KG9mZmVyKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUFuc3dlcigpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjcmVhdGVQZWVyQ29ubmVjdGlvbihcImFuc3dlclwiKTtcbiAgICAgICAgaWYgKCFvZmZlckJveC52YWx1ZSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIG9mZmVyIHByZXNlbnRcIik7XG4gICAgICAgIGNvbnN0IG9mZmVyID0gSlNPTi5wYXJzZShvZmZlckJveC52YWx1ZSk7XG4gICAgICAgIHlpZWxkIHBjLnNldFJlbW90ZURlc2NyaXB0aW9uKG9mZmVyKTtcbiAgICAgICAgY29uc3QgYW5zd2VyID0geWllbGQgcGMuY3JlYXRlQW5zd2VyKCk7XG4gICAgICAgIHlpZWxkIHBjLnNldExvY2FsRGVzY3JpcHRpb24oYW5zd2VyKTtcbiAgICAgICAgYW5zd2VyQm94LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkoYW5zd2VyKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZEFuc3dlcigpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoIWFuc3dlckJveC52YWx1ZSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvcHkgYW5zd2VyIHRvIGJveFwiKTtcbiAgICAgICAgY29uc3QgYW5zd2VyID0gSlNPTi5wYXJzZShhbnN3ZXJCb3gudmFsdWUpO1xuICAgICAgICBpZiAoIXBjLmN1cnJlbnRSZW1vdGVEZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgcGMuc2V0UmVtb3RlRGVzY3JpcHRpb24oYW5zd2VyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbm5lY3Rpb24gYWxyZWFkeSBtYWRlXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzZW5kTWVzc2FnZSgpIHtcbiAgICBkYXRhQ2hhbm5lbC5zZW5kKG1lc3NhZ2VCb3gudmFsdWUpO1xufVxub2ZmZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZU9mZmVyKTtcbmFuc3dlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlQW5zd2VyKTtcbmFuc3dlckFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkQW5zd2VyKTtcbnNlbmRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbmRNZXNzYWdlKTtcbi8vIGltcG9ydCB7IGRpc3BsYXlQbGF5ZXJIYW5kLCBzZXR1cCB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcbi8vIGltcG9ydCB7IFBsYXllciwgR2FtZSwgU3RhdGUgfSBmcm9tIFwiLi9nYW1lXCI7XG4vLyBjb25zdCBnYW1lID0gbmV3IEdhbWUoMik7XG4vLyBzZXR1cChnYW1lKTtcbi8vIGRpc3BsYXlQbGF5ZXJIYW5kKGdhbWUucGxheWVyKTtcbi8vIGZ1bmN0aW9uIHRpbWVyKGFub246IEZ1bmN0aW9uKSB7XG4vLyAgICAgY29uc3QgVHJpYWxzID0gMTAwO1xuLy8gICAgIGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4vL1xuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgVHJpYWxzOyBpKyspIHtcbi8vICAgICAgICAgYW5vbigpO1xuLy8gICAgIH1cbi8vXG4vLyAgICAgY29uc3QgZW5kID0gcGVyZm9ybWFuY2Uubm93KCk7XG4vLyAgICAgY29uc29sZS5sb2coYEV4ZWN1dGlvbiB0aW1lOiAkeyhlbmQgLSBzdGFydCkgLyBUcmlhbHN9IG1zYCk7XG4vLyB9XG4vL1xuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9pbmRleC50c1wiXSgwLCBfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==