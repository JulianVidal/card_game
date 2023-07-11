import { Card } from "./cards";
import { displayPlayerHand, setup } from "./display";
import { GameGuest, Player, State } from "./game";

const game = new GameGuest();
let deckResolve: (value: number | PromiseLike<number>) => void;

window.addEventListener("message", receiveMessage);

function receiveMessage({ data }: MessageEvent) {
    console.log(`Guest Received from window ${data}`);
    const [cmd, arg] = data.split(/ (.*)/s);

    switch (cmd) {
        case "start":
            setup(game.player, handleDeckClick, handleNextClick);
            console.log("Guest Started");
            break;
        case "hand":
            game.player.hand = JSON.parse(arg);
            console.log("Received Hand");
            console.log("Actual player", game.player.hand);

            displayPlayerHand(game.player);
            break;
        case "deck":
            console.log("Received Deck pop");
            const card: Card = parseInt(arg);
            if (deckResolve !== undefined) {
                deckResolve(card);
            }
            break;

        case "next":
            console.log("Received next");
            game.player.addReserve(parseInt(arg));
            game.player.state = State.Choose;
            displayPlayerHand(game.player);
            break;
    }
}

const sendMessage = window.parent.postMessage;

async function handleDeckClick(_e: MouseEvent, player: Player) {

    function popDeck(): Promise<number> {
        sendMessage("pop");
        console.log("Sent command pop");
        return new Promise((resolve, _) => {
            deckResolve = resolve;
        });
    }

    try {
        if (player.state === State.Choose) {
            const card = await popDeck();
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

            sendMessage("next " + card);
            console.log("Sent command next");

            displayPlayerHand(player);
        }
    } catch (err) {
        console.error(`Failed to leave card. ${err}`);
    }
}
