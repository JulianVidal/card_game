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


/***/ }),

/***/ "./src/guest.ts":
/*!**********************!*\
  !*** ./src/guest.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const display_1 = __webpack_require__(/*! ./display */ "./src/display.ts");
const game_1 = __webpack_require__(/*! ./game */ "./src/game.ts");
let player;
let deckResolve;
window.addEventListener("message", receiveMessage);
function receiveMessage({ data }) {
    console.log(`Guest Received from window ${data}`);
    const [cmd, arg] = data.split(/ (.*)/s);
    switch (cmd) {
        case "start":
            player = new game_1.Player();
            (0, display_1.setup)(player, handleDeckClick, handleNextClick);
            console.log("Guest Started");
            break;
        case "setup":
            player.hand = JSON.parse(arg);
            console.log("Received Hand");
            console.log("Actual player", player.hand);
            (0, display_1.displayPlayerHand)(player);
            break;
        case "deck":
            console.log("Received Deck pop");
            const card = parseInt(arg);
            if (deckResolve !== undefined) {
                deckResolve(card);
            }
            break;
        case "next":
            console.log("Received next");
            player.addReserve(parseInt(arg));
            player.state = game_1.State.Choose;
            (0, display_1.displayPlayerHand)(player);
            break;
    }
}
const sendMessage = window.parent.postMessage;
function handleDeckClick(_e, player) {
    return __awaiter(this, void 0, void 0, function* () {
        function popDeck() {
            sendMessage("pop");
            console.log("Sent command pop");
            return new Promise((resolve, _) => {
                deckResolve = resolve;
            });
        }
        try {
            if (player.state === game_1.State.Choose) {
                const card = yield popDeck();
                player.choose(card);
                (0, display_1.displayPlayerHand)(player);
            }
        }
        catch (err) {
            console.error(`Failed to get card from deck. ${err}`);
        }
    });
}
function handleNextClick(_e, player, selectedElement) {
    try {
        if (selectedElement !== null) {
            const index = parseInt(selectedElement.dataset.index || "-1");
            const card = player.leave(index);
            sendMessage("next " + card);
            console.log("Sent command next");
            (0, display_1.displayPlayerHand)(player);
        }
    }
    catch (err) {
        console.error(`Failed to leave card. ${err}`);
    }
}


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/guest.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLElBQUk7QUFDbkQ7QUFDQTs7Ozs7OztVQ2pGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FyZF9nYW1lLy4vc3JjL2NhcmRzLnRzIiwid2VicGFjazovL2NhcmRfZ2FtZS8uL3NyYy9kaXNwbGF5LnRzIiwid2VicGFjazovL2NhcmRfZ2FtZS8uL3NyYy9nYW1lLnRzIiwid2VicGFjazovL2NhcmRfZ2FtZS8uL3NyYy9ndWVzdC50cyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gQ2FyZCBCaXQgU3RydWN0dXJlXG4vLyBcbi8vIDAwMDEgQ2x1YnNcbi8vIDAwMTAgRGlhbW9uZHNcbi8vIDAxMDAgSGVhcnRzXG4vLyAxMDAwIFNwYWRlc1xuLy9cbi8vIDEwMDAwMDAwMDAwMDAxIEFjZVxuLy8gMDAwMDAwMDAwMDAwMTAgVHdvIFxuLy8gMDAwMDAwMDAwMDAxMDAgVGhyZWUgXG4vL1xuLy8gQ2FyZCAyIG9mIENsdWJzXG4vLyAwMDAwMDAwMDAwMDAxMCAxMDAwXG4vL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zd2FwID0gZXhwb3J0cy5zaHVmZmxlID0gZXhwb3J0cy5jcmVhdGVEZWNrID0gZXhwb3J0cy5jcmVhdGVFbXB0eURlY2sgPSBleHBvcnRzLmdldFNWRyA9IGV4cG9ydHMuZ2V0U3RyaW5nID0gZXhwb3J0cy5nZXRSYW5rID0gZXhwb3J0cy5nZXRTdWl0ID0gZXhwb3J0cy5jcmVhdGVDYXJkID0gZXhwb3J0cy5TdWl0RW50cmllcyA9IGV4cG9ydHMuUmFua0VudHJpZXMgPSBleHBvcnRzLlJhbmsgPSBleHBvcnRzLlN1aXQgPSB2b2lkIDA7XG52YXIgU3VpdDtcbihmdW5jdGlvbiAoU3VpdCkge1xuICAgIFN1aXRbU3VpdFtcIkNsdWJzXCJdID0gMV0gPSBcIkNsdWJzXCI7XG4gICAgU3VpdFtTdWl0W1wiRGlhbW9uZHNcIl0gPSAyXSA9IFwiRGlhbW9uZHNcIjtcbiAgICBTdWl0W1N1aXRbXCJIZWFydHNcIl0gPSA0XSA9IFwiSGVhcnRzXCI7XG4gICAgU3VpdFtTdWl0W1wiU3BhZGVzXCJdID0gOF0gPSBcIlNwYWRlc1wiO1xufSkoU3VpdCB8fCAoZXhwb3J0cy5TdWl0ID0gU3VpdCA9IHt9KSk7XG52YXIgUmFuaztcbihmdW5jdGlvbiAoUmFuaykge1xuICAgIFJhbmtbUmFua1tcIkFjZVwiXSA9IDEzMTA4OF0gPSBcIkFjZVwiO1xuICAgIFJhbmtbUmFua1tcIlR3b1wiXSA9IDMyXSA9IFwiVHdvXCI7XG4gICAgUmFua1tSYW5rW1wiVGhyZWVcIl0gPSA2NF0gPSBcIlRocmVlXCI7XG4gICAgUmFua1tSYW5rW1wiRm91clwiXSA9IDEyOF0gPSBcIkZvdXJcIjtcbiAgICBSYW5rW1JhbmtbXCJGaXZlXCJdID0gMjU2XSA9IFwiRml2ZVwiO1xuICAgIFJhbmtbUmFua1tcIlNpeFwiXSA9IDUxMl0gPSBcIlNpeFwiO1xuICAgIFJhbmtbUmFua1tcIlNldmVuXCJdID0gMTAyNF0gPSBcIlNldmVuXCI7XG4gICAgUmFua1tSYW5rW1wiRWlnaHRcIl0gPSAyMDQ4XSA9IFwiRWlnaHRcIjtcbiAgICBSYW5rW1JhbmtbXCJOaW5lXCJdID0gNDA5Nl0gPSBcIk5pbmVcIjtcbiAgICBSYW5rW1JhbmtbXCJUZW5cIl0gPSA4MTkyXSA9IFwiVGVuXCI7XG4gICAgUmFua1tSYW5rW1wiSmFja1wiXSA9IDE2Mzg0XSA9IFwiSmFja1wiO1xuICAgIFJhbmtbUmFua1tcIlF1ZWVuXCJdID0gMzI3NjhdID0gXCJRdWVlblwiO1xuICAgIFJhbmtbUmFua1tcIktpbmdcIl0gPSA2NTUzNl0gPSBcIktpbmdcIjtcbn0pKFJhbmsgfHwgKGV4cG9ydHMuUmFuayA9IFJhbmsgPSB7fSkpO1xuY29uc3QgU3VpdFRvU3ZnID0ge1xuICAgIFwiQ2x1YnNcIjogXCJDXCIsXG4gICAgXCJEaWFtb25kc1wiOiBcIkRcIixcbiAgICBcIkhlYXJ0c1wiOiBcIkhcIixcbiAgICBcIlNwYWRlc1wiOiBcIlNcIixcbn07XG5jb25zdCBSYW5rVG9TdmcgPSB7XG4gICAgXCJBY2VcIjogXCJBXCIsXG4gICAgXCJUd29cIjogXCIyXCIsXG4gICAgXCJUaHJlZVwiOiBcIjNcIixcbiAgICBcIkZvdXJcIjogXCI0XCIsXG4gICAgXCJGaXZlXCI6IFwiNVwiLFxuICAgIFwiU2l4XCI6IFwiNlwiLFxuICAgIFwiU2V2ZW5cIjogXCI3XCIsXG4gICAgXCJFaWdodFwiOiBcIjhcIixcbiAgICBcIk5pbmVcIjogXCI5XCIsXG4gICAgXCJUZW5cIjogXCIxMFwiLFxuICAgIFwiSmFja1wiOiBcIkpcIixcbiAgICBcIlF1ZWVuXCI6IFwiUVwiLFxuICAgIFwiS2luZ1wiOiBcIktcIixcbn07XG5leHBvcnRzLlJhbmtFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoUmFuaykuc2xpY2UoMTMpO1xuZXhwb3J0cy5TdWl0RW50cmllcyA9IE9iamVjdC5lbnRyaWVzKFN1aXQpLnNsaWNlKDQpO1xuZnVuY3Rpb24gY3JlYXRlQ2FyZChyYW5rLCBzdWl0KSB7XG4gICAgcmV0dXJuIHJhbmsgfCBzdWl0O1xufVxuZXhwb3J0cy5jcmVhdGVDYXJkID0gY3JlYXRlQ2FyZDtcbmZ1bmN0aW9uIGdldFN1aXQoY2FyZCkge1xuICAgIGNvbnN0IHN1aXRiID0gKCgxIDw8IDQpIC0gMSkgJiBjYXJkO1xuICAgIGZvciAobGV0IFtuYW1lLCBzdWl0XSBvZiBleHBvcnRzLlN1aXRFbnRyaWVzKSB7XG4gICAgICAgIGlmIChzdWl0ID09PSBzdWl0YilcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdWl0IG5vdCBmb3VuZFwiKTtcbn1cbmV4cG9ydHMuZ2V0U3VpdCA9IGdldFN1aXQ7XG5mdW5jdGlvbiBnZXRSYW5rKGNhcmQpIHtcbiAgICBjb25zdCByYW5rYiA9ICgoKDEgPDwgMTQpIC0gMSkgPDwgNCkgJiBjYXJkO1xuICAgIGZvciAobGV0IFtuYW1lLCByYW5rXSBvZiBleHBvcnRzLlJhbmtFbnRyaWVzKSB7XG4gICAgICAgIGlmIChyYW5rID09PSByYW5rYilcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJSYW5rIG5vdCBmb3VuZFwiKTtcbn1cbmV4cG9ydHMuZ2V0UmFuayA9IGdldFJhbms7XG5mdW5jdGlvbiBnZXRTdHJpbmcoY2FyZCkge1xuICAgIHJldHVybiBgJHtnZXRTdWl0KGNhcmQpfSAke2dldFJhbmsoY2FyZCl9YDtcbn1cbmV4cG9ydHMuZ2V0U3RyaW5nID0gZ2V0U3RyaW5nO1xuZnVuY3Rpb24gZ2V0U1ZHKGNhcmQpIHtcbiAgICBjb25zdCBbc3VpdCwgcmFua10gPSBnZXRTdHJpbmcoY2FyZCkuc3BsaXQoXCIgXCIpO1xuICAgIGxldCBzdmcgPSBcIlwiO1xuICAgIHN2ZyArPSBSYW5rVG9TdmdbcmFua107XG4gICAgc3ZnICs9IFN1aXRUb1N2Z1tzdWl0XTtcbiAgICByZXR1cm4gc3ZnO1xufVxuZXhwb3J0cy5nZXRTVkcgPSBnZXRTVkc7XG5mdW5jdGlvbiBjcmVhdGVFbXB0eURlY2soKSB7XG4gICAgcmV0dXJuIFtdO1xufVxuZXhwb3J0cy5jcmVhdGVFbXB0eURlY2sgPSBjcmVhdGVFbXB0eURlY2s7XG5mdW5jdGlvbiBjcmVhdGVEZWNrKHNpemUpIHtcbiAgICBsZXQgZGVjayA9IFtdO1xuICAgIGZvciAobGV0IHMgPSAwOyBzIDwgc2l6ZTsgcysrKSB7XG4gICAgICAgIGZvciAobGV0IFtzdWl0LCBfXSBvZiBleHBvcnRzLlN1aXRFbnRyaWVzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBbcmFuaywgX10gb2YgZXhwb3J0cy5SYW5rRW50cmllcykge1xuICAgICAgICAgICAgICAgIGRlY2sucHVzaChjcmVhdGVDYXJkKFJhbmtbcmFua10sIFN1aXRbc3VpdF0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVjaztcbn1cbmV4cG9ydHMuY3JlYXRlRGVjayA9IGNyZWF0ZURlY2s7XG5mdW5jdGlvbiBzaHVmZmxlKGRlY2spIHtcbiAgICBsZXQgY3VycmVudF9pbmRleCA9IGRlY2subGVuZ3RoO1xuICAgIHdoaWxlIChjdXJyZW50X2luZGV4ICE9IDApIHtcbiAgICAgICAgbGV0IHJhbmRvbV9pbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRlY2subGVuZ3RoKTtcbiAgICAgICAgY3VycmVudF9pbmRleCAtPSAxO1xuICAgICAgICBzd2FwKGRlY2ssIGN1cnJlbnRfaW5kZXgsIHJhbmRvbV9pbmRleCk7XG4gICAgfVxufVxuZXhwb3J0cy5zaHVmZmxlID0gc2h1ZmZsZTtcbmZ1bmN0aW9uIHN3YXAoZGVjaywgY3VycmVudF9pbmRleCwgcmFuZG9tX2luZGV4KSB7XG4gICAgW2RlY2tbY3VycmVudF9pbmRleF0sIGRlY2tbcmFuZG9tX2luZGV4XV0gPSBbZGVja1tyYW5kb21faW5kZXhdLCBkZWNrW2N1cnJlbnRfaW5kZXhdXTtcbn1cbmV4cG9ydHMuc3dhcCA9IHN3YXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGlzcGxheVBsYXllckhhbmQgPSBleHBvcnRzLnNldHVwID0gdm9pZCAwO1xuY29uc3QgY2FyZHNfMSA9IHJlcXVpcmUoXCIuL2NhcmRzXCIpO1xuY29uc3QgZ2FtZV8xID0gcmVxdWlyZShcIi4vZ2FtZVwiKTtcbmZ1bmN0aW9uIHNldHVwKHBsYXllciwgaGFuZGxlRGVja0NsaWNrLCBoYW5kbGVOZXh0Q2xpY2spIHtcbiAgICBjb25zdCBkZWNrRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVja1wiKTtcbiAgICBkZWNrRWxlbWVudCA9PT0gbnVsbCB8fCBkZWNrRWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVja0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBpZiAocGxheWVyLnN0YXRlID09PSBnYW1lXzEuU3RhdGUuQ2hvb3NlKSB7XG4gICAgICAgICAgICBoYW5kbGVEZWNrQ2xpY2soZSwgcGxheWVyKTtcbiAgICAgICAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXIgLmNhcmRbZGF0YS1pbmRleD0nMTAnXVwiKTtcbiAgICAgICAgICAgIGlmIChjYXJkRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwbGF5ZXIgLmdyb3VwXCIpWzJdO1xuICAgICAgICAgICAgICAgIGdyb3VwLmFwcGVuZENoaWxkKGNhcmRFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwbGF5ZXIuY2hlY2tXaW4oKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV09OXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpblwiKTtcbiAgICAgICAgICAgICAgICBpZiAod2luRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5FbGVtZW50LmlubmVySFRNTCA9IFwiWW91IFdvblwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9zdCBvciBub3RcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCByZXNlcnZlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXJ2ZVwiKTtcbiAgICByZXNlcnZlRWxlbWVudCA9PT0gbnVsbCB8fCByZXNlcnZlRWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVzZXJ2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBpZiAocGxheWVyLnN0YXRlID09PSBnYW1lXzEuU3RhdGUuQ2hvb3NlKSB7XG4gICAgICAgICAgICBoYW5kbGVSZXNlcnZlQ2xpY2soZSwgcGxheWVyKTtcbiAgICAgICAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXIgLmNhcmRbZGF0YS1pbmRleD0nMTAnXVwiKTtcbiAgICAgICAgICAgIGlmIChjYXJkRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwbGF5ZXIgLmdyb3VwXCIpWzJdO1xuICAgICAgICAgICAgICAgIGdyb3VwLmFwcGVuZENoaWxkKGNhcmRFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwbGF5ZXIuY2hlY2tXaW4oKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV09OXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpblwiKTtcbiAgICAgICAgICAgICAgICBpZiAod2luRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5FbGVtZW50LmlubmVySFRNTCA9IFwiWW91IFdvblwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9zdCBvciBub3RcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBuZXh0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dFwiKTtcbiAgICBuZXh0RWxlbWVudCA9PT0gbnVsbCB8fCBuZXh0RWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmV4dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBpZiAocGxheWVyLnN0YXRlID09PSBnYW1lXzEuU3RhdGUuTGVhdmUpIHtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVOZXh0Q2xpY2soZSwgcGxheWVyLCBzZWxlY3RlZEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyIGltZ1wiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KHNlbGVjdGVkRWxlbWVudC5kYXRhc2V0LmluZGV4IHx8IFwiLTFcIik7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkRWxlbWVudHNbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGpuZGV4ID0gcGFyc2VJbnQoY2FyZEVsZW1lbnQuZGF0YXNldC5pbmRleCB8fCBcIi0xXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoam5kZXggPiBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEVsZW1lbnQuZGF0YXNldC5pbmRleCA9IGAke2puZGV4IC0gMX1gO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChqbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwbGF5ZXIgLmdyb3VwXCIpWzJdO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgICAgIG5ld0NhcmQuZGF0YXNldC5pbmRleCA9IFwiMTBcIjtcbiAgICAgICAgICAgICAgICBuZXdDYXJkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBuZXdDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBoYW5kbGVDbGljayhlLCBwbGF5ZXIpKTtcbiAgICAgICAgICAgICAgICBncm91cC5hcHBlbmRDaGlsZChuZXdDYXJkKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLWNhcmRcIik7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5UGxheWVySGFuZChwbGF5ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY2FyZEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwbGF5ZXIgaW1nXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZEVsZW1lbnRzW2ldO1xuICAgICAgICBjYXJkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gaGFuZGxlQ2xpY2soZSwgcGxheWVyKSk7XG4gICAgfVxuICAgIGNvbnN0IGdyb3VwRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3BsYXllciAuZ3JvdXBcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncm91cEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwRWxlbWVudCA9IGdyb3VwRWxlbWVudHNbaV07XG4gICAgICAgIGdyb3VwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gaGFuZGxlR3JvdXBDbGljayhlKSk7XG4gICAgfVxufVxuZXhwb3J0cy5zZXR1cCA9IHNldHVwO1xuZnVuY3Rpb24gaGFuZGxlUmVzZXJ2ZUNsaWNrKF9lLCBwbGF5ZXIpIHtcbiAgICB0cnkge1xuICAgICAgICBwbGF5ZXIuY2hvb3NlKHBsYXllci5yZXNlcnZlLnBvcCgpKTtcbiAgICAgICAgZGlzcGxheVBsYXllckhhbmQocGxheWVyKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gZ2V0IGNhcmQgZnJvbSByZXNlcnZlLiAke2Vycn1gKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkaXNwbGF5UGxheWVySGFuZChwbGF5ZXIpIHtcbiAgICBjb25zdCBjYXJkRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3BsYXllciBpbWdcIik7XG4gICAgaWYgKGNhcmRFbGVtZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmRFbGVtZW50c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoY2FyZEVsZW1lbnQuZGF0YXNldC5pbmRleCB8fCBcIi0xXCIpO1xuICAgICAgICAgICAgY29uc3QgY2FyZCA9IHBsYXllci5oYW5kW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChjYXJkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjYXJkRWxlbWVudC5zcmMgPSBcIi4vY2FyZHMvXCIgKyAoMCwgY2FyZHNfMS5nZXRTVkcpKGNhcmQpICsgXCIuc3ZnXCI7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAxMCkge1xuICAgICAgICAgICAgICAgICAgICBjYXJkRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgY2FyZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FyZHMgdG8gcmVwbGFjZSBub3QgZm91bmRcIik7XG4gICAgfVxuICAgIGNvbnN0IHJlc2VydmUgPSBwbGF5ZXIucmVzZXJ2ZVtwbGF5ZXIucmVzZXJ2ZS5sZW5ndGggLSAxXTtcbiAgICBjb25zdCByZXNlcnZlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXJ2ZVwiKTtcbiAgICBpZiAocmVzZXJ2ZUVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHJlc2VydmUpIHtcbiAgICAgICAgICAgIHJlc2VydmVFbGVtZW50LnNyYyA9IFwiLi9jYXJkcy9cIiArICgwLCBjYXJkc18xLmdldFNWRykocmVzZXJ2ZSkgKyBcIi5zdmdcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc2VydmVFbGVtZW50LnNyYyA9IFwiLi9jYXJkcy90cmFuc3BhcmVudC5wbmdcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBkZWNrRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVja1wiKTtcbiAgICBjb25zdCBsZWF2ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHRcIik7XG4gICAgY29uc3Qgd2hpdGUgPSBcIiNGNkY0RjRcIjtcbiAgICBjb25zdCBncmVlbiA9IFwiIzAwYzg2Y1wiO1xuICAgIGlmIChkZWNrRWxlbWVudCAmJiByZXNlcnZlRWxlbWVudCAmJiBsZWF2ZUVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHBsYXllci5zdGF0ZSA9PT0gZ2FtZV8xLlN0YXRlLkNob29zZSkge1xuICAgICAgICAgICAgZGVja0VsZW1lbnQuc3R5bGUub3V0bGluZUNvbG9yID0gZ3JlZW47XG4gICAgICAgICAgICByZXNlcnZlRWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IGdyZWVuO1xuICAgICAgICAgICAgbGVhdmVFbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYXllci5zdGF0ZSA9PT0gZ2FtZV8xLlN0YXRlLkxlYXZlKSB7XG4gICAgICAgICAgICBkZWNrRWxlbWVudC5zdHlsZS5vdXRsaW5lQ29sb3IgPSB3aGl0ZTtcbiAgICAgICAgICAgIHJlc2VydmVFbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gd2hpdGU7XG4gICAgICAgICAgICBsZWF2ZUVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBncmVlbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxheWVyLnN0YXRlID09PSBnYW1lXzEuU3RhdGUuV2FpdCkge1xuICAgICAgICAgICAgZGVja0VsZW1lbnQuc3R5bGUub3V0bGluZUNvbG9yID0gd2hpdGU7XG4gICAgICAgICAgICByZXNlcnZlRWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IHdoaXRlO1xuICAgICAgICAgICAgbGVhdmVFbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmRpc3BsYXlQbGF5ZXJIYW5kID0gZGlzcGxheVBsYXllckhhbmQ7XG5sZXQgc2VsZWN0ZWRFbGVtZW50ID0gbnVsbDtcbmZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUsIHBsYXllcikge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50ID0gdGFyZ2V0O1xuICAgICAgICBzZWxlY3RlZEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLWNhcmRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNlbGVjdGVkRWxlbWVudCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgIHNlbGVjdGVkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtY2FyZFwiKTtcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBncm91cCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICAgIGlmICgoZ3JvdXAgPT09IG51bGwgfHwgZ3JvdXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKS5sZW5ndGgpIDwgNSB8fCBncm91cCA9PT0gc2VsZWN0ZWRFbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgZ3JvdXAgPT09IG51bGwgfHwgZ3JvdXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdyb3VwLmluc2VydEJlZm9yZShzZWxlY3RlZEVsZW1lbnQsIHRhcmdldCk7XG4gICAgfVxuICAgIHNlbGVjdGVkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtY2FyZFwiKTtcbiAgICBzZWxlY3RlZEVsZW1lbnQgPSBudWxsO1xufVxuZnVuY3Rpb24gaGFuZGxlR3JvdXBDbGljayhlKSB7XG4gICAgaWYgKHNlbGVjdGVkRWxlbWVudCA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGdyb3VwID0gZS50YXJnZXQ7XG4gICAgaWYgKChncm91cCA9PT0gbnVsbCB8fCBncm91cCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ3JvdXAucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkXCIpLmxlbmd0aCkgPCA1KSB7XG4gICAgICAgIGdyb3VwID09PSBudWxsIHx8IGdyb3VwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBncm91cC5hcHBlbmRDaGlsZChzZWxlY3RlZEVsZW1lbnQpO1xuICAgIH1cbiAgICBzZWxlY3RlZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLWNhcmRcIik7XG4gICAgc2VsZWN0ZWRFbGVtZW50ID0gbnVsbDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HYW1lID0gZXhwb3J0cy5QbGF5ZXIgPSBleHBvcnRzLlN0YXRlID0gdm9pZCAwO1xuY29uc3QgY2FyZHNfMSA9IHJlcXVpcmUoXCIuL2NhcmRzXCIpO1xudmFyIFN0YXRlO1xuKGZ1bmN0aW9uIChTdGF0ZSkge1xuICAgIFN0YXRlW1N0YXRlW1wiV2FpdFwiXSA9IDBdID0gXCJXYWl0XCI7XG4gICAgU3RhdGVbU3RhdGVbXCJDaG9vc2VcIl0gPSAxXSA9IFwiQ2hvb3NlXCI7XG4gICAgU3RhdGVbU3RhdGVbXCJMZWF2ZVwiXSA9IDJdID0gXCJMZWF2ZVwiO1xufSkoU3RhdGUgfHwgKGV4cG9ydHMuU3RhdGUgPSBTdGF0ZSA9IHt9KSk7XG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhbmQgPSBbXTtcbiAgICAgICAgdGhpcy5yZXNlcnZlID0gW107XG4gICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5XYWl0O1xuICAgIH1cbiAgICBhZGQoY2FyZCkge1xuICAgICAgICBpZiAodGhpcy5oYW5kLmxlbmd0aCA+IDExKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJIYW5kIG9mIHBsYXllciBpcyB0b28gYmlnXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZC5wdXNoKGNhcmQpO1xuICAgIH1cbiAgICBhZGRSZXNlcnZlKGNhcmQpIHtcbiAgICAgICAgdGhpcy5yZXNlcnZlLnB1c2goY2FyZCk7XG4gICAgfVxuICAgIGNoZWNrV2luKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja1dpbkhlbHAoW10sIFtdLCBbXSwgWy4uLnRoaXMuaGFuZF0pO1xuICAgIH1cbiAgICBjaGVja1dpbkhlbHAoYSwgYiwgYywgZGVjaykge1xuICAgICAgICBpZiAodGhpcy5jaGVja0dyb3VwcyhhLCBiLCBjKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEubGVuZ3RoID4gNSB8fCBiLmxlbmd0aCA+IDQgfHwgYy5sZW5ndGggPiAzKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoYS5sZW5ndGggPT09IDUgJiYgIXRoaXMuY2hlY2tHcm91cChhKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGIubGVuZ3RoID09PSA0ICYmICF0aGlzLmNoZWNrR3JvdXAoYikpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChjLmxlbmd0aCA9PT0gMyAmJiAhdGhpcy5jaGVja0dyb3VwKGMpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBjYXJkID0gZGVjay5wb3AoKTtcbiAgICAgICAgaWYgKGNhcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tXaW5IZWxwKFsuLi5hLCBjYXJkXSwgYiwgYywgWy4uLmRlY2tdKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrV2luSGVscChhLCBbLi4uYiwgY2FyZF0sIGMsIFsuLi5kZWNrXSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1dpbkhlbHAoYSwgYiwgWy4uLmMsIGNhcmRdLCBbLi4uZGVja10pKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY2hlY2tHcm91cHMoYSwgYiwgYykge1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2tTaXplKGEubGVuZ3RoLCBiLmxlbmd0aCwgYy5sZW5ndGgpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0dyb3VwKGEpICYmIHRoaXMuY2hlY2tHcm91cChiKSAmJiB0aGlzLmNoZWNrR3JvdXAoYyk7XG4gICAgfVxuICAgIGNoZWNrR3JvdXAoYSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja1NlcXVlbmNlKGEpIHx8IHRoaXMuY2hlY2tTdGFpcihhKTtcbiAgICB9XG4gICAgY2hlY2tTZXF1ZW5jZShhKSB7XG4gICAgICAgIGlmIChhLmxlbmd0aCA8IDMpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCB0ZXN0ID0gKCgxIDw8IDE0KSAtIDEpIDw8IDQ7XG4gICAgICAgIGZvciAobGV0IGMgb2YgYSkge1xuICAgICAgICAgICAgdGVzdCAmPSBjO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXN0ICE9PSAwO1xuICAgIH1cbiAgICBjaGVja1N0YWlyKGEpIHtcbiAgICAgICAgaWYgKGEubGVuZ3RoIDwgMylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgbGV0IHRlc3QgPSAwO1xuICAgICAgICBmb3IgKGxldCBjIG9mIGEpIHtcbiAgICAgICAgICAgIHRlc3QgfD0gYztcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3VpdFRlc3QgPSAoKDEgPDwgNCkgLSAxKSAmIHRlc3Q7XG4gICAgICAgIGlmIChzdWl0VGVzdCA9PT0gMCB8fFxuICAgICAgICAgICAgKHN1aXRUZXN0ICYgKHN1aXRUZXN0IC0gMSkpICE9PSAwKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0ZXN0ICY9ICgoMSA8PCAxNCkgLSAxKSA8PCA0O1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlc3QgJj0gKHRlc3QgPDwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlc3QgIT09IDA7XG4gICAgfVxuICAgIGNoZWNrU2l6ZShhLCBiLCBjKSB7XG4gICAgICAgIHJldHVybiBhICsgYiArIGMgPT0gMTEgJiYgYSA+PSAzICYmIGIgPj0gMyAmJiBjID49IDM7XG4gICAgfVxuICAgIGNob29zZShjYXJkKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBTdGF0ZS5DaG9vc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsYXllciBub3QgaW4gY2hvb3NlIHN0YXRlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYXJkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZC5wdXNoKGNhcmQpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLkxlYXZlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gY2FyZHMgaW4gYXJndW1lbnRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGVhdmUoaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IFN0YXRlLkxlYXZlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGF5ZXIgbm90IGluIGxlYXZlIHN0YXRlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiB0aGlzLmhhbmQubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbmRleCBvdXQgb2YgYm91bmRzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IFtjYXJkXSA9IHRoaXMuaGFuZC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuV2FpdDtcbiAgICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgfVxufVxuZXhwb3J0cy5QbGF5ZXIgPSBQbGF5ZXI7XG5jbGFzcyBHYW1lIHtcbiAgICA7XG4gICAgY29uc3RydWN0b3IobnVtYmVyUGxheWVycykge1xuICAgICAgICB0aGlzLnBsYXllcnMgPSBbXTtcbiAgICAgICAgdGhpcy5kZWNrID0gW107XG4gICAgICAgIHRoaXMucGxheWVySW5kZXggPSAwO1xuICAgICAgICBpZiAobnVtYmVyUGxheWVycyA8IDIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHYW1lIG5lZWRzIGF0bGVhc3QgMiBwbGF5ZXJcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyUGxheWVyczsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllcnMucHVzaChuZXcgUGxheWVyKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXJzW3RoaXMucGxheWVySW5kZXhdO1xuICAgICAgICB0aGlzLmRlY2sgPSAoMCwgY2FyZHNfMS5jcmVhdGVEZWNrKSgxKTtcbiAgICAgICAgKDAsIGNhcmRzXzEuc2h1ZmZsZSkodGhpcy5kZWNrKTtcbiAgICAgICAgdGhpcy5kZWFsKCk7XG4gICAgICAgIHRoaXMucGxheWVyLnN0YXRlID0gU3RhdGUuQ2hvb3NlO1xuICAgIH1cbiAgICBkZWFsKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHBsYXllciBvZiB0aGlzLnBsYXllcnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkID0gdGhpcy5kZWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIGlmIChjYXJkKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5hZGQoY2FyZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBjYXJkcyBsZWZ0IHRvIGRlYWxcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIG5leHRQbGF5ZXIoKSB7XG4gICAgICAgIHRoaXMucGxheWVySW5kZXggPSAodGhpcy5wbGF5ZXJJbmRleCArIDEpICUgdGhpcy5wbGF5ZXJzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBsYXllcnNbdGhpcy5wbGF5ZXJJbmRleF07XG4gICAgfVxufVxuZXhwb3J0cy5HYW1lID0gR2FtZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBkaXNwbGF5XzEgPSByZXF1aXJlKFwiLi9kaXNwbGF5XCIpO1xuY29uc3QgZ2FtZV8xID0gcmVxdWlyZShcIi4vZ2FtZVwiKTtcbmxldCBwbGF5ZXI7XG5sZXQgZGVja1Jlc29sdmU7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgcmVjZWl2ZU1lc3NhZ2UpO1xuZnVuY3Rpb24gcmVjZWl2ZU1lc3NhZ2UoeyBkYXRhIH0pIHtcbiAgICBjb25zb2xlLmxvZyhgR3Vlc3QgUmVjZWl2ZWQgZnJvbSB3aW5kb3cgJHtkYXRhfWApO1xuICAgIGNvbnN0IFtjbWQsIGFyZ10gPSBkYXRhLnNwbGl0KC8gKC4qKS9zKTtcbiAgICBzd2l0Y2ggKGNtZCkge1xuICAgICAgICBjYXNlIFwic3RhcnRcIjpcbiAgICAgICAgICAgIHBsYXllciA9IG5ldyBnYW1lXzEuUGxheWVyKCk7XG4gICAgICAgICAgICAoMCwgZGlzcGxheV8xLnNldHVwKShwbGF5ZXIsIGhhbmRsZURlY2tDbGljaywgaGFuZGxlTmV4dENsaWNrKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR3Vlc3QgU3RhcnRlZFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2V0dXBcIjpcbiAgICAgICAgICAgIHBsYXllci5oYW5kID0gSlNPTi5wYXJzZShhcmcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBIYW5kXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBY3R1YWwgcGxheWVyXCIsIHBsYXllci5oYW5kKTtcbiAgICAgICAgICAgICgwLCBkaXNwbGF5XzEuZGlzcGxheVBsYXllckhhbmQpKHBsYXllcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImRlY2tcIjpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgRGVjayBwb3BcIik7XG4gICAgICAgICAgICBjb25zdCBjYXJkID0gcGFyc2VJbnQoYXJnKTtcbiAgICAgICAgICAgIGlmIChkZWNrUmVzb2x2ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZGVja1Jlc29sdmUoY2FyZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm5leHRcIjpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgbmV4dFwiKTtcbiAgICAgICAgICAgIHBsYXllci5hZGRSZXNlcnZlKHBhcnNlSW50KGFyZykpO1xuICAgICAgICAgICAgcGxheWVyLnN0YXRlID0gZ2FtZV8xLlN0YXRlLkNob29zZTtcbiAgICAgICAgICAgICgwLCBkaXNwbGF5XzEuZGlzcGxheVBsYXllckhhbmQpKHBsYXllcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5jb25zdCBzZW5kTWVzc2FnZSA9IHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2U7XG5mdW5jdGlvbiBoYW5kbGVEZWNrQ2xpY2soX2UsIHBsYXllcikge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIHBvcERlY2soKSB7XG4gICAgICAgICAgICBzZW5kTWVzc2FnZShcInBvcFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VudCBjb21tYW5kIHBvcFwiKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgXykgPT4ge1xuICAgICAgICAgICAgICAgIGRlY2tSZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAocGxheWVyLnN0YXRlID09PSBnYW1lXzEuU3RhdGUuQ2hvb3NlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZCA9IHlpZWxkIHBvcERlY2soKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIuY2hvb3NlKGNhcmQpO1xuICAgICAgICAgICAgICAgICgwLCBkaXNwbGF5XzEuZGlzcGxheVBsYXllckhhbmQpKHBsYXllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGdldCBjYXJkIGZyb20gZGVjay4gJHtlcnJ9YCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGhhbmRsZU5leHRDbGljayhfZSwgcGxheWVyLCBzZWxlY3RlZEVsZW1lbnQpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KHNlbGVjdGVkRWxlbWVudC5kYXRhc2V0LmluZGV4IHx8IFwiLTFcIik7XG4gICAgICAgICAgICBjb25zdCBjYXJkID0gcGxheWVyLmxlYXZlKGluZGV4KTtcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKFwibmV4dCBcIiArIGNhcmQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZW50IGNvbW1hbmQgbmV4dFwiKTtcbiAgICAgICAgICAgICgwLCBkaXNwbGF5XzEuZGlzcGxheVBsYXllckhhbmQpKHBsYXllcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gbGVhdmUgY2FyZC4gJHtlcnJ9YCk7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2d1ZXN0LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9