import { createCard, getRank, getSuit, Rank, RankEntries, Suit, SuitEntries } from '../src/lib/cards';

describe('Testing cards file', () => {
    test('Testing the proper creation of cards', () => {
        const rank = Rank.Two;
        const suit = Suit.Spades;
        const card = createCard(rank, suit);

        expect(card).toEqual(40);
    });

    test('Testing the get of a card\'s suit', () => {
        for (let [name, suit] of SuitEntries) {
            expect(name).toEqual(getSuit(suit as number));
        }
    });

    test('Testing the get of a card\'s rank', () => {
        for (let [name, rank] of RankEntries) {
            expect(name).toEqual(getRank(rank as number));
        }
    });
});
