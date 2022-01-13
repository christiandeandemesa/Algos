// In a single toss of 2 fair (evenly-weighted) six-sided dice, find the probability that their sum will be at most 9.

function sum9() {

    // Possible outcomes on a die.
    let die =[1, 2, 3, 4, 5, 6];

    // Initializes the number of outcomes whose sum is less than 10.
    let favOutcomes = 0;

    // The number of total outcomes of two dice is the number of possible outcomes squared (6 ** 2, or 6 * 6).
    let totalOutcomes = 6 * 6;

    // The first for loop goes through every possible outcome on the first die.
    for(let i = 0; i < die.length; i++) {

        // The nested for loop goes through every possible outcome on the second die.
        for(let j = 0; j < die.length; j++) {

            // If the sum of the dice is less than 10, increase favOutcomes by 1.
            if(die[i] + die[j] < 10) favOutcomes += 1;
        }
    }
    return `${favOutcomes} / ${totalOutcomes}`;
}

console.log(sum9());