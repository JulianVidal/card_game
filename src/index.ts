const offerBox = document.getElementById("offer-box") as HTMLTextAreaElement;
const offerBtn = document.getElementById("offer-button") as HTMLInputElement;
const answerBox = document.getElementById("answer-box") as HTMLTextAreaElement;
const answerBtn = document.getElementById("answer-button") as HTMLInputElement;
const answerAddBtn = document.getElementById("answer-add-button") as HTMLInputElement;
const messageBox = document.getElementById("message-box") as HTMLTextAreaElement;
const sendBtn = document.getElementById("send-button") as HTMLInputElement;

let pc: RTCPeerConnection;
let dataChannel: RTCDataChannel;

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

async function createPeerConnection(type: string) {
    pc = new RTCPeerConnection(servers);

    dataChannel = pc.createDataChannel("datachannel");


    const handleMessage = function(e) { console.log("DC message:" + e.data); };
    const handleoOpen = function() { console.log("------ DATACHANNEL OPENED ------");};
    const handleClose = function() { console.log("------- DC closed! -------") };
    const handleError = function() { console.log("DC ERROR!!!") };

    dataChannel.onmessage = handleMessage;
    dataChannel.onopen = handleoOpen;
    dataChannel.onclose = handleClose;
    dataChannel.onerror = handleError;

    pc.ondatachannel = function(event: RTCDataChannelEvent) {
        const receive = event.channel;
        receive.onmessage = handleMessage;
        receive.onopen = handleoOpen;
        receive.onclose = handleClose;
        receive.onerror = handleError;
    };

    pc.onicecandidate = async (event: RTCPeerConnectionIceEvent) => {
        if (event.candidate) {
            const box = document.getElementById(type + "-box") as HTMLTextAreaElement;
            box.value = JSON.stringify(pc.localDescription)
        }
    }
}

async function createOffer() {
    createPeerConnection("offer");
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    offerBox.value = JSON.stringify(offer);
}

async function createAnswer() {
    createPeerConnection("answer");

    if (!offerBox.value) throw new Error("No offer present");

    const offer = JSON.parse(offerBox.value);
    await pc.setRemoteDescription(offer)

    const answer = await pc.createAnswer()
    await pc.setLocalDescription(answer)

    answerBox.value = JSON.stringify(answer)
}

async function addAnswer() {
    if (!answerBox.value)
        throw new Error("Copy answer to box");

    const answer = JSON.parse(answerBox.value)

    if (!pc.currentRemoteDescription) {
        pc.setRemoteDescription(answer)
    }

}

function sendMessage() {
    dataChannel.send(messageBox.value);
}

offerBtn.addEventListener("click", createOffer);
answerBtn.addEventListener("click", createAnswer);
answerAddBtn.addEventListener("click", addAnswer);
sendBtn.addEventListener("click", sendMessage);

// offerBtn.onclick = createOffer;

import { Rank, Suit, createCard, getSVG, getString, shuffle } from "./cards";
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
