/*
There are two n-element arrays of integers, A and B. Permute them into some A' and B' such that the relation A'[i] + B'[i] >= k holds for 
all i where 0 <= i < n.

There will be q queries consisting of A, B, and k. For each query, return YES if some permutation A', B' satisfying the relation exists. 
Otherwise, return NO.
*/

// k is the minimum number the sum of A[i] + B[i] must reach.
function twoArrays(k, A, B) {

    // Removes the edge case of two different sized arrays.
    if(A.length !== B.length) return 'Cannot calculate because both arrays must be the same length';

    /*
    Sorts A from lowest to highest number, and sorts B from highest to lowest number.
    I sorted it this way as illustrated below:

    A = [1, 2, 3], B = [3, 2, 1], and k = 4.
    A[0] + B[0] = k
    A[1] + B[1] = k
    A[2] + B[2] = k
    */
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    // For loop to go through every element in both arrays, but I chose A arbitrarily.
    for(let i = 0; i < A.length; i++) {

        // Returns NO if any pair summed is less than k.
        if(A[i] + B[i] < k) return 'NO';
    }

    // If every pair summed is greater than or equal to k, return YES.
    return 'YES';
}

console.log(twoArrays(10, [2, 1, 3], [7, 8, 9]));
// 'YES'
console.log(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]));
// 'NO'