/*
You will be given a list of 32 bit unsigned integers. Flip all the bits (1 -> 0 and 0 -> 1) and return the result as an unsigned integer.

n = 9. We're working with 32 bits, so:
00000000000000000000000000001001 in base-2 = 9 in base-10.
11111111111111111111111111110110 in base-2 = 4294967286 in base-10.
*/

function flippingBits(n) {

    // Removes the edge case of an integer greater than 32 bits in base-2.
    if(n > 4294967295) return 'Base-2 form of number is greater than 32 bits';

    /*
    toString() converts a number (n) to a string in base-2 form (2).
    split('') converts the string into an array where each character in an index.
    */
    const baseTwo = n.toString(2).split('');

    // bits is an array that holds 32 elements, and fills each element with 0.
    let bits = new Array(32).fill(0);

    /*
    For loop to go through each index of the baseTwo array.
    */
    for(let i = 0; i < baseTwo.length; i++) {

        // Adds each index in baseTwo to the end of the bits array to mimic number places.
        bits.push(baseTwo[i]);

        // Removes an index from the front of the bits array so that bits will always have a length of 32.
        bits.shift();
    }

    // For loop to go through each index in the bits array.
    for(let i = 0; i < bits.length; i++) {

        /*
        Converts all 1's into 0's and vice versa.
        Notice how we use == instead of === because the 1's and 0's added from baseTwo are strings instead of numbers.
        */
        if(bits[i] == 1) bits[i] = 0;
        else bits[i] = 1;
    }

    // Joins the converted baseTen array into a single string.
    const baseTen = bits.join('');

    /*
    parseInt() takes a string (baseTen) and converts to a number in the specified base (2).
    toString() converts the number into base-ten.
    */
    return parseInt(baseTen, 2).toString(10);
}

console.log(flippingBits(9));
// 4294967286

console.log(parseInt(`11111111111111111111111111111111`, 2).toString(10));
num = 4294967296;
console.log(num.toString(2));
100000000000000000000000000000000
11111111111111111111111111111111