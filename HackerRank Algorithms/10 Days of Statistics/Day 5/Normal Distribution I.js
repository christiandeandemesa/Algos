/*
In a certain plant, the time taken to assemble a car is a random variable, X, having a normal distribution with a mean of 20 hours and a 
standard deviation of 2 hours. What is the probability that a car can be assembled at this plant in:

1. Less than 19.5 hours?
2. Between 20 and 22 hours?
*/
/*
N(u, o ** 2) = (1 / (o * Math.sqrt(2 * Math.PI))) * (e ** (-1 * ((x - u) ** 2 / (2 * o ** 2))))
u is the expectation, mean, median, and mode of the distribution.
o ** 2 is the variance.
o is the standard deviation.
Math.PI is pi (i.e. about 3.14).
e = 2.71828.
x is a random variable.
*/

function processData(input) {
    input = input.split('\n');
    // input = ['20 2', '19.5', '20 22']
    const data = input[0].split(' ');
    // data = ['20', '2']
    const q1 = Number(input[1]);
    // q1 (i.e. less than 19.5 hours) = 19.5
    const q2 = input[2].split(' ');
    // q2 = ['20', '22']
    const q2A = Number(q2[0]);
    // q2A (i.e. between 20 hours...) = 20
    const q2B = Number(q2[1]);
    // q2B (i.e. and  22 hours) = 22
    const mean = Number(data[0]);
    // mean = 20
    const std = Number(data[1]);
    // std (i.e. standard deviation) = 2
    console.log(cumulative(mean, std, q1).toFixed(3));
    // To get between two numbers, it is the difference between the cumulative distribution of the larger number and the smaller number.
    console.log((cumulative(mean, std, q2B) - cumulative(mean, std, q2A)).toFixed(3));
}

// This function finds the cumulative distribution of X where x is the probability that X will take a value less than or equal to x.
function cumulative(mean, std, x) {

    /*
    The cumulative distribution function:
    
    X = 0.5 * (1 + erf * ((x - u) / (o * Math.sqrt(2))))
    erf is the error function.
    u is the mean.
    o is the standard deviation.
    */
    let parameter = (x - mean) / (std * Math.sqrt(2));
    let X = (0.5) * (1 + erf(parameter));
    return X;
}

// This is the error function. If you do this in Python, you can replace this with Math.erf().
function erf(z) {

    /*
    Note that when comparing function as written in HackerRank, I replaced x with t to avoid confusion with the cumulative function.
    Math.abs() is the absolute value of a given number.
    */
    const t = 1 / (1 + 0.5 * Math.abs(z));
    // Math.exp() is euler's number (e) to the power of the given number.
    let result = 1 - t * Math.exp(-z * z - 1.26551223 +
        t * (1.00002368 +
            t * (0.37409196 +
                t * (0.09678418 +
                    t * (-0.18628806 +
                        t * (0.27886807 +
                            t * (-1.13520398 +
                                t * (1.48851587 +
                                    t * (-0.82215223 +
                                        t * (0.17087277))))))))));
    if (z >= 0) return result;
    else return -result;
}

processData('20 2\n19.5\n20 22');