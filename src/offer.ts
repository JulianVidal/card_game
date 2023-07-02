import QrScanner from "qr-scanner";
import { readQrCode } from "./qrcode";
import { addAnswer, createOffer } from "./webrtc";

const videoEl = document.getElementById("scan") as HTMLVideoElement;

if (!videoEl) {
    throw new Error("Video Element not found");
}

createOffer();
readQrCode((scanner: QrScanner, data: RTCSessionDescriptionInit) => {
    scanner.stop();
    videoEl.style.display = "none";
    addAnswer(data);

}, videoEl);

