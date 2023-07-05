import { displayPlayerHand, setup } from "./display";
import { Game, Player, State } from "./game";

const game = new Game(2);
window.addEventListener("message", receiveMessage, false);

function receiveMessage({ data }: MessageEvent) {
    console.log(`Host Received from window ${data}`);
    const [cmd, arg] = data.split(/ (.*)/s);

    switch (cmd) {
        case "start":
            setup(game.player, handleDeckClick, handleNextClick);
            sendMessage("hand " + JSON.stringify(game.players[1].hand));
            console.log("Host Started");
            console.log("Sent hand");

            displayPlayerHand(game.player);
            console.log(JSON.stringify(game));
            break;

        case "pop":
            sendMessage("deck " + game.deck.pop());
            console.log("Sent deck pop");
            break;

        case "next":
            game.nextPlayer(parseInt(arg));
            displayPlayerHand(game.player);
            break;
    }
}

const sendMessage = window.parent.postMessage;



function handleDeckClick(_e: MouseEvent, player: Player) {
    try {
        if (player.state === State.Choose) {
            const card = game.deck.pop();
            player.choose(card);
            displayPlayerHand(player);
        }
    } catch (err) {
        console.error(`Failed to get card from deck. ${err}`);
    }
}

function handleNextClick(_e: MouseEvent, player: Player, selectedElement: HTMLImageElement | null) {
    try {
        if (selectedElement !== null) {
            const index = parseInt(selectedElement.dataset.index || "-1");
            const card = player.leave(index);

            game.nextPlayer(card);
            sendMessage("next " + card);

            displayPlayerHand(player);
        }
    } catch (err) {
        console.error(`Failed to leave card. ${err}`);
    }
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
