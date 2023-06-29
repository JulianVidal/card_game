import { Rank, Suit, createCard, getSVG, getString, shuffle } from "./cards";
import { Player, Game, State } from "./game";

const game = new Game(2);
game.deal();
game.players[0].state = State.Choose;

console.log(getString(game.players[0].hand[0]));
dipslayPlayerHand(game.players[0]);

const deckElement = document.getElementById("deck");
deckElement?.addEventListener("click", handleDeckClick);

const reserveElement = document.getElementById("reserve");
reserveElement?.addEventListener("click", handleReserveClick);

function handleReserveClick() {
    game.players[0].choose(game.players[0].reserve);
}

function handleDeckClick() {
    game.players[0].choose(game.deck);
}

function dipslayPlayerHand(player: Player) {
    const gameElement = document.getElementById("game");

    const handElement = document.createElement("div");
    handElement.setAttribute("class", "hand hhand");

    for (let i = 0; i < player.hand.length; i++) {
        addCardView(getSVG(player.hand[i]), handElement, i);
    }
    if (gameElement !== null) {
        gameElement.appendChild(handElement);
    } else {
        throw new Error("Game div not found");
    }
}

let selectedElement: HTMLImageElement | null = null;
function addCardView(card: String, handElement: HTMLElement, index: number) {
    const cardImg = document.createElement("img");
    cardImg.setAttribute('src', 'cards/' + card + '.svg');
    cardImg.setAttribute('class', 'card');
    cardImg.setAttribute('data-index', `${index}`);
    cardImg.addEventListener('click', handleClick);
    handElement?.appendChild(cardImg);
}

function handleClick(e: MouseEvent) {
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
    [game.players[0].hand[index], game.players[0].hand[jindex]] = [game.players[0].hand[jindex], game.players[0].hand[index]]


    selectedElement.classList.remove("selected-card");
    selectedElement = null;
}

function timer(anon: Function) {
    const Trials = 100;
    const start = performance.now();

    for (let i = 0; i < Trials; i++) {
        anon();
    }

    const end = performance.now();
    console.log(`Execution time: ${(end - start) / Trials} ms`);
}

