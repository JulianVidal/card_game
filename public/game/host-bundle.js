/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cards.ts":
/*!**********************!*\
  !*** ./src/cards.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


// Card Bit Structure
// 
// 0001 Clubs
// 0010 Diamonds
// 0100 Hearts
// 1000 Spades
//
// 10000000000001 Ace
// 00000000000010 Two 
// 00000000000100 Three 
//
// Card 2 of Clubs
// 00000000000010 1000
//
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.swap = exports.shuffle = exports.createDeck = exports.createEmptyDeck = exports.getSVG = exports.getString = exports.getRank = exports.getSuit = exports.createCard = exports.SuitEntries = exports.RankEntries = exports.Rank = exports.Suit = void 0;
var Suit;
(function (Suit) {
    Suit[Suit["Clubs"] = 1] = "Clubs";
    Suit[Suit["Diamonds"] = 2] = "Diamonds";
    Suit[Suit["Hearts"] = 4] = "Hearts";
    Suit[Suit["Spades"] = 8] = "Spades";
})(Suit || (exports.Suit = Suit = {}));
var Rank;
(function (Rank) {
    Rank[Rank["Ace"] = 131088] = "Ace";
    Rank[Rank["Two"] = 32] = "Two";
    Rank[Rank["Three"] = 64] = "Three";
    Rank[Rank["Four"] = 128] = "Four";
    Rank[Rank["Five"] = 256] = "Five";
    Rank[Rank["Six"] = 512] = "Six";
    Rank[Rank["Seven"] = 1024] = "Seven";
    Rank[Rank["Eight"] = 2048] = "Eight";
    Rank[Rank["Nine"] = 4096] = "Nine";
    Rank[Rank["Ten"] = 8192] = "Ten";
    Rank[Rank["Jack"] = 16384] = "Jack";
    Rank[Rank["Queen"] = 32768] = "Queen";
    Rank[Rank["King"] = 65536] = "King";
})(Rank || (exports.Rank = Rank = {}));
const SuitToSvg = {
    "Clubs": "C",
    "Diamonds": "D",
    "Hearts": "H",
    "Spades": "S",
};
const RankToSvg = {
    "Ace": "A",
    "Two": "2",
    "Three": "3",
    "Four": "4",
    "Five": "5",
    "Six": "6",
    "Seven": "7",
    "Eight": "8",
    "Nine": "9",
    "Ten": "10",
    "Jack": "J",
    "Queen": "Q",
    "King": "K",
};
exports.RankEntries = Object.entries(Rank).slice(13);
exports.SuitEntries = Object.entries(Suit).slice(4);
function createCard(rank, suit) {
    return rank | suit;
}
exports.createCard = createCard;
function getSuit(card) {
    const suitb = ((1 << 4) - 1) & card;
    for (let [name, suit] of exports.SuitEntries) {
        if (suit === suitb)
            return name;
    }
    throw new Error("Suit not found");
}
exports.getSuit = getSuit;
function getRank(card) {
    const rankb = (((1 << 14) - 1) << 4) & card;
    for (let [name, rank] of exports.RankEntries) {
        if (rank === rankb)
            return name;
    }
    throw new Error("Rank not found");
}
exports.getRank = getRank;
function getString(card) {
    return `${getSuit(card)} ${getRank(card)}`;
}
exports.getString = getString;
function getSVG(card) {
    const [suit, rank] = getString(card).split(" ");
    let svg = "";
    svg += RankToSvg[rank];
    svg += SuitToSvg[suit];
    return svg;
}
exports.getSVG = getSVG;
function createEmptyDeck() {
    return [];
}
exports.createEmptyDeck = createEmptyDeck;
function createDeck(size) {
    let deck = [];
    for (let s = 0; s < size; s++) {
        for (let [suit, _] of exports.SuitEntries) {
            for (let [rank, _] of exports.RankEntries) {
                deck.push(createCard(Rank[rank], Suit[suit]));
            }
        }
    }
    return deck;
}
exports.createDeck = createDeck;
function shuffle(deck) {
    let current_index = deck.length;
    while (current_index != 0) {
        let random_index = Math.floor(Math.random() * deck.length);
        current_index -= 1;
        swap(deck, current_index, random_index);
    }
}
exports.shuffle = shuffle;
function swap(deck, current_index, random_index) {
    [deck[current_index], deck[random_index]] = [deck[random_index], deck[current_index]];
}
exports.swap = swap;


/***/ }),

/***/ "./src/display.ts":
/*!************************!*\
  !*** ./src/display.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.displayPlayerHand = exports.setup = void 0;
const cards_1 = __webpack_require__(/*! ./cards */ "./src/cards.ts");
const game_1 = __webpack_require__(/*! ./game */ "./src/game.ts");
function setup(player, handleDeckClick, handleNextClick) {
    const deckElement = document.getElementById("deck");
    deckElement === null || deckElement === void 0 ? void 0 : deckElement.addEventListener("click", e => {
        if (player.state === game_1.State.Choose) {
            handleDeckClick(e, player);
            const cardElement = document.querySelector("#player .card[data-index='10']");
            if (cardElement) {
                const group = document.querySelectorAll("#player .group")[2];
                group.appendChild(cardElement);
            }
            if (player.checkWin()) {
                console.log("WON");
                const winElement = document.getElementById("win");
                if (winElement) {
                    winElement.innerHTML = "You Won";
                }
            }
            else {
                console.log("Lost or not");
            }
        }
    });
    const reserveElement = document.getElementById("reserve");
    reserveElement === null || reserveElement === void 0 ? void 0 : reserveElement.addEventListener("click", e => {
        if (player.state === game_1.State.Choose) {
            handleReserveClick(e, player);
            const cardElement = document.querySelector("#player .card[data-index='10']");
            if (cardElement) {
                const group = document.querySelectorAll("#player .group")[2];
                group.appendChild(cardElement);
            }
            if (player.checkWin()) {
                console.log("WON");
                const winElement = document.getElementById("win");
                if (winElement) {
                    winElement.innerHTML = "You Won";
                }
            }
            else {
                console.log("Lost or not");
            }
        }
    });
    const nextElement = document.getElementById("next");
    nextElement === null || nextElement === void 0 ? void 0 : nextElement.addEventListener("click", e => {
        if (player.state === game_1.State.Leave) {
            if (selectedElement !== null) {
                handleNextClick(e, player, selectedElement);
                const cardElements = document.querySelectorAll("#player img");
                const index = parseInt(selectedElement.dataset.index || "-1");
                for (let i = 0; i < cardElements.length; i++) {
                    const cardElement = cardElements[i];
                    const jndex = parseInt(cardElement.dataset.index || "-1");
                    if (jndex > index) {
                        cardElement.dataset.index = `${jndex - 1}`;
                    }
                    if (jndex === index) {
                        cardElement.remove();
                    }
                }
                const group = document.querySelectorAll("#player .group")[2];
                const newCard = document.createElement("img");
                newCard.dataset.index = "10";
                newCard.style.display = "none";
                newCard.addEventListener('click', e => handleClick(e, player));
                group.appendChild(newCard);
                selectedElement.classList.remove("selected-card");
                selectedElement = null;
                displayPlayerHand(player);
            }
        }
    });
    const cardElements = document.querySelectorAll("#player img");
    for (let i = 0; i < cardElements.length; i++) {
        const cardElement = cardElements[i];
        cardElement.addEventListener('click', e => handleClick(e, player));
    }
    const groupElements = document.querySelectorAll("#player .group");
    for (let i = 0; i < groupElements.length; i++) {
        const groupElement = groupElements[i];
        groupElement.addEventListener('click', e => handleGroupClick(e));
    }
}
exports.setup = setup;
function handleReserveClick(_e, player) {
    try {
        player.choose(player.reserve.pop());
        displayPlayerHand(player);
    }
    catch (err) {
        console.error(`Failed to get card from reserve. ${err}`);
    }
}
function displayPlayerHand(player) {
    const cardElements = document.querySelectorAll("#player img");
    if (cardElements !== undefined) {
        for (let i = 0; i < cardElements.length; i++) {
            const cardElement = cardElements[i];
            const index = parseInt(cardElement.dataset.index || "-1");
            const card = player.hand[index];
            if (card !== undefined) {
                cardElement.src = "./cards/" + (0, cards_1.getSVG)(card) + ".svg";
                if (index === 10) {
                    cardElement.style.display = "";
                    cardElement.classList.add('card');
                }
            }
        }
    }
    else {
        throw new Error("Cards to replace not found");
    }
    const reserve = player.reserve[player.reserve.length - 1];
    const reserveElement = document.getElementById("reserve");
    if (reserveElement) {
        if (reserve) {
            reserveElement.src = "./cards/" + (0, cards_1.getSVG)(reserve) + ".svg";
        }
        else {
            reserveElement.src = "./cards/transparent.png";
        }
    }
    const deckElement = document.getElementById("deck");
    const leaveElement = document.getElementById("next");
    const white = "#F6F4F4";
    const green = "#00c86c";
    if (deckElement && reserveElement && leaveElement) {
        if (player.state === game_1.State.Choose) {
            deckElement.style.outlineColor = green;
            reserveElement.style.borderColor = green;
            leaveElement.style.borderColor = white;
        }
        if (player.state === game_1.State.Leave) {
            deckElement.style.outlineColor = white;
            reserveElement.style.borderColor = white;
            leaveElement.style.borderColor = green;
        }
        if (player.state === game_1.State.Wait) {
            deckElement.style.outlineColor = white;
            reserveElement.style.borderColor = white;
            leaveElement.style.borderColor = white;
        }
    }
}
exports.displayPlayerHand = displayPlayerHand;
let selectedElement = null;
function handleClick(e, player) {
    e.stopPropagation();
    e.preventDefault();
    const target = e.target;
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
    const group = target.parentNode;
    if ((group === null || group === void 0 ? void 0 : group.querySelectorAll(".card").length) < 5 || group === selectedElement.parentNode) {
        group === null || group === void 0 ? void 0 : group.insertBefore(selectedElement, target);
    }
    selectedElement.classList.remove("selected-card");
    selectedElement = null;
}
function handleGroupClick(e) {
    if (selectedElement === null)
        return;
    const group = e.target;
    if ((group === null || group === void 0 ? void 0 : group.querySelectorAll(".card").length) < 5) {
        group === null || group === void 0 ? void 0 : group.appendChild(selectedElement);
    }
    selectedElement.classList.remove("selected-card");
    selectedElement = null;
}


/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Game = exports.Player = exports.State = void 0;
const cards_1 = __webpack_require__(/*! ./cards */ "./src/cards.ts");
var State;
(function (State) {
    State[State["Wait"] = 0] = "Wait";
    State[State["Choose"] = 1] = "Choose";
    State[State["Leave"] = 2] = "Leave";
})(State || (exports.State = State = {}));
class Player {
    constructor() {
        this.hand = [];
        this.reserve = [];
        this.state = State.Wait;
    }
    add(card) {
        if (this.hand.length > 11) {
            throw new Error("Hand of player is too big");
        }
        this.hand.push(card);
    }
    addReserve(card) {
        this.reserve.push(card);
    }
    checkWin() {
        return this.checkWinHelp([], [], [], [...this.hand]);
    }
    checkWinHelp(a, b, c, deck) {
        if (this.checkGroups(a, b, c)) {
            return true;
        }
        if (a.length > 5 || b.length > 4 || c.length > 3)
            return false;
        if (a.length === 5 && !this.checkGroup(a))
            return false;
        if (b.length === 4 && !this.checkGroup(b))
            return false;
        if (c.length === 3 && !this.checkGroup(c))
            return false;
        const card = deck.pop();
        if (card !== undefined) {
            if (this.checkWinHelp([...a, card], b, c, [...deck]))
                return true;
            if (this.checkWinHelp(a, [...b, card], c, [...deck]))
                return true;
            if (this.checkWinHelp(a, b, [...c, card], [...deck]))
                return true;
        }
        return false;
    }
    checkGroups(a, b, c) {
        if (!this.checkSize(a.length, b.length, c.length))
            return false;
        return this.checkGroup(a) && this.checkGroup(b) && this.checkGroup(c);
    }
    checkGroup(a) {
        return this.checkSequence(a) || this.checkStair(a);
    }
    checkSequence(a) {
        if (a.length < 3)
            return false;
        let test = ((1 << 14) - 1) << 4;
        for (let c of a) {
            test &= c;
        }
        return test !== 0;
    }
    checkStair(a) {
        if (a.length < 3)
            return false;
        let test = 0;
        for (let c of a) {
            test |= c;
        }
        let suitTest = ((1 << 4) - 1) & test;
        if (suitTest === 0 ||
            (suitTest & (suitTest - 1)) !== 0)
            return false;
        test &= ((1 << 14) - 1) << 4;
        for (let i = 1; i < a.length; i++) {
            test &= (test << 1);
        }
        return test !== 0;
    }
    checkSize(a, b, c) {
        return a + b + c == 11 && a >= 3 && b >= 3 && c >= 3;
    }
    choose(card) {
        if (this.state !== State.Choose) {
            throw new Error("Player not in choose state");
        }
        if (card !== undefined) {
            this.hand.push(card);
            this.state = State.Leave;
        }
        else {
            throw new Error("No cards in argument");
        }
    }
    leave(index) {
        if (this.state !== State.Leave) {
            throw new Error("Player not in leave state");
        }
        if (index < 0 || index > this.hand.length) {
            throw new Error("Index out of bounds");
        }
        const [card] = this.hand.splice(index, 1);
        this.state = State.Wait;
        return card;
    }
}
exports.Player = Player;
class Game {
    ;
    constructor(numberPlayers) {
        this.players = [];
        this.deck = [];
        this.playerIndex = 0;
        if (numberPlayers < 2)
            throw new Error("Game needs atleast 2 player");
        for (let i = 0; i < numberPlayers; i++) {
            this.players.push(new Player());
        }
        this.player = this.players[this.playerIndex];
        this.deck = (0, cards_1.createDeck)(1);
        (0, cards_1.shuffle)(this.deck);
        this.deal();
        this.player.state = State.Choose;
    }
    deal() {
        for (let i = 0; i < 10; i++) {
            for (let player of this.players) {
                const card = this.deck.pop();
                if (card) {
                    player.add(card);
                }
                else {
                    throw new Error("No cards left to deal");
                }
            }
        }
    }
    nextPlayer() {
        this.playerIndex = (this.playerIndex + 1) % this.players.length;
        this.player = this.players[this.playerIndex];
    }
}
exports.Game = Game;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/host.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const display_1 = __webpack_require__(/*! ./display */ "./src/display.ts");
const game_1 = __webpack_require__(/*! ./game */ "./src/game.ts");
let game;
game = new game_1.Game(2);
(0, display_1.displayPlayerHand)(game.player);
window.addEventListener("message", receiveMessage, false);
function receiveMessage({ data }) {
    console.log(`Host Received from window ${data}`);
    const [cmd, arg] = data.split(/ (.*)/s);
    switch (cmd) {
        case "start":
            game = new game_1.Game(parseInt(arg));
            (0, display_1.displayPlayerHand)(game.player);
            (0, display_1.setup)(game.player, handleDeckClick, handleNextClick);
            for (let i = 1; i < game.players.length; i++) {
                sendMessage(i, `setup ${JSON.stringify(game.players[i].hand)}`);
                console.log("Sent " + i + " setup");
            }
            console.log("Host Started");
            (0, display_1.displayPlayerHand)(game.player);
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
                game.player.state = game_1.State.Choose;
                (0, display_1.displayPlayerHand)(game.player);
            }
            else {
                sendMessage(game.playerIndex, "next " + arg);
            }
            break;
    }
}
const sendMessage = (player, msg) => {
    window.parent.postMessage(`${player} ${msg}`);
};
function handleDeckClick(_e, player) {
    try {
        if (player.state === game_1.State.Choose) {
            const card = game.deck.pop();
            player.choose(card);
            (0, display_1.displayPlayerHand)(player);
        }
    }
    catch (err) {
        console.error(`Failed to get card from deck. ${err}`);
    }
}
function handleNextClick(_e, player, selectedElement) {
    try {
        if (selectedElement !== null) {
            const index = parseInt(selectedElement.dataset.index || "-1");
            const card = player.leave(index);
            game.nextPlayer();
            sendMessage(game.playerIndex, "next " + card);
            (0, display_1.displayPlayerHand)(player);
        }
    }
    catch (err) {
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxJQUFJO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHdCQUF3QjtBQUM5RDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FyZF9nYW1lLy4vc3JjL2NhcmRzLnRzIiwid2VicGFjazovL2NhcmRfZ2FtZS8uL3NyYy9kaXNwbGF5LnRzIiwid2VicGFjazovL2NhcmRfZ2FtZS8uL3NyYy9nYW1lLnRzIiwid2VicGFjazovL2NhcmRfZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9zcmMvaG9zdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vIENhcmQgQml0IFN0cnVjdHVyZVxuLy8gXG4vLyAwMDAxIENsdWJzXG4vLyAwMDEwIERpYW1vbmRzXG4vLyAwMTAwIEhlYXJ0c1xuLy8gMTAwMCBTcGFkZXNcbi8vXG4vLyAxMDAwMDAwMDAwMDAwMSBBY2Vcbi8vIDAwMDAwMDAwMDAwMDEwIFR3byBcbi8vIDAwMDAwMDAwMDAwMTAwIFRocmVlIFxuLy9cbi8vIENhcmQgMiBvZiBDbHVic1xuLy8gMDAwMDAwMDAwMDAwMTAgMTAwMFxuLy9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3dhcCA9IGV4cG9ydHMuc2h1ZmZsZSA9IGV4cG9ydHMuY3JlYXRlRGVjayA9IGV4cG9ydHMuY3JlYXRlRW1wdHlEZWNrID0gZXhwb3J0cy5nZXRTVkcgPSBleHBvcnRzLmdldFN0cmluZyA9IGV4cG9ydHMuZ2V0UmFuayA9IGV4cG9ydHMuZ2V0U3VpdCA9IGV4cG9ydHMuY3JlYXRlQ2FyZCA9IGV4cG9ydHMuU3VpdEVudHJpZXMgPSBleHBvcnRzLlJhbmtFbnRyaWVzID0gZXhwb3J0cy5SYW5rID0gZXhwb3J0cy5TdWl0ID0gdm9pZCAwO1xudmFyIFN1aXQ7XG4oZnVuY3Rpb24gKFN1aXQpIHtcbiAgICBTdWl0W1N1aXRbXCJDbHVic1wiXSA9IDFdID0gXCJDbHVic1wiO1xuICAgIFN1aXRbU3VpdFtcIkRpYW1vbmRzXCJdID0gMl0gPSBcIkRpYW1vbmRzXCI7XG4gICAgU3VpdFtTdWl0W1wiSGVhcnRzXCJdID0gNF0gPSBcIkhlYXJ0c1wiO1xuICAgIFN1aXRbU3VpdFtcIlNwYWRlc1wiXSA9IDhdID0gXCJTcGFkZXNcIjtcbn0pKFN1aXQgfHwgKGV4cG9ydHMuU3VpdCA9IFN1aXQgPSB7fSkpO1xudmFyIFJhbms7XG4oZnVuY3Rpb24gKFJhbmspIHtcbiAgICBSYW5rW1JhbmtbXCJBY2VcIl0gPSAxMzEwODhdID0gXCJBY2VcIjtcbiAgICBSYW5rW1JhbmtbXCJUd29cIl0gPSAzMl0gPSBcIlR3b1wiO1xuICAgIFJhbmtbUmFua1tcIlRocmVlXCJdID0gNjRdID0gXCJUaHJlZVwiO1xuICAgIFJhbmtbUmFua1tcIkZvdXJcIl0gPSAxMjhdID0gXCJGb3VyXCI7XG4gICAgUmFua1tSYW5rW1wiRml2ZVwiXSA9IDI1Nl0gPSBcIkZpdmVcIjtcbiAgICBSYW5rW1JhbmtbXCJTaXhcIl0gPSA1MTJdID0gXCJTaXhcIjtcbiAgICBSYW5rW1JhbmtbXCJTZXZlblwiXSA9IDEwMjRdID0gXCJTZXZlblwiO1xuICAgIFJhbmtbUmFua1tcIkVpZ2h0XCJdID0gMjA0OF0gPSBcIkVpZ2h0XCI7XG4gICAgUmFua1tSYW5rW1wiTmluZVwiXSA9IDQwOTZdID0gXCJOaW5lXCI7XG4gICAgUmFua1tSYW5rW1wiVGVuXCJdID0gODE5Ml0gPSBcIlRlblwiO1xuICAgIFJhbmtbUmFua1tcIkphY2tcIl0gPSAxNjM4NF0gPSBcIkphY2tcIjtcbiAgICBSYW5rW1JhbmtbXCJRdWVlblwiXSA9IDMyNzY4XSA9IFwiUXVlZW5cIjtcbiAgICBSYW5rW1JhbmtbXCJLaW5nXCJdID0gNjU1MzZdID0gXCJLaW5nXCI7XG59KShSYW5rIHx8IChleHBvcnRzLlJhbmsgPSBSYW5rID0ge30pKTtcbmNvbnN0IFN1aXRUb1N2ZyA9IHtcbiAgICBcIkNsdWJzXCI6IFwiQ1wiLFxuICAgIFwiRGlhbW9uZHNcIjogXCJEXCIsXG4gICAgXCJIZWFydHNcIjogXCJIXCIsXG4gICAgXCJTcGFkZXNcIjogXCJTXCIsXG59O1xuY29uc3QgUmFua1RvU3ZnID0ge1xuICAgIFwiQWNlXCI6IFwiQVwiLFxuICAgIFwiVHdvXCI6IFwiMlwiLFxuICAgIFwiVGhyZWVcIjogXCIzXCIsXG4gICAgXCJGb3VyXCI6IFwiNFwiLFxuICAgIFwiRml2ZVwiOiBcIjVcIixcbiAgICBcIlNpeFwiOiBcIjZcIixcbiAgICBcIlNldmVuXCI6IFwiN1wiLFxuICAgIFwiRWlnaHRcIjogXCI4XCIsXG4gICAgXCJOaW5lXCI6IFwiOVwiLFxuICAgIFwiVGVuXCI6IFwiMTBcIixcbiAgICBcIkphY2tcIjogXCJKXCIsXG4gICAgXCJRdWVlblwiOiBcIlFcIixcbiAgICBcIktpbmdcIjogXCJLXCIsXG59O1xuZXhwb3J0cy5SYW5rRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKFJhbmspLnNsaWNlKDEzKTtcbmV4cG9ydHMuU3VpdEVudHJpZXMgPSBPYmplY3QuZW50cmllcyhTdWl0KS5zbGljZSg0KTtcbmZ1bmN0aW9uIGNyZWF0ZUNhcmQocmFuaywgc3VpdCkge1xuICAgIHJldHVybiByYW5rIHwgc3VpdDtcbn1cbmV4cG9ydHMuY3JlYXRlQ2FyZCA9IGNyZWF0ZUNhcmQ7XG5mdW5jdGlvbiBnZXRTdWl0KGNhcmQpIHtcbiAgICBjb25zdCBzdWl0YiA9ICgoMSA8PCA0KSAtIDEpICYgY2FyZDtcbiAgICBmb3IgKGxldCBbbmFtZSwgc3VpdF0gb2YgZXhwb3J0cy5TdWl0RW50cmllcykge1xuICAgICAgICBpZiAoc3VpdCA9PT0gc3VpdGIpXG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU3VpdCBub3QgZm91bmRcIik7XG59XG5leHBvcnRzLmdldFN1aXQgPSBnZXRTdWl0O1xuZnVuY3Rpb24gZ2V0UmFuayhjYXJkKSB7XG4gICAgY29uc3QgcmFua2IgPSAoKCgxIDw8IDE0KSAtIDEpIDw8IDQpICYgY2FyZDtcbiAgICBmb3IgKGxldCBbbmFtZSwgcmFua10gb2YgZXhwb3J0cy5SYW5rRW50cmllcykge1xuICAgICAgICBpZiAocmFuayA9PT0gcmFua2IpXG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUmFuayBub3QgZm91bmRcIik7XG59XG5leHBvcnRzLmdldFJhbmsgPSBnZXRSYW5rO1xuZnVuY3Rpb24gZ2V0U3RyaW5nKGNhcmQpIHtcbiAgICByZXR1cm4gYCR7Z2V0U3VpdChjYXJkKX0gJHtnZXRSYW5rKGNhcmQpfWA7XG59XG5leHBvcnRzLmdldFN0cmluZyA9IGdldFN0cmluZztcbmZ1bmN0aW9uIGdldFNWRyhjYXJkKSB7XG4gICAgY29uc3QgW3N1aXQsIHJhbmtdID0gZ2V0U3RyaW5nKGNhcmQpLnNwbGl0KFwiIFwiKTtcbiAgICBsZXQgc3ZnID0gXCJcIjtcbiAgICBzdmcgKz0gUmFua1RvU3ZnW3JhbmtdO1xuICAgIHN2ZyArPSBTdWl0VG9Tdmdbc3VpdF07XG4gICAgcmV0dXJuIHN2Zztcbn1cbmV4cG9ydHMuZ2V0U1ZHID0gZ2V0U1ZHO1xuZnVuY3Rpb24gY3JlYXRlRW1wdHlEZWNrKCkge1xuICAgIHJldHVybiBbXTtcbn1cbmV4cG9ydHMuY3JlYXRlRW1wdHlEZWNrID0gY3JlYXRlRW1wdHlEZWNrO1xuZnVuY3Rpb24gY3JlYXRlRGVjayhzaXplKSB7XG4gICAgbGV0IGRlY2sgPSBbXTtcbiAgICBmb3IgKGxldCBzID0gMDsgcyA8IHNpemU7IHMrKykge1xuICAgICAgICBmb3IgKGxldCBbc3VpdCwgX10gb2YgZXhwb3J0cy5TdWl0RW50cmllcykge1xuICAgICAgICAgICAgZm9yIChsZXQgW3JhbmssIF9dIG9mIGV4cG9ydHMuUmFua0VudHJpZXMpIHtcbiAgICAgICAgICAgICAgICBkZWNrLnB1c2goY3JlYXRlQ2FyZChSYW5rW3JhbmtdLCBTdWl0W3N1aXRdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlY2s7XG59XG5leHBvcnRzLmNyZWF0ZURlY2sgPSBjcmVhdGVEZWNrO1xuZnVuY3Rpb24gc2h1ZmZsZShkZWNrKSB7XG4gICAgbGV0IGN1cnJlbnRfaW5kZXggPSBkZWNrLmxlbmd0aDtcbiAgICB3aGlsZSAoY3VycmVudF9pbmRleCAhPSAwKSB7XG4gICAgICAgIGxldCByYW5kb21faW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkZWNrLmxlbmd0aCk7XG4gICAgICAgIGN1cnJlbnRfaW5kZXggLT0gMTtcbiAgICAgICAgc3dhcChkZWNrLCBjdXJyZW50X2luZGV4LCByYW5kb21faW5kZXgpO1xuICAgIH1cbn1cbmV4cG9ydHMuc2h1ZmZsZSA9IHNodWZmbGU7XG5mdW5jdGlvbiBzd2FwKGRlY2ssIGN1cnJlbnRfaW5kZXgsIHJhbmRvbV9pbmRleCkge1xuICAgIFtkZWNrW2N1cnJlbnRfaW5kZXhdLCBkZWNrW3JhbmRvbV9pbmRleF1dID0gW2RlY2tbcmFuZG9tX2luZGV4XSwgZGVja1tjdXJyZW50X2luZGV4XV07XG59XG5leHBvcnRzLnN3YXAgPSBzd2FwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRpc3BsYXlQbGF5ZXJIYW5kID0gZXhwb3J0cy5zZXR1cCA9IHZvaWQgMDtcbmNvbnN0IGNhcmRzXzEgPSByZXF1aXJlKFwiLi9jYXJkc1wiKTtcbmNvbnN0IGdhbWVfMSA9IHJlcXVpcmUoXCIuL2dhbWVcIik7XG5mdW5jdGlvbiBzZXR1cChwbGF5ZXIsIGhhbmRsZURlY2tDbGljaywgaGFuZGxlTmV4dENsaWNrKSB7XG4gICAgY29uc3QgZGVja0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlY2tcIik7XG4gICAgZGVja0VsZW1lbnQgPT09IG51bGwgfHwgZGVja0VsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlY2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgaWYgKHBsYXllci5zdGF0ZSA9PT0gZ2FtZV8xLlN0YXRlLkNob29zZSkge1xuICAgICAgICAgICAgaGFuZGxlRGVja0NsaWNrKGUsIHBsYXllcik7XG4gICAgICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyIC5jYXJkW2RhdGEtaW5kZXg9JzEwJ11cIik7XG4gICAgICAgICAgICBpZiAoY2FyZEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyIC5ncm91cFwiKVsyXTtcbiAgICAgICAgICAgICAgICBncm91cC5hcHBlbmRDaGlsZChjYXJkRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGxheWVyLmNoZWNrV2luKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldPTlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCB3aW5FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5cIik7XG4gICAgICAgICAgICAgICAgaWYgKHdpbkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luRWxlbWVudC5pbm5lckhUTUwgPSBcIllvdSBXb25cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvc3Qgb3Igbm90XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgcmVzZXJ2ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VydmVcIik7XG4gICAgcmVzZXJ2ZUVsZW1lbnQgPT09IG51bGwgfHwgcmVzZXJ2ZUVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlc2VydmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgaWYgKHBsYXllci5zdGF0ZSA9PT0gZ2FtZV8xLlN0YXRlLkNob29zZSkge1xuICAgICAgICAgICAgaGFuZGxlUmVzZXJ2ZUNsaWNrKGUsIHBsYXllcik7XG4gICAgICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyIC5jYXJkW2RhdGEtaW5kZXg9JzEwJ11cIik7XG4gICAgICAgICAgICBpZiAoY2FyZEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyIC5ncm91cFwiKVsyXTtcbiAgICAgICAgICAgICAgICBncm91cC5hcHBlbmRDaGlsZChjYXJkRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGxheWVyLmNoZWNrV2luKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldPTlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCB3aW5FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5cIik7XG4gICAgICAgICAgICAgICAgaWYgKHdpbkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luRWxlbWVudC5pbm5lckhUTUwgPSBcIllvdSBXb25cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvc3Qgb3Igbm90XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgbmV4dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRcIik7XG4gICAgbmV4dEVsZW1lbnQgPT09IG51bGwgfHwgbmV4dEVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5leHRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgaWYgKHBsYXllci5zdGF0ZSA9PT0gZ2FtZV8xLlN0YXRlLkxlYXZlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlTmV4dENsaWNrKGUsIHBsYXllciwgc2VsZWN0ZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3BsYXllciBpbWdcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChzZWxlY3RlZEVsZW1lbnQuZGF0YXNldC5pbmRleCB8fCBcIi0xXCIpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZEVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBqbmRleCA9IHBhcnNlSW50KGNhcmRFbGVtZW50LmRhdGFzZXQuaW5kZXggfHwgXCItMVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGpuZGV4ID4gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRFbGVtZW50LmRhdGFzZXQuaW5kZXggPSBgJHtqbmRleCAtIDF9YDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoam5kZXggPT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBncm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyIC5ncm91cFwiKVsyXTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgICAgICBuZXdDYXJkLmRhdGFzZXQuaW5kZXggPSBcIjEwXCI7XG4gICAgICAgICAgICAgICAgbmV3Q2FyZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgbmV3Q2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gaGFuZGxlQ2xpY2soZSwgcGxheWVyKSk7XG4gICAgICAgICAgICAgICAgZ3JvdXAuYXBwZW5kQ2hpbGQobmV3Q2FyZCk7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC1jYXJkXCIpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgZGlzcGxheVBsYXllckhhbmQocGxheWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGNhcmRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyIGltZ1wiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmRFbGVtZW50c1tpXTtcbiAgICAgICAgY2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGhhbmRsZUNsaWNrKGUsIHBsYXllcikpO1xuICAgIH1cbiAgICBjb25zdCBncm91cEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwbGF5ZXIgLmdyb3VwXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JvdXBFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBncm91cEVsZW1lbnQgPSBncm91cEVsZW1lbnRzW2ldO1xuICAgICAgICBncm91cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGhhbmRsZUdyb3VwQ2xpY2soZSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuc2V0dXAgPSBzZXR1cDtcbmZ1bmN0aW9uIGhhbmRsZVJlc2VydmVDbGljayhfZSwgcGxheWVyKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcGxheWVyLmNob29zZShwbGF5ZXIucmVzZXJ2ZS5wb3AoKSk7XG4gICAgICAgIGRpc3BsYXlQbGF5ZXJIYW5kKHBsYXllcik7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGdldCBjYXJkIGZyb20gcmVzZXJ2ZS4gJHtlcnJ9YCk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGlzcGxheVBsYXllckhhbmQocGxheWVyKSB7XG4gICAgY29uc3QgY2FyZEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwbGF5ZXIgaW1nXCIpO1xuICAgIGlmIChjYXJkRWxlbWVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkRWxlbWVudHNbaV07XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGNhcmRFbGVtZW50LmRhdGFzZXQuaW5kZXggfHwgXCItMVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBwbGF5ZXIuaGFuZFtpbmRleF07XG4gICAgICAgICAgICBpZiAoY2FyZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY2FyZEVsZW1lbnQuc3JjID0gXCIuL2NhcmRzL1wiICsgKDAsIGNhcmRzXzEuZ2V0U1ZHKShjYXJkKSArIFwiLnN2Z1wiO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGNhcmRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhcmRzIHRvIHJlcGxhY2Ugbm90IGZvdW5kXCIpO1xuICAgIH1cbiAgICBjb25zdCByZXNlcnZlID0gcGxheWVyLnJlc2VydmVbcGxheWVyLnJlc2VydmUubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgcmVzZXJ2ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VydmVcIik7XG4gICAgaWYgKHJlc2VydmVFbGVtZW50KSB7XG4gICAgICAgIGlmIChyZXNlcnZlKSB7XG4gICAgICAgICAgICByZXNlcnZlRWxlbWVudC5zcmMgPSBcIi4vY2FyZHMvXCIgKyAoMCwgY2FyZHNfMS5nZXRTVkcpKHJlc2VydmUpICsgXCIuc3ZnXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXNlcnZlRWxlbWVudC5zcmMgPSBcIi4vY2FyZHMvdHJhbnNwYXJlbnQucG5nXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZGVja0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlY2tcIik7XG4gICAgY29uc3QgbGVhdmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0XCIpO1xuICAgIGNvbnN0IHdoaXRlID0gXCIjRjZGNEY0XCI7XG4gICAgY29uc3QgZ3JlZW4gPSBcIiMwMGM4NmNcIjtcbiAgICBpZiAoZGVja0VsZW1lbnQgJiYgcmVzZXJ2ZUVsZW1lbnQgJiYgbGVhdmVFbGVtZW50KSB7XG4gICAgICAgIGlmIChwbGF5ZXIuc3RhdGUgPT09IGdhbWVfMS5TdGF0ZS5DaG9vc2UpIHtcbiAgICAgICAgICAgIGRlY2tFbGVtZW50LnN0eWxlLm91dGxpbmVDb2xvciA9IGdyZWVuO1xuICAgICAgICAgICAgcmVzZXJ2ZUVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBncmVlbjtcbiAgICAgICAgICAgIGxlYXZlRWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGF5ZXIuc3RhdGUgPT09IGdhbWVfMS5TdGF0ZS5MZWF2ZSkge1xuICAgICAgICAgICAgZGVja0VsZW1lbnQuc3R5bGUub3V0bGluZUNvbG9yID0gd2hpdGU7XG4gICAgICAgICAgICByZXNlcnZlRWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IHdoaXRlO1xuICAgICAgICAgICAgbGVhdmVFbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gZ3JlZW47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYXllci5zdGF0ZSA9PT0gZ2FtZV8xLlN0YXRlLldhaXQpIHtcbiAgICAgICAgICAgIGRlY2tFbGVtZW50LnN0eWxlLm91dGxpbmVDb2xvciA9IHdoaXRlO1xuICAgICAgICAgICAgcmVzZXJ2ZUVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSB3aGl0ZTtcbiAgICAgICAgICAgIGxlYXZlRWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5kaXNwbGF5UGxheWVySGFuZCA9IGRpc3BsYXlQbGF5ZXJIYW5kO1xubGV0IHNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG5mdW5jdGlvbiBoYW5kbGVDbGljayhlLCBwbGF5ZXIpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAoc2VsZWN0ZWRFbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgIHNlbGVjdGVkRWxlbWVudCA9IHRhcmdldDtcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC1jYXJkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgPT09IHRhcmdldCkge1xuICAgICAgICBzZWxlY3RlZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLWNhcmRcIik7XG4gICAgICAgIHNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZ3JvdXAgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICBpZiAoKGdyb3VwID09PSBudWxsIHx8IGdyb3VwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBncm91cC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIikubGVuZ3RoKSA8IDUgfHwgZ3JvdXAgPT09IHNlbGVjdGVkRWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGdyb3VwID09PSBudWxsIHx8IGdyb3VwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBncm91cC5pbnNlcnRCZWZvcmUoc2VsZWN0ZWRFbGVtZW50LCB0YXJnZXQpO1xuICAgIH1cbiAgICBzZWxlY3RlZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLWNhcmRcIik7XG4gICAgc2VsZWN0ZWRFbGVtZW50ID0gbnVsbDtcbn1cbmZ1bmN0aW9uIGhhbmRsZUdyb3VwQ2xpY2soZSkge1xuICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgPT09IG51bGwpXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zdCBncm91cCA9IGUudGFyZ2V0O1xuICAgIGlmICgoZ3JvdXAgPT09IG51bGwgfHwgZ3JvdXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKS5sZW5ndGgpIDwgNSkge1xuICAgICAgICBncm91cCA9PT0gbnVsbCB8fCBncm91cCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ3JvdXAuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRFbGVtZW50KTtcbiAgICB9XG4gICAgc2VsZWN0ZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC1jYXJkXCIpO1xuICAgIHNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2FtZSA9IGV4cG9ydHMuUGxheWVyID0gZXhwb3J0cy5TdGF0ZSA9IHZvaWQgMDtcbmNvbnN0IGNhcmRzXzEgPSByZXF1aXJlKFwiLi9jYXJkc1wiKTtcbnZhciBTdGF0ZTtcbihmdW5jdGlvbiAoU3RhdGUpIHtcbiAgICBTdGF0ZVtTdGF0ZVtcIldhaXRcIl0gPSAwXSA9IFwiV2FpdFwiO1xuICAgIFN0YXRlW1N0YXRlW1wiQ2hvb3NlXCJdID0gMV0gPSBcIkNob29zZVwiO1xuICAgIFN0YXRlW1N0YXRlW1wiTGVhdmVcIl0gPSAyXSA9IFwiTGVhdmVcIjtcbn0pKFN0YXRlIHx8IChleHBvcnRzLlN0YXRlID0gU3RhdGUgPSB7fSkpO1xuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oYW5kID0gW107XG4gICAgICAgIHRoaXMucmVzZXJ2ZSA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuV2FpdDtcbiAgICB9XG4gICAgYWRkKGNhcmQpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFuZC5sZW5ndGggPiAxMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSGFuZCBvZiBwbGF5ZXIgaXMgdG9vIGJpZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmQucHVzaChjYXJkKTtcbiAgICB9XG4gICAgYWRkUmVzZXJ2ZShjYXJkKSB7XG4gICAgICAgIHRoaXMucmVzZXJ2ZS5wdXNoKGNhcmQpO1xuICAgIH1cbiAgICBjaGVja1dpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tXaW5IZWxwKFtdLCBbXSwgW10sIFsuLi50aGlzLmhhbmRdKTtcbiAgICB9XG4gICAgY2hlY2tXaW5IZWxwKGEsIGIsIGMsIGRlY2spIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tHcm91cHMoYSwgYiwgYykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhLmxlbmd0aCA+IDUgfHwgYi5sZW5ndGggPiA0IHx8IGMubGVuZ3RoID4gMylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGEubGVuZ3RoID09PSA1ICYmICF0aGlzLmNoZWNrR3JvdXAoYSkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChiLmxlbmd0aCA9PT0gNCAmJiAhdGhpcy5jaGVja0dyb3VwKGIpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoYy5sZW5ndGggPT09IDMgJiYgIXRoaXMuY2hlY2tHcm91cChjKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRlY2sucG9wKCk7XG4gICAgICAgIGlmIChjYXJkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrV2luSGVscChbLi4uYSwgY2FyZF0sIGIsIGMsIFsuLi5kZWNrXSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1dpbkhlbHAoYSwgWy4uLmIsIGNhcmRdLCBjLCBbLi4uZGVja10pKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tXaW5IZWxwKGEsIGIsIFsuLi5jLCBjYXJkXSwgWy4uLmRlY2tdKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNoZWNrR3JvdXBzKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrU2l6ZShhLmxlbmd0aCwgYi5sZW5ndGgsIGMubGVuZ3RoKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tHcm91cChhKSAmJiB0aGlzLmNoZWNrR3JvdXAoYikgJiYgdGhpcy5jaGVja0dyb3VwKGMpO1xuICAgIH1cbiAgICBjaGVja0dyb3VwKGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tTZXF1ZW5jZShhKSB8fCB0aGlzLmNoZWNrU3RhaXIoYSk7XG4gICAgfVxuICAgIGNoZWNrU2VxdWVuY2UoYSkge1xuICAgICAgICBpZiAoYS5sZW5ndGggPCAzKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBsZXQgdGVzdCA9ICgoMSA8PCAxNCkgLSAxKSA8PCA0O1xuICAgICAgICBmb3IgKGxldCBjIG9mIGEpIHtcbiAgICAgICAgICAgIHRlc3QgJj0gYztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVzdCAhPT0gMDtcbiAgICB9XG4gICAgY2hlY2tTdGFpcihhKSB7XG4gICAgICAgIGlmIChhLmxlbmd0aCA8IDMpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCB0ZXN0ID0gMDtcbiAgICAgICAgZm9yIChsZXQgYyBvZiBhKSB7XG4gICAgICAgICAgICB0ZXN0IHw9IGM7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN1aXRUZXN0ID0gKCgxIDw8IDQpIC0gMSkgJiB0ZXN0O1xuICAgICAgICBpZiAoc3VpdFRlc3QgPT09IDAgfHxcbiAgICAgICAgICAgIChzdWl0VGVzdCAmIChzdWl0VGVzdCAtIDEpKSAhPT0gMClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGVzdCAmPSAoKDEgPDwgMTQpIC0gMSkgPDwgNDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0ZXN0ICY9ICh0ZXN0IDw8IDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXN0ICE9PSAwO1xuICAgIH1cbiAgICBjaGVja1NpemUoYSwgYiwgYykge1xuICAgICAgICByZXR1cm4gYSArIGIgKyBjID09IDExICYmIGEgPj0gMyAmJiBiID49IDMgJiYgYyA+PSAzO1xuICAgIH1cbiAgICBjaG9vc2UoY2FyZCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gU3RhdGUuQ2hvb3NlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGF5ZXIgbm90IGluIGNob29zZSBzdGF0ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FyZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmQucHVzaChjYXJkKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5MZWF2ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGNhcmRzIGluIGFyZ3VtZW50XCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxlYXZlKGluZGV4KSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBTdGF0ZS5MZWF2ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxheWVyIG5vdCBpbiBsZWF2ZSBzdGF0ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gdGhpcy5oYW5kLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5kZXggb3V0IG9mIGJvdW5kc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBbY2FyZF0gPSB0aGlzLmhhbmQuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLldhaXQ7XG4gICAgICAgIHJldHVybiBjYXJkO1xuICAgIH1cbn1cbmV4cG9ydHMuUGxheWVyID0gUGxheWVyO1xuY2xhc3MgR2FtZSB7XG4gICAgO1xuICAgIGNvbnN0cnVjdG9yKG51bWJlclBsYXllcnMpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gW107XG4gICAgICAgIHRoaXMuZGVjayA9IFtdO1xuICAgICAgICB0aGlzLnBsYXllckluZGV4ID0gMDtcbiAgICAgICAgaWYgKG51bWJlclBsYXllcnMgPCAyKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2FtZSBuZWVkcyBhdGxlYXN0IDIgcGxheWVyXCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlclBsYXllcnM7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzLnB1c2gobmV3IFBsYXllcigpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBsYXllciA9IHRoaXMucGxheWVyc1t0aGlzLnBsYXllckluZGV4XTtcbiAgICAgICAgdGhpcy5kZWNrID0gKDAsIGNhcmRzXzEuY3JlYXRlRGVjaykoMSk7XG4gICAgICAgICgwLCBjYXJkc18xLnNodWZmbGUpKHRoaXMuZGVjayk7XG4gICAgICAgIHRoaXMuZGVhbCgpO1xuICAgICAgICB0aGlzLnBsYXllci5zdGF0ZSA9IFN0YXRlLkNob29zZTtcbiAgICB9XG4gICAgZGVhbCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBwbGF5ZXIgb2YgdGhpcy5wbGF5ZXJzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZCA9IHRoaXMuZGVjay5wb3AoKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FyZCkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuYWRkKGNhcmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gY2FyZHMgbGVmdCB0byBkZWFsXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBuZXh0UGxheWVyKCkge1xuICAgICAgICB0aGlzLnBsYXllckluZGV4ID0gKHRoaXMucGxheWVySW5kZXggKyAxKSAlIHRoaXMucGxheWVycy5sZW5ndGg7XG4gICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXJzW3RoaXMucGxheWVySW5kZXhdO1xuICAgIH1cbn1cbmV4cG9ydHMuR2FtZSA9IEdhbWU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBkaXNwbGF5XzEgPSByZXF1aXJlKFwiLi9kaXNwbGF5XCIpO1xuY29uc3QgZ2FtZV8xID0gcmVxdWlyZShcIi4vZ2FtZVwiKTtcbmxldCBnYW1lO1xuZ2FtZSA9IG5ldyBnYW1lXzEuR2FtZSgyKTtcbigwLCBkaXNwbGF5XzEuZGlzcGxheVBsYXllckhhbmQpKGdhbWUucGxheWVyKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCByZWNlaXZlTWVzc2FnZSwgZmFsc2UpO1xuZnVuY3Rpb24gcmVjZWl2ZU1lc3NhZ2UoeyBkYXRhIH0pIHtcbiAgICBjb25zb2xlLmxvZyhgSG9zdCBSZWNlaXZlZCBmcm9tIHdpbmRvdyAke2RhdGF9YCk7XG4gICAgY29uc3QgW2NtZCwgYXJnXSA9IGRhdGEuc3BsaXQoLyAoLiopL3MpO1xuICAgIHN3aXRjaCAoY21kKSB7XG4gICAgICAgIGNhc2UgXCJzdGFydFwiOlxuICAgICAgICAgICAgZ2FtZSA9IG5ldyBnYW1lXzEuR2FtZShwYXJzZUludChhcmcpKTtcbiAgICAgICAgICAgICgwLCBkaXNwbGF5XzEuZGlzcGxheVBsYXllckhhbmQpKGdhbWUucGxheWVyKTtcbiAgICAgICAgICAgICgwLCBkaXNwbGF5XzEuc2V0dXApKGdhbWUucGxheWVyLCBoYW5kbGVEZWNrQ2xpY2ssIGhhbmRsZU5leHRDbGljayk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGdhbWUucGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHNlbmRNZXNzYWdlKGksIGBzZXR1cCAke0pTT04uc3RyaW5naWZ5KGdhbWUucGxheWVyc1tpXS5oYW5kKX1gKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlbnQgXCIgKyBpICsgXCIgc2V0dXBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhvc3QgU3RhcnRlZFwiKTtcbiAgICAgICAgICAgICgwLCBkaXNwbGF5XzEuZGlzcGxheVBsYXllckhhbmQpKGdhbWUucGxheWVyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGdhbWUpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicG9wXCI6XG4gICAgICAgICAgICBzZW5kTWVzc2FnZShnYW1lLnBsYXllckluZGV4LCBcImRlY2sgXCIgKyBnYW1lLmRlY2sucG9wKCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZW50IGRlY2sgcG9wXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJuZXh0XCI6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIG5leHRcIik7XG4gICAgICAgICAgICBnYW1lLm5leHRQbGF5ZXIoKTtcbiAgICAgICAgICAgIGlmIChnYW1lLnBsYXllckluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZ2FtZS5wbGF5ZXIuYWRkUmVzZXJ2ZShwYXJzZUludChhcmcpKTtcbiAgICAgICAgICAgICAgICBnYW1lLnBsYXllci5zdGF0ZSA9IGdhbWVfMS5TdGF0ZS5DaG9vc2U7XG4gICAgICAgICAgICAgICAgKDAsIGRpc3BsYXlfMS5kaXNwbGF5UGxheWVySGFuZCkoZ2FtZS5wbGF5ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VuZE1lc3NhZ2UoZ2FtZS5wbGF5ZXJJbmRleCwgXCJuZXh0IFwiICsgYXJnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbmNvbnN0IHNlbmRNZXNzYWdlID0gKHBsYXllciwgbXNnKSA9PiB7XG4gICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZShgJHtwbGF5ZXJ9ICR7bXNnfWApO1xufTtcbmZ1bmN0aW9uIGhhbmRsZURlY2tDbGljayhfZSwgcGxheWVyKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHBsYXllci5zdGF0ZSA9PT0gZ2FtZV8xLlN0YXRlLkNob29zZSkge1xuICAgICAgICAgICAgY29uc3QgY2FyZCA9IGdhbWUuZGVjay5wb3AoKTtcbiAgICAgICAgICAgIHBsYXllci5jaG9vc2UoY2FyZCk7XG4gICAgICAgICAgICAoMCwgZGlzcGxheV8xLmRpc3BsYXlQbGF5ZXJIYW5kKShwbGF5ZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGdldCBjYXJkIGZyb20gZGVjay4gJHtlcnJ9YCk7XG4gICAgfVxufVxuZnVuY3Rpb24gaGFuZGxlTmV4dENsaWNrKF9lLCBwbGF5ZXIsIHNlbGVjdGVkRWxlbWVudCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoc2VsZWN0ZWRFbGVtZW50LmRhdGFzZXQuaW5kZXggfHwgXCItMVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBwbGF5ZXIubGVhdmUoaW5kZXgpO1xuICAgICAgICAgICAgZ2FtZS5uZXh0UGxheWVyKCk7XG4gICAgICAgICAgICBzZW5kTWVzc2FnZShnYW1lLnBsYXllckluZGV4LCBcIm5leHQgXCIgKyBjYXJkKTtcbiAgICAgICAgICAgICgwLCBkaXNwbGF5XzEuZGlzcGxheVBsYXllckhhbmQpKHBsYXllcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gbGVhdmUgY2FyZC4gJHtlcnJ9YCk7XG4gICAgfVxufVxuLy8gZnVuY3Rpb24gdGltZXIoYW5vbjogRnVuY3Rpb24pIHtcbi8vICAgICBjb25zdCBUcmlhbHMgPSAxMDA7XG4vLyAgICAgY29uc3Qgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbi8vXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBUcmlhbHM7IGkrKykge1xuLy8gICAgICAgICBhbm9uKCk7XG4vLyAgICAgfVxuLy9cbi8vICAgICBjb25zdCBlbmQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbi8vICAgICBjb25zb2xlLmxvZyhgRXhlY3V0aW9uIHRpbWU6ICR7KGVuZCAtIHN0YXJ0KSAvIFRyaWFsc30gbXNgKTtcbi8vIH1cbi8vXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=