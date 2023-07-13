import QrScanner from "qr-scanner";
import { readQrCode } from "./qrcode";
import { createAnswer, sendIframeMessage, sendMessage } from "./webrtc";

const videoEl = document.getElementById("scan") as HTMLVideoElement;

if (!videoEl) {
    throw new Error("Video Element not found");
}

readQrCode(async (scanner: QrScanner, data: RTCSessionDescriptionInit) => {
    scanner.stop();
    videoEl.style.display = "none";

    const { dc } = await createAnswer(data, handleOpen);

    window.addEventListener("message", ({ data }: MessageEvent) => {
        console.log("Received From iframe", data);
        sendMessage(data, dc);
    });

}, videoEl);

function handleOpen() {
    console.log("------ DATACHANNEL OPENED ------");
    const rtcElement = document.getElementById("webrtc");
    if (rtcElement) {
        rtcElement.style.display = "none";
    }

    const gameElement = document.getElementById("game");
    if (gameElement) {
        gameElement.hidden = false;
    }

    sendIframeMessage("start");
};
