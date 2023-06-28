import { Rank, Suit, createCard, getString } from "./cards";
import { Player, Game } from "./game";

const game = new Game(2);
game.deal();
console.log(game.players);

const group = [
    createCard(Rank.Ace, Suit.Clubs),
    createCard(Rank.Three, Suit.Clubs),
    createCard(Rank.Two, Suit.Clubs),
    createCard(Rank.Five, Suit.Clubs),
    createCard(Rank.Four, Suit.Clubs),
];

console.log(game.players[0].checkStair(group));
