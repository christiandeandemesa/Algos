/*
Louise and Richard have developed a numbers game. They pick a number and check to see if it is a power of 2. If it is, they divide it by 2. 
If not, they reduce it by the next lower number which is a power of 2. Whoever reduces the number to 1 wins the game. Louise always starts.
Given an initial value, determine who wins the game.
*/

function counterGame(n) {

    // Initializes count to determine whose turn it is.
    let count = 0;

    // While loop while n is greater than 1 since the game ends when n is 1.
    while(n > 1) {

        /*
        Another way to write the below is 2 ** power = n.
        So, power is the exponent of 2 in order to get n, rounded down.
        */
        let power = parseInt(Math.log2(n));

        // max is the number lower than or equal to n that is a power of 2.
        let max = 2 ** power;

        // If max is n, divide n by 2 and round it down.
        if(n === max) n = parseInt(n/2);

        // If max is less than n, subtract max from n.
        else n -= max;
        count++;
    }

    // If it's an even number of turns, Richard wins.
    if(count % 2 === 0) return 'Richard';

    // If it's an odd number of turns, Louise wins.
    else return 'Louise';
}


console.log(counterGame(6));
// 'Richard'
console.log(counterGame(132));
// 'Louise'