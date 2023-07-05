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

window.addEventListener("message", receiveMessage);

function receiveMessage(event: MessageEvent) {
    console.log("Received From iframe", event.data);

    sendMessage(event.data);
}

