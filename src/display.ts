import { getSVG } from "./cards";
import { Game, Player } from "./game";


export function setup(game: Game) {
    const deckElement = document.getElementById("deck");
    deckElement?.addEventListener("click", e => handleDeckClick(e, game));

    const reserveElement = document.getElementById("reserve");
    reserveElement?.addEventListener("click", e => handleReserveClick(e, game));

    const nextElement = document.getElementById("next");
    nextElement?.addEventListener("click", e => handleNextClick(e, game));

    const cardElements = document.querySelectorAll("#player>img");
    for (let i = 0; i < cardElements.length; i++) {
        const cardElement = cardElements[i] as HTMLImageElement;
        cardElement.addEventListener('click', e => handleClick(e, game));
    }
}

function handleNextClick(_e: MouseEvent, game: Game) {
    try {
        if (selectedElement !== null) {
            const index = parseInt(selectedElement.dataset.index || "-1");
            const card = game.player.leave(index);

            game.nextPlayer(card);

            displayPlayerHand(game.player);
        }
    } catch (err) {
        console.error(`Failed to leave card. ${err}`);
    }
}

function handleReserveClick(_e: MouseEvent, game: Game) {
    try {
        game.player.choose(game.player.reserve.pop());
        displayPlayerHand(game.player);
    } catch (err) {
        console.error(`Failed to get card from reserve. ${err}`);
    }
}

function handleDeckClick(_e: MouseEvent, game: Game) {
    try {
        game.player.choose(game.deck.pop());
        displayPlayerHand(game.player);
    } catch (err) {
        console.error(`Failed to get card from deck. ${err}`);
    }
}


export function displayPlayerHand(player: Player) {
    const cardElements = document.querySelectorAll("#player>img");

    if (cardElements !== undefined) {
        for (let i = 0; i < 11; i++) {
            const card = player.hand[i];
            const cardElement = cardElements[i] as HTMLImageElement;
            if (card !== undefined) {
                cardElement.src = "./cards/" + getSVG(card) + ".svg";
                cardElement.style.visibility = "";
            } else {
                cardElement.style.visibility = "hidden";
            }
        }
    } else {
        throw new Error("Cards to replace not found");
    }

}

let selectedElement: HTMLImageElement | null = null;
function handleClick(e: MouseEvent, game: Game) {
    const target: HTMLImageElement = e.target as HTMLImageElement;
    if (selectedElement === null) {
        selectedElement = target;
        selectedElement.classList.add("selected-card");
        return;
    }

    if (selectedElement === target) {
        selectedElement.classList.remove("selected-card");
        selectedElement = null;
        return;
    }

    [selectedElement.src, target.src] = [target.src, selectedElement.src]

    const index = parseInt(selectedElement.dataset.index || "0");
    const jindex = parseInt(target.dataset.index || "0");
    [game.player.hand[index], game.player.hand[jindex]] = [game.player.hand[jindex], game.player.hand[index]]


    selectedElement.classList.remove("selected-card");
    selectedElement = null;
}

