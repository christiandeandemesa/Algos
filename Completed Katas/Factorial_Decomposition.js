/*
The aim of the kata is to decompose n! (factorial n) into its prime factors.

Examples:
n = 12; decomp(12) -> "2^10 * 3^5 * 5^2 * 7 * 11"
since 12! is divisible by 2 ten times, by 3 five times, by 5 two times and by 7 and 11 only once.

n = 22; decomp(22) -> "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19"

n = 25; decomp(25) -> "2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23"

Prime numbers should be in increasing order. When the exponent of a prime is 1 don't put the exponent.

The function is decomp(n) and should return the decomposition of n! into its prime factors in increasing order of the 
primes, as a string.

Factorial can be a very big number (4000! has 12674 digits, n can go from 300 to 4000).
*/

// Refer to the README.md for explanation on functions.
function decomp(n) {
    let primeFactors = {};
    for(let i = 2; i <= n; i++) {

        // nPart is going to be every number from 2 to n.
        let nPart = i;

        // Nested for loop generates numbers to divide nPart with.
        for(let j = 2; nPart > 1; j++) {

            // Adds j as the key and nPart as the value to the primeFactors object.
            while(nPart % j === 0) {
                nPart /= j;

                // Increments the value (nPart) if the key exists, or makes the value 1 if the key is new.
                primeFactors[j] = primeFactors[j] + 1 || 1;
            }
        }
    }

    // Turns the object's key-value pairs into strings, and concatentates them.
    return Object.keys(primeFactors).map(prime => {
        let exponent = primeFactors[prime];
        return prime + (exponent > 1 ? '^' + exponent : '');
    }).join(' * ');
}

console.log(decomp(17));
// "2^8 * 3^6 * 5^3 * 7^2 * 11 * 13 * 17"

console.log(decomp(5));
// "2^3 * 3 * 5"

console.log(decomp(22));
// "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19"

console.log(decomp(14));
// "2^11 * 3^5 * 5^2 * 7^2 * 11 * 13"

console.log(decomp(25));
// "2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23"
