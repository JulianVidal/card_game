import QrScanner from "qr-scanner";
import { readQrCode } from "./qrcode";
import { createAnswer, sendMessage } from "./webrtc";

const videoEl = document.getElementById("scan") as HTMLVideoElement;

if (!videoEl) {
    throw new Error("Video Element not found");
}

readQrCode((scanner: QrScanner, data: RTCSessionDescriptionInit) => {
    scanner.stop();
    videoEl.style.display = "none";
    createAnswer(data);

}, videoEl);


const game = window.document.getElementById("game") as HTMLIFrameElement;
let gameLoaded = false;

window.addEventListener("message", receiveMessage);

game.onload = () => {
    gameLoaded = true;
}

function sendIframMessage(msg: string) {
    if (gameLoaded) {
        if (game) {
            if (game.contentWindow) {
                console.log(`Sent ${msg} to iframe ${window.location.pathname}`);
                game.contentWindow.postMessage(msg);
            }
        }
    } else {
        throw new Error("Game IFrame not loaded");
    }
}


function receiveMessage(event: MessageEvent) {
    console.log("Received From iframe", event.data);

    sendMessage(event.data);

}
export function handleDCMessage(e: MessageEvent) {
    console.log("Received DC message:" + e.data);

    sendIframMessage(e.data);
};

export function handleDCOpen() {
    console.log("------ DATACHANNEL OPENED ------");
    const rtcElement = document.getElementById("webrtc");
    if (rtcElement) {
        rtcElement.hidden = true;
    }

    const gameElement = document.getElementById("game");
    if (gameElement) {
        gameElement.hidden = false;
    }

    sendIframMessage("start");
};
