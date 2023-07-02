import { displayPlayerHand, setup } from "./display";
import { Player, Game, State } from "./game";

let game;

window.addEventListener("message", receiveMessage, false);

function receiveMessage({ data }: MessageEvent) {
    console.log(`Received from window ${data}`);

    switch (data) {
        case "start":
            game = new Game(2);
            setup(game, "./cards");
            sendMessage("hand " + JSON.stringify(game.players[1].hand));
            console.log("Started and sent hand");

            displayPlayerHand(game.player);

            console.log(JSON.stringify(game));
        break;
    }
}

const sendMessage = window.parent.postMessage;




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
