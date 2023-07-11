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
            const group = document.querySelectorAll("#player group")[2];
            const newCard = cardElements[0].cloneNode();
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
    if (reserve) {
        const reserveElement = document.getElementById("reserve");
        if (reserveElement) {
            reserveElement.src = "./cards/" + (0, cards_1.getSVG)(reserve) + ".svg";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7Ozs7OztVQzVKakI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBa0IsbUJBQU8sQ0FBQyxtQ0FBVztBQUNyQyxlQUFlLG1CQUFPLENBQUMsNkJBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsTUFBTTtBQUNoQyw2Q0FBNkMsS0FBSztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsSUFBSTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxJQUFJO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHdCQUF3QjtBQUM5RDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FyZF9nYW1lLy4vc3JjL2NhcmRzLnRzIiwid2VicGFjazovL2NhcmRfZ2FtZS8uL3NyYy9kaXNwbGF5LnRzIiwid2VicGFjazovL2NhcmRfZ2FtZS8uL3NyYy9nYW1lLnRzIiwid2VicGFjazovL2NhcmRfZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDYXJkIEJpdCBTdHJ1Y3R1cmVcbi8vIFxuLy8gMDAwMSBDbHVic1xuLy8gMDAxMCBEaWFtb25kc1xuLy8gMDEwMCBIZWFydHNcbi8vIDEwMDAgU3BhZGVzXG4vL1xuLy8gMTAwMDAwMDAwMDAwMDEgQWNlXG4vLyAwMDAwMDAwMDAwMDAxMCBUd28gXG4vLyAwMDAwMDAwMDAwMDEwMCBUaHJlZSBcbi8vXG4vLyBDYXJkIDIgb2YgQ2x1YnNcbi8vIDAwMDAwMDAwMDAwMDEwIDEwMDBcbi8vXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN3YXAgPSBleHBvcnRzLnNodWZmbGUgPSBleHBvcnRzLmNyZWF0ZURlY2sgPSBleHBvcnRzLmNyZWF0ZUVtcHR5RGVjayA9IGV4cG9ydHMuZ2V0U1ZHID0gZXhwb3J0cy5nZXRTdHJpbmcgPSBleHBvcnRzLmdldFJhbmsgPSBleHBvcnRzLmdldFN1aXQgPSBleHBvcnRzLmNyZWF0ZUNhcmQgPSBleHBvcnRzLlN1aXRFbnRyaWVzID0gZXhwb3J0cy5SYW5rRW50cmllcyA9IGV4cG9ydHMuUmFuayA9IGV4cG9ydHMuU3VpdCA9IHZvaWQgMDtcbnZhciBTdWl0O1xuKGZ1bmN0aW9uIChTdWl0KSB7XG4gICAgU3VpdFtTdWl0W1wiQ2x1YnNcIl0gPSAxXSA9IFwiQ2x1YnNcIjtcbiAgICBTdWl0W1N1aXRbXCJEaWFtb25kc1wiXSA9IDJdID0gXCJEaWFtb25kc1wiO1xuICAgIFN1aXRbU3VpdFtcIkhlYXJ0c1wiXSA9IDRdID0gXCJIZWFydHNcIjtcbiAgICBTdWl0W1N1aXRbXCJTcGFkZXNcIl0gPSA4XSA9IFwiU3BhZGVzXCI7XG59KShTdWl0IHx8IChleHBvcnRzLlN1aXQgPSBTdWl0ID0ge30pKTtcbnZhciBSYW5rO1xuKGZ1bmN0aW9uIChSYW5rKSB7XG4gICAgUmFua1tSYW5rW1wiQWNlXCJdID0gMTMxMDg4XSA9IFwiQWNlXCI7XG4gICAgUmFua1tSYW5rW1wiVHdvXCJdID0gMzJdID0gXCJUd29cIjtcbiAgICBSYW5rW1JhbmtbXCJUaHJlZVwiXSA9IDY0XSA9IFwiVGhyZWVcIjtcbiAgICBSYW5rW1JhbmtbXCJGb3VyXCJdID0gMTI4XSA9IFwiRm91clwiO1xuICAgIFJhbmtbUmFua1tcIkZpdmVcIl0gPSAyNTZdID0gXCJGaXZlXCI7XG4gICAgUmFua1tSYW5rW1wiU2l4XCJdID0gNTEyXSA9IFwiU2l4XCI7XG4gICAgUmFua1tSYW5rW1wiU2V2ZW5cIl0gPSAxMDI0XSA9IFwiU2V2ZW5cIjtcbiAgICBSYW5rW1JhbmtbXCJFaWdodFwiXSA9IDIwNDhdID0gXCJFaWdodFwiO1xuICAgIFJhbmtbUmFua1tcIk5pbmVcIl0gPSA0MDk2XSA9IFwiTmluZVwiO1xuICAgIFJhbmtbUmFua1tcIlRlblwiXSA9IDgxOTJdID0gXCJUZW5cIjtcbiAgICBSYW5rW1JhbmtbXCJKYWNrXCJdID0gMTYzODRdID0gXCJKYWNrXCI7XG4gICAgUmFua1tSYW5rW1wiUXVlZW5cIl0gPSAzMjc2OF0gPSBcIlF1ZWVuXCI7XG4gICAgUmFua1tSYW5rW1wiS2luZ1wiXSA9IDY1NTM2XSA9IFwiS2luZ1wiO1xufSkoUmFuayB8fCAoZXhwb3J0cy5SYW5rID0gUmFuayA9IHt9KSk7XG5jb25zdCBTdWl0VG9TdmcgPSB7XG4gICAgXCJDbHVic1wiOiBcIkNcIixcbiAgICBcIkRpYW1vbmRzXCI6IFwiRFwiLFxuICAgIFwiSGVhcnRzXCI6IFwiSFwiLFxuICAgIFwiU3BhZGVzXCI6IFwiU1wiLFxufTtcbmNvbnN0IFJhbmtUb1N2ZyA9IHtcbiAgICBcIkFjZVwiOiBcIkFcIixcbiAgICBcIlR3b1wiOiBcIjJcIixcbiAgICBcIlRocmVlXCI6IFwiM1wiLFxuICAgIFwiRm91clwiOiBcIjRcIixcbiAgICBcIkZpdmVcIjogXCI1XCIsXG4gICAgXCJTaXhcIjogXCI2XCIsXG4gICAgXCJTZXZlblwiOiBcIjdcIixcbiAgICBcIkVpZ2h0XCI6IFwiOFwiLFxuICAgIFwiTmluZVwiOiBcIjlcIixcbiAgICBcIlRlblwiOiBcIjEwXCIsXG4gICAgXCJKYWNrXCI6IFwiSlwiLFxuICAgIFwiUXVlZW5cIjogXCJRXCIsXG4gICAgXCJLaW5nXCI6IFwiS1wiLFxufTtcbmV4cG9ydHMuUmFua0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhSYW5rKS5zbGljZSgxMyk7XG5leHBvcnRzLlN1aXRFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoU3VpdCkuc2xpY2UoNCk7XG5mdW5jdGlvbiBjcmVhdGVDYXJkKHJhbmssIHN1aXQpIHtcbiAgICByZXR1cm4gcmFuayB8IHN1aXQ7XG59XG5leHBvcnRzLmNyZWF0ZUNhcmQgPSBjcmVhdGVDYXJkO1xuZnVuY3Rpb24gZ2V0U3VpdChjYXJkKSB7XG4gICAgY29uc3Qgc3VpdGIgPSAoKDEgPDwgNCkgLSAxKSAmIGNhcmQ7XG4gICAgZm9yIChsZXQgW25hbWUsIHN1aXRdIG9mIGV4cG9ydHMuU3VpdEVudHJpZXMpIHtcbiAgICAgICAgaWYgKHN1aXQgPT09IHN1aXRiKVxuICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIlN1aXQgbm90IGZvdW5kXCIpO1xufVxuZXhwb3J0cy5nZXRTdWl0ID0gZ2V0U3VpdDtcbmZ1bmN0aW9uIGdldFJhbmsoY2FyZCkge1xuICAgIGNvbnN0IHJhbmtiID0gKCgoMSA8PCAxNCkgLSAxKSA8PCA0KSAmIGNhcmQ7XG4gICAgZm9yIChsZXQgW25hbWUsIHJhbmtdIG9mIGV4cG9ydHMuUmFua0VudHJpZXMpIHtcbiAgICAgICAgaWYgKHJhbmsgPT09IHJhbmtiKVxuICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIlJhbmsgbm90IGZvdW5kXCIpO1xufVxuZXhwb3J0cy5nZXRSYW5rID0gZ2V0UmFuaztcbmZ1bmN0aW9uIGdldFN0cmluZyhjYXJkKSB7XG4gICAgcmV0dXJuIGAke2dldFN1aXQoY2FyZCl9ICR7Z2V0UmFuayhjYXJkKX1gO1xufVxuZXhwb3J0cy5nZXRTdHJpbmcgPSBnZXRTdHJpbmc7XG5mdW5jdGlvbiBnZXRTVkcoY2FyZCkge1xuICAgIGNvbnN0IFtzdWl0LCByYW5rXSA9IGdldFN0cmluZyhjYXJkKS5zcGxpdChcIiBcIik7XG4gICAgbGV0IHN2ZyA9IFwiXCI7XG4gICAgc3ZnICs9IFJhbmtUb1N2Z1tyYW5rXTtcbiAgICBzdmcgKz0gU3VpdFRvU3ZnW3N1aXRdO1xuICAgIHJldHVybiBzdmc7XG59XG5leHBvcnRzLmdldFNWRyA9IGdldFNWRztcbmZ1bmN0aW9uIGNyZWF0ZUVtcHR5RGVjaygpIHtcbiAgICByZXR1cm4gW107XG59XG5leHBvcnRzLmNyZWF0ZUVtcHR5RGVjayA9IGNyZWF0ZUVtcHR5RGVjaztcbmZ1bmN0aW9uIGNyZWF0ZURlY2soc2l6ZSkge1xuICAgIGxldCBkZWNrID0gW107XG4gICAgZm9yIChsZXQgcyA9IDA7IHMgPCBzaXplOyBzKyspIHtcbiAgICAgICAgZm9yIChsZXQgW3N1aXQsIF9dIG9mIGV4cG9ydHMuU3VpdEVudHJpZXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IFtyYW5rLCBfXSBvZiBleHBvcnRzLlJhbmtFbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgZGVjay5wdXNoKGNyZWF0ZUNhcmQoUmFua1tyYW5rXSwgU3VpdFtzdWl0XSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWNrO1xufVxuZXhwb3J0cy5jcmVhdGVEZWNrID0gY3JlYXRlRGVjaztcbmZ1bmN0aW9uIHNodWZmbGUoZGVjaykge1xuICAgIGxldCBjdXJyZW50X2luZGV4ID0gZGVjay5sZW5ndGg7XG4gICAgd2hpbGUgKGN1cnJlbnRfaW5kZXggIT0gMCkge1xuICAgICAgICBsZXQgcmFuZG9tX2luZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGVjay5sZW5ndGgpO1xuICAgICAgICBjdXJyZW50X2luZGV4IC09IDE7XG4gICAgICAgIHN3YXAoZGVjaywgY3VycmVudF9pbmRleCwgcmFuZG9tX2luZGV4KTtcbiAgICB9XG59XG5leHBvcnRzLnNodWZmbGUgPSBzaHVmZmxlO1xuZnVuY3Rpb24gc3dhcChkZWNrLCBjdXJyZW50X2luZGV4LCByYW5kb21faW5kZXgpIHtcbiAgICBbZGVja1tjdXJyZW50X2luZGV4XSwgZGVja1tyYW5kb21faW5kZXhdXSA9IFtkZWNrW3JhbmRvbV9pbmRleF0sIGRlY2tbY3VycmVudF9pbmRleF1dO1xufVxuZXhwb3J0cy5zd2FwID0gc3dhcDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kaXNwbGF5UGxheWVySGFuZCA9IGV4cG9ydHMuc2V0dXAgPSB2b2lkIDA7XG5jb25zdCBjYXJkc18xID0gcmVxdWlyZShcIi4vY2FyZHNcIik7XG5mdW5jdGlvbiBzZXR1cChwbGF5ZXIsIGhhbmRsZURlY2tDbGljaywgaGFuZGxlTmV4dENsaWNrKSB7XG4gICAgY29uc3QgZGVja0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlY2tcIik7XG4gICAgZGVja0VsZW1lbnQgPT09IG51bGwgfHwgZGVja0VsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlY2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllciAuY2FyZFtkYXRhLWluZGV4PScxMCddXCIpO1xuICAgICAgICBpZiAoY2FyZEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwbGF5ZXIgLmdyb3VwXCIpWzJdO1xuICAgICAgICAgICAgZ3JvdXAuYXBwZW5kQ2hpbGQoY2FyZEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGhhbmRsZURlY2tDbGljayhlLCBwbGF5ZXIpO1xuICAgICAgICBpZiAocGxheWVyLmNoZWNrV2luKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV09OXCIpO1xuICAgICAgICAgICAgY29uc3Qgd2luRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luXCIpO1xuICAgICAgICAgICAgaWYgKHdpbkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB3aW5FbGVtZW50LmlubmVySFRNTCA9IFwiWW91IFdvblwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb3N0IG9yIG5vdFwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHJlc2VydmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlcnZlXCIpO1xuICAgIHJlc2VydmVFbGVtZW50ID09PSBudWxsIHx8IHJlc2VydmVFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXNlcnZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXIgLmNhcmRbZGF0YS1pbmRleD0nMTAnXVwiKTtcbiAgICAgICAgaWYgKGNhcmRFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBncm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyIC5ncm91cFwiKVsyXTtcbiAgICAgICAgICAgIGdyb3VwLmFwcGVuZENoaWxkKGNhcmRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBoYW5kbGVSZXNlcnZlQ2xpY2soZSwgcGxheWVyKTtcbiAgICAgICAgaWYgKHBsYXllci5jaGVja1dpbigpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIldPTlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHdpbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpblwiKTtcbiAgICAgICAgICAgIGlmICh3aW5FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgd2luRWxlbWVudC5pbm5lckhUTUwgPSBcIllvdSBXb25cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9zdCBvciBub3RcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBuZXh0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dFwiKTtcbiAgICBuZXh0RWxlbWVudCA9PT0gbnVsbCB8fCBuZXh0RWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmV4dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBoYW5kbGVOZXh0Q2xpY2soZSwgcGxheWVyLCBzZWxlY3RlZEVsZW1lbnQpO1xuICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBjYXJkRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3BsYXllciBpbWdcIik7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KHNlbGVjdGVkRWxlbWVudC5kYXRhc2V0LmluZGV4IHx8IFwiLTFcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gaW5kZXggKyAxOyBpIDwgY2FyZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkRWxlbWVudHNbaV07XG4gICAgICAgICAgICAgICAgY2FyZEVsZW1lbnQuZGF0YXNldC5pbmRleCA9IGAke2kgLSAxfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBncm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyIGdyb3VwXCIpWzJdO1xuICAgICAgICAgICAgY29uc3QgbmV3Q2FyZCA9IGNhcmRFbGVtZW50c1swXS5jbG9uZU5vZGUoKTtcbiAgICAgICAgICAgIG5ld0NhcmQuZGF0YXNldC5pbmRleCA9IFwiMTBcIjtcbiAgICAgICAgICAgIG5ld0NhcmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZ3JvdXAuYXBwZW5kQ2hpbGQobmV3Q2FyZCk7XG4gICAgICAgICAgICBzZWxlY3RlZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLWNhcmRcIik7XG4gICAgICAgICAgICBzZWxlY3RlZEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY2FyZEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwbGF5ZXIgaW1nXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZEVsZW1lbnRzW2ldO1xuICAgICAgICBjYXJkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gaGFuZGxlQ2xpY2soZSwgcGxheWVyKSk7XG4gICAgfVxuICAgIGNvbnN0IGdyb3VwRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3BsYXllciAuZ3JvdXBcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncm91cEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwRWxlbWVudCA9IGdyb3VwRWxlbWVudHNbaV07XG4gICAgICAgIGdyb3VwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gaGFuZGxlR3JvdXBDbGljayhlKSk7XG4gICAgfVxufVxuZXhwb3J0cy5zZXR1cCA9IHNldHVwO1xuZnVuY3Rpb24gaGFuZGxlUmVzZXJ2ZUNsaWNrKF9lLCBwbGF5ZXIpIHtcbiAgICB0cnkge1xuICAgICAgICBwbGF5ZXIuY2hvb3NlKHBsYXllci5yZXNlcnZlLnBvcCgpKTtcbiAgICAgICAgZGlzcGxheVBsYXllckhhbmQocGxheWVyKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gZ2V0IGNhcmQgZnJvbSByZXNlcnZlLiAke2Vycn1gKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkaXNwbGF5UGxheWVySGFuZChwbGF5ZXIpIHtcbiAgICBjb25zdCBjYXJkRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3BsYXllciBpbWdcIik7XG4gICAgaWYgKGNhcmRFbGVtZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmRFbGVtZW50c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoY2FyZEVsZW1lbnQuZGF0YXNldC5pbmRleCB8fCBcIi0xXCIpO1xuICAgICAgICAgICAgY29uc3QgY2FyZCA9IHBsYXllci5oYW5kW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChjYXJkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjYXJkRWxlbWVudC5zcmMgPSBcIi4vY2FyZHMvXCIgKyAoMCwgY2FyZHNfMS5nZXRTVkcpKGNhcmQpICsgXCIuc3ZnXCI7XG4gICAgICAgICAgICAgICAgaWYgKGNhcmRFbGVtZW50LmRhdGFzZXQuaW5kZXggPT09IFwiMTBcIikge1xuICAgICAgICAgICAgICAgICAgICBjYXJkRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgY2FyZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FyZHMgdG8gcmVwbGFjZSBub3QgZm91bmRcIik7XG4gICAgfVxuICAgIGNvbnN0IHJlc2VydmUgPSBwbGF5ZXIucmVzZXJ2ZVtwbGF5ZXIucmVzZXJ2ZS5sZW5ndGggLSAxXTtcbiAgICBpZiAocmVzZXJ2ZSkge1xuICAgICAgICBjb25zdCByZXNlcnZlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXJ2ZVwiKTtcbiAgICAgICAgaWYgKHJlc2VydmVFbGVtZW50KSB7XG4gICAgICAgICAgICByZXNlcnZlRWxlbWVudC5zcmMgPSBcIi4vY2FyZHMvXCIgKyAoMCwgY2FyZHNfMS5nZXRTVkcpKHJlc2VydmUpICsgXCIuc3ZnXCI7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmRpc3BsYXlQbGF5ZXJIYW5kID0gZGlzcGxheVBsYXllckhhbmQ7XG5sZXQgc2VsZWN0ZWRFbGVtZW50ID0gbnVsbDtcbmZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUsIHBsYXllcikge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50ID0gdGFyZ2V0O1xuICAgICAgICBzZWxlY3RlZEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLWNhcmRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNlbGVjdGVkRWxlbWVudCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgIHNlbGVjdGVkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtY2FyZFwiKTtcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBncm91cCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICAgIGlmICgoZ3JvdXAgPT09IG51bGwgfHwgZ3JvdXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKS5sZW5ndGgpIDwgNSB8fCBncm91cCA9PT0gc2VsZWN0ZWRFbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgZ3JvdXAgPT09IG51bGwgfHwgZ3JvdXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdyb3VwLmluc2VydEJlZm9yZShzZWxlY3RlZEVsZW1lbnQsIHRhcmdldCk7XG4gICAgfVxuICAgIHNlbGVjdGVkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtY2FyZFwiKTtcbiAgICBzZWxlY3RlZEVsZW1lbnQgPSBudWxsO1xufVxuZnVuY3Rpb24gaGFuZGxlR3JvdXBDbGljayhlKSB7XG4gICAgaWYgKHNlbGVjdGVkRWxlbWVudCA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGdyb3VwID0gZS50YXJnZXQ7XG4gICAgaWYgKChncm91cCA9PT0gbnVsbCB8fCBncm91cCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ3JvdXAucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkXCIpLmxlbmd0aCkgPCA1KSB7XG4gICAgICAgIGdyb3VwID09PSBudWxsIHx8IGdyb3VwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBncm91cC5hcHBlbmRDaGlsZChzZWxlY3RlZEVsZW1lbnQpO1xuICAgIH1cbiAgICBzZWxlY3RlZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLWNhcmRcIik7XG4gICAgc2VsZWN0ZWRFbGVtZW50ID0gbnVsbDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HYW1lR3Vlc3QgPSBleHBvcnRzLkdhbWUgPSBleHBvcnRzLlBsYXllciA9IGV4cG9ydHMuU3RhdGUgPSB2b2lkIDA7XG5jb25zdCBjYXJkc18xID0gcmVxdWlyZShcIi4vY2FyZHNcIik7XG52YXIgU3RhdGU7XG4oZnVuY3Rpb24gKFN0YXRlKSB7XG4gICAgU3RhdGVbU3RhdGVbXCJXYWl0XCJdID0gMF0gPSBcIldhaXRcIjtcbiAgICBTdGF0ZVtTdGF0ZVtcIkNob29zZVwiXSA9IDFdID0gXCJDaG9vc2VcIjtcbiAgICBTdGF0ZVtTdGF0ZVtcIkxlYXZlXCJdID0gMl0gPSBcIkxlYXZlXCI7XG59KShTdGF0ZSB8fCAoZXhwb3J0cy5TdGF0ZSA9IFN0YXRlID0ge30pKTtcbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGFuZCA9IFtdO1xuICAgICAgICB0aGlzLnJlc2VydmUgPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLldhaXQ7XG4gICAgfVxuICAgIGFkZChjYXJkKSB7XG4gICAgICAgIGlmICh0aGlzLmhhbmQubGVuZ3RoID4gMTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkhhbmQgb2YgcGxheWVyIGlzIHRvbyBiaWdcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kLnB1c2goY2FyZCk7XG4gICAgfVxuICAgIGFkZFJlc2VydmUoY2FyZCkge1xuICAgICAgICB0aGlzLnJlc2VydmUucHVzaChjYXJkKTtcbiAgICB9XG4gICAgY2hlY2tXaW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrV2luSGVscChbXSwgW10sIFtdLCBbLi4udGhpcy5oYW5kXSk7XG4gICAgfVxuICAgIGNoZWNrV2luSGVscChhLCBiLCBjLCBkZWNrKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrR3JvdXBzKGEsIGIsIGMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYS5sZW5ndGggPiA1IHx8IGIubGVuZ3RoID4gNCB8fCBjLmxlbmd0aCA+IDMpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChhLmxlbmd0aCA9PT0gNSAmJiAhdGhpcy5jaGVja0dyb3VwKGEpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoYi5sZW5ndGggPT09IDQgJiYgIXRoaXMuY2hlY2tHcm91cChiKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGMubGVuZ3RoID09PSAzICYmICF0aGlzLmNoZWNrR3JvdXAoYykpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkZWNrLnBvcCgpO1xuICAgICAgICBpZiAoY2FyZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1dpbkhlbHAoWy4uLmEsIGNhcmRdLCBiLCBjLCBbLi4uZGVja10pKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tXaW5IZWxwKGEsIFsuLi5iLCBjYXJkXSwgYywgWy4uLmRlY2tdKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrV2luSGVscChhLCBiLCBbLi4uYywgY2FyZF0sIFsuLi5kZWNrXSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjaGVja0dyb3VwcyhhLCBiLCBjKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGVja1NpemUoYS5sZW5ndGgsIGIubGVuZ3RoLCBjLmxlbmd0aCkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrR3JvdXAoYSkgJiYgdGhpcy5jaGVja0dyb3VwKGIpICYmIHRoaXMuY2hlY2tHcm91cChjKTtcbiAgICB9XG4gICAgY2hlY2tHcm91cChhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrU2VxdWVuY2UoYSkgfHwgdGhpcy5jaGVja1N0YWlyKGEpO1xuICAgIH1cbiAgICBjaGVja1NlcXVlbmNlKGEpIHtcbiAgICAgICAgaWYgKGEubGVuZ3RoIDwgMylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgbGV0IHRlc3QgPSAoKDEgPDwgMTQpIC0gMSkgPDwgNDtcbiAgICAgICAgZm9yIChsZXQgYyBvZiBhKSB7XG4gICAgICAgICAgICB0ZXN0ICY9IGM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlc3QgIT09IDA7XG4gICAgfVxuICAgIGNoZWNrU3RhaXIoYSkge1xuICAgICAgICBpZiAoYS5sZW5ndGggPCAzKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBsZXQgdGVzdCA9IDA7XG4gICAgICAgIGZvciAobGV0IGMgb2YgYSkge1xuICAgICAgICAgICAgdGVzdCB8PSBjO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzdWl0VGVzdCA9ICgoMSA8PCA0KSAtIDEpICYgdGVzdDtcbiAgICAgICAgaWYgKHN1aXRUZXN0ID09PSAwIHx8XG4gICAgICAgICAgICAoc3VpdFRlc3QgJiAoc3VpdFRlc3QgLSAxKSkgIT09IDApXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHRlc3QgJj0gKCgxIDw8IDE0KSAtIDEpIDw8IDQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGVzdCAmPSAodGVzdCA8PCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVzdCAhPT0gMDtcbiAgICB9XG4gICAgY2hlY2tTaXplKGEsIGIsIGMpIHtcbiAgICAgICAgcmV0dXJuIGEgKyBiICsgYyA9PSAxMSAmJiBhID49IDMgJiYgYiA+PSAzICYmIGMgPj0gMztcbiAgICB9XG4gICAgY2hvb3NlKGNhcmQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IFN0YXRlLkNob29zZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxheWVyIG5vdCBpbiBjaG9vc2Ugc3RhdGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kLnB1c2goY2FyZCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuTGVhdmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBjYXJkcyBpbiBhcmd1bWVudFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZWF2ZShpbmRleCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gU3RhdGUuTGVhdmUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsYXllciBub3QgaW4gbGVhdmUgc3RhdGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHRoaXMuaGFuZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluZGV4IG91dCBvZiBib3VuZHNcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgW2NhcmRdID0gdGhpcy5oYW5kLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5XYWl0O1xuICAgICAgICByZXR1cm4gY2FyZDtcbiAgICB9XG59XG5leHBvcnRzLlBsYXllciA9IFBsYXllcjtcbmNsYXNzIEdhbWUge1xuICAgIDtcbiAgICBjb25zdHJ1Y3RvcihudW1iZXJQbGF5ZXJzKSB7XG4gICAgICAgIHRoaXMucGxheWVycyA9IFtdO1xuICAgICAgICB0aGlzLmRlY2sgPSBbXTtcbiAgICAgICAgdGhpcy5wbGF5ZXJJbmRleCA9IDA7XG4gICAgICAgIGlmIChudW1iZXJQbGF5ZXJzIDwgMilcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdhbWUgbmVlZHMgYXRsZWFzdCAyIHBsYXllclwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJQbGF5ZXJzOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVycy5wdXNoKG5ldyBQbGF5ZXIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBsYXllcnNbdGhpcy5wbGF5ZXJJbmRleF07XG4gICAgICAgIHRoaXMuZGVjayA9ICgwLCBjYXJkc18xLmNyZWF0ZURlY2spKDEpO1xuICAgICAgICAoMCwgY2FyZHNfMS5zaHVmZmxlKSh0aGlzLmRlY2spO1xuICAgICAgICB0aGlzLmRlYWwoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc3RhdGUgPSBTdGF0ZS5DaG9vc2U7XG4gICAgfVxuICAgIGRlYWwoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgcGxheWVyIG9mIHRoaXMucGxheWVycykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmRlY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNhcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLmFkZChjYXJkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGNhcmRzIGxlZnQgdG8gZGVhbFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbmV4dFBsYXllcihjYXJkKSB7XG4gICAgICAgIHRoaXMucGxheWVySW5kZXggPSAodGhpcy5wbGF5ZXJJbmRleCArIDEpICUgdGhpcy5wbGF5ZXJzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBsYXllcnNbdGhpcy5wbGF5ZXJJbmRleF07XG4gICAgICAgIHRoaXMucGxheWVyLmFkZFJlc2VydmUoY2FyZCk7XG4gICAgICAgIHRoaXMucGxheWVyLnN0YXRlID0gU3RhdGUuQ2hvb3NlO1xuICAgIH1cbn1cbmV4cG9ydHMuR2FtZSA9IEdhbWU7XG5jbGFzcyBHYW1lR3Vlc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgICB9XG59XG5leHBvcnRzLkdhbWVHdWVzdCA9IEdhbWVHdWVzdDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGRpc3BsYXlfMSA9IHJlcXVpcmUoXCIuL2Rpc3BsYXlcIik7XG5jb25zdCBnYW1lXzEgPSByZXF1aXJlKFwiLi9nYW1lXCIpO1xuY29uc3QgZ2FtZSA9IG5ldyBnYW1lXzEuR2FtZSgyKTtcbigwLCBkaXNwbGF5XzEuZGlzcGxheVBsYXllckhhbmQpKGdhbWUucGxheWVyKTtcbigwLCBkaXNwbGF5XzEuc2V0dXApKGdhbWUucGxheWVyLCBoYW5kbGVEZWNrQ2xpY2ssIGhhbmRsZU5leHRDbGljayk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgcmVjZWl2ZU1lc3NhZ2UsIGZhbHNlKTtcbmZ1bmN0aW9uIHJlY2VpdmVNZXNzYWdlKHsgZGF0YSB9KSB7XG4gICAgY29uc29sZS5sb2coYEhvc3QgUmVjZWl2ZWQgZnJvbSB3aW5kb3cgJHtkYXRhfWApO1xuICAgIGNvbnN0IFtjbWQsIGFyZ10gPSBkYXRhLnNwbGl0KC8gKC4qKS9zKTtcbiAgICBzd2l0Y2ggKGNtZCkge1xuICAgICAgICBjYXNlIFwic3RhcnRcIjpcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKFwiaGFuZCBcIiArIEpTT04uc3RyaW5naWZ5KGdhbWUucGxheWVyc1sxXS5oYW5kKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhvc3QgU3RhcnRlZFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VudCBoYW5kXCIpO1xuICAgICAgICAgICAgKDAsIGRpc3BsYXlfMS5kaXNwbGF5UGxheWVySGFuZCkoZ2FtZS5wbGF5ZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZ2FtZSkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJwb3BcIjpcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKFwiZGVjayBcIiArIGdhbWUuZGVjay5wb3AoKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlbnQgZGVjayBwb3BcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm5leHRcIjpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgbmV4dFwiKTtcbiAgICAgICAgICAgIGdhbWUubmV4dFBsYXllcihwYXJzZUludChhcmcpKTtcbiAgICAgICAgICAgICgwLCBkaXNwbGF5XzEuZGlzcGxheVBsYXllckhhbmQpKGdhbWUucGxheWVyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbmNvbnN0IHNlbmRNZXNzYWdlID0gd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZTtcbmZ1bmN0aW9uIGhhbmRsZURlY2tDbGljayhfZSwgcGxheWVyKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHBsYXllci5zdGF0ZSA9PT0gZ2FtZV8xLlN0YXRlLkNob29zZSkge1xuICAgICAgICAgICAgY29uc3QgY2FyZCA9IGdhbWUuZGVjay5wb3AoKTtcbiAgICAgICAgICAgIHBsYXllci5jaG9vc2UoY2FyZCk7XG4gICAgICAgICAgICAoMCwgZGlzcGxheV8xLmRpc3BsYXlQbGF5ZXJIYW5kKShwbGF5ZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGdldCBjYXJkIGZyb20gZGVjay4gJHtlcnJ9YCk7XG4gICAgfVxufVxuZnVuY3Rpb24gaGFuZGxlTmV4dENsaWNrKF9lLCBwbGF5ZXIsIHNlbGVjdGVkRWxlbWVudCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoc2VsZWN0ZWRFbGVtZW50LmRhdGFzZXQuaW5kZXggfHwgXCItMVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBwbGF5ZXIubGVhdmUoaW5kZXgpO1xuICAgICAgICAgICAgZ2FtZS5uZXh0UGxheWVyKGNhcmQpO1xuICAgICAgICAgICAgc2VuZE1lc3NhZ2UoXCJuZXh0IFwiICsgY2FyZCk7XG4gICAgICAgICAgICAoMCwgZGlzcGxheV8xLmRpc3BsYXlQbGF5ZXJIYW5kKShwbGF5ZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGxlYXZlIGNhcmQuICR7ZXJyfWApO1xuICAgIH1cbn1cbi8vIGZ1bmN0aW9uIHRpbWVyKGFub246IEZ1bmN0aW9uKSB7XG4vLyAgICAgY29uc3QgVHJpYWxzID0gMTAwO1xuLy8gICAgIGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4vL1xuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgVHJpYWxzOyBpKyspIHtcbi8vICAgICAgICAgYW5vbigpO1xuLy8gICAgIH1cbi8vXG4vLyAgICAgY29uc3QgZW5kID0gcGVyZm9ybWFuY2Uubm93KCk7XG4vLyAgICAgY29uc29sZS5sb2coYEV4ZWN1dGlvbiB0aW1lOiAkeyhlbmQgLSBzdGFydCkgLyBUcmlhbHN9IG1zYCk7XG4vLyB9XG4vL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9