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
    choose(deck) {
        if (this.state !== State.Choose) {
            throw new Error("Player not in choose state");
        }
        const card = deck.pop();
        if (card !== undefined) {
            this.hand.push();
            this.state = State.Leave;
        }
        else {
            throw new Error("No cards in argument deck");
        }
    }
    leave(index, nextPlayer) {
        if (this.state !== State.Leave) {
            throw new Error("Player not in leave state");
        }
        if (index < 0 || index > this.hand.length) {
            throw new Error("Index out of bounds");
        }
        const [card] = this.hand.splice(index, 1);
        nextPlayer.addReserve(card);
        nextPlayer.state = State.Choose;
        this.state = State.Wait;
    }
}
exports.Player = Player;
class Game {
    constructor(numberPlayers) {
        this.players = [];
        this.deck = [];
        if (numberPlayers < 2)
            throw new Error("Game needs atleast 2 player");
        for (let i = 0; i < numberPlayers; i++) {
            this.players.push(new Player());
        }
        this.deck = (0, cards_1.createDeck)(1);
        (0, cards_1.shuffle)(this.deck);
    }
    play() {
        this.deal();
        // 1. Player chooses reserve or deck
        // 2. Player takes from reserve or deck
        // 3. Player checks they have won
        // 4. Player chooses card to leave
        // 5. Player leaves card in next player's reserve
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
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const cards_1 = __webpack_require__(/*! ./cards */ "./src/cards.ts");
const game_1 = __webpack_require__(/*! ./game */ "./src/game.ts");
const game = new game_1.Game(2);
game.deal();
game.players[0].state = game_1.State.Choose;
console.log((0, cards_1.getString)(game.players[0].hand[0]));
dipslayPlayerHand(game.players[0]);
const deckElement = document.getElementById("deck");
deckElement === null || deckElement === void 0 ? void 0 : deckElement.addEventListener("click", handleDeckClick);
const reserveElement = document.getElementById("reserve");
reserveElement === null || reserveElement === void 0 ? void 0 : reserveElement.addEventListener("click", handleReserveClick);
function handleReserveClick() {
    game.players[0].choose(game.players[0].reserve);
}
function handleDeckClick() {
    game.players[0].choose(game.deck);
}
function dipslayPlayerHand(player) {
    const gameElement = document.getElementById("game");
    const handElement = document.createElement("div");
    handElement.setAttribute("class", "hand hhand");
    for (let i = 0; i < player.hand.length; i++) {
        addCardView((0, cards_1.getSVG)(player.hand[i]), handElement, i);
    }
    if (gameElement !== null) {
        gameElement.appendChild(handElement);
    }
    else {
        throw new Error("Game div not found");
    }
}
let selectedElement = null;
function addCardView(card, handElement, index) {
    const cardImg = document.createElement("img");
    cardImg.setAttribute('src', 'cards/' + card + '.svg');
    cardImg.setAttribute('class', 'card');
    cardImg.setAttribute('data-index', `${index}`);
    cardImg.addEventListener('click', handleClick);
    handElement === null || handElement === void 0 ? void 0 : handElement.appendChild(cardImg);
}
function handleClick(e) {
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
    [game.players[0].hand[index], game.players[0].hand[jindex]] = [game.players[0].hand[jindex], game.players[0].hand[index]];
    selectedElement.classList.remove("selected-card");
    selectedElement = null;
}
function timer(anon) {
    const Trials = 100;
    const start = performance.now();
    for (let i = 0; i < Trials; i++) {
        anon();
    }
    const end = performance.now();
    console.log(`Execution time: ${(end - start) / Trials} ms`);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7Ozs7OztVQ3JKWjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdCQUFnQixtQkFBTyxDQUFDLCtCQUFTO0FBQ2pDLGVBQWUsbUJBQU8sQ0FBQyw2QkFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxNQUFNO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHdCQUF3QjtBQUMzRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcmRfZ2FtZS8uL3NyYy9jYXJkcy50cyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9zcmMvZ2FtZS50cyIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2FyZF9nYW1lLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gQ2FyZCBCaXQgU3RydWN0dXJlXG4vLyBcbi8vIDAwMDEgQ2x1YnNcbi8vIDAwMTAgRGlhbW9uZHNcbi8vIDAxMDAgSGVhcnRzXG4vLyAxMDAwIFNwYWRlc1xuLy9cbi8vIDEwMDAwMDAwMDAwMDAxIEFjZVxuLy8gMDAwMDAwMDAwMDAwMTAgVHdvIFxuLy8gMDAwMDAwMDAwMDAxMDAgVGhyZWUgXG4vL1xuLy8gQ2FyZCAyIG9mIENsdWJzXG4vLyAwMDAwMDAwMDAwMDAxMCAxMDAwXG4vL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zd2FwID0gZXhwb3J0cy5zaHVmZmxlID0gZXhwb3J0cy5jcmVhdGVEZWNrID0gZXhwb3J0cy5jcmVhdGVFbXB0eURlY2sgPSBleHBvcnRzLmdldFNWRyA9IGV4cG9ydHMuZ2V0U3RyaW5nID0gZXhwb3J0cy5nZXRSYW5rID0gZXhwb3J0cy5nZXRTdWl0ID0gZXhwb3J0cy5jcmVhdGVDYXJkID0gZXhwb3J0cy5TdWl0RW50cmllcyA9IGV4cG9ydHMuUmFua0VudHJpZXMgPSBleHBvcnRzLlJhbmsgPSBleHBvcnRzLlN1aXQgPSB2b2lkIDA7XG52YXIgU3VpdDtcbihmdW5jdGlvbiAoU3VpdCkge1xuICAgIFN1aXRbU3VpdFtcIkNsdWJzXCJdID0gMV0gPSBcIkNsdWJzXCI7XG4gICAgU3VpdFtTdWl0W1wiRGlhbW9uZHNcIl0gPSAyXSA9IFwiRGlhbW9uZHNcIjtcbiAgICBTdWl0W1N1aXRbXCJIZWFydHNcIl0gPSA0XSA9IFwiSGVhcnRzXCI7XG4gICAgU3VpdFtTdWl0W1wiU3BhZGVzXCJdID0gOF0gPSBcIlNwYWRlc1wiO1xufSkoU3VpdCB8fCAoZXhwb3J0cy5TdWl0ID0gU3VpdCA9IHt9KSk7XG52YXIgUmFuaztcbihmdW5jdGlvbiAoUmFuaykge1xuICAgIFJhbmtbUmFua1tcIkFjZVwiXSA9IDEzMTA4OF0gPSBcIkFjZVwiO1xuICAgIFJhbmtbUmFua1tcIlR3b1wiXSA9IDMyXSA9IFwiVHdvXCI7XG4gICAgUmFua1tSYW5rW1wiVGhyZWVcIl0gPSA2NF0gPSBcIlRocmVlXCI7XG4gICAgUmFua1tSYW5rW1wiRm91clwiXSA9IDEyOF0gPSBcIkZvdXJcIjtcbiAgICBSYW5rW1JhbmtbXCJGaXZlXCJdID0gMjU2XSA9IFwiRml2ZVwiO1xuICAgIFJhbmtbUmFua1tcIlNpeFwiXSA9IDUxMl0gPSBcIlNpeFwiO1xuICAgIFJhbmtbUmFua1tcIlNldmVuXCJdID0gMTAyNF0gPSBcIlNldmVuXCI7XG4gICAgUmFua1tSYW5rW1wiRWlnaHRcIl0gPSAyMDQ4XSA9IFwiRWlnaHRcIjtcbiAgICBSYW5rW1JhbmtbXCJOaW5lXCJdID0gNDA5Nl0gPSBcIk5pbmVcIjtcbiAgICBSYW5rW1JhbmtbXCJUZW5cIl0gPSA4MTkyXSA9IFwiVGVuXCI7XG4gICAgUmFua1tSYW5rW1wiSmFja1wiXSA9IDE2Mzg0XSA9IFwiSmFja1wiO1xuICAgIFJhbmtbUmFua1tcIlF1ZWVuXCJdID0gMzI3NjhdID0gXCJRdWVlblwiO1xuICAgIFJhbmtbUmFua1tcIktpbmdcIl0gPSA2NTUzNl0gPSBcIktpbmdcIjtcbn0pKFJhbmsgfHwgKGV4cG9ydHMuUmFuayA9IFJhbmsgPSB7fSkpO1xuY29uc3QgU3VpdFRvU3ZnID0ge1xuICAgIFwiQ2x1YnNcIjogXCJDXCIsXG4gICAgXCJEaWFtb25kc1wiOiBcIkRcIixcbiAgICBcIkhlYXJ0c1wiOiBcIkhcIixcbiAgICBcIlNwYWRlc1wiOiBcIlNcIixcbn07XG5jb25zdCBSYW5rVG9TdmcgPSB7XG4gICAgXCJBY2VcIjogXCJBXCIsXG4gICAgXCJUd29cIjogXCIyXCIsXG4gICAgXCJUaHJlZVwiOiBcIjNcIixcbiAgICBcIkZvdXJcIjogXCI0XCIsXG4gICAgXCJGaXZlXCI6IFwiNVwiLFxuICAgIFwiU2l4XCI6IFwiNlwiLFxuICAgIFwiU2V2ZW5cIjogXCI3XCIsXG4gICAgXCJFaWdodFwiOiBcIjhcIixcbiAgICBcIk5pbmVcIjogXCI5XCIsXG4gICAgXCJUZW5cIjogXCIxMFwiLFxuICAgIFwiSmFja1wiOiBcIkpcIixcbiAgICBcIlF1ZWVuXCI6IFwiUVwiLFxuICAgIFwiS2luZ1wiOiBcIktcIixcbn07XG5leHBvcnRzLlJhbmtFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoUmFuaykuc2xpY2UoMTMpO1xuZXhwb3J0cy5TdWl0RW50cmllcyA9IE9iamVjdC5lbnRyaWVzKFN1aXQpLnNsaWNlKDQpO1xuZnVuY3Rpb24gY3JlYXRlQ2FyZChyYW5rLCBzdWl0KSB7XG4gICAgcmV0dXJuIHJhbmsgfCBzdWl0O1xufVxuZXhwb3J0cy5jcmVhdGVDYXJkID0gY3JlYXRlQ2FyZDtcbmZ1bmN0aW9uIGdldFN1aXQoY2FyZCkge1xuICAgIGNvbnN0IHN1aXRiID0gKCgxIDw8IDQpIC0gMSkgJiBjYXJkO1xuICAgIGZvciAobGV0IFtuYW1lLCBzdWl0XSBvZiBleHBvcnRzLlN1aXRFbnRyaWVzKSB7XG4gICAgICAgIGlmIChzdWl0ID09PSBzdWl0YilcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdWl0IG5vdCBmb3VuZFwiKTtcbn1cbmV4cG9ydHMuZ2V0U3VpdCA9IGdldFN1aXQ7XG5mdW5jdGlvbiBnZXRSYW5rKGNhcmQpIHtcbiAgICBjb25zdCByYW5rYiA9ICgoKDEgPDwgMTQpIC0gMSkgPDwgNCkgJiBjYXJkO1xuICAgIGZvciAobGV0IFtuYW1lLCByYW5rXSBvZiBleHBvcnRzLlJhbmtFbnRyaWVzKSB7XG4gICAgICAgIGlmIChyYW5rID09PSByYW5rYilcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJSYW5rIG5vdCBmb3VuZFwiKTtcbn1cbmV4cG9ydHMuZ2V0UmFuayA9IGdldFJhbms7XG5mdW5jdGlvbiBnZXRTdHJpbmcoY2FyZCkge1xuICAgIHJldHVybiBgJHtnZXRTdWl0KGNhcmQpfSAke2dldFJhbmsoY2FyZCl9YDtcbn1cbmV4cG9ydHMuZ2V0U3RyaW5nID0gZ2V0U3RyaW5nO1xuZnVuY3Rpb24gZ2V0U1ZHKGNhcmQpIHtcbiAgICBjb25zdCBbc3VpdCwgcmFua10gPSBnZXRTdHJpbmcoY2FyZCkuc3BsaXQoXCIgXCIpO1xuICAgIGxldCBzdmcgPSBcIlwiO1xuICAgIHN2ZyArPSBSYW5rVG9TdmdbcmFua107XG4gICAgc3ZnICs9IFN1aXRUb1N2Z1tzdWl0XTtcbiAgICByZXR1cm4gc3ZnO1xufVxuZXhwb3J0cy5nZXRTVkcgPSBnZXRTVkc7XG5mdW5jdGlvbiBjcmVhdGVFbXB0eURlY2soKSB7XG4gICAgcmV0dXJuIFtdO1xufVxuZXhwb3J0cy5jcmVhdGVFbXB0eURlY2sgPSBjcmVhdGVFbXB0eURlY2s7XG5mdW5jdGlvbiBjcmVhdGVEZWNrKHNpemUpIHtcbiAgICBsZXQgZGVjayA9IFtdO1xuICAgIGZvciAobGV0IHMgPSAwOyBzIDwgc2l6ZTsgcysrKSB7XG4gICAgICAgIGZvciAobGV0IFtzdWl0LCBfXSBvZiBleHBvcnRzLlN1aXRFbnRyaWVzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBbcmFuaywgX10gb2YgZXhwb3J0cy5SYW5rRW50cmllcykge1xuICAgICAgICAgICAgICAgIGRlY2sucHVzaChjcmVhdGVDYXJkKFJhbmtbcmFua10sIFN1aXRbc3VpdF0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVjaztcbn1cbmV4cG9ydHMuY3JlYXRlRGVjayA9IGNyZWF0ZURlY2s7XG5mdW5jdGlvbiBzaHVmZmxlKGRlY2spIHtcbiAgICBsZXQgY3VycmVudF9pbmRleCA9IGRlY2subGVuZ3RoO1xuICAgIHdoaWxlIChjdXJyZW50X2luZGV4ICE9IDApIHtcbiAgICAgICAgbGV0IHJhbmRvbV9pbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRlY2subGVuZ3RoKTtcbiAgICAgICAgY3VycmVudF9pbmRleCAtPSAxO1xuICAgICAgICBzd2FwKGRlY2ssIGN1cnJlbnRfaW5kZXgsIHJhbmRvbV9pbmRleCk7XG4gICAgfVxufVxuZXhwb3J0cy5zaHVmZmxlID0gc2h1ZmZsZTtcbmZ1bmN0aW9uIHN3YXAoZGVjaywgY3VycmVudF9pbmRleCwgcmFuZG9tX2luZGV4KSB7XG4gICAgW2RlY2tbY3VycmVudF9pbmRleF0sIGRlY2tbcmFuZG9tX2luZGV4XV0gPSBbZGVja1tyYW5kb21faW5kZXhdLCBkZWNrW2N1cnJlbnRfaW5kZXhdXTtcbn1cbmV4cG9ydHMuc3dhcCA9IHN3YXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2FtZSA9IGV4cG9ydHMuUGxheWVyID0gZXhwb3J0cy5TdGF0ZSA9IHZvaWQgMDtcbmNvbnN0IGNhcmRzXzEgPSByZXF1aXJlKFwiLi9jYXJkc1wiKTtcbnZhciBTdGF0ZTtcbihmdW5jdGlvbiAoU3RhdGUpIHtcbiAgICBTdGF0ZVtTdGF0ZVtcIldhaXRcIl0gPSAwXSA9IFwiV2FpdFwiO1xuICAgIFN0YXRlW1N0YXRlW1wiQ2hvb3NlXCJdID0gMV0gPSBcIkNob29zZVwiO1xuICAgIFN0YXRlW1N0YXRlW1wiTGVhdmVcIl0gPSAyXSA9IFwiTGVhdmVcIjtcbn0pKFN0YXRlIHx8IChleHBvcnRzLlN0YXRlID0gU3RhdGUgPSB7fSkpO1xuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oYW5kID0gW107XG4gICAgICAgIHRoaXMucmVzZXJ2ZSA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuV2FpdDtcbiAgICB9XG4gICAgYWRkKGNhcmQpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFuZC5sZW5ndGggPiAxMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSGFuZCBvZiBwbGF5ZXIgaXMgdG9vIGJpZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmQucHVzaChjYXJkKTtcbiAgICB9XG4gICAgYWRkUmVzZXJ2ZShjYXJkKSB7XG4gICAgICAgIHRoaXMucmVzZXJ2ZS5wdXNoKGNhcmQpO1xuICAgIH1cbiAgICBjaGVja1dpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tXaW5IZWxwKFtdLCBbXSwgW10sIFsuLi50aGlzLmhhbmRdKTtcbiAgICB9XG4gICAgY2hlY2tXaW5IZWxwKGEsIGIsIGMsIGRlY2spIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tHcm91cHMoYSwgYiwgYykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhLmxlbmd0aCA+IDUgfHwgYi5sZW5ndGggPiA0IHx8IGMubGVuZ3RoID4gMylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGEubGVuZ3RoID09PSA1ICYmICF0aGlzLmNoZWNrR3JvdXAoYSkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChiLmxlbmd0aCA9PT0gNCAmJiAhdGhpcy5jaGVja0dyb3VwKGIpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoYy5sZW5ndGggPT09IDMgJiYgIXRoaXMuY2hlY2tHcm91cChjKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRlY2sucG9wKCk7XG4gICAgICAgIGlmIChjYXJkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrV2luSGVscChbLi4uYSwgY2FyZF0sIGIsIGMsIFsuLi5kZWNrXSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1dpbkhlbHAoYSwgWy4uLmIsIGNhcmRdLCBjLCBbLi4uZGVja10pKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tXaW5IZWxwKGEsIGIsIFsuLi5jLCBjYXJkXSwgWy4uLmRlY2tdKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNoZWNrR3JvdXBzKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrU2l6ZShhLmxlbmd0aCwgYi5sZW5ndGgsIGMubGVuZ3RoKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tHcm91cChhKSAmJiB0aGlzLmNoZWNrR3JvdXAoYikgJiYgdGhpcy5jaGVja0dyb3VwKGMpO1xuICAgIH1cbiAgICBjaGVja0dyb3VwKGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tTZXF1ZW5jZShhKSB8fCB0aGlzLmNoZWNrU3RhaXIoYSk7XG4gICAgfVxuICAgIGNoZWNrU2VxdWVuY2UoYSkge1xuICAgICAgICBpZiAoYS5sZW5ndGggPCAzKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBsZXQgdGVzdCA9ICgoMSA8PCAxNCkgLSAxKSA8PCA0O1xuICAgICAgICBmb3IgKGxldCBjIG9mIGEpIHtcbiAgICAgICAgICAgIHRlc3QgJj0gYztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVzdCAhPT0gMDtcbiAgICB9XG4gICAgY2hlY2tTdGFpcihhKSB7XG4gICAgICAgIGlmIChhLmxlbmd0aCA8IDMpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCB0ZXN0ID0gMDtcbiAgICAgICAgZm9yIChsZXQgYyBvZiBhKSB7XG4gICAgICAgICAgICB0ZXN0IHw9IGM7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN1aXRUZXN0ID0gKCgxIDw8IDQpIC0gMSkgJiB0ZXN0O1xuICAgICAgICBpZiAoc3VpdFRlc3QgPT09IDAgfHxcbiAgICAgICAgICAgIChzdWl0VGVzdCAmIChzdWl0VGVzdCAtIDEpKSAhPT0gMClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGVzdCAmPSAoKDEgPDwgMTQpIC0gMSkgPDwgNDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0ZXN0ICY9ICh0ZXN0IDw8IDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXN0ICE9PSAwO1xuICAgIH1cbiAgICBjaGVja1NpemUoYSwgYiwgYykge1xuICAgICAgICByZXR1cm4gYSArIGIgKyBjID09IDExICYmIGEgPj0gMyAmJiBiID49IDMgJiYgYyA+PSAzO1xuICAgIH1cbiAgICBjaG9vc2UoZGVjaykge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gU3RhdGUuQ2hvb3NlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGF5ZXIgbm90IGluIGNob29zZSBzdGF0ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYXJkID0gZGVjay5wb3AoKTtcbiAgICAgICAgaWYgKGNhcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kLnB1c2goKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5MZWF2ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGNhcmRzIGluIGFyZ3VtZW50IGRlY2tcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGVhdmUoaW5kZXgsIG5leHRQbGF5ZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IFN0YXRlLkxlYXZlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGF5ZXIgbm90IGluIGxlYXZlIHN0YXRlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiB0aGlzLmhhbmQubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbmRleCBvdXQgb2YgYm91bmRzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IFtjYXJkXSA9IHRoaXMuaGFuZC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBuZXh0UGxheWVyLmFkZFJlc2VydmUoY2FyZCk7XG4gICAgICAgIG5leHRQbGF5ZXIuc3RhdGUgPSBTdGF0ZS5DaG9vc2U7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5XYWl0O1xuICAgIH1cbn1cbmV4cG9ydHMuUGxheWVyID0gUGxheWVyO1xuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IobnVtYmVyUGxheWVycykge1xuICAgICAgICB0aGlzLnBsYXllcnMgPSBbXTtcbiAgICAgICAgdGhpcy5kZWNrID0gW107XG4gICAgICAgIGlmIChudW1iZXJQbGF5ZXJzIDwgMilcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdhbWUgbmVlZHMgYXRsZWFzdCAyIHBsYXllclwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJQbGF5ZXJzOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVycy5wdXNoKG5ldyBQbGF5ZXIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWNrID0gKDAsIGNhcmRzXzEuY3JlYXRlRGVjaykoMSk7XG4gICAgICAgICgwLCBjYXJkc18xLnNodWZmbGUpKHRoaXMuZGVjayk7XG4gICAgfVxuICAgIHBsYXkoKSB7XG4gICAgICAgIHRoaXMuZGVhbCgpO1xuICAgICAgICAvLyAxLiBQbGF5ZXIgY2hvb3NlcyByZXNlcnZlIG9yIGRlY2tcbiAgICAgICAgLy8gMi4gUGxheWVyIHRha2VzIGZyb20gcmVzZXJ2ZSBvciBkZWNrXG4gICAgICAgIC8vIDMuIFBsYXllciBjaGVja3MgdGhleSBoYXZlIHdvblxuICAgICAgICAvLyA0LiBQbGF5ZXIgY2hvb3NlcyBjYXJkIHRvIGxlYXZlXG4gICAgICAgIC8vIDUuIFBsYXllciBsZWF2ZXMgY2FyZCBpbiBuZXh0IHBsYXllcidzIHJlc2VydmVcbiAgICB9XG4gICAgZGVhbCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBwbGF5ZXIgb2YgdGhpcy5wbGF5ZXJzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZCA9IHRoaXMuZGVjay5wb3AoKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FyZCkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuYWRkKGNhcmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gY2FyZHMgbGVmdCB0byBkZWFsXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuR2FtZSA9IEdhbWU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjYXJkc18xID0gcmVxdWlyZShcIi4vY2FyZHNcIik7XG5jb25zdCBnYW1lXzEgPSByZXF1aXJlKFwiLi9nYW1lXCIpO1xuY29uc3QgZ2FtZSA9IG5ldyBnYW1lXzEuR2FtZSgyKTtcbmdhbWUuZGVhbCgpO1xuZ2FtZS5wbGF5ZXJzWzBdLnN0YXRlID0gZ2FtZV8xLlN0YXRlLkNob29zZTtcbmNvbnNvbGUubG9nKCgwLCBjYXJkc18xLmdldFN0cmluZykoZ2FtZS5wbGF5ZXJzWzBdLmhhbmRbMF0pKTtcbmRpcHNsYXlQbGF5ZXJIYW5kKGdhbWUucGxheWVyc1swXSk7XG5jb25zdCBkZWNrRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVja1wiKTtcbmRlY2tFbGVtZW50ID09PSBudWxsIHx8IGRlY2tFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWNrRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRGVja0NsaWNrKTtcbmNvbnN0IHJlc2VydmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNlcnZlXCIpO1xucmVzZXJ2ZUVsZW1lbnQgPT09IG51bGwgfHwgcmVzZXJ2ZUVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlc2VydmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVSZXNlcnZlQ2xpY2spO1xuZnVuY3Rpb24gaGFuZGxlUmVzZXJ2ZUNsaWNrKCkge1xuICAgIGdhbWUucGxheWVyc1swXS5jaG9vc2UoZ2FtZS5wbGF5ZXJzWzBdLnJlc2VydmUpO1xufVxuZnVuY3Rpb24gaGFuZGxlRGVja0NsaWNrKCkge1xuICAgIGdhbWUucGxheWVyc1swXS5jaG9vc2UoZ2FtZS5kZWNrKTtcbn1cbmZ1bmN0aW9uIGRpcHNsYXlQbGF5ZXJIYW5kKHBsYXllcikge1xuICAgIGNvbnN0IGdhbWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lXCIpO1xuICAgIGNvbnN0IGhhbmRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoYW5kRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhhbmQgaGhhbmRcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIuaGFuZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBhZGRDYXJkVmlldygoMCwgY2FyZHNfMS5nZXRTVkcpKHBsYXllci5oYW5kW2ldKSwgaGFuZEVsZW1lbnQsIGkpO1xuICAgIH1cbiAgICBpZiAoZ2FtZUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgZ2FtZUVsZW1lbnQuYXBwZW5kQ2hpbGQoaGFuZEVsZW1lbnQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2FtZSBkaXYgbm90IGZvdW5kXCIpO1xuICAgIH1cbn1cbmxldCBzZWxlY3RlZEVsZW1lbnQgPSBudWxsO1xuZnVuY3Rpb24gYWRkQ2FyZFZpZXcoY2FyZCwgaGFuZEVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgY2FyZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgY2FyZEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICdjYXJkcy8nICsgY2FyZCArICcuc3ZnJyk7XG4gICAgY2FyZEltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQnKTtcbiAgICBjYXJkSW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGAke2luZGV4fWApO1xuICAgIGNhcmRJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG4gICAgaGFuZEVsZW1lbnQgPT09IG51bGwgfHwgaGFuZEVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhhbmRFbGVtZW50LmFwcGVuZENoaWxkKGNhcmRJbWcpO1xufVxuZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50ID0gdGFyZ2V0O1xuICAgICAgICBzZWxlY3RlZEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLWNhcmRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNlbGVjdGVkRWxlbWVudCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgIHNlbGVjdGVkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtY2FyZFwiKTtcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBbc2VsZWN0ZWRFbGVtZW50LnNyYywgdGFyZ2V0LnNyY10gPSBbdGFyZ2V0LnNyYywgc2VsZWN0ZWRFbGVtZW50LnNyY107XG4gICAgY29uc3QgaW5kZXggPSBwYXJzZUludChzZWxlY3RlZEVsZW1lbnQuZGF0YXNldC5pbmRleCB8fCBcIjBcIik7XG4gICAgY29uc3QgamluZGV4ID0gcGFyc2VJbnQodGFyZ2V0LmRhdGFzZXQuaW5kZXggfHwgXCIwXCIpO1xuICAgIFtnYW1lLnBsYXllcnNbMF0uaGFuZFtpbmRleF0sIGdhbWUucGxheWVyc1swXS5oYW5kW2ppbmRleF1dID0gW2dhbWUucGxheWVyc1swXS5oYW5kW2ppbmRleF0sIGdhbWUucGxheWVyc1swXS5oYW5kW2luZGV4XV07XG4gICAgc2VsZWN0ZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC1jYXJkXCIpO1xuICAgIHNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG59XG5mdW5jdGlvbiB0aW1lcihhbm9uKSB7XG4gICAgY29uc3QgVHJpYWxzID0gMTAwO1xuICAgIGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBUcmlhbHM7IGkrKykge1xuICAgICAgICBhbm9uKCk7XG4gICAgfVxuICAgIGNvbnN0IGVuZCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGNvbnNvbGUubG9nKGBFeGVjdXRpb24gdGltZTogJHsoZW5kIC0gc3RhcnQpIC8gVHJpYWxzfSBtc2ApO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9