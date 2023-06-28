import { createCard, getRank, getSuit, Rank, RankEntries, Suit, SuitEntries } from '../src/cards';
import { Player, Game } from '../src/game';

describe('Testing game file', () => {

    test('Testing game checkSequence fucntion', () => {
        const game = new Game(2);

        let group = [
            createCard(Rank.Ace, Suit.Hearts),
            createCard(Rank.Ace, Suit.Clubs),
            createCard(Rank.Ace, Suit.Spades),
            createCard(Rank.Ace, Suit.Diamonds),
        ];

        expect(game.players[0].checkSequence(group)).toBeTruthy();

        group = [
            createCard(Rank.Two, Suit.Hearts),
            createCard(Rank.Ace, Suit.Clubs),
            createCard(Rank.Ace, Suit.Spades),
            createCard(Rank.Ace, Suit.Diamonds),
        ];

        expect(game.players[0].checkSequence(group)).toBeFalsy();
    });

    test('Testing game checkStair fucntion', () => {
        const game = new Game(2);
        let group = [
            createCard(Rank.Ace, Suit.Clubs),
            createCard(Rank.Two, Suit.Clubs),
            createCard(Rank.Three, Suit.Clubs),
            createCard(Rank.Four, Suit.Clubs),
        ];

        expect(game.players[0].checkStair(group)).toBeTruthy();

        group = [
            createCard(Rank.Three, Suit.Clubs),
            createCard(Rank.Two, Suit.Clubs),
            createCard(Rank.Ace, Suit.Clubs),
            createCard(Rank.Four, Suit.Clubs),
        ];

        expect(game.players[0].checkStair(group)).toBeTruthy();

        group = [
            createCard(Rank.Three, Suit.Clubs),
            createCard(Rank.Three, Suit.Clubs),
            createCard(Rank.Ace, Suit.Clubs),
            createCard(Rank.Four, Suit.Clubs),
        ];

        expect(game.players[0].checkStair(group)).toBeFalsy();

        group = [
            createCard(Rank.Three, Suit.Clubs),
            createCard(Rank.Two, Suit.Diamonds),
            createCard(Rank.Ace, Suit.Clubs),
            createCard(Rank.Four, Suit.Clubs),
        ];

        expect(game.players[0].checkStair(group)).toBeFalsy();
    });

    test('Testing game checkGroup fucntion', () => {
        const game = new Game(2);
        const cardTotal = 12;

        for (let i = 0; i < cardTotal; i++) {
            for (let j = 0; j < cardTotal - i; j++) {
                for (let k = 0; k < cardTotal - i - j; k++) {
                    let group = [i, j, k].sort().reverse();
                    let test = false;
                    if ((group[0] === 4 && group[1] == 4 && group[2] == 3) ||
                        (group[0] === 5 && group[1] == 3 && group[2] == 3)) {
                        test = true;
                    }
                    expect(test).toBe(game.players[0].checkSize(i, j, k));
                }
            }
        }
    });

    test('Testing game deal fucntion', () => {
        const game = new Game(2);
        game.deal();

        for (let player of game.players) {
            expect(player.hand.length).toEqual(10);
        }
    });

    test('Testting player add function', () => {
        const player = new Player();
        const card = createCard(Rank.Ten, Suit.Hearts);
        player.add(card);

        expect(player.hand[0]).toEqual(card);
    });

    test('Testting player reserve add function', () => {
        const player = new Player();
        const card = createCard(Rank.Three, Suit.Diamonds);
        player.addReserve(card);

        expect(player.reserve[0]).toEqual(card);
    });
});
