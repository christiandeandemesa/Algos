// Given an integer array of N elements. You need to find the maximum sum of two elements such that sum is closest to zero.

function closestToZero(arr) {
	/*
    N is the length of arr.
    firstNum will hold the number closest to 0 in arr, but starts at arr's first number.
    secondNum will hold the number second closest to 0 in arr, but starts at arr's second number.
    */
	const N = arr.length;
	let firstNum = arr[0];
	let secondNum = arr[1];

	// For loop through each index in arr starting at the second index.
	for (let i = 2; i < N; i++) {
		// currNum will hold the number at the current index.
		let currNum = arr[i];

		// If the absolute value of firstNum is less than or equal to the absolute value of secondNum...
		if (Math.abs(firstNum) <= Math.abs(secondNum)) {
			// If the absolute value of currNum is less than the absolute value of secondNum, secondNum is currNum.
			if (Math.abs(currNum) < Math.abs(secondNum)) secondNum = currNum;

			// If the absolute value of firstNum is greater than the absolute value of secondNum...
		} else {
			// If the absolute value of currNum is less than the absolute value of firstNum, firstNum is currNum.
			if (Math.abs(currNum) < Math.abs(firstNum)) firstNum = currNum;
		}
	}

	// Return the sum of firstNum and secondNum.
	return firstNum + secondNum;
}

console.log(closestToZero([-8, -66, -60]));
// -68
console.log(closestToZero([-21, -67, -37, -18, 4, -65]));
// -14
