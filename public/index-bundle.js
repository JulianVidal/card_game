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
exports.swap = exports.shuffle = exports.getString = exports.getRank = exports.getSuit = exports.createDeck = exports.createEmptyDeck = exports.createCard = exports.SuitEntries = exports.RankEntries = exports.Rank = exports.Suit = void 0;
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
exports.RankEntries = Object.entries(Rank).slice(13);
exports.SuitEntries = Object.entries(Suit).slice(4);
function createCard(rank, suit) {
    return rank | suit;
}
exports.createCard = createCard;
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
exports.Game = exports.Player = void 0;
const cards_1 = __webpack_require__(/*! ./cards */ "./src/cards.ts");
class Player {
    constructor() {
        this.hand = [];
        this.reserve = [];
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
    checkWin(a, b, c) {
        if (!this.checkSize(a.length, b.length, c.length))
            return false;
        return true;
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
        let test = (1 << 4) - 1;
        for (let c of a) {
            test &= c;
        }
        if (test === 0)
            return false;
        test = 0;
        for (let i = 0; i < a.length; i++) {
            const c = a[i];
            test |= c;
        }
        test &= ((1 << 14) - 1) << 4;
        for (let i = 1; i < a.length; i++) {
            test &= (test << 1);
        }
        return test !== 0;
    }
    checkSize(a, b, c) {
        return a + b + c == 11 && a >= 3 && b >= 3 && c >= 3;
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
    }
    play() {
        this.deal();
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
console.log(game.players);
const group = [
    (0, cards_1.createCard)(cards_1.Rank.Ace, cards_1.Suit.Clubs),
    (0, cards_1.createCard)(cards_1.Rank.Three, cards_1.Suit.Clubs),
    (0, cards_1.createCard)(cards_1.Rank.Two, cards_1.Suit.Clubs),
    (0, cards_1.createCard)(cards_1.Rank.Five, cards_1.Suit.Clubs),
    (0, cards_1.createCard)(cards_1.Rank.Four, cards_1.Suit.Clubs),
];
console.log(game.players[0].checkStair(group));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsWUFBWSxHQUFHLGVBQWUsR0FBRyxpQkFBaUIsR0FBRyxlQUFlLEdBQUcsZUFBZSxHQUFHLGtCQUFrQixHQUFHLHVCQUF1QixHQUFHLGtCQUFrQixHQUFHLG1CQUFtQixHQUFHLG1CQUFtQixHQUFHLFlBQVksR0FBRyxZQUFZO0FBQ3BPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsV0FBVyxZQUFZLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxXQUFXLFlBQVksWUFBWTtBQUNwQyxtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLG9CQUFvQixVQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsY0FBYyxlQUFlLEVBQUUsY0FBYztBQUM3QztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLFlBQVk7Ozs7Ozs7Ozs7O0FDaEdDO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELFlBQVksR0FBRyxjQUFjO0FBQzdCLGdCQUFnQixtQkFBTyxDQUFDLCtCQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsY0FBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixjQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7Ozs7OztVQ3JGWjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdCQUFnQixtQkFBTyxDQUFDLCtCQUFTO0FBQ2pDLGVBQWUsbUJBQU8sQ0FBQyw2QkFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FyZF9nYW1lLy4vc3JjL2NhcmRzLnRzIiwid2VicGFjazovL2NhcmRfZ2FtZS8uL3NyYy9nYW1lLnRzIiwid2VicGFjazovL2NhcmRfZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYXJkX2dhbWUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDYXJkIEJpdCBTdHJ1Y3R1cmVcbi8vIFxuLy8gMDAwMSBDbHVic1xuLy8gMDAxMCBEaWFtb25kc1xuLy8gMDEwMCBIZWFydHNcbi8vIDEwMDAgU3BhZGVzXG4vL1xuLy8gMTAwMDAwMDAwMDAwMDEgQWNlXG4vLyAwMDAwMDAwMDAwMDAxMCBUd28gXG4vLyAwMDAwMDAwMDAwMDEwMCBUaHJlZSBcbi8vXG4vLyBDYXJkIDIgb2YgQ2x1YnNcbi8vIDAwMDAwMDAwMDAwMDEwIDEwMDBcbi8vXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN3YXAgPSBleHBvcnRzLnNodWZmbGUgPSBleHBvcnRzLmdldFN0cmluZyA9IGV4cG9ydHMuZ2V0UmFuayA9IGV4cG9ydHMuZ2V0U3VpdCA9IGV4cG9ydHMuY3JlYXRlRGVjayA9IGV4cG9ydHMuY3JlYXRlRW1wdHlEZWNrID0gZXhwb3J0cy5jcmVhdGVDYXJkID0gZXhwb3J0cy5TdWl0RW50cmllcyA9IGV4cG9ydHMuUmFua0VudHJpZXMgPSBleHBvcnRzLlJhbmsgPSBleHBvcnRzLlN1aXQgPSB2b2lkIDA7XG52YXIgU3VpdDtcbihmdW5jdGlvbiAoU3VpdCkge1xuICAgIFN1aXRbU3VpdFtcIkNsdWJzXCJdID0gMV0gPSBcIkNsdWJzXCI7XG4gICAgU3VpdFtTdWl0W1wiRGlhbW9uZHNcIl0gPSAyXSA9IFwiRGlhbW9uZHNcIjtcbiAgICBTdWl0W1N1aXRbXCJIZWFydHNcIl0gPSA0XSA9IFwiSGVhcnRzXCI7XG4gICAgU3VpdFtTdWl0W1wiU3BhZGVzXCJdID0gOF0gPSBcIlNwYWRlc1wiO1xufSkoU3VpdCB8fCAoZXhwb3J0cy5TdWl0ID0gU3VpdCA9IHt9KSk7XG52YXIgUmFuaztcbihmdW5jdGlvbiAoUmFuaykge1xuICAgIFJhbmtbUmFua1tcIkFjZVwiXSA9IDEzMTA4OF0gPSBcIkFjZVwiO1xuICAgIFJhbmtbUmFua1tcIlR3b1wiXSA9IDMyXSA9IFwiVHdvXCI7XG4gICAgUmFua1tSYW5rW1wiVGhyZWVcIl0gPSA2NF0gPSBcIlRocmVlXCI7XG4gICAgUmFua1tSYW5rW1wiRm91clwiXSA9IDEyOF0gPSBcIkZvdXJcIjtcbiAgICBSYW5rW1JhbmtbXCJGaXZlXCJdID0gMjU2XSA9IFwiRml2ZVwiO1xuICAgIFJhbmtbUmFua1tcIlNpeFwiXSA9IDUxMl0gPSBcIlNpeFwiO1xuICAgIFJhbmtbUmFua1tcIlNldmVuXCJdID0gMTAyNF0gPSBcIlNldmVuXCI7XG4gICAgUmFua1tSYW5rW1wiRWlnaHRcIl0gPSAyMDQ4XSA9IFwiRWlnaHRcIjtcbiAgICBSYW5rW1JhbmtbXCJOaW5lXCJdID0gNDA5Nl0gPSBcIk5pbmVcIjtcbiAgICBSYW5rW1JhbmtbXCJUZW5cIl0gPSA4MTkyXSA9IFwiVGVuXCI7XG4gICAgUmFua1tSYW5rW1wiSmFja1wiXSA9IDE2Mzg0XSA9IFwiSmFja1wiO1xuICAgIFJhbmtbUmFua1tcIlF1ZWVuXCJdID0gMzI3NjhdID0gXCJRdWVlblwiO1xuICAgIFJhbmtbUmFua1tcIktpbmdcIl0gPSA2NTUzNl0gPSBcIktpbmdcIjtcbn0pKFJhbmsgfHwgKGV4cG9ydHMuUmFuayA9IFJhbmsgPSB7fSkpO1xuZXhwb3J0cy5SYW5rRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKFJhbmspLnNsaWNlKDEzKTtcbmV4cG9ydHMuU3VpdEVudHJpZXMgPSBPYmplY3QuZW50cmllcyhTdWl0KS5zbGljZSg0KTtcbmZ1bmN0aW9uIGNyZWF0ZUNhcmQocmFuaywgc3VpdCkge1xuICAgIHJldHVybiByYW5rIHwgc3VpdDtcbn1cbmV4cG9ydHMuY3JlYXRlQ2FyZCA9IGNyZWF0ZUNhcmQ7XG5mdW5jdGlvbiBjcmVhdGVFbXB0eURlY2soKSB7XG4gICAgcmV0dXJuIFtdO1xufVxuZXhwb3J0cy5jcmVhdGVFbXB0eURlY2sgPSBjcmVhdGVFbXB0eURlY2s7XG5mdW5jdGlvbiBjcmVhdGVEZWNrKHNpemUpIHtcbiAgICBsZXQgZGVjayA9IFtdO1xuICAgIGZvciAobGV0IHMgPSAwOyBzIDwgc2l6ZTsgcysrKSB7XG4gICAgICAgIGZvciAobGV0IFtzdWl0LCBfXSBvZiBleHBvcnRzLlN1aXRFbnRyaWVzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBbcmFuaywgX10gb2YgZXhwb3J0cy5SYW5rRW50cmllcykge1xuICAgICAgICAgICAgICAgIGRlY2sucHVzaChjcmVhdGVDYXJkKFJhbmtbcmFua10sIFN1aXRbc3VpdF0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVjaztcbn1cbmV4cG9ydHMuY3JlYXRlRGVjayA9IGNyZWF0ZURlY2s7XG5mdW5jdGlvbiBnZXRTdWl0KGNhcmQpIHtcbiAgICBjb25zdCBzdWl0YiA9ICgoMSA8PCA0KSAtIDEpICYgY2FyZDtcbiAgICBmb3IgKGxldCBbbmFtZSwgc3VpdF0gb2YgZXhwb3J0cy5TdWl0RW50cmllcykge1xuICAgICAgICBpZiAoc3VpdCA9PT0gc3VpdGIpXG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU3VpdCBub3QgZm91bmRcIik7XG59XG5leHBvcnRzLmdldFN1aXQgPSBnZXRTdWl0O1xuZnVuY3Rpb24gZ2V0UmFuayhjYXJkKSB7XG4gICAgY29uc3QgcmFua2IgPSAoKCgxIDw8IDE0KSAtIDEpIDw8IDQpICYgY2FyZDtcbiAgICBmb3IgKGxldCBbbmFtZSwgcmFua10gb2YgZXhwb3J0cy5SYW5rRW50cmllcykge1xuICAgICAgICBpZiAocmFuayA9PT0gcmFua2IpXG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUmFuayBub3QgZm91bmRcIik7XG59XG5leHBvcnRzLmdldFJhbmsgPSBnZXRSYW5rO1xuZnVuY3Rpb24gZ2V0U3RyaW5nKGNhcmQpIHtcbiAgICByZXR1cm4gYCR7Z2V0U3VpdChjYXJkKX0gJHtnZXRSYW5rKGNhcmQpfWA7XG59XG5leHBvcnRzLmdldFN0cmluZyA9IGdldFN0cmluZztcbmZ1bmN0aW9uIHNodWZmbGUoZGVjaykge1xuICAgIGxldCBjdXJyZW50X2luZGV4ID0gZGVjay5sZW5ndGg7XG4gICAgd2hpbGUgKGN1cnJlbnRfaW5kZXggIT0gMCkge1xuICAgICAgICBsZXQgcmFuZG9tX2luZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGVjay5sZW5ndGgpO1xuICAgICAgICBjdXJyZW50X2luZGV4IC09IDE7XG4gICAgICAgIHN3YXAoZGVjaywgY3VycmVudF9pbmRleCwgcmFuZG9tX2luZGV4KTtcbiAgICB9XG59XG5leHBvcnRzLnNodWZmbGUgPSBzaHVmZmxlO1xuZnVuY3Rpb24gc3dhcChkZWNrLCBjdXJyZW50X2luZGV4LCByYW5kb21faW5kZXgpIHtcbiAgICBbZGVja1tjdXJyZW50X2luZGV4XSwgZGVja1tyYW5kb21faW5kZXhdXSA9IFtkZWNrW3JhbmRvbV9pbmRleF0sIGRlY2tbY3VycmVudF9pbmRleF1dO1xufVxuZXhwb3J0cy5zd2FwID0gc3dhcDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HYW1lID0gZXhwb3J0cy5QbGF5ZXIgPSB2b2lkIDA7XG5jb25zdCBjYXJkc18xID0gcmVxdWlyZShcIi4vY2FyZHNcIik7XG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhbmQgPSBbXTtcbiAgICAgICAgdGhpcy5yZXNlcnZlID0gW107XG4gICAgfVxuICAgIGFkZChjYXJkKSB7XG4gICAgICAgIGlmICh0aGlzLmhhbmQubGVuZ3RoID4gMTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkhhbmQgb2YgcGxheWVyIGlzIHRvbyBiaWdcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kLnB1c2goY2FyZCk7XG4gICAgfVxuICAgIGFkZFJlc2VydmUoY2FyZCkge1xuICAgICAgICB0aGlzLnJlc2VydmUucHVzaChjYXJkKTtcbiAgICB9XG4gICAgY2hlY2tXaW4oYSwgYiwgYykge1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2tTaXplKGEubGVuZ3RoLCBiLmxlbmd0aCwgYy5sZW5ndGgpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2hlY2tTZXF1ZW5jZShhKSB7XG4gICAgICAgIGlmIChhLmxlbmd0aCA8IDMpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCB0ZXN0ID0gKCgxIDw8IDE0KSAtIDEpIDw8IDQ7XG4gICAgICAgIGZvciAobGV0IGMgb2YgYSkge1xuICAgICAgICAgICAgdGVzdCAmPSBjO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXN0ICE9PSAwO1xuICAgIH1cbiAgICBjaGVja1N0YWlyKGEpIHtcbiAgICAgICAgaWYgKGEubGVuZ3RoIDwgMylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgbGV0IHRlc3QgPSAoMSA8PCA0KSAtIDE7XG4gICAgICAgIGZvciAobGV0IGMgb2YgYSkge1xuICAgICAgICAgICAgdGVzdCAmPSBjO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0ZXN0ID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0ZXN0ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjID0gYVtpXTtcbiAgICAgICAgICAgIHRlc3QgfD0gYztcbiAgICAgICAgfVxuICAgICAgICB0ZXN0ICY9ICgoMSA8PCAxNCkgLSAxKSA8PCA0O1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRlc3QgJj0gKHRlc3QgPDwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlc3QgIT09IDA7XG4gICAgfVxuICAgIGNoZWNrU2l6ZShhLCBiLCBjKSB7XG4gICAgICAgIHJldHVybiBhICsgYiArIGMgPT0gMTEgJiYgYSA+PSAzICYmIGIgPj0gMyAmJiBjID49IDM7XG4gICAgfVxufVxuZXhwb3J0cy5QbGF5ZXIgPSBQbGF5ZXI7XG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihudW1iZXJQbGF5ZXJzKSB7XG4gICAgICAgIHRoaXMucGxheWVycyA9IFtdO1xuICAgICAgICB0aGlzLmRlY2sgPSBbXTtcbiAgICAgICAgaWYgKG51bWJlclBsYXllcnMgPCAyKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2FtZSBuZWVkcyBhdGxlYXN0IDIgcGxheWVyXCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlclBsYXllcnM7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzLnB1c2gobmV3IFBsYXllcigpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlY2sgPSAoMCwgY2FyZHNfMS5jcmVhdGVEZWNrKSgxKTtcbiAgICB9XG4gICAgcGxheSgpIHtcbiAgICAgICAgdGhpcy5kZWFsKCk7XG4gICAgfVxuICAgIGRlYWwoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgcGxheWVyIG9mIHRoaXMucGxheWVycykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLmRlY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNhcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLmFkZChjYXJkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGNhcmRzIGxlZnQgdG8gZGVhbFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkdhbWUgPSBHYW1lO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgY2FyZHNfMSA9IHJlcXVpcmUoXCIuL2NhcmRzXCIpO1xuY29uc3QgZ2FtZV8xID0gcmVxdWlyZShcIi4vZ2FtZVwiKTtcbmNvbnN0IGdhbWUgPSBuZXcgZ2FtZV8xLkdhbWUoMik7XG5nYW1lLmRlYWwoKTtcbmNvbnNvbGUubG9nKGdhbWUucGxheWVycyk7XG5jb25zdCBncm91cCA9IFtcbiAgICAoMCwgY2FyZHNfMS5jcmVhdGVDYXJkKShjYXJkc18xLlJhbmsuQWNlLCBjYXJkc18xLlN1aXQuQ2x1YnMpLFxuICAgICgwLCBjYXJkc18xLmNyZWF0ZUNhcmQpKGNhcmRzXzEuUmFuay5UaHJlZSwgY2FyZHNfMS5TdWl0LkNsdWJzKSxcbiAgICAoMCwgY2FyZHNfMS5jcmVhdGVDYXJkKShjYXJkc18xLlJhbmsuVHdvLCBjYXJkc18xLlN1aXQuQ2x1YnMpLFxuICAgICgwLCBjYXJkc18xLmNyZWF0ZUNhcmQpKGNhcmRzXzEuUmFuay5GaXZlLCBjYXJkc18xLlN1aXQuQ2x1YnMpLFxuICAgICgwLCBjYXJkc18xLmNyZWF0ZUNhcmQpKGNhcmRzXzEuUmFuay5Gb3VyLCBjYXJkc18xLlN1aXQuQ2x1YnMpLFxuXTtcbmNvbnNvbGUubG9nKGdhbWUucGxheWVyc1swXS5jaGVja1N0YWlyKGdyb3VwKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=