/*
Given a set of N nuts of different sizes and N bolts of different sizes. There is a one-one mapping between nuts and bolts. Match nuts and bolts efficiently.

Comparison of a nut to another nut or a bolt to another bolt is not allowed. It means nut can only be compared with bolt and bolt can only be compared with nut to see 
which one is bigger/smaller.

The elements should follow the following order ! # $ % & * @ ^ ~ .
*/

function matchPairs(nuts, bolts) {
	// Removes the edge case of two different sized arrays.
	if (nuts.length !== bolts.length)
		return 'Both nuts and bolts must have the same number of elements';

	// hash is an empty Map.
	let hash = new Map();

	// For loop through each element in the nuts array...
	for (let i = 0; i < nuts.length; i++) {
		// Sets a key-value pair in hash where the key is current element, and its value is its index.
		hash.set(nuts[i], i);

		// If the current element in the bolts array exists as a key in hash, change the nuts key's value to be bolt's value.
		if (hash.has(bolts[i])) nuts[i] = bolts[i];
	}
	return hash;
}

console.log(matchPairs(['@', '%', '$', '#', '^'], ['%', '@', '#', '$', '^']));
// '# $ % @ ^'
console.log(matchPairs(['@'], []));
// 'Both nuts and bolts must have the same number of elements'
