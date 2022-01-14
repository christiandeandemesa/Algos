// You draw 2 cards from a standard 52-card deck without replacing them. What is the probability that both cards are of the same suit?

function sameSuit() {

    // The probability of drawing a card of each respective suit is 13/52, then drawing a card of the same suit is 12/51.
    const club = (13 / 52) * (12 / 51);
    const diamond = (13 / 52) * (12 / 51);
    const heart = (13 / 52) * (12 / 51);
    const spade = (13 / 52) * (12 / 51);

    // The total probability is the sum of each the suits' probabilities.
    return club + diamond + heart + spade;
}

console.log(sameSuit());