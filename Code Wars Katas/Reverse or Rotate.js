/*
The input is a string of digits. Cut the string (i.e. str) into chunks (a chunk here is a substring of the initial string) of size (i.e. sz) 
(ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the 
left by one position. Put together these modified chunks and return the result as a string.

If sz is <= 0 or if str is empty, return "".

If sz is greater than the length of str, it is impossible to take a chunk, hence return "".
*/

// Refer to the README.md for explanation on functions.
// This function runs third.
function cubeSum(str) {
    return str.split('').map(e => Math.pow(Number(e), 3)).reduce((oldVal, newVal) => oldVal += newVal);
}

// This function runs second.
function revrotEach(str) {

    // Runs if the value returned from cubeSum(str) divided by two has no remainder.
    if (cubeSum(str) % 2 === 0) {
        return str.split('').reverse().join('');
    }

    // Runs if the value returned from cubeSum(str) divided by two has a remainder.
    else {
        return str.slice(1) + str.slice(0, 1);
    }
}

// This function runs first.
function revrot(str, sz) {

    // Removes the edge cases if the number is negative, or the number is greater than the string's length.
    if (sz <= 0 || sz > str.length) {
        return '';
    }
    else {
        let arr = [];

        // For loop that goes through every nth value of the str with the nth value determined by sz.
        for (let i = 0; i < str.length; i += sz) {
            arr.push(str.slice(i, i + sz));
        }
        return arr.filter(e => e.length === sz).map(e => revrotEach(e)).join('');
    }
}

console.log(revrot("123456987654", 6));
// "234561876549"

console.log(revrot("123456987653", 6));
// "234561356789"

console.log(revrot("66443875", 4));
// "44668753"

console.log(revrot("66443875", 8));
// "64438756"

console.log(revrot("664438769", 8));
// "67834466"

console.log(revrot("123456779", 8));
// "23456771"

console.log(revrot("", 8));
// ""

console.log(revrot("123456779", 0));
// "" 