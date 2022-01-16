/*
The probability that a machine produces a defective product is 1/3. What is the probability that the 1st defect occurs on the 5th item 
produced?
*/

function processData(n, p) {

    /*
    The whole geometric distribution equation:

    g(n, p) = (1 - p) ** (n - 1) * p
    n is the trial where want the failure to occur.
    p is the probability a given trial is successful.
    1 - p is the probability a given trial is a failure.
    */
    return ((1 - p) ** (n - 1) * p).toFixed(3);
} 

console.log(processData(5, 1 / 3));

/*
This is the version of the above function that passes HackerRank:

function processData(input) {
    input = input.split('\n');
    input[0] = input[0].split(' ');
    const p = Number(input[0][0]) / Number(input[0][1]);
    const n = Number(input[1]);
    console.log(((1 - p) ** (n - 1) * p).toFixed(3));
}
*/