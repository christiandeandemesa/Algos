/*
Given an array, X, of N integers and an array, W, representing the respective weights of X's elements, calculate and print the weighted 
mean of X's elements. Your answer should be rounded to a scale of 1 decimal place (i.e., 12.3 format).
*/

function weightedMean(X, W) {

    // Removes the edge case of there being more/less weights (W) then there are elements to be weighed (X).
    if (X.length !== W.length) console.log('X and W need to be the same length!');
    else {
        let weighSum = 0;
        let count = 0;
        for (let i = 0; i < X.length; i++) {

            // The total sum of each number in X multiplied by the corresponding number in W.
            weighSum += X[i] * W[i];

            // The total of how many weights there are.
            count += W[i];
        }

        // Prints the total sum divided by the number of weights, then rounded to the first decimal place.
        console.log((weighSum / count).toFixed(1));
    }
}

weightedMean([10, 40, 30, 50, 20], [1, 2, 3, 4, 5]);
// 32.0