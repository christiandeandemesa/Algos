/*
We define subsequence as any subset of an array. We define a subarray as a contiguous subsequence in an array.

Given an array, find the maximum possible sum among:
1. all nonempty subarrays.
2. all nonempty subsequences.

Print the two values as space-separated integers on one line.
*/

function maxSubarray(arr) {

    // Instantiates helpArr as an empty array, and sum as the most negative integer in JavaScript.
    let helpArr = [];
    let sum = Number.MIN_SAFE_INTEGER;

    // For each element (num) in arr...
    for(let num of arr) {

        // Push the most negative integer into helpArr.
        helpArr.push(Number.MIN_SAFE_INTEGER);

        // Change sum to be whichever is larger: num plus sum, sum, or num.
        sum = Math.max(num + sum, sum, num);
    }

    // Change the first index in helpArr to be whichever is larger: arr's first index or helpArr's first index.
    helpArr[0] = Math.max(arr[0], helpArr[0]);

    // For loop through each element in arr starting at the second index.
    for(let i = 1; i < arr.length; i++) {

        /*
        Change the element at helpArr's index to be whichever is larger: the element at helpArr's previous index, the element at arr's 
        previous index plus the element at arr's index, or the element at arr's index.
        */
        helpArr[i] = Math.max(helpArr[i - 1], arr[i - 1] + arr[i], arr[i]);

        /*
        Change the element at arr's index to be whichever is larger: the element at arr's previous index plus the element at arr's index,
        or the element at arr's index.
        */
        arr[i] = Math.max(arr[i - 1] + arr[i], arr[i]);
    }

    // Returns the element at helpArr's last index, and sum.
    return [helpArr[arr.length - 1], sum];
}

console.log(maxSubarray([-1, 2, 3, -4, 5, 10]));
// [16, 20]
console.log(maxSubarray([-2, -3, -1, -4, -6]));
// [-1, -1]
console.log(maxSubarray([1, -1, -1, -1, -1, 5]));
// [5, 6]