/* 
Given an array A of N positive numbers. The task is to find the first Equilibium Point in the array. 
Equilibrium Point in an array is a position such that the sum of elements before it is equal to the sum of elements after it.
*/

function equilibriumPoint(A) {

    /*
    N is the length of the array.
    mid is half of the array's length, rounded down.
    leftSum will hold the sum of all of the array's leftmost numbers.
    rightSum will hold the sum of all of the array's rightmost numbers.
    */
    const N = A.length;
    let mid = parseInt(N / 2);
    let leftSum = 0;
    let rightSum = 0;

    // For loop through each index in the array, ending before mid.
    for (let i = 0; i < mid; i++) {

        // Sums all the numbers left of mid.
        leftSum += A[i];
    }
    
    // For loop through each index in the array in reverse, ending at mid.
    for (let j = N - 1; j > mid; j--) {

        // Sums all the numbers at mid, and right of mid.
        rightSum += A[j];
    }

    // If rightSum is greater than leftSum...
    if (rightSum > leftSum) {
    
        // Keep moving mid to the right index until rightSum is equal or less than leftSum, or mid is the last index.
        while (rightSum > leftSum && mid < N - 1) {
            rightSum -= A[mid + 1];
            leftSum += A[mid];
            mid++;
        }
    }

    // If rightSum is less than or equal to leftSum...
    else {

        // Keep moving mid to the left index until rightSum is equal or greater than leftSum, or mid is the first index.
        while (rightSum < leftSum && mid > 0) {
            rightSum += A[mid];
            leftSum -= A[mid - 1];
            mid--;
        }
    }

    // If rightSum is equal to leftSum, return mid plus 1 since arrays are indexed at 0.
    if (rightSum === leftSum) return mid + 1;

    // If rightSum is not equal to leftSum, there is no equilibrium point.
    else return 'There is no equilibrium point';
}

console.log(equilibriumPoint([1, 3, 5, 2, 2]));
// 3
console.log(equilibriumPoint([1, 2, 3, 4, 5]));
// 'There is no equilibrium point'