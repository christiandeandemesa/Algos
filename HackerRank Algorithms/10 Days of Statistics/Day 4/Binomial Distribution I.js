/*
The ratio of boys to girls for babies born in Russia is 1.09:1. If there is 1 child born per birth, what proportion of Russian families 
with exactly 6 children will have at least 3 boys?

Write a program to compute the answer using the above parameters. Then print your result, rounded to a scale of 3 decimal places (i.e., 
1.234 format).
*/

// Side note these functions do not work in HackerRank because the input is '1.09 1' instead of three different numbers.
function processData1(x, n, p) {

    /*
    Since this equation is recursive, the breakcase is when x > n because x is at least 3 boys (3, 4, 5, and 6) and n is the total number 
    of trials (6), so it's impossible to get more than 6 boys out of only 6 children.

    We return 0 since we're adding all of the expressions.
    */
    if(x > n) return 0;
    else {

        /*
        The whole binomial distribution equation:

        b(x, n, p) = (n! / (x! * (n - x)!) * (p ** x) * ((1 - p) ** (n - x));
        x is the number of successful trials you need.
        n is the total number of trials.
        p is the probabability a given trial is successful.
        1 - p is the probability a given trial is a failure.
        */
        const factorialExpr = factorialize(n) / (factorialize(x) * factorialize(n - x));
        const successExpr = p ** x;
        const failExpr = (1 - p) ** (n - x);
        const expression = (factorialExpr * successExpr * failExpr);

        // Calls on this function recursively.
        return expression + processData1(x + 1, n, p);
    }
}

// Finding the facotrial of a number recursively.
function factorialize(num) {

    // Removes the edge case for negative numbers.
    if(num < 0) return -1;

    // Break case for positive numbers, and we return 1 since we are multiplying.
    else if(num === 0) return 1;

    // Calls on this function recursively.
    else return(num * factorialize(num - 1));
}

// Added .toFixed() here because when added to the recursive function, it does not get the sum correctly.
console.log(processData1(3, 6, (1.09 / 2.09)).toFixed(3));
// 0.696