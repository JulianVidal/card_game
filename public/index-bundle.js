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
        game.player.choose(game.player.reserve);
        displayPlayerHand(game.player);
    }
    catch (err) {
        console.error(`Failed to get card from reserve. ${err}`);
    }
}
function handleDeckClick(_e, game) {
    try {
        game.player.choose(game.deck);
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
    choose(deck) {
        if (this.state !== State.Choose) {
            throw new Error("Player not in choose state");
        }
        const card = deck.pop();
        if (card !== undefined) {
            this.hand.push(card);
            this.state = State.Leave;
        }
        else {
            throw new Error("No cards in argument deck");
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
    nextPlayer(card) {
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
window.addEventListener("message", receiveMessage, false);
function receiveMessage(event) {
    console.log("iframe", event);
    (0, display_1.setup)(game);
    (0, display_1.displayPlayerHand)(game.player);
}
function sendMessage(msg) {
    window.parent.postMessage("Hello");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixjQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7Ozs7O1VDL0pqQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFrQixtQkFBTyxDQUFDLG1DQUFXO0FBQ3JDLGVBQWUsbUJBQU8sQ0FBQyw2QkFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFlBQVk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msd0JBQXdCO0FBQzlEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9zcmMvY2FyZHMudHMiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lLy4vc3JjL2Rpc3BsYXkudHMiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhcmRfZ2FtZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vIENhcmQgQml0IFN0cnVjdHVyZVxuLy8gXG4vLyAwMDAxIENsdWJzXG4vLyAwMDEwIERpYW1vbmRzXG4vLyAwMTAwIEhlYXJ0c1xuLy8gMTAwMCBTcGFkZXNcbi8vXG4vLyAxMDAwMDAwMDAwMDAwMSBBY2Vcbi8vIDAwMDAwMDAwMDAwMDEwIFR3byBcbi8vIDAwMDAwMDAwMDAwMTAwIFRocmVlIFxuLy9cbi8vIENhcmQgMiBvZiBDbHVic1xuLy8gMDAwMDAwMDAwMDAwMTAgMTAwMFxuLy9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3dhcCA9IGV4cG9ydHMuc2h1ZmZsZSA9IGV4cG9ydHMuY3JlYXRlRGVjayA9IGV4cG9ydHMuY3JlYXRlRW1wdHlEZWNrID0gZXhwb3J0cy5nZXRTVkcgPSBleHBvcnRzLmdldFN0cmluZyA9IGV4cG9ydHMuZ2V0UmFuayA9IGV4cG9ydHMuZ2V0U3VpdCA9IGV4cG9ydHMuY3JlYXRlQ2FyZCA9IGV4cG9ydHMuU3VpdEVudHJpZXMgPSBleHBvcnRzLlJhbmtFbnRyaWVzID0gZXhwb3J0cy5SYW5rID0gZXhwb3J0cy5TdWl0ID0gdm9pZCAwO1xudmFyIFN1aXQ7XG4oZnVuY3Rpb24gKFN1aXQpIHtcbiAgICBTdWl0W1N1aXRbXCJDbHVic1wiXSA9IDFdID0gXCJDbHVic1wiO1xuICAgIFN1aXRbU3VpdFtcIkRpYW1vbmRzXCJdID0gMl0gPSBcIkRpYW1vbmRzXCI7XG4gICAgU3VpdFtTdWl0W1wiSGVhcnRzXCJdID0gNF0gPSBcIkhlYXJ0c1wiO1xuICAgIFN1aXRbU3VpdFtcIlNwYWRlc1wiXSA9IDhdID0gXCJTcGFkZXNcIjtcbn0pKFN1aXQgfHwgKGV4cG9ydHMuU3VpdCA9IFN1aXQgPSB7fSkpO1xudmFyIFJhbms7XG4oZnVuY3Rpb24gKFJhbmspIHtcbiAgICBSYW5rW1JhbmtbXCJBY2VcIl0gPSAxMzEwODhdID0gXCJBY2VcIjtcbiAgICBSYW5rW1JhbmtbXCJUd29cIl0gPSAzMl0gPSBcIlR3b1wiO1xuICAgIFJhbmtbUmFua1tcIlRocmVlXCJdID0gNjRdID0gXCJUaHJlZVwiO1xuICAgIFJhbmtbUmFua1tcIkZvdXJcIl0gPSAxMjhdID0gXCJGb3VyXCI7XG4gICAgUmFua1tSYW5rW1wiRml2ZVwiXSA9IDI1Nl0gPSBcIkZpdmVcIjtcbiAgICBSYW5rW1JhbmtbXCJTaXhcIl0gPSA1MTJdID0gXCJTaXhcIjtcbiAgICBSYW5rW1JhbmtbXCJTZXZlblwiXSA9IDEwMjRdID0gXCJTZXZlblwiO1xuICAgIFJhbmtbUmFua1tcIkVpZ2h0XCJdID0gMjA0OF0gPSBcIkVpZ2h0XCI7XG4gICAgUmFua1tSYW5rW1wiTmluZVwiXSA9IDQwOTZdID0gXCJOaW5lXCI7XG4gICAgUmFua1tSYW5rW1wiVGVuXCJdID0gODE5Ml0gPSBcIlRlblwiO1xuICAgIFJhbmtbUmFua1tcIkphY2tcIl0gPSAxNjM4NF0gPSBcIkphY2tcIjtcbiAgICBSYW5rW1JhbmtbXCJRdWVlblwiXSA9IDMyNzY4XSA9IFwiUXVlZW5cIjtcbiAgICBSYW5rW1JhbmtbXCJLaW5nXCJdID0gNjU1MzZdID0gXCJLaW5nXCI7XG59KShSYW5rIHx8IChleHBvcnRzLlJhbmsgPSBSYW5rID0ge30pKTtcbmNvbnN0IFN1aXRUb1N2ZyA9IHtcbiAgICBcIkNsdWJzXCI6IFwiQ1wiLFxuICAgIFwiRGlhbW9uZHNcIjogXCJEXCIsXG4gICAgXCJIZWFydHNcIjogXCJIXCIsXG4gICAgXCJTcGFkZXNcIjogXCJTXCIsXG59O1xuY29uc3QgUmFua1RvU3ZnID0ge1xuICAgIFwiQWNlXCI6IFwiQVwiLFxuICAgIFwiVHdvXCI6IFwiMlwiLFxuICAgIFwiVGhyZWVcIjogXCIzXCIsXG4gICAgXCJGb3VyXCI6IFwiNFwiLFxuICAgIFwiRml2ZVwiOiBcIjVcIixcbiAgICBcIlNpeFwiOiBcIjZcIixcbiAgICBcIlNldmVuXCI6IFwiN1wiLFxuICAgIFwiRWlnaHRcIjogXCI4XCIsXG4gICAgXCJOaW5lXCI6IFwiOVwiLFxuICAgIFwiVGVuXCI6IFwiMTBcIixcbiAgICBcIkphY2tcIjogXCJKXCIsXG4gICAgXCJRdWVlblwiOiBcIlFcIixcbiAgICBcIktpbmdcIjogXCJLXCIsXG59O1xuZXhwb3J0cy5SYW5rRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKFJhbmspLnNsaWNlKDEzKTtcbmV4cG9ydHMuU3VpdEVudHJpZXMgPSBPYmplY3QuZW50cmllcyhTdWl0KS5zbGljZSg0KTtcbmZ1bmN0aW9uIGNyZWF0ZUNhcmQocmFuaywgc3VpdCkge1xuICAgIHJldHVybiByYW5rIHwgc3VpdDtcbn1cbmV4cG9ydHMuY3JlYXRlQ2FyZCA9IGNyZWF0ZUNhcmQ7XG5mdW5jdGlvbiBnZXRTdWl0KGNhcmQpIHtcbiAgICBjb25zdCBzdWl0YiA9ICgoMSA8PCA0KSAtIDEpICYgY2FyZDtcbiAgICBmb3IgKGxldCBbbmFtZSwgc3VpdF0gb2YgZXhwb3J0cy5TdWl0RW50cmllcykge1xuICAgICAgICBpZiAoc3VpdCA9PT0gc3VpdGIpXG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU3VpdCBub3QgZm91bmRcIik7XG59XG5leHBvcnRzLmdldFN1aXQgPSBnZXRTdWl0O1xuZnVuY3Rpb24gZ2V0UmFuayhjYXJkKSB7XG4gICAgY29uc3QgcmFua2IgPSAoKCgxIDw8IDE0KSAtIDEpIDw8IDQpICYgY2FyZDtcbiAgICBmb3IgKGxldCBbbmFtZSwgcmFua10gb2YgZXhwb3J0cy5SYW5rRW50cmllcykge1xuICAgICAgICBpZiAocmFuayA9PT0gcmFua2IpXG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUmFuayBub3QgZm91bmRcIik7XG59XG5leHBvcnRzLmdldFJhbmsgPSBnZXRSYW5rO1xuZnVuY3Rpb24gZ2V0U3RyaW5nKGNhcmQpIHtcbiAgICByZXR1cm4gYCR7Z2V0U3VpdChjYXJkKX0gJHtnZXRSYW5rKGNhcmQpfWA7XG59XG5leHBvcnRzLmdldFN0cmluZyA9IGdldFN0cmluZztcbmZ1bmN0aW9uIGdldFNWRyhjYXJkKSB7XG4gICAgY29uc3QgW3N1aXQsIHJhbmtdID0gZ2V0U3RyaW5nKGNhcmQpLnNwbGl0KFwiIFwiKTtcbiAgICBsZXQgc3ZnID0gXCJcIjtcbiAgICBzdmcgKz0gUmFua1RvU3ZnW3JhbmtdO1xuICAgIHN2ZyArPSBTdWl0VG9Tdmdbc3VpdF07XG4gICAgcmV0dXJuIHN2Zztcbn1cbmV4cG9ydHMuZ2V0U1ZHID0gZ2V0U1ZHO1xuZnVuY3Rpb24gY3JlYXRlRW1wdHlEZWNrKCkge1xuICAgIHJldHVybiBbXTtcbn1cbmV4cG9ydHMuY3JlYXRlRW1wdHlEZWNrID0gY3JlYXRlRW1wdHlEZWNrO1xuZnVuY3Rpb24gY3JlYXRlRGVjayhzaXplKSB7XG4gICAgbGV0IGRlY2sgPSBbXTtcbiAgICBmb3IgKGxldCBzID0gMDsgcyA8IHNpemU7IHMrKykge1xuICAgICAgICBmb3IgKGxldCBbc3VpdCwgX10gb2YgZXhwb3J0cy5TdWl0RW50cmllcykge1xuICAgICAgICAgICAgZm9yIChsZXQgW3JhbmssIF9dIG9mIGV4cG9ydHMuUmFua0VudHJpZXMpIHtcbiAgICAgICAgICAgICAgICBkZWNrLnB1c2goY3JlYXRlQ2FyZChSYW5rW3JhbmtdLCBTdWl0W3N1aXRdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlY2s7XG59XG5leHBvcnRzLmNyZWF0ZURlY2sgPSBjcmVhdGVEZWNrO1xuZnVuY3Rpb24gc2h1ZmZsZShkZWNrKSB7XG4gICAgbGV0IGN1cnJlbnRfaW5kZXggPSBkZWNrLmxlbmd0aDtcbiAgICB3aGlsZSAoY3VycmVudF9pbmRleCAhPSAwKSB7XG4gICAgICAgIGxldCByYW5kb21faW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkZWNrLmxlbmd0aCk7XG4gICAgICAgIGN1cnJlbnRfaW5kZXggLT0gMTtcbiAgICAgICAgc3dhcChkZWNrLCBjdXJyZW50X2luZGV4LCByYW5kb21faW5kZXgpO1xuICAgIH1cbn1cbmV4cG9ydHMuc2h1ZmZsZSA9IHNodWZmbGU7XG5mdW5jdGlvbiBzd2FwKGRlY2ssIGN1cnJlbnRfaW5kZXgsIHJhbmRvbV9pbmRleCkge1xuICAgIFtkZWNrW2N1cnJlbnRfaW5kZXhdLCBkZWNrW3JhbmRvbV9pbmRleF1dID0gW2RlY2tbcmFuZG9tX2luZGV4XSwgZGVja1tjdXJyZW50X2luZGV4XV07XG59XG5leHBvcnRzLnN3YXAgPSBzd2FwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRpc3BsYXlQbGF5ZXJIYW5kID0gZXhwb3J0cy5zZXR1cCA9IHZvaWQgMDtcbmNvbnN0IGNhcmRzXzEgPSByZXF1aXJlKFwiLi9jYXJkc1wiKTtcbmZ1bmN0aW9uIHNldHVwKGdhbWUpIHtcbiAgICBjb25zdCBkZWNrRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVja1wiKTtcbiAgICBkZWNrRWxlbWVudCA9PT0gbnVsbCB8fCBkZWNrRWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVja0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4gaGFuZGxlRGVja0NsaWNrKGUsIGdhbWUpKTtcbiAgICBjb25zdCByZXNlcnZlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXJ2ZVwiKTtcbiAgICByZXNlcnZlRWxlbWVudCA9PT0gbnVsbCB8fCByZXNlcnZlRWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVzZXJ2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4gaGFuZGxlUmVzZXJ2ZUNsaWNrKGUsIGdhbWUpKTtcbiAgICBjb25zdCBuZXh0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dFwiKTtcbiAgICBuZXh0RWxlbWVudCA9PT0gbnVsbCB8fCBuZXh0RWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmV4dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4gaGFuZGxlTmV4dENsaWNrKGUsIGdhbWUpKTtcbiAgICBjb25zdCBjYXJkRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3BsYXllcj5pbWdcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkRWxlbWVudHNbaV07XG4gICAgICAgIGNhcmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBoYW5kbGVDbGljayhlLCBnYW1lKSk7XG4gICAgfVxufVxuZXhwb3J0cy5zZXR1cCA9IHNldHVwO1xuZnVuY3Rpb24gaGFuZGxlTmV4dENsaWNrKF9lLCBnYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHNlbGVjdGVkRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChzZWxlY3RlZEVsZW1lbnQuZGF0YXNldC5pbmRleCB8fCBcIi0xXCIpO1xuICAgICAgICAgICAgY29uc3QgY2FyZCA9IGdhbWUucGxheWVyLmxlYXZlKGluZGV4KTtcbiAgICAgICAgICAgIGdhbWUubmV4dFBsYXllcihjYXJkKTtcbiAgICAgICAgICAgIGRpc3BsYXlQbGF5ZXJIYW5kKGdhbWUucGxheWVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBsZWF2ZSBjYXJkLiAke2Vycn1gKTtcbiAgICB9XG59XG5mdW5jdGlvbiBoYW5kbGVSZXNlcnZlQ2xpY2soX2UsIGdhbWUpIHtcbiAgICB0cnkge1xuICAgICAgICBnYW1lLnBsYXllci5jaG9vc2UoZ2FtZS5wbGF5ZXIucmVzZXJ2ZSk7XG4gICAgICAgIGRpc3BsYXlQbGF5ZXJIYW5kKGdhbWUucGxheWVyKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gZ2V0IGNhcmQgZnJvbSByZXNlcnZlLiAke2Vycn1gKTtcbiAgICB9XG59XG5mdW5jdGlvbiBoYW5kbGVEZWNrQ2xpY2soX2UsIGdhbWUpIHtcbiAgICB0cnkge1xuICAgICAgICBnYW1lLnBsYXllci5jaG9vc2UoZ2FtZS5kZWNrKTtcbiAgICAgICAgZGlzcGxheVBsYXllckhhbmQoZ2FtZS5wbGF5ZXIpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBnZXQgY2FyZCBmcm9tIGRlY2suICR7ZXJyfWApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJIYW5kKHBsYXllcikge1xuICAgIGNvbnN0IGNhcmRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyPmltZ1wiKTtcbiAgICBpZiAoY2FyZEVsZW1lbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjYXJkID0gcGxheWVyLmhhbmRbaV07XG4gICAgICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmRFbGVtZW50c1tpXTtcbiAgICAgICAgICAgIGlmIChjYXJkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjYXJkRWxlbWVudC5zcmMgPSBcIi4vY2FyZHMvXCIgKyAoMCwgY2FyZHNfMS5nZXRTVkcpKGNhcmQpICsgXCIuc3ZnXCI7XG4gICAgICAgICAgICAgICAgY2FyZEVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYXJkRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FyZHMgdG8gcmVwbGFjZSBub3QgZm91bmRcIik7XG4gICAgfVxufVxuZXhwb3J0cy5kaXNwbGF5UGxheWVySGFuZCA9IGRpc3BsYXlQbGF5ZXJIYW5kO1xubGV0IHNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG5mdW5jdGlvbiBoYW5kbGVDbGljayhlLCBnYW1lKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgaWYgKHNlbGVjdGVkRWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICBzZWxlY3RlZEVsZW1lbnQgPSB0YXJnZXQ7XG4gICAgICAgIHNlbGVjdGVkRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtY2FyZFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc2VsZWN0ZWRFbGVtZW50ID09PSB0YXJnZXQpIHtcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC1jYXJkXCIpO1xuICAgICAgICBzZWxlY3RlZEVsZW1lbnQgPSBudWxsO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFtzZWxlY3RlZEVsZW1lbnQuc3JjLCB0YXJnZXQuc3JjXSA9IFt0YXJnZXQuc3JjLCBzZWxlY3RlZEVsZW1lbnQuc3JjXTtcbiAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KHNlbGVjdGVkRWxlbWVudC5kYXRhc2V0LmluZGV4IHx8IFwiMFwiKTtcbiAgICBjb25zdCBqaW5kZXggPSBwYXJzZUludCh0YXJnZXQuZGF0YXNldC5pbmRleCB8fCBcIjBcIik7XG4gICAgW2dhbWUucGxheWVyLmhhbmRbaW5kZXhdLCBnYW1lLnBsYXllci5oYW5kW2ppbmRleF1dID0gW2dhbWUucGxheWVyLmhhbmRbamluZGV4XSwgZ2FtZS5wbGF5ZXIuaGFuZFtpbmRleF1dO1xuICAgIHNlbGVjdGVkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtY2FyZFwiKTtcbiAgICBzZWxlY3RlZEVsZW1lbnQgPSBudWxsO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWVHdWVzdCA9IGV4cG9ydHMuR2FtZSA9IGV4cG9ydHMuUGxheWVyID0gZXhwb3J0cy5TdGF0ZSA9IHZvaWQgMDtcbmNvbnN0IGNhcmRzXzEgPSByZXF1aXJlKFwiLi9jYXJkc1wiKTtcbnZhciBTdGF0ZTtcbihmdW5jdGlvbiAoU3RhdGUpIHtcbiAgICBTdGF0ZVtTdGF0ZVtcIldhaXRcIl0gPSAwXSA9IFwiV2FpdFwiO1xuICAgIFN0YXRlW1N0YXRlW1wiQ2hvb3NlXCJdID0gMV0gPSBcIkNob29zZVwiO1xuICAgIFN0YXRlW1N0YXRlW1wiTGVhdmVcIl0gPSAyXSA9IFwiTGVhdmVcIjtcbn0pKFN0YXRlIHx8IChleHBvcnRzLlN0YXRlID0gU3RhdGUgPSB7fSkpO1xuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oYW5kID0gW107XG4gICAgICAgIHRoaXMucmVzZXJ2ZSA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuV2FpdDtcbiAgICB9XG4gICAgYWRkKGNhcmQpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFuZC5sZW5ndGggPiAxMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSGFuZCBvZiBwbGF5ZXIgaXMgdG9vIGJpZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmQucHVzaChjYXJkKTtcbiAgICB9XG4gICAgYWRkUmVzZXJ2ZShjYXJkKSB7XG4gICAgICAgIHRoaXMucmVzZXJ2ZS5wdXNoKGNhcmQpO1xuICAgIH1cbiAgICBjaGVja1dpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tXaW5IZWxwKFtdLCBbXSwgW10sIFsuLi50aGlzLmhhbmRdKTtcbiAgICB9XG4gICAgY2hlY2tXaW5IZWxwKGEsIGIsIGMsIGRlY2spIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tHcm91cHMoYSwgYiwgYykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhLmxlbmd0aCA+IDUgfHwgYi5sZW5ndGggPiA0IHx8IGMubGVuZ3RoID4gMylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGEubGVuZ3RoID09PSA1ICYmICF0aGlzLmNoZWNrR3JvdXAoYSkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChiLmxlbmd0aCA9PT0gNCAmJiAhdGhpcy5jaGVja0dyb3VwKGIpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoYy5sZW5ndGggPT09IDMgJiYgIXRoaXMuY2hlY2tHcm91cChjKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRlY2sucG9wKCk7XG4gICAgICAgIGlmIChjYXJkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrV2luSGVscChbLi4uYSwgY2FyZF0sIGIsIGMsIFsuLi5kZWNrXSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1dpbkhlbHAoYSwgWy4uLmIsIGNhcmRdLCBjLCBbLi4uZGVja10pKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tXaW5IZWxwKGEsIGIsIFsuLi5jLCBjYXJkXSwgWy4uLmRlY2tdKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNoZWNrR3JvdXBzKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrU2l6ZShhLmxlbmd0aCwgYi5sZW5ndGgsIGMubGVuZ3RoKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tHcm91cChhKSAmJiB0aGlzLmNoZWNrR3JvdXAoYikgJiYgdGhpcy5jaGVja0dyb3VwKGMpO1xuICAgIH1cbiAgICBjaGVja0dyb3VwKGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tTZXF1ZW5jZShhKSB8fCB0aGlzLmNoZWNrU3RhaXIoYSk7XG4gICAgfVxuICAgIGNoZWNrU2VxdWVuY2UoYSkge1xuICAgICAgICBpZiAoYS5sZW5ndGggPCAzKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBsZXQgdGVzdCA9ICgoMSA8PCAxNCkgLSAxKSA8PCA0O1xuICAgICAgICBmb3IgKGxldCBjIG9mIGEpIHtcbiAgICAgICAgICAgIHRlc3QgJj0gYztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVzdCAhPT0gMDtcbiAgICB9XG4gICAgY2hlY2tTdGFpcihhKSB7XG4gICAgICAgIGlmIChhLmxlbmd0aCA8IDMpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCB0ZXN0ID0gMDtcbiAgICAgICAgZm9yIChsZXQgYyBvZiBhKSB7XG4gICAgICAgICAgICB0ZXN0IHw9IGM7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN1aXRUZXN0ID0gKCgxIDw8IDQpIC0gMSkgJiB0ZXN0O1xuICAgICAgICBpZiAoc3VpdFRlc3QgPT09IDAgfHxcbiAgICAgICAgICAgIChzdWl0VGVzdCAmIChzdWl0VGVzdCAtIDEpKSAhPT0gMClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGVzdCAmPSAoKDEgPDwgMTQpIC0gMSkgPDwgNDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0ZXN0ICY9ICh0ZXN0IDw8IDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXN0ICE9PSAwO1xuICAgIH1cbiAgICBjaGVja1NpemUoYSwgYiwgYykge1xuICAgICAgICByZXR1cm4gYSArIGIgKyBjID09IDExICYmIGEgPj0gMyAmJiBiID49IDMgJiYgYyA+PSAzO1xuICAgIH1cbiAgICBjaG9vc2UoZGVjaykge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gU3RhdGUuQ2hvb3NlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGF5ZXIgbm90IGluIGNob29zZSBzdGF0ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYXJkID0gZGVjay5wb3AoKTtcbiAgICAgICAgaWYgKGNhcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kLnB1c2goY2FyZCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuTGVhdmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBjYXJkcyBpbiBhcmd1bWVudCBkZWNrXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxlYXZlKGluZGV4KSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBTdGF0ZS5MZWF2ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxheWVyIG5vdCBpbiBsZWF2ZSBzdGF0ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gdGhpcy5oYW5kLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5kZXggb3V0IG9mIGJvdW5kc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBbY2FyZF0gPSB0aGlzLmhhbmQuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLldhaXQ7XG4gICAgICAgIHJldHVybiBjYXJkO1xuICAgIH1cbn1cbmV4cG9ydHMuUGxheWVyID0gUGxheWVyO1xuY2xhc3MgR2FtZSB7XG4gICAgO1xuICAgIGNvbnN0cnVjdG9yKG51bWJlclBsYXllcnMpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gW107XG4gICAgICAgIHRoaXMuZGVjayA9IFtdO1xuICAgICAgICB0aGlzLnBsYXllckluZGV4ID0gMDtcbiAgICAgICAgaWYgKG51bWJlclBsYXllcnMgPCAyKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2FtZSBuZWVkcyBhdGxlYXN0IDIgcGxheWVyXCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlclBsYXllcnM7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzLnB1c2gobmV3IFBsYXllcigpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBsYXllciA9IHRoaXMucGxheWVyc1t0aGlzLnBsYXllckluZGV4XTtcbiAgICAgICAgdGhpcy5kZWNrID0gKDAsIGNhcmRzXzEuY3JlYXRlRGVjaykoMSk7XG4gICAgICAgICgwLCBjYXJkc18xLnNodWZmbGUpKHRoaXMuZGVjayk7XG4gICAgICAgIHRoaXMuZGVhbCgpO1xuICAgICAgICB0aGlzLnBsYXllci5zdGF0ZSA9IFN0YXRlLkNob29zZTtcbiAgICB9XG4gICAgZGVhbCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBwbGF5ZXIgb2YgdGhpcy5wbGF5ZXJzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZCA9IHRoaXMuZGVjay5wb3AoKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FyZCkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuYWRkKGNhcmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gY2FyZHMgbGVmdCB0byBkZWFsXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBuZXh0UGxheWVyKGNhcmQpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJJbmRleCA9ICh0aGlzLnBsYXllckluZGV4ICsgMSkgJSB0aGlzLnBsYXllcnMubGVuZ3RoO1xuICAgICAgICB0aGlzLnBsYXllciA9IHRoaXMucGxheWVyc1t0aGlzLnBsYXllckluZGV4XTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuYWRkUmVzZXJ2ZShjYXJkKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc3RhdGUgPSBTdGF0ZS5DaG9vc2U7XG4gICAgfVxufVxuZXhwb3J0cy5HYW1lID0gR2FtZTtcbmNsYXNzIEdhbWVHdWVzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcigpO1xuICAgIH1cbiAgICBuZXh0UGxheWVyKGNhcmQpIHtcbiAgICB9XG59XG5leHBvcnRzLkdhbWVHdWVzdCA9IEdhbWVHdWVzdDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGRpc3BsYXlfMSA9IHJlcXVpcmUoXCIuL2Rpc3BsYXlcIik7XG5jb25zdCBnYW1lXzEgPSByZXF1aXJlKFwiLi9nYW1lXCIpO1xuY29uc3QgZ2FtZSA9IG5ldyBnYW1lXzEuR2FtZSgyKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCByZWNlaXZlTWVzc2FnZSwgZmFsc2UpO1xuZnVuY3Rpb24gcmVjZWl2ZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcImlmcmFtZVwiLCBldmVudCk7XG4gICAgKDAsIGRpc3BsYXlfMS5zZXR1cCkoZ2FtZSk7XG4gICAgKDAsIGRpc3BsYXlfMS5kaXNwbGF5UGxheWVySGFuZCkoZ2FtZS5wbGF5ZXIpO1xufVxuZnVuY3Rpb24gc2VuZE1lc3NhZ2UobXNnKSB7XG4gICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZShcIkhlbGxvXCIpO1xufVxuLy8gZnVuY3Rpb24gdGltZXIoYW5vbjogRnVuY3Rpb24pIHtcbi8vICAgICBjb25zdCBUcmlhbHMgPSAxMDA7XG4vLyAgICAgY29uc3Qgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbi8vXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBUcmlhbHM7IGkrKykge1xuLy8gICAgICAgICBhbm9uKCk7XG4vLyAgICAgfVxuLy9cbi8vICAgICBjb25zdCBlbmQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbi8vICAgICBjb25zb2xlLmxvZyhgRXhlY3V0aW9uIHRpbWU6ICR7KGVuZCAtIHN0YXJ0KSAvIFRyaWFsc30gbXNgKTtcbi8vIH1cbi8vXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=