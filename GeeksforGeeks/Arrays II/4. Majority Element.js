/*
Given an array A of N elements. Find the majority element in the array. A majority element in an array A of size N is an element that appears more than N/2 times in the 
array.
*/

function majorityElement(A) {
	// Sorts the array from lowest to highest number.
	let sortArr = [...A].sort((a, b) => a - b);

	/*
    N is the sorted array's length.
    count will hold the amount of the current element.
    maxCount will hold the amount of the element that appears the most.
    temp will hold the number at the previous index.
    element will hold the element that appears the most.
    flag will hold a boolean.
    half is the half the sorted array's length rounded up.
    */
	const N = sortArr.length;
	let count = 1;
	let maxCount = null;
	let temp = sortArr[0];
	let element = null;
	let flag = false;
	const half = Math.ceil(N / 2);

	// For loop through each index in the sorted array, starting at the 1st index since temp starts at the zeroth index...
	for (let i = 1; i < N; i++) {
		// If temp is equal to the element at the current index, increment its count.
		if (temp === sortArr[i]) count++;
		// If temp is not equal to the element at the current index, change temp to be that element and start its count at 1.
		else {
			temp = sortArr[i];
			count = 1;
		}

		// If maxCount is less than count, maxCount is count and element is the element at the current index.
		if (maxCount < count) {
			maxCount = count;
			element = sortArr[i];

			// If maxCount is greater than or equal to half, change the flag to true and break out of the for loop.
			if (maxCount >= half) {
				flag = true;
				break;
			}
		}
	}

	// If flag is true, return the element. Otherwise return the string.
	return flag ? element : `No element appears at least ${half} times`;
}

console.log(majorityElement([1, 2, 3]));
// 'No element appears at least 2 times'
console.log(majorityElement([3, 1, 3, 3, 2]));
// 3
