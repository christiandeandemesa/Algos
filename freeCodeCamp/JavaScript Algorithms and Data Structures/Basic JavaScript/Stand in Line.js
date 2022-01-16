/*
A queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are 
taken off from the front of the queue.

Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.
*/

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

console.log(nextInLine([], 5));
// 5
console.log(nextInLine([], 1));
// 1
console.log(nextInLine([2], 1));
// 2
console.log(nextInLine([5, 6, 7, 8, 9], 1));
// 5