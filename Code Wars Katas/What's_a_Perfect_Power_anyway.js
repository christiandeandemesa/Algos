/*
A perfect power is a classification of positive integers:

"In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer. More formally, n 
is a perfect power if there exist natural numbers m > 1, and k > 1 such that m^k = n."

Your task is to check whether a given integer is a perfect power. If it is a perfect power, return a pair m and k with m^k = n as a proof. 
Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so (3, 4) and (9, 2) are valid solutions. However, the 
tests take care of this, so if a number is a perfect power, return any pair that proves it.
*/

// Refer to the README.md for explanation on functions.
var isPP = function(n) {
    let result = [];

    // Returns the answer if n = 1 to optimize the below for loops.
    if(n === 1) {
        return [1, 1];
    }

    // Checks to see if n is a perfect power with any set of numbers less than n.
    for(let i = 2; i < n; i++) {
        for(let j = 2; j < n; j++) {
            if(Math.pow(i, j) > n) {
                break;
            }
            if(Math.pow(i, j) === n) {
                result.push(i, j);
                return result;
            }
        }
    }

    // If there is no perfect power, return null.
    return null;
}

console.log(isPP(4));
// [2, 2]

console.log(isPP(9));
// [3, 2]

console.log(isPP(5));
// null