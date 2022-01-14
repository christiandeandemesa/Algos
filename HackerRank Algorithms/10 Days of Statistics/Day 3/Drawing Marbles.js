/*
A bag contains 3 red marbles and 4 blue marbles. Then, 2 marbles are drawn from the bag, at random, without replacement. If the first 
marble drawn is red, what is the probability that the second marble is blue?
*/

function drawMarble() {

    /*
    If you draw a red marble first, then there are only 6 marbles left: 2 red and 4 blue. The possibilities are either two red marbles 
    (rr), or a red marble followed by a blue marble (rb).
    */
    const possibilities = ['rr', 'rr', 'rb', 'rb', 'rb', 'rb'];
    let favOutcomes = 0;
    let totalOutcomes = 0;
    for(let i = 0; i < possibilities.length; i++) {
        if(possibilities[i].includes('rb')) favOutcomes += 1;
        totalOutcomes += 1;
    }
    return `${favOutcomes} / ${totalOutcomes}`;
}

console.log(drawMarble());