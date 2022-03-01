// Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.

function MissingNumber(array) {
    const N = array.length;

    /*
    The sum of all numbers up to a given number is expressed in the formula: N * (N + 1) / 2.
    We use a modified version of the formula: (N + 1) * (N + 2) / 2 because the numbers are indexed at 0 (e.g. arr[0] = 1).
    We use N instead of array[N - 1] because the array is not sorted, so the last index may not be the biggest number.
    */
    let sum = Math.floor((N + 1) * (N + 2) / 2);

    // For loop to go through every index in array, and subtract the number at each index from sum.
    for (let i = 0; i < N; i++) {
        sum -= array[i];
    }

    /*
    The sum we are left is the missing number because we could not remove it since its number did not exist in the array.
    If there is no number missing, sum will be the next number that can be added to the array.
    */
    return sum;
}

console.log(MissingNumber([5, 4, 2, 1]));
// 3
console.log(MissingNumber([2, 3, 4, 5]));
// 1
console.log(MissingNumber([1, 2, 3, 4, 5]));
// 6