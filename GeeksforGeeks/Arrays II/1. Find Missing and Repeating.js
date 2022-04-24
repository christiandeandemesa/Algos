/*
Given an unsorted array Arr of size N of positive integers. One number 'A' from set {1, 2, …N} is missing and one number 'B' occurs twice in array. Find these two 
numbers.
*/

function findTwoElements(arr) {
	// Sorts arr from lowest to highest number.
	const sortArr = [...arr].sort((a, b) => a - b);

	/*
    missingNum will hold the number missing from arr.
    dupeNum will hold the number that appears twice in arr.
    currNum will be the number that is supposed to appear at the current index.
    */
	let missingNum = 0;
	let dupeNum = 0;
	let currNum = 1;

	// For loop through each index in the sorted arr.
	for (let i = 0; i < sortArr.length; i++) {
		// If currNum is not equal to the number at the current index, then that is the missing number.
		if (currNum !== sortArr[i]) missingNum = currNum;
		currNum++;

		// If i is 0, sortArr[i - 1] will be undefined.
		if (i >= 1) {
			// prevNum will be the number at the previous index.
			let prevNum = sortArr[i - 1];

			// If prevNum is equal to the number at the current index, then that is the duplicate number.
			if (prevNum === sortArr[i]) dupeNum = prevNum;
		}
	}

	// If either missingNum or dupeNum is 0, change them to be N/A because they never changed in the for loop.
	if (missingNum === 0) missingNum = 'N/A';
	if (dupeNum === 0) dupeNum = 'N/A';

	return `Missing: ${missingNum} & Duplicate: ${dupeNum}`;
}

console.log(findTwoElements([2, 2]));
// 'Missing: 1 & Duplicate: 2'
console.log(findTwoElements([3, 1, 3]));
// 'Missing: 2 & Duplicate: 3'
console.log(findTwoElements([1, 2, 3]));
// 'Missing: N/A & Duplicate: N/A'
