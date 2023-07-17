import './index.css';
import { readQrCode } from "../lib/qrcode";
import { Connection, addAnswer, createOffer, sendIframeMessage, sendMessage } from "../lib/webrtc";

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

    const connection = await createOffer(handleOpen);
    connections.push(connection);
    let connectionResolve: (value: void | PromiseLike<number>) => void;

    readQrCode((data: RTCSessionDescriptionInit) => {
        addAnswer(data, connections[connections.length - 1].pc);
    }, videoEl);


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

    window.addEventListener("message", ({ data }: MessageEvent) => {
        console.log("Received From iframe", data);
        const [connection, msg] = data.split(/ (.*)/s);
        sendMessage(msg, connections[parseInt(connection) - 1].dc);
    });

    const rtcElement = document.getElementById("webrtc");
    if (rtcElement) {
        rtcElement.style.display = "none";
    }

    const gameElement = document.getElementById("game");
    if (gameElement) {
        gameElement.hidden = false;
    }

    sendIframeMessage("start " + number);
}
