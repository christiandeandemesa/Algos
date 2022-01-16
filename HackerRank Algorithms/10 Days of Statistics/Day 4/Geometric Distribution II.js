/*
The probability that a machine produces a defective product is 1/3. What is the probability that the 1st defect is found during the first 
5 inspections?
*/

function processData(n, p) {

    /*
    Break case is if n is 0 because we need to go through every trial and find the probabiltiy of that trial being failure, and I had 
    chosen to start with the last trial (5) and work down to the first trial (1).
    */
    if(n === 0) return 0;
    else {
        const expression = ((1 - p) ** (n - 1) * p);

        // Calls on the function recursively while decrementing n to hit the break case.
        return expression + processData(n - 1, p);
    }
}

console.log((processData(5, 1 / 3)).toFixed(3));
// 0.868

/*
This is the version of the above function that passes HackerRank:

function processData(input) {
    input = input.split('\n');
    input[0] = input[0].split(' ');
    const p = Number(input[0][0]) / Number(input[0][1]);
    const n = Number(input[1]);
    const expr5 = ((1 - p) ** (n - 1) * p);
    const expr4 = ((1 - p) ** (4 - 1) * p);
    const expr3 = ((1 - p) ** (3 - 1) * p);
    const expr2 = ((1 - p) ** (2 - 1) * p);
    const expr1 = ((1 - p) ** (1 - 1) * p);
    const result = (expr1 + expr2 + expr3 + expr4 + expr5).toFixed(3);
    console.log(result);
}
*/