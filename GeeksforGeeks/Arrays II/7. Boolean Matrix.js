/*
Given a boolean matrix of size RxC where each cell contains either 0 or 1, modify it such that if a matrix cell matrix[i][j] is 1 then all the cells in its ith row and 
jth column will become 1.
*/

function booleanMatrix(matrix) {
	/*
    rowFlag holds a boolean to determine if the row has at least one 1.
    colFlag holds a boolean to determine if the column has at least one 1.
    */
	let rowFlag = false;
	let colFlag = false;

	// For loop through each element in the two-dimensional array...
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			// If you are in the first row and the current element is 1, change rowFlag to true.
			if (i === 0 && matrix[i][j] === 1) rowFlag = true;

			// If you are in the first column and the current element is 1, change colFlag to true.
			if (j === 0 && matrix[i][j] === 1) colFlag = true;

			// If the current element is 1, then the element in the previous row and column are changed to 1.
			if (matrix[i][j] === 1) {
				matrix[0][j] = 1;
				matrix[i][0] = 1;
			}
		}
	}

	// For loop through each element in the two-dimensional array, if the element in the previous row or column is 1, then change the current element to 1.
	for (let i = 1; i < matrix.length; i++) {
		for (let j = 1; j < matrix[0].length; j++) {
			if (matrix[0][j] === 1 || matrix[i][0] === 1) matrix[i][j] = 1;
		}
	}

	// If rowFlag is true, change every element in the row to 1.
	if (rowFlag === true) {
		for (let i = 0; i < matrix[0].length; i++) matrix[0][i] = 1;
	}

	// If colFlag is true, change every element in the column to 1.
	if (colFlag === true) {
		for (let i = 0; i < matrix.length; i++) matrix[i][0] = 1;
	}

	return matrix;
}

console.log(
	booleanMatrix([
		[1, 0],
		[0, 0]
	])
);
// [[1, 1], [1, 0]]
console.log(
	booleanMatrix([
		[1, 0, 0],
		[1, 0, 0],
		[1, 0, 0],
		[0, 0, 0]
	])
);
// [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1, 0, 0]]
