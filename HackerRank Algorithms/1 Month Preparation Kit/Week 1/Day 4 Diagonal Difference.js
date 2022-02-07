/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

[[1, 2, 3],
 [4, 5, 6],
 [9, 8, 9]]

The left-to-right diagonal = 1 + 5 + 9. The right to left diagonal = 3 + 5 + 9. Their absolute difference is |15 - 17| = 2.
*/

function diagonalDifference(arr) {
    let leftDiag = 0;
    let rightDiag = 0;

    // First for loop to go through each subarray of integers in the array.
    for(let i = 0; i < arr.length; i++) {

        // Second for loop to go through each integer in the subarray.
        for(let j = 0; j < arr.length; j++) {

            // All the left to right diagonal integers will have the same i and j (e.g. 1 in the matrix is arr[0][0]).
            if(i === j) leftDiag += arr[i][j];

            /*
            All the right to left diagonal integers will have i's and j's whose sum is equal to the array's length minus 1. (e.g. 9 in the 
            matrix is arr[2][0] and 2 + 0 = 3 - 1).
            */
            if(i + j === arr.length - 1) rightDiag += arr[i][j];
        }
    }

    // Math.abs() converts the given number into its absolute value.
    return Math.abs(leftDiag - rightDiag);
}

console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]]));
// 2