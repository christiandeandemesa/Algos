/*
Given N leaves numbered from 1 to N. A caterpillar at leaf 1, jumps from leaf to leaf in multiples of Aj (Aj, 2Aj, 3Aj).
j is specific to the caterpillar. Whenever a caterpillar reaches a leaf, it eats it a little bit.. You have to find out how many leaves, from 1 to N, are left uneaten 
after all K caterpillars have reached the end. Each caterpillar has its own jump factor denoted by Aj, and each caterpillar starts at leaf number 1.
*/

function uneatenleaves(arr, N) {
	// leafArr will hold all the leaves from number 1 to N.
	let leafArr = [];
	for (let i = 1; i <= N; i++) leafArr.push(i);

	// count will hold the number of leaves that are uneaten.
	let count = 0;
	for (let i = 0; i < leafArr.length; i++) {
		// products will be an array where the current leaf (leafArr[i]) is divided by a different element in arr (num).
		const products = arr.map(num => leafArr[i] / num);

		// If every element in products (num) is not an integer, then the leaf is uneaten so increment count.
		if (products.every(num => !Number.isInteger(num))) count++;
	}
	return count;
}

console.log(uneatenleaves([2, 3, 5], 10));
// 2
