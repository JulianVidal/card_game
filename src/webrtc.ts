import { createQrCode } from "./qrcode";

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

// const servers = {"iceServers":[]};

async function createPeerConnection(type: string) {
    pc = new RTCPeerConnection(servers);

    dataChannel = pc.createDataChannel("datachannel");


    const handleMessage = function(e: MessageEvent) { console.log("DC message:" + e.data); };
    const handleoOpen = function() { console.log("------ DATACHANNEL OPENED ------"); };
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
            if (pc.localDescription != null) {
                // const box = document.getElementById(type + "-box") as HTMLTextAreaElement;
                // box.value = JSON.stringify(pc.localDescription)
                createQrCode(pc.localDescription);
            } else {
                throw new Error("Peer connection local description is null");
            }
        }
    }
}

export async function createOffer() {
    createPeerConnection("offer");
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);

    createQrCode(offer);
}


export async function createAnswer(offer: RTCSessionDescriptionInit) {
    createPeerConnection("answer");

    await pc.setRemoteDescription(offer)

    const answer = await pc.createAnswer()
    await pc.setLocalDescription(answer)
    createQrCode(answer);
}


export async function addAnswer(answer: RTCSessionDescriptionInit) {
    if (!pc.currentRemoteDescription) {
        pc.setRemoteDescription(answer)
    } else {
        throw new Error("Connection already made");
    }

}

export function sendMessage(msg: string) {
    dataChannel.send(msg);
}
