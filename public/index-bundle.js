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
function setup(player, handleDeckClick) {
    const deckElement = document.getElementById("deck");
    deckElement === null || deckElement === void 0 ? void 0 : deckElement.addEventListener("click", e => handleDeckClick(e, player));
    const reserveElement = document.getElementById("reserve");
    reserveElement === null || reserveElement === void 0 ? void 0 : reserveElement.addEventListener("click", e => handleReserveClick(e, player));
    const nextElement = document.getElementById("next");
    nextElement === null || nextElement === void 0 ? void 0 : nextElement.addEventListener("click", e => handleNextClick(e, player));
    const cardElements = document.querySelectorAll("#player>img");
    for (let i = 0; i < cardElements.length; i++) {
        const cardElement = cardElements[i];
        cardElement.addEventListener('click', e => handleClick(e, player));
    }
}
exports.setup = setup;
function handleNextClick(_e, player) {
    try {
        if (selectedElement !== null) {
            const index = parseInt(selectedElement.dataset.index || "-1");
            const card = player.leave(index);
            // game.nextPlayer(card);
            displayPlayerHand(player);
        }
    }
    catch (err) {
        console.error(`Failed to leave card. ${err}`);
    }
}
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
    [selectedElement.src, target.src] = [target.src, selectedElement.src];
    const index = parseInt(selectedElement.dataset.index || "0");
    const jindex = parseInt(target.dataset.index || "0");
    [player.hand[index], player.hand[jindex]] = [player.hand[jindex], player.hand[index]];
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
window.addEventListener("message", receiveMessage, false);
function receiveMessage({ data }) {
    console.log(`Host Received from window ${data}`);
    switch (data) {
        case "start":
            (0, display_1.setup)(game.player, handleDeckClick);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3JDLGVBQWUsbUJBQU8sQ0FBQyw2QkFBUTtBQUMvQjtBQUNBO0FBQ0EsMEJBQTBCLE1BQU07QUFDaEMsNkNBQTZDLEtBQUs7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsSUFBSTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsWUFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx3QkFBd0I7QUFDOUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcmRfZ2FtZS8uL3NyYy9jYXJkcy50cyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9zcmMvZGlzcGxheS50cyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9zcmMvZ2FtZS50cyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gQ2FyZCBCaXQgU3RydWN0dXJlXG4vLyBcbi8vIDAwMDEgQ2x1YnNcbi8vIDAwMTAgRGlhbW9uZHNcbi8vIDAxMDAgSGVhcnRzXG4vLyAxMDAwIFNwYWRlc1xuLy9cbi8vIDEwMDAwMDAwMDAwMDAxIEFjZVxuLy8gMDAwMDAwMDAwMDAwMTAgVHdvIFxuLy8gMDAwMDAwMDAwMDAxMDAgVGhyZWUgXG4vL1xuLy8gQ2FyZCAyIG9mIENsdWJzXG4vLyAwMDAwMDAwMDAwMDAxMCAxMDAwXG4vL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zd2FwID0gZXhwb3J0cy5zaHVmZmxlID0gZXhwb3J0cy5jcmVhdGVEZWNrID0gZXhwb3J0cy5jcmVhdGVFbXB0eURlY2sgPSBleHBvcnRzLmdldFNWRyA9IGV4cG9ydHMuZ2V0U3RyaW5nID0gZXhwb3J0cy5nZXRSYW5rID0gZXhwb3J0cy5nZXRTdWl0ID0gZXhwb3J0cy5jcmVhdGVDYXJkID0gZXhwb3J0cy5TdWl0RW50cmllcyA9IGV4cG9ydHMuUmFua0VudHJpZXMgPSBleHBvcnRzLlJhbmsgPSBleHBvcnRzLlN1aXQgPSB2b2lkIDA7XG52YXIgU3VpdDtcbihmdW5jdGlvbiAoU3VpdCkge1xuICAgIFN1aXRbU3VpdFtcIkNsdWJzXCJdID0gMV0gPSBcIkNsdWJzXCI7XG4gICAgU3VpdFtTdWl0W1wiRGlhbW9uZHNcIl0gPSAyXSA9IFwiRGlhbW9uZHNcIjtcbiAgICBTdWl0W1N1aXRbXCJIZWFydHNcIl0gPSA0XSA9IFwiSGVhcnRzXCI7XG4gICAgU3VpdFtTdWl0W1wiU3BhZGVzXCJdID0gOF0gPSBcIlNwYWRlc1wiO1xufSkoU3VpdCB8fCAoZXhwb3J0cy5TdWl0ID0gU3VpdCA9IHt9KSk7XG52YXIgUmFuaztcbihmdW5jdGlvbiAoUmFuaykge1xuICAgIFJhbmtbUmFua1tcIkFjZVwiXSA9IDEzMTA4OF0gPSBcIkFjZVwiO1xuICAgIFJhbmtbUmFua1tcIlR3b1wiXSA9IDMyXSA9IFwiVHdvXCI7XG4gICAgUmFua1tSYW5rW1wiVGhyZWVcIl0gPSA2NF0gPSBcIlRocmVlXCI7XG4gICAgUmFua1tSYW5rW1wiRm91clwiXSA9IDEyOF0gPSBcIkZvdXJcIjtcbiAgICBSYW5rW1JhbmtbXCJGaXZlXCJdID0gMjU2XSA9IFwiRml2ZVwiO1xuICAgIFJhbmtbUmFua1tcIlNpeFwiXSA9IDUxMl0gPSBcIlNpeFwiO1xuICAgIFJhbmtbUmFua1tcIlNldmVuXCJdID0gMTAyNF0gPSBcIlNldmVuXCI7XG4gICAgUmFua1tSYW5rW1wiRWlnaHRcIl0gPSAyMDQ4XSA9IFwiRWlnaHRcIjtcbiAgICBSYW5rW1JhbmtbXCJOaW5lXCJdID0gNDA5Nl0gPSBcIk5pbmVcIjtcbiAgICBSYW5rW1JhbmtbXCJUZW5cIl0gPSA4MTkyXSA9IFwiVGVuXCI7XG4gICAgUmFua1tSYW5rW1wiSmFja1wiXSA9IDE2Mzg0XSA9IFwiSmFja1wiO1xuICAgIFJhbmtbUmFua1tcIlF1ZWVuXCJdID0gMzI3NjhdID0gXCJRdWVlblwiO1xuICAgIFJhbmtbUmFua1tcIktpbmdcIl0gPSA2NTUzNl0gPSBcIktpbmdcIjtcbn0pKFJhbmsgfHwgKGV4cG9ydHMuUmFuayA9IFJhbmsgPSB7fSkpO1xuY29uc3QgU3VpdFRvU3ZnID0ge1xuICAgIFwiQ2x1YnNcIjogXCJDXCIsXG4gICAgXCJEaWFtb25kc1wiOiBcIkRcIixcbiAgICBcIkhlYXJ0c1wiOiBcIkhcIixcbiAgICBcIlNwYWRlc1wiOiBcIlNcIixcbn07XG5jb25zdCBSYW5rVG9TdmcgPSB7XG4gICAgXCJBY2VcIjogXCJBXCIsXG4gICAgXCJUd29cIjogXCIyXCIsXG4gICAgXCJUaHJlZVwiOiBcIjNcIixcbiAgICBcIkZvdXJcIjogXCI0XCIsXG4gICAgXCJGaXZlXCI6IFwiNVwiLFxuICAgIFwiU2l4XCI6IFwiNlwiLFxuICAgIFwiU2V2ZW5cIjogXCI3XCIsXG4gICAgXCJFaWdodFwiOiBcIjhcIixcbiAgICBcIk5pbmVcIjogXCI5XCIsXG4gICAgXCJUZW5cIjogXCIxMFwiLFxuICAgIFwiSmFja1wiOiBcIkpcIixcbiAgICBcIlF1ZWVuXCI6IFwiUVwiLFxuICAgIFwiS2luZ1wiOiBcIktcIixcbn07XG5leHBvcnRzLlJhbmtFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoUmFuaykuc2xpY2UoMTMpO1xuZXhwb3J0cy5TdWl0RW50cmllcyA9IE9iamVjdC5lbnRyaWVzKFN1aXQpLnNsaWNlKDQpO1xuZnVuY3Rpb24gY3JlYXRlQ2FyZChyYW5rLCBzdWl0KSB7XG4gICAgcmV0dXJuIHJhbmsgfCBzdWl0O1xufVxuZXhwb3J0cy5jcmVhdGVDYXJkID0gY3JlYXRlQ2FyZDtcbmZ1bmN0aW9uIGdldFN1aXQoY2FyZCkge1xuICAgIGNvbnN0IHN1aXRiID0gKCgxIDw8IDQpIC0gMSkgJiBjYXJkO1xuICAgIGZvciAobGV0IFtuYW1lLCBzdWl0XSBvZiBleHBvcnRzLlN1aXRFbnRyaWVzKSB7XG4gICAgICAgIGlmIChzdWl0ID09PSBzdWl0YilcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdWl0IG5vdCBmb3VuZFwiKTtcbn1cbmV4cG9ydHMuZ2V0U3VpdCA9IGdldFN1aXQ7XG5mdW5jdGlvbiBnZXRSYW5rKGNhcmQpIHtcbiAgICBjb25zdCByYW5rYiA9ICgoKDEgPDwgMTQpIC0gMSkgPDwgNCkgJiBjYXJkO1xuICAgIGZvciAobGV0IFtuYW1lLCByYW5rXSBvZiBleHBvcnRzLlJhbmtFbnRyaWVzKSB7XG4gICAgICAgIGlmIChyYW5rID09PSByYW5rYilcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJSYW5rIG5vdCBmb3VuZFwiKTtcbn1cbmV4cG9ydHMuZ2V0UmFuayA9IGdldFJhbms7XG5mdW5jdGlvbiBnZXRTdHJpbmcoY2FyZCkge1xuICAgIHJldHVybiBgJHtnZXRTdWl0KGNhcmQpfSAke2dldFJhbmsoY2FyZCl9YDtcbn1cbmV4cG9ydHMuZ2V0U3RyaW5nID0gZ2V0U3RyaW5nO1xuZnVuY3Rpb24gZ2V0U1ZHKGNhcmQpIHtcbiAgICBjb25zdCBbc3VpdCwgcmFua10gPSBnZXRTdHJpbmcoY2FyZCkuc3BsaXQoXCIgXCIpO1xuICAgIGxldCBzdmcgPSBcIlwiO1xuICAgIHN2ZyArPSBSYW5rVG9TdmdbcmFua107XG4gICAgc3ZnICs9IFN1aXRUb1N2Z1tzdWl0XTtcbiAgICByZXR1cm4gc3ZnO1xufVxuZXhwb3J0cy5nZXRTVkcgPSBnZXRTVkc7XG5mdW5jdGlvbiBjcmVhdGVFbXB0eURlY2soKSB7XG4gICAgcmV0dXJuIFtdO1xufVxuZXhwb3J0cy5jcmVhdGVFbXB0eURlY2sgPSBjcmVhdGVFbXB0eURlY2s7XG5mdW5jdGlvbiBjcmVhdGVEZWNrKHNpemUpIHtcbiAgICBsZXQgZGVjayA9IFtdO1xuICAgIGZvciAobGV0IHMgPSAwOyBzIDwgc2l6ZTsgcysrKSB7XG4gICAgICAgIGZvciAobGV0IFtzdWl0LCBfXSBvZiBleHBvcnRzLlN1aXRFbnRyaWVzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBbcmFuaywgX10gb2YgZXhwb3J0cy5SYW5rRW50cmllcykge1xuICAgICAgICAgICAgICAgIGRlY2sucHVzaChjcmVhdGVDYXJkKFJhbmtbcmFua10sIFN1aXRbc3VpdF0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVjaztcbn1cbmV4cG9ydHMuY3JlYXRlRGVjayA9IGNyZWF0ZURlY2s7XG5mdW5jdGlvbiBzaHVmZmxlKGRlY2spIHtcbiAgICBsZXQgY3VycmVudF9pbmRleCA9IGRlY2subGVuZ3RoO1xuICAgIHdoaWxlIChjdXJyZW50X2luZGV4ICE9IDApIHtcbiAgICAgICAgbGV0IHJhbmRvbV9pbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRlY2subGVuZ3RoKTtcbiAgICAgICAgY3VycmVudF9pbmRleCAtPSAxO1xuICAgICAgICBzd2FwKGRlY2ssIGN1cnJlbnRfaW5kZXgsIHJhbmRvbV9pbmRleCk7XG4gICAgfVxufVxuZXhwb3J0cy5zaHVmZmxlID0gc2h1ZmZsZTtcbmZ1bmN0aW9uIHN3YXAoZGVjaywgY3VycmVudF9pbmRleCwgcmFuZG9tX2luZGV4KSB7XG4gICAgW2RlY2tbY3VycmVudF9pbmRleF0sIGRlY2tbcmFuZG9tX2luZGV4XV0gPSBbZGVja1tyYW5kb21faW5kZXhdLCBkZWNrW2N1cnJlbnRfaW5kZXhdXTtcbn1cbmV4cG9ydHMuc3dhcCA9IHN3YXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGlzcGxheVBsYXllckhhbmQgPSBleHBvcnRzLnNldHVwID0gdm9pZCAwO1xuY29uc3QgY2FyZHNfMSA9IHJlcXVpcmUoXCIuL2NhcmRzXCIpO1xuZnVuY3Rpb24gc2V0dXAocGxheWVyLCBoYW5kbGVEZWNrQ2xpY2spIHtcbiAgICBjb25zdCBkZWNrRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVja1wiKTtcbiAgICBkZWNrRWxlbWVudCA9PT0gbnVsbCB8fCBkZWNrRWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVja0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4gaGFuZGxlRGVja0NsaWNrKGUsIHBsYXllcikpO1xuICAgIGNvbnN0IHJlc2VydmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlcnZlXCIpO1xuICAgIHJlc2VydmVFbGVtZW50ID09PSBudWxsIHx8IHJlc2VydmVFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXNlcnZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiBoYW5kbGVSZXNlcnZlQ2xpY2soZSwgcGxheWVyKSk7XG4gICAgY29uc3QgbmV4dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRcIik7XG4gICAgbmV4dEVsZW1lbnQgPT09IG51bGwgfHwgbmV4dEVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5leHRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IGhhbmRsZU5leHRDbGljayhlLCBwbGF5ZXIpKTtcbiAgICBjb25zdCBjYXJkRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3BsYXllcj5pbWdcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkRWxlbWVudHNbaV07XG4gICAgICAgIGNhcmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBoYW5kbGVDbGljayhlLCBwbGF5ZXIpKTtcbiAgICB9XG59XG5leHBvcnRzLnNldHVwID0gc2V0dXA7XG5mdW5jdGlvbiBoYW5kbGVOZXh0Q2xpY2soX2UsIHBsYXllcikge1xuICAgIHRyeSB7XG4gICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoc2VsZWN0ZWRFbGVtZW50LmRhdGFzZXQuaW5kZXggfHwgXCItMVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBwbGF5ZXIubGVhdmUoaW5kZXgpO1xuICAgICAgICAgICAgLy8gZ2FtZS5uZXh0UGxheWVyKGNhcmQpO1xuICAgICAgICAgICAgZGlzcGxheVBsYXllckhhbmQocGxheWVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBsZWF2ZSBjYXJkLiAke2Vycn1gKTtcbiAgICB9XG59XG5mdW5jdGlvbiBoYW5kbGVSZXNlcnZlQ2xpY2soX2UsIHBsYXllcikge1xuICAgIHRyeSB7XG4gICAgICAgIHBsYXllci5jaG9vc2UocGxheWVyLnJlc2VydmUucG9wKCkpO1xuICAgICAgICBkaXNwbGF5UGxheWVySGFuZChwbGF5ZXIpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBnZXQgY2FyZCBmcm9tIHJlc2VydmUuICR7ZXJyfWApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJIYW5kKHBsYXllcikge1xuICAgIGNvbnN0IGNhcmRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyPmltZ1wiKTtcbiAgICBpZiAoY2FyZEVsZW1lbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjYXJkID0gcGxheWVyLmhhbmRbaV07XG4gICAgICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmRFbGVtZW50c1tpXTtcbiAgICAgICAgICAgIGlmIChjYXJkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjYXJkRWxlbWVudC5zcmMgPSBcIi4vY2FyZHMvXCIgKyAoMCwgY2FyZHNfMS5nZXRTVkcpKGNhcmQpICsgXCIuc3ZnXCI7XG4gICAgICAgICAgICAgICAgY2FyZEVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYXJkRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FyZHMgdG8gcmVwbGFjZSBub3QgZm91bmRcIik7XG4gICAgfVxufVxuZXhwb3J0cy5kaXNwbGF5UGxheWVySGFuZCA9IGRpc3BsYXlQbGF5ZXJIYW5kO1xubGV0IHNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG5mdW5jdGlvbiBoYW5kbGVDbGljayhlLCBwbGF5ZXIpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAoc2VsZWN0ZWRFbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgIHNlbGVjdGVkRWxlbWVudCA9IHRhcmdldDtcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC1jYXJkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgPT09IHRhcmdldCkge1xuICAgICAgICBzZWxlY3RlZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLWNhcmRcIik7XG4gICAgICAgIHNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgW3NlbGVjdGVkRWxlbWVudC5zcmMsIHRhcmdldC5zcmNdID0gW3RhcmdldC5zcmMsIHNlbGVjdGVkRWxlbWVudC5zcmNdO1xuICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoc2VsZWN0ZWRFbGVtZW50LmRhdGFzZXQuaW5kZXggfHwgXCIwXCIpO1xuICAgIGNvbnN0IGppbmRleCA9IHBhcnNlSW50KHRhcmdldC5kYXRhc2V0LmluZGV4IHx8IFwiMFwiKTtcbiAgICBbcGxheWVyLmhhbmRbaW5kZXhdLCBwbGF5ZXIuaGFuZFtqaW5kZXhdXSA9IFtwbGF5ZXIuaGFuZFtqaW5kZXhdLCBwbGF5ZXIuaGFuZFtpbmRleF1dO1xuICAgIHNlbGVjdGVkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtY2FyZFwiKTtcbiAgICBzZWxlY3RlZEVsZW1lbnQgPSBudWxsO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWVHdWVzdCA9IGV4cG9ydHMuR2FtZSA9IGV4cG9ydHMuUGxheWVyID0gZXhwb3J0cy5TdGF0ZSA9IHZvaWQgMDtcbmNvbnN0IGNhcmRzXzEgPSByZXF1aXJlKFwiLi9jYXJkc1wiKTtcbnZhciBTdGF0ZTtcbihmdW5jdGlvbiAoU3RhdGUpIHtcbiAgICBTdGF0ZVtTdGF0ZVtcIldhaXRcIl0gPSAwXSA9IFwiV2FpdFwiO1xuICAgIFN0YXRlW1N0YXRlW1wiQ2hvb3NlXCJdID0gMV0gPSBcIkNob29zZVwiO1xuICAgIFN0YXRlW1N0YXRlW1wiTGVhdmVcIl0gPSAyXSA9IFwiTGVhdmVcIjtcbn0pKFN0YXRlIHx8IChleHBvcnRzLlN0YXRlID0gU3RhdGUgPSB7fSkpO1xuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oYW5kID0gW107XG4gICAgICAgIHRoaXMucmVzZXJ2ZSA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuV2FpdDtcbiAgICB9XG4gICAgYWRkKGNhcmQpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFuZC5sZW5ndGggPiAxMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSGFuZCBvZiBwbGF5ZXIgaXMgdG9vIGJpZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmQucHVzaChjYXJkKTtcbiAgICB9XG4gICAgYWRkUmVzZXJ2ZShjYXJkKSB7XG4gICAgICAgIHRoaXMucmVzZXJ2ZS5wdXNoKGNhcmQpO1xuICAgIH1cbiAgICBjaGVja1dpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tXaW5IZWxwKFtdLCBbXSwgW10sIFsuLi50aGlzLmhhbmRdKTtcbiAgICB9XG4gICAgY2hlY2tXaW5IZWxwKGEsIGIsIGMsIGRlY2spIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tHcm91cHMoYSwgYiwgYykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhLmxlbmd0aCA+IDUgfHwgYi5sZW5ndGggPiA0IHx8IGMubGVuZ3RoID4gMylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGEubGVuZ3RoID09PSA1ICYmICF0aGlzLmNoZWNrR3JvdXAoYSkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChiLmxlbmd0aCA9PT0gNCAmJiAhdGhpcy5jaGVja0dyb3VwKGIpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoYy5sZW5ndGggPT09IDMgJiYgIXRoaXMuY2hlY2tHcm91cChjKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRlY2sucG9wKCk7XG4gICAgICAgIGlmIChjYXJkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrV2luSGVscChbLi4uYSwgY2FyZF0sIGIsIGMsIFsuLi5kZWNrXSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1dpbkhlbHAoYSwgWy4uLmIsIGNhcmRdLCBjLCBbLi4uZGVja10pKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tXaW5IZWxwKGEsIGIsIFsuLi5jLCBjYXJkXSwgWy4uLmRlY2tdKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNoZWNrR3JvdXBzKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrU2l6ZShhLmxlbmd0aCwgYi5sZW5ndGgsIGMubGVuZ3RoKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tHcm91cChhKSAmJiB0aGlzLmNoZWNrR3JvdXAoYikgJiYgdGhpcy5jaGVja0dyb3VwKGMpO1xuICAgIH1cbiAgICBjaGVja0dyb3VwKGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tTZXF1ZW5jZShhKSB8fCB0aGlzLmNoZWNrU3RhaXIoYSk7XG4gICAgfVxuICAgIGNoZWNrU2VxdWVuY2UoYSkge1xuICAgICAgICBpZiAoYS5sZW5ndGggPCAzKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBsZXQgdGVzdCA9ICgoMSA8PCAxNCkgLSAxKSA8PCA0O1xuICAgICAgICBmb3IgKGxldCBjIG9mIGEpIHtcbiAgICAgICAgICAgIHRlc3QgJj0gYztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVzdCAhPT0gMDtcbiAgICB9XG4gICAgY2hlY2tTdGFpcihhKSB7XG4gICAgICAgIGlmIChhLmxlbmd0aCA8IDMpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCB0ZXN0ID0gMDtcbiAgICAgICAgZm9yIChsZXQgYyBvZiBhKSB7XG4gICAgICAgICAgICB0ZXN0IHw9IGM7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN1aXRUZXN0ID0gKCgxIDw8IDQpIC0gMSkgJiB0ZXN0O1xuICAgICAgICBpZiAoc3VpdFRlc3QgPT09IDAgfHxcbiAgICAgICAgICAgIChzdWl0VGVzdCAmIChzdWl0VGVzdCAtIDEpKSAhPT0gMClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGVzdCAmPSAoKDEgPDwgMTQpIC0gMSkgPDwgNDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0ZXN0ICY9ICh0ZXN0IDw8IDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXN0ICE9PSAwO1xuICAgIH1cbiAgICBjaGVja1NpemUoYSwgYiwgYykge1xuICAgICAgICByZXR1cm4gYSArIGIgKyBjID09IDExICYmIGEgPj0gMyAmJiBiID49IDMgJiYgYyA+PSAzO1xuICAgIH1cbiAgICBjaG9vc2UoY2FyZCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gU3RhdGUuQ2hvb3NlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGF5ZXIgbm90IGluIGNob29zZSBzdGF0ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FyZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmQucHVzaChjYXJkKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5MZWF2ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGNhcmRzIGluIGFyZ3VtZW50XCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxlYXZlKGluZGV4KSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBTdGF0ZS5MZWF2ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxheWVyIG5vdCBpbiBsZWF2ZSBzdGF0ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gdGhpcy5oYW5kLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5kZXggb3V0IG9mIGJvdW5kc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBbY2FyZF0gPSB0aGlzLmhhbmQuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLldhaXQ7XG4gICAgICAgIHJldHVybiBjYXJkO1xuICAgIH1cbn1cbmV4cG9ydHMuUGxheWVyID0gUGxheWVyO1xuY2xhc3MgR2FtZSB7XG4gICAgO1xuICAgIGNvbnN0cnVjdG9yKG51bWJlclBsYXllcnMpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gW107XG4gICAgICAgIHRoaXMuZGVjayA9IFtdO1xuICAgICAgICB0aGlzLnBsYXllckluZGV4ID0gMDtcbiAgICAgICAgaWYgKG51bWJlclBsYXllcnMgPCAyKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2FtZSBuZWVkcyBhdGxlYXN0IDIgcGxheWVyXCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlclBsYXllcnM7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzLnB1c2gobmV3IFBsYXllcigpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBsYXllciA9IHRoaXMucGxheWVyc1t0aGlzLnBsYXllckluZGV4XTtcbiAgICAgICAgdGhpcy5kZWNrID0gKDAsIGNhcmRzXzEuY3JlYXRlRGVjaykoMSk7XG4gICAgICAgICgwLCBjYXJkc18xLnNodWZmbGUpKHRoaXMuZGVjayk7XG4gICAgICAgIHRoaXMuZGVhbCgpO1xuICAgICAgICB0aGlzLnBsYXllci5zdGF0ZSA9IFN0YXRlLkNob29zZTtcbiAgICB9XG4gICAgZGVhbCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBwbGF5ZXIgb2YgdGhpcy5wbGF5ZXJzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZCA9IHRoaXMuZGVjay5wb3AoKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FyZCkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuYWRkKGNhcmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gY2FyZHMgbGVmdCB0byBkZWFsXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBuZXh0UGxheWVyKGNhcmQpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJJbmRleCA9ICh0aGlzLnBsYXllckluZGV4ICsgMSkgJSB0aGlzLnBsYXllcnMubGVuZ3RoO1xuICAgICAgICB0aGlzLnBsYXllciA9IHRoaXMucGxheWVyc1t0aGlzLnBsYXllckluZGV4XTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuYWRkUmVzZXJ2ZShjYXJkKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc3RhdGUgPSBTdGF0ZS5DaG9vc2U7XG4gICAgfVxufVxuZXhwb3J0cy5HYW1lID0gR2FtZTtcbmNsYXNzIEdhbWVHdWVzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcigpO1xuICAgIH1cbn1cbmV4cG9ydHMuR2FtZUd1ZXN0ID0gR2FtZUd1ZXN0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZGlzcGxheV8xID0gcmVxdWlyZShcIi4vZGlzcGxheVwiKTtcbmNvbnN0IGdhbWVfMSA9IHJlcXVpcmUoXCIuL2dhbWVcIik7XG5jb25zdCBnYW1lID0gbmV3IGdhbWVfMS5HYW1lKDIpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHJlY2VpdmVNZXNzYWdlLCBmYWxzZSk7XG5mdW5jdGlvbiByZWNlaXZlTWVzc2FnZSh7IGRhdGEgfSkge1xuICAgIGNvbnNvbGUubG9nKGBIb3N0IFJlY2VpdmVkIGZyb20gd2luZG93ICR7ZGF0YX1gKTtcbiAgICBzd2l0Y2ggKGRhdGEpIHtcbiAgICAgICAgY2FzZSBcInN0YXJ0XCI6XG4gICAgICAgICAgICAoMCwgZGlzcGxheV8xLnNldHVwKShnYW1lLnBsYXllciwgaGFuZGxlRGVja0NsaWNrKTtcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKFwiaGFuZCBcIiArIEpTT04uc3RyaW5naWZ5KGdhbWUucGxheWVyc1sxXS5oYW5kKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhvc3QgU3RhcnRlZFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VudCBoYW5kXCIpO1xuICAgICAgICAgICAgKDAsIGRpc3BsYXlfMS5kaXNwbGF5UGxheWVySGFuZCkoZ2FtZS5wbGF5ZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZ2FtZSkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJwb3BcIjpcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKFwiZGVjayBcIiArIGdhbWUuZGVjay5wb3AoKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlbnQgZGVjayBwb3BcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5jb25zdCBzZW5kTWVzc2FnZSA9IHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2U7XG5mdW5jdGlvbiBoYW5kbGVEZWNrQ2xpY2soX2UsIHBsYXllcikge1xuICAgIHRyeSB7XG4gICAgICAgIGlmIChwbGF5ZXIuc3RhdGUgPT09IGdhbWVfMS5TdGF0ZS5DaG9vc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBnYW1lLmRlY2sucG9wKCk7XG4gICAgICAgICAgICBwbGF5ZXIuY2hvb3NlKGNhcmQpO1xuICAgICAgICAgICAgKDAsIGRpc3BsYXlfMS5kaXNwbGF5UGxheWVySGFuZCkocGxheWVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBnZXQgY2FyZCBmcm9tIGRlY2suICR7ZXJyfWApO1xuICAgIH1cbn1cbi8vIGZ1bmN0aW9uIHRpbWVyKGFub246IEZ1bmN0aW9uKSB7XG4vLyAgICAgY29uc3QgVHJpYWxzID0gMTAwO1xuLy8gICAgIGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4vL1xuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgVHJpYWxzOyBpKyspIHtcbi8vICAgICAgICAgYW5vbigpO1xuLy8gICAgIH1cbi8vXG4vLyAgICAgY29uc3QgZW5kID0gcGVyZm9ybWFuY2Uubm93KCk7XG4vLyAgICAgY29uc29sZS5sb2coYEV4ZWN1dGlvbiB0aW1lOiAkeyhlbmQgLSBzdGFydCkgLyBUcmlhbHN9IG1zYCk7XG4vLyB9XG4vL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9