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
                if (i === 10) {
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
const game = new game_1.GameGuest();
let deckResolve;
window.addEventListener("message", receiveMessage);
function receiveMessage({ data }) {
    console.log(`Guest Received from window ${data}`);
    const [cmd, arg] = data.split(/ (.*)/s);
    switch (cmd) {
        case "start":
            (0, display_1.setup)(game.player, handleDeckClick, handleNextClick);
            console.log("Guest Started");
            break;
        case "hand":
            game.player.hand = JSON.parse(arg);
            console.log("Received Hand");
            console.log("Actual player", game.player.hand);
            (0, display_1.displayPlayerHand)(game.player);
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
            game.player.addReserve(parseInt(arg));
            game.player.state = game_1.State.Choose;
            (0, display_1.displayPlayerHand)(game.player);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3Vlc3QtYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsWUFBWSxHQUFHLGVBQWUsR0FBRyxrQkFBa0IsR0FBRyx1QkFBdUIsR0FBRyxjQUFjLEdBQUcsaUJBQWlCLEdBQUcsZUFBZSxHQUFHLGVBQWUsR0FBRyxrQkFBa0IsR0FBRyxtQkFBbUIsR0FBRyxtQkFBbUIsR0FBRyxZQUFZLEdBQUcsWUFBWTtBQUNyUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFdBQVcsWUFBWSxZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsV0FBVyxZQUFZLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsY0FBYyxlQUFlLEVBQUUsY0FBYztBQUM3QztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLG9CQUFvQixVQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxZQUFZOzs7Ozs7Ozs7OztBQzdIQztBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx5QkFBeUIsR0FBRyxhQUFhO0FBQ3pDLGdCQUFnQixtQkFBTyxDQUFDLCtCQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MseUJBQXlCO0FBQzdEO0FBQ0EsK0NBQStDLE1BQU07QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELElBQUk7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5QkFBeUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzlJYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxpQkFBaUIsR0FBRyxZQUFZLEdBQUcsY0FBYyxHQUFHLGFBQWE7QUFDakUsZ0JBQWdCLG1CQUFPLENBQUMsK0JBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsWUFBWSxhQUFhLGFBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsY0FBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7Ozs7Ozs7Ozs7QUM1Sko7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFrQixtQkFBTyxDQUFDLG1DQUFXO0FBQ3JDLGVBQWUsbUJBQU8sQ0FBQyw2QkFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsTUFBTTtBQUNoQyw4Q0FBOEMsS0FBSztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxJQUFJO0FBQy9EO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxJQUFJO0FBQ25EO0FBQ0E7Ozs7Ozs7VUNoRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcmRfZ2FtZS8uL3NyYy9jYXJkcy50cyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9zcmMvZGlzcGxheS50cyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9zcmMvZ2FtZS50cyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9zcmMvZ3Vlc3QudHMiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhcmRfZ2FtZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NhcmRfZ2FtZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vIENhcmQgQml0IFN0cnVjdHVyZVxuLy8gXG4vLyAwMDAxIENsdWJzXG4vLyAwMDEwIERpYW1vbmRzXG4vLyAwMTAwIEhlYXJ0c1xuLy8gMTAwMCBTcGFkZXNcbi8vXG4vLyAxMDAwMDAwMDAwMDAwMSBBY2Vcbi8vIDAwMDAwMDAwMDAwMDEwIFR3byBcbi8vIDAwMDAwMDAwMDAwMTAwIFRocmVlIFxuLy9cbi8vIENhcmQgMiBvZiBDbHVic1xuLy8gMDAwMDAwMDAwMDAwMTAgMTAwMFxuLy9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3dhcCA9IGV4cG9ydHMuc2h1ZmZsZSA9IGV4cG9ydHMuY3JlYXRlRGVjayA9IGV4cG9ydHMuY3JlYXRlRW1wdHlEZWNrID0gZXhwb3J0cy5nZXRTVkcgPSBleHBvcnRzLmdldFN0cmluZyA9IGV4cG9ydHMuZ2V0UmFuayA9IGV4cG9ydHMuZ2V0U3VpdCA9IGV4cG9ydHMuY3JlYXRlQ2FyZCA9IGV4cG9ydHMuU3VpdEVudHJpZXMgPSBleHBvcnRzLlJhbmtFbnRyaWVzID0gZXhwb3J0cy5SYW5rID0gZXhwb3J0cy5TdWl0ID0gdm9pZCAwO1xudmFyIFN1aXQ7XG4oZnVuY3Rpb24gKFN1aXQpIHtcbiAgICBTdWl0W1N1aXRbXCJDbHVic1wiXSA9IDFdID0gXCJDbHVic1wiO1xuICAgIFN1aXRbU3VpdFtcIkRpYW1vbmRzXCJdID0gMl0gPSBcIkRpYW1vbmRzXCI7XG4gICAgU3VpdFtTdWl0W1wiSGVhcnRzXCJdID0gNF0gPSBcIkhlYXJ0c1wiO1xuICAgIFN1aXRbU3VpdFtcIlNwYWRlc1wiXSA9IDhdID0gXCJTcGFkZXNcIjtcbn0pKFN1aXQgfHwgKGV4cG9ydHMuU3VpdCA9IFN1aXQgPSB7fSkpO1xudmFyIFJhbms7XG4oZnVuY3Rpb24gKFJhbmspIHtcbiAgICBSYW5rW1JhbmtbXCJBY2VcIl0gPSAxMzEwODhdID0gXCJBY2VcIjtcbiAgICBSYW5rW1JhbmtbXCJUd29cIl0gPSAzMl0gPSBcIlR3b1wiO1xuICAgIFJhbmtbUmFua1tcIlRocmVlXCJdID0gNjRdID0gXCJUaHJlZVwiO1xuICAgIFJhbmtbUmFua1tcIkZvdXJcIl0gPSAxMjhdID0gXCJGb3VyXCI7XG4gICAgUmFua1tSYW5rW1wiRml2ZVwiXSA9IDI1Nl0gPSBcIkZpdmVcIjtcbiAgICBSYW5rW1JhbmtbXCJTaXhcIl0gPSA1MTJdID0gXCJTaXhcIjtcbiAgICBSYW5rW1JhbmtbXCJTZXZlblwiXSA9IDEwMjRdID0gXCJTZXZlblwiO1xuICAgIFJhbmtbUmFua1tcIkVpZ2h0XCJdID0gMjA0OF0gPSBcIkVpZ2h0XCI7XG4gICAgUmFua1tSYW5rW1wiTmluZVwiXSA9IDQwOTZdID0gXCJOaW5lXCI7XG4gICAgUmFua1tSYW5rW1wiVGVuXCJdID0gODE5Ml0gPSBcIlRlblwiO1xuICAgIFJhbmtbUmFua1tcIkphY2tcIl0gPSAxNjM4NF0gPSBcIkphY2tcIjtcbiAgICBSYW5rW1JhbmtbXCJRdWVlblwiXSA9IDMyNzY4XSA9IFwiUXVlZW5cIjtcbiAgICBSYW5rW1JhbmtbXCJLaW5nXCJdID0gNjU1MzZdID0gXCJLaW5nXCI7XG59KShSYW5rIHx8IChleHBvcnRzLlJhbmsgPSBSYW5rID0ge30pKTtcbmNvbnN0IFN1aXRUb1N2ZyA9IHtcbiAgICBcIkNsdWJzXCI6IFwiQ1wiLFxuICAgIFwiRGlhbW9uZHNcIjogXCJEXCIsXG4gICAgXCJIZWFydHNcIjogXCJIXCIsXG4gICAgXCJTcGFkZXNcIjogXCJTXCIsXG59O1xuY29uc3QgUmFua1RvU3ZnID0ge1xuICAgIFwiQWNlXCI6IFwiQVwiLFxuICAgIFwiVHdvXCI6IFwiMlwiLFxuICAgIFwiVGhyZWVcIjogXCIzXCIsXG4gICAgXCJGb3VyXCI6IFwiNFwiLFxuICAgIFwiRml2ZVwiOiBcIjVcIixcbiAgICBcIlNpeFwiOiBcIjZcIixcbiAgICBcIlNldmVuXCI6IFwiN1wiLFxuICAgIFwiRWlnaHRcIjogXCI4XCIsXG4gICAgXCJOaW5lXCI6IFwiOVwiLFxuICAgIFwiVGVuXCI6IFwiMTBcIixcbiAgICBcIkphY2tcIjogXCJKXCIsXG4gICAgXCJRdWVlblwiOiBcIlFcIixcbiAgICBcIktpbmdcIjogXCJLXCIsXG59O1xuZXhwb3J0cy5SYW5rRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKFJhbmspLnNsaWNlKDEzKTtcbmV4cG9ydHMuU3VpdEVudHJpZXMgPSBPYmplY3QuZW50cmllcyhTdWl0KS5zbGljZSg0KTtcbmZ1bmN0aW9uIGNyZWF0ZUNhcmQocmFuaywgc3VpdCkge1xuICAgIHJldHVybiByYW5rIHwgc3VpdDtcbn1cbmV4cG9ydHMuY3JlYXRlQ2FyZCA9IGNyZWF0ZUNhcmQ7XG5mdW5jdGlvbiBnZXRTdWl0KGNhcmQpIHtcbiAgICBjb25zdCBzdWl0YiA9ICgoMSA8PCA0KSAtIDEpICYgY2FyZDtcbiAgICBmb3IgKGxldCBbbmFtZSwgc3VpdF0gb2YgZXhwb3J0cy5TdWl0RW50cmllcykge1xuICAgICAgICBpZiAoc3VpdCA9PT0gc3VpdGIpXG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU3VpdCBub3QgZm91bmRcIik7XG59XG5leHBvcnRzLmdldFN1aXQgPSBnZXRTdWl0O1xuZnVuY3Rpb24gZ2V0UmFuayhjYXJkKSB7XG4gICAgY29uc3QgcmFua2IgPSAoKCgxIDw8IDE0KSAtIDEpIDw8IDQpICYgY2FyZDtcbiAgICBmb3IgKGxldCBbbmFtZSwgcmFua10gb2YgZXhwb3J0cy5SYW5rRW50cmllcykge1xuICAgICAgICBpZiAocmFuayA9PT0gcmFua2IpXG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUmFuayBub3QgZm91bmRcIik7XG59XG5leHBvcnRzLmdldFJhbmsgPSBnZXRSYW5rO1xuZnVuY3Rpb24gZ2V0U3RyaW5nKGNhcmQpIHtcbiAgICByZXR1cm4gYCR7Z2V0U3VpdChjYXJkKX0gJHtnZXRSYW5rKGNhcmQpfWA7XG59XG5leHBvcnRzLmdldFN0cmluZyA9IGdldFN0cmluZztcbmZ1bmN0aW9uIGdldFNWRyhjYXJkKSB7XG4gICAgY29uc3QgW3N1aXQsIHJhbmtdID0gZ2V0U3RyaW5nKGNhcmQpLnNwbGl0KFwiIFwiKTtcbiAgICBsZXQgc3ZnID0gXCJcIjtcbiAgICBzdmcgKz0gUmFua1RvU3ZnW3JhbmtdO1xuICAgIHN2ZyArPSBTdWl0VG9Tdmdbc3VpdF07XG4gICAgcmV0dXJuIHN2Zztcbn1cbmV4cG9ydHMuZ2V0U1ZHID0gZ2V0U1ZHO1xuZnVuY3Rpb24gY3JlYXRlRW1wdHlEZWNrKCkge1xuICAgIHJldHVybiBbXTtcbn1cbmV4cG9ydHMuY3JlYXRlRW1wdHlEZWNrID0gY3JlYXRlRW1wdHlEZWNrO1xuZnVuY3Rpb24gY3JlYXRlRGVjayhzaXplKSB7XG4gICAgbGV0IGRlY2sgPSBbXTtcbiAgICBmb3IgKGxldCBzID0gMDsgcyA8IHNpemU7IHMrKykge1xuICAgICAgICBmb3IgKGxldCBbc3VpdCwgX10gb2YgZXhwb3J0cy5TdWl0RW50cmllcykge1xuICAgICAgICAgICAgZm9yIChsZXQgW3JhbmssIF9dIG9mIGV4cG9ydHMuUmFua0VudHJpZXMpIHtcbiAgICAgICAgICAgICAgICBkZWNrLnB1c2goY3JlYXRlQ2FyZChSYW5rW3JhbmtdLCBTdWl0W3N1aXRdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlY2s7XG59XG5leHBvcnRzLmNyZWF0ZURlY2sgPSBjcmVhdGVEZWNrO1xuZnVuY3Rpb24gc2h1ZmZsZShkZWNrKSB7XG4gICAgbGV0IGN1cnJlbnRfaW5kZXggPSBkZWNrLmxlbmd0aDtcbiAgICB3aGlsZSAoY3VycmVudF9pbmRleCAhPSAwKSB7XG4gICAgICAgIGxldCByYW5kb21faW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkZWNrLmxlbmd0aCk7XG4gICAgICAgIGN1cnJlbnRfaW5kZXggLT0gMTtcbiAgICAgICAgc3dhcChkZWNrLCBjdXJyZW50X2luZGV4LCByYW5kb21faW5kZXgpO1xuICAgIH1cbn1cbmV4cG9ydHMuc2h1ZmZsZSA9IHNodWZmbGU7XG5mdW5jdGlvbiBzd2FwKGRlY2ssIGN1cnJlbnRfaW5kZXgsIHJhbmRvbV9pbmRleCkge1xuICAgIFtkZWNrW2N1cnJlbnRfaW5kZXhdLCBkZWNrW3JhbmRvbV9pbmRleF1dID0gW2RlY2tbcmFuZG9tX2luZGV4XSwgZGVja1tjdXJyZW50X2luZGV4XV07XG59XG5leHBvcnRzLnN3YXAgPSBzd2FwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRpc3BsYXlQbGF5ZXJIYW5kID0gZXhwb3J0cy5zZXR1cCA9IHZvaWQgMDtcbmNvbnN0IGNhcmRzXzEgPSByZXF1aXJlKFwiLi9jYXJkc1wiKTtcbmZ1bmN0aW9uIHNldHVwKHBsYXllciwgaGFuZGxlRGVja0NsaWNrLCBoYW5kbGVOZXh0Q2xpY2spIHtcbiAgICBjb25zdCBkZWNrRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVja1wiKTtcbiAgICBkZWNrRWxlbWVudCA9PT0gbnVsbCB8fCBkZWNrRWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVja0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyIC5jYXJkW2RhdGEtaW5kZXg9JzEwJ11cIik7XG4gICAgICAgIGlmIChjYXJkRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3BsYXllciAuZ3JvdXBcIilbMl07XG4gICAgICAgICAgICBncm91cC5hcHBlbmRDaGlsZChjYXJkRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlRGVja0NsaWNrKGUsIHBsYXllcik7XG4gICAgICAgIGlmIChwbGF5ZXIuY2hlY2tXaW4oKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJXT05cIik7XG4gICAgICAgICAgICBjb25zdCB3aW5FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5cIik7XG4gICAgICAgICAgICBpZiAod2luRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHdpbkVsZW1lbnQuaW5uZXJIVE1MID0gXCJZb3UgV29uXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvc3Qgb3Igbm90XCIpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgcmVzZXJ2ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VydmVcIik7XG4gICAgcmVzZXJ2ZUVsZW1lbnQgPT09IG51bGwgfHwgcmVzZXJ2ZUVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlc2VydmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllciAuY2FyZFtkYXRhLWluZGV4PScxMCddXCIpO1xuICAgICAgICBpZiAoY2FyZEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwbGF5ZXIgLmdyb3VwXCIpWzJdO1xuICAgICAgICAgICAgZ3JvdXAuYXBwZW5kQ2hpbGQoY2FyZEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGhhbmRsZVJlc2VydmVDbGljayhlLCBwbGF5ZXIpO1xuICAgICAgICBpZiAocGxheWVyLmNoZWNrV2luKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV09OXCIpO1xuICAgICAgICAgICAgY29uc3Qgd2luRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luXCIpO1xuICAgICAgICAgICAgaWYgKHdpbkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB3aW5FbGVtZW50LmlubmVySFRNTCA9IFwiWW91IFdvblwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb3N0IG9yIG5vdFwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0XCIpO1xuICAgIG5leHRFbGVtZW50ID09PSBudWxsIHx8IG5leHRFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuZXh0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIGhhbmRsZU5leHRDbGljayhlLCBwbGF5ZXIsIHNlbGVjdGVkRWxlbWVudCk7XG4gICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyIGltZ1wiKTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoc2VsZWN0ZWRFbGVtZW50LmRhdGFzZXQuaW5kZXggfHwgXCItMVwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBpbmRleCArIDE7IGkgPCBjYXJkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmRFbGVtZW50c1tpXTtcbiAgICAgICAgICAgICAgICBjYXJkRWxlbWVudC5kYXRhc2V0LmluZGV4ID0gYCR7aSAtIDF9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwbGF5ZXIgZ3JvdXBcIilbMl07XG4gICAgICAgICAgICBjb25zdCBuZXdDYXJkID0gY2FyZEVsZW1lbnRzWzBdLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgbmV3Q2FyZC5kYXRhc2V0LmluZGV4ID0gXCIxMFwiO1xuICAgICAgICAgICAgbmV3Q2FyZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBncm91cC5hcHBlbmRDaGlsZChuZXdDYXJkKTtcbiAgICAgICAgICAgIHNlbGVjdGVkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtY2FyZFwiKTtcbiAgICAgICAgICAgIHNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjYXJkRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3BsYXllciBpbWdcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkRWxlbWVudHNbaV07XG4gICAgICAgIGNhcmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBoYW5kbGVDbGljayhlLCBwbGF5ZXIpKTtcbiAgICB9XG4gICAgY29uc3QgZ3JvdXBFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyIC5ncm91cFwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyb3VwRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZ3JvdXBFbGVtZW50ID0gZ3JvdXBFbGVtZW50c1tpXTtcbiAgICAgICAgZ3JvdXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBoYW5kbGVHcm91cENsaWNrKGUpKTtcbiAgICB9XG59XG5leHBvcnRzLnNldHVwID0gc2V0dXA7XG5mdW5jdGlvbiBoYW5kbGVSZXNlcnZlQ2xpY2soX2UsIHBsYXllcikge1xuICAgIHRyeSB7XG4gICAgICAgIHBsYXllci5jaG9vc2UocGxheWVyLnJlc2VydmUucG9wKCkpO1xuICAgICAgICBkaXNwbGF5UGxheWVySGFuZChwbGF5ZXIpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBnZXQgY2FyZCBmcm9tIHJlc2VydmUuICR7ZXJyfWApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJIYW5kKHBsYXllcikge1xuICAgIGNvbnN0IGNhcmRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGxheWVyIGltZ1wiKTtcbiAgICBpZiAoY2FyZEVsZW1lbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZEVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChjYXJkRWxlbWVudC5kYXRhc2V0LmluZGV4IHx8IFwiLTFcIik7XG4gICAgICAgICAgICBjb25zdCBjYXJkID0gcGxheWVyLmhhbmRbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKGNhcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNhcmRFbGVtZW50LnNyYyA9IFwiLi9jYXJkcy9cIiArICgwLCBjYXJkc18xLmdldFNWRykoY2FyZCkgKyBcIi5zdmdcIjtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGNhcmRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhcmRzIHRvIHJlcGxhY2Ugbm90IGZvdW5kXCIpO1xuICAgIH1cbiAgICBjb25zdCByZXNlcnZlID0gcGxheWVyLnJlc2VydmVbcGxheWVyLnJlc2VydmUubGVuZ3RoIC0gMV07XG4gICAgaWYgKHJlc2VydmUpIHtcbiAgICAgICAgY29uc3QgcmVzZXJ2ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2VydmVcIik7XG4gICAgICAgIGlmIChyZXNlcnZlRWxlbWVudCkge1xuICAgICAgICAgICAgcmVzZXJ2ZUVsZW1lbnQuc3JjID0gXCIuL2NhcmRzL1wiICsgKDAsIGNhcmRzXzEuZ2V0U1ZHKShyZXNlcnZlKSArIFwiLnN2Z1wiO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5kaXNwbGF5UGxheWVySGFuZCA9IGRpc3BsYXlQbGF5ZXJIYW5kO1xubGV0IHNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG5mdW5jdGlvbiBoYW5kbGVDbGljayhlLCBwbGF5ZXIpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAoc2VsZWN0ZWRFbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgIHNlbGVjdGVkRWxlbWVudCA9IHRhcmdldDtcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC1jYXJkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgPT09IHRhcmdldCkge1xuICAgICAgICBzZWxlY3RlZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLWNhcmRcIik7XG4gICAgICAgIHNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZ3JvdXAgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICBpZiAoKGdyb3VwID09PSBudWxsIHx8IGdyb3VwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBncm91cC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIikubGVuZ3RoKSA8IDUgfHwgZ3JvdXAgPT09IHNlbGVjdGVkRWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGdyb3VwID09PSBudWxsIHx8IGdyb3VwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBncm91cC5pbnNlcnRCZWZvcmUoc2VsZWN0ZWRFbGVtZW50LCB0YXJnZXQpO1xuICAgIH1cbiAgICBzZWxlY3RlZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLWNhcmRcIik7XG4gICAgc2VsZWN0ZWRFbGVtZW50ID0gbnVsbDtcbn1cbmZ1bmN0aW9uIGhhbmRsZUdyb3VwQ2xpY2soZSkge1xuICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgPT09IG51bGwpXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zdCBncm91cCA9IGUudGFyZ2V0O1xuICAgIGlmICgoZ3JvdXAgPT09IG51bGwgfHwgZ3JvdXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKS5sZW5ndGgpIDwgNSkge1xuICAgICAgICBncm91cCA9PT0gbnVsbCB8fCBncm91cCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ3JvdXAuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRFbGVtZW50KTtcbiAgICB9XG4gICAgc2VsZWN0ZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC1jYXJkXCIpO1xuICAgIHNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2FtZUd1ZXN0ID0gZXhwb3J0cy5HYW1lID0gZXhwb3J0cy5QbGF5ZXIgPSBleHBvcnRzLlN0YXRlID0gdm9pZCAwO1xuY29uc3QgY2FyZHNfMSA9IHJlcXVpcmUoXCIuL2NhcmRzXCIpO1xudmFyIFN0YXRlO1xuKGZ1bmN0aW9uIChTdGF0ZSkge1xuICAgIFN0YXRlW1N0YXRlW1wiV2FpdFwiXSA9IDBdID0gXCJXYWl0XCI7XG4gICAgU3RhdGVbU3RhdGVbXCJDaG9vc2VcIl0gPSAxXSA9IFwiQ2hvb3NlXCI7XG4gICAgU3RhdGVbU3RhdGVbXCJMZWF2ZVwiXSA9IDJdID0gXCJMZWF2ZVwiO1xufSkoU3RhdGUgfHwgKGV4cG9ydHMuU3RhdGUgPSBTdGF0ZSA9IHt9KSk7XG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhbmQgPSBbXTtcbiAgICAgICAgdGhpcy5yZXNlcnZlID0gW107XG4gICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5XYWl0O1xuICAgIH1cbiAgICBhZGQoY2FyZCkge1xuICAgICAgICBpZiAodGhpcy5oYW5kLmxlbmd0aCA+IDExKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJIYW5kIG9mIHBsYXllciBpcyB0b28gYmlnXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZC5wdXNoKGNhcmQpO1xuICAgIH1cbiAgICBhZGRSZXNlcnZlKGNhcmQpIHtcbiAgICAgICAgdGhpcy5yZXNlcnZlLnB1c2goY2FyZCk7XG4gICAgfVxuICAgIGNoZWNrV2luKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja1dpbkhlbHAoW10sIFtdLCBbXSwgWy4uLnRoaXMuaGFuZF0pO1xuICAgIH1cbiAgICBjaGVja1dpbkhlbHAoYSwgYiwgYywgZGVjaykge1xuICAgICAgICBpZiAodGhpcy5jaGVja0dyb3VwcyhhLCBiLCBjKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEubGVuZ3RoID4gNSB8fCBiLmxlbmd0aCA+IDQgfHwgYy5sZW5ndGggPiAzKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoYS5sZW5ndGggPT09IDUgJiYgIXRoaXMuY2hlY2tHcm91cChhKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGIubGVuZ3RoID09PSA0ICYmICF0aGlzLmNoZWNrR3JvdXAoYikpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChjLmxlbmd0aCA9PT0gMyAmJiAhdGhpcy5jaGVja0dyb3VwKGMpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBjYXJkID0gZGVjay5wb3AoKTtcbiAgICAgICAgaWYgKGNhcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tXaW5IZWxwKFsuLi5hLCBjYXJkXSwgYiwgYywgWy4uLmRlY2tdKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrV2luSGVscChhLCBbLi4uYiwgY2FyZF0sIGMsIFsuLi5kZWNrXSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1dpbkhlbHAoYSwgYiwgWy4uLmMsIGNhcmRdLCBbLi4uZGVja10pKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY2hlY2tHcm91cHMoYSwgYiwgYykge1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2tTaXplKGEubGVuZ3RoLCBiLmxlbmd0aCwgYy5sZW5ndGgpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0dyb3VwKGEpICYmIHRoaXMuY2hlY2tHcm91cChiKSAmJiB0aGlzLmNoZWNrR3JvdXAoYyk7XG4gICAgfVxuICAgIGNoZWNrR3JvdXAoYSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja1NlcXVlbmNlKGEpIHx8IHRoaXMuY2hlY2tTdGFpcihhKTtcbiAgICB9XG4gICAgY2hlY2tTZXF1ZW5jZShhKSB7XG4gICAgICAgIGlmIChhLmxlbmd0aCA8IDMpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCB0ZXN0ID0gKCgxIDw8IDE0KSAtIDEpIDw8IDQ7XG4gICAgICAgIGZvciAobGV0IGMgb2YgYSkge1xuICAgICAgICAgICAgdGVzdCAmPSBjO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXN0ICE9PSAwO1xuICAgIH1cbiAgICBjaGVja1N0YWlyKGEpIHtcbiAgICAgICAgaWYgKGEubGVuZ3RoIDwgMylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgbGV0IHRlc3QgPSAwO1xuICAgICAgICBmb3IgKGxldCBjIG9mIGEpIHtcbiAgICAgICAgICAgIHRlc3QgfD0gYztcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3VpdFRlc3QgPSAoKDEgPDwgNCkgLSAxKSAmIHRlc3Q7XG4gICAgICAgIGlmIChzdWl0VGVzdCA9PT0gMCB8fFxuICAgICAgICAgICAgKHN1aXRUZXN0ICYgKHN1aXRUZXN0IC0gMSkpICE9PSAwKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0ZXN0ICY9ICgoMSA8PCAxNCkgLSAxKSA8PCA0O1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlc3QgJj0gKHRlc3QgPDwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlc3QgIT09IDA7XG4gICAgfVxuICAgIGNoZWNrU2l6ZShhLCBiLCBjKSB7XG4gICAgICAgIHJldHVybiBhICsgYiArIGMgPT0gMTEgJiYgYSA+PSAzICYmIGIgPj0gMyAmJiBjID49IDM7XG4gICAgfVxuICAgIGNob29zZShjYXJkKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBTdGF0ZS5DaG9vc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsYXllciBub3QgaW4gY2hvb3NlIHN0YXRlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYXJkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZC5wdXNoKGNhcmQpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLkxlYXZlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gY2FyZHMgaW4gYXJndW1lbnRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGVhdmUoaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IFN0YXRlLkxlYXZlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGF5ZXIgbm90IGluIGxlYXZlIHN0YXRlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiB0aGlzLmhhbmQubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbmRleCBvdXQgb2YgYm91bmRzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IFtjYXJkXSA9IHRoaXMuaGFuZC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuV2FpdDtcbiAgICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgfVxufVxuZXhwb3J0cy5QbGF5ZXIgPSBQbGF5ZXI7XG5jbGFzcyBHYW1lIHtcbiAgICA7XG4gICAgY29uc3RydWN0b3IobnVtYmVyUGxheWVycykge1xuICAgICAgICB0aGlzLnBsYXllcnMgPSBbXTtcbiAgICAgICAgdGhpcy5kZWNrID0gW107XG4gICAgICAgIHRoaXMucGxheWVySW5kZXggPSAwO1xuICAgICAgICBpZiAobnVtYmVyUGxheWVycyA8IDIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHYW1lIG5lZWRzIGF0bGVhc3QgMiBwbGF5ZXJcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyUGxheWVyczsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllcnMucHVzaChuZXcgUGxheWVyKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXJzW3RoaXMucGxheWVySW5kZXhdO1xuICAgICAgICB0aGlzLmRlY2sgPSAoMCwgY2FyZHNfMS5jcmVhdGVEZWNrKSgxKTtcbiAgICAgICAgKDAsIGNhcmRzXzEuc2h1ZmZsZSkodGhpcy5kZWNrKTtcbiAgICAgICAgdGhpcy5kZWFsKCk7XG4gICAgICAgIHRoaXMucGxheWVyLnN0YXRlID0gU3RhdGUuQ2hvb3NlO1xuICAgIH1cbiAgICBkZWFsKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHBsYXllciBvZiB0aGlzLnBsYXllcnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkID0gdGhpcy5kZWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIGlmIChjYXJkKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5hZGQoY2FyZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBjYXJkcyBsZWZ0IHRvIGRlYWxcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIG5leHRQbGF5ZXIoY2FyZCkge1xuICAgICAgICB0aGlzLnBsYXllckluZGV4ID0gKHRoaXMucGxheWVySW5kZXggKyAxKSAlIHRoaXMucGxheWVycy5sZW5ndGg7XG4gICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXJzW3RoaXMucGxheWVySW5kZXhdO1xuICAgICAgICB0aGlzLnBsYXllci5hZGRSZXNlcnZlKGNhcmQpO1xuICAgICAgICB0aGlzLnBsYXllci5zdGF0ZSA9IFN0YXRlLkNob29zZTtcbiAgICB9XG59XG5leHBvcnRzLkdhbWUgPSBHYW1lO1xuY2xhc3MgR2FtZUd1ZXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgfVxufVxuZXhwb3J0cy5HYW1lR3Vlc3QgPSBHYW1lR3Vlc3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZGlzcGxheV8xID0gcmVxdWlyZShcIi4vZGlzcGxheVwiKTtcbmNvbnN0IGdhbWVfMSA9IHJlcXVpcmUoXCIuL2dhbWVcIik7XG5jb25zdCBnYW1lID0gbmV3IGdhbWVfMS5HYW1lR3Vlc3QoKTtcbmxldCBkZWNrUmVzb2x2ZTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCByZWNlaXZlTWVzc2FnZSk7XG5mdW5jdGlvbiByZWNlaXZlTWVzc2FnZSh7IGRhdGEgfSkge1xuICAgIGNvbnNvbGUubG9nKGBHdWVzdCBSZWNlaXZlZCBmcm9tIHdpbmRvdyAke2RhdGF9YCk7XG4gICAgY29uc3QgW2NtZCwgYXJnXSA9IGRhdGEuc3BsaXQoLyAoLiopL3MpO1xuICAgIHN3aXRjaCAoY21kKSB7XG4gICAgICAgIGNhc2UgXCJzdGFydFwiOlxuICAgICAgICAgICAgKDAsIGRpc3BsYXlfMS5zZXR1cCkoZ2FtZS5wbGF5ZXIsIGhhbmRsZURlY2tDbGljaywgaGFuZGxlTmV4dENsaWNrKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR3Vlc3QgU3RhcnRlZFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiaGFuZFwiOlxuICAgICAgICAgICAgZ2FtZS5wbGF5ZXIuaGFuZCA9IEpTT04ucGFyc2UoYXJnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgSGFuZFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWN0dWFsIHBsYXllclwiLCBnYW1lLnBsYXllci5oYW5kKTtcbiAgICAgICAgICAgICgwLCBkaXNwbGF5XzEuZGlzcGxheVBsYXllckhhbmQpKGdhbWUucGxheWVyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZGVja1wiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBEZWNrIHBvcFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBwYXJzZUludChhcmcpO1xuICAgICAgICAgICAgaWYgKGRlY2tSZXNvbHZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBkZWNrUmVzb2x2ZShjYXJkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibmV4dFwiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBuZXh0XCIpO1xuICAgICAgICAgICAgZ2FtZS5wbGF5ZXIuYWRkUmVzZXJ2ZShwYXJzZUludChhcmcpKTtcbiAgICAgICAgICAgIGdhbWUucGxheWVyLnN0YXRlID0gZ2FtZV8xLlN0YXRlLkNob29zZTtcbiAgICAgICAgICAgICgwLCBkaXNwbGF5XzEuZGlzcGxheVBsYXllckhhbmQpKGdhbWUucGxheWVyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbmNvbnN0IHNlbmRNZXNzYWdlID0gd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZTtcbmZ1bmN0aW9uIGhhbmRsZURlY2tDbGljayhfZSwgcGxheWVyKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgZnVuY3Rpb24gcG9wRGVjaygpIHtcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKFwicG9wXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZW50IGNvbW1hbmQgcG9wXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCBfKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVja1Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChwbGF5ZXIuc3RhdGUgPT09IGdhbWVfMS5TdGF0ZS5DaG9vc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkID0geWllbGQgcG9wRGVjaygpO1xuICAgICAgICAgICAgICAgIHBsYXllci5jaG9vc2UoY2FyZCk7XG4gICAgICAgICAgICAgICAgKDAsIGRpc3BsYXlfMS5kaXNwbGF5UGxheWVySGFuZCkocGxheWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gZ2V0IGNhcmQgZnJvbSBkZWNrLiAke2Vycn1gKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gaGFuZGxlTmV4dENsaWNrKF9lLCBwbGF5ZXIsIHNlbGVjdGVkRWxlbWVudCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoc2VsZWN0ZWRFbGVtZW50LmRhdGFzZXQuaW5kZXggfHwgXCItMVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBwbGF5ZXIubGVhdmUoaW5kZXgpO1xuICAgICAgICAgICAgc2VuZE1lc3NhZ2UoXCJuZXh0IFwiICsgY2FyZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlbnQgY29tbWFuZCBuZXh0XCIpO1xuICAgICAgICAgICAgKDAsIGRpc3BsYXlfMS5kaXNwbGF5UGxheWVySGFuZCkocGxheWVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBsZWF2ZSBjYXJkLiAke2Vycn1gKTtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZ3Vlc3QudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=