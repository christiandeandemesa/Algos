// Given an array A[] of N positive integers. The task is to find the maximum of j - i subjected to the constraint of A[i] < A[j] and i < j.

function maxIndexDiff(A) {
	/*
	left starts at A's first index.
	right starts at A's last index.
	*/
	let left = 0;
	let right = A.length - 1;

	// While left's element is greater than or equal to right's element...
	while (A[left] >= A[right]) {
		// If left's element is greater than the element to the right of it, move left's index to the right.
		if (A[left] > A[left + 1]) left++;
		// If right's element is less than the the element to the left of it, move right's index to the left.
		else if (A[right] < A[right - 1]) right--;
	}

	// Return the difference between the two indices.
	return right - left;
}

console.log(maxIndexDiff([1, 10]));
// 1
console.log(maxIndexDiff([34, 8, 10, 3, 2, 80, 30, 33, 1]));
// 6
