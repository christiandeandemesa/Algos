/*
A manufacturer of metal pistons finds that, on average, 12% of the pistons they manufacture are rejected because they are incorrectly 
sized. What is the probability that a batch of 10 pistons will contain:

No more than 2 rejects?
At least 2 rejects?
*/

// Side note these functions do not work in HackerRank because the input is '12 10' instead of three different numbers.

// This function is for no more than statements (i.e. no more than 2 = less than or equal to 2).
function processData1(x, n, p) {

    // The break case is -1 because we want data for when there are 0, 1, or 2 rejects.
    if(x === -1) return 0;
    else {
        const factorialExpr = factorialize(n) / (factorialize(x) * factorialize(n - x));
        const successExpr = p ** x;
        const failExpr = (1 - p) ** (n - x);
        const expression = (factorialExpr * successExpr * failExpr);

        // Notice it is now x - 1 instead of x + 1 in order to hit the break case.
        return expression + processData1(x - 1, n, p);
    }
} 

// This function is for at least statements (i.e. at least 2 = greater than or equal to 2).
function processData2(x, n, p) {
    if(x > n) return 0;
    else {
        const factorialExpr = factorialize(n) / (factorialize(x) * factorialize(n - x));
        const successExpr = p ** x;
        const failExpr = (1 - p) ** (n - x);
        const expression = (factorialExpr * successExpr * failExpr);
        return expression + processData2(x + 1, n, p);
    }
} 

function factorialize(num) {
    if(num < 0) return -1;
    else if(num === 0) return 1;
    else return(num * factorialize(num - 1));
}

console.log(processData1(2, 10, 0.12).toFixed(3));
// 0.891
console.log(processData2(2, 10, 0.12).toFixed(3));
// 0.342