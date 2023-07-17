import { createQrCode } from "./qrcode";

// let pc: RTCPeerConnection;
// let dataChannel: RTCDataChannel;
//

export type Connection = {
    pc: RTCPeerConnection;
    dc: RTCDataChannel;
};

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

async function createPeerConnection(handleOpen: () => any ): Promise<Connection> {
    const pc = new RTCPeerConnection(servers);

    const dc = pc.createDataChannel("datachannel");

    const handleClose = function() { console.log("------- DC closed! -------") };
    const handleError = function() { console.log("DC ERROR!!!") };

    // dataChannel.onmessage = handleMessage;
    // dataChannel.onopen = handleOpen;
    // dataChannel.onclose = handleClose;
    dc.onerror = handleError;

    pc.ondatachannel = function(event: RTCDataChannelEvent) {
        const receive = event.channel;
        receive.onmessage = handleMessage;
        receive.onopen = handleOpen;
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

    return { pc, dc };
}

export async function createOffer(handleOpen: () => any): Promise<Connection> {
    const connection = await createPeerConnection(handleOpen);
    const offer = await connection.pc.createOffer();
    await connection.pc.setLocalDescription(offer);


    return connection;
}


export async function createAnswer(offer: RTCSessionDescriptionInit, handleOpen: () => any): Promise<Connection> {
    const connection = await createPeerConnection(handleOpen);
    await connection.pc.setRemoteDescription(offer)

    const answer = await connection.pc.createAnswer()
    await connection.pc.setLocalDescription(answer)

    return connection;
}


export async function addAnswer(answer: RTCSessionDescriptionInit, pc: RTCPeerConnection) {
    if (!pc.currentRemoteDescription) {
        pc.setRemoteDescription(answer)
    } else {
        throw new Error("Connection already made");
    }
}

export function sendMessage(msg: string, dc: RTCDataChannel) {
    dc.send(msg);
    console.log("Sent to DC " + msg);
}

export function sendIframeMessage(msg: string) {
    const game = document.getElementById("game") as HTMLIFrameElement;
    if (game) {
        if (game.contentWindow) {
            console.log(`Sent ${msg} to iframe ${window.location.pathname}`);
            game.contentWindow.postMessage(msg);
        }
    }
}

function handleMessage(e: MessageEvent) {
    console.log("Received DC message:" + e.data);

    sendIframeMessage(e.data);
};

