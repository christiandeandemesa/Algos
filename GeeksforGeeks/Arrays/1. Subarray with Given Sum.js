/*
Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array which adds to a given number S.
*/

function subarraySum(A, S) {

    /*
    A is the array.
    S is the number we want our continguous subarray to sum to.
    N is the length of the array.
    sum is the sum of the contiguous subarray.
    firstIdx is the index of the first element in the contiguous subarray.
    */
    const N = A.length;
    let sum = 0;
    let firstIdx = 0;

    /*
    For loop to go through every element in the array. 
    It is i <= N to deal with edge cases where the last index in the array is the last index in the subarray.
    */
    for(let i = 0; i <= N; i++) {

        /* 
        If sum is greater than S, subtract the first number(s) that was/were added and move the firstIdx to the right.
        It is a while loop for cases where we we want to subtract more than one number (e.g. If A = [1, 2, 4] and S = 4, we have sum = 7 
        because 1 + 2 + 4. We use the while loop to subtract 1 and 2, to get sum = 4 and our subarray is [4]).
        */
        while(sum > S) {
            sum -= A[firstIdx];
            firstIdx++;
        }

        // If sum is equal to S, return the firstIdx and lastIdx.
        if(sum === S) {
            let lastIdx = i - 1;
            return `Subarray from index ${firstIdx} to index ${lastIdx} sums to ${S}`;
        }

        // If sum is less than S, add the number at the current index in array.
        sum += A[i];
    }

    // If the sum is never equal to S, return this string instead.
    return `No contiguous subarray that sums to ${S}`;
}

console.log(subarraySum([1, 2, 3, 7, 5], 12));
// 'Subarray from index 1 to index 3 sums to 12'
console.log(subarraySum([135, 101, 170, 125, 79, 159, 163, 65, 106, 146, 82, 28, 162, 92, 196, 143, 28, 37, 192, 5, 103, 154, 93, 183, 22, 
                         117, 119, 96, 48, 127, 172, 139, 70, 113, 68, 100, 36, 95, 104, 12, 123, 134], 468));
// 'Subarray from index 37 to index 41 sums to 468'
console.log(subarraySum([1, 2], 1));
// 'Subarray from index 0 to index 0 sums to 1'
console.log(subarraySum([25, 1, 1, 1, 1, 30], 31));
// 'Subarray from index 4 to index 5 sums to 31'
console.log(subarraySum([0, 0, 0], 1));
// 'No contiguous subarray that sums to 1'