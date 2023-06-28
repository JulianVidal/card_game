import { Rank, Suit, createCard, getString, shuffle } from "./cards";
import { Player, Game } from "./game";

const game = new Game(2);
game.deal();
console.log(game.players);


function timer(anon: Function) {
    const Trials = 100;
    const start = performance.now();

    for (let i = 0; i < Trials; i++) {
        anon();
    }

    const end = performance.now();
    console.log(`Execution time: ${(end - start) / Trials} ms`);
}

