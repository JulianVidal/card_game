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
function setup(game) {
    const deckElement = document.getElementById("deck");
    deckElement === null || deckElement === void 0 ? void 0 : deckElement.addEventListener("click", e => handleDeckClick(e, game));
    const reserveElement = document.getElementById("reserve");
    reserveElement === null || reserveElement === void 0 ? void 0 : reserveElement.addEventListener("click", e => handleReserveClick(e, game));
    const nextElement = document.getElementById("next");
    nextElement === null || nextElement === void 0 ? void 0 : nextElement.addEventListener("click", e => handleNextClick(e, game));
    const cardElements = document.querySelectorAll("#player>img");
    for (let i = 0; i < cardElements.length; i++) {
        const cardElement = cardElements[i];
        cardElement.addEventListener('click', e => handleClick(e, game));
    }
}
exports.setup = setup;
function handleNextClick(_e, game) {
    try {
        if (selectedElement !== null) {
            const index = parseInt(selectedElement.dataset.index || "-1");
            const card = game.player.leave(index);
            game.nextPlayer(card);
            displayPlayerHand(game.player);
        }
    }
    catch (err) {
        console.error(`Failed to leave card. ${err}`);
    }
}
function handleReserveClick(_e, game) {
    try {
        game.player.choose(game.player.reserve.pop());
        displayPlayerHand(game.player);
    }
    catch (err) {
        console.error(`Failed to get card from reserve. ${err}`);
    }
}
function handleDeckClick(_e, game) {
    try {
        game.player.choose(game.deck.pop());
        displayPlayerHand(game.player);
    }
    catch (err) {
        console.error(`Failed to get card from deck. ${err}`);
    }
}
function displayPlayerHand(player) {
    const cardElements = document.querySelectorAll("#player>img");
    if (cardElements !== undefined) {
        for (let i = 0; i < 11; i++) {
            const card = player.hand[i];
            const cardElement = cardElements[i];
            if (card !== undefined) {
                cardElement.src = "./cards/" + (0, cards_1.getSVG)(card) + ".svg";
                cardElement.style.visibility = "";
            }
            else {
                cardElement.style.visibility = "hidden";
            }
        }
    }
    else {
        throw new Error("Cards to replace not found");
    }
}
exports.displayPlayerHand = displayPlayerHand;
let selectedElement = null;
function handleClick(e, game) {
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
    [selectedElement.src, target.src] = [target.src, selectedElement.src];
    const index = parseInt(selectedElement.dataset.index || "0");
    const jindex = parseInt(target.dataset.index || "0");
    [game.player.hand[index], game.player.hand[jindex]] = [game.player.hand[jindex], game.player.hand[index]];
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
let game;
window.addEventListener("message", receiveMessage, false);
function receiveMessage({ data }) {
    console.log(`Received from window ${data}`);
    switch (data) {
        case "start":
            game = new game_1.Game(2);
            (0, display_1.setup)(game, "./cards");
            sendMessage("hand " + JSON.stringify(game.players[1].hand));
            console.log("Started and sent hand");
            (0, display_1.displayPlayerHand)(game.player);
            console.log(JSON.stringify(game));
            break;
    }
}
const sendMessage = window.parent.postMessage;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixjQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7Ozs7O1VDNUpqQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFrQixtQkFBTyxDQUFDLG1DQUFXO0FBQ3JDLGVBQWUsbUJBQU8sQ0FBQyw2QkFBUTtBQUMvQjtBQUNBO0FBQ0EsMEJBQTBCLE1BQU07QUFDaEMsd0NBQXdDLEtBQUs7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsWUFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx3QkFBd0I7QUFDOUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcmRfZ2FtZS8uL3NyYy9jYXJkcy50cyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9zcmMvZGlzcGxheS50cyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9zcmMvZ2FtZS50cyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gQ2FyZCBCaXQgU3RydWN0dXJlXG4vLyBcbi8vIDAwMDEgQ2x1YnNcbi8vIDAwMTAgRGlhbW9uZHNcbi8vIDAxMDAgSGVhcnRzXG4vLyAxMDAwIFNwYWRlc1xuLy9cbi8vIDEwMDAwMDAwMDAwMDAxIEFjZVxuLy8gMDAwMDAwMDAwMDAwMTAgVHdvIFxuLy8gMDAwMDAwMDAwMDAxMDAgVGhyZWUgXG4vL1xuLy8gQ2FyZCAyIG9mIENsdWJzXG4vLyAwMDAwMDAwMDAwMDAxMCAxMDAwXG4vL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zd2FwID0gZXhwb3J0cy5zaHVmZmxlID0gZXhwb3J0cy5jcmVhdGVEZWNrID0gZXhwb3J0cy5jcmVhdGVFbXB0eURlY2sgPSBleHBvcnRzLmdldFNWRyA9IGV4cG9ydHMuZ2V0U3RyaW5nID0gZXhwb3J0cy5nZXRSYW5rID0gZXhwb3J0cy5nZXRTdWl0ID0gZXhwb3J0cy5jcmVhdGVDYXJkID0gZXhwb3J0cy5TdWl0RW50cmllcyA9IGV4cG9ydHMuUmFua0VudHJpZXMgPSBleHBvcnRzLlJhbmsgPSBleHBvcnRzLlN1aXQgPSB2b2lkIDA7XG52YXIgU3VpdDtcbihmdW5jdGlvbiAoU3VpdCkge1xuICAgIFN1aXRbU3VpdFtcIkNsdWJzXCJdID0gMV0gPSBcIkNsdWJzXCI7XG4gICAgU3VpdFtTdWl0W1wiRGlhbW9uZHNcIl0gPSAyXSA9IFwiRGlhbW9uZHNcIjtcbiAgICBTdWl0W1N1aXRbXCJIZWFydHNcIl0gPSA0XSA9IFwiSGVhcnRzXCI7XG4gICAgU3VpdFtTdWl0W1wiU3BhZGVzXCJdID0gOF0gPSBcIlNwYWRlc1wiO1xufSkoU3VpdCB8fCAoZXhwb3J0cy5TdWl0ID0gU3VpdCA9IHt9KSk7XG52YXIgUmFuaztcbihmdW5jdGlvbiAoUmFuaykge1xuICAgIFJhbmtbUmFua1tcIkFjZVwiXSA9IDEzMTA4OF0gPSBcIkFjZVwiO1xuICAgIFJhbmtbUmFua1tcIlR3b1wiXSA9IDMyXSA9IFwiVHdvXCI7XG4gICAgUmFua1tSYW5rW1wiVGhyZWVcIl0gPSA2NF0gPSBcIlRocmVlXCI7XG4gICAgUmFua1tSYW5rW1wiRm91clwiXSA9IDEyOF0gPSBcIkZvdXJcIjtcbiAgICBSYW5rW1JhbmtbXCJGaXZlXCJdID0gMjU2XSA9IFwiRml2ZVwiO1xuICAgIFJhbmtbUmFua1tcIlNpeFwiXSA9IDUxMl0gPSBcIlNpeFwiO1xuICAgIFJhbmtbUmFua1tcIlNldmVuXCJdID0gMTAyNF0gPSBcIlNldmVuXCI7XG4gICAgUmFua1tSYW5rW1wiRWlnaHRcIl0gPSAyMDQ4XSA9IFwiRWlnaHRcIjtcbiAgICBSYW5rW1JhbmtbXCJOaW5lXCJdID0gNDA5Nl0gPSBcIk5pbmVcIjtcbiAgICBSYW5rW1JhbmtbXCJUZW5cIl0gPSA4MTkyXSA9IFwiVGVuXCI7XG4gICAgUmFua1tSYW5rW1wiSmFja1wiXSA9IDE2Mzg0XSA9IFwiSmFja1wiO1xuICAgIFJhbmtbUmFua1tcIlF1ZWVuXCJdID0gMzI3NjhdID0gXCJRdWVlblwiO1xuICAgIFJhbmtbUmFua1tcIktpbmdcIl0gPSA2NTUzNl0gPSBcIktpbmdcIjtcbn0pKFJhbmsgfHwgKGV4cG9ydHMuUmFuayA9IFJhbmsgPSB7fSkpO1xuY29uc3QgU3VpdFRvU3ZnID0ge1xuICAgIFwiQ2x1YnNcIjogXCJDXCIsXG4gICAgXCJEaWFtb25kc1wiOiBcIkRcIixcbiAgICBcIkhlYXJ0c1wiOiBcIkhcIixcbiAgICBcIlNwYWRlc1wiOiBcIlNcIixcbn07XG5jb25zdCBSYW5rVG9TdmcgPSB7XG4gICAgXCJBY2VcIjogXCJBXCIsXG4gICAgXCJUd29cIjogXCIyXCIsXG4gICAgXCJUaHJlZVwiOiBcIjNcIixcbiAgICBcIkZvdXJcIjogXCI0XCIsXG4gICAgXCJGaXZlXCI6IFwiNVwiLFxuICAgIFwiU2l4XCI6IFwiNlwiLFxuICAgIFwiU2V2ZW5cIjogXCI3XCIsXG4gICAgXCJFaWdodFwiOiBcIjhcIixcbiAgICBcIk5pbmVcIjogXCI5XCIsXG4gICAgXCJUZW5cIjogXCIxMFwiLFxuICAgIFwiSmFja1wiOiBcIkpcIixcbiAgICBcIlF1ZWVuXCI6IFwiUVwiLFxuICAgIFwiS2luZ1wiOiBcIktcIixcbn07XG5leHBvcnRzLlJhbmtFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoUmFuaykuc2xpY2UoMTMpO1xuZXhwb3J0cy5TdWl0RW50cmllcyA9IE9iamVjdC5lbnRyaWVzKFN1aXQpLnNsaWNlKDQpO1xuZnVuY3Rpb24gY3JlYXRlQ2FyZChyYW5rLCBzdWl0KSB7XG4gICAgcmV0dXJuIHJhbmsgfCBzdWl0O1xufVxuZXhwb3J0cy5jcmVhdGVDYXJkID0gY3JlYXRlQ2FyZDtcbmZ1bmN0aW9uIGdldFN1aXQoY2FyZCkge1xuICAgIGNvbnN0IHN1aXRiID0gKCgxIDw8IDQpIC0gMSkgJiBjYXJkO1xuICAgIGZvciAobGV0IFtuYW1lLCBzdWl0XSBvZiBleHBvcnRzLlN1aXRFbnRyaWVzKSB7XG4gICAgICAgIGlmIChzdWl0ID09PSBzdWl0YilcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdWl0IG5vdCBmb3VuZFwiKTtcbn1cbmV4cG9ydHMuZ2V0U3VpdCA9IGdldFN1aXQ7XG5mdW5jdGlvbiBnZXRSYW5rKGNhcmQpIHtcbiAgICBjb25zdCByYW5rYiA9ICgoKDEgPDwgMTQpIC0gMSkgPDwgNCkgJiBjYXJkO1xuICAgIGZvciAobGV0IFtuYW1lLCByYW5rXSBvZiBleHBvcnRzLlJhbmtFbnRyaWVzKSB7XG4gICAgICAgIGlmIChyYW5rID09PSByYW5rYilcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJSYW5rIG5vdCBmb3VuZFwiKTtcbn1cbmV4cG9ydHMuZ2V0UmFuayA9IGdldFJhbms7XG5mdW5jdGlvbiBnZXRTdHJpbmcoY2FyZCkge1xuICAgIHJldHVybiBgJHtnZXRTdWl0KGNhcmQpfSAke2dldFJhbmsoY2FyZCl9YDtcbn1cbmV4cG9ydHMuZ2V0U3RyaW5nID0gZ2V0U3RyaW5nO1xuZnVuY3Rpb24gZ2V0U1ZHKGNhcmQpIHtcbiAgICBjb25zdCBbc3VpdCwgcmFua10gPSBnZXRTdHJpbmcoY2FyZCkuc3BsaXQoXCIgXCIpO1xuICAgIGxldCBzdmcgPSBcIlwiO1xuICAgIHN2ZyArPSBSYW5rVG9TdmdbcmFua107XG4gICAgc3ZnICs9IFN1aXRUb1N2Z1tzdWl0XTtcbiAgICByZXR1cm4gc3ZnO1xufVxuZXhwb3J0cy5nZXRTVkcgPSBnZXRTVkc7XG5mdW5jdGlvbiBjcmVhdGVFbXB0eURlY2soKSB7XG4gICAgcmV0dXJuIFtdO1xufVxuZXhwb3J0cy5jcmVhdGVFbXB0eURlY2sgPSBjcmVhdGVFbXB0eURlY2s7XG5mdW5jdGlvbiBjcmVhdGVEZWNrKHNpemUpIHtcbiAgICBsZXQgZGVjayA9IFtdO1xuICAgIGZvciAobGV0IHMgPSAwOyBzIDwgc2l6ZTsgcysrKSB7XG4gICAgICAgIGZvciAobGV0IFtzdWl0LCBfXSBvZiBleHBvcnRzLlN1aXRFbnRyaWVzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBbcmFuaywgX10gb2YgZXhwb3J0cy5SYW5rRW50cmllcykge1xuICAgICAgICAgICAgICAgIGRlY2sucHVzaChjcmVhdGVDYXJkKFJhbmtbcmFua10sIFN1aXRbc3VpdF0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVjaztcbn1cbmV4cG9ydHMuY3JlYXRlRGVjayA9IGNyZWF0ZURlY2s7XG5mdW5jdGlvbiBzaHVmZmxlKGRlY2spIHtcbiAgICBsZXQgY3VycmVudF9pbmRleCA9IGRlY2subGVuZ3RoO1xuICAgIHdoaWxlIChjdXJyZW50X2luZGV4ICE9IDApIHtcbiAgICAgICAgbGV0IHJhbmRvbV9pbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRlY2subGVuZ3RoKTtcbiAgICAgICAgY3VycmVudF9pbmRleCAtPSAxO1xuICAgICAgICBzd2FwKGRlY2ssIGN1cnJlbnRfaW5kZXgsIHJhbmRvbV9pbmRleCk7XG4gICAgfVxufVxuZXhwb3J0cy5zaHVmZmxlID0gc2h1ZmZsZTtcbmZ1bmN0aW9uIHN3YXAoZGVjaywgY3VycmVudF9pbmRleCwgcmFuZG9tX2luZGV4KSB7XG4gICAgW2RlY2tbY3VycmVudF9pbmRleF0sIGRlY2tbcmFuZG9tX2luZGV4XV0gPSBbZGVja1tyYW5kb21faW5kZXhdLCBkZWNrW2N1cnJlbnRfaW5kZXhdXTtcbn1cbmV4cG9ydHMuc3dhcCA9IHN3YXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGlzcGxheVBsYXllckhhbmQgPSBleHBvcnRzLnNldHVwID0gdm9pZCAwO1xuY29uc3QgY2FyZHNfMSA9IHJlcXVpcmUoXCIuL2NhcmRzXCIpO1xuZnVuY3Rpb24gc2V0dXAoZ2FtZSkge1xuICAgIGNvbnN0IGRlY2tFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWNrXCIpO1xuICAgIGRlY2tFbGVtZW50ID09PSBudWxsIHx8IGRlY2tFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWNrRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiBoYW5kbGVEZWNrQ2xpY2soZSwgZ2FtZSkpO1xuICAgIGNvbnN0IHJlc2VydmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlcnZlXCIpO1xuICAgIHJlc2VydmVFbGVtZW50ID09PSBudWxsIHx8IHJlc2VydmVFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXNlcnZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiBoYW5kbGVSZXNlcnZlQ2xpY2soZSwgZ2FtZSkpO1xuICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0XCIpO1xuICAgIG5leHRFbGVtZW50ID09PSBudWxsIHx8IG5leHRFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuZXh0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiBoYW5kbGVOZXh0Q2xpY2soZSwgZ2FtZSkpO1xuICAgIGNvbnN0IGNhcmRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyPmltZ1wiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmRFbGVtZW50c1tpXTtcbiAgICAgICAgY2FyZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGhhbmRsZUNsaWNrKGUsIGdhbWUpKTtcbiAgICB9XG59XG5leHBvcnRzLnNldHVwID0gc2V0dXA7XG5mdW5jdGlvbiBoYW5kbGVOZXh0Q2xpY2soX2UsIGdhbWUpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KHNlbGVjdGVkRWxlbWVudC5kYXRhc2V0LmluZGV4IHx8IFwiLTFcIik7XG4gICAgICAgICAgICBjb25zdCBjYXJkID0gZ2FtZS5wbGF5ZXIubGVhdmUoaW5kZXgpO1xuICAgICAgICAgICAgZ2FtZS5uZXh0UGxheWVyKGNhcmQpO1xuICAgICAgICAgICAgZGlzcGxheVBsYXllckhhbmQoZ2FtZS5wbGF5ZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGxlYXZlIGNhcmQuICR7ZXJyfWApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGhhbmRsZVJlc2VydmVDbGljayhfZSwgZ2FtZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGdhbWUucGxheWVyLmNob29zZShnYW1lLnBsYXllci5yZXNlcnZlLnBvcCgpKTtcbiAgICAgICAgZGlzcGxheVBsYXllckhhbmQoZ2FtZS5wbGF5ZXIpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBnZXQgY2FyZCBmcm9tIHJlc2VydmUuICR7ZXJyfWApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGhhbmRsZURlY2tDbGljayhfZSwgZ2FtZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGdhbWUucGxheWVyLmNob29zZShnYW1lLmRlY2sucG9wKCkpO1xuICAgICAgICBkaXNwbGF5UGxheWVySGFuZChnYW1lLnBsYXllcik7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGdldCBjYXJkIGZyb20gZGVjay4gJHtlcnJ9YCk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGlzcGxheVBsYXllckhhbmQocGxheWVyKSB7XG4gICAgY29uc3QgY2FyZEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwbGF5ZXI+aW1nXCIpO1xuICAgIGlmIChjYXJkRWxlbWVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDExOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBwbGF5ZXIuaGFuZFtpXTtcbiAgICAgICAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZEVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgaWYgKGNhcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNhcmRFbGVtZW50LnNyYyA9IFwiLi9jYXJkcy9cIiArICgwLCBjYXJkc18xLmdldFNWRykoY2FyZCkgKyBcIi5zdmdcIjtcbiAgICAgICAgICAgICAgICBjYXJkRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhcmRFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYXJkcyB0byByZXBsYWNlIG5vdCBmb3VuZFwiKTtcbiAgICB9XG59XG5leHBvcnRzLmRpc3BsYXlQbGF5ZXJIYW5kID0gZGlzcGxheVBsYXllckhhbmQ7XG5sZXQgc2VsZWN0ZWRFbGVtZW50ID0gbnVsbDtcbmZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUsIGdhbWUpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAoc2VsZWN0ZWRFbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgIHNlbGVjdGVkRWxlbWVudCA9IHRhcmdldDtcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC1jYXJkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgPT09IHRhcmdldCkge1xuICAgICAgICBzZWxlY3RlZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLWNhcmRcIik7XG4gICAgICAgIHNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgW3NlbGVjdGVkRWxlbWVudC5zcmMsIHRhcmdldC5zcmNdID0gW3RhcmdldC5zcmMsIHNlbGVjdGVkRWxlbWVudC5zcmNdO1xuICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoc2VsZWN0ZWRFbGVtZW50LmRhdGFzZXQuaW5kZXggfHwgXCIwXCIpO1xuICAgIGNvbnN0IGppbmRleCA9IHBhcnNlSW50KHRhcmdldC5kYXRhc2V0LmluZGV4IHx8IFwiMFwiKTtcbiAgICBbZ2FtZS5wbGF5ZXIuaGFuZFtpbmRleF0sIGdhbWUucGxheWVyLmhhbmRbamluZGV4XV0gPSBbZ2FtZS5wbGF5ZXIuaGFuZFtqaW5kZXhdLCBnYW1lLnBsYXllci5oYW5kW2luZGV4XV07XG4gICAgc2VsZWN0ZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC1jYXJkXCIpO1xuICAgIHNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2FtZUd1ZXN0ID0gZXhwb3J0cy5HYW1lID0gZXhwb3J0cy5QbGF5ZXIgPSBleHBvcnRzLlN0YXRlID0gdm9pZCAwO1xuY29uc3QgY2FyZHNfMSA9IHJlcXVpcmUoXCIuL2NhcmRzXCIpO1xudmFyIFN0YXRlO1xuKGZ1bmN0aW9uIChTdGF0ZSkge1xuICAgIFN0YXRlW1N0YXRlW1wiV2FpdFwiXSA9IDBdID0gXCJXYWl0XCI7XG4gICAgU3RhdGVbU3RhdGVbXCJDaG9vc2VcIl0gPSAxXSA9IFwiQ2hvb3NlXCI7XG4gICAgU3RhdGVbU3RhdGVbXCJMZWF2ZVwiXSA9IDJdID0gXCJMZWF2ZVwiO1xufSkoU3RhdGUgfHwgKGV4cG9ydHMuU3RhdGUgPSBTdGF0ZSA9IHt9KSk7XG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhbmQgPSBbXTtcbiAgICAgICAgdGhpcy5yZXNlcnZlID0gW107XG4gICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5XYWl0O1xuICAgIH1cbiAgICBhZGQoY2FyZCkge1xuICAgICAgICBpZiAodGhpcy5oYW5kLmxlbmd0aCA+IDExKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJIYW5kIG9mIHBsYXllciBpcyB0b28gYmlnXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZC5wdXNoKGNhcmQpO1xuICAgIH1cbiAgICBhZGRSZXNlcnZlKGNhcmQpIHtcbiAgICAgICAgdGhpcy5yZXNlcnZlLnB1c2goY2FyZCk7XG4gICAgfVxuICAgIGNoZWNrV2luKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja1dpbkhlbHAoW10sIFtdLCBbXSwgWy4uLnRoaXMuaGFuZF0pO1xuICAgIH1cbiAgICBjaGVja1dpbkhlbHAoYSwgYiwgYywgZGVjaykge1xuICAgICAgICBpZiAodGhpcy5jaGVja0dyb3VwcyhhLCBiLCBjKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEubGVuZ3RoID4gNSB8fCBiLmxlbmd0aCA+IDQgfHwgYy5sZW5ndGggPiAzKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoYS5sZW5ndGggPT09IDUgJiYgIXRoaXMuY2hlY2tHcm91cChhKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGIubGVuZ3RoID09PSA0ICYmICF0aGlzLmNoZWNrR3JvdXAoYikpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChjLmxlbmd0aCA9PT0gMyAmJiAhdGhpcy5jaGVja0dyb3VwKGMpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBjYXJkID0gZGVjay5wb3AoKTtcbiAgICAgICAgaWYgKGNhcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tXaW5IZWxwKFsuLi5hLCBjYXJkXSwgYiwgYywgWy4uLmRlY2tdKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrV2luSGVscChhLCBbLi4uYiwgY2FyZF0sIGMsIFsuLi5kZWNrXSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1dpbkhlbHAoYSwgYiwgWy4uLmMsIGNhcmRdLCBbLi4uZGVja10pKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY2hlY2tHcm91cHMoYSwgYiwgYykge1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2tTaXplKGEubGVuZ3RoLCBiLmxlbmd0aCwgYy5sZW5ndGgpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0dyb3VwKGEpICYmIHRoaXMuY2hlY2tHcm91cChiKSAmJiB0aGlzLmNoZWNrR3JvdXAoYyk7XG4gICAgfVxuICAgIGNoZWNrR3JvdXAoYSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja1NlcXVlbmNlKGEpIHx8IHRoaXMuY2hlY2tTdGFpcihhKTtcbiAgICB9XG4gICAgY2hlY2tTZXF1ZW5jZShhKSB7XG4gICAgICAgIGlmIChhLmxlbmd0aCA8IDMpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCB0ZXN0ID0gKCgxIDw8IDE0KSAtIDEpIDw8IDQ7XG4gICAgICAgIGZvciAobGV0IGMgb2YgYSkge1xuICAgICAgICAgICAgdGVzdCAmPSBjO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXN0ICE9PSAwO1xuICAgIH1cbiAgICBjaGVja1N0YWlyKGEpIHtcbiAgICAgICAgaWYgKGEubGVuZ3RoIDwgMylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgbGV0IHRlc3QgPSAwO1xuICAgICAgICBmb3IgKGxldCBjIG9mIGEpIHtcbiAgICAgICAgICAgIHRlc3QgfD0gYztcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3VpdFRlc3QgPSAoKDEgPDwgNCkgLSAxKSAmIHRlc3Q7XG4gICAgICAgIGlmIChzdWl0VGVzdCA9PT0gMCB8fFxuICAgICAgICAgICAgKHN1aXRUZXN0ICYgKHN1aXRUZXN0IC0gMSkpICE9PSAwKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0ZXN0ICY9ICgoMSA8PCAxNCkgLSAxKSA8PCA0O1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlc3QgJj0gKHRlc3QgPDwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlc3QgIT09IDA7XG4gICAgfVxuICAgIGNoZWNrU2l6ZShhLCBiLCBjKSB7XG4gICAgICAgIHJldHVybiBhICsgYiArIGMgPT0gMTEgJiYgYSA+PSAzICYmIGIgPj0gMyAmJiBjID49IDM7XG4gICAgfVxuICAgIGNob29zZShjYXJkKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBTdGF0ZS5DaG9vc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsYXllciBub3QgaW4gY2hvb3NlIHN0YXRlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYXJkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZC5wdXNoKGNhcmQpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLkxlYXZlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gY2FyZHMgaW4gYXJndW1lbnRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGVhdmUoaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IFN0YXRlLkxlYXZlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGF5ZXIgbm90IGluIGxlYXZlIHN0YXRlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiB0aGlzLmhhbmQubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbmRleCBvdXQgb2YgYm91bmRzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IFtjYXJkXSA9IHRoaXMuaGFuZC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuV2FpdDtcbiAgICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgfVxufVxuZXhwb3J0cy5QbGF5ZXIgPSBQbGF5ZXI7XG5jbGFzcyBHYW1lIHtcbiAgICA7XG4gICAgY29uc3RydWN0b3IobnVtYmVyUGxheWVycykge1xuICAgICAgICB0aGlzLnBsYXllcnMgPSBbXTtcbiAgICAgICAgdGhpcy5kZWNrID0gW107XG4gICAgICAgIHRoaXMucGxheWVySW5kZXggPSAwO1xuICAgICAgICBpZiAobnVtYmVyUGxheWVycyA8IDIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHYW1lIG5lZWRzIGF0bGVhc3QgMiBwbGF5ZXJcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyUGxheWVyczsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllcnMucHVzaChuZXcgUGxheWVyKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXJzW3RoaXMucGxheWVySW5kZXhdO1xuICAgICAgICB0aGlzLmRlY2sgPSAoMCwgY2FyZHNfMS5jcmVhdGVEZWNrKSgxKTtcbiAgICAgICAgKDAsIGNhcmRzXzEuc2h1ZmZsZSkodGhpcy5kZWNrKTtcbiAgICAgICAgdGhpcy5kZWFsKCk7XG4gICAgICAgIHRoaXMucGxheWVyLnN0YXRlID0gU3RhdGUuQ2hvb3NlO1xuICAgIH1cbiAgICBkZWFsKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHBsYXllciBvZiB0aGlzLnBsYXllcnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkID0gdGhpcy5kZWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIGlmIChjYXJkKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5hZGQoY2FyZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBjYXJkcyBsZWZ0IHRvIGRlYWxcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIG5leHRQbGF5ZXIoY2FyZCkge1xuICAgICAgICB0aGlzLnBsYXllckluZGV4ID0gKHRoaXMucGxheWVySW5kZXggKyAxKSAlIHRoaXMucGxheWVycy5sZW5ndGg7XG4gICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXJzW3RoaXMucGxheWVySW5kZXhdO1xuICAgICAgICB0aGlzLnBsYXllci5hZGRSZXNlcnZlKGNhcmQpO1xuICAgICAgICB0aGlzLnBsYXllci5zdGF0ZSA9IFN0YXRlLkNob29zZTtcbiAgICB9XG59XG5leHBvcnRzLkdhbWUgPSBHYW1lO1xuY2xhc3MgR2FtZUd1ZXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgfVxufVxuZXhwb3J0cy5HYW1lR3Vlc3QgPSBHYW1lR3Vlc3Q7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBkaXNwbGF5XzEgPSByZXF1aXJlKFwiLi9kaXNwbGF5XCIpO1xuY29uc3QgZ2FtZV8xID0gcmVxdWlyZShcIi4vZ2FtZVwiKTtcbmxldCBnYW1lO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHJlY2VpdmVNZXNzYWdlLCBmYWxzZSk7XG5mdW5jdGlvbiByZWNlaXZlTWVzc2FnZSh7IGRhdGEgfSkge1xuICAgIGNvbnNvbGUubG9nKGBSZWNlaXZlZCBmcm9tIHdpbmRvdyAke2RhdGF9YCk7XG4gICAgc3dpdGNoIChkYXRhKSB7XG4gICAgICAgIGNhc2UgXCJzdGFydFwiOlxuICAgICAgICAgICAgZ2FtZSA9IG5ldyBnYW1lXzEuR2FtZSgyKTtcbiAgICAgICAgICAgICgwLCBkaXNwbGF5XzEuc2V0dXApKGdhbWUsIFwiLi9jYXJkc1wiKTtcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKFwiaGFuZCBcIiArIEpTT04uc3RyaW5naWZ5KGdhbWUucGxheWVyc1sxXS5oYW5kKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN0YXJ0ZWQgYW5kIHNlbnQgaGFuZFwiKTtcbiAgICAgICAgICAgICgwLCBkaXNwbGF5XzEuZGlzcGxheVBsYXllckhhbmQpKGdhbWUucGxheWVyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGdhbWUpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbmNvbnN0IHNlbmRNZXNzYWdlID0gd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZTtcbi8vIGZ1bmN0aW9uIHRpbWVyKGFub246IEZ1bmN0aW9uKSB7XG4vLyAgICAgY29uc3QgVHJpYWxzID0gMTAwO1xuLy8gICAgIGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4vL1xuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgVHJpYWxzOyBpKyspIHtcbi8vICAgICAgICAgYW5vbigpO1xuLy8gICAgIH1cbi8vXG4vLyAgICAgY29uc3QgZW5kID0gcGVyZm9ybWFuY2Uubm93KCk7XG4vLyAgICAgY29uc29sZS5sb2coYEV4ZWN1dGlvbiB0aW1lOiAkeyhlbmQgLSBzdGFydCkgLyBUcmlhbHN9IG1zYCk7XG4vLyB9XG4vL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9