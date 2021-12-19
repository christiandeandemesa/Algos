// This is an example of the sliding window technique.

// We are going to find the maximum sum of a subarray without window sliding.
function sum(arr, n) {

    // Creates a variable to hold the maximum sum possible.
    let maxSum = 0;

    /*
    For loop to go through the array based on how big the subarray is (i.e. n).
    E.g. If arr = [1, 2, 3, 4] and n = 2, it would loop thrice to cover [1, 2], [2, 3], and [3, 4].
    */
    for(let i = 0; i <= arr.length - n; i++) {

        // Creates a variable to hold the current sum.
        let currSum = 0;

        /*
        For loop to add all the values in the part of the array we are currently in.
        E.g. If we were in [1, 2], it would add to 3. Then we will be in [2, 3] which adds to 5, etc.
        */
        for (let j = i; j < i + n; j++) {
            currSum += arr[j];

            // If currSum is larger than maxSum, maxSum will change to be currSum.
            maxSum = Math.max(currSum, maxSum);
        }
    }
    return maxSum;
}

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
// 17

// Now we are going to solve the same problem using window sliding.
function maxSumArr(arr, n) {
    let maxSum = 0;
    let currSum = 0;

    /*
    For loop to add the first n values of the array.
    E.g. If arr = [1, 2, 3, 4] and n = 3, then it maxSum = 6 (1 + 2 + 3).
    */
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }

    // Sets the currSum to the maxSum as baseline.
    currSum = maxSum;

    // For loop iterates through all the possible sums of n within the array.
    for (let i = n; i < arr.length; i++) {

        /*
        Takes the currSum, subtracts the first value, then adds the following value.
        E.g. The first currSum is the sum of[1, 2, 3]. We subtract the first value to get [2, 3], then we add the following value to get 
        [2, 3, 4]. So instead of adding all the value for each subarray, we are sliding our "window" (i.e. subarray) across the array's 
        values.
        */
        currSum = currSum - arr[i - n] + arr[i];
        maxSum = Math.max(currSum, maxSum);
    }
    return maxSum;
}

// console.log(maxSumArr([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));