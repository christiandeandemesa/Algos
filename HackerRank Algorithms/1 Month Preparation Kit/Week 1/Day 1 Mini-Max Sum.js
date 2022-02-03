/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers.
*/

function miniMaxSum(arr) {

    // Sorts the array from lowest to highest numerically.
    arr.sort((a, b) => a - b);
    let min = 0;

    // Sums the first four indices of the array to get the minimum sum.
    for(let i = 0; i < 4; i++) {
        min += arr[i];
    }
    let max = 0;

    // Sums the last four indices of the array to get the maximum sum.
    for(let i = arr.length - 1; i > arr.length - 5; i--) {
        max += arr[i];
    }

    // Removes the edge case of an array with less than 4 indices.
    if(arr.length < 4) console.log('Array must have at least 4 elements');
    else console.log(`Minimum number: ${min}\nMaximum number: ${max}`);
}

miniMaxSum([1, 3, 5, 7, 9]);
/*
'Minimum number: 16
Maximum number: 24'
*/

miniMaxSum([]);
// 'Array must have at least 4 elements'