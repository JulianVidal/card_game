import { Card, Deck, createDeck } from './cards';

export class Player {
    hand: Deck = [];
    reserve: Deck = [];

    add(card: Card) {
        if (this.hand.length > 11) {
            throw new Error("Hand of player is too big");
        }
        this.hand.push(card);
    }

    addReserve(card: Card) {
        this.reserve.push(card);
    }

    checkWin(a: Deck, b: Deck, c: Deck): Boolean {
        if (!this.checkSize(a.length, b.length, c.length)) return false;



        return true;
    }

    checkSequence(a: Deck): Boolean {
        if (a.length < 3) return false;
        let test = ((1 << 14) - 1) << 4;
        for (let c of a) {
            test &= c;
        }

        return test !== 0;
    }

    checkStair(a: Deck): Boolean {
        if (a.length < 3) return false;

        let test = (1 << 4) - 1;
        for (let c of a) {
            test &= c;
        }

        if (test === 0) return false;

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

    checkSize(a: number, b: number, c: number): Boolean {
        return a + b + c == 11 && a >= 3 && b >= 3 && c >= 3;
    }
}

export class Game {
    players: Player[] = [];
    deck: Deck = [];

    constructor(numberPlayers: number) {
        if (numberPlayers < 2) throw new Error("Game needs atleast 2 player");
        for (let i = 0; i < numberPlayers; i++) {
            this.players.push(new Player());
        }

        this.deck = createDeck(1);
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
                } else {
                    throw new Error("No cards left to deal");
                }
            }
        }
    }

}
