/*
There are 3 urns labeled X, Y, and Z.


Urn X contains 4 red balls and 3 black balls.
Urn Y contains 5 red balls and 4 black balls.
Urn Z contains 4 red balls and 4 black balls.

One ball is drawn from each of the 3 urns. What is the probability that, of the 3 balls drawn, 2 are red and 1 is black?
*/

function compEventProb() {

    // The probability that you draw a red ball from Urn X, a red ball from Urn Y, and a black ball from Urn Z.
    let RRB = (4 / 7) * (5 / 9) * (4 / 8);

    // The probability that you draw a red ball from Urn X, a black ball from Urn Y, and a red ball from Urn Z.
    let RBR = (4 / 7) * (4 / 9) * (4 / 8);

    // The probability that you draw a black ball from Urn X, a red ball from Urn Y, and a red ball from Urn Z.
    let BRR = (3 / 7) * (5 / 9) * (4 / 8);

    // The probability of RRB or RBR or BRR, is the sum of their individual probabilities.
    return RRB + RBR + BRR;
}
console.log(compEventProb());