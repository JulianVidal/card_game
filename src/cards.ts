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

export enum Suit {
    Clubs = 1,
    Diamonds = 1 << 1,
    Hearts = 1 << 2,
    Spades = 1 << 3,
}

export enum Rank {
    Ace = 16 | 16 << 13,
    Two = 16 << 1,
    Three = 16 << 2,
    Four = 16 << 3,
    Five = 16 << 4,
    Six = 16 << 5,
    Seven = 16 << 6,
    Eight = 16 << 7,
    Nine = 16 << 8,
    Ten = 16 << 9,
    Jack = 16 << 10,
    Queen = 16 << 11,
    King = 16 << 12,
}

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

export const RankEntries = Object.entries(Rank).slice(13);
export const SuitEntries = Object.entries(Suit).slice(4);

export type Card = number;

export function createCard(rank: Rank, suit: Suit): Card {
    return rank | suit;
}

export function getSuit(card: Card): Suit {
    const suitb = ((1 << 4) - 1) & card;

    for (let [name, suit] of SuitEntries) {
        if (suit === suitb) return <Suit><unknown>name;
    }

    throw new Error("Suit not found");
}

export function getRank(card: Card): Rank {
    const rankb = (((1 << 14) - 1) << 4) & card;

    for (let [name, rank] of RankEntries) {
        if (rank === rankb) return <Rank><unknown>name;
    }

    throw new Error("Rank not found");
}

export function getString(card: Card): String {
    return `${getSuit(card)} ${getRank(card)}`
}

export function getSVG(card: Card): String {
    const [suit, rank] = getString(card).split(" ");
    let svg = ""
    svg += RankToSvg[rank as keyof typeof RankToSvg]
    svg += SuitToSvg[suit as keyof typeof SuitToSvg]

    return svg;
}

export type Deck = Card[];

export function createEmptyDeck(): Deck {
    return [];
}

export function createDeck(size: number): Deck {
    let deck = []
    for (let s = 0; s < size; s++) {

        for (let [suit, _] of SuitEntries) {
            for (let [rank, _] of RankEntries) {
                deck.push(createCard((<any>Rank)[rank], (<any>Suit)[suit]));
            }
        }
    }

    return deck;
}


export function shuffle(deck: Deck) {
    let current_index = deck.length;

    while (current_index != 0) {
        let random_index = Math.floor(Math.random() * deck.length);
        current_index -= 1;

        swap(deck, current_index, random_index);
    }
}

export function swap(deck: Deck, current_index: number, random_index: number) {
    [deck[current_index], deck[random_index]] = [deck[random_index], deck[current_index]]
}
