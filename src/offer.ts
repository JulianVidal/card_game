import QrScanner from "qr-scanner";
import { readQrCode } from "./qrcode";
import { Connection, addAnswer, createOffer, sendIframeMessage, sendMessage } from "./webrtc";

const videoEl = document.getElementById("scan") as HTMLVideoElement;

if (!videoEl) {
    throw new Error("Video Element not found");
}

const numberButton = document.getElementById("number-button");
if (numberButton) {
    numberButton.onclick = start;
}

const connections: Connection[] = [];

async function createConnection() {


    function handleOpen() {
        console.log("------ DATACHANNEL OPENED ------");

        connectionResolve();
    };

    const { pc } = await createOffer(handleOpen);
    let connectionResolve: (value: void | PromiseLike<number>) => void;

    readQrCode((scanner: QrScanner, data: RTCSessionDescriptionInit) => {
        scanner.stop();
        document.querySelector("#qr>svg")?.remove();
        videoEl.style.display = "none";
        addAnswer(data, pc);


    }, videoEl);

    window.addEventListener("message", ({ data }: MessageEvent) => {
        console.log("Received From iframe", data);
        const [connection, msg] = data.split(/ (.*)/s);
        sendMessage(msg, connections[parseInt(connection)].dc);
    });

    return new Promise((resolve, _) => {
        connectionResolve = resolve;
    });

}

async function start() {
    const numberContainer = document.getElementById("number-container");
    const webrtcContainer = document.getElementById("webrtc");
    if (numberContainer && webrtcContainer) {
        numberContainer.style.display = "none";
        webrtcContainer.style.display = "";
    }

    const numberElement = document.getElementById("number");
    const number = parseInt(numberElement?.innerText as string);

    for (let p = 0; p < number - 1; p++) {
        await createConnection();
    }

    const rtcElement = document.getElementById("webrtc");
    if (rtcElement) {
        // rtcElement.hidden = true;
        rtcElement.style.display = "none";
    }

    const gameElement = document.getElementById("game");
    if (gameElement) {
        gameElement.hidden = false;
    }

    sendIframeMessage("start");

}
