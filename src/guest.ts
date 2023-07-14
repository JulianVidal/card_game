import { Card } from "./cards";
import { displayPlayerHand, setup } from "./display";
import { Player, State } from "./game";

let player: Player;
let deckResolve: (value: number | PromiseLike<number>) => void;

window.addEventListener("message", receiveMessage);

function receiveMessage({ data }: MessageEvent) {
    console.log(`Guest Received from window ${data}`);
    const [cmd, arg] = data.split(/ (.*)/s);

    switch (cmd) {
        case "start":
            player = new Player();
            setup(player, handleDeckClick, handleNextClick);
            console.log("Guest Started");
            break;

        case "setup":
            player.hand = JSON.parse(arg);
            console.log("Received Hand");
            console.log("Actual player", player.hand);

            displayPlayerHand(player);
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
            player.addReserve(parseInt(arg));
            player.state = State.Choose;
            displayPlayerHand(player);
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
