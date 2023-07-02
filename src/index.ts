import { displayPlayerHand, setup } from "./display";
import { Player, Game, State } from "./game";

const game = new Game(2);

window.addEventListener("message", receiveMessage, false);

function receiveMessage(event: MessageEvent) {
    console.log("iframe", event);
    setup(game);
    displayPlayerHand(game.player);
}

function sendMessage(msg: string) {
    window.parent.postMessage("Hello");
}

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
