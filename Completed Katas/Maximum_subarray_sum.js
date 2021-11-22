/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only 
negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

// Refer to the README.md for explanation on functions.
var maxSequence = function (arr) {

    // Removes the edge cases of an empty, or an array with all negative numbers.
    const negNum = arr => arr.every(n => n < 0);
    if(arr.length === 0 || negNum(arr)) {
        return 0;
    }
    let count = 0;
    let result = 0;

    // Increments count as a temporary variable, and makes result equal to count if count is higher than result.
    for(let i = 0; i < arr.length; i++) {
        count += arr[i];
        if(count > result) {
            result = count;
        }

        // If count is a negative number, it resets it to 0 so that it can begin new with the next number in the array.
        if(count < 0) {
            count = 0;
        }
    }
    return result;
}

console.log(maxSequence([]));
// 0

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// 6

console.log(maxSequence([1, 2, 3]));
// 6

console.log(maxSequence([-1, -2, -3]));
// 0