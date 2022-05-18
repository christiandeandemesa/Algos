// You are given an array arr[] of N integers including 0. The task is to find the smallest positive number missing from the array.

function missingNumber(arr) {
	/*
    N is arr's length.
    posArr will hold all the positive numbers from arr.
    */
	const N = arr.length;
	let posArr = [];

	// For loop through each number in arr, and if it's positive, add it to posArr.
	for (let i = 0; i < N; i++) {
		if (arr[i] > 0) posArr.push(arr[i]);
	}

	// Sorts all the numbers in posArr from lowest to highest.
	posArr.sort((a, b) => a - b);

	// For loop through each number in posArr, and compares if the current number and the next number are only 1 apart.
	for (let i = 0; i < N; i++) {
		// If they are not 1 apart, return the current number plus 1.
		if (posArr[i + 1] - posArr[i] !== 1) return posArr[i] + 1;
	}
}

console.log(missingNumber([1, 2, 3, 4, 5]));
// 6
console.log(missingNumber([0, -10, 1, 3, -20]));
// 2
