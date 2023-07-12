import { getSVG } from "./cards";
import { Player } from "./game";


export function setup(player: Player, handleDeckClick: Function, handleNextClick: Function) {
    const deckElement = document.getElementById("deck");
    deckElement?.addEventListener("click", e => {

        const cardElement = document.querySelector("#player .card[data-index='10']");
        if (cardElement) {
            const group = document.querySelectorAll("#player .group")[2];
            group.appendChild(cardElement);
        }

        handleDeckClick(e, player);

        if (player.checkWin()) {
            console.log("WON");
            const winElement = document.getElementById("win");
            if (winElement) {
                winElement.innerHTML = "You Won"
            }
        } else {
            console.log("Lost or not");
        }
    });

    const reserveElement = document.getElementById("reserve");
    reserveElement?.addEventListener("click", e => {

        const cardElement = document.querySelector("#player .card[data-index='10']");
        if (cardElement) {
            const group = document.querySelectorAll("#player .group")[2];
            group.appendChild(cardElement);
        }

        handleReserveClick(e, player);

        if (player.checkWin()) {
            console.log("WON");
            const winElement = document.getElementById("win");
            if (winElement) {
                winElement.innerHTML = "You Won"
            }
        } else {
            console.log("Lost or not");
        }
    });

    const nextElement = document.getElementById("next");
    nextElement?.addEventListener("click", e => {
        handleNextClick(e, player, selectedElement);

        if (selectedElement !== null) {

            const cardElements = document.querySelectorAll("#player img");
            const index = parseInt(selectedElement.dataset.index || "-1");
            for (let i = index + 1; i < cardElements.length; i++) {
                const cardElement = cardElements[i] as HTMLImageElement;
                cardElement.dataset.index = `${i - 1}`;
            }

            const group = document.querySelectorAll("#player .group")[2];
            const newCard = document.createElement("img");

            newCard.dataset.index = "10";
            newCard.style.display = "none";
            group.appendChild(newCard);

            selectedElement.classList.remove("selected-card");
            selectedElement = null;
        }


    });

    const cardElements = document.querySelectorAll("#player img");
    for (let i = 0; i < cardElements.length; i++) {
        const cardElement = cardElements[i] as HTMLImageElement;
        cardElement.addEventListener('click', e => handleClick(e, player));
    }

    const groupElements = document.querySelectorAll("#player .group");
    for (let i = 0; i < groupElements.length; i++) {
        const groupElement = groupElements[i] as HTMLDivElement;
        groupElement.addEventListener('click', e => handleGroupClick(e));
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
    const cardElements = document.querySelectorAll("#player img");

    if (cardElements !== undefined) {
        for (let i = 0; i < cardElements.length; i++) {
            const cardElement = cardElements[i] as HTMLImageElement;
            const index = parseInt(cardElement.dataset.index || "-1");
            const card = player.hand[index];

            if (card !== undefined) {
                cardElement.src = "./cards/" + getSVG(card) + ".svg";

                if (cardElement.dataset.index === "10") {
                    cardElement.style.display = "";
                    cardElement.classList.add('card');
                }
            }

        }
    } else {
        throw new Error("Cards to replace not found");
    }

    const reserve = player.reserve[player.reserve.length - 1];
    const reserveElement = document.getElementById("reserve") as HTMLImageElement;
    if (reserveElement) {
        if (reserve) {
            reserveElement.src = "./cards/" + getSVG(reserve) + ".svg";
        } else { 
            reserveElement.src = "./cards/transparent.png";
        }
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

    const group = target.parentNode as HTMLDivElement;
    if (group?.querySelectorAll(".card").length < 5 || group === selectedElement.parentNode) {
        group?.insertBefore(selectedElement, target);
    }

    selectedElement.classList.remove("selected-card");
    selectedElement = null;
}

function handleGroupClick(e: MouseEvent) {
    if (selectedElement === null) return;


    const group = e.target as HTMLDivElement;
    if (group?.querySelectorAll(".card").length < 5) {
        group?.appendChild(selectedElement);
    }
    selectedElement.classList.remove("selected-card");
    selectedElement = null;
}
