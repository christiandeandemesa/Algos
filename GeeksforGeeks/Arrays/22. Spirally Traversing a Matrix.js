// Given a matrix of size r * c. Traverse the matrix in spiral form.

function spirallyTraverse(matrix) {

    /*
    rowStart will track the vertical sub-arrays, and starts at the array's first index.
    rowEnd also tracks the vertical sub-arrays, and starts at the array's last index.
    colStart will track the horizontal numbers in each sub-array, and starts at their first index.
    colEnd also tracks the horizontal numbers in each sub-array, and starts at the array's first sub-array's last index.
    result will hold the matrix in spiral form.
    */
    let rowStart = 0;
    let rowEnd = matrix.length;
    let colStart = 0;
    let colEnd = matrix[0].length;
    let result = [];

    // While rowStart is less than rowEnd, and colStart is less than colEnd...
    while(rowStart < rowEnd && colStart < colEnd) {

        /*
        This for loop adds numbers from left to right (e.g. [[1, 2, 3], [4, 5, 6], [7, 8, 9]] pushes [1, 2, 3] to result in the first while loop. Later, it pushes [5] to 
        result in the second while loop).
        */
        for(let i = colStart; i < colEnd; i++) {
            result.push(matrix[rowStart][i]);
        }

        // Increments rowStart so we do not add the last element added again (e.g. [[1, 2, 3], [4, 5, 6], [7, 8, 9]] prevents 3 from being added twice).
        rowStart++;

        // This for loop adds numbers from top to bottom (e.g. [[1, 2, 3], [4, 5, 6], [7, 8, 9]] pushes [6] and [9] to result).
        for(let i = rowStart; i < rowEnd; i++) {
            result.push(matrix[i][colEnd - 1]);
        }

        // Decrements colEnd so we do not add the last element added again (e.g. [[1, 2, 3], [4, 5, 6], [7, 8, 9]] prevents 9 from being added twice).
        colEnd--;


        // If rowStart is less than rowEnd...
        if(rowStart < rowEnd) {

            // Adds numbers from right to left (e.g. [[1, 2, 3], [4, 5, 6], [7, 8, 9]] pushes [8, 7] to result).
            for(let i = colEnd - 1; i >= colStart; i--) {
                result.push(matrix[rowEnd - 1][i]);
            }

            // Decrements rowEnd so we do not add the last element added again (e.g. [[1, 2, 3], [4, 5, 6], [7, 8, 9]] prevents 7 from being added twice).
            rowEnd--;
        }

        // If colStart is less than colEnd...
        if(colStart < colEnd) {

            // Adds numbers from bottom to top (e.g. [[1, 2, 3], [4, 5, 6], [7, 8, 9]] pushes [4] to result).
            for(let i = rowEnd - 1; i >= rowStart; i--) {
                result.push(matrix[i][colStart]);
            }

            // Increments colStart so we do not add the last element added again ([[1, 2, 3], [4, 5, 6], [7, 8, 9]] prevents 4 from being added twice)
            colStart++;
        }
    }
    return result;
}

console.log(spirallyTraverse([[1, 2, 3, 4],
                              [5, 6, 7, 8],
                              [9, 10, 11, 12]]));
// [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];
console.log(spirallyTraverse([[1, 2, 3],
                              [4, 5, 6],
                              [7, 8, 9], 
                              [10, 11, 12]]));
// [1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8];