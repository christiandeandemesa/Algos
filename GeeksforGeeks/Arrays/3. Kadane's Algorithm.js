/*
Given an array Arr[] of N integers. Find the contiguous sub-array (containing at least one number) which has the maximum sum and return 
its sum.
*/

function maxSubarraySum(Arr) {

    /*
    N is the array's length.
    maxSum is the largest sum we can possibly get from our contiguous subarray, but we give it an initial value of the greatest negative
    number in JavaScript.
    currSum will keep track of the current sum of any contiguous subarray.
    */
    const N = Arr.length;
    let maxSum = Number.MIN_SAFE_INTEGER;
    let currSum = 0;

    // For loop to go through every index in the array.
    for(let i = 0; i < N; i++) {

        // Adds the number at the current index to currSum.
        currSum += Arr[i];

        // Changes maxSum to be currSum if currSum is larger.
        if(maxSum < currSum) maxSum = currSum;

        /*
        Resets currSum to 0 because if the array is all negative numbers from max to smallest (e.g. [-3, -2, -1]), it will update maxSum in 
        the previous if statement.
        To illustrate what would happen without the below if statement:
        [-3, -2, -1]
        currSum += Arr[0] = -3.
        maxSum = currSum = -3.
        currSum += Arr[1] = -3 + -2 = -5.
        if(maxSum < currSum) = if(-3 < -5) which is false so maxSum will eventually return -3 instead of -1.
        */
        if(currSum < 0) currSum = 0;
    }
    return maxSum;
}

console.log(maxSubarraySum([1, 2, 3, -2, 5]));
// 9
console.log(maxSubarraySum([-1, -2, -3, -4]));
// -1
console.log(maxSubarraySum([-4, -3, -2, -1]));
// -1