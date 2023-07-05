import { getSVG } from "./cards";
import { Player } from "./game";


export function setup(player: Player, handleDeckClick: Function, handleNextClick: Function) {
    const deckElement = document.getElementById("deck");
    deckElement?.addEventListener("click", e => handleDeckClick(e, player));

    const reserveElement = document.getElementById("reserve");
    reserveElement?.addEventListener("click", e => handleReserveClick(e, player));

    const nextElement = document.getElementById("next");
    nextElement?.addEventListener("click", e => {
        handleNextClick(e, player, selectedElement);
        if (selectedElement !== null) {
            selectedElement.classList.remove("selected-card");
            selectedElement = null;
        }
    });

    const cardElements = document.querySelectorAll("#player>img");
    for (let i = 0; i < cardElements.length; i++) {
        const cardElement = cardElements[i] as HTMLImageElement;
        cardElement.addEventListener('click', e => handleClick(e, player));
    }
}

function handleReserveClick(_e: MouseEvent, player: Player) {
    try {
        player.choose(player.reserve.pop());
        displayPlayerHand(player);
    } catch (err) {
        console.error(`Failed to get card from reserve. ${err}`);
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
function handleClick(e: MouseEvent, player: Player) {
    e.stopPropagation();
    e.preventDefault();

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
    [player.hand[index], player.hand[jindex]] = [player.hand[jindex], player.hand[index]]


    selectedElement.classList.remove("selected-card");
    selectedElement = null;
}


