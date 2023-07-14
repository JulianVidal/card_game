import { displayPlayerHand, setup } from "./display";
import { Game, Player, State } from "./game";

let game: Game;
window.addEventListener("message", receiveMessage, false);

function receiveMessage({ data }: MessageEvent) {
    console.log(`Host Received from window ${data}`);
    const [cmd, arg] = data.split(/ (.*)/s);

    switch (cmd) {
        case "start":
            game = new Game(parseInt(arg));
            displayPlayerHand(game.player);
            setup(game.player, handleDeckClick, handleNextClick);

            for (let i = 1; i < game.players.length; i++) {
                sendMessage(i, `setup ${JSON.stringify(game.players[i].hand)}`);
                console.log("Sent " + i + " setup");
            }

            console.log("Host Started");
            displayPlayerHand(game.player);
            console.log(JSON.stringify(game));
            break;

        case "pop":
            sendMessage(game.playerIndex, "deck " + game.deck.pop());
            console.log("Sent deck pop");
            break;

        case "next":
            console.log("Received next");

            game.nextPlayer();

            if (game.playerIndex === 0) {
                game.player.addReserve(parseInt(arg));
                game.player.state = State.Choose;
                displayPlayerHand(game.player);
            } else {
                sendMessage(game.playerIndex, "next " + arg);
            }

            break;
    }
}

const sendMessage = (player: string | number, msg: string) => {
    window.parent.postMessage(`${player} ${msg}`);
}

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

            game.nextPlayer();
            sendMessage(game.playerIndex, "next " + card);
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
