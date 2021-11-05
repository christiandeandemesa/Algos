/*
Given two arrays a and b write a function comp(a, b) that checks whether the two arrays have the "same" elements,
with the same multiplicities. "Same" means, here, that the elements in (b) are the elements in (a) squared, regardless of the order.
*/

const a = [121, 144, 19, 161, 19, 144, 19, 11];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
const c = [132, 14641, 20736, 361, 25921, 361, 20736, 361];
const d = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];
const e = [];

function comp(array1, array2) {

    /*
    Included in case either array has a value of null.
    */
    if(array1 === null || array2 === null) {
        return false;
    }

    /*
    Sorts the arrays in ascending order numerically.
    .sort((a, b) => a - b) takes two numbers (e.g. 121, 144) and subtracts them from each other (e.g. 121 - 144).
    If the result is less than or equal to 0, the numbers stay in the current position.
    If the result is greater than 0, the numbers will switch places.

    => is used in arrow functions, which is a more succinct way to write a function. 
    Below is the original way to write array1.sort((a, b) => a - b);

    array.sort(function(a, b) {
        return a - b;
    });
    */
    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);

    /*
    .map() creates a new array by calling a provided function (e.g. (num => num * num)) on every element in the provided array (e.g. array1).

    .every() returns a boolean (i.e. true or false) based on if every element in the provided array (e.g. array1) passes the provided test
    (e.g. ((num, i) => num === array2[i])).
    */
    return array1.map(num => num * num).every((num, i) => num === array2[i]);
}

console.log(comp(a, b)); // true
console.log(comp(a, c)); // false
console.log(comp(a, d)); // false
console.log(comp(a, e)); // false