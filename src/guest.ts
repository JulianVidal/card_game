import { displayPlayerHand } from "./display";
import { GameGuest, Player } from "./game";

let game: GameGuest;
window.addEventListener("message", receiveMessage, false);

function receiveMessage({ data }: MessageEvent) {
    console.log(`Received from window ${data}`);
    const [cmd, arg] = data.split(/ (.*)/s);

    switch (cmd) {
        case "start":
            game = new GameGuest();
            console.log("Guest Started");
            break;
        case "hand":
            if (game) {
                game.player.hand = JSON.parse(arg);
                console.log("Hand received");
                console.log("Actual player", game.player.hand);

                displayPlayerHand(game.player)
            }
            break;
    }
}

const sendMessage = window.parent.postMessage;
