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

    checkWin() {
        return this.checkWinHelp([], [], [], [... this.hand]);
    }

    checkWinHelp(a: Deck, b: Deck, c: Deck, deck: Deck): Boolean {
        if (this.checkGroups(a, b, c)) {
            return true;
        }

        if (a.length > 5 || b.length > 4 || c.length > 3) return false;
        if (a.length === 5 && !this.checkGroup(a)) return false;
        if (b.length === 4 && !this.checkGroup(b)) return false;
        if (c.length === 3 && !this.checkGroup(c)) return false;


        const card = deck.pop();
        if (card !== undefined) {
            if (this.checkWinHelp([...a, card], b, c, [...deck])) return true;
            if (this.checkWinHelp(a, [...b, card], c, [...deck])) return true;
            if (this.checkWinHelp(a, b, [...c, card], [...deck])) return true;
        }

        return false;
    }

    checkGroups(a: Deck, b: Deck, c: Deck): Boolean {
        if (!this.checkSize(a.length, b.length, c.length)) return false;

        return this.checkGroup(a) && this.checkGroup(b) && this.checkGroup(c);
    }

    checkGroup(a: Deck): Boolean {
        return this.checkSequence(a) || this.checkStair(a);
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
