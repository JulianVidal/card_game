import { Rank, Suit, createCard, getString, shuffle } from "./cards";
import { Player, Game } from "./game";

const game = new Game(2);
game.deal();
console.log(game.players);

game.players[0].hand = [
    createCard(Rank.Ace, Suit.Hearts),
    createCard(Rank.Two, Suit.Hearts),
    createCard(Rank.Three, Suit.Hearts),


    createCard(Rank.Ace, Suit.Hearts),
    createCard(Rank.Two, Suit.Hearts),
    createCard(Rank.Three, Suit.Hearts),

    createCard(Rank.Ace, Suit.Hearts),
    createCard(Rank.Two, Suit.Hearts),
    createCard(Rank.Three, Suit.Hearts),
    createCard(Rank.Four, Suit.Hearts),
    createCard(Rank.Five, Suit.Hearts),
];

timer(() => {
    shuffle(game.players[0].hand);
    console.log(game.players[0].checkWin())
});

game.players[0].hand = [
    createCard(Rank.Ace, Suit.Hearts),
    createCard(Rank.Two, Suit.Hearts),
    createCard(Rank.Three, Suit.Hearts),


    createCard(Rank.Ace, Suit.Hearts),
    createCard(Rank.Ace, Suit.Hearts),
    createCard(Rank.Three, Suit.Hearts),

    createCard(Rank.Ace, Suit.Hearts),
    createCard(Rank.Two, Suit.Hearts),
    createCard(Rank.Three, Suit.Hearts),
    createCard(Rank.Four, Suit.Hearts),
    createCard(Rank.Five, Suit.Hearts),
];


timer(() => {
    shuffle(game.players[0].hand);
    console.log(game.players[0].checkWin())
});


game.players[0].hand = [
    createCard(Rank.Ace, Suit.Hearts),
    createCard(Rank.Ace, Suit.Hearts),
    createCard(Rank.Ace, Suit.Hearts),


    createCard(Rank.Ace, Suit.Hearts),
    createCard(Rank.Two, Suit.Hearts),
    createCard(Rank.Three, Suit.Hearts),
    createCard(Rank.Four, Suit.Hearts),

    createCard(Rank.Ace, Suit.Hearts),
    createCard(Rank.Two, Suit.Hearts),
    createCard(Rank.Three, Suit.Hearts),
    createCard(Rank.Four, Suit.Hearts),
];

timer(() => {
    shuffle(game.players[0].hand);
    console.log(game.players[0].checkWin())
});

function timer(anon: Function) {
    const Trials = 100;
    const start = performance.now();

    for (let i = 0; i < Trials; i++) {
        anon();
    }

    const end = performance.now();
    console.log(`Execution time: ${(end - start) / Trials} ms`);
}

