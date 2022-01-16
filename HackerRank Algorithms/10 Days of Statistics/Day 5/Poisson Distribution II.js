/*
The manager of a industrial plant is planning to buy a machine of either type A or type B. For each day’s operation:

The number of repairs, X, that machine A needs is a Poisson random variable with mean 0.88. The daily cost of operating A is CA.sub() = 
160 + 40 * (X ** 2).
The number of repairs, Y, that machine B needs is a Poisson random variable with mean 1.55. The daily cost of operating B is CB.sub() = 
128 + 40 * Y ** 2.
Assume that the repairs take a negligible amount of time and the machines are maintained nightly to ensure that they operate like new at 
the start of each day. Find and print the expected daily cost for each machine.
*/

function processDataX(y) {

    /*
    Notice how (X ** 2) is replaced by (y ** 2 + y).
    
    In statistics, the expectation value of X is equal to y, the mean.
    So the expectation value of X ** 2 is equal to y ** 2 + y.
    */
    return (160 + 40 * (y ** 2 + y)).toFixed(3);
}

function processDataY(y) {
    return (128 + 40 * (y ** 2 + y)).toFixed(3);
}

function factorial(num) {
    if(num === 0) return 1;
    else return num * factorial(num - 1);
}

console.log(processDataX(0.88));
console.log(processDataY(1.55));

/*
This is the version of the above function that passes HackerRank:

function processData(input) {
    input = input.split(' ');
    console.log((160 + 40 * (Number(input[0]) ** 2 + Number(input[0]))).toFixed(3));
    console.log((128 + 40 * (Number(input[1]) ** 2 + Number(input[1]))).toFixed(3));
}
*/