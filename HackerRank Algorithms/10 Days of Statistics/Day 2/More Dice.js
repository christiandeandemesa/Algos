/*
In a single toss of 2 fair (evenly-weighted) six-sided dice, find the probability that the values rolled by each die will be different and 
the two dice have a sum of 6.
*/

function sum6() {
    die = [1, 2, 3, 4, 5, 6];
    let favOutcomes = 0;
    let totalOutcomes = 6 * 6;
    for(let i = 0; i < die.length; i++) {
        for(let j = 0; j < die.length; j++) {

            // If the sum of both dice is 6 and both dice are different, increase favOutcomes by 1.
            if(die[i] + die[j] === 6 && die[i] !== die[j]) favOutcomes += 1;
        }
    }
    return `${favOutcomes} / ${totalOutcomes}`;
}

console.log(sum6());