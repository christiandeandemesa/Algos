/*
A random variable, X, follows Poisson distribution with mean of 2.5. Find the probability with which the random variable X is equal to 5.
*/

function processData(y, k) {

    /*
    The whole Poisson distribution equation:

    P(k, y) = ((y ** k) * (e ** -y)) / k!
    y is the mean or the average number of successful trials.
    k is the actual number of successes.
    e = 2.71828.
    */
    const dividend = (y ** k) * (2.71828 ** -y);
    const divisor = factorial(k);
    return (dividend / divisor).toFixed(3);
} 

function factorial(num) {
    if(num === 0) return 1;
    else return num * factorial(num - 1);
}

console.log(processData(2.5, 5));
// 0.067

/*
This is the version of the above function that passes HackerRank:

function processData(input) {
    input = input.split('\n');
    const y = input[0];
    let k = input[1];
    const dividend = (y ** k) * (2.71828 ** -y);
    let divisor = 1;
    while(k > 0) {
        divisor *= k;
        k--;
    }
    console.log((dividend / divisor).toFixed(3));
}
*/