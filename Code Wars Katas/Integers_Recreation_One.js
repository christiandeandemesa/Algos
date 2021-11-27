/*
1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of 
these squares is 84100 which is 290 * 290.

Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two 
elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.
*/

// Refer to the README.md for explanation on functions.
function listSquared(m, n) {

    // Creates the two-dimensional array.
    let finalArr = [];

    // Goes through every number from m to n.
    for (let i = m; i <= n; i++) {

        // Creates the nested array.
        let divArr = [];

        // Goes through every number from 1 to wherever i is in the outer for loop.
        for (let j = 1; j <= i; j++) {

            // If there is no remainder, we add the divisor squared to the nested array.
            if (i % j === 0) {
                divArr.push(Math.pow(j, 2))
            }
        }

        // Sets sumOfDivs to 1 because if the nested array has one element, it's because the only value inside it is 1.
        let sumOfDivs = 1;

        // If the nested array has more than one element, it adds all the elements together.
        if (divArr.length > 1) {
            sumOfDivs = divArr.reduce((a, b) => a + b);
        }

        /*
        If the square root of the number is an integer, it adds the integer between m and n such that the sum of their squared divisors is 
        itself a square (i.e. i), and the total sum of all of i's divisors squared (i.e. sumOfDivs).
        */
        if (Number.isInteger(Math.sqrt(sumOfDivs))) {
            finalArr.push([i, sumOfDivs]);
        }
    }
    return finalArr;
}

console.log(listSquared(1, 250));
// [[1, 1], [42, 2500], [246, 84100]]

console.log(listSquared(42, 250));
// [[42, 2500], [246, 84100]]

console.log(listSquared(250, 500));
// [[287, 84100]]