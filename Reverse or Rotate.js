/*
The input is a string of digits. Cut the string (i.e. str) into chunks (a chunk here is a substring of the initial string) of size (i.e. sz) 
(ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the 
left by one position. Put together these modified chunks and return the result as a string.

If sz is <= 0 or if str is empty, return "".

If sz is greater than the length of str, it is impossible to take a chunk, hence return "".
*/

function cubeSum(str) { // This function runs third.

    /*
    .split('') seperates a string into an array where every value (e.g. 'Hi Bob') is an element in the array 
    (e.g. ['H', 'i', ' ', 'B', 'o', 'b']).

    .map() creates a new array by applying the chosen function (e.g. Math.pow(Number(e), 3)) on every element in the array.

    Math.pow() takes two numbers and returns the first number to the power of the second number (e.g. Math.pow(3, 2) = 3^2 = 9).

    Number() tries to convert a string into a number (e.g. Number('1') = 1, but Number('Bob') = NaN).

    .reduce() takes an array (e.g. str.split('')) and performs a callback function with the given function on each element in the array until 
    only a single value is left.
    
    For example:
    str = '0123'
    str.split('') = ['0', '1', '2', '3']
    str.split('').map(e => Math.pow(Number(e), 3)) = ['0', '1', '8', '27']
    str.split('').map(e => Math.pow(Number(e), 3)).reduce((oldVal, newVal) => oldVal += newVal) = 36
    */
    return str.split('').map(e => Math.pow(Number(e), 3)).reduce((oldVal, newVal) => oldVal += newVal);
}

function revrotEach(str) { // This function runs second.

    /*
    If the value returned from cubeSum(str) divided by two has a remainder of 0:

    .split('') seperates the str into an array.

    .reverse() reverses the order of the elements in the array.

    .join('') joins all of the values in an array into a single string without spaces or commas.
    */
    if (cubeSum(str) % 2 === 0) {
        return str.split('').reverse().join('');
    }

    /*
    If str.slice() is given one number, it returns a new array from that number to the last value in the chosen variable (e.g. str).

    If str = '0123', then it would return '123' (str.slice(1)) + '0' (str.slice(0, 1)) which is '1230'.
    */
    else {
        return str.slice(1) + str.slice(0, 1);
    }
}

function revrot(str, sz) { // This function runs first.

    // Returns '' if sz <= 0 or (||) sz > str.length.
    if (sz <= 0 || sz > str.length) {
        return '';
    }

    else {

        // Create an empty array.
        let arr = [];

        // For loop that goes through every nth value of the str with the nth value determined by sz.
        for (let i = 0; i < str.length; i += sz) {

            /*
            .push() adds whatever is in the parentheses to the end of a chosen array (e.g. arr).

            .slice() returns a new array from the first value denoted (e.g. i) to the value right before the second value denoted (e.g. i + sz) 
            from the chosen variable (e.g. str).
            */
            arr.push(str.slice(i, i + sz));
        }

        /*
        .filter() creates a new array with all the elements (e.g. e) that pass the given test (e.g. e.length === sz) within the parentheses.

        .map() creates a new array by applying the chosen function (e.g. revrotEach(e)) on every element in the array.

        .join('') joins all of the values in an array into a single string without spaces or commas.
        */
        return arr.filter(e => e.length === sz).map(e => revrotEach(e)).join('');
    }
}

console.log(revrot("123456987654", 6)); // "234561876549"
console.log(revrot("123456987653", 6)); // "234561356789"
console.log(revrot("66443875", 4)); // "44668753"
console.log(revrot("66443875", 8)); // "64438756"
console.log(revrot("664438769", 8)); // "67834466"
console.log(revrot("123456779", 8)); // "23456771"
console.log(revrot("", 8)); // ""
console.log(revrot("123456779", 0)); // "" 