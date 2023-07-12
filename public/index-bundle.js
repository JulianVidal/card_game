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
function setup(player, handleDeckClick, handleNextClick) {
    const deckElement = document.getElementById("deck");
    deckElement === null || deckElement === void 0 ? void 0 : deckElement.addEventListener("click", e => {
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
                winElement.innerHTML = "You Won";
            }
        }
        else {
            console.log("Lost or not");
        }
    });
    const reserveElement = document.getElementById("reserve");
    reserveElement === null || reserveElement === void 0 ? void 0 : reserveElement.addEventListener("click", e => {
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
                winElement.innerHTML = "You Won";
            }
        }
        else {
            console.log("Lost or not");
        }
    });
    const nextElement = document.getElementById("next");
    nextElement === null || nextElement === void 0 ? void 0 : nextElement.addEventListener("click", e => {
        handleNextClick(e, player, selectedElement);
        if (selectedElement !== null) {
            const cardElements = document.querySelectorAll("#player img");
            const index = parseInt(selectedElement.dataset.index || "-1");
            for (let i = index + 1; i < cardElements.length; i++) {
                const cardElement = cardElements[i];
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
                if (cardElement.dataset.index === "10") {
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
exports.GameGuest = exports.Game = exports.Player = exports.State = void 0;
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
    nextPlayer(card) {
        this.playerIndex = (this.playerIndex + 1) % this.players.length;
        this.player = this.players[this.playerIndex];
        this.player.addReserve(card);
        this.player.state = State.Choose;
    }
}
exports.Game = Game;
class GameGuest {
    constructor() {
        this.player = new Player();
    }
}
exports.GameGuest = GameGuest;


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
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const display_1 = __webpack_require__(/*! ./display */ "./src/display.ts");
const game_1 = __webpack_require__(/*! ./game */ "./src/game.ts");
const game = new game_1.Game(2);
(0, display_1.displayPlayerHand)(game.player);
(0, display_1.setup)(game.player, handleDeckClick, handleNextClick);
window.addEventListener("message", receiveMessage, false);
function receiveMessage({ data }) {
    console.log(`Host Received from window ${data}`);
    const [cmd, arg] = data.split(/ (.*)/s);
    switch (cmd) {
        case "start":
            sendMessage("hand " + JSON.stringify(game.players[1].hand));
            console.log("Host Started");
            console.log("Sent hand");
            (0, display_1.displayPlayerHand)(game.player);
            console.log(JSON.stringify(game));
            break;
        case "pop":
            sendMessage("deck " + game.deck.pop());
            console.log("Sent deck pop");
            break;
        case "next":
            console.log("Received next");
            game.nextPlayer(parseInt(arg));
            (0, display_1.displayPlayerHand)(game.player);
            break;
    }
}
const sendMessage = window.parent.postMessage;
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
            game.nextPlayer(card);
            sendMessage("next " + card);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7Ozs7OztVQzVKakI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBa0IsbUJBQU8sQ0FBQyxtQ0FBVztBQUNyQyxlQUFlLG1CQUFPLENBQUMsNkJBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsTUFBTTtBQUNoQyw2Q0FBNkMsS0FBSztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsSUFBSTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxJQUFJO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHdCQUF3QjtBQUM5RDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FyZF9nYW1lLy4vc3JjL2NhcmRzLnRzIiwid2VicGFjazovL2NhcmRfZ2FtZS8uL3NyYy9kaXNwbGF5LnRzIiwid2VicGFjazovL2NhcmRfZ2FtZS8uL3NyYy9nYW1lLnRzIiwid2VicGFjazovL2NhcmRfZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDYXJkIEJpdCBTdHJ1Y3R1cmVcbi8vIFxuLy8gMDAwMSBDbHVic1xuLy8gMDAxMCBEaWFtb25kc1xuLy8gMDEwMCBIZWFydHNcbi8vIDEwMDAgU3BhZGVzXG4vL1xuLy8gMTAwMDAwMDAwMDAwMDEgQWNlXG4vLyAwMDAwMDAwMDAwMDAxMCBUd28gXG4vLyAwMDAwMDAwMDAwMDEwMCBUaHJlZSBcbi8vXG4vLyBDYXJkIDIgb2YgQ2x1YnNcbi8vIDAwMDAwMDAwMDAwMDEwIDEwMDBcbi8vXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN3YXAgPSBleHBvcnRzLnNodWZmbGUgPSBleHBvcnRzLmNyZWF0ZURlY2sgPSBleHBvcnRzLmNyZWF0ZUVtcHR5RGVjayA9IGV4cG9ydHMuZ2V0U1ZHID0gZXhwb3J0cy5nZXRTdHJpbmcgPSBleHBvcnRzLmdldFJhbmsgPSBleHBvcnRzLmdldFN1aXQgPSBleHBvcnRzLmNyZWF0ZUNhcmQgPSBleHBvcnRzLlN1aXRFbnRyaWVzID0gZXhwb3J0cy5SYW5rRW50cmllcyA9IGV4cG9ydHMuUmFuayA9IGV4cG9ydHMuU3VpdCA9IHZvaWQgMDtcbnZhciBTdWl0O1xuKGZ1bmN0aW9uIChTdWl0KSB7XG4gICAgU3VpdFtTdWl0W1wiQ2x1YnNcIl0gPSAxXSA9IFwiQ2x1YnNcIjtcbiAgICBTdWl0W1N1aXRbXCJEaWFtb25kc1wiXSA9IDJdID0gXCJEaWFtb25kc1wiO1xuICAgIFN1aXRbU3VpdFtcIkhlYXJ0c1wiXSA9IDRdID0gXCJIZWFydHNcIjtcbiAgICBTdWl0W1N1aXRbXCJTcGFkZXNcIl0gPSA4XSA9IFwiU3BhZGVzXCI7XG59KShTdWl0IHx8IChleHBvcnRzLlN1aXQgPSBTdWl0ID0ge30pKTtcbnZhciBSYW5rO1xuKGZ1bmN0aW9uIChSYW5rKSB7XG4gICAgUmFua1tSYW5rW1wiQWNlXCJdID0gMTMxMDg4XSA9IFwiQWNlXCI7XG4gICAgUmFua1tSYW5rW1wiVHdvXCJdID0gMzJdID0gXCJUd29cIjtcbiAgICBSYW5rW1JhbmtbXCJUaHJlZVwiXSA9IDY0XSA9IFwiVGhyZWVcIjtcbiAgICBSYW5rW1JhbmtbXCJGb3VyXCJdID0gMTI4XSA9IFwiRm91clwiO1xuICAgIFJhbmtbUmFua1tcIkZpdmVcIl0gPSAyNTZdID0gXCJGaXZlXCI7XG4gICAgUmFua1tSYW5rW1wiU2l4XCJdID0gNTEyXSA9IFwiU2l4XCI7XG4gICAgUmFua1tSYW5rW1wiU2V2ZW5cIl0gPSAxMDI0XSA9IFwiU2V2ZW5cIjtcbiAgICBSYW5rW1JhbmtbXCJFaWdodFwiXSA9IDIwNDhdID0gXCJFaWdodFwiO1xuICAgIFJhbmtbUmFua1tcIk5pbmVcIl0gPSA0MDk2XSA9IFwiTmluZVwiO1xuICAgIFJhbmtbUmFua1tcIlRlblwiXSA9IDgxOTJdID0gXCJUZW5cIjtcbiAgICBSYW5rW1JhbmtbXCJKYWNrXCJdID0gMTYzODRdID0gXCJKYWNrXCI7XG4gICAgUmFua1tSYW5rW1wiUXVlZW5cIl0gPSAzMjc2OF0gPSBcIlF1ZWVuXCI7XG4gICAgUmFua1tSYW5rW1wiS2luZ1wiXSA9IDY1NTM2XSA9IFwiS2luZ1wiO1xufSkoUmFuayB8fCAoZXhwb3J0cy5SYW5rID0gUmFuayA9IHt9KSk7XG5jb25zdCBTdWl0VG9TdmcgPSB7XG4gICAgXCJDbHVic1wiOiBcIkNcIixcbiAgICBcIkRpYW1vbmRzXCI6IFwiRFwiLFxuICAgIFwiSGVhcnRzXCI6IFwiSFwiLFxuICAgIFwiU3BhZGVzXCI6IFwiU1wiLFxufTtcbmNvbnN0IFJhbmtUb1N2ZyA9IHtcbiAgICBcIkFjZVwiOiBcIkFcIixcbiAgICBcIlR3b1wiOiBcIjJcIixcbiAgICBcIlRocmVlXCI6IFwiM1wiLFxuICAgIFwiRm91clwiOiBcIjRcIixcbiAgICBcIkZpdmVcIjogXCI1XCIsXG4gICAgXCJTaXhcIjogXCI2XCIsXG4gICAgXCJTZXZlblwiOiBcIjdcIixcbiAgICBcIkVpZ2h0XCI6IFwiOFwiLFxuICAgIFwiTmluZVwiOiBcIjlcIixcbiAgICBcIlRlblwiOiBcIjEwXCIsXG4gICAgXCJKYWNrXCI6IFwiSlwiLFxuICAgIFwiUXVlZW5cIjogXCJRXCIsXG4gICAgXCJLaW5nXCI6IFwiS1wiLFxufTtcbmV4cG9ydHMuUmFua0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhSYW5rKS5zbGljZSgxMyk7XG5leHBvcnRzLlN1aXRFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoU3VpdCkuc2xpY2UoNCk7XG5mdW5jdGlvbiBjcmVhdGVDYXJkKHJhbmssIHN1aXQpIHtcbiAgICByZXR1cm4gcmFuayB8IHN1aXQ7XG59XG5leHBvcnRzLmNyZWF0ZUNhcmQgPSBjcmVhdGVDYXJkO1xuZnVuY3Rpb24gZ2V0U3VpdChjYXJkKSB7XG4gICAgY29uc3Qgc3VpdGIgPSAoKDEgPDwgNCkgLSAxKSAmIGNhcmQ7XG4gICAgZm9yIChsZXQgW25hbWUsIHN1aXRdIG9mIGV4cG9ydHMuU3VpdEVudHJpZXMpIHtcbiAgICAgICAgaWYgKHN1aXQgPT09IHN1aXRiKVxuICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIlN1aXQgbm90IGZvdW5kXCIpO1xufVxuZXhwb3J0cy5nZXRTdWl0ID0gZ2V0U3VpdDtcbmZ1bmN0aW9uIGdldFJhbmsoY2FyZCkge1xuICAgIGNvbnN0IHJhbmtiID0gKCgoMSA8PCAxNCkgLSAxKSA8PCA0KSAmIGNhcmQ7XG4gICAgZm9yIChsZXQgW25hbWUsIHJhbmtdIG9mIGV4cG9ydHMuUmFua0VudHJpZXMpIHtcbiAgICAgICAgaWYgKHJhbmsgPT09IHJhbmtiKVxuICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIlJhbmsgbm90IGZvdW5kXCIpO1xufVxuZXhwb3J0cy5nZXRSYW5rID0gZ2V0UmFuaztcbmZ1bmN0aW9uIGdldFN0cmluZyhjYXJkKSB7XG4gICAgcmV0dXJuIGAke2dldFN1aXQoY2FyZCl9ICR7Z2V0UmFuayhjYXJkKX1gO1xufVxuZXhwb3J0cy5nZXRTdHJpbmcgPSBnZXRTdHJpbmc7XG5mdW5jdGlvbiBnZXRTVkcoY2FyZCkge1xuICAgIGNvbnN0IFtzdWl0LCByYW5rXSA9IGdldFN0cmluZyhjYXJkKS5zcGxpdChcIiBcIik7XG4gICAgbGV0IHN2ZyA9IFwiXCI7XG4gICAgc3ZnICs9IFJhbmtUb1N2Z1tyYW5rXTtcbiAgICBzdmcgKz0gU3VpdFRvU3ZnW3N1aXRdO1xuICAgIHJldHVybiBzdmc7XG59XG5leHBvcnRzLmdldFNWRyA9IGdldFNWRztcbmZ1bmN0aW9uIGNyZWF0ZUVtcHR5RGVjaygpIHtcbiAgICByZXR1cm4gW107XG59XG5leHBvcnRzLmNyZWF0ZUVtcHR5RGVjayA9IGNyZWF0ZUVtcHR5RGVjaztcbmZ1bmN0aW9uIGNyZWF0ZURlY2soc2l6ZSkge1xuICAgIGxldCBkZWNrID0gW107XG4gICAgZm9yIChsZXQgcyA9IDA7IHMgPCBzaXplOyBzKyspIHtcbiAgICAgICAgZm9yIChsZXQgW3N1aXQsIF9dIG9mIGV4cG9ydHMuU3VpdEVudHJpZXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IFtyYW5rLCBfXSBvZiBleHBvcnRzLlJhbmtFbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgZGVjay5wdXNoKGNyZWF0ZUNhcmQoUmFua1tyYW5rXSwgU3VpdFtzdWl0XSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWNrO1xufVxuZXhwb3J0cy5jcmVhdGVEZWNrID0gY3JlYXRlRGVjaztcbmZ1bmN0aW9uIHNodWZmbGUoZGVjaykge1xuICAgIGxldCBjdXJyZW50X2luZGV4ID0gZGVjay5sZW5ndGg7XG4gICAgd2hpbGUgKGN1cnJlbnRfaW5kZXggIT0gMCkge1xuICAgICAgICBsZXQgcmFuZG9tX2luZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGVjay5sZW5ndGgpO1xuICAgICAgICBjdXJyZW50X2luZGV4IC09IDE7XG4gICAgICAgIHN3YXAoZGVjaywgY3VycmVudF9pbmRleCwgcmFuZG9tX2luZGV4KTtcbiAgICB9XG59XG5leHBvcnRzLnNodWZmbGUgPSBzaHVmZmxlO1xuZnVuY3Rpb24gc3dhcChkZWNrLCBjdXJyZW50X2luZGV4LCByYW5kb21faW5kZXgpIHtcbiAgICBbZGVja1tjdXJyZW50X2luZGV4XSwgZGVja1tyYW5kb21faW5kZXhdXSA9IFtkZWNrW3JhbmRvbV9pbmRleF0sIGRlY2tbY3VycmVudF9pbmRleF1dO1xufVxuZXhwb3J0cy5zd2FwID0gc3dhcDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kaXNwbGF5UGxheWVySGFuZCA9IGV4cG9ydHMuc2V0dXAgPSB2b2lkIDA7XG5jb25zdCBjYXJkc18xID0gcmVxdWlyZShcIi4vY2FyZHNcIik7XG5mdW5jdGlvbiBzZXR1cChwbGF5ZXIsIGhhbmRsZURlY2tDbGljaywgaGFuZGxlTmV4dENsaWNrKSB7XG4gICAgY29uc3QgZGVja0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlY2tcIik7XG4gICAgZGVja0VsZW1lbnQgPT09IG51bGwgfHwgZGVja0VsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlY2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllciAuY2FyZFtkYXRhLWluZGV4PScxMCddXCIpO1xuICAgICAgICBpZiAoY2FyZEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwbGF5ZXIgLmdyb3VwXCIpWzJdO1xuICAgICAgICAgICAgZ3JvdXAuYXBwZW5kQ2hpbGQoY2FyZEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGhhbmRsZURlY2tDbGljayhlLCBwbGF5ZXIpO1xuICAgICAgICBpZiAocGxheWVyLmNoZWNrV2luKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV09OXCIpO1xuICAgICAgICAgICAgY29uc3Qgd2luRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luXCIpO1xuICAgICAgICAgICAgaWYgKHdpbkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB3aW5FbGVtZW50LmlubmVySFRNTCA9IFwiWW91IFdvblwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb3N0IG9yIG5vdFwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHJlc2VydmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlcnZlXCIpO1xuICAgIHJlc2VydmVFbGVtZW50ID09PSBudWxsIHx8IHJlc2VydmVFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXNlcnZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXIgLmNhcmRbZGF0YS1pbmRleD0nMTAnXVwiKTtcbiAgICAgICAgaWYgKGNhcmRFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBncm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyIC5ncm91cFwiKVsyXTtcbiAgICAgICAgICAgIGdyb3VwLmFwcGVuZENoaWxkKGNhcmRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBoYW5kbGVSZXNlcnZlQ2xpY2soZSwgcGxheWVyKTtcbiAgICAgICAgaWYgKHBsYXllci5jaGVja1dpbigpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIldPTlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHdpbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpblwiKTtcbiAgICAgICAgICAgIGlmICh3aW5FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgd2luRWxlbWVudC5pbm5lckhUTUwgPSBcIllvdSBXb25cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9zdCBvciBub3RcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBuZXh0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dFwiKTtcbiAgICBuZXh0RWxlbWVudCA9PT0gbnVsbCB8fCBuZXh0RWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmV4dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBoYW5kbGVOZXh0Q2xpY2soZSwgcGxheWVyLCBzZWxlY3RlZEVsZW1lbnQpO1xuICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBjYXJkRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3BsYXllciBpbWdcIik7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KHNlbGVjdGVkRWxlbWVudC5kYXRhc2V0LmluZGV4IHx8IFwiLTFcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gaW5kZXggKyAxOyBpIDwgY2FyZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkRWxlbWVudHNbaV07XG4gICAgICAgICAgICAgICAgY2FyZEVsZW1lbnQuZGF0YXNldC5pbmRleCA9IGAke2kgLSAxfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBncm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyIC5ncm91cFwiKVsyXTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgbmV3Q2FyZC5kYXRhc2V0LmluZGV4ID0gXCIxMFwiO1xuICAgICAgICAgICAgbmV3Q2FyZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBncm91cC5hcHBlbmRDaGlsZChuZXdDYXJkKTtcbiAgICAgICAgICAgIHNlbGVjdGVkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtY2FyZFwiKTtcbiAgICAgICAgICAgIHNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjYXJkRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3BsYXllciBpbWdcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkRWxlbWVudHNbaV07XG4gICAgICAgIGNhcmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBoYW5kbGVDbGljayhlLCBwbGF5ZXIpKTtcbiAgICB9XG4gICAgY29uc3QgZ3JvdXBFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyIC5ncm91cFwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyb3VwRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZ3JvdXBFbGVtZW50ID0gZ3JvdXBFbGVtZW50c1tpXTtcbiAgICAgICAgZ3JvdXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBoYW5kbGVHcm91cENsaWNrKGUpKTtcbiAgICB9XG59XG5leHBvcnRzLnNldHVwID0gc2V0dXA7XG5mdW5jdGlvbiBoYW5kbGVSZXNlcnZlQ2xpY2soX2UsIHBsYXllcikge1xuICAgIHRyeSB7XG4gICAgICAgIHBsYXllci5jaG9vc2UocGxheWVyLnJlc2VydmUucG9wKCkpO1xuICAgICAgICBkaXNwbGF5UGxheWVySGFuZChwbGF5ZXIpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBnZXQgY2FyZCBmcm9tIHJlc2VydmUuICR7ZXJyfWApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJIYW5kKHBsYXllcikge1xuICAgIGNvbnN0IGNhcmRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyIGltZ1wiKTtcbiAgICBpZiAoY2FyZEVsZW1lbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZEVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChjYXJkRWxlbWVudC5kYXRhc2V0LmluZGV4IHx8IFwiLTFcIik7XG4gICAgICAgICAgICBjb25zdCBjYXJkID0gcGxheWVyLmhhbmRbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKGNhcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNhcmRFbGVtZW50LnNyYyA9IFwiLi9jYXJkcy9cIiArICgwLCBjYXJkc18xLmdldFNWRykoY2FyZCkgKyBcIi5zdmdcIjtcbiAgICAgICAgICAgICAgICBpZiAoY2FyZEVsZW1lbnQuZGF0YXNldC5pbmRleCA9PT0gXCIxMFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBjYXJkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYXJkcyB0byByZXBsYWNlIG5vdCBmb3VuZFwiKTtcbiAgICB9XG4gICAgY29uc3QgcmVzZXJ2ZSA9IHBsYXllci5yZXNlcnZlW3BsYXllci5yZXNlcnZlLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IHJlc2VydmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlcnZlXCIpO1xuICAgIGlmIChyZXNlcnZlRWxlbWVudCkge1xuICAgICAgICBpZiAocmVzZXJ2ZSkge1xuICAgICAgICAgICAgcmVzZXJ2ZUVsZW1lbnQuc3JjID0gXCIuL2NhcmRzL1wiICsgKDAsIGNhcmRzXzEuZ2V0U1ZHKShyZXNlcnZlKSArIFwiLnN2Z1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzZXJ2ZUVsZW1lbnQuc3JjID0gXCIuL2NhcmRzL3RyYW5zcGFyZW50LnBuZ1wiO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5kaXNwbGF5UGxheWVySGFuZCA9IGRpc3BsYXlQbGF5ZXJIYW5kO1xubGV0IHNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG5mdW5jdGlvbiBoYW5kbGVDbGljayhlLCBwbGF5ZXIpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAoc2VsZWN0ZWRFbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgIHNlbGVjdGVkRWxlbWVudCA9IHRhcmdldDtcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC1jYXJkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgPT09IHRhcmdldCkge1xuICAgICAgICBzZWxlY3RlZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLWNhcmRcIik7XG4gICAgICAgIHNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZ3JvdXAgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICBpZiAoKGdyb3VwID09PSBudWxsIHx8IGdyb3VwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBncm91cC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIikubGVuZ3RoKSA8IDUgfHwgZ3JvdXAgPT09IHNlbGVjdGVkRWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGdyb3VwID09PSBudWxsIHx8IGdyb3VwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBncm91cC5pbnNlcnRCZWZvcmUoc2VsZWN0ZWRFbGVtZW50LCB0YXJnZXQpO1xuICAgIH1cbiAgICBzZWxlY3RlZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLWNhcmRcIik7XG4gICAgc2VsZWN0ZWRFbGVtZW50ID0gbnVsbDtcbn1cbmZ1bmN0aW9uIGhhbmRsZUdyb3VwQ2xpY2soZSkge1xuICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgPT09IG51bGwpXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zdCBncm91cCA9IGUudGFyZ2V0O1xuICAgIGlmICgoZ3JvdXAgPT09IG51bGwgfHwgZ3JvdXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKS5sZW5ndGgpIDwgNSkge1xuICAgICAgICBncm91cCA9PT0gbnVsbCB8fCBncm91cCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ3JvdXAuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRFbGVtZW50KTtcbiAgICB9XG4gICAgc2VsZWN0ZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC1jYXJkXCIpO1xuICAgIHNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2FtZUd1ZXN0ID0gZXhwb3J0cy5HYW1lID0gZXhwb3J0cy5QbGF5ZXIgPSBleHBvcnRzLlN0YXRlID0gdm9pZCAwO1xuY29uc3QgY2FyZHNfMSA9IHJlcXVpcmUoXCIuL2NhcmRzXCIpO1xudmFyIFN0YXRlO1xuKGZ1bmN0aW9uIChTdGF0ZSkge1xuICAgIFN0YXRlW1N0YXRlW1wiV2FpdFwiXSA9IDBdID0gXCJXYWl0XCI7XG4gICAgU3RhdGVbU3RhdGVbXCJDaG9vc2VcIl0gPSAxXSA9IFwiQ2hvb3NlXCI7XG4gICAgU3RhdGVbU3RhdGVbXCJMZWF2ZVwiXSA9IDJdID0gXCJMZWF2ZVwiO1xufSkoU3RhdGUgfHwgKGV4cG9ydHMuU3RhdGUgPSBTdGF0ZSA9IHt9KSk7XG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhbmQgPSBbXTtcbiAgICAgICAgdGhpcy5yZXNlcnZlID0gW107XG4gICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5XYWl0O1xuICAgIH1cbiAgICBhZGQoY2FyZCkge1xuICAgICAgICBpZiAodGhpcy5oYW5kLmxlbmd0aCA+IDExKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJIYW5kIG9mIHBsYXllciBpcyB0b28gYmlnXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZC5wdXNoKGNhcmQpO1xuICAgIH1cbiAgICBhZGRSZXNlcnZlKGNhcmQpIHtcbiAgICAgICAgdGhpcy5yZXNlcnZlLnB1c2goY2FyZCk7XG4gICAgfVxuICAgIGNoZWNrV2luKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja1dpbkhlbHAoW10sIFtdLCBbXSwgWy4uLnRoaXMuaGFuZF0pO1xuICAgIH1cbiAgICBjaGVja1dpbkhlbHAoYSwgYiwgYywgZGVjaykge1xuICAgICAgICBpZiAodGhpcy5jaGVja0dyb3VwcyhhLCBiLCBjKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEubGVuZ3RoID4gNSB8fCBiLmxlbmd0aCA+IDQgfHwgYy5sZW5ndGggPiAzKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoYS5sZW5ndGggPT09IDUgJiYgIXRoaXMuY2hlY2tHcm91cChhKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGIubGVuZ3RoID09PSA0ICYmICF0aGlzLmNoZWNrR3JvdXAoYikpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChjLmxlbmd0aCA9PT0gMyAmJiAhdGhpcy5jaGVja0dyb3VwKGMpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBjYXJkID0gZGVjay5wb3AoKTtcbiAgICAgICAgaWYgKGNhcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tXaW5IZWxwKFsuLi5hLCBjYXJkXSwgYiwgYywgWy4uLmRlY2tdKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrV2luSGVscChhLCBbLi4uYiwgY2FyZF0sIGMsIFsuLi5kZWNrXSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1dpbkhlbHAoYSwgYiwgWy4uLmMsIGNhcmRdLCBbLi4uZGVja10pKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY2hlY2tHcm91cHMoYSwgYiwgYykge1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2tTaXplKGEubGVuZ3RoLCBiLmxlbmd0aCwgYy5sZW5ndGgpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0dyb3VwKGEpICYmIHRoaXMuY2hlY2tHcm91cChiKSAmJiB0aGlzLmNoZWNrR3JvdXAoYyk7XG4gICAgfVxuICAgIGNoZWNrR3JvdXAoYSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja1NlcXVlbmNlKGEpIHx8IHRoaXMuY2hlY2tTdGFpcihhKTtcbiAgICB9XG4gICAgY2hlY2tTZXF1ZW5jZShhKSB7XG4gICAgICAgIGlmIChhLmxlbmd0aCA8IDMpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCB0ZXN0ID0gKCgxIDw8IDE0KSAtIDEpIDw8IDQ7XG4gICAgICAgIGZvciAobGV0IGMgb2YgYSkge1xuICAgICAgICAgICAgdGVzdCAmPSBjO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXN0ICE9PSAwO1xuICAgIH1cbiAgICBjaGVja1N0YWlyKGEpIHtcbiAgICAgICAgaWYgKGEubGVuZ3RoIDwgMylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgbGV0IHRlc3QgPSAwO1xuICAgICAgICBmb3IgKGxldCBjIG9mIGEpIHtcbiAgICAgICAgICAgIHRlc3QgfD0gYztcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3VpdFRlc3QgPSAoKDEgPDwgNCkgLSAxKSAmIHRlc3Q7XG4gICAgICAgIGlmIChzdWl0VGVzdCA9PT0gMCB8fFxuICAgICAgICAgICAgKHN1aXRUZXN0ICYgKHN1aXRUZXN0IC0gMSkpICE9PSAwKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0ZXN0ICY9ICgoMSA8PCAxNCkgLSAxKSA8PCA0O1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlc3QgJj0gKHRlc3QgPDwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlc3QgIT09IDA7XG4gICAgfVxuICAgIGNoZWNrU2l6ZShhLCBiLCBjKSB7XG4gICAgICAgIHJldHVybiBhICsgYiArIGMgPT0gMTEgJiYgYSA+PSAzICYmIGIgPj0gMyAmJiBjID49IDM7XG4gICAgfVxuICAgIGNob29zZShjYXJkKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBTdGF0ZS5DaG9vc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsYXllciBub3QgaW4gY2hvb3NlIHN0YXRlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYXJkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZC5wdXNoKGNhcmQpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLkxlYXZlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gY2FyZHMgaW4gYXJndW1lbnRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGVhdmUoaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IFN0YXRlLkxlYXZlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGF5ZXIgbm90IGluIGxlYXZlIHN0YXRlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiB0aGlzLmhhbmQubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbmRleCBvdXQgb2YgYm91bmRzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IFtjYXJkXSA9IHRoaXMuaGFuZC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuV2FpdDtcbiAgICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgfVxufVxuZXhwb3J0cy5QbGF5ZXIgPSBQbGF5ZXI7XG5jbGFzcyBHYW1lIHtcbiAgICA7XG4gICAgY29uc3RydWN0b3IobnVtYmVyUGxheWVycykge1xuICAgICAgICB0aGlzLnBsYXllcnMgPSBbXTtcbiAgICAgICAgdGhpcy5kZWNrID0gW107XG4gICAgICAgIHRoaXMucGxheWVySW5kZXggPSAwO1xuICAgICAgICBpZiAobnVtYmVyUGxheWVycyA8IDIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHYW1lIG5lZWRzIGF0bGVhc3QgMiBwbGF5ZXJcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyUGxheWVyczsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllcnMucHVzaChuZXcgUGxheWVyKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXJzW3RoaXMucGxheWVySW5kZXhdO1xuICAgICAgICB0aGlzLmRlY2sgPSAoMCwgY2FyZHNfMS5jcmVhdGVEZWNrKSgxKTtcbiAgICAgICAgKDAsIGNhcmRzXzEuc2h1ZmZsZSkodGhpcy5kZWNrKTtcbiAgICAgICAgdGhpcy5kZWFsKCk7XG4gICAgICAgIHRoaXMucGxheWVyLnN0YXRlID0gU3RhdGUuQ2hvb3NlO1xuICAgIH1cbiAgICBkZWFsKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHBsYXllciBvZiB0aGlzLnBsYXllcnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkID0gdGhpcy5kZWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIGlmIChjYXJkKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5hZGQoY2FyZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBjYXJkcyBsZWZ0IHRvIGRlYWxcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIG5leHRQbGF5ZXIoY2FyZCkge1xuICAgICAgICB0aGlzLnBsYXllckluZGV4ID0gKHRoaXMucGxheWVySW5kZXggKyAxKSAlIHRoaXMucGxheWVycy5sZW5ndGg7XG4gICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXJzW3RoaXMucGxheWVySW5kZXhdO1xuICAgICAgICB0aGlzLnBsYXllci5hZGRSZXNlcnZlKGNhcmQpO1xuICAgICAgICB0aGlzLnBsYXllci5zdGF0ZSA9IFN0YXRlLkNob29zZTtcbiAgICB9XG59XG5leHBvcnRzLkdhbWUgPSBHYW1lO1xuY2xhc3MgR2FtZUd1ZXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgfVxufVxuZXhwb3J0cy5HYW1lR3Vlc3QgPSBHYW1lR3Vlc3Q7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBkaXNwbGF5XzEgPSByZXF1aXJlKFwiLi9kaXNwbGF5XCIpO1xuY29uc3QgZ2FtZV8xID0gcmVxdWlyZShcIi4vZ2FtZVwiKTtcbmNvbnN0IGdhbWUgPSBuZXcgZ2FtZV8xLkdhbWUoMik7XG4oMCwgZGlzcGxheV8xLmRpc3BsYXlQbGF5ZXJIYW5kKShnYW1lLnBsYXllcik7XG4oMCwgZGlzcGxheV8xLnNldHVwKShnYW1lLnBsYXllciwgaGFuZGxlRGVja0NsaWNrLCBoYW5kbGVOZXh0Q2xpY2spO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHJlY2VpdmVNZXNzYWdlLCBmYWxzZSk7XG5mdW5jdGlvbiByZWNlaXZlTWVzc2FnZSh7IGRhdGEgfSkge1xuICAgIGNvbnNvbGUubG9nKGBIb3N0IFJlY2VpdmVkIGZyb20gd2luZG93ICR7ZGF0YX1gKTtcbiAgICBjb25zdCBbY21kLCBhcmddID0gZGF0YS5zcGxpdCgvICguKikvcyk7XG4gICAgc3dpdGNoIChjbWQpIHtcbiAgICAgICAgY2FzZSBcInN0YXJ0XCI6XG4gICAgICAgICAgICBzZW5kTWVzc2FnZShcImhhbmQgXCIgKyBKU09OLnN0cmluZ2lmeShnYW1lLnBsYXllcnNbMV0uaGFuZCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJIb3N0IFN0YXJ0ZWRcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlbnQgaGFuZFwiKTtcbiAgICAgICAgICAgICgwLCBkaXNwbGF5XzEuZGlzcGxheVBsYXllckhhbmQpKGdhbWUucGxheWVyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGdhbWUpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicG9wXCI6XG4gICAgICAgICAgICBzZW5kTWVzc2FnZShcImRlY2sgXCIgKyBnYW1lLmRlY2sucG9wKCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZW50IGRlY2sgcG9wXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJuZXh0XCI6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIG5leHRcIik7XG4gICAgICAgICAgICBnYW1lLm5leHRQbGF5ZXIocGFyc2VJbnQoYXJnKSk7XG4gICAgICAgICAgICAoMCwgZGlzcGxheV8xLmRpc3BsYXlQbGF5ZXJIYW5kKShnYW1lLnBsYXllcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5jb25zdCBzZW5kTWVzc2FnZSA9IHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2U7XG5mdW5jdGlvbiBoYW5kbGVEZWNrQ2xpY2soX2UsIHBsYXllcikge1xuICAgIHRyeSB7XG4gICAgICAgIGlmIChwbGF5ZXIuc3RhdGUgPT09IGdhbWVfMS5TdGF0ZS5DaG9vc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBnYW1lLmRlY2sucG9wKCk7XG4gICAgICAgICAgICBwbGF5ZXIuY2hvb3NlKGNhcmQpO1xuICAgICAgICAgICAgKDAsIGRpc3BsYXlfMS5kaXNwbGF5UGxheWVySGFuZCkocGxheWVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBnZXQgY2FyZCBmcm9tIGRlY2suICR7ZXJyfWApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGhhbmRsZU5leHRDbGljayhfZSwgcGxheWVyLCBzZWxlY3RlZEVsZW1lbnQpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KHNlbGVjdGVkRWxlbWVudC5kYXRhc2V0LmluZGV4IHx8IFwiLTFcIik7XG4gICAgICAgICAgICBjb25zdCBjYXJkID0gcGxheWVyLmxlYXZlKGluZGV4KTtcbiAgICAgICAgICAgIGdhbWUubmV4dFBsYXllcihjYXJkKTtcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKFwibmV4dCBcIiArIGNhcmQpO1xuICAgICAgICAgICAgKDAsIGRpc3BsYXlfMS5kaXNwbGF5UGxheWVySGFuZCkocGxheWVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBsZWF2ZSBjYXJkLiAke2Vycn1gKTtcbiAgICB9XG59XG4vLyBmdW5jdGlvbiB0aW1lcihhbm9uOiBGdW5jdGlvbikge1xuLy8gICAgIGNvbnN0IFRyaWFscyA9IDEwMDtcbi8vICAgICBjb25zdCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuLy9cbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFRyaWFsczsgaSsrKSB7XG4vLyAgICAgICAgIGFub24oKTtcbi8vICAgICB9XG4vL1xuLy8gICAgIGNvbnN0IGVuZCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuLy8gICAgIGNvbnNvbGUubG9nKGBFeGVjdXRpb24gdGltZTogJHsoZW5kIC0gc3RhcnQpIC8gVHJpYWxzfSBtc2ApO1xuLy8gfVxuLy9cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==